import {createRouter, createWebHistory} from "vue-router"


const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path:"/",
            name:"home",
            component: () =>  import("../pages/LandingPage.vue")
        },
        {
            path:"/todolist",
            name:"todo",
            component: () =>  import("../pages/Todo.vue")
        }
    ]
});

export default router;