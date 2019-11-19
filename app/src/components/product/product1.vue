<template>
<div>
  <top></top>
  <banner :t1="t1" :t2="t2" :t3="t3"></banner>
  <sec></sec>
</div>
  
</template>
<script>
// 引入制定的子组件
  import top from "../pr-0/pr-t.vue"
  import banner from "../pr-0/pr-banner.vue"
  import sec from "../pr-1/pr1-section.vue"
   export default{
    //   注册子组件
    data(){
        return{
            t1:"http://127.0.0.1:3000/04.jpg",
            t2:"http://127.0.0.1:3000/05.jpg",
            t3:"http://127.0.0.1:3000/06.jpg"
        }
    },
    components:{
      "top":top,
       "banner":banner,
       "sec":sec,
    },
    }
</script>
<style scoped>

</style>