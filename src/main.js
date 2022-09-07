import Vue from 'vue'
import App from './App.vue'
//引入路由并全局注册
import router from '@/router'
import store from '@/store'
import toast from "@/components/common/toast"
import FastClick from "fastclick"
//全局事件总线
Vue.prototype.$bus = new Vue();

Vue.use(toast)
Vue.config.productionTip = false
// 300ms移动端延迟解决插件
FastClick.attach(document.body)
//引入所有API ，挂载到VUE原型上 ，方便后续网络请求使用
import API from '@/api'
//挂载API
Vue.prototype.$API = API;
new Vue({
  render: h => h(App),
  router:router,
  store

}).$mount('#app')
