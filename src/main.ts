import './assets/main.css';
import { createApp } from 'vue';
import { createPinia } from 'pinia';
import i18n from './i18n';
import App from './App.vue';
import router from './router';
import vuetify from './plugins/vuetify';  // Import the Vuetify plugin

const app = createApp(App);

app.use(createPinia());
app.use(router);
app.use(i18n);
app.use(vuetify);  // Use the Vuetify plugin

app.mount('#app');
