import { createApp } from 'vue'
import App from './App.vue';
import 'element-plus/packages/theme-chalk/src/base.scss'
import {ElMenu,ElSubmenu,ElMenuItem, ElInput, ElButton} from 'element-plus'
import SvgIcon from '@/components/SvgIcon/index.vue'

const components = [ElMenu,ElSubmenu,ElMenuItem,SvgIcon]
import {router} from './router'

const app = createApp(App)
components.forEach(component => {
    app.component(component.name, component)
  })
app.use(router)

app.mount('#app')