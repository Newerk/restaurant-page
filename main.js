(()=>{"use strict";var e={322:(e,t,n)=>{n.d(t,{Z:()=>p});var r=n(81),o=n.n(r),a=n(645),c=n.n(a),i=n(667),s=n.n(i),d=new URL(n(110),n.b),l=c()(o()),u=s()(d);l.push([e.id,".form-container {\n    background-color: grey;\n    width: 20vw;\n    height: 60vh;\n}\n\n#map {\n    height: 20rem;\n    width: 70rem;\n    background: url("+u+");\n    background-position: center;\n}",""]);const p=l},645:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",r=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),r&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),r&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,r,o,a){"string"==typeof e&&(e=[[null,e,void 0]]);var c={};if(r)for(var i=0;i<this.length;i++){var s=this[i][0];null!=s&&(c[s]=!0)}for(var d=0;d<e.length;d++){var l=[].concat(e[d]);r&&c[l[0]]||(void 0!==a&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=a),n&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=n):l[2]=n),o&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=o):l[4]="".concat(o)),t.push(l))}},t}},667:e=>{e.exports=function(e,t){return t||(t={}),e?(e=String(e.__esModule?e.default:e),/^['"].*['"]$/.test(e)&&(e=e.slice(1,-1)),t.hash&&(e+=t.hash),/["'() \t\n]|(%20)/.test(e)||t.needQuotes?'"'.concat(e.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):e):e}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var t=[];function n(e){for(var n=-1,r=0;r<t.length;r++)if(t[r].identifier===e){n=r;break}return n}function r(e,r){for(var a={},c=[],i=0;i<e.length;i++){var s=e[i],d=r.base?s[0]+r.base:s[0],l=a[d]||0,u="".concat(d," ").concat(l);a[d]=l+1;var p=n(u),m={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==p)t[p].references++,t[p].updater(m);else{var f=o(m,r);r.byIndex=i,t.splice(i,0,{identifier:u,updater:f,references:1})}c.push(u)}return c}function o(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,o){var a=r(e=e||[],o=o||{});return function(e){e=e||[];for(var c=0;c<a.length;c++){var i=n(a[c]);t[i].references--}for(var s=r(e,o),d=0;d<a.length;d++){var l=n(a[d]);0===t[l].references&&(t[l].updater(),t.splice(l,1))}a=s}}},569:e=>{var t={};e.exports=function(e,n){var r=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(n)}},216:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},565:(e,t,n)=>{e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},795:e=>{e.exports=function(e){var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var r="";n.supports&&(r+="@supports (".concat(n.supports,") {")),n.media&&(r+="@media ".concat(n.media," {"));var o=void 0!==n.layer;o&&(r+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),r+=n.css,o&&(r+="}"),n.media&&(r+="}"),n.supports&&(r+="}");var a=n.sourceMap;a&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),t.styleTagTransform(r,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},589:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}},110:(e,t,n)=>{e.exports=n.p+"2abd93491b08b17fa14a.png"}},t={};function n(r){var o=t[r];if(void 0!==o)return o.exports;var a=t[r]={id:r,exports:{}};return e[r](a,a.exports,n),a.exports}n.m=e,n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e;n.g.importScripts&&(e=n.g.location+"");var t=n.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var r=t.getElementsByTagName("script");r.length&&(e=r[r.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),n.p=e})(),n.b=document.baseURI||self.location.href,n.nc=void 0,(()=>{const e=()=>{const e=document.createElement("img");e.id="burger",e.src="../src/images/main-page-logo.svg";const t=document.createElement("h1");t.id="title",t.textContent="Mangrove";const n=document.createElement("p");n.textContent='"This is very good, so good delicious, best food, yum" -some random guy';const r=document.getElementById("content");r.appendChild(e),r.appendChild(t),r.appendChild(n)};var t=n(379),r=n.n(t),o=n(795),a=n.n(o),c=n(569),i=n.n(c),s=n(565),d=n.n(s),l=n(216),u=n.n(l),p=n(589),m=n.n(p),f=n(322),h={};h.styleTagTransform=m(),h.setAttributes=d(),h.insert=i().bind(null,"head"),h.domAPI=a(),h.insertStyleElement=u(),r()(f.Z,h),f.Z&&f.Z.locals&&f.Z.locals;e();const v=()=>{content.innerHTML=""},g=document.createElement("button");g.textContent="Home",g.addEventListener("click",(()=>(v(),e())));const b=document.createElement("button");b.textContent="Menu",b.addEventListener("click",(()=>{v()}));const y=document.createElement("button");y.textContent="Contact Us",y.addEventListener("click",(()=>{v(),(()=>{const e=document.getElementById("content"),t=document.createElement("div"),n=document.createElement("form");n.className="form-container",e.appendChild(n),(r=>{const o=(e,t)=>{const r=e.toLowerCase().split(" ").join(""),o=document.createElement("label"),a=document.createElement("input");a.type=t,a.id=a.name=r;const c=document.createElement("p");c.textContent=e,o.appendChild(c),o.appendChild(a),n.append(o)};for(const e of["First Name","Last Name","Phone Number","Email","Message"])switch(e){case"First Name":case"Last Name":o(e,"text");break;case"Phone Number":o(e,"tel");break;case"Email":o(e,"email");break;case"Message":const t=document.createElement("div");t.className="msg-container";const r=document.createElement("textarea");r.id="message";const a=document.createElement("p");a.textContent="Message",t.appendChild(a),t.appendChild(r),n.appendChild(t)}const a=document.createElement("button");a.textContent="Submit",n.appendChild(a),t.appendChild(n),t.className="left-of-page",e.appendChild(t)})()})(),(()=>{const e=document.getElementById("content"),t=document.createElement("div");t.className="right-of-page";const n=document.createElement("img");n.id="map",t.appendChild(n),e.appendChild(t)})()})),document.body.appendChild(g),document.body.appendChild(b),document.body.appendChild(y)})()})();