(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-4402d622"],{"02ae":function(t,e,a){},"2d03":function(t,e,a){},"8fc0":function(t,e,a){"use strict";a("02ae")},ca33:function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("header-bar",{attrs:{title:"账户总览"}},[a("icon",{attrs:{slot:"h-left",name:this.eyeOpen?"eye-open":"eye-close"},on:{click:t.handleClick},slot:"h-left"})],1),a("div",{staticClass:"total-panel"},[t._m(0),a("div",{staticClass:"total-panel-number"},[t.eyeOpen?[t._v(" "+t._s(t.formatTotal(t.getMoney.totalBalance))+"￥ ")]:[t._v(" 身家过亿 ")]],2)]),a("e-chart",{attrs:{totalPay:t.getMoney.totalExpenditure,totalRevenue:t.getMoney.totalRevenue,total:t.getMoney.totalBalance}}),t._m(1)],1)},o=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"total-panel-title"},[a("span",{staticClass:"total-label"},[t._v("余 额")]),a("span",{staticClass:"title-cny"},[t._v("CNY")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"type"},[a("span",{staticClass:"pay"},[a("span",{staticClass:"pay-yuan"}),t._v("总支出")]),a("span",{staticClass:"balance"},[a("span",{staticClass:"balance-yuan"}),t._v("总余额")]),a("span",{staticClass:"earning"},[a("span",{staticClass:"earning-yuan"}),t._v("总收入")])])}],r=a("5530"),s=a("ac62"),l=a("2c37"),i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"main"}})},c=[],u=(a("a9e3"),a("22b4")),f=a("1be7"),d=a("4cb5"),b=a("9394"),m=a("2da7"),p=a("4b2a"),h=a("f95e");u["a"]([b["a"],m["a"],p["a"],d["a"],h["a"]]);var y={name:"index",props:{total:{type:Number,default:0},totalRevenue:{type:Number,default:0},totalPay:{type:Number,default:0}},mounted:function(){this.drawLine(this.total,this.totalRevenue,this.totalPay)},methods:{drawLine:function(t,e,a){var n=f["b"](document.getElementById("main"));n.setOption({backgroundColor:"#353445",title:{text:""},tooltip:{},grid:{left:"6%",right:"6%",top:"8%",bottom:"10%",containLabel:!0},xAxis:{data:["金额"],axisTick:{show:!1},axisLabel:{show:!1}},yAxis:{type:"value",splitLine:{show:!1},axisLabel:{formatter:function(e,a){if(e>0)return e>=1e3&&e<1e4?e/1e3+"k":e>=1e4&&e<1e8?e/1e4+"w":t>=1e8?e/1e8+"亿":e;var n=Math.abs(e);return n>=1e3&&n<1e4?n/1e3+"k":n>=1e4&&n<1e8?n/1e4+"w":t>=1e8?n/1e8+"亿":e}}},series:[{name:"支出",type:"bar",data:[a],emphasis:{focus:"series",itemStyle:{color:"rgba(179,92,98,1)"},label:{show:!0,formatter:"{c} 元"}},tooltip:{formatter:"{a}: {c} 元"},itemStyle:{normal:{color:function(t){var e=["rgba(179,92,98,0.5)","#E67716","#FBC300","#11440f","#32585a","#00ff77"];return e[t.dataIndex]},borderColor:"rgba(188, 79, 79, 1)",borderWidth:1}}},{name:"余额",type:"bar",data:[t],itemStyle:{normal:{color:function(t){var e=["rgba(252,132,82,0.4)","#FBC300","#11440f","#32585a","#00ff77"];return e[t.dataIndex]},borderColor:"rgba(262,138,2,1)",borderWidth:1}},emphasis:{focus:"series",itemStyle:{color:"rgba(252,132,82,0.6)"},label:{show:!0,formatter:"{c} 元"}},tooltip:{formatter:"{a}: {c} 元"}},{name:"收入",type:"bar",data:[e],itemStyle:{normal:{color:function(t){var e=["rgba(103,138,74,0.5)","#11440f","#32585a","#00ff77"];return e[t.dataIndex]},borderColor:"rgba(150,183,102, 1)",borderWidth:1}},emphasis:{focus:"series",itemStyle:{color:"rgba(103,138,74,1)"},label:{show:!0,formatter:"{c} 元"}},tooltip:{formatter:"{a}: {c} 元"}}]})}}},v=y,C=(a("8fc0"),a("2877")),g=Object(C["a"])(v,i,c,!1,null,"507b63a6",null),_=g.exports,w=a("2f62"),x={name:"total",data:function(){return{}},computed:Object(r["a"])(Object(r["a"])({},Object(w["d"])(["eyeOpen"])),Object(w["b"])(["getMoney"])),components:{headerBar:l["a"],icon:s["a"],eChart:_},created:function(){},methods:{handleClick:function(){this.$store.commit("setEye")},formatTotal:function(t){return t>=1e6&&t<1e8?t/1e4+"w":t>=1e8?t/1e8+"亿":t}}},k=x,O=(a("d47e"),Object(C["a"])(k,n,o,!1,null,"04baffce",null));e["default"]=O.exports},d47e:function(t,e,a){"use strict";a("2d03")}}]);
//# sourceMappingURL=chunk-4402d622.9bb7eb74.js.map