<template>
    <div class="app">
        <div class="login-body">
            <div class="login-title" >
                <div class="login-title-login" @click="loginbtn" ref="loginbtn">登录
                    <div class="login-title-login-img" ref="loginimg"></div>
                </div>
                <div class="login-title-img"></div>
                <div class="login-title-register" @click="registerbtn" ref="registerbtn">注册
                    <div class="login-title-register-img" ref="registerimg"></div>
                </div>
            </div>
            <login-lo :is-show="loginshow" @getloading="getloading"></login-lo>
            <login-re :is-show="registershow" @getloading="getloading" :loginbtn="loginbtn"></login-re>
        </div>
        <div class="bottom">
            <div class="bottom-title">
                <div class="bottom-line"></div>
                <div class="bottom-title-text">欢迎使用第三方登录</div>
                <div class="bottom-line"></div>
            </div>
            <div class="bottom-icon">
                <img src="../assets/imgs/login/weixin.png" alt="" class="bottom-icon-size">
                <img src="../assets/imgs/login/QQ.png" alt="" class="bottom-icon-size">
                <img src="../assets/imgs/login/weibo.png" alt="" class="bottom-icon-size">
            </div>
        </div>

        <loading :is-show="loadingshow"></loading>
        <error :is-show="errorshow"></error>
    </div>
</template>

<script>
    import LoginLo from "./loginbody/LoginLo";
    import LoginRe from "./loginbody/LoginRe";
    import Loading from "../components/loading/Loading"
    import Error from "../components/loading/Error"

    export default {
        name:"Login",
        data(){
            return{
                loginshow:true,
                registershow:false,
                loadingshow:false,
                errorshow:false,
            }
        },
        components:{
            LoginLo,
            LoginRe,
            Loading,
            Error,
        },
        methods:{
            loginbtn(){
                this.loginshow=true;
                this.registershow=false,
                this.$refs.loginbtn.style="color: #e05c63";
                this.$refs.loginimg.style="display:block"
                this.$refs.registerbtn.style="color:#b2b2b2";
                this.$refs.registerimg.style="display:none";
            },
            registerbtn(){
                this.registershow=true;
                this.loginshow=false,
                this.$refs.registerbtn.style="color:#e05c63";
                this.$refs.registerimg.style="display:block"
                this.$refs.loginbtn.style="color:#b2b2b2";
                this.$refs.loginimg.style="display:none";
            },
            getloading(showloading){
                this.loadingshow=showloading;
                setTimeout(()=>{
                    this.loadingshow=false;
                },2000)//删除
            },
            geterror(showerror){
                this.errorshow=showerror;
                setTimeout(()=>{
                    this.errorshow=false;
                },2000)//删除
            }

        }
    }

</script>

<style scoped>
    .app{
        position: relative;
        background: url("../assets/imgs/login/body.png") 0 0 no-repeat;
        background-size: 100%;
        padding: 10px 0;
    }
    .login-body{
        width: 638px;
        position: relative;
        margin-top: 454px;
        margin-left: 56px;
        border-radius: 10px;
        background: #ffffff;;
        box-shadow: 0px 0px 1px rgb(176, 177, 177);
        padding: 70px 0px;
        box-sizing: border-box;
    }
    .login-title{
        width: 287px;
        margin-top: 22px;
        margin-left: 175px;
        box-sizing: border-box;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
    }
    .login-title-login{
        font-family: PingFang-SC-Bold;
        font-size: 33px;
        color: #e05c63;
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    .login-title-login-img{
        margin-top: 10px;
        width: 37px;
        height: 7px;
        background-color: #e05c63;
        border-radius: 3px;
    }
    .login-title-register-img{
        margin-top: 10px;
        width: 37px;
        height: 7px;
        background-color: #e05c63;
        border-radius: 3px;
        display: none;
    }
    .login-title-img{
        width: 2px;
        height: 24px;
        background-color: #000000;
        border-radius: 1px;
        margin-top: 10px;
    }
    .login-title-register{
        font-family: PingFang-SC-Bold;
        font-size: 33px;
        color: #b2b2b2;
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .bottom{
        width: 100%;
        padding: 55px 94px 0px 94px;
        box-sizing: border-box;
        margin-bottom: 135px;
    }
    .bottom-title{
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
    }
    .bottom-line{
        width: 117px;
        height: 1px;
        border: solid 1px #dddddd;
        opacity: 0.2;
    }
    .bottom-title-text{
        font-size: 31px;
        color: #7f7f7f;
    }
    .bottom-icon{
        margin-top: 72px;
        width: 100%;
        padding: 0 68px;
        box-sizing: border-box;
        display: flex;
        flex-direction: row;
        justify-content:space-between;
        align-items: center;
    }
    .bottom-icon-size{
        width: 72px;
        height: 72px;
    }

</style>