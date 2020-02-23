import iView from 'iview';
import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
// import 'iview/dist/styles/iview.css';
import './styles/theme.less'

import components from './components/index'
Vue.use(iView);
Vue.use(components)

components.install(Vue)

Vue.use = function(components){
  components.install(Vue)
}

// Vue.use = function(obj){
//   obj.install(Vue)
// }

console.log(components)

// 目的是还原use方法

// 1. 他是个函数
// Vue.use = function(){}

// 2.要求实参是一个对象

// 3.最终效果是在组件注册地拿到vue

// Vue.use(components)

// components.install(Vue)

// Vue.use = function(components){
//   components.install(Vue)
// }





Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
