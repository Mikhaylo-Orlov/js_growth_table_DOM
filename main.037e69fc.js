parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"KIzB":[function(require,module,exports) {
"use strict";var e=document.querySelector(".field"),t=document.querySelector(".append-row"),r=document.querySelector(".remove-row"),l=document.querySelector(".append-column"),n=document.querySelector(".remove-column"),o=10,d=2;function c(){t.addEventListener("click",function(l){l.target===t&&e.append(e.rows[0].cloneNode(!0)),t.disabled=e.rows.length===o,r.disabled=e.rows.length===d}),r.addEventListener("click",function(l){l.target===r&&e.rows[0].remove(),t.disabled=e.rows.length===o,r.disabled=e.rows.length===d}),l.addEventListener("click",function(t){if(t.target===l)for(var r=0;r<e.rows.length;r++)e.rows[r].append(document.createElement("td"));l.disabled=e.rows[0].cells.length===o,n.disabled=e.rows[0].cells.length===d}),n.addEventListener("click",function(t){if(t.target===n)for(var r=0;r<e.rows.length;r++)e.rows[r].lastElementChild.remove();l.disabled=e.rows[0].cells.length===o,n.disabled=e.rows[0].cells.length===d})}c();
},{}]},{},["KIzB"], null)
//# sourceMappingURL=main.037e69fc.js.map