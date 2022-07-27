<template>
   <tab-bar>
         <TabBarItem path="/home" activeColor="skyblue">
              <img slot="item-icon" src="@/assets/img/tabbar/home.svg" alt="">
              <img slot="item-icon-active" src="@/assets/img/tabbar/home_active.svg" alt="">
              <div slot="item-text">首页</div>
         </TabBarItem>
         <TabBarItem path="/category">
               <img slot="item-icon" src="@/assets/img/tabbar/category.svg" alt="">
               <img slot="item-icon-active" src="@/assets/img/tabbar/category_active.svg" alt="">
              <div slot="item-text">分类</div>
         </TabBarItem>
         <TabBarItem path="/cart">
               <img slot="item-icon" src="@/assets/img/tabbar/shopcart.svg" alt="">
               <img slot="item-icon-active" src="@/assets/img/tabbar/shopcart_active.svg" alt="">
              <div slot="item-text">购物车</div>
         </TabBarItem>
         <TabBarItem path="/profile">
               <img slot="item-icon" src="@/assets/img/tabbar/profile.svg" alt="">
               <img slot="item-icon-active" src="@/assets/img/tabbar/profile_active.svg" alt="">
              <div slot="item-text">我的</div>
         </TabBarItem>
    </tab-bar>
</template>

<script>
import TabBar  from '@/components/common/tabbar/TabBar.vue'
import TabBarItem from '@/components//common/tabbar/TabBarItem'
export default {
  name:'mainTabBar',
  components:{
    TabBar,
    TabBarItem
  }
}
</script>

<style>

</style>