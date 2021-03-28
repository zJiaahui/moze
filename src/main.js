import Vue from 'vue'
import App from './App.vue'
import router from "./router"
import store from "./store"

Vue.config.productionTip = false

new Vue({
    store,
    router,
    render: h => h(App),
}).$mount('#app')

window.onload = () => {
    if (document.documentElement.clientWidth > 500) {
        window.alert("请使用手机打开，以保证预览效果")
    }
}
