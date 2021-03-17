import Vue from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'

Vue.config.productionTip = false

require('./assets/css/dist/main.css')

new Vue({
  store,
  router,
  mounted(){
    require('./assets/scripts/script.js')
  },
  render: h => h(App)
}).$mount('#app')

