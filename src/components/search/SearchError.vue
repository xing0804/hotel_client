<template>
    <div class="searcherror">
        <div class="errorimg">
            <img src="../../assets/imgs/zhifeiji.png" alt="">
        </div>
        <p class="errortext"><slot name="errortext"></slot></p>
    </div>
</template>

<script>
    export default {
        name: "SearchError"
    }
</script>

<style scoped>
.searcherror{
    width: 100%;
    padding: 0 57px;
    box-sizing: border-box;
    margin-top: 100px;
}
    .errorimg{
        width: 100px;
        height: 100px;
        margin: 0 auto;
    }
    .errorimg img{
        width: 100px;
        height: 100px;
    }
    .errortext{
        text-align: center;
        font-size: 30px;
        font-family: "苹方 粗体";
        color: rgba(0,0,0,.5);
        margin-top: 30px;
    }
</style>