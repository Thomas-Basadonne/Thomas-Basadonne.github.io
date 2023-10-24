import { createRouter, createWebHistory } from "vue-router";

import Home from "./views/Home.vue";
// front
import QuizHtml from "./components/content/front/QuizHtml.vue";
import QuizCss from "./components/content/front/QuizCss.vue";
import QuizJs from "./components/content/front/QuizJs.vue";
import QuizScss from "./components/content/front/QuizScss.vue";
// back
import QuizPhp from "./components/content/back/QuizPhp.vue";
import QuizJava from "./components/content/back/QuizJava.vue";
import QuizPy from "./components/content/back/QuizPy.vue";
import QuizRuby from "./components/content/back/QuizRuby.vue";
// db
import QuizSql from "./components/content/db/QuizSql.vue";
import QuizMySql from "./components/content/db/QuizMySql.vue";
import QuizMongoDB from "./components/content/db/QuizMongoDB.vue";
import QuizRedis from "./components/content/db/QuizRedis.vue";
// framework
import QuizVue from "./components/content/framework/QuizVue.vue";
import QuizReact from "./components/content/framework/QuizReact.vue";
import QuizSpring from "./components/content/framework/QuizSpring.vue";
import QuizLaravel from "./components/content/framework/QuizLaravel.vue";

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
