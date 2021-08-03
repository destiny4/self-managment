
const Test=()=>import('@/pages/test/List.vue')
const Demo=()=>import('@/pages/demo/List.vue')

export default  {
    name:'测试',
    path: '/test',
    icon:'el-icon-menu',
    component: Test,
    children:[{
      name:'例子',
      path: '/test/demo',
      icon:'el-icon-menu',
      component: Demo,
    }]
}