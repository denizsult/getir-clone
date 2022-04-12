import {
    createRouter,
    createWebHistory
} from 'vue-router'

import Welcome from "../views/welcomePage.vue";
import MainPage from "../views/MainPage.vue"

const routes = [{
    path: "/",
    name: "welcome",
    component: MainPage
}];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;