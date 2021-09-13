import Home from "../pages/Home.js"
import Introduction from "../pages/Introduction.js"
import JobInfo from "../pages/JobInfo.js"
import Tutorial from "../pages/Tutorial.js"
import InterviewSetting from "../pages/InterviewSetting.js"
import InterviewStarter from "../pages/InterviewStarter.js"
import Interview from "../pages/Interview.js"

import handleTutorial from "./handleTutorial.js"
import handleSetting from "./handleSetting.js"
import handleInterview from "./handleInterview.js"

const rootElement = document.querySelector("#root")
const routes = {
  '/': Home,
  '/introduction': Introduction,
  '/job-infos': JobInfo,
  '/tutorial': Tutorial,
  '/setting': InterviewSetting,
  '/starter': InterviewStarter,
  '/interview': Interview
}

// router element event add
const setRouterEvent = () => {
  const routers = document.querySelectorAll(".router")
  routers.forEach(element => {
    element.addEventListener('click', () => {
      const nextPathName = element.getAttribute("route")
      historyRouterPush(nextPathName, rootElement)
    })
  })
}

//move url
const historyRouterPush = (pathName, element) => {
  window.history.pushState({}, pathName, window.location.origin + pathName)
  renderHTML(element, routes[pathName])

  if (pathName == '/tutorial') {
    handleTutorial()
  } else if (pathName == '/setting') {
    handleSetting()
  } else if (pathName == '/interview') {
    handleInterview()
  }

  setRouterEvent()
}

//rerender page
const renderHTML = (element, route) => {
  element.innerHTML = route
}

export { routes, setRouterEvent, historyRouterPush, renderHTML }