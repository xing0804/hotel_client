<template>
<div class="box">
    <my-title>
        <template slot="text">
            提交订单
        </template>
    </my-title>
    <img src="../../assets/imgs/orders/zf.png" alt="" class="logo">
    <div class="num">
     ￥{{price}}.00
    </div>
    <div class="text">
     确认支付金额
    </div>
    <div class="zhong">
        <ul>
            <li style="margin-top: 0">
                <div class="dian"></div>
                <div class="zffs">支付方式</div>
                <div class="tu">{{paymentType}}</div>
            </li>
            <li>
                <div class="dian"></div>
                <div class="zffs">订单编号</div>
                <div class="tu1">{{orderNum}}</div>
            </li>
            <li>
                <div class="dian"></div>
                <div class="zffs">订单状态</div>
                <div class="tu1">待支付</div>
            </li>
        </ul>
    </div>
    <ul class="xia">
       <li>
           <img src="../../assets/imgs/orders/微信.png" alt="">
           <span>微信支付</span>
           <input type="radio" name="but" class="but" checked value="微信" v-model="paymentType">
       </li>
       <li>
           <img src="../../assets/imgs/orders/支付宝.png" alt="">
           <span>支付宝支付</span>
           <input type="radio" name="but" class="but" value="支付宝" v-model="paymentType">
       </li>
       <li>
           <img src="../../assets/imgs/orders/银行卡.png" alt="">
           <span>银行卡支付</span>
           <input type="radio" name="but" class="but" value="银行卡" v-model="paymentType">
       </li>
   </ul>
    <div class="a" @click="handlePay">确认支付</div>
</div>
</template>
<script>
    import MyTitle from "../../components/MyTitle";
    export default {
        name: "zf",
        components:{
            MyTitle
        },
        data(){
            return {
                paymentType:"微信",
                status:0,
                price:0,
                orderNum:Math.floor(Math.random() * 99999999999 + 11111111111)
            }
        },
        methods:{
            initStatus(){
                let statusArr=['未支付','已支付','已完成','退款'];
                let id=this.$route.query.status-1;
                this.status=statusArr[id];
                this.price=this.$route.query.price;
            },
            handlePay(){
                this.$store.commit("setStatus",2);
                this.$router.replace({name:"success",query:{price:this.$route.query.price}});
            },
        },
        mounted() {
            this.initStatus();
        }
    }
</script>

<style scoped>
    .box{
        padding: 0 57px;
    }
 .a{
     width: 562px;
     height: 37px;
     background: #e05c63;
     border-radius: 39px;
     margin: auto;
     margin-top: 250px;
     margin-bottom: 100px;
     font-size: 32px;
     text-align: center;
     color: white;
     padding: 20px 0;
 }
    .logo{
        width: 100px;
        height: 100px;
        display: block;
        margin: 0 auto;
        margin-top: 86px;
    }
    .num{
        width: 70%;
        height: 60px;
        margin:0 auto;
        margin-top: 47px;
        font-size: 56px;
        text-align: center;
    }
    .text{
        width: 100%;
        text-align: center;
        font-size: 26px;
        color: #333333;
        margin: 0 auto;
        margin-top: 33px;
    }
    .zhong{
        width: 574px;
        height:144px;
        border-radius: 10px;
        background: #ffffff;
        box-shadow: 0 12px 31px 7px
        rgba(240, 240, 240, 0.9);
        margin: auto;
        margin-top: 80px;
        padding: 63px 32px;

    }
    .zhong li{
        width: 100%;
        height: 30px;
        margin-top: 30px;
    }
    .dian{
        width: 9px;
        height: 9px;
        background: #97f3d6;
        border-radius: 50%;
        float: left;
        margin-top: 10px;
    }
.zffs{
    width: 106px;
    height: 25px;
    font-size: 26px;
    float: left;
    margin-left:20px ;
}
    .tu{
        padding: 5px 30px;
        background: #fdf2f3;
        border-radius: 30px;
        font-size: 20px;
        float: right;
        text-align: center;
        opacity: 0.85;
        color: #e05c63;
    }
    .tu1{
        width: 181px;
        height: 25px;
        font-size: 26px;
        text-align: right;
        float: left;
        margin-left: 258px;
    }
    .xia li{
        width: 638px;
        height:10px;
        margin: auto;
        border-bottom: 1px solid silver ;
        padding: 40px 0;
        font-size: 26px;
    }
    .xia li:nth-child(1){
        margin-top: 80px;
    }
    .xia li img{
        width: 41px;
        height: 41px;
        margin-top:-15px;
        margin-right: 40px;
    }
    .xia li span{
       position: relative;
        left: 0;
        top: -10px;
    }
    .but{
        width: 28px;
        height: 28px;
        border-radius: 50%;
        float: right;
        margin-top: -10px;
        background: #e05c63;
        opacity: 0.5;
    }

</style>