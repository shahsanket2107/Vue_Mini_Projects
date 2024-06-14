import { createRouter, createWebHistory } from 'vue-router'
import Home from "../views/Home.vue"
import MealList from "../views/MealList.vue"
import MealsByName from '../views/MealsByName.vue';
import MealsByLetter from '../views/MealsByLetter.vue';
import MealsByIng from '../views/MealsByIng.vue';
import DefaultLayout from '../components/DefaultLayout.vue';
import GuestLayout from '../components/GuestLayout.vue';
import MealDetails from '../views/MealDetails.vue'

const routes = [
    {
        path: "/", 
        component: DefaultLayout, 
        children:[
            {
                path: "/", 
                name: "home", 
                component: Home
            },
            {
                path: "/letter/:letter?",
                name: "byLetter",
                component: MealsByLetter
            },
            {
                path: "/by-letter/:letter?",
                name: "byletter",
                component: MealsByLetter
            },
            {
                path: "/by-ing/:ing?",
                name: "byIng",
                component: MealsByIng
            },
            {
                path: "/by-name/:name?",
                name: "byName",
                component: MealsByName
            },
            {
                path: "/meal/:id?",
                name: "mealDetails",
                component: MealDetails
            }
        ]
    },
    {
        path: "/guest",
        component: GuestLayout
    }

];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;