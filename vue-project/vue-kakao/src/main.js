import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

const app = createApp(App);
app.use(router);
app.mount("#app");

window.Kakao.init("83f782f22bd91b801f06bcc95bb4bc8f");
