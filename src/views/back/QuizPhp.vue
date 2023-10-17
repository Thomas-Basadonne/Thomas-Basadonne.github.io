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
      phpQuestions: [
        {
          question: "Cos'è PHP?",
          answer: 0,
          options: [
            "PHP è un linguaggio di scripting lato server ampiamente utilizzato per lo sviluppo web.",
            "PHP è un sistema di gestione di database relazionali.",
            "PHP è un framework per applicazioni mobili.",
            "PHP è un linguaggio di markup per la creazione di pagine web.",
          ],
          selected: null,
        },
        {
          question: 'Qual è la differenza tra "echo" e "print" in PHP?',
          answer: 1,
          options: [
            '"echo" è un costrutto del linguaggio, mentre "print" è una funzione.',
            '"echo" è utilizzato per stampare testo su schermo, mentre "print" restituisce un valore.',
            '"print" è più veloce di "echo" in PHP.',
            '"echo" e "print" sono sinonimi in PHP.',
          ],
          selected: null,
        },
        {
          question: "Cosa rappresenta il termine 'WAMP' in PHP?",
          answer: 0,
          options: [
            "WAMP è un acronimo che sta per 'Windows, Apache, MySQL, PHP'",
            "WAMP è un framework PHP popolare su sistemi Windows.",
            "WAMP è una libreria per il controllo degli accessi in PHP.",
            "WAMP è un protocollo di comunicazione utilizzato nelle applicazioni web.",
          ],
          selected: null,
        },
        {
          question: "Qual è il significato dell'acronimo 'MVC' in PHP?",
          answer: 3,
          options: [
            "Model View Control",
            "Multiple View Control",
            "Main View Control",
            "Model-View-Controller",
          ],
          selected: null,
        },
        {
          question: "Cosa fa la funzione 'mysqli_connect' in PHP?",
          answer: 2,
          options: [
            "La funzione 'mysqli_connect' crea un nuovo file di testo in PHP.",
            "La funzione 'mysqli_connect' serve per collegarsi a una rete Wi-Fi.",
            "La funzione 'mysqli_connect' stabilisce una connessione al database MySQL.",
            "La funzione 'mysqli_connect' crea un nuovo file XML in PHP.",
          ],
          selected: null,
        },
        {
          question: "Cosa rappresenta il termine 'XSS' in PHP?",
          answer: 0,
          options: [
            "XSS è una vulnerabilità di sicurezza che consente a un attaccante di iniettare script malevoli in pagine web",
            "XSS è un linguaggio di scripting utilizzato per creare siti web dinamici.",
            "XSS è una libreria per la gestione delle sessioni in PHP.",
            "XSS è un framework PHP per lo sviluppo di applicazioni web.",
          ],
          selected: null,
        },
        {
          question: "Cosa rappresenta il termine 'Composer' in PHP?",
          answer: 1,
          options: [
            "Composer è un'ambiente di sviluppo integrato (IDE) per PHP.",
            "Composer è uno strumento di gestione delle dipendenze utilizzato per le librerie e i pacchetti in progetti PHP.",
            "Composer è un sistema di gestione dei database in PHP.",
            "Composer è un'editor di codice open source.",
          ],
          selected: null,
        },
        {
          question: "Cosa fa la funzione 'json_encode' in PHP?",
          answer: 2,
          options: [
            "La funzione 'json_encode' è utilizzata per cifrare dati in PHP.",
            "La funzione 'json_encode' consente di generare un token di autenticazione.",
            "La funzione 'json_encode' converte un array PHP in una stringa JSON.",
            "La funzione 'json_encode' serve per creare file CSV.",
          ],
          selected: null,
        },
        {
          question: "Cosa rappresenta il termine 'Laravel' in PHP?",
          answer: 0,
          options: [
            "Laravel è un framework PHP per lo sviluppo di applicazioni web.",
            "Laravel è una libreria per la manipolazione delle immagini in PHP.",
            "Laravel è un sistema operativo per server web.",
            "Laravel è un database NoSQL open source.",
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
  <Quiz :questions="phpQuestions" />
</template>

<style lang="scss" scoped></style>
