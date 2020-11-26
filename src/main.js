import { createApp } from 'vue'
import App from './App.vue'
import store from './store'
import i18n from './i18n';

console.log('i18n', i18n)

window.app = createApp(App)
  .use(store)
  .use(i18n)
  .mount('#app');