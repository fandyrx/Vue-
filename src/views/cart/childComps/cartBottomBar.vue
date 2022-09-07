<template>
  <div class="bottom-bar">
      <div class="check-content">
           <CheckButton class="check-button" 
           :is-checked="isSelectAll" 
           @click.native = "checkClick"/> 
           <span>全选</span>
      </div>

      <div class="price">
        合计:{{totalPrice}}
      </div>
      <div class="calculate"
            @click="calcClick">
        去计算({{checkLength}})
      </div>
 </div>
</template>

<script>
import CheckButton from '@/components/content/checkButton/CheckButton'
import { mapState } from 'vuex'
export default {
  name: 'cartBottomBar',
  data() { 
    return {

    }
  },
  components:{
    CheckButton
  },
  methods:{
    // 全选框回调
    checkClick(){
  
    if(this.isSelectAll) {
     this.cartList.forEach(item=>{
        item.checked = false 
      })
    }else{
      this.cartList.forEach(item=>{
        item.checked = true
      })
    }

  },

  // 去计算
  calcClick(){
    if(!this.isSelectAll) {
      this.$toast.show("请选择购买的商品",2000)
    }
    
  }
  },
  mounted() {

  },
  computed:{
    ...mapState(["cartList"]),
    totalPrice() {
      return "¥" + this.cartList.filter(item=>{
          return item.checked
      }).reduce((preVal,item)=>{
        return preVal + item.price * item.count
      },0).toFixed(2)
    },

    checkLength() {
      return this.cartList.filter(item=>{
        return item.checked 
      }).length
    },

    isSelectAll() {
      // find 查找,checked 为false 的元素,找到则返回true.有未选中,全选框不勾选 
      //  0 默认为 false
      if(this.cartList.length === 0 ) return false
      
      return !this.cartList.find(item=>{
        return !item.checked
      })
      
    //  遍历
    // for (let item of this.$store.state.cartList){
    //   if(!item.checked){
    //     return false
    // }
    // }
    //  return true
    },
    
 
  }
 }
</script>

<style scoped>
  .bottom-bar {
    position: relative;
    display: flex;
    
    height: 40px;
    line-height: 40px;
    background-color: #eee;
  
   
  }
  .check-content{
     width: 80px;
     display: flex;
     align-items: center;

  }
  .check-button{
    width: 20px;
    height: 20px;
    margin: 0 10px 0;
    line-height: 20px;
    
  }

  .price{
    flex: 1;
    margin-left: 10px;
  }
  .calculate{
    width: 80px;
    
    text-align: center;
    background-color: red;
    color: white;

  }
</style>