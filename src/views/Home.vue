<script>
// import MyComponent from "./components/MyComponent.vue";
import AppFooter from "../components/AppFooter.vue";

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

    <div class="quiz-btn-container container">
      <div class="row justify-content-center">
        <div class="col-md-4">
          <!-- Front-End -->
          <h2 class="fw-bold my-3">Front-End</h2>
          <div
            class="d-flex flex-column justify-content-between align-items-center"
          >
            <router-link to="/quiz-html" class="my-router-link"
              >Vai al quiz HTML5</router-link
            >
            <router-link to="/quiz-css" class="my-router-link"
              >Vai al quiz CSS</router-link
            >
            <router-link to="/quiz-js" class="my-router-link"
              >Vai al quiz JavaScript</router-link
            >
          </div>
        </div>

        <div class="col-md-4">
          <!-- Back-End -->
          <h2 class="fw-bold my-3">Back-End</h2>
          <div
            class="d-flex flex-column justify-content-between align-items-center"
          >
            <router-link to="/quiz-one-piece" class="my-router-link"
              >Vai al quiz PHP</router-link
            >
            <router-link to="/quiz-hells-paradise" class="my-router-link"
              >Vai al quiz JAVA</router-link
            >
            <router-link to="/quiz-memento" class="my-router-link"
              >Vai al quiz Memento</router-link
            >
          </div>
        </div>
      </div>

      <div class="row justify-content-center">
        <div class="col-md-4">
          <!-- Database -->
          <h2 class="fw-bold mt-5 mb-3">Database</h2>
          <div
            class="d-flex flex-column justify-content-between align-items-center"
          >
            <router-link to="/quiz-one-piece" class="my-router-link"
              >Vai al quiz MySQL</router-link
            >
            <router-link to="/quiz-hells-paradise" class="my-router-link"
              >Vai al quiz Hells Paradise</router-link
            >
            <router-link to="/quiz-memento" class="my-router-link"
              >Vai al quiz Memento</router-link
            >
          </div>
        </div>

        <div class="col-md-4">
          <!-- Altro -->
          <h2 class="fw-bold mt-5 mb-3">FrameWork</h2>

          <div
            class="d-flex flex-column justify-content-between align-items-center"
          >
            <router-link to="/quiz-one-piece" class="my-router-link"
              >Vai al quiz One Piece</router-link
            >
            <router-link to="/quiz-hells-paradise" class="my-router-link"
              >Vai al quiz Hells Paradise</router-link
            >
            <router-link to="/quiz-memento" class="my-router-link"
              >Vai al quiz Memento</router-link
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
