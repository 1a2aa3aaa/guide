<template>

  <div>  
       <!-- <h3>主页面</h3> -->
      <top></top>
      <banner :t1="t1" :t2="t2" :t3="t3"></banner>
      <list></list>  
</div>
  
</template>
<script>
// 引入制定的子组件
  import top from "../pr-0/pr-t.vue"
  import banner from "../pr-0/pr-banner.vue"
  import list from "../pr-0/pr-list.vue"
   export default{
     data(){
        return{
            t1:"http://127.0.0.1:3000/01.jpg",
            t2:"http://127.0.0.1:3000/02.jpg",
            t3:"http://127.0.0.1:3000/03.jpg"
        }
    },
    //   注册子组件
    components:{
      "top":top,
       "banner":banner,
       "list":list,
    },
    }
</script>
<style scoped>

</style>