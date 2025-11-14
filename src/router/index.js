import { createRouter, createWebHistory } from 'vue-router';
import MainPageView from '../views/MainPageView.vue';
import SignUpPageView from '../views/SignUpPageView.vue';

const routes = [
  { path: '/', component: MainPageView },
  { path: '/signup', component: SignUpPageView }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;