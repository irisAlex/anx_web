/*! 
 Build based on gin-vue-admin 
 Time : 1713878256000 */
!function(){function e(){"use strict";/*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */e=function(){return n};var t,n={},r=Object.prototype,a=r.hasOwnProperty,l=Object.defineProperty||function(e,t,n){e[t]=n.value},o="function"==typeof Symbol?Symbol:{},u=o.iterator||"@@iterator",i=o.asyncIterator||"@@asyncIterator",c=o.toStringTag||"@@toStringTag";function f(e,t,n){return Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{f({},"")}catch(t){f=function(e,t,n){return e[t]=n}}function d(e,t,n,r){var a=t&&t.prototype instanceof g?t:g,o=Object.create(a.prototype),u=new I(r||[]);return l(o,"_invoke",{value:V(e,n,u)}),o}function s(e,t,n){try{return{type:"normal",arg:e.call(t,n)}}catch(e){return{type:"throw",arg:e}}}n.wrap=d;var p="suspendedStart",m="suspendedYield",v="executing",h="completed",y={};function g(){}function w(){}function b(){}var x={};f(x,u,(function(){return this}));var B=Object.getPrototypeOf,_=B&&B(B(O([])));_&&_!==r&&a.call(_,u)&&(x=_);var E=b.prototype=g.prototype=Object.create(x);function j(e){["next","throw","return"].forEach((function(t){f(e,t,(function(e){return this._invoke(t,e)}))}))}function D(e,t){function n(r,l,o,u){var i=s(e[r],e,l);if("throw"!==i.type){var c=i.arg,f=c.value;return f&&"object"==typeof f&&a.call(f,"__await")?t.resolve(f.__await).then((function(e){n("next",e,o,u)}),(function(e){n("throw",e,o,u)})):t.resolve(f).then((function(e){c.value=e,o(c)}),(function(e){return n("throw",e,o,u)}))}u(i.arg)}var r;l(this,"_invoke",{value:function(e,a){function l(){return new t((function(t,r){n(e,a,t,r)}))}return r=r?r.then(l,l):l()}})}function V(e,n,r){var a=p;return function(l,o){if(a===v)throw new Error("Generator is already running");if(a===h){if("throw"===l)throw o;return{value:t,done:!0}}for(r.method=l,r.arg=o;;){var u=r.delegate;if(u){var i=k(u,r);if(i){if(i===y)continue;return i}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(a===p)throw a=h,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);a=v;var c=s(e,n,r);if("normal"===c.type){if(a=r.done?h:m,c.arg===y)continue;return{value:c.arg,done:r.done}}"throw"===c.type&&(a=h,r.method="throw",r.arg=c.arg)}}}function k(e,n){var r=n.method,a=e.iterator[r];if(a===t)return n.delegate=null,"throw"===r&&e.iterator.return&&(n.method="return",n.arg=t,k(e,n),"throw"===n.method)||"return"!==r&&(n.method="throw",n.arg=new TypeError("The iterator does not provide a '"+r+"' method")),y;var l=s(a,e.iterator,n.arg);if("throw"===l.type)return n.method="throw",n.arg=l.arg,n.delegate=null,y;var o=l.arg;return o?o.done?(n[e.resultName]=o.value,n.next=e.nextLoc,"return"!==n.method&&(n.method="next",n.arg=t),n.delegate=null,y):o:(n.method="throw",n.arg=new TypeError("iterator result is not an object"),n.delegate=null,y)}function C(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function A(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function I(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(C,this),this.reset(!0)}function O(e){if(e||""===e){var n=e[u];if(n)return n.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var r=-1,l=function n(){for(;++r<e.length;)if(a.call(e,r))return n.value=e[r],n.done=!1,n;return n.value=t,n.done=!0,n};return l.next=l}}throw new TypeError(typeof e+" is not iterable")}return w.prototype=b,l(E,"constructor",{value:b,configurable:!0}),l(b,"constructor",{value:w,configurable:!0}),w.displayName=f(b,c,"GeneratorFunction"),n.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===w||"GeneratorFunction"===(t.displayName||t.name))},n.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,b):(e.__proto__=b,f(e,c,"GeneratorFunction")),e.prototype=Object.create(E),e},n.awrap=function(e){return{__await:e}},j(D.prototype),f(D.prototype,i,(function(){return this})),n.AsyncIterator=D,n.async=function(e,t,r,a,l){void 0===l&&(l=Promise);var o=new D(d(e,t,r,a),l);return n.isGeneratorFunction(t)?o:o.next().then((function(e){return e.done?e.value:o.next()}))},j(E),f(E,c,"Generator"),f(E,u,(function(){return this})),f(E,"toString",(function(){return"[object Generator]"})),n.keys=function(e){var t=Object(e),n=[];for(var r in t)n.push(r);return n.reverse(),function e(){for(;n.length;){var r=n.pop();if(r in t)return e.value=r,e.done=!1,e}return e.done=!0,e}},n.values=O,I.prototype={constructor:I,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(A),!e)for(var n in this)"t"===n.charAt(0)&&a.call(this,n)&&!isNaN(+n.slice(1))&&(this[n]=t)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var n=this;function r(r,a){return u.type="throw",u.arg=e,n.next=r,a&&(n.method="next",n.arg=t),!!a}for(var l=this.tryEntries.length-1;l>=0;--l){var o=this.tryEntries[l],u=o.completion;if("root"===o.tryLoc)return r("end");if(o.tryLoc<=this.prev){var i=a.call(o,"catchLoc"),c=a.call(o,"finallyLoc");if(i&&c){if(this.prev<o.catchLoc)return r(o.catchLoc,!0);if(this.prev<o.finallyLoc)return r(o.finallyLoc)}else if(i){if(this.prev<o.catchLoc)return r(o.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return r(o.finallyLoc)}}}},abrupt:function(e,t){for(var n=this.tryEntries.length-1;n>=0;--n){var r=this.tryEntries[n];if(r.tryLoc<=this.prev&&a.call(r,"finallyLoc")&&this.prev<r.finallyLoc){var l=r;break}}l&&("break"===e||"continue"===e)&&l.tryLoc<=t&&t<=l.finallyLoc&&(l=null);var o=l?l.completion:{};return o.type=e,o.arg=t,l?(this.method="next",this.next=l.finallyLoc,y):this.complete(o)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),y},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.finallyLoc===e)return this.complete(n.completion,n.afterLoc),A(n),y}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.tryLoc===e){var r=n.completion;if("throw"===r.type){var a=r.arg;A(n)}return a}}throw new Error("illegal catch attempt")},delegateYield:function(e,n,r){return this.delegate={iterator:O(e),resultName:n,nextLoc:r},"next"===this.method&&(this.arg=t),y}},n}function t(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function n(e){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?t(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):t(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function r(e,t,n){var r;return(t="symbol"==typeof(r=function(e,t){if("object"!=typeof e||!e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,t||"default");if("object"!=typeof r)return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(t,"string"))?r:String(r))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t,n,r,a,l,o){try{var u=e[l](o),i=u.value}catch(c){return void n(c)}u.done?t(i):Promise.resolve(i).then(r,a)}function l(e){return function(){var t=this,n=arguments;return new Promise((function(r,l){var o=e.apply(t,n);function u(e){a(o,r,l,u,i,"next",e)}function i(e){a(o,r,l,u,i,"throw",e)}u(void 0)}))}}System.register(["./087AC4D233B64EB0index-legacy.js","./087AC4D233B64EB0dialog-legacy.js","./087AC4D233B64EB0overlay-legacy.js","./087AC4D233B64EB0form-item-legacy.js","./087AC4D233B64EB0tooltip-legacy.js","./087AC4D233B64EB0popper-legacy.js","./087AC4D233B64EB0radio-legacy.js","./087AC4D233B64EB0input-legacy.js","./087AC4D233B64EB0tag-legacy.js","./087AC4D233B64EB0checkbox-legacy.js","./087AC4D233B64EB0scrollbar-legacy.js","./087AC4D233B64EB0select-legacy.js","./087AC4D233B64EB0table-column-legacy.js","./087AC4D233B64EB0icon-legacy2.js","./087AC4D233B64EB0button-legacy.js","./087AC4D233B64EB0icon-legacy.js","./087AC4D233B64EB0warningBar-legacy.js","./087AC4D233B64EB0authorityBtn-legacy.js","./087AC4D233B64EB0index-legacy22.js","./087AC4D233B64EB0isUndefined-legacy.js","./087AC4D233B64EB0castArray-legacy.js","./087AC4D233B64EB0_baseClone-legacy.js","./087AC4D233B64EB0_Uint8Array-legacy.js","./087AC4D233B64EB0_initCloneObject-legacy.js","./087AC4D233B64EB0index-legacy29.js","./087AC4D233B64EB0strings-legacy.js","./087AC4D233B64EB0isEqual-legacy.js","./087AC4D233B64EB0arrays-legacy.js","./087AC4D233B64EB0cloneDeep-legacy.js","./087AC4D233B64EB0index-legacy23.js","./087AC4D233B64EB0debounce-legacy.js","./087AC4D233B64EB0hasIn-legacy.js"],(function(t,r){"use strict";var a,o,u,i,c,f,d,s,p,m,v,h,y,g,w,b,x,B,_,E,j,D,V,k,C,A,I,O,L,U,P,N,S,T,q,G,F,M,z,$;return{setters:[function(e){a=e._,o=e.r,u=e.a,i=e.o,c=e.c,f=e.b,d=e.d,s=e.w,p=e.f,m=e.t,v=e.g,h=e.Z,y=e.e,g=e.A,w=e.d2,b=e.d3,x=e.$,B=e.d4,_=e.j,E=e.d5,j=e.d6,D=e.d7,V=e.E,k=e.W,C=e.k,A=e.p,I=e.h},function(e){O=e.E},null,function(e){L=e.a,U=e.E},null,null,function(e){P=e.E},null,null,function(e){N=e.E},null,function(e){S=e.E,T=e.a},function(e){q=e.E,G=e.a},null,null,function(e){F=e.default},function(e){M=e._},function(e){z=e.c},function(e){$=e.E},null,null,null,null,null,null,null,null,null,null,null,null,null],execute:function(){var r=document.createElement("style");r.textContent=".warning[data-v-186a2fb7]{color:#dc143c}.icon-column[data-v-186a2fb7]{display:flex;align-items:center}.icon-column .el-icon[data-v-186a2fb7]{margin-right:8px}\n",document.head.appendChild(r);var Y=function(e){return A("data-v-186a2fb7"),e=e(),I(),e},H={class:"gva-table-box"},K={class:"gva-btn-list"},W={key:0,class:"icon-column"},Z={style:{display:"inline-flex","align-items":"center"}},J=Y((function(){return f("span",null,"路由Path",-1)})),Q=Y((function(){return f("span",{style:{"font-size":"12px","margin-right":"12px"}},"如果菜单包含子菜单，请创建router-view二级路由页面或者",-1)})),R=Y((function(){return f("span",null," 高亮菜单 ",-1)})),X=Y((function(){return f("span",null," 是否为基础页面 ",-1)})),ee={class:"flex items-center gap-2"},te={class:"flex items-center gap-2 mt-3"},ne={class:"dialog-footer"},re=Object.assign({name:"Menus"},{__name:"menu",setup:function(t){var r=o({path:[{required:!0,message:"请输入菜单name",trigger:"blur"}],component:[{required:!0,message:"请输入文件路径",trigger:"blur"}],"meta.title":[{required:!0,message:"请输入菜单展示名称",trigger:"blur"}]}),a=u(1),A=u(0),I=u(999),Y=u([]),re=u({}),ae=function(){var t=l(e().mark((function t(){var r;return e().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b(n({page:a.value,pageSize:I.value},re.value));case 2:0===(r=e.sent).code&&(Y.value=r.data.list,A.value=r.data.total,a.value=r.data.page,I.value=r.data.pageSize);case 4:case"end":return e.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();ae();var le=function(){ue.value.component=ue.value.component.replace(/\\/g,"/")},oe=function(){var t=l(e().mark((function t(n,r){var a;return e().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(0!==(a=n[r]).ID){e.next=4;break}return n.splice(r,1),e.abrupt("return");case 4:return e.next=6,z({id:a.ID});case 6:0===e.sent.code&&n.splice(r,1);case 8:case"end":return e.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}(),ue=u({ID:0,path:"",name:"",hidden:!1,parentId:"",component:"",meta:{activeName:"",title:"",icon:"",defaultMenu:!1,closeTab:!1,keepAlive:!1},parameters:[],menuBtn:[]}),ie=function(){ue.value.path=ue.value.name},ce=function(e){se(),e()},fe=u(null),de=u(!1),se=function(){de.value=!1,fe.value.resetFields(),ue.value={ID:0,path:"",name:"",hidden:!1,parentId:"",component:"",meta:{title:"",icon:"",defaultMenu:!1,closeTab:!1,keepAlive:!1}}},pe=u(!1),me=function(){se(),pe.value=!1},ve=function(){var t=l(e().mark((function t(){return e().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:fe.value.validate(function(){var t=l(e().mark((function t(n){var r;return e().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!n){e.next=13;break}if(!we.value){e.next=7;break}return e.next=4,E(ue.value);case 4:r=e.sent,e.next=10;break;case 7:return e.next=9,j(ue.value);case 9:r=e.sent;case 10:0===r.code&&(_({type:"success",message:we.value?"编辑成功":"添加成功!"}),ae()),se(),pe.value=!1;case 13:case"end":return e.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}());case 1:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),he=u([{ID:"0",title:"根菜单"}]),ye=function(){he.value=[{ID:"0",title:"根目录"}],ge(Y.value,he.value,!1)},ge=function e(t,n,r){t&&t.forEach((function(t){if(t.children&&t.children.length){var a={title:t.meta.title,ID:String(t.ID),disabled:r||t.ID===ue.value.ID,children:[]};e(t.children,a.children,r||t.ID===ue.value.ID),n.push(a)}else{var l={title:t.meta.title,ID:String(t.ID),disabled:r||t.ID===ue.value.ID};n.push(l)}}))},we=u(!1),be=u("新增菜单"),xe=function(e){be.value="新增菜单",ue.value.parentId=String(e),we.value=!1,ye(),pe.value=!0},Be=function(){var t=l(e().mark((function t(n){var r;return e().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return be.value="编辑菜单",e.next=3,D({id:n});case 3:r=e.sent,ue.value=r.data.menu,we.value=!0,ye(),pe.value=!0;case 8:case"end":return e.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();return function(t,n){var o=V,u=q,b=k,E=G,j=C,D=L,A=N,I=S,z=T,re=P,se=$,ye=U,ge=O;return i(),c("div",null,[f("div",H,[f("div",K,[d(o,{type:"primary",icon:"plus",onClick:n[0]||(n[0]=function(e){return xe("0")})},{default:s((function(){return[p("新增根菜单")]})),_:1})]),d(E,{data:Y.value,"row-key":"ID"},{default:s((function(){return[d(u,{align:"left",label:"ID","min-width":"100",prop:"ID"}),d(u,{align:"left",label:"展示名称","min-width":"120",prop:"authorityName"},{default:s((function(e){return[f("span",null,m(e.row.meta.title),1)]})),_:1}),d(u,{align:"left",label:"图标","min-width":"140",prop:"authorityName"},{default:s((function(e){return[e.row.meta.icon?(i(),c("div",W,[d(b,null,{default:s((function(){return[(i(),v(h(e.row.meta.icon)))]})),_:2},1024),f("span",null,m(e.row.meta.icon),1)])):y("",!0)]})),_:1}),d(u,{align:"left",label:"路由Name","show-overflow-tooltip":"","min-width":"160",prop:"name"}),d(u,{align:"left",label:"路由Path","show-overflow-tooltip":"","min-width":"160",prop:"path"}),d(u,{align:"left",label:"是否隐藏","min-width":"100",prop:"hidden"},{default:s((function(e){return[f("span",null,m(e.row.hidden?"隐藏":"显示"),1)]})),_:1}),d(u,{align:"left",label:"父节点","min-width":"90",prop:"parentId"}),d(u,{align:"left",label:"排序","min-width":"70",prop:"sort"}),d(u,{align:"left",label:"文件路径","min-width":"360",prop:"component"}),d(u,{align:"left",fixed:"right",label:"操作",width:"300"},{default:s((function(t){return[d(o,{type:"primary",link:"",icon:"plus",onClick:function(e){return xe(t.row.ID)}},{default:s((function(){return[p("添加子菜单")]})),_:2},1032,["onClick"]),d(o,{type:"primary",link:"",icon:"edit",onClick:function(e){return Be(t.row.ID)}},{default:s((function(){return[p("编辑")]})),_:2},1032,["onClick"]),d(o,{type:"primary",link:"",icon:"delete",onClick:function(n){return r=t.row.ID,void x.confirm("此操作将永久删除所有角色下该菜单, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(l(e().mark((function t(){return e().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,B({ID:r});case 2:0===e.sent.code&&(_({type:"success",message:"删除成功!"}),1===Y.value.length&&a.value>1&&a.value--,ae());case 4:case"end":return e.stop()}}),t)})))).catch((function(){_({type:"info",message:"已取消删除"})}));var r}},{default:s((function(){return[p("删除")]})),_:2},1032,["onClick"])]})),_:1})]})),_:1},8,["data"])]),d(ge,{modelValue:pe.value,"onUpdate:modelValue":n[16]||(n[16]=function(e){return pe.value=e}),"before-close":ce,title:be.value},{footer:s((function(){return[f("div",ne,[d(o,{onClick:me},{default:s((function(){return[p("取 消")]})),_:1}),d(o,{type:"primary",onClick:ve},{default:s((function(){return[p("确 定")]})),_:1})])]})),default:s((function(){return[d(M,{title:"新增菜单，需要在角色管理内配置权限才可使用"}),pe.value?(i(),v(ye,{key:0,ref_key:"menuForm",ref:fe,inline:!0,model:ue.value,rules:r,"label-position":"top","label-width":"85px"},{default:s((function(){return[d(D,{label:"路由Name",prop:"path",style:{width:"30%"}},{default:s((function(){return[d(j,{modelValue:ue.value.name,"onUpdate:modelValue":n[1]||(n[1]=function(e){return ue.value.name=e}),autocomplete:"off",placeholder:"唯一英文字符串",onChange:ie},null,8,["modelValue"])]})),_:1}),d(D,{prop:"path",style:{width:"30%"}},{label:s((function(){return[f("span",Z,[J,d(A,{modelValue:de.value,"onUpdate:modelValue":n[2]||(n[2]=function(e){return de.value=e}),style:{"margin-left":"12px",height:"auto"}},{default:s((function(){return[p("添加参数")]})),_:1},8,["modelValue"])])]})),default:s((function(){return[d(j,{modelValue:ue.value.path,"onUpdate:modelValue":n[3]||(n[3]=function(e){return ue.value.path=e}),disabled:!de.value,autocomplete:"off",placeholder:"建议只在后方拼接参数"},null,8,["modelValue","disabled"])]})),_:1}),d(D,{label:"是否隐藏",style:{width:"30%"}},{default:s((function(){return[d(z,{modelValue:ue.value.hidden,"onUpdate:modelValue":n[4]||(n[4]=function(e){return ue.value.hidden=e}),placeholder:"是否在列表隐藏"},{default:s((function(){return[d(I,{value:!1,label:"否"}),d(I,{value:!0,label:"是"})]})),_:1},8,["modelValue"])]})),_:1}),d(D,{label:"父节点ID",style:{width:"30%"}},{default:s((function(){return[d(re,{modelValue:ue.value.parentId,"onUpdate:modelValue":n[5]||(n[5]=function(e){return ue.value.parentId=e}),style:{width:"100%"},disabled:!we.value,options:he.value,props:{checkStrictly:!0,label:"title",value:"ID",disabled:"disabled",emitPath:!1},"show-all-levels":!1,filterable:""},null,8,["modelValue","disabled","options"])]})),_:1}),d(D,{label:"文件路径",prop:"component",style:{width:"60%"}},{default:s((function(){return[d(j,{modelValue:ue.value.component,"onUpdate:modelValue":n[6]||(n[6]=function(e){return ue.value.component=e}),autocomplete:"off",placeholder:"页面:view/xxx/xx.vue 插件:plugin/xx/xx.vue",onBlur:le},null,8,["modelValue"]),Q,d(o,{style:{"margin-top":"4px"},onClick:n[7]||(n[7]=function(e){return ue.value.component="view/routerHolder.vue"})},{default:s((function(){return[p("点我设置")]})),_:1})]})),_:1}),d(D,{label:"展示名称",prop:"meta.title",style:{width:"30%"}},{default:s((function(){return[d(j,{modelValue:ue.value.meta.title,"onUpdate:modelValue":n[8]||(n[8]=function(e){return ue.value.meta.title=e}),autocomplete:"off"},null,8,["modelValue"])]})),_:1}),d(D,{label:"图标",prop:"meta.icon",style:{width:"30%"}},{default:s((function(){return[d(F,{meta:ue.value.meta,style:{width:"100%"}},null,8,["meta"])]})),_:1}),d(D,{label:"排序标记",prop:"sort",style:{width:"30%"}},{default:s((function(){return[d(j,{modelValue:ue.value.sort,"onUpdate:modelValue":n[9]||(n[9]=function(e){return ue.value.sort=e}),modelModifiers:{number:!0},autocomplete:"off"},null,8,["modelValue"])]})),_:1}),d(D,{prop:"meta.activeName",style:{width:"30%"}},{label:s((function(){return[f("div",null,[R,d(se,{content:"注：当到达此路由时候，指定左侧菜单指定name会处于活跃状态（亮起），可为空，为空则为本路由Name。",placement:"top",effect:"light"},{default:s((function(){return[d(b,null,{default:s((function(){return[d(g(w))]})),_:1})]})),_:1})])]})),default:s((function(){return[d(j,{modelValue:ue.value.meta.activeName,"onUpdate:modelValue":n[10]||(n[10]=function(e){return ue.value.meta.activeName=e}),placeholder:ue.value.name,autocomplete:"off"},null,8,["modelValue","placeholder"])]})),_:1}),d(D,{label:"KeepAlive",prop:"meta.keepAlive",style:{width:"30%"}},{default:s((function(){return[d(z,{modelValue:ue.value.meta.keepAlive,"onUpdate:modelValue":n[11]||(n[11]=function(e){return ue.value.meta.keepAlive=e}),style:{width:"100%"},placeholder:"是否keepAlive缓存页面"},{default:s((function(){return[d(I,{value:!1,label:"否"}),d(I,{value:!0,label:"是"})]})),_:1},8,["modelValue"])]})),_:1}),d(D,{label:"CloseTab",prop:"meta.closeTab",style:{width:"30%"}},{default:s((function(){return[d(z,{modelValue:ue.value.meta.closeTab,"onUpdate:modelValue":n[12]||(n[12]=function(e){return ue.value.meta.closeTab=e}),style:{width:"100%"},placeholder:"是否自动关闭tab"},{default:s((function(){return[d(I,{value:!1,label:"否"}),d(I,{value:!0,label:"是"})]})),_:1},8,["modelValue"])]})),_:1}),d(D,{style:{width:"30%"}},{label:s((function(){return[f("div",null,[X,d(se,{content:"此项选择为是，则不会展示左侧菜单以及顶部信息。",placement:"top",effect:"light"},{default:s((function(){return[d(b,null,{default:s((function(){return[d(g(w))]})),_:1})]})),_:1})])]})),default:s((function(){return[d(z,{modelValue:ue.value.meta.defaultMenu,"onUpdate:modelValue":n[13]||(n[13]=function(e){return ue.value.meta.defaultMenu=e}),style:{width:"100%"},placeholder:"是否为基础页面"},{default:s((function(){return[d(I,{value:!1,label:"否"}),d(I,{value:!0,label:"是"})]})),_:1},8,["modelValue"])]})),_:1})]})),_:1},8,["model","rules"])):y("",!0),f("div",null,[f("div",ee,[d(o,{type:"primary",icon:"edit",onClick:n[14]||(n[14]=function(e){return function(e){e.parameters||(e.parameters=[]),e.parameters.push({type:"query",key:"",value:""})}(ue.value)})},{default:s((function(){return[p("新增菜单参数")]})),_:1})]),d(E,{data:ue.value.parameters,style:{width:"100%","margin-top":"12px"}},{default:s((function(){return[d(u,{align:"left",prop:"type",label:"参数类型",width:"180"},{default:s((function(e){return[d(z,{modelValue:e.row.type,"onUpdate:modelValue":function(t){return e.row.type=t},placeholder:"请选择"},{default:s((function(){return[d(I,{key:"query",value:"query",label:"query"}),d(I,{key:"params",value:"params",label:"params"})]})),_:2},1032,["modelValue","onUpdate:modelValue"])]})),_:1}),d(u,{align:"left",prop:"key",label:"参数key",width:"180"},{default:s((function(e){return[f("div",null,[d(j,{modelValue:e.row.key,"onUpdate:modelValue":function(t){return e.row.key=t}},null,8,["modelValue","onUpdate:modelValue"])])]})),_:1}),d(u,{align:"left",prop:"value",label:"参数值"},{default:s((function(e){return[f("div",null,[d(j,{modelValue:e.row.value,"onUpdate:modelValue":function(t){return e.row.value=t}},null,8,["modelValue","onUpdate:modelValue"])])]})),_:1}),d(u,{align:"left"},{default:s((function(e){return[f("div",null,[d(o,{type:"danger",icon:"delete",onClick:function(t){return n=ue.value.parameters,r=e.$index,void n.splice(r,1);var n,r}},{default:s((function(){return[p("删除")]})),_:2},1032,["onClick"])])]})),_:1})]})),_:1},8,["data"]),f("div",te,[d(o,{type:"primary",icon:"edit",onClick:n[15]||(n[15]=function(e){return function(e){e.menuBtn||(e.menuBtn=[]),e.menuBtn.push({name:"",desc:""})}(ue.value)})},{default:s((function(){return[p("新增可控按钮 ")]})),_:1})]),d(E,{data:ue.value.menuBtn,style:{width:"100%","margin-top":"12px"}},{default:s((function(){return[d(u,{align:"left",prop:"name",label:"按钮名称",width:"180"},{default:s((function(e){return[f("div",null,[d(j,{modelValue:e.row.name,"onUpdate:modelValue":function(t){return e.row.name=t}},null,8,["modelValue","onUpdate:modelValue"])])]})),_:1}),d(u,{align:"left",prop:"name",label:"备注",width:"180"},{default:s((function(e){return[f("div",null,[d(j,{modelValue:e.row.desc,"onUpdate:modelValue":function(t){return e.row.desc=t}},null,8,["modelValue","onUpdate:modelValue"])])]})),_:1}),d(u,{align:"left"},{default:s((function(e){return[f("div",null,[d(o,{type:"danger",icon:"delete",onClick:function(t){return oe(ue.value.menuBtn,e.$index)}},{default:s((function(){return[p("删除")]})),_:2},1032,["onClick"])])]})),_:1})]})),_:1},8,["data"])])]})),_:1},8,["modelValue","title"])])}}});t("default",a(re,[["__scopeId","data-v-186a2fb7"]]))}}}))}();
