<template>
  <div class="side-bar">
      <ul>
        <li v-for="item in categoryList" 
            :key="item.maitKey"
             :class="{active: item.maitKey == currentmaitKey }"
             @click="changeCategory(item)">
              {{item.title}}
             
        </li>
      </ul>
 </div>
</template>

<script>
export default {
  name: 'SideBar',
  data(){
    return{
      currentmaitKey:3627
    }
  },
  props:{
    categoryList:{
      type:Array,
      default(){
        return []
      }
    }
  },
 
  components:{
  },
  methods:{
  changeCategory(item){
    this.currentmaitKey = item.maitKey

    this.$router.push({
      name:"categoryItem",
      query:item.title
      })   
    
   }


  },
  mounted() {

  },
 }
</script>

<style scoped>
  .side-bar{
    background-color: #ccc;
    height: 100vh;
  }
  li{
    padding: 10px;
    color: white;
    text-align: center;
    /* 点击报错解决*/
     touch-action: none;
  }

  .active{
    border-left: 5px solid  var(--color-high-text);
    color: var(--color-high-text);
    background-color: #fff;
    font-weight: 700;
  
  }
</style>