import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './registerServiceWorker'
import jQuery from 'jquery';

window.$ = window.jQuery = jQuery;

import 'popper.js'
import 'bootstrap'
import './assets/app.scss'

Vue.config.productionTip = false

Vue.component('About', require('./components/About.vue').default)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
