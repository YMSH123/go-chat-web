// import './assets/main.css'
//pinia持久化
import { createPinia } from 'pinia'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import '@/styles/common.scss'

const app = createApp(App)

const pinia = createPinia()
pinia.use(piniaPluginPersistedstate)
// app.config.warnHandler = (msg, vm, trace) => {
//   // This suppresses Vue's warning about "An error event has already been emitted on the socket"
//   if (msg.includes('An error event has already been emitted on the socket')) {
//     return
//   }
//   console.warn(msg)
// }
app.use(pinia)
app.use(router)

app.mount('#app')
