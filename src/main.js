import Vue from 'vue'
import store from './store/store'
import App from './App.vue'
import vSelect from 'vue-select'

Vue.component('v-select', vSelect)

Vue.config.productionTip = false

new Vue({
  el: '#app',
  store,
  render: h => h(App)
}).$mount('#app')
