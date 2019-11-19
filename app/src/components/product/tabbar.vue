<template>
<div>
  <mt-tabbar fixed v-model="active">
  <mt-tab-item id="tab1"  @click.native="getActive(0)">
    <tabicon  
    
    :focused="current[0].select" 
    slot="icon" 
     :nmormalImage="require('../../assets/shangpin1.png')"
     :selectedImage="require('../../assets/shangpin.png')"
    >
    </tabicon>
    精品
  </mt-tab-item>
  <mt-tab-item id="tab2"  @click.native="getActive(1)">
    <tabicon slot="icon"
     
     :focused="current[1].select"
      :nmormalImage="require('../../assets/jurassic1.png')"
     :selectedImage="require('../../assets/jurassic.png')"
    >
    </tabicon>
    论坛
  </mt-tab-item>
  <mt-tab-item id="tab3"  @click.native="getActive(2)">
    <tabicon 
   
    :focused="current[2].select" slot="icon" 
 :nmormalImage="require('../../assets/gouwucheman1.png')"
     :selectedImage="require('../../assets/gouwucheman.png')"
   >
   </tabicon>
    技术展
  </mt-tab-item>
  <mt-tab-item id="tab4" @click.native="getActive(3)">
    <tabicon 
    
    :focused="current[3].select" slot="icon" 
    :nmormalImage="require('../../assets/wode1.png')"
     :selectedImage="require('../../assets/wode.png')"
     >
     </tabicon>
    我的
  </mt-tab-item>
</mt-tabbar>  
</div>
  
</template>
<script>
import tabicon from "@/components/product/tabicon.vue"
  export default{
components: {
 "tabicon":tabicon,
  },
      data(){
          return{
              n:10,
               active:"tab1",//选中面板id
               current:[
                 {
                   select:true   //1
                 },
                 {
                   select:false //2
                 },
                 {
                   select:false//3
                 },
                 {
                   select:false//4
                 },
               ]
          }
      },
      methods:{
           getActive(index){
            //this.active=event.target.id;
            console.log(this.active);
            for(var key of this.current){
              key.select=false;
            }
            this.current[index].select=true;
            this.$router.push("/product"+index);
          }
      },
      created(){ //访问刷新页面重置问题
        for(var key of this.current){
              key.select=false;
            }
            console.log(this.$route.path);
        if(this.$route.path== '/'||this.$route.path == '/product0'){
           this.current[0].select=true;
          this.$router.push("/product0");
          this.active="tab1";
        }else if(this.$route.path== '/product1'){
          this.current[1].select=true;
          this.$router.push("/product1");
           this.active="tab2";
        }else if(this.$route.path== '/product2'){
          this.current[2].select=true;
          this.$router.push("/product2");
           this.active="tab3";
        }else if(this.$route.path== '/product3'){
          this.current[3].select=true;
          this.$router.push("/product3");
           this.active="tab4";
        }
       
      }
  }
</script>
<style scoped>
 #list{
  margin-top:48px; 
}
.mint-tabbar > .mint-tab-item{
  color:#999;
}
.mint-tabbar > .mint-tab-item.is-selected{
  color:greenyellow;
}
</style>