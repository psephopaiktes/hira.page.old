import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import SVG from "./components/SVG.vue";
// import VueGtag from "vue-gtag-next";

const app = createApp(App);

app.use(store);
app.use(router);
app.component("SVG", SVG);

app.mount("#app");
