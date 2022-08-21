<template>
  <div class="wrapper" ref="wrapper">
     <div class="content">
        <slot></slot>
     </div>
  </div>
</template>

<script>
import BScroll from '@better-scroll/core'
import Pullup from '@better-scroll/pull-up'

BScroll.use(Pullup)

export default {
    name:'Scroll',
    props:{
        probeType: {
          type: Number,
          default (){
            return 0
          }
        },
        pullUpLoad: {
            type: Boolean,
            default: false
         },
    },
    data(){
      return {
        bs : null,
      
      }
    },
    mounted(){
     
      //1.创建betterScroll对象，配置规则
        this.bs  = new BScroll(this.$refs.wrapper, {
            click:true,
            //探针类型 '
            //  1. probeType 为 0，在任何时候都不派发 scroll 事件，
            // 2. probeType 为 1，仅仅当手指按在滚动区域上，每隔 momentumLimitTime 毫秒派发一次 scroll 事件，
            // 3. probeType 为 2，仅仅当手指按在滚动区域上，一直派发 scroll 事件，
            // 4. probeType 为 3，任何时候都派发 scroll 事件，包括调用 scrollTo 或者触发 momentum 滚动动画
            probeType: this.probeType,
            pullUpLoad: this.pullUpLoad,
            useTransition:false
            //异常回弹？
    }), 
 
      // 3.监听滚动
      this.bs.on('scroll',(position)=>{
          this.$emit('scroll',position) 
      }),

      //4.监听上拉 
      
      this.bs.on('pullingUp',()=>{
        this.$emit('pullingUp')
      })
      
    },
    methods:{
      //2.返回顶部方法
      scrollTo(x,y, time = 300){
          //判断组件实例创建与否，已创建再执行，否则报错  下方可同理操作
            this.bs &&  this.bs.scrollTo(x,y,time)
      },
      //结束上拉
      finishPullUp() {
        this.bs.finishPullUp()
      },
      refresh(){
       
         this.bs && this.bs.refresh()
      },
      getScrollY() {
        return this.bs ? this.bs.y : 0
      }


    }
}
</script>

<style scoped>
  
</style>