<template>
    <div>
      <div class="header">
        <div class="top">
         全部订单
        </div>
        <ul class="nav">
            <li v-for="(item,index) in orderType" :key="index" :class="{active:search.field===item.field}" @click="changeOrderType(item.field)">
                <span>{{item.text}}</span>
            </li>
        </ul>
      </div>
      <div class="back">
          <search-error v-if="!orders">
              <template v-slot:errortext>
                  您还没有预定过酒店呦！
              </template>
          </search-error>
          <div v-if="orders">
              <div class="con" v-for="(item,index) in orders" :key="index">
                  <img src="../../assets/imgs/orders/1.png" alt="">酒店
                  <div class="right">{{orderType[item.status].text}}</div>
                  <p class="jiage" >{{item.hname}}.{{item.hcity}}{{item.harea}}店</p>
                  <p class="rmb-r">
                      <span>RMB</span>
                      <span>{{item.price}}</span>
                  </p>
                  <p>{{item.enter_time}}</p>
                  <p>1晚 · {{item.user_number}}人 · {{item.room_type}}</p>
                  <div class="line"></div>
                  <router-link to="">去点评</router-link>
                  <router-link :to="{name:'hoteldetail',query:{hid:item.hid}}">再次预定</router-link>
              </div>
          </div>
      </div>
      <tab-bar-main></tab-bar-main>
    </div>
</template>
<script>
    import TabBarMain from "../TabBarMain";
    import SearchError from "../../components/search/SearchError";
    import {apigetOrders} from "../../http/api";
    export default {
        name: "alldindan",
        data(){
            return{
                orderType:[
                    {field:0,text:'全部'},
                    {field:1,text:'待付款'},
                    {field:2,text:'待入住'},
                    {field:3,text:'已完成'},
                    {field:4,text:'退款单'},
                ],
                orders:null,
                search:{
                    field:0
                }
            }
        },
        components:{
            TabBarMain,
            SearchError
        },
        methods:{
            changeOrderType(field){
                this.search.field=field;
                let type=this.search.field;
                let params={"type":type};
                apigetOrders(params).then(res=>{
                    console.log(res);
                    this.orders=res.data;
                }).catch(error=>{
                    console.log(error);
                })
            },
            initOrders(){
                this.$route.query.type?this.search.field=this.$route.query.type:this.search.field=0;
                let type=this.search.field;
                let params={"type":type};
                apigetOrders(params).then(res=>{
                    console.log(res);
                    this.orders=res.data;
                }).catch(error=>{
                    console.log(error);
                })
            }
        },
        mounted() {
            this.initOrders();
        }
    }
</script>

<style scoped>
    .header{
        width: 100%;
        height: 180px;
        background: #ffffff;
        position: fixed;
        padding-bottom: 100px;
        z-index: 9;
    }
.top{
    width: 138px;
    height: 32px;
    font-size: 34px;
    text-align: center;
    margin: auto;
    font-weight: bold;
    margin-top: 80px;
}

.nav{
    width: 100%;
    margin-top: 60px;
    padding: 0 57px;
    box-sizing: border-box;
    font-size: 26px;
    display: flex;
    justify-content: space-between;
}
   .nav li{
       display: block;
       width: 120px;
       height: 43px;
       text-align: center;
       border-radius: 32px;
       padding: 10px 0;
       color: black;
   }
.nav li.active{
    background: #e05c63;
    color: #ffffff;
}
    .con{
        width: 600px;
        height: 275px;
        border-radius: 10px;
        background: #ffffff;
        margin: auto;
        margin-top: 50px;
        padding: 30px;
        font-size: 20px;
    }
    .con img{
        width: 25px;
        height:12px;
        margin-right: 10px;
    }
    .con .right{
        width: 273px;
        height: 27px;
        float: right;
        font-size: 20px;
        text-align: right;
        color: #e05c63;
    }
    .con p{
        font-size: 26px;
        margin-top: 32px;
    }
    .jiage{
        width: 60%;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }
.back{
    background: #f1f1f1;
    margin-bottom: 130px;
    padding: 300px 0 50px 0;
}
.con .rmb-r{
    float: right;
    margin-top:-32px;
}
    .con .rmb-r span:nth-child(1){
        font-size: 20px;
        color: #333;
    }
.con .rmb-r span:nth-child(2){
    font-size: 30px;
    font-weight: bold;
    color: #333333;
}
    .con p:nth-child(6){
        margin-top: -2px;
        font-size: 20px;
        opacity: 0.3;
    }
.con p:nth-child(5){
    font-size: 20px;
    opacity: 0.3;
}
    .line{
        width: 567px;
        height: 1px;
        background: #000000;
        margin: auto;
        opacity: 0.08;
        margin-top: 26px;
    }
    .con a{
        display: inline-block;
        width: 123px;
        height: 36px;
        background: #f15361;
        text-align: center;
        line-height: 36px;
        float: right;
        font-size: 2px;
        color: #fff;
        border-radius: 18px;
        margin-top: 26px;
        margin-right: 20px;
    }
</style>