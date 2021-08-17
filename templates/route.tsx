import Layout from '@/hooks/useLayout'
const List=()=>import('@/pages/<%= data.moduleId %>/List.vue')
const Edit=()=>import('@/pages/<%= data.moduleId %>/Edit.vue')

const <%= data.moduleId %>:MenuItemType= { 
  path: '/<%= data.moduleId %>',
  name:'<%= data.moduleName %>',
  icon:'niupai',
  component: Layout,
  children:[
    {
      name:'<%= data.moduleName %>列表',
      path: '/<%= data.moduleId %>/list',
      icon:'kele',
      component: List
   },
   {
    name:'<%= data.moduleName %>编辑',
    path: '/<%= data.moduleId %>/edit/:id',
    icon:'sanmingzhi',
    hiddenInMenu:true,
    component: Edit
 }
  ]
}
export default <%= data.moduleId %>