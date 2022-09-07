import BackTop from '@/components/common/backTop/BackTop'

//返回顶部按钮
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




export const POP = 'pop';
export const NEW = 'new';
export const SELL = 'sell';

