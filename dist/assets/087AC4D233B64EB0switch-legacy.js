/*! 
 Build based on gin-vue-admin 
 Time : 1713878256000 */
!function(){function e(e,i){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);i&&(l=l.filter((function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable}))),t.push.apply(t,l)}return t}function i(i){for(var l=1;l<arguments.length;l++){var n=null!=arguments[l]?arguments[l]:{};l%2?e(Object(n),!0).forEach((function(e){t(i,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(i,Object.getOwnPropertyDescriptors(n)):e(Object(n)).forEach((function(e){Object.defineProperty(i,e,Object.getOwnPropertyDescriptor(n,e))}))}return i}function t(e,i,t){var l;return(i="symbol"==typeof(l=function(e,i){if("object"!=typeof e||!e)return e;var t=e[Symbol.toPrimitive];if(void 0!==t){var l=t.call(e,i||"default");if("object"!=typeof l)return l;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===i?String:Number)(e)}(i,"string"))?l:String(l))in e?Object.defineProperty(e,i,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[i]=t,e}System.register(["./087AC4D233B64EB0index-legacy.js"],(function(e,l){"use strict";var n,c,r,a,o,s,u,h,d,v,p,f,w,b,_,g,x,y,m,k,S,C,I,O,j,P,V,T,z,B,A,E,N,D,$,F,K,M,G,H,J,L,R,U,W,Y;return{setters:[function(e){n=e.C,c=e.cL,r=e.a1,a=e.a3,o=e.bc,s=e.aO,u=e.aA,h=e.ba,d=e.be,v=e.cM,p=e.x,f=e.a4,w=e.b5,b=e.ag,_=e.y,g=e.b6,x=e.b$,y=e.F,m=e.a,k=e.G,S=e.R,C=e.aP,I=e.M,O=e.o,j=e.c,P=e.b,V=e.A,T=e.n,z=e.m,B=e.g,A=e.w,E=e.Z,N=e.W,D=e.e,$=e.t,F=e.d,K=e.bY,M=e.H,G=e.I,H=e.aj,J=e.B,L=e.aw,R=e.N,U=e.cN,W=e.ax,Y=e.J}],execute:function(){var l=document.createElement("style");l.textContent=".el-switch{--el-switch-on-color: var(--el-color-primary);--el-switch-off-color: var(--el-border-color);display:inline-flex;align-items:center;position:relative;font-size:14px;line-height:20px;height:32px;vertical-align:middle}.el-switch.is-disabled .el-switch__core,.el-switch.is-disabled .el-switch__label{cursor:not-allowed}.el-switch__label{transition:var(--el-transition-duration-fast);height:20px;display:inline-block;font-size:14px;font-weight:500;cursor:pointer;vertical-align:middle;color:var(--el-text-color-primary)}.el-switch__label.is-active{color:var(--el-color-primary)}.el-switch__label--left{margin-right:10px}.el-switch__label--right{margin-left:10px}.el-switch__label *{line-height:1;font-size:14px;display:inline-block}.el-switch__label .el-icon{height:inherit}.el-switch__label .el-icon svg{vertical-align:middle}.el-switch__input{position:absolute;width:0;height:0;opacity:0;margin:0}.el-switch__input:focus-visible~.el-switch__core{outline:2px solid var(--el-switch-on-color);outline-offset:1px}.el-switch__core{display:inline-flex;position:relative;align-items:center;min-width:40px;height:20px;border:1px solid var(--el-switch-border-color, var(--el-switch-off-color));outline:none;border-radius:10px;box-sizing:border-box;background:var(--el-switch-off-color);cursor:pointer;transition:border-color var(--el-transition-duration),background-color var(--el-transition-duration)}.el-switch__core .el-switch__inner{width:100%;transition:all var(--el-transition-duration);height:16px;display:flex;justify-content:center;align-items:center;overflow:hidden;padding:0 4px 0 18px}.el-switch__core .el-switch__inner .is-icon,.el-switch__core .el-switch__inner .is-text{font-size:12px;color:var(--el-color-white);-webkit-user-select:none;user-select:none;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.el-switch__core .el-switch__action{position:absolute;left:1px;border-radius:var(--el-border-radius-circle);transition:all var(--el-transition-duration);width:16px;height:16px;background-color:var(--el-color-white);display:flex;justify-content:center;align-items:center;color:var(--el-switch-off-color)}.el-switch.is-checked .el-switch__core{border-color:var(--el-switch-border-color, var(--el-switch-on-color));background-color:var(--el-switch-on-color)}.el-switch.is-checked .el-switch__core .el-switch__action{left:calc(100% - 17px);color:var(--el-switch-on-color)}.el-switch.is-checked .el-switch__core .el-switch__inner{padding:0 18px 0 4px}.el-switch.is-disabled{opacity:.6}.el-switch--wide .el-switch__label.el-switch__label--left span{left:10px}.el-switch--wide .el-switch__label.el-switch__label--right span{right:10px}.el-switch .label-fade-enter-from,.el-switch .label-fade-leave-active{opacity:0}.el-switch--large{font-size:14px;line-height:24px;height:40px}.el-switch--large .el-switch__label{height:24px;font-size:14px}.el-switch--large .el-switch__label *{font-size:14px}.el-switch--large .el-switch__core{min-width:50px;height:24px;border-radius:12px}.el-switch--large .el-switch__core .el-switch__inner{height:20px;padding:0 6px 0 22px}.el-switch--large .el-switch__core .el-switch__action{width:20px;height:20px}.el-switch--large.is-checked .el-switch__core .el-switch__action{left:calc(100% - 21px)}.el-switch--large.is-checked .el-switch__core .el-switch__inner{padding:0 22px 0 6px}.el-switch--small{font-size:12px;line-height:16px;height:24px}.el-switch--small .el-switch__label{height:16px;font-size:12px}.el-switch--small .el-switch__label *{font-size:12px}.el-switch--small .el-switch__core{min-width:30px;height:16px;border-radius:8px}.el-switch--small .el-switch__core .el-switch__inner{height:12px;padding:0 2px 0 14px}.el-switch--small .el-switch__core .el-switch__action{width:12px;height:12px}.el-switch--small.is-checked .el-switch__core .el-switch__action{left:calc(100% - 13px)}.el-switch--small.is-checked .el-switch__core .el-switch__inner{padding:0 14px 0 2px}\n",document.head.appendChild(l);var Z=n({modelValue:{type:[Boolean,String,Number],default:!1},disabled:{type:Boolean,default:!1},loading:{type:Boolean,default:!1},size:{type:String,validator:c},width:{type:[String,Number],default:""},inlinePrompt:{type:Boolean,default:!1},inactiveActionIcon:{type:r},activeActionIcon:{type:r},activeIcon:{type:r},inactiveIcon:{type:r},activeText:{type:String,default:""},inactiveText:{type:String,default:""},activeValue:{type:[Boolean,String,Number],default:!0},inactiveValue:{type:[Boolean,String,Number],default:!1},activeColor:{type:String,default:""},inactiveColor:{type:String,default:""},borderColor:{type:String,default:""},name:{type:String,default:""},validateEvent:{type:Boolean,default:!0},beforeChange:{type:a(Function)},id:String,tabindex:{type:[String,Number]},value:{type:[Boolean,String,Number],default:!1},label:{type:String,default:void 0}}),q=t(t(t({},o,(function(e){return s(e)||u(e)||h(e)})),d,(function(e){return s(e)||u(e)||h(e)})),v,(function(e){return s(e)||u(e)||h(e)})),Q=["onClick"],X=["id","aria-checked","aria-disabled","aria-label","name","true-value","false-value","disabled","tabindex","onKeydown"],ee=["aria-hidden"],ie=["aria-hidden"],te=["aria-hidden"],le="ElSwitch",ne=p({name:le}),ce=p(i(i({},ne),{},{props:Z,emits:q,setup:function(e,t){var l=t.expose,n=t.emit,c=e,r=f(),a=w().formItem,u=b(),h=_("switch");[['"value"','"model-value" or "v-model"',"value"],['"active-color"',"CSS var `--el-switch-on-color`","activeColor"],['"inactive-color"',"CSS var `--el-switch-off-color`","inactiveColor"],['"border-color"',"CSS var `--el-switch-border-color`","borderColor"]].forEach((function(e){L({from:e[0],replacement:e[1],scope:le,version:"2.3.0",ref:"https://element-plus.org/en-US/component/switch.html#attributes",type:"Attribute"},y((function(){var i;return!!(null==(i=r.vnode.props)?void 0:i[e[2]])})))}));var p=g(c,{formItemContext:a}).inputId,J=x(y((function(){return c.loading}))),Y=m(!1!==c.modelValue),Z=m(),q=m(),ne=y((function(){return[h.b(),h.m(u.value),h.is("disabled",J.value),h.is("checked",se.value)]})),ce=y((function(){return[h.e("label"),h.em("label","left"),h.is("active",!se.value)]})),re=y((function(){return[h.e("label"),h.em("label","right"),h.is("active",se.value)]})),ae=y((function(){return{width:k(c.width)}}));S((function(){return c.modelValue}),(function(){Y.value=!0})),S((function(){return c.value}),(function(){Y.value=!1}));var oe=y((function(){return Y.value?c.modelValue:c.value})),se=y((function(){return oe.value===c.activeValue}));[c.activeValue,c.inactiveValue].includes(oe.value)||(n(o,c.inactiveValue),n(d,c.inactiveValue),n(v,c.inactiveValue)),S(se,(function(e){var i;Z.value.checked=e,c.validateEvent&&(null==(i=null==a?void 0:a.validate)||i.call(a,"change").catch((function(e){return C()})))}));var ue=function(){var e=se.value?c.inactiveValue:c.activeValue;n(o,e),n(d,e),n(v,e),R((function(){Z.value.checked=se.value}))},he=function(){if(!J.value){var e=c.beforeChange;if(e){var i=e();[U(i),s(i)].includes(!0)||W(le,"beforeChange must return type `Promise<boolean>` or `boolean`"),U(i)?i.then((function(e){e&&ue()})).catch((function(e){})):i&&ue()}else ue()}},de=y((function(){return h.cssVarBlock(i(i(i({},c.activeColor?{"on-color":c.activeColor}:null),c.inactiveColor?{"off-color":c.inactiveColor}:null),c.borderColor?{"border-color":c.borderColor}:null))}));return I((function(){Z.value.checked=se.value})),l({focus:function(){var e,i;null==(i=null==(e=Z.value)?void 0:e.focus)||i.call(e)},checked:se}),function(e,i){return O(),j("div",{class:T(V(ne)),style:G(V(de)),onClick:H(he,["prevent"])},[P("input",{id:V(p),ref_key:"input",ref:Z,class:T(V(h).e("input")),type:"checkbox",role:"switch","aria-checked":V(se),"aria-disabled":V(J),"aria-label":e.label,name:e.name,"true-value":e.activeValue,"false-value":e.inactiveValue,disabled:V(J),tabindex:e.tabindex,onChange:ue,onKeydown:z(he,["enter"])},null,42,X),e.inlinePrompt||!e.inactiveIcon&&!e.inactiveText?D("v-if",!0):(O(),j("span",{key:0,class:T(V(ce))},[e.inactiveIcon?(O(),B(V(N),{key:0},{default:A((function(){return[(O(),B(E(e.inactiveIcon)))]})),_:1})):D("v-if",!0),!e.inactiveIcon&&e.inactiveText?(O(),j("span",{key:1,"aria-hidden":V(se)},$(e.inactiveText),9,ee)):D("v-if",!0)],2)),P("span",{ref_key:"core",ref:q,class:T(V(h).e("core")),style:G(V(ae))},[e.inlinePrompt?(O(),j("div",{key:0,class:T(V(h).e("inner"))},[e.activeIcon||e.inactiveIcon?(O(),B(V(N),{key:0,class:T(V(h).is("icon"))},{default:A((function(){return[(O(),B(E(V(se)?e.activeIcon:e.inactiveIcon)))]})),_:1},8,["class"])):e.activeText||e.inactiveText?(O(),j("span",{key:1,class:T(V(h).is("text")),"aria-hidden":!V(se)},$(V(se)?e.activeText:e.inactiveText),11,ie)):D("v-if",!0)],2)):D("v-if",!0),P("div",{class:T(V(h).e("action"))},[e.loading?(O(),B(V(N),{key:0,class:T(V(h).is("loading"))},{default:A((function(){return[F(V(K))]})),_:1},8,["class"])):V(se)?M(e.$slots,"active-action",{key:1},(function(){return[e.activeActionIcon?(O(),B(V(N),{key:0},{default:A((function(){return[(O(),B(E(e.activeActionIcon)))]})),_:1})):D("v-if",!0)]})):V(se)?D("v-if",!0):M(e.$slots,"inactive-action",{key:2},(function(){return[e.inactiveActionIcon?(O(),B(V(N),{key:0},{default:A((function(){return[(O(),B(E(e.inactiveActionIcon)))]})),_:1})):D("v-if",!0)]}))],2)],6),e.inlinePrompt||!e.activeIcon&&!e.activeText?D("v-if",!0):(O(),j("span",{key:1,class:T(V(re))},[e.activeIcon?(O(),B(V(N),{key:0},{default:A((function(){return[(O(),B(E(e.activeIcon)))]})),_:1})):D("v-if",!0),!e.activeIcon&&e.activeText?(O(),j("span",{key:1,"aria-hidden":!V(se)},$(e.activeText),9,te)):D("v-if",!0)],2))],14,Q)}}}));e("E",Y(J(ce,[["__file","switch.vue"]])))}}}))}();
