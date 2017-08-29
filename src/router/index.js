import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/views/Home';
import Dashboard from '@/views/Dashboard';
import Chart from '@/views/Chart';
import Picture from '@/views/Picture';
import Table from '@/views/Table';


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
          path: '/chart',
          name: 'Chart',
          component: Chart,
        },
        {
          path: '/picture',
          name: 'Picture',
          component: Picture,
        },
        {
          path: '/table',
          name: 'Table',
          component: Table,
        },
      ],
    },
  ],
});
