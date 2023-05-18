import "../sass/main.scss";


import App from "./views/app";

const app = new App({
  content: document.getElementById('main-content')
})


window.addEventListener('hashchange', () => {
  app.renderPage()
})

window.addEventListener('load', () =>{
  app.renderPage()
})