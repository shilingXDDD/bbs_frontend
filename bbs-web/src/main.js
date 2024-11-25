import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import {ElMessage} from 'element-plus'

import {create} from 'vue'
import {createPinia} from 'pinia'

import App from './App.vue'
import router from './router'
import axios from './global'
import cookies from 'vue-cookies'
import moment from 'moment'

const app = createApp(App)

app.use(createPinia())
app.use(router)

for(const [key,component] of Object.entries(ElementPlusIconsVue)]){
	app.component(key,component)
}

app.use(ElementPlus,{
	locale:zhCn,
})

axios.defaults.withCredentials = true
app.config.globalProperties.axios = axios
app.config.globalProperties.global = glabal
app.config.globalPropertiesmsg = ElMessage
app.config.globalProperties.router = router
app.config.globalProperties.cookies = cookies
app.mount('#app')
