import './common/vendor'
import './common/global.scss'
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './assets/new-icon/iconfont.css'

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
