import Vue from 'vue'
import App from './App.vue'
import router from './router'
import "u-reset.css";
import store from "./store";
import {Swipe, SwipeItem,IndexBar,IndexAnchor,Calendar,DropdownMenu, DropdownItem,Area,Popup,PullRefresh,List,Toast,Checkbox,Card,Tag,Button,Stepper} from 'vant';
Vue.use(Swipe).use(SwipeItem).use(IndexBar).use(IndexAnchor).use(Calendar).use(DropdownMenu).use(DropdownItem).use(Area).use(Popup).use(IndexBar).use(IndexAnchor).use(PullRefresh).use(List).use(Toast).use(Checkbox).use(Card).use(Tag).use(Button).use(Stepper);

import VConsole from "vconsole";
new VConsole;

import axios from "axios";

Vue.prototype.$http=axios;

Vue.config.productionTip = false

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')
