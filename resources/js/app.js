import '../assets/index.css'
import router from "../../routes";
import { createApp } from 'vue'
import App from '../App.vue'
import Toast from "vue-toastification";
// Import the CSS or use your own!
// import { VueRecaptchaPlugin } from 'vue-recaptcha'
import axios from 'axios'
import "vue-toastification/dist/index.css";
import '../style'
import AOS from 'aos';
import 'aos/dist/aos.css';
axios.defaults.baseURL='http://127.0.0.1:8000'
const app=createApp(App)
// app.use(VueRecaptchaPlugin, {
//     v2SiteKey: '6LdX-L0pAAAAALr6mNtVvcYV5fGZxPW1urk8YdNM',});
app.use(Toast).use(router).mount('#app')

