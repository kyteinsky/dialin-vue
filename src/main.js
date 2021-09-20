import { createApp } from "vue";
import App from "./App.vue";

import MasonryWall from "@yeger/vue-masonry-wall";
import "@/assets/global.css";

createApp(App)
  .use(MasonryWall)
  .mount("#app");
