/*! 
 Build based on gin-vue-admin 
 Time : 1713878256000 */
import{_ as a,a as e,T as t,o,c as i,b as l,d as s,w as n,f as r,t as p,A as m,$ as c,j as u,k as d,E as B,a0 as g}from"./087AC4D233B64EB0index.js";/* empty css                       */import{E as C}from"./087AC4D233B64EB0pagination.js";/* empty css                     */import"./087AC4D233B64EB0tag.js";import"./087AC4D233B64EB0select.js";import"./087AC4D233B64EB0scrollbar.js";/* empty css                      */import{E as v,a as f}from"./087AC4D233B64EB0table-column.js";import"./087AC4D233B64EB0checkbox.js";/* empty css                       *//* empty css                      */import{_ as E,U as j,g as A,d as D,e as w}from"./087AC4D233B64EB0common.js";import{C as h}from"./087AC4D233B64EB0index25.js";import{f as y}from"./087AC4D233B64EB0format.js";import{_ as b}from"./087AC4D233B64EB0warningBar.js";import{E as _}from"./087AC4D233B64EB0index23.js";import"./087AC4D233B64EB0isEqual.js";import"./087AC4D233B64EB0_Uint8Array.js";import"./087AC4D233B64EB0hasIn.js";import"./087AC4D233B64EB0index22.js";import"./087AC4D233B64EB0isUndefined.js";import"./087AC4D233B64EB0strings.js";import"./087AC4D233B64EB0debounce.js";import"./087AC4D233B64EB0_initCloneObject.js";import"./087AC4D233B64EB0upload2.js";import"./087AC4D233B64EB0progress.js";import"./087AC4D233B64EB0cloneDeep.js";import"./087AC4D233B64EB0_baseClone.js";import"./087AC4D233B64EB0image-viewer.js";import"./087AC4D233B64EB0date.js";import"./087AC4D233B64EB0dictionary.js";import"./087AC4D233B64EB0sysDictionary2.js";/* empty css                     */const x=(a,e)=>{var t=new Image;t.setAttribute("crossOrigin","anonymous"),t.onload=function(){var a=document.createElement("canvas");a.width=t.width,a.height=t.height,a.getContext("2d").drawImage(t,0,0,t.width,t.height);var o=a.toDataURL("image/png"),i=document.createElement("a"),l=new MouseEvent("click");i.download=e||"photo",i.href=o,i.dispatchEvent(l)},t.src=a},k={class:"gva-table-box"},U={class:"gva-btn-list"},z=["onClick"],O={class:"gva-pagination"},S=a(Object.assign({name:"Upload"},{__name:"upload",setup(a){const S=e("/api"),T=e(""),I=e(""),V=e(1),L=e(0),M=e(10),q=e({}),P=e([]),R=a=>{M.value=a,F()},$=a=>{V.value=a,F()},F=async()=>{const a=await A({page:V.value,pageSize:M.value,...q.value});0===a.code&&(P.value=a.data.list,L.value=a.data.total,V.value=a.data.page,M.value=a.data.pageSize)};F();return(a,e)=>{const A=d,G=B,H=v,J=_,K=f,N=C,Q=g;return t((o(),i("div",null,[l("div",k,[s(b,{title:"点击“文件名/备注”可以编辑文件名或者备注内容。"}),l("div",U,[s(E,{imageCommon:I.value,"onUpdate:imageCommon":e[0]||(e[0]=a=>I.value=a),onOnSuccess:F},null,8,["imageCommon"]),s(j,{imageUrl:T.value,"onUpdate:imageUrl":e[1]||(e[1]=a=>T.value=a),"file-size":512,"max-w-h":1080,onOnSuccess:F},null,8,["imageUrl"]),s(A,{modelValue:q.value.keyword,"onUpdate:modelValue":e[2]||(e[2]=a=>q.value.keyword=a),class:"keyword",placeholder:"请输入文件名或备注"},null,8,["modelValue"]),s(G,{type:"primary",icon:"search",onClick:F},{default:n((()=>[r("查询")])),_:1})]),s(K,{data:P.value},{default:n((()=>[s(H,{align:"left",label:"预览",width:"100"},{default:n((a=>[s(h,{"pic-type":"file","pic-src":a.row.url,preview:""},null,8,["pic-src"])])),_:1}),s(H,{align:"left",label:"日期",prop:"UpdatedAt",width:"180"},{default:n((a=>[l("div",null,p(m(y)(a.row.UpdatedAt)),1)])),_:1}),s(H,{align:"left",label:"文件名/备注",prop:"name",width:"180"},{default:n((a=>[l("div",{class:"name",onClick:e=>(async a=>{c.prompt("请输入文件名或者备注","编辑",{confirmButtonText:"确定",cancelButtonText:"取消",inputPattern:/\S/,inputErrorMessage:"不能为空",inputValue:a.name}).then((async({value:e})=>{a.name=e,0===(await w(a)).code&&(u({type:"success",message:"编辑成功!"}),F())})).catch((()=>{u({type:"info",message:"取消修改"})}))})(a.row)},p(a.row.name),9,z)])),_:1}),s(H,{align:"left",label:"链接",prop:"url","min-width":"300"}),s(H,{align:"left",label:"标签",prop:"tag",width:"100"},{default:n((a=>[s(J,{type:"jpg"===a.row.tag?"info":"success","disable-transitions":""},{default:n((()=>[r(p(a.row.tag),1)])),_:2},1032,["type"])])),_:1}),s(H,{align:"left",label:"操作",width:"160"},{default:n((a=>[s(G,{icon:"download",type:"primary",link:"",onClick:e=>{var t;(t=a.row).url.indexOf("http://")>-1||t.url.indexOf("https://")>-1?x(t.url,t.name):x(S.value+"/"+t.url,t.name)}},{default:n((()=>[r("下载")])),_:2},1032,["onClick"]),s(G,{icon:"delete",type:"primary",link:"",onClick:e=>(async a=>{c.confirm("此操作将永久删除文件, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((async()=>{0===(await D(a)).code&&(u({type:"success",message:"删除成功!"}),1===P.value.length&&V.value>1&&V.value--,F())})).catch((()=>{u({type:"info",message:"已取消删除"})}))})(a.row)},{default:n((()=>[r("删除")])),_:2},1032,["onClick"])])),_:1})])),_:1},8,["data"]),l("div",O,[s(N,{"current-page":V.value,"page-size":M.value,"page-sizes":[10,30,50,100],style:{float:"right",padding:"20px"},total:L.value,layout:"total, sizes, prev, pager, next, jumper",onCurrentChange:$,onSizeChange:R},null,8,["current-page","page-size","total"])])])])),[[Q,a.fullscreenLoading,void 0,{fullscreen:!0,lock:!0}]])}}}),[["__scopeId","data-v-769ac195"]]);export{S as default};