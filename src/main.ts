import { createApp } from 'vue'
import 'element-plus/packages/theme-chalk/src/base.scss'
import '@/styles/main.scss'
import App from './App.vue';
import SvgIcon from '@/components/SvgIcon/index.vue'

const components = [SvgIcon]

import {router} from './router'

const app = createApp(App)
components.forEach(component => {
    app.component(component.name, component)
  })
app.use(router)

app.mount('#app')