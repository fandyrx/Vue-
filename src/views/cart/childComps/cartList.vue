<template>
  <div class="cart-list">
    <div v-for="(goods,index) in cartInfo" :key='index' >
      <div>{{goods.title}}</div>
      <img :src="goods.image" alt="">
    </div>
 </div>
</template>

<script>
export default {
  name: 'cartList',
  mounted() {
      
  },
  computed:{
      cartInfo() {
        return this.$store.state.cartList
      }
  }
  
 }
</script>

<style scoped>

</style>