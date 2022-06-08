import { createRouter, createWebHistory } from 'vue-router'

const routes = [
    {
        path: '/',
        name: 'transaction.index',
        component: () => import("../views/dashboard/Index.vue")
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;