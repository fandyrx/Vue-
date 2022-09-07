<template>
   <div class="cart-list">
    
      <Scroll class="content" ref="scroll" :pullUpLoad='true' >
          <cart-list-item 
              v-for="(item,index) in  cartInfo"
              :key="index"
              :item-info  ="item"  >
          </cart-list-item>
      </Scroll>

    </div>
</template>

<script>

import Scroll from '@/components/common/scroll/Scroll.vue'
import CartListItem from '@/views/cart/childComps/cartListItem'
export default {
  
  name: 'cartList',
  mounted() {
      
  },
  components:{
   Scroll,
   CartListItem
  },
  activated(){
    
    this.$refs.scroll.refresh()
  },
  computed:{
      cartInfo() {
        return this.$store.state.cartList
      }
  }
  
 }
</script>

<style scoped>
    .cart-list{
       height: calc(100% - 44px - 49px - 40px);
        
    }

  .content{
    height: 100%;
    overflow: hidden;
    
  }
</style>