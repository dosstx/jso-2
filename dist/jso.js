!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.jso=t():e.jso=t()}(window,(function(){return function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=1)}([function(e){e.exports=JSON.parse('{"name":"jso-2","version":"1.0.0","description":"OAuth 2.0 implementation in Javascript based on JSO","main":"dist/jso.js","module":"src/JSO.js","scripts":{"test":"true","preversion":"npm test","version":"npm run build && git add -A dist","postversion":"git push && git push --tags && npm publish","build":"webpack --mode production --config webpack.config.js"},"repository":{"type":"git","url":"https://github.com/andreassolberg/jso.git"},"keywords":["oauth","authentication","authorization","rest","api","ajax","jquery"],"files":["src"],"eslintConfig":{"env":{"es6":true,"browser":true,"node":false}},"devDependencies":{"babel-loader":"^8.0.6","qunit":"^2.9.3","webpack":"^4.42.0","webpack-cli":"^3.3.11"},"author":"Andreas Åkre Solberg","license":"LGPL-2.1","bugs":{"url":"https://github.com/andreassolberg/jso/issues"},"homepage":"https://github.com/andreassolberg/jso","dependencies":{"@babel/core":"^7.8.7","@babel/preset-env":"^7.8.7","@babel/preset-react":"^7.8.3","core-js":"^3.6.4"}}')},function(e,t,n){"use strict";n.r(t),n.d(t,"JSO",(function(){return se})),n.d(t,"BasicLoader",(function(){return s})),n.d(t,"HTTPRedirect",(function(){return y})),n.d(t,"Popup",(function(){return T})),n.d(t,"IFramePassive",(function(){return k})),n.d(t,"Fetcher",(function(){return V})),n.d(t,"FetcherJQuery",(function(){return U}));var r={epoch:function(){return Math.round((new Date).getTime()/1e3)},debug:!1,uuid:function(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,(function(e){var t=16*Math.random()|0;return("x"==e?t:3&t|8).toString(16)}))},getResponseFromURL:function(e){return-1!==e.indexOf("#")?r.parseQueryString(e.substring(e.indexOf("#")+1)):-1!==e.indexOf("?")?r.parseQueryString(e.substring(e.indexOf("?")+1)):{}},parseQueryString:function(e){for(var t,n=/\+/g,r=/([^&;=]+)=?([^&;]*)/g,o=function(e){return decodeURIComponent(e.replace(n," "))},i=e,u={};t=r.exec(i);)u[o(t[1])]=o(t[2]);return u},scopeList:function(e){return r.uniqueList(e).join(" ")},uniqueList:function(e){for(var t={},n=[],r=0;r<e.length;r++)t[e[r]]=1;for(var o in t)t.hasOwnProperty(o)&&n.push(o);return n},log:function(e){if(console&&console.log&&r.debug){var t=Array.prototype.slice.call(arguments);t.unshift("[JSO]"),console.log.apply(console,t)}},encodeQS:function(e){var t,n="",r=0;for(t in e)n+=(0==r++?"":"&")+encodeURIComponent(t)+"="+encodeURIComponent(e[t]);return n},encodeURL:function(e,t){var n,r=e,o=0,i=-1===e.indexOf("?")?"?":"&";for(n in t)r+=(0==o++?i:"&")+encodeURIComponent(n)+"="+encodeURIComponent(t[n]);return r}},o=r;function i(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var u=new(function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e)}var t,n,r;return t=e,(n=[{key:"saveState",value:function(e,t){localStorage.setItem("state-"+e,JSON.stringify(t))}},{key:"getState",value:function(e){var t=JSON.parse(localStorage.getItem("state-"+e));return localStorage.removeItem("state-"+e),t}},{key:"hasScope",value:function(e,t){var n;if(!e.scopes)return!1;for(n=0;n<e.scopes.length;n++)if(e.scopes[n]===t)return!0;return!1}},{key:"filterTokens",value:function(e,t){var n,r,i,u=[],a=o.epoch();for(t||(t=[]),n=0;n<e.length;n++){for(i=!0,e[n].expires&&e[n].expires<a+1&&(i=!1),r=0;r<t.length;r++)this.hasScope(e[n],t[r])||(i=!1);i&&u.push(e[n])}return u}},{key:"saveTokens",value:function(e,t){localStorage.setItem("tokens-"+e,JSON.stringify(t))}},{key:"getTokens",value:function(e){var t=JSON.parse(localStorage.getItem("tokens-"+e));return t||(t=[]),o.log("Token found when loooking up provider "+e+" in store "+window.location.href,t),t}},{key:"wipeTokens",value:function(e){localStorage.removeItem("tokens-"+e)}},{key:"saveToken",value:function(e,t){var n=this.getTokens(e);(n=this.filterTokens(n)).push(t),this.saveTokens(e,n)}},{key:"getToken",value:function(e,t){var n=this.getTokens(e);return(n=this.filterTokens(n,t)).length<1?null:n[0]}}])&&i(t.prototype,n),r&&i(t,r),e}());function a(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var s=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),console.log("Initializing a loader with url "+t),this.url=t}var t,n,r;return t=e,(n=[{key:"execute",value:function(){}}])&&a(t.prototype,n),r&&a(t,r),e}();function c(e){return(c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function f(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function l(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function p(e,t){return!t||"object"!==c(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function h(e){return(h=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function d(e,t){return(d=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var y=function(e){function t(){return f(this,t),p(this,h(t).apply(this,arguments))}var n,r,o;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&d(e,t)}(t,e),n=t,(r=[{key:"execute",value:function(){var e=this;return new Promise((function(t,n){window.location=e.url}))}}])&&l(n.prototype,r),o&&l(n,o),t}(s);function b(e){return(b="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function g(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function v(e,t){return!t||"object"!==b(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function w(e){return(w=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function m(e,t){return(m=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var k=function(e){function t(e){var n;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),(n=v(this,w(t).call(this,e))).timeout=5e3,n.callback=null,n.isCompleted=!1,n.id="jso_passive_iframe_"+o.uuid();var r=window.addEventListener?"addEventListener":"attachEvent";window[r];return n.iframe=document.createElement("iframe"),n.iframe.setAttribute("id",n.id),n.iframe.setAttribute("src",e),n.iframe.addEventListener("load",(function(e){var t=null;try{if(n.iframe.contentWindow.location.hash){var r=n.iframe.contentWindow.location.hash.substring(1);t=o.parseQueryString(r)}else if(n.iframe.contentWindow.location.search){var i=n.iframe.contentWindow.location.search.substring(1);t=o.parseQueryString(i)}null!==t?n._completed(t):n._failed(new Error("Failed to obtain response value from iframe"))}catch(e){}})),n}var n,r,i;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&m(e,t)}(t,e),n=t,(r=[{key:"execute",value:function(){var e=this;return new Promise((function(t,n){e.callback=t,e.errorCallback=n,document.getElementsByTagName("body")[0].appendChild(e.iframe),setTimeout((function(){e._failed(new Error("Loading iframe timed out"))}),e.timeout)}))}},{key:"_cleanup",value:function(){var e=document.getElementById(this.id);e.parentNode.removeChild(e)}},{key:"_failed",value:function(e){this.isCompleted||(this.errorCallback&&"function"==typeof this.errorCallback&&this.errorCallback(e),this.isCompleted=!0,this._cleanup())}},{key:"_completed",value:function(e){this.isCompleted||(this.callback&&"function"==typeof this.callback&&this.callback(e),this.isCompleted=!0,this._cleanup())}}])&&g(n.prototype,r),i&&g(n,i),t}(s);function O(e){return(O="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function _(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function j(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function S(e,t){return!t||"object"!==O(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function x(e){return(x=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function P(e,t){return(P=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var T=function(e){function t(){return _(this,t),S(this,x(t).apply(this,arguments))}var n,r,o;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&P(e,t)}(t,e),n=t,(r=[{key:"execute",value:function(){var e=this;return new Promise((function(t,n){window.popupCompleted=function(){var e=r.location.href;t(e)};var r=window.open(e.url,"jso-popup-auth","height=600,width=800");if(null===r)throw new Error("Error loading popup window");window.focus&&r.focus()}))}}])&&j(n.prototype,r),o&&j(n,o),t}(s);function E(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var C=function(){function e(t){for(var n in function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),t)this[n]=t[n]}var t,n,r;return t=e,(n=[{key:"set",value:function(e,t){return this[e]=t,this}}])&&E(t.prototype,n),r&&E(t,r),e}();function R(e){return(R="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function I(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function q(e,t){return!t||"object"!==R(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function L(e){return(L=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function D(e,t){return(D=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var A=function(e){function t(){return I(this,t),q(this,L(t).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&D(e,t)}(t,e),t}(C);function z(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var V=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.jso=t}var t,n,r;return t=e,(n=[{key:"_fetch",value:function(e,t){return fetch(e,t).then((function(e){if(401===e.status)throw new A;return e}))}},{key:"fetch",value:function(e,t,n){var r=this;if((n=n||0)>2)throw new Error("Reccursion error. Expired tokens deleted and tried again multiple times.");var o={},i={mode:"cors"};return t&&(i=t,Object.assign(i,t)),t&&t.jso&&Object.assign(o,t.jso),this.jso.getToken(o).catch((function(e){console.error("Error fetching token to use ",e)})).then((function(o){return i.headers||(i.headers={}),i.headers.Authorization="Bearer "+o.access_token,r._fetch(e,i).catch((function(o){if(o instanceof A)return console.error("Token was expired. Deleting all tokens for this provider and get a new one",o),r.jso.wipeTokens(),r.fetch(e,t,n+1)}))}))}}])&&z(t.prototype,n),r&&z(t,r),e}();function J(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var U=function(){function e(t,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.jso=t,this.jquery=n}var t,n,r;return t=e,(n=[{key:"_fetch",value:function(e,t){var n=this;return new Promise((function(r,o){return t.done=r,t.fail=function(e,t,r){return 401===parseInt(t,10)?(n.jso.wipeTokens(),o(new A)):o(r)},n.jquery.ajax(e,t)}))}},{key:"fetch",value:function(e,t,n){var r=this;if((n=n||0)>2)throw new Error("Reccursion error. Expired tokens deleted and tried again multiple times.");var o={},i={mode:"cors"};return t&&(i=t,Object.assign(i,t)),t&&t.jso&&Object.assign(o,t.jso),this.jso.getToken(o).catch((function(e){console.error("Error fetching token to use ",e)})).then((function(o){return i.headers||(i.headers={}),i.headers.Authorization="Bearer "+o.access_token,r._fetch(e,i).catch((function(o){if(o instanceof A)return console.error("Token was expired. Deleting all tokens for this provider and get a new one",o),r.jso.wipeTokens(),r.fetch(e,t,n+1)}))}))}}])&&J(t.prototype,n),r&&J(t,r),e}();function N(e){return(N="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function B(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function F(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function Q(e,t){return!t||"object"!==N(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function H(e){return(H=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function M(e,t){return(M=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var W=function(e){function t(){return B(this,t),Q(this,H(t).apply(this,arguments))}var n,r,o;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&M(e,t)}(t,e),n=t,(r=[{key:"toString",value:function(){return"OAuthResponseError: ["+(this.error||"unknown")+"]: "+(this.error_description||"unknown")}}])&&F(n.prototype,r),o&&F(n,o),t}(C);function G(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function K(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var X=function(){function e(){G(this,e),this.config={};for(var t=0;t<arguments.length;t++)Object.assign(this.config,arguments[t])}var t,n,r;return t=e,(n=[{key:"has",value:function(e){var t=this.config,n=e.split("."),r=0;for(r=0;r<n.length;r++){if(!t.hasOwnProperty(n[r]))return!1;t=t[n[r]]}return!0}},{key:"getValue",value:function(e,t){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2],r=this.config,o=e.split("."),i=0;for(i=0;i<o.length;i++){if(!r.hasOwnProperty(o[i])){r=void 0;break}r=r[o[i]]}if(void 0===r){if(n)throw new Error("Configuration option ["+o[i]+"] required but not provided.");return t}return r}}])&&K(t.prototype,n),r&&K(t,r),e}();function Y(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var Z=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e)}var t,n,r;return t=e,(n=[{key:"on",value:function(e,t){this._callbacks||(this._callbacks={}),this._callbacks[e]||(this._callbacks[e]=[]),this._callbacks[e].push(t)}},{key:"emit",value:function(e){this._callbacks||(this._callbacks={}),this._callbacks[e]||(this._callbacks[e]=[]);for(var t=Array.prototype.slice.call(arguments,1),n=0;n<this._callbacks[e].length;n++)this._callbacks[e][n].apply(this,t)}}])&&Y(t.prototype,n),r&&Y(t,r),e}();function $(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function ee(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?$(Object(n),!0).forEach((function(t){te(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):$(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function te(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function ne(e){return(ne="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function re(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function oe(e,t){return!t||"object"!==ne(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function ie(e){return(ie=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function ue(e,t){return(ue=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}n(0);var ae={lifetime:3600},se=function(e){function t(e){var n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),(n=oe(this,ie(t).call(this))).configure(e),n.providerID=n.getProviderID(),n.Loader=y,n.store=u,n.callbacks={},n.config.getValue("debug",!1)&&(o.debug=!0),n}var n,r,i;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&ue(e,t)}(t,e),n=t,(r=[{key:"configure",value:function(e){this.config=new X(ae,e)}},{key:"setStore",value:function(e){this.store=e}},{key:"setLoader",value:function(e){if("function"!=typeof e)throw new Error("loader MUST be an instance of the JSO BasicLoader");this.Loader=e}},{key:"getProviderID",value:function(){var e=this.config.getValue("providerID",null);if(null!==e)return e;var t=this.config.getValue("client_id",null,!0);return this.config.getValue("authorization",null,!0)+"|"+t}},{key:"processTokenResponse",value:function(e){var t;if(!e.state)throw new Error("Could not get state from storage.");if(!(t=this.store.getState(e.state)))throw new Error("Could not retrieve state");if(!t.providerID)throw new Error("Could not get providerid from state");return o.log("processTokenResponse ",e,""),this.processReceivedToken(e,t)}},{key:"processReceivedToken",value:function(e,t){var n=o.epoch();return e.received=n,e.expires_in?(e.expires=n+parseInt(e.expires_in,10),e.expires_in=parseInt(e.expires_in,10)):!1===this.config.getValue("default_lifetime",null)?e.expires=null:this.config.has("permanent_scope")?this.store.hasScope(e,this.config.getValue("permanent_scope"))||(e.expires=null):this.config.has("default_lifetime")?e.expires=n+this.config.getValue("default_lifetime"):e.expires=n+3600,e.scope?(e.scopes=e.scope.split(" "),delete e.scope):t.scopes?e.scopes=t.scopes:e.scopes=[],o.log("processTokenResponse completed ",e,""),this.store.saveToken(t.providerID,e),t.restoreHash?window.location.hash=t.restoreHash:window.location.hash="",e}},{key:"processAuthorizationCodeResponse",value:function(e){var t,n=this;if(console.log(this),this.emit("authorizationCode",e),!e.state)throw new Error("Could not find state paramter from callback.");if(null===(t=this.store.getState(e.state)))throw new Error("Could not find retrieve state object.");if(console.log("state",t),this.config.has("token")){if(!this.config.has("client_secret"))throw new Error("Configuration missing [client_secret]");var r=new Headers;r.append("Authorization","Basic "+btoa(this.config.getValue("client_id")+":"+this.config.getValue("client_secret"))),r.append("Content-Type","application/x-www-form-urlencoded;charset=UTF-8");var i={grant_type:"authorization_code",code:e.code};t.hasOwnProperty("redirect_uri")&&(i.redirect_uri=t.redirect_uri);var u={mode:"cors",headers:r,method:"POST",body:o.encodeQS(i)};return fetch(this.config.getValue("token"),u).then((function(e){return e.json()})).then((function(e){return o.log("Received response on token endpoint ",e,""),n.processReceivedToken(e,t)}))}o.log("Received an authorization code. Will not process it as the config option [token] endpoint is not set. If you would like to process the code yourself, please subscribe to the [authorizationCode] event")}},{key:"processErrorResponse",value:function(e){var t;if(!e.state)throw new Error("Could not get [state] and no default providerid is provided.");if(!(t=this.store.getState(e.state)))throw new Error("Could not retrieve state");if(!t.providerID)throw new Error("Could not get providerid from state");return t.restoreHash?window.location.hash=t.restoreHash:window.location.hash="",new W(e)}},{key:"callback",value:function(e){var t=null;if("object"===ne(e))t=e;else if("string"==typeof e)t=o.getResponseFromURL(e);else{if(void 0!==e)return;t=o.getResponseFromURL(window.location.href)}if(o.log("Receving response in callback",t),t.hasOwnProperty("access_token"))return this.processTokenResponse(t);if(t.hasOwnProperty("code"))return this.processAuthorizationCodeResponse(t);if(t.hasOwnProperty("error"))throw this.processErrorResponse(t)}},{key:"dump",value:function(){var e=this.store.getTokens(this.providerID);return{providerID:this.providerID,tokens:e,config:this.config}}},{key:"_getRequestScopes",value:function(e){var t,n=[];if(this.config.has("scopes.request")){var r=this.config.getValue("scopes.request");for(t=0;t<r.length;t++)n.push(r[t])}if(e&&e.scopes&&e.scopes.request)for(t=0;t<e.scopes.request.length;t++)n.push(e.scopes.request[t]);return o.uniqueList(n)}},{key:"_getRequiredScopes",value:function(e){var t,n=[];if(this.config.has("scopes.require")){var r=this.config.getValue("scopes.require");for(t=0;t<r.length;t++)n.push(r[t])}if(e&&e.scopes&&e.scopes.require)for(t=0;t<e.scopes.require.length;t++)n.push(e.scopes.require[t]);return o.uniqueList(n)}},{key:"getToken",value:function(e){var t=this;return e=e||{},new Promise((function(n,r){var o=t._getRequiredScopes(e),i=t.store.getToken(t.providerID,o);if(i)return n(i);if(e.hasOwnProperty("allowredir")&&!e.allowredir)throw new Error("Cannot obtain a token, when not allowed to redirect...");n(t._authorize(e))}))}},{key:"checkToken",value:function(e){var t=this._getRequiredScopes(e);return this.store.getToken(this.providerID,t)}},{key:"_authorize",value:function(e){var t,n,r,i=this;return Promise.resolve().then((function(){var u,a=i.config.getValue("authorization",null,!0),s=i.config.getValue("client_id",null,!0);if(e.hasOwnProperty("allowia")||i.config.has("allowia"))throw new Error('The allowia option was removed in JSO 4.1.0. Instead use {request: {prompt: "none"}}');if(o.log("About to send an authorization request to this endpoint",a),o.log("Options",e),t={},i.config.has("request")){var c=i.config.getValue("request");t=ee({},t,{},c)}if(e.hasOwnProperty("request")&&(t=ee({},t,{},e.request)),t.response_type=e.response_type||i.config.getValue("response_type","id_token token"),t.state=o.uuid(),i.config.has("redirect_uri")&&(t.redirect_uri=i.config.getValue("redirect_uri","")),e.redirect_uri&&(t.redirect_uri=e.redirect_uri),t.client_id=s,u=(r=i._getRequestScopes(e)).includes("openid"),r.length>0&&(t.scope=o.scopeList(r)),o.log("Running in mode: "+(u?"OpenID Connect mode":"OAuth mode")),u&&!t.hasOwnProperty("redirect_uri"))throw new Error("An OpenID Request requires a redirect_uri to be set. Please add to configuration. A redirect_uri is not required for plain OAuth");u&&(t.nonce=o.uuid()),o.log("Debug Authentication request object",JSON.stringify(t,void 0,2)),n=o.encodeURL(a,t),window.location.hash&&(t.restoreHash=window.location.hash),t.providerID=i.providerID,r&&(t.scopes=r),o.log("Saving state ["+t.state+"]"),o.log(JSON.parse(JSON.stringify(t)));var f=i.Loader;return e.hasOwnProperty("loader")&&(f=e.loader),o.log("Looking for loader",e,f),i.store.saveState(t.state,t),i.gotoAuthorizeURL(n,f).then((function(e){if(!0!==e)return i.callback(e)}))}))}},{key:"gotoAuthorizeURL",value:function(e,t){return new Promise((function(n,r){if(null!==t&&"function"==typeof t){var o=new t(e);if(!(o instanceof s))throw new Error("JSO selected Loader is not an instance of BasicLoader.");n(o.execute())}else r(new Error("Cannot redirect to authorization endpoint because of missing redirect handler"))}))}},{key:"wipeTokens",value:function(){this.store.wipeTokens(this.providerID)}}])&&re(n.prototype,r),i&&re(n,i),t}(Z)}])}));
//# sourceMappingURL=jso.js.map