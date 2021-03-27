import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

new Vue({
    render: h => h(App),
}).$mount('#app')

window.onload = () => {
    if (document.documentElement.clientWidth > 500) {
        window.alert("请使用手机打开，以保证预览效果")
    }
}
