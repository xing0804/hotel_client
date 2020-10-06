<template>
    <div>
        <div class="search-title">酒店搜索</div>
        <search placeholder="主人，快来搜索您的房源吧~" dian-style="background: #e05c63" class="search-input"></search>
        <div class="search-bar">
            <div class="bgmask bgactive">
                <span>综合</span>
            </div>
            <van-dropdown-menu class="choose">
                <van-dropdown-item v-model="value1" :options="option1" />
                <van-dropdown-item v-model="value2" :options="option2" />
                <van-dropdown-item v-model="value3" :options="option3" />
            </van-dropdown-menu>
<!--            <div class="bgmask">-->
<!--                <span>价格</span>-->
<!--                <img src="../../assets/imgs/倒三角.png" alt="">-->
<!--            </div>-->
<!--            <div class="bgmask">-->
<!--                <span>位置</span>-->
<!--                <img src="../../assets/imgs/倒三角.png" alt="">-->
<!--            </div>-->
<!--            <div class="bgmask">-->
<!--                <span>筛选</span>-->
<!--                <img src="../../assets/imgs/倒三角.png" alt="">-->
<!--            </div>-->
        </div>
        <div class="search-list">
            <search-item>
                <template v-slot:img>
                    <img src="../../assets/imgs/1.png" alt="" class="leftimg">
                </template>
                <template v-slot:title>
                    锦江之星·经济型·平阳路
                </template>
                <template v-slot:money>
                    136.00
                </template>
                <template v-slot:like-count>
                    412
                </template>
                <template v-slot:opinion-count>
                    3315
                </template>
            </search-item>
            <search-item>
                <template v-slot:img>
                    <img src="../../assets/imgs/2.png" alt="" class="leftimg">
                </template>
                <template v-slot:title>
                    锦江之星·经济型·平阳路
                </template>
                <template v-slot:money>
                    136.00
                </template>
                <template v-slot:like-count>
                    412
                </template>
                <template v-slot:opinion-count>
                    3315
                </template>
            </search-item>
            <search-item>
                <template v-slot:img>
                    <img src="../../assets/imgs/3.png" alt="" class="leftimg">
                </template>
                <template v-slot:title>
                    锦江之星·经济型·平阳路
                </template>
                <template v-slot:money>
                    136.00
                </template>
                <template v-slot:like-count>
                    412
                </template>
                <template v-slot:opinion-count>
                    3315
                </template>
            </search-item>
            <search-item>
                <template v-slot:img>
                    <img src="../../assets/imgs/4.png" alt="" class="leftimg">
                </template>
                <template v-slot:title>
                    锦江之星·经济型·平阳路
                </template>
                <template v-slot:money>
                    136.00
                </template>
                <template v-slot:like-count>
                    412
                </template>
                <template v-slot:opinion-count>
                    3315
                </template>
            </search-item>
        </div>
        <tab-bar-main></tab-bar-main>
    </div>
</template>

<script>
    import SearchItem from "./SearchItem";
    import Search from "../../components/search/Search";
    import TabBarMain from "../TabBarMain";
    export default {
        name: "SearchList",
        components: {
            SearchItem,
            Search,
            TabBarMain
        },
        data() {
            return {
                value1: 0,
                value2: 'a',
                value3:'a',
                option1: [
                    {text: '价格', value: 0},
                    {text: '价格升序', value: 1},
                    {text: '价格降序', value: 2},
                ],
                option2: [
                    {text: '位置', value: 'a'},
                    {text: '本区', value: 'b'},
                    {text: '本市', value: 'c'},
                ],
                option3: [
                    {text: '筛选', value: 'a'},
                    {text: '销量排序', value: 'b'},
                    {text: '好评排序', value: 'c'},
                ],
            };
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
        width: 656px;
        height: 63px;
        margin: 0 auto;
        margin-top: 74px;
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