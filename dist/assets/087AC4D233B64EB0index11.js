/*! 
 Build based on gin-vue-admin 
 Time : 1713878256000 */
import{_ as a,l as e,a as l,u as s,o as t,c as o,d as n,w as i,K as r,L as d,f as m,t as u,j as c,E as p,aJ as f,p as v,h as B,b}from"./087AC4D233B64EB0index.js";import{E as C}from"./087AC4D233B64EB0drawer.js";import"./087AC4D233B64EB0overlay.js";import{E as y,a as E}from"./087AC4D233B64EB0tab-pane.js";import{E as _}from"./087AC4D233B64EB0divider.js";/* empty css                      */import{a as j,s as g}from"./087AC4D233B64EB0manage.js";import"./087AC4D233B64EB0isUndefined.js";import"./087AC4D233B64EB0strings.js";const k=(a=>(v("data-v-85af01b8"),a=a(),B(),a))((()=>b("i",{class:"el-icon-bell",slot:"reference"},null,-1))),D=a(Object.assign({name:"mmsc"},{__name:"index",setup(a){const v=e(),B=l(!1),b=l("rtl"),D=l(!1),A=()=>{B.value=!1},w=()=>{B.value=!0},h=l([]),V=l(0),x=l("first"),I=s();(async()=>{const a=await j({name:v.userInfo.userName});0===a.code&&(h.value=a.data.list,V.value=a.data.total),0!==V.value&&(D.value=!0)})();return(a,e)=>{const l=p,s=f,v=_,j=y,U=E,T=C;return t(),o("div",null,[n(s,{"is-dot":D.value,class:"item"},{default:i((()=>[n(l,{type:"primary",icon:"bell",link:"",onClick:w,style:{color:"black",fontSize:"16px"}})])),_:1},8,["is-dot"]),n(T,{modelValue:B.value,"onUpdate:modelValue":e[1]||(e[1]=a=>B.value=a),title:"消息提示中心",direction:b.value,"before-close":A},{default:i((()=>[n(U,{modelValue:x.value,"onUpdate:modelValue":e[0]||(e[0]=a=>x.value=a),onTabClick:a.handleClick},{default:i((()=>[k,n(j,{label:"通知("+V.value+")",name:"first",style:{color:"#00aff0"}},{default:i((()=>[(t(!0),o(r,null,d(h.value,((a,e)=>(t(),o("div",{key:e},[n(l,{type:"primary",icon:"message",link:"",onClick:e=>(async a=>{0==(await g({id:a})).code?I.push({name:"abnormal"}).then((()=>{window.location.reload()})):c({type:"error",message:"更新信息失败",showClose:!0})})(a.ID),style:{"margin-top":"40px",padding:"0"}},{default:i((()=>[m(u(a.message_content),1)])),_:2},1032,["onClick"]),n(v,{style:{margin:"0",padding:"0"}})])))),128))])),_:1},8,["label"]),n(j,{label:"消息(0)",name:"third"},{default:i((()=>[m("未读")])),_:1}),n(j,{label:"待办(0)",name:"second"},{default:i((()=>[m("已读")])),_:1})])),_:1},8,["modelValue","onTabClick"])])),_:1},8,["modelValue","direction"])])}}}),[["__scopeId","data-v-85af01b8"]]);export{D as default};