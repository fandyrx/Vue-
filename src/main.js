import Vue from 'vue'
import App from './App.vue'
//引入路由并全局注册
import router from '@/router'
import store from '@/store'

//全局事件总线
Vue.prototype.$bus = new Vue();

Vue.config.productionTip = false

//引入所有API ，挂载到VUE原型上 ，方便后续网络请求使用
import API from '@/api'
//挂载API
Vue.prototype.$API = API;
new Vue({
  render: h => h(App),
  router:router,
  store

}).$mount('#app')
