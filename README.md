
<h1>외국어 배우고 싶은 사람 다 나한테 말해봐! ONE PEAK </h1>

<br>




![인트로](https://github.com/user-attachments/assets/d6091c81-ee7f-4fd6-91c8-114c585f3cd4)


</div>

<br><br>

# 👨‍🏫 프로젝트 소개

**OnePick** 은 외국어를 배우고 싶은 사람들이 챗봇 및 화상 통화 그리고 퀴즈를 풀며 공부할 수 있는 서비스입니다.

**ONE PEAK**은 '누군가와 소통하고 함께 성장하는 최고의 정점을 향해 나아가자'는 의미를 담아,

‘Someone to speak'와 산봉우리 peak를 결합해 탄생한 이름입니다.

저희와 함께 **챗봇, 화상 통화** 그리고 **퀴즈**를 풀며 외국어 공부하러 가볼까요? 🏃‍♂️💨

<br><br>

# 🔗 배포 링크

| [원픽-ONEPEAK](https://one-peak-dev.vercel.app/) | 📱 모바일 | 🖥️  웹 |
|--------|--------|--------|


<br><br>


# 👨‍👩‍👧‍👦 팀 소개

|                    권다정                    |                    김병엽                    |                     김서연                     |                    박민정                    |                 안수영                 |
| :------------------------------------------: | :------------------------------------------: | :--------------------------------------------: | :------------------------------------------: | :------------------------------------: |
| [@kwondajung](https://github.com/kwondajung) | [@Byoung-yup](https://github.com/Byoung-yup) | [@kimseoyun98](https://github.com/kimseoyun98) | [@mingjeongg](https://github.com/mingjeongg) | [@soo0297](https://github.com/soo0297) |
| AI 튜터 / 메인페이지 / 캘린더 / STT | 전역상태관리 / 화상통화 / 실시간채팅 / STT | 마이페이지 / 챌린지 / PWA / AI프롬프팅 | 관리자페이지 / 1:1문의 / 신고하기 / 미들웨어 | 초기 설정 페이지 / AI코칭 / 오답노트 / TTS |


<br><br>


# 🕰️ 개발 기간
2024/10/18 ~ 2024/11/21 (총 5주)


<br><br>


# 📊 기술적 의사 결정

### **Next.js**

> 서버 사이드 렌더링 (SSR)을 기본적으로 지원해, **페이지 로딩 속도와 SEO 성능을 향상**시킵니다. 또한, 파일 및 폴더 구조로 라우트를 자동 생성해서, 개발을 단순화하고 코드의 가독성을 높이기 때문에 선택하였습니다.

### **TypeScript**

> 코드 작성 시점에 오류를 미리 잡아내어 **안정성과 유지 보수성**을 높여주는 장점이 있기 때문에 선택하였습니다.

### **TanstackQuery**

> 주로 API를 활용하는 서비스이기 때문에, 동일한 데이터에 대한 **불필요한 중복 요청을 줄이기 위하여** 선택하였고, 백그라운드에서 데이터를 업데이트하여 새로고침을 하지 않아도 바로 데이터 반영이 되게끔 하기 위함도 있습니다.

### **Zustand**

> 모바일 사이즈일 때의 UI와 PC 사이즈일 때의 UI가 많이 다른 페이지들이 있는데, **화면 크기의 상태를 관리**하기 위하여 선택했습니다. Redux와 달리 보일러플레이트 없이 간단하게 구현할 수 있으며, Context API와 달리 불필요한 리렌더링이 없다는 장점이 있습니다.

### **Tailwind CSS**

> 별도의 CSS 파일이나 styled-components 없이도 빠르게 스타일링을 할 수 있으며 **클래스명만으로도** 어떤 스타일이 적용되었는지 **직관적**으로 알 수 있다는 장점 때문에 선택하였습니다.

### **open AI API**

> **섬세한 프롬프트 엔지니어링**이 가능하고 **다양한 모델**을 상황에 맞게 선택할 수 있다는 장점이 있습니다. 이 프로젝트에서는 일반적인 AI와 TTS, STT 기능을 지원하는 AI 두 가지가 필요했는데, open AI의 gpt-whisper 모델이 해당 기능을 제공하고 있기 때문에 선택하였습니다. 추가로 안정적인 응답 품질과 많은 레퍼런스들이 있다는 장점도 있습니다.

### **Vercel**

> 저희가 선택한 Next.js가 만든 회사가 Vercel이라 Next.js **프로젝트에 대한 최적화**가 높은 수준으로 지원되며, git 연동을 통한 **자동 배포**, 실시간 분석 등의 기능이 있다는 장점 때문에 선택하였습니다.

### **PWA**

> 모바일 중심의 서비스이기 때문에 사용자의 모바일 디바이스에도 **알림**이 갈 수 있도록 하기 위해 선택하였습니다.

### **WebRTC**

> 실시간 화상 채팅이라는 기능을 위해 **브라우저 간 직접 연결**을 가능하게 하여 비디오, 오디오, 텍스트 데이터 등을 실시간으로 전송할 수 있게 해주는 기술이기 때문에 선택하였습니다.

### **TTS (Text-to-Speech)**

> 이 프로젝트는 Text-to-Speech (TTS) 기능을 사용하여 텍스트를 음성으로 변환할 수 있습니다. 이를 통해 사용자가 텍스트 콘텐츠를 쉽게 들을 수 있으며, 학습을 더욱 직관적이고 효율적으로 할 수 있습니다.

### **STT (Speech-to-Text)**

> Speech-to-Text (STT) 기능을 통해 사용자는 음성으로 입력할 수 있습니다. 이 기능은 사용자의 음성을 실시간으로 텍스트로 변환하여, 보다 직관적인 사용자 경험을 제공합니다.


<br><br>


# 📂 폴더 구조

<details>

  <summary> file tree 열어주세요! </summary>
  
```
📦src
 ┣ 📂api
 ┃ ┣ 📂firstSetting # 첫 회원 설정 관련 API
 ┃ ┃ ┣ 📜fetchLanguageName.ts
 ┃ ┃ ┗ 📜fetchMyLanguage.ts
 ┃ ┣ 📂openAI # OpenAI 관련 API
 ┃ ┃ ┣ 📜gpt.ts
 ┃ ┃ ┣ 📜tts.ts
 ┃ ┃ ┗ 📜whisper.ts
 ┃ ┗ 📂supabase # 데이터베이스 연동 관련 API
 ┃ ┃ ┣ 📜admin.ts
 ┃ ┃ ┣ 📜chat.ts
 ┃ ┃ ┣ 📜getUserClient.ts
 ┃ ┃ ┣ 📜getUserServer.ts
 ┃ ┃ ┣ 📜index.ts
 ┃ ┃ ┣ 📜match.ts
 ┃ ┃ ┗ 📜record.ts
 ┣ 📂app
 ┃ ┣ 📂(desktop) # 어드민 페이지
 ┃ ┃ ┣ 📂admin
 ┃ ┃ ┃ ┣ 📂aiPromptManagement
 ┃ ┃ ┃ ┃ ┗ 📜page.tsx
 ┃ ┃ ┃ ┣ 📂alarmManagement
 ┃ ┃ ┃ ┃ ┗ 📜page.tsx
 ┃ ┃ ┃ ┣ 📂blockManagement
 ┃ ┃ ┃ ┃ ┣ 📂[blockedUserId]
 ┃ ┃ ┃ ┃ ┃ ┗ 📜page.tsx
 ┃ ┃ ┃ ┃ ┗ 📜page.tsx
 ┃ ┃ ┃ ┣ 📂faqManagement
 ┃ ┃ ┃ ┃ ┗ 📜page.tsx
 ┃ ┃ ┃ ┣ 📂languageManagement
 ┃ ┃ ┃ ┃ ┗ 📜page.tsx
 ┃ ┃ ┃ ┣ 📂userManagement
 ┃ ┃ ┃ ┃ ┗ 📜page.tsx
 ┃ ┃ ┃ ┗ 📜page.tsx
 ┃ ┃ ┗ 📜layout.tsx
 ┃ ┣ 📂(mobile)
 ┃ ┃ ┣ 📂attendance
 ┃ ┃ ┃ ┗ 📜page.tsx
 ┃ ┃ ┣ 📂challenge
 ┃ ┃ ┃ ┣ 📂grammar
 ┃ ┃ ┃ ┃ ┣ 📂(quiz)
 ┃ ┃ ┃ ┃ ┃ ┣ 📂English
 ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜page.tsx
 ┃ ┃ ┃ ┃ ┃ ┗ 📂Korean
 ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜page.tsx
 ┃ ┃ ┃ ┃ ┣ 📂result
 ┃ ┃ ┃ ┃ ┃ ┗ 📜page.tsx
 ┃ ┃ ┃ ┃ ┗ 📂wrongAnswerNote
 ┃ ┃ ┃ ┃ ┃ ┗ 📜page.tsx
 ┃ ┃ ┃ ┣ 📂word
 ┃ ┃ ┃ ┃ ┣ 📂(quiz)
 ┃ ┃ ┃ ┃ ┃ ┣ 📂English
 ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜page.tsx
 ┃ ┃ ┃ ┃ ┃ ┗ 📂Korean
 ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜page.tsx
 ┃ ┃ ┃ ┃ ┣ 📂result
 ┃ ┃ ┃ ┃ ┃ ┗ 📜page.tsx
 ┃ ┃ ┃ ┃ ┗ 📂wrongAnswerNote
 ┃ ┃ ┃ ┃ ┃ ┗ 📜page.tsx
 ┃ ┃ ┃ ┗ 📜page.tsx
 ┃ ┃ ┣ 📂chat
 ┃ ┃ ┃ ┣ 📂report
 ┃ ┃ ┃ ┃ ┗ 📜page.tsx
 ┃ ┃ ┃ ┣ 📂room
 ┃ ┃ ┃ ┃ ┣ 📂_components
 ┃ ┃ ┃ ┃ ┃ ┣ 📜Coaching.tsx
 ┃ ┃ ┃ ┃ ┃ ┣ 📜InputField.tsx
 ┃ ┃ ┃ ┃ ┃ ┣ 📜MessageList.tsx
 ┃ ┃ ┃ ┃ ┃ ┣ 📜MyChat.tsx
 ┃ ┃ ┃ ┃ ┃ ┗ 📜OhterChat.tsx
 ┃ ┃ ┃ ┃ ┗ 📜page.tsx
 ┃ ┃ ┃ ┗ 📜page.tsx
 ┃ ┃ ┣ 📂chatbot
 ┃ ┃ ┃ ┗ 📜page.tsx
 ┃ ┃ ┣ 📂lesson
 ┃ ┃ ┃ ┣ 📂room
 ┃ ┃ ┃ ┃ ┗ 📜page.tsx
 ┃ ┃ ┃ ┗ 📜page.tsx
 ┃ ┃ ┣ 📂loginInfo
 ┃ ┃ ┃ ┣ 📂marketingConsent
 ┃ ┃ ┃ ┃ ┗ 📜page.tsx
 ┃ ┃ ┃ ┣ 📂setLearnLanguage
 ┃ ┃ ┃ ┃ ┗ 📜page.tsx
 ┃ ┃ ┃ ┣ 📂setMyLanguage
 ┃ ┃ ┃ ┃ ┗ 📜page.tsx
 ┃ ┃ ┃ ┗ 📂setNickname
 ┃ ┃ ┃ ┃ ┗ 📜page.tsx
 ┃ ┃ ┣ 📂myPage
 ┃ ┃ ┃ ┣ 📂(Detail)
 ┃ ┃ ┃ ┃ ┣ 📂faq
 ┃ ┃ ┃ ┃ ┃ ┗ 📜page.tsx
 ┃ ┃ ┃ ┃ ┣ 📂privacyPolicy
 ┃ ┃ ┃ ┃ ┃ ┗ 📜page.tsx
 ┃ ┃ ┃ ┃ ┣ 📂servicePolicy
 ┃ ┃ ┃ ┃ ┃ ┗ 📜page.tsx
 ┃ ┃ ┃ ┃ ┣ 📂settings
 ┃ ┃ ┃ ┃ ┃ ┗ 📜page.tsx
 ┃ ┃ ┃ ┃ ┗ 📂subscription
 ┃ ┃ ┃ ┃ ┃ ┗ 📜page.tsx
 ┃ ┃ ┃ ┣ 📂editProfile
 ┃ ┃ ┃ ┃ ┗ 📜page.tsx
 ┃ ┃ ┃ ┗ 📜page.tsx
 ┃ ┃ ┣ 📂notifications
 ┃ ┃ ┃ ┗ 📜page.tsx
 ┃ ┃ ┣ 📂review
 ┃ ┃ ┃ ┗ 📜page.tsx
 ┃ ┃ ┣ 📂reviewList
 ┃ ┃ ┃ ┗ 📜page.tsx
 ┃ ┃ ┣ 📜Matching.tsx
 ┃ ┃ ┣ 📜ScreenSizeInitializer.tsx
 ┃ ┃ ┣ 📜layout.tsx
 ┃ ┃ ┗ 📜page.tsx
 ┃ ┣ 📂api
 ┃ ┃ ┣ 📂(challange)
 ┃ ┃ ┃ ┣ 📂fetchGrammarQuiz
 ┃ ┃ ┃ ┃ ┗ 📜route.ts
 ┃ ┃ ┃ ┣ 📂fetchWordQuiz
 ┃ ┃ ┃ ┃ ┗ 📜route.ts
 ┃ ┃ ┃ ┣ 📂getRandomQuiz
 ┃ ┃ ┃ ┃ ┗ 📜route.ts
 ┃ ┃ ┃ ┗ 📂saveUserAnswer
 ┃ ┃ ┃ ┃ ┗ 📜route.ts
 ┃ ┃ ┣ 📂chatBotMessage
 ┃ ┃ ┃ ┗ 📜route.ts
 ┃ ┃ ┣ 📂chatBotSpeechToText
 ┃ ┃ ┃ ┗ 📜route.ts
 ┃ ┃ ┣ 📂chatGeneration
 ┃ ┃ ┃ ┗ 📜route.ts
 ┃ ┃ ┣ 📂speechToText
 ┃ ┃ ┃ ┗ 📜route.ts
 ┃ ┃ ┗ 📂textToSpeech
 ┃ ┃ ┃ ┗ 📜route.ts
 ┃ ┣ 📂auth
 ┃ ┃ ┗ 📂callback
 ┃ ┃ ┃ ┗ 📜route.ts
 ┃ ┣ 📂test
 ┃ ┃ ┗ 📜page.tsx
 ┃ ┣ 📂types
 ┃ ┃ ┗ 📂chatBotType
 ┃ ┃ ┃ ┗ 📜chatBotType.ts
 ┃ ┣ 📜.DS_Store
 ┃ ┣ 📜global-error.tsx
 ┃ ┣ 📜globals.css
 ┃ ┣ 📜layout.tsx
 ┃ ┣ 📜manifest.ts
 ┃ ┗ 📜provider.tsx
 ┣ 📂assets
 ┃ ┣ 📂chat
 ┃ ┃ ┗ 📜dots-three.svg
 ┃ ┣ 📂chatbot
 ┃ ┃ ┗ 📜return.svg
 ┃ ┣ 📂home
 ┃ ┃ ┣ 📜cafe.svg
 ┃ ┃ ┣ 📜food.svg
 ┃ ┃ ┣ 📜mart.svg
 ┃ ┃ ┣ 📜shop.svg
 ┃ ┃ ┣ 📜subway.svg
 ┃ ┃ ┗ 📜trip.svg
 ┃ ┣ 📂lesson
 ┃ ┃ ┣ 📜camera.svg
 ┃ ┃ ┣ 📜lesson-background.svg
 ┃ ┃ ┣ 📜lesson-charactor.svg
 ┃ ┃ ┣ 📜microphone.svg
 ┃ ┃ ┣ 📜power.svg
 ┃ ┃ ┣ 📜prohibit.svg
 ┃ ┃ ┗ 📜tablets-lesson-background.svg
 ┃ ┣ 📂result
 ┃ ┃ ┣ 📜one-point.svg
 ┃ ┃ ┣ 📜three-point.svg
 ┃ ┃ ┣ 📜two-point.svg
 ┃ ┃ ┗ 📜zero-point.svg
 ┃ ┣ 📂wrongAnswerNote
 ┃ ┃ ┗ 📜speaker-high.svg
 ┃ ┣ 📜active-check.svg
 ┃ ┣ 📜app-icon.png
 ┃ ┣ 📜arrow-Up.svg
 ┃ ┣ 📜bell-ringing.svg
 ┃ ┣ 📜calendar.svg
 ┃ ┣ 📜camera-icon.svg
 ┃ ┣ 📜caret-left.svg
 ┃ ┣ 📜caret-up.svg
 ┃ ┣ 📜chal-icon.svg
 ┃ ┣ 📜chall-icon-grammar.svg
 ┃ ┣ 📜chall-icon-word.svg
 ┃ ┣ 📜chat-icon.svg
 ┃ ┣ 📜check-icon.svg
 ┃ ┣ 📜check.svg
 ┃ ┣ 📜close-icon.svg
 ┃ ┣ 📜home-icon.svg
 ┃ ┣ 📜iPhone-13-mini-124.svg
 ┃ ┣ 📜lesson-icon.svg
 ┃ ┣ 📜logo-icon.svg
 ┃ ┣ 📜main-icon.svg
 ┃ ┣ 📜mike.svg
 ┃ ┣ 📜mypage-icon.svg
 ┃ ┣ 📜noactive-check.svg
 ┃ ┣ 📜not-answer.svg
 ┃ ┣ 📜rectangle-120.svg
 ┃ ┣ 📜rectangle-123.svg
 ┃ ┣ 📜rectangle-125.svg
 ┃ ┣ 📜report-icon.svg
 ┃ ┣ 📜send.svg
 ┃ ┣ 📜stamp.svg
 ┃ ┣ 📜star.svg
 ┃ ┗ 📜user-icon.svg
 ┣ 📂components
 ┃ ┣ 📂admin
 ┃ ┃ ┣ 📂blockManagement
 ┃ ┃ ┃ ┗ 📜BlcokedUserTable.tsx
 ┃ ┃ ┣ 📂languageManagement
 ┃ ┃ ┃ ┣ 📜AddLanguageForm.tsx
 ┃ ┃ ┃ ┗ 📜LanguageTable.tsx
 ┃ ┃ ┣ 📂usersManagement
 ┃ ┃ ┃ ┗ 📜UsersTable.tsx
 ┃ ┃ ┗ 📜PageNationUI.tsx
 ┃ ┣ 📂audio
 ┃ ┃ ┗ 📜Audio.tsx
 ┃ ┣ 📂calendar
 ┃ ┃ ┣ 📜Calendar.tsx
 ┃ ┃ ┣ 📜CalendarHeader.tsx
 ┃ ┃ ┣ 📜DateGrid.tsx
 ┃ ┃ ┗ 📜DayHeader.tsx
 ┃ ┣ 📂challenge
 ┃ ┃ ┣ 📜FetchGrammarQuizButton.tsx
 ┃ ┃ ┣ 📜FetchWordQuizButton.tsx
 ┃ ┃ ┣ 📜Quiz.tsx
 ┃ ┃ ┣ 📜RandomEnglishGrammarQuiz.tsx
 ┃ ┃ ┣ 📜RandomEnglishWordQuiz.tsx
 ┃ ┃ ┣ 📜RandomKoreanGrammarQuiz.tsx
 ┃ ┃ ┗ 📜RandomKoreanWordQuiz.tsx
 ┃ ┣ 📂chat
 ┃ ┃ ┣ 📜chat.tsx
 ┃ ┃ ┗ 📜overlay.tsx
 ┃ ┣ 📂chatBot
 ┃ ┃ ┣ 📂aiTutorHome
 ┃ ┃ ┃ ┣ 📜CustomizedLearn.tsx
 ┃ ┃ ┃ ┣ 📜Reviewing.tsx
 ┃ ┃ ┃ ┗ 📜TodayLearn.tsx
 ┃ ┃ ┣ 📂chat
 ┃ ┃ ┃ ┣ 📜ChatInput.tsx
 ┃ ┃ ┃ ┗ 📜ChatMessageList.tsx
 ┃ ┃ ┗ 📂review
 ┃ ┃ ┃ ┣ 📜ReviewItem.tsx
 ┃ ┃ ┃ ┗ 📜ReviewList.tsx
 ┃ ┣ 📂myPage
 ┃ ┃ ┣ 📜LanguageSelectorDropDown.tsx
 ┃ ┃ ┗ 📜UserProfile.tsx
 ┃ ┣ 📂nav
 ┃ ┃ ┗ 📜Navibar.tsx
 ┃ ┣ 📂newCalendar
 ┃ ┃ ┗ 📜NewCalendar.tsx
 ┃ ┣ 📂notificationPopup
 ┃ ┃ ┣ 📜NotificationBell.tsx
 ┃ ┃ ┗ 📜NotificationPopup.tsx
 ┃ ┣ 📂setNotification
 ┃ ┃ ┗ 📜IsNotificated.tsx
 ┃ ┣ 📂ui
 ┃ ┃ ┣ 📂button
 ┃ ┃ ┃ ┗ 📜index.tsx
 ┃ ┃ ┣ 📂chat
 ┃ ┃ ┃ ┣ 📂myChat
 ┃ ┃ ┃ ┃ ┗ 📜MyChatCard.tsx
 ┃ ┃ ┃ ┗ 📂otherChat
 ┃ ┃ ┃ ┃ ┗ 📜OtherChatCard.tsx
 ┃ ┃ ┣ 📂chatUserProfile
 ┃ ┃ ┃ ┗ 📜index.tsx
 ┃ ┃ ┣ 📂footer
 ┃ ┃ ┃ ┗ 📜Footer.tsx
 ┃ ┃ ┣ 📂header
 ┃ ┃ ┃ ┣ 📜Header.tsx
 ┃ ┃ ┃ ┗ 📜HeaderTop.tsx
 ┃ ┃ ┣ 📂icon
 ┃ ┃ ┃ ┣ 📜Icons.tsx
 ┃ ┃ ┃ ┗ 📜index.tsx
 ┃ ┃ ┣ 📂reviewContent
 ┃ ┃ ┃ ┗ 📜index.tsx
 ┃ ┃ ┣ 📂toggle
 ┃ ┃ ┃ ┗ 📜notificationToggle.tsx
 ┃ ┃ ┣ 📂typography
 ┃ ┃ ┃ ┗ 📜index.tsx
 ┃ ┃ ┣ 📂userProfile
 ┃ ┃ ┃ ┗ 📜index.tsx
 ┃ ┃ ┣ 📜LoadingSpinner.tsx
 ┃ ┃ ┣ 📜NavbarGnb.tsx
 ┃ ┃ ┣ 📜NoIconHeader.tsx
 ┃ ┃ ┣ 📜SpinnerButton.tsx
 ┃ ┃ ┣ 📜WithIconHeader.tsx
 ┃ ┃ ┣ 📜card.tsx
 ┃ ┃ ┗ 📜chart.tsx
 ┃ ┣ 📂wrongAnswer
 ┃ ┃ ┣ 📜GrammarList.tsx
 ┃ ┃ ┗ 📜WordList.tsx
 ┃ ┣ 📜AccordionItem.tsx
 ┃ ┣ 📜BottomSheetModal.tsx
 ┃ ┣ 📜ChatModal.tsx
 ┃ ┣ 📜CountriesSelect.tsx
 ┃ ┣ 📜CountrySelect.tsx
 ┃ ┗ 📜MaterialTailwindWrapper.tsx
 ┣ 📂constants
 ┃ ┗ 📜aiPrompt.ts
 ┣ 📂hooks # 커스텀 훅
 ┃ ┣ 📜getUserInfo.ts
 ┃ ┣ 📜useAudioRecorder.ts
 ┃ ┣ 📜useCallerCallee.ts
 ┃ ┣ 📜useChatMessages.ts
 ┃ ┣ 📜useConversation.ts
 ┃ ┣ 📜useGrammarQuestions.ts
 ┃ ┣ 📜useLanguages.ts
 ┃ ┣ 📜useMatching.ts
 ┃ ┣ 📜useMessage.ts
 ┃ ┣ 📜useNotifications.ts
 ┃ ┣ 📜useProblems.ts
 ┃ ┣ 📜useQuiz.ts
 ┃ ┣ 📜useSlider.ts
 ┃ ┣ 📜useSubscription.ts
 ┃ ┣ 📜useUpdateIsReviewed.ts
 ┃ ┣ 📜useUpdateProfile.ts
 ┃ ┣ 📜useUser.ts
 ┃ ┣ 📜useUserInfo.ts
 ┃ ┣ 📜useUserProfile.ts
 ┃ ┣ 📜useUserWrongAnswers.ts
 ┃ ┣ 📜useWebRTC.ts
 ┃ ┗ 📜useWordQuestions.ts
 ┣ 📂lib
 ┃ ┗ 📜utils.ts
 ┣ 📂services
 ┃ ┣ 📜matchingService.ts
 ┃ ┣ 📜supabaseAuth.ts
 ┃ ┣ 📜supabaseChatbot.ts
 ┃ ┗ 📜webrtcService.ts
 ┣ 📂shared
 ┃ ┣ 📜StoreProvider.tsx
 ┃ ┗ 📜screen-store-provider.tsx
 ┣ 📂stores # 상태 관리 (Zustand)
 ┃ ┣ 📜matching-store.ts
 ┃ ┗ 📜screen-store.ts
 ┣ 📂stories
 ┃ ┣ 📂assets
 ┃ ┃ ┣ 📜accessibility.png
 ┃ ┃ ┣ 📜accessibility.svg
 ┃ ┃ ┣ 📜addon-library.png
 ┃ ┃ ┣ 📜assets.png
 ┃ ┃ ┣ 📜avif-test-image.avif
 ┃ ┃ ┣ 📜context.png
 ┃ ┃ ┣ 📜discord.svg
 ┃ ┃ ┣ 📜docs.png
 ┃ ┃ ┣ 📜figma-plugin.png
 ┃ ┃ ┣ 📜github.svg
 ┃ ┃ ┣ 📜share.png
 ┃ ┃ ┣ 📜styling.png
 ┃ ┃ ┣ 📜testing.png
 ┃ ┃ ┣ 📜theming.png
 ┃ ┃ ┣ 📜tutorials.svg
 ┃ ┃ ┗ 📜youtube.svg
 ┃ ┣ 📜Button.stories.ts
 ┃ ┣ 📜Button.tsx
 ┃ ┣ 📜Configure.mdx
 ┃ ┣ 📜Header.stories.ts
 ┃ ┣ 📜Header.tsx
 ┃ ┣ 📜Page.stories.ts
 ┃ ┣ 📜Page.tsx
 ┃ ┣ 📜button.css
 ┃ ┣ 📜header.css
 ┃ ┗ 📜page.css
 ┣ 📂types
 ┃ ┣ 📂chatType
 ┃ ┃ ┗ 📜chatType.ts
 ┃ ┣ 📂userType
 ┃ ┃ ┗ 📜userType.ts
 ┃ ┗ 📜wrongAnswerNote.ts
 ┣ 📂utils
 ┃ ┣ 📂chatbot
 ┃ ┃ ┣ 📜chatBotApi.ts
 ┃ ┃ ┗ 📜date.ts
 ┃ ┣ 📂formatting
 ┃ ┃ ┗ 📜format.ts
 ┃ ┣ 📂media
 ┃ ┃ ┗ 📜index.ts
 ┃ ┣ 📂myPage
 ┃ ┃ ┣ 📜cancelAccount.ts
 ┃ ┃ ┣ 📜imageUpload.ts
 ┃ ┃ ┣ 📜logout.ts
 ┃ ┃ ┗ 📜updateLanguage.ts
 ┃ ┣ 📂notifications
 ┃ ┃ ┗ 📜pushSubscription.ts
 ┃ ┣ 📂supabase
 ┃ ┃ ┣ 📜client.ts
 ┃ ┃ ┣ 📜middleware.ts
 ┃ ┃ ┗ 📜server.ts
 ┃ ┗ 📜randomNumber.ts
 ┣ 📜.DS_Store
 ┣ 📜middleware.ts
 ┗ 📜type.ts
```
</details>


<br><br>


# 🧩 주요 기능

- 사용자 인증:
> 로그인, 회원가입, 프로필 관리 기능
<br>

- 개인화된 학습:
> 사용자 맞춤형 학습 경로와 퀴즈 제공
<br>

- PWA 지원:
> 오프라인 사용, 빠른 로딩, 홈 화면 추가 기능
<br>

- 푸시 알림:
> 새로운 학습 자료나 알림을 푸시 알림으로 제공
<br>

- 반응형 디자인:
> 데스크톱과 모바일에서 최적화된 화면 제공
<br>

- 음성 관련 기능:
> TTS (Text-to-Speech): 텍스트를 음성으로 변환하여 사용자에게 읽어줍니다.

> STT (Speech-to-Text): 음성을 텍스트로 변환하여 사용자의 입력을 받습니다.


<br><br>


# 🪄 페이지 구성


![ai 튜터](https://github.com/user-attachments/assets/81aa831d-6ba7-409b-9a94-0d46566994e0)

- **AI 튜터**:
> 1. 난이도별로 무작위 회화 주제를 보여줍니다.
> 2. 원하는 주제 선택 시 AI 튜터에게 선택한 주제와 관련된 회화를 배울 수 있습니다.
> 3. 마이크를 통해 발음 연습을 할 경우 AI 튜터에게 피드백을 받을 수 있습니다.
> 4. 캘린더에서 날짜 클릭 시 해당 날짜에 AI 튜터와 나눴던 대화를 확인할 수 있습니다.
<br>


![언어수업](https://github.com/user-attachments/assets/925bb6d0-b7d6-4384-abc6-a040fc5d0408)

- **언어수업**:
> 1. 매칭하기 클릭 시 아래 두 가지 조건에 모두 해당되는 사용자와 매칭이 되어 화상으로 언어 수업을 받을 수 있습니다. 
> a. 나의 모국어가 상대방의 배우고 싶은 언어일 경우
> b. 나의 배우고 싶은 언어가 상대방의 모국어일 경우
<br>


![채팅창 수정버전](https://github.com/user-attachments/assets/e92ea8be-d66e-45aa-928e-b1fe44566dae)

- **채팅방**:
> 1. 언어 수업에서 나눴던 대화의 녹음본을 채팅방에서 확인할 수 있습니다.
> 2. 녹음본 선택 시 AI가 텍스트로 피드백을 해줍니다.
<br>

![챌린지](https://github.com/user-attachments/assets/07fe3db3-247c-4563-901b-fce26a589178)

- **챌린지/오답노트**:
> 1. AI가 생성한 무작위의 단어 및 문법 퀴즈를 풀 수 있습니다.
> 2. 사용자가 선택한 답에 대한 해설을 바로 확인할 수 있습니다.
> 3. 퀴즈에서 틀렸던 내용을 오답노트에서 확인할 수 있습니다.
> 4. 단어 오답노트의 경우 해당 단어 클릭 시 발음을 들을 수 있습니다.
<br>


![어드민2](https://github.com/user-attachments/assets/02c4418e-41b9-42eb-9a1d-b821ba3d52af)

- **내정보**:
> 내 프로필/ 언어변경/ 알림 허용/ 로그아웃/ 회원탈퇴/ 1:1 문의하기/ 구독관리/ 정책/ 약관

- **관리자페이지**:
> 1. 3번 이상 다른 사용자들에게 차단당한 사용자의 이용을 정지시킬 수 있습니다.
> 2. 서비스에서 지원하는 언어를 추가할 수 있습니다.
> 3. 사용자들의 상태를 관리할 수 있습니다.
> 4. 사용자들에게 알림을 발송할 수 있습니다.

<br><br>


# 🧪 Technologies & Tools

## 📋 Languages

![javascript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=JavaScript&logoColor=white)
![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)

## 📚 Frameworks, Platforms and Libraries

![Next JS](https://img.shields.io/badge/Next-black?style=for-the-badge&logo=next.js&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Yarn](https://img.shields.io/badge/yarn-%232C8EBB.svg?style=for-the-badge&logo=yarn&logoColor=white)

## 💾 Databases

![Supabase](https://img.shields.io/badge/Supabase-3ECF8E?style=for-the-badge&logo=supabase&logoColor=white)

## 🎨 Design

![figma](https://img.shields.io/badge/Figma-F24E1E?style=for-the-badge&logo=figma&logoColor=white)

## ☁️ Hosting/SaaS

![vercel](https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white)
![pwa](https://img.shields.io/badge/Pwa-000000?style=for-the-badge&logo=pwa&logoColor=white)

## 💻 IDEs/Editors

![vscode](https://img.shields.io/badge/Visual_Studio_Code-0078D4?style=for-the-badge&logo=visual%20studio%20code&logoColor=white)

## 🕓 Version Control

![git](https://img.shields.io/badge/GIT-E44C30?style=for-the-badge&logo=git&logoColor=white)
![github](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white)

## 💬 Social

![slack](https://img.shields.io/badge/Slack-4A154B?style=for-the-badge&logo=slack&logoColor=white)

## 🥅 Other

![notion](https://img.shields.io/badge/Notion-000000?style=for-the-badge&logo=notion&logoColor=white)
![prettier](https://img.shields.io/badge/prettier-1A2C34?style=for-the-badge&logo=prettier&logoColor=F7BA3E)
