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
            "MySQL è un sistema di gestione di database relazionali open source ampiamente utilizzato.",
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
            "Il linguaggio principale utilizzato per interagire con MySQL è SQL (Structured Query Language).",
            "Il linguaggio principale utilizzato per interagire con MySQL è Java.",
          ],
          selected: null,
        },
        {
          question: 'Cosa rappresenta il termine "query" in MySQL?',
          answer: 0,
          options: [
            "Una \"query\" in MySQL è una richiesta o un comando scritto in SQL per l'interrogazione, l'aggiornamento o la gestione dei dati nel database.",
            'Una "query" in MySQL è una raccolta di dati non strutturati.',
            'Una "query" in MySQL è un tipo di linguaggio di programmazione.',
            'Una "query" in MySQL è una struttura di controllo in un programma.',
          ],
          selected: null,
        },
        {
          question:
            "Qual è il comando utilizzato per creare un nuovo database in MySQL?",
          answer: 1,
          options: [
            'Il comando utilizzato per creare un nuovo database in MySQL è "INSERT".',
            'Il comando utilizzato per creare un nuovo database in MySQL è "CREATE DATABASE".',
            'Il comando utilizzato per creare un nuovo database in MySQL è "UPDATE".',
            'Il comando utilizzato per creare un nuovo database in MySQL è "DELETE".',
          ],
          selected: null,
        },
        {
          question: 'Cosa rappresenta il termine "tabelle" in MySQL?',
          answer: 3,
          options: [
            'Le "tabelle" in MySQL sono istruzioni condizionali utilizzate per il controllo del flusso di un programma.',
            'Le "tabelle" in MySQL sono un tipo di diagramma utilizzato per la visualizzazione dei dati.',
            'Le "tabelle" in MySQL sono uno strumento di visualizzazione dei dati su un sito web.',
            'Le "tabelle" in MySQL sono strutture che memorizzano dati in modo tabulare, costituite da colonne e righe.',
          ],
          selected: null,
        },
        {
          question: 'Cosa rappresenta il termine "chiave primaria" in MySQL?',
          answer: 2,
          options: [
            'La "chiave primaria" in MySQL è una funzione di ricerca in una tabella.',
            'La "chiave primaria" in MySQL è un identificativo univoco assegnato a ogni record di una tabella.',
            'La "chiave primaria" in MySQL è una restrizione che impedisce l\'accesso a una tabella.',
            'La "chiave primaria" in MySQL è un comando utilizzato per eliminare dati da una tabella.',
          ],
          selected: null,
        },
        {
          question: 'Cosa fa il comando "SELECT" in MySQL?',
          answer: 0,
          options: [
            'Il comando "SELECT" in MySQL è utilizzato per recuperare dati da una o più tabelle del database.',
            'Il comando "SELECT" in MySQL è utilizzato per eliminare dati da una tabella.',
            'Il comando "SELECT" in MySQL è utilizzato per creare una nuova tabella nel database.',
            'Il comando "SELECT" in MySQL è utilizzato per creare un nuovo utente.',
          ],
          selected: null,
        },
        {
          question: 'Cosa rappresenta il termine "JOIN" in MySQL?',
          answer: 1,
          options: [
            'Il termine "JOIN" in MySQL rappresenta un\'operazione di ordinamento dei dati in una tabella.',
            'Il termine "JOIN" in MySQL rappresenta un\'operazione che combina dati da due o più tabelle basandosi su una relazione comune.',
            'Il termine "JOIN" in MySQL rappresenta un\'operazione di copia di dati da un database a un altro.',
            'Il termine "JOIN" in MySQL rappresenta una raccolta di comandi SQL.',
          ],
          selected: null,
        },
        {
          question: 'Cosa rappresenta il termine "indice" in MySQL?',
          answer: 3,
          options: [
            'Un "indice" in MySQL è una struttura di dati utilizzata per migliorare le prestazioni delle query, consentendo di accedere rapidamente ai dati in una tabella.',
            'Un "indice" in MySQL è una funzione matematica utilizzata per il calcolo dei dati.',
            'Un "indice" in MySQL è una raccolta di dati non strutturati.',
            'Un "indice" in MySQL è un tipo di strumento di disegno grafico.',
          ],
          selected: null,
        },
        {
          question:
            "Qual è il comando utilizzato per eliminare una tabella in MySQL?",
          answer: 2,
          options: [
            'Il comando utilizzato per eliminare una tabella in MySQL è "SELECT".',
            'Il comando utilizzato per eliminare una tabella in MySQL è "INSERT".',
            'Il comando utilizzato per eliminare una tabella in MySQL è "DROP TABLE".',
            'Il comando utilizzato per eliminare una tabella in MySQL è "CREATE TABLE".',
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
