(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0f0f7f"],{"9f40":function(e,t,c){"use strict";c.r(t);var a=c("7a23"),o=Object(a["createVNode"])("h2",{class:"pt-4 text-light"},"完成付款",-1),r={class:"w-100 w-lg-75 mx-auto"},s=Object(a["createStaticVNode"])('<div class="bg-light p-3 pb-1 my-3"><figure class="text-center mx-auto"><img class="img-fluid" src="https://storage.googleapis.com/vue-course-api.appspot.com/leolee/1626638328976.png?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&amp;Expires=1742169600&amp;Signature=AEobiA3PaimJxUH05FoodErufJ6jRC%2FB4onnCbutqk6Bfz%2Fx44GFznWSgS9VkIcCfxnSjyTwZrLzlt381TiyA0y6Y4xWcpG1X7A6TugycKo5A8Fr1JvDqKuVN%2BdZ4RxfUuISY3XNv1IeHR0m5NQ7%2Fvhz40kLaWOqGTpsmWf3auj6A8XW%2Bu%2Ff0yysBIjh0Jrp8k1Vkm6tsd8D%2FCGNsjNyRWJiLnXIeeEhPYC0Sg4KQMsZFQZ%2FP2GXqqzWVSunhoUCzOU9YTTXl1FrBL1Ox%2BLr01VAy9rOgbcuVewi3bD%2FfO1Y9sqwjyJ%2FPRzS1Wue7HM2fuEayy0PkgEa9cU4mbSuow%3D%3D" alt="step5 完成付款"></figure></div><div class="row justify-content-center mt-3 mt-md-5"><div class="col-12"><div class="bg-opacity p-3"><figure class="text-center mb-0"><img class="img-fluid" src="https://storage.googleapis.com/vue-course-api.appspot.com/leolee/1626638342417.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&amp;Expires=1742169600&amp;Signature=Maw1O1uTdEaQxIy4SGx94PD9%2BpFPIyMp9KQz4aoFLDegnoZjY5N2oXJQhiDXL8Gil%2Bv9lwHuolwLB1YtDz%2FvXUh7F%2BLDdGKFoGErOkiQt7MC752YmiSIusbtSo9RH6Lg5RJtBWuMAatNExBb1yvn3GeOi2auBkAZ5wAcB%2BXSdpw%2BudYxsLl8wEETMpuRQXn3Qnr%2FlMWABHZV0wantAA3OXeLZms1I0Nb%2BuNLqgZzCDjxWqO8uxeFzuOOYm5ttlIBubi1KJwwYzxGbot7GDJkew%2Fm9XCoXhhhFSbAR6LA658s520sZ96jVb2fsF%2F5ILLXh6zwPdb0S%2FNwUDwXUYZ36g%3D%3D" alt="謝謝您的購買"></figure></div></div></div>',2),l={class:"row justify-content-center mt-3 mt-md-5"},i={class:"col-12"},d={class:"bg-opacity p-3"},n={class:"w-100"},b={class:"mb-4 text-center"},u=Object(a["createTextVNode"])(" 您的訂單編號為："),p=Object(a["createVNode"])("br",null,null,-1),O={class:"fs-6 fs-sm-4 text-danger fw-bold"},j=Object(a["createVNode"])("hr",null,null,-1),g=Object(a["createVNode"])("h3",{class:"text-center mb-4"},"購買品項",-1),m={class:"p-table table align-middle mx-auto mb-5"},f=Object(a["createVNode"])("thead",{class:"p-table__foot"},[Object(a["createVNode"])("tr",{class:"text-light"},[Object(a["createVNode"])("th",{width:"40%",class:"text-center fs-7 fs-sm-6"},"商品"),Object(a["createVNode"])("th",{class:"p-table__th--num text-center fs-7 fs-sm-6"}," 數量 ")])],-1),N={class:"p-table__body"},h={class:"d-sm-flex align-items-center"},V={class:"ps-2"},x={class:"badge bg-nobeta"},w={class:"fs-7 fs-sm-6"},y={class:"text-center"},v={class:"p-table__head"},F={class:"text-light"},B=Object(a["createVNode"])("td",{class:"text-end"},"總計",-1),k={class:"text-center"},S={class:"mt-auto d-flex justify-content-between w-100"},D=Object(a["createTextVNode"])("繼續購物"),A=Object(a["createTextVNode"])("回首頁");function z(e,t,c,z,L,X){var E=Object(a["resolveComponent"])("router-link");return Object(a["openBlock"])(),Object(a["createBlock"])(a["Fragment"],null,[o,Object(a["createVNode"])("div",r,[s,Object(a["createVNode"])("div",l,[Object(a["createVNode"])("div",i,[Object(a["createVNode"])("div",d,[Object(a["createVNode"])("div",n,[Object(a["createVNode"])("h3",b,[u,p,Object(a["createVNode"])("span",O,Object(a["toDisplayString"])(this.order.id),1)]),j,g,Object(a["createVNode"])("table",m,[f,Object(a["createVNode"])("tbody",N,[(Object(a["openBlock"])(!0),Object(a["createBlock"])(a["Fragment"],null,Object(a["renderList"])(L.order.products,(function(e){return Object(a["openBlock"])(),Object(a["createBlock"])("tr",{key:e},[Object(a["createVNode"])("td",null,[Object(a["createVNode"])("figure",h,[Object(a["createVNode"])("img",{class:"product-img",src:e.product.imageUrl,alt:e.product.title},null,8,["src","alt"]),Object(a["createVNode"])("figcaption",V,[Object(a["createVNode"])("span",x,Object(a["toDisplayString"])(e.product.category),1),Object(a["createVNode"])("p",w,Object(a["toDisplayString"])(e.product.title),1)])])]),Object(a["createVNode"])("td",y,Object(a["toDisplayString"])(e.qty),1)])})),128))]),Object(a["createVNode"])("tfoot",v,[Object(a["createVNode"])("tr",F,[B,Object(a["createVNode"])("td",k,Object(a["toDisplayString"])(e.$filters.currency(L.order.total))+" NTD ",1)])])])]),Object(a["createVNode"])("div",S,[Object(a["createVNode"])(E,{class:"btn btn-nobeta",to:"/products"},{default:Object(a["withCtx"])((function(){return[D]})),_:1}),Object(a["createVNode"])(E,{class:"btn btn-nobeta",to:"/"},{default:Object(a["withCtx"])((function(){return[A]})),_:1})])])])])])],64)}c("99af");var L={data:function(){return{order:{}}},methods:{showErrorAlert:function(e){this.$swal({title:e,icon:"error"})},getOrder:function(){var e=this,t=this.$route.params.id,c="".concat("https://vue3-course-api.hexschool.io/","api/").concat("leolee","/order/").concat(t);this.$http.get(c).then((function(t){e.order=t.data.order})).catch((function(t){e.showErrorAlert(t)}))}},mounted:function(){this.getOrder()}};L.render=z;t["default"]=L}}]);
//# sourceMappingURL=chunk-2d0f0f7f.53cb8eb9.js.map