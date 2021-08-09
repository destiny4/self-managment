import { createApp } from 'vue'
import App from './App.vue';
// 如果要使用.scss样式文件，则需要引入base.scss文件
import 'element-plus/packages/theme-chalk/src/base.scss'
import {ElMenu,ElSubmenu,ElMenuItem} from 'element-plus'
const components = [ElMenu,ElSubmenu,ElMenuItem]
import {router} from './router'

const app = createApp(App)
components.forEach(component => {
    app.component(component.name, component)
  })
app.use(router)

app.mount('#app')