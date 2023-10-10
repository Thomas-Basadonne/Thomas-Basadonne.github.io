import { createRouter, createWebHistory } from 'vue-router'

import Home from './views/Home.vue'
import QuizOnePiece from './views/QuizOnePiece.vue';
import QuizHellsParadise from './views/QuizHellsParadise.vue';
import QuizMemento from './views/QuizMemento.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
    },
    {
      path: '/quiz-one-piece',
      name: 'QuizOnePiece',
      component: QuizOnePiece,
    },
    {
      path: '/quiz-hells-paradise',
      name: 'QuizHellsParadise',
      component: QuizHellsParadise,
    },
    {
      path: '/quiz-memento',
      name: 'QuizMemento',
      component: QuizMemento,
    },
  ],
});

export {router};