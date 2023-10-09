<script setup>
import {ref, computed} from 'vue'

const questions = ref([
  {
    question: 'Chi è il capitano della ciurma?',
    answer: 0,
    options:[
      'Zoro',
      'Luffy',
      'Ussop',
      'Sanji'
    ],
    selected: null
  },
  {
    question: 'Chi ha tre spade?',
    answer: 0,
    options:[
      'Zoro',
      'Luffy',
      'Ussop',
      'Sanji'
    ],
    selected: null
  },
  {
    question: 'Chi è il più fifone?',
    answer: 2,
    options:[
      'Zoro',
      'Luffy',
      'Ussop',
      'Sanji'
    ],
    selected: null
  }
])

const quizCompleted = ref(false)
const currentQuestion = ref(0)
const score = computed(()=>{
  let value = 0
  questions.value.map(q=>{
    if(q.selected == q.answer){
      value++
    }
  })
  return value
})

const getCurrentQuestion = computed(() =>{
  let question = questions.value[currentQuestion.value]
  question.index = currentQuestion.value
  return question
})

const SetAnswer = evt =>{
  questions.value[currentQuestion.value].selected = evt.target.value
  evt.target.value = null
}

const NextQuestion = () =>{
  if(currentQuestion.value < questions.value.length - 1){
    currentQuestion.value++
  }else{
    quizCompleted = true
  }
}
</script>

<template>
  <main class="app">
    <h1>Il quiz</h1>
    <h2>Vinci un frutto del diavolo!</h2>
    <section class="quiz">
      <div class="quiz-info">
        <span class="question">
          {{ getCurrentQuestion.question }}
        </span>
        <span class="score">
          Punteggio {{ score }} / {{ questions.length }}
        </span>
      </div>

      <div class="quiz-options">
        <label 
        v-for="(option, index) in getCurrentQuestion.options" 
        :key="index"
        :class="`option ${getCurrentQuestion.selected == index 
                          ? index == getCurrentQuestion.answer 
                          ? 'correct' 
                          : 'wrong' 
                          :''
                          }
                          ${
                          getCurrentQuestion.selected != null &&
                          index != getCurrentQuestion.selected
                          ? 'disabled'
                          :''
                          }`
                        ">
          <input 
            type="radio" 
            :name="getCurrentQuestion.index"
            :value="index"
            v-model="getCurrentQuestion.selected"
            :disabled="getCurrentQuestion.selected"
            @change="SetAnswer">
            <span>{{ option }}</span>
        </label>
      </div>
    </section>
  </main>
</template>

<style>
*{
  padding:0;
  margin: 0;
  box-sizing: border-box;
  font-family: 'Montserrat', sans-serif;
}

body{
  background-color: #271C36;
  color: #FFF;
}
</style>
