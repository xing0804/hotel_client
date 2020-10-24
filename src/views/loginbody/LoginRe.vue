<template>
    <div class="register-text-body" v-if="isShow">
        <form :model="registerData">
            <input type="text" ref="user" class="forminput user" name="user" placeholder="请输入您的手机号" AUTOCOMPLETE="off" v-model="registerData.phone" @blur="phoneBlur">
            <div class="register-code">
                <input type="text" ref="code" class="forminputcode code" name="code" placeholder="请输入验证码" AUTOCOMPLETE="off" v-model="registerData.code" @blur="codeBlur">
                <button class="codebtn" v-show="!countdown" type="button" @click="getCode">验证码</button>
                <button class="codebtn" disabled="disabled" v-show="countdown" >{{countdown}}s后重新发送</button>
            </div>
            <input type="text" ref="user" class="forminput password" name="password" placeholder="请您输入密码" AUTOCOMPLETE="off" v-model="registerData.password" @blur="passwordBlur">
            <input type="text" ref="user" class="forminput password" name="Tpassword" placeholder="请再次确认您的密码" AUTOCOMPLETE="off" v-model="registerData.Tpassword" @blur="passwordBlur2">
            <div class="login-text-redirect">
                <div class="login-text-link">
                    <div class="blue-circular"></div>
                    <input type="checkbox" name="remmberpass">
                    <label style="margin-left: 10px">记住密码</label>
                </div>
                <div class="login-text-link">
                    <div class="blue-circular"></div>
                    <router-link to="">已有密码,立即登录</router-link>
                </div>
            </div>
            <button class="login-button" @click="handleRegister" type="button">注册</button>
            <div class="radio">
                <van-checkbox v-model="registerData.picked" icon-size="18px"></van-checkbox>
                <label class="radio-text">我已阅读并同意《网站隐私保护条款》</label>
            </div>
        </form>
    </div>
</template>
<script>
    import {Toast} from "vant";
    import {apiRegister} from "../../http/api";
    export default {
        name: "LoginRe",
        props:{
            isShow:{
                type:Boolean,
                default:false,
            }
        },
        data(){
            return{
                registerData:{
                    phone:'',
                    code:'',
                    password:'',
                    Tpassword:'',
                    picked:true,
                },
                countdown:0
            }
        },
        methods:{
            phoneBlur(){
                if(!this.registerData.phone){
                    Toast("手机号必填")
                }
            },
            codeBlur(){
                if(!this.registerData.code){
                    Toast("验证码必填")
                }
            },
            passwordBlur(){
                if(!this.registerData.password){
                    Toast("密码必填")
                }
            },
            passwordBlur2(){
                if(!this.registerData.Tpassword){
                    Toast("请再次输入密码")
                }
            },
            getCode(){
                if(!this.countdown){
                    this.countdown=60;
                    let t = setInterval(()=>{
                        if(this.countdown>0){
                            this.countdown--;
                        }else {
                            clearInterval(t);
                            this.countdown=0;
                        }
                    },1000);
                }
            },
            handleRegister(){
                if(!this.registerData.picked){
                    Toast({
                        message: '您还未同意使用协议',
                        position: 'bottom',
                    });
                    return;
                }
                if(!this.registerData.phone){
                    Toast("手机号必填");
                    return;
                }
                if(!this.registerData.code){
                    Toast("验证码必填");
                    return;
                }
                if(!this.registerData.password){
                    Toast("密码必填");
                    return;
                }
                if(!this.registerData.Tpassword){
                    Toast("请再次输入密码");
                    return;
                }
                if(this.registerData.password !== this.registerData.Tpassword){
                    Toast("两次输入密码不相同！");
                    return;
                }
                let params={"phone":this.registerData.phone,"password":this.registerData.password};
                apiRegister(params).then(res=>{
                    Toast(res.msg);
                    if(res.code==200){
                        console.log(1);
                        this.$emit("loginbtn");
                    }
                }).catch(error=>{
                    console.log(error);
                })
            },

        }
    }
</script>

<style scoped>
    .register-text-body{
        margin-top: 90px;
        width: 100%;
        padding: 0 38px;
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
    .register-code{
        width: 100%;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        margin-bottom: 60px;
    }
    .forminputcode{
        width: 65%;
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

    }
    .code{
        background: url("../../assets/imgs/login/yanzhengma.png") 44px 28px no-repeat;
        background-size:26px 29px;
        box-shadow: 0px 10px 29px 14px
        rgba(232, 232, 232, 0.6);
    }
    .codebtn{
        width: 185px;
        height: 55px;
        background-color: #2d3442;
        border-radius: 28px;
        opacity: 0.85;
        font-size: 20px;
        color: #e3e4e5;
        border: none;
        margin-left: 10px;
    }
    .password{
        background: url("../../assets/imgs/login/suo.png") 44px 28px no-repeat;
        background-size:26px 29px;
        box-shadow: 0px 10px 29px 14px
        rgba(232, 232, 232, 0.6);
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
    .login-text-link a,label,input{
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
    .radio{
        margin-top: 40px;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .radio-text{
        font-size: 22px;
        color: #cacaca;
        margin-left: 25px;
    }
</style>