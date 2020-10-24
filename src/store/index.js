import Vue from 'vue'
import Vuex from 'vuex'
import {apiLogin} from "../http/api";
import router from "../router";
import {Toast} from "vant";
import VuexPersistence from 'vuex-persist'

Vue.use(Vuex)

const vuexLocal = new VuexPersistence({
    storage: window.sessionStorage
})

const store = new Vuex.Store({
    //唯一的数据来源  state-->data
    state: {
        indexSearch:{
            city:"太原",
            area:"小店区",
            startTime:'5.16',
            endTime:'5.19',
            startDay:'Mon',
            endDay:'Wed',
            dayCount:3
        },
        token:'',
        collection:[],
        orderStatus:0
    },
    //getters-->computed
    getters:{
        isCollection:(state)=>(id)=>{
            let flag=false;
            if(state.collection.length){
                flag=state.collection.some(value => value==id);
            }
            return flag;
        }
    },
    //mutations-->用来修改state的唯一的方法(同步)
    mutations: {
        getTime(state,payload){
            let {startTime,endTime,startDay,endDay,dayCount}=payload;
            // let date=new Date();
            // startTime = startTime?startTime:date.getMonth()+1+'.'+date.getDate();
            // endTime = endTime?endTime:date.getMonth()+1+'.'+date.getDate() + 2;
            state.indexSearch.startTime=startTime;
            state.indexSearch.endTime=endTime;
            state.indexSearch.startDay=startDay;
            state.indexSearch.endDay=endDay;
            state.indexSearch.dayCount=dayCount;
        },
        setCity(state,payload){
            state.indexSearch.city=payload.city;
            state.indexSearch.area=payload.area;
        },
        setToken(state,payload){
            state.token=payload;
        },
        setCollection(state,payload){
            state.collection=payload;
        },
        //切换收藏状态
        toggleCollection(state,hid){
            let flag=state.collection.indexOf(hid*1);
            if(flag > -1){
                state.collection.splice(flag,1);
            }else {
                state.collection.push(hid*1);
            }
        },
        //修改订单状态
        setStatus(state,payload){
            state.orderStatus=payload;
        }
    },
    //actions  (异步方法),提交mutations
    actions:{
        handlerLogin(context,payload){
            let redirect=payload.redirect;
            delete payload.redirect;
            apiLogin(payload).then(res=>{
                context.commit("setToken",res.token);

                if(res.udata['collection']){
                    let collection = res.udata['collection'].split(',').map(ele=>ele*1);
                    context.commit("setCollection",collection);
                }
                router.replace({name:redirect,query:{uid:res.udata['uid']}}).catch(()=>{});
            }).catch(error=>{
                console.log(error);
                Toast("手机号或密码错误！");
            })

        }
    },
    //modules
    modules:{

    },
    plugins: [vuexLocal.plugin]
})

export default store;