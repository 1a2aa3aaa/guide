<template>
<div>
<ul class="section1">
    <li @click="secList(i)" :class="a[i]" v-for="(v,i) of data" :key="i">
        {{v.sname}}
    </li>
</ul>
<div @click="pub" class="pubcss"></div>
<seclist :sid="sid"></seclist>
</div>
  
</template>
<script>
// 引入制定的子组件
 import seclist from "@/components/pr-1/secList.vue"
   export default{
    //   注册子组件
     
    data(){
        return{
           data:[],
           a:[],
           sid:1,
           pub1:"no",
        }
    },
    components:{
      "seclist":seclist
    },
    methods:{
    clear(){
         for(var i=0;i<this.data.length;i++){
                this.a[i]="no";
            }
    },
      secList(sid){
         this.clear();
          this.a.splice(sid,1,'active');
          this.sid=sid+1;
       },
       pub(){
         this.$router.push("/publish")
     }
    },
    created(){
        var url="/product/sect";
        this.axios.get(url).then(res=>{
            this.data=res.data.result;
            //console.log(this.data);
           this.clear();
             this.a[0]="active";
        })
    }
    }
</script>
<style scoped>
*{
    margin: 0;
    padding: 0;
}
  .section1{
      border-top:2px solid rgb(255, 255, 255);
      list-style: none;
      display: flex;
      justify-content:space-between;
      width: 100%;
      padding-left: 0;
  }
li{
      width: 25%;
      text-align: center;
      box-sizing: border-box;
      color:#000;
      height:40px;
     display: flex;
     align-items: center;
     justify-content: center;                                                                        
  }
 li~li{
     border-left:5px solid #fff;
 }
 .active{
   border-bottom:2px solid rgb(136, 212, 226);
 }
 .pubcss{
   position: fixed;
   right:4%;
   bottom:20%;
   width: 32px;
   height:32px;
   border-radius: 50%;
   background: url("http://127.0.0.1:3000/fabu1.png") no-repeat;
 }
</style>