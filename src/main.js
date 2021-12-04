import { createApp } from 'vue'
import App from './App.vue'
import "nprogress/nprogress.css";
import { createRouter, createWebHistory } from "vue-router";

import PostPanel from "./components/PostPanel.vue";
import PostMaker from "./components/PostMaker.vue";


const router = createRouter({
    history: createWebHistory(),
    routes: [
      { path: "/", redirect: "/postpanel" },
      { path: "/postpanel", component: PostPanel },
      { path: "/postmaker", component: PostMaker },
    ],
  });



createApp(App).use(router).mount('#app');



