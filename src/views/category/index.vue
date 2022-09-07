<template>
  <div class="wrapper">
      
        <Scroll class="content"  :pull-up-load="true">
           <div class="show">
              <SideBar class="side-bar" :categoryList="categoryList" />
              <router-view :key="key" ></router-view>
           </div>
         
        </Scroll>
       
  </div>
</template>

<script>
import Scroll from '@/components/common/scroll/Scroll'

import SideBar from '@/views/category/childComps/SideBar'
import CategoryItem from '@/views/category/childComps/CategoryItem'
export default {
  name:'Category',
  components:{
    Scroll
  },
  data() {
    return {
     categoryList:[],
     key: this.$route.fullPath
    }
    
  },
  components:{
    Scroll,
    SideBar,
    CategoryItem 
  },
  mounted(){
  this.$API.category.getCategory().then(res=>{
   
    this.categoryList = res.data.category.list
  })

  console.log(this.$route.fullPath);
  },  

  methods:{
    
  }

}
</script>

<style scoped>
.wrapper{
  height: calc(100vh - 49px);
 
}
  .content{

    
    background-color: #eee;
    overflow: hidden;
   
  }
  
  .show{
    display: flex;
   
  }

  .side-bar{
   width: 100px;

  }
  .c-item{
    flex: 1;
    background-color: gold;
  }
</style>