const Interview = `
<div id="interview-wrapper">
  <div id="interview-contents">
    <div id="problem-contents"></div>
    <div id="timer-and-video">
      <div id="timer-section">
        <div id="timer"> START </div>
        <button id="ans-fin-btn" class="btn-style">답변완료</button>
        <div>
          <button id="play-btn" class="btn-style">녹화본 재생</button>
          <button id="re-record-btn" class="btn-style">재답변</button>
          <button id="next-btn" class="btn-style">다음 문제</button>
          <button id="interview-fin-btn" class="btn-style">면접 끝내기</button>
        </div>
      </div>
      <video autoplay muted id="interview-screen"></video>
      <video id="result-screen"></video>
    </div>
  </div>
</div>
`

export default Interview