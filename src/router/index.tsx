import { createRouter, createWebHashHistory, createWebHistory } from 'vue-router';
import Layout from '@/hooks/useLayout';
import test from '@/router/test';
import cars from '@/router/cars';
import employee from "@/router/employee";
const routes: MenuItemType[] = [{
  path: '/',
  name: '主页',
  icon: 'niupai',
  hiddenInMenu: true,
  component: Layout
}, test, cars, employee];
const router = createRouter({
  history: createWebHistory(),
  routes
});
router.beforeEach((to, from, next) => {
  // if(to.fullPath==='/')next({name:'测试'})
  // else next()
  next();
});
router.afterEach((to, from) => {// console.log(to)
});
export { router, routes };