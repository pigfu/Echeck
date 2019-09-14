// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import router from './router';
import iView from 'iview'; // 引入iview依赖
import 'iview/dist/styles/iview.css'; // 引入iview css样式
import axios from 'axios';//引入axios
import VueAxios from 'vue-axios';
const VueCookie = require('vue-cookie');

axios.defaults.timeout = 5000;                        //响应时间
//axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8';        //配置请求头
//axios.defaults.baseURL = process.env.API_ROOT; //配置默认请求接口地址
//axios.defaults.baseURL = 'api'; //配置默认请求接口地址
axios.defaults.baseURL = 'http://localhost:8080/api'; //配置默认请求接口地址
axios.defaults.withCredentials = true;//允许跨域
//Vue.prototype.$axios = axios;
Vue.config.productionTip = false;

Vue.use(VueAxios, axios);
Vue.use(VueCookie);// use the cookie
Vue.use(iView);//使用iview组件
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
