/*! 
 Build based on gin-vue-admin 
 Time : 1713878256000 */
System.register(["./087AC4D233B64EB0index-legacy.js"],(function(e,n){"use strict";var t;return{setters:[function(e){t=e.aS}],execute:function(){e("v",{beforeMount:function(e,n){var o,u,i=n.value,r=t(i)?{}:i,c=r.interval,a=void 0===c?100:c,d=r.delay,s=void 0===d?600:d,v=function(){return t(i)?i():i.handler()},f=function(){u&&(clearTimeout(u),u=void 0),o&&(clearInterval(o),o=void 0)};e.addEventListener("mousedown",(function(e){0===e.button&&(f(),v(),document.addEventListener("mouseup",(function(){return f()}),{once:!0}),u=setTimeout((function(){o=setInterval((function(){v()}),a)}),s))}))}})}}}));
