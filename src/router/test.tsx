import Layout from '@/hooks/useLayout'
const Test=()=>import('@/pages/test/List.vue')

const test:MenuItemType= { 
  path: '/people',
  name:'人员',
  icon:'el-icon-menu',
  component: Layout,
  children:[
    {
      name:'列表',
      path: '/people/list',
      icon:'el-icon-menu',
      component: Test
   },
   {
    name:'测试2',
    path: '/people/edit',
    icon:'el-icon-menu',
    hiddenInMenu:true,
    component: Test
 }
  ]
}
export default test