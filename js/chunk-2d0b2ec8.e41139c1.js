(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0b2ec8"],{"25d3":function(t,e,a){"use strict";a.r(e);var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container py-5"},[a("div",[a("h1",[t._v(t._s(t.restaurant.name))]),a("span",{staticClass:"badge badge-secondary mt-1 mb-3"},[t._v(" "+t._s(t.restaurant.Category.name)+" ")])]),a("hr"),a("ul",[a("li",[t._v("評論數： "+t._s(t.restaurant.Comments.length))]),a("li",[t._v("瀏覽次數： "+t._s(t.restaurant.viewCounts))])]),a("button",{staticClass:"btn btn-link",attrs:{type:"button"},on:{click:function(e){return t.$router.back()}}},[t._v(" 回上一頁 ")])])},n=[],s=a("1da1"),c=(a("96cf"),a("c4c3")),u=a("c968"),o={data:function(){return{restaurant:""}},created:function(){var t=this.$route.params.id;this.fetchDashboard(t)},methods:{fetchDashboard:function(t){var e=this;return Object(s["a"])(regeneratorRuntime.mark((function a(){var r,n;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,c["a"].getRestaurant({restaurantId:t});case 3:r=a.sent,n=r.data,console.log("data: ",n),e.restaurant=n.restaurant,a.next=12;break;case 9:a.prev=9,a.t0=a["catch"](0),u["a"].fire({icon:"error",title:"無法取得Dashboard，請稍後再試"});case 12:case"end":return a.stop()}}),a,null,[[0,9]])})))()}}},i=o,l=a("2877"),d=Object(l["a"])(i,r,n,!1,null,null,null);e["default"]=d.exports}}]);
//# sourceMappingURL=chunk-2d0b2ec8.e41139c1.js.map