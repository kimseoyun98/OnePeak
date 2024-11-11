"use client";

import { MessageWithUserInfo } from "@/types/chatType/chatType";
import { useState } from "react";
import Coaching from "./Coaching";

const MyChat = ({ message }: { message: MessageWithUserInfo }) => {
  const [isCoaching, setIsCoaching] = useState<boolean>(false);
  console.log("message1: ", message);
  return (
    <div className="flex flex-col h-auto items-end ">
      {message.type === "audio" ? (
        <div className="flex flex-col gap-4 bg-white">
          <audio controls src={message.content} />
          {!isCoaching ? (
            <button onClick={() => setIsCoaching(true)} className="flex justify-end">
              <span className="pt-2 px-5 rounded-xl bg-secondary-900">AI 코칭</span>
            </button>
          ) : (
            <Coaching message={message.content} />
          )}
        </div>
      ) : (
        <div>텍스트</div>
      )}
    </div>
  );
};

export default MyChat;
