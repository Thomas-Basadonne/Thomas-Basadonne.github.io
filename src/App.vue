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
  <h1>hello</h1>
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
