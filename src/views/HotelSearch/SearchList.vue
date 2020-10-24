<template>
    <div style="padding-bottom: 50px">
        <div class="search-title">酒店搜索</div>
        <search placeholder="主人，快来搜索您的房源吧~" dian-style="background: #e05c63" class="search-input" @handlelistSearch="handlelistSearch"></search>
        <div class="search-bar">
            <div class="bgmask bgactive">
                <span>综合</span>
            </div>
            <van-dropdown-menu class="choose">
                <van-dropdown-item title="价格" v-model="value1" :options="option1" @change="onorderChange"/>
                <van-dropdown-item title="位置" v-model="value2" :options="option2" @change="onorderChange"/>
                <van-dropdown-item title="类型" v-model="value3" :options="option3" @change="onorderChange"/>
            </van-dropdown-menu>
        </div>
        <div class="search-list">
            <van-pull-refresh v-model="isPullrefresh" @refresh="onPullRefresh">
                <van-list
                        v-model="isUpper"
                        :finished="isfinished"
                        finished-text="没有更多了"
                        @load="handleUpper"
                        >
                    <search-item v-for="(item,index) in hotelData" :key="index">
                        <template v-slot:img>
                            <img :src="item.himgurl" alt="" class="leftimg">
                        </template>
                        <template v-slot:title>
                            {{item.hname}}
                        </template>
                        <template v-slot:money>
                            {{item.hprice}}
                        </template>
                        <template v-slot:like-count>
                            412
                        </template>
                        <template v-slot:opinion-count>
                            3315
                        </template>
                    </search-item>
                </van-list>
            </van-pull-refresh>
        </div>

        <tab-bar-main></tab-bar-main>
    </div>
</template>

<script>
    import SearchItem from "./SearchItem";
    import Search from "../../components/search/Search";
    import TabBarMain from "../TabBarMain";
    import {apiList} from "../../http/api";
    import {IMGURL} from "../../lib/base";

    export default {
        name: "SearchList",
        components: {
            SearchItem,
            Search,
            TabBarMain,
        },
        data() {
            return {
                //下拉菜单的数据
                value1: '价格升序',
                value2: '',
                value3: '',
                option1: [
                    {text: '价格升序', value: 'asc'},
                    {text: '价格降序', value: 'desc'},
                ],
                option2: [
                    {text: '全国', value: ''},
                    {text: '本省', value: 'hprovince'},
                    {text: '本市', value: 'hcity'},
                ],
                option3: [
                    {text: '全部', value: ''},
                    {text: '豪华型', value: '豪华型'},
                    {text: '经济型', value: '经济型'},
                ],
                orderArr:{
                    hpriceorder:'',
                    hpositionorder:'',
                    htypeorder:''
                },
                //搜索条件的数据
                listSearch:{
                    hname:'',
                    hprovince:'',
                    hcity:'',
                },
                hotelData:[],
                isPullrefresh:false,
                isUpper:false,
                isfinished:false,
                paginate:{
                    page:0,
                    limit:5,
                },
                total:0
            };
        },
        methods:{
            // initListData(){
            //     let parmas=Object.assign({},this.listSearch,this.orderArr);
            //     apiList(parmas).then(res=>{
            //         console.log(res);
            //         this.hotelData=res.data.map(ele=>{
            //             ele.himgurl=IMGURL+ele.himgurl;
            //             return ele;
            //         });
            //     }).catch(error=>{
            //         console.log("数据获取失败");
            //         console.log(error);
            //     })
            // },
            onPullRefresh(){
                this.isPullrefresh=false;
            },
            handleUpper(){
                console.log(this.isUpper);
                this.paginate.page++;
                let obj=Object.assign({},this.paginate,this.listSearch,this.orderArr);
                console.log(obj);
                apiList(obj).then(res=>{
                    if(res.data){
                        !this.total && (this.total = res.total);
                        let data=res.data.map(ele=>{
                            ele.himgurl=IMGURL+ele.himgurl;
                            return ele;
                        })
                        this.hotelData=this.hotelData.concat(data);
                        if(this.hotelData.length >= this.total){
                            this.isfinished=true;
                        }
                        this.isUpper=false;
                        console.log(this.isUpper);
                    }else {
                        this.$toast({
                            message:"暂无数据"
                        })
                    }

                }).catch(error=>{
                    console.log(error);
                })
            },
            onorderChange(){
                this.orderArr.hpriceorder=this.value1,
                this.orderArr.hpositionorder=this.value2,
                this.orderArr.htypeorder=this.value3,
                this.hotelData=[];
                this.paginate.page=0;
                this.handleUpper();
            },
            handlelistSearch(value){
                this.listSearch.hname=value;
                this.hotelData=[];
                this.paginate.page=0;
                this.handleUpper();
            }
        },
        watch:{

        }
    }
</script>

<style>
    .van-dropdown-menu__bar{
        box-shadow: none;
    }
    .van-ellipsis{
        font-size: 24px;
    }
</style>

<style scoped>
    .search-title{
        width: 656px;
        height: 100px;
        margin: 0 auto;
        margin-top: 88px;
        text-align: center;
        font-family: "苹方 粗体";
        font-weight: bold;
        color: rgba(0,0,0,0.8);
        font-size: 34px;
        line-height: 100px;
    }
    .leftimg{
        width: 192px;
        height: 188px;
    }
    .search-input{
        margin-left: 71px;
    }
    .search-bar{
        width: 100%;
        height: 63px;
        padding: 74px 47px;
        box-sizing: border-box;
        display: flex;
        justify-content: space-between;
    }
    .bgmask{
        display: inline-block;
        width: 134px;
        height: 63px;
        border-radius: 32px;
        text-align: center;
        font-family: "PingFang SC";
        font-size: 24px;
        color: #666666;
        line-height: 63px;
    }
    .bgactive{
        background: #4f5766;
        color: #ffffff;
    }
    .bgmask img {
        height: 5px;
        width: 10px;
        margin-left: 23px;
    }
    .choose{
        width: 472px;
        height: 63px;
        margin-top: -10px;
    }
</style>