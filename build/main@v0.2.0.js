/******/
/******/  // EtcPack Bootstrap
/******/  // （ https://etcpack.github.io/api/ ）
/******/  
/******/  // 记录bundle的函数源码
/******/  window.__etcpack__bundleSrc__ = {};
/******/  
/******/  // 记录bundle的运行结果
/******/  window.__etcpack__bundleObj__ = {};
/******/  
/******/  // 获取bundle结果
/******/  window.__etcpack__getBundle = function (bundleName) {
/******/  
/******/      // 一个bundle只有第一次导入的时候需要执行
/******/      if (!(bundleName in window.__etcpack__bundleObj__)) {
/******/          window.__etcpack__bundleObj__[bundleName] = window.__etcpack__bundleSrc__[bundleName]();
/******/      }
/******/  
/******/      // 返回需要的bundle的结果
/******/      return window.__etcpack__bundleObj__[bundleName];
/******/  }
/******/  
/******/  window.__etcpack__bundleFile__ = {};
/******/  
/******/  // 获取懒加载bundle结果
/******/  window.__etcpack__getLazyBundle = function (fileName, bundleName) {
/******/      return new Promise(function (resolve) {
/******/  
/******/          // 如果加载过了
/******/          if (window.__etcpack__bundleFile__[fileName]) {
/******/              resolve(window.__etcpack__getBundle(bundleName));
/******/              return;
/******/          }
/******/  
/******/          // 获取head标签
/******/          var head = document.getElementsByTagName('head')[0];
/******/  
/******/          // 创建script
/******/          var script = document.createElement('script');
/******/  
/******/          // 设置属性
/******/          script.src = fileName;
/******/  
/******/          // 追加到页面
/******/          head.appendChild(script);
/******/  
/******/          window.__etcpack__bundleFile__[fileName] = true;
/******/  
/******/          script.addEventListener('load', function () {
/******/              resolve(window.__etcpack__getBundle(bundleName));
/******/          }, false);
/******/  
/******/  
/******/      });
/******/  }
/******/  
/************************************************************************/
/******/

/*************************** [bundle] ****************************/
// Original file:./src/entry.js
/*****************************************************************/
window.__etcpack__bundleSrc__['0']=function(){
    var __etcpack__scope_bundle__={};
    var __etcpack__scope_args__;
    __etcpack__scope_args__=window.__etcpack__getBundle('1');
var QuickPaper =__etcpack__scope_args__.default;
 // 兼容文件

__etcpack__scope_args__=window.__etcpack__getBundle('3');
 // 引入样式

__etcpack__scope_args__=window.__etcpack__getBundle('16');

__etcpack__scope_args__=window.__etcpack__getBundle('17');
var App =__etcpack__scope_args__.default;
 // 创建对象
// https://hai2007.gitee.io/quick-paper

window.quickPaper = new QuickPaper({
  // 挂载点
  el: document.getElementById('root'),
  // 启动组件
  render: function render(createElement) {
    return createElement(App);
  }
});
  
    return __etcpack__scope_bundle__;
}

/*************************** [bundle] ****************************/
// Original file:./src/lib/quick-paper.js
/*****************************************************************/
window.__etcpack__bundleSrc__['1']=function(){
    var __etcpack__scope_bundle__={};
    var __etcpack__scope_args__;
    __etcpack__scope_args__=window.__etcpack__getBundle('2');

__etcpack__scope_bundle__.default= QuickPaper;
  
    return __etcpack__scope_bundle__;
}

/*************************** [bundle] ****************************/
// Original file:./node_modules/quick-paper/dist/quick-paper.min.js
/*****************************************************************/
window.__etcpack__bundleSrc__['2']=function(){
    var __etcpack__scope_bundle__={};
    var __etcpack__scope_args__;
    "use strict";function ownKeys(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function _objectSpread(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?ownKeys(Object(n),!0).forEach((function(e){_defineProperty2(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):ownKeys(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function _defineProperty2(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function _typeof2(t){return(_typeof2="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}
/*!
* quick-paper v0.5.1
* (c) 2019-2021 你好2007 git+https://github.com/hai2007/quick-paper.git
* License: MIT
*/!function(){var t=Object.prototype.toString;function e(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":t.call(e)}var n=function(t,n){return null!==n&&"object"===_typeof2(n)&&t.indexOf(n.nodeType)>-1&&!function(t){if(null===t||"object"!==_typeof2(t)||"[object Object]"!=e(t))return!1;if(null===Object.getPrototypeOf(t))return!0;for(var n=t;null!==Object.getPrototypeOf(n);)n=Object.getPrototypeOf(n);return Object.getPrototypeOf(t)===n}(n)},r=function(t){var n=_typeof2(t);return"string"===n||"object"===n&&null!=t&&!Array.isArray(t)&&"[object String]"===e(t)},o=function(t){if(!function(t){var e=_typeof2(t);return null!=t&&("object"===e||"function"===e)}(t))return!1;var n=e(t);return"[object Function]"===n||"[object AsyncFunction]"===n||"[object GeneratorFunction]"===n||"[object Proxy]"===n},i=function(t){return Array.isArray(t)};function s(t){/^[_$]/.test(t)&&console.error("The beginning of _ or $ is not allowed："+t)}var l=1;function a(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[],o={},i=[];if(!r(t))return{type:"component",options:t,attrs:{},children:[]};for(var s in e)/^@/.test(s)?o[s.replace(/^@/,"q-on:")]=e[s]:/^:/.test(s)?o["q-bind"+s]=e[s]:o[s]=e[s];for(var l,a=0;a<n.length;a++)l=n[a],r(l)?/\{\{[^}]+\}\}/.test(l)?i.push({type:"bindText",content:('" '+l+' "').replace(/\{\{([^}]+)\}\}/g,'"+$1+"')}):i.push({type:"text",content:l}):i.push(l);return{type:"none",tagName:t,attrs:o,children:i}}function c(t){for(var e=(t+"").toLowerCase(),n=(t+"").toUpperCase(),r="",o=!1,i=0;i<t.length;i++)"-"!=t[i]?o?(r+=n[i],o=!1):r+=e[i]:o=!0;return r}var u={blankReg:new RegExp("[\\x20\\t\\r\\n\\f]"),blanksReg:/^[\x20\t\r\n\f]{0,}$/,identifier:/^[a-zA-Z_$][0-9a-zA-Z_$]{0,}$/},f=["+","-","*","/","%","&","|","!","?",":","[","]","(",")",">","<","="],_=["+","-","*","/","%","&","|","!","?",":",">","<","=","<=",">=","==","===","!=","!=="];function h(t,e,n){e=e.trim();var o=-1,i=null,s=function(){return i=o++<e.length-1?e[o]:null},l=function(t){return e.substring(o,t+o>e.length?e.length:t+o)};s();for(var a=[];!(o>=e.length);)if(f.indexOf(i)>-1)if(["&","|","="].indexOf(i)>-1)if(["==="].indexOf(l(3))>-1)a.push(l(3)),o+=2,s();else{if(!(["&&","||","=="].indexOf(l(2))>-1))throw new Error("Illegal expression : "+e+"\nstep='analyseExpress',index="+o);a.push(l(2)),o+=1,s()}else["!=="].indexOf(l(3))>-1?(a.push(l(3)),o+=2,s()):[">=","<=","!="].indexOf(l(2))>-1?(a.push(l(2)),o+=1,s()):(a.push(i),s());else if(['"',"'"].indexOf(i)>-1){var c="",h=i;for(s();i!=h;){if(o>=e.length)throw new Error("String unclosed error : "+e+"\nstep='analyseExpress',index="+o);c+=i,s()}a.push(c+"@string"),s()}else if(/\d/.test(i)){var p="no";c=i;for(s();o<e.length;){if(/\d/.test(i))c+=i,"error"==p&&(p="yes");else{if("."!=i||"no"!=p)break;c+=i,p="error"}s()}"error"==p&&(c+="0"),a.push(+c)}else if(["null","true"].indexOf(l(4))>-1)a.push({null:null,true:!0}[l(4)]),o+=3,s();else if(["false"].indexOf(l(5))>-1)a.push({false:!1}[l(5)]),o+=4,s();else if(["undefined"].indexOf(l(9))>-1)a.push({undefined:void 0}[l(9)]),o+=8,s();else if(u.blankReg.test(i))do{s()}while(u.blankReg.test(i)&&o<e.length);else{var d=!1;if("."==i&&(d=!0,s()),!u.identifier.test(i))throw new Error("Illegal express : "+e+"\nstep='analyseExpress',index="+o);for(var m=1;o+m<=e.length&&u.identifier.test(l(m));)m+=1;if(d)a.push("["),a.push(l(m-1)+"@string"),a.push("]");else{var g=l(m-1),v=g in n?n[g]:t[g];a.push(r(v)?v+"@string":v)}o+=m-2,s()}for(var y=0,b=0;b<a.length;b++)["+","-"].indexOf(a[b])>-1&&(0==b||_.indexOf(a[y-1])>-1)?(a[y++]=+(a[b]+a[b+1]),b+=1):a[y++]=a[b];return a.length=y,a}var p=function(t){return"string"==typeof t?t.replace(/@string$/,""):t};function d(t){for(var e,n=0,r=0;r<t.length;r++)"!"==t[r]?t[n]=!t[++r]:t[n]=t[r],n+=1;if(1==n)return p(t[0]);for(t.length=n,n=0,r=0;r<t.length;r++)"*"==t[r]?t[n-1]=p(t[n-1])*p(t[++r]):"/"==t[r]?t[n-1]=p(t[n-1])/p(t[++r]):"%"==t[r]?t[n-1]=p(t[n-1])%p(t[++r]):t[n++]=t[r];if(1==n)return p(t[0]);for(t.length=n,n=0,r=0;r<t.length;r++)"+"==t[r]?t[n-1]="string"==typeof(e=p(t[n-1])+p(t[++r]))?e+"@string":e:"-"==t[r]?t[n-1]=p(t[n-1])-p(t[++r]):t[n++]=t[r];if(1==n)return p(t[0]);for(t.length=n,n=0,r=0;r<t.length;r++)">"==t[r]?t[n-1]=p(t[n-1])>p(t[++r]):"<"==t[r]?t[n-1]=p(t[n-1])<p(t[++r]):"<="==t[r]?t[n-1]=p(t[n-1])<=p(t[++r]):">="==t[r]?t[n-1]=p(t[n-1])>=p(t[++r]):t[n++]=t[r];if(1==n)return p(t[0]);for(t.length=n,n=0,r=0;r<t.length;r++)"=="==t[r]?t[n-1]=p(t[n-1])==p(t[++r]):"==="==t[r]?t[n-1]=p(t[n-1])===p(t[++r]):"!="==t[r]?t[n-1]=p(t[n-1])!=p(t[++r]):"!=="==t[r]?t[n-1]=p(t[n-1])!==p(t[++r]):t[n++]=t[r];if(1==n)return p(t[0]);for(t.length=n,n=0,r=0;r<t.length;r++)"&&"==t[r]?(t[n-1]=p(t[n-1])&&p(t[1+r]),r+=1):"||"==t[r]?(t[n-1]=p(t[n-1])||p(t[1+r]),r+=1):t[n++]=t[r];if(1==n)return p(t[0]);for(t.length=n,n=0,r=0;r<t.length;r++)"?"==t[r]?(t[n-1]=p(t[n-1])?p(t[r+1]):p(t[r+3]),r+=3):t[n++]=t[r];if(1==n)return p(t[0]);throw t.length=n,new Error("Unrecognized expression : ["+t.toString()+"]")}var m=function(t){for(var e=!0;e;){e=!1;for(var n=[],o=[],i=!1,s=0;s<t.length;s++)if("["==t[s]&&0!=s&&"]"!=t[s-1]){if(i){n.push("[");for(var l=0;l<o.length;l++)n.push(o[l])}else i=!0;o=[]}else if("]"==t[s]&&i){e=!0;var a=d(o),c=n[n.length-1][a];n[n.length-1]=r(c)?c+"@string":c,i=!1}else i?o.push(t[s]):n.push(t[s]);t=n}return t},g=function(t){for(var e=[],n=[],r=0;r<t.length;r++)"["==t[r]?n=[]:"]"==t[r]?e.push(d(n)):n.push(t[r]);return e};function v(t,e,n){var o,i=function t(e,n,o){if(n.indexOf("(")>-1){for(var i=[],s=[],l=0,a=0;a<n.length;a++)if("("==n[a])l>0&&s.push("("),l+=1;else if(")"==n[a]){if(l>1&&s.push(")"),0==(l-=1)){var c=d(t(e,s));i.push(r(c)?c+"@string":c),s=[]}}else l>0?s.push(n[a]):i.push(n[a]);n=i}return m(n)}(t,e);if("["!=i[0])o=[d(i)];else if("]"==i[i.length-1])o=g(i);else{var s=i.lastIndexOf("]"),l=g(i.slice(0,s+1)),a=i.slice(s+1);a.unshift(function(t,e,n){for(var r=(e[0]in n?n[e[0]]:t[e[0]]),o=1;o<e.length;o++)try{r=r[e[o]]}catch(r){throw console.error({target:t,scope:n,expressArray:e,index:o}),r}return r}(t,l,n)),o=[d(a)]}return o}
/*!
   * 🔪 - 设置或获取指定对象上字符串表达式对应的值
   * https://github.com/hai2007/algorithm.js/blob/master/value.js
   *
   * author hai2007 < https://hai2007.gitee.io/sweethome >
   *
   * Copyright (c) 2020-present hai2007 走一步，再走一步。
   * Released under the MIT license
   */var y=function(t,e,n){arguments.length<3&&(n={});var r=h(t,e,n),o=v(t,r,n);if(o.length>1)throw new Error("Illegal expression : "+e+"\nstep='evalExpress',path="+o+",expressArray="+r);return o[0]};function b(t,e,n){window.attachEvent?t.attachEvent("on"+e,n):t.addEventListener(e,n,!1)}function N(t){if(!(this instanceof N))throw new Error("QuickPaper is a constructor and should be called with the `new` keyword");var e;this._name=t.name||"noname",this.$$lifecycle(t.beforeCreate),this.$$init(t),this.$$lifecycle("created"),e=this._el,n([1,9,11],e)&&this.$$mount()}!function(t){t.prototype.$$init=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};for(var e in this._options=t,this._uid=l++,this._data=o(t.data)?t.data():t.data,this._el=t.el,this.__isMounted=!1,this.__isDestroyed=!1,t.methods)s(e),this[e]=t.methods[e];for(var n in this._data)this[n]=this._data[n];for(var r in this.__componentLib_scope={},t.component)this.__componentLib_scope[r]=t.component[r];for(var i in this.__directiveLib_scope={},t.directive)this.__directiveLib_scope[i]=t.directive[i]}}(N),function(t){t.prototype.$$lifecycle=function(t){o(t)?t():["created","beforeMount","mounted","beforeUpdate","updated","beforeDestroy","destroyed"].indexOf(t)>-1&&o(this._options[t])&&this._options[t].call(this)}}(N),function(t){t.prototype.$$mountComponent=function(){this.$$lifecycle("beforeMount"),this._vnode=this.$$render(a),this.__directiveTask=[],this.__componentTask=[],this.__bindTextTask=[],function t(e,n,r,o){var i,s=y(e,n);if(s){if("none"==s.type){var l=c(s.tagName);e.__componentLib[l]||e.__componentLib_scope[l]?(s.options=e.__componentLib[l]||e.__componentLib_scope[l],s.type="component"):s.type="tag"}if("component"==s.type){i=document.createElement("quick-paper-component"),r.appendChild(i),s.options.el=i,"render"in s.options||(s.options.render=function(t){return t("quick-paper-component",{},[])}),s.instance=new o(s.options),s.instance.__parent=e;var a={};for(var u in s.attrs)/^data-quickpaper-/.test(u)||(/^:/.test(u)?a[u.replace("q-bind"+u)]=s.attrs[u]:/^@/.test(u)?a[u.replace(u.replace(/^@/,"q-on:"))]=s.attrs[u]:a[u]=s.attrs[u]);var f={attrs:a,instance:s.instance};if("component"==f.instance._name){var _=f.attrs["q-bind:is"];f.instance.lister(o,e[_])}e.__componentTask.push(f)}else if("tag"==s.type){for(var h in i=document.createElement(s.tagName),"Quick-Paper-COMPONENT"==r.nodeName||"Quick-Paper-COMPONENT"==r._nodeName?(b=i,(v=r).parentNode.replaceChild(b,v),e._el=i):r.appendChild(i),s.attrs){var p=s.attrs[h],d=(h+":").split(":"),m=e.__directiveLib[c(d[0])]||e.__directiveLib_scope[c(d[0])];m?e.__directiveTask.push(_objectSpread(_objectSpread({el:i},m),{},{value:p,type:d[1]})):i.setAttribute(h,p)}for(var g=0;g<s.children.length;g++)t(e,n+".children["+g+"]",i,o)}else"text"==s.type?((i=document.createTextNode("")).textContent=s.content.replace(/↵/g,"\n"),r.appendChild(i)):"bindText"==s.type?((i=document.createTextNode("")).textContent=y(e,s.content).replace(/↵/g,"\n"),r.appendChild(i),e.__bindTextTask.push({el:i,content:s.content})):console.error("Type not expected："+s.type);var v,b}else console.error("vnode is undefined!")}(this,"_vnode",this._el,t);for(var e=0;e<this.__directiveTask.length;e++){var n=this.__directiveTask[e];if(o(n.inserted)){var r=void 0;try{r=y(this,n.value)}catch(t){}n.inserted(n.el,{target:this,exp:n.value,value:r,type:n.type})}}!function(t){var e=function(e){s(e),o(t[e])&&console.error('Data property "'+e+'" has already been defined as a Method.');var n=t._data[e];t[e]=n,Object.defineProperty(t,e,{get:function(){return n},set:function(e){n=e,t.$$updateComponent()}})};for(var n in t._data)e(n)}(this),this.__isMounted=!0,this.$$lifecycle("mounted")},t.prototype.$$updateComponent=function(){this.$$lifecycle("beforeUpdate");for(var e=0;e<this.__directiveTask.length;e++){var n=this.__directiveTask[e];if(o(n.update)){var r=void 0;try{r=y(this,n.value)}catch(t){}n.update(n.el,{target:this,exp:n.value,value:r,type:n.type})}}for(var i=0;i<this.__bindTextTask.length;i++){var s=this.__bindTextTask[i],l=y(this,s.content).replace(/↵/g,"\n");s.el.textContent!=l&&(s.el.textContent=l)}for(var a=0;a<this.__componentTask.length;a++){var c=this.__componentTask[a];if("component"==c.instance._name){var u=c.attrs["q-bind:is"];c.instance.lister(t,this[u])}}this.$$lifecycle("updated")},t.prototype.$$destroyComponent=function(){this.$$lifecycle("beforeDestroy");for(var t=0;t<this.__directiveTask.length;t++){var e=this.__directiveTask[t];o(e.delete)&&e.delete(e.el,{target:this,exp:e.value,value:y(this,e.value),type:e.type})}this.$$lifecycle("destroyed")}}(N);var $=function(t,e){r(e.type)&&e.type.length>0?t.getAttribute(e.type)!=e.value&&t.setAttribute(e.type,e.value):t.value==e.value&&t.textContent==e.value||(t.value=t.textContent=e.value)},x={inserted:$,update:$},w={inserted:function(t,e){for(var n=e.type.split("."),r={prevent:!1,stop:!1,once:!1},o=1;o<n.length;o++)r[n[o]]=!0;b(t,n[0],(function o(i){r.stop&&function(t){(t=t||window.event).stopPropagation?t.stopPropagation():t.cancelBubble=!0}(i),r.prevent&&function(t){(t=t||window.event).preventDefault?t.preventDefault():t.returnValue=!1}(i);var s,l,a,c=/^([^(]+)(\([^)]{0,}\)){0,1}/.exec(e.exp),u=[],f=[];if(c[2]){var _=c[2].replace(/^\(/,"").replace(/\)$/,"").trim();_.length>0&&(f=_.split(","))}for(var h=0;h<f.length;h++){var p=f[h];p=y(e.target,p),u.push(p)}u.push(i),e.target[c[1]].apply(e.target,u),r.once&&(s=t,l=n[0],a=o,window.detachEvent?s.detachEvent("on"+l,a):s.removeEventListener(l,a,!1))}))}},O={inserted:function(t,e){t.value=e.value,b(t,"input",(function(){!function(t,e,n,r){arguments.length<3&&(r={});for(var o=h(t,e,r),s=v(t,o,r),l=t,a=0;a<s.length-1;a++)s[a]in l||(l[s[a]]=i(l)?[]:{}),l=l[s[a]];l[s[s.length-1]]=n}(e.target,"."+e.exp,t.value)}))},update:function(t,e){t.value=e.value}};!function(t){t.prototype.__directiveLib={},t.prototype.__componentLib={},function(t){t.directive=function(e,n){t.prototype.__directiveLib[e]=n},t.component=function(e,n){t.prototype.__componentLib[e]=n}}(t),function(t){t.use=function(e){e.install.call(e,t)}}(t)}(N),N.directive("qBind",x),N.directive("qOn",w),N.directive("qModel",O),N.component("component",{name:"component",data:function(){return{is:null}},methods:{lister:function(t,e){if(e!=this.is&&null!=e){var n=this._oldComponent;n&&n.$$lifecycle("beforeDestroy"),this.is=e;var r=e;r.el=this._el,r.el._nodeName="Quick-Paper-COMPONENT",this._oldComponent=new t(r),this._el=this._oldComponent._el,n&&(n.$$lifecycle("destroyed"),n=null)}}}}),N.prototype.$$mount=function(){if(!o(this._options.render))throw new Error("options.render needs to be a function");this.$$render=this._options.render,this.$$mountComponent()};
/*!
   * 💡 - 提供常用的DOM操作方法
   * https://github.com/hai2007/tool.js/blob/master/xhtml.js
   *
   * author hai2007 < https://hai2007.gitee.io/sweethome >
   *
   * Copyright (c) 2021-present hai2007 走一步，再走一步。
   * Released under the MIT license
   */
var A="http://www.w3.org/2000/svg",j={stopPropagation:function(t){(t=t||window.event).stopPropagation?t.stopPropagation():t.cancelBubble=!0},preventDefault:function(t){(t=t||window.event).preventDefault?t.preventDefault():t.returnValue=!1},isNode:function(t){return t&&(1===t.nodeType||9===t.nodeType||11===t.nodeType)},bind:function(t,e,n){if(t.constructor!==Array&&t.constructor!==NodeList)window.attachEvent?t.attachEvent("on"+e,n):t.addEventListener(e,n,!1);else for(var r=0;r<t.length;r++)this.bind(t[r],e,n)},unbind:function(t,e,n){if(t.constructor!==Array&&t.constructor!==NodeList)window.detachEvent?t.detachEvent("on"+e,n):t.removeEventListener(e,n,!1);else for(var r=0;r<t.length;r++)this.unbind(t[r],e,n)},find:function(t,e,n){if(!this.isNode(t))return[];for(var r=t.getElementsByTagName(n||"*"),o=[],i=0;i<r.length;i++)this.isNode(r[i])&&("function"!=typeof e||e(r[i]))&&o.push(r[i]);return o},children:function(t,e){for(var n=t.childNodes,r=[],o=0;o<n.length;o++)this.isNode(n[o])&&("function"!=typeof e||e(n[o]))&&r.push(n[o]);return r},hasClass:function(t,e,n){e.constructor!==Array&&(e=[e]);for(var r=" "+(t.getAttribute("class")||"")+" ",o=0;o<e.length;o++)if(r.indexOf(" "+e[o]+" ")>=0){if(n)return!0}else if(!n)return!1;return!0},removeClass:function(t,e){var n=(" "+(t.getAttribute("class")||"")+" ").replace(" "+e.trim()+" "," ");t.setAttribute("class",n.trim())},addClass:function(t,e){if(!this.hasClass(t,e)){var n=t.getAttribute("class")||"";t.setAttribute("class",n+" "+e)}},toNode:function(t,e){var n;(n=e?document.createElementNS(A,"svg"):document.createElement("div")).innerHTML=t;for(var r=n.childNodes,o=0;o<r.length;o++)if(this.isNode(r[o]))return r[o]},trigger:function(t,e){if(document.createEventObject)t.fireEvent("on"+e,document.createEventObject());else{var n=document.createEvent("HTMLEvents");n.initEvent(e,!0,!1),t.dispatchEvent(n)}},getStyle:function(t,e){var n=document.defaultView&&document.defaultView.getComputedStyle?document.defaultView.getComputedStyle(t,null):t.currentStyle;return"string"==typeof e?n.getPropertyValue(e):n},offsetPosition:function(t){var e=0,n=0;for(n=t.offsetTop,e=t.offsetLeft,t=t.offsetParent;t;)n+=t.offsetTop,e+=t.offsetLeft,t=t.offsetParent;return{left:e,top:n}},mousePosition:function(t,e){var n=t.getBoundingClientRect();if(!e||!e.clientX)throw new Error("Event is necessary!");return{x:e.clientX-n.left,y:e.clientY-n.top}},remove:function(t){t.parentNode.removeChild(t)},setStyles:function(t,e){for(var n in e)t.style[n]=e[n]},size:function(t,e){var n,r;return"content"==e?(r=t.clientWidth-(this.getStyle(t,"padding-left")+"").replace("px","")-(this.getStyle(t,"padding-right")+"").replace("px",""),n=t.clientHeight-(this.getStyle(t,"padding-top")+"").replace("px","")-(this.getStyle(t,"padding-bottom")+"").replace("px","")):"padding"==e?(r=t.clientWidth,n=t.clientHeight):"border"==e?(r=t.offsetWidth,n=t.offsetHeight):"scroll"==e?(r=t.scrollWidth,n=t.scrollHeight):(r=t.offsetWidth,n=t.offsetHeight),{width:r,height:n}},append:function(t,e){var n=this.isNode(e)?e:this.toNode(e);return t.appendChild(n),n},prepend:function(t,e){var n=this.isNode(e)?e:this.toNode(e);return t.insertBefore(n,t.childNodes[0]),n},after:function(t,e){var n=this.isNode(e)?e:this.toNode(e);return t.parentNode.insertBefore(n,t.nextSibling),n},before:function(t,e){var n=this.isNode(e)?e:this.toNode(e);return t.parentNode.insertBefore(n,t),n}};var k=function(t,e){return t(e={exports:{}},e.exports),e.exports}((function(t){function e(t){return function(t){if(Array.isArray(t))return n(t)}(t)||function(t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}(t)||function(t,e){if(!t)return;if("string"==typeof t)return n(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);"Object"===r&&t.constructor&&(r=t.constructor.name);if("Map"===r||"Set"===r)return Array.from(t);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return n(t,e)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function n(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function o(t){return(o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}!function(){var n;var i=Object.prototype.toString;function s(t){return null==t?void 0===t?"[object Undefined]":"[object Null]":i.call(t)}var l=function(t,e){return null!==e&&"object"===o(e)&&t.indexOf(e.nodeType)>-1&&!function(t){if(null===t||"object"!==o(t)||"[object Object]"!=s(t))return!1;if(null===Object.getPrototypeOf(t))return!0;for(var e=t;null!==Object.getPrototypeOf(e);)e=Object.getPrototypeOf(e);return Object.getPrototypeOf(t)===e}(e)},a=function(t){var e=o(t);return"string"===e||"object"===e&&null!=t&&!Array.isArray(t)&&"[object String]"===s(t)},c=function(t){if(!function(t){var e=o(t);return null!=t&&("object"===e||"function"===e)}(t))return!1;var e=s(t);return"[object Function]"===e||"[object AsyncFunction]"===e||"[object GeneratorFunction]"===e||"[object Proxy]"===e},u=function(t){return l([1,9,11],t)},f={stopPropagation:function(t){(t=t||window.event).stopPropagation?t.stopPropagation():t.cancelBubble=!0},preventDefault:function(t){(t=t||window.event).preventDefault?t.preventDefault():t.returnValue=!1},bind:function(t,e,n){window.attachEvent?t.attachEvent("on"+e,n):t.addEventListener(e,n,!1)},trigger:function(t,e){var n;document.createEventObject?(n=document.createEventObject(),t.fireEvent("on"+e,n)):((n=document.createEvent("HTMLEvents")).initEvent(e,!0,!1),t.dispatchEvent(n))},toNode:function(t){var e=document.createElement("div");e.innerHTML=t;for(var n=e.childNodes,r=0;r<n.length;r++)if(u(n[r]))return n[r];return null},appendTo:function(t,e){var n=u(e)?e:this.toNode(e);return t.appendChild(n),n},prependTo:function(t,e){var n=u(e)?e:this.toNode(e);return t.insertBefore(n,t.childNodes[0]),n},remove:function(t){t.parentNode.removeChild(t)},after:function(t,e){var n=u(e)?e:this.toNode(e);return t.parentNode.insertBefore(n,t.nextSibling),n},css:function(t,e){for(var n in e)t.style[n]=e[n]},attr:function(t,e){for(var n in e)t.setAttribute(n,e[n])},position:function(t,e){e=e||window.event;var n=t.getBoundingClientRect();if(!e||!e.clientX)throw new Error("Event is necessary!");return{x:e.clientX-n.left+t.scrollLeft,y:e.clientY-n.top+t.scrollTop}},copy:function t(e,n,r){var o=this.appendTo(document.body,"<textarea>"+e+"</textarea>");o.select();try{window.document.execCommand("copy",!1,null)?c(n)&&n():c(r)&&r()}catch(t){c(r)&&r(t)}document.body.removeChild(o)}};function _(t){return{leftNum:t.__leftNum,lineNum:t.__lineNum,x:t.__cursorLeft,y:t.__cursorTop,lineHeight:21}}var h=(r(n={48:[0,")"],49:[1,"!"],50:[2,"@"],51:[3,"#"],52:[4,"$"],53:[5,"%"],54:[6,"^"],55:[7,"&"],56:[8,"*"],57:[9,"("],96:[0,0],97:1,98:2,99:3,100:4,101:5,102:6,103:7,104:8,105:9,106:"*",107:"+",109:"-",110:".",111:"/",65:["a","A"],66:["b","B"],67:["c","C"],68:["d","D"],69:["e","E"],70:["f","F"],71:["g","G"],72:["h","H"],73:["i","I"],74:["j","J"],75:["k","K"],76:["l","L"],77:["m","M"],78:["n","N"],79:["o","O"],80:["p","P"],81:["q","Q"],82:["r","R"],83:["s","S"],84:["t","T"],85:["u","U"],86:["v","V"],87:["w","W"],88:["x","X"],89:["y","Y"],90:["z","Z"],37:"left",38:"up",39:"right",40:"down",33:"page up",34:"page down",35:"end",36:"home",16:"shift",17:"ctrl",18:"alt",91:"command",92:"command",93:"command",9:"tab",20:"caps lock",32:"spacebar",8:"backspace",13:"enter",27:"esc",46:"delete",45:"insert",144:"number lock",145:"scroll lock",12:"clear"},"45","insert"),r(n,19,"pause"),r(n,112,"f1"),r(n,113,"f2"),r(n,114,"f3"),r(n,115,"f4"),r(n,116,"f5"),r(n,117,"f6"),r(n,118,"f7"),r(n,119,"f8"),r(n,120,"f9"),r(n,121,"f10"),r(n,122,"f11"),r(n,123,"f12"),r(n,189,["-","_"]),r(n,187,["=","+"]),r(n,219,["[","{"]),r(n,221,["]","}"]),r(n,220,["\\","|"]),r(n,186,[";",":"]),r(n,222,["'",'"']),r(n,188,[",","<"]),r(n,190,[".",">"]),r(n,191,["/","?"]),r(n,192,["`","~"]),n),p=["shift","ctrl","alt"];function d(t){var e=(t=t||window.event).keyCode||t.which,n=h[e]||e;if(n){n.constructor!==Array&&(n=[n,n]);var r=t.shiftKey?"shift+":"",o=t.altKey?"alt+":"",i="",s=(t.ctrlKey?"ctrl+":"")+r+o;p.indexOf(n[0])>=0&&(n[0]=n[1]="");var l=t.code=="Key"+t.key&&!r;return i=s+(""==s&&l?n[1]:n[0]),""==n[0]&&(i=i.replace(/\+$/,"")),i}}var m=function(t,e){if(t.length!=e.length)return!1;for(var n=0;n<t.length;n++)if(t[n].content!=e[n].content||t[n].color!=e[n].color)return!1;return!0};function g(t,e){for(var n=[],r=0,o=function(e){return t.substring(r,e+r>t.length?t.length:e+r)},i="",s="tag",l=function(){""!=i&&n.push({color:{tag:e.selector,attr:e.attrKey,string:e.attrValue}[s],content:i}),i=""};;)if("/*"==o(2)){for(l();"*/"!==o(2)&&r<t.length;)i+=t[r++];n.push({color:e.annotation,content:i+o(2)}),r+=2,i=""}else if(["'",'"'].indexOf(o(1))>-1){var a=o(1);l();do{i+=t[r++]}while(o(1)!=a&&r<t.length);o(1)!=a?a="":r+=1,n.push({color:e.attrValue,content:i+a}),i=""}else if([":","{","}",";"].indexOf(o(1))>-1)l(),n.push({color:e.insign,content:o(1)}),i="",s="{"==o(1)||";"==o(1)?"attr":"}"==o(1)?"tag":"string",r+=1;else{if(r>=t.length){l();break}i+=t[r++]}return n}var v=["abstract","arguments","boolean","break","byte","case","catch","char","class","const","continue","debugger","default","delete","do","double","else","enum","eval","export","extends","false","final","finally","float","for","function","goto","if","implements","import","in","instanceof","int","interface","let","long","native","new","null","package","private","protected","public","return","short","static","super","switch","synchronized","this","throw","throws","transient","true","try","typeof","var","void","volatile","while","with","yield"];function y(t,e){for(var n=[],r=0,o=function(e){return t.substring(r,e+r>t.length?t.length:e+r)},i="",s=function(){""!=i&&("("==i[0]&&(n.push({color:e.insign,content:"("}),i=i.substr(1)),n.push({color:e.text,content:i})),i=""};;)if("/*"==o(2)){for(s();"*/"!==o(2)&&r<t.length;)i+=t[r++];n.push({color:e.annotation,content:i+o(2)}),r+=2,i=""}else if("//"==o(2)){for(s();"\n"!==o(1)&&r<t.length;)i+=t[r++];n.push({color:e.annotation,content:i}),i=""}else if(["'",'"',"`"].indexOf(o(1))>-1){var l=o(1);s();do{i+=t[r++]}while(o(1)!=l&&r<t.length);o(1)!=l?l="":r+=1,n.push({color:e.string,content:i+l}),i=""}else if("("==o(1)&&(" "==i[0]||r-i.length-1>=0&&" "==t[r-i.length-1]))n.push({color:e.funName,content:i}),r+=1,i="(";else if("("==o(1))n.push({color:e.execName,content:i}),r+=1,i="(";else if([";","{","}","(",")",".","\n","=","+",">","<","[","]","-","*","/","^","*","!"].indexOf(o(1))>-1)s(),n.push({color:e.insign,content:o(1)}),i="",r+=1;else if(" "==o(1)&&v.indexOf(i.trim())>-1)n.push({color:e.key,content:i+" "}),i="",r+=1;else{if(r>=t.length){s();break}i+=t[r++]}return n}function b(t,e){for(var n=[],r=0,o=function(e){return t.substring(r,e+r>t.length?t.length:e+r)},i="",s=function(){""!=i&&n.push({color:e.text,content:i}),i=""},l=function(){var s=" ";'"'==o(1)&&(s='"'),"'"==o(1)&&(s="'");do{i+=t[r++]}while(o(1)!=s&&r<t.length);" "!=s&&r<t.length&&(i+=s,r+=1),n.push({color:e.attrValue,content:i}),i=""};;)if("\x3c!--"==o(4)){for(s();"--\x3e"!==o(3)&&r<t.length;)i+=t[r++];n.push({color:e.annotation,content:i+o(3)}),r+=3,i=""}else if("</"==o(2)){for(s(),n.push({color:e.insign,content:"</"}),r+=2;">"!==o(1)&&r<t.length;)i+=t[r++];""!=i&&(n.push({color:e.node,content:i}),i="",r<t.length&&(n.push({color:e.insign,content:">"}),r+=1))}else if("<"==o(1)&&"< "!=o(2)){var a="";for(s(),n.push({color:e.insign,content:"<"}),r+=1;">"!=o(1)&&" "!=o(1)&&r<t.length;)i+=t[r++];if(""!=i&&("style"!=i&&"script"!=i||(a="</"+i+">"),n.push({color:e.node,content:i}),i="",r<t.length))for(;r<t.length;){if(">"==o(1)){s(),n.push({color:e.insign,content:">"}),r+=1;break}if(" "!=o(1))if(s(),'"'!=o(1)&&"'"!=o(1)){for(;"="!=o(1)&&">"!=o(1)&&r<t.length&&" "!=o(1);)i+=t[r++];""!=i?(n.push({color:e.attrKey,content:i}),i="","="==o(1)&&(n.push({color:e.insign,content:"="}),(r+=1)<t.length&&" "!=o(1)&&">"!=o(1)&&l())):i+=t[r++]}else"="==o(1)?(n.push({color:e.insign,content:"="}),r+=1):r<t.length&&" "!=o(1)&&">"!=o(1)&&l();else i+=t[r++]}if(""!=a){for(var c=r,u=i;o(a.length)!=a&&r<t.length;)i+=t[r++];if(r<t.length){var f=a.replace(/<\//,"");({"style>":g,"script>":y})[f](i,{"style>":e._css,"script>":e._javascript}[f]).forEach((function(t){n.push(t)})),i=""}else i=u,r=c}}else{if(r>=t.length){s();break}i+=t[r++]}return n}var N=function(t){var e=[[]],n=0;return t.forEach((function(t){var r=t.content.split(/\n/);e[n].push({color:t.color,content:r[0]});for(var o=1;o<r.length;o++)n+=1,e.push([]),e[n].push({color:t.color,content:r[o]})})),e},$=function(t,e){for(var n in e)try{t[n]=e[n]}catch(t){throw new Error("Illegal property value！")}return t},x={text:"#000000",annotation:"#6a9955",insign:"#ffffff",node:"#1e50b3",attrKey:"#1e83b1",attrValue:"#ac4c1e"},w={annotation:"#6a9955",insign:"#ffffff",selector:"#1e50b3",attrKey:"#1e83b1",attrValue:"#ac4c1e"},O={text:"#000000",annotation:"#6a9955",insign:"#ffffff",key:"#ff0000",string:"#ac4c1e",funName:"#1e50b3",execName:"#1e83b1"};function A(t){var e,n,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if("html"==t)r._css=$(w,r.css),r._javascript=$(O,r.javascript),n=$(x,r),e=b;else if("css"==t)n=$(w,r),e=g;else{if("javascript"!=t)throw new Error("Language not supported:"+t+",The languages available include: html、css、javascript!");n=$(O,r),e=y}return function(t){return N(e(t,n))}}var j=function t(n){var r=this;if(!(this instanceof t))throw new Error("Open-Web-Editor is a constructor and should be called with the `new` keyword");if(!u(n.el))throw new Error("options.el is not a element!");this._el=n.el,this._el.owe_terminal="none",n.color=n.color||{},this._colorBackground=n.color.background||"#d6d6e4",this._colorText=n.color.text||"#000000",this._colorNumber=n.color.number||"#888484",this._colorEdit=n.color.edit||"#eaeaf1",this._colorCursor=n.color.cursor||"#ff0000",this._colorSelect=n.color.select||"#6c6cf1",this._fontFamily=n["font-family"]||"新宋体",this._fontWeight=n["font-weight"]||600,this._tabSpace=n.tabSpace||4,this._readonly=n.readonly||!1,this._noLineNumber=n.noLineNumber||!1,this._contentArray=a(n.content)?(this.$$filterText(n.content)+"").split("\n"):[""],this.$shader=c(n.shader)?n.shader:function(t){return Array.isArray(t)}(n.shader)?A.apply(void 0,e(n.shader)):function(){var t=[];return r._contentArray.forEach((function(e){t.push([{content:e,color:r._colorText}])})),t},this.$format=c(n.format)?n.format:function(t){return t},this.$input=c(n.input)?n.input:null,this.$$initDom(),this.__needUpdate=!0,this.__lineNum=this._contentArray.length-1,this.__leftNum=this._contentArray[this.__lineNum].length,this.__cursor1=this.__cursor2={leftNum:0,lineNum:0},this.__formatData=this.$$diff(this.$shader(this._contentArray.join("\n"))),this.$$initView(),this.$$updateView(),this.$$bindEvent(),this.__updated__=function(){},this.updated=function(t){r.__updated__=t},this.valueOf=function(){return r._contentArray.join("\n")},this.input=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0;0!=e&&(0!=n&&(r._contentArray[r.__lineNum]=r._contentArray[r.__lineNum].substring(0,r.__leftNum+e)+r._contentArray[r.__lineNum].substring(r.__leftNum+e+n)),r.__leftNum+=e),r.__focusDOM.value=t,f.trigger(r.__focusDOM,"input"),r.__focusDOM.focus()},this.format=function(){r._contentArray=r.$format(r._contentArray.join("\n"),r._tabSpace).split("\n"),r.__lineNum=r._contentArray.length-1,r.__leftNum=r._contentArray[r.__lineNum].length,r.__formatData=r.$$diff(r.$shader(r._contentArray.join("\n"))),r.$$updateView(),r.$$initView()},this.copy=function(t,e){f.copy(r.valueOf(),t,e)}};j.prototype.$$textWidth=function(t){return this.__helpCalcDOM.innerText=t,this.__helpCalcDOM.offsetWidth},j.prototype.$$bestLeftNum=function(t,e){arguments.length<2&&(e=e||this.__lineNum);var n=this._contentArray[e];if(t<=40)return 0;if(t-40>=this.$$textWidth(n))return n.length;for(var r=t-40,o=1;o<n.length;o++){var i=Math.abs(t-40-this.$$textWidth(n.substr(0,o)));if(i>r)break;r=i}return o-1},j.prototype.$$calcCanvasXY=function(t,e){return{x:this.$$textWidth(this._contentArray[e].substr(0,t)),y:21*e}},j.prototype.$$selectIsNotBlank=function(){return this.__cursor1.lineNum!=this.__cursor2.lineNum||this.__cursor1.leftNum!=this.__cursor2.leftNum},j.prototype.$$filterText=function(t){for(var e="",n=0;n<this._tabSpace;n++)e+=" ";return t.replace(/\t/g,e)},j.prototype.$$toTemplate=function(t,e,n){var r=this,o="";return o+="<div style='min-width: fit-content;white-space: nowrap;line-height:21px;height:21px;'>",o+="<em style='"+(n?"font-size:0;":"")+"color:"+this._colorNumber+";user-select: none;display:inline-block;font-style:normal;width:35px;text-align:right;margin-right:5px;'>"+(e+1)+"</em>",t.forEach((function(t){var e=t.content;e=(e=(e=e.replace(/\&/g,"&amp;")).replace(/</g,"&lt;")).replace(/>/g,"&gt;"),o+="<span style='user-select: none;font-weight:"+r._fontWeight+";white-space: pre;color:"+t.color+"'>"+e+"</span>"})),o+"</div>"},j.prototype.$$initDom=function(){var t=this;this._el.innerHTML="",f.css(this._el,{"font-size":"12px",position:"relative",cursor:"text","font-family":this._fontFamily,background:this._colorBackground,overflow:"auto"}),f.bind(this._el,"click",(function(){setTimeout((function(){t.__focusDOM.focus()}))})),this.__helpCalcDOM=f.appendTo(this._el,"<span></span>"),f.css(this.__helpCalcDOM,{position:"absolute","z-index":"-1","white-space":"pre",top:0,left:0,color:"rgba(0,0,0,0)","font-weight":this._fontWeight}),this.__helpInputDOM=f.appendTo(this._el,"<div></div>"),f.css(this.__helpInputDOM,{position:"absolute","z-index":1}),f.bind(this.__helpInputDOM,"click",(function(e){f.stopPropagation(e),f.preventDefault(e),t.__focusDOM.focus()})),this.__focusDOM=f.appendTo(this._el,"<textarea></textarea>"),f.css(this.__focusDOM,{position:"absolute",width:"6px","margin-top":"3px",height:"15px","line-height":"15px",resize:"none",overflow:"hidden",padding:"0",outline:"none",border:"none",background:"rgba(0,0,0,0)",color:this._colorCursor}),f.attr(this.__focusDOM,{wrap:"off",autocorrect:"off",autocapitalize:"off",spellcheck:"false"}),this._readonly&&f.attr(this.__focusDOM,{readonly:!0}),this.__showDOM=f.appendTo(this._el,"<div></div>"),f.css(this.__showDOM,{padding:"10px 0"}),this.__selectCanvas=f.appendTo(this._el,"<canvas></canvas>"),f.css(this.__selectCanvas,{position:"absolute",left:"40px",top:"10px",opacity:"0.5"}),this.$$updateCanvasSize(1,1)},j.prototype.$$initView=function(){f.css(this.__focusDOM,{left:40+this.$$textWidth(this._contentArray[this.__lineNum])+"px",top:10+21*this.__lineNum+"px"})},j.prototype.$$updateView=function(){var t=this;if(this.__diff&&this.__diff.beginNum+this.__diff.endNum>10){for(var e=this.__showDOM.childNodes,n=e.length-this.__diff.endNum-1;n>=this.__diff.beginNum;n--)f.remove(e[n]);if(this.__diff.beginNum>0)for(var r=this.__formatData.length-1-this.__diff.endNum;r>=this.__diff.beginNum;r--)f.after(e[this.__diff.beginNum-1],this.$$toTemplate(this.__formatData[r],r,this._noLineNumber));else for(var o=this.__formatData.length-this.__diff.endNum-1;o>=0;o--)f.prependTo(this.__showDOM,this.$$toTemplate(this.__formatData[o],o,this._noLineNumber));e=this.__showDOM.childNodes;for(var i=this.__diff.beginNum;i<this.__formatData.length;i++)e[i].getElementsByTagName("em")[0].innerText=i+1}else if("not update"!=this.__diff){var s="";this.__formatData.forEach((function(e,n){s+=t.$$toTemplate(e,n,t._noLineNumber)})),this.__showDOM.innerHTML=s}this.__diff="not update";var l=this.__showDOM.childNodes[this.__lineNum];!this._readonly&&this.__lineDom&&(this.__lineDom.style.backgroundColor="rgba(0, 0, 0, 0)",l.style.backgroundColor=this._colorEdit),this.__lineDom=l},j.prototype.$$updateSelectView=function(){var t=this,e=this.__selectCanvas.getContext("2d");e.fillStyle=this._colorSelect,e.clearRect(0,0,this.__selectCanvas.scrollWidth,this.__selectCanvas.scrollHeight);var n=function(n,r,o){var i=t.$$calcCanvasXY(n,o),s=t.$$calcCanvasXY(r,o);n==r&&0==n?e.fillRect(i.x,i.y,5,21):e.fillRect(i.x,i.y,s.x-i.x,21)};if(this.__cursor1.lineNum!=this.__cursor2.lineNum||this.__cursor1.leftNum!=this.__cursor2.leftNum)if(e.beginPath(),this.__cursor1.lineNum==this.__cursor2.lineNum)n(this.__cursor1.leftNum,this.__cursor2.leftNum,this.__cursor1.lineNum);else{var r,o;this.__cursor1.lineNum<this.__cursor2.lineNum?(r=this.__cursor1,o=this.__cursor2):(r=this.__cursor2,o=this.__cursor1),n(r.leftNum,this._contentArray[r.lineNum].length,r.lineNum),n(0,o.leftNum,o.lineNum);for(var i=r.lineNum+1;i<o.lineNum;i++)n(0,this._contentArray[i].length,i)}},j.prototype.$$updateCursorPosition=function(){this.__cursorTop=21*this.__lineNum+10,this.__cursorLeft=40+this.$$textWidth(this._contentArray[this.__lineNum].substring(0,this.__leftNum)),f.css(this.__focusDOM,{top:this.__cursorTop+"px",left:this.__cursorLeft+"px"})},j.prototype.$$updateCanvasSize=function(t,e){arguments.length<2&&(t=this._el.scrollWidth-40,e=this._el.scrollHeight-10),f.css(this.__selectCanvas,{width:t+"px",height:e+"px"}),f.attr(this.__selectCanvas,{width:t,height:e})},j.prototype.$$cancelSelect=function(){this.$$updateCanvasSize(1,1),this.__cursor1={leftNum:0,lineNum:0},this.__cursor2={leftNum:0,lineNum:0}},j.prototype.$$deleteSelect=function(){var t=this.__cursor2,e=this.__cursor1;(this.__cursor1.lineNum<this.__cursor2.lineNum||this.__cursor1.lineNum==this.__cursor2.lineNum&&this.__cursor1.leftNum<this.__cursor2.leftNum)&&(t=this.__cursor1,e=this.__cursor2);var n=this._contentArray[t.lineNum].substr(0,t.leftNum)+this._contentArray[e.lineNum].substr(e.leftNum);this._contentArray.splice(t.lineNum,e.lineNum-t.lineNum+1,n),this.__leftNum=this.__cursor1.leftNum=this.__cursor2.leftNum=t.leftNum,this.__lineNum=this.__cursor1.lineNum=this.__cursor2.lineNum=t.lineNum,this.$$cancelSelect()},j.prototype.$$bindEvent=function(){var t=this,n=!1,r=function(e){var n=f.position(t._el,e),r=Math.round((n.y-20.5)/21);return r<0&&(r=0),r>=t._contentArray.length&&(r=t._contentArray.length-1),{leftNum:t.$$bestLeftNum(n.x,r),lineNum:r}},o=function(){var e=t.__cursor2,n=t.__cursor1;if(t.__cursor1.lineNum<t.__cursor2.lineNum)e=t.__cursor1,n=t.__cursor2;else if(t.__cursor1.lineNum==t.__cursor2.lineNum)return t.__cursor1.leftNum<t.__cursor2.leftNum&&(e=t.__cursor1,n=t.__cursor2),t._contentArray[e.lineNum].substring(e.leftNum,n.leftNum);var r="";r+=t._contentArray[e.lineNum].substr(e.leftNum)+"\n";for(var o=e.lineNum+1;o<n.lineNum;o++)r+=t._contentArray[o]+"\n";return r+=t._contentArray[n.lineNum].substr(0,n.leftNum)};f.bind(this._el,"mousedown",(function(e){n=!0,t.__cursor2=t.__cursor1=r(e),t.$$updateCanvasSize(),t.$$updateSelectView()})),f.bind(this._el,"mousemove",(function(e){n&&(t.__cursor2=r(e),t.$$updateSelectView())})),f.bind(this._el,"mouseup",(function(){return n=!1})),f.bind(this._el,"mouseout",(function(){return n=!1})),f.bind(this._el,"click",(function(e){t.__helpInputDOM.innerHTML="";var n=f.position(t._el,e),r=Math.round((n.y-20.5)/21);r<0||r>=t._contentArray.length||(t.__lineNum=r,t.__leftNum=t.$$bestLeftNum(n.x),t.$$updateCursorPosition(),t.$$updateView())}));var i=function(n){if(n=n||t.__focusDOM.value,n=t.$$filterText(n),t.__focusDOM.value="",t.$$selectIsNotBlank()&&t.$$deleteSelect(),/^\n$/.test(n))t.__leftNum>=t._contentArray[t.__lineNum].length?t._contentArray.splice(t.__lineNum+1,0,""):(t._contentArray.splice(t.__lineNum+1,0,t._contentArray[t.__lineNum].substring(t.__leftNum)),t._contentArray[t.__lineNum]=t._contentArray[t.__lineNum].substring(0,t.__leftNum)),t.__lineNum+=1,t.__leftNum=0;else{var r=n.split(/\n/);if(r.length<=1)t._contentArray[t.__lineNum]=t._contentArray[t.__lineNum].substring(0,t.__leftNum)+n+t._contentArray[t.__lineNum].substring(t.__leftNum),t.__leftNum+=n.length;else{var o,i=t._contentArray[t.__lineNum].substring(0,t.__leftNum),s=t._contentArray[t.__lineNum].substring(t.__leftNum);r[0]=i+r[0],r[r.length-1]+=s,(o=t._contentArray).splice.apply(o,[t.__lineNum,1].concat(e(r))),t.__lineNum+=r.length-1,t.__leftNum=r[r.length-1].length-s.length}}t.__formatData=t.$$diff(t.$shader(t._contentArray.join("\n"))),t.$$updateCursorPosition(),t.$$updateView(),t.__updated__()};f.bind(this.__focusDOM,"compositionstart",(function(){t.__needUpdate=!1,t.__focusDOM.style.color="rgba(0,0,0,0)",t.__focusDOM.style.borderLeft="1px solid "+t._colorCursor})),f.bind(this.__focusDOM,"compositionend",(function(){t.__needUpdate=!0,t.__focusDOM.style.color=t._colorCursor,t.__focusDOM.style.borderLeft="none",i(),null!=t.$input&&(t.__helpInputEvent=t.$input(t.__helpInputDOM,_(t),t._contentArray)||{})})),f.bind(this.__focusDOM,"input",(function(){t.__needUpdate&&(i(),null!=t.$input&&(t.__helpInputEvent=t.$input(t.__helpInputDOM,_(t),t._contentArray)||{}))}));var s=!1;f.bind(this._el,"keyup",(function(t){"command"==d(t)&&(s=!1)})),f.bind(this._el,"keydown",(function(e){var n=d(e);if("command"==n&&(s=!0),s&&["a","c","x"].indexOf(n)>-1&&(n="ctrl+"+n),""!=t.__helpInputDOM.innerHTML){var r=t.__helpInputEvent[n];if(c(r)){if(!r())return}else t.__helpInputDOM.innerHTML=""}if(!(t._readonly&&["ctrl+a","ctrl+c"].indexOf(n)<0))switch(n){case"ctrl+a":t.__cursor1={leftNum:0,lineNum:0},t.__cursor2={lineNum:t._contentArray.length-1,leftNum:t._contentArray[t._contentArray.length-1].length},t.$$updateSelectView();break;case"ctrl+c":t.$$selectIsNotBlank()&&(f.copy(o()),t.__focusDOM.focus());break;case"ctrl+x":t.$$selectIsNotBlank()&&(f.copy(o()),t.__focusDOM.focus(),t.$$deleteSelect(),t.__formatData=t.$$diff(t.$shader(t._contentArray.join("\n"))),t.$$updateCursorPosition(),t.$$updateView(),t.$$cancelSelect(),t.__updated__());break;case"tab":f.stopPropagation(e),f.preventDefault(e);for(var l="",a=0;a<t._tabSpace;a++)l+=" ";if(t.$$selectIsNotBlank()){var u=t.__cursor1.lineNum,_=t.__cursor2.lineNum;u>_&&(u=t.__cursor2.lineNum,_=t.__cursor1.lineNum);for(var h=u;h<=_;h++)t._contentArray[h]=l+t._contentArray[h];t.__cursor1.leftNum+=t._tabSpace,t.__cursor2.leftNum+=t._tabSpace,t.__leftNum+=t._tabSpace,t.__formatData=t.$$diff(t.$shader(t._contentArray.join("\n"))),t.$$updateCursorPosition(),t.$$updateView(),t.$$updateCanvasSize(),t.$$updateSelectView(),t.__updated__()}else i(l);break;case"up":if(t.__lineNum<=0)return;t.__lineNum-=1,t.__leftNum=t.$$bestLeftNum(t.$$textWidth(t._contentArray[t.__lineNum+1].substr(0,t.__leftNum))+40),t.$$updateCursorPosition(),t.$$updateView(),t.$$cancelSelect(),t._el.scrollTop-=21;break;case"down":if(t.__lineNum>=t._contentArray.length-1)return;t.__lineNum+=1,t.__leftNum=t.$$bestLeftNum(t.$$textWidth(t._contentArray[t.__lineNum-1].substr(0,t.__leftNum))+40),t.$$updateCursorPosition(),t.$$updateView(),t.$$cancelSelect(),t._el.scrollTop+=21;break;case"left":if(t.__leftNum<=0){if(t.__lineNum<=0)return;t.__lineNum-=1,t.__leftNum=t._contentArray[t.__lineNum].length}else t.__leftNum-=1;t.$$updateCursorPosition(),t.$$cancelSelect();break;case"right":if(t.__leftNum>=t._contentArray[t.__lineNum].length){if(t.__lineNum>=t._contentArray.length-1)return;t.__lineNum+=1,t.__leftNum=0}else t.__leftNum+=1;t.$$updateCursorPosition(),t.$$cancelSelect();break;case"backspace":if(t.$$selectIsNotBlank())t.$$deleteSelect();else if(t.__leftNum<=0){if(t.__lineNum<=0)return;t.__lineNum-=1,t.__leftNum=t._contentArray[t.__lineNum].length,t._contentArray[t.__lineNum]+=t._contentArray[t.__lineNum+1],t._contentArray.splice(t.__lineNum+1,1)}else t.__leftNum-=1,t._contentArray[t.__lineNum]=t._contentArray[t.__lineNum].substring(0,t.__leftNum)+t._contentArray[t.__lineNum].substring(t.__leftNum+1);t.__formatData=t.$$diff(t.$shader(t._contentArray.join("\n"))),t.$$updateCursorPosition(),t.$$updateView(),t.$$cancelSelect(),t.__updated__()}}))},j.prototype.$$diff=function(t){var e=this.__formatData;if(e){for(var n=0,r=0;r<e.length&&r<t.length&&m(e[r],t[r]);r++)n+=1;for(var o=0,i=1;i<=e.length&&i<=t.length&&m(e[e.length-i],t[t.length-i]);i++)o+=1;var s=Math.min(e.length,t.length);n+o>=s&&(o=s-n-1)<0&&(o=0),this.__diff={beginNum:n,endNum:o}}return t},"object"===o(t)&&"object"===o(t.exports)?t.exports=j:window.OpenWebEditor=j}()})),E={inserted:function(t,e){var n=t.innerHTML.replace(/&lt;/g,"<").replace(/&gt;/g,">").replace(/&amp;/g,"&"),r=new k({el:t,content:n,readonly:"editor"!=e.type,shader:[e.exp||"javascript",{insign:"#000000",css:{insign:"#000000"},javascript:{insign:"#000000"}}],color:{background:"rgb(239, 235, 234)",text:"#000000",number:"#888484",edit:"#eaeaf1",cursor:"#ff0000",select:"gray"},noLineNumber:!/\n/.test(n)}),o=j.prepend(t,'<span class="copy-btn" title="复制到剪切板">复制<span></span></span>');j.bind(o,"click",(function(){r.copy((function(){alert("复制成功")}),(function(t){console.log(t),alert("复制失败")}))})),j.setStyles(o,_defineProperty2({position:"absolute",right:"10px",top:"6px",border:"none",outline:0,padding:"4p 10p",transition:"0.2s","font-size":"12px",cursor:"pointer","z-index":1,"line-height":"20px","background-color":"#f8f8f8"},"padding","5px 10px")),t.__owe__=r}};N.directive("qCode",E),N.urlFormat=function(t){var e,n,r=t.split("?"),o=(r[0]+"#").split("#")[1].replace(/^\//,"").replace(/\/$/,"").split("/"),i=r[1]||"";return""==i?e={}:(n=i.split("&"),e={},n.forEach((function(t){var n=t.split("=");e[n[0]]=n[1]}))),{router:""==o[0]?[]:o,params:e}},N.prototype.__OpenWebEditor=k,N.__OpenWebEditor=k,"object"===("undefined"==typeof module?"undefined":_typeof2(module))&&"object"===_typeof2(module.exports)?module.exports=N:window.QuickPaper=N}();
  
    return __etcpack__scope_bundle__;
}

/*************************** [bundle] ****************************/
// Original file:./node_modules/@hai2007/polyfill/Promise.js
/*****************************************************************/
window.__etcpack__bundleSrc__['3']=function(){
    var __etcpack__scope_bundle__={};
    var __etcpack__scope_args__;
    /*!
 * ✔️ - Promise
 * https://github.com/hai2007/polyfill.js/blob/master/Promise.js
 *
 * author hai2007 < https://hai2007.gitee.io/sweethome >
 *
 * Copyright (c) 2021-present hai2007 走一步，再走一步。
 * Released under the MIT license
 */

__etcpack__scope_args__=window.__etcpack__getBundle('4');
var globalNAMESPACE =__etcpack__scope_args__.default;

__etcpack__scope_args__=window.__etcpack__getBundle('5');
var isFunction=__etcpack__scope_args__.isFunction;
var isObject=__etcpack__scope_args__.isObject;
var isArray=__etcpack__scope_args__.isArray;

__etcpack__scope_args__=window.__etcpack__getBundle('15');
var doResolve=__etcpack__scope_args__.doResolve;
var changeState=__etcpack__scope_args__.changeState;
var triggerEvent=__etcpack__scope_args__.triggerEvent;


function Promise(doback) {

    if (!(this instanceof Promise)) {

        // 所有的报错方式和内容我们都尽力和原生的保持一致，下同
        throw new TypeError('undefined is not a promise');
    }

    if (!(isFunction(doback))) {
        throw new TypeError('Promise resolver ' + doback + ' is not a function');
    }

    /**
     * 参数初始化
     */

    // 当前的值
    this.__value = undefined;

    // 记录着由于then，catch或finally登记的方法
    // Array<onFulfilled|undefined, onRejected|undefined, callback|undefined>
    this.__hocks = [];

    // 状态
    this.__state = 'pending';

    /**
     * 准备完毕以后，开始处理
     */
    doResolve(doback, this);
}

// 添加辅助方法
Promise.prototype.$$changeState = changeState;
Promise.prototype.$$triggerEvent = triggerEvent;

/**
 * 原型上的方法
 */

// 添加解决(fulfillment)和拒绝(rejection)回调到当前 promise,
// 返回一个新的 promise,
// 将以回调的返回值来resolve。
Promise.prototype.then = function (onFulfilled, onRejected) {

    this.__hocks.push([onFulfilled, onRejected, undefined]);

    if (this.__state != 'pending') { this.$$triggerEvent(); }

    return this;

};

// 添加一个拒绝(rejection) 回调到当前 promise, 返回一个新的promise。
// 当这个回调函数被调用，
// 新 promise 将以它的返回值来resolve，
// 否则如果当前promise 进入fulfilled状态，
// 则以当前promise的完成结果作为新promise的完成结果。
Promise.prototype.catch = function (onRejected) {

    this.__hocks.push([undefined, onRejected, undefined]);

    if (this.__state != 'pending') { this.$$triggerEvent(); }

    return this;

};

// 添加一个事件处理回调于当前promise对象，
// 并且在原promise对象解析完毕后，
// 返回一个新的promise对象。
// 回调会在当前promise运行完毕后被调用，
// 无论当前promise的状态是完成(fulfilled)还是失败(rejected)。
Promise.prototype.finally = function (callback) {

    this.__hocks.push([undefined, undefined, callback]);

    if (this.__state != 'pending') { this.$$triggerEvent(); }

    return this;


};

/**
 * 静态方法
 */

// 返回一个状态由给定value决定的Promise对象。
// 如果该值是thenable(即，带有then方法的对象)，
// 返回的Promise对象的最终状态由then方法执行决定；
// 否则的话(该value为空，基本类型或者不带then方法的对象),
// 返回的Promise对象状态为fulfilled，
// 并且将该value传递给对应的then方法。
// 通常而言，如果您不知道一个值是否是Promise对象，使用Promise.resolve(value) 来返回一个Promise对象,
// 这样就能将该value以Promise对象形式使用。
Promise.resolve = function (value) {

    if (isObject(value) && value.constructor === Promise) {
        return value;
    }

    return new Promise(function (resolve) {
        resolve(value);
    });

};

// 返回一个状态为失败的Promise对象，
// 并将给定的失败信息传递给对应的处理方法。
Promise.reject = function (reason) {

    return new Promise(function (resolve, reject) {
        reject(reason);
    });

};

// 这个方法返回一个新的promise对象，
// 该promise对象在iterable参数对象里所有的promise对象都成功的时候才会触发成功，
// 一旦有任何一个iterable里面的promise对象失败则立即触发该promise对象的失败。
// 这个新的promise对象在触发成功状态以后，
// 会把一个包含iterable里所有promise返回值的数组作为成功回调的返回值，
// 顺序跟iterable的顺序保持一致；
// 如果这个新的promise对象触发了失败状态，
// 它会把iterable里第一个触发失败的promise对象的错误信息作为它的失败错误信息。
// Promise.all方法常被用于处理多个promise对象的状态集合.
Promise.all = function (iterable) {

    return new Promise(function (resolve, reject) {

        if (!isArray(iterable)) {
            return reject(new TypeError('undefined is not iterable (cannot read property Symbol(Symbol.iterator))'));
        }

        var resultData = Array.prototype.slice.call(iterable), num = 0;

        if (resultData.length == 0) resolve([]);

        var doHelp = function (index, item) {
            if (item.__state !== "pending") {

                num += 1;

                if (item.__state == 'rejected') {

                    // 如果遇到第一个失败的，拒绝即可
                    reject(item.__value);
                } else {

                    resultData[index] = item.__value;

                    if (num == resultData.length) {
                        resolve(resultData);
                    }
                }

            } else {
                setTimeout(function () { doHelp(index, item); });
            }
        };

        for (var i = 0; i < resultData.length; i++) {
            doHelp(i, resultData[i]);
        }

    });

};

// 等到所有promises都已敲定（settled）（每个promise都已兑现（fulfilled）或已拒绝（rejected））。
// 返回一个promise，该promise在所有promise完成后完成。并带有一个对象数组，每个对象对应每个promise的结果。
Promise.allSettled = function (iterable) {

    return new Promise(function (resolve, reject) {

        if (!isArray(iterable)) {
            return reject(new TypeError('undefined is not iterable (cannot read property Symbol(Symbol.iterator))'));
        }

        var resultData = Array.prototype.slice.call(iterable), num = 0;

        if (resultData.length == 0) resolve([]);

        var doHelp = function (index, item) {
            if (item.__state !== "pending") {

                num += 1;

                resultData[index] = {
                    status: item.__state
                };

                if (item.__state == 'fulfilled') {
                    resultData[index].value = item.__value;
                } else {
                    resultData[index].reason = item.__value;
                }

                if (num == resultData.length) {
                    resolve(resultData);
                }

            } else {
                setTimeout(function () { doHelp(index, item); });
            }
        };

        for (var i = 0; i < resultData.length; i++) {
            doHelp(i, resultData[i]);
        }

    });

};
// 收一个Promise对象的集合，
// 当其中的一个 promise 成功，
// 就返回那个成功的promise的值。
Promise.any = function (iterable) {

    return new Promise(function (resolve, reject) {

        if (!isArray(iterable)) {
            return reject(new TypeError('undefined is not iterable (cannot read property Symbol(Symbol.iterator))'));
        }

        var num = 0;

        if (iterable.length == 0) resolve(undefined);

        var doHelp = function (index, item) {
            if (item.__state !== "pending") {

                num += 1;

                if (item.__state == 'rejected') {

                    if (num == iterable.length) {

                        // 为了兼容性，我们放弃AggregateError
                        return reject(new Error('All promises were rejected'));
                    }

                } else {

                    // 遇到第一个成功的，标记解决即可
                    resolve(item.__value);

                }

            } else {
                setTimeout(function () { doHelp(index, item); });
            }
        };

        for (var i = 0; i < iterable.length; i++) {
            doHelp(i, iterable[i]);
        }

    });
};

// 当iterable参数里的任意一个子promise被成功或失败后，
// 父promise马上也会用子promise的成功返回值或失败详情作为参数调用父promise绑定的相应句柄，
// 并返回该promise对象。
Promise.race = function (iterable) {

    return new Promise(function (resolve, reject) {

        if (!isArray(iterable)) {
            return reject(new TypeError('undefined is not iterable (cannot read property Symbol(Symbol.iterator))'));
        }

        if (iterable.length == 0) resolve(undefined);

        var doHelp = function (index, item) {
            if (item.__state !== "pending") {

                if (item.__state == 'rejected') {
                    reject(item.__value);
                } else {
                    resolve(item.__value);
                }

            } else {
                setTimeout(function () { doHelp(index, item); });
            }
        };

        for (var i = 0; i < iterable.length; i++) {
            doHelp(i, iterable[i]);
        }

    });
};

// 如果Promise不存在
if (!('Promise' in globalNAMESPACE)) {
    globalNAMESPACE['Promise'] = Promise;
}

// 由于不同浏览器对一些具体的方法兼容不一样
// （比如一些浏览器支持Promise，可是不支持某个方法，需要对该方法进行兼容）
// 需要进一步嗅探
// 推迟支持

  
    return __etcpack__scope_bundle__;
}

/*************************** [bundle] ****************************/
// Original file:./node_modules/@hai2007/polyfill/.inner/globalNAMESPACE.js
/*****************************************************************/
window.__etcpack__bundleSrc__['4']=function(){
    var __etcpack__scope_bundle__={};
    var __etcpack__scope_args__;
    var globalNAMESPACE = (function () {

    // 浏览器环境
    if (typeof window !== 'undefined') return window;

    // nodejs环境
    if (typeof global !== 'undefined') return global;

    throw new Error('The current environment is not known!');

})();

// 获取当前环境的全局变量
__etcpack__scope_bundle__.default= globalNAMESPACE;

  
    return __etcpack__scope_bundle__;
}

/*************************** [bundle] ****************************/
// Original file:./node_modules/@hai2007/tool/type.js
/*****************************************************************/
window.__etcpack__bundleSrc__['5']=function(){
    var __etcpack__scope_bundle__={};
    var __etcpack__scope_args__;
    __etcpack__scope_args__=window.__etcpack__getBundle('6');
var _isObject =__etcpack__scope_args__.default;


__etcpack__scope_args__=window.__etcpack__getBundle('7');
var _isBoolean =__etcpack__scope_args__.default;

__etcpack__scope_args__=window.__etcpack__getBundle('9');
var _isNumber =__etcpack__scope_args__.default;

__etcpack__scope_args__=window.__etcpack__getBundle('10');
var _isString =__etcpack__scope_args__.default;

__etcpack__scope_args__=window.__etcpack__getBundle('11');
var _isSymbol =__etcpack__scope_args__.default;


__etcpack__scope_args__=window.__etcpack__getBundle('12');
var _isFunction =__etcpack__scope_args__.default;


__etcpack__scope_args__=window.__etcpack__getBundle('13');
var _isError =__etcpack__scope_args__.default;

__etcpack__scope_args__=window.__etcpack__getBundle('14');
var _isPlainObject =__etcpack__scope_args__.default;


var domTypeHelp = function (types, value) {
    return value !== null && typeof value === 'object' &&
        types.indexOf(value.nodeType) > -1 &&
        !_isPlainObject(value);
};

/*!
 * 💡 - 值类型判断方法
 * https://github.com/hai2007/tool.js/blob/master/type.js
 *
 * author hai2007 < https://hai2007.gitee.io/sweethome >
 *
 * Copyright (c) 2020-present hai2007 走一步，再走一步。
 * Released under the MIT license
 */

__etcpack__scope_bundle__.isObject = _isObject;

// 基本类型
__etcpack__scope_bundle__.isUndefined = function (input) { return input === undefined };
__etcpack__scope_bundle__.isNull = function (input) { return input === null };
__etcpack__scope_bundle__.isBoolean = _isBoolean;
__etcpack__scope_bundle__.isNumber = _isNumber;
__etcpack__scope_bundle__.isString = _isString;
__etcpack__scope_bundle__.isSymbol = _isSymbol;

// 引用类型
__etcpack__scope_bundle__.isFunction = _isFunction;
__etcpack__scope_bundle__.isArray = function (input) { return Array.isArray(input) };
__etcpack__scope_bundle__.isError = _isError;
__etcpack__scope_bundle__.isPlainObject = _isPlainObject;

// 结点类型
__etcpack__scope_bundle__.isElement = function (input) { return domTypeHelp([1, 9, 11], input) };
__etcpack__scope_bundle__.isAttribute = function (input) { return domTypeHelp([2], input) };
__etcpack__scope_bundle__.isText = function (input) { return domTypeHelp([3], input) };
__etcpack__scope_bundle__.isComment = function (input) { return domTypeHelp([8], input) };

  
    return __etcpack__scope_bundle__;
}

/*************************** [bundle] ****************************/
// Original file:./node_modules/@hai2007/tool/.inner/type/isObject.js
/*****************************************************************/
window.__etcpack__bundleSrc__['6']=function(){
    var __etcpack__scope_bundle__={};
    var __etcpack__scope_args__;
    /**
 * 判断一个值是不是Object。
 *
 * @param {*} value 需要判断类型的值
 * @returns {boolean} 如果是Object返回true，否则返回false
 */
__etcpack__scope_bundle__.default= function (value) {
    var type = typeof value;
    return value != null && (type === 'object' || type === 'function');
};

  
    return __etcpack__scope_bundle__;
}

/*************************** [bundle] ****************************/
// Original file:./node_modules/@hai2007/tool/.inner/type/isBoolean.js
/*****************************************************************/
window.__etcpack__bundleSrc__['7']=function(){
    var __etcpack__scope_bundle__={};
    var __etcpack__scope_args__;
    __etcpack__scope_args__=window.__etcpack__getBundle('8');
var getType =__etcpack__scope_args__.default;


/**
 * 判断一个值是不是Boolean。
 *
 * @param {*} value 需要判断类型的值
 * @returns {boolean} 如果是Boolean返回true，否则返回false
 */
__etcpack__scope_bundle__.default= function (value) {
    return value === true || value === false ||
        (value !== null && typeof value === 'object' && getType(value) === '[object Boolean]');
};

  
    return __etcpack__scope_bundle__;
}

/*************************** [bundle] ****************************/
// Original file:./node_modules/@hai2007/tool/.inner/type/getType.js
/*****************************************************************/
window.__etcpack__bundleSrc__['8']=function(){
    var __etcpack__scope_bundle__={};
    var __etcpack__scope_args__;
    var toString = Object.prototype.toString;

/**
 * 获取一个值的类型字符串[object type]
 *
 * @param {*} value 需要返回类型的值
 * @returns {string} 返回类型字符串
 */
__etcpack__scope_bundle__.default= function (value) {
    if (value == null) {
        return value === undefined ? '[object Undefined]' : '[object Null]';
    }
    return toString.call(value);
};

  
    return __etcpack__scope_bundle__;
}

/*************************** [bundle] ****************************/
// Original file:./node_modules/@hai2007/tool/.inner/type/isNumber.js
/*****************************************************************/
window.__etcpack__bundleSrc__['9']=function(){
    var __etcpack__scope_bundle__={};
    var __etcpack__scope_args__;
    __etcpack__scope_args__=window.__etcpack__getBundle('8');
var getType =__etcpack__scope_args__.default;


/**
 * 判断一个值是不是number。
 *
 * @param {*} value 需要判断类型的值
 * @returns {boolean} 如果是number返回true，否则返回false
 */
__etcpack__scope_bundle__.default= function (value) {
    return typeof value === 'number' || (
        value !== null && typeof value === 'object' &&
        getType(value) === '[object Number]'
    );
};

  
    return __etcpack__scope_bundle__;
}

/*************************** [bundle] ****************************/
// Original file:./node_modules/@hai2007/tool/.inner/type/isString.js
/*****************************************************************/
window.__etcpack__bundleSrc__['10']=function(){
    var __etcpack__scope_bundle__={};
    var __etcpack__scope_args__;
    __etcpack__scope_args__=window.__etcpack__getBundle('8');
var getType =__etcpack__scope_args__.default;


/**
 * 判断一个值是不是String。
 *
 * @param {*} value 需要判断类型的值
 * @returns {boolean} 如果是String返回true，否则返回false
 */
__etcpack__scope_bundle__.default= function (value) {
    var type = typeof value;
    return type === 'string' || (type === 'object' && value != null && !Array.isArray(value) && getType(value) === '[object String]');
};

  
    return __etcpack__scope_bundle__;
}

/*************************** [bundle] ****************************/
// Original file:./node_modules/@hai2007/tool/.inner/type/isSymbol.js
/*****************************************************************/
window.__etcpack__bundleSrc__['11']=function(){
    var __etcpack__scope_bundle__={};
    var __etcpack__scope_args__;
    __etcpack__scope_args__=window.__etcpack__getBundle('8');
var getType =__etcpack__scope_args__.default;


/**
 * 判断一个值是不是symbol。
 *
 * @param {*} value 需要判断类型的值
 * @returns {boolean} 如果是symbol返回true，否则返回false
 */
__etcpack__scope_bundle__.default= function (value) {
    var type = typeof value;
    return type === 'symbol' || (type === 'object' && value !== null && getType(value) === '[object Symbol]');
};

  
    return __etcpack__scope_bundle__;
}

/*************************** [bundle] ****************************/
// Original file:./node_modules/@hai2007/tool/.inner/type/isFunction.js
/*****************************************************************/
window.__etcpack__bundleSrc__['12']=function(){
    var __etcpack__scope_bundle__={};
    var __etcpack__scope_args__;
    __etcpack__scope_args__=window.__etcpack__getBundle('8');
var getType =__etcpack__scope_args__.default;

__etcpack__scope_args__=window.__etcpack__getBundle('6');
var isObject =__etcpack__scope_args__.default;


/**
 * 判断一个值是不是Function。
 *
 * @param {*} value 需要判断类型的值
 * @returns {boolean} 如果是Function返回true，否则返回false
 */
__etcpack__scope_bundle__.default= function (value) {
    if (!isObject(value)) {
        return false;
    }

    var type = getType(value);
    return type === '[object Function]' || type === '[object AsyncFunction]' ||
        type === '[object GeneratorFunction]' || type === '[object Proxy]';
};

  
    return __etcpack__scope_bundle__;
}

/*************************** [bundle] ****************************/
// Original file:./node_modules/@hai2007/tool/.inner/type/isError.js
/*****************************************************************/
window.__etcpack__bundleSrc__['13']=function(){
    var __etcpack__scope_bundle__={};
    var __etcpack__scope_args__;
    __etcpack__scope_args__=window.__etcpack__getBundle('14');
var isPlainObject =__etcpack__scope_args__.default;

__etcpack__scope_args__=window.__etcpack__getBundle('8');
var getType =__etcpack__scope_args__.default;


/**
 * 判断一个值是不是错误对象。
 * `Error`, `EvalError`, `RangeError`, `ReferenceError`,`SyntaxError`, `TypeError`, or `URIError`
 *
 * @param {*} value 需要判断类型的值
 * @returns {boolean} 如果是错误对象返回true，否则返回false
 */
__etcpack__scope_bundle__.default= function (value) {
    if (value === null || typeof value !== 'object') {
        return false;
    }

    var type = getType(value);
    return type === '[object Error]' || type === '[object DOMException]' ||
        (typeof value.message === 'string' && typeof value.name === 'string' && !isPlainObject(value));
};

  
    return __etcpack__scope_bundle__;
}

/*************************** [bundle] ****************************/
// Original file:./node_modules/@hai2007/tool/.inner/type/isPlainObject.js
/*****************************************************************/
window.__etcpack__bundleSrc__['14']=function(){
    var __etcpack__scope_bundle__={};
    var __etcpack__scope_args__;
    __etcpack__scope_args__=window.__etcpack__getBundle('8');
var getType =__etcpack__scope_args__.default;


/**
 * 判断一个值是不是一个朴素的'对象'
 * 所谓"纯粹的对象"，就是该对象是通过"{}"或"new Object"创建的
 *
 * @param {*} value 需要判断类型的值
 * @returns {boolean} 如果是朴素的'对象'返回true，否则返回false
 */

__etcpack__scope_bundle__.default= function (value) {
    if (value === null || typeof value !== 'object' || getType(value) != '[object Object]') {
        return false;
    }

    // 如果原型为null
    if (Object.getPrototypeOf(value) === null) {
        return true;
    }

    var proto = value;
    while (Object.getPrototypeOf(proto) !== null) {
        proto = Object.getPrototypeOf(proto);
    }
    return Object.getPrototypeOf(value) === proto;
};

  
    return __etcpack__scope_bundle__;
}

/*************************** [bundle] ****************************/
// Original file:./node_modules/@hai2007/polyfill/.inner/Promise/doResolve.js
/*****************************************************************/
window.__etcpack__bundleSrc__['15']=function(){
    var __etcpack__scope_bundle__={};
    var __etcpack__scope_args__;
    __etcpack__scope_args__=window.__etcpack__getBundle('5');
var isFunction=__etcpack__scope_args__.isFunction;
var isObject=__etcpack__scope_args__.isObject;


__etcpack__scope_bundle__.changeState = function (data, state) {

    // 更改状态
    this.__state = state;
    this.__value = data;

    // 由于状态改变了，触发对then，finnaly，catch等的执行更新
    this.$$triggerEvent();

};

__etcpack__scope_bundle__.triggerEvent = function () {

    // 这个方法的任务就是把__hocks中记录的方法依次执行了
    // 什么时候会停止？两种情况：
    // 1.队列执行完了
    // 2.遇到其中一个执行方法返回Promise

    var currentHock = null;

    // 同意状态就去寻找下一个onFulfilled
    // 拒绝状态就去寻找下一个onRejected
    // 数组下标0和1分别记录这两个状态，因此先根据状态确定下标即可
    var index = this.__state == 'fulfilled' ? 0 : 1, i;

    // 可能找到，可能到结尾都没有找到
    while (this.__hocks.length > 0) {

        if (isFunction(this.__hocks[0][index])) {
            currentHock = this.__hocks.shift();
            break;
        }

        // 对于路过的finally执行一下
        else if (isFunction(this.__hocks[0][2])) {
            this.__hocks[0][2]();
        }

        this.__hocks.shift();

    }

    // 如果找到了
    if (currentHock !== null) {
        var result = currentHock[index](this.__value);

        // 如果是Promise
        if (isObject(result) && result.constructor === this.constructor) {
            for (var i = 0; i < this.__hocks.length; i++) {
                result.__hocks.push(this.__hocks[i]);
                if (result.__state != 'pending') result.$$triggerEvent();
            }

            this.then = function (onFulfilled, onRejected) {

                result.then(onFulfilled, onRejected);
            };
            this.catch = function (onRejected) {

                result.catch(onRejected);
            };
            this.finally = function (callback) {

                result.finally(callback);
            };

        }

        // 否则
        else {

            this.__value = result;
            this.__state = "fulfilled";
            this.$$triggerEvent();

        }

    }

};

__etcpack__scope_bundle__.doResolve = function (doback, that) {

    // 防止重复修改状态
    var done = false;

    try {
        doback(function (value) {
            if (done) return; done = true;
            that.$$changeState(value, 'fulfilled');

        }, function (reason) {
            if (done) return; done = true;
            that.$$changeState(reason, 'rejected');

        });
    } catch (error) {
        if (done) return; done = true;
        that.$$changeState(error, 'rejected');
    }

};

  
    return __etcpack__scope_bundle__;
}

/*************************** [bundle] ****************************/
// Original file:./node_modules/@hai2007/style/normalize.css
/*****************************************************************/
window.__etcpack__bundleSrc__['16']=function(){
    var __etcpack__scope_bundle__={};
    var __etcpack__scope_args__;
    var styleElement = document.createElement('style');
var head = document.head || document.getElementsByTagName('head')[0];
styleElement.innerHTML = "/*!\n * 👁️ - 统一不同浏览器的基础样式\n * https://github.com/hai2007/style.css/blob/master/normalize.css\n *\n * author hai2007 < https://hai2007.gitee.io/sweethome >\n *\n * Copyright (c) 2020-present hai2007 走一步，再走一步。\n * Released under the MIT license\n */\n\nhtml {\n    /* 防止iPhone在坚屏转向横屏时放大文字 */\n    -ms-text-size-adjust: 100%;\n    -webkit-text-size-adjust: 100%;\n    /* 统一行高 */\n    line-height: 1.15;\n}\n\nbutton,\ninput {\n    /* 兼容部分手机下border不显示问题 */\n    border: 1px solid #b2b2bd;\n}\n\narticle,\nfooter,\nheader,\nnav,\nsection {\n    /* 修正旧浏览器未定义的块级元素 */\n    display: block;\n}\n\ncanvas,\nsvg {\n    /* 修正旧浏览器未定义的行内块元素 */\n    display: inline-block;\n}\n\n* {\n    /* 统一不同浏览器盒子尺寸计算方法 */\n    box-sizing: border-box;\n}\n\n::-ms-clear,\n::-ms-reveal {\n    /* 去掉IE浏览器输入框叉叉和眼睛 */\n    display: none;\n}\n\nimg {\n    /* 针对火狐浏览器在img标签没有src时候的差异修复 */\n    display: inline-block;\n}\n\nhtml {\n    /* 设置默认字体为统一的安全字体 */\n    font-family: sans-serif;\n}\n\na {\n    /* 默认去掉下划线 */\n    text-decoration: none;\n}\n\nli {\n    /* 去掉前置索引 */\n    list-style-type: none;\n}\n\nul,\nol,\nli,\np,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n    /* 去掉不喜欢的间距 */\n    -webkit-margin-before: 0;\n    -webkit-margin-after: 0;\n    -webkit-padding-start: 0;\n    /* 去掉不喜欢的间距，针对火狐浏览器等 */\n    margin-block-end: 0;\n    margin-block-start: 0;\n    padding-inline-start: 0;\n    /* 修改IE和其它浏览器不一致问题 */\n    padding: 0;\n    margin: 0;\n}\n\nbody {\n    /* 去掉默认的8px */\n    margin: 0;\n}\n\ntable {\n    /* 设置默认表格边框合并为一个单一的边框 */\n    border-collapse: collapse;\n}\n";
styleElement.setAttribute('type', 'text/css');head.appendChild(styleElement);
  
    return __etcpack__scope_bundle__;
}

/*************************** [bundle] ****************************/
// Original file:./src/App.paper
/*****************************************************************/
window.__etcpack__bundleSrc__['17']=function(){
    var __etcpack__scope_bundle__={};
    var __etcpack__scope_args__;
    

    // 导入js
__etcpack__scope_args__=window.__etcpack__getBundle('18');
var script =__etcpack__scope_args__.default;


    // 导入css
__etcpack__scope_args__=window.__etcpack__getBundle('33');


    script.render=function(createElement){

        return createElement('div',{"quickpaper":"","data-quickpaper-347ecaca":""},[createElement('header',{"data-quickpaper-347ecaca":""},["正则表达式可视化",createElement('div',{"data-quickpaper-347ecaca":""},[createElement('input',{"type":"radio","name":"isString","id":"isString","@click":"doIsString(\"yes\")","data-quickpaper-347ecaca":""},[]),"是字符串",createElement('input',{"type":"radio","name":"isString","id":"notString","@click":"doIsString(\"no\")","data-quickpaper-347ecaca":""},[]),"不是字符串"]),createElement('a',{"href":"https://hai2007.gitee.io/sweethome/#/tool","title":"点击我返回工具列表页","data-quickpaper-347ecaca":""},["工具列表"]),createElement('a',{":href":"issue","target":"_blank","title":"点击我反馈使用中发现的问题","data-quickpaper-347ecaca":""},["提Issue或发现问题"])]),createElement('div',{"class":"input","data-quickpaper-347ecaca":""},[createElement('input',{"type":"text","q-model":"express","@keydown":"doDisplay(\"input\")","data-quickpaper-347ecaca":""},[]),createElement('span',{"@click":"doDisplay","data-quickpaper-347ecaca":""},["显示"])]),createElement('div',{"class":"content","id":"Regexper-Visualization-Content","data-quickpaper-347ecaca":""},[createElement('canvas',{"id":"Regexper-Visualization-Canvas","data-quickpaper-347ecaca":""},["非常抱歉，您的浏览器不支持canvas!"])]),createElement('div',{"class":"help-hidden","id":"help-hidden","data-quickpaper-347ecaca":""},[])])

    };

    __etcpack__scope_bundle__.default= script;

  
    return __etcpack__scope_bundle__;
}

/*************************** [bundle] ****************************/
// Original file:./src/App.paper?QuickPaper&type=script&lang=js&hash=347ecaca
/*****************************************************************/
window.__etcpack__bundleSrc__['18']=function(){
    var __etcpack__scope_bundle__={};
    var __etcpack__scope_args__;
    __etcpack__scope_args__=window.__etcpack__getBundle('1');
var QuickPaper =__etcpack__scope_args__.default;

    __etcpack__scope_args__=window.__etcpack__getBundle('19');
var regexpToJson =__etcpack__scope_args__.default;

    __etcpack__scope_args__=window.__etcpack__getBundle('28');
var drawImage =__etcpack__scope_args__.default;

    __etcpack__scope_args__=window.__etcpack__getBundle('31');
var Image2D =__etcpack__scope_args__.default;


    __etcpack__scope_bundle__.default= {
        data() {
            return {
                express: "",
                isString: "no",
                issue: "https://github.com/hai2007/Regexper-Visualization/issues"
            };
        },
        mounted() {

            // 获取值
            this.express = decodeURIComponent(QuickPaper.urlFormat(window.location.href).params.express || "");

            // 是否是字符串
            this.isString = QuickPaper.urlFormat(window.location.href).params.isString || "no";

            if (this.isString == 'yes') {
                document.getElementById('isString').setAttribute('checked', 'checked');
            } else {
                document.getElementById('notString').setAttribute('checked', 'checked');
            }

            // 绘制
            this.doDraw(this.express);
        },
        methods: {
            reloadPage() {
                window.location.search = "?express=" + encodeURIComponent(this.express) + "&isString=" + this.isString;
            },
            doIsString(_isString) {
                this.isString = _isString;
                this.reloadPage();
            },
            doDisplay(flag, event) {

                // 如果是输入框里面的正常输入
                if (flag == 'input' && event.keyCode != 13) return;

                // 修改地址
                this.reloadPage();
            },
            doDraw(express) {

                try {

                    let imageData = regexpToJson(express, this.isString == 'yes');

                    let painter = Image2D('#Regexper-Visualization-Canvas')

                        // 设置画布大小
                        .attr({
                            width: imageData.width + 60,
                            height: imageData.height + 20
                        })

                        // 获取画笔，并进行初步的设置
                        .painter().config({
                            textAlign: "center",
                            "font-family": "sans-serif"
                        });

                    // 绘制
                    drawImage(painter, imageData, 30, 10);

                    // 绘制开头和结尾

                    painter.beginPath().moveTo(20, imageData.height * 0.5 + 10).lineTo(30, imageData.height * 0.5 + 10).stroke();
                    painter.beginPath().moveTo(imageData.width + 40, imageData.height * 0.5 + 10).lineTo(imageData.width + 30, imageData.height * 0.5 + 10).stroke();

                    painter.fillCircle(15, imageData.height * 0.5 + 10, 5);
                    painter.fillCircle(imageData.width + 45, imageData.height * 0.5 + 10, 5);

                } catch (e) {

                    document.getElementById('Regexper-Visualization-Content').innerHTML = `<h2 style='font-size:16px;margin-top:30px;'>
                        发生错误，请复制下面的内容后
                        <a href='${this.issue}' style='background-color:red;color:white;padding:5px;display:inline-block;'>点击此处</a>
                        告诉我们！
                        </h2>
                        <div style='font-size:12px;margin-top:30px;line-height:1.5em;width:700px;display:inline-block;text-align:left;background-color:white;padding:30px;'>
                            表达式：${this.express}<br />
                            是否是字符串：${this.isString}<br />
                            错误：<pre style='color:red;'>${e}</pre><br />
                        </div>
                        `;
                }

            }
        }
    };
  
    return __etcpack__scope_bundle__;
}

/*************************** [bundle] ****************************/
// Original file:./src/regexpToJson/index.js
/*****************************************************************/
window.__etcpack__bundleSrc__['19']=function(){
    var __etcpack__scope_bundle__={};
    var __etcpack__scope_args__;
    __etcpack__scope_args__=window.__etcpack__getBundle('20');
var pretreatment =__etcpack__scope_args__.default;

__etcpack__scope_args__=window.__etcpack__getBundle('21');
var analyseExpress =__etcpack__scope_args__.default;

__etcpack__scope_bundle__.default= function (express, _isString) {
  // 预处理
  express = pretreatment(express, _isString); // 单词分析

  var expressArray = analyseExpress(express.trim()); // 补充辅助括号

  expressArray.unshift(["?@"]);
  expressArray.unshift('(');
  expressArray.push(')');
  /**
   * 接下来，我们将进行结构分析，
   * 获取完整的尺寸大小和结点之间的关系
   */

  return function calcImageData(index) {
    var imageData = {
      width: 0,
      height: 0,
      // 考虑到有的分组需要捕获，有的不记录等，对每个分组添加说明
      // no-group  非分组
      // group 匹配,并捕获文本到自动命名的组里
      // ?: 匹配,不捕获匹配的文本，也不给此分组分配组号
      // ?= 零宽断言，匹配目标的后面是
      // ?! 零宽断言，匹配目标的后面不是
      // ?@ 辅助组
      flag: "no-group",
      // 标记当前组循环次数
      max: 1,
      min: 1,
      type: "组",
      // 记录并列的一列列内容
      contents: []
    }; // 判断分组标志

    if (expressArray[index] == '(') {
      imageData.flag = 'group';
      index += 1;
    } // 表示一行（一个组可以有并列的多行）


    var rowObject = {
      contents: [],
      width: 0,
      height: 0
    },
        i;

    for (i = index; i < expressArray.length; i++) {
      // 说明开始一个新的匹配分组
      if (expressArray[i] == '(') {
        var _imageData = calcImageData(i);

        rowObject.contents.push(_imageData[0]); // 更新大小

        rowObject.width += _imageData[0].width;
        if (rowObject.height < _imageData[0].height) rowObject.height = _imageData[0].height;
        i = _imageData[1];
      } // 分组匹配结束，返回
      else if (expressArray[i] == ')') {
          if (expressArray[i + 1] && expressArray[i + 1].type == "分组循环") {
            imageData.max = expressArray[i + 1].max;
            imageData.min = expressArray[i + 1].min;
            i++;
          }

          break;
        } // 需要换行（新的行）
        else if (expressArray[i] == '|') {
            imageData.contents.push(rowObject); // 更新大小

            if (rowObject.width > imageData.width) imageData.width = rowObject.width;
            imageData.height += rowObject.height; //  重置数据

            rowObject = {
              contents: [],
              width: 0,
              height: 0
            };
          } else {
            for (var j = 0; j < expressArray[i].length; j++) {
              // 如果是分组标记
              if (j == 0 && ['?=', '?!', '?:', '?@'].indexOf(expressArray[i][0]) > -1) {
                imageData.flag = expressArray[i][0];
              } // 否则就是普通的条目
              else {
                  rowObject.contents.push(expressArray[i][j]); // 更新大小

                  rowObject.width += expressArray[i][j].width;
                  if (rowObject.height < expressArray[i][j].height) rowObject.height = expressArray[i][j].height;
                }
            }
          }
    }

    if (rowObject.contents.length > 0) imageData.contents.push(rowObject); // 更新大小

    if (rowObject.width > imageData.width) imageData.width = rowObject.width;
    imageData.height += rowObject.height;
    return [imageData, i];
  }(0)[0];
}
;
  
    return __etcpack__scope_bundle__;
}

/*************************** [bundle] ****************************/
// Original file:./src/regexpToJson/pretreatment.js
/*****************************************************************/
window.__etcpack__bundleSrc__['20']=function(){
    var __etcpack__scope_bundle__={};
    var __etcpack__scope_args__;
    // 预处理的任务就是把不同可能的输入统一成一样的格式，
// 这样的好处是后续判断的时候可以在一个比较小的集合里面考虑
__etcpack__scope_bundle__.default= function (express, _isString) {
  if (_isString) {
    var _express = "";

    for (var i = 0; i < express.length; i++) {
      if (express[i] == '\\') {
        if (i + 1 < express.length) _express += express[i + 1];
        i += 1;
      } else {
        _express += express[i];
      }
    }

    express = _express;
  } else {
    if (/^\//.test(express) && /\/$/.test(express)) {
      express = express.replace(/^\//, '').replace(/\/$/, '');
    }
  }

  return express;
}
;
  
    return __etcpack__scope_bundle__;
}

/*************************** [bundle] ****************************/
// Original file:./src/regexpToJson/analyseExpress.js
/*****************************************************************/
window.__etcpack__bundleSrc__['21']=function(){
    var __etcpack__scope_bundle__={};
    var __etcpack__scope_args__;
    // https://github.com/hai2007/tool.js/blob/master/apis/string.md
__etcpack__scope_args__=window.__etcpack__getBundle('22');
var ReadString=__etcpack__scope_args__.ReadString;
 // 特殊字符处理

__etcpack__scope_args__=window.__etcpack__getBundle('24');
var specialWord =__etcpack__scope_args__.default;
 // 范围分析

__etcpack__scope_args__=window.__etcpack__getBundle('25');
var analysePurview =__etcpack__scope_args__.default;
 // 用于辅助计算内容宽

__etcpack__scope_args__=window.__etcpack__getBundle('26');
var calcWidth =__etcpack__scope_args__.default;
 // 对表达式进行结构分析

__etcpack__scope_bundle__.default= function (express) {
  // 生成字符串分析辅助对象
  var reader = ReadString(express); // 读取第一个字符后准备分析

  reader.readNext();
  var expressArray = [],
      temp;

  while (true) {
    // 如果还有字符，分析继续
    if (reader.index >= express.length) break; // 如果遇到边界字符，截断

    if (reader.currentChar == ')' || reader.currentChar == '(' || reader.currentChar == '|') {
      expressArray.push(reader.currentChar);
      reader.readNext();
    } // 否则就是一段内容
    else {
        (function () {
          // 内容按照最小单元分割
          var subExpressArray = [];
          var tempContent = "";

          var pushContentItem = function pushContentItem(isSpecialFlag) {
            if (tempContent != "") {
              var tempContentArray;

              if (isSpecialFlag && tempContent.length > 1) {
                tempContentArray = [tempContent.substring(0, tempContent.length - 1), tempContent[tempContent.length - 1]];
              } else {
                tempContentArray = [tempContent];
              }

              for (var _index = 0; _index < tempContentArray.length; _index++) {
                subExpressArray.push({
                  content: tempContentArray[_index],
                  type: '内容',
                  max: 1,
                  min: 1,
                  height: 44,
                  width: calcWidth(tempContentArray[_index]) + 30
                });
              }

              tempContent = "";
            }
          };

          while (reader.index < express.length) {
            // 如果遇到边界字符，当前段内容分析完毕
            if (reader.currentChar == ')' || reader.currentChar == '(' || reader.currentChar == '|') {
              pushContentItem();
              break;
            } else {
              // 转义
              if (reader.currentChar == '\\') {
                pushContentItem();

                if (reader.getNextN(2) == '\\x') {
                  temp = specialWord(reader.getNextN(4));
                  reader.readNext();
                  reader.readNext();
                  reader.readNext();
                  reader.readNext();
                } else {
                  temp = specialWord(reader.getNextN(2));
                  reader.readNext();
                  reader.readNext();
                }

                subExpressArray.push({
                  content: temp[0],
                  type: temp[1],
                  max: 1,
                  min: 1,
                  width: calcWidth(temp[0]) + 30,
                  height: 44
                });
              } // 备选
              else if (reader.currentChar == '[') {
                  pushContentItem();
                  temp = "";

                  while (reader.currentChar != ']') {
                    temp += reader.currentChar;
                    reader.readNext();
                  }

                  temp = analysePurview(temp.replace(/^\[/, ''));
                  subExpressArray.push({
                    content: temp[0],
                    type: "范围",
                    max: 1,
                    min: 1,
                    width: temp[1] + 20,
                    // 5+X+4+4+4+X+5  +20
                    height: temp[0].length * 28 + 26 // 5+24+4+24+4+...+5  +20

                  });
                  reader.readNext();
                } // 如果是分组的特殊说明符号
                else if (reader.currentChar == '?' && ['?=', '?!', '?:'].indexOf(reader.getNextN(2)) > -1 && expressArray[expressArray.length - 1] == '(' && subExpressArray.length == 0) {
                    pushContentItem();
                    subExpressArray.push(reader.getNextN(2));
                    reader.readNext();
                    reader.readNext();
                  } // 范围
                  // 对于范围而言，它应该是和前面一个内容单元为一组
                  else if (['{', '*', '?', '+'].indexOf(reader.currentChar) > -1) {
                      pushContentItem(true);
                      temp = []; // {}

                      if (reader.currentChar == '{') {
                        while (reader.currentChar != '}') {
                          temp += reader.currentChar;
                          reader.readNext();
                        }

                        temp = temp.replace(/^\{/, '').split(','); // 最小值

                        if (temp[0].trim() == '') {
                          temp[0] = -1;
                        } else {
                          temp[0] = +temp[0];
                        } // 最大值


                        if (temp.length <= 1) {
                          temp[1] = temp[0];
                        } else if (temp[1].trim() == '') {
                          temp[1] = -1;
                        } else {
                          temp[1] = +temp[1];
                        }
                      } //  + * ？
                      else {
                          temp = {
                            "+": [1, -1],
                            "*": [0, -1],
                            "?": [0, 1]
                          }[reader.currentChar];
                        } // 如果是标记分组循环次数的


                      if (subExpressArray.length == 0) {
                        expressArray.push({
                          type: "分组循环",
                          max: temp[1],
                          min: temp[0]
                        });
                      } // 否则就是普通的
                      else {
                          subExpressArray[subExpressArray.length - 1].min = temp[0];
                          subExpressArray[subExpressArray.length - 1].max = temp[1];
                        }

                      reader.readNext();
                    } // 否则就是普通的常量了
                    else {
                        if (reader.currentChar == '.') {
                          pushContentItem();
                          subExpressArray.push({
                            content: "任意字符",
                            type: '描述',
                            max: 1,
                            min: 1,
                            height: 44,
                            width: calcWidth('任意字符') + 30
                          });
                        } else {
                          tempContent += reader.currentChar;
                        }

                        reader.readNext();
                      }
            }
          }

          pushContentItem();
          expressArray.push(subExpressArray);
        })();
      }
  }

  return expressArray;
}
;
  
    return __etcpack__scope_bundle__;
}

/*************************** [bundle] ****************************/
// Original file:./node_modules/@hai2007/tool/string.js
/*****************************************************************/
window.__etcpack__bundleSrc__['22']=function(){
    var __etcpack__scope_bundle__={};
    var __etcpack__scope_args__;
    /*!
 * 💡 - 字符串操作
 * https://github.com/hai2007/tool.js/blob/master/string.js
 *
 * author hai2007 < https://hai2007.gitee.io/sweethome >
 *
 * Copyright (c) 2021-present hai2007 走一步，再走一步。
 * Released under the MIT license
 */

__etcpack__scope_args__=window.__etcpack__getBundle('23');
var _ReadString =__etcpack__scope_args__.default;


// 字符串分析
__etcpack__scope_bundle__.ReadString = _ReadString;

  
    return __etcpack__scope_bundle__;
}

/*************************** [bundle] ****************************/
// Original file:./node_modules/@hai2007/tool/.inner/string/Read.js
/*****************************************************************/
window.__etcpack__bundleSrc__['23']=function(){
    var __etcpack__scope_bundle__={};
    var __etcpack__scope_args__;
    __etcpack__scope_bundle__.default= function (express) {

    var reader = {
        index: -1,
        currentChar: null
    };

    // 读取下一个字符
    reader.readNext = function () {
        reader.currentChar = reader.index++ < express.length - 1 ? express[reader.index] : null;
        return reader.currentChar;
    };

    // 获取往后num个值
    reader.getNextN = function (num) {
        return express.substring(reader.index, num + reader.index > express.length ? express.length : num + reader.index);
    };

    return reader;
};

  
    return __etcpack__scope_bundle__;
}

/*************************** [bundle] ****************************/
// Original file:./src/regexpToJson/specialWord.js
/*****************************************************************/
window.__etcpack__bundleSrc__['24']=function(){
    var __etcpack__scope_bundle__={};
    var __etcpack__scope_args__;
    __etcpack__scope_bundle__.default= function (word) {
  var specialWords = {
    "\\w": "单词",
    "\\W": "非单词",
    "\\d": "数字",
    "\\D": "非数字",
    "\\s": "空白",
    "\\S": "非空白",
    "\\b": "单词边界",
    "\\B": "非单词边界",
    "\\0": "null",
    "\\n": "换行",
    "\\f": "换页",
    "\\t": "tab缩进",
    "\\r": "回车",
    "\\x20": "空格"
  };

  if (word in specialWords) {
    return [specialWords[word], '描述'];
  } else {
    // 还有那种 \1 捕获分组的（考虑到分组个数有限，目前就规定做多9）
    if (/\\[1-9]/.test(word)) {
      return ['分组' + word.replace(/\\/, ''), '描述'];
    } // 否则就是普通内容


    return [word.replace(/^\\/, ''), '内容'];
  }
}
;
  
    return __etcpack__scope_bundle__;
}

/*************************** [bundle] ****************************/
// Original file:./src/regexpToJson/analysePurview.js
/*****************************************************************/
window.__etcpack__bundleSrc__['25']=function(){
    var __etcpack__scope_bundle__={};
    var __etcpack__scope_args__;
    __etcpack__scope_args__=window.__etcpack__getBundle('24');
var specialWord =__etcpack__scope_args__.default;

__etcpack__scope_args__=window.__etcpack__getBundle('26');
var calcWidth =__etcpack__scope_args__.default;

__etcpack__scope_bundle__.default= function (_express) {
  var express = [];

  for (var i = 0; i < _express.length; i++) {
    if (_express[i] == '\\') {
      if (_express[i + 1] == 'x') {
        express.push("\\x" + _express[i + 2] + _express[i + 3]);
        i += 3;
      } else {
        express.push("\\" + _express[i + 1]);
        i += 1;
      }
    } else {
      express.push(_express[i]);
    }
  }

  var purviews = [],
      width = 0;

  for (var _i = 0; _i < express.length; _i++) {
    if (express[_i + 1] == '-') {
      var temp1 = specialWord(express[_i]);
      var temp2 = specialWord(express[_i + 2]);
      var width1 = calcWidth(temp1[0]) + 10;
      var width2 = calcWidth(temp2[0]) + 10;
      purviews.push([{
        content: temp1[0],
        type: temp1[1],
        max: 1,
        min: 1,
        width: width1,
        height: 24
      }, {
        content: temp2[0],
        type: temp2[1],
        max: 1,
        min: 1,
        width: width2,
        height: 24
      }]);
      _i += 2;
      var width3 = width1 > width2 ? width1 : width2;
      if (12 + width3 * 2 > width) width = 12 + width3 * 2;
    } else {
      var _temp = specialWord(express[_i]);

      var _width = calcWidth(_temp[0]) + 10;

      purviews.push({
        content: _temp[0],
        type: _temp[1],
        max: 1,
        min: 1,
        width: _width,
        height: 24
      });
      if (_width > width) width = _width;
    }
  }

  return [purviews, width + 10];
}
;
  
    return __etcpack__scope_bundle__;
}

/*************************** [bundle] ****************************/
// Original file:./src/regexpToJson/calcWidth.js
/*****************************************************************/
window.__etcpack__bundleSrc__['26']=function(){
    var __etcpack__scope_bundle__={};
    var __etcpack__scope_args__;
    // 主要用于计算文字的宽
__etcpack__scope_args__=window.__etcpack__getBundle('27');
var xhtml =__etcpack__scope_args__.default;

__etcpack__scope_bundle__.default= function (texts) {
  var helpHidden = document.getElementById('help-hidden');
  helpHidden.innerText = texts;
  var width = xhtml.size(helpHidden).width;
  return width < 14 ? 14 : width;
}
;
  
    return __etcpack__scope_bundle__;
}

/*************************** [bundle] ****************************/
// Original file:./node_modules/@hai2007/tool/xhtml.js
/*****************************************************************/
window.__etcpack__bundleSrc__['27']=function(){
    var __etcpack__scope_bundle__={};
    var __etcpack__scope_args__;
    /*!
 * 💡 - 提供常用的DOM操作方法
 * https://github.com/hai2007/tool.js/blob/master/xhtml.js
 *
 * author hai2007 < https://hai2007.gitee.io/sweethome >
 *
 * Copyright (c) 2021-present hai2007 走一步，再走一步。
 * Released under the MIT license
 */

// 命名空间路径
var namespace = {
    svg: "http://www.w3.org/2000/svg",
    xhtml: "http://www.w3.org/1999/xhtml",
    xlink: "http://www.w3.org/1999/xlink",
    xml: "http://www.w3.org/XML/1998/namespace",
    xmlns: "http://www.w3.org/2000/xmlns/"
};

/**
 * 结点操作补充
 */

__etcpack__scope_bundle__.default= {

    // 阻止冒泡
    "stopPropagation": function (event) {
        event = event || window.event;
        if (event.stopPropagation) { //这是其他非IE浏览器
            event.stopPropagation();
        } else {
            event.cancelBubble = true;
        }
    },

    // 阻止默认事件
    "preventDefault": function (event) {
        event = event || window.event;
        if (event.preventDefault) {
            event.preventDefault();
        } else {
            event.returnValue = false;
        }
    },

    // 判断是否是结点
    "isNode": function (param) {
        return param && (param.nodeType === 1 || param.nodeType === 9 || param.nodeType === 11);
    },

    // 绑定事件
    "bind": function (dom, eventType, callback) {

        if (dom.constructor === Array || dom.constructor === NodeList || dom.constructor === HTMLCollection) {
            for (var i = 0; i < dom.length; i++) {
                this.bind(dom[i], eventType, callback);
            }
            return;
        }

        if (window.attachEvent)
            dom.attachEvent("on" + eventType, callback);
        else
            dom.addEventListener(eventType, callback, false);
    },
    // 去掉绑定事件
    "unbind": function (dom, eventType, handler) {

        if (dom.constructor === Array || dom.constructor === NodeList || dom.constructor === HTMLCollection) {
            for (var i = 0; i < dom.length; i++) {
                this.unbind(dom[i], eventType, handler);
            }
            return;
        }

        if (window.detachEvent)
            dom.detachEvent('on' + eventType, handler);
        else
            dom.removeEventListener(eventType, handler, false);

    },

    // 在当前上下文context上查找结点
    // selectFun可选，返回boolean用以判断当前面对的结点是否保留
    "find": function (context, selectFun, tagName) {
        if (!this.isNode(context)) return [];
        var nodes = context.getElementsByTagName(tagName || '*');
        var result = [];
        for (var i = 0; i < nodes.length; i++) {
            if (this.isNode(nodes[i]) && (typeof selectFun != "function" || selectFun(nodes[i])))
                result.push(nodes[i]);
        }
        return result;
    },

    // 寻找当前结点的孩子结点
    // selectFun可选，返回boolean用以判断当前面对的结点是否保留
    "children": function (dom, selectFun) {
        var nodes = dom.childNodes;
        var result = [];
        for (var i = 0; i < nodes.length; i++) {
            if (this.isNode(nodes[i]) && (typeof selectFun != "function" || selectFun(nodes[i])))
                result.push(nodes[i]);
        }
        return result;
    },

    // 判断结点是否有指定class
    // clazzs可以是字符串或数组字符串
    // notStrict可选，boolean值，默认false表示结点必须包含全部class,true表示至少包含一个即可
    "hasClass": function (dom, clazzs, notStrict) {
        if (clazzs.constructor !== Array) clazzs = [clazzs];

        var class_str = " " + (dom.getAttribute('class') || "") + " ";
        for (var i = 0; i < clazzs.length; i++) {
            if (class_str.indexOf(" " + clazzs[i] + " ") >= 0) {
                if (notStrict) return true;
            } else {
                if (!notStrict) return false;
            }
        }
        return true;
    },

    // 删除指定class
    "removeClass": function (dom, clazz) {
        var oldClazz = " " + (dom.getAttribute('class') || "") + " ";
        var newClazz = oldClazz.replace(" " + clazz.trim() + " ", " ");
        dom.setAttribute('class', newClazz.trim());
    },

    // 添加指定class
    "addClass": function (dom, clazz) {
        if (this.hasClass(dom, clazz)) return;
        var oldClazz = dom.getAttribute('class') || "";
        dom.setAttribute('class', oldClazz + " " + clazz);
    },

    // 字符串变成结点
    // isSvg可选，boolean值，默认false表示结点是html，为true表示svg类型
    "toNode": function (template, isSvg) {
        var frame;

        // html和svg上下文不一样
        if (isSvg) frame = document.createElementNS(namespace.svg, 'svg');
        else {

            var frameTagName = 'div';

            // 大部分的标签可以直接使用div作为容器
            // 部分特殊的需要特殊的容器标签

            if (/^<tr[> ]/.test(template)) {

                frameTagName = "tbody";

            } else if (/^<th[> ]/.test(template) || /^<td[> ]/.test(template)) {

                frameTagName = "tr";

            } else if (/^<thead[> ]/.test(template) || /^<tbody[> ]/.test(template)) {

                frameTagName = "table";

            }

            frame = document.createElement(frameTagName);
        }

        // 低版本浏览器svg没有innerHTML，考虑是vue框架中，没有补充
        frame.innerHTML = template;

        var childNodes = frame.childNodes;
        for (var i = 0; i < childNodes.length; i++) {
            if (this.isNode(childNodes[i])) return childNodes[i];
        }
    },

    // 主动触发事件
    "trigger": function (dom, eventType) {

        //创建event的对象实例。
        if (document.createEventObject) {
            // IE浏览器支持fireEvent方法
            dom.fireEvent('on' + eventType, document.createEventObject());
        }

        // 其他标准浏览器使用dispatchEvent方法
        else {
            var _event = document.createEvent('HTMLEvents');
            // 3个参数：事件类型，是否冒泡，是否阻止浏览器的默认行为
            _event.initEvent(eventType, true, false);
            dom.dispatchEvent(_event);
        }

    },

    // 获取样式
    "getStyle": function (dom, name) {
        // 获取结点的全部样式
        var allStyle = document.defaultView && document.defaultView.getComputedStyle ?
            document.defaultView.getComputedStyle(dom, null) :
            dom.currentStyle;

        // 如果没有指定属性名称，返回全部样式
        return typeof name === 'string' ?
            allStyle.getPropertyValue(name) :
            allStyle;
    },

    // 获取元素位置
    "offsetPosition": function (dom) {
        var left = 0;
        var top = 0;
        top = dom.offsetTop;
        left = dom.offsetLeft;
        dom = dom.offsetParent;
        while (dom) {
            top += dom.offsetTop;
            left += dom.offsetLeft;
            dom = dom.offsetParent;
        }
        return {
            "left": left,
            "top": top
        };
    },

    // 获取鼠标相对元素位置
    "mousePosition": function (dom, event) {
        var bounding = dom.getBoundingClientRect();
        if (!event || !event.clientX)
            throw new Error('Event is necessary!');
        return {
            "x": event.clientX - bounding.left,
            "y": event.clientY - bounding.top
        };
    },

    // 删除结点
    "remove": function (dom) {
        dom.parentNode.removeChild(dom);
    },

    // 设置多个样式
    "setStyles": function (dom, styles) {
        for (var key in styles)
            dom.style[key] = styles[key];
    },

    // 获取元素大小
    "size": function (dom, type) {
        var elemHeight, elemWidth;
        if (type == 'content') { //内容
            elemWidth = dom.clientWidth - ((this.getStyle(dom, 'padding-left') + "").replace('px', '')) - ((this.getStyle(dom, 'padding-right') + "").replace('px', ''));
            elemHeight = dom.clientHeight - ((this.getStyle(dom, 'padding-top') + "").replace('px', '')) - ((this.getStyle(dom, 'padding-bottom') + "").replace('px', ''));
        } else if (type == 'padding') { //内容+内边距
            elemWidth = dom.clientWidth;
            elemHeight = dom.clientHeight;
        } else if (type == 'border') { //内容+内边距+边框
            elemWidth = dom.offsetWidth;
            elemHeight = dom.offsetHeight;
        } else if (type == 'scroll') { //滚动的宽（不包括border）
            elemWidth = dom.scrollWidth;
            elemHeight = dom.scrollHeight;
        } else {
            elemWidth = dom.offsetWidth;
            elemHeight = dom.offsetHeight;
        }
        return {
            width: elemWidth,
            height: elemHeight
        };
    },

    // 在被选元素内部的结尾插入内容
    "append": function (el, template) {
        var node = this.isNode(template) ? template : this.toNode(template);
        el.appendChild(node);
        return node;
    },

    // 在被选元素内部的开头插入内容
    "prepend": function (el, template) {
        var node = this.isNode(template) ? template : this.toNode(template);
        el.insertBefore(node, el.childNodes[0]);
        return node;
    },

    // 在被选元素之后插入内容
    "after": function (el, template) {
        var node = this.isNode(template) ? template : this.toNode(template);
        el.parentNode.insertBefore(node, el.nextSibling);
        return node;
    },

    // 在被选元素之前插入内容
    "before": function (el, template) {
        var node = this.isNode(template) ? template : this.toNode(template);
        el.parentNode.insertBefore(node, el);
        return node;
    }

};

  
    return __etcpack__scope_bundle__;
}

/*************************** [bundle] ****************************/
// Original file:./src/drawImage/index.js
/*****************************************************************/
window.__etcpack__bundleSrc__['28']=function(){
    var __etcpack__scope_bundle__={};
    var __etcpack__scope_args__;
    __etcpack__scope_args__=window.__etcpack__getBundle('5');
var isArray=__etcpack__scope_args__.isArray;

__etcpack__scope_args__=window.__etcpack__getBundle('29');
var drawNode =__etcpack__scope_args__.default;

__etcpack__scope_args__=window.__etcpack__getBundle('30');
var toLoopText =__etcpack__scope_args__.default;

var group_index = 1;
var normalConfig = {
  'strokeStyle': '#000000',
  'lineDash': [],
  'lineWidth': 2,
  "font-size": 12
};
__etcpack__scope_bundle__.default= function drawImage(painter, imageData, left, top) {
  // 绘制组标记
  if (imageData.flag != "no-group" && imageData.flag != '?@') {
    painter.config({
      'strokeStyle': 'red',
      'lineDash': [2],
      'lineWidth': 1,
      'font-size': 10
    }).strokeRect(left + 5, top + 5, imageData.width - 10, imageData.height - 10) // 提示文字
    .fillText({
      "?:": "仅匹配",
      "?!": "匹配否",
      "?=": "匹配是",
      "group": "#" + group_index++
    }[imageData.flag], left + imageData.width * 0.5, top); // 绘制循环次数

    if (imageData.min != 1 || imageData.max != 1) {
      painter.fillText(toLoopText(imageData.min, imageData.max), left + imageData.width * 0.5, top + imageData.height);
    }
  } // 统一配置画笔


  painter.config(normalConfig);

  if (imageData.contents.length > 1) {
    // 绘制并列行的前后连线
    painter.config({
      lineWidth: 2
    }).beginPath().moveTo(left, top + imageData.contents[0].height * 0.5).lineTo(left, top + imageData.contents[0].height * 0.5 + imageData.height - imageData.contents[imageData.contents.length - 1].height * 0.5 - imageData.contents[0].height * 0.5).stroke().beginPath().moveTo(left + imageData.width, top + imageData.contents[0].height * 0.5).lineTo(left + imageData.width, top + imageData.contents[0].height * 0.5 + imageData.height - imageData.contents[imageData.contents.length - 1].height * 0.5 - imageData.contents[0].height * 0.5).stroke();
  } // 绘制一行行的


  var _top = top;

  for (var rowNum = 0; rowNum < imageData.contents.length; rowNum++) {
    var _helpWidth = (imageData.width - imageData.contents[rowNum].width) * 0.5; // 绘制一列列的


    var _left = left;

    for (var colNum = 0; colNum < imageData.contents[rowNum].contents.length; colNum++) {
      var colItem = imageData.contents[rowNum].contents[colNum];

      var _helpHeight = (imageData.contents[rowNum].height - colItem.height) * 0.5; // 绘制开头和结尾的


      var _helpDist = colItem.type == '组' && colItem.contents.length != 1 ? 0 : 10;

      painter.config({
        lineWidth: 2
      }).beginPath().moveTo(colNum == 0 ? _left : _left + _helpWidth, _top + _helpHeight + colItem.height * 0.5).lineTo(_left + _helpWidth + _helpDist, _top + _helpHeight + colItem.height * 0.5).stroke().beginPath().moveTo(colNum == imageData.contents[rowNum].contents.length - 1 ? left + imageData.width : _left + _helpWidth + colItem.width, _top + _helpHeight + colItem.height * 0.5).lineTo(_left + _helpWidth + colItem.width - _helpDist, _top + _helpHeight + colItem.height * 0.5).stroke(); // 组

      if (colItem.type == '组') {
        drawImage(painter, colItem, _left + _helpWidth, _top + _helpHeight);
      } // 否则就是需要进行实际绘制的了
      else {
          // 绘制循环次数
          if (colItem.min != 1 || colItem.max != 1) {
            var purview = toLoopText(colItem.min, colItem.max);
            painter.config({
              'fillStyle': 'gray',
              'font-size': 10
            }) // 提示文字
            .fillText(purview, _left + _helpWidth + colItem.width * 0.5, _top + colItem.height + _helpHeight - 5); // 统一配置画笔

            painter.config(normalConfig);
          }

          if (colItem.type == '内容') {
            drawNode(painter, _left + 10 + _helpWidth, _top + 10 + _helpHeight, colItem.width - 20, colItem.height - 20, '#dae9e5', colItem.content);
          } else if (colItem.type == '描述') {
            drawNode(painter, _left + 10 + _helpWidth, _top + 10 + _helpHeight, colItem.width - 20, colItem.height - 20, '#bada55', colItem.content);
          } else if (colItem.type == '范围') {
            // 先绘制最后的背景
            painter.config('fillStyle', '#cbcbba').fillRect(_left + 10 + _helpWidth, _top + 10 + _helpHeight, colItem.width - 20, colItem.height - 20);

            for (var k = 0; k < colItem.content.length; k++) {
              if (isArray(colItem.content[k])) {
                drawNode(painter, _left + colItem.width * 0.5 + _helpWidth - 6 - colItem.content[k][0].width, _top + 15 + 28 * k + _helpHeight, colItem.content[k][0].width, 24, {
                  "内容": '#dae9e5',
                  "描述": "#bada55"
                }[colItem.content[k][0].type], colItem.content[k][0].content);
                drawNode(painter, _left + colItem.width * 0.5 + 6 + _helpWidth, _top + 15 + 28 * k + _helpHeight, colItem.content[k][1].width, 24, {
                  "内容": '#dae9e5',
                  "描述": "#bada55"
                }[colItem.content[k][1].type], colItem.content[k][1].content); // 画线条

                painter.beginPath().moveTo(_left + colItem.width * 0.5 - 2 + _helpWidth, _top + 27 + 28 * k + _helpHeight).lineTo(_left + colItem.width * 0.5 + 2 + _helpWidth, _top + 27 + 28 * k + _helpHeight).stroke();
              } else {
                if (k == 0 && colItem.content[0].content == '^') {
                  drawNode(painter, _left + _helpWidth + colItem.width * 0.5 - colItem.content[k].width * 0.5, _top + 15 + 28 * k + _helpHeight, colItem.content[k].width, 24, "#cbcbba", "非下列", 'white');
                } else {
                  drawNode(painter, _left + _helpWidth + colItem.width * 0.5 - colItem.content[k].width * 0.5, _top + 15 + 28 * k + _helpHeight, colItem.content[k].width, 24, {
                    "内容": '#dae9e5',
                    "描述": "#bada55"
                  }[colItem.content[k].type], colItem.content[k].content);
                }
              }
            }
          } else {
            throw new Error('发生了未期待的情况\n' + JSON.stringify(colItem, null, 4));
          }
        } // 右移


      _left += colItem.width;
    } // 换行


    _top += imageData.contents[rowNum].height;
  }
}
;
  
    return __etcpack__scope_bundle__;
}

/*************************** [bundle] ****************************/
// Original file:./src/drawImage/drawNode.js
/*****************************************************************/
window.__etcpack__bundleSrc__['29']=function(){
    var __etcpack__scope_bundle__={};
    var __etcpack__scope_args__;
    __etcpack__scope_bundle__.default= function (painter, x, y, width, height, color, content) {
  var textColor = arguments.length > 7 && arguments[7] !== undefined ? arguments[7] : '#000';
  // 先绘制背景
  painter.config('fillStyle', color).fillRect(x, y, width, height) // 再绘制内容
  .config('fillStyle', textColor).fillText(content, x + width * 0.5, y + height * 0.5);
}
;
  
    return __etcpack__scope_bundle__;
}

/*************************** [bundle] ****************************/
// Original file:./src/drawImage/toLoopText.js
/*****************************************************************/
window.__etcpack__bundleSrc__['30']=function(){
    var __etcpack__scope_bundle__={};
    var __etcpack__scope_args__;
    __etcpack__scope_bundle__.default= function (min, max) {
  var purview = "";
  if (min == -1) purview = '<=' + max;else if (max == -1) purview = '>=' + min;else if (min == max) purview = min + "次";else purview = min + " ~ " + max;
  return purview;
}
;
  
    return __etcpack__scope_bundle__;
}

/*************************** [bundle] ****************************/
// Original file:./src/lib/image2d.js
/*****************************************************************/
window.__etcpack__bundleSrc__['31']=function(){
    var __etcpack__scope_bundle__={};
    var __etcpack__scope_args__;
    __etcpack__scope_args__=window.__etcpack__getBundle('32');

__etcpack__scope_bundle__.default= image2D;
  
    return __etcpack__scope_bundle__;
}

/*************************** [bundle] ****************************/
// Original file:./node_modules/image2d/build/image2D.js
/*****************************************************************/
window.__etcpack__bundleSrc__['32']=function(){
    var __etcpack__scope_bundle__={};
    var __etcpack__scope_args__;
    /*!
* image2D - 🍇 使用ECMAScript绘制二维图片。Drawing Two-Dimensional Pictures Using ECMAScript.
* git+https://github.com/hai2007/image2D.git
*
* For online documents, please visit
* https://hai2007.gitee.io/image2d/index.html
*
* author 你好2007
*
* version 1.14.0
*
* build Thu Apr 11 2019
*
* Copyright hai2007 < https://hai2007.gitee.io/sweethome/ >
* Released under the MIT license
*
* Date:Tue Jun 15 2021 14:01:38 GMT+0800 (中国标准时间)
*/

"use strict";

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

(function () {
    'use strict';

    /**
     * 初始化配置文件
     * @param {Json} init 默认值
     * @param {Json} data
     * @return {Json}
     */

    var initConfig = function initConfig(init, data) {
        for (var key in data) {
            try {
                init[key] = data[key];
            } catch (e) {
                throw new Error("Illegal property value！");
            }
        }return init;
    };

    // 命名空间路径
    var NAMESPACE = {
        "svg": "http://www.w3.org/2000/svg",
        "xhtml": "http://www.w3.org/1999/xhtml",
        "xlink": "http://www.w3.org/1999/xlink",
        "xml": "http://www.w3.org/XML/1998/namespace",
        "xmlns": "http://www.w3.org/2000/xmlns/"
    };

    // 正则表达式
    var REGEXP = {

        // 空白字符:http://www.w3.org/TR/css3-selectors/#whitespace
        "whitespace": "[\\x20\\t\\r\\n\\f]",

        // 空格外的空白字符
        "blank": "[\\n\\f\\r]",

        // 标志符:http://www.w3.org/TR/CSS21/syndata.html#value-def-identifier
        "identifier": "(?:\\\\.|[\\w-]|[^\0-\\xa0])+"
    };

    // 记录需要使用xlink命名空间常见的xml属性
    var XLINK_ATTRIBUTE = ["href", "title", "show", "type", "role", "actuate"];

    /**
     * 判断一个值是不是Object。
     *
     * @param {*} value 需要判断类型的值
     * @returns {boolean} 如果是Object返回true，否则返回false
     */
    function _isObject(value) {
        var type = typeof value === "undefined" ? "undefined" : _typeof(value);
        return value != null && (type === 'object' || type === 'function');
    }

    var toString = Object.prototype.toString;

    /**
     * 获取一个值的类型字符串[object type]
     *
     * @param {*} value 需要返回类型的值
     * @returns {string} 返回类型字符串
     */
    function getType(value) {
        if (value == null) {
            return value === undefined ? '[object Undefined]' : '[object Null]';
        }
        return toString.call(value);
    }

    /**
     * 判断一个值是不是number。
     *
     * @param {*} value 需要判断类型的值
     * @returns {boolean} 如果是number返回true，否则返回false
     */
    function _isNumber(value) {
        return typeof value === 'number' || value !== null && (typeof value === "undefined" ? "undefined" : _typeof(value)) === 'object' && getType(value) === '[object Number]';
    }

    /**
     * 判断一个值是不是String。
     *
     * @param {*} value 需要判断类型的值
     * @returns {boolean} 如果是String返回true，否则返回false
     */
    function _isString(value) {
        var type = typeof value === "undefined" ? "undefined" : _typeof(value);
        return type === 'string' || type === 'object' && value != null && !Array.isArray(value) && getType(value) === '[object String]';
    }

    /**
     * 判断一个值是不是Function。
     *
     * @param {*} value 需要判断类型的值
     * @returns {boolean} 如果是Function返回true，否则返回false
     */
    function _isFunction(value) {
        if (!_isObject(value)) {
            return false;
        }

        var type = getType(value);
        return type === '[object Function]' || type === '[object AsyncFunction]' || type === '[object GeneratorFunction]' || type === '[object Proxy]';
    }

    /**
     * 判断一个值是不是一个朴素的'对象'
     * 所谓"纯粹的对象"，就是该对象是通过"{}"或"new Object"创建的
     *
     * @param {*} value 需要判断类型的值
     * @returns {boolean} 如果是朴素的'对象'返回true，否则返回false
     */

    function _isPlainObject(value) {
        if (value === null || (typeof value === "undefined" ? "undefined" : _typeof(value)) !== 'object' || getType(value) != '[object Object]') {
            return false;
        }

        // 如果原型为null
        if (Object.getPrototypeOf(value) === null) {
            return true;
        }

        var proto = value;
        while (Object.getPrototypeOf(proto) !== null) {
            proto = Object.getPrototypeOf(proto);
        }
        return Object.getPrototypeOf(value) === proto;
    }

    var domTypeHelp = function domTypeHelp(types, value) {
        return value !== null && (typeof value === "undefined" ? "undefined" : _typeof(value)) === 'object' && types.indexOf(value.nodeType) > -1 && !_isPlainObject(value);
    };

    /*!
     * 💡 - 值类型判断方法
     * https://github.com/hai2007/tool.js/blob/master/type.js
     *
     * author hai2007 < https://hai2007.gitee.io/sweethome >
     *
     * Copyright (c) 2020-present hai2007 走一步，再走一步。
     * Released under the MIT license
     */

    var isObject = _isObject;
    var isNumber = _isNumber;
    var isString = _isString;

    // 引用类型
    var isFunction = _isFunction;
    var isArray = function isArray(input) {
        return Array.isArray(input);
    };

    // 结点类型
    var isElement = function isElement(input) {
        return domTypeHelp([1, 9, 11], input);
    };
    var isText = function isText(input) {
        return domTypeHelp([3], input);
    };

    /**
     * 设置svg字符串
     * @param {dom} target
     * @param {string} svgstring
     */
    var setSVG = function setSVG(target, svgstring) {
        if ('innerHTML' in SVGElement.prototype === false || 'innerHTML' in SVGSVGElement.prototype === false) {

            // 创建一个非svg结点，用例帮助解析
            // 这样比直接解析字符串简单
            var frame = document.createElement("div");
            frame.innerHTML = svgstring;

            var toSvgNode = function toSvgNode(htmlNode) {

                // 创建svg结点，并挂载属性
                var svgNode = document.createElementNS(NAMESPACE.svg, htmlNode.tagName.toLowerCase());
                var attrs = htmlNode.attributes;

                for (var i = 0; attrs && i < attrs.length; i++) {

                    // 是否是特殊属性目前靠手工登记
                    if (XLINK_ATTRIBUTE.indexOf(attrs[i].nodeName) >= 0) {

                        // 针对特殊的svg属性，追加命名空间
                        svgNode.setAttributeNS(NAMESPACE.xlink, 'xlink:' + attrs[i].nodeName, htmlNode.getAttribute(attrs[i].nodeName));
                    } else {
                        svgNode.setAttribute(attrs[i].nodeName, htmlNode.getAttribute(attrs[i].nodeName));
                    }
                }
                return svgNode;
            };

            var rslNode = toSvgNode(frame.firstChild);

            (function toSVG(pnode, svgPnode) {
                var node = pnode.firstChild;

                // 如果是文本结点
                if (isText(node)) {
                    svgPnode.textContent = pnode.innerText;
                    return;
                }

                // 不是文本结点，就拼接
                while (node) {
                    var svgNode = toSvgNode(node);
                    svgPnode.appendChild(svgNode);
                    if (node.firstChild) toSVG(node, svgNode);
                    node = node.nextSibling;
                }
            })(frame.firstChild, rslNode);

            // 拼接
            target.appendChild(rslNode);
        } else {

            // 如果当前浏览器提供了svg类型结点的innerHTML,我们还是使用浏览器提供的
            target.innerHTML = svgstring;
        }
    };

    // 变成指定类型的结点
    // type可以取：
    // 1.'HTML'，html结点
    // 2.'SVG'，svg结点(默认值)
    var toNode = function toNode(template, type) {
        var frame = void 0,
            childNodes = void 0,
            frameTagName = 'div';
        if (type === 'html' || type === 'HTML') {

            // 大部分的标签可以直接使用div作为容器
            // 部分特殊的需要特殊的容器标签

            if (/^<tr[> ]/.test(template)) {

                frameTagName = "tbody";
            } else if (/^<th[> ]/.test(template) || /^<td[> ]/.test(template)) {

                frameTagName = "tr";
            } else if (/^<thead[> ]/.test(template) || /^<tbody[> ]/.test(template)) {

                frameTagName = "table";
            }

            frame = document.createElement(frameTagName);
            frame.innerHTML = template;

            // 比如tr标签，它应该被tbody或thead包含
            // 如果采用别的标签，比如div,这类标签无法生成
            // 为了方便校对，这里给出提示
            if (!/</.test(frame.innerHTML)) {
                throw new Error('This template cannot be generated using div as a container:' + template + "\nPlease contact us: https://github.com/hai2007/image2D/issues");
            }
        } else {
            frame = document.createElementNS(NAMESPACE.svg, 'svg');
            // 部分浏览器svg元素没有innerHTML
            setSVG(frame, template);
        }
        childNodes = frame.childNodes;
        for (var i = 0; i < childNodes.length; i++) {
            if (isElement(childNodes[i])) return childNodes[i];
        }
    };

    /**
     * 变成结点
     * @param {string} template
     * @param {string} type
     * @return {dom} 返回结点
     */
    function toNode$1(template, type) {

        // 把传递元素类型和标记进行统一处理
        if (new RegExp("^" + REGEXP.identifier + "$").test(template)) template = "<" + template + "></" + template + ">";

        var mark = /^<([^(>| )]+)/.exec(template)[1];

        // 画布canvas特殊知道，一定是html
        if ("canvas" === mark.toLowerCase()) type = 'HTML';

        // 此外，如果没有特殊设定，规定一些标签是html标签
        if (!isString(type) && [

        // 三大display元素
        "div", "span", "p",

        // 小元素
        "em", "i",

        // 关系元素
        "table", "ul", "ol", "dl", "dt", "li", "dd",

        // 表单相关
        "form", "input", "button", "textarea",

        // H5结构元素
        "header", "footer", "article", "section",

        // 标题元素
        "h1", "h2", "h3", "h4", "h5", "h6",

        // 替换元素
        "image", "video", "iframe", "object",

        // 资源元素
        "style", "script", "link",

        // table系列
        "tr", "td", "th", "tbody", "thead"].indexOf(mark.toLowerCase()) >= 0) type = 'HTML';

        return toNode(template, type);
    }

    /**
     * 在指定上下文查找结点
     * @param {string|dom|array|function|image2D} selector 选择器，必输
     * @param {dom|'html'|'svg'} context 查找上下文，或标签类型，必输
     * @return {array|image2D} 结点数组
     *
     * 特别注意：
     *  1.id选择器或者传入的是维护的结点，查找上下文会被忽略
     *  2.如果selector传入的是一个字符串模板，context可选，其表示模板类型
     */
    function sizzle(selector, context) {

        // 如果是字符串
        // context如果是字符串（应该是'html'或'svg'）表示这是生成结点，也走这条路线
        if (isString(context) || isString(selector)) {
            selector = selector.trim().replace(new RegExp(REGEXP.blank, 'g'), '');

            // 如果以'<'开头表示是字符串模板
            if (typeof context == 'string' || /^</.test(selector)) {
                var node = toNode$1(selector, context);
                if (isElement(node)) return [node];else return [];
            }

            // *表示查找全部
            else if (selector === '*') {
                    return context.getElementsByTagName('*');
                }

            var id = selector.match(new RegExp('#' + REGEXP.identifier, 'g'));
            // ID选择器
            // 此选择器会忽略上下文
            if (id) {
                var _node = document.getElementById(id[0].replace('#', ''));
                if (isElement(_node)) return [_node];else return [];
            }

            var cls = selector.match(new RegExp('\\.' + REGEXP.identifier, 'g')),
                tag = selector.match(new RegExp('^' + REGEXP.identifier));

            // 结点和class混合选择器
            if (tag || cls) {
                var allNodes = context.getElementsByTagName(tag ? tag[0] : "*"),
                    temp = [];
                for (var i = 0; i < allNodes.length; i++) {
                    var clazz = " " + allNodes[i].getAttribute('class') + " ",
                        flag = true;
                    for (var j = 0; cls && j < cls.length; j++) {
                        if (!clazz.match(" " + cls[j].replace('.', '') + " ")) {
                            flag = false;
                            break;
                        }
                    }
                    if (flag) temp.push(allNodes[i]);
                }
                return temp;
            }

            // 未知情况，报错
            else {
                    throw new Error('Unsupported selector:' + selector);
                }
        }

        // 如果是结点
        else if (isElement(selector)) {
                return [selector];
            }

            // 如果是数组
            // 数组中的内容如果不是结点会直接被忽略
            else if (selector && (selector.constructor === Array || selector.constructor === HTMLCollection || selector.constructor === NodeList)) {
                    var _temp = [];
                    for (var _i = 0; _i < selector.length; _i++) {

                        // 如果是结点
                        if (isElement(selector[_i])) _temp.push(selector[_i]);

                        // 如果是image2D对象
                        else if (selector[_i] && selector[_i].constructor === image2D) {
                                for (var _j = 0; _j < selector[_i].length; _j++) {
                                    _temp.push(selector[_i][_j]);
                                }
                            }
                    }
                    return _temp;
                }

                // 如果是image2D对象
                else if (selector && selector.constructor === image2D) {
                        return selector;
                    }

                    // 如果是函数
                    else if (isFunction(selector)) {
                            var _allNodes = context.getElementsByTagName('*'),
                                _temp2 = [];
                            for (var _i2 = 0; _i2 < _allNodes.length; _i2++) {
                                // 如果选择器函数返回true，表示当前面对的结点被接受
                                if (selector(_allNodes[_i2])) _temp2.push(_allNodes[_i2]);
                            }
                            return _temp2;
                        }

                        // 未知情况，报错
                        else {
                                throw new Error('Unknown selector:' + selector);
                            }
    }

    /**
     * 设计需求是：
     * image2D和image2D(selector[, context])
     * 分别表示绘图类和绘图对象
     *
     * 题外：为什么不选择image2D和new image2D(selector[, context])?
     * 只是感觉没有前面的写法用起来简洁
     *
     * 为了实现需求，第一反应是：
     * let image2D=function(selector,context){
     *      return new image2D();
     * };
     *
     * 在image2D上挂载静态方法，在image2D.prototype上挂载对象方法，
     * 看起来稳的很，其实这明显是一个死循环。
     *
     * 为了解决这个问题，我们在image2D的原型上定义了一个方法：
     * image2D.prototype.init=function(selector,context){
     *      return this;
     * };
     *
     *  执行下面的方法：
     *  let temp=image2D.prototype.init(selector, context);
     *  上面返回的temp很明显就是image2D.prototype，其实就是image2D对象
     * （例如：new A()，其实就是取A.prototype，这样对比就很好理解了）
     *
     * 因此可以改造代码如下：
     *
     * 这样image2D和new image2D(selector[, context])就分别表示类和对象。
     *
     * 问：看起来是不是实现了？
     * 答：是的，实现了。
     * 问：可是总感觉有点不好，说不出为什么。
     * 答：是不是感觉image2D()打印出来的东西有点多？
     * 问：是的。
     *
     * 事实上，因为直接取image2D.prototype作为new image2D(),
     * 理论上说，使用上区别不大，唯一不足的是，
     * 挂载在image2D.prototype上的方法会在打印image2D对象的时候看见，不舒服。
     *
     * 为了看起来好看些，代码再次改造：
     * let image2D = function (selector, context) {
     *      return new image2D.prototype.init(selector, context);
     * };
     *
     * 为了让image2D(selector, context)返回的是image2D对象，需要修改image2D.prototype.init的原型：
     * image2D.prototype.init.prototype = image2D.prototype;
     *
     * 这样：
     *      image2D(selector, context) ==
     *      return new image2D.prototype.init(selector, context) ==
     *      image2D.prototype.init.prototype ==
     *      image2D.prototype ==
     *      new image2D(selector, context)
     *
     * 此时需求就实现了，
     * 而且打印image2D(selector, context)的时候，
     * 对象上的方法都在原型上，看起来就比较舒服了。
     */

    var image2D = function image2D(selector, context) {
        return new image2D.prototype.init(selector, context);
    };

    image2D.prototype.init = function (selector, context) {

        // 如果没有传递，默认使用document作为上下文
        this.context = context = context || document;

        // 使用sizzle获取需要维护的结点，并把结点维护到image2D对象中
        var nodes = sizzle(selector, context),
            flag = void 0;
        for (flag = 0; flag < nodes.length; flag++) {
            this[flag] = nodes[flag];
        }

        // 设置结点个数
        this.length = nodes.length;
        return this;
    };

    // 扩展方法
    // 在image2D和image2D.prototype上分别调用extend方法就可以在类和对象上扩展方法了
    image2D.prototype.extend = image2D.extend = function () {

        var target = arguments[0] || {};
        var source = arguments[1] || {};
        var length = arguments.length;

        /*
         * 确定复制目标和源
         */
        if (length === 1) {
            //如果只有一个参数，目标对象是自己
            source = target;
            target = this;
        }
        if (!isObject(target)) {
            //如果目标不是对象或函数，则初始化为空对象
            target = {};
        }

        /*
         * 复制属性到对象上面
         */
        for (var key in source) {
            try {
                target[key] = source[key];
            } catch (e) {

                // 为什么需要try{}catch(e){}？
                // 一些对象的特殊属性不允许覆盖，比如name
                // 执行：image2D.extend({'name':'新名称'})
                // 会抛出TypeError
                throw new Error("Illegal property key：" + key + "！");
            }
        }

        return target;
    };

    image2D.prototype.init.prototype = image2D.prototype;

    /*!
     * 🔪 - 基本的树结构位置生成算法
     * https://github.com/hai2007/algorithm.js/blob/master/tree.js
     *
     * author hai2007 < https://hai2007.gitee.io/sweethome >
     *
     * Copyright (c) 2020-present hai2007 走一步，再走一步。
     * Released under the MIT license
     */

    function treeLayout(_config) {

        /**
         * 无论绘制的树结构是什么样子的
         * 计算时都假想目标树的样子如下：
         *  1.根结点在最左边，且上下居中
         *  2.树是从左往右生长的结构
         *  3.每个结点都是一块1*1的正方形，top和left分别表示正方形中心的位置
         */

        var config = _config || {},

        // 维护的树
        alltreedata,

        // 根结点ID
        rootid;

        /**
         * 把内部保存的树结点数据
         * 计算结束后会调用配置的绘图方法
         */
        var update = function update() {

            var beforeDis = [],
                size = 0,
                maxDeep = 0;
            (function positionCalc(pNode, deep) {

                if (deep > maxDeep) maxDeep = deep;
                var flag;
                for (flag = 0; flag < pNode.children.length; flag++) {
                    // 因为全部的子结点的位置确定了，父结点的y位置就是子结点的中间位置
                    // 因此有子结点的，先计算子结点
                    positionCalc(alltreedata[pNode.children[flag]], deep + 1);
                } // left的位置比较简单，deep从0开始编号
                // 比如deep=0，第一层，left=0+0.5=0.5，也就是根结点
                alltreedata[pNode.id].left = deep + 0.5;
                if (flag == 0) {

                    // beforeDis是一个数组，用以记录每一层此刻top下边缘（每一层是从上到下）
                    // 比如一层的第一个，top值最小可以取top=0.5
                    // 为了方便计算，beforeDis[deep] == undefined的时候表示现在准备计算的是这层的第一个结点
                    // 因此设置最低上边缘为-0.5
                    if (beforeDis[deep] == undefined) beforeDis[deep] = -0.5;
                    // 父边缘同意的进行初始化
                    if (beforeDis[deep - 1] == undefined) beforeDis[deep - 1] = -0.5;

                    // 添加的新结点top值第一种求法：本层上边缘+1（比如上边缘是-0.5，那么top最小是top=-0.5+1=0.5）
                    alltreedata[pNode.id].top = beforeDis[deep] + 1;

                    var pTop = beforeDis[deep] + 1 + (alltreedata[pNode.pid].children.length - 1) * 0.5;
                    // 计算的原则是：如果第一种可行，选择第一种，否则必须选择第二种
                    // 判断第一种是否可行的方法就是：如果第一种计算后确定的孩子上边缘不对导致孩子和孩子的前兄弟重合就是可行的
                    if (pTop - 1 < beforeDis[deep - 1])
                        // 必须保证父亲结点和父亲的前一个兄弟保存1的距离，至少
                        // 添加的新结点top值的第二种求法：根据孩子取孩子结点的中心top
                        alltreedata[pNode.id].top = beforeDis[deep - 1] + 1 - (alltreedata[pNode.pid].children.length - 1) * 0.5;
                } else {

                    // 此刻flag!=0
                    // 意味着结点有孩子，那么问题就解决了，直接取孩子的中间即可
                    // 其实，flag==0的分支计算的就是孩子，是没有孩子的叶结点，那是关键
                    alltreedata[pNode.id].top = (alltreedata[pNode.children[0]].top + alltreedata[pNode.children[flag - 1]].top) * 0.5;
                }

                // 因为计算孩子的时候
                // 无法掌握父辈兄弟的情况
                // 可能会出现父亲和兄弟重叠问题
                if (alltreedata[pNode.id].top <= beforeDis[deep]) {
                    var needUp = beforeDis[deep] + 1 - alltreedata[pNode.id].top;
                    (function doUp(_pid, _deep) {
                        alltreedata[_pid].top += needUp;
                        if (beforeDis[_deep] < alltreedata[_pid].top) beforeDis[_deep] = alltreedata[_pid].top;
                        var _flag;
                        for (_flag = 0; _flag < alltreedata[_pid].children.length; _flag++) {
                            doUp(alltreedata[_pid].children[_flag], _deep + 1);
                        }
                    })(pNode.id, deep);
                }

                // 计算好一个结点后，需要更新此刻该层的上边缘
                beforeDis[deep] = alltreedata[pNode.id].top;

                // size在每次计算一个结点后更新，是为了最终绘图的时候知道树有多宽（此处应该叫高）
                if (alltreedata[pNode.id].top + 0.5 > size) size = alltreedata[pNode.id].top + 0.5;
            })(alltreedata[rootid], 0);

            // 传递的参数分别表示：记录了位置信息的树结点集合、根结点ID和树的宽
            return {
                "node": alltreedata,
                "root": rootid,
                "size": size,
                "deep": maxDeep + 1
            };
        };

        /**
         * 根据配置的层次关系（配置的id,child,root）把原始数据变成内部结构，方便后期位置计算
         * @param {any} initTree
         *
         * tempTree[id]={
         *  "data":原始数据,
         *  "pid":父亲ID,
         *  "id":唯一标识ID,
         *  "children":[cid1、cid2、...]
         * }
         */
        var toInnerTree = function toInnerTree(initTree) {

            var tempTree = {};
            // 根结点
            var temp = config.root(initTree),
                id,
                rid;
            id = rid = config.id(temp);
            tempTree[id] = {
                "data": temp,
                "pid": null,
                "id": id,
                "children": []
            };

            var num = 1;
            // 根据传递的原始数据，生成内部统一结构
            (function createTree(pdata, pid) {
                var children = config.child(pdata, initTree),
                    flag;
                num += children ? children.length : 0;
                for (flag = 0; children && flag < children.length; flag++) {
                    id = config.id(children[flag]);
                    tempTree[pid].children.push(id);
                    tempTree[id] = {
                        "data": children[flag],
                        "pid": pid,
                        "id": id,
                        "children": []
                    };
                    createTree(children[flag], id);
                }
            })(temp, id);

            return {
                value: [rid, tempTree],
                num: num
            };
        };

        // 可以传递任意格式的树原始数据
        // 只要配置对应的解析方法即可
        var tree = function tree(initTree) {

            var treeData = toInnerTree(initTree);
            alltreedata = treeData.value[1];
            rootid = treeData.value[0];

            if (treeData.num == 1) {
                alltreedata[rootid].left = 0.5;
                alltreedata[rootid].top = 0.5;
                return {
                    deep: 1,
                    node: alltreedata,
                    root: rootid,
                    size: 1
                };
            }

            return update();
        };

        // 获取根结点的方法:root(initTree)
        tree.root = function (rootback) {
            config.root = rootback;
            return tree;
        };

        // 获取子结点的方法:child(parentTree,initTree)
        tree.child = function (childback) {
            config.child = childback;
            return tree;
        };

        // 获取结点ID方法:id(treedata)
        tree.id = function (idback) {
            config.id = idback;
            return tree;
        };

        return tree;
    }

    /**
     * 点（x,y）围绕中心（cx,cy）旋转deg度
     */
    var _rotate2 = function _rotate2(cx, cy, deg, x, y) {
        var cos = Math.cos(deg),
            sin = Math.sin(deg);
        return [+((x - cx) * cos - (y - cy) * sin + cx).toFixed(7), +((x - cx) * sin + (y - cy) * cos + cy).toFixed(7)];
    };

    /**
     * 点（x,y）沿着向量（ax,ay）方向移动距离d
     */
    var _move2 = function _move2(ax, ay, d, x, y) {
        var sqrt = Math.sqrt(ax * ax + ay * ay);
        return [+(ax * d / sqrt + x).toFixed(7), +(ay * d / sqrt + y).toFixed(7)];
    };

    /**
     * 点（x,y）围绕中心（cx,cy）缩放times倍
     */
    var _scale2 = function _scale2(cx, cy, times, x, y) {
        return [+(times * (x - cx) + cx).toFixed(7), +(times * (y - cy) + cy).toFixed(7)];
    };

    var dot = function dot(config) {

        config = initConfig({
            // 前进方向
            d: [1, 1],
            // 中心坐标
            c: [0, 0],
            // 当前位置
            p: [0, 0]
        }, config);

        var dotObj = {

            // 前进方向以当前位置为中心，旋转deg度
            "rotate": function rotate(deg) {
                var dPx = config.d[0] + config.p[0],
                    dPy = config.d[1] + config.p[1];
                var dP = _rotate2(config.p[0], config.p[1], deg, dPx, dPy);
                config.d = [dP[0] - config.p[0], dP[1] - config.p[1]];
                return dotObj;
            },

            // 沿着当前前进方向前进d
            "move": function move(d) {
                config.p = _move2(config.d[0], config.d[1], d, config.p[0], config.p[1]);
                return dotObj;
            },

            // 围绕中心坐标缩放
            "scale": function scale(times) {
                config.p = _scale2(config.c[0], config.c[1], times, config.p[0], config.p[1]);
                return dotObj;
            },

            // 当前位置
            "value": function value() {
                return config.p;
            }

        };

        return dotObj;
    };

    function treeLayout$1(config) {

        config = initConfig({

            // 类型：如果不是下面五种之一，就认为是原始类型
            // type:LR|RL|BT|TB|circle

            // 如果类型是LR|RL|BT|TB需要设置如下参数
            // width,height:宽和高

            // 如果类型是circle需要设置如下参数
            // 1.cx,cy：圆心；2.radius:半径；3.begin-deg,deg：开始和跨越弧度（可选）
            "begin-deg": 0,
            "deg": Math.PI * 2

        }, config);

        var treeCalc = treeLayout()
        // 配置数据格式
        .root(config.root).child(config.child).id(config.id);

        var treeObj = function treeObj(initData) {

            // 计算初始坐标
            var orgData = treeCalc(initData);

            // 计算deep
            for (var key in orgData.node) {
                orgData.node[key].deep = orgData.node[key].left - 0.5;
            }

            if (config.type === 'LR' || config.type === 'RL') {

                // 每层间隔
                var dis1 = config.width / orgData.deep;
                if ("RL" === config.type) dis1 *= -1;
                // 兄弟间隔
                var dis2 = config.height / (orgData.size - -0.5);
                for (var i in orgData.node) {
                    var node = orgData.node[i];
                    orgData.node[i].left = +(("RL" == config.type ? config.width : 0) - -node.left * dis1).toFixed(7);
                    orgData.node[i].top = +(node.top * dis2).toFixed(7);
                }
            } else if (config.type === 'TB' || config.type === 'BT') {

                // 每层间隔
                var _dis = config.height / orgData.deep;
                if ("BT" == config.type) _dis *= -1;
                // 兄弟间隔
                var _dis2 = config.width / (orgData.size - -0.5);
                var _left = void 0,
                    _top = void 0;
                for (var _i3 in orgData.node) {
                    var _node2 = orgData.node[_i3];
                    _left = _node2.left;
                    _top = _node2.top;
                    orgData.node[_i3].top = +(("BT" == config.type ? config.height : 0) - -_left * _dis).toFixed(7);
                    orgData.node[_i3].left = +(_top * _dis2).toFixed(7);
                }
            } else if (config.type === 'circle') {

                // 如果只有一个结点
                if (orgData.deep == 1 && orgData.size == 1) {
                    orgData.node[orgData.root].left = config.cx;
                    orgData.node[orgData.root].top = config.cy;
                }

                // 如果有多个结点
                else {

                        // 每层间距
                        var _dis3 = config.radius / (orgData.deep - 1);
                        // 兄弟间隔弧度
                        var _dis4 = config.deg / (orgData.size - -0.5);
                        for (var _i4 in orgData.node) {
                            var _node3 = orgData.node[_i4];
                            orgData.node[_i4].deg = (config['begin-deg'] - -_dis4 * _node3.top) % (Math.PI * 2);
                            var pos = _rotate2(config.cx, config.cy, orgData.node[_i4].deg, config.cx - -_dis3 * (_node3.left - 0.5), config.cy);
                            orgData.node[_i4].left = +pos[0];
                            orgData.node[_i4].top = +pos[1];
                        }
                    }
            }

            // 启动绘图
            if (isFunction(config.drawer)) {

                // 如果配置了绘图方法，就调用绘图方法
                config.drawer(orgData);
                return treeObj;
            } else {

                // 否则返回数据
                return orgData;
            }
        };

        // 配置
        treeObj.config = function (_config) {
            config = initConfig(config, _config);
            return treeObj;
        };

        // 设置绘图方法
        treeObj.drawer = function (drawerback) {
            config.drawer = drawerback;
            return treeObj;
        };

        return treeObj;
    }

    function pieLayout(config) {

        config = initConfig({

            // 饼图的开始和跨域角度[可选]
            "begin-deg": -Math.PI / 2,
            "deg": Math.PI * 2,

            // 饼图中一个瓣的中心参考半径，可以有多个[可选]
            "radius": []
            // "cx": "",
            // "cy": "",

            // 设置数据结构[必选]
            // "value": function (data, key, index) { }

        }, config);

        if (!isFunction(config.value)) {
            throw new Error('config.value must be a function!');
        }

        var pieObj = function pieObj(initData) {

            var i = 0,
                innerData = [],
                allData = 0;
            for (var key in initData) {
                innerData.push({
                    "value": config.value(initData[key], key, i),
                    "data": initData[key],
                    "key": key,
                    "index": i,
                    "dots": []
                });
                allData += innerData[i].value;
                i += 1;
            }

            for (i = 0; i < innerData.length; i++) {

                // 起始弧度
                innerData[i].beginDeg = i === 0 ? config['begin-deg'] : innerData[i - 1].beginDeg + innerData[i - 1].deg;

                // 百分比
                var percent = innerData[i].value / allData;

                // 跨越弧度
                innerData[i].deg = percent * config.deg;

                innerData[i].percent = new Number(percent * 100).toFixed(2);
            }

            // 中心点（用于辅助绘制折线）
            if (isNumber(config.cx) && isNumber(config.cy)) {
                for (i = 0; i < config.radius.length; i++) {

                    for (var j = 0; j < innerData.length; j++) {
                        innerData[j].dots.push(_rotate2(config.cx, config.cy, innerData[j].beginDeg + innerData[j].deg * 0.5, config.cx + config.radius[i], config.cy));
                    }
                }
            }

            // 启动绘图
            if (isFunction(config.drawer)) {
                config.drawer(innerData);
                return pieObj;
            } else {
                return innerData;
            }
        };

        // 配置
        pieObj.config = function (_config) {
            config = initConfig(config, _config);
            return pieObj;
        };

        // 设置绘图方法
        pieObj.drawer = function (drawerback) {
            config.drawer = drawerback;
            return pieObj;
        };

        return pieObj;
    }

    /**
     * 在(a,b,c)方向位移d
     */
    function _move(d, a, b, c) {
        c = c || 0;
        var sqrt = Math.sqrt(a * a + b * b + c * c);
        return [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, a * d / sqrt, b * d / sqrt, c * d / sqrt, 1];
    }

    /**
     * 围绕0Z轴旋转
     * 其它的旋转可以借助transform实现
     * 旋转角度单位采用弧度制
     */
    function _rotate(deg) {
        var sin = Math.sin(deg),
            cos = Math.cos(deg);
        return [cos, sin, 0, 0, -sin, cos, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1];
    }

    /**
     * 围绕圆心x、y和z分别缩放xTimes, yTimes和zTimes倍
     */
    function _scale(xTimes, yTimes, zTimes, cx, cy, cz) {
        cx = cx || 0;cy = cy || 0;cz = cz || 0;
        return [xTimes, 0, 0, 0, 0, yTimes, 0, 0, 0, 0, zTimes, 0, cx - cx * xTimes, cy - cy * yTimes, cz - cz * zTimes, 1];
    }

    /**
     * 针对任意射线(a1,b1,c1)->(a2,b2,c2)
     * 计算出二个变换矩阵
     * 分别为：任意射线变成OZ轴变换矩阵 + OZ轴变回原来的射线的变换矩阵
     */
    function _transform(a1, b1, c1, a2, b2, c2) {

        if (typeof a1 === 'number' && typeof b1 === 'number') {

            // 如果设置二个点
            // 表示二维上围绕某个点旋转
            if (typeof c1 !== 'number') {
                c1 = 0;a2 = a1;b2 = b1;c2 = 1;
            }
            // 只设置三个点(设置不足六个点都认为只设置了三个点)
            // 表示围绕从原点出发的射线旋转
            else if (typeof a2 !== 'number' || typeof b2 !== 'number' || typeof c2 !== 'number') {
                    a2 = a1;b2 = b1;c2 = c1;a1 = 0;b1 = 0;c1 = 0;
                }

            if (a1 == a2 && b1 == b2 && c1 == c2) throw new Error('It\'s not a legitimate ray!');

            var sqrt1 = Math.sqrt((a2 - a1) * (a2 - a1) + (b2 - b1) * (b2 - b1)),
                cos1 = sqrt1 != 0 ? (b2 - b1) / sqrt1 : 1,
                sin1 = sqrt1 != 0 ? (a2 - a1) / sqrt1 : 0,
                b = (a2 - a1) * sin1 + (b2 - b1) * cos1,
                c = c2 - c1,
                sqrt2 = Math.sqrt(b * b + c * c),
                cos2 = sqrt2 != 0 ? c / sqrt2 : 1,
                sin2 = sqrt2 != 0 ? b / sqrt2 : 0;

            return [

            // 任意射线变成OZ轴变换矩阵
            [cos1, cos2 * sin1, sin1 * sin2, 0, -sin1, cos1 * cos2, cos1 * sin2, 0, 0, -sin2, cos2, 0, b1 * sin1 - a1 * cos1, c1 * sin2 - a1 * sin1 * cos2 - b1 * cos1 * cos2, -a1 * sin1 * sin2 - b1 * cos1 * sin2 - c1 * cos2, 1],

            // OZ轴变回原来的射线的变换矩阵
            [cos1, -sin1, 0, 0, cos2 * sin1, cos2 * cos1, -sin2, 0, sin1 * sin2, cos1 * sin2, cos2, 0, a1, b1, c1, 1]];
        } else {
            throw new Error('a1 and b1 is required!');
        }
    }

    // 二个4x4矩阵相乘
    // 或矩阵和齐次坐标相乘
    var _multiply = function _multiply(matrix4, param) {
        var newParam = [];
        for (var i = 0; i < 4; i++) {
            for (var j = 0; j < param.length / 4; j++) {
                newParam[j * 4 + i] = matrix4[i] * param[j * 4] + matrix4[i + 4] * param[j * 4 + 1] + matrix4[i + 8] * param[j * 4 + 2] + matrix4[i + 12] * param[j * 4 + 3];
            }
        }return newParam;
    };

    /*!
     * 💡 - 列主序存储的4x4矩阵
     * https://github.com/hai2007/tool.js/blob/master/Matrix4.js
     *
     * author hai2007 < https://hai2007.gitee.io/sweethome >
     *
     * Copyright (c) 2020-present hai2007 走一步，再走一步。
     * Released under the MIT license
     */

    function Matrix4(initMatrix4) {

        var matrix4 = initMatrix4 || [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1];

        var matrix4Obj = {

            // 移动
            "move": function move(dis, a, b, c) {
                matrix4 = _multiply(_move(dis, a, b, c), matrix4);
                return matrix4Obj;
            },

            // 旋转
            "rotate": function rotate(deg, a1, b1, c1, a2, b2, c2) {
                var matrix4s = _transform(a1, b1, c1, a2, b2, c2);
                matrix4 = _multiply(_multiply(_multiply(matrix4s[1], _rotate(deg)), matrix4s[0]), matrix4);
                return matrix4Obj;
            },

            // 缩放
            "scale": function scale(xTimes, yTimes, zTimes, cx, cy, cz) {
                matrix4 = _multiply(_scale(xTimes, yTimes, zTimes, cx, cy, cz), matrix4);
                return matrix4Obj;
            },

            // 乘法
            // 可以传入一个矩阵(matrix4,flag)
            "multiply": function multiply(newMatrix4, flag) {
                matrix4 = flag ? _multiply(matrix4, newMatrix4) : _multiply(newMatrix4, matrix4);
                return matrix4Obj;
            },

            // 对一个坐标应用变换
            // 齐次坐标(x,y,z,w)
            "use": function use(x, y, z, w) {
                // w为0表示点位于无穷远处，忽略
                z = z || 0;w = w || 1;
                var temp = _multiply(matrix4, [x, y, z, w]);
                temp[0] = +temp[0].toFixed(7);
                temp[1] = +temp[1].toFixed(7);
                temp[2] = +temp[2].toFixed(7);
                temp[3] = +temp[3].toFixed(7);
                return temp;
            },

            // 矩阵的值
            "value": function value() {
                return matrix4;
            }

        };

        return matrix4Obj;
    }

    //当前正在运动的动画的tick函数堆栈
    var $timers = [];
    //唯一定时器的定时间隔
    var $interval = 13;
    //指定了动画时长duration默认值
    var $speeds = 400;
    //定时器ID
    var $timerId = null;

    /*!
     * 💡 - 动画轮播
     * https://github.com/hai2007/tool.js/blob/master/animation.js
     *
     * author hai2007 < https://hai2007.gitee.io/sweethome >
     *
     * Copyright (c) 2020-present hai2007 走一步，再走一步。
     * Released under the MIT license
     */

    /**
     * @param {function} doback 轮询函数，有一个形参deep，0-1，表示执行进度
     * @param {number} duration 动画时长，可选
     * @param {function} callback 动画结束回调，可选，有一个形参deep，0-1，表示执行进度
     *
     * @returns {function} 返回一个函数，调用该函数，可以提前结束动画
     */
    function animation(doback, duration, callback) {

        // 如果没有传递时间，使用内置默认值
        if (arguments.length < 2) duration = $speeds;

        var clock = {
            //把tick函数推入堆栈
            "timer": function timer(tick, duration, callback) {
                if (!tick) {
                    throw new Error('Tick is required!');
                }
                var id = new Date().valueOf() + "_" + (Math.random() * 1000).toFixed(0);
                $timers.push({
                    "id": id,
                    "createTime": new Date(),
                    "tick": tick,
                    "duration": duration,
                    "callback": callback
                });
                clock.start();
                return id;
            },

            //开启唯一的定时器timerId
            "start": function start() {
                if (!$timerId) {
                    $timerId = setInterval(clock.tick, $interval);
                }
            },

            //被定时器调用，遍历timers堆栈
            "tick": function tick() {
                var createTime,
                    flag,
                    tick,
                    callback,
                    timer,
                    duration,
                    passTime,
                    timers = $timers;
                $timers = [];
                $timers.length = 0;
                for (flag = 0; flag < timers.length; flag++) {
                    //初始化数据
                    timer = timers[flag];
                    createTime = timer.createTime;
                    tick = timer.tick;
                    duration = timer.duration;
                    callback = timer.callback;

                    //执行
                    passTime = (+new Date() - createTime) / duration;
                    passTime = passTime > 1 ? 1 : passTime;
                    tick(passTime);
                    if (passTime < 1 && timer.id) {
                        //动画没有结束再添加
                        $timers.push(timer);
                    } else if (callback) {
                        callback(passTime);
                    }
                }
                if ($timers.length <= 0) {
                    clock.stop();
                }
            },

            //停止定时器，重置timerId=null
            "stop": function stop() {
                if ($timerId) {
                    clearInterval($timerId);
                    $timerId = null;
                }
            }
        };

        var id = clock.timer(function (deep) {
            //其中deep为0-1，表示改变的程度
            doback(deep);
        }, duration, callback);

        // 返回一个函数
        // 用于在动画结束前结束动画
        return function () {
            var i;
            for (i in $timers) {
                if ($timers[i].id == id) {
                    $timers[i].id = undefined;
                    return;
                }
            }
        };
    }

    /**
     * 初始化配置文件
     *
     * @param {Json} init 默认值
     * @param {Json} data
     * @return {Json}
     */
    function initConfig$1(init, data) {
        for (var key in data) {
            try {
                init[key] = data[key];
            } catch (e) {
                throw new Error("Illegal property value！");
            }
        }return init;
    }

    /*!
     * 💡 - Hermite三次插值
     * https://github.com/hai2007/tool.js/blob/master/Hermite.js
     *
     * author hai2007 < https://hai2007.gitee.io/sweethome >
     *
     * Copyright (c) 2020-present hai2007 走一步，再走一步。
     * Released under the MIT license
     */

    function hermite(config) {

        config = initConfig$1({
            // 张弛系数
            "u": 0.5
        }, config);

        var MR, a, b;

        /**
         * 根据x值返回y值
         * @param {Number} x
         */
        var hermite = function hermite(x) {
            if (MR) {
                var sx = (x - a) / (b - a),
                    sx2 = sx * sx,
                    sx3 = sx * sx2;
                var sResult = sx3 * MR[0] + sx2 * MR[1] + sx * MR[2] + MR[3];
                return sResult * (b - a);
            } else throw new Error('You shoud first set the position!');
        };

        /**
         * 设置点的位置
         * @param {Number} x1 左边点的位置
         * @param {Number} y1
         * @param {Number} x2 右边点的位置
         * @param {Number} y2
         * @param {Number} s1 二个点的斜率
         * @param {Number} s2
         */
        hermite.setP = function (x1, y1, x2, y2, s1, s2) {
            if (x1 < x2) {
                // 记录原始尺寸
                a = x1;b = x2;
                var p3 = config.u * s1,
                    p4 = config.u * s2;
                // 缩放到[0,1]定义域
                y1 /= x2 - x1;
                y2 /= x2 - x1;
                // MR是提前计算好的多项式通解矩阵
                // 为了加速计算
                // 如上面说的
                // 统一在[0,1]上计算后再通过缩放和移动恢复
                // 避免了动态求解矩阵的麻烦
                MR = [2 * y1 - 2 * y2 + p3 + p4, 3 * y2 - 3 * y1 - 2 * p3 - p4, p3, y1];
            } else throw new Error('The point x-position should be increamented!');
            return hermite;
        };

        return hermite;
    }

    /**
     * 轮询动画
     * @param {function} doback 轮询触发方法
     * @param {number} time 动画时长，可选
     * @param {function} callback 动画结束回调，可选
     * @param {array|string} timing 动画进度控制参数，可选
     *
     * @return {function} stop函数，可以提前停止动画
     */
    function animation$1(doback, time, callback, timing) {

        if (!isFunction(callback)) {
            timing = callback;
            callback = false;
        }

        // 获取插值计算参数
        var transition_timing = {
            "ease": [0.25, 0.1, 0.5, 1],
            "ease-in": [0.5, 0.0, 0.75, 0.6],
            "ease-in-out": [0.43, 0.01, 0.58, 1],
            "ease-out": [0.25, 0.6, 0.5, 1],
            "linear": "default"
        }[timing] || timing;

        var transition_timing_function = function transition_timing_function(deep) {
            return deep;
        };
        if (transition_timing && isArray(transition_timing) && transition_timing.length == 4) {
            transition_timing_function = hermite({
                "u": 1
            }).setP(0, 0, 1, 1, transition_timing[1] / transition_timing[0], (1 - transition_timing[3]) / (1 - transition_timing[2]));
        }

        return animation(function (deep) {
            doback(transition_timing_function(deep));
        }, time, function (deep) {
            if (isFunction(callback)) {
                if (deep != 1) deep = transition_timing_function(deep);
                callback(deep);
            }
        });
    }

    /**
     * Cardinal三次插值
     * ----------------------------
     * Hermite拟合的计算是，确定二个点和二个点的斜率
     * 用一个y=ax(3)+bx(2)+cx+d的三次多项式来求解
     * 而Cardinal是建立在此基础上
     * 给定需要拟合的二个点和第一个点的前一个点+最后一个点的后一个点
     * 第一个点的斜率由第一个点的前一个点和第二个点的斜率确定
     * 第二个点的斜率由第一个点和第二个点的后一个点的斜率确定
     */

    function cardinal(config) {

        config = initConfig({
            // 该参数用于调整曲线走势，默认数值t=0，分水岭t=-1，|t-(-1)|的值越大，曲线走势调整的越严重
            "t": 0
        }, config);

        var HS = void 0,
            i = void 0;

        // 根据x值返回y值
        var cardinal = function cardinal(x) {

            if (HS) {
                i = -1;
                // 寻找记录x实在位置的区间
                // 这里就是寻找对应的拟合函数
                while (i + 1 < HS.x.length && (x > HS.x[i + 1] || i == -1 && x >= HS.x[i + 1])) {
                    i += 1;
                }
                if (i == -1 || i >= HS.h.length) throw new Error('Coordinate crossing!');
                return HS.h[i](x);
            } else {
                throw new Error('You shoud first set the position!');
            }
        };

        // 设置张弛系数【应该在点的位置设置前设置】
        cardinal.setT = function (t) {

            if (typeof t === 'number') {
                config.t = t;
            } else {
                throw new Error('Expecting a figure!');
            }
            return cardinal;
        };

        // 设置点的位置
        // 参数格式：[[x,y],[x,y],...]
        // 至少二个点
        cardinal.setP = function (points) {

            HS = {
                "x": [],
                "h": []
            };
            var flag = void 0,
                slope = (points[1][1] - points[0][1]) / (points[1][0] - points[0][0]),
                temp = void 0;
            HS.x[0] = points[0][0];
            for (flag = 1; flag < points.length; flag++) {
                if (points[flag][0] <= points[flag - 1][0]) throw new Error('The point position should be increamented!');
                HS.x[flag] = points[flag][0];
                // 求点斜率
                temp = flag < points.length - 1 ? (points[flag + 1][1] - points[flag - 1][1]) / (points[flag + 1][0] - points[flag - 1][0]) : (points[flag][1] - points[flag - 1][1]) / (points[flag][0] - points[flag - 1][0]);
                // 求解二个点直接的拟合方程
                // 第一个点的前一个点直接取第一个点
                // 最后一个点的后一个点直接取最后一个点
                HS.h[flag - 1] = hermite({
                    "u": (1 - config.t) * 0.5
                }).setP(points[flag - 1][0], points[flag - 1][1], points[flag][0], points[flag][1], slope, temp);
                slope = temp;
            }
            return cardinal;
        };

        return cardinal;
    }

    /**
     * 返回渲染后的CSS样式值
     * @param {DOM} dom 目标结点
     * @param {String} name 属性名称（可选）
     * @return {String}
     */
    function getStyle(dom, name) {

        // 获取结点的全部样式
        var allStyle = document.defaultView && document.defaultView.getComputedStyle ? document.defaultView.getComputedStyle(dom, null) : dom.currentStyle;

        // 如果没有指定属性名称，返回全部样式
        return isString(name) ? allStyle.getPropertyValue(name) : allStyle;
    }

    // 把颜色统一转变成rgba(x,x,x,x)格式
    // 返回数字数组[r,g,b,a]
    var formatColor = function formatColor(color) {
        var colorNode = document.getElementsByTagName('head')[0];
        colorNode.style['color'] = color;
        var rgba = getStyle(colorNode, 'color');
        var rgbaArray = rgba.replace(/^rgba?\(([^)]+)\)$/, '$1').split(new RegExp('\\,' + REGEXP.whitespace));
        return [+rgbaArray[0], +rgbaArray[1], +rgbaArray[2], rgbaArray[3] == undefined ? 1 : +rgbaArray[3]];
    };

    // 获取一组随机色彩
    var getRandomColors = function getRandomColors(num, alpha) {
        if (!(alpha && alpha >= 0 && alpha <= 1)) alpha = 1;
        var temp = [];
        for (var flag = 1; flag <= num; flag++) {
            temp.push('rgba(' + (Math.random(1) * 230 + 20).toFixed(0) + ',' + (Math.random(1) * 230 + 20).toFixed(0) + ',' + (Math.random(1) * 230 + 20).toFixed(0) + ',' + alpha + ')');
        }
        return temp;
    };

    // 获取一组循环色彩
    var getLoopColors = function getLoopColors(num, alpha) {
        if (!(alpha && alpha >= 0 && alpha <= 1)) alpha = 1;
        // 颜色集合
        var colorList = ['rgba(84,112,198,' + alpha + ")", 'rgba(145,204,117,' + alpha + ")", 'rgba(250,200,88,' + alpha + ")", 'rgba(238,102,102,' + alpha + ")", 'rgba(115,192,222,' + alpha + ")", 'rgba(59,162,114,' + alpha + ")", 'rgba(252,132,82,' + alpha + ")", 'rgba(154,96,180,' + alpha + ")", 'rgba(234,124,204,' + alpha + ")"];

        var colors = [];

        // 根据情况返回颜色数组
        if (num <= colorList.length) {
            // 这种情况就不需要任何处理
            return colorList;
        } else {
            // 如果正好是集合长度的倍数
            if (num % colorList.length == 0) {
                // 将颜色数组循环加入后再返回
                for (var i = 0; i < num / colorList.length; i++) {
                    colors = colors.concat(colorList);
                }
            } else {
                for (var j = 1; j < num / colorList.length; j++) {
                    colors = colors.concat(colorList);
                }
                // 防止最后一个颜色和第一个颜色重复
                if (num % colorList.length == 1) {
                    colors = colors.concat(colorList[4]);
                } else {
                    for (var k = 0; k < num % colorList.length; k++) {
                        colors = colors.concat(colorList[k]);
                    }
                }
            }
        }

        // 返回结果
        return colors;
    };

    /**
     * 绑定事件
     * @param {string} eventType
     * @param {function} callback
     */
    var bind = function bind(eventType, callback) {

        if (window.attachEvent) {
            for (var flag = 0; flag < this.length; flag++) {
                this[flag].attachEvent("on" + eventType, callback);
            } // 后绑定的先执行
        } else {
            for (var _flag2 = 0; _flag2 < this.length; _flag2++) {
                this[_flag2].addEventListener(eventType, callback, false);
            } // 捕获
        }

        return this;
    };

    /**
     * 解除绑定事件
     * @param {string} eventType
     * @param {function} handler
     */
    var unbind = function unbind(eventType, handler) {

        if (window.detachEvent) {
            for (var flag = 0; flag < this.length; flag++) {
                this[flag].detachEvent("on" + eventType, handler);
            }
        } else {
            for (var _flag3 = 0; _flag3 < this.length; _flag3++) {
                this[_flag3].removeEventListener(eventType, handler, false);
            }
        }

        return this;
    };

    /**
     * 获取鼠标相对特定元素左上角位置
     * @param {Event} event
     */
    var position = function position(event) {

        // 返回元素的大小及其相对于视口的位置
        var bounding = this[0].getBoundingClientRect();

        if (!event || !event.clientX) throw new Error('Event is necessary!');
        return {

            // 鼠标相对元素位置 = 鼠标相对窗口坐标 - 元素相对窗口坐标
            "x": event.clientX - bounding.left,
            "y": event.clientY - bounding.top
        };
    };

    /**
     * 阻止冒泡
     * @param {Event} event 
     */
    var stopPropagation = function stopPropagation(event) {
        event = event || window.event;
        if (event.stopPropagation) {
            //这是其他非IE浏览器
            event.stopPropagation();
        } else {
            event.cancelBubble = true;
        }
        return this;
    };

    /**
     * 阻止默认事件
     * @param {Event} event 
     */
    var preventDefault = function preventDefault(event) {
        event = event || window.event;
        if (event.preventDefault) {
            event.preventDefault();
        } else {
            event.returnValue = false;
        }
        return this;
    };

    /* 等角斜方位投影 */

    var
    // 围绕X轴旋转
    _rotateX = function _rotateX(deg, x, y, z) {
        var cos = Math.cos(deg),
            sin = Math.sin(deg);
        return [x, y * cos - z * sin, y * sin + z * cos];
    },

    // 围绕Y轴旋转
    _rotateY = function _rotateY(deg, x, y, z) {
        var cos = Math.cos(deg),
            sin = Math.sin(deg);
        return [z * sin + x * cos, y, z * cos - x * sin];
    },

    // 围绕Z轴旋转
    _rotateZ = function _rotateZ(deg, x, y, z) {
        var cos = Math.cos(deg),
            sin = Math.sin(deg);
        return [x * cos - y * sin, x * sin + y * cos, z];
    };

    var p = [];

    function eoap(config, longitude, latitude) {
        /**
         * 通过旋转的方法
         * 先旋转出点的位置
         * 然后根据把地心到旋转中心的这条射线变成OZ这条射线的变换应用到初始化点上
         * 这样求的的点的x,y就是最终结果
         *
         *  计算过程：
         *  1.初始化点的位置是p（x,0,0）,其中x的值是地球半径除以缩放倍速
         *  2.根据点的纬度对p进行旋转，旋转后得到的p的坐标纬度就是目标纬度
         *  3.同样的对此刻的p进行经度的旋转，这样就获取了极点作为中心点的坐标
         *  4.接着想象一下为了让旋转中心移动到极点需要进行旋转的经纬度是多少，记为lo和la
         *  5.然后再对p进行经度度旋转lo获得新的p
         *  6.然后再对p进行纬度旋转la获得新的p
         *  7.旋转结束
         *
         * 特别注意：第5和第6步顺序一定不可以调换，原因来自经纬度定义上
         * 【除了经度为0的位置，不然纬度的旋转会改变原来的经度值，反过来不会】
         *
         */
        p = _rotateY((360 - latitude) / 180 * Math.PI, 100 * config.scale, 0, 0);
        p = _rotateZ(longitude / 180 * Math.PI, p[0], p[1], p[2]);
        p = _rotateZ((90 - config.center[0]) / 180 * Math.PI, p[0], p[1], p[2]);
        p = _rotateX((90 - config.center[1]) / 180 * Math.PI, p[0], p[1], p[2]);

        return [-p[0], //加-号是因为浏览器坐标和地图不一样
        p[1], p[2]];
    }

    function map(_config) {

        var config = initConfig({

            // 默认使用「等角斜方位投影」
            type: 'eoap',

            // 缩放比例
            scale: 1,

            // 投影中心经纬度
            center: [107, 36]

        }, _config);

        var map = function map(longitude, latitude) {

            switch (config.type) {
                case 'eoap':
                    {
                        return eoap(config, longitude, latitude);
                    }
                default:
                    {
                        throw new Error('Map type configuration error!');
                    }
            }
        };

        // 修改配置
        map.config = function (_config) {
            config = initConfig(config, _config);
            return map;
        };

        return map;
    }

    /*!
     * 💡 - 刻度尺刻度求解
     * https://github.com/hai2007/tool.js/blob/master/ruler.js
     *
     * author hai2007 < https://hai2007.gitee.io/sweethome >
     *
     * Copyright (c) 2021-present hai2007 走一步，再走一步。
     * Released under the MIT license
     */

    // 需要注意的是，实际的间距个数可能是 num-1 或 num 或 num+1 或 1
    function ruler(maxValue, minValue, num) {

        // 如果最大值最小值反了
        if (maxValue < minValue) {
            var temp = minValue;
            minValue = maxValue;
            maxValue = temp;
        }

        // 如果相等
        else if (maxValue == minValue) {
                return [maxValue];
            }

        // 为了变成 -100 ~ 100 需要放大或者缩小的倍数
        var times100 = function (_value) {

            // 先确定基调，是放大还是缩小
            var _times100_base = _value < 100 && _value > -100 ? 10 : 0.1;

            // 记录当前缩放倍数
            var _times100 = 1,
                _tiemsValue = _value;

            while (_times100_base == 10 ?
            // 如果是放大，超过 -100 ~ 100 就应该停止
            _tiemsValue >= -100 && _tiemsValue <= 100 :
            // 如果是缩小，进入 -100 ~ 100 就应该停止
            _tiemsValue <= -100 || _tiemsValue >= 100) {

                _times100 *= _times100_base;
                _tiemsValue *= _times100_base;
            }

            return _times100;
        }(

        // 根据差值来缩放
        maxValue - minValue);

        // 求解出 -100 ~ 100 的最佳间距值 后直接转换原来的倍数
        var distance = Math.ceil((maxValue - minValue) * times100 / num) / times100;

        // 最小值，也就是起点
        var begin = Math.floor(minValue / distance) * distance;

        var rulerArray = [],
            index;
        // 获取最终的刻度尺数组
        rulerArray.push(begin);
        for (index = 1; rulerArray[rulerArray.length - 1] < maxValue; index++) {
            rulerArray.push(begin + distance * index);
        }

        return rulerArray;
    }

    // 刻度计算
    function ruler$1(maxValue, minValue) {
        var num = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 5;


        var rulerArray = ruler(maxValue, minValue, num);

        return {
            min: rulerArray[0],
            max: rulerArray[rulerArray.length - 1],
            distance: rulerArray[1] - rulerArray[0],
            num: rulerArray.length - 1,
            ruler: rulerArray
        };
    }

    /**
     * 把当前维护的结点加到目标结点内部的结尾
     * @param {selector} target
     * @return {image2D}
     */
    var appendTo = function appendTo(target, context) {
        var nodes = sizzle(target, context || document);
        if (nodes.length > 0) {
            for (var i = 0; i < this.length; i++) {
                nodes[0].appendChild(this[i]);
            }
        } else {
            throw new Error('Target empty!');
        }
        return this;
    };

    /**
     * 把当前维护的结点加到目标结点内部的开头
     * @param {selector} target
     * @return {image2D}
     */
    var prependTo = function prependTo(target, context) {
        var nodes = sizzle(target, context || document);
        if (nodes.length > 0) {
            for (var i = 0; i < this.length; i++) {
                nodes[0].insertBefore(this[i], nodes[0].childNodes[0]);
            }
        } else {
            throw new Error('Target empty!');
        }
        return this;
    };

    /**
     * 把当前维护的结点加到目标结点之后
     * @param {selector} target
     * @return {image2D}
     */
    var afterTo = function afterTo(target, context) {
        var nodes = sizzle(target, context || document);
        if (nodes.length > 0) {
            for (var i = 0; i < this.length; i++) {
                //如果第二个参数undefined,在结尾追加，目的一样达到
                nodes[0].parentNode.insertBefore(this[i], nodes[0].nextSibling);
            }
        } else {
            throw new Error('Target empty!');
        }
        return this;
    };

    /**
     * 把当前维护的结点加到目标结点之前
     * @param {selector} target
     * @return {image2D}
     */
    var beforeTo = function beforeTo(target, context) {
        var nodes = sizzle(target, context || document);
        if (nodes.length > 0) {
            for (var i = 0; i < this.length; i++) {
                nodes[0].parentNode.insertBefore(this[i], nodes[0]);
            }
        } else {
            throw new Error('Target empty!');
        }
        return this;
    };

    // 删除当前维护的结点
    var remove = function remove() {
        for (var i = 0; i < this.length; i++) {
            this[i].parentNode.removeChild(this[i]);
        }return this;
    };

    // 筛选当前结点
    var filter = function filter(filterback) {
        var temp = [];
        for (var i = 0; i < this.length; i++) {
            if (filterback(i, image2D(this[i]))) temp.push(this[i]);
        }
        return image2D(temp);
    };

    // 修改文本或获取结点文本
    var text = function text(content) {
        if (arguments.length > 0) {
            for (var i = 0; i < this.length; i++) {
                this[i].textContent = content;
            }return this;
        }
        if (this.length <= 0) throw new Error('Target empty!');
        return this[0].textContent;
    };

    // 设置或获取结点中的xhtml字符串模板（相当于innerHTML）
    var html = function html(xhtmlString) {
        if (arguments.length > 0) {
            for (var i = 0; i < this.length; i++) {

                // 如果是SVG标签
                if (/[a-z]/.test(this[i].tagName)) {
                    setSVG(this[i], xhtmlString);
                }

                // 否则是普通html标签
                else {
                        this[i].innerHTML = xhtmlString;
                    }
            }
            return this;
        }
        if (this.length <= 0) throw new Error('Target empty!');
        return this[0].innerHTML;
    };

    // 获取元素大小
    var size = function size(type) {
        if (this.length <= 0) throw new Error('Target empty!');

        var elemHeight = void 0,
            elemWidth = void 0,
            dom = this[0];

        if (type == 'content') {
            //内容
            elemWidth = dom.clientWidth - (getStyle(dom, 'padding-left') + "").replace('px', '') - (getStyle(dom, 'padding-right') + "").replace('px', '');
            elemHeight = dom.clientHeight - (getStyle(dom, 'padding-top') + "").replace('px', '') - (getStyle(dom, 'padding-bottom') + "").replace('px', '');
        } else if (type == 'padding') {
            //内容+内边距
            elemWidth = dom.clientWidth;
            elemHeight = dom.clientHeight;
        } else if (type == 'border') {
            //内容+内边距+边框
            elemWidth = dom.offsetWidth;
            elemHeight = dom.offsetHeight;
        } else if (type == 'scroll') {
            //包含滚动的尺寸（不包括border）
            elemWidth = dom.scrollWidth;
            elemHeight = dom.scrollHeight;
        } else {
            elemWidth = dom.offsetWidth;
            elemHeight = dom.offsetHeight;
        }
        return {
            width: elemWidth,
            height: elemHeight
        };
    };

    /**
     * 设置或获取样式
     * @arguments(key):获取指定样式
     * @arguments(key,value):设置指定样式
     * @arguments():获取全部样式
     * @arguments(json):设置大量样式
     */
    function style() {

        // 获取样式
        if (arguments.length <= 1 && (arguments.length <= 0 || _typeof(arguments[0]) !== 'object')) {
            if (this.length <= 0) throw new Error('Target empty!');

            // 为了获取非style定义的样式，需要使用特殊的方法获取
            return getStyle(this[0], arguments[0]);
        }

        // 设置样式
        for (var i = 0; i < this.length; i++) {
            if (arguments.length === 1) {
                for (var key in arguments[0]) {
                    this[i].style[key] = arguments[0][key];
                }
            } else this[i].style[arguments[0]] = arguments[1];
        }

        return this;
    }

    var setAttribute = function setAttribute(dom, attr, val) {
        if (/[a-z]/.test(dom.tagName) && XLINK_ATTRIBUTE.indexOf(attr) >= 0) {
            // 如果是xml元素
            // 针对xlink使用特殊方法赋值
            dom.setAttributeNS(NAMESPACE.xlink, 'xlink:' + attr, val);
        } else dom.setAttribute(attr, val);
    };

    /**
     * 设置或获取属性
     * @arguments(attr):获取属性
     * @arguments(attr,value):设置指定属性值
     * @arguments(json):设置大量属性
     */
    function attribute() {

        // 获取属性值
        if (arguments.length === 1 && _typeof(arguments[0]) !== 'object') {
            if (this.length <= 0) throw new Error('Target empty!');
            return this[0].getAttribute(arguments[0]);
        }

        // 设置属性值
        else if (arguments.length > 0) {
                for (var i = 0; i < this.length; i++) {
                    if (arguments.length === 1) {
                        for (var key in arguments[0]) {
                            setAttribute(this[i], key, arguments[0][key]);
                        }
                    } else setAttribute(this[i], arguments[0], arguments[1]);
                }
            }

        return this;
    }

    // 用于把数据绑定到一组结点或返回第一个结点数据
    // 可以传递函数对数据处理
    var datum = function datum(data, calcback) {

        // 获取数据
        if (arguments.length <= 0) {
            if (this.length <= 0) throw new Error('Target empty!');
            return this[0].__data__;
        }

        // 设置数据
        for (var i = 0; i < this.length; i++) {
            this[i].__data__ = typeof calcback === 'function' ? calcback(data, i) : data;
        }return this;
    };

    // 用于把一组数据绑定到一组结点或返回一组结点数据
    // 可以传递函数对数据处理
    var data = function data(datas, calcback) {

        // 获取数据
        if (arguments.length <= 0) {
            var _temp3 = [];
            for (var _i5 = 0; _i5 < this.length; _i5++) {
                _temp3[_i5] = this[_i5].__data__;
            }return _temp3;
        }

        // 设置数据
        var temp = [],
            i = void 0;
        for (i = 0; i < this.length && i < datas.length; i++) {
            this[i].__data__ = typeof calcback === 'function' ? calcback(datas[i], i) : datas[i];
            temp.push(this[i]);
        }
        var newImage2D = image2D(temp);

        // 记录需要去平衡的数据
        newImage2D.__enter__ = [];
        for (; i < datas.length; i++) {
            newImage2D.__enter__.push(typeof calcback === 'function' ? calcback(datas[i], i) : datas[i]);
        } // 记录需要去平衡的结点
        newImage2D.__exit__ = [];
        for (; i < this.length; i++) {
            newImage2D.__exit__.push(this[i]);
        }return newImage2D;
    };

    // 把过滤出来多于结点的数据部分变成结点返回
    // 需要传递一个字符串来标明新创建元素是什么
    var enter = function enter(template, type) {

        if (!this.__enter__ || this.__enter__.constructor !== Array) throw new Error('Not a data node object to be balanced!');

        var temp = [];
        for (var i = 0; i < this.__enter__.length; i++) {
            temp[i] = toNode$1(template, type);
            temp[i].__data__ = this.__enter__[i];
        }

        delete this.__enter__;
        return image2D(temp);
    };

    // 把过滤出来多于数据的结点部分返回
    var exit = function exit() {

        if (!this.__exit__ || this.__exit__.constructor !== Array) throw new Error('Not a data node object to be balanced!');

        var exitImage2D = image2D(this.__exit__);
        delete this.__exit__;
        return exitImage2D;
    };

    // 在维护的结点上轮询执行传入的方法
    // doback(data,index,image2D)
    var loop = function loop(doback) {

        for (var i = 0; i < this.length; i++) {
            doback(this[i].__data__, i, image2D(this[i]));
        }return this;
    };

    // r1和r2，内半径和外半径
    // beginA起点弧度，rotateA旋转弧度式
    function arc(beginA, rotateA, cx, cy, r1, r2, doback) {

        // 有了前置的判断，这里可以省略了
        // if (rotateA > Math.PI * 2) rotateA = Math.PI * 2;
        // if (rotateA < -Math.PI * 2) rotateA = -Math.PI * 2;

        // 保证逆时针也是可以的
        if (rotateA < 0) {
            beginA += rotateA;
            rotateA *= -1;
        }

        var temp = [],
            p = void 0;

        // 内部
        p = _rotate2(0, 0, beginA, r1, 0);
        temp[0] = p[0];
        temp[1] = p[1];
        p = _rotate2(0, 0, rotateA, p[0], p[1]);
        temp[2] = p[0];
        temp[3] = p[1];

        // 外部
        p = _rotate2(0, 0, beginA, r2, 0);
        temp[4] = p[0];
        temp[5] = p[1];
        p = _rotate2(0, 0, rotateA, p[0], p[1]);
        temp[6] = p[0];
        temp[7] = p[1];

        doback(beginA, beginA + rotateA, temp[0] + cx, temp[1] + cy, temp[4] + cx, temp[5] + cy, temp[2] + cx, temp[3] + cy, temp[6] + cx, temp[7] + cy, (r2 - r1) * 0.5);
    }

    // 文字统一设置方法
    var initText = function initText(painter, config, x, y, deg) {

        painter.beginPath();
        painter.translate(x, y);
        painter.rotate(deg);
        painter.font = config['font-size'] + "px " + config['font-family'];
        return painter;
    };

    // 画弧统一设置方法
    var initArc = function initArc(painter, config, cx, cy, r1, r2, beginDeg, deg) {

        if (r1 > r2) {
            var temp = r1;
            r1 = r2;
            r2 = temp;
        }

        beginDeg = beginDeg % (Math.PI * 2);

        // 当|deg|>=2π的时候都认为是一个圆环
        // 为什么不取2π比较，是怕部分浏览器浮点不精确，同时也是为了和svg保持一致
        if (deg >= Math.PI * 1.999999 || deg <= -Math.PI * 1.999999) {
            deg = Math.PI * 2;
        } else {
            deg = deg % (Math.PI * 2);
        }

        arc(beginDeg, deg, cx, cy, r1, r2, function (beginA, endA, begInnerX, begInnerY, begOuterX, begOuterY, endInnerX, endInnerY, endOuterX, endOuterY, r) {
            if (r < 0) r = -r;
            painter.beginPath();
            painter.moveTo(begInnerX, begInnerY);
            painter.arc(
            // (圆心x，圆心y，半径，开始角度，结束角度，true逆时针/false顺时针)
            cx, cy, r1, beginA, endA, false);
            // 结尾
            if (config["arc-end-cap"] != 'round') painter.lineTo(endOuterX, endOuterY);else painter.arc((endInnerX + endOuterX) * 0.5, (endInnerY + endOuterY) * 0.5, r, endA - Math.PI, endA, true);
            painter.arc(cx, cy, r2, endA, beginA, true);
            // 开头
            if (config["arc-start-cap"] != 'round') painter.lineTo(begInnerX, begInnerY);else painter.arc((begInnerX + begOuterX) * 0.5, (begInnerY + begOuterY) * 0.5, r, beginA, beginA - Math.PI, true);
        });
        if (config["arc-start-cap"] == 'butt') painter.closePath();
        return painter;
    };

    // 画圆统一设置方法
    var initCircle = function initCircle(painter, cx, cy, r) {
        painter.beginPath();
        painter.moveTo(cx + r, cy);
        painter.arc(cx, cy, r, 0, Math.PI * 2);
        return painter;
    };

    // 画矩形统一设置方法
    var initRect = function initRect(painter, x, y, width, height) {
        painter.beginPath();
        painter.rect(x, y, width, height);
        return painter;
    };

    // 线性渐变
    var linearGradient = function linearGradient(painter, x0, y0, x1, y1) {
        var gradient = painter.createLinearGradient(x0, y0, x1, y1);
        var enhanceGradient = {
            "value": function value() {
                return gradient;
            },
            "addColorStop": function addColorStop(stop, color) {
                gradient.addColorStop(stop, color);
                return enhanceGradient;
            }
        };
        return enhanceGradient;
    };

    // 环形渐变
    var radialGradient = function radialGradient(painter, cx, cy, r) {
        var gradient = painter.createRadialGradient(cx, cy, 0, cx, cy, r);
        var enhanceGradient = {
            "value": function value() {
                return gradient;
            },
            "addColorStop": function addColorStop(stop, color) {
                gradient.addColorStop(stop, color);
                return enhanceGradient;
            }
        };
        return enhanceGradient;
    };

    // 加强版本的画笔
    function painter_canvas2D(canvas, noHiddenWarn) {

        // 获取canvas2D画笔
        var painter = canvas.getContext("2d");

        var isLayer = canvas.__image2D__layer__ == 'yes';

        // 图层是内部的，明确获取方法
        // 对外的一律使用clientXXX，区分是否显示
        var width = isLayer ? canvas.getAttribute('width') : canvas.clientWidth,
            //内容+内边距
        height = isLayer ? canvas.getAttribute('height') : canvas.clientHeight;

        if (width == 0 || height == 0) {

            if (!noHiddenWarn) console.warn('Canvas is hidden or size is zero!');

            if (canvas.__image2D__noLayer_getSize__ == 'yes') {

                width = canvas.width / 2;
                height = canvas.height / 2;
            } else {

                width = canvas.width;
                height = canvas.height;

                // 标记已经特殊获取大小了
                canvas.__image2D__noLayer_getSize__ = 'yes';
            }
        }

        // 设置显示大小
        canvas.style.width = width + "px";
        canvas.style.height = height + "px";

        // 设置画布大小（画布大小设置为显示的二倍，使得显示的时候更加清晰）
        canvas.setAttribute('width', width * 2);
        canvas.setAttribute('height', height * 2);

        // 通过缩放实现模糊问题
        painter.scale(2, 2);

        // 默认配置canvas2D对象已经存在的属性
        painter.textBaseline = 'middle';
        painter.textAlign = 'left';

        // 默认配置不应该有canvas2D对象已经存在的属性
        // 这里是为了简化或和svg统一接口而自定义的属性
        var config = {
            "font-size": "16", // 文字大小
            "font-family": "sans-serif", // 字体
            "arc-start-cap": "butt", // 弧开始闭合方式
            "arc-end-cap": "butt" // 弧结束闭合方式
        };

        // 配置生效方法
        var useConfig = function useConfig(key, value) {

            /**
             * -----------------------------
             * 特殊的设置开始
             * -----------------------------
             */

            if (key == 'lineDash') {
                painter.setLineDash(value);
            }

            /**
             * -----------------------------
             * 常规的配置开始
             * -----------------------------
             */

            // 如果已经存在默认配置中，说明只需要缓存起来即可
            else if (config[key]) {
                    config[key] = value;
                }

                // 其它情况直接生效即可
                else {
                        painter[key] = value;
                    }
        };

        // 画笔
        var enhancePainter = {

            // 属性设置或获取
            "config": function config() {
                if (arguments.length === 1) {
                    if (_typeof(arguments[0]) !== 'object') return painter[arguments[0]];
                    for (var key in arguments[0]) {
                        useConfig(key, arguments[0][key]);
                    }
                } else if (arguments.length === 2) {
                    useConfig(arguments[0], arguments[1]);
                }
                return enhancePainter;
            },

            // 文字
            "fillText": function fillText(text, x, y, deg) {
                painter.save();
                initText(painter, config, x, y, deg || 0).fillText(text, 0, 0);
                painter.restore();
                return enhancePainter;
            },
            "strokeText": function strokeText(text, x, y, deg) {
                painter.save();
                initText(painter, config, x, y, deg || 0).strokeText(text, 0, 0);
                painter.restore();
                return enhancePainter;
            },
            "fullText": function fullText(text, x, y, deg) {
                painter.save();
                initText(painter, config, x, y, deg || 0);
                painter.fillText(text, 0, 0);
                painter.strokeText(text, 0, 0);
                painter.restore();
                return enhancePainter;
            },

            // 路径
            "beginPath": function beginPath() {
                painter.beginPath();return enhancePainter;
            },
            "closePath": function closePath() {
                painter.closePath();return enhancePainter;
            },
            "moveTo": function moveTo(x, y) {
                painter.moveTo(x, y);return enhancePainter;
            },
            "lineTo": function lineTo(x, y) {
                painter.lineTo(x, y);return enhancePainter;
            },
            "arc": function arc(x, y, r, beginDeg, deg) {
                painter.arc(x, y, r, beginDeg, beginDeg + deg, deg < 0);
                return enhancePainter;
            },
            "fill": function fill() {
                painter.fill();return enhancePainter;
            },
            "stroke": function stroke() {
                painter.stroke();return enhancePainter;
            },
            "full": function full() {
                painter.fill();painter.stroke();return enhancePainter;
            },

            "save": function save() {
                painter.save();return enhancePainter;
            },
            "restore": function restore() {
                painter.restore();return enhancePainter;
            },

            // 路径 - 贝塞尔曲线
            "quadraticCurveTo": function quadraticCurveTo(cpx, cpy, x, y) {
                painter.quadraticCurveTo(cpx, cpy, x, y);return enhancePainter;
            },
            "bezierCurveTo": function bezierCurveTo(cp1x, cp1y, cp2x, cp2y, x, y) {
                painter.bezierCurveTo(cp1x, cp1y, cp2x, cp2y, x, y);return enhancePainter;
            },

            // 擦除画面
            "clearRect": function clearRect(x, y, width, height) {
                painter.clearRect(x || 0, y || 0, width || canvas.getAttribute('width') / 2, height || canvas.getAttribute('height') / 2);return enhancePainter;
            },

            // 地址图片
            "toDataURL": function toDataURL() {
                return canvas.toDataURL();
            },

            // image
            // v1.5.0开始，做了参数调整（非向下兼容）
            "drawImage": function drawImage(img, sx, sy, sw, sh, x, y, w, h) {
                sx = sx || 0;
                sy = sy || 0;
                x = x || 0;
                y = y || 0;
                w = w ? w * 2 : canvas.getAttribute('width');
                h = h ? h * 2 : canvas.getAttribute('height');

                if (img.nodeName == 'CANVAS') {
                    // 我们不考虑别的canvas，我们认为我们面对的canvas都是自己控制的
                    // 如果有必要，未来可以对任意canvas进行向下兼容
                    w = w / 2;
                    h = h / 2;
                    sw = sw ? sw * 2 : canvas.getAttribute('width');
                    sh = sh ? sh * 2 : canvas.getAttribute('height');
                } else {
                    // 默认类型是图片
                    sw = (sw || img.width) * 2;
                    sh = (sh || img.height) * 2;
                }

                painter.drawImage(img, sx, sy, sw, sh, x, y, w, h);
                return enhancePainter;
            },

            // 弧
            "fillArc": function fillArc(cx, cy, r1, r2, beginDeg, deg) {
                initArc(painter, config, cx, cy, r1, r2, beginDeg, deg).fill();return enhancePainter;
            },
            "strokeArc": function strokeArc(cx, cy, r1, r2, beginDeg, deg) {
                initArc(painter, config, cx, cy, r1, r2, beginDeg, deg).stroke();return enhancePainter;
            },
            "fullArc": function fullArc(cx, cy, r1, r2, beginDeg, deg) {
                initArc(painter, config, cx, cy, r1, r2, beginDeg, deg);
                painter.fill();
                painter.stroke();
                return enhancePainter;
            },

            // 圆形
            "fillCircle": function fillCircle(cx, cy, r) {
                initCircle(painter, cx, cy, r).fill();return enhancePainter;
            },
            "strokeCircle": function strokeCircle(cx, cy, r) {
                initCircle(painter, cx, cy, r).stroke();return enhancePainter;
            },
            "fullCircle": function fullCircle(cx, cy, r) {
                initCircle(painter, cx, cy, r);
                painter.fill();
                painter.stroke();
                return enhancePainter;
            },

            // 矩形
            "fillRect": function fillRect(x, y, width, height) {
                initRect(painter, x, y, width, height).fill();return enhancePainter;
            },
            "strokeRect": function strokeRect(x, y, width, height) {
                initRect(painter, x, y, width, height).stroke();return enhancePainter;
            },
            "fullRect": function fullRect(x, y, width, height) {
                initRect(painter, x, y, width, height);
                painter.fill();
                painter.stroke();
                return enhancePainter;
            },

            /**
            * 渐变
            * -------------
            */

            //  线性渐变
            "createLinearGradient": function createLinearGradient(x0, y0, x1, y1) {
                return linearGradient(painter, x0, y0, x1, y1);
            },

            // 环形渐变
            "createRadialGradient": function createRadialGradient(cx, cy, r) {
                return radialGradient(painter, cx, cy, r);
            },

            /**
             * 变换
             * --------------
             */

            //  移动
            // 用来移动 canvas 的原点到指定的位置
            "translate": function translate(x, y) {
                painter.translate(x, y);return enhancePainter;
            },

            //  旋转
            "rotate": function rotate(deg) {
                painter.rotate(deg);return enhancePainter;
            },

            // 缩放
            "scale": function scale(x, y) {
                y = y || x;painter.scale(x, y);return enhancePainter;
            }
        };

        return enhancePainter;
    }

    function normalConfig(key, value) {

        // 文字水平对齐方式
        if (key === 'textAlign') {
            return {
                "left": "start",
                "right": "end",
                "center": "middle"
            }[value] || value;
        }

        return value;
    }
    // 文字统一设置方法
    var initText$1 = function initText$1(painter, config, x, y, deg) {
        if (!painter || painter.length <= 0 || painter[0].nodeName.toLowerCase() !== 'text') throw new Error('Need a <text> !');

        deg = deg % (Math.PI * 2);

        // 垂直对齐采用dy实现
        painter.attr('dy', {
            "top": config['font-size'] * 0.5,
            "middle": 0,
            "bottom": -config['font-size'] * 0.5
        }[config.textBaseline]).css({

            // 文字对齐方式
            "text-anchor": config.textAlign,
            "dominant-baseline": "central",

            // 文字大小和字体设置
            "font-size": config['font-size'] + "px",
            "font-family": config['font-family']
        }).attr({ "x": x, "y": y });

        return {
            "transform": "rotate(" + deg * 180 / Math.PI + "," + x + "," + y + ")"
        };
    };

    // 画弧统一设置方法
    var initArc$1 = function initArc$1(painter, config, cx, cy, r1, r2, beginDeg, deg) {

        if (!painter || painter.length <= 0 || painter[0].nodeName.toLowerCase() !== 'path') throw new Error('Need a <path> !');

        beginDeg = beginDeg % (Math.PI * 2);

        if (r1 > r2) {
            var temp = r1;
            r1 = r2;
            r2 = temp;
        }

        // 当|deg|>=2π的时候都认为是一个圆环
        if (deg >= Math.PI * 1.999999 || deg <= -Math.PI * 1.999999) {
            deg = Math.PI * 1.999999;
        } else {
            deg = deg % (Math.PI * 2);
        }

        arc(beginDeg, deg, cx, cy, r1, r2, function (beginA, endA, begInnerX, begInnerY, begOuterX, begOuterY, endInnerX, endInnerY, endOuterX, endOuterY, r) {
            var f = endA - beginA > Math.PI ? 1 : 0,
                d = "M" + begInnerX + " " + begInnerY;
            if (r < 0) r = -r;
            d +=
            // 横半径 竖半径 x轴偏移角度 0小弧/1大弧 0逆时针/1顺时针 终点x 终点y
            "A" + r1 + " " + r1 + " 0 " + f + " 1 " + endInnerX + " " + endInnerY;
            // 结尾
            if (config["arc-end-cap"] != 'round') d += "L" + endOuterX + " " + endOuterY;else d += "A" + r + " " + r + " " + " 0 1 0 " + endOuterX + " " + endOuterY;
            d += "A" + r2 + " " + r2 + " 0 " + f + " 0 " + begOuterX + " " + begOuterY;
            // 开头
            if (config["arc-start-cap"] != 'round') d += "L" + begInnerX + " " + begInnerY;else d += "A" + r + " " + r + " " + " 0 1 0 " + begInnerX + " " + begInnerY;
            if (config["arc-start-cap"] == 'butt') d += "Z";
            painter.attr('d', d);
        });
        return painter;
    };

    // 画圆统一设置方法
    var initCircle$1 = function initCircle$1(painter, cx, cy, r) {
        if (!painter || painter.length <= 0 || painter[0].nodeName.toLowerCase() !== 'circle') throw new Error('Need a <circle> !');
        painter.attr({
            "cx": cx,
            "cy": cy,
            "r": r
        });
        return painter;
    };

    // 路径统一设置方法
    var initPath = function initPath(painter, path) {
        if (!painter || painter.length <= 0 || painter[0].nodeName.toLowerCase() !== 'path') throw new Error('Need a <path> !');
        painter.attr('d', path);
        return painter;
    };

    // 画矩形统一设置方法
    var initRect$1 = function initRect$1(painter, x, y, width, height) {
        if (!painter || painter.length <= 0 || painter[0].nodeName.toLowerCase() !== 'rect') throw new Error('Need a <rect> !');

        // 由于height和宽不可以是负数，校对一下

        if (height < 0) {
            height *= -1;y -= height;
        }

        if (width < 0) {
            width *= -1;x -= width;
        }

        painter.attr({
            "x": x,
            "y": y,
            "width": width,
            "height": height
        });
        return painter;
    };

    var initDefs = function initDefs(target) {
        var defs = target.getElementsByTagName('defs');
        if (defs.length <= 0) {
            defs = [toNode$1("<defs>", "SVG")];
            target.appendChild(defs[0]);
        }
        return defs[0];
    };

    // 线性渐变
    var linearGradient$1 = function linearGradient$1(painter, target, x0, y0, x1, y1) {
        var defs = initDefs(target);
        var gradientId = "image2D-lg-" + new Date().valueOf() + "-" + Math.random();
        var gradientDom = toNode$1('<linearGradient id="' + gradientId + '" x1="' + x0 + '%" y1="' + y0 + '%" x2="' + x1 + '%" y2="' + y1 + '%"></linearGradient>');
        defs.appendChild(gradientDom);
        var enhanceGradient = {
            "value": function value() {
                return "url(#" + gradientId + ")";
            },
            "addColorStop": function addColorStop(stop, color) {
                gradientDom.appendChild(toNode$1('<stop offset="' + stop * 100 + '%" style="stop-color:' + color + ';" />'));
                return enhanceGradient;
            }
        };
        return enhanceGradient;
    };

    // 环形渐变
    var radialGradient$1 = function radialGradient$1(painter, target, cx, cy, r) {
        var defs = initDefs(target);
        var gradientId = "image2D-rg-" + new Date().valueOf() + "-" + Math.random();
        var gradientDom = toNode$1('<radialGradient id="' + gradientId + '" cx="' + cx + '%" cy="' + cy + '%" r="' + r + '%"></radialGradient>');
        defs.appendChild(gradientDom);
        var enhanceGradient = {
            "value": function value() {
                return "url(#" + gradientId + ")";
            },
            "addColorStop": function addColorStop(stop, color) {
                gradientDom.appendChild(toNode$1('<stop offset="' + stop * 100 + '%" style="stop-color:' + color + ';" />'));
                return enhanceGradient;
            }
        };
        return enhanceGradient;
    };

    function painter_svg(target, selector) {

        var painter = void 0;
        if (selector) painter = image2D(selector, target);

        // 类似canvas画笔的属性
        var _config2 = {

            // 基本设置
            "fillStyle": "#000",
            "strokeStyle": "#000",
            "lineWidth": 1,

            // 文字对齐方式
            "textAlign": "start",
            "textBaseline": "middle",

            // 文字设置
            "font-size": "16",
            "font-family": "sans-serif",

            // arc二端闭合方式['butt':直线闭合,'round':圆帽闭合]
            "arc-start-cap": "butt",
            "arc-end-cap": "butt",

            // 虚线设置
            "lineDash": []

        };

        // 路径(和canvas2D的类似)
        var path = "",
            currentPosition = [];

        // 变换（和canvas2D的类似，内部维护了用于记录）
        var transform_history = [],
            transform_current = "";

        // 画笔
        var enhancePainter = {

            // 属性设置或获取
            "config": function config() {
                if (arguments.length === 1) {
                    if (_typeof(arguments[0]) !== 'object') return _config2[arguments[0]];
                    for (var key in arguments[0]) {
                        _config2[key] = normalConfig(key, arguments[0][key]);
                    }
                } else if (arguments.length === 2) _config2[arguments[0]] = normalConfig(arguments[0], arguments[1]);
                return enhancePainter;
            },

            // 基础方法
            "bind": function bind(selector) {
                painter = image2D(selector, target);return enhancePainter;
            },
            "appendTo": function appendTo(selector) {
                painter.appendTo(selector || target, target);return enhancePainter;
            },
            "prependTo": function prependTo(selector) {
                painter.prependTo(selector || target, target);return enhancePainter;
            },
            "afterTo": function afterTo(selector) {
                painter.afterTo(selector || target, target);return enhancePainter;
            },
            "beforeTo": function beforeTo(selector) {
                painter.beforeTo(selector || target, target);return enhancePainter;
            },

            // 路径
            "beginPath": function beginPath() {
                path = "";currentPosition = [];return enhancePainter;
            },
            "closePath": function closePath() {
                path += "Z";return enhancePainter;
            },
            "moveTo": function moveTo(x, y) {
                path += "M" + x + " " + y;currentPosition = [x, y];return enhancePainter;
            },
            "lineTo": function lineTo(x, y) {
                path += (path == "" ? "M" : "L") + x + " " + y;currentPosition = [x, y];return enhancePainter;
            },
            "arc": function arc(x, y, r, beginDeg, deg) {
                var begPosition = _rotate2(x, y, beginDeg, x + r, y);
                var endPosition = _rotate2(x, y, beginDeg + deg, x + r, y);
                beginDeg = beginDeg / Math.PI * 180;
                deg = deg / Math.PI * 180;
                // 如果当前没有路径，说明是开始的，就移动到正确位置
                if (path == '') {
                    path += "M" + begPosition[0] + "," + begPosition[1];
                }
                // 如果当前有路径，位置不正确，应该画到正确位置（和canvas保持一致）
                else if (begPosition[0] != currentPosition[0] || begPosition[1] != currentPosition[1]) {
                        path += "L" + begPosition[0] + "," + begPosition[1];
                    }
                path += "A" + r + "," + r + " 0 " + (deg > 180 || deg < -180 ? 1 : 0) + "," + (deg > 0 ? 1 : 0) + " " + endPosition[0] + "," + endPosition[1];
                return enhancePainter;
            },
            "fill": function fill() {
                initPath(painter, path).attr('transform', transform_current).attr("fill", _config2.fillStyle);
                return enhancePainter;
            },
            "stroke": function stroke() {
                initPath(painter, path).attr('transform', transform_current).attr({
                    "stroke-width": _config2.lineWidth,
                    "stroke": _config2.strokeStyle,
                    "fill": "none",
                    "stroke-dasharray": _config2.lineDash.join(',')
                });
                return enhancePainter;
            },
            "full": function full() {
                initPath(painter, path).attr('transform', transform_current).attr({
                    "stroke-width": _config2.lineWidth,
                    "stroke": _config2.strokeStyle,
                    "fill": _config2.fillStyle,
                    "stroke-dasharray": _config2.lineDash.join(',')
                });
                return enhancePainter;
            },

            "save": function save() {
                transform_history.push(transform_current);
                return enhancePainter;
            },
            "restore": function restore() {
                if (transform_history.length > 0) transform_current = transform_history.pop();
                return enhancePainter;
            },

            // 路径 - 贝塞尔曲线
            "quadraticCurveTo": function quadraticCurveTo(cpx, cpy, x, y) {
                path += "Q" + cpx + " " + cpy + "," + x + " " + y;return enhancePainter;
            },
            "bezierCurveTo": function bezierCurveTo(cp1x, cp1y, cp2x, cp2y, x, y) {
                path += "C" + cp1x + " " + cp1y + "," + cp2x + " " + cp2y + "," + x + " " + y;return enhancePainter;
            },

            // 文字
            "fillText": function fillText(text, x, y, deg) {
                var returnJSon = initText$1(painter, _config2, x, y, deg || 0);
                painter.attr('transform', transform_current + returnJSon.transform).attr("fill", _config2.fillStyle)[0].textContent = text;
                return enhancePainter;
            },
            "strokeText": function strokeText(text, x, y, deg) {
                var returnJSon = initText$1(painter, _config2, x, y, deg || 0);
                painter.attr('transform', transform_current + returnJSon.transform).attr({
                    "stroke": _config2.strokeStyle,
                    "fill": "none",
                    "stroke-dasharray": _config2.lineDash.join(',')
                })[0].textContent = text;
                return enhancePainter;
            },
            "fullText": function fullText(text, x, y, deg) {
                var returnJSon = initText$1(painter, _config2, x, y, deg || 0);
                painter.attr('transform', transform_current + returnJSon.transform).attr({
                    "stroke": _config2.strokeStyle,
                    "fill": _config2.fillStyle,
                    "stroke-dasharray": _config2.lineDash.join(',')
                })[0].textContent = text;
                return enhancePainter;
            },

            // 弧
            "fillArc": function fillArc(cx, cy, r1, r2, beginDeg, deg) {
                initArc$1(painter, _config2, cx, cy, r1, r2, beginDeg, deg).attr('transform', transform_current).attr("fill", _config2.fillStyle);
                return enhancePainter;
            },
            "strokeArc": function strokeArc(cx, cy, r1, r2, beginDeg, deg) {
                initArc$1(painter, _config2, cx, cy, r1, r2, beginDeg, deg).attr('transform', transform_current).attr({
                    "stroke-width": _config2.lineWidth,
                    "stroke": _config2.strokeStyle,
                    "fill": "none",
                    "stroke-dasharray": _config2.lineDash.join(',')
                });
                return enhancePainter;
            },
            "fullArc": function fullArc(cx, cy, r1, r2, beginDeg, deg) {
                initArc$1(painter, _config2, cx, cy, r1, r2, beginDeg, deg).attr('transform', transform_current).attr({
                    "stroke-width": _config2.lineWidth,
                    "stroke": _config2.strokeStyle,
                    "fill": _config2.fillStyle,
                    "stroke-dasharray": _config2.lineDash.join(',')
                });
                return enhancePainter;
            },

            // 圆形
            "fillCircle": function fillCircle(cx, cy, r) {
                initCircle$1(painter, cx, cy, r).attr('transform', transform_current).attr("fill", _config2.fillStyle);return enhancePainter;
            },
            "strokeCircle": function strokeCircle(cx, cy, r) {
                initCircle$1(painter, cx, cy, r).attr('transform', transform_current).attr({
                    "stroke-width": _config2.lineWidth,
                    "stroke": _config2.strokeStyle,
                    "fill": "none",
                    "stroke-dasharray": _config2.lineDash.join(',')
                });return enhancePainter;
            },
            "fullCircle": function fullCircle(cx, cy, r) {
                initCircle$1(painter, cx, cy, r).attr('transform', transform_current).attr({
                    "stroke-width": _config2.lineWidth,
                    "stroke": _config2.strokeStyle,
                    "fill": _config2.fillStyle,
                    "stroke-dasharray": _config2.lineDash.join(',')
                });return enhancePainter;
            },

            // 矩形
            "fillRect": function fillRect(x, y, width, height) {
                initRect$1(painter, x, y, width, height).attr('transform', transform_current).attr("fill", _config2.fillStyle);return enhancePainter;
            },
            "strokeRect": function strokeRect(x, y, width, height) {
                initRect$1(painter, x, y, width, height).attr('transform', transform_current).attr({
                    "stroke-width": _config2.lineWidth,
                    "stroke": _config2.strokeStyle,
                    "fill": "none",
                    "stroke-dasharray": _config2.lineDash.join(',')
                });return enhancePainter;
            },
            "fullRect": function fullRect(x, y, width, height) {
                initRect$1(painter, x, y, width, height).attr('transform', transform_current).attr({
                    "stroke-width": _config2.lineWidth,
                    "stroke": _config2.strokeStyle,
                    "fill": _config2.fillStyle,
                    "stroke-dasharray": _config2.lineDash.join(',')
                });return enhancePainter;
            },

            /**
             * 渐变
             * -------------
             */

            //  线性渐变
            "createLinearGradient": function createLinearGradient(x0, y0, x1, y1) {
                return linearGradient$1(painter, target, x0, y0, x1, y1);
            },

            // 环形渐变
            "createRadialGradient": function createRadialGradient(cx, cy, r) {
                return radialGradient$1(painter, target, cx, cy, r);
            },

            /**
             * 变换
             * --------------
             */

            //  移动
            "translate": function translate(x, y) {
                transform_current += ' translate(' + x + ',' + y + ')';
                return enhancePainter;
            },

            //  旋转
            "rotate": function rotate(deg) {
                deg = deg % (Math.PI * 2);
                transform_current += ' rotate(' + deg / Math.PI * 180 + ')';
                return enhancePainter;
            },

            // 缩放
            "scale": function scale(x, y) {
                y = y || x;
                transform_current += ' scale(' + x + ',' + y + ')';
                return enhancePainter;
            }

        };

        return enhancePainter;
    }

    // 统一画笔
    // 负责启动具体的绘图对象
    function painter() {

        // 因为绘图画布是必须的，因此在判断画布类型前，如果压根没有结点，肯定是非法的
        if (!isElement(this[0])) throw new Error('Target empty!');

        var target = this[0],
            nodeName = target.nodeName.toLowerCase();

        // canvas2D
        if (nodeName === 'canvas') return painter_canvas2D(target, arguments[0]);

        // svg
        if (nodeName === 'svg') return painter_svg(target, arguments[0]);

        throw new Error('Painter is not a function!');
    }

    function layer() {

        if (!isElement(this[0])) throw new Error('Target empty!');

        if (this[0].nodeName.toLowerCase() !== 'canvas') throw new Error('Layer is not a function!');

        // 画笔
        var painter = this.painter(),

        // 图层集合
        layer = {},
            layer_index = [];
        var width = this[0].clientWidth,
            //内容+内边距
        height = this[0].clientHeight;

        var layerManager = {

            // 获取指定图层画笔
            "painter": function painter(id) {
                if (!layer[id]) {
                    // 初始化的图层都可见
                    layer[id] = { "visible": true };

                    // 后期可以考虑使用离线画布offScreenCanvas提高效率
                    layer[id].canvas = document.createElement('canvas');
                    // 设置大小才会避免莫名其妙的错误
                    layer[id].canvas.setAttribute('width', width);
                    layer[id].canvas.setAttribute('height', height);

                    // 标记是图层
                    layer[id].canvas.__image2D__layer__ = 'yes';

                    layer[id].painter = image2D(layer[id].canvas).painter();

                    layer_index.push(id);
                }
                return layer[id].painter;
            },

            // 删除图层
            "delete": function _delete(id) {
                // 删除索引
                for (var i = 0; i < layer_index.length; i++) {
                    if (layer_index[i] === id) {
                        layer_index.splice(i, 1);
                        break;
                    }
                } // 删除图层
                delete layer[id];
                return layerManager;
            },

            // 更新内容到画布
            "update": function update() {
                painter.clearRect(0, 0, width, height);
                painter.save();

                for (var i = 0; i < layer_index.length; i++) {
                    if (layer[layer_index[i]].visible) painter.drawImage(layer[layer_index[i]].canvas, 0, 0, width, height, 0, 0, width, height);
                }
                painter.restore();
                return layerManager;
            },

            // 隐藏图层
            "hidden": function hidden(id) {
                layer[id].visible = false;
                return layerManager;
            },

            // 显示图层
            "show": function show(id) {
                layer[id].visible = true;
                return layerManager;
            }
        };

        return layerManager;
    }

    image2D.extend({

        // 布局
        treeLayout: treeLayout$1, pieLayout: pieLayout,

        // 矩阵变换
        Matrix4: Matrix4,

        // 二维简单变换
        rotate: _rotate2, move: _move2, scale: _scale2, dot: dot,

        // 动画类
        animation: animation$1,

        // 插值类计算
        cardinal: cardinal,

        // 色彩类
        formatColor: formatColor, getRandomColors: getRandomColors, getLoopColors: getLoopColors,

        // 事件相关
        stopPropagation: stopPropagation, preventDefault: preventDefault,

        // 地图映射
        map: map,

        // 刻度尺辅助计算
        ruler: ruler$1

    });
    image2D.prototype.extend({

        // 结点操作
        appendTo: appendTo, prependTo: prependTo, afterTo: afterTo, beforeTo: beforeTo, remove: remove, filter: filter, text: text, html: html, size: size,

        // 结点属性或样式操作
        css: style, attr: attribute,

        // 结点和数据绑定
        datum: datum, data: data, enter: enter, exit: exit, loop: loop,

        // 结点事件
        bind: bind, unbind: unbind, position: position,

        // 自定义画笔
        painter: painter,

        // 图层
        layer: layer

    });

    image2D.fn = image2D.prototype;

    // 添加版本信息，方便调试
    image2D.version = '1.11.0';

    // 判断当前环境，如果不是浏览器环境
    if ((typeof module === "undefined" ? "undefined" : _typeof(module)) === "object" && _typeof(module.exports) === "object") {
        module.exports = image2D;
    }
    // 浏览器环境下
    // 因为浏览器下挂载到window对象上
    // 为了防止覆盖，额外提供一个noConflict方法，用以在覆盖的时候恢复
    else {
            var
            // 保存之前的image2D，防止直接覆盖
            _image2D = window.image2D,


            // 保存之前的$$，防止直接覆盖
            _$$ = window.$$;

            image2D.noConflict = function (deep) {

                // 如果当前的$$是被最新的image2D覆盖的
                // 恢复之前的
                if (window.$$ === image2D) {
                    window.$$ = _$$;
                }

                // 如果当前的image2D是被最新的image2D覆盖的
                // 且标记需要恢复
                // 恢复之前的
                if (deep && window.image2D === image2D) {
                    window.image2D = _image2D;
                }

                // 返回当前image2D
                // 因为调用这个方法以后
                // 全局window下的image2D和$$是什么
                // 已经不一定了
                return image2D;
            };
            // 挂载库对象到根
            window.image2D = window.$$ = image2D;
        }
})();

/*!

    我还惊讶地意识到， 在我生命中有很多时刻， 每当我遇到一个遥不可及、令人害怕的情境，
    并感到惊慌失措时， 我都能够应付——因为我回想起了很久以前自己上过的那一课。
    我提醒自己不要看下面遥远的岩石， 而是注意相对轻松、容易的第一小步， 迈出一小步、再一小步，
    就这样体会每一步带来的成就感， 直到完成了自己想要完成的， 达到了自己的目标，
    然后再回头看时， 不禁对自己走过的这段漫漫长路感到惊讶和自豪。

                                            ———— 摘自 莫顿·亨特《走一步，再走一步》

*/
  
    return __etcpack__scope_bundle__;
}

/*************************** [bundle] ****************************/
// Original file:./src/App.paper?QuickPaper&type=style&lang=css&hash=347ecaca
/*****************************************************************/
window.__etcpack__bundleSrc__['33']=function(){
    var __etcpack__scope_bundle__={};
    var __etcpack__scope_args__;
    var styleElement = document.createElement('style');
var head = document.head || document.getElementsByTagName('head')[0];
styleElement.innerHTML = "\n [quickpaper][data-quickpaper-347ecaca]{\n\nmin-width: 700px;\n\n}\n\n [quickpaper] .help-hidden[data-quickpaper-347ecaca]{\n\nposition: fixed;\n\nfont-size: 12px;\n\nfont-family: sans-serif;\n\npadding: 0;\n\nborder: none;\n\nbottom: -100px;\n\n}\n\n [quickpaper]>header[data-quickpaper-347ecaca]{\n\nbackground-image: url('./logo.png');\n\nline-height: 50px;\n\nbackground-size: auto 40px;\n\nbackground-repeat: no-repeat;\n\nbackground-color: #efefef;\n\nbackground-position: 5px center;\n\npadding-left: 50px;\n\nfont-weight: 800;\n\nfont-family: serif;\n\nfont-size: 20px;\n\ncolor: #97932e;\n\n}\n\n [quickpaper]>header>a[data-quickpaper-347ecaca]{\n\nfloat: right;\n\nbackground-color: white;\n\nline-height: 30px;\n\nfont-size: 12px;\n\npadding: 0 10px;\n\ncolor: gray;\n\nmargin-top: 10px;\n\nmargin-right: 10px;\n\n}\n\n [quickpaper]>header>a[data-quickpaper-347ecaca]:hover{\n\noutline: 1px solid gray;\n\n}\n\n [quickpaper]>header>div[data-quickpaper-347ecaca]{\n\ndisplay: inline-block;\n\nfont-size: 12px;\n\nmargin-left: 50px;\n\n}\n\n [quickpaper]>header>div>input[data-quickpaper-347ecaca]{\n\nmargin-left: 20px;\n\n}\n\n [quickpaper]>div.input[data-quickpaper-347ecaca]{\n\nbackground-color: #fafafa;\n\npadding: 10px 0;\n\nwhite-space: nowrap;\n\n}\n\n [quickpaper]>div.input>input[data-quickpaper-347ecaca], [quickpaper]>div.input>span[data-quickpaper-347ecaca]{\n\nvertical-align: top;\n\n}\n\n [quickpaper]>div.input>input[data-quickpaper-347ecaca]{\n\nheight: 40px;\n\nwidth: calc(100vw - 110px);\n\nmin-width: 590px;\n\nmargin-left: 10px;\n\npadding: 0 10px;\n\noutline: none;\n\n}\n\n [quickpaper]>div.input>span[data-quickpaper-347ecaca]{\n\ntext-align: center;\n\ndisplay: inline-block;\n\nwidth: 80px;\n\nline-height: 40px;\n\nmargin: 0 10px;\n\nbackground-color: #97932e;\n\ncolor: #fefefe;\n\ncursor: pointer;\n\n}\n\n [quickpaper]>div.input>span[data-quickpaper-347ecaca]:hover{\n\noutline: 1px solid #97932e;\n\n}\n\n [quickpaper]>div.content[data-quickpaper-347ecaca]{\n\nmin-height: calc(100vh - 110px);\n\ntext-align: center;\n\npadding: 10px;\n\npadding-top: 0;\n\nbackground-color: #fafafa;\n\noverflow: auto;\n\n}\n\n [quickpaper]>div.content>canvas[data-quickpaper-347ecaca]{\n\nbackground-color: white;\n\n}\n";
styleElement.setAttribute('type', 'text/css');head.appendChild(styleElement);
  
    return __etcpack__scope_bundle__;
}

window.__etcpack__bundleSrc__['0']();