import Vue from 'vue'
import vuetify from './plugins/vuetify'
import './plugins/base'
import App from './App.vue'
import axios from 'axios' //追記
import VueAxios from 'vue-axios' //追記
import router from './router'
import store from './store'

Vue.config.productionTip = false
Vue.use(VueAxios, axios) //追記
new Vue({
  vuetify,
  router,
  store,
  render: h => h(App),
}).$mount('#app')
