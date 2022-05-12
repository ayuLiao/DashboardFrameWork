import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import * as ElIcons from '@element-plus/icons-vue'
import request from './utils/request'
import storage from './utils/storage'
import api from './api'
import store from './store'

const app = createApp(App);
// 挂载时，加$符号，是为了区分与原生挂载在全局的属性
app.config.globalProperties.$request = request;
app.config.globalProperties.$api = api;
app.config.globalProperties.$storage = storage;
app.use(router).use(store).use(ElementPlus)

// 载入Icon系统 - 全局载入的形式
const ElIconsData = ElIcons
for (const iconName in ElIconsData) {
    app.component(`ElIcon${iconName}`, ElIconsData[iconName])
}

app.mount('#app')