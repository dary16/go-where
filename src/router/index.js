import Vue from 'vue';
import Router from 'vue-router';
import home from '@/views/home/home';
import city from '@/views/city/city';
import detail from '@/views/detail';

Vue.use(Router);

export default new Router({
    routes: [{
            name: 'home',
            path: '/',
            component: home
        },
        {
            name: 'city',
            path: '/city',
            component: city
        },
        {
            name: 'detail',
            path: '/detail/:id',
            component: detail
        }
    ],
    scrollBehavior(to, from, savedPosition) {
        return { x: 0, y: 0 };
    }
});