// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store/index.js'
import axios from 'axios'
axios.defaults.withCredentials = true
Vue.prototype.$http = axios

/*CSS*/
import '@/assets/css/common.scss'

/*JS*/
import url from '@/assets/js/URL.js'
Vue.prototype.URL = url

import MyPlugin from './assets/js/common.js'
Vue.use(MyPlugin)


/*时间戳转换北京时间*/
Vue.filter('filterdata', function (value,index,second) {//value为13位的时间戳  index为0的话是永久有效，为1的话是为空   second(是否包含时分秒)
    function add0(m) {
        return m < 10 ? '0' + m : m
    }
    if(value){
      var time = new Date(parseInt(value));
      var y = time.getFullYear();
      var m = time.getMonth() + 1;
      var d = time.getDate();
      var h = time.getHours();
      var mm = time.getMinutes();
      var s = time.getSeconds();
      if(second){
        return y + '.' + add0(m) + '.' + add0(d)+ ' ' +add0(h)+':'+add0(mm)+':'+add0(s);
    }else{
        return y + '.' + add0(m) + '.' + add0(d)
    }
      
    }else{
      if(index == 0){
        return '永久有效';
      }else{
        return '';
      }
    }   
});

//路由跳转之前
router.beforeEach((to, from, next) => {
  document.body.scrollTop = 0;  
  next();
})


Vue.config.productionTip = false
Vue.prototype.CUSTOMEVENT = new Vue()   //自定义事件
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
