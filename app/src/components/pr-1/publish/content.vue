<template>
<div id="content">
<input type="text" placeholder="精美的标题更能吸引别人的注意哦~"> 
<select id="sex" >
    <option></option>
<option>前端大全</option>
 <option>后端大全</option>
  <option>框架大全</option>
   <option>组件大全</option>
</select>

<br>
<textarea name="pcontent" value="" placeholder="新鲜的内容更容易上热门哦~">
</textarea>  
</div>
</template>
<script>

</script>
<style scoped>
#content{
    margin-top:50px;
}
input{
    width: 70%;
    height:30px;
    margin-top: 10px;
    margin-bottom: 10px;
    /* outline: 0;
    border:0; */
}
textarea{
    width: 100%;
    height:500px;
     outline: 0;
    border:0;
    font-size:1rem;
}
select{
    outline: 0;
    border:0;
}
</style>