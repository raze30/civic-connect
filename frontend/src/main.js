import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import Toast from 'vue-toastification'

import App from './App.vue'
import router from './router'

const app = createApp(App)

// Toast options with Catppuccin Mocha theme
const toastOptions = {
  position: 'top-right',
  timeout: 4000,
  closeButton: false,
  icon: true,
  rtl: false,
  transition: 'Vue-Toastification--fade',
  filterBeforeCreate: (toast, toasts) => {
    if (toasts.filter((t) => t.type === toast.type).length >= 2) {
      return false
    }
    return toast
  }
}

app.use(createPinia())
app.use(router)
app.use(Toast, toastOptions)

app.mount('#app')
