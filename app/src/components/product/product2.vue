<template>
  <div> 
       <ul>
<li v-for="(item , index) in list" :class="{odd : index%2}">   
      <span> {{ item.name}}</span>  
         <em> {{ item.age}}</em>  
            <p>{{index}}</p>    
            </li>    
            <button v-on:click="addItem">addItem</button>  
              </ul> 
               </div>
               </template> 
               <script>
               import Vue from 'vue'
               export default{
                   data (){   
                        return{//循环一个数组 
                           list:[   
                                {  name:"我是数组循环数据",     
                                 age:"我是第一个数据"    },  
                                   {      name:"我第二条数据",   
                                      age:"我是第二个数据"    }  
                                        ]   
                                         }  }, 
       methods:{ //方法设置选项  
               addItem(){   
                    Vue.set(this.list,1,{//修改列表数据 
                        name:"我是修改的数据",    
                          age:"我是修改的数据" }),  
                 console.log(this.list[1].name), 
                  this.list.push({ //新增数据        
                       name:"我是后增加的数据",      
      age:"我是后增加的"     
       })   } }}
       </script>