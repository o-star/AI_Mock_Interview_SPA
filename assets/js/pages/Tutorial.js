const Tutorial = `
<div id="tutorial-wrapper">
  <div id="tutorial-contents">
    <div id="tutorial-title">Tutorial</div>
    <div id="sub-desc">AI 면접에 들어가기 앞서 기초 환경 세팅과 주의사항을 숙지해주세요</div>
    <div id="tutorial-section">
      <div class="tutorial-button" id="left-button">&#60;</div>
      <div id="tutorial-content">
        <ul id="slidebox">
          <li>
            <div class="slide-item">
              <div class="slide-text">얼굴 전체가 화면에 들어오게 캠을 조정하세요</div>
              <img class="img-style" id="face-img1" src="./assets/images/face1.png" alt="FACE1">
              <div class="slide-text">너무 가깝거나 멀다면 얼굴 식별이 힘들 수 있어요!</div>
            </div>
          </li>
          <li>
            <div class="slide-item">
              <div class="slide-text">얼굴 전체가 나오더라도 측면을 비추는 방향으로 캠을 두지 마십시오</div>
              <div>
                <img class="img-style" src="./assets/images/sideface1.svg" alt="SIDEFACE1">
                <img class="img-style" src="./assets/images/sideface2.svg" alt="SIDEFACE2">
              </div>
              <div class="slide-text">면접이 진행되는 중에도 얼굴의 측면이 아닌 정면을 잘 비출 수 있도록 캠을 신경써주세요!</div>
            </div>
          </li>
          <li>
            <div class="slide-item">
              <div class="slide-text">질문에 대한 답변이 잘 녹화, 녹음될 수 있도록 유의하세요</div>
              <img id="record-img" src="./assets/images/recordimg.svg" alt="RECORD">
              <div class="slide-text">잡음이 발생할 수 있는 주변 환경을 피하고 큰 목소리를 유지해 주세요!</div>
            </div>
          </li>
        </ul>
      </div>
      <div class="tutorial-button" id="right-button">&#62;</div>
    </div>
    <button class="router" id="next-button" route="/setting">확인 완료</button>
  </div>
</div>
`

export default Tutorial