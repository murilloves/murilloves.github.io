_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[82],{"5PlV":function(e,t,r){"use strict";r.d(t,"c",(function(){return a})),r.d(t,"b",(function(){return s})),r.d(t,"a",(function(){return i}));var n=r("9UV2"),o=r.n(n);function a(e,t){return Math.floor(Math.random()*(t-e))+e}function s(e){return"".concat(o.a.formatMoney(e,"",1,",",".").replace(/\.00$/g,""),"%")}function i(e){return o.a.formatMoney(e,"",2,",",".").replace(/\.00$/g,"")}},"9UV2":function(e,t,r){!function(r,n){var o={version:"0.4.1",settings:{currency:{symbol:"$",format:"%s%v",decimal:".",thousand:",",precision:2,grouping:3},number:{precision:0,grouping:3,thousand:",",decimal:"."}}},a=Array.prototype.map,s=Array.isArray,i=Object.prototype.toString;function c(e){return!!(""===e||e&&e.charCodeAt&&e.substr)}function l(e){return s?s(e):"[object Array]"===i.call(e)}function u(e){return e&&"[object Object]"===i.call(e)}function f(e,t){var r;for(r in e=e||{},t=t||{})t.hasOwnProperty(r)&&null==e[r]&&(e[r]=t[r]);return e}function p(e,t,r){var n,o,s=[];if(!e)return s;if(a&&e.map===a)return e.map(t,r);for(n=0,o=e.length;n<o;n++)s[n]=t.call(r,e[n],n,e);return s}function m(e,t){return e=Math.round(Math.abs(e)),isNaN(e)?t:e}function d(e){var t=o.settings.currency.format;return"function"===typeof e&&(e=e()),c(e)&&e.match("%v")?{pos:e,neg:e.replace("-","").replace("%v","-%v"),zero:e}:e&&e.pos&&e.pos.match("%v")?e:c(t)?o.settings.currency.format={pos:t,neg:t.replace("%v","-%v"),zero:t}:t}var b=o.unformat=o.parse=function(e,t){if(l(e))return p(e,(function(e){return b(e,t)}));if("number"===typeof(e=e||0))return e;t=t||o.settings.number.decimal;var r=new RegExp("[^0-9-"+t+"]",["g"]),n=parseFloat((""+e).replace(/\((.*)\)/,"-$1").replace(r,"").replace(t,"."));return isNaN(n)?0:n},g=o.toFixed=function(e,t){t=m(t,o.settings.number.precision);var r=Math.pow(10,t);return(Math.round(o.unformat(e)*r)/r).toFixed(t)},h=o.formatNumber=o.format=function(e,t,r,n){if(l(e))return p(e,(function(e){return h(e,t,r,n)}));e=b(e);var a=f(u(t)?t:{precision:t,thousand:r,decimal:n},o.settings.number),s=m(a.precision),i=e<0?"-":"",c=parseInt(g(Math.abs(e||0),s),10)+"",d=c.length>3?c.length%3:0;return i+(d?c.substr(0,d)+a.thousand:"")+c.substr(d).replace(/(\d{3})(?=\d)/g,"$1"+a.thousand)+(s?a.decimal+g(Math.abs(e),s).split(".")[1]:"")},v=o.formatMoney=function(e,t,r,n,a,s){if(l(e))return p(e,(function(e){return v(e,t,r,n,a,s)}));e=b(e);var i=f(u(t)?t:{symbol:t,precision:r,thousand:n,decimal:a,format:s},o.settings.currency),c=d(i.format);return(e>0?c.pos:e<0?c.neg:c.zero).replace("%s",i.symbol).replace("%v",h(Math.abs(e),m(i.precision),i.thousand,i.decimal))};o.formatColumn=function(e,t,r,n,a,s){if(!e)return[];var i=f(u(t)?t:{symbol:t,precision:r,thousand:n,decimal:a,format:s},o.settings.currency),g=d(i.format),v=g.pos.indexOf("%s")<g.pos.indexOf("%v"),w=0,y=p(e,(function(e,t){if(l(e))return o.formatColumn(e,i);var r=((e=b(e))>0?g.pos:e<0?g.neg:g.zero).replace("%s",i.symbol).replace("%v",h(Math.abs(e),m(i.precision),i.thousand,i.decimal));return r.length>w&&(w=r.length),r}));return p(y,(function(e,t){return c(e)&&e.length<w?v?e.replace(i.symbol,i.symbol+new Array(w-e.length+1).join(" ")):new Array(w-e.length+1).join(" ")+e:e}))},e.exports&&(t=e.exports=o),t.accounting=o}()},BX6w:function(e,t,r){"use strict";var n=r("q1tI"),o=r.n(n).a.createElement;t.a=function(e){var t=e.title,r=e.description;return o("div",{className:"flex flex-col mb-4 widget-title w-full"},o("div",{className:"title text-base font-base font-bold font-poppins"},t),o("div",{className:"description text-sm"},r))}},L4s6:function(e,t,r){"use strict";var n=r("q1tI"),o=r.n(n).a.createElement;t.a=function(e){var t=e.title,r=e.subtitle;return o("div",{className:"flex flex-col py-4 mb-4"},o("h1",{className:"text-lg text-default font-bold font-poppins"},t),o("h2",{className:"text-sm text-secondary"},r))}},S3rm:function(e,t,r){"use strict";r.r(t);var n=r("q1tI"),o=r.n(n),a=r("aArQ"),s=r("hxb0"),i=r("L4s6"),c=r("bJdc"),l=r("5PlV"),u=r("gWdR"),f=o.a.createElement,p=["gray","red","orange","yellow","green","teal","blue","indigo","purple","pink"],m=[{width:30,color:"red"},{width:20,color:"blue"},{width:50,color:"green"}];t.default=Object(s.a)((function(){return f(a.a,null,f(i.a,{title:"UI Elements",subtitle:"Progress bars"}),f(u.a,{title:"Default progress bars",description:f("span",null,"Use the ",f("code",null,"<ProgressBar />")," component for simple progress bars")},f("div",{className:"flex flex-col"},p.map((function(e,t){return f("div",{className:"mb-4",key:t},f(c.a,{width:Object(l.c)(30,70),color:e}))})))),f(u.a,{title:"Progress bars with text",description:f("span",null,"Use the ",f("code",null,"<ProgressBarWithText />")," component for progress bars with text inside")},f("div",{className:"flex flex-col"},p.map((function(e,t){return f("div",{className:"mb-4",key:t},f(c.c,{width:Object(l.c)(30,70),color:e}))})))),f(u.a,{title:"Combined progress bars",description:f("span",null,"Use the ",f("code",null,"<ProgressBarMultiple />")," component for multiple combined progress bars with text inside")},f("div",{className:"flex flex-col"},f("div",{className:"w-1/2"},f(c.b,{items:m})))))}))},gWdR:function(e,t,r){"use strict";var n=r("q1tI"),o=r.n(n),a=r("BX6w"),s=o.a.createElement;t.a=function(e){var t=e.title,r=e.description,n=e.right,o=void 0===n?null:n,i=e.children;return s("div",{className:"w-full p-4 shadow mb-4 widget overflow-x-auto"},o?s("div",{className:"flex flex-row items-center justify-between mb-4"},s(a.a,{title:t,description:r}),o):s(a.a,{title:t,description:r}),i)}},zkm3:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/ui-elements/progress-bars",function(){return r("S3rm")}])}},[["zkm3",0,2,1,3,4,5,6]]]);