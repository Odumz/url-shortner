import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "./main.css";
import VueScrollTo from "vue-scrollto";

createApp(App)
  .use(router)
  .use(VueScrollTo, {
    offset: -50,
    easing: "ease-out",
    lazy: true,
    duration: 1500,
  })
  .mount("#app");
