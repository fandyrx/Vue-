<template>
  <div class="bottom-bar-list">

      <div class="bar-item">
          <i > </i>
          <span>客服</span>
            <i > </i>
          <span>收藏</span>
          <i > </i>
          <span>店铺</span>
      </div>


      <div class="bar-item shop-car"  >
          <span @click="goShop">加入购物车</span>
          <span>购买</span>
      </div>
 </div>
</template>

<script>
export default {
  name: 'DetailBottomBar',
  data() { 
    return {

    }
   
  },
  methods: {
    goShop(){
      this.$emit('addCart')
    }
  }
}
  
</script>

<style scoped>
.bottom-bar-list{
  height: 50px;
  background-color: #fff;

  display: flex;
  position: relative;
  
  text-align: center;
}
.bar-item {
  flex: 1;
  font-size: 15px;
  display: flex;
  line-height: 49px;
}
.bar-item span{
  flex: 1;
  background-color: lightyellow;
}

</style>