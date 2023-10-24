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
      title: "Laravel",
      laravelQuestions: [
        {
          question: "Cos'è Laravel?",
          answer: 0,
          options: [
            "Laravel è un framework PHP per lo sviluppo di applicazioni web.",
            "Laravel è un sistema operativo.",
            "Laravel è un software per la progettazione di siti web.",
            "Laravel è un framework per applicazioni mobili.",
          ],
          selected: null,
        },
        {
          question: "Qual è il principale obiettivo di Laravel?",
          answer: 1,
          options: [
            "Il principale obiettivo è la creazione di applicazioni mobili.",
            "Il principale obiettivo è semplificare lo sviluppo di applicazioni web PHP.",
            "Il principale obiettivo è la progettazione di siti web.",
            "Il principale obiettivo è gestire database relazionali.",
          ],
          selected: null,
        },
        {
          question: 'Cosa rappresenta il termine "Eloquent" in Laravel?',
          answer: 3,
          options: [
            'Il termine "Eloquent" rappresenta una struttura di controllo utilizzata per il flusso di un programma.',
            'Il termine "Eloquent" rappresenta un tipo di linguaggio di programmazione.',
            'Il termine "Eloquent" rappresenta un meccanismo per la gestione delle interfacce utente.',
            'Il termine "Eloquent" rappresenta un ORM (Object-Relational Mapping) che semplifica l\'interazione con il database.',
          ],
          selected: null,
        },
        {
          question:
            "Qual è il comando utilizzato per creare un nuovo controller in Laravel?",
          answer: 2,
          options: [
            'Il comando utilizzato per creare un nuovo controller è "php artisan make:model".',
            'Il comando utilizzato per creare un nuovo controller è "php artisan make:middleware".',
            'Il comando utilizzato per creare un nuovo controller è "php artisan make:controller".',
            'Il comando utilizzato per creare un nuovo controller è "php artisan make:controllerModel".',
          ],
          selected: null,
        },
        {
          question: 'Cosa rappresenta il termine "Blade" in Laravel?',
          answer: 0,
          options: [
            'Il termine "Blade" rappresenta il motore di templating predefinito utilizzato per la generazione di viste.',
            'Il termine "Blade" rappresenta un tipo di linguaggio di programmazione.',
            'Il termine "Blade" rappresenta un sistema operativo.',
            'Il termine "Blade" rappresenta una struttura di controllo utilizzata per il flusso di un programma.',
          ],
          selected: null,
        },
        {
          question: "Qual è il middleware in Laravel?",
          answer: 1,
          options: [
            "Il middleware è una funzione JavaScript utilizzata per la gestione degli eventi nel frontend.",
            "Il middleware è un filtro che agisce prima di una richiesta HTTP, consentendo di eseguire operazioni come l'autenticazione o la registrazione delle attività.",
            "Il middleware è un tipo di linguaggio di programmazione.",
            "Il middleware è un sistema operativo open source.",
          ],
          selected: null,
        },
        {
          question: 'Cosa fa il comando "php artisan migrate" in Laravel?',
          answer: 3,
          options: [
            'Il comando "php artisan migrate" viene utilizzato per eseguire le migrazioni del database.',
            'Il comando "php artisan migrate" viene utilizzato per creare un nuovo controller.',
            'Il comando "php artisan migrate" viene utilizzato per generare nuovi modelli.',
            'Il comando "php artisan migrate" viene utilizzato per eseguire la migrazione dei dati da un database a un altro.',
          ],
          selected: null,
        },
        {
          question: 'Cosa rappresenta il termine "ORM" in Laravel?',
          answer: 0,
          options: [
            "Il termine rappresenta Object-Relational Mapping, che permette di interagire con il database utilizzando oggetti invece di query SQL dirette.",
            "Il termine rappresenta un tipo di linguaggio di programmazione.",
            "Il termine rappresenta un sistema operativo.",
            "Il termine rappresenta una struttura di controllo utilizzata per il flusso di un programma.",
          ],
          selected: null,
        },
        {
          question: "Qual è il concetto principale del routing in Laravel?",
          answer: 1,
          options: [
            "Il concetto principale è gestire il flusso di dati tra il client e il server.",
            "Il concetto principale è associare URL alle azioni del controller, consentendo di definire le route dell'applicazione.",
            "Il concetto principale è la progettazione dell'interfaccia utente.",
            "Il concetto principale è la creazione di siti web.",
          ],
          selected: null,
        },
        {
          question: "Cosa rappresenta il termine 'Eloquent ORM' in Laravel?",
          answer: 0,
          options: [
            "Il termine rappresenta un ORM (Object-Relational Mapping) che semplifica l'interazione con il database utilizzando oggetti.",
            "Il termine rappresenta un tipo di linguaggio di programmazione.",
            "Il termine rappresenta un sistema operativo.",
            "Il termine rappresenta una struttura di controllo utilizzata per il flusso di un programma.",
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
  <Quiz :questions="laravelQuestions" :title="title" />
</template>

<style lang="scss" scoped></style>
