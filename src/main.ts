import Vue from 'vue'
import App from './App.vue'
import { router } from './router'
import Buefy from 'buefy'
import VueCookies from 'vue-cookies'
import { store } from './store'
import VueProgressBar from 'vue-progressbar'
import VueI18n from 'vue-i18n'
import { messages } from '@/locales/ru'
// import VueFroala from 'vue-froala-wysiwyg'
import 'buefy/dist/buefy.css'
import './assets/css/style.css'
import './assets/scss/app.scss'
import i18n from '@/utils/i18n'

require('froala-editor/js/froala_editor.pkgd.min')
require('froala-editor/css/froala_editor.pkgd.min.css')
require('froala-editor/css/froala_style.min.css')

Vue.use(Buefy)
Vue.use(VueCookies)
Vue.use(VueI18n)
// Vue.use(VueFroala)
Vue.use(VueProgressBar, {
  color: '#7957d5',
  failedColor: '#ff3860',
  transition: {
    speed: '0.2s',
    opacity: '0.1s',
  },
})

Vue.config.productionTip = false

new Vue({
  i18n,
  router,
  store,
  render: h => h(App),
}).$mount('#app')
