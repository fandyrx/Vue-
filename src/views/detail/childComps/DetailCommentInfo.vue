<template>
  <div>
    <span>有空再做,获取到数据了,写页面样式即可</span>
    <hr>
    <div class="content">
      {{commentInfo.content}}
    </div>
     
 </div>
</template>

<script>
export default {
  name: 'DetailCommentInfo',
  props:{
    commentInfo: {
      type: Object,
      default() {
        return {}
      }
      
    }
  },
 
 }
</script>

<style scoped>
  .content {
    font-size: 16px;
    color: #999;
    height: 100px;
   }
</style>