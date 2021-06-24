import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'

axios.defaults.baseURL = 'http://frozen-cove-81364.herokuapp.com'

createApp(App).use(store).use(router, axios).mount('#app')
//'http://127.0.0.1:8000'