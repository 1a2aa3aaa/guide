<template>
<div>
    <h3>用户注册</h3>
    <!-- @focus.native.capture="vali" @blur.native.capture="err" -->
            <mt-field
             @blur.native.capture="err"
              label="用户名" v-model="uname" 
            placeholder="请输入用户名" type="text"></mt-field>
            <span :class="ncolor">{{sname}}</span>
            <mt-field 
            @blur.native.capture="err1"
            label="密码" v-model="upwd"
            placeholder="请输入密码" type="password"></mt-field>
           <span :class="pcolor">{{spwd}}</span> 
            <mt-field
            @blur.native.capture="err2"
             label="邮箱" v-model="email"
            placeholder="请输入邮箱" type="email"></mt-field>
            <span :class="ecolor">{{semail}}</span>
            <mt-button size="large" @click="login">注册</mt-button>
            <p>已有账号?<router-link to="/ceshi1">点击登录</router-link></p>
</div>
  
</template>
<script>
 export default {
   data(){
       return{
           uname:"",
           upwd:"",
           email:"",
           sname:"用户名在3-12位之间",
           spwd:"密码在3-12位之间",
           semail:"请输入合法的邮箱",
           ncolor:"",
           pcolor:"",
           ecolor:"",
       }
   },
   methods:{
       err(){
           console.log(this.uname)
           var reg=/^\w{3,12}$/;
           //验证用户名格式是否正确
           if(reg.test(this.uname)){
           //如果正确发送axios请求
           var url="user/sel";
           var obj={uname:this.uname};
            this.axios.get(url,{params:obj}).then(res=>{
             console.log(res.data.code);
             if(res.data.code==1){
                 this.sname="用户名可以使用";
                 this.ncolor="green";
             }else{
                 this.sname="用户名被占用";
                 this.ncolor="red";
             }
           }).catch(err=>{
               colsole.log(err);
           })
           }else{
            //错误改变span的值
            this.ncolor="red";
           }
         
           //创建url
           //创建用户名
           //发送请求
           //
       },
       err1(){
            console.log(this.uname)
           var reg=/^\w{3,12}$/;
           //验证密码格式是否正确
           if(reg.test(this.upwd)){
               this.spwd="密码格式正确";
               this.pcolor="green";
           }else{
            this.pcolor="red";
           }
       },
       err2(){
            console.log(this.uname)
           var reg=/^([a-zA-Z]|[0-9])(\w|\-)+@[a-zA-Z0-9]+\.([a-zA-Z]{2,4})$/;
           //验证密码格式是否正确
           if(reg.test(this.email)){
               this.semail="邮箱格式正确";
               this.ecolor="green";
           }else{
            this.ecolor="red";
           }
       },
       login(){ 
             var reg=/^\w{3,12}$/;
             var reg1=/^([a-zA-Z]|[0-9])(\w|\-)+@[a-zA-Z0-9]+\.([a-zA-Z]{2,4})$/;
           if(reg.test(this.uname)){
               this.sname="密码格式正确";
               this.ncolor="green";
               if(reg.test(this.upwd)){
                   this.spwd="密码格式正确";
                   this.pcolor="green";
                   if(reg1.test(this.email)){
                       this.semail="邮箱格式正确";
                       this.ecolor="green";
                   }else{
                        this.ecolor="red";
                        return;
                   }
               }else{
                   this.pcolor="red";
                   return;
               }
           }else{
            this.ncolor="red";
            return;
           }

          var url="user/reg";
          var obj={uname:this.uname,
              upwd:this.upwd,
              uemail:this.email
           }
           console.log(obj);
           this.axios.get(url,{params:obj}).then(res=>{
              console.log(res.data);
              if(res.data.code==1){
                  this.$messagebox("注册成功");
                  this.$router.push("/product1")
              }else{
                  this.$messagebox("注册失败");
              }
           }).catch(err=>{
               console.log(err);
           })
       }
   }
 }
</script>
<style scoped>
.red{
    background:red;
}
.green{
    background:greenyellow;
}
div>span{ 
  display:block;
  background: gainsboro;
  width:50%;
  height: 20px;
  font-size:0.5rem;
  line-height:20px;
  margin: 10px 0 10px 10%;
  padding-left:10px;
}
h3{
    margin-left: 10%;
}
.mint-field{
    border-top:1px solid rgb(194, 194, 194);
     border-bottom:1px solid rgb(194, 194, 194);
    margin-bottom: 4px;
    width: 80%;
    margin: auto;
}
/* .mint-field~.mint-field{
    border-bottom:1px solid rgb(194, 194, 194);
} */
.mint-button--large{
    background:rgb(136, 212, 226);
    width: 80%;
    margin: 10px auto;
}
a >>>.mint-cell-title{
    width: 80px;
}
p{
    text-align: center;
    font-size:0.5rem;
    color:grey
}
p>a{
    text-decoration: none;
    color:rgb(136, 212, 226);
}
</style>