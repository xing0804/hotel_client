<template>
    <div class="search" >
        <input type="text" :value="placeholder">
        <span :style="dianStyle"></span>
    </div>
</template>

<script>
    export default {
        name: "Search",
        props: {
            placeholder:{
                type:String,
                default:"快来搜索你喜欢的酒店吧"
            },
            dianStyle:{
                type: String,
                default: 'background: #c1c1c1;'
            }
        },
    }
</script>

<style lang="scss">
    .search{
        width: 520px;
        height: 61px;
        position: relative;
    }
    .search input{
        width: 520px;
        height: 61px;
        border: none;
        border-radius: 31px;
        font-family: "苹方 粗体";
        font-size: 26px;
        color: #999999;
        line-height: 61px;
        padding-left: 86px;
        letter-spacing: 1px;
        background-color: #fafafa;

    }
    .search span{
        display: block;
        width: 8px;
        height: 8px;
        border-radius: 50%;
        position: absolute;
        top:30px;
        left: 50px;
    }
</style>