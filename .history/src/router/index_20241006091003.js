import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import Detail from '../views/Detail.vue';
import AddressOptimization from '@/components/AddressOptimization.vue';
import FunctionOptimization from '@/components/FunctionOptimization.vue';

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/detail/:id', name: 'Detail', component: Detail, props: true },
  { path: '/address-optimization', name: 'AddressOptimization', component: AddressOptimization },
  { path: '/function-optimization', name: 'FunctionOptimization', component: FunctionOptimization },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;