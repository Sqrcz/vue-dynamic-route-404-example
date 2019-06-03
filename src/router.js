import axios from 'axios';
import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import PageNotFound from './views/PageNotFound.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/dynamic-component/:dataName',
      name: 'DynamicComponent',
      component: () => import(/* webpackChunkName: "dynamic-component" */ './views/DynamicComponent.vue'),
      beforeEnter: (to, from, next) => {
        const { dataName } = to.params;

        axios
          .get(`/data-${dataName}.json`)
          .then(() => {
            next();
          })
          .catch(() => {
            next({ to: '/404', replace: true });
          });
      },
    },
    {
      path: '/404',
      alias: '*',
      name: '404',
      component: PageNotFound,
    },
  ],
});
