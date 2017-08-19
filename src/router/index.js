import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/views/Home';
import Dashboard from '@/views/Dashboard';


Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      component: Home,
      children: [
        {
          path: '/',
          name: 'Dashboard',
          component: Dashboard,
        },
        {
          path: '/personal',
          name: 'Personal',
          // component: Dashboard,
        },
        {
          path: '/photo',
          name: 'Photo',
          // component: Dashboard,
        },
      ],
    },
  ],
});
