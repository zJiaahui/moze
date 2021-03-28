import Vue from "vue"
import vueX from "vuex"

Vue.use(vueX)

export default  new vueX.Store({
    state:{
        total:3000,//总额
        totalRevenue:1000,//总收入
        totalPay:500,//总支出

    },
    actions:{

    },
    mutations:{

    },
    getters:{
        totalK(e){
            return e.total/1000
        },
        totalRevenueK(e){
            return e.totalRevenue/1000
        },
        totalPayK(e){
            return e.totalPay/1000
        }
    }
})