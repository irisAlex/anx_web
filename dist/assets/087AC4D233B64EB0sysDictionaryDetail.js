/*! 
 Build based on gin-vue-admin 
 Time : 1713878256000 */
import{s as e,a,R as l,o as t,c as i,b as s,d as o,w as r,f as u,t as n,A as d,j as p,E as m,k as c}from"./087AC4D233B64EB0index.js";import{E as D}from"./087AC4D233B64EB0dialog.js";import"./087AC4D233B64EB0overlay.js";import{a as y,E as v}from"./087AC4D233B64EB0form-item.js";import{E as B}from"./087AC4D233B64EB0switch.js";import{E as f}from"./087AC4D233B64EB0input-number.js";/* empty css                     */import{E as b}from"./087AC4D233B64EB0pagination.js";import"./087AC4D233B64EB0tag.js";import"./087AC4D233B64EB0select.js";import"./087AC4D233B64EB0scrollbar.js";/* empty css                      */import{E as C,a as g}from"./087AC4D233B64EB0table-column.js";import"./087AC4D233B64EB0checkbox.js";/* empty css                       */import{E}from"./087AC4D233B64EB0popover.js";/* empty css                      */import{f as j,a as A}from"./087AC4D233B64EB0format.js";import"./087AC4D233B64EB0isUndefined.js";import"./087AC4D233B64EB0castArray.js";import"./087AC4D233B64EB0_baseClone.js";import"./087AC4D233B64EB0_Uint8Array.js";import"./087AC4D233B64EB0_initCloneObject.js";import"./087AC4D233B64EB0index28.js";import"./087AC4D233B64EB0isEqual.js";import"./087AC4D233B64EB0hasIn.js";import"./087AC4D233B64EB0index22.js";import"./087AC4D233B64EB0index23.js";import"./087AC4D233B64EB0strings.js";import"./087AC4D233B64EB0debounce.js";import"./087AC4D233B64EB0dropdown.js";import"./087AC4D233B64EB0date.js";import"./087AC4D233B64EB0dictionary.js";import"./087AC4D233B64EB0sysDictionary2.js";const w=a=>e({url:"/sysDictionaryDetail/createSysDictionaryDetail",method:"post",data:a}),h={class:"gva-table-box"},_={class:"gva-btn-list justify-between"},k=s("span",{class:"text font-bold"},"字典详细内容",-1),x=s("p",null,"确定要删除吗？",-1),V={style:{"text-align":"right","margin-top":"8px"}},I={class:"gva-pagination"},S={class:"dialog-footer"},U=Object.assign({name:"SysDictionaryDetail"},{__name:"sysDictionaryDetail",props:{sysDictionaryID:{type:Number,default:0}},setup(U){const z=U,q=a({label:null,value:null,status:!0,sort:null}),M=a({label:[{required:!0,message:"请输入展示值",trigger:"blur"}],value:[{required:!0,message:"请输入字典值",trigger:"blur"}],sort:[{required:!0,message:"排序标记",trigger:"blur"}]}),O=a(1),F=a(0),L=a(10),N=a([]),R=e=>{L.value=e,G()},T=e=>{O.value=e,G()},G=async()=>{const a=await(l={page:O.value,pageSize:L.value,sysDictionaryID:z.sysDictionaryID},e({url:"/sysDictionaryDetail/getSysDictionaryDetailList",method:"get",params:l}));var l;0===a.code&&(N.value=a.data.list,F.value=a.data.total,O.value=a.data.page,L.value=a.data.pageSize)};G();const H=a(""),J=a(!1),K=async a=>{const l=await(t={ID:a.ID},e({url:"/sysDictionaryDetail/findSysDictionaryDetail",method:"get",params:t}));var t;H.value="update",0===l.code&&(q.value=l.data.reSysDictionaryDetail,J.value=!0)},P=()=>{J.value=!1,q.value={label:null,value:null,status:!0,sort:null,sysDictionaryID:z.sysDictionaryID}},Q=async a=>{a.visible=!1;var l;0===(await(l={ID:a.ID},e({url:"/sysDictionaryDetail/deleteSysDictionaryDetail",method:"delete",data:l}))).code&&(p({type:"success",message:"删除成功"}),1===N.value.length&&O.value>1&&O.value--,G())},W=a(null),X=async()=>{W.value.validate((async a=>{if(q.value.sysDictionaryID=z.sysDictionaryID,!a)return;let l;switch(H.value){case"create":default:l=await w(q.value);break;case"update":l=await(t=q.value,e({url:"/sysDictionaryDetail/updateSysDictionaryDetail",method:"put",data:t}))}var t;0===l.code&&(p({type:"success",message:"创建/更改成功"}),P(),G())}))},Y=()=>{H.value="create",J.value=!0};return l((()=>z.sysDictionaryID),(()=>{G()})),(e,a)=>{const l=m,p=C,w=E,U=g,z=b,G=c,Z=y,$=f,ee=B,ae=v,le=D;return t(),i("div",null,[s("div",h,[s("div",_,[k,o(l,{type:"primary",icon:"plus",onClick:Y},{default:r((()=>[u("新增字典项")])),_:1})]),o(U,{ref:"multipleTable",data:N.value,style:{width:"100%"},"tooltip-effect":"dark","row-key":"ID"},{default:r((()=>[o(p,{type:"selection",width:"55"}),o(p,{align:"left",label:"日期",width:"180"},{default:r((e=>[u(n(d(j)(e.row.CreatedAt)),1)])),_:1}),o(p,{align:"left",label:"展示值",prop:"label"}),o(p,{align:"left",label:"字典值",prop:"value"}),o(p,{align:"left",label:"扩展值",prop:"extend"}),o(p,{align:"left",label:"启用状态",prop:"status",width:"120"},{default:r((e=>[u(n(d(A)(e.row.status)),1)])),_:1}),o(p,{align:"left",label:"排序标记",prop:"sort",width:"120"}),o(p,{align:"left",label:"操作",width:"180"},{default:r((e=>[o(l,{type:"primary",link:"",icon:"edit",onClick:a=>K(e.row)},{default:r((()=>[u("变更")])),_:2},1032,["onClick"]),o(w,{visible:e.row.visible,"onUpdate:visible":a=>e.row.visible=a,placement:"top",width:"160"},{reference:r((()=>[o(l,{type:"primary",link:"",icon:"delete",onClick:a=>e.row.visible=!0},{default:r((()=>[u("删除")])),_:2},1032,["onClick"])])),default:r((()=>[x,s("div",V,[o(l,{type:"primary",link:"",onClick:a=>e.row.visible=!1},{default:r((()=>[u("取消")])),_:2},1032,["onClick"]),o(l,{type:"primary",onClick:a=>Q(e.row)},{default:r((()=>[u("确定")])),_:2},1032,["onClick"])])])),_:2},1032,["visible","onUpdate:visible"])])),_:1})])),_:1},8,["data"]),s("div",I,[o(z,{"current-page":O.value,"page-size":L.value,"page-sizes":[10,30,50,100],total:F.value,layout:"total, sizes, prev, pager, next, jumper",onCurrentChange:T,onSizeChange:R},null,8,["current-page","page-size","total"])])]),o(le,{modelValue:J.value,"onUpdate:modelValue":a[5]||(a[5]=e=>J.value=e),"before-close":P,title:"create"===H.value?"添加字典项":"修改字典项"},{footer:r((()=>[s("div",S,[o(l,{onClick:P},{default:r((()=>[u("取 消")])),_:1}),o(l,{type:"primary",onClick:X},{default:r((()=>[u("确 定")])),_:1})])])),default:r((()=>[o(ae,{ref_key:"dialogForm",ref:W,model:q.value,rules:M.value,"label-width":"110px"},{default:r((()=>[o(Z,{label:"展示值",prop:"label"},{default:r((()=>[o(G,{modelValue:q.value.label,"onUpdate:modelValue":a[0]||(a[0]=e=>q.value.label=e),placeholder:"请输入展示值",clearable:"",style:{width:"100%"}},null,8,["modelValue"])])),_:1}),o(Z,{label:"字典值",prop:"value"},{default:r((()=>[o($,{modelValue:q.value.value,"onUpdate:modelValue":a[1]||(a[1]=e=>q.value.value=e),modelModifiers:{number:!0},"step-strictly":"",step:1,placeholder:"请输入字典值",clearable:"",style:{width:"100%"},min:"-2147483648",max:"2147483647"},null,8,["modelValue"])])),_:1}),o(Z,{label:"扩展值",prop:"extend"},{default:r((()=>[o(G,{modelValue:q.value.extend,"onUpdate:modelValue":a[2]||(a[2]=e=>q.value.extend=e),placeholder:"请输入扩展值",clearable:"",style:{width:"100%"}},null,8,["modelValue"])])),_:1}),o(Z,{label:"启用状态",prop:"status",required:""},{default:r((()=>[o(ee,{modelValue:q.value.status,"onUpdate:modelValue":a[3]||(a[3]=e=>q.value.status=e),"active-text":"开启","inactive-text":"停用"},null,8,["modelValue"])])),_:1}),o(Z,{label:"排序标记",prop:"sort"},{default:r((()=>[o($,{modelValue:q.value.sort,"onUpdate:modelValue":a[4]||(a[4]=e=>q.value.sort=e),modelModifiers:{number:!0},placeholder:"排序标记"},null,8,["modelValue"])])),_:1})])),_:1},8,["model","rules"])])),_:1},8,["modelValue","title"])])}}});export{U as default};