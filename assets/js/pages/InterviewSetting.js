const InterviewSetting = `
<div id="setting-wrapper">
  <div id="setting-contents">
    <div id="setting-title">웹캠 / 마이크 테스트</div>
    <div id="setting-desc">본격적인 모의 면접에 앞서 웹캠, 마이크 세팅을 완료해주세요</div>
    <div id="setting-desc">테스트 버튼을 클릭해 녹화가 올바르게 진행되는지 확인해주세요</div>
    <div>
      <video autoplay muted id="record-screen"></video>
      <video id="view-screen"></video>
    </div>
    <div>
      <button id="record-button" class="setting-button">Record Test</button>
      <button id="stop-button" class="setting-button">Stop</button>
      <button id="play-button" class="setting-button">녹화내용 확인</button>
    </div>
    <div>
      <button id="complete-button" class="setting-button router" route="/starter">세팅 완료</button>
    </div>
  </div>
</div>
`

export default InterviewSetting