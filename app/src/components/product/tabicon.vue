<template>
<div id="icon">
    <div>
        <img :src="focused?selectedImage:nmormalImage" 
        class="imgstyle">
    </div>
</div>
</template>
<script>
 export default{
     props:{
         focused:false,//默认状态
         selectedImage:{default:""},//选中的图片
         nmormalImage:{default:""},//未选中的图片
     }
     ,data(){
         return{

         }
     }
 }
</script>
<style scoped>
.imgstyle{
    width: 24px;
    height:24px;
}
</style>