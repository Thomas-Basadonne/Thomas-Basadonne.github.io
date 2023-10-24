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
      sqlQuestions: [
        {
          question: "Cos'è SQL?",
          answer: 0,
          options: [
            "SQL sta per Structured Query Language ed è un linguaggio di programmazione per la gestione dei database relazionali.",
            "SQL sta per Simple Query Language ed è un linguaggio di programmazione per la creazione di siti web.",
            "SQL sta per System Query Language ed è un sistema operativo.",
            "SQL sta per Software Query Language ed è un software per la gestione dei database.",
          ],
          selected: null,
        },
        {
          question: "Qual è lo scopo principale di SQL?",
          answer: 0,
          options: [
            "Lo scopo principale è interrogare, manipolare e gestire database relazionali.",
            "Lo scopo principale è creare siti web dinamici.",
            "Lo scopo principale è scrivere software per smartphone.",
            "Lo scopo principale è gestire il sistema operativo.",
          ],
          selected: null,
        },
        {
          question: 'Cosa rappresenta il termine "query" in SQL?',
          answer: 2,
          options: [
            'Una "query" è un\'operazione di copia di dati da un database a un altro.',
            'Una "query" è una dichiarazione di attributi di una tabella.',
            'Una "query" è un comando utilizzato per interrogare un database al fine di recuperare, aggiornare o manipolare dati.',
            'Una "query" è un\'operazione di salvataggio di dati nel database.',
          ],
          selected: null,
        },
        {
          question: 'Cosa rappresenta il termine "relazione" in SQL?',
          answer: 1,
          options: [
            'Una "relazione" è una dichiarazione di attributi di una tabella.',
            'Una "relazione" è una tabella che rappresenta un insieme di dati correlati.',
            'Una "relazione" è una connessione tra due database.',
            'Una "relazione" è una formula matematica utilizzata per calcolare dati.',
          ],
          selected: null,
        },
        {
          question: 'Cosa fa il comando "SELECT" in SQL?',
          answer: 3,
          options: [
            'Il comando "SELECT" crea una nuova tabella nel database.',
            'Il comando "SELECT" aggiorna i dati in una tabella.',
            'Il comando "SELECT" elimina dati da una tabella.',
            'Il comando "SELECT" recupera dati da una o più tabelle.',
          ],
          selected: null,
        },
        {
          question: 'Cosa rappresenta il termine "schema" in SQL?',
          answer: 0,
          options: [
            'Lo "schema" rappresenta la struttura di un database, inclusi i dettagli sulle tabelle, le colonne e le relazioni.',
            'Lo "schema" rappresenta una sequenza di comandi SQL.',
            'Lo "schema" rappresenta una raccolta di dati non strutturati.',
            'Lo "schema" rappresenta una formula matematica utilizzata per il calcolo dei dati.',
          ],
          selected: null,
        },
        {
          question: 'Cosa fa il comando "UPDATE" in SQL?',
          answer: 2,
          options: [
            'Il comando "UPDATE" crea una nuova tabella nel database.',
            'Il comando "UPDATE" elimina dati da una tabella.',
            'Il comando "UPDATE" modifica i dati esistenti in una tabella.',
            'Il comando "UPDATE" recupera dati da una tabella.',
          ],
          selected: null,
        },
        {
          question: 'Cosa fa il comando "DELETE" in SQL?',
          answer: 1,
          options: [
            'Il comando "DELETE" modifica i dati esistenti in una tabella.',
            'Il comando "DELETE" elimina dati da una tabella.',
            'Il comando "DELETE" crea una nuova tabella nel database.',
            'Il comando "DELETE" recupera dati da una tabella.',
          ],
          selected: null,
        },
        {
          question: 'Qual è la funzione principale del comando "JOIN" in SQL?',
          answer: 2,
          options: [
            "Il comando è utilizzato per inserire nuovi dati in una tabella.",
            "Il comando è utilizzato per creare una copia di una tabella esistente.",
            "Il comando è utilizzato per combinare dati da due o più tabelle basandosi su una relazione comune.",
            "Il comando è utilizzato per rinominare una tabella.",
          ],
          selected: null,
        },
        {
          question: 'Cosa rappresenta il termine "indice" in SQL?',
          answer: 3,
          options: [
            'Un "indice" è una funzione matematica utilizzata per il calcolo dei dati.',
            'Un "indice" è una connessione tra due database.',
            'Un "indice" è una formula per l\'elaborazione dei dati.',
            'Un "indice" è una struttura di dati utilizzata per migliorare le prestazioni delle query.',
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
  <Quiz :questions="sqlQuestions" />
</template>

<style lang="scss" scoped></style>
