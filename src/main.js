import Vue from 'vue'
import './plugins/axios'
import App from './App.vue'
import router from './router'
import store from './store'
import './plugins/element.js'
import 'echarts'
import './assets/css/global.css'
Vue.config.productionTip = false
Vue.prototype.dateString = parseDateString;
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
/**
 * 抓取到的评论时间应该为本地时间，但是存储到数据库中是以GMT时间保存的。
 * 所以GMT时间就是本地时间，不必转换.只需要截取关键部分即可。
 */
function parseDateString(dateString){
 var res = "";
 var date = String(dateString).split("T");
  res += date[0];
  res+= (" "+date[1].split('.')[0]);
  return res;
}
