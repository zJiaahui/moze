import Vue from "vue"
import vueX from "vuex"
Vue.use(vueX)
function  getNowFormatDate() {
    let date = new Date();
    let billYear = date.getFullYear();
    let billMonth = date.getMonth() + 1;
    let billDate = date.getDate();
    return {billYear,billMonth, billDate};
  }
export default  new vueX.Store({
    state:{
        billCurrentDate:getNowFormatDate(),
        billRecordList: localStorage.billRecordList?JSON.parse(localStorage.billRecordList):[],
        total:10000000,//总额
        totalRevenue:1000000,//总收入
        totalPay:5000000,//总支出
        eyeOpen:true,
        navActive:"total",
        selectedDate:""
    },
    actions:{

    },
    mutations:{
        setEye(state){
            state.eyeOpen=!state.eyeOpen

        },
        setNavActive(state,value){
            state.navActive=value
        },
        setBillCurrentDate(state,value){
            state.billCurrentDate=value
        },
        updateBillRecordList(state , recordItem){
            state.billRecordList = state.billRecordList.concat(recordItem)
            localStorage.setItem('billRecordList',
                JSON.stringify(state.billRecordList));
        },
    },
    getters:{

    }
})