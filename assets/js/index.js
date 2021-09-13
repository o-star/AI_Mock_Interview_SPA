import { routes, setRouterEvent, renderHTML } from "./modules/router.js"

import "../css/Home.css"
import "../css/Introduction.css"
import "../css/JobInfo.css"
import "../css/Tutorial.css"
import "../css/InterviewSetting.css"
import "../css/InterviewStarter.css"
import "../css/Interview.css"

const rootElement = document.querySelector("#root")

window.onload = () => {
  renderHTML(rootElement, routes['/'])

  window.onpopstate = () => {
    renderHTML(rootElement, routes[window.location.pathname])
    setRouterEvent()
  }

  setRouterEvent()
}