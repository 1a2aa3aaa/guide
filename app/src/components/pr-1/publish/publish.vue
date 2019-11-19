<template>
  <div>  
    <subTop></subTop>
    <con></con>
  </div>
</template>
<script>
// 引入制定的子组件
 import subTop from "@/components/pr-1/publish/pub-top.vue"
 import con from "@/components/pr-1/publish/content.vue"
  //   注册子组件
 export default{     
    data(){
        return{
           
        }
    },
    components:{
       "subTop":subTop,
       "con":con
    }
  }
</script>
<style scoped>

</style>