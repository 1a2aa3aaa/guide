项目文档简介
====================================
#####项目介绍
该项目主要是一个移动端的it论坛,为了补充大部分技术论坛充斥于pc端的弊病,方便于个人碎片时间的学习.
* 将论坛细分为几大板块(不固定),会根据需要进行添加,细化,方便找到需要的知识进行学习.
* 划分出一个热门的页面,用于显示点赞次数最多的,让他人广泛赞同的帖子,以便第一时间浏览
* 携带了聊天的功能,以便于在庞杂的页面中第一时间与大神进行单独交流,便于知识的掌握理解.
* 主要解决了pc端不方便携带,浪费碎片时间的问题与在得到答案不能与大神深入了解的问题
* 主要运行于移动端的(后续会发展为app)
#####环境依赖
* node 
* vue-cli
#####部署步骤
1. 安装node.js
>下载地址：https://nodejs.org/en/download/
2. 切换npm到国内淘宝镜像
>npm set registry https://registry.npm.taobao.org/
3. 下载 vue-cli脚手架
>npm install vue-cli -g
#####目录结构描述
├── Readme.md                   // help
├── app                         // 前端页面的构建
│   ├── bulid
│   ├── config         //配置
│   ├── public         //第三方静态资源文件
│   ├── src             //前端资源文件主渲染页面文件
│   │  ├──assets   // 自己的静态资源文件
│   │  ├──components  //自己定义的组件
│   │  ├──router     //vue路由文件
│   │  ├──store    //vuex
│   │  ├──app.vue  //项目主组件
│   │  ├──main.js   // 程序入口文件,初始化vue实例
│   ├── index.html  //主渲染页面文件
│   ├── package.json  //定义项目中需要依赖的包
│   ├── package-lock.json         //上一次的版本号
│   ├── bulid
├── server                    // 服务器文件
│   ├──public     //静态资源
│   ├──routes    //路由
│   ├──app.js     //主文件
│   ├──dc.sql     //数据库文件
│   ├──package.json  //定义项目中需要依赖的包
│   ├──package-lock.json         //上一次的版本号
│   ├──pool.js     //连接池
├── 数据库开发文档.docx 
###########V1.0.0 版本内容更新
1. 新功能     aaaaaaaaa
2. 新功能     bbbbbbbbb
3. 新功能     ccccccccc
4. 新功能     ddddddddd