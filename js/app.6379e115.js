(function(e){function t(t){for(var n,o,u=t[0],i=t[1],s=t[2],d=0,b=[];d<u.length;d++)o=u[d],Object.prototype.hasOwnProperty.call(c,o)&&c[o]&&b.push(c[o][0]),c[o]=0;for(n in i)Object.prototype.hasOwnProperty.call(i,n)&&(e[n]=i[n]);l&&l(t);while(b.length)b.shift()();return a.push.apply(a,s||[]),r()}function r(){for(var e,t=0;t<a.length;t++){for(var r=a[t],n=!0,u=1;u<r.length;u++){var i=r[u];0!==c[i]&&(n=!1)}n&&(a.splice(t--,1),e=o(o.s=r[0]))}return e}var n={},c={app:0},a=[];function o(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,o),r.l=!0,r.exports}o.m=e,o.c=n,o.d=function(e,t,r){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(o.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)o.d(r,n,function(t){return e[t]}.bind(null,n));return r},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/vue-product-cart/";var u=window["webpackJsonp"]=window["webpackJsonp"]||[],i=u.push.bind(u);u.push=t,u=u.slice();for(var s=0;s<u.length;s++)t(u[s]);var l=i;a.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("56d7")},"2bde":function(e,t,r){},3045:function(e,t,r){"use strict";r("f4fb")},"4ffb":function(e){e.exports=JSON.parse("{}")},5223:function(e,t,r){"use strict";r("cd57")},"56d7":function(e,t,r){"use strict";r.r(t);r("e260"),r("e6cf"),r("cca6"),r("a79d");var n=r("7a23");function c(e,t,r,c,a,o){var u=Object(n["p"])("v-header"),i=Object(n["p"])("grid");return Object(n["j"])(),Object(n["d"])("div",null,[Object(n["g"])(u),Object(n["g"])(i)])}r("5a8b"),r("b20f");var a=Object(n["w"])("data-v-5a8a6286");Object(n["l"])("data-v-5a8a6286");var o={class:"stat products"},u=Object(n["f"])(" Products in cart: "),i={class:"value"},s={class:"stat total-price"},l=Object(n["f"])(" Total price: "),d={class:"value"},b={key:0,class:"stat cart-empty"};Object(n["k"])();var p=a((function(e,t,r,c,a,p){return Object(n["j"])(),Object(n["d"])("header",null,[Object(n["g"])("div",o,[u,Object(n["g"])("span",i,Object(n["r"])(e.totalProducts),1)]),Object(n["g"])("div",s,[l,Object(n["g"])("span",d,Object(n["r"])(e.totalPrice)+" $",1)]),e.totalProducts?Object(n["e"])("",!0):(Object(n["j"])(),Object(n["d"])("div",b,"Cart is empty"))])})),f=r("5530"),v=r("5502"),j={name:"Header",computed:Object(f["a"])({},Object(v["b"])(["totalProducts","totalPrice"]))};r("a1d4");j.render=p,j.__scopeId="data-v-5a8a6286";var O=j,m=Object(n["w"])("data-v-35f19822");Object(n["l"])("data-v-35f19822");var g={key:0,class:"message msg-info transparent",ref:"msgInfo"},h={key:1,class:"grid"},w={key:1,class:"message msg-error fade-in"};Object(n["k"])();var y=m((function(e,t,r,c,a,o){var u=Object(n["p"])("product-cart");return e.error?(Object(n["j"])(),Object(n["d"])("div",w,Object(n["r"])(e.error),1)):(Object(n["j"])(),Object(n["d"])(n["a"],{key:0},[e.isLoading?(Object(n["j"])(),Object(n["d"])("div",g," Fetching data... ",512)):(Object(n["j"])(),Object(n["d"])("div",h,[(Object(n["j"])(!0),Object(n["d"])(n["a"],null,Object(n["o"])(e.products,(function(e,t){return Object(n["j"])(),Object(n["d"])("div",{class:"grid-cell",key:t},[Object(n["g"])(u,{cart:e},null,8,["cart"])])})),128))]))],64))})),P=(r("d3b7"),r("ac1f"),r("25f0"),r("5319"),r("96cf"),r("1da1")),x=Object(n["w"])("data-v-114c270e");Object(n["l"])("data-v-114c270e");var k={class:"cart"},R={class:"title"},_={class:"image"},L=Object(n["g"])("div",{class:"img-cover"},null,-1),S={class:"price"},T={class:"price-total"},A=Object(n["g"])("span",null,"Total:",-1);Object(n["k"])();var E=x((function(e,t,r,c,a,o){var u=Object(n["p"])("counter");return Object(n["j"])(),Object(n["d"])("div",k,[Object(n["g"])("div",R,Object(n["r"])(r.cart.title),1),Object(n["g"])("div",_,[Object(n["g"])("img",{src:r.cart.src},null,8,["src"]),L]),Object(n["g"])("div",S," Price: "+Object(n["r"])(r.cart.price)+"$ ",1),Object(n["g"])(u,{value:e.amount,max:r.cart.limit,onChange:c.change},null,8,["value","max","onChange"]),Object(n["g"])("div",T,[A,Object(n["g"])("span",null,Object(n["r"])(c.totalPrice)+" $",1)]),Object(n["g"])("div",{class:["reset-wrapper",{isActive:c.isResetActive}]},[Object(n["g"])("button",{class:"reset",onClick:t[1]||(t[1]=Object(n["v"])((function(){return c.reset.apply(c,arguments)}),["stop"])),disabled:!c.isResetActive},"Reset",8,["disabled"])],2)])})),M=Object(n["w"])("data-v-1cb481a8"),C=M((function(e,t,r,c,a,o){var u=Object(n["q"])("wheel");return Object(n["j"])(),Object(n["d"])("div",{class:["counter",{selected:r.value>0}]},[Object(n["g"])("button",{class:"decrease",onClick:t[1]||(t[1]=Object(n["v"])((function(){return c.decrease.apply(c,arguments)}),["stop"]))}),Object(n["u"])(Object(n["g"])("div",{class:["value",{maximum:r.value===r.max}]},Object(n["r"])(r.value),3),[[u,c.mouseWheelHandler]]),Object(n["g"])("button",{class:"increase",onClick:t[2]||(t[2]=Object(n["v"])((function(){return c.increase.apply(c,arguments)}),["stop"]))})],2)})),I=(r("a9e3"),{mounted:function(e,t){e.addEventListener("wheel",t.value.bind(this)),e.addEventListener("DOMMouseScroll",t.value.bind(this))}}),N={name:"counter",props:{min:{type:Number,default:0},max:{type:Number,default:0},value:{type:Number,default:0}},setup:function(e,t){var r=t.emit,n=function(){e.value>e.min&&r("change",e.value-1)},c=function(){(e.value<e.max||!e.max)&&r("change",e.value+1)},a=function(e){e.preventDefault(),e.stopPropagation();var t=e.deltaY||e.detail||e.wheelDelta;120===Math.abs(t)?t>0?c():n():t<0?c():n()};return{decrease:n,increase:c,mouseWheelHandler:a}},directives:{wheel:I}};r("3045");N.render=C,N.__scopeId="data-v-1cb481a8";var D=N,H={name:"cart",components:{counter:D},props:{cart:{type:Object,default:function(){}}},setup:function(e,t){var r=e.cart,c=Object(n["m"])({amount:0}),a=Object(v["c"])();return Object(f["a"])(Object(f["a"])({},Object(n["s"])(c)),{},{totalPrice:Object(n["b"])((function(){return r.price*c.amount})),isResetActive:Object(n["b"])((function(){return c.amount>0})),change:function(e){c.amount>e?a.commit("decreaseTotal",r.price):a.commit("increaseTotal",r.price),c.amount=e},reset:function(){a.commit("decreaseAmount",{amount:c.amount,price:r.price}),c.amount=0}})}};r("5223");H.render=E,H.__scopeId="data-v-114c270e";var J=H,$=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1e3;return new Promise((function(t){return setTimeout(t,e)}))},W=function(){var e=Object(P["a"])(regeneratorRuntime.mark((function e(t,r,n){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(e.t0=n,!e.t0){e.next=4;break}return e.next=4,$(n);case 4:return t.classList.add(r),e.abrupt("return",new Promise((function(e){var n=function n(){t.removeEventListener("transitionend",n),t.removeEventListener("animationend",n),t.classList.remove(r),e()};t.addEventListener("transitionend",n),t.addEventListener("animationend",n)})));case 6:case"end":return e.stop()}}),e)})));return function(t,r,n){return e.apply(this,arguments)}}(),q=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;return W(e,"fade-in",t)},F=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;return W(e,"fade-out",t)};var G={name:"Grid",components:{"product-cart":J},setup:function(){var e=Object(v["c"])(),t=Object(n["m"])({isLoading:!0,error:""}),r=Object(n["n"])(null);return Object(n["i"])(Object(P["a"])(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,q(r.value,250);case 2:r.value.classList.remove("transparent"),e.dispatch("fetchProducts").then(function(){var e=Object(P["a"])(regeneratorRuntime.mark((function e(n){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,F(r.value,500);case 2:t.isLoading=!1;case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),function(){var e=Object(P["a"])(regeneratorRuntime.mark((function e(n){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,F(r.value,500);case 2:t.error=n.toString().replace(/\"/,"");case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}());case 4:case"end":return n.stop()}}),n)})))),Object(f["a"])(Object(f["a"])({},Object(n["s"])(t)),{},{msgInfo:r})},computed:Object(f["a"])({},Object(v["b"])(["products"]))};r("ac27");G.render=y,G.__scopeId="data-v-35f19822";var U=G,Y={name:"App",components:{"v-header":O,grid:U}};Y.render=c;var z=Y,B=(r("3ca3"),r("841c"),r("ddb0"),r("2b3d"),r("4ffb"),"http://my-json-server.typicode.com/alexander-lyakhov/vue3-product-cart/products"),K=Object(v["a"])({state:{products:[],totalProducts:0,totalPrice:0},getters:{products:function(e){return e.products}},mutations:{setProducts:function(e,t){console.log("setProducts",t),e.products=t},decreaseTotal:function(e,t){e.totalProducts--,e.totalPrice-=+t},increaseTotal:function(e,t){e.totalProducts++,e.totalPrice+=+t},decreaseAmount:function(e,t){var r=t.amount,n=t.price;e.totalProducts-=r,e.totalPrice-=r*n},increaseAmount:function(e,t){var r=t.amount,n=t.price;e.totalProducts+=r,e.totalPrice+=r*n}},actions:{fetchProducts:function(e){return Object(P["a"])(regeneratorRuntime.mark((function t(){var r,n,c;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return r=e.commit,n=new URLSearchParams(location.search),"true"===n.get("forceError")&&(B=""),t.next=5,fetch(B);case 5:if(c=t.sent,c.ok){t.next=8;break}throw"Error: "+c.status;case 8:return t.t0=r,t.next=11,c.json();case 11:t.t1=t.sent,(0,t.t0)("setProducts",t.t1);case 13:case"end":return t.stop()}}),t)})))()}}});Object(n["c"])(z).use(K).mount("#app")},"5a8b":function(e,t,r){},a1d4:function(e,t,r){"use strict";r("e102")},ac27:function(e,t,r){"use strict";r("2bde")},b20f:function(e,t,r){},cd57:function(e,t,r){},e102:function(e,t,r){},f4fb:function(e,t,r){}});