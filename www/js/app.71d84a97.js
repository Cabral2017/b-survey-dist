(function(e){function t(t){for(var n,o,i=t[0],u=t[1],s=t[2],l=0,f=[];l<i.length;l++)o=i[l],Object.prototype.hasOwnProperty.call(a,o)&&a[o]&&f.push(a[o][0]),a[o]=0;for(n in u)Object.prototype.hasOwnProperty.call(u,n)&&(e[n]=u[n]);p&&p(t);while(f.length)f.shift()();return c.push.apply(c,s||[]),r()}function r(){for(var e,t=0;t<c.length;t++){for(var r=c[t],n=!0,o=1;o<r.length;o++){var i=r[o];0!==a[i]&&(n=!1)}n&&(c.splice(t--,1),e=u(u.s=r[0]))}return e}var n={},o={1:0},a={1:0},c=[];function i(e){return u.p+"js/"+({}[e]||e)+"."+{2:"fabdbf9c",3:"d125b9b8",4:"e8418d9b"}[e]+".js"}function u(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,u),r.l=!0,r.exports}u.e=function(e){var t=[],r={2:1};o[e]?t.push(o[e]):0!==o[e]&&r[e]&&t.push(o[e]=new Promise((function(t,r){for(var n="css/"+({}[e]||e)+"."+{2:"fa4dc7f6",3:"31d6cfe0",4:"31d6cfe0"}[e]+".css",a=u.p+n,c=document.getElementsByTagName("link"),i=0;i<c.length;i++){var s=c[i],l=s.getAttribute("data-href")||s.getAttribute("href");if("stylesheet"===s.rel&&(l===n||l===a))return t()}var f=document.getElementsByTagName("style");for(i=0;i<f.length;i++){s=f[i],l=s.getAttribute("data-href");if(l===n||l===a)return t()}var p=document.createElement("link");p.rel="stylesheet",p.type="text/css",p.onload=t,p.onerror=function(t){var n=t&&t.target&&t.target.src||a,c=new Error("Loading CSS chunk "+e+" failed.\n("+n+")");c.code="CSS_CHUNK_LOAD_FAILED",c.request=n,delete o[e],p.parentNode.removeChild(p),r(c)},p.href=a;var d=document.getElementsByTagName("head")[0];d.appendChild(p)})).then((function(){o[e]=0})));var n=a[e];if(0!==n)if(n)t.push(n[2]);else{var c=new Promise((function(t,r){n=a[e]=[t,r]}));t.push(n[2]=c);var s,l=document.createElement("script");l.charset="utf-8",l.timeout=120,u.nc&&l.setAttribute("nonce",u.nc),l.src=i(e);var f=new Error;s=function(t){l.onerror=l.onload=null,clearTimeout(p);var r=a[e];if(0!==r){if(r){var n=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;f.message="Loading chunk "+e+" failed.\n("+n+": "+o+")",f.name="ChunkLoadError",f.type=n,f.request=o,r[1](f)}a[e]=void 0}};var p=setTimeout((function(){s({type:"timeout",target:l})}),12e4);l.onerror=l.onload=s,document.head.appendChild(l)}return Promise.all(t)},u.m=e,u.c=n,u.d=function(e,t,r){u.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},u.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(e,t){if(1&t&&(e=u(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(u.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)u.d(r,n,function(t){return e[t]}.bind(null,n));return r},u.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return u.d(t,"a",t),t},u.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},u.p="/",u.oe=function(e){throw console.error(e),e};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=t,s=s.slice();for(var f=0;f<s.length;f++)t(s[f]);var p=l;c.push([0,0]),r()})({0:function(e,t,r){e.exports=r("2f39")},"0047":function(e,t,r){},"2f39":function(e,t,r){"use strict";r.r(t);var n={};r.r(n),r.d(n,"getAnswer",(function(){return S}));var o={};r.r(o),r.d(o,"setAnswer",(function(){return j}));var a={};r.r(a),r.d(a,"someAction",(function(){return x}));r("e6cf"),r("5319"),r("7d6e"),r("e54f"),r("985d"),r("0047");var c=r("2b0e"),i=r("f476"),u=r("42d2"),s=r("b05d"),l=r("1b3f"),f=r("9c64"),p=r("18d6"),d=r("2a19"),h=r("f508"),m=r("436b");c["a"].use(s["a"],{config:{brand:{primary:"#f0932b",secondary:"#22a6b3",accent:"#f9ca24",positive:"#6ab04c",negative:"#eb4d4b",info:"#36b8cc",warning:"#f6c23e"}},lang:i["a"],iconSet:u["a"],plugins:{LoadingBar:l["a"],Meta:f["a"],LocalStorage:p["a"],Notify:d["a"],Loading:h["a"],Dialog:m["a"]}});var v=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"q-app"}},[r("router-view")],1)},b=[],g={name:"App"},y=g,w=r("2877"),_=Object(w["a"])(y,v,b,!1,null,null,null),P=_.exports,A=r("2f62"),O=function(){return{answer:{}}};function S(e){return e.answer}function j(e,t){e.answer=t}function x(e,t){e.commit("setAnswer",t)}var T={namespaced:!0,state:O,getters:n,mutations:o,actions:a};c["a"].use(A["a"]);var E=function(){const e=new A["a"].Store({modules:{survey:T},strict:!1});return e},I=r("8c4f");const C=[{path:"/:_id",component:()=>Promise.all([r.e(0),r.e(3)]).then(r.bind(null,"713b")),children:[{path:"",component:()=>Promise.all([r.e(0),r.e(2)]).then(r.bind(null,"e3ba"))}]},{path:"*",component:()=>Promise.all([r.e(0),r.e(4)]).then(r.bind(null,"e51e"))}];var L=C;c["a"].use(I["a"]);var k=function(){const e=new I["a"]({scrollBehavior:()=>({x:0,y:0}),routes:L,mode:"history",base:"/"});return e},N=async function(e){const t="function"===typeof E?await E({Vue:c["a"],ssrContext:e}):E,r="function"===typeof k?await k({Vue:c["a"],ssrContext:e,store:t}):k;t.$router=r;const n={router:r,store:t,render:e=>e(P)};return s["a"].ssrUpdate({app:n,ssr:e}),{app:n,store:t,router:r}};const{v4:B}=r("e144");var M=({Vue:e})=>{e.prototype.$userId=p["a"].getItem("userId")?p["a"].getItem("userId"):B()};r("c975");function R(e,t){const r=e?e.matched?e:t.resolve(e).route:t.currentRoute;return r?Array.prototype.concat.apply([],r.matched.map(e=>Object.keys(e.components).map(t=>{const r=e.components[t];return{path:e.path,c:r.options||r}}))):[]}function q(e,t,r){e.beforeResolve((n,o,a)=>{const c=window.location.href.replace(window.location.origin,""),i=R(n,e),u=R(o,e);let s=!1;const f=i.filter((e,t)=>s||(s=!u[t]||u[t].c!==e.c||e.path.indexOf("/:")>-1)).filter(e=>e.c&&"function"===typeof e.c.preFetch).map(e=>e.c.preFetch);if(0===f.length)return a();let p=!1;const d=e=>{p=!0,a(e)},h=()=>{l["a"].stop(),!1===p&&a()};l["a"].start(),f.reduce((e,a)=>e.then(()=>!1===p&&a({store:t,currentRoute:n,previousRoute:o,redirect:d,urlPath:c,publicPath:r})),Promise.resolve()).then(h).catch(e=>{console.error(e),h()})})}const V="/";async function $(){const{app:e,store:t,router:r}=await N();window.__INITIAL_STATE__&&t.replaceState(window.__INITIAL_STATE__);let n=!1;const o=e=>{n=!0;const t=Object(e)===e?r.resolve(e).route.fullPath:e;window.location.href=t},a=window.location.href.replace(window.location.origin,""),i=[M];for(let l=0;!1===n&&l<i.length;l++)if("function"===typeof i[l])try{await i[l]({app:e,router:r,store:t,Vue:c["a"],ssrContext:null,redirect:o,urlPath:a,publicPath:V})}catch(s){return s&&s.url?void(window.location.href=s.url):void console.error("[Quasar] boot error:",s)}if(!0===n)return;const u=new c["a"](e);r.onReady(()=>{q(r,t,V),u.$mount("#q-app")})}$()}});