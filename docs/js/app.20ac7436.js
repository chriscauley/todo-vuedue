(function(t){function e(e){for(var r,c,a=e[0],i=e[1],l=e[2],p=0,f=[];p<a.length;p++)c=a[p],Object.prototype.hasOwnProperty.call(o,c)&&o[c]&&f.push(o[c][0]),o[c]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(t[r]=i[r]);d&&d(e);while(f.length)f.shift()();return u.push.apply(u,l||[]),n()}function n(){for(var t,e=0;e<u.length;e++){for(var n=u[e],r=!0,a=1;a<n.length;a++){var i=n[a];0!==o[i]&&(r=!1)}r&&(u.splice(e--,1),t=c(c.s=n[0]))}return t}var r={},o={app:0},u=[];function c(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.m=t,c.c=r,c.d=function(t,e,n){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)c.d(n,r,function(e){return t[e]}.bind(null,r));return n},c.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="/todo-vuedue/";var a=window["webpackJsonp"]=window["webpackJsonp"]||[],i=a.push.bind(a);a.push=e,a=a.slice();for(var l=0;l<a.length;l++)e(a[l]);var d=i;u.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("7a23"),o=Object(r["d"])("option",null,"work",-1),u=Object(r["d"])("option",null,"play",-1);function c(t,e,n,c,a,i){var l=Object(r["h"])("tag-item");return Object(r["e"])(),Object(r["c"])("div",null,[Object(r["l"])(Object(r["d"])("input",{"onUpdate:modelValue":e[1]||(e[1]=function(t){return a.text=t})},null,512),[[r["k"],a.text]]),Object(r["l"])(Object(r["d"])("select",{"onUpdate:modelValue":e[2]||(e[2]=function(t){return a.tag=t})},[o,u],512),[[r["j"],a.tag]]),Object(r["d"])("button",{onClick:e[3]||(e[3]=function(){return i.addItem&&i.addItem.apply(i,arguments)})},"add"),Object(r["d"])("ul",null,[(Object(r["e"])(!0),Object(r["c"])(r["a"],null,Object(r["g"])(i.items,(function(t,e){return Object(r["e"])(),Object(r["c"])(l,{key:e,item:t},null,8,["item"])})),128))])])}var a=n("5530"),i=n("73ba"),l=n.n(i),d="store/todo",p=Object(r["f"])(Object(a["a"])({items:[]},l.a.get(d))),f=function(t){var e=t.text,n=t.tag;p.items.push({text:e,tag:n}),l.a.set(d,p)},s=window.TODO={state:p,addItem:f},b={todo:s};function O(t,e,n,o,u,c){return Object(r["e"])(),Object(r["c"])("li",null,Object(r["i"])(n.item.tag)+": "+Object(r["i"])(n.item.text),1)}var j={props:{item:Object}};j.render=O;var m=j,v={name:"App",components:{TagItem:m},provide:{items:function(){return this.items}},data:function(){return{text:"",tag:""}},computed:{items:function(){return b.todo.state.items}},methods:{addItem:function(){var t=this.tag,e=this.text;b.todo.addItem({tag:t,text:e}),this.text=""}}};v.render=c;var g=v;Object(r["b"])(g).mount("#app")}});
//# sourceMappingURL=app.20ac7436.js.map