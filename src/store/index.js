import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);


const store = new Vuex.Store({
      state:{
        cartList:[]
      },
      mutations:{
       AddCounter(state,payLoad){
        payLoad.count++
        },
        AddToCart(state,payLoad){
         payLoad.checked = true
          state.cartList.push(payLoad)
        }
       
      },
      actions:{
        addCart({commit,state},payLoad){
         
          return new Promise((resolve,reject)=>{
             //1.接受外来参数，存入本地状态
          // let  oldProduct = null;
          // for(let item of state.cartList){
          //   // 判断id 和列表内是否重复
          //   if(item.iid === payLoad.iid){
          //     oldProduct = item;
          //   }
          // };
          // 查找存储数据,传入是否重复
          let oldProduct = state.cartList.find(item => item.iid === payLoad.iid)

          if(oldProduct){
              commit("AddCounter",oldProduct)
              resolve('当前商品+1')
          }else{
            payLoad.count = 1 
            commit("AddToCart", payLoad)
            resolve("已添加新商品至购物车")
          }
          })

        }
      },
      getters:{},
      modules:{}
})


export default store