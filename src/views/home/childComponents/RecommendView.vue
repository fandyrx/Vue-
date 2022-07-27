<template>
  <div class="recommed"> 
    <div v-for="(item,index) in recommends" :key="index" class="recommend-item">
      <a :href="item.link"></a>
      <img :src="item.image" >
      <div>{{item.title}}</div>
    </div>
  </div>
</template>

<script>
export default {
  name:'RecommendView',
  props:{
    recommends:{}
  }
}
</script>

<style scoped>
  .recommed{
    display:flex;
    text-align: center;
    font-size: 12px;
    padding: 10px 0 20px 0;
    border-bottom: 8px solid #eee;
    
  }
  .recommend-item{
    
    flex:1
  }
  .recommed img{
    height: 70px;
    margin-bottom: 10px;
    
  }
</style>