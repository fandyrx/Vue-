import BackTop from '@/components/common/backTop/BackTop'

export const  backTopMixIn = {
  components:  {
    BackTop
  },
  data(){
    return{
      isShow: false
    }  
  },
  methods:{
     //回到顶部
     backClick() {
      this.$refs.scroll.scrollTo(0,0,500)
  },
  }

}