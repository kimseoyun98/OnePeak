import { SignalData } from "@/types/chatType/chatType";
import { RealtimeChannel } from "@supabase/supabase-js";

export class WebRTCService {
  private peerConnection: RTCPeerConnection | null = null;
  private localVideoRef: React.RefObject<HTMLVideoElement>;
  private remoteVideoRef: React.RefObject<HTMLVideoElement>;
  private channel: RealtimeChannel;
  private localStream: MediaStream | null = null;
  private remoteStream: MediaStream | null = null;
  private localMediaRecorder: MediaRecorder | null = null;
  private localAudioChunks: Blob[] = [];

  constructor(
    localVideoRef: React.RefObject<HTMLVideoElement>,
    remoteVideoRef: React.RefObject<HTMLVideoElement>,
    channel: RealtimeChannel
  ) {
    this.localVideoRef = localVideoRef;
    this.remoteVideoRef = remoteVideoRef;
    this.channel = channel;
  }

  async init() {
    // RTCPeerConnection 객체 초기화(구글 STUN 서버)
    const config = { iceServers: [{ urls: "stun:stun.l.google.com:19302" }] };
    this.peerConnection = new RTCPeerConnection(config);

    // 피어에 연결할 수 있는 후보를 검색하는데 사용되는 서비스 == ICE
    this.peerConnection.onicecandidate = async (event) => {
      if (event.candidate) {
        await this.channel.send({
          type: "broadcast",
          event: "ice-candidate",
          candidate: event.candidate
        });
      }
    };

    this.peerConnection.ontrack = (event) => {
      this.remoteStream = event.streams[0];

      if (this.remoteVideoRef.current) {
        this.remoteVideoRef.current.srcObject = this.remoteStream;
      }
    };

    const videoConstraints = {
      width: { ideal: 720 },
      height: { ideal: 1280 },
      frameRate: { ideal: 30, max: 60 },
      aspectRatio: { ideal: 9 / 16 }
    };

    const localStream = await navigator.mediaDevices.getUserMedia({
      video: videoConstraints,
      audio: {
        channelCount: 1,
        sampleRate: 16000
      }
    });
    this.localStream = localStream;
    if (this.localVideoRef.current) {
      this.localVideoRef.current.srcObject = localStream;
    }

    localStream.getTracks().forEach((track) => {
      this.peerConnection?.addTrack(track, localStream);
    });

    this.startLocalRecording(localStream);
  }

  async reset() {
    const handRemoteStrean = !!this.remoteStream;
    // 로컬 미디어 트랙 중지
    if (this.localVideoRef.current && this.localStream) {
      this.localStream.getTracks().forEach((track) => track.stop());
      this.localVideoRef.current.srcObject = null; // 로컬 비디오 요소 초기화
    }

    // 원격 미디어 트랙 중지
    if (handRemoteStrean && this.remoteVideoRef.current && this.remoteStream) {
      // this.remoteStream.getTracks().forEach((track) => track.stop());
      // this.remoteVideoRef.current.srcObject = null; // 원격 비디오 요소 초기화
      this.remoteVideoRef.current.srcObject = this.remoteStream;
      // this.remoteVideoRef.current.play().catch(console.error);
    }

    // 기존의 peerConnection을 닫아 상태 초기화
    if (this.peerConnection) {
      this.peerConnection.close(); // 연결 종료
      this.peerConnection = null; // peerConnection 객체 초기화
    }
  }

  private startLocalRecording(stream: MediaStream) {
    const audioOnlyStream = new MediaStream(stream.getAudioTracks());
    this.localMediaRecorder = new MediaRecorder(audioOnlyStream);
    this.localMediaRecorder.ondataavailable = (event) => {
      if (event.data.size > 0) this.localAudioChunks.push(event.data);
    };
    this.localMediaRecorder.start();
  }

  async stopRecording() {
    return new Promise<Blob>((resolve, reject) => {
      if (!this.localMediaRecorder) {
        reject("No media recorder available");
        return;
      }

      this.localMediaRecorder.onstop = () => {
        if (this.localAudioChunks.length > 0) {
          const localAudioBlob = new Blob(this.localAudioChunks, { type: "audio/webm" });
          resolve(localAudioBlob);
        } else {
          reject("No audio data captured");
        }
      };

      this.localMediaRecorder.stop();
    });
  }

  async createOffer() {
    if (!this.peerConnection) return;

    const offer = await this.peerConnection.createOffer();
    await this.peerConnection.setLocalDescription(offer);
    await this.channel.send({
      type: "broadcast",
      event: "offer",
      sdp: offer
    });
  }

  async handleSignalData(payload: SignalData) {
    if (!this.peerConnection) return;

    const { event, sdp, candidate } = payload;

    if (event === "offer" && sdp) {
      await this.peerConnection.setRemoteDescription(new RTCSessionDescription(sdp));
      const answer = await this.peerConnection.createAnswer();
      await this.peerConnection.setLocalDescription(answer);
      await this.channel.send({
        type: "broadcast",
        event: "answer",
        sdp: answer
      });
    } else if (event === "answer" && sdp) {
      await this.peerConnection.setRemoteDescription(new RTCSessionDescription(sdp));
    } else if (event === "ice-candidate" && candidate) {
      await this.peerConnection.addIceCandidate(new RTCIceCandidate(candidate));
    }
  }

  async closeConnection() {
    this.peerConnection?.close();
    this.peerConnection = null;
    this.localStream?.getTracks().forEach((track) => track.stop());
  }
}
