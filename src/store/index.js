import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);


const store = new Vuex.Store({
      state:{
        msg:123
      },
      mutations:{
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