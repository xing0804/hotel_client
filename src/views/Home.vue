<template>
  <div id="box">
    <van-swipe :autoplay="3000" :show-indicators=true>
      <van-swipe-item v-for="(image, index) in images" :key="index">
        <router-link to="/">
          <img :src='image'/>
        </router-link>
      </van-swipe-item>
    </van-swipe>
    <div class="areaSearch">
      <div class="btn">
        <a href="javascript:;" class="btn-common btn-left" :class="{btnAction:isLeftActive}" @click="changeArea">
          大陆
        </a>
        <a href="javascript:;" class="btn-common btn-right" @click="changeArea" :class="{btnAction:isRightActive}">
          港澳台
        </a>
      </div>
      <div class="address" @click="showArea" >
        <img src="../assets/imgs/地址icon.png" alt="">
        <span class="province">{{indexSearch.city}}</span>
        <img src="../assets/imgs/moreicon.png" alt="">
        <span class="area">{{indexSearch.area}}</span>
        <img src="../assets/imgs/moreicon2.png" alt="">
      </div>
      <!--选择省市区-->
      <van-popup v-model="showedArea" position="bottom" :style="{ height: '40%' }">
        <van-area :area-list="areaList" @confirm="onAreaConfirm" @cancel="bindCancel" />
      </van-popup>
      <div class="line"></div>
      <div class="staytime" @click="showTime">
        <img src="../assets/imgs/时间icon.png" alt="">
        <span>{{indexSearch.startTime}}</span>
        <span>{{indexSearch.startDay}}</span>
        <img src="../assets/imgs/go.png" alt="">
        <span>{{indexSearch.endTime}}</span>
        <span>{{indexSearch.endDay}}</span>
        <img src="../assets/imgs/moreicon3.png" alt="">
        <span>共{{indexSearch.dayCount}}晚</span>
      </div>
      <van-calendar type="range" v-model="showedTime" @confirm="onTimeConfirm" />
      <a class="search-btn">
        <span @click="startSearch">开始搜索</span>
      </a>
      <div class="area-bottom">
        <div class="area-botton-item">
          <img src="../assets/imgs/信用免押金.png" alt="">
          <span>信用免押金</span>
        </div>
        <div class="area-botton-item">
          <img src="../assets/imgs/24小时客服.png" alt="">
          <span>24小时客服</span>
        </div>
        <div class="area-botton-item">
          <img src="../assets/imgs/尊享严格消毒.png" alt="">
          <span>尊享严格消毒</span>
        </div>
      </div>
    </div>
    <div class="label">
      <a class="label-item" href="javascript:;">
        <img src="../assets/imgs/摇一摇icon.png" alt="" class="label-item-img">
        <span>摇一摇</span>
      </a>
      <a class="label-item" href="javascript:;">
        <img src="../assets/imgs/特价酒店icon.png" alt="" class="label-item-img">
        <span>特价酒店</span>
      </a>
      <a class="label-item" href="javascript:;">
        <img src="../assets/imgs/优惠套餐icon.png" alt="" class="label-item-img">
        <span>优惠套餐</span>
      </a>
      <a class="label-item" href="javascript:;">
        <img src="../assets/imgs/行李管家icon.png" alt="" class="label-item-img">
        <span>行李管家</span>
      </a>
    </div>
    <div class="main">
      <div class="main-item">
        <div class="title">
          <span>优选</span>
          <span>·推荐</span>
        </div>
        <div class="main-label">
          <div class="main-label-item" :class="[index == selectedIndex ? 'selectedLabel' : '']" v-for="(item,index) in mainLabel" :key="index" @click="handleLabel(index,item)">
            <span :class="[index == selectedIndex ? 'selected' : '']"></span>
            <span :class="[index == selectedIndex ? 'selectedTitle' : '']">{{item}}</span>
          </div>
<!--          <div class="main-label-item">-->
<!--            <span></span>-->
<!--            <span>豪华型</span>-->
<!--          </div>-->
<!--          <div class="main-label-item">-->
<!--            <span></span>-->
<!--            <span>经济型</span>-->
<!--          </div>-->
        </div>
        <div class="main-item-container">
          <div class="container-item" v-for="(item,index) in hotelData" :key="index" @click="pushDetail(item.hid)">
            <div class="container-item-img">
              <img :src="item.himgurl" alt="">
            </div>
            <span class="hotel-title">{{item.hname}}</span>
            <div class="hotel-score">
              <img src="../assets/imgs/星满.png" alt="">
              <img src="../assets/imgs/星满.png" alt="">
              <img src="../assets/imgs/星满.png" alt="">
              <img src="../assets/imgs/星空.png" alt="">
            </div>
            <div class="hotel-price">
              <span>RMB</span>
              <span>{{item.hprice}}</span>
            </div>
          </div>
        </div>
      </div>
      <div class="main-item">
        <div class="title">
          <span>美食</span>
          <span>·天下</span>
        </div>
        <div class="food-container">
          <div class="container-item">
            <span class="desc">与这里的美食来一场华丽的邂垢</span>
            <div class="follow">
              <div class="follow-box">
                <img src="../assets/imgs/+.png" alt="">
                <span>关注</span>
              </div>
            </div>
            <a class="item-img">
              <img src="../assets/imgs/food1.png" alt="">
            </a>
            <div class="food-comment">
              <div class="food-comment-love">
                <img src="../assets/imgs/喜欢.png" alt="">
                <span>213</span>
              </div>
              <div class="food-comment-talk">
                <img src="../assets/imgs/评论.png" alt="">
                <span>2532</span>
              </div>
            </div>.
          </div>
          <div class="container-item">
            <span class="desc">与这里的美食来一场华丽的邂垢</span>
            <div class="follow">
              <div class="follow-box">
                <img src="../assets/imgs/+.png" alt="">
                <span>关注</span>
              </div>
            </div>
            <a class="item-img">
              <img src="../assets/imgs/banner1.png" alt="">
            </a>
            <div class="food-comment">
              <div class="food-comment-love">
                <img src="../assets/imgs/喜欢.png" alt="">
                <span>213</span>
              </div>
              <div class="food-comment-talk">
                <img src="../assets/imgs/评论.png" alt="">
                <span>2532</span>
              </div>
            </div>.
          </div>
        </div>
      </div>
    </div>
    <tab-bar-main></tab-bar-main>
  </div>
</template>

<script>
  import AreaInfo from "../lib/area";
  import AreaInfo2 from "../lib/area1"
  import {IMGURL} from "../lib/base";
  import TabBarMain from "./TabBarMain";
  import {apiIndex} from "../http/api";

  export default {
    name: "Home",
    components:{
      TabBarMain
    },
    data(){
      return {
        isLeftActive:true,
        isRightActive:false,
        hotelData: [],
        areaList: AreaInfo,
        showedArea: false,
        images: [
          require('../assets/imgs/banner1.png'),
          require('../assets/imgs/banner2.png'),
          require('../assets/imgs/banner3.png'),
          require('../assets/imgs/banner4.png'),
        ],
        showedTime:false,
        mainLabel:['全部','豪华型','经济型'],
        selectedIndex:0
      }
    },
    computed:{
      indexSearch(){
        return this.$store.state.indexSearch;
      }
    },
    methods:{
      // initHotel(){
      //   apiIndex('全部').then(res=>{
      //     console.log(res);
      //     this.hotelData=res.data.map(ele=>{
      //       ele.himgurl=IMGURL + ele.himgurl;
      //       return ele;
      //     });
      //     console.log(this.hotelData);
      //   }).catch(error=>{
      //     console.log("获取数据失败");
      //     console.log(error);
      //   })
      // },
      showArea(){
        this.showedArea=true;
      },

      bindCancel(){
        this.showedArea= false;
      },
      //地区选择
      onAreaConfirm(val) {
        this.showedArea = false;
        this.$store.commit("setCity",{"city":val[1].name,"area":val[2].name})
      },
      //显示日历
      showTime(){
        this.showedTime=true;
      },
      //格式化时间
      formatDate(date) {
        return `${date.getMonth() + 1}.${date.getDate()}`;
      },
      //选择好日历之后执行的操作
      onTimeConfirm(date){
        let week=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];
        const [start, end] = date;
        let startTime = `${this.formatDate(start)}`;
        let endTime = `${this.formatDate(end)}`;
        let startDay = week[start.getDay()];
        let endDay = week[end.getDay()];
        let dayCount=(end-start)/1000/60/60/24;
        this.$store.commit("getTime",{"startTime":startTime,"endTime":endTime,"startDay":startDay,"endDay":endDay,"dayCount":dayCount});
        this.showedTime=false;
      },
      //地区切换
      changeArea(){
        if (this.isLeftActive === true){
          this.isLeftActive=false;
          this.isRightActive=true;
          this.areaList=AreaInfo2;
          this.$store.state.indexSearch.city="台北市";
          this.$store.state.indexSearch.area="中正区";
        }else {
          this.isLeftActive=true;
          this.isRightActive=false;
          this.areaList=AreaInfo;
          this.$store.state.indexSearch.city="太原市";
          this.$store.state.indexSearch.area="小店区";
        }

      },
      //类型切换
      handleLabel(index,item){
        this.selectedIndex=index;
        apiIndex(item).then(res=>{
          this.hotelData=res.data.map(ele=>{
            ele.himgurl=IMGURL + ele.himgurl;
            return ele;
          });
        }).catch(error=>{
          console.log("获取数据失败");
          console.log(error);
        })
      },
      //跳转到指定详情页
      pushDetail(hid){
        this.$router.push({name:"hoteldetail",query:{hid:hid}});
      },
      startSearch(){
        this.$router.push({name:"searchlist"});
      }

    },
    mounted() {
      this.handleLabel(0,'全部');
    }
  }
</script>
<style scoped>
  #box{
    position: relative;
  }
  .van-swipe{
    width: 100%;
    height: 480px;
  }
  .van-swipe img{
    width: 100%;
    height: 100%;
  }
  /*搜索区域开始*/
  .areaSearch{
    height: 458px;
    width: 638px;
    background: #ffffff;
    border-radius: 10px;
    box-shadow: 0 0 10px #999;
    position: absolute;
    top: 287px;
    left: 0;
    right: 0;
    margin: auto;
    padding-top: 24px;
  }
  .btn{
    height: 66px;
    width: 574px;
    margin: 0 auto;
  }
  .btn-common{
    display: inline-block;
    width: 287px;
    height: 100%;
    background-color: #fceeef;
    color: rgba(0,0,0,.2);
    font-family: "苹方 粗体";
    font-size: 32px;
    text-align: center;
    line-height: 66px;
  }
  .btn-left{
    border-radius: 10px 0 0 10px;
  }
  .btn-right{
    border-radius: 0 10px 10px 0;
  }
  .btnAction{
    background-color: #e05c63;
    color: #ffffff;
  }
  .address{
    width: 574px;
    margin: 0 auto;
    height: 40px;
    margin-top: 38px;
  }
  .address img:nth-child(1){
    width: 29px;
    height: 37px;
    margin-left: 17px;
  }
  .address span{
    display: inline-block;
    font-family: "苹方 粗体";
    font-weight: bold;
    font-size: 32px;
    line-height: 40px;
  }
  .address .province{
    color: rgba(0,0,0,.8);
    margin-left: 38px;
  }
  .address img:nth-child(3){
    width: 13px;
    height: 7px;
    margin-left: 40px;
  }
  .address .area{
    color: rgba(0,0,0,.5);
    margin-left: 40px;
  }
  .address img:nth-child(5){
    width: 29px;
    height: 7px;
    margin-left: 120px;
  }
  .areaSearch .line{
    width: 560px;
    height: 3px;
    background-color: #dedede;
    margin: 0 auto;
    margin-top: 40px;
  }
  .staytime{
    width: 574px;
    height: 30px;
    margin: 0 auto;
    margin-top: 45px;
  }
  .staytime img:nth-child(1){
    width: 30px;
    height: 30px;
    margin-left: 17px;
  }
  .staytime span{
    font-family: "苹方 粗体";
    /*font-weight: bold;*/
    display: inline-block;
  }
  .staytime span:nth-child(2){
    color: #e05c63;
    font-size: 36px;
    margin-left: 10px;
  }
  .staytime span:nth-child(3){
    color: rgba(0,0,0,.3);
    font-size: 22px;
    margin-left: 5px;
    font-weight: bold;
  }
  .staytime img:nth-child(4){
    width: 21px;
    height: 9px;
    margin-left: 10px;
  }
  .staytime span:nth-child(5){
    color: #e05c63;
    font-size: 36px;
    margin-left: 24px;
  }
  .staytime span:nth-child(6){
    color: rgba(0,0,0,.3);
    font-size: 22px;
    margin-left: 5px;
    font-weight: bold;
  }
  .staytime img:nth-child(7){
    width: 20px;
    height: 10px;
    margin-left: 40px;
  }
  .staytime span:nth-child(8){
    color: rgba(0,0,0,.5);
    font-size: 26px;
    font-weight: bold;
    margin-left: 10px;
  }
  .search-btn{
    display: block;
    background-image: linear-gradient(to right, #4f5766, #687387);
    width: 436px;
    height: 60px;
    margin: 0 auto;
    margin-top: 60px;
    border-radius: 30px;
    text-align: center;
    color: #fff;
    font-size: 26px;
    font-family: "苹方 粗体";
    line-height: 60px;
    letter-spacing: 3px;
  }
  .area-bottom{
    margin-top: 24px;
    width: 560px;
    height: 16px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    margin-top: 15px;
  }
  .area-botton-item img{
    width: 16px;
    height: 16px;
  }
  .area-botton-item span{
    font-size: 12px;
    color: rgba(0,0,0,.3);
    font-family: "苹方 粗体";
    margin-left: 5px;
  }
  /*搜索区域结束*/
  /*标签区*/
  .label{
    height: 148px;
    margin-top: 338px;
    display: flex;
    justify-content: space-around;
  }
  .label-item{
    display: block;
    width: 110px;
    text-align: center;
  }
  .label-item-img{
    width: 100px;
    height: 100px;
  }
  .label-item > span{
    font-family: "苹方 粗体";
    font-size: 26px;
    color: #666666;
  }
  /*标签区*/
  /*内容区域*/
  .main{
    width: 641px;
    margin: 0 auto;
    margin-top: 80px;
    padding-bottom: 100px;
  }
  .main-item{
    margin-top: 50px;
  }
  .main-item > .title{
    font-family: "苹方 粗体";
    font-size: 36px;
    letter-spacing: 5px;
    font-weight: bold;
  }
  .main-item > .title > span:nth-child(1){
    color: #666;
  }
  .main-item > .title > span:nth-child(2){
    color: #e05463;
  }
  .main-label{
    margin-top: 56px;
    height: 50px;
  }
  .main-label-item{
    display: inline-block;
    margin-right: 50px;
  }
  .main-label > .selectedLabel{
    width: 140px;
    height: 100%;
    background: #4f5766;
    border-radius: 25px;
    display: inline-block;
    padding-top: 5px;
  }
  .main-label-item > .selected{
    display: inline-block;
    width: 9px;
    height: 9px;
    border-radius: 50%;
    background: #97f3d6;
    margin-left: 17px;
  }
  .main-label-item > span:nth-child(2){
    color: #7f7f7f;
    font-family: "苹方 粗体";
    font-size: 26px;
    margin-left: 14px;
  }
  .main-label-item > .selectedTitle{
    color: #fafafa !important;
  }
  .main-item-container{
    display: flex;
    justify-content: space-between;
    align-content: space-between;
    flex-wrap: wrap;
    margin-top: 75px;
  }
  .main-item-container > .container-item{
    width: 305px;
    height: 513px;
  }
  .main-item-container .container-item-img{
    width: 305px;
    height: 305px;
    border-radius: 10px;
  }
  .container-item-img img{
    width: 305px;
    height: 305px;
  }
  .main-item-container .hotel-title{
    display: block;
    font-size: 32px;
    font-family: "苹方 粗体";
    font-weight: bold;
    color: #666;
    margin-top: 26px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
  .main-item-container .hotel-score{
    margin-top: 16px;
  }
  .main-item-container .hotel-score img{
    width: 24px;
    height: 24px;
    margin-right: 6px;
  }
  .main-item-container .hotel-price{
    margin-top: 20px;
  }
  .main-item-container .hotel-price span{
    color: #e05c63;
    font-family: "苹方 粗体";
  }
  .main-item-container .hotel-price span:nth-child(1){
    font-size: 16px;
  }
  .main-item-container .hotel-price span:nth-child(2){
    font-size: 32px;
    font-weight: bold;
  }
  .food-container{
    margin-top: 24px;
  }
  .food-container .container-item{
    margin-top: 50px;
  }
  .food-container .desc{
    display: inline-block;
    font-family: "苹方 粗体";
    font-size: 26px;
    color: rgba(0,0,0,.5);
    font-weight: bold;
  }
  .food-container .follow{
    display: inline-block;
    float: right;
    width: 109px;
    height: 42px;
    background: #f57285;
    border-radius: 21px;
  }
  .food-container .follow .follow-box{
    width: 89px;
    margin: 0 auto;
  }
  .food-container .follow img{
    width: 13px;
    height: 13px;
    margin-left: 12px;
  }
  .food-container .follow span{
    color: #fff;
    font-size: 24px;
    font-family: "苹方 粗体";
    display: inline-block;
    margin-left: 10px;
  }
  .food-container .item-img{
    display: block;
    height: 256px;
    width: 640px;
    border-radius: 10px;
    margin-top: 57px;
  }
  .food-container .item-img img{
    height: 256px;
    width: 640px;
  }
  .food-container .food-comment{
    float: right;
    margin-top: 24px;
  }
  .food-container .food-comment-love,.food-comment-talk{
    display: inline-block;
    margin-left: 30px;
  }
  .food-container .food-comment img{
    height: 20px;
    width: 21px;
    margin-right: 10px;
  }
  .food-container .food-comment span{
    color: #f15361;
    font-size: 24px;
    font-family: "苹方 粗体";
  }
</style>