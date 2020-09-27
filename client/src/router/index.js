import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue';

Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/about',
        name: 'About',
        component: About
    },
];

// mode: 'hash' or 'history'.
const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

// vue middleware to run before each page switch
router.beforeEach((to, from, next) => {
    console.log(`Navigating from ${from.fullPath} to ${to.fullPath}`);
    next();
});
  
export default router
