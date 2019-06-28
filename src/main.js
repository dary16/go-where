import Vue from 'vue';
import App from './App.vue';
import router from './router';
import components from './components';
import fastClick from 'fastclick';
import VueAwesomeSwiper from 'vue-awesome-swiper';
import store from './store';
import './assets/styles/reset.css';
import './assets/styles/border.css';
import './assets/styles/iconfont.css';
import 'swiper/dist/css/swiper.css';

Vue.use(VueAwesomeSwiper);

fastClick.attach(document.body);

Vue.config.productionTip = false;

// 自定义组件格式，全局可用
Object.keys(components).forEach((key) => {
    // 首字母大写
    var name = key.replace(/(\w)/, (v) => v.toUpperCase());

    //使用标签时前缀需要加 v- 以示区别
    Vue.component(`v${name}`, components[key]);
});

new Vue({
    router,
    store,
    render: (h) => h(App)
}).$mount('#app');