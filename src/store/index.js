import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);


const store = new Vuex.Store({
      state:{
        msg:123,
        cartList:[]
      },
      mutations:{
        addCart(state,payLoad){
          //接受外来参数，存入本地状态
            state.cartList.push(payLoad)
        },
        mutationTest(state){
          console.log('mutations',state);
        }
      },
      actions:{
        actionsTest(context){
          this.commit('mutationTest')
          console.log('actions',context);
        }
      },
      getters:{},
      modules:{}
})


export default store