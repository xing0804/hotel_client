<template>
    <div class="box">
        <span class="box-left"><slot name="left"></slot></span>
        <span class="box-center"><slot name="center"></slot></span>
    </div>
</template>

<script>
    export default {
        name: "TopTitle"
    }
</script>

<style scoped>
.box{
    width: 638px;
    height: 100px;
    margin: 0 auto;
    /*text-align: center;*/
    margin-top: 88px;
}
    .box .box-left{
        display: inline-block;
        width: 16px;
        height: 16px;
    }
    .box .box-center{
        display: inline-block;
        font-family: "苹方 粗体";
        font-weight: bold;
        font-size: 34px;
        /*margin-left: 246px;*/
        letter-spacing: 2px;
        line-height: 100px;
        margin-left: 66px;
    }
</style>