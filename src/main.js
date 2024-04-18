import { createApp } from 'vue'
import './styles/general.scss'
import App from './App.vue'
// Utilizzo del router nel main file (main.js)
import router from './router';

// configurazione di vue i18n 
import { createI18n } from 'vue-i18n'
import en from './locale/en.json'
import it from './locale/it.json'



const i18n = createI18n({
  locale: 'en',
  messages:{
    en: en,
    it: it,
    //ar: ar,
  }
});


createApp(App).use(router).use(i18n).mount('#app');
