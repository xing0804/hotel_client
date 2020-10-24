<template>
  <div class="profile">
    <img src="../assets/imgs/home/banner.png" alt="" class="banner">
    <div class="bannerIcon">
      <router-link to=""><img src="../assets/imgs/home/icon_setting.png" alt="" class="settingIcon"></router-link>
      <router-link to=""><img src="../assets/imgs/home/message.png" alt="" class="messageIcon"></router-link>
    </div>
    <div class="floatBannerDiv">
      <img src="../assets/imgs/home/portrait.png" alt="" class="portrait">
      <div class="loginRegistration">
        <router-link to="/login" v-if="!userInfo"><div>登录/注册</div></router-link>
        <div v-if="userInfo">{{userInfo.nickname}}</div>
        <router-link to=""><img src="../assets/imgs/home/compile.png" alt=""></router-link>
      </div>
      <div class="integralBalance">
        <div>
          <router-link to="">
            <img src="../assets/imgs/home/integral.png" alt="">
            <div class="integralBalanceText">可用积分</div>
          </router-link>
        </div>
        <div>
          <router-link to="">
            <img src="../assets/imgs/home/balance.png" alt="">
            <div class="integralBalanceText">账户余额</div>
          </router-link>
        </div>
      </div>
    </div>
    <div class="memberOrder">
      <img src="../assets/imgs/home/member.png" alt="" class="memberIcon">
      <img src="../assets/imgs/home/vip6.png" alt="" class="vip6">
      <img src="../assets/imgs/home/vip5.png" alt="" class="vip5">
      <img src="../assets/imgs/home/linebottom.png" alt="" class="linebottom">
      <img src="../assets/imgs/home/linetop.png" alt="" class="linetop">
    </div>
    <div class="myOrder">
      <router-link to=""><img src="../assets/imgs/home/myOrderIcon.png" alt="" class="myOrderIcon"></router-link>
      <router-link to="/orders" class="myOrderText">
        <div>我的订单</div>
        <div>点击查看我的全部订单</div>
      </router-link>
      <router-link to="">
        <img src="../assets/imgs/home/more.png" alt="" class="more">
      </router-link>
    </div>
    <div class="middleNav">
      <router-link :to="{name:'orders',query:{type:1}}" class="middleNavItem">
        <img src="../assets/imgs/home/obligation.png" alt="">
        <div>待付款</div>
      </router-link>
      <router-link :to="{name:'orders',query:{type:2}}" class="middleNavItem">
        <img src="../assets/imgs/home/travel.png" alt="">
        <div>待入住</div>
      </router-link>
      <router-link :to="{name:'orders',query:{type:3}}" class="middleNavItem">
        <img src="../assets/imgs/home/remark.png" alt="">
        <div>待点评</div>
      </router-link>
      <router-link :to="{name:'orders',query:{type:4}}" class="middleNavItem">
        <img src="../assets/imgs/home/refund.png" alt="">
        <div>退款单</div>
      </router-link>
    </div>
    <div class="profileList">
      <router-link class="profileListLi" to="/collection">
        <div class="point"></div>
        <div class="profileListLiText">我的收藏</div>
        <img src="../assets/imgs/home/arrows.png" alt="">
      </router-link>
      <div class="profileListLine"></div>
      <router-link class="profileListLi" to="">
        <div class="point"></div>
        <div class="profileListLiText">我的点评</div>
        <img src="../assets/imgs/home/arrows.png" alt="">
      </router-link>
      <div class="profileListLine"></div>
      <router-link class="profileListLi" to="">
        <div class="point"></div>
        <div class="profileListLiText">我的发票</div>
        <img src="../assets/imgs/home/arrows.png" alt="">
      </router-link>
    </div>
    <tab-bar-main></tab-bar-main>
  </div>
</template>

<script>
  import TabBarMain from "./TabBarMain";
  import {apiGetUser} from "../http/api";

  export default {
    name: "Profile",
    components:{
      TabBarMain
    },
    data(){
      return {
        userInfo:null
      }
    },
    methods:{
      getUser(){
        apiGetUser().then(res=>{
          console.log(res);
          this.userInfo=res.data;
        }).catch(error=>{
          error;
        })
      }
    },
    mounted() {
      this.getUser();
    }

  }
</script>

<style scoped>
  .profile > .banner {
    width: 750px;
    height: 331px;
  }
  .bannerIcon{
    width: 637px;
    height: 38px;
    position: absolute;
    top: 117px;
    left: 56px;
    right: 57px;
  }
  .bannerIcon img{
    width: 38px;
    height: 38px;
    position: absolute;
  }
  .settingIcon{
    top: 0;
    bottom: 0;
    right: 67px;
  }
  .messageIcon{
    top: 0;
    bottom: 0;
    right: 0;
  }
  .floatBannerDiv{
    width: 637px;
    height: 198px;
    background-color: #ffffff;
    box-shadow: 0 6px 15px 9px rgba(240, 240, 240, 0.85);
    border-radius: 16px;
    position: absolute;
    top: 204px;
    left: 56px;
    right: 57px;
  }
  .portrait{
    width: 114px;
    height: 114px;
    margin: 42px 0 42px 40px;
  }
  .loginRegistration{
    width: 397px;
    height: 31px;
    position: absolute;
    left: 201px;
    top: 54px;
  }
  .loginRegistration div{
    width: 250px;
    height: 31px;
    font-size: 32px;
    font-weight: bold;
    line-height: 31px;
    color: #000000;
    opacity: 0.85;
  }
  .loginRegistration img{
    width: 28px;
    height: 28px;
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
  }
  .integralBalance{
    width: 397px;
    height: 34px;
    position: absolute;
    left: 201px;
    top: 114px;
  }
  .integralBalance>div{
    width: 146px;
    height: 34px;
  }
  .integralBalance img{
    width: 34px;
    height: 34px;
  }
  .integralBalanceText{
    height: 34px;
    font-size: 24px;
    line-height: 34px;
    color: #000000;
    opacity: 0.5;
    float: right;
  }
  .integralBalance>div:nth-child(1){
    float: left;
  }
  .integralBalance>div:nth-child(2){
    float: right;
  }
  .memberOrder{
    width: 637px;
    height: 71px;
    margin: 108px auto 0;
    position: relative;
  }
  .memberIcon{
    width: 127px;
    height: 36px;
  }
  .vip5{
    height: 36px;
    float: right;
    margin-right: 116px;
  }
  .vip6{
    height: 36px;
    float: right;
  }
  .linebottom{
    width: 637px;
    height: 11px;
  }
  .linetop{
    width: 435px;
    height: 11px;
    position: absolute;
    bottom: 1px;
    left: 0;
  }
  .myOrder{
    width: 637px;
    height: 56px;
    margin: 80px auto 0;
    position: relative;
  }
  .myOrderIcon{
    width: 43px;
    height: 56px;
    margin-top: 5px;
  }
  .myOrderText{
    position: absolute;
    left: 80px;
    top: 0;
  }
  .myOrderText>div:nth-child(1){
    width: 129px;
    height: 31px;
    font-size: 30px;
    line-height: 31px;
    color: #000000;
    opacity: 0.5;
    margin-bottom: 8px ;
    font-weight: 700;

  }
  .myOrderText>div:nth-child(2){
    width: 240px;
    height: 17px;
    font-size: 15px;
    line-height: 17px;
    color: #000000;
    opacity: 0.3;
    font-weight: 600;

  }
  .more{
    width: 32px;
    height: 24px;
    position: absolute;
    right: 0;
    top:0;
  }
  .middleNav{
    width: 637px;
    height: 98px;
    margin: 74px auto 0;
    display: flex;
  }
  .middleNavItem{
    width: 72px;
    flex: 1;
    text-align: center;
    position: relative;
  }
  .middleNav img{
    width: 59px;
  }
  .middleNavItem div{
    width: 73px;
    height: 23px;
    font-size: 24px;
    line-height: 23px;
    color: #000000;
    opacity: 0.5;
    font-weight: 600;
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
  }
  .profileList{
    width: 637px;
    height: 251px;
    margin: 97px auto 400px;
  }
  .profileListLi{
    display: block;
    height: 31px;
    position: relative;
  }
  .profileListLine{
    width: 639px;
    height: 1px;
    background-color: #000000;
    opacity: 0.1;
    margin: 39px 0;
  }
  .point{
    width: 10px;
    height: 10px;
    border-radius: 5px;
    background-color: #97f3d6;
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    margin: auto;
  }
  .profileListLiText{
    width: 129px;
    height: 31px;
    font-size: 32px;
    line-height: 31px;
    color: #000000;
    opacity: 0.5;
    font-weight: 700;
    position: absolute;
    left: 35px;
    top: 0;
    bottom: 0;
    margin: auto;
  }
  .profileListLi img{
    display: block;
    position: absolute;
    right: 0;
    top: 0;
    bottom: 0;
    margin: auto;
    width: 10px;
    height: 18px;
  }
</style>
