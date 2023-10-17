<script>
import Quiz from "../../components/Quiz.vue";
import AppHeader from "../../components/AppHeader.vue";

export default {
  components: {
    Quiz,
    AppHeader,
  },

  data() {
    return {
      pyQuestions: [
        {
          question: "Cos'è Python?",
          answer: 0,
          options: [
            "Python è un linguaggio di programmazione ad alto livello e multiparadigma.",
            "Python è un serpente velenoso.",
            "Python è un sistema operativo.",
            "Python è un software per la progettazione di siti web.",
          ],
          selected: null,
        },
        {
          question: "Chi è l'autore principale di Python?",
          answer: 3,
          options: [
            "L'autore principale di Python è Guido van Rossum.",
            "L'autore principale di Python è Mark Zuckerberg.",
            "L'autore principale di Python è Linus Torvalds.",
            "L'autore principale di Python è Elon Musk.",
          ],
          selected: null,
        },
        {
          question: "Qual è il principale obiettivo di Python?",
          answer: 2,
          options: [
            "Il principale obiettivo di Python è sviluppare applicazioni mobili.",
            "Il principale obiettivo di Python è progettare siti web.",
            "Il principale obiettivo di Python è massimizzare la leggibilità del codice e la facilità di sviluppo.",
            "Il principale obiettivo di Python è gestire database relazionali.",
          ],
          selected: null,
        },
        {
          question:
            "Qual è la sintassi di base di Python per la stampa di un messaggio?",
          answer: 1,
          options: [
            'La sintassi di base di Python per la stampa di un messaggio è "print("Hello, World!")".',
            'La sintassi di base di Python per la stampa di un messaggio è "console.log("Hello, World!");".',
            'La sintassi di base di Python per la stampa di un messaggio è "System.out.println("Hello, World!");".',
            'La sintassi di base di Python per la stampa di un messaggio è "echo "Hello, World!";".',
          ],
          selected: null,
        },
        {
          question: 'Cosa rappresenta il termine "PEP 8" in Python?',
          answer: 0,
          options: [
            'Il termine "PEP 8" rappresenta le linee guida per la formattazione del codice Python, volte a migliorare la leggibilità.',
            'Il termine "PEP 8" rappresenta un framework per lo sviluppo di applicazioni web.',
            'Il termine "PEP 8" rappresenta un sistema operativo.',
            'Il termine "PEP 8" rappresenta un tipo di linguaggio di programmazione.',
          ],
          selected: null,
        },
        {
          question: 'Cosa fa il modulo "NumPy" in Python?',
          answer: 2,
          options: [
            'Il modulo "NumPy" è utilizzato per la progettazione di siti web.',
            'Il modulo "NumPy" è utilizzato per la gestione delle interfacce utente.',
            'Il modulo "NumPy" è una libreria utilizzata per eseguire calcoli numerici e operazioni su array multidimensionali.',
            'Il modulo "NumPy" è un tipo di strumento di disegno grafico.',
          ],
          selected: null,
        },
        {
          question: 'Cosa rappresenta il termine "Pythonic"?',
          answer: 3,
          options: [
            'Il termine "Pythonic" rappresenta una struttura di controllo in un programma.',
            'Il termine "Pythonic" rappresenta un tipo di grafico utilizzato per visualizzare dati.',
            'Il termine "Pythonic" rappresenta un meccanismo per la gestione delle transazioni.',
            "Il termine \"Pythonic\" rappresenta un concetto che enfatizza l'eleganza del codice Python, la chiarezza e l'aderenza alle linee guida di Python.",
          ],
          selected: null,
        },
        {
          question:
            'Cosa rappresenta il termine "interpretato" in riferimento a Python?',
          answer: 0,
          options: [
            'Il termine "interpretato" in riferimento a Python significa che il codice sorgente Python è eseguito direttamente da un interprete senza la necessità di una compilazione separata.',
            'Il termine "interpretato" in riferimento a Python rappresenta una funzione matematica utilizzata per il calcolo dei dati.',
            'Il termine "interpretato" in riferimento a Python rappresenta un sistema operativo.',
            'Il termine "interpretato" in riferimento a Python rappresenta un tipo di grafico utilizzato per visualizzare dati.',
          ],
          selected: null,
        },
        {
          question:
            "Qual è il modulo utilizzato per la gestione delle basi di dati relazionali?",
          answer: 2,
          options: [
            "Il modulo utilizzato per la gestione delle basi di dati relazionali è SQLite.",
            "Il modulo utilizzato per la gestione delle basi di dati relazionali è Pandas.",
            "Il modulo utilizzato per la gestione delle basi di dati relazionali è SQLAlchemy.",
            "Il modulo utilizzato per la gestione delle basi di dati relazionali è Matplotlib.",
          ],
          selected: null,
        },
        {
          question: 'Cosa rappresenta il termine "Django" in Python?',
          answer: 1,
          options: [
            'Il termine "Django" rappresenta un framework per lo sviluppo di applicazioni web.',
            'Il termine "Django" rappresenta un framework per applicazioni web che offre un set completo di strumenti per la creazione di applicazioni web.',
            'Il termine "Django" rappresenta un tipo di linguaggio di programmazione.',
            'Il termine "Django" rappresenta un sistema operativo.',
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
  <Quiz :questions="pyQuestions" />
</template>

<style lang="scss" scoped></style>
