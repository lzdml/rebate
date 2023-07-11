import { router } from '/@/router';
import { getToken } from '/@/utils/auth';

// const { VITE_GLOB_APP_TITLE } = getAppEnvConfig();

const whiteList = ['/login', '/search', '/secure-auth', '/protocol'];

router.beforeEach(async (to, from, next) => {
  const hasToken = getToken();
  // 登录未过期或打开页面不需要登录
  console.log('to.path :>> ', to.path);
  if (hasToken) {
    if (to.path === '/login') {
      next(from.path);
    } else {
      next();
    }
  } else {
    if (whiteList.indexOf(to.path) > -1) {
      next();
    } else {
      next(`/login?redirect=${to.path}`);
    }
  }
});

router.afterEach((to) => {
  // 路由发生变化
  const metaTitle = to.meta.title;
  if (metaTitle) {
    window.document.title = `霸王餐-${metaTitle}`;
  }
});

// if (userStore.userInfo) {
//   next()
// } else {
//   try {
//     // 获取用户信息
//     const { roles } = await userStore.getInfo()
//     console.log(roles)

//     // 基于角色生成路由
//     // const routes = await generateRoutes(roles)

//     // 动态添加可访问路由
//     // routes.forEach((route) => {
//     //   router.addRoute(route)
//     // })

//     next({ ...to, replace: true })
//   } catch (error) {
//     await userStore.logout()
//     next(`/login?redirect=${to.path}`)
//   }
// }
