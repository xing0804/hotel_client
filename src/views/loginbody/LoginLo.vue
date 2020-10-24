<template>
        <div class="login-text-body" v-if="isShow">
            <form ref="loginForm">
                <input type="text" ref="user" class="forminput user" name="phone" placeholder="请输入您的手机号" AUTOCOMPLETE="off" @click="btnUser" v-model="loginForm.phone">
                <input type="password" ref="password" class="forminput password" name="password" placeholder="请输入您的密码" @click="btnPwd" v-show="!iscode" v-model="loginForm.password">
                <div>
                    <input type="text" ref="code" class="forminput password" name="code" placeholder="请输入验证码" @click="btnCode" v-show="iscode" v-model="loginForm.code">
<!--                    <button class="codebtn" v-show="!countdown" type="button" @click="getCode">验证码</button>-->
                </div>
                <div class="login-text-redirect">
                    <div class="login-text-link">
                        <div class="blue-circular"></div>
                        <router-link to="">忘记密码</router-link>
                    </div>
                    <div class="login-text-link">
                        <div class="blue-circular"></div>
                        <div @click="changePass">密码验证</div>
                    </div>
                    <div class="login-text-link">
                        <div class="blue-circular"></div>
                        <div @click="changeCode">短信验证</div>
                    </div>
                </div>
                <button class="login-button" @click.prevent="login">立即登录</button>
                <div class="login-problem">
                    <router-link to="">遇到问题</router-link>
                </div>
            </form>
        </div>
</template>

<script>
    export default {
        name: "LoginLo",
        data(){
          return {
            iscode:0,
              loginForm:{
                  phone:'',
                  password:'',
                  code:'1234'
              }
          }
        },
        props:{
            isShow:{
                default:true
            }
        },
        methods:{
            btnUser(){
                if(this.iscode){
                    this.$refs.code.style="box-shadow: 0 0 0 0";
                }else {
                    this.$refs.password.style="box-shadow: 0 0 0 0";
                }
                this.$refs.user.style="box-shadow: 0px 1.333vw 3.867vw 1.867vw rgba(232, 232, 232, 0.6);";
            },
            btnPwd(){
                this.$refs.user.style="box-shadow: 0 0 0 0";
                this.$refs.password.style="box-shadow: 0px 1.333vw 3.867vw 1.867vw rgba(232, 232, 232, 0.6);";
            },
            login(){
                this.$emit("getloading",true);
                setTimeout(()=>{
                    let redirect=this.$route.query.redirect || 'home';
                    let obj=Object.assign({},this.loginForm,{redirect})
                    this.$store.dispatch("handlerLogin",obj);
                },2000)

            },
            btnCode(){
                this.$refs.user.style="box-shadow: 0 0 0 0";
                this.$refs.code.style="box-shadow: 0px 1.333vw 3.867vw 1.867vw rgba(232, 232, 232, 0.6);";
            },
            changeCode(){
                this.iscode=1;
            },
            changePass(){
                this.iscode=0;
            }
        }
    }
</script>

<style scoped>

    .login-text-body{
        margin-top: 90px;
        padding: 0 38px;
        width: 100%;
        height: 524px;
        box-sizing: border-box;
    }
    .forminput{
        width: 100%;
        height: 80px;
        border-radius: 34px;
        border: none;
        font-family: PingFang-SC-Bold;
        font-size: 31px;
        font-weight: normal;
        font-stretch: normal;
        line-height: 4px;
        letter-spacing: 1px;
        padding: 0 10px 0 110px;
        box-sizing: border-box;
        margin-bottom: 60px;
    }
    .forminput:focus{
        outline: none;
        border: 1px solid #fff;
    }
    .user{
        background: url("../../assets/imgs/login/phone.png") 44px 18px no-repeat;
        background-size:25px 45px;
        box-shadow: 0px 10px 29px 14px
        rgba(232, 232, 232, 0.6);
    }
    .password{
        background: url("../../assets/imgs/login/suo.png") 44px 18px no-repeat;
        background-size:21px 28px;
        margin-bottom: 50px;
    }
    .login-text-redirect{
        margin-top: 0px;
        width: 100%;
        height: auto;
        padding: 0 36px;
        box-sizing: border-box;
        display: flex;
        justify-content: space-between;
    }
    .login-text-link{
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
    }
    .blue-circular{
        width: 8px;
        height: 9px;
        border-radius: 50%;
        background-color: #97f3d6;
        margin-right: 25px;
    }
    .login-text-linke a,div{
        text-decoration: none;
        color: #a3a3a3;
        -webkit-tap-highlight-color: transparent;
        font-size: 27px;
    }
    .login-button{
        width: 100%;
        height: 80px;
        border-radius: 39px;
        background: linear-gradient(#e05c63,#f96c73);
        margin-top: 65px;
        color:white;
        font-size: 33px;
        border: none;
    }
    .login-problem{
        margin-top: 34px;
        position: relative;
    }
    .login-problem a{
        position: absolute;
        right: 40px;
        text-decoration: none;
        color: #b2b2b2;
        font-size: 27px;
    }
</style>