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
      javaQuestions: [
        {
          question: "Cos'è Java?",
          answer: 0,
          options: [
            "Java è un linguaggio di programmazione per lo sviluppo di applicazioni software.",
            "Java è un sistema operativo open source.",
            "Java è un framework per applicazioni mobili.",
            "Java è un'azienda di produzione di hardware per lo sviluppo di applicazioni software.",
          ],
          selected: null,
        },
        {
          question:
            'Qual è l\'output del seguente codice Java?\n\\nSystem.out.println(5 + "5");\\n',
          answer: 1,
          options: ["10", "55", "Errore", "Nessuna uscita."],
          selected: null,
        },
        {
          question: 'Cosa rappresenta il termine "JVM" in Java?',
          answer: 2,
          options: [
            'JVM sta per "Java Virtual Machine" ed è un software per la gestione di video in streaming.',
            'JVM sta per "Java Video Manager" ed è una libreria per la riproduzione di video in Java.',
            'JVM sta per "Java Virtual Machine" ed è un ambiente di esecuzione per programmi Java.',
            'JVM sta per "JavaScript Virtual Machine" ed è utilizzato per l\'esecuzione di codice JavaScript.',
          ],
          selected: null,
        },
        {
          question: 'Cosa rappresenta il termine "POJO" in Java?',
          answer: 0,
          options: [
            'POJO sta per "Plain Old Java Object" ed è un oggetto Java semplice senza vincoli di framework specifici.',
            'POJO è un\'acronimo per "Powerful Object Java Output" ed è un sistema di elaborazione di documenti in Java.',
            "POJO è un framework Java per applicazioni web.",
            'POJO è un\'acronimo per "Programming Object Java Output" ed è un ambiente di sviluppo Java.',
          ],
          selected: null,
        },
        {
          question: 'Cosa rappresenta il termine "Maven" in Java?',
          answer: 1,
          options: [
            'Maven è un\'acronimo per "Multiple Application Version Enhancement" ed è un framework di sviluppo Java.',
            "Maven è uno strumento di gestione delle build e delle dipendenze utilizzato per la costruzione di progetti Java.",
            "Maven è un database Java.",
            'Maven è un\'acronimo per "Model View Controller" ed è un pattern di progettazione Java.',
          ],
          selected: null,
        },
        {
          question: 'Cosa fa il metodo "hashCode()" in Java?',
          answer: 2,
          options: [
            'Il metodo "hashCode()" restituisce un valore booleano in base a un input specificato.',
            'Il metodo "hashCode()" è utilizzato per la creazione di collegamenti ipertestuali in Java.',
            'Il metodo "hashCode()" restituisce un codice hash intero per un oggetto Java.',
            'Il metodo "hashCode()" è utilizzato per la validazione dei dati in Java.',
          ],
          selected: null,
        },
        {
          question: 'Qual è il significato dell\'acronimo "OOP" in Java?',
          answer: 3,
          options: [
            'OOP sta per "Object-Oriented Protocol" ed è un protocollo di rete in Java.',
            'OOP sta per "Online Ordering Platform" ed è una piattaforma di ordinazione online in Java.',
            'OOP sta per "Out-of-Order Processing" ed è un tipo di elaborazione dei dati in Java.',
            'OOP sta per "Object-Oriented Programming" ed è un paradigma di programmazione basato sull\'uso di oggetti.',
          ],
          selected: null,
        },
        {
          question: 'Cosa fa il costrutto "try-catch" in Java?',
          answer: 0,
          options: [
            'Il "try-catch" è utilizzato per gestire le eccezioni in Java.',
            'Il "try-catch" è utilizzato per creare loop in Java.',
            'Il "try-catch" è utilizzato per creare strutture condizionali in Java.',
            'Il "try-catch" è utilizzato per dichiarare variabili in Java.',
          ],
          selected: null,
        },
        {
          question: 'Cosa rappresenta il termine "JDBC" in Java?',
          answer: 1,
          options: [
            "JDBC sta per \"Java Database Connectivity\" ed è un'interfaccia Java per l'accesso ai database.",
            'JDBC sta per "Java Data Broadcasting Company" ed è un provider di servizi di trasmissione dati in Java.',
            'JDBC sta per "Java Development and Building Compiler" ed è uno strumento di compilazione in Java.',
            'JDBC sta per "JavaScript Data Binding Component" ed è un componente per il binding dei dati in JavaScript.',
          ],
          selected: null,
        },
        {
          question: 'Cosa rappresenta il termine "JavaFX" in Java?',
          answer: 3,
          options: [
            "JavaFX è un framework Java per la creazione di effetti speciali nei giochi.",
            "JavaFX è un linguaggio di scripting utilizzato per la creazione di interfacce utente web in Java.",
            'JavaFX è un\'acronimo per "Java File Exchange" ed è un servizio di scambio di file in Java.',
            "JavaFX è una tecnologia Java per lo sviluppo di applicazioni desktop e interfacce utente grafiche (GUI).",
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
  <Quiz :questions="javaQuestions" />
</template>

<style lang="scss" scoped></style>
