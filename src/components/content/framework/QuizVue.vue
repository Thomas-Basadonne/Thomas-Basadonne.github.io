<script>
import Quiz from "../../../views/Quiz.vue";
import AppHeader from "../../_partials/AppHeader.vue";
export default {
  components: {
    Quiz,
    AppHeader,
  },

  data() {
    return {
      title: "Vue.js",
      vueQuestions: [
        {
          question: "Cos'è Vue.js?",
          answer: 0,
          options: [
            "Vue.js è un framework JavaScript per la creazione di interfacce utente.",
            "Vue.js è un sistema operativo.",
            "Vue.js è un software per la progettazione di siti web.",
            "Vue.js è un framework per applicazioni mobili.",
          ],
          selected: null,
        },
        {
          question: "Qual è il principale obiettivo di Vue.js?",
          answer: 2,
          options: [
            "Il principale obiettivo è semplificare la creazione di interfacce utente reattive.",
            "Il principale obiettivo è scrivere applicazioni mobile native.",
            "Il principale obiettivo è creare interfacce utente dinamiche e reattive.",
            "Il principale obiettivo è gestire database relazionali.",
          ],
          selected: null,
        },
        {
          question: 'Cosa rappresenta il termine "componente" in Vue.js?',
          answer: 1,
          options: [
            'Un "componente" è un blocco autonomo di funzionalità e visualizzazione riutilizzabile.',
            'Un "componente" è un tipo di diagramma utilizzato per la visualizzazione dei dati.',
            'Un "componente" è un tipo di linguaggio di programmazione.',
            'Un "componente" è una struttura di controllo in un programma.',
          ],
          selected: null,
        },
        {
          question:
            "Qual è la direttiva utilizzata per collegare dati alle viste in Vue.js?",
          answer: 3,
          options: [
            'La direttiva utilizzata per collegare dati alle viste è "bind".',
            'La direttiva utilizzata per collegare dati alle viste è "model".',
            'La direttiva utilizzata per collegare dati alle viste è "connect".',
            'La direttiva utilizzata per collegare dati alle viste è "v-model".',
          ],
          selected: null,
        },
        {
          question: 'Cosa rappresenta il termine "direzionale" in Vue.js?',
          answer: 0,
          options: [
            'Il termine "direzionale" rappresenta il flusso dei dati unidirezionale, dalla vista al modello.',
            'Il termine "direzionale" rappresenta un tipo di grafico utilizzato per visualizzare dati.',
            'Il termine "direzionale" rappresenta un tipo di linguaggio di programmazione.',
            'Il termine "direzionale" rappresenta una struttura di controllo in un programma.',
          ],
          selected: null,
        },
        {
          question: "Qual è il ciclo di vita di un componente Vue?",
          answer: 2,
          options: [
            "Il ciclo di vita di un componente Vue è costituito da tre fasi: montaggio, aggiornamento e smontaggio.",
            "Il ciclo di vita di un componente Vue è costituito da quattro fasi: inizializzazione, esecuzione, completamento e chiusura.",
            "Il ciclo di vita di un componente Vue è costituito da tre fasi: creazione, aggiornamento e distruzione.",
            "Il ciclo di vita di un componente Vue è costituito da due fasi: caricamento e salvataggio.",
          ],
          selected: null,
        },
        {
          question: 'Cosa fa la direttiva "v-for" in Vue.js?',
          answer: 0,
          options: [
            'La direttiva "v-for" viene utilizzata per iterare su una lista di elementi e generare dinamicamente gli elementi HTML corrispondenti.',
            'La direttiva "v-for" viene utilizzata per nascondere gli elementi nella vista.',
            'La direttiva "v-for" viene utilizzata per definire variabili locali.',
            'La direttiva "v-for" viene utilizzata per creare nuovi componenti.',
          ],
          selected: null,
        },
        {
          question: "Cosa rappresenta il termine 'two-way binding' in Vue.js?",
          answer: 1,
          options: [
            "Il 'two-way binding' rappresenta la comunicazione bidirezionale tra il modello e la vista.",
            "Il 'two-way binding' rappresenta una direzione unica dalla vista al modello.",
            "Il 'two-way binding' rappresenta un tipo di linguaggio di programmazione.",
            "Il 'two-way binding' rappresenta una raccolta di dati non strutturati.",
          ],
          selected: null,
        },
        {
          question: 'Cosa fa il comando "Vue.use" in Vue.js?',
          answer: 0,
          options: [
            'Il comando "Vue.use" viene utilizzato per installare i plugin globali all\'interno di un progetto.',
            'Il comando "Vue.use" viene utilizzato per creare nuovi componenti Vue.',
            'Il comando "Vue.use" viene utilizzato per avviare l\'applicazione Vue.',
            'Il comando "Vue.use" viene utilizzato per generare dati casuali.',
          ],
          selected: null,
        },
        {
          question: 'Cosa rappresenta il termine "CLI" in Vue.js?',
          answer: 3,
          options: [
            'Il termine "CLI" rappresenta l\'interfaccia a riga di comando utilizzata per creare e gestire progetti Vue.',
            'Il termine "CLI" rappresenta un tipo di grafico utilizzato per visualizzare dati.',
            'Il termine "CLI" rappresenta un tipo di linguaggio di programmazione.',
            'Il termine "CLI" rappresenta una struttura di controllo in un programma.',
          ],
          selected: null,
        },
      ],
    };
  },
};
</script>

<template>
  <AppHeader />
  <Quiz :questions="vueQuestions" :title="title" />
</template>

<style lang="scss" scoped></style>
