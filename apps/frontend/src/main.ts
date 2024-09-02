import { createApp } from "vue";
import { VueQueryPlugin } from "vue-query";
import { router } from "@/router";
import VueGtag from "vue-gtag-next";

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
app.use(VueGtag, {
  property: {
    id: `${import.meta.env.VITE_GOOGLE_ANALYTICS_ID}`,
  },
});

app.mount("#app");
