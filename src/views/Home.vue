<script>
// import MyComponent from "./components/MyComponent.vue";
import AppFooter from "../components/_partials/AppFooter.vue";

export default {
  data() {
    return {
      title: "Dev Quiz",
    };
  },

  components: {
    AppFooter,
  },
};
</script>

<template>
  <div class="home container d-flex flex-column">
    <div class="home-head align-self-center my-3">
      <h1 class="text-center my-3 fw-bold">{{ title }}</h1>
      <h5 class="text-center my-3">
        Allenati con dei quiz a risposta multipla!
      </h5>
    </div>

    <div class="quiz-btn-container container mb-5">
      <div class="row justify-content-center">
        <div class="col-md-6 col-12">
          <!-- Front-End -->
          <h2 class="fw-bold mt-5 mb-3">Front-End</h2>
          <div
            class="d-flex flex-column justify-content-between align-items-center"
          >
            <router-link to="/quiz-html" class="my-router-link"
              >Vai al quiz HTML5</router-link
            >
            <router-link to="/quiz-css" class="my-router-link"
              >Vai al quiz CSS</router-link
            >
            <router-link to="/quiz-scss" class="my-router-link"
              >Vai al quiz SCSS</router-link
            >
            <router-link to="/quiz-js" class="my-router-link"
              >Vai al quiz JavaScript</router-link
            >
          </div>
        </div>

        <div class="col-md-6 col-12">
          <!-- Back-End -->
          <h2 class="fw-bold mt-5 mb-3">Back-End</h2>
          <div
            class="d-flex flex-column justify-content-between align-items-center"
          >
            <router-link to="/quiz-php" class="my-router-link"
              >Vai al quiz PHP</router-link
            >
            <router-link to="/quiz-java" class="my-router-link"
              >Vai al quiz JAVA</router-link
            >
            <router-link to="/quiz-py" class="my-router-link"
              >Vai al quiz Python</router-link
            >
            <router-link to="/quiz-ruby" class="my-router-link"
              >Vai al quiz Ruby</router-link
            >
          </div>
        </div>
      </div>

      <div class="row justify-content-center">
        <div class="col-md-6 col-12">
          <!-- Database -->
          <h2 class="fw-bold mt-5 mb-3">Database</h2>
          <div
            class="d-flex flex-column justify-content-between align-items-center"
          >
            <router-link to="/quiz-sql" class="my-router-link"
              >Vai al quiz SQL</router-link
            >
            <router-link to="/quiz-mysql" class="my-router-link"
              >Vai al quiz MySQL</router-link
            >
            <router-link to="/quiz-mongodb" class="my-router-link"
              >Vai al quiz MongoDB</router-link
            >
            <router-link to="/quiz-redis" class="my-router-link"
              >Vai al quiz Redis</router-link
            >
          </div>
        </div>

        <div class="col-md-6 col-12">
          <!-- Altro -->
          <h2 class="fw-bold mt-5 mb-3">FrameWork</h2>

          <div
            class="d-flex flex-column justify-content-between align-items-center"
          >
            <router-link to="/quiz-laravel" class="my-router-link"
              >Vai al quiz Laravel</router-link
            >
            <router-link to="/quiz-react" class="my-router-link"
              >Vai al quiz React</router-link
            >
            <router-link to="/quiz-vue" class="my-router-link"
              >Vai al quiz Vue</router-link
            >
            <router-link to="/quiz-spring" class="my-router-link"
              >Vai al quiz Spring</router-link
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
