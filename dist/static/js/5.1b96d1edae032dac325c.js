webpackJsonp([5],{778:function(a,t,s){function e(a){s(794)}var i=s(52)(s(785),s(804),e,"data-v-11f99aa4",null);a.exports=i.exports},785:function(a,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var e=s(366);t.default={name:"table",components:{},data:function(){return{isShow:!1,button1:"北京",wenli:"理科",info:null,total:100,currentPage:1,pageSize:20,columns1:[{title:"学校",key:"name"},{title:"双一流情况",key:"dc"},{title:"2020年分数",key:"s2020"},{title:"2019年分数",key:"s2019"},{title:"2018年分数",key:"s2018"},{title:"2017年分数",key:"s2017"},{title:"2016年分数",key:"s2016"}],data1:[]}},methods:{query:function(){var a=this;e.get("http://47.94.129.13:8081/query/"+this.button1+"/"+this.wenli+"/"+this.currentPage).then(function(t){a.info=t,a.isShow=!0,a.total=0,a.data1=[];for(var s=0;s<a.info.data.data.length;s++){var e={name:a.info.data.data[s].school,dc:a.info.data.data[s].doubleFirstClass,s2020:a.info.data.data[s].avg2020,s2019:a.info.data.data[s].avg2019,s2018:a.info.data.data[s].avg2018,s2017:a.info.data.data[s].avg2017,s2016:a.info.data.data[s].avg2016};a.data1.push(e)}a.total=a.info.data.total})},changePage:function(a){this.currentPage=a,this.data1=[],this.query()}}}},788:function(a,t,s){t=a.exports=s(772)(!0),t.push([a.i,".title[data-v-11f99aa4]{text-align:center}.select[data-v-11f99aa4]{margin:auto;width:50%;padding:20px}.select2[data-v-11f99aa4]{margin:auto;width:15%;padding:20px}.select3[data-v-11f99aa4]{margin:auto;width:12%;padding:20px}.pro[data-v-11f99aa4]{width:120px;height:60px;text-align:center}","",{version:3,sources:["C:/Users/wangkr/Desktop/Front/vue-admin-iview-master/src/components/pages/Score.vue"],names:[],mappings:"AACA,wBACE,iBAAmB,CACpB,AACD,yBACE,YAAa,AACb,UAAW,AACX,YAAc,CACf,AACD,0BACE,YAAa,AACb,UAAW,AACX,YAAc,CACf,AACD,0BACE,YAAa,AACb,UAAW,AACX,YAAc,CACf,AACD,sBACE,YAAa,AACb,YAAa,AACb,iBAAmB,CACpB",file:"Score.vue",sourcesContent:["\n.title[data-v-11f99aa4] {\n  text-align: center;\n}\n.select[data-v-11f99aa4]{\n  margin: auto;\n  width: 50%;\n  padding: 20px;\n}\n.select2[data-v-11f99aa4]{\n  margin: auto;\n  width: 15%;\n  padding: 20px;\n}\n.select3[data-v-11f99aa4]{\n  margin: auto;\n  width: 12%;\n  padding: 20px;\n}\n.pro[data-v-11f99aa4]{\n  width: 120px;\n  height: 60px;\n  text-align: center;\n}\n"],sourceRoot:""}])},794:function(a,t,s){var e=s(788);"string"==typeof e&&(e=[[a.i,e,""]]),e.locals&&(a.exports=e.locals);s(773)("26a68327",e,!0)},804:function(a,t){a.exports={render:function(){var a=this,t=a.$createElement,s=a._self._c||t;return s("div",{staticClass:"table"},[s("br"),a._v(" "),s("h1",{staticClass:"title"},[a._v("考生选择地区以及文/理科")]),a._v(" "),s("div",{staticClass:"select"},[s("RadioGroup",{staticClass:"RadioGroup",attrs:{type:"button",size:"large"},model:{value:a.button1,callback:function(t){a.button1=t},expression:"button1"}},[s("Radio",{staticClass:"pro",attrs:{label:"北京"}}),a._v(" "),s("Radio",{staticClass:"pro",attrs:{label:"安徽"}}),a._v(" "),s("Radio",{staticClass:"pro",attrs:{label:"重庆"}}),a._v(" "),s("Radio",{staticClass:"pro",attrs:{label:"福建"}}),a._v(" "),s("Radio",{staticClass:"pro",attrs:{label:"甘肃"}}),a._v(" "),s("br"),a._v(" "),s("Radio",{staticClass:"pro",attrs:{label:"广东"}}),a._v(" "),s("Radio",{staticClass:"pro",attrs:{label:"广西"}}),a._v(" "),s("Radio",{staticClass:"pro",attrs:{label:"贵州"}}),a._v(" "),s("Radio",{staticClass:"pro",attrs:{label:"海南"}}),a._v(" "),s("Radio",{staticClass:"pro",attrs:{label:"河北"}}),a._v(" "),s("br"),a._v(" "),s("Radio",{staticClass:"pro",attrs:{label:"河南"}}),a._v(" "),s("Radio",{staticClass:"pro",attrs:{label:"黑龙江"}}),a._v(" "),s("Radio",{staticClass:"pro",attrs:{label:"湖北"}}),a._v(" "),s("Radio",{staticClass:"pro",attrs:{label:"湖南"}}),a._v(" "),s("Radio",{staticClass:"pro",attrs:{label:"吉林"}}),a._v(" "),s("br"),a._v(" "),s("Radio",{staticClass:"pro",attrs:{label:"江苏"}}),a._v(" "),s("Radio",{staticClass:"pro",attrs:{label:"江西"}}),a._v(" "),s("Radio",{staticClass:"pro",attrs:{label:"辽宁"}}),a._v(" "),s("Radio",{staticClass:"pro",attrs:{label:"内蒙古"}}),a._v(" "),s("Radio",{staticClass:"pro",attrs:{label:"宁夏"}}),a._v(" "),s("br"),a._v(" "),s("Radio",{staticClass:"pro",attrs:{label:"青海"}}),a._v(" "),s("Radio",{staticClass:"pro",attrs:{label:"山东"}}),a._v(" "),s("Radio",{staticClass:"pro",attrs:{label:"山西"}}),a._v(" "),s("Radio",{staticClass:"pro",attrs:{label:"陕西"}}),a._v(" "),s("Radio",{staticClass:"pro",attrs:{label:"四川"}}),a._v(" "),s("br"),a._v(" "),s("Radio",{staticClass:"pro",attrs:{label:"天津"}}),a._v(" "),s("Radio",{staticClass:"pro",attrs:{label:"西藏"}}),a._v(" "),s("Radio",{staticClass:"pro",attrs:{label:"新疆"}}),a._v(" "),s("Radio",{staticClass:"pro",attrs:{label:"云南"}})],1)],1),a._v(" "),s("div",{staticClass:"select2"},[s("RadioGroup",{attrs:{size:"large"},model:{value:a.wenli,callback:function(t){a.wenli=t},expression:"wenli"}},[s("Radio",{staticClass:"wl",attrs:{label:"理科"}}),a._v(" "),s("Radio",{attrs:{label:"文科"}})],1)],1),a._v(" "),s("div",{staticClass:"select3"},[s("Button",{attrs:{type:"primary",icon:"ios-search"},on:{click:function(t){a.query()}}},[a._v("查询")])],1),a._v(" "),s("br"),a._v(" "),s("br"),a._v(" "),a.isShow?s("div",[s("Table",{attrs:{columns:a.columns1,data:a.data1}}),a._v(" "),s("Page",{attrs:{total:a.total,current:a.currentPage,"page-size":a.pageSize},on:{"on-change":a.changePage}})],1):a._e()])},staticRenderFns:[]}}});
//# sourceMappingURL=5.1b96d1edae032dac325c.js.map