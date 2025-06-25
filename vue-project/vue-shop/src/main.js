import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import mixins from "./mixins";
import store from "./store";
import VueSweetAlert2 from "vue-sweetalert2";
import "sweetalert2/dis/sweetalert2.min.css";
import router from "./router";

const app = createApp(App);
app.use(router);
app.mixin(mixins);
app.use(store);
app.use(VueSweetAlert2);

app.mount("#app");

window.Kakao.init("83f782f22bd91b801f06bcc95bb4bc8f");
