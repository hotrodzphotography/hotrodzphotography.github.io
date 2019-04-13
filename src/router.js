import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home
        },
        {
            path: '/instagram',
            name: 'instagram',
            component: () => import(/* webpackChunkName: "photography" */ './views/Instagram.vue')
        },
        {
            path: '/albums',
            name: 'Albums',
            component: () => import(/* webpackChunkName: "albums" */ './views/Albums.vue')
        },
        {
            path: '/gear',
            name: 'Gear',
            component: () => import(/* webpackChunkName: "gear" */ './views/Gear.vue')
        },
        {
            path: '/contact',
            name: 'contact',
            component: () => import(/* webpackChunkName: "contact" */ './views/Contact.vue')
        },
        {
            path: '/redirect',
            name: 'redirect',
            component: () => import(/* webpackChunkName: "redirect" */ './views/Redirect.vue')
        },
        {
            path: '*',
            name: 'notFound',
            component: () => import(/* webpackChunkName: "notFound" */ './views/NotFound.vue')
        }
    ]
});
