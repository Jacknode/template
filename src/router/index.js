// import Vue from 'vue'
// import Router from 'vue-router'
Vue.use(VueRouter)

const _import = require('./_import_' + process.env.NODE_ENV);

// in development-env not use lazy-loading, because lazy-loading too many pages will cause webpack hot update too slow. so only in production use lazy-loading;
// detail: https://panjiachen.github.io/vue-element-admin-site/#/lazy-loading



/* Layout */
import Layout from '../views/layout/Layout';

/**
 * hidden: true                   if `hidden:true` will not show in the sidebar(default is false)
 * alwaysShow: true               if set true, will always show the root menu, whatever its child routes length
 *                                if not set alwaysShow, only more than one route under the children
 *                                it will becomes nested mode, otherwise not show the root menu
 * redirect: noredirect           if `redirect:noredirect` will no redirct in the breadcrumb
 * name:'router-name'             the name is used by <keep-alive> (must set!!!)
 * meta : {
    title: 'title'               the name show in submenu and breadcrumb (recommend set)
    icon: 'svg-name'             the icon show in the sidebar,
  }
 **/
export const constantRouterMap = [{
    path: '/login',
    name: 'Login',
    component: _import('login/index'),
    hidden: true
  }, {
    path: '/authredirect',
    component: _import('login/authredirect'),
    hidden: true
  }, {
    path: '/404',
    component: () =>
      import ('@/views/404'),
    hidden: true
  }, {
    path: '/',
    component: _import('login/index'),
    hidden: true,
    name: "Home"
  },
  /**
   *  首页
   **/
  {
    path: '/',
    component: Layout,
    redirect: 'dashboard',
    children: [{
      path: 'dashboard',
      component: () =>
        import ('@/views/dashboard'),
      name: 'dashboard',
      meta: {
        title: 'dashboard',
        icon: 'dashboard',
        noCache: true
      }
    }]
  },
  // /*demo***/
  // {
  //   path: '/demo',
  //   component: Layout,
  //   children: [
  //     {
  //       path: 'index',
  //       name: 'demo',
  //       component: () => import('@/views/demo/index'),
  //       meta: {title: 'demo', icon: 'form'}
  //     }
  //   ]
  // },
  /**
   *  美食
   **/
  {
    path: '/home',
    component: Layout,
    name: 'Food',
    hidden: true,
    alwaysShow: true,
    meta: {
      title: 'food',
      icon: 'star'
    },
    children: [{
      path: 'foodHome',
      name: 'foodHome',
      component: () =>
        import ('@/views/food/Home'),
      meta: {
        title: 'foodHome'
      }
    }, ]
  },
  /**
   *  404
   **/
  {
    path: '*',
    redirect: '/404',
    hidden: true
  }
];

export default new VueRouter({
  // mode: 'history', //后端支持可开
  scrollBehavior: () => ({
    y: 0
  }),
  routes: constantRouterMap
})

export const asyncRouterMap = [

]