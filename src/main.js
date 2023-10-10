import { createApp } from 'vue'
import App from './App.vue'

//Stile
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/js/dist/dropdown"
import "./assets/style.scss"

// Vue Router
import { router } from "./router";

createApp(App).use(router).mount('#app')
