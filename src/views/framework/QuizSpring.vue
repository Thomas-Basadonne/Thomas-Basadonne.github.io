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
      springQuestions: [
        {
          question: "Cos'è Spring?",
          answer: 0,
          options: [
            "Spring è un framework di sviluppo per applicazioni Java.",
            "Spring è un sistema operativo.",
            "Spring è un software per la progettazione di siti web.",
            "Spring è un framework per applicazioni mobili.",
          ],
          selected: null,
        },
        {
          question: "Qual è il principale obiettivo di Spring Framework?",
          answer: 1,
          options: [
            "Il principale obiettivo è semplificare la creazione di siti web dinamici.",
            "Il principale obiettivo è semplificare lo sviluppo di applicazioni aziendali basate su Java.",
            "Il principale obiettivo è creare interfacce utente reattive.",
            "Il principale obiettivo è gestire database relazionali.",
          ],
          selected: null,
        },
        {
          question:
            'Cosa rappresenta il termine "Inversione di Controllo (IoC)" in Spring?',
          answer: 1,
          options: [
            "L'IoC in Spring è un tipo di grafico utilizzato per visualizzare dati.",
            "L'IoC in Spring è un principio di progettazione in cui il controllo sulla creazione e la gestione degli oggetti è spostato da un'applicazione al framework.",
            "L'IoC in Spring è un tipo di linguaggio di programmazione.",
            "L'IoC in Spring è un sistema operativo.",
          ],
          selected: null,
        },
        {
          question:
            "Qual è il modulo principale di Spring Framework responsabile dell'inversione di controllo?",
          answer: 3,
          options: [
            'Il modulo principale responsabile dell\'inversione di controllo è il "Spring Boot".',
            'Il modulo principale responsabile dell\'inversione di controllo è il "JPA".',
            'Il modulo principale responsabile dell\'inversione di controllo è "Hibernate".',
            'Il modulo principale responsabile dell\'inversione di controllo è il "Container di applicazioni Spring".',
          ],
          selected: null,
        },
        {
          question:
            'Cosa rappresenta il termine "Dependency Injection (DI)" in Spring?',
          answer: 0,
          options: [
            "La DI in Spring è un meccanismo che fornisce componenti con le loro dipendenze.",
            "La DI in Spring è un tipo di grafico utilizzato per visualizzare dati.",
            "La DI in Spring è un tipo di linguaggio di programmazione.",
            "La DI in Spring è un sistema operativo.",
          ],
          selected: null,
        },
        {
          question:
            "Qual è il modulo Spring responsabile della gestione delle transazioni?",
          answer: 0,
          options: [
            'Il modulo Spring responsabile della gestione delle transazioni è "Spring Transaction".',
            'Il modulo Spring responsabile della gestione delle transazioni è "Spring AOP".',
            'Il modulo Spring responsabile della gestione delle transazioni è "Spring MVC".',
            'Il modulo Spring responsabile della gestione delle transazioni è "Spring Security".',
          ],
          selected: null,
        },
        {
          question: 'Cosa fa il modulo "Spring Data"?',
          answer: 2,
          options: [
            'Il modulo "Spring Data" è utilizzato per la gestione dell\'interfaccia utente.',
            'Il modulo "Spring Data" è utilizzato per la progettazione di siti web.',
            'Il modulo "Spring Data" semplifica l\'accesso ai dati da sorgenti di dati diversificate, inclusi database relazionali e NoSQL.',
            'Il modulo "Spring Data" è utilizzato per lo sviluppo di applicazioni mobili.',
          ],
          selected: null,
        },
        {
          question: 'Cosa rappresenta il termine "Spring Boot"?',
          answer: 0,
          options: [
            "Spring Boot è un progetto Spring che semplifica la creazione di applicazioni stand-alone Spring con configurazione automatica.",
            "Spring Boot è un sistema operativo.",
            "Spring Boot è un software per la progettazione di siti web.",
            "Spring Boot è un framework per applicazioni mobili.",
          ],
          selected: null,
        },
        {
          question: "Cosa rappresenta il termine 'Spring Security'?",
          answer: 1,
          options: [
            "Spring Security è un tipo di linguaggio di programmazione.",
            "Spring Security è un modulo Spring che gestisce l'autenticazione e l'autorizzazione nelle applicazioni Java.",
            "Spring Security è un sistema operativo.",
            "Spring Security è un framework per applicazioni mobili.",
          ],
          selected: null,
        },
        {
          question: 'Cosa rappresenta il termine "Spring MVC"?',
          answer: 3,
          options: [
            'Il termine "Spring MVC" rappresenta un tipo di grafico utilizzato per visualizzare dati.',
            'Il termine "Spring MVC" rappresenta un framework per la progettazione di siti web.',
            'Il termine "Spring MVC" rappresenta un tipo di linguaggio di programmazione.',
            'Il termine "Spring MVC" rappresenta il modulo di Spring utilizzato per lo sviluppo di applicazioni web basate su model-view-controller (MVC).',
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
  <Quiz :questions="springQuestions" />
</template>

<style lang="scss" scoped></style>
