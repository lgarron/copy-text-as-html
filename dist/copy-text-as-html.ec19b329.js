parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"zUzW":[function(require,module,exports) {
"use strict";function t(t,e,n,r){return new(n||(n=Promise))(function(o,i){function a(t){try{c(r.next(t))}catch(t){i(t)}}function u(t){try{c(r.throw(t))}catch(t){i(t)}}function c(t){t.done?o(t.value):new n(function(e){e(t.value)}).then(a,u)}c((r=r.apply(t,e||[])).next())})}function e(t,e){var n,r,o,i,a={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:u(0),throw:u(1),return:u(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function u(i){return function(u){return function(i){if(n)throw new TypeError("Generator is already executing.");for(;a;)try{if(n=1,r&&(o=2&i[0]?r.return:i[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,i[1])).done)return o;switch(r=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return a.label++,{value:i[1],done:!1};case 5:a.label++,r=i[1],i=[0];continue;case 7:i=a.ops.pop(),a.trys.pop();continue;default:if(!(o=(o=a.trys).length>0&&o[o.length-1])&&(6===i[0]||2===i[0])){a=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){a.label=i[1];break}if(6===i[0]&&a.label<o[1]){a.label=o[1],o=i;break}if(o&&a.label<o[2]){a.label=o[2],a.ops.push(i);break}o[2]&&a.ops.pop(),a.trys.pop();continue}i=e.call(t,a)}catch(t){i=[6,t],r=0}finally{n=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,u])}}}Object.defineProperty(exports,"__esModule",{value:!0}),exports.read=v,exports.readText=h,exports.setDebugLog=l,exports.suppressWarnings=d,exports.write=p,exports.writeText=f,exports.DT=exports.default=void 0;var n=["text/plain","text/html"],r=function(){(console.warn||console.log).call(arguments)}.bind(console,"[clipboard-polyfill]"),o=!0,i=function(){function t(){this.m={}}return t.prototype.setData=function(t,e){o&&-1===n.indexOf(t)&&r("Unknown data type: "+t,"Call clipboard.suppressWarnings() to suppress this warning."),this.m[t]=e},t.prototype.getData=function(t){return this.m[t]},t.prototype.forEach=function(t){for(var e in this.m)t(this.m[e],e)},t}(),a=function(t){},u=!0;exports.DT=i;var c=function(){(console.warn||console.log).apply(console,arguments)}.bind("[clipboard-polyfill]"),s="text/plain";function l(t){a=t}function d(){u=!1,o=!1}function p(n){return t(this,void 0,void 0,function(){var t;return e(this,function(e){if(u&&!n.getData(s)&&c("clipboard.write() was called without a `text/plain` data type. On some platforms, this may result in an empty clipboard. Call clipboard.suppressWarnings() to suppress this warning."),C()){if(function(t){var e=n.getData(s);if(void 0!==e)return window.clipboardData.setData("Text",e);throw new Error("No `text/plain` value was specified.")}())return[2];throw new Error("Copying failed, possibly because the user rejected it.")}if(y(n))return a("regular execCopy worked"),[2];if(navigator.userAgent.indexOf("Edge")>-1)return a('UA "Edge" => assuming success'),[2];if(x(document.body,n))return a("copyUsingTempSelection worked"),[2];if(function(t){var e=document.createElement("div");e.setAttribute("style","-webkit-user-select: text !important"),e.textContent="temporary element",document.body.appendChild(e);var n=x(e,t);return document.body.removeChild(e),n}(n))return a("copyUsingTempElem worked"),[2];if(void 0!==(t=n.getData(s))&&function(t){a("copyTextUsingDOM");var e=document.createElement("div");e.setAttribute("style","-webkit-user-select: text !important");var n=e;e.attachShadow&&(a("Using shadow DOM."),n=e.attachShadow({mode:"open"}));var r=document.createElement("span");r.innerText=t,n.appendChild(r),document.body.appendChild(e),D(r);var o=document.execCommand("copy");return T(),document.body.removeChild(e),o}(t))return a("copyTextUsingDOM worked"),[2];throw new Error("Copy command failed.")})})}function f(n){return t(this,void 0,void 0,function(){return e(this,function(t){return navigator.clipboard&&navigator.clipboard.writeText?(a("Using `navigator.clipboard.writeText()`."),[2,navigator.clipboard.writeText(n)]):[2,p(E(n))]})})}function v(){return t(this,void 0,void 0,function(){var t;return e(this,function(e){switch(e.label){case 0:return t=E,[4,h()];case 1:return[2,t.apply(void 0,[e.sent()])]}})})}function h(){return t(this,void 0,void 0,function(){return e(this,function(t){if(navigator.clipboard&&navigator.clipboard.readText)return a("Using `navigator.clipboard.readText()`."),[2,navigator.clipboard.readText()];if(C())return a("Reading text using IE strategy."),[2,k()];throw new Error("Read is not supported in your browser.")})})}var b=!1;function w(){b||(u&&c('The deprecated default object of `clipboard-polyfill` was called. Please switch to `import * as clipboard from "clipboard-polyfill"` and see https://github.com/lgarron/clipboard-polyfill/issues/101 for more info.'),b=!0)}var m={DT:i,setDebugLog:function(t){return w(),l(t)},suppressWarnings:function(){return w(),d()},write:function(n){return t(this,void 0,void 0,function(){return e(this,function(t){return w(),[2,p(n)]})})},writeText:function(n){return t(this,void 0,void 0,function(){return e(this,function(t){return w(),[2,f(n)]})})},read:function(){return t(this,void 0,void 0,function(){return e(this,function(t){return w(),[2,v()]})})},readText:function(){return t(this,void 0,void 0,function(){return e(this,function(t){return w(),[2,h()]})})}},g=function(){this.success=!1};function y(t){var e=new g,n=function(t,e,n){a("listener called"),t.success=!0,e.forEach(function(e,r){var o=n.clipboardData;o.setData(r,e),r===s&&o.getData(r)!==e&&(a("setting text/plain failed"),t.success=!1)}),n.preventDefault()}.bind(this,e,t);document.addEventListener("copy",n);try{document.execCommand("copy")}finally{document.removeEventListener("copy",n)}return e.success}function x(t,e){D(t);var n=y(e);return T(),n}function D(t){var e=document.getSelection();if(e){var n=document.createRange();n.selectNodeContents(t),e.removeAllRanges(),e.addRange(n)}}function T(){var t=document.getSelection();t&&t.removeAllRanges()}function E(t){var e=new i;return e.setData(s,t),e}function C(){return"undefined"==typeof ClipboardEvent&&void 0!==window.clipboardData&&void 0!==window.clipboardData.setData}function k(){return t(this,void 0,void 0,function(){var t;return e(this,function(e){if(""===(t=window.clipboardData.getData("Text")))throw new Error("Empty clipboard or could not read plain text from clipboard");return[2,t]})})}var U=m;exports.default=U;
},{}],"7QCb":[function(require,module,exports) {
"use strict";var t=this&&this.__awaiter||function(t,e,n,r){return new(n||(n=Promise))(function(o,i){function u(t){try{c(r.next(t))}catch(e){i(e)}}function a(t){try{c(r.throw(t))}catch(e){i(e)}}function c(t){var e;t.done?o(t.value):(e=t.value,e instanceof n?e:new n(function(t){t(e)})).then(u,a)}c((r=r.apply(t,e||[])).next())})},e=this&&this.__generator||function(t,e){var n,r,o,i,u={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:a(0),throw:a(1),return:a(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function a(i){return function(a){return function(i){if(n)throw new TypeError("Generator is already executing.");for(;u;)try{if(n=1,r&&(o=2&i[0]?r.return:i[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,i[1])).done)return o;switch(r=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return u.label++,{value:i[1],done:!1};case 5:u.label++,r=i[1],i=[0];continue;case 7:i=u.ops.pop(),u.trys.pop();continue;default:if(!(o=(o=u.trys).length>0&&o[o.length-1])&&(6===i[0]||2===i[0])){u=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){u.label=i[1];break}if(6===i[0]&&u.label<o[1]){u.label=o[1],o=i;break}if(o&&u.label<o[2]){u.label=o[2],u.ops.push(i);break}o[2]&&u.ops.pop(),u.trys.pop();continue}i=e.call(t,u)}catch(a){i=[6,a],r=0}finally{n=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,a])}}};Object.defineProperty(exports,"__esModule",{value:!0});var n=require("clipboard-polyfill");window.addEventListener("load",function(){var r=document.querySelector(".status");document.querySelector("button").addEventListener("click",function(){return t(this,void 0,void 0,function(){var t;return e(this,function(e){return r.textContent="…",(t=new n.DT).setData("text/html",document.querySelector("textarea").value),n.write(t).then(function(){r.textContent="✅"},function(){r.textContent="❌"}),[2]})})})});
},{"clipboard-polyfill":"zUzW"}]},{},["7QCb"], null)
//# sourceMappingURL=copy-text-as-html.ec19b329.js.map