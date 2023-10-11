<script>
// import MyComponent from "./components/MyComponent.vue";
import AppFooter from '../components/AppFooter.vue';

export default {
  data() {
    return {
      title: "Anime Quiz"
    }
  },
  mounted() {
    document.body.classList.add('app-body'); // Aggiungi la classe al corpo
  },

  components: {
    AppFooter,
  },
};
</script>

<template>
  <div class="container">
    <h1>{{ title }}</h1>
    <router-link to="/quiz-one-piece" class="my-router-link">Vai al quiz One Piece</router-link>
    <router-link to="/quiz-hells-paradise" class="my-router-link">Vai al quiz Hells Paradise</router-link>
    <router-link to="/quiz-memento" class="my-router-link">Vai al quiz Memento</router-link>
  </div>
  <app-footer/>
</template>

<style lang="scss" scoped>

</style>