import App from './App.vue'
import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import Axios from 'axios'
import { createPinia } from 'pinia'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import router from '@/router'
import './assets/tailwind.css'
import 'element-plus/dist/index.css'
import './App.scss'

const pinia = createPinia()
const app = createApp(App)
app.use(pinia)
app.use(ElementPlus);

for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
}

// Add axios config
app.config.globalProperties.axios = Axios
app.config.globalProperties.axios.defaults.headers.common.Authorization = ''

app.use(router)
app.mount('#app')
