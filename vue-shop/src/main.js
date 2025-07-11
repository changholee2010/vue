import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import mixins from "./mixins";
import store from "./store";

createApp(App) //
  .use(router) //
  .mixin(mixins) // 공동함수.
  .use(store)
  .mount("#app");

window.Kakao.init("83f782f22bd91b801f06bcc95bb4bc8f");
