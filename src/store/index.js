import Vue from "vue"
import vueX from "vuex"

Vue.use(vueX)

export default  new vueX.Store({
    state:{
        total:10000000,//总额
        totalRevenue:1000000,//总收入
        totalPay:5000000,//总支出
        eyeOpen:true,
        navActive:"total"
    },
    actions:{

    },
    mutations:{
        setEye(state){
            state.eyeOpen=!state.eyeOpen

        },
        setNavActive(state,value){
            state.navActive=value
        }

    },
    getters:{

    }
})