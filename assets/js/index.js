import Home from "./pages/Home.js"
import Introduction from "./pages/Introduction.js"
import JobInfo from "./pages/JobInfo.js"

const rootElement = document.querySelector("#root")
const cssPath = './assets/css/'
const routes = {
  '/': Home,
  '/introduction': Introduction,
  '/job-infos': JobInfo
}

// add css file
const addCSS = (cssName) => {
  let cssElement = document.querySelector("#org-css")
  cssElement.setAttribute("href", cssPath + `${cssName.substring(1)}.css`)
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
  addCSS(pathName)
  renderHTML(element, routes[pathName])
  setRouterEvent()
}

//rerender page
const renderHTML = (element, route) => {
  element.innerHTML = route
}

window.onload = () => {
  renderHTML(rootElement, routes['/'])

  window.onpopstate = () => {
    const cssName = (window.location.pathname === "/") ? "/index" : window.location.pathname
    addCSS(cssName)
    renderHTML(rootElement, routes[window.location.pathname])
    setRouterEvent()
  }

  setRouterEvent()
}