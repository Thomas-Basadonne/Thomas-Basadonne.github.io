<script>
import Quiz from '../components/Quiz.vue';
import AppHeader from '../components/AppHeader.vue';
export default {
  components: {
    Quiz,
    AppHeader
  },
  data() {
    return {
      onePieceQuestions: [
      {
        question: 'Chi è il capitano della ciurma?',
        answer: 1,
        options: ['Zoro', 'Luffy', 'Ussop', 'Sanji'],
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
      };
    },
  };
</script>

<template>
  <AppHeader/>
  <Quiz :questions="onePieceQuestions" />
</template>


