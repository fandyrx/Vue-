<template>
  <div class="base-info" v-if="Object.keys(goods).length !==0">
      <div class="info-title">{{goods.title}}</div>
     
      <div class="price" >
        <span class="nowPrice">{{goods.newPrice}}</span>
        <span class="oldPrice">{{goods.oldPrice}}</span>
        <span class="discount" v-if="goods.discount">{{goods.discount}}</span>
      </div>
      <div class="info-other">
          <span>{{goods.columns[0]}}</span>
          <span>{{goods.columns[1]}}</span>
          <span>{{goods.services[goods.services.length-1].name}}</span>
         
      </div>

      <div class="services">
         <div  v-for="(item,index) in goods.services" :key="index">
            <img :src="item.icon" >
            <span>{{item.name}}</span>
         </div>
      </div>
  </div>
</template>

<script>
export default {
  name: 'DetailBaseInfo',
  props: {
    goods:{
      type: Object,
      default() {
        return {} 
      }
    }
   },
  data() { 
    return {

    }
  },
  components:{
  },
  methods:{

  },
  mounted() {

  },
 }
</script>

<style scoped>
.base-info{
  margin-top: 15px;
  padding: 0 8px;
  color: #999;
  border-bottom: 5px solid #f2f5f8
}
.info-title{
  color: #222
}
.price{
  margin-top: 10px;
  font-size: 13px;
 
}
.price span {
  margin-right: 5px;
}
.price .nowPrice{
  font-size: 20px;
  color: var(--color-high-text);
}
.price .oldPrice {
  text-decoration: line-through;
  color: lightgrey;
}
.price .discount{
  color: white;
  
  padding: 2px 5px;

  background-color: pink;
  border-radius: 10px;

  position: relative;
  bottom: 3px;
}
.info-other{
  margin: 10px 0 0 5px;
  display: flex;
    
}
.info-other span {
  flex:1;

}
  .services { 
    display: flex;
    justify-content: space-between;
    line-height: 60px;
  }
  .services span{ 
    flex: 1;
    font-size: 13px;
    color: #333;
  }
  .services img {
    height: 14px;
    width: 14px;

    position: relative;
    top: 2px;
  }
</style>