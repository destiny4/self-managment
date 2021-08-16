import Layout from '@/hooks/useLayout'
const List=()=>import('@/pages/cars/List.vue')
const Edit=()=>import('@/pages/cars/Edit.vue')

const cars:MenuItemType= { 
  path: '/cars',
  name:'车辆',
  icon:'niupai',
  component: Layout,
  children:[
    {
      name:'车辆列表',
      path: '/cars/list',
      icon:'kele',
      component: List
   },
   {
    name:'车辆编辑',
    path: '/cars/edit/:id',
    icon:'sanmingzhi',
    hiddenInMenu:true,
    component: Edit
 }
  ]
}
export default cars