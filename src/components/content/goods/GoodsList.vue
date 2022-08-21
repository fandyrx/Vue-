<template>
    <div class="goods">
      <goods-item  v-for="(item,index) in goods" :key=index :goods-item="item"/>
    </div>
   
</template>

<script>

import GoodsItem from './GoodsItem.vue'
export default {
  name:'GoodsList',
  props:{
    goods:{
      type: Array,
      default(){
        return []
      }
    }

  },
  components:{
    GoodsItem
  }
}

</script>
 

<style scoped>
  .goods{
    display: flex;
    flex-wrap:  wrap;
    justify-content: space-around;

    padding: 2px;
     /* 微调，中间缝隙较大情况下，可以计算出这个数据 how? 页面100%-2*图片48%  剩余空间2%  */
  }
</style>