import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import SearchArea from "../views/HotelSearch/SearchArea";
import SearchList from "../views/HotelSearch/SearchList";
import HotelDetails from "../views/HotelDetails";

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect:"/home",
  },
  {
    path: '/home',
    name: 'Home',
    component: Home,
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/searcharea',
    component: SearchArea,
    name: 'searcharea',
  },
  {
    path: '/searchlist',
    component: SearchList,
    name: 'searchlist',
  },
  {
    path: '/hoteldetail',
    component: HotelDetails,
    name: 'hoteldetail',
  }
]

const router = new VueRouter({
  routes
})

export default router
