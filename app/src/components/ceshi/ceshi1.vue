<template>
<div>
    <h3>用户登录</h3>
            <mt-field  label="用户名" v-model="uname" 
            placeholder="请输入用户名" type="text"></mt-field>
            <mt-field label="密码" v-model="upwd"
            placeholder="请输入密码" type="password"></mt-field>
            <mt-button size="large" @click="login">登录</mt-button>
            <p>没有账号?<router-link to="/reg">点击注册</router-link></p>
</div>
  
</template>
<script>
 export default {
   data(){
       return{
           uname:"",
           upwd:"",
       }
   },
   methods:{
       login(){ 
           console.log(this.uname,this.upwd);
           var reg=/^\w{3,12}$/;//验证的正则表达式
           if(reg.test(this.uname)){
               if(reg.test(this.upwd)){
                    //5.发送ajax请求
                    var url="user/login";
                    var obj={uname:this.uname,upwd:this.upwd};
                    this.axios.get(url,{params:obj}).then(res=>{
                        var re=res.data.code;
                        if(re===1){//6.登录成功跳转页面
                           this.$router.push("/product0");
                        }else{//7.登录失败,提示框
                            this.$messagebox.alert("用户名密码错误")
                        }
                        console.log(res);
                    }).catch(err=>{
                        console.log(err);
                    })
                    
                    
               }else{
                   this.$messagebox.alert('密码格式错误');
               }
           }else{
                this.$messagebox.alert('用户名格式错误');
           }
       }
   }
 }
</script>
<style scoped>
h3{
    margin-left: 10%;
}
.mint-field{
    border-top:1px solid rgb(194, 194, 194);
    margin-bottom: 4px;
    width: 80%;
    margin: auto;
}
.mint-field~.mint-field{
    border-bottom:1px solid rgb(194, 194, 194);
}
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