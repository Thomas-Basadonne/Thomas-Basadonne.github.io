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
      scssQuestions: [
        {
          question: "Cos'è SCSS?",
          answer: 0,
          options: [
            "Un preprocessore CSS che estende la funzionalità del CSS.",
            "Una nuova versione di CSS3.",
            "Un framework JavaScript per lo sviluppo front-end.",
            "Un servizio cloud per la gestione di contenuti.",
          ],
          selected: null,
        },
        {
          question: "Qual è l'estensione di file utilizzata per i file SCSS?",
          answer: 0,
          options: [".scss", ".css", ".sass", ".js"],
          selected: null,
        },
        {
          question: 'Cosa significa "nesting" in SCSS?',
          answer: 2,
          options: [
            "L'annidamento di elementi HTML all'interno di un documento.",
            "La creazione di stili per elementi nidificati.",
            "L'annidamento di selelettori all'interno di altri selelettori.",
            "L'annidamento di funzioni JavaScript in un file SCSS.",
          ],
          selected: null,
        },
        {
          question:
            "Qual è il vantaggio principale dell'uso delle variabili in SCSS?",
          answer: 0,
          options: [
            "La possibilità di riutilizzare valori in tutto il foglio di stile.",
            "La riduzione del peso complessivo del file CSS.",
            "La capacità di creare variabili JavaScript.",
            "La generazione automatica di documentazione.",
          ],
          selected: null,
        },
        {
          question: 'Cosa fa l\'operatore "&" in SCSS?',
          answer: 2,
          options: [
            "Rappresenta una variabile SCSS.",
            "Indica una selezione di ID.",
            "Rappresenta il selettore padre.",
            "Indica una condizione in un ciclo.",
          ],
          selected: null,
        },
        {
          question:
            "Qual è il processo di conversione di un file SCSS in CSS noto come?",
          answer: 1,
          options: ["Nesting", "Compilazione", "Riduzione", "Espansione"],
          selected: null,
        },
        {
          question: 'Cosa significa "Mixin" in SCSS?',
          answer: 0,
          options: [
            "Un blocco riutilizzabile di stili che può essere incluso in altri selelettori.",
            "Un tipo di dato SCSS.",
            "Un'istruzione di loop in SCSS.",
            "Una funzione JavaScript in un file SCSS.",
          ],
          selected: null,
        },
        {
          question: 'Cosa rappresenta il termine "SassScript"?',
          answer: 2,
          options: [
            "Uno script JavaScript utilizzato per generare file SCSS.",
            "Un'etichetta utilizzata per identificare le sezioni di codice SCSS.",
            "Il linguaggio di scripting utilizzato da Sass per valutare espressioni.",
            "Una libreria JavaScript per il parsing di file SCSS.",
          ],
          selected: null,
        },
        {
          question: "Qual è il meccanismo di ereditarietà noto come in SCSS?",
          answer: 2,
          options: ["Variabili", "Mixins", "Extend", "Inheritance"],
          selected: null,
        },
        {
          question: 'Cosa significa l\'acronimo "DRY" in relazione a SCSS?',
          answer: 1,
          options: [
            "Dramatic Rendering Yield",
            "Don't Repeat Yourself",
            "Dynamic Responsive Yield",
            "Data Redundancy Yield",
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
  <Quiz :questions="scssQuestions" />
</template>
