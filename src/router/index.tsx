import {createRouter,createWebHashHistory,createWebHistory} from 'vue-router'
import test from '@/router/test'

const TopLayout=()=>import('@/components/layout/TopLayout.vue')
const LeftLayout=()=>import('@/components/layout/LeftLayout.vue')
const flg=import.meta.env.VITE_LAYOUT==='LeftLayout'
const Layout=flg?LeftLayout:TopLayout

const routes = [
  { 
    path: '/',
    name:'主容器',
    icon:'el-icon-menu',
    component: Layout,
    children:[
      test
    ]
 },
]

const router = createRouter({
  history:createWebHistory(),
  routes, 
})

router.beforeEach((to, from,next) => {
  if(to.fullPath==='/')next({name:'测试'})
  else next()
})
router.afterEach((to, from) => {
  console.log(to)
})

export default router