import Layout from '@/hooks/useLayout'
const List = () => import('@/pages/people/List.vue')
const Edit = () => import('@/pages/people/Edit.vue')

const people: MenuItemType = {
  path: '/people',
  name: '职工',
  icon: 'niupai',
  component: Layout,
  children: [
    {
      name: '职工列表',
      path: '/people/list',
      icon: 'kele',
      component: List
    },
    {
      name: '职工编辑',
      path: '/people/edit/:id',
      icon: 'sanmingzhi',
      hiddenInMenu: true,
      component: Edit
    }
  ]
}
export default people
