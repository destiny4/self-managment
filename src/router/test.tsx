import Layout from '@/hooks/useLayout'
const Test=()=>import('@/pages/test/List.vue')
const TestEdit=()=>import('@/pages/test/Edit.vue')

const test:MenuItemType= { 
  path: '/people',
  name:'人员',
  icon:'niupai',
  component: Layout,
  children:[
    {
      name:'列表',
      path: '/people/list',
      icon:'kele',
      component: Test
   },
   {
    name:'测试2',
    path: '/people/edit',
    icon:'sanmingzhi',
    hiddenInMenu:false,
    component: TestEdit
 }
  ]
}
export default test