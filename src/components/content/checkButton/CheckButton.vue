<template>
  <div class="check-button" :class="{check:isChecked}">
    <img src="~assets/img/cart/tick.svg" alt="#" >
 </div>
</template>

<script>
export default {
  name: 'CheckButton',
  props:{
    isChecked:{
      type:Boolean,
      default:true
    }
  },
  data() { 
    return {

    }
  },
  
 }
</script>

<style scoped>
 .check-button{
  
  border-radius:50%;
  border: 2px solid #aaa;
 } 
 .check {
  background-color: red;
  border-color:red ;
 }
 img{
  position: relative;
  top: 2px;
 }
  </style>