/*! 
 Build based on gin-vue-admin 
 Time : 1713878256000 */
import{s as e,a,r as l,o as t,c as o,d as s,b as i,w as m,f as d,j as u,k as n,E as r}from"./087AC4D233B64EB0index.js";import{a as c,E as B}from"./087AC4D233B64EB0form-item.js";/* empty css                      *//* empty css                     */import{_ as p}from"./087AC4D233B64EB0warningBar.js";import"./087AC4D233B64EB0castArray.js";import"./087AC4D233B64EB0_baseClone.js";import"./087AC4D233B64EB0_Uint8Array.js";import"./087AC4D233B64EB0_initCloneObject.js";/* empty css                     */const b=a=>e({url:"/email/emailTest",method:"post",data:a}),f={class:"gva-form-box"},j=Object.assign({name:"Email"},{__name:"index",setup(e){const j=a(null),C=l({to:"",subject:"",body:""}),_=async()=>{0===(await b()).code&&u.success("发送成功")},E=async()=>{0===(await b()).code&&u.success("发送成功,请查收")};return(e,a)=>{const l=n,u=c,b=r,A=B;return t(),o("div",null,[s(p,{title:"需要提前配置email配置文件，为防止不必要的垃圾邮件，在线体验功能不开放此功能体验。"}),i("div",f,[s(A,{ref_key:"emailForm",ref:j,"label-position":"right","label-width":"80px",model:C},{default:m((()=>[s(u,{label:"目标邮箱"},{default:m((()=>[s(l,{modelValue:C.to,"onUpdate:modelValue":a[0]||(a[0]=e=>C.to=e)},null,8,["modelValue"])])),_:1}),s(u,{label:"邮件"},{default:m((()=>[s(l,{modelValue:C.subject,"onUpdate:modelValue":a[1]||(a[1]=e=>C.subject=e)},null,8,["modelValue"])])),_:1}),s(u,{label:"邮件内容"},{default:m((()=>[s(l,{modelValue:C.body,"onUpdate:modelValue":a[2]||(a[2]=e=>C.body=e),type:"textarea"},null,8,["modelValue"])])),_:1}),s(u,null,{default:m((()=>[s(b,{onClick:_},{default:m((()=>[d("发送测试邮件")])),_:1}),s(b,{onClick:E},{default:m((()=>[d("发送邮件")])),_:1})])),_:1})])),_:1},8,["model"])])])}}});export{j as default};
