(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0c8d68"],{"571a":function(t,a,e){"use strict";e.r(a);var r=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"container py-5"},[e("NavTabs"),e("h1",{staticClass:"mt-5"},[t._v("人氣餐廳")]),e("hr"),t._l(t.topRestaurants,(function(t){return e("RestaurantsTopCard",{key:t.id,attrs:{"initial-restaurant":t}})}))],2)},n=[],s=e("1da1"),i=(e("96cf"),e("8bb1")),c=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"card mb-3",staticStyle:{"max-width":"540px",margin:"auto"}},[e("div",{staticClass:"row no-gutters"},[e("div",{staticClass:"col-md-4"},[e("a",{attrs:{href:"#"}},[e("img",{staticClass:"card-img",attrs:{"mflickr.co":"",src:t.restaurant.image}})])]),e("div",{staticClass:"col-md-8"},[e("div",{staticClass:"card-body"},[e("h5",{staticClass:"card-title"},[t._v(t._s(t.restaurant.name))]),e("span",{staticClass:"badge badge-secondary"},[t._v("收藏數："+t._s(t.restaurant.FavoriteCount))]),e("p",{staticClass:"card-text"},[t._v(" "+t._s(t.restaurant.description)+" ")]),e("a",{staticClass:"btn btn-primary mr-2",attrs:{href:"#"}},[t._v("Show")]),t.restaurant.isFavorited?e("button",{staticClass:"btn btn-danger mr-2",attrs:{type:"button"},on:{click:function(a){return a.preventDefault(),a.stopPropagation(),t.deleteFavorite(t.restaurant.id)}}},[t._v(" 移除最愛 ")]):e("button",{staticClass:"btn btn-primary",attrs:{type:"button"},on:{click:function(a){return a.preventDefault(),a.stopPropagation(),t.addFavorite(t.restaurant.id)}}},[t._v(" 加到最愛 ")])])])])])},o=[],u=e("5530"),l=e("4cce"),d=e("c968"),p={props:{initialRestaurant:{type:Object,required:!0}},data:function(){return{restaurant:this.initialRestaurant}},methods:{addFavorite:function(t){var a=this;return Object(s["a"])(regeneratorRuntime.mark((function e(){var r,n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,l["a"].addFavorite({restaurantId:t});case 3:if(r=e.sent,n=r.data,console.log("data",n),"success"===n.status){e.next=8;break}throw new Error(n.message);case 8:a.restaurant=Object(u["a"])(Object(u["a"])({},a.restaurant),{},{isFavorited:!0,FavoriteCount:a.restaurant.FavoriteCount+1}),e.next=14;break;case 11:e.prev=11,e.t0=e["catch"](0),d["a"].fire({icon:"error",title:"無法將餐廳加入最愛，請稍後再試"});case 14:case"end":return e.stop()}}),e,null,[[0,11]])})))()},deleteFavorite:function(t){var a=this;return Object(s["a"])(regeneratorRuntime.mark((function e(){var r,n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,l["a"].deleteFavorite({restaurantId:t});case 3:if(r=e.sent,n=r.data,console.log("data",n),"success"===n.status){e.next=8;break}throw new Error(n.message);case 8:a.restaurant=Object(u["a"])(Object(u["a"])({},a.restaurant),{},{isFavorited:!1,FavoriteCount:a.restaurant.FavoriteCount-1}),e.next=14;break;case 11:e.prev=11,e.t0=e["catch"](0),d["a"].fire({icon:"error",title:"無法將餐廳移除最愛，請稍後再試"});case 14:case"end":return e.stop()}}),e,null,[[0,11]])})))()}}},v=p,b=e("2877"),f=Object(b["a"])(v,c,o,!1,null,null,null),h=f.exports,m=e("c4c3"),g={components:{NavTabs:i["a"],RestaurantsTopCard:h},data:function(){return{topRestaurants:[]}},created:function(){this.fetchTopRestaurants()},methods:{fetchTopRestaurants:function(){var t=this;return Object(s["a"])(regeneratorRuntime.mark((function a(){var e,r;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,m["a"].getRestaurantsTop();case 3:e=a.sent,r=e.data,console.log(r),t.topRestaurants=r.restaurants,a.next=12;break;case 9:a.prev=9,a.t0=a["catch"](0),d["a"].fire({icon:"error",title:"無法顯示人氣餐廳，請稍後再試"});case 12:case"end":return a.stop()}}),a,null,[[0,9]])})))()}}},w=g,C=Object(b["a"])(w,r,n,!1,null,null,null);a["default"]=C.exports}}]);
//# sourceMappingURL=chunk-2d0c8d68.9a0cbc8d.js.map