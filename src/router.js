import { createRouter, createWebHistory } from 'vue-router';

// Importare le pagine
import Home from './pages/Home.vue';
import Biography from './pages/Biography.vue';
import Artworks from './pages/Artworks.vue';
import Contact from './pages/Contact.vue';
import Media from './pages/Media.vue';
import Exhibitions from './pages/Exhibitions.vue';


const routes = [
  {
    path: "/",
    name: "home",
    component: Home
  },
  {
    path: "/biography",
    name: "biograpgy",
    component: Biography,
  },
  {
    path: "/artworks",
    name: "artworks",
    component: Artworks,
  },
  {
    path:"/contact",
    name:"name",
    component: Contact,
  },
  {
    path: "/media",
    name: "media",
    component: Media,
  },
  {
    path: "/exhibitions",
    name: "exhibitions",
    component: Exhibitions,
  }
 
]


//creazione istanza di router
const router = createRouter({
  history: createWebHistory(),
  routes
});

//esportare l'istanza router per poterla usare dentro il main.js
export default router;