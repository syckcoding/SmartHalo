import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import Detail from '../views/Detail.vue';

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/detail/:id', name: 'Detail', component: Detail, props: true },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
