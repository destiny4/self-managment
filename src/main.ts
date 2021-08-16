import { createApp } from 'vue'
import 'element-plus/packages/theme-chalk/src/base.scss'
import '@/styles/main.scss'
import App from '@/App.vue'
import store from '@/store'
import { router } from '@/router'
import SvgIcon from '@/components/SvgIcon/index.vue'

const components = [SvgIcon]

const app = createApp(App)

components.forEach(component => {
  app.component(component.name, component)
})

app
  .use(store)
  .use(router)
  .mount('#app')
