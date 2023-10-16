import { createRouter, createWebHistory } from "vue-router";

import Home from "./views/Home.vue";
import QuizHtml from "./views/QuizHtml.vue";
import QuizCss from "./views/QuizCss.vue";
import QuizJs from "./views/QuizJs.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "Home",
      component: Home,
    },
    {
      path: "/quiz-html",
      name: "QuizHtml",
      component: QuizHtml,
    },
    {
      path: "/quiz-css",
      name: "QuizCss",
      component: QuizCss,
    },
    {
      path: "/quiz-js",
      name: "QuizJs",
      component: QuizJs,
    },
  ],
});

export { router };
