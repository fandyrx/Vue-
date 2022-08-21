<template>
  <div id="detail">
      <detail-nav-bar class="detail-nav-bar" @titleClick="titleClick" ref="nav"></detail-nav-bar>
      <scroll class="content" ref="scroll" 
      :pullUpLoad='true' 
      :probe-type="2"
      @scroll="contentScroll">
          <detail-swiper :topImages="topImages"></detail-swiper>
          <detail-base-info :goods='goods' ></detail-base-info>
          <detail-shop-info :shop="shop"></detail-shop-info>
          <detail-goods-info :detailInfo="detailInfo" @imageLoad="imgLoad" ></detail-goods-info>
          <detail-param-info :paramInfo="paramInfo" ref="params"></detail-param-info>
          <detail-comment-info :commentInfo="commentInfo" ref="comment"></detail-comment-info>
          <goods-list :goods='commend' ref="recommend"></goods-list>
      </scroll>
       <detail-bottom-bar @addCart="addCart"></detail-bottom-bar>
      <back-top @click.native="backClick" v-show="isShow"></back-top>
  </div>
</template>

<script>
import DetailNavBar from '@/views/detail/childComps/DetailNavBar'
import DetailSwiper from './childComps/DetailSwiper.vue'
import DetailBaseInfo from './childComps/DetailBaseInfo.vue'
import DetailShopInfo from '@/views/detail/childComps/DetailShopInfo'
import DetailGoodsInfo from '@/views/detail/childComps/DetailGoodsInfo'
import DetailParamInfo from '@/views/detail/childComps/DetailParamInfo'
import DetailCommentInfo from '@/views/detail/childComps/DetailCommentInfo'
import GoodsList from '@/components/content/goods/GoodsList'
import DetailBottomBar from '@/views/detail/childComps/DetailBottomBar'

import Scroll from '@/components/common/scroll/Scroll'
//混入
import { backTopMixIn } from '@/utils/mixin'

import { Goods , Shop , GoodsParam} from "@/api/detail/index"
import {debounce} from '@/utils/debounce'
export default {
  
  name: 'Detail',
  data() {
    return {
      iid: null,
      topImages:[],
      goods:  {},
      shop: {},
      detailInfo: {},
      paramInfo: {},
      commentInfo:{},
      commend:[],
      newRefresh: null,
      themeTopYs: [],
      getThemeTopY: null,
      currentIndex: 0
    }
  },
  mixins: [backTopMixIn],
  components:{
    DetailNavBar,
    DetailSwiper,
    DetailBaseInfo,
    DetailShopInfo,
    DetailGoodsInfo,
    DetailParamInfo,
    DetailCommentInfo,
    Scroll,
    GoodsList,
    DetailBottomBar
   
  },
  created() {
    
    this.iid = this.$route.params.iid;
    this.$API.detail.getDetail(this.iid).then(res=>{
     
      let data = res.result
      //获取轮播图信息
      this.topImages = res.result.itemInfo.topImages

      //获取商品信息
      this.goods = new Goods(data.itemInfo,data.columns,data.shopInfo.services)

      //获取商店信息
      this.shop =new Shop(data.shopInfo)
      //商品详情
      this.detailInfo = data.detailInfo

      //获取商品参数
      this.paramInfo = new GoodsParam(data.itemParams.info,data.itemParams.rule)
      //获取商品评论    
      if(data.rate.list){
        this.commentInfo = data.rate.list[0]
      }
      
    })

    //获取推荐
    this.$API.detail.getRecommend().then(res=>{
      this.commend = res.data.list
           
    })
    //获取详情页标题高度
    this.getThemeTopY =debounce(()=>{
      this.themeTopYs = []
      this.themeTopYs.push(0),
      this.themeTopYs.push(this.$refs.params.$el.offsetTop),
      this.themeTopYs.push(this.$refs.comment.$el.offsetTop),
      this.themeTopYs.push(this.$refs.recommend.$el.offsetTop);
      this.themeTopYs.push(Number.MAX_VALUE);
      
      
    },50)  
  },
  mounted(){
     this.newRefresh = debounce(this.$refs.scroll.refresh,50)
    
    this.$emit('imageLoad',()=>{
         this.newRefresh()
    })
  },   
  methods:{
    imgLoad(){
      // this.$refs.scroll.refresh()
      this.newRefresh()
      
      this.getThemeTopY()
    },
    contentScroll(position) {
      //回到顶部是否显示
          this.isShow = -(position.y) > 1000
          // themeTopYs: [0,1,2,3] 
          //当 position.y =0 1 之间   index 0
          //当 position.y >=1 2 之间   index 1
          //当 position.y >=2 3 之间   index 2
          //当 position.y >=3     index 3
      // 0商品     1参数   2 评论  3推荐
          const positionY = -position.y
          //失败
          // if(this.themeTopYs[1] > positionY ){
          //   this.currentIndex = 0
          // }else if(this.themeTopYs[2] > positionY >= this.themeTopYs[1]){
          //   this.currentIndex = 1
          // }else if( this.themeTopYs[3] > positionY >= this.themeTopYs[2]){
          //   this.currentIndex = 2
          // }
    
             
          // 2.  不完整
          // for(let i = 0; i <this.themeTopYs.length;i++){
          //     if( positionY > this.themeTopYs[parseInt(i)] && positionY < this.themeTopYs[i+1] ){
          //       console.log(i);
          //     }
          // }
          //3. 
          let length = this.themeTopYs.length
          for(let i = 0; i < length-1 ; i++){
              if( this.currentIndex !==i && (positionY > this.themeTopYs[parseInt(i)] && positionY < this.themeTopYs[i+1])){
                console.log(i);
                this.currentIndex = i ;
                this.$refs.nav.currentIndex = this.currentIndex
              }
          }
          

    },
    titleClick(index){
     
      this.$refs.scroll.scrollTo(0,-this.themeTopYs[index],500)
    } ,
    //添加购物车
    addCart(){
      
        const product = {}
       
        product.image = this.topImages[0]
        product.title = this.goods.title
        this.$store.commit('addCart',product)
        
    }
  }
 
 
 
 }
</script>

<style scoped>
  #detail{
    background-color: white;
    position: relative;
    z-index: 9;
    height: 100vh;
    
  }
  .content{
    height: calc(100% - 44px - 49px);
    padding-top: 5px;
    /* 跳转标题高度嵌入？ */
   
  }
  .detail-nav-bar {
    position: relative;
    background-color: #fff;
    z-index: 9;
  }
</style>