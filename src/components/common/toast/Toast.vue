<template>
  <div class="toast" v-show="isShow">
    <div>{{message}}</div>
 </div>
</template>

<script>
export default {
  name: 'Toast',
  // props:{
  //   message:{
  //     type:String,
  //     default:''
  //   },
  //   show: {
  //     type: Boolean,
  //     default:false
  //   }
  // },
  data(){
    return {
      message:'',
      isShow:false
    }
  },
  components:{
  },
  methods:{
   
      show(message = "默认文字",duration = 2000){
          this.message =message;
          this.isShow= true;

          setTimeout(()=>{
            this.isShow = false ;
            this.message = ''
          },duration)
      }
    
  },
  mounted() {

  },
 }
</script>

<style scoped>
  .toast{
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    padding: 10px;
    background-color: rgba(0, 0, 0, 0.7);
    color: #fff;

    z-index: 999;
  }
</style>