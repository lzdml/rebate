import { RouteRecordRaw, createRouter, createWebHashHistory } from 'vue-router';

import Layout from '/@/layout/index.vue';

/* Router Modules */
import ERROR_ROUTES from '/@/router/modules/error'; // 错误页面路由

const routes: Array<RouteRecordRaw> = [
  {
    path: '/redirect',
    component: () => import('/@/layout/index.vue'),
    children: [
      {
        path: '/redirect/:path(.*)',
        component: () => import('/@/views/redirect/index.vue'),
        meta: { keepAlive: false },
      },
    ],
  },
  {
    path: '/',
    name: 'Layout',
    redirect: 'home',
    component: Layout,
    children: [
      {
        path: 'home',
        name: 'Home',
        component: () => import('/@/views/home/index.vue'),
        meta: {
          title: '首页',
          keepAlive: false,
        },
      },
      {
        path: 'order',
        name: 'Order',
        component: () => import('/@/views/order/index.vue'),
        meta: {
          title: '订单',
          keepAlive: false,
        },
      },
      {
        path: '/share',
        name: 'Share',
        component: () => import('/@/views/share/index.vue'),
        meta: { title: '分享页', keepAlive: false },
      },
      {
        path: 'my',
        name: 'My',
        component: () => import('/@/views/my/index.vue'),
        meta: {
          title: '我的',
          keepAlive: false,
        },
      },
    ],
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('/@/views/login/index.vue'),
    meta: { title: '登录页', keepAlive: false },
  },
  {
    path: '/setting',
    name: 'Setting',
    component: () => import('/@/views/setting/index.vue'),
    meta: { title: '设置页', keepAlive: false },
  },
  {
    path: '/protocol',
    name: 'Protocol',
    component: () => import('/@/views/protocol/index.vue'),
    meta: { title: '协议', keepAlive: false },
  },
  {
    path: '/collect',
    name: 'Collect',
    component: () => import('/@/views/collect/index.vue'),
    meta: { title: '我的收藏', keepAlive: false },
  },
  {
    path: '/complaints',
    name: 'Complaints',
    component: () => import('/@/views/complaints/index.vue'),
    meta: { title: '说点什么', keepAlive: false },
  },
  {
    path: '/account',
    name: 'Account',
    component: () => import('/@/views/account-info/index.vue'),
    meta: { title: '账号安全', keepAlive: false },
  },
  {
    path: '/secure-auth',
    name: 'SecureAuth',
    component: () => import('/@/views/secure-auth/index.vue'),
    meta: { title: '安全验证', keepAlive: false },
  },
  {
    path: '/message',
    name: 'Message',
    component: () => import('/@/views/message/index.vue'),
    meta: { title: '消息', keepAlive: false },
  },
  {
    path: '/invite',
    name: 'Invite',
    component: () => import('/@/views/invite/index.vue'),
    meta: { title: '邀请列表', keepAlive: false },
  },
  {
    path: '/use',
    name: 'Use',
    component: () => import('/@/views/use/index.vue'),
    meta: { title: '新手指导', keepAlive: false },
  },
  {
    path: '/search',
    name: 'Search',
    component: () => import('/@/views/search/index.vue'),
    meta: { title: '搜索商品商家', keepAlive: false },
  },
  {
    path: '/detail',
    name: 'Details',
    component: () => import('/@/views/details/index.vue'),
    meta: { title: '商家信息', keepAlive: false },
  },
  {
    path: '/settle',
    name: 'Settle',
    component: () => import('/@/views/settle/index.vue'),
    meta: { title: '商家入驻', keepAlive: false },
  },
  {
    path: '/wallet',
    name: 'Wallet',
    component: () => import('/@/views/wallet/index.vue'),
    meta: { title: '钱包详情', keepAlive: false },
  },

  ...ERROR_ROUTES,
];

//导入生成的路由数据
const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes,
  scrollBehavior(to, from, savedPosition) {
    console.log('savedPosition :>> ', savedPosition);
    if (savedPosition) {
      // 如果存在保存的位置，则恢复到之前滚动的位置
      return { ...savedPosition, behavior: 'instant' };
    } else {
      // 否则滚动到页面顶部
      return { top: 0, behavior: 'instant' };
    }
  },
});

/* resetRouter */
export function resetRouter() {
  router.getRoutes().forEach((route) => {
    const { name } = route;
    if (name) {
      router.hasRoute(name) && router.removeRoute(name);
    }
  });
}

export { router };
