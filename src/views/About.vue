<template>
  <div class="about">
    <top-title>
      <template v-slot:left>
        <img src="../assets/imgs/x.png" alt="" class="leftx">
      </template>
      <template v-slot:center>
        <search placeholder="搜索酒店"></search>
      </template>
    </top-title>

    <h1>This is an about page</h1>
    <h2>{{count}}</h2>
    <search-item>
      <template v-slot:img>
        <img src="../assets/imgs/1.png" alt="" class="leftimg">
      </template>
      <template v-slot:title>
        锦江之星·经济型·平阳路
      </template>
      <template v-slot:money>
        136.00
      </template>
      <template v-slot:like-count>
        412
      </template>
      <template v-slot:opinion-count>
        3315
      </template>
    </search-item>
  </div>
</template>

<script>
import Search from "../components/search/Search"
import TopTitle from "../components/TopTitle";
import SearchItem from "./HotelSearch/SearchItem";

  export default {
    name:"About",
    components:{
      Search,
      TopTitle,
      SearchItem
    },
    data(){
      return {
        current: 0,
      }
    },
    computed:{
      count(){
        return this.$store.state.count;
      }
    },
    methods: {
      onChange(index) {
        this.current = index;
      },
    },
  }
</script>

<style>
  .my-swipe{
    width: 100%;
    height: 300px;
  }
  .my-swipe .van-swipe-item {
    color: #fff;
    font-size: 20px;
    line-height: 150px;
    text-align: center;
    background-color: #39a9ed;
  }
  .custom-indicator {
    position: absolute;
    right: 5px;
    bottom: 5px;
    padding: 2px 5px;
    font-size: 12px;
    background: rgba(0, 0, 0, 0.1);
  }
  .leftx{
    width: 16px;
    height: 16px;
  }
  .leftimg{
    width: 192px;
    height: 188px;
  }
</style>
