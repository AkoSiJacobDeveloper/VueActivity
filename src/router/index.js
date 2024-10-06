import { createRouter, createWebHistory } from 'vue-router';
import Home from '../components/Pages/Home.vue';
import About from '../components/Pages/About.vue';
import Contact from '@/components/Pages/Contact.vue';
import Projects from '@/components/Pages/Projects.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home, // Home component will be rendered when navigating to '/'
  },
  {
    path: '/about',
    name: 'About',
    component: About, // About component will be rendered when navigating to '/about'
  },
  {
    path: '/contact',
    name: 'Contact',
    component: Contact,
  },
  {
    path: '/projects',
    name: 'Project',
    component: Projects,
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.VITE_BASE_URL),
  routes,
});

export default router;
