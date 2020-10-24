import 'reflect-metadata'
import Vue from 'vue'
import Buefy from 'buefy'
import VueCookies from 'vue-cookies'
import { store } from '@/Scandinaver/Core/Infrastructure/store'
import VueProgressBar from 'vue-progressbar'
import VueI18n from 'vue-i18n'
import VueTypedi from 'vue-typedi'
import 'buefy/dist/buefy.css'
import './assets/css/style.css'
import './assets/scss/app.scss'
import i18n from '@/utils/i18n'
import { router } from './router'
import App from './App.vue'


Vue.use(Buefy, {
  defaultSnackbarDuration: 2000,
  defaultNoticeQueue: false,
})
Vue.use(VueCookies)
Vue.use(VueI18n)
Vue.use(VueTypedi);
Vue.use(VueProgressBar, {
  color: '#7957d5',
  failedColor: '#ff3860',
  transition: {
    speed: '0.2s',
    opacity: '0.1s',
  },
})

Vue.config.productionTip = false
Vue.prototype.$eventHub = new Vue()

new Vue({
  i18n,
  router,
  store,
  render: h => h(App),
}).$mount('#app')
