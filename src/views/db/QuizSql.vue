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
            "Lo scopo principale di SQL è interrogare, manipolare e gestire database relazionali.",
            "Lo scopo principale di SQL è creare siti web dinamici.",
            "Lo scopo principale di SQL è scrivere software per smartphone.",
            "Lo scopo principale di SQL è gestire il sistema operativo.",
          ],
          selected: null,
        },
        {
          question: 'Cosa rappresenta il termine "query" in SQL?',
          answer: 2,
          options: [
            'Una "query" in SQL è un\'operazione di copia di dati da un database a un altro.',
            'Una "query" in SQL è una dichiarazione di attributi di una tabella.',
            'Una "query" in SQL è un comando utilizzato per interrogare un database al fine di recuperare, aggiornare o manipolare dati.',
            'Una "query" in SQL è un\'operazione di salvataggio di dati nel database.',
          ],
          selected: null,
        },
        {
          question: 'Cosa rappresenta il termine "relazione" in SQL?',
          answer: 1,
          options: [
            'Una "relazione" in SQL è una dichiarazione di attributi di una tabella.',
            'Una "relazione" in SQL è una tabella che rappresenta un insieme di dati correlati.',
            'Una "relazione" in SQL è una connessione tra due database.',
            'Una "relazione" in SQL è una formula matematica utilizzata per calcolare dati.',
          ],
          selected: null,
        },
        {
          question: 'Cosa fa il comando "SELECT" in SQL?',
          answer: 3,
          options: [
            'Il comando "SELECT" in SQL crea una nuova tabella nel database.',
            'Il comando "SELECT" in SQL aggiorna i dati in una tabella.',
            'Il comando "SELECT" in SQL elimina dati da una tabella.',
            'Il comando "SELECT" in SQL recupera dati da una o più tabelle per la visualizzazione o l\'elaborazione.',
          ],
          selected: null,
        },
        {
          question: 'Cosa rappresenta il termine "schema" in SQL?',
          answer: 0,
          options: [
            'Lo "schema" in SQL rappresenta la struttura di un database, inclusi i dettagli sulle tabelle, le colonne e le relazioni.',
            'Lo "schema" in SQL rappresenta una sequenza di comandi SQL.',
            'Lo "schema" in SQL rappresenta una raccolta di dati non strutturati.',
            'Lo "schema" in SQL rappresenta una formula matematica utilizzata per il calcolo dei dati.',
          ],
          selected: null,
        },
        {
          question: 'Cosa fa il comando "UPDATE" in SQL?',
          answer: 2,
          options: [
            'Il comando "UPDATE" in SQL crea una nuova tabella nel database.',
            'Il comando "UPDATE" in SQL elimina dati da una tabella.',
            'Il comando "UPDATE" in SQL modifica i dati esistenti in una tabella.',
            'Il comando "UPDATE" in SQL recupera dati da una tabella.',
          ],
          selected: null,
        },
        {
          question: 'Cosa fa il comando "DELETE" in SQL?',
          answer: 1,
          options: [
            'Il comando "DELETE" in SQL modifica i dati esistenti in una tabella.',
            'Il comando "DELETE" in SQL elimina dati da una tabella.',
            'Il comando "DELETE" in SQL crea una nuova tabella nel database.',
            'Il comando "DELETE" in SQL recupera dati da una tabella.',
          ],
          selected: null,
        },
        {
          question: 'Qual è la funzione principale del comando "JOIN" in SQL?',
          answer: 2,
          options: [
            'Il comando "JOIN" in SQL è utilizzato per inserire nuovi dati in una tabella.',
            'Il comando "JOIN" in SQL è utilizzato per creare una copia di una tabella esistente.',
            'Il comando "JOIN" in SQL è utilizzato per combinare dati da due o più tabelle basandosi su una relazione comune.',
            'Il comando "JOIN" in SQL è utilizzato per rinominare una tabella.',
          ],
          selected: null,
        },
        {
          question: 'Cosa rappresenta il termine "indice" in SQL?',
          answer: 3,
          options: [
            'Un "indice" in SQL è una funzione matematica utilizzata per il calcolo dei dati.',
            'Un "indice" in SQL è una connessione tra due database.',
            'Un "indice" in SQL è una formula per l\'elaborazione dei dati.',
            'Un "indice" in SQL è una struttura di dati utilizzata per migliorare le prestazioni delle query, consentendo di accedere rapidamente ai dati in una tabella.',
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
