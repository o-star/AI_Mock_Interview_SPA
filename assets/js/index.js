import Home from "./pages/Home.js"
import Introduction from "./pages/Introduction.js"
import JobInfo from "./pages/JobInfo.js"
import Tutorial from "./pages/Tutorial.js"

import handleTutorial from "./modules/handleTutorial.js"

import "../css/Home.css"
import "../css/Introduction.css"
import "../css/JobInfo.css"
import "../css/Tutorial.css"

const rootElement = document.querySelector("#root")
const routes = {
  '/': Home,
  '/introduction': Introduction,
  '/job-infos': JobInfo,
  '/tutorial': Tutorial
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
  }

  setRouterEvent()
}

//rerender page
const renderHTML = (element, route) => {
  element.innerHTML = route
}

window.onload = () => {
  renderHTML(rootElement, routes['/'])

  window.onpopstate = () => {
    renderHTML(rootElement, routes[window.location.pathname])
    setRouterEvent()
  }

  setRouterEvent()
}