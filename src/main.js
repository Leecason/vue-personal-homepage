// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-default/index.css';
import VCharts from 'v-charts';
import App from './App';
import store from './store/';
import router from './router';
import './stylesheets/index.scss';

Vue.use(ElementUI);
Vue.use(VCharts);

Vue.config.productionTip = false;

/* eslint-disable*/
function getCookie(name) {
  var arr = document.cookie.match(new RegExp(`(^| )${name}=([^;]*)(;|$)`));
  if (arr != null) return unescape(arr[2]);
  return null;
}
Vue.prototype.getCookie = getCookie;

Vue.prototype.setCookie = (c_name, value, expire_days) => {
  var exdate = new Date();
  exdate.setDate(exdate.getDate() + expire_days);
  document.cookie = c_name + "=" + escape(value) + ((expire_days == null) ? "" : ";expires=" + exdate.toGMTString());
}

Vue.prototype.delCookie =(name) => {
  var exp = new Date();
  exp.setTime(exp.getTime() - 1);
  var cval = getCookie(name);
  if (cval != null)
    document.cookie = name + "=" + cval + ";expires=" + exp.toGMTString();
}

new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App },
});
