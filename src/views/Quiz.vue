<script setup>
import { ref, computed } from "vue";

const { questions: initialQuestions, title } = defineProps([
  "questions",
  "title",
]);

const questions = ref(initialQuestions);

//Variabile per capire se il quiz è iniziato
const quizStarted = ref(false);

// Variabile per tracciare il completamento del quiz
const quizCompleted = ref(false);

// Variabile per tracciare la domanda corrente
const currentQuestion = ref(0);

// Variabile per la durata timer
const timeLeft = ref(20);

// Variabile per il timer
let timer;

//Se il gioco è iniziato fai partire il timer
const startQuiz = () => {
  quizStarted.value = true;
  startTimer(); // Avvia il timer solo quando inizia il quiz
};

// Funzione per avviare il timer
const startTimer = () => {
  timeLeft.value = 20; // Resetta il tempo a 20 secondi
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
const score = computed(() => {
  let value = 0;
  questions.value.map((q) => {
    if (q.selected == q.answer) {
      value++;
    }
  });
  return value;
});

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
    <div v-if="!quizCompleted" class="quiz-head mb-3">
      <h1>Il quiz su {{ title }}</h1>
      <h4 class="mb-1">Migliora le tue skill!</h4>
    </div>

    <!-- Passaggio iniziale: Mostra solo se il quiz non è ancora iniziato -->
    <section class="info-box text-center" v-if="!quizStarted && !quizCompleted">
      <div class="info-title fs-4 my-2 fw-bold">
        <span>Le regole del quiz</span>
      </div>
      <hr />
      <div class="info-list text-start">
        <div class="info">
          1. Avrai solo <span>20 secondi</span> per ogni domanda.
        </div>
        <div class="info">
          2. Una volta selezionata una risposta non puoi cambiarla.
        </div>
        <div class="info">
          3. Una volta scaduto il tempo passerai alla prossima domanda.
        </div>
        <div class="info">
          4. Non puoi uscire dal quiz mentre lo stai svolgendo.
        </div>
        <div class="info">5. Ogni risposta corretta vale un punto.</div>
      </div>
      <hr />
      <div class="start-btn">
        <div class="d-md-flex justify-content-center">
          <button @click="startQuiz">Inizia il quiz</button>
        </div>
      </div>
    </section>

    <!-- Se il quiz non è completato, visualizza la domanda corrente -->
    <section class="quiz" v-if="quizStarted && !quizCompleted">
      <!-- Domanda -->
      <div class="quiz-info">
        <span class="question">{{ getCurrentQuestion.question }}</span>
      </div>

      <!-- Risposte -->
      <div class="options">
        <!-- Itera tra le opzioni possibili -->
        <label
          v-for="(option, index) in getCurrentQuestion.options"
          :key="index"
          :class="`option ${
            getCurrentQuestion.selected == index
              ? index == getCurrentQuestion.answer
                ? 'correct'
                : 'wrong'
              : ''
          }${
            getCurrentQuestion.selected != null &&
            index != getCurrentQuestion.selected
              ? 'disabled'
              : ''
          }`"
        >
          <!-- Input per la selezione dell'opzione -->
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
      <div class="quiz-info">
        <button @click="NextQuestion" :disabled="!getCurrentQuestion.selected">
          {{
            getCurrentQuestion.index === questions.length - 1
              ? "Finito"
              : getCurrentQuestion.selected === null
              ? "Scegli una opzione"
              : "Prossima domanda"
          }}
        </button>
        <div class="stats">
          <div class="score">{{ score }} / {{ questions.length }}</div>
          <div class="timer">{{ timeLeft }}s</div>
        </div>
      </div>
    </section>

    <!-- Se il quiz è completato, mostra il punteggio finale -->
    <section class="after-quiz" v-if="quizCompleted">
      <div class="card">
        <div class="card-body pt-0">
          <!-- Testo in base al punteggio -->
          <template v-if="score >= 0 && score <= 5">
            <h1 class="fs-1 card-title py-2 mt-2">Hai finito il quiz!</h1>
            <iframe
              class="w-100"
              src="https://giphy.com/embed/k8FRIfjD1lSobtDch1/video"
              alt="Punteggio basso"
            ></iframe>
            <div class="main-card border border-top-0 mt-2">
              <h5 class="fs-1 card-title py-4 mt-0">Non scoraggiarti!</h5>
              <div
                class="d-inline-flex justify-content-between align-items-baseline fs-2 fw-bold px-2 my-2"
              >
                <p class="final-score me-2">
                  Il tuo punteggio è {{ score }} / {{ questions.length }}
                </p>
                <router-link to="/" id="pippo">Torna al menù</router-link>
              </div>
            </div>
          </template>
          <template v-else-if="score >= 6 && score <= 9">
            <h1 class="fs-1 card-title py-2 mt-2">Hai finito il quiz!</h1>
            <iframe
              class="w-100"
              src="https://giphy.com/embed/a0h7sAqON67nO"
              alt="Punteggio basso"
            ></iframe>
            <div class="main-card border border-top-0 mt-2">
              <h5 class="fs-1 card-title py-4 mt-0">Ottimo lavoro!</h5>
              <div
                class="d-inline-flex justify-content-between align-items-baseline fs-2 fw-bold px-2 my-2"
              >
                <p class="final-score me-2">
                  Il tuo punteggio è {{ score }} / {{ questions.length }}
                </p>
                <router-link to="/" id="pippo">Torna al menù</router-link>
              </div>
            </div>
          </template>
          <template v-else>
            <h1 class="fs-1 card-title py-2 mt-2">Hai finito il quiz!</h1>
            <iframe
              class="w-100"
              src="https://giphy.com/embed/EBPvJ8wA04Kc0"
              alt="Punteggio alto"
            ></iframe>
            <div class="main-card border border-top-0 mt-2">
              <h5 class="fs-1 card-title py-4 mt-0">QUIZ PERFETTO!</h5>
              <div
                class="d-inline-flex justify-content-between align-items-baseline fs-2 fw-bold px-2 my-2"
              >
                <p class="final-score me-2">
                  Il tuo punteggio è {{ score }} / {{ questions.length }}
                </p>
                <router-link to="/" id="pippo">Torna al menù</router-link>
              </div>
            </div>
          </template>
        </div>
      </div>
    </section>
  </main>
</template>

<style lang="scss" scoped>
.info-box {
  padding: 1rem;
  width: 100%;
  max-width: 640px;
  background-color: #fff;
  color: #060606;
  border: 1px solid #007bff;
  border-radius: 5px;
  transition: all 0.3s ease;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.4);

  span {
    color: #007bff;
  }
}

.card-title {
  width: 100%;
  text-align: center;
  background-color: #427aff;
  color: #fff;
  border-radius: 5px;
  font-weight: 700;
}

#pippo {
  font-size: 1.8rem;
  color: #007bff;
}
</style>
