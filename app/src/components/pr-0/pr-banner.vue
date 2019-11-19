<template>
  <div id="d1">  
      <mt-swipe :auto="2000">
   <mt-swipe-item>
       <img :src="t1"
               height="220px" width="100%" alt="">
   </mt-swipe-item>
  <mt-swipe-item>
      <img :src="t2" 
              height="220px" width="100%" alt="">
 </mt-swipe-item>
  <mt-swipe-item>
       <img :src="t3" 
              height="220px" width="100%" alt="">
  </mt-swipe-item>
</mt-swipe>
  </div>
</template>
<script>
   export default{
     props:{
        t1:{default:""},//图片
        t2:{default:""},//图片
        t3:{default:""},//图片
     }
   }
</script>
<style scoped>
#d1{
    margin-top:50px; 
    height:220px;
}
#d1 >>> .mint-swipe-indicator{
    opacity: 1;
}
</style>