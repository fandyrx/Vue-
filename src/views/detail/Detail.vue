<template>
  <div class="detail">
      <detail-nav-bar></detail-nav-bar>
  </div>
</template>

<script>

import DetailNavBar from '@/views/detail/childComps/DetailNavBar'
export default {
  
  name: 'Detail',
  data() {
    return {
      iid: null
    }
  },
  created() {
    this.iid = this.$route.params.iid;
  },
  components:{
    DetailNavBar
  }
 
 
 
 }
</script>

<style scoped>

</style>