<template>
 
    <swiper class="detail-swiper">
      <swiper-item v-for="(image,index) in topImages" :key="index">
          <img :src="image" alt="">
      </swiper-item>
    </swiper>

</template>

<script>
import { Swiper, SwiperItem }  from '@/components/common/swiper/index'

export default {
  name: 'DetailSwiper',
  props:{
    topImages:{
      type: Array,
      default(){
        return []
      }
    }
  },
  data() { 
    return {

    }
  },
  components:{
    Swiper, 
    SwiperItem
  },
  methods:{

  },
  mounted() {
     
  },
 }
</script>

<style scoped>
  .detail-swiper{
     height: 300px;
  }
  
</style>