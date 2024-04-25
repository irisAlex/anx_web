/*! 
 Build based on gin-vue-admin 
 Time : 1713878256000 */
import{b8 as e,aY as a,C as t,a3 as l,aC as n,ba as s,x as o,ch as i,ci as r,cj as c,D as u,y as d,bv as v,a as f,ck as m,P as p,F as g,R as y,N as b,M as w,o as k,g as h,d as x,w as z,b as C,n as I,A as S,I as _,aj as N,e as O,W as A,bA as E,c as T,K as B,cf as L,ay as R,cl as Y,cm as X,Z as j,cn as D,co as M,L as F,T as $,U as P,H as W,V as H,bx as V,B as q,ab as K,a8 as Z,cp as G,J,cq as U,cr as Q,t as ee,ai as ae,bu as te,aA as le,cs as ne,ct as se}from"./087AC4D233B64EB0index.js";import{d as oe}from"./087AC4D233B64EB0debounce.js";function ie(e,t,l){var n=!0,s=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return a(l)&&(n="leading"in l?!!l.leading:n,s="trailing"in l?!!l.trailing:s),oe(e,t,{leading:n,maxWait:t,trailing:s})}const re=t({urlList:{type:l(Array),default:()=>n([])},zIndex:{type:Number},initialIndex:{type:Number,default:0},infinite:{type:Boolean,default:!0},hideOnClickModal:Boolean,teleported:Boolean,closeOnPressEscape:{type:Boolean,default:!0},zoomRate:{type:Number,default:1.2},minScale:{type:Number,default:.2},maxScale:{type:Number,default:7},crossorigin:{type:l(String)}}),ce={close:()=>!0,switch:e=>s(e),rotate:e=>s(e)},ue=["src","crossorigin"],de=o({name:"ElImageViewer"});const ve=J(q(o({...de,props:re,emits:ce,setup(e,{expose:a,emit:t}){var l;const n=e,s={CONTAIN:{name:"contain",icon:i(r)},ORIGINAL:{name:"original",icon:i(c)}},{t:o}=u(),q=d("image-viewer"),{nextZIndex:J}=v(),U=f(),Q=f([]),ee=m(),ae=f(!0),te=f(n.initialIndex),le=p(s.CONTAIN),ne=f({scale:1,deg:0,offsetX:0,offsetY:0,enableTransition:!1}),se=f(null!=(l=n.zIndex)?l:J()),oe=g((()=>{const{urlList:e}=n;return e.length<=1})),re=g((()=>0===te.value)),ce=g((()=>te.value===n.urlList.length-1)),de=g((()=>n.urlList[te.value])),ve=g((()=>[q.e("btn"),q.e("prev"),q.is("disabled",!n.infinite&&re.value)])),fe=g((()=>[q.e("btn"),q.e("next"),q.is("disabled",!n.infinite&&ce.value)])),me=g((()=>{const{scale:e,deg:a,offsetX:t,offsetY:l,enableTransition:n}=ne.value;let o=t/e,i=l/e;switch(a%360){case 90:case-270:[o,i]=[i,-o];break;case 180:case-180:[o,i]=[-o,-i];break;case 270:case-90:[o,i]=[-i,o]}const r={transform:"scale(".concat(e,") rotate(").concat(a,"deg) translate(").concat(o,"px, ").concat(i,"px)"),transition:n?"transform .3s":""};return le.value.name===s.CONTAIN.name&&(r.maxWidth=r.maxHeight="100%"),r}));function pe(){ee.stop(),t("close")}function ge(){ae.value=!1}function ye(e){ae.value=!1,e.target.alt=o("el.image.error")}function be(e){if(ae.value||0!==e.button||!U.value)return;ne.value.enableTransition=!1;const{offsetX:a,offsetY:t}=ne.value,l=e.pageX,n=e.pageY,s=ie((e=>{ne.value={...ne.value,offsetX:a+e.pageX-l,offsetY:t+e.pageY-n}})),o=K(document,"mousemove",s);K(document,"mouseup",(()=>{o()})),e.preventDefault()}function we(){ne.value={scale:1,deg:0,offsetX:0,offsetY:0,enableTransition:!1}}function ke(){if(ae.value)return;const e=G(s),a=Object.values(s),t=le.value.name,l=(a.findIndex((e=>e.name===t))+1)%e.length;le.value=s[e[l]],we()}function he(e){const a=n.urlList.length;te.value=(e+a)%a}function xe(){re.value&&!n.infinite||he(te.value-1)}function ze(){ce.value&&!n.infinite||he(te.value+1)}function Ce(e,a={}){if(ae.value)return;const{minScale:l,maxScale:s}=n,{zoomRate:o,rotateDeg:i,enableTransition:r}={zoomRate:n.zoomRate,rotateDeg:90,enableTransition:!0,...a};switch(e){case"zoomOut":ne.value.scale>l&&(ne.value.scale=Number.parseFloat((ne.value.scale/o).toFixed(3)));break;case"zoomIn":ne.value.scale<s&&(ne.value.scale=Number.parseFloat((ne.value.scale*o).toFixed(3)));break;case"clockwise":ne.value.deg+=i,t("rotate",ne.value.deg);break;case"anticlockwise":ne.value.deg-=i,t("rotate",ne.value.deg)}ne.value.enableTransition=r}return y(de,(()=>{b((()=>{const e=Q.value[0];(null==e?void 0:e.complete)||(ae.value=!0)}))})),y(te,(e=>{we(),t("switch",e)})),w((()=>{var e,a;!function(){const e=ie((e=>{switch(e.code){case Z.esc:n.closeOnPressEscape&&pe();break;case Z.space:ke();break;case Z.left:xe();break;case Z.up:Ce("zoomIn");break;case Z.right:ze();break;case Z.down:Ce("zoomOut")}})),a=ie((e=>{Ce((e.deltaY||e.deltaX)<0?"zoomIn":"zoomOut",{zoomRate:n.zoomRate,enableTransition:!1})}));ee.run((()=>{K(document,"keydown",e),K(document,"wheel",a)}))}(),null==(a=null==(e=U.value)?void 0:e.focus)||a.call(e)})),a({setActiveItem:he}),(e,a)=>(k(),h(V,{to:"body",disabled:!e.teleported},[x(H,{name:"viewer-fade",appear:""},{default:z((()=>[C("div",{ref_key:"wrapper",ref:U,tabindex:-1,class:I(S(q).e("wrapper")),style:_({zIndex:se.value})},[C("div",{class:I(S(q).e("mask")),onClick:a[0]||(a[0]=N((a=>e.hideOnClickModal&&pe()),["self"]))},null,2),O(" CLOSE "),C("span",{class:I([S(q).e("btn"),S(q).e("close")]),onClick:pe},[x(S(A),null,{default:z((()=>[x(S(E))])),_:1})],2),O(" ARROW "),S(oe)?O("v-if",!0):(k(),T(B,{key:0},[C("span",{class:I(S(ve)),onClick:xe},[x(S(A),null,{default:z((()=>[x(S(L))])),_:1})],2),C("span",{class:I(S(fe)),onClick:ze},[x(S(A),null,{default:z((()=>[x(S(R))])),_:1})],2)],64)),O(" ACTIONS "),C("div",{class:I([S(q).e("btn"),S(q).e("actions")])},[C("div",{class:I(S(q).e("actions__inner"))},[x(S(A),{onClick:a[1]||(a[1]=e=>Ce("zoomOut"))},{default:z((()=>[x(S(Y))])),_:1}),x(S(A),{onClick:a[2]||(a[2]=e=>Ce("zoomIn"))},{default:z((()=>[x(S(X))])),_:1}),C("i",{class:I(S(q).e("actions__divider"))},null,2),x(S(A),{onClick:ke},{default:z((()=>[(k(),h(j(S(le).icon)))])),_:1}),C("i",{class:I(S(q).e("actions__divider"))},null,2),x(S(A),{onClick:a[3]||(a[3]=e=>Ce("anticlockwise"))},{default:z((()=>[x(S(D))])),_:1}),x(S(A),{onClick:a[4]||(a[4]=e=>Ce("clockwise"))},{default:z((()=>[x(S(M))])),_:1})],2)],2),O(" CANVAS "),C("div",{class:I(S(q).e("canvas"))},[(k(!0),T(B,null,F(e.urlList,((a,t)=>$((k(),T("img",{ref_for:!0,ref:e=>Q.value[t]=e,key:a,src:a,style:_(S(me)),class:I(S(q).e("img")),crossorigin:e.crossorigin,onLoad:ge,onError:ye,onMousedown:be},null,46,ue)),[[P,t===te.value]]))),128))],2),W(e.$slots,"default")],6)])),_:3})],8,["disabled"]))}}),[["__file","image-viewer.vue"]])),fe=t({hideOnClickModal:Boolean,src:{type:String,default:""},fit:{type:String,values:["","contain","cover","fill","none","scale-down"],default:""},loading:{type:String,values:["eager","lazy"]},lazy:Boolean,scrollContainer:{type:l([String,Object])},previewSrcList:{type:l(Array),default:()=>n([])},previewTeleported:Boolean,zIndex:{type:Number},initialIndex:{type:Number,default:0},infinite:{type:Boolean,default:!0},closeOnPressEscape:{type:Boolean,default:!0},zoomRate:{type:Number,default:1.2},minScale:{type:Number,default:.2},maxScale:{type:Number,default:7},crossorigin:{type:l(String)}}),me={load:e=>e instanceof Event,error:e=>e instanceof Event,switch:e=>s(e),close:()=>!0,show:()=>!0},pe=["src","loading","crossorigin"],ge={key:0},ye=o({name:"ElImage",inheritAttrs:!1});const be=J(q(o({...ye,props:fe,emits:me,setup(a,{emit:t}){const l=a;let n="";const{t:s}=u(),o=d("image"),i=U(),r=Q(),c=f(),v=f(!1),m=f(!0),p=f(!1),x=f(),N=f(),A=e&&"loading"in HTMLImageElement.prototype;let E,L;const R=g((()=>[o.e("inner"),j.value&&o.e("preview"),m.value&&o.is("loading")])),Y=g((()=>i.style)),X=g((()=>{const{fit:a}=l;return e&&a?{objectFit:a}:{}})),j=g((()=>{const{previewSrcList:e}=l;return Array.isArray(e)&&e.length>0})),D=g((()=>{const{previewSrcList:e,initialIndex:a}=l;let t=a;return a>e.length-1&&(t=0),t})),M=g((()=>"eager"!==l.loading&&(!A&&"lazy"===l.loading||l.lazy))),F=()=>{e&&(m.value=!0,v.value=!1,c.value=l.src)};function $(e){m.value=!1,v.value=!1,t("load",e)}function P(e){m.value=!1,v.value=!0,t("error",e)}function H(){((a,t)=>{if(!e||!a||!t)return!1;const l=a.getBoundingClientRect();let n;return n=t instanceof Element?t.getBoundingClientRect():{top:0,right:window.innerWidth,bottom:window.innerHeight,left:0},l.top<n.bottom&&l.bottom>n.top&&l.right>n.left&&l.left<n.right})(x.value,N.value)&&(F(),Z())}const V=se(H,200,!0);async function q(){var a;if(!e)return;await b();const{scrollContainer:t}=l;te(t)?N.value=t:le(t)&&""!==t?N.value=null!=(a=document.querySelector(t))?a:void 0:x.value&&(N.value=ne(x.value)),N.value&&(E=K(N,"scroll",V),setTimeout((()=>H()),100))}function Z(){e&&N.value&&V&&(null==E||E(),N.value=void 0)}function G(e){if(e.ctrlKey)return e.deltaY<0||e.deltaY>0?(e.preventDefault(),!1):void 0}function J(){j.value&&(L=K("wheel",G,{passive:!1}),n=document.body.style.overflow,document.body.style.overflow="hidden",p.value=!0,t("show"))}function oe(){null==L||L(),document.body.style.overflow=n,p.value=!1,t("close")}function ie(e){t("switch",e)}return y((()=>l.src),(()=>{M.value?(m.value=!0,v.value=!1,Z(),q()):F()})),w((()=>{M.value?q():F()})),(e,a)=>(k(),T("div",{ref_key:"container",ref:x,class:I([S(o).b(),e.$attrs.class]),style:_(S(Y))},[v.value?W(e.$slots,"error",{key:0},(()=>[C("div",{class:I(S(o).e("error"))},ee(S(s)("el.image.error")),3)])):(k(),T(B,{key:1},[void 0!==c.value?(k(),T("img",ae({key:0},S(r),{src:c.value,loading:e.loading,style:S(X),class:S(R),crossorigin:e.crossorigin,onClick:J,onLoad:$,onError:P}),null,16,pe)):O("v-if",!0),m.value?(k(),T("div",{key:1,class:I(S(o).e("wrapper"))},[W(e.$slots,"placeholder",{},(()=>[C("div",{class:I(S(o).e("placeholder"))},null,2)]))],2)):O("v-if",!0)],64)),S(j)?(k(),T(B,{key:2},[p.value?(k(),h(S(ve),{key:0,"z-index":e.zIndex,"initial-index":S(D),infinite:e.infinite,"zoom-rate":e.zoomRate,"min-scale":e.minScale,"max-scale":e.maxScale,"url-list":e.previewSrcList,"hide-on-click-modal":e.hideOnClickModal,teleported:e.previewTeleported,"close-on-press-escape":e.closeOnPressEscape,onClose:oe,onSwitch:ie},{default:z((()=>[e.$slots.viewer?(k(),T("div",ge,[W(e.$slots,"viewer")])):O("v-if",!0)])),_:3},8,["z-index","initial-index","infinite","zoom-rate","min-scale","max-scale","url-list","hide-on-click-modal","teleported","close-on-press-escape"])):O("v-if",!0)],64)):O("v-if",!0)],6))}}),[["__file","image.vue"]]));export{be as E};
