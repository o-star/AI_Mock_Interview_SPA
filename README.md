# AI_Mock_Interview_SPA

AI 모의 면접 사이트 Single Page Application으로 만들어보기

<br/>

<br/>

<br/>

***

### Description

- **기존 개발하엿떤 AI 모의 면접 사이트를 History 객체와 Webpack 등을 활용하여 프레임워크, 라이브러리 없이 Single Page Application으로 개발해보았다.**
- **내부 페이지 개발 코드는 [AI_Mock_Interview_System](https://github.com/o-star/AI_Mock_Interview_System)과 동일하나 Single Page로 제작하는 과정에서 index.html 하나의 html 파일과 Webpack을 통해 모듈 번들링을 진행한 build.js 하나의 Javascript 파일로 페이지가 실행된다.**

<br/>

<br/>

<br/>

***

### Usage

**본 웹페이지는 Chrome 브라우저에 맞춤화되어 제작되었으므로 본 페이지를 이용할 시 Chrome 환경에서 이용하는 것을 권장한다.**

**Webpack Build**

```
npm run build
// dist 디렉토리 생성, github 코드에는 build.js가 포함되어있지 않기 때문에 반드시 Webpack build 후 사용하기
```

<br/>

<br/>

<br/>

***

### Page View

![image](https://user-images.githubusercontent.com/57346455/115403276-3ade3f00-a227-11eb-9533-ce8782de25a5.png)

본 웹 시스템의 홈 화면이다. 본 웹페이지는 모의 면접을 시행해볼 수 있는 주요기능(Interview Start)을 제공하며, 그 외에 페이지 소개(Introduction)와 채용에 관련된 정보를 얻을 수 있는 몇 종류의 웹 페이지를 소개(Other Job Infos)하는 부가 기능을 제공하고 있다.

<br/>

![image](https://user-images.githubusercontent.com/57346455/115403827-bc35d180-a227-11eb-91ac-9873b3cb205f.png)

Introduction 페이지의 경우 간단한 웹 페이지의 소개 내용이 담겨져 있다. 스크롤을 통해 간단하게 내용을 확인해 볼 수 있다.

<br/>

![image](https://user-images.githubusercontent.com/57346455/115404000-e25b7180-a227-11eb-8d3e-850d1fb54db1.png)

Other Job Infos 페이지의 경우 채용정보 제공 사이트 중 평소 유용하게 사용했던 4가지의 사이트를 간단하게 소개하고 있다.

<br/>

![image](https://user-images.githubusercontent.com/57346455/115404232-18005a80-a228-11eb-9198-681d5e02fa07.png)

모의 면접 실행 페이지는 가장 처음에 본 페이지에서 준비한 5개의 카테고리 질문 항목들을 확인해 볼 수 있다. 이후 모의 면접에서는 이 페이지에서 확인해 볼 수 있는 5개의 카테고리 항목 질문들 중 랜덤 선택되어 면접을 진행한다.

<br/>

![image](https://user-images.githubusercontent.com/57346455/115404559-6877b800-a228-11eb-8786-02193fea40ff.png)

질문 항목들을 확인한 후에는 간단한 Tutorial 페이지를 통해 모의 면접과 관련된 유의사항들을 확인해 볼 수 있다.

<br/>

![image](https://user-images.githubusercontent.com/57346455/115404824-a543af00-a228-11eb-831d-cbd40e339470.png)

Tutorial을 모두 확인한 이후에는 모의 면접에 들어가기 앞서 웹캠과 마이크 연결상태와 올바른 녹화가 이뤄지는지 확인해 볼 수 있는 테스트 페이지가 주어진다. 본 페이지에서 상태를 확인하고 테스트 녹화를 진행해볼 수 있다.

<br/>

![image](https://user-images.githubusercontent.com/57346455/115405531-492d5a80-a229-11eb-9aab-be344bb50d44.png)

녹화 테스트를 모두 체크한 이후에는 본격적으로 모의면접을 진행해볼 수 있다. 모의면접은 질문이 보여지고 난 후로 30초간 답변 준비타임이 주어진다.

<br/>

![image](https://user-images.githubusercontent.com/57346455/115405654-68c48300-a229-11eb-9d80-f0d41b1c593c.png)

30초가 지난 후에는 자동으로 답변화면이 보여지면 90초의 답변시간이 주어진다. 녹화는 곧바로 자동시작되며 90초 이내에 답변을 모두 완료한 경우에는 90초를 기다릴 필요 없이 답변완료 버튼을 클릭할 수 있다.

<br/>

![image](https://user-images.githubusercontent.com/57346455/115405961-ae814b80-a229-11eb-8851-21625944d3ca.png)

답변을 완료하면, Finish 화면에 도달한다. Finish 화면에서는 녹화본을 재생해보면 답변 영상을 체크해볼 수 있으며, 재녹화를 진행해보고 싶을 경우 재답변 버튼을 클릭해 녹화를 다시 진행할 수 있다. 다른 질문에 대한 모의 면접을 진행해보고 싶을 경우 다음 문제 버튼을 클릭하며 면접 끝내기 버튼을 통해 홈 화면으로 다시 이동할 수 있다.

<br/>

<br/>

<br/>

***

### Usage Library

- jQuery
- wow.js