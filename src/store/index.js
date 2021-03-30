import Vue from "vue"
import vueX from "vuex"

Vue.use(vueX)

function getNowFormatDate() {
    let date = new Date();
    let billYear = date.getFullYear();
    let billMonth = date.getMonth() + 1;
    let billDate = date.getDate();
    return {billYear, billMonth, billDate};
}

export default new vueX.Store({
    state: {
        billCurrentDate: getNowFormatDate(),
        billRecordList: localStorage.billRecordList ? JSON.parse(localStorage.billRecordList) : [],
        eyeOpen: true,
        navActive: "total",
    },
    actions: {},
    mutations: {
        setEye(state) {
            state.eyeOpen = !state.eyeOpen

        },
        setNavActive(state, value) {
            state.navActive = value
        },
        setBillCurrentDate(state, value) {
            state.billCurrentDate = value
        },
        updateBillRecordList(state, recordItem) {
            state.billRecordList = state.billRecordList.concat(recordItem)
            localStorage.setItem('billRecordList',
                JSON.stringify(state.billRecordList));
        },
    },
    getters: {
        getMoney(state) {
            let totalBalance = 0;
            //总收入
            let totalRevenue = 0;
            //总支出
            let totalExpenditure = 0;

            state.billRecordList.forEach((item) => {
                if (item.billType == "支出") {
                    totalExpenditure += item.billMoney - 0
                } else if (item.billType == "收入") {
                    totalRevenue += item.billMoney - 0
                }

            })
            totalBalance = totalRevenue - totalExpenditure
            return {totalBalance, totalRevenue, totalExpenditure}
        },
        expenditureRerecordTop3(state) {
            let Expenditure = state.billRecordList.filter((item) => {
                return item.billType == "支出"
            })
            let expenditureRerecordTop3 = Expenditure.sort(function (a, b) {
                return  b.billMoney-a.billMoney
            })

            return expenditureRerecordTop3.slice(0,3)
        },
        revenueRerecordTop3(state) {
            let Revenue = state.billRecordList.filter((item) => {
                return item.billType == "收入"
            })
            let revenueRerecordTop3 = Revenue.sort(function (a, b) {
                return  b.billMoney-a.billMoney
            })
            return revenueRerecordTop3.slice(0,3)
        },

        expenditureRerecord(state) {
            let Expenditure = state.billRecordList.filter((item) => {
                return item.billType == "支出"
            })
            let expenditureRerecord = Expenditure.sort(function (a, b) {
                let itemb =b.billDate.split("-")
                let itema =a.billDate.split("-")

                return  new Date(itemb[0],itemb[1],itemb[2])- new Date(itema[0],itema[1],itema[2])
            })

            return expenditureRerecord
        },
        revenueRerecord(state) {
            let Revenue = state.billRecordList.filter((item) => {
                return item.billType == "收入"
            })
            let revenueRerecord = Revenue.sort(function (a, b) {
                let itemb =b.billDate.split("-")
                let itema =a.billDate.split("-")

                return  new Date(itemb[0],itemb[1],itemb[2])- new Date(itema[0],itema[1],itema[2])
            })
            return revenueRerecord
        }

    }
})