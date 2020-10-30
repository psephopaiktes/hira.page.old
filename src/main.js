import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import SVG from "./components/SVG.vue";

createApp(App)
  .use(store)
  .use(router)
  .component("SVG", SVG)
  .mount("#app");

window.console.log(
  "%chttps://github.com/psephopaiktes/hira.page",
  `
    padding: 20px 40px;
    margin: 40px 0px;
    border: 2px solid #fc6;
    border-radius: 8px;
    letter-spacing: .1em;
    font-size: large;
    font-weight: bold;
    text-align: center;
  `
);
