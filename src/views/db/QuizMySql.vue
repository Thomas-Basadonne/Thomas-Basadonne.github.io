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
      mysqlQuestions: [
        {
          question: "Cos'è MySQL?",
          answer: 0,
          options: [
            "MySQL è un sistema di gestione di database relazionali open source.",
            "MySQL è un sistema operativo.",
            "MySQL è un software per la progettazione di siti web.",
            "MySQL è un framework per applicazioni mobili.",
          ],
          selected: null,
        },
        {
          question:
            "Qual è il linguaggio principale utilizzato per interagire con MySQL?",
          answer: 2,
          options: [
            "Il linguaggio principale utilizzato per interagire con MySQL è Python.",
            "Il linguaggio principale utilizzato per interagire con MySQL è C++.",
            "Il linguaggio principale utilizzato per interagire con MySQL è SQL.",
            "Il linguaggio principale utilizzato per interagire con MySQL è Java.",
          ],
          selected: null,
        },
        {
          question: 'Cosa rappresenta il termine "query" in MySQL?',
          answer: 0,
          options: [
            "Una \"query\" è una richiesta o un comando scritto in SQL per l'interrogazione, l'aggiornamento o la gestione dei dati nel database.",
            'Una "query" è una raccolta di dati non strutturati.',
            'Una "query" è un tipo di linguaggio di programmazione.',
            'Una "query" è una struttura di controllo in un programma.',
          ],
          selected: null,
        },
        {
          question:
            "Qual è il comando utilizzato per creare un nuovo database in MySQL?",
          answer: 1,
          options: [
            'Il comando utilizzato per creare un nuovo database è "INSERT".',
            'Il comando utilizzato per creare un nuovo database è "CREATE DATABASE".',
            'Il comando utilizzato per creare un nuovo database è "UPDATE".',
            'Il comando utilizzato per creare un nuovo database è "DELETE".',
          ],
          selected: null,
        },
        {
          question: 'Cosa rappresenta il termine "tabelle" in MySQL?',
          answer: 3,
          options: [
            'Le "tabelle" sono istruzioni condizionali utilizzate per il controllo del flusso di un programma.',
            'Le "tabelle" sono un tipo di diagramma utilizzato per la visualizzazione dei dati.',
            'Le "tabelle" sono uno strumento di visualizzazione dei dati su un sito web.',
            'Le "tabelle" sono strutture che memorizzano dati in modo tabulare, costituite da colonne e righe.',
          ],
          selected: null,
        },
        {
          question: 'Cosa rappresenta il termine "chiave primaria" in MySQL?',
          answer: 2,
          options: [
            'La "chiave primaria" è una funzione di ricerca in una tabella.',
            'La "chiave primaria" è un identificativo univoco assegnato a ogni record di una tabella.',
            'La "chiave primaria" è una restrizione che impedisce l\'accesso a una tabella.',
            'La "chiave primaria" è un comando utilizzato per eliminare dati da una tabella.',
          ],
          selected: null,
        },
        {
          question: 'Cosa fa il comando "SELECT" in MySQL?',
          answer: 0,
          options: [
            'Il comando "SELECT" è utilizzato per recuperare dati da una o più tabelle del database.',
            'Il comando "SELECT" è utilizzato per eliminare dati da una tabella.',
            'Il comando "SELECT" è utilizzato per creare una nuova tabella nel database.',
            'Il comando "SELECT" è utilizzato per creare un nuovo utente.',
          ],
          selected: null,
        },
        {
          question: 'Cosa rappresenta il termine "JOIN" in MySQL?',
          answer: 1,
          options: [
            'Il termine "JOIN" rappresenta un\'operazione di ordinamento dei dati in una tabella.',
            'Il termine "JOIN" rappresenta un\'operazione che combina dati da due o più tabelle basandosi su una relazione comune.',
            'Il termine "JOIN" rappresenta un\'operazione di copia di dati da un database a un altro.',
            'Il termine "JOIN" rappresenta una raccolta di comandi SQL.',
          ],
          selected: null,
        },
        {
          question: 'Cosa rappresenta il termine "indice" in MySQL?',
          answer: 3,
          options: [
            'Un "indice" è una struttura di dati utilizzata per migliorare le prestazioni delle query.',
            'Un "indice" è una funzione matematica utilizzata per il calcolo dei dati.',
            'Un "indice" è una raccolta di dati non strutturati.',
            'Un "indice" è un tipo di strumento di disegno grafico.',
          ],
          selected: null,
        },
        {
          question:
            "Qual è il comando utilizzato per eliminare una tabella in MySQL?",
          answer: 2,
          options: [
            'Il comando utilizzato per eliminare una tabella è "SELECT".',
            'Il comando utilizzato per eliminare una tabella è "INSERT".',
            'Il comando utilizzato per eliminare una tabella è "DROP TABLE".',
            'Il comando utilizzato per eliminare una tabella è "CREATE TABLE".',
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
  <Quiz :questions="mysqlQuestions" />
</template>

<style lang="scss" scoped></style>
