<template>
    <div>
        <top-title>
            <template v-slot:left>
                <img src="../../assets/imgs/x.png" alt="" class="leftx">
            </template>
            <template v-slot:center>
                <search placeholder="快来搜索您喜欢的城市吧"></search>
            </template>
        </top-title>
        <div class="currentCity">
            <span>当前位置</span>
            <span>太原</span>
            <img src="../../assets/imgs/dingwei.png" alt="">
        </div>
        <div class="line1"></div>
        <div class="hotCity">
            <span>热门城市</span>
            <div class="hotCity-lable">
                <div v-for="(item,index) in hotcity" :key="index" class="hotCity-lable-item">
                    {{item.city}}
                </div>
            </div>
        </div>
        <div class="line1"></div>
    </div>
</template>

<script>
    import Search from "../../components/search/Search";
    import TopTitle from "../../components/TopTitle";
    import city from "@/lib/city1.json";
    export default {
        name: "SearchArea",
        components:{
            Search,
            TopTitle
        },
        data(){
          return {
              hotcity:[
                  {city:"北京",isactive:true},
                  {city:"上海",isactive:true},
                  {city:"广州",isactive:false},
                  {city:"重庆",isactive:true},
                  {city:"武汉",isactive:false},
                  {city:"成都",isactive:true},
                  {city:"南京",isactive:true},
                  {city:"云南",isactive:true}
              ]
          }
        },
        mounted() {
            console.log(city);

        }
    }
</script>

<style scoped>
    .leftx{
        width: 16px;
        height: 16px;
    }
    .currentCity{
        width: 638px;
        margin: 0 auto;
        margin-top: 48px;
    }
    .currentCity span{
        font-family: "思源黑体 CN Medium";
        color: rgba(0,0,0,.6);
        letter-spacing: 2px;
    }
    .currentCity span:nth-child(1){
        display: block;
        font-size: 34px;
    }
    .currentCity span:nth-child(2){
        display: inline-block;
        font-size: 32px;
        margin-top: 10px;
    }
    .currentCity img{
        width: 34px;
        height: 34px;
        float: right;
        margin-top: 20px;
    }
    .line1{
        width: 638px;
        height: 2px;
        margin: 0 auto;
        background-color: #f7f7f7;
        margin-top: 38px;
    }
    .hotCity{
        width: 638px;
        height: 206px;
        margin: 0 auto;
        margin-top: 30px;
    }
    .hotCity-lable{
        height: 142px;
        display: flex;
        justify-content: left;
        align-content: space-between;
        flex-flow: wrap;
        margin-top: 30px;
    }
    .hotCity-lable-item{
        display: inline-block;
        width: 127px;
        height: 59px;
        background-color: #f2f2f2;
        border-radius: 30px;
        font-size: 30px;
        letter-spacing: 2px;
        color: #999;
        font-family: "苹方 粗体";
        text-align: center;
        line-height: 59px;
        margin-right: 20px;
    }
</style>