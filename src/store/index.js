import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

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
        }
    },
    //getters-->computed
    getters:{

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
        }
    },
    //actions  (异步方法),提交mutations
    actions:{

    },
    //modules
    modules:{

    }
})

export default store;