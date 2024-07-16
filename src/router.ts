import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import HomePage from './components/pages/HomePage.vue'
import ItemPage from './components/pages/ItemPage.vue'

const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        name: 'Home',
        component: HomePage
    },
    {
        path: '/item/:id?',
        component: ItemPage,
        name: 'ItemPage',
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router
