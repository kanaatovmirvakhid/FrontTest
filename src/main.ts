import { createApp } from 'vue'
import './assets/style/reset.scss'
import './assets/style/main.scss'
import './assets/style/fonts.scss'
import PrimeVue from "primevue/config";
import App from './App.vue'

createApp(App).use(PrimeVue, {
    unstyled: true
}).mount('#app')
