_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[20],{L4s6:function(t,e,r){"use strict";var a=r("q1tI"),o=r.n(a).a.createElement;e.a=function(t){var e=t.title,r=t.subtitle;return o("div",{className:"flex flex-col py-4 mb-4"},o("h1",{className:"text-lg text-default font-bold font-poppins"},e),o("h2",{className:"text-sm text-secondary"},r))}},YP10:function(t,e,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/charts/bar",function(){return r("ke5L")}])},gWdR:function(t,e,r){"use strict";var a=r("q1tI"),o=r.n(a),c=r("BX6w"),n=o.a.createElement;e.a=function(t){var e=t.title,r=t.description,a=t.right,o=void 0===a?null:a,l=t.children;return n("div",{className:"w-full p-4 shadow mb-4 widget overflow-x-auto"},o?n("div",{className:"flex flex-row items-center justify-between mb-4"},n(c.a,{title:e,description:r}),o):n(c.a,{title:e,description:r}),l)}},ke5L:function(t,e,r){"use strict";r.r(e);var a=r("q1tI"),o=r.n(a),c=r("hxb0"),n=r("aArQ"),l=r("L4s6"),i=r("rePB"),b=r("/MKj"),s=r("UDbo"),d=r("Y+Wb"),u=r("5PlV"),p=o.a.createElement;function O(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,a)}return r}var y=function(t){var e=t.height,r=void 0===e?300:e,a=t.bgColor,o=void 0===a?"bg-red-400":a,c=t.borderColor,n=void 0===c?"bg-red-500":c,l=Object(b.d)((function(t){return{palettes:t.palettes,collapsed:t.collapsed,layout:t.layout}}),b.b),y=l.palettes,g=l.collapsed,j=l.layout,f=function(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?O(Object(r),!0).forEach((function(e){Object(i.a)(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):O(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}({},y).background,m=Object(d.b)(f),h="".concat(j,"-").concat(g,"-").concat(f),v=Array.from(Array(12).keys()).map((function(t){return Object(u.c)(50,100)})),x={display:!0,labels:{fontColor:m?Object(d.a)("text-gray-100"):Object(d.a)("text-gray-900"),boxWidth:10,fontSize:11}},k={animation:{duration:0},maintainAspectRatio:!1,layout:{padding:{left:10,right:10,top:10,bottom:10}},scales:{xAxes:[{ticks:{min:0,fontColor:m?Object(d.a)("text-gray-100"):Object(d.a)("text-gray-900")},gridLines:{color:"rgba(0, 0, 0, 0)"}}],yAxes:[{ticks:{fontColor:m?Object(d.a)("text-gray-100"):Object(d.a)("text-gray-900"),min:0,callback:function(t,e,r){return t}},gridLines:{color:"rgba(0, 0, 0, 0)"}}]}},w={labels:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],datasets:[{label:"Sales",backgroundColor:Object(d.a)(o),borderColor:Object(d.a)(n),borderWidth:1,data:v}]};return p("div",{style:{height:r}},p(s.Bar,{key:h,data:w,height:r,options:k,legend:x}))},g=r("KQm4");o.a.createElement;var j=o.a.createElement;function f(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,a)}return r}var m=function(t){var e=t.height,r=void 0===e?200:e,a=t.color1,o=void 0===a?"bg-pink-500":a,c=t.color2,n=void 0===c?"bg-blue-500":c,l=t.color3,p=void 0===l?"bg-teal-500":l,O=Object(b.d)((function(t){return{palettes:t.palettes,collapsed:t.collapsed,layout:t.layout}}),b.b),y=O.palettes,m=O.collapsed,h=O.layout,v=function(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?f(Object(r),!0).forEach((function(e){Object(i.a)(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):f(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}({},y).background,x=Object(d.b)(v),k="".concat(h,"-").concat(m,"-").concat(v),w=Array.from(Array(24).keys()).map((function(t){return Object(u.c)(50,100)})),A=Array.from(Array(24).keys()).map((function(t){return Object(u.c)(50,100)})),C=Array.from(Array(24).keys()).map((function(t){return Object(u.c)(50,100)})),P=[].concat(Object(g.a)(["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"].map((function(t){return"".concat(t," 2019")}))),Object(g.a)(["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"].map((function(t){return"".concat(t," 2020")})))),S={display:!0,position:"bottom",labels:{fontColor:x?Object(d.a)("text-gray-100"):Object(d.a)("text-gray-900"),boxWidth:10,fontSize:11}},D={tooltips:{mode:"index",intersect:!1},hover:{mode:"nearest",intersect:!0},animation:{duration:0},maintainAspectRatio:!1,layout:{padding:{left:10,right:10,top:10,bottom:10}},scales:{xAxes:[{stacked:!0,ticks:{fontColor:x?Object(d.a)("text-gray-100"):Object(d.a)("text-gray-900"),min:0,maxTicksLimit:10},gridLines:{drawBorder:!1,display:!1,color:"rgba(0, 0, 0, 0)"}}],yAxes:[{stacked:!0,ticks:{fontColor:x?Object(d.a)("text-gray-100"):Object(d.a)("text-gray-900"),min:0,maxTicksLimit:10},gridLines:{drawBorder:!1,display:!1,color:"rgba(0, 0, 0, 0)"}}]}},N={labels:P,datasets:[{label:"Sales",backgroundColor:Object(d.c)(Object(d.a)(o),1),borderColor:Object(d.c)(Object(d.a)(o),1),data:w},{label:"Conversions",backgroundColor:Object(d.c)(Object(d.a)(n),1),borderColor:Object(d.c)(Object(d.a)(n),1),data:A},{label:"Clicks",backgroundColor:Object(d.c)(Object(d.a)(p),1),borderColor:Object(d.c)(Object(d.a)(p),1),data:C}]};return j("div",{style:{height:r}},j(s.Bar,{key:k,data:N,height:r,options:D,legend:S}))},h=o.a.createElement;function v(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,a)}return r}var x=function(t){var e=t.height,r=void 0===e?200:e,a=t.color1,o=void 0===a?"bg-pink-500":a,c=t.color2,n=void 0===c?"bg-indigo-500":c,l=t.color3,p=void 0===l?"bg-teal-500":l,O=Object(b.d)((function(t){return{palettes:t.palettes,collapsed:t.collapsed,layout:t.layout}}),b.b),y=O.palettes,j=O.collapsed,f=O.layout,m=function(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?v(Object(r),!0).forEach((function(e){Object(i.a)(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):v(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}({},y).background,x=Object(d.b)(m),k="".concat(f,"-").concat(j,"-").concat(m),w=Array.from(Array(24).keys()).map((function(t){return Object(u.c)(50,100)})),A=Array.from(Array(24).keys()).map((function(t){return Object(u.c)(50,100)})),C=Array.from(Array(24).keys()).map((function(t){return Object(u.c)(50,100)})),P=[].concat(Object(g.a)(["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"].map((function(t){return"".concat(t," 2019")}))),Object(g.a)(["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"].map((function(t){return"".concat(t," 2020")})))),S={display:!0,labels:{fontColor:x?Object(d.a)("text-gray-100"):Object(d.a)("text-gray-900"),boxWidth:10,fontSize:11}},D={tooltips:{mode:"index",intersect:!1},hover:{mode:"nearest",intersect:!0},animation:{duration:0},maintainAspectRatio:!1,layout:{padding:{left:10,right:10,top:10,bottom:10}},scales:{xAxes:[{stacked:!1,ticks:{fontColor:x?Object(d.a)("text-gray-100"):Object(d.a)("text-gray-900"),min:0,maxTicksLimit:10},gridLines:{drawBorder:!1,display:!1,color:"rgba(0, 0, 0, 0)"}}],yAxes:[{stacked:!1,ticks:{fontColor:x?Object(d.a)("text-gray-100"):Object(d.a)("text-gray-900"),min:0,maxTicksLimit:10},gridLines:{drawBorder:!1,display:!1,color:"rgba(0, 0, 0, 0)"}}]}},N={labels:P,datasets:[{label:"Sales",backgroundColor:Object(d.c)(Object(d.a)(o),1),borderColor:Object(d.c)(Object(d.a)(o),1),data:w},{label:"Conversions",backgroundColor:Object(d.c)(Object(d.a)(n),1),borderColor:Object(d.c)(Object(d.a)(n),1),data:A},{label:"Clicks",backgroundColor:Object(d.c)(Object(d.a)(p),1),borderColor:Object(d.c)(Object(d.a)(p),1),data:C}]};return h("div",{style:{height:r}},h(s.Bar,{key:k,data:N,height:r,options:D,legend:S}))},k=o.a.createElement;function w(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,a)}return r}var A=function(t){var e=t.height,r=void 0===e?300:e,a=t.bgColor,o=void 0===a?"bg-red-400":a,c=t.borderColor,n=void 0===c?"bg-red-500":c,l=Object(b.d)((function(t){return{palettes:t.palettes,collapsed:t.collapsed,layout:t.layout}}),b.b),p=l.palettes,O=l.collapsed,y=l.layout,g=function(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?w(Object(r),!0).forEach((function(e){Object(i.a)(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):w(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}({},p).background,j=Object(d.b)(g),f="".concat(y,"-").concat(O,"-").concat(g),m=Array.from(Array(12).keys()).map((function(t){return Object(u.c)(50,100)})),h={display:!0,labels:{fontColor:j?Object(d.a)("text-gray-100"):Object(d.a)("text-gray-900"),boxWidth:10,fontSize:11}},v={animation:{duration:0},maintainAspectRatio:!1,layout:{padding:{left:10,right:10,top:10,bottom:10}},scales:{xAxes:[{ticks:{min:0,fontColor:j?Object(d.a)("text-gray-100"):Object(d.a)("text-gray-900")},gridLines:{color:"rgba(0, 0, 0, 0)"}}],yAxes:[{ticks:{fontColor:j?Object(d.a)("text-gray-100"):Object(d.a)("text-gray-900"),min:0,callback:function(t,e,r){return t}},gridLines:{color:"rgba(0, 0, 0, 0)"}}]}},x={labels:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],datasets:[{label:"Sales",backgroundColor:Object(d.a)(o),borderColor:Object(d.a)(n),borderWidth:1,data:m}]};return k("div",{style:{height:r}},k(s.HorizontalBar,{key:f,data:x,height:r,options:v,legend:h}))},C=o.a.createElement;function P(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,a)}return r}var S=function(t){var e=t.height,r=void 0===e?400:e,a=t.color1,o=void 0===a?"bg-pink-500":a,c=t.color2,n=void 0===c?"bg-indigo-500":c,l=t.color3,p=void 0===l?"bg-teal-500":l,O=Object(b.d)((function(t){return{palettes:t.palettes,collapsed:t.collapsed,layout:t.layout}}),b.b),y=O.palettes,j=O.collapsed,f=O.layout,m=function(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?P(Object(r),!0).forEach((function(e){Object(i.a)(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):P(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}({},y).background,h=Object(d.b)(m),v="".concat(f,"-").concat(j,"-").concat(m),x=Array.from(Array(12).keys()).map((function(t){return Object(u.c)(50,100)})),k=Array.from(Array(12).keys()).map((function(t){return Object(u.c)(50,100)})),w=Array.from(Array(12).keys()).map((function(t){return Object(u.c)(50,100)})),A=Object(g.a)(["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"].map((function(t){return"".concat(t," 2020")}))),S={display:!0,labels:{fontColor:h?Object(d.a)("text-gray-100"):Object(d.a)("text-gray-900"),boxWidth:10,fontSize:11}},D={tooltips:{mode:"index",intersect:!1},hover:{mode:"nearest",intersect:!0},animation:{duration:0},maintainAspectRatio:!1,layout:{padding:{left:10,right:10,top:10,bottom:10}},scales:{xAxes:[{stacked:!0,ticks:{fontColor:h?Object(d.a)("text-gray-100"):Object(d.a)("text-gray-900"),min:0},gridLines:{drawBorder:!1,display:!1,color:"rgba(0, 0, 0, 0)"}}],yAxes:[{stacked:!0,ticks:{fontColor:h?Object(d.a)("text-gray-100"):Object(d.a)("text-gray-900"),min:0},gridLines:{drawBorder:!1,display:!1,color:"rgba(0, 0, 0, 0)"}}]}},N={labels:A,datasets:[{label:"Sales",backgroundColor:Object(d.c)(Object(d.a)(o),1),borderColor:Object(d.c)(Object(d.a)(o),1),data:x},{label:"Conversions",backgroundColor:Object(d.c)(Object(d.a)(n),1),borderColor:Object(d.c)(Object(d.a)(n),1),data:k},{label:"Clicks",backgroundColor:Object(d.c)(Object(d.a)(p),1),borderColor:Object(d.c)(Object(d.a)(p),1),data:w}]};return C("div",{style:{height:r}},C(s.HorizontalBar,{key:v,data:N,height:r,options:D,legend:S}))},D=r("gWdR"),N=o.a.createElement;e.default=Object(c.a)((function(){return N(n.a,null,N(l.a,{title:"Charts",subtitle:"Bar charts"}),N("div",{className:"flex flex-col"},N("div",{className:"w-full"},N(D.a,{title:"Simple bar charts",description:N("span",null,"Use the following examples as starting points for simple bar charts")},N("div",{className:"w-full mb-4"},N(y,{height:200})),N("div",{className:"w-full mb-4"},N(x,null)))),N("div",{className:"w-full"},N(D.a,{title:"Stacked bar chart",description:N("span",null,"Use the following examples as starting points for stacked bar charts")},N(m,null))),N("div",{className:"w-full"},N(D.a,{title:"Horizontal bar chart",description:N("span",null,"Use the following examples as starting points for horizontal bar charts")},N("div",{className:"w-full mb-4"},N(A,null)),N("div",{className:"w-full mb-4"},N(S,null))))))}))}},[["YP10",0,2,8,10,1,3,4,5,6,9]]]);