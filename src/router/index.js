import Vue from "vue"
import vueRouter from "vue-router"

Vue.use(vueRouter)
import layout from  "../layout"
export default new vueRouter({
    // mode: "history",
    routes: [
        {
            path: "",
            name: "layouts",
            redirect:"/total",
        },
        {
            path:"/total",
            component:layout,
            redirect:"/total/index",
            children:[
                {
                    path:"index",
                    component:()=>import("../views/total")
                }
            ]

        },
        {
            path:"/add",
            component:layout,
            redirect:"/add/index",
            children:[
                {
                    path:"index",
                    component:()=>import("../views/add")
                },
                {
                    path:"record",
                    component:()=>import("../views/addrecord")
                },

            ]

        },
        {
            path:"/chart",
            component:layout,
            redirect:"/chart/index",
            children:[
                {
                    path:"index",
                    component:()=>import("../views/chart")
                },

            ]

        }
    ]
})
