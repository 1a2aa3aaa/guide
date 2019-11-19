<template>
  <div id="top"> 
      <div class="img">
    <img src="http://127.0.0.1:3000/houtui.png" width="32px" alt="">
    </div> 
      <div class="wz">
        发布
      </div>
  </div>
</template>
<script>

</script>
<style scoped>
/* *{
  margin: 0;
  padding:0;
} */
#top{
  z-index:1000;
  position: fixed;
top:0;
left:0;
  width: 100%;
  height:50px;
  background:rgb(136, 212, 226);
  display: flex;
  justify-content: space-around;
  align-items: center;
}
#top>.wz{
  width: 80%;
  padding-left:30%; 
  font-size:1.1rem;
  color:#fff;
}
#top>.img{
    width: 20%;
    padding-left:5px; 
    box-sizing: border-box;
}
</style>