import { createApp } from 'vue'
import { createPinia } from 'pinia'
import i18n from './i18n'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify'
import { createHead } from '@vueuse/head'
import './assets/main.css'
import vueUI from './plugins/vueUI'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(i18n)
app.use(vuetify)
app.use(vueUI)

const head = createHead()
app.use(head)

app.mount('#app')
