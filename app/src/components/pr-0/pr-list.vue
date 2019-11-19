<template>
  <div id="d1">
   <h3><img src="http://127.0.0.1:3000/hot.png"/>  热门</h3>
   <hr>
   <ul class="no"
  v-infinite-scroll="loadMore"
  infinite-scroll-disabled="loading"
   infinite-scroll-distance="0"><!--//离页尾还有多少像素时触发 -->
  <li v-for="(item,i) in rows" :key="i">
      <div id="list">
          <div class="top">
              <div>
               <!-- 头像 -->
              <img :src="`http://127.0.0.1:3000/${uhead[i]}`" alt="">
              <!-- 发帖人名字 -->
              </div>
              <div> 
                <p>{{uname[i]}}</p>
                <!-- 时间 -->
                <p class="time">{{ptime[i]}}</p>
              </div>
          </div>
           <div class="center">
                  <!-- 标题 -->
                <p class="title">{{ptitle[i]}}</p>
           </div>
          <div class="bottom">  
             <a href="javascript:;"><img src="http://127.0.0.1:3000/zhuanfa1.png" alt=""></a> 
             <a href="javascript:;" @click="scan(ppid[i],i)">
                 <img :src="`http://127.0.0.1:3000/${isc[i]}`" alt="">
                 </a>  
             <a href="javascript:;"><img src="http://127.0.0.1:3000/xinxi1.png" alt=""></a>
             <!-- 判断是否点过赞 -->
              <a href="javascript:;" @click="dzan(ppid[i],i)">
                  <!-- 函数传参,传该贴id,下标, -->
                  <img :src="`http://127.0.0.1:3000/${iszan[i]}`" alt="">
              <span v-model="pzan[i]" :class="isactive[i]">
                {{pzan[i]}}
                </span></a>    
          </div>
      </div>
  </li>
</ul>
<div class="loading-box" v-if="isLoading">
    <mt-spinner type="snake" class="loading-more"></mt-spinner>
 </div>
 <div class="no-more" v-if="noMore">没有更多了~</div>

  </div>
</template>
<script>
export default {
    data() {
      return {
       loading:false,//false无限下拉，true不下拉
       page: 1,//页数
       bRequest: true,//控制是否请求
       isLoading:true,//加载动画：加载中改为true，
       //数来了据请求回，改为false
       noMore:false,//数据没有之后的动作
       iszan:[],//点赞否 
       isactive:[],//是否选中
       rows:[],//显示的数据
       zpid:[],//点赞表帖子的id
       ptime:[],//帖子的时间
       ppid:[],//帖子的id
       ptitle:[],//帖子的标题
       pzan:[],//帖子的赞的数量
       uhead:[],//发帖人的头像
       uname:[],//发帖人的名字
       uid:[],//发帖人的id
       cpid:[],//我收藏表的帖子id
       isc:[],//判断是否收藏
      }
    },
    computed: {
      
    },
    methods: {
        loadMore() {
        if (this.bRequest) {//开关
            this.loadList(this.page);//调用页码
         }
        },
        loadList (page) {//下拉执行的函数，参数为页码
            //发送ajax请求
            var url="product/list";
            var obj={pno:page};
            this.axios.get(url,{params:obj}).then(res => {
                //得到点赞表帖子的id
              if(this.page==1){  //因为第一次就能得到赞表的所有值,不需要二次
                 for(var key of res.data.pid){
                   this.zpid=this.zpid.concat(key.pid);
                 }
                 for(var key of res.data.cpid){
                   this.cpid=this.cpid.concat(key.pid);
                 }
                 console.log(this.cpid);
               } 
              //得到帖子所有信息
               for(var key of res.data.rows){
                   this.ptime=this.ptime.concat(key.ptime);
                   this.ppid=this.ppid.concat(key.pid);
                   this.ptitle=this.ptitle.concat(key.ptitle);
                   this.pzan=this.pzan.concat(key.pzan);
                   this.uhead=this.uhead.concat(key.uhead);
                   this.uname=this.uname.concat(key.uname);
                   this.uid=this.uid.concat(key.uid);
               }
              this.isagein(res.data.rows)
            }).catch(err=>{
                console.log(err);
             });    
         },
         isagein(rows){//判断是否还有数据
              if(rows.length==0){//当没有数据了，开关false
                this.bRequest = false;//关闭开关不再请求数据
                this.noMore=true; //没有更多字样出现
                this.isLoading=false;//加载动画隐藏，
                this.loading=true;//关掉下拉刷新
              }else{//如果还有数据
                 this.rows=this.rows.concat(rows);
                 this.isLoading=false;//关上加载动画
                 this.list();
                 this.coll();
                 this.page+=1;//页码加一
              }
         },
         list(){//判断点赞与否
         //不登录返回的zpid就是0
                 if(this.zpid.length>0){//如果登陆了
                 //第一遍从0开始,往后加5
                     for(var i=(this.page-1)*5;i<this.ppid.length;i++){//遍历判断两个数组里是否有g等的
                     this.iszan[i]="dianzan1.png";//是否点赞默认否
                     this.isactive[i]="noactive";
                     //获取zpid里我点赞了几个
                     for(var j=0;j<this.zpid.length;j++){
                         //遍历找到点赞的每个帖子下标
                         if(this.ppid[i]==this.zpid[j]){//有就提出来
                                   this.iszan[i]="dianzan.png";
                                   this.isactive[i]="active";
                         }
                     }
                    }
                 }else{
                      for(var i=(this.page-1)*5;i<this.ppid.length;i++){
                           this.iszan[i]="dianzan1.png";
                      }
                 }
               //  console.log(this.iszan);
         }
         ,
         //判断是否收藏
         coll(){
            //不登录返回的zpid就是0
                 if(this.zpid.length>0){//如果登陆了
                 //第一遍从0开始,往后加5
                     for(var i=(this.page-1)*5;i<this.ppid.length;i++){//遍历判断两个数组里是否有g等的
                     this.isc[i]="shoucang1.png";//是否收藏默认否
                     for(var j=0;j<this.cpid.length;j++){
                         //遍历找到点赞的每个帖子下标
                         if(this.ppid[i]==this.cpid[j]){//有就提出来
                                   this.isc[i]="shoucang.png";
                         }
                     }
                    }
                 }else{
                      for(var i=(this.page-1)*5;i<this.ppid.length;i++){
                           this.isc[i]="shoucang1.png";
                      }
                     
                 } 
                 //console.log(this.isc);
         },
    //   点赞功能
   dzan(ppid,i){
     //获得该贴的下标,和帖子id
     if(this.iszan[i]=="dianzan.png"){//点过赞
         var is=1;
     }else{//没点过
         var is=0;
     }
     var url="product/dzan";
     var obj={pid:ppid,is:is};
     this.axios.get(url,{params:obj}).then(res=>{
        // console.log(res);
         if(res.data.code==0){
             this.$toast("请先登录");
             this.$router.push("/ceshi1");
         }else{
             if(is==1){
                 this.iszan.splice(i,1,"dianzan1.png");
                 this.isactive.splice(i,1,"no");
             }else{
                 this.iszan.splice(i,1,"dianzan.png");
                 this.isactive.splice(i,1,"active");
             }
             this.pzan.splice(i,1,res.data.gzan[0].pzan);
         }   
     })
   },
    // 收藏功能
     scan(ppid,i){
     //获得该贴的下标,和帖子id
     if(this.isc[i]=="shoucang.png"){//收藏过
         var is=1;
     }else{//没收藏过
         var is=0;
     }
     var url="product/scan";
     var obj={pid:ppid,is:is};
     this.axios.get(url,{params:obj}).then(res=>{
         //console.log(res);
         if(res.data.code==0){
             this.$toast("请先登录");
             this.$router.push("/ceshi1");
         }else{
             if(is==1){
                 this.isc.splice(i,1,"shoucang1.png");
             }else{
                 this.isc.splice(i,1,"shoucang.png");
             }
         }   
     })
   },
   }
}
</script>
<style scoped>
*{
    margin:0;
    padding:0;
    font-family: "宋体";
}
#d1{
    height:80%;
    /* padding-bottom:50px;  */
}
#d1>h3{
    margin-top:10px;
    margin-left:10px; 
}
.no{
    padding: 0;
}
.no>li{
    list-style: none;
    box-shadow: 1px 1px 1px 1px #ccc;
    height: 120px;
    margin-top:10px;
    margin-bottom:20px; 
    padding:20px 20px 0 20px;
}
.no>li:hover{
    box-shadow: 3px 3px 3px 3px rgb(126, 125, 125);
}
 #list{
    width:100%;
    height:100px;
    background:#fff;
    box-shadow: 1px 1px 1px 1px #fff;
    display: flex;
    flex-direction:column;
    justify-content:space-between;
}

#list>.top{
    width: 100%;
    height:80%;
    display: flex;
    justify-content:left;
    margin-bottom:10px; 
}
#list>.top>div>img{
    width: 50px;
    height: 50px;
    border-radius: 50%;
}
#list>.top>div{
     display: flex;
     flex-direction:column;
    justify-content:space-evenly;
    margin-right: 5px;
   /* align-items: center; */
}
#list>.top>div>p{
   color:rgb(136, 212, 226);
   font-weight: bold;
   font-size:1.2rem;
}
#list>.top>div>.time{
    font-size:1rem;
    color:#ccc;
    font-weight: normal;
}
#list>.center{
    padding-bottom:10px; 
    border-bottom: 1px solid rgba(222,222,222,0.5);
}
#list>.bottom{
    display:flex;
    justify-content: space-between;
    padding-top:10px; 
}
#list>.bottom>a{
    width: 25%;
    text-align: center;
    color:#ccc;
    text-decoration: none;
}
#list>.bottom .active{
     color:rgb(136, 212, 226);
}
.loading-box{
    height:80px;
    margin: 0 auto;
}
/* .loading-box .mint-spinner-snake{
 
} */
.no-more{
    height:80px;
    text-align: center;
}
</style>