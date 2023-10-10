<script>
import Quiz from '../components/Quiz.vue';

export default {
  components: {
    Quiz,
  },
  data() {
    return {
      hellsParadiseQuestions: [
      {
        question: 'Chi è il capitano della ciurma?',
        answer: 1,
        options: ['marco', 'Luffy', 'Ussop', 'Sanji'],
        selected: null,
      },
      {
        question: 'Chi ha tre spade?',
        answer: 0,
        options: ['Zoro', 'Luffy', 'Ussop', 'Sanji'],
        selected: null,
      },
      {
        question: 'Chi è il più fifone?',
        answer: 2,
        options: ['Zoro', 'Luffy', 'Ussop', 'Sanji'],
        selected: null,
      },
      ],
    }
  }
};
</script>

<template>
  <Quiz :questions="hellsParadiseQuestions" />
</template>

<style lang="scss" scoped></style>