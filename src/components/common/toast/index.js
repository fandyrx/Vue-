import Toast from "./Toast.vue"

const obj = {}

obj.install = function(Vue) {
  // console.log("执行了obj INSTALL",Vue);
  // 1.组件构造器
  const toastConstructor = Vue.extend(Toast)

  //2. new 组件对象
  const toast = new toastConstructor()
  //3.挂载 
  toast.$mount(document.createElement("div"))
  
  //4.toast.$el 对应该div
  document.body.appendChild(toast.$el);
  
  Vue.prototype.$toast = toast
}
export default obj