import { createRouter, createWebHistory } from "vue-router";

import Home from "./views/Home.vue";
// front
import QuizHtml from "./views/front/QuizHtml.vue";
import QuizCss from "./views/front/QuizCss.vue";
import QuizJs from "./views/front/QuizJs.vue";
import QuizScss from "./views/front/QuizScss.vue";
// back
import QuizPhp from "./views/back/QuizPhp.vue";
import QuizJava from "./views/back/QuizJava.vue";
import QuizPy from "./views/back/QuizPy.vue";
import QuizRuby from "./views/back/QuizRuby.vue";
// db
import QuizSql from "./views/db/QuizSql.vue";
import QuizMySql from "./views/db/QuizMySql.vue";
import QuizMongoDB from "./views/db/QuizMongoDB.vue";
import QuizRedis from "./views/db/QuizRedis.vue";
// framework
import QuizVue from "./views/framework/QuizVue.vue";
import QuizReact from "./views/framework/QuizReact.vue";
import QuizSpring from "./views/framework/QuizSpring.vue";
import QuizLaravel from "./views/framework/QuizLaravel.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "Home",
      component: Home,
    },
    // Front-end
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
    {
      path: "/quiz-scss",
      name: "QuizScss",
      component: QuizScss,
    },
    // Back-end
    {
      path: "/quiz-php",
      name: "QuizPhp",
      component: QuizPhp,
    },
    {
      path: "/quiz-java",
      name: "QuizJava",
      component: QuizJava,
    },
    {
      path: "/quiz-py",
      name: "QuizPy",
      component: QuizPy,
    },
    {
      path: "/quiz-ruby",
      name: "QuizRuby",
      component: QuizRuby,
    },
    // Database
    {
      path: "/quiz-sql",
      name: "QuizSql",
      component: QuizSql,
    },
    {
      path: "/quiz-mysql",
      name: "QuizMySql",
      component: QuizMySql,
    },
    {
      path: "/quiz-mongodb",
      name: "QuizMongoDB",
      component: QuizMongoDB,
    },
    {
      path: "/quiz-redis",
      name: "QuizRedis",
      component: QuizRedis,
    },
    // Framework
    {
      path: "/quiz-laravel",
      name: "QuizLaravel",
      component: QuizLaravel,
    },
    {
      path: "/quiz-react",
      name: "QuizReact",
      component: QuizReact,
    },
    {
      path: "/quiz-vue",
      name: "QuizVue",
      component: QuizVue,
    },
    {
      path: "/quiz-spring",
      name: "QuizSpring",
      component: QuizSpring,
    },
  ],
});

export { router };
