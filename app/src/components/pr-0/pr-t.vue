<template>
  <div id="top">  
      <img src="../../assets/logoj.png" width="30%" alt="">
      <div>
        <input type="text" placeholder="请输入关键字" />
        <button>搜索</button>
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
#top>div{
  width: 60%;
  display: flex;
  justify-content:left;
  align-items: center;
}
#top>div>input{
  border:0;
  outline:0;
  height:25px;
}
#top>div>button{
  background: #aaa;
  display:block;
  outline: 0;
  border:0;
  width: 50px;
  height:27px;
  color:#fff;
  font-size:0.75rem;
  line-height: 27px;
  text-align: center;
  /* transition: all 1s; */
}
#top>div>button:hover{
  background:blue;
  /* transform: scale(1.1); */
}
</style>