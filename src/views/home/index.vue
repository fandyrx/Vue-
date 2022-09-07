<template>
  <div id="home">
           <nav-bar class="home-nav"></nav-bar>
         
           <!-- 吸顶用 -->
            <tab-control  
                :titles="['流行','新款','精选']"
                @tabClick="tabClick"
                ref="tabControl1"
                class="tab-control"
                :class="{fixed:isTabFixed}"
                v-show="isTabFixed"
            />

          <scroll class="content" ref="scroll" 
              :probe-type='3'
              :pull-up-load="true"
              @scroll="contentScroll"
              @pullingUp="loadMore"
            >  
          <home-swiper :banners="banners" @swiperImageLoad="swiperImageLoad"></home-swiper>
          <recommend-view :recommends='recommends'></recommend-view>
          <feature-view></feature-view>
          <tab-control  
          :titles="['流行','新款','精选']"
          @tabClick="tabClick"
          ref="tabControl"
          :class="{fixed:isTabFixed}"></tab-control>
          <goods-list :goods="showGoods"></goods-list> 
          </scroll>
      
      <back-top @click.native="backClick" v-show="isShow"></back-top>

    
     
  </div>
</template>

<script>
//views
import HomeSwiper from './childComponents/HomeSwiper'
import RecommendView from '@/views/home/childComponents/RecommendView'
import FeatureView from "@/views/home/childComponents/FeatureView"
//components
import NavBar from '@/components/common/navbar/NavBar.vue'
import TabControl from '@/components/content/tabControl/TabControl'
import GoodsList from '@/components/content/goods/GoodsList'
import Scroll from '@/components/common/scroll/Scroll'
//混入
import { backTopMixIn } from '@/utils/mixin'

//防抖函数引入
import { debounce } from '@/utils/debounce'
export default {
  
  name:'Home',
  components:{
    HomeSwiper,
    RecommendView,
    FeatureView,
    NavBar ,
    TabControl,
    GoodsList,
    Scroll,
    
  
  },
  mixins:[backTopMixIn] ,
  data(){
    return{
       banners: [] ,
       recommends: [],
       goods: {
        'pop': {page: 0,list:[]},
        'new': {page: 0,list:[]},
        'sell': {page: 0,list:[]},
       },
       currentType:'pop',
       
       tabOffsetTop:'',
       isTabFixed: false,
       saveY: 0,
       itemImgListener: null

    }
   
  },
  created(){
    this.getHomeMultidata(),

    this.getHomeGoods('pop')
    this.getHomeGoods('new')
    this.getHomeGoods('sell')
    //封装调用三次方法  获取所有数据
  
   
  },
  mounted(){
      //监听推荐区图片加载完成
    const newRefresh = debounce(this.$refs.scroll.refresh,50)
    //保存监听回调
    this.itemImgListener = ()=>{ newRefresh();}
    
    this.$bus.$on("itemImageLoad",this.itemImgListener)
  },
  //keep alive时可使用 组件激活/不激活回调
    activated(){
      this.$refs.scroll.refresh()
       this.$refs.scroll.scrollTo(0, this.saveY , 0)
        
    },
    deactivated(){
    //新版本好像不需要这样操作，自动保存状态了？
        this.saveY = this.$refs.scroll.getScrollY()
        

    //取消监听
        this.$bus.$off('imageItemLoad',this.itemImgListener)
       
    },
  
  methods: {

    
    /**
     * 事件监听相关的方法
     */
    tabClick(index){
      
      switch (index){
        case 0:
          this.currentType = 'pop'
          break;
        case 1:
          this.currentType = 'new'
          break;
        case 2 :
          this.currentType = 'sell'
          break;
      }
        this.$refs.tabControl1.currentIndex = index;
        this.$refs.tabControl.currentIndex = index

    },
   
    //滚动监听
    contentScroll(position) {
      //回到顶部是否显示
          this.isShow = -(position.y) > 1000
      //tabControl是否停留
          this.isTabFixed = -(position.y) > this.tabOffsetTop
    },
    //加载更多
    loadMore(){
        this.getHomeGoods(this.currentType)

    },
    //轮播图加载
    swiperImageLoad(){
        // console.log(this.$refs.tabControl.$el.offsetTop);
      this.tabOffsetTop = this.$refs.tabControl.$el.offsetTop

    },
    
    /**   网络请求相关的方法
     */
    getHomeMultidata(){
        //请求多个数据 轮播图，推荐
    this.$API.home.getHomeMultidata().then(res=>{
      this.recommends = res.data.recommend.list
        this.banners = res.data.banner.list
    })
    },


    getHomeGoods(type){
      const page = this.goods[type].page + 1
           //请求商品数据
    this.$API.home.getHomeGoods(type,page).then(res=>{
     
      this.goods[type].list.push(...res.data.list);
      this.goods[type].page += 1

      //加载更多时，告知已结束
      this.$refs.scroll.finishPullUp();
      
        this.$refs.scroll.bs.refresh()
    })
    }

  },
  computed:{
    showGoods(){
      return this.goods[this.currentType].list
    }
  }
 
  
}
</script>

<style scoped>
  #home{
   padding-top: 44px;
   height: 100vh;
  position: relative;
  
}
  .home-nav{
    background-color: var(--color-tint);
    color:#fff;

    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    z-index: 9;
  }
  .tab-control {
    position: relative;
    z-index: 9;
  }
  /* .fixed{

    betterscroll原理修改transform :translate fixed 的元素依旧会修改，所以会突然移动到最顶部
    position: fixed;
    left: 0;
    right: 0;
    top: 44px;
  } */
 
  .content{

    
      position: absolute;
      top: 44px;
      bottom: 49px;
      left: 0;
      right: 0;

    
      overflow: hidden;
  }
</style>