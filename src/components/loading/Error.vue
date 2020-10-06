<template>
    <div class="background" v-if="isShow">
        <div class="error-box">
            <img src="../../static/img/wangluo.png" alt="" class="error-img">
            <span>网络迷路了 快点找回吧</span>
            <button class="error-btn">网络诊断</button>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Error",
        props:{
            isShow:{
                default:false,
            }
        }
    }
</script>

<style scoped>
    .background{
        position: fixed;
        left: 0;
        top: 0;
        bottom: 0;
        right: 0;
        background-color:  rgba(250, 250, 250,0.9);
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 9999;
    }
    .error-box{
        width: 574px;
        height: 410px;
        background: rgba(255,255,255,1);
        border-radius: 15px;
        position: relative;
    }
    .error-img{
        width: 120px;
        height: 120px;
        position: absolute;
        left: 50%;
        margin-left: -60px;
        margin-top: -60px;
    }
    .error-box span{
        position: absolute;
        left: 50%;
        top:165px;
        transform: translate(-50%,-50%);
        width: 100%;
        text-align: center;
        font-size: 32px;
        color: #474747;
    }
    .error-btn{
        position: absolute;
        width: 223px;
        height: 67px;
        left: 50%;
        bottom: 60px;
        transform: translate(-50%,-50%);
        border-radius: 34px;
        font-size: 32px;
        color:#ffffff;
        background-color: #e05c63;
        border: none;
    }
</style>