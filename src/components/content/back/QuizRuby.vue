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
      rubyQuestions: [
        {
          question: "Cos'è Ruby?",
          answer: 0,
          options: [
            "Ruby è un linguaggio di programmazione dinamico e orientato agli oggetti.",
            "Ruby è un sistema operativo.",
            "Ruby è un software per la progettazione di siti web.",
            "Ruby è un framework per applicazioni mobili.",
          ],
          selected: null,
        },
        {
          question: "Chi è l'autore principale di Ruby?",
          answer: 2,
          options: [
            "L'autore principale è Matz.",
            "L'autore principale è Larry Wall.",
            "L'autore principale è Yukihiro Matsumoto, conosciuto come Matz.",
            "L'autore principale è Guido van Rossum.",
          ],
          selected: null,
        },
        {
          question: "Qual è il principale obiettivo di Ruby?",
          answer: 0,
          options: [
            "Il principale obiettivo è fornire un linguaggio di programmazione semplice ed elegante.",
            "Il principale obiettivo è sviluppare applicazioni mobili.",
            "Il principale obiettivo è progettare siti web.",
            "Il principale obiettivo è gestire database relazionali.",
          ],
          selected: null,
        },
        {
          question: "Qual è la sintassi di base per la stampa di un messaggio?",
          answer: 3,
          options: [
            'La sintassi di base per la stampa di un messaggio è "console.log("Hello, World!");".',
            'La sintassi di base per la stampa di un messaggio è "System.out.println("Hello, World!");".',
            'La sintassi di base per la stampa di un messaggio è "echo "Hello, World!";".',
            'La sintassi di base per la stampa di un messaggio è "puts "Hello, World!"".',
          ],
          selected: null,
        },
        {
          question: 'Cosa rappresenta il termine "gem" in Ruby?',
          answer: 0,
          options: [
            'Il termine "gem" rappresenta un pacchetto di software o libreria.',
            'Il termine "gem" rappresenta un tipo di linguaggio di programmazione.',
            'Il termine "gem" rappresenta un sistema operativo.',
            'Il termine "gem" rappresenta uno strumento per la progettazione di siti web.',
          ],
          selected: null,
        },
        {
          question: 'Cosa fa il modulo "Rails" in Ruby?',
          answer: 1,
          options: [
            'Il modulo "Rails" è utilizzato per la gestione delle interfacce utente.',
            'Il modulo "Rails" rappresenta il framework Ruby on Rails, utilizzato per lo sviluppo di applicazioni web.',
            'Il modulo "Rails" è utilizzato per la progettazione di siti web.',
            'Il modulo "Rails" è utilizzato per sviluppare applicazioni mobili.',
          ],
          selected: null,
        },
        {
          question: 'Cosa rappresenta il termine "RubyGems"?',
          answer: 2,
          options: [
            'Il termine "RubyGems" rappresenta una funzione matematica utilizzata per il calcolo dei dati in Ruby.',
            'Il termine "RubyGems" rappresenta un tipo di linguaggio di programmazione.',
            'Il termine "RubyGems" rappresenta un sistema di gestione dei pacchetti.',
            'Il termine "RubyGems" rappresenta un tipo di grafico utilizzato per visualizzare dati.',
          ],
          selected: null,
        },
        {
          question: 'Cosa rappresenta il termine "Ruby on Rails"?',
          answer: 0,
          options: [
            'Il termine rappresenta un framework di sviluppo web open-source scritto in Ruby, noto anche come "Rails".',
            "Il termine rappresenta un sistema operativo.",
            "Il termine rappresenta un tipo di linguaggio di programmazione.",
            "Il termine rappresenta uno strumento per la progettazione di siti web.",
          ],
          selected: null,
        },
        {
          question: "Qual è il ciclo di vita di una variabile in Ruby?",
          answer: 2,
          options: [
            "Il ciclo di vita di una variabile è definito dalla sua dichiarazione fino alla fine del programma.",
            "Il ciclo di vita di una variabile è definito dalla sua creazione fino alla chiusura del blocco in cui è dichiarata.",
            "Il ciclo di vita di una variabile è definito dalla sua visibilità all'interno del blocco in cui è dichiarata.",
            "Il ciclo di vita di una variabile è definito dalla sua tipologia di dati.",
          ],
          selected: null,
        },
        {
          question: 'Cosa rappresenta il termine "Metaprogramming" in Ruby?',
          answer: 1,
          options: [
            'Il termine "Metaprogramming" rappresenta un tipo di linguaggio di programmazione.',
            'Il termine "Metaprogramming" rappresenta la capacità di un programma di scrivere, modificare o analizzare il proprio codice durante l\'esecuzione.',
            'Il termine "Metaprogramming" rappresenta un sistema operativo.',
            'Il termine "Metaprogramming" rappresenta una struttura di controllo utilizzata per il flusso di un programma.',
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
  <Quiz :questions="rubyQuestions" />
</template>

<style lang="scss" scoped></style>
