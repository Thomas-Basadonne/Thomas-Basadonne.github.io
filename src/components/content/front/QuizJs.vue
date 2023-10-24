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
      jsQuestions: [
        {
          question: 'Qual è la differenza tra "let" e "var" in JavaScript?',
          answer: 1,
          options: [
            "Nessuna differenza, sono sinonimi.",
            '"var" ha una portata di funzione, mentre "let" ha una portata di blocco.',
            '"let" è obsoleto, dovresti usare solo "var".',
            '"let" è una variabile globale, mentre "var" è locale.',
          ],
          selected: null,
        },
        {
          question: 'Cos\'è una "chiusura" (closure) in JavaScript?',
          answer: 2,
          options: [
            "Una funzione definita in modo globale.",
            "Una variabile con un valore costante.",
            "Una funzione che cattura variabili dal contesto circostante anche dopo che la funzione esterna ha completato l'esecuzione.",
            "Un oggetto che contiene variabili di un altro oggetto.",
          ],
          selected: null,
        },
        {
          question: 'Cosa fa il metodo "map()" in JavaScript?',
          answer: 0,
          options: [
            "Itera su un array e crea un nuovo array con i risultati delle chiamate a una funzione specificata per ciascun elemento.",
            "Aggiunge un elemento all'inizio di un array.",
            "Elimina un elemento da un array.",
            "Concatena due array in uno solo.",
          ],
          selected: null,
        },
        {
          question: 'Cosa rappresenta il termine "hoisting" in JavaScript?',
          answer: 3,
          options: [
            "Una tecnica di compressione del codice JavaScript.",
            "Il processo di ottimizzazione dei loop.",
            "Una funzione che viene richiamata automaticamente all'avvio del programma.",
            "Il comportamento in cui le dichiarazioni di variabili e funzioni vengono spostate nella parte superiore del loro contesto di esecuzione.",
          ],
          selected: null,
        },
        {
          question: 'Cosa restituirà il seguente codice JavaScript: 1 + "1"?',
          answer: 1,
          options: ["2", "11", "Errore", "NaN"],
          selected: null,
        },
        {
          question: 'Cosa è il "callback hell" in JavaScript?',
          answer: 2,
          options: [
            "Una tecnica per gestire le eccezioni nei callback.",
            "Una funzione JavaScript che viene richiamata all'avvio del programma.",
            "Una situazione in cui molte funzioni di callback sono annidate in modo complicato, rendendo il codice difficile da leggere e gestire.",
            "Una funzione che restituisce un valore booleano.",
          ],
          selected: null,
        },
        {
          question: 'Cosa fa il metodo "reduce()" in JavaScript?',
          answer: 3,
          options: [
            "Aggiunge un elemento alla fine di un array.",
            "Elimina un elemento da un array.",
            "Riduce la dimensione di un array.",
            "Applica una funzione a un accumulatore e a ciascun elemento in un array, restituendo un singolo valore.",
          ],
          selected: null,
        },
        {
          question:
            'Qual è il significato dell\'acronimo "JSON" in JavaScript?',
          answer: 0,
          options: [
            "JavaScript Object Notation",
            "JavaScript Ordered Network",
            "JavaScript Operating Network",
            "JavaScript Object Name",
          ],
          selected: null,
        },
        {
          question: 'Cosa rappresenta il termine "promise" in JavaScript?',
          answer: 0,
          options: [
            "Un'oggetto che rappresenta un valore futuro che può essere disponibile subito, in un momento successivo o mai.",
            "Un impegno di completare una determinata azione.",
            "Una funzione asincrona in JavaScript.",
            "Una variabile con un valore costante.",
          ],
          selected: null,
        },
        {
          question: 'Cosa fa il metodo "bind()" in JavaScript?',
          answer: 2,
          options: [
            "Concatena due stringhe.",
            "Crea un nuovo array con elementi collegati tra loro.",
            'Crea una nuova funzione con un contesto specificato per "this".',
            "Calcola il valore massimo in un array.",
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
  <Quiz :questions="jsQuestions" />
</template>
