/*! For license information please see build.js.LICENSE.txt */
(()=>{"use strict";var n={446:(n,t,i)=>{i.d(t,{Z:()=>r});var e=i(645),o=i.n(e)()((function(n){return n[1]}));o.push([n.id,"#home-wrapper {\n  /* background-image: url('../images/index_background.jpg'); */\n  background-size: cover;\n  background-repeat: no-repeat;\n}\n\n#main-content {\n  padding-top: 10vh;\n  text-align: center;\n}\n\n#main-title {\n  font-size: 1.9rem;\n  font-weight: 600;\n  color: rgb(75, 73, 73);\n  animation: main-ani 1000ms 300ms ease forwards;\n  opacity: 0;\n}\n\n#sub-description {\n  padding-top: 1vh;\n  color: rgb(109, 105, 105);\n  animation: main-ani 1000ms 700ms ease forwards;\n  opacity: 0;\n}\n\n#button-section {\n  padding-top: 1.5vh;\n  animation: main-ani 1000ms 1100ms ease forwards;\n  opacity: 0;\n}\n\n.button-item {\n  padding-top : 2vh;\n}\n\n.button-style {\n  width: 20vw;\n  height: 5vh;\n  font-size: 1.15rem;\n  background-color: #bdd2b6;\n  color: rgb(75, 73, 73);\n  border-radius: 8px;\n  border: none;\n  cursor: pointer;\n}\n\n.button-style:hover {\n  background-color: #91c788;\n  color: rgb(26, 25, 25);\n  box-shadow: 0px 0px 10px 0px rgb(105, 105, 105);\n}\n\n.button-style:focus {\n  outline: none;\n}\n\n@keyframes main-ani {\n  from{\n      opacity: 0;\n      transform: translateY(3vh);\n  }\n  to{\n      opacity: 1;\n      transform: translateY(0);\n  }\n}\n",""]);const r=o},645:n=>{n.exports=function(n){var t=[];return t.toString=function(){return this.map((function(t){var i=n(t);return t[2]?"@media ".concat(t[2]," {").concat(i,"}"):i})).join("")},t.i=function(n,i,e){"string"==typeof n&&(n=[[null,n,""]]);var o={};if(e)for(var r=0;r<this.length;r++){var s=this[r][0];null!=s&&(o[s]=!0)}for(var a=0;a<n.length;a++){var d=[].concat(n[a]);e&&o[d[0]]||(i&&(d[2]?d[2]="".concat(i," and ").concat(d[2]):d[2]=i),t.push(d))}},t}},379:n=>{var t=[];function i(n){for(var i=-1,e=0;e<t.length;e++)if(t[e].identifier===n){i=e;break}return i}function e(n,e){for(var r={},s=[],a=0;a<n.length;a++){var d=n[a],c=e.base?d[0]+e.base:d[0],v=r[c]||0,u="".concat(c," ").concat(v);r[c]=v+1;var l=i(u),m={css:d[1],media:d[2],sourceMap:d[3]};-1!==l?(t[l].references++,t[l].updater(m)):t.push({identifier:u,updater:o(m,e),references:1}),s.push(u)}return s}function o(n,t){var i=t.domAPI(t);return i.update(n),function(t){if(t){if(t.css===n.css&&t.media===n.media&&t.sourceMap===n.sourceMap)return;i.update(n=t)}else i.remove()}}n.exports=function(n,o){var r=e(n=n||[],o=o||{});return function(n){n=n||[];for(var s=0;s<r.length;s++){var a=i(r[s]);t[a].references--}for(var d=e(n,o),c=0;c<r.length;c++){var v=i(r[c]);0===t[v].references&&(t[v].updater(),t.splice(v,1))}r=d}}},569:n=>{var t={};n.exports=function(n,i){var e=function(n){if(void 0===t[n]){var i=document.querySelector(n);if(window.HTMLIFrameElement&&i instanceof window.HTMLIFrameElement)try{i=i.contentDocument.head}catch(n){i=null}t[n]=i}return t[n]}(n);if(!e)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");e.appendChild(i)}},216:n=>{n.exports=function(n){var t=document.createElement("style");return n.setAttributes(t,n.attributes),n.insert(t),t}},565:(n,t,i)=>{n.exports=function(n){var t=i.nc;t&&n.setAttribute("nonce",t)}},795:n=>{n.exports=function(n){var t=n.insertStyleElement(n);return{update:function(i){!function(n,t,i){var e=i.css,o=i.media,r=i.sourceMap;o?n.setAttribute("media",o):n.removeAttribute("media"),r&&"undefined"!=typeof btoa&&(e+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(r))))," */")),t.styleTagTransform(e,n)}(t,n,i)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(t)}}}},589:n=>{n.exports=function(n,t){if(t.styleSheet)t.styleSheet.cssText=n;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(n))}}}},t={};function i(e){var o=t[e];if(void 0!==o)return o.exports;var r=t[e]={id:e,exports:{}};return n[e](r,r.exports,i),r.exports}i.n=n=>{var t=n&&n.__esModule?()=>n.default:()=>n;return i.d(t,{a:t}),t},i.d=(n,t)=>{for(var e in t)i.o(t,e)&&!i.o(n,e)&&Object.defineProperty(n,e,{enumerable:!0,get:t[e]})},i.o=(n,t)=>Object.prototype.hasOwnProperty.call(n,t),(()=>{var n=i(379),t=i.n(n),e=i(795),o=i.n(e),r=i(569),s=i.n(r),a=i(565),d=i.n(a),c=i(216),v=i.n(c),u=i(589),l=i.n(u),m=i(446),p={};p.styleTagTransform=l(),p.setAttributes=d(),p.insert=s().bind(null,"head"),p.domAPI=o(),p.insertStyleElement=v(),t()(m.Z,p),m.Z&&m.Z.locals&&m.Z.locals;const f=document.querySelector("#root"),h={"/":'\n<div id="home-wrapper">\n  <div id="main-content">\n    <div id="main-title">AI MOCK INTERVIEW SYSTEM</div>\n    <div id="sub-description">AI 모의 면접 트레이닝을 통해 당신의 면접을 함께 준비해드리겠습니다</div>\n    <div id="button-section">\n      <div class="button-item">\n        <button class="button-style router" route="/introduction">Introduction</button>\n      </div>\n      <div class="button-item">\n        <button class="button-style router" route="/interview">Interview Start</button>\n      </div>\n      <div class="button-item">\n        <button class="button-style router" route="/job-infos">Other Job Infos</button>\n      </div>\n    </div>\n  </div>\n</div>\n',"/introduction":"\n<div id='main-header'>\n<div id='main-title'>Introduction</div>\n<div id='sub-title'>AI MOCK INTERVIEW SYSTEM</div>\n<div id='scroll-guide'>scroll<div>▽</div>\n</div>\n</div>\n<div id='first-section'>\n<div class='text-section'>\n    <h2>코로나의 영향으로 많은 기업들의 AI 면접 시스템 도입</h2>\n    <h4>노트북 세팅을 시작으로 간단한 구술 면접을 시뮬레이션 해볼 수 있는 시스템 제공</h4>\n    <h4>로그인 과정 없이 간단한 웹페이지 접속만으로 모의 면접 체험 가능</h4>\n</div>\n<div class='img-section wow slideInRight'>\n    <img id='interview-img' src=\"./assets/images/job_interview.svg\" alt=\"JOB_INTERVIEW\">\n</div>\n</div>\n<div id='second-section'>\n<div class=\"img-section wow slideInLeft\">\n    <img id='questions-img' src=\"./assets/images/question_list.png\" alt=\"QUESTIONLIST\">\n</div>\n<div class=\"text-section\">\n    <h2>다양한 질문 항목들을 통해 면접 대비 가능</h2>\n    <h4>비전, 기업 적합도, 성격, 가치관, 창의력 질문 카테고리 구성</h4>\n    <h4>AI 면접 뿐만 아니라 일반 대면 면접 질문까지 준비 가능</h4>\n</div>\n</div>\n<div id=\"third-section\">\n<div class='text-section'>\n    <h2>반복 시뮬레이션을 통해 효과적인 면접 준비</h2>\n    <h4>한 질문 항목에 대해 여러 번 녹화를 하며 재답변 가능</h4>\n    <h4>녹화 영상을 확인해 즉각적인 답변 내용 체크 가능</h4>\n    <h4>랜덤 선택된 문제 답변 시뮬레이션을 통해 순발력 상승 효과 기대</h4>\n</div>\n<div class='img-section wow slideInRight'>\n    <img id='interview-screen' src=\"./assets/images/interview_screen.png\" alt=\"INTERVIEWSCREEN\">\n</div>\n</div>\n","/job-infos":'\n<div id="main-header">\n<div class="wow bounce">채용 정보 사이트 소개</div>\n</div>\n<ul id="main-contents">\n<li style="animation: fadeIn 1s 0.3s forwards">\n    <div>\n        <img src="./assets/images/jobplanet.png" alt="jobplanet" width="200px">\n    </div>\n    <div class="text-section">\n        <div class="site-name">Jobplanet</div>\n        <div>\n            구체적인 기업 리뷰, 연봉, 채용 공고를 보다 세부적으로 확인해볼 수 있어 매우 유용\n        </div>\n        <div>\n            경북대학교와 제휴가 맺어져 있어 경북대학교 이메일로 회원가입 시 회원 서비스를 이용할 수 있음\n        </div>\n    </div>\n</li>\n<li style="animation: fadeIn 1s 0.6s forwards">\n    <div>\n        <img src="./assets/images/saramin.png" alt="saramin" width="200px">\n    </div>\n    <div class="text-section">\n        <div class="site-name">saramin</div>\n        <div>\n            기업 정보, 연봉 정보 제공은 물론 1000대기업 공채 및 맞춤 공채 정보를 제공\n        </div>\n        <div>\n            개인 채용 선택 정보를 입력 시, 관련 채용 공고를 분석해 메일로 제공\n        </div>\n    </div>\n</li>\n<li style="animation: fadeIn 1s 0.9s forwards">\n    <div>\n        <img src="./assets/images/jobkorea.png" alt="jobkorea" width="200px">\n    </div>\n    <div class="text-section">\n        <div class="site-name">JobKorea</div>\n        <div>\n            기업별 공채 전략 및 기업 분석 보고서 제공 및 다양한 채용 정보 제공\n        </div>\n        <div>\n            AI 면접 등과 같은 최신 채용 정보 다수 제공\n        </div>\n    </div>\n</li>\n<li style="animation: fadeIn 1s 1.2s forwards">\n    <div>\n        <img src="./assets/images/incruit.png" alt="incruit" width="200px">\n    </div>\n    <div class="text-section">\n        <div class="site-name">Incruite</div>\n        <div>\n            개인별 맞춤 채용 정보 및 연봉 자료 제공\n        </div>\n        <div>\n            합격 자기소개서, 맞춤법 검사기 등 채용 유용 정보 제공\n        </div>\n    </div>\n</li>\n</ul>\n'},b=n=>{document.querySelector("#org-css").setAttribute("href",`./assets/css/${n.substring(1)}.css`)},g=()=>{document.querySelectorAll(".router").forEach((n=>{n.addEventListener("click",(()=>{const t=n.getAttribute("route");w(t,f)}))}))},w=(n,t)=>{window.history.pushState({},n,window.location.origin+n),b(n),y(t,h[n]),g()},y=(n,t)=>{n.innerHTML=t};window.onload=()=>{y(f,h["/"]),window.onpopstate=()=>{const n="/"===window.location.pathname?"/index":window.location.pathname;b(n),y(f,h[window.location.pathname]),g()},g()}})()})();