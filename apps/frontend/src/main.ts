import { createApp } from "vue";
import { VueQueryPlugin } from "vue-query";
import { router } from "@/router";

import "./assets/index.css";
import App from "./App.vue";

const app = createApp(App);

app.use(router);
app.use(VueQueryPlugin, {
  queryClientConfig: {
    defaultOptions: {
      queries: {
        cacheTime: 5 * 60 * 1000,
      },
    },
  },
});
app.mount("#app");
