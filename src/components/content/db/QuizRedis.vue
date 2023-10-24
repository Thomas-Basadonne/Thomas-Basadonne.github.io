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
      redisQuestions: [
        {
          question: "Cos'è Redis?",
          answer: 0,
          options: [
            "Redis è un sistema di memorizzazione dati in memoria open source.",
            "Redis è un sistema operativo.",
            "Redis è un software per la progettazione di siti web.",
            "Redis è un framework per applicazioni mobili.",
          ],
          selected: null,
        },
        {
          question: "Qual è il tipo principale di dati supportato da Redis?",
          answer: 2,
          options: [
            "Il tipo principale di dati supportato da Redis è la struttura dati chiave-valore (key-value).",
            "Il tipo principale di dati supportato da Redis è il database relazionale.",
            "Il tipo principale di dati supportato da Redis è il linguaggio di programmazione.",
            "Il tipo principale di dati supportato da Redis è il file system.",
          ],
          selected: null,
        },
        {
          question: 'Cosa rappresenta il termine "chiave" in Redis?',
          answer: 0,
          options: [
            'Una "chiave" è una stringa unica utilizzata per identificare un valore all\'interno del database.',
            'Una "chiave" è un tipo di diagramma utilizzato per la visualizzazione dei dati.',
            'Una "chiave" è un tipo di linguaggio di programmazione.',
            'Una "chiave" è una struttura di controllo in un programma.',
          ],
          selected: null,
        },
        {
          question:
            "Qual è il comando utilizzato per impostare il valore di una chiave in Redis?",
          answer: 1,
          options: [
            'Il comando utilizzato per impostare il valore di una chiave è "SET".',
            'Il comando utilizzato per impostare il valore di una chiave è "INSERT".',
            'Il comando utilizzato per impostare il valore di una chiave è "UPDATE".',
            'Il comando utilizzato per impostare il valore di una chiave è "DELETE".',
          ],
          selected: null,
        },
        {
          question: 'Cosa fa il comando "GET" in Redis?',
          answer: 0,
          options: [
            'Il comando "GET" è utilizzato per recuperare il valore associato a una chiave specifica.',
            'Il comando "GET" è utilizzato per eliminare chiavi dal database.',
            'Il comando "GET" è utilizzato per creare nuove chiavi nel database.',
            'Il comando "GET" è utilizzato per creare un nuovo utente.',
          ],
          selected: null,
        },
        {
          question: 'Cosa rappresenta il termine "espirazione" in Redis?',
          answer: 2,
          options: [
            "L'espirazione è un tipo di operazione matematica.",
            "L'espirazione è un tipo di grafico utilizzato per visualizzare dati.",
            "L'espirazione è il meccanismo che consente di impostare una data di scadenza per una chiave nel database.",
            "L'espirazione è una struttura di controllo in un programma.",
          ],
          selected: null,
        },
        {
          question:
            "Qual è il comando utilizzato per eliminare una chiave in Redis?",
          answer: 3,
          options: [
            'Il comando utilizzato per eliminare una chiave è "EXPIRE".',
            'Il comando utilizzato per eliminare una chiave è "INSERT".',
            'Il comando utilizzato per eliminare una chiave è "DEL".',
            'Il comando utilizzato per eliminare una chiave è "CREATE".',
          ],
          selected: null,
        },
        {
          question: 'Cosa rappresenta il termine "pub/sub" in Redis?',
          answer: 0,
          options: [
            "Il termine rappresenta un sistema di messaggistica di tipo publish/subscribe utilizzato per la comunicazione tra client.",
            "Il termine rappresenta un tipo di grafico utilizzato per visualizzare dati.",
            "Il termine rappresenta un tipo di linguaggio di programmazione.",
            "Il termine rappresenta una struttura di controllo in un programma.",
          ],
          selected: null,
        },
        {
          question: 'Cosa fa il comando "RPUSH" in Redis?',
          answer: 1,
          options: [
            'Il comando "RPUSH" è utilizzato per aggiungere uno o più elementi alla fine di una lista.',
            'Il comando "RPUSH" è utilizzato per eliminare elementi da una lista.',
            'Il comando "RPUSH" è utilizzato per creare una nuova chiave nel database.',
            'Il comando "RPUSH" è utilizzato per creare un nuovo utente.',
          ],
          selected: null,
        },
        {
          question: 'Cosa rappresenta il termine "cluster" in Redis?',
          answer: 2,
          options: [
            "Il termine rappresenta un gruppo di server Redis che lavorano insieme per fornire scalabilità e alta disponibilità.",
            "Il termine rappresenta una raccolta di dati non strutturati.",
            "Il termine rappresenta un tipo di linguaggio di programmazione.",
            "Il termine rappresenta una struttura di controllo in un programma.",
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
  <Quiz :questions="redisQuestions" />
</template>

<style lang="scss" scoped></style>
