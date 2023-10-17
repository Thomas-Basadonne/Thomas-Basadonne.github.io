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
      mongodbQuestions: [
        {
          question: "Cos'è MongoDB?",
          answer: 0,
          options: [
            "MongoDB è un sistema di gestione di database NoSQL ampiamente utilizzato.",
            "MongoDB è un sistema operativo.",
            "MongoDB è un software per la progettazione di siti web.",
            "MongoDB è un framework per applicazioni mobili.",
          ],
          selected: null,
        },
        {
          question:
            "Qual è il linguaggio principale utilizzato per interagire con MongoDB?",
          answer: 1,
          options: [
            "Il linguaggio principale utilizzato per interagire con MongoDB è Python.",
            "Il linguaggio principale utilizzato per interagire con MongoDB è JavaScript.",
            "Il linguaggio principale utilizzato per interagire con MongoDB è C++.",
            "Il linguaggio principale utilizzato per interagire con MongoDB è Java.",
          ],
          selected: null,
        },
        {
          question: 'Cosa rappresenta il termine "documento" in MongoDB?',
          answer: 0,
          options: [
            'Un "documento" è una struttura dati che memorizza informazioni in formato JSON-like',
            'Un "documento" è un tipo di diagramma utilizzato per la visualizzazione dei dati.',
            'Un "documento" è un tipo di linguaggio di programmazione.',
            'Un "documento" è una struttura che contiene i dati e le informazioni in un formato flessibile.',
          ],
          selected: null,
        },
        {
          question:
            "Qual è il comando utilizzato per creare una nuova raccolta in MongoDB?",
          answer: 0,
          options: [
            'Il comando utilizzato per creare una nuova raccolta è "db.createCollection".',
            'Il comando utilizzato per creare una nuova raccolta è "INSERT".',
            'Il comando utilizzato per creare una nuova raccolta è "UPDATE".',
            'Il comando utilizzato per creare una nuova raccolta è "DELETE".',
          ],
          selected: null,
        },
        {
          question: 'Cosa rappresenta il termine "query" in MongoDB?',
          answer: 2,
          options: [
            'Una "query" è una richiesta o un comando scritto in un linguaggio di interrogazione per recuperare dati dal database.',
            'Una "query" è una raccolta di dati non strutturati.',
            'Una "query" è un tipo di linguaggio di interrogazione utilizzato per recuperare dati dal database.',
            'Una "query" è una struttura di controllo in un programma.',
          ],
          selected: null,
        },
        {
          question: 'Cosa fa il comando "find" in MongoDB?',
          answer: 0,
          options: [
            'Il comando "find"  è utilizzato per recuperare documenti da una raccolta in base a criteri specifici.',
            'Il comando "find"  è utilizzato per eliminare documenti da una raccolta.',
            'Il comando "find"  è utilizzato per creare una nuova raccolta nel database.',
            'Il comando "find"  è utilizzato per creare un nuovo utente.',
          ],
          selected: null,
        },
        {
          question: 'Cosa rappresenta il termine "indice" in MongoDB?',
          answer: 1,
          options: [
            'Un "indice" è una struttura di dati utilizzata per migliorare le prestazioni delle query, consentendo di accedere rapidamente ai dati in una raccolta.',
            'Un "indice" è una funzione matematica utilizzata per il calcolo dei dati.',
            'Un "indice" è una raccolta di dati non strutturati.',
            'Un "indice" è un tipo di strumento di disegno grafico.',
          ],
          selected: null,
        },
        {
          question:
            "Qual è il comando utilizzato per eliminare documenti da una raccolta in MongoDB?",
          answer: 2,
          options: [
            'Il comando utilizzato per eliminare documenti da una raccolta è "db.collectionName.remove({})".',
            'Il comando utilizzato per eliminare documenti da una raccolta è "INSERT".',
            'Il comando utilizzato per eliminare documenti da una raccolta è "DROP".',
            'Il comando utilizzato per eliminare documenti da una raccolta è "CREATE".',
          ],
          selected: null,
        },
        {
          question: 'Cosa rappresenta il termine "aggregazione" in MongoDB?',
          answer: 3,
          options: [
            "L'aggregazione è una raccolta di dati da diverse raccolte e l'applicazione di operazioni di trasformazione sui dati risultanti.",
            "L'aggregazione è un tipo di grafico utilizzato per visualizzare dati.",
            "L'aggregazione è un tipo di linguaggio di programmazione.",
            "L'aggregazione è un comando utilizzato per creare documenti.",
          ],
          selected: null,
        },
        {
          question:
            "Qual è il comando utilizzato per aggiungere un nuovo documento a una raccolta in MongoDB?",
          answer: 1,
          options: [
            'Il comando utilizzato per aggiungere un nuovo documento a una raccolta è "db.collectionName.insertOne(document)".',
            'Il comando utilizzato per aggiungere un nuovo documento a una raccolta è "UPDATE".',
            'Il comando utilizzato per aggiungere un nuovo documento a una raccolta è "CREATE".',
            'Il comando utilizzato per aggiungere un nuovo documento a una raccolta è "SELECT".',
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
  <Quiz :questions="mongodbQuestions" />
</template>

<style lang="scss" scoped></style>
