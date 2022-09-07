<template>
  <div>
    {{title}}
    
   
 </div>
</template>

<script>
export default {
  name: 'CategoryItem',
  data() { 
    return {
      title:''
    }
  },
  
  mounted() {
    
  },
  watch:{
    $route:{
      immediate: true,
      deep:true,
      handler(){
          console.log('query change');
          this.title = this.$route.query 
          
      }
    }   
 
  
 }
 }
</script>

<style scoped>

</style>