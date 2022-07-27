<template>
  <div id="detail">
      <detail-nav-bar class="detail-nav-bar"></detail-nav-bar>
      <scroll class="content" ref="scroll" :pullUpLoad='true'>
          <detail-swiper :topImages="topImages"></detail-swiper>
          <detail-base-info :goods='goods'></detail-base-info>
          <detail-shop-info :shop="shop"></detail-shop-info>
          <detail-goods-info :detailInfo="detailInfo" @imageLoad="imageLoad"></detail-goods-info>
          <detail-param-info :paramInfo="paramInfo"></detail-param-info>

      </scroll>
  </div>
</template>

<script>
import DetailNavBar from '@/views/detail/childComps/DetailNavBar'
import DetailSwiper from './childComps/DetailSwiper.vue'
import DetailBaseInfo from './childComps/DetailBaseInfo.vue'
import DetailShopInfo from '@/views/detail/childComps/DetailShopInfo'
import DetailGoodsInfo from '@/views/detail/childComps/DetailGoodsInfo'
import DetailParamInfo from '@/views/detail/childComps/DetailParamInfo'

import Scroll from '@/components/common/scroll/Scroll'

import { Goods , Shop , GoodsParam} from "@/api/detail/index"

export default {
  
  name: 'Detail',
  data() {
    return {
      iid: null,
      topImages:[],
      goods:  {},
      shop: {},
      detailInfo: {},
      paramInfo: {}
    }
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

      //获取
      this.paramInfo = new GoodsParam(data.itemParams.info,data.itemParams.rule)
    })
  },
  components:{
    DetailNavBar,
    DetailSwiper,
    DetailBaseInfo,
    DetailShopInfo,
    DetailGoodsInfo,
    DetailParamInfo,
    Scroll
   
  },
  methods:{
    imageLoad(){
      this.$refs.scroll.refresh()
      console.log('detail调用');
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
    height: calc(100% - 44px);
  }
  .detail-nav-bar {
    position: relative;
    background-color: #fff;
    z-index: 9;
  }
</style>