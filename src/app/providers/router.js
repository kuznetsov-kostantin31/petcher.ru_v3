import {createMemoryHistory, createRouter, createWebHistory} from 'vue-router'
import {routes} from './../../pages'
export const router = createRouter({
    history: createWebHistory(),
    routes: routes,
})

