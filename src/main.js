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
  "Hello! Check this site's code\n%chttps://github.com/psephopaiktes/hira.page",
  `
    padding: 20px 40px;
    margin: 8px 0px 24px;
    border: 2px solid #fc6;
    border-radius: 8px;
    letter-spacing: .1em;
    font-size: large;
    font-weight: bold;
    text-align: center;
  `
);
