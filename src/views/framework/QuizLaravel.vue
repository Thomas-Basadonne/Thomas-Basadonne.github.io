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
            "Il principale obiettivo di Laravel è la creazione di applicazioni mobili.",
            "Il principale obiettivo di Laravel è semplificare lo sviluppo di applicazioni web PHP.",
            "Il principale obiettivo di Laravel è la progettazione di siti web.",
            "Il principale obiettivo di Laravel è gestire database relazionali.",
          ],
          selected: null,
        },
        {
          question: 'Cosa rappresenta il termine "Eloquent" in Laravel?',
          answer: 3,
          options: [
            'Il termine "Eloquent" in Laravel rappresenta una struttura di controllo utilizzata per il flusso di un programma.',
            'Il termine "Eloquent" in Laravel rappresenta un tipo di linguaggio di programmazione.',
            'Il termine "Eloquent" in Laravel rappresenta un meccanismo per la gestione delle interfacce utente.',
            'Il termine "Eloquent" in Laravel rappresenta un ORM (Object-Relational Mapping) che semplifica l\'interazione con il database.',
          ],
          selected: null,
        },
        {
          question:
            "Qual è il comando utilizzato per creare un nuovo controller in Laravel?",
          answer: 2,
          options: [
            'Il comando utilizzato per creare un nuovo controller in Laravel è "php artisan make:model".',
            'Il comando utilizzato per creare un nuovo controller in Laravel è "php artisan make:middleware".',
            'Il comando utilizzato per creare un nuovo controller in Laravel è "php artisan make:controller".',
            'Il comando utilizzato per creare un nuovo controller in Laravel è "php artisan make:controllerModel".',
          ],
          selected: null,
        },
        {
          question: 'Cosa rappresenta il termine "Blade" in Laravel?',
          answer: 0,
          options: [
            'Il termine "Blade" in Laravel rappresenta il motore di templating predefinito utilizzato per la generazione di viste.',
            'Il termine "Blade" in Laravel rappresenta un tipo di linguaggio di programmazione.',
            'Il termine "Blade" in Laravel rappresenta un sistema operativo.',
            'Il termine "Blade" in Laravel rappresenta una struttura di controllo utilizzata per il flusso di un programma.',
          ],
          selected: null,
        },
        {
          question: "Qual è il middleware in Laravel?",
          answer: 1,
          options: [
            "Il middleware in Laravel è una funzione JavaScript utilizzata per la gestione degli eventi nel frontend.",
            "Il middleware in Laravel è un filtro che agisce prima di una richiesta HTTP, consentendo di eseguire operazioni come l'autenticazione o la registrazione delle attività.",
            "Il middleware in Laravel è un tipo di linguaggio di programmazione.",
            "Il middleware in Laravel è un sistema operativo.",
          ],
          selected: null,
        },
        {
          question: 'Cosa fa il comando "php artisan migrate" in Laravel?',
          answer: 3,
          options: [
            'Il comando "php artisan migrate" in Laravel viene utilizzato per eseguire le migrazioni del database, creando tabelle e modifiche dello schema definite nel codice.',
            'Il comando "php artisan migrate" in Laravel viene utilizzato per creare un nuovo controller.',
            'Il comando "php artisan migrate" in Laravel viene utilizzato per generare nuovi modelli.',
            'Il comando "php artisan migrate" in Laravel viene utilizzato per eseguire la migrazione dei dati da un database a un altro.',
          ],
          selected: null,
        },
        {
          question: 'Cosa rappresenta il termine "ORM" in Laravel?',
          answer: 0,
          options: [
            'Il termine "ORM" in Laravel rappresenta Object-Relational Mapping, che permette di interagire con il database utilizzando oggetti invece di query SQL dirette.',
            'Il termine "ORM" in Laravel rappresenta un tipo di linguaggio di programmazione.',
            'Il termine "ORM" in Laravel rappresenta un sistema operativo.',
            'Il termine "ORM" in Laravel rappresenta una struttura di controllo utilizzata per il flusso di un programma.',
          ],
          selected: null,
        },
        {
          question: "Qual è il concetto principale del routing in Laravel?",
          answer: 1,
          options: [
            "Il concetto principale del routing in Laravel è gestire il flusso di dati tra il client e il server.",
            "Il concetto principale del routing in Laravel è associare URL alle azioni del controller, consentendo di definire le route dell'applicazione.",
            "Il concetto principale del routing in Laravel è la progettazione dell'interfaccia utente.",
            "Il concetto principale del routing in Laravel è la creazione di siti web.",
          ],
          selected: null,
        },
        {
          question: "Cosa rappresenta il termine 'Eloquent ORM' in Laravel?",
          answer: 0,
          options: [
            "Il termine 'Eloquent ORM' in Laravel rappresenta un ORM (Object-Relational Mapping) che semplifica l'interazione con il database utilizzando oggetti.",
            "Il termine 'Eloquent ORM' in Laravel rappresenta un tipo di linguaggio di programmazione.",
            "Il termine 'Eloquent ORM' in Laravel rappresenta un sistema operativo.",
            "Il termine 'Eloquent ORM' in Laravel rappresenta una struttura di controllo utilizzata per il flusso di un programma.",
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
  <Quiz :questions="laravelQuestions" />
</template>

<style lang="scss" scoped></style>
