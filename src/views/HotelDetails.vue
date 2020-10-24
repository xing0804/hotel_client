<template>
    <div class="hoteldetails">
        <div class="swipe-body">
            <van-swipe @change="onChange" v-if="hotel">
                <van-swipe-item v-for="(item,index) in banner" :key="index" ><img :src="item" alt="" class="swipe-img"></van-swipe-item>
                <template #indicator>
                    <div class="custom-indicator">
                        {{ current + 1 }}/4
                    </div>
                </template>
            </van-swipe>
        </div>
        <div class="toptitle">
            <div class="top-left">
                <i class="detailfont" @click="backhome">&#xe653;</i>
            </div>
            <div class="top-right">
                <i class="detailfont" :class="{iactive:isCollection}" @click="handlecollection">&#xe86f;</i>
                <i class="detailfont">&#xe600;</i>
            </div>
        </div>
        <div class="hotel-body">
            <div class="hotelinfo" v-if="hotel">
                <div class="hotel-title">
                    <div class="hotel-title-left">
                        <span :model="hotel.hname" class="hotel-title-name">{{hotel.hname}}</span>
                        <span class="hotel-title-type">·{{hotel.htype}}</span>
                    </div>
                    <router-link to="">设施详情 ></router-link>
                </div>
                <button class="hotel-slepper">试睡员推荐</button>
                <div class="hotel-address">
                    <div class="hotel-address-detail">
                        <div class="hotel-address-line"></div>
                        <span class="hotel-address-text" :model="hotel.haddress">{{hotel.haddress}}</span>
                    </div>
                    <router-link to="">地图周边 ></router-link>
                </div>
                <div class="hotel-distance">
                    <span class="hotel-distance-icon">&#xe62d;</span>
                    <span class="hotel-distance-text">距您直线距离550米，步行1.0千米，约15分钟</span>
                </div>
                <div class="hotel-evaluate">
                    <div class="hotel-evaluate-details">
                        <div class="hotel-evaluate-details-box" >
                            <div class="hotel-address-line"></div>
                            <span class="hotel-address-text" v-html="hotel.hdetail"></span>
                        </div>
                        <div class="hotel-evaluate-details-boxs">
                            <div>96%好评 110条回答</div>
                        </div>
                    </div>
                    <button :model="hotel.hscore" @click.prevent="one">{{hotel.hscore}}</button>
                </div>
            </div>
            <div class="hotel-line"></div>
            <div class="hotel-detail">
                <div class="hotel-detail-header">
                    <div class="hotel-detail-header-date">
                        <div class="hotel-detail-header-datebox" style="font-weight: bold;font-size: 18px">{{indexSearch.startTime}}</div>
                        <div class="hotel-detail-header-datebox" style="font-size: 14px;color: #666">共{{indexSearch.dayCount}}晚</div>
                        <div class="hotel-detail-header-datebox" style="font-weight: bold;font-size: 18px">{{indexSearch.endTime}}</div>
                    </div>
                    <div class="hotel-detail-img" @click="selectTime">&#xe631;</div>
                    <van-calendar type="range" v-model="showedTime" @confirm="onTimeConfirm" />
                </div>
            </div>
            <div class="hotel-screen">
                <div class="hotel-screen-left">
                    <div class="hotel-screen-left-box">
                        <div class="hotel-screen-circular"></div>
                        <div class="hotel-screen-text">含早</div>
                    </div>
                    <div class="hotel-screen-left-box">
                        <div class="hotel-screen-circular"></div>
                        <div class="hotel-screen-text">大床</div>
                    </div>
                    <div class="hotel-screen-left-box">
                        <div class="hotel-screen-circular"></div>
                        <div class="hotel-screen-text">到店付</div>
                    </div>
                </div>
                <div class="hotel-screen-right">
                    <div class="hotel-screen-right-text">筛选 &#xe698;</div>
                </div>
            </div>
            <div class="hotel-details-box">
                <router-link class="hotel-list" :to="{name:'room',query:{rid:item.rid,hid:hid}}" v-for="(item,index) in roomInfo" :key="index" >
                    <div class="hotel-list-left">
                        <img :src="item.rimgurl" alt="酒店图片">
                    </div>
                    <div class="hotel-list-right">
                        <div class="hotel-list-title">
                            <span>{{item.rname}}</span>
                            <div class="hotel-list-title-icon">&#xe696;</div>
                        </div>
                        <div class="hotel-list-room-detail">
                            <div class="hotel-list-room-text" v-for="(label,index1) in item.rlabel" :key="index1">{{label}}</div>
                        </div>
                        <div class="hotel-list-price">
                            <div class="hotel-list-price-discount">{{item.rdiscount}}</div>
                            <div class="hotel-list-price-value">RMB<span>{{item.rprice}}</span></div>
                        </div>
                    </div>
                </router-link>
            </div>
        </div>

    </div>
</template>

<script>

    import {apiDetail, apigetHotelRoom, apiSaveCollection} from "../http/api";
    import {IMGURL} from "../lib/base";

    export default {
        name: "HotelDetails",
        data(){
             return {
                current: 0,
                 hotel:null,
                 date:{
                    stardate:5.07,
                    enddata:5.09,
                 },
                 banner:[],
                 showedTime:false,
                 //房间信息
                 roomInfo:[],
                 hid:this.$route.query.hid
            };
        },
        computed:{
            // difference(){
            //     let time=(this.date.enddata*100)-(this.date.stardate*100);
            //     return '共'+time+'晚';
            // },
            indexSearch(){
                return this.$store.state.indexSearch;
            },
            isCollection(){
                return this.$store.getters.isCollection(this.$route.query.hid);
            }
        },
        methods:{
            //返回首页
            backhome(){
              this.$router.go(-1);
            },
            //轮播图个数
            onChange(index) {
                this.current = index;
            },
            //初始化页面酒店信息
            initHotelInfo(){
                apiDetail(this.$route.query.hid).then(res=>{
                    this.hotel=res.hotelInfo;
                    this.banner=res.hotelInfo.hbanner.split(",").map(ele=>{
                        ele=IMGURL+ele;
                        return ele;
                    });
                }).catch(error=>{
                    console.log("数据获取失败");
                    console.log(error);
                })
            },
            //显示日历
            selectTime(){
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
            //点击喜欢
            handlecollection(){
                //修改样式
                if(this.$store.state.token){

                    this.$store.commit('toggleCollection',this.$route.query.hid);
                    //后台请求
                    let obj={"collection":this.$store.state.collection.join(',')};
                    apiSaveCollection(obj).then(res=>{
                        console.log(res);
                    }).catch(error=>{
                        console.log(error);
                    })
                }

            },
            //初始化房间信息
            initRoom(){
                let hid=this.$route.query.hid;
                let params={"hid":hid};
                apigetHotelRoom(params).then(res=>{
                    console.log(res);
                    this.roomInfo=res.data.map(ele=>{
                        ele.rimgurl=IMGURL+ele.rimgurl;
                        ele.rbanner=ele.rbanner.split(',').map(item=>{
                            return IMGURL+item;
                        });
                        ele.rlabel=ele.rlabel.split(',');
                        return ele;
                    });
                }).catch(error=>{
                    console.log(error);
                })
            }

        },
        mounted() {
            this.initHotelInfo();
            this.initRoom();
        }

    }
</script>

<style scoped>
    @import "../assets/css/fontface.css";
    @import "../assets/css/detailfont.css";

    .detailfont{
        font-family: 'detailfont';
        font-size:40px;font-style:normal;
        color: #ffffff;
        -webkit-font-smoothing: antialiased;
        -webkit-text-stroke-width: 0.2px;
        -moz-osx-font-smoothing: grayscale;
    }
    .toptitle{
        position: absolute;
        top: 80px;
        width: 100%;
        padding: 0 57px;
        box-sizing: border-box;
    }
    .top-left i:nth-child(1){
        font-size: 30px;
    }
    .top-left{
        float: left;
    }
    .top-right{
        float: right;
    }
    .top-right i:nth-child(1){
        font-size: 35px;
        margin-right: 30px;
    }
    .top-right i:nth-child(2){
        font-size: 30px;
    }
    i.iactive{
        color: #e05c63;
    }
    .swipe-body{
        width: 100%;
        height: 400px;
        position: relative;
    }
    .custom-indicator {
        position: absolute;
        right: 57px;
        bottom: 135px;
        padding: 2px 15px;
        border-radius: 15px;
        font-size: 18px;
        color: #f1f1f1;
        background: rgba(0, 0, 0, 0.5);
    }
    .swipe-img{
        width: 100%;
        height: 500px;
    }
    .hotel-body{
        position: absolute;
        bottom: 0;
        width: 100%;
        height: 960px;
        padding: 40px 55px;
        border-top-left-radius:38px;
        border-top-right-radius: 38px;
        background: #ffffff;
        box-sizing: border-box;
    }
    .hotel-title{
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    .hotel-title-left{

    }
    .hotel-title-name{
        line-height: 4px;
        font-size: 32px;
        color: #474747;
    }
    .hotel-title-type{
        color: #e37277;
        font-size: 24px;
    }
    .hotel-title a{
        color:  #e37277;
        font-size: 18px;
    }
    .hotel-slepper{
        width: 150px;
        height: 36px;
        border-radius: 18px;
        font-size: 14px;
        background-color: #606978;
        border: none;
        color: #f3e88e;
        text-align: center;
        line-height: 36px;
        margin-top: 15px;
        margin-bottom: 34px;
    }
    .hotel-address{
        width: 100%;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
    }
    .hotel-address-detail{
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
    }
    .hotel-address-line{
        width: 5px;
        height: 18px;
        background-color: #97f3d6;
        border-radius: 3px;
        margin-right: 16px;
    }
    .hotel-address-text{
        font-size: 26px;
        color: #585858;
        display: inline-block;
        width: 400px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }
    .hotel-address a{
        color:  #e37277;
        font-size: 18px;
    }
    .hotel-distance{
        display: flex;
        flex-direction: row;
        align-items: center;
    }
    .hotel-distance-icon{
        font-family: 'iconfont';
        color: #e8858a;
    }
    .hotel-distance-text{
        color: #a3a3a3;
        font-size: 20px;
    }
    .hotel-evaluate{
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        margin-top: 32px;
    }
    .hotel-evaluate-details{
        display: flex;
        flex-direction: column;
        justify-content: center;
    }
    .hotel-evaluate-details-box{
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
    }
    .hotel-evaluate-details-boxs{
        font-size: 18px;
        color: #a3a3a3;
    }
    .hotel-evaluate button{
        width: 127px;
        height: 49px;
        background-color: #3f4857;
        border-radius: 24px;
        color:#f3e88e;
        font-size: 30px;
        border: none;
    }
    .hotel-line{
        width: 639px;
        height: 1px;
        margin-top: 43px;
        background-color: #d9d9d9;
    }
    .hotel-detail{
        margin-top: 60px;
        width: 100%;
    }
    .hotel-detail-header{
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
    }
    .hotel-detail-header-date{
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
    }
    .hotel-detail-header-datebox{
        margin-right: 25px;
        font-size: 32px;
        color: #e57c81;
        line-height: 32px;
    }
    .hotel-detail-img{
        font-family: 'iconfont';
        color: #e8858a;
        font-size: 32px;
    }
    .hotel-screen{
        width: 100%;
        margin-top: 57px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 75px;
    }
    .hotel-screen-left{
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
    }
    .hotel-screen-left-box{
        margin-right: 50px;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
    }
    .hotel-screen-circular{
        width: 9px;
        height: 9px;
        background-color: #97f3d6;
        border-radius: 50%;
        margin-right: 15px;
    }
    .hotel-screen-text{
        font-size: 26px;
        color: #a3a3a3;
    }
    .hotel-screen-right-text{
        font-family: 'iconfont';
        color: #a3a3a3;
        font-size: 26px;
    }
    .hotel-details-box{
        width: 100%;
    }
    .hotel-list{
        display: flex;
        flex-direction: row;
        margin-bottom: 58px;
    }
    .hotel-list-left{
        width: 192px;
        height: 188px;
    }
    .hotel-list-left img{
        width: 192px;
        height: 188px;
        border-radius: 5%;
    }
    .hotel-list-right{
        flex: 1;
        margin-left: 40px;
        height: 188px;
        position: relative;
    }
    .hotel-list-title{
        display: flex;
        flex-direction: row;
        justify-content: space-between;
    }
    .hotel-list-title span{
        font-size: 32px;
        color:#000
    }
    .hotel-list-title-icon{
        font-family: 'iconfont';
        color: #e8858a;
        font-size: 32px;
    }
    .hotel-list-room-detail{
        margin-top: 22px;
    }
    .hotel-list-room-detail:after{
        content: '';
        clear: both;
        display: block;
    }
    .hotel-list-room-text{
        float: left;
        width: 110px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        font-size: 24px;
        color:#8d8d8d;
        margin-right: 23px;
    }
    .hotel-list-price{
        position: absolute;
        bottom: 0;
        width: 100%;
    }
    .hotel-list-price-discount{
        float: left;
        width: 108px;
        height: 36px;
        background-color: #fcf0f1;
        border-radius: 18px;
        color: #e05c63;
        line-height: 36px;
        text-align: center;
        font-size: 18px;
    }
    .hotel-list-price-value{
        float: right;
        font-size: 20px;
        color: #000000;
    }
    .hotel-list-price-value span{
        margin-left: 10px;
        font-size: 32px;
        color: #e05c63;
    }
</style>