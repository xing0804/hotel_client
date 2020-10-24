<template>
    <div class="box">
        <my-title>
            <template slot="text">
                我的收藏
            </template>
        </my-title>
        <div class="list">
            <search-error v-if="!(collection.length)">
                <template v-slot:errortext>
                    您还没有收藏酒店呦！
                </template>
            </search-error>
            <div v-if="collection.length">
                <van-card
                        v-for="(item,index) in collection"
                        :key="index"
                        :price="item.hprice"
                        :desc="item.haddress"
                        :title="item.hname"
                        :thumb="item.himgurl"
                >
                    <template #tags>
                        <van-tag plain type="danger" v-for="(tags,index1) in item.hlabel" :key="index1">{{tags}}</van-tag>
                    </template>
                    <template #footer>
                        <van-button size="mini">删除</van-button>
                        <van-button size="mini">查看</van-button>
                    </template>
                </van-card>
            </div>
        </div>


    </div>
</template>

<script>
    import {apiCollection} from "../../http/api";
    import {IMGURL} from "../../lib/base";
    import SearchError from "../../components/search/SearchError";
    import MyTitle from "../../components/MyTitle";

    export default {
        name: "collection",
        data(){
            return {
                collection:[],
            }
        },
        components:{
            SearchError,
            MyTitle
        },
        methods:{
            initCollection(){
                apiCollection().then(res=>{
                    console.log(res);
                    this.collection=res.data.map(ele=>{
                        ele.himgurl=IMGURL+ele.himgurl;
                        ele.hlabel=ele.hlabel.split(',');
                        return ele;
                    });
                    console.log(this.collection);
                }).catch(error=>{
                    error;
                })
            }
        },
        mounted() {
            this.initCollection();
        }
    }
</script>

<style scoped>
    .box{
        padding: 0 57px;
    }
    .list{
        margin-top: 50px;
    }
</style>