/*! 
 Build based on gin-vue-admin 
 Time : 1713878256000 */
import{C as e,a1 as o,a3 as l,bc as a,aO as n,a4 as t,bv as s,z as u,a as c,c9 as r,ca as d,F as i,G as p,cb as f,R as y,N as v,M as B,aB as m,b8 as C}from"./087AC4D233B64EB0index.js";import{i as b}from"./087AC4D233B64EB0isUndefined.js";const g=e({center:Boolean,alignCenter:Boolean,closeIcon:{type:o},draggable:Boolean,overflow:Boolean,fullscreen:Boolean,showClose:{type:Boolean,default:!0},title:{type:String,default:""},ariaLevel:{type:String,default:"2"}}),D={close:()=>!0},F=e({...g,appendToBody:Boolean,appendTo:{type:l(String),default:"body"},beforeClose:{type:l(Function)},destroyOnClose:Boolean,closeOnClickModal:{type:Boolean,default:!0},closeOnPressEscape:{type:Boolean,default:!0},lockScroll:{type:Boolean,default:!0},modal:{type:Boolean,default:!0},openDelay:{type:Number,default:0},closeDelay:{type:Number,default:0},top:{type:String},modelValue:Boolean,modalClass:String,width:{type:[String,Number]},zIndex:{type:Number},trapFocus:{type:Boolean,default:!1},headerAriaLevel:{type:String,default:"2"}}),S={open:()=>!0,opened:()=>!0,close:()=>!0,closed:()=>!0,[a]:e=>n(e),openAutoFocus:()=>!0,closeAutoFocus:()=>!0},x=(e,o)=>{var l;const n=t().emit,{nextZIndex:g}=s();let D="";const F=u(),S=u(),x=c(!1),A=c(!1),I=c(!1),O=c(null!=(l=e.zIndex)?l:g());let h,w;const k=r("namespace",d),z=i((()=>{const o={},l="--".concat(k.value,"-dialog");return e.fullscreen||(e.top&&(o["".concat(l,"-margin-top")]=e.top),e.width&&(o["".concat(l,"-width")]=p(e.width))),o})),E=i((()=>e.alignCenter?{display:"flex"}:{}));function N(){null==w||w(),null==h||h(),e.openDelay&&e.openDelay>0?({stop:h}=m((()=>P()),e.openDelay)):P()}function L(){null==h||h(),null==w||w(),e.closeDelay&&e.closeDelay>0?({stop:w}=m((()=>R()),e.closeDelay)):R()}function M(){e.beforeClose?e.beforeClose((function(e){e||(A.value=!0,x.value=!1)})):L()}function P(){C&&(x.value=!0)}function R(){x.value=!1}return e.lockScroll&&f(x),y((()=>e.modelValue),(l=>{l?(A.value=!1,N(),I.value=!0,O.value=b(e.zIndex)?g():O.value++,v((()=>{n("open"),o.value&&(o.value.scrollTop=0)}))):x.value&&L()})),y((()=>e.fullscreen),(e=>{o.value&&(e?(D=o.value.style.transform,o.value.style.transform=""):o.value.style.transform=D)})),B((()=>{e.modelValue&&(x.value=!0,I.value=!0,N())})),{afterEnter:function(){n("opened")},afterLeave:function(){n("closed"),n(a,!1),e.destroyOnClose&&(I.value=!1)},beforeLeave:function(){n("close")},handleClose:M,onModalClick:function(){e.closeOnClickModal&&M()},close:L,doClose:R,onOpenAutoFocus:function(){n("openAutoFocus")},onCloseAutoFocus:function(){n("closeAutoFocus")},onCloseRequested:function(){e.closeOnPressEscape&&M()},onFocusoutPrevented:function(e){var o;"pointer"===(null==(o=e.detail)?void 0:o.focusReason)&&e.preventDefault()},titleId:F,bodyId:S,closed:A,style:z,overlayDialogStyle:E,rendered:I,visible:x,zIndex:O}};export{D as a,F as b,S as c,g as d,x as u};
