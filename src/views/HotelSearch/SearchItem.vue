<template>
    <div class="list-item">
        <div class="left">
            <div class="list-item-img">
                <slot name="img"></slot>
            </div>
        </div>
        <div class="right">
            <span class="list-item-title">
                <slot name="title"></slot>
            </span>
            <div class="list-item-price">
                <span class="rmb">RMB</span>
                <span class="money">
                    <slot name="money"></slot>
                </span>
            </div>
            <div class="list-item-comment">
                <div class="like">
                    <span class="like-icon">
                        <img src="../../assets/imgs/喜欢.png" alt="">
                    </span>
                    <span class="like-count">
                        <slot name="like-count"></slot>
                    </span>
                </div>
                <div class="opinion">
                    <span class="opinion-icon">
                        <img src="../../assets/imgs/评论.png" alt="">
                    </span>
                    <span class="opinion-count">
                        <slot name="opinion-count"></slot>
                    </span>
                </div>
            </div>
        </div>
        <div class="line"></div>
    </div>
</template>

<script>
    export default {
        name: "SearchList"
    }
</script>

<style scoped>
    .list-item{
       width: 656px;
       height: 228px;
       padding-top: 42px;
        margin: 0 auto;
    }
    .left{
        display: inline-block;
        width: 192px;
        height: 188px;
    }
    .list-item-img{
        width: 192px;
        height: 188px;
        display: inline-block;
    }
    .right{
        display: inline-block;
        margin-left: 63px;
    }
    .list-item-title{
        font-family: "思源黑体 CN Medium";
        color: rgba(0,0,0,0.8);
        font-size: 32px;
        letter-spacing: 2px;
    }
    .list-item-price{
        margin-top: 50px;
    }
    .rmb{
        font-family: "苹方 粗体";
        font-weight: bold;
        color: rgba(0,0,0,0.8);
        font-size: 20px;
    }
    .money{
        font-family: "苹方 粗体";
        font-weight: bold;
        color: rgba(0,0,0,0.8);
        font-size: 34px;
        display: inline-block;
        margin-left: 10px;
    }
    .list-item-comment{
        margin-top: 20px;
    }
    .like{
        display: inline-block;
    }
    .like .like-icon{
        width: 18px;
        height: 17px;
    }
    .like-icon img {
        width: 18px;
        height: 17px;
    }
    .like-count,.opinion-count{
        display: inline-block;
        margin-left: 10px;
        color: #e05c63;
        font-family: "思源黑体 CN Medium";
        font-size: 20px;
    }
    .opinion{
        display: inline-block;
        margin-left: 50px;
    }
    .opinion-icon{
        width: 20px;
        height: 18px;
    }
    .opinion-icon img{
        width: 20px;
        height: 18px;
    }
    .line{
        width: 100%;
        height: 2px;
        background: #f7f7f7;
        margin-top: 38px;
    }
</style>