import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './route/index'

createApp(App).use(router).mount('#app')
