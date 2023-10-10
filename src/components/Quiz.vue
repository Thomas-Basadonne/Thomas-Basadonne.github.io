<script setup>
import { ref, computed, defineProps } from 'vue';

const { questions: initialQuestions } = defineProps(['questions']);

const questions = ref(initialQuestions);

//Variabile per capire se il quiz è iniziato
const quizStarted = ref(false);

// Variabile per tracciare il completamento del quiz
const quizCompleted = ref(false);

// Variabile per tracciare la domanda corrente
const currentQuestion = ref(0);

// Variabile per la durata timer
const timeLeft = ref(10); 

// Variabile per il timer
let timer; 

//Se il gioco è iniziato fai partire il timer
const startQuiz = () => {
  quizStarted.value = true;
  startTimer(); // Avvia il timer solo quando inizia il quiz
};

// Funzione per avviare il timer
const startTimer = () => {
  timeLeft.value = 10; // Resetta il tempo a 30 secondi
  timer = setInterval(() => {
    if (timeLeft.value > 0) {
      timeLeft.value--;
    } else {
      clearInterval(timer); // Arresta il timer quando il tempo scade
      // Puoi anche chiamare una funzione per passare automaticamente alla prossima domanda qui
      NextQuestion();
    }
  }, 1000); // Ogni secondo
};

// Funzione per fermare il timer
const stopTimer = () => {
  clearInterval(timer);
};

// Calcola il punteggio del quiz
const score = computed(()=>{
  let value = 0
  questions.value.map(q=>{
    if(q.selected == q.answer){
      value++
    }
  })
  return value
})

// Ottieni la domanda corrente
const getCurrentQuestion = computed(() => {
  let question = questions.value[currentQuestion.value];
  question.index = currentQuestion.value;
  return question;
});

// Imposta la risposta selezionata per la domanda corrente
const SetAnswer = (evt) => {
  questions.value[currentQuestion.value].selected = evt.target.value;
  evt.target.value = null;
  stopTimer(); // Fermare il timer quando viene selezionata una risposta
};


// Passa alla prossima domanda o completa il quiz se tutte le domande sono state risposte
const NextQuestion = () => {
  stopTimer(); // Fermare il timer quando si passa alla prossima domanda
  if (currentQuestion.value < questions.value.length - 1) {
    currentQuestion.value++;
    startTimer(); // Avviare il timer per la nuova domanda
  } else {
    quizCompleted.value = true;
  }
};


</script>

<template>
    <main class="app">
      <h1>Il quiz</h1>
      <h2>Vinci un frutto del diavolo!</h2>
  
      <!-- Passaggio iniziale: Mostra solo se il quiz non è ancora iniziato -->
      <section class="quiz-initial" v-if="!quizStarted && !quizCompleted">
        <button @click="startQuiz">Inizia il quiz</button>
      </section>
      <!-- Se il quiz non è completato, visualizza la domanda corrente -->
      <section class="quiz" v-if="quizStarted && !quizCompleted">
        <div class="quiz-info">
          <span class="question">{{ getCurrentQuestion.question }}</span>
          <span class="score">Punteggio {{ score }} / {{ questions.length }}</span>
          <div class="timer">{{ timeLeft }}s</div> 
        </div>
  
        <div class="options">
          <!-- Itera tra le opzioni possibili -->
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
                          "
          >
            <!-- Input radio per la selezione dell'opzione -->
            <input
              type="radio"
              :name="getCurrentQuestion.index"
              :value="index"
              v-model="getCurrentQuestion.selected"
              :disabled="getCurrentQuestion.selected !== null"
              @change="SetAnswer"
            />
            <span>{{ option }}</span>
          </label>
        </div>
        <!-- Bottone per passare alla prossima domanda -->
        <button @click="NextQuestion" :disabled="!getCurrentQuestion.selected">
          {{
            getCurrentQuestion.index === questions.length - 1
              ? 'Finito'
              : getCurrentQuestion.selected === null
              ? 'Scegli una opzione'
              : 'Prossima domanda'
          }}
        </button>
      </section>
  
      <!-- Se il quiz è completato, mostra il punteggio finale -->
      <section v-if="quizCompleted">
        <h2>Hai finito il quiz!</h2>
        <p>il tuo punteggio è {{ score }} / {{ questions.length }}</p>
      </section>
    </main>
  </template>
  