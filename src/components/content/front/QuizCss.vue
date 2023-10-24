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
      cssQuestions: [
        {
          question: 'Cosa rappresenta la sigla "CSS"?',
          answer: 0,
          options: [
            "Cascading Style Sheets",
            "Computer Style System",
            "Creative Style Syntax",
            "Colorful Style Scheme",
          ],
          selected: null,
        },
        {
          question: 'Qual è la differenza tra "margin" e "padding" in CSS?',
          answer: 1,
          options: [
            "Margin controlla lo spazio interno di un elemento, mentre padding controlla lo spazio esterno.",
            "Margin controlla lo spazio esterno di un elemento, mentre padding controlla lo spazio interno.",
            "Margin e padding sono sinonimi e possono essere utilizzati in modo intercambiabile.",
            "Margin e padding sono inutili in CSS.",
          ],
          selected: null,
        },
        {
          question: "Cosa fa il selettore di classe CSS .my-class?",
          answer: 1,
          options: [
            "Seleziona l'elemento con l'ID \"my-class\".",
            'Seleziona tutti gli elementi con la classe "my-class".',
            'Seleziona il primo elemento con la classe "my-class".',
            'Seleziona tutti gli elementi con l\'attributo "my-class".',
          ],
          selected: null,
        },
        {
          question: 'Cosa rappresenta il termine "pseudo-classe" in CSS?',
          answer: 2,
          options: [
            'Una classe HTML con un prefisso "pseudo-".',
            "Una classe CSS con uno stile speciale.",
            "Una selezione speciale di un elemento basata su uno stato o una posizione.",
            "Una classe di CSS che non è utilizzata molto spesso.",
          ],
          selected: null,
        },
        {
          question: 'Cosa significa "box model" in CSS?',
          answer: 0,
          options: [
            "Il box model è un modello di formattazione che rappresenta ogni elemento HTML come un rettangolo con contenuto, padding, bordo e margine.",
            "Il box model è un modello di scatola utilizzato per progettare siti web con forme box.",
            "Il box model è un framework CSS molto popolare.",
            "Il box model è un tipo di layout grafico utilizzato per creare pattern di sfondo.",
          ],
          selected: null,
        },
        {
          question: 'Cosa fa la proprietà "z-index" in CSS?',
          answer: 3,
          options: [
            'La proprietà "z-index" determina la grandezza del testo in un elemento.',
            'La proprietà "z-index" controlla la dimensione orizzontale degli elementi.',
            'La proprietà "z-index" specifica l\'altezza di un elemento rispetto al contenuto sottostante.',
            'La proprietà "z-index" controlla la sovrapposizione degli elementi.',
          ],
          selected: null,
        },
        {
          question: 'Cos\'è la "media query" in CSS?',
          answer: 0,
          options: [
            "Una regola CSS che cambia lo stile in base alle caratteristiche del dispositivo.",
            "Una etichetta che identifica il supporto media di un elemento HTML.",
            "Un tipo di font specifico utilizzato per i testi mediatici.",
            "Una query per cercare file multimediali all'interno di un sito web.",
          ],
          selected: null,
        },
        {
          question: 'Qual è lo scopo della proprietà "position" in CSS?',
          answer: 1,
          options: [
            'La proprietà "position" determina il colore di sfondo di un elemento HTML.',
            'La proprietà "position" controlla il tipo di posizionamento e il flusso di un elemento all\'interno del layout.',
            'La proprietà "position" regola la grandezza dei caratteri in un elemento HTML.',
            'La proprietà "position" definisce un tipo di stile speciale per gli elementi.',
          ],
          selected: null,
        },
        {
          question: 'Cosa rappresenta il selettore ">" in CSS?',
          answer: 2,
          options: [
            'Il selettore ">" seleziona tutti gli elementi figli di un elemento.',
            'Il selettore ">" seleziona tutti gli elementi discendenti di un elemento.',
            'Il selettore ">" seleziona tutti gli elementi figli diretti di un elemento.',
            'Il selettore ">" seleziona tutti gli elementi.',
          ],
          selected: null,
        },
        {
          question: 'Cosa rappresenta il selettore "*" in CSS?',
          answer: 3,
          options: [
            'Il selettore "*" seleziona tutti gli elementi figli di un elemento.',
            'Il selettore "*" seleziona tutti gli elementi discendenti di un elemento.',
            'Il selettore "*" seleziona tutti gli elementi figli diretti di un elemento.',
            'Il selettore "*" seleziona tutti gli elementi.',
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
  <Quiz :questions="cssQuestions" />
</template>

<style lang="scss" scoped></style>
