import './index.css'
import router from "./components/index";
import { createApp } from 'vue'
import App from './App.vue'
import './assets/style'

createApp(App).use(router).mount('#app')
