import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import SearchArea from "../views/HotelSearch/SearchArea";
import SearchList from "../views/HotelSearch/SearchList";
import HotelDetails from "../views/HotelDetails";
import Login from "../views/Login";
// import User from "../views/User";
import Collection from "../views/UserInfo/Collection";
import alldindan from "../views/orders/alldindan";

import store from "../store";
import Profile from "../views/Profile";
import Room from "../views/Room";
import order from "../views/order";

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect:"/home",
  },
  {
    path: '/home',
    name: 'home',
    component: Home,
    meta:{
      title:'首页',
      auth:false,
    }
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
    meta:{
      title:'关于页面',
      auth:false,
    }
  },
  {
    path:'/login',
    name:'login',
    component: Login,
    meta:{
      title:'登录',
      auth:false,
    }
  },
  {
    path: '/searcharea',
    component: SearchArea,
    name: 'searcharea',
    meta:{
      title:'城市搜索',
      auth:false,
    }
  },
  {
    path: '/searchlist',
    component: SearchList,
    name: 'searchlist',
    meta:{
      title:'酒店搜索',
      auth:false,
    }
  },
  {
    path: '/hoteldetail',
    component: HotelDetails,
    name: 'hoteldetail',
    meta:{
      title:'酒店详情',
      auth:false,
    }
  },
  {
    path: '/user',
    component: Profile,
    name: 'user',
    meta:{
      title:'用户中心',
      auth:true,
    }
  },
  {
    path: '/collection',
    component: Collection,
    name: 'collection',
    meta:{
      title:'我的收藏',
      auth:true,
    },
  },
  {
    path: '/orders',
    component: alldindan,
    name: 'orders',
    meta:{
      title:'我的订单',
      auth:true,
    },
  },
  {
    path: '/order',
    component: order,
    name: 'order',
    meta:{
      title:'订单详情',
      auth:true,
    },
  },
  {
    path: '/room',
    component: Room,
    name: 'room',
    meta:{
      title:'房间详情',
      auth:false,
    },
  },
  {
    path: '/zf',
    name: 'zf',
    component: () => import( '../views/orders/zf'),
    meta:{
      title:'支付订单',
      auth:true,
    }
  },
  {
    path: '/success',
    name: 'success',
    component: () => import( '../views/orders/success'),
    meta:{
      title:'支付成功',
      auth:true,
    }
  },
]

const router = new VueRouter({
  routes
})

router.beforeEach((to,from,next)=>{
  let {title,auth}=to.meta;
  document.title=title || '星星酒店';
  if(auth){
    let token=store.state.token;
    if(token){
      next();
    }else {
      next({name:'login',query:{redirect:to.name}});
    }
  }else {
    next();
  }

})




export default router
