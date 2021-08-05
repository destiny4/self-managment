const TopLayout=()=>import('@/components/layout/TopLayout.vue')
const LeftLayout=()=>import('@/components/layout/LeftLayout.vue')
const flg=import.meta.env.VITE_LAYOUT==='LeftLayout'
const Layout=flg?LeftLayout:TopLayout
export default Layout