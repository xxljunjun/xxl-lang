import Vue from 'vue'
import App from './App.vue'
import pop from './../modules/index'
Vue.use(pop)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
