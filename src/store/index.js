import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
    //唯一的数据来源  state-->data
    state: {
        count: 0
    },
    //getters-->computed
    getters:{

    },
    //mutations-->用来修改state的唯一的方法(同步)
    mutations: {
        increment (state) {
            state.count++
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