!function(){function e(e){return e&&e.__esModule?e.default:e}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o={},t={},l=n.parcelRequired7c6;null==l&&((l=function(e){if(e in o)return o[e].exports;if(e in t){var n=t[e];delete t[e];var l={id:e,exports:{}};return o[e]=l,n.call(l.exports,l,l.exports),l.exports}var u=new Error("Cannot find module '"+e+"'");throw u.code="MODULE_NOT_FOUND",u}).register=function(e,n){t[e]=n},n.parcelRequired7c6=l);var u=l("ejkSG"),i=document.querySelector("[name=delay]"),r=document.querySelector("[name=step]"),c=document.querySelector('[name="amount"]');document.querySelector('[type="submit"]');document.querySelector(".form").addEventListener("submit",(function(n){var o=function(n){var o,t,i=l+(n-1)*a;(o=n,t=i,new Promise((function(e,n){setTimeout((function(){Math.random()>.3?e({position:o,delay:t}):n({position:o,delay:t})}),t)}))).then((function(o){o.position,o.delay;e(u).Notify.success("✅ Fulfilled promise ".concat(n," in ").concat(i,"ms")),console.log("✅ Fulfilled promise ".concat(n," in ").concat(i,"ms"))})).catch((function(o){o.position,o.delay;e(u).Notify.failure("❌ Rejected promise ".concat(n," in ").concat(i,"ms")),console.log("❌ Rejected promise ".concat(n," in ").concat(i,"ms"))}))};n.preventDefault();for(var t=Number(c.value),l=Number(i.value),a=Number(r.value),d=1;d<=t;d++)o(d);c.value=null,i.value=null,r.value=null}))}();
//# sourceMappingURL=03-promises.ef2e5f5a.js.map
