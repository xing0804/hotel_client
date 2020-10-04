import Vue from 'vue'
import App from './App.vue'
import router from './router'
import "u-reset.css";
import store from "./store";
import { Swipe, SwipeItem,IndexBar, IndexAnchor,Calendar,DropdownMenu, DropdownItem } from 'vant';
Vue.use(Swipe).use(SwipeItem).use(IndexBar).use(IndexAnchor).use(Calendar).use(DropdownMenu).use(DropdownItem);

import VConsole from "vconsole";
new VConsole;

Vue.config.productionTip = false

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')
