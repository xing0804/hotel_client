<template>
  <div v-if="roomInfo">
    <my-title class="mytitle">
      <template slot="text">
        {{roomInfo.rname}}
      </template>
    </my-title>

    <div class="room-item">
      <van-swipe @change="onChange" :autoplay="3000">
        <van-swipe-item v-for="(item,index) in roomInfo.rbanner" :key="index"> <img :src="item" alt="" /></van-swipe-item>
        <template #indicator>
          <div class="custom-indicator">{{ current + 1 }}
            <div class="custom-indicator1">/{{roomInfo.rbanner.length}}</div>
          </div>
        </template>
      </van-swipe>
    </div>
    <div class="content">
      <div class="content-word1">房间</div>
      <div class="content-item"></div>
      <div class="content-word2">设施</div>
    </div>
    <div class="box">
      <div class="box-item">
        <img src="../assets/imgs/room/p1.png" alt="" />
        <span>{{roomInfo.rlabel[0]}}</span>
      </div>
      <div class="box-item margin">
        <img src="../assets/imgs/room/p2.png" alt="" />
        <span>{{roomInfo.rlabel[1]}}</span>
      </div>
      <div class="box-item margin">
        <img src="../assets/imgs/room/p3.png" alt="" />
        <span >{{roomInfo.rlabel[2]}}</span>
      </div>
      <div class="box-item">
        <img src="../assets/imgs/room/p4.png" alt="" />
        <span>{{roomInfo.rlabel[3]}}</span>
      </div>
      <div class="box-item margin">
        <img src="../assets/imgs/room/p5.png" alt="" />
        <span>{{roomInfo.rlabel[4]}}</span>
      </div>
    </div>
    <div class="container">
      <div class="con-item">
        <span class="con-item-title">房间浴室</span>
        <span class="con-item-content">{{roomInfo.rshower}}</span>
      </div>
      <div class="con-item">
        <span class="con-item-title">便利设施</span>
        <span class="con-item-content">{{roomInfo.ramenities}}</span>
      </div>
      <div class="con-item">
        <span class="con-item-title">媒体科技</span>
        <span class="con-item-content">{{roomInfo.rmedia}}</span>
      </div>
    </div>

    <div class="line"></div>
    <div class="word">
      <div class="word-item"></div>
      <span class="word-word">具体房型信息以具体报价展示为准</span>
    </div>
    <div class="bottom">
      <a class="bottom-btn1">
        <img
          src="../assets/imgs/room/kefudianhua.png"
          alt=""
          class="bottom-btn1-img"
        />
      </a>
      <span class="bottom-word">联系商家</span>
      <span class="bottom-price">￥{{roomInfo.rprice}}.00</span>
      <router-link class="bottom-btn2" :to="{name:'order',query:{rid:this.$route.query.rid,hid:this.$route.query.hid,price:this.roomInfo.rprice}}">
        <span class="bottom-btn2-word">立即预订</span>
      </router-link>
    </div>
  </div>
</template>

<script>
import { Swipe, SwipeItem } from 'vant';
import {apigetRoomItem} from "../http/api";
import {IMGURL} from "../lib/base";
import MyTitle from "../components/MyTitle";

export default {
   data() {
    return {
      current: 0,
      roomInfo:null
    };
  },
  methods: {
    onChange(index) {
      this.current = index;
    },
    //初始化该房间信息
    initRoom(){
      let rid=this.$route.query.rid
      apigetRoomItem(rid).then(res=>{
        console.log(res);
        res.data.rbanner=res.data.rbanner.split(',').map(ele=>{
          return IMGURL+ele;
        });
        res.data.rlabel=res.data.rlabel.split(',');
        this.roomInfo=res.data;
        console.log(this.roomInfo);
      }).then(error=>{
        console.log(error);
      })
    }
  },
  mounted() {
    this.initRoom();
  },
  components:{
    VanSwipe:Swipe,
    VanSwipeItem:SwipeItem,
    MyTitle
  }
};
</script>

<style>
.mytitle{
  padding: 0 57px;
}
 .custom-indicator {
    position: absolute;
    width: 74px;
	height: 30px;
    right: auto;
    margin-left: 305px;
    bottom: 16px;
    padding:0 15px;
    font-size: 18px;
    background: rgba(0, 0, 0, 0.5);
    border-radius: 15px;
    color: white;
    line-height: 30px;
    box-sizing: border-box;
    font-family: PingFang-SC-Bold;
  }
  .custom-indicator1{
    float: right;
    width: 20px;
	height: 14px;
	font-family: PingFang-SC-Bold;
	font-size: 18px;
	color: #f4e98d;
  line-height: 30px;
	opacity: 0.9;
  }

.room-item {
  width: 682px;
  height: 344px;
  margin: 50px auto;
  border-radius: 10px;
  margin-top: 46px;
  margin-left: 36px;
  box-shadow: 0px 50px 50px 6px rgba(220, 222, 223, 0.8);
}
.room-item img{
  width: 682px;
  height: 348px;
  border-radius: 10px;
  margin: auto;
}

.content {
  width: 173px;
  height: 35px;
  margin-left: 57px;
  margin-top: 94px;
}
.content-word1 {
  font-size: 36px;
  float: left;
}
.content-item {
  width: 9px;
  height: 9px;
  background-color: #e05c63;
  opacity: 0.85;
  border-radius: 50% 50%;
  float: left;
  margin-top: 20px;
  margin-left: 11px;
}
.content-word2 {
  font-family: PingFang-SC-Heavy;
  font-size: 36px;
  color: #e05c63;
  opacity: 0.85;
  float: right;
}
.box {
  padding: 0 57px;
  /*display: flex;*/
  /*justify-content: space-between;*/
  /*align-content: space-between;*/
  /*flex-wrap: wrap;*/
  box-sizing: border-box;
}
.box:after{
  content: '';
  display: block;
  clear: both;
}
.box-item{
  float: left;
  margin-top: 30px;
}
.box-item img {
  width: 22px;
  height: 22px;
}
.box-item span{
  display: inline-block;
  font-family: PingFang-SC-Bold;
  font-size: 26px;
  color: #333333;
  margin-left: 20px;
}
.box .margin{
  margin-left: 55px;
}
.container{
  width: 100%;
  padding: 0 57px;
  box-sizing: border-box;
  margin-top: 100px;
}
.con-item{
  margin-top: 30px;
}
 .con-item span{
   font-family: "苹方 粗体";
 }
.con-item span:nth-child(1){
  display: block;
  width: 150px;
  height: 48px;
  border-radius: 24px;
  background: #4f5766;
  color: #f3e88e;
  font-size: 18px;
  text-align: center;
  line-height: 48px;
  float: left;
}
.con-item span:nth-child(2){
  display: block;
  padding-left: 160px;
  height: auto;
  color: rgba(0,0,0,.8);
  text-align: justify;
  line-height: 40px;
  font-size: 26px;
}
.line {
  width: 656px;
  height: 2px;
  background-color: #000000;
  opacity: 0.08;
  margin: 55px auto;
}
.word {
  margin-left: 61px;

}
.word-item {
  width: 8px;
  height: 8px;
  background-color: #97f3d6;

  border-radius: 50% 50%;
  float: left;
}
.word-word {
  width: 372px;
  height: 24px;
  font-family: PingFang-SC-Bold;
  font-size: 24px;
  line-height: 0px;
  color: #000000;
  opacity: 0.5;
  float: left;
  margin-left: 16px;
}
.bottom {
  width: 750px;
  height: 100px;
  background-color: #ffffff;
  box-shadow: 0px -50px 50px 20px rgba(220, 222, 223, 0.4);
  margin-top: 160px;
}
.bottom-btn1 {
  width: 50px;
  height: 50px;
  background-color: #e05c63;
  border-radius: 50% 50%;
  margin-left: 58px;
  float: left;
  margin-top: 22px;
}
.bottom-btn1-img {
  width: 50px;
  height: 50px;
  float: left;

}
.bottom-word {
  height: 20px;
  font-family: "PingFang-SC-Bold";
  font-size: 20px;
  line-height: 4px;
  color: #000000;
  opacity: 0.3;
  margin-left: 17px;
  margin-top: 45px;
  float: left;
}
.bottom-price {
  width: 118px;
  height: 23px;
  font-family: PingFang-SC-Bold;
  font-size: 30px;
  line-height: 4px;
  color: #e05c63;
  opacity: 0.85;
  margin-top: 50px;
  margin-left: 120px;
  margin-right: 20px;
  float: left;
  font-weight: bold;
}
.bottom-btn2 {
  width: 205px;
  height: 60px;
  background-image: linear-gradient(-90deg, #f16b72 0%, #e05c63 100%);
  border-radius: 30px;
  margin-top: 20px;
  margin-left: 16px;
  float: left;
}
.bottom-btn2-word {
  width: 128px;
  height: 31px;
  font-family: PingFang-SC-Bold;
  font-size: 32px;
  font-weight: bold;
  line-height: 20px;
  color: #ffffff;
  margin-top: 16px;
  margin-left: 38px;
  float: left;
}
.bottom-btn1:active {
  opacity: 0.7;
}
.bottom-btn2:active {
  opacity: 0.7;
}
</style>
