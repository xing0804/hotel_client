<template>
    <div class="background" v-if="isShow">
        <img src="../../assets/imgs/login/loading.png" alt="" class="loading-img">
        <span>Loading...</span>
    </div>
</template>

<script>
    export default {
        name: "Loading",
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
        flex-direction: column;
        justify-content: center;
        align-items: center;
        z-index: 999999;
    }
    .loading-img{
        width: 110px;
        height: 147px;
    }
    .background span{
        margin-top: 58px;
        font-size: 32px;
        letter-spacing: 1px;
        color: #9f9f9f;
        font-weight: 700;
    }
</style>