// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import store from './store';
import App from './App'
import router from './router'
import MintUI from "mint-ui"
import "mint-ui/lib/style.css"
Vue.use(MintUI)
    //Vue.config.productionTip = false
import axios from "axios"
axios.defaults.baseURL = "http://127.0.0.1:3000/"
axios.defaults.withCredentials = true
Vue.prototype.axios = axios;
/* eslint-disable no-new */
// 9:引入第三方库vuex
//import Vuex from "vuex"
// 10:注册vuex
//Vue.use(Vuex)
new Vue({
    el: '#app',
    router,
    store,
    components: { App },
    template: '<App/>'
})