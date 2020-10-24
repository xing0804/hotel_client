<template>
    <div class="box">
        <my-title>
            <template slot="text">
                支付成功
            </template>
        </my-title>
        <img src="../../assets/imgs/orders/success.png" alt="" class="successlogo">
        <div class="sprice">
            ￥{{price}}.00
        </div>
        <div class="text">支付成功</div>
        <div class="con">
            <router-link to="" class="list">分享好友</router-link>
            <router-link :to="{name:'orders'}" class="list">查看订单</router-link>
        </div>
        <div class="juan">
            <div class="top">
                <img src="../../assets/imgs/orders/juan1.png" alt="">
                <span>Discount</span>
                <p>早餐代金福利卡券</p>
                <span>￥100.00</span>
            </div>
            <div class="time">
                <span>2020.04.25  -  2020.05.30</span>
            </div>
        </div>
        <div class="fenlei">
            <span>为您 </span>
            <span>· 精选</span>
        </div>
        <div class="jinxuan">
            <div class="jiu">
                <img src="../../assets/imgs/orders/jiu1.png" alt="">
                <p>Louis Lafite</p>
                <p>￥120</p>
            </div>
            <div class="jiu">
                <img src="../../assets/imgs/orders/jiu2.png" alt="">
                <p>Louis Lafite</p>
                <p>￥120</p>
            </div>
        </div>
    </div>
</template>

<script>
    import MyTitle from "../../components/MyTitle";
    export default {
        name: "success",
        components:{
            MyTitle
        },
        data(){
            return {
                price:0
            }
        },
        methods:{
            initInfo(){
                this.price=this.$route.query.price
            },
        },
        mounted() {
            this.initInfo();
        }
    }
</script>

<style scoped>
.box{
    padding: 0 57px;
}
    .successlogo{
        width: 200px;
        height: 100px;
        display: block;
        margin: 0 auto;
        margin-top: 118px;
    }
    .sprice{
        width: 100%;
        height:42px;
        text-align: center;
        margin-top: 54px;
        letter-spacing: 1px;
        font-size: 50px;
    }
    .text{
        width: 120px;
        height: 29px;
        margin: auto;
        text-align: center;
        font-size: 30px;
        margin-top: 30px;
    }
    .con{
        width: 540px;
        height: 62px;
        margin: auto;
        margin-top: 64px;
        display: flex;
        justify-content: space-between;
    }
    .con .list{
        width: 200px;
        height: 100%;
        border-radius: 31px;
        text-align: center;
        font-size: 26px;
        padding: 12px 0;
        box-sizing: border-box;
    }
    .con .list:nth-child(1){
        background: #e05c63;
        color: white;
    }
    .con .list:nth-child(2){
        border: solid 1px #e05c63;
        color: #e05c63;
    }
    .juan{
        width: 637px;
        height:230px;
        background:#ffffff;
        margin: auto;
        margin-top: 96px;
        border-radius: 10px;
        box-shadow: 0 1px 65px 7px
        rgba(231, 230, 230, 0.7);
        overflow: hidden;
    }
    .juan .top{
        width: 637px;
        height: 164px;
        background-image: linear-gradient(-90deg,
        #e05c63 0%,
        #ee646b 60%,
        #fc6c73 100%);
    }
    .top img{
        width: 95px;
        height: 80px;
        margin-top: 63px;
        margin-left: 36px;
    }
    .top span{
        display: inline-block;
    }
    .top span:nth-child(2){
        width: 104px;
        height: 20px;
        font-size: 26px;
        color: white;
        position: relative;
        left: 24px;
        top: -55px;
    }
    .top p{
        width: 256px;
        height: 28px;
        font-size: 32px;
        color: white;
        margin-left:150px;
        margin-top: -60px;
    }
    .top span:nth-child(4){
        font-size: 32px;
        color: white;
        position: relative;
        left: 450px;
        top: -45px;
        text-align: center;
    }
    .time span{
        display: inline-block;
        font-size: 22px;
        color: #e05c63;
        margin-left: 358px;
        margin-top: 15px;
    }
    .fenlei{
        width: 100%;
        height: 40px;
        padding: 0 57px;
        box-sizing: border-box;
        margin-top: 1px;
        font-size: 36px;
        font-family: "苹方 粗体";
        letter-spacing: 1px;
    }
    .fenlei span:nth-child(1){
        color:#000000;
    }
    .fenlei span:nth-child(2){
        color: #e05c63;
    }
    .jinxuan{
        width: 100%;
        padding: 0 57px;
        box-sizing: border-box;
        margin-top: 56px;
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
    }
    .jinxuan .jiu{
        width:243px;
        height: 380px;
    }
    .jiu img{
        width:100%;
        height: 310px;
    }
    .jiu p{
        text-align: left;
    }
    .jiu p:nth-child(2){
        font-size: 26px;
    }
    .jiu p:nth-child(3){
        font-size: 16px;
    }
</style>