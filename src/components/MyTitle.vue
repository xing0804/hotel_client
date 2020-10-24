<template>
    <div class="room-title">
        <div class="room-arrow" @click="back">
            <img src="../assets/imgs/room/jiantou.png" alt="" class="arrow-img" />
        </div>
        <span class="title-word"><slot name="text"></slot></span>
    </div>
</template>

<script>
    export default {
        name: "MyTitle",
        methods:{
            back(){
                this.$router.go(-1);
            }
        }
    }
</script>

<style scoped>
    .room-title {
        width: 100%;
        margin-top: 80px;
        text-align: center;
        box-sizing: border-box;
    }
    .room-title .room-arrow{
        height: 21px;
        width: 12px;
        float: left;
    }
    .room-title .room-arrow img{
        height: 21px;
        width: 12px;
    }
    .room-title .title-word{
        font-family: PingFang-SC-Bold;
        font-size: 34px;
        color: rgba(0,0,0,.8);
        display: inline-block;
    }
</style>