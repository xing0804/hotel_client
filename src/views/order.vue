<template>
    <div class="order-box">
        <my-title>
            <template slot="text">
                万狮京华大酒店
            </template>
        </my-title>
        <div class="roominfo" v-if="hotelinfo">
            <div class="roomimg">
                <img :src="hotelinfo.rimgurl" alt="">
            </div>
            <div class="room-otherinfo">
                <span class="roomname">{{hotelinfo.rname}}</span>
                <span class="roomlabel">{{hotelinfo.rlabel[0]}}·{{hotelinfo.rlabel[1]}}·{{hotelinfo.rlabel[3]}}</span>
                <div class="roomtime" @click="selectTime">
                    <span>{{indexSearch.startTime}}</span>
                    <img src="../assets/imgs/go.png" alt="">
                    <span>{{indexSearch.endTime}}</span>
                    <span>共{{indexSearch.dayCount}}晚</span>
                </div>
                <van-calendar type="range" v-model="showedTime" @confirm="onTimeConfirm" />
            </div>
        </div>
        <div class="order-content">
            <div class="order-content-word">入住人数</div>
            <van-stepper max="3" v-model="orderinfo.user_number" theme="round" button-size="22" disable-input />
<!--            <div class="order-content-item">-->
<!--                <p class="order-content-item-word">1人</p>-->
<!--            </div>-->
        </div>
        <div class="line1"></div>
        <div class="userinfo">
            <div class="userinfo-item">
                <div class="userinfo-item-left">
                    <img src="../assets/imgs/room/1.jpg" alt="">
                    <span>联系人</span>
                </div>
                <div class="userinfo-item-right">
                    <span>{{orderinfo.user_info}}</span>
                    <img src="../assets/imgs/room/shizizu.png" alt="">
                </div>
            </div>
            <div class="userinfo-item">
                <div class="userinfo-item-left">
                    <img src="../assets/imgs/room/dianhua.jpg" alt="">
                    <span>手机</span>
                </div>
                <div class="userinfo-item-right">
                    <span v-show="!isdbclickphone" @click="changephone">{{orderinfo.phone}}</span>
                    <span v-show="isdbclickphone"><input type="text" v-model="orderinfo.phone" @blur="phoneblur"></span>
                </div>
            </div>
            <div class="userinfo-item">
                <div class="userinfo-item-left">
                    <img src="../assets/imgs/room/shijian.jpg" alt="">
                    <span>到店时间</span>
                </div>
                <div class="userinfo-item-right">
                    <span>（今天） 16:00</span>
                </div>
            </div>
        </div>
        <div class="footer">
            <div class="btn1">
                <div class="btn1-btn1">
                    <img src="../assets/imgs/room/shizi1.png" alt="" class="btn1-btn1-img" />
                </div>
                <div class="btn1-btn2">
                    <img
                            src="../assets/imgs/room/kefudianhua.png"
                            alt=""
                            class="btn1-btn2-img"
                    />
                </div>
            </div>
            <div class="order-right">
                <span>￥</span>
                <span>{{orderinfo.price}}.00</span>
                <span @click="setorder">提交订单</span>
            </div>

        </div>
    </div>
</template>

<script>
    import MyTitle from "../components/MyTitle";
    import {apigetRoomItem, apisetOrderinfo} from "../http/api";
    import {IMGURL, SUCCESS} from "../lib/base";

    export default {
        name: "order",
        components:{
            MyTitle
        },
        data(){
          return {
              hotelinfo:null,
              showedTime:false,
              orderinfo:{
                  room_type:'',
                  user_number:1,
                  enter_time:'',
                  leave_time:'',
                  phone:'15547173818',
                  user_info:'张某',
                  price:'',
                  status:1
              },
              isdbclickphone:false,
          }
        },
        computed:{
            indexSearch(){
                return this.$store.state.indexSearch;
            },
        },
        methods:{
            //初始化订单信息
            initorder(){
                // let hid=this.$route.query.hid;
                let rid=this.$route.query.rid;
                apigetRoomItem(rid).then(res=>{
                    console.log(res);
                    res.data.rimgurl=IMGURL+res.data.rimgurl;
                    res.data.rlabel=res.data.rlabel.split(',');
                    this.hotelinfo=res.data;
                    this.orderinfo.room_type=res.data.rname;
                    this.orderinfo.price=res.data.rprice;
                    console.log(this.hotelinfo);
                }).catch(error=>{
                    console.log(error);
                });
                this.orderinfo.price=this.$route.query.price;
            },
            //显示日历
            selectTime(){
                this.showedTime=true;
            },
            //格式化时间
            formatDate(date) {
                return `${date.getMonth() + 1}.${date.getDate()}`;
            },
            //格式化时间2
            formatDate2(date) {
                return `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;
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
                let enterTime=`${this.formatDate2(start)}`;
                let leaveTime=`${this.formatDate2(end)}`;
                this.$store.commit("getTime",{"startTime":startTime,"endTime":endTime,"startDay":startDay,"endDay":endDay,"dayCount":dayCount});
                this.orderinfo.enter_time=enterTime;
                this.orderinfo.leave_time=leaveTime;
                this.showedTime=false;

            },
            //获取起始时间
            initTime(){
                this.orderinfo.enter_time=this.$store.state.indexSearch.startTime;
                this.orderinfo.leave_time=this.$store.state.indexSearch.endTime;
            },
            //修改电话
            changephone(){
                this.isdbclickphone=true;
            },
            //电话修改完成
            phoneblur(){
                this.isdbclickphone=false;
            },
            //提交订单
            setorder(){
                let params=Object.assign({},this.orderinfo,{'hid':this.$route.query.hid,'rid':this.$route.query.rid});
                apisetOrderinfo(params).then(res=>{
                    if(res.code===SUCCESS){
                        this.$store.commit("setStatus",1);
                        this.$router.push({name:'zf',query:{price:this.orderinfo.price}});
                    }
                }).catch(error=>{
                    console.log(error);
                })
            }
        },
        mounted() {
            this.initorder();
            this.initTime();
        }
    }
</script>

<style>
    .van-stepper{
        float: right;
    }
</style>
<style scoped>
    .order-box{
        padding: 0 57px;
    }
    .roominfo{
        width: 100%;
        height: 313px;
        margin-top: 100px;
        box-sizing: border-box;
        box-shadow: 0 0 30px #e8e8e8;
        border-radius: 5%;
        padding: 50px 33px;
    }
    .roomimg{
        width: 205px;
        height: 205px;
        float: left;
    }
    .roomimg img{
        width: 205px;
        height: 205px;
        border-radius: 5%;
    }
    .room-otherinfo{
        padding-left: 268px;
        padding-top: 30px;
    }
    .roomname{
        display: block;
        font-family: 'PingFang-SC-Bold';
        font-size: 32px;
        color: rgba(0,0,0,.8);
    }
    .roomlabel{
        display: block;
        font-family: 'PingFang-SC-Bold';
        font-size: 22px;
        color: #999999;
        margin-top: 31px;
        letter-spacing: 2px;
    }
    .roomtime{
        margin-top: 29px;
    }
    .roomtime span{
        font-family: 'PingFang-SC-Bold';
        color: #e6868a;
    }
    .roomtime span:nth-child(1){
        font-size: 22px;
    }
    .roomtime img{
        width: 19px;
        height: 7px;
        margin-left: 20px;
    }
    .roomtime span:nth-child(3){
        font-size: 22px;
        margin-left: 20px;
    }
    .roomtime span:nth-child(4){
        display: inline-block;
        width: 81px;
        height: 30px;
        background: #f9dee0;
        text-align: center;
        line-height: 30px;
        font-size: 20px;
        color: #e6868a;
        margin-left: 20px;
        border-radius: 15px;
    }
    .order-content {
        height: 45px;
        margin-top: 109px;
        padding: 0 40px;
    }
    .order-content .order-content-word {
        /* width: 79px; */
        height: 25px;
        font-family: PingFang-SC-Bold;
        font-size: 26px;
        line-height: 40px;
        color: #000000;
        opacity: 0.8;
        float: left;
    }
    .order-content .order-content-item {
        width: 115px;
        height: 43px;
        background-color: rgba(224, 92, 99, 0.05);
        border-radius: 22px;
        float: right;
    }
    .order-content .order-content-item-word {
        width: 42px;
        height: 25px;
        font-family: PingFang-SC-Bold;
        font-size: 26px;
        line-height: 40px;
        color: rgba(224, 92, 99, 0.8);
        margin: 0 auto;
    }
    .line1 {
        height: 2px;
        width: 80%;
        margin: 0 auto;
        margin-top: 54px;
        background-color: #000000;
        opacity: 0.05;
    }
    .userinfo{
        margin-top: -20px;
        padding: 0 40px;
    }
    .userinfo-item:after{
        content: '';
        display: block;
        clear: both;
    }
    .userinfo-item{
        margin-top: 65px;
    }
    .userinfo-item span{
        font-family: PingFang-SC-Bold;
        font-size: 26px;
        color: #333333;
        letter-spacing: 1px;
    }
    .userinfo-item-left{
        float: left;
    }
    .userinfo-item-left img {
        width: 21px;
        height: 23px;
    }
    .userinfo-item-left span{
        margin-left: 16px;
    }
    .userinfo-item-right{
        float: right;
    }
    .userinfo-item-right span{
        margin-right: 16px;
    }
    .userinfo-item-right img{
        width: 20px;
        height: 20px;
    }
    .footer {
        height: 60px;
        margin-top: 150px;
    }
    .footer:after{
        content: '';
        display: block;
        clear: both;
    }
    .btn1 {

        height: 50px;
        float: left;
        margin-top: 5px;
    }
    .btn1-btn1 {
        width: 50px;
        height: 50px;
        background-color: #e05c63;
        opacity: 0.8;
        border-radius: 50% 50%;
        float: left;
    }
    .btn1-btn1:active{
        opacity: 0.5;
    }
    .btn1-btn1-img {
        width: 40px;
        height: 40px;
        margin-left: 4px;
        margin-top: 4px;
    }
    .btn1-btn2 {
        width: 50px;
        height: 50px;
        background-color: #e05c63;
        opacity: 0.8;
        border-radius: 50% 50%;
        margin-left: 20px;
        float: left;
    }
    .btn1-btn2:active{
        opacity: 0.5;
    }
    .btn1-btn2-img {
        width: 50px;
        height: 50px;
    }
    .order-right{
        float: right;
    }
    .order-right span{
        font-family: PingFang-SC-Bold;
    }
    .order-right span:nth-child(1){
        font-size: 18px;
        color: #e05c63;
        opacity: 0.85;
    }
    .order-right span:nth-child(2){
        font-size: 30px;
        color: #e05c63;
        opacity: 0.85;
        font-weight: bold;
        margin-right: 20px;
    }
    .order-right span:nth-child(3){
        display: inline-block;
        width: 205px;
        height: 60px;
        background-image: linear-gradient(-90deg, #f16b72 0%, #e05c63 100%);
        border-radius: 30px;
        font-size: 32px;
        font-weight: bold;
        line-height: 60px;
        text-align: center;
        color: #ffffff;
    }

</style>