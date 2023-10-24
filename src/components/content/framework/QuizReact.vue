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
      title: "REACT",
      reactQuestions: [
        {
          question: "Cos'è React?",
          answer: 1,
          options: [
            "React è un framework per lo sviluppo di applicazioni mobili.",
            "React è una libreria JavaScript per la creazione di interfacce utente.",
            "React è un sistema operativo.",
            "React è uno strumento per la progettazione di siti web.",
          ],
          selected: null,
        },
        {
          question: "Qual è il concetto principale di React?",
          answer: 2,
          options: [
            "Il concetto principale è la gestione dei database relazionali.",
            "Il concetto principale è lo sviluppo di applicazioni mobili.",
            "Il concetto principale è la creazione di interfacce utente reattive.",
            "Il concetto principale è la progettazione di siti web.",
          ],
          selected: null,
        },
        {
          question: 'Cosa rappresenta il termine "componente" in React?',
          answer: 3,
          options: [
            'Un "componente" è un tipo di diagramma utilizzato per la visualizzazione dei dati.',
            'Un "componente" è un tipo di linguaggio di programmazione.',
            'Un "componente" è uno strumento per la progettazione di siti web.',
            'Un "componente" è una parte riutilizzabile di un\'interfaccia utente.',
          ],
          selected: null,
        },
        {
          question:
            "Qual è il metodo utilizzato per renderizzare un componente in React?",
          answer: 0,
          options: [
            'Il metodo utilizzato per renderizzare un componente è "render()".',
            'Il metodo utilizzato per renderizzare un componente è "show()".',
            'Il metodo utilizzato per renderizzare un componente è "display()".',
            'Il metodo utilizzato per renderizzare un componente è "create()".',
          ],
          selected: null,
        },
        {
          question: 'Cosa rappresenta il termine "props" in React?',
          answer: 2,
          options: [
            'Il termine "props" rappresenta una funzione matematica utilizzata per il calcolo dei dati.',
            'Il termine "props" rappresenta un tipo di grafico utilizzato per visualizzare dati.',
            'Il termine "props" rappresenta i dati che vengono passati da un componente padre a un componente figlio.',
            'Il termine "props" rappresenta una struttura di controllo in un programma.',
          ],
          selected: null,
        },
        {
          question: "Qual è il ciclo di vita di un componente in React?",
          answer: 1,
          options: [
            "Il ciclo di vita di un componente è costituito da quattro fasi: montaggio, aggiornamento, smontaggio e error handling.",
            "Il ciclo di vita di un componente è costituito da tre fasi: montaggio, aggiornamento e smontaggio.",
            "Il ciclo di vita di un componente è costituito da due fasi: caricamento e salvataggio.",
            "Il ciclo di vita di un componente è costituito da cinque fasi: inizializzazione, esecuzione, completamento, errore e chiusura.",
          ],
          selected: null,
        },
        {
          question: 'Cosa fa il concetto di "Stato" in React?',
          answer: 3,
          options: [
            'Il concetto di "Stato" rappresenta una struttura di controllo utilizzata per il flusso di un programma.',
            'Il concetto di "Stato" rappresenta un tipo di grafico utilizzato per visualizzare dati.',
            'Il concetto di "Stato" rappresenta un meccanismo per memorizzare e gestire dati che possono cambiare nel tempo in un componente.',
            'Il concetto di "Stato" rappresenta una funzione matematica utilizzata per il calcolo dei dati.',
          ],
          selected: null,
        },
        {
          question: 'Cosa fa il concetto di "event handling" in React?',
          answer: 0,
          options: [
            "Il concetto di \"event handling\" rappresenta la gestione delle interazioni dell'utente con un'applicazione.",
            'Il concetto di "event handling" rappresenta un tipo di linguaggio di programmazione.',
            'Il concetto di "event handling" rappresenta un sistema operativo.',
            'Il concetto di "event handling" rappresenta un tipo di strumento per la progettazione di siti web.',
          ],
          selected: null,
        },
        {
          question:
            "Qual è il modulo di React utilizzato per la gestione dello stato in applicazioni?",
          answer: 1,
          options: [
            'Il modulo utilizzato per la gestione dello stato in applicazioni è "React Router".',
            'Il modulo utilizzato per la gestione dello stato in applicazioni è "Redux".',
            'Il modulo utilizzato per la gestione dello stato in applicazioni è "React Forms".',
            'Il modulo utilizzato per la gestione dello stato in applicazioni è "React Views".',
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
  <Quiz :questions="reactQuestions" :title="title" />
</template>

<style lang="scss" scoped></style>
