<template>
  <div class="cart">
        <nav-bar class="nav-bar"><div slot="center">购物车({{cartLength}})</div></nav-bar>
        <cart-list />
        <cart-bottom-bar/>
  </div>
</template>

<script>
import NavBar from '@/components/common/navbar/NavBar'
import cartBottomBar from '@/views/cart/childComps/cartBottomBar'
import cartList from '@/views/cart/childComps/cartList'
export default {
  name:'Cart',
  
  components:{
    NavBar,
    cartBottomBar,
    cartList
  },
  computed:{
    cartLength(){
      return this.$store.state.cartList.length
    },
   
  },
  mounted(){
   
  }
}
</script>

<style scoped>
.cart{
  height: 100vh;
}
  .nav-bar { 
    background-color: var(--color-tint);
    color: #fff
  }
  
</style>