import Layout from '@/hooks/useLayout'
const List = () => import('@/pages/employee/List.vue')
const Edit = () => import('@/pages/employee/Edit.vue')

const employee: MenuItemType = {
  path: '/employee',
  name: '职工',
  icon: 'niupai',
  component: Layout,
  children: [
    {
      name: '职工列表',
      path: '/employee/list',
      icon: 'kele',
      component: List
    },
    {
      name: '职工编辑',
      path: '/employee/edit/:id',
      icon: 'sanmingzhi',
      hiddenInMenu: true,
      component: Edit
    }
  ]
}
export default employee
