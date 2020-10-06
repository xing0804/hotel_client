<template>
  <tab-bar>
    <tab-bar-item v-for="(item,index) in tabBarInfo" :path="item.path" activeColor="red" :key="index">
      <img slot="item-icon" :src="item.icon" alt="">
      <img slot="item-icon-active" :src="item.iconActive" alt="">
      <div slot="item-text">{{item.text}}</div>
    </tab-bar-item>
  </tab-bar>
</template>

<script>
  import TabBar from "../components/tabBar/TabBar";
  import TabBarItem from "../components/tabBar/TabBarItem";

  export default {
    name: "TabBarMain",
    components: {
      TabBar,
      TabBarItem
    },
    data(){
      return {
        tabBarInfo:[
          {
            "path":"/home",
            "icon":require("../assets/imgs/tabBar/home.svg"),
            "iconActive":require("../assets/imgs/tabBar/home-active.svg"),
            "text":"首页"
          },
          {
            "path":"/searchlist",
            "icon":require("../assets/imgs/tabBar/search.svg"),
            "iconActive":require("../assets/imgs/tabBar/search-active.svg"),
            "text":"发现"
          },
          {
            "path":"/message",
            "icon":require("../assets/imgs/tabBar/message.svg"),
            "iconActive":require("../assets/imgs/tabBar/message-active.svg"),
            "text":"消息"
          },
          {
            "path":"/order",
            "icon":require("../assets/imgs/tabBar/order.svg"),
            "iconActive":require("../assets/imgs/tabBar/order-active.svg"),
            "text":"订单"
          },
          {
            "path":"/user",
            "icon":require("../assets/imgs/tabBar/user.svg"),
            "iconActive":require("../assets/imgs/tabBar/user-active.svg"),
            "text":"我的"
          },
        ]
      }
    }
  }
</script>

<style scoped>

</style>
