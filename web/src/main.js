import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import toast from 'components/common/toast'

import FastClick from 'fastclick'
import VueLazyLoad from 'vue-lazyload'

Vue.config.productionTip = false

//全局注册Swiper
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'
Vue.use(VueAwesomeSwiper)

//解决移动端300ms延迟问题
FastClick.attach(document.body)

//图片懒加载
Vue.use(VueLazyLoad, {
  loading: require('./assets/img/loading/loading.png')
})

//将toast进行插件式安装
Vue.use(toast)

//创建全局事件总线
Vue.prototype.$bus = new Vue()

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')