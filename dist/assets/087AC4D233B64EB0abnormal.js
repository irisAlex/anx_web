/*! 
 Build based on gin-vue-admin 
 Time : 1713878256000 */
import{_ as e,l,a,r as t,R as u,S as o,o as r,c as d,b as n,d as s,w as i,K as p,L as m,g as c,f as v,t as _,A as h,e as y,T as b,U as f,j as w,$ as k,k as g,E as V,W as C,p as B,h as j}from"./087AC4D233B64EB0index.js";import{E as D}from"./087AC4D233B64EB0dialog.js";import"./087AC4D233B64EB0overlay.js";/* empty css                     */import{E as U}from"./087AC4D233B64EB0switch.js";import{E}from"./087AC4D233B64EB0upload2.js";import"./087AC4D233B64EB0progress.js";import{E as A}from"./087AC4D233B64EB0image-viewer.js";import{E as x}from"./087AC4D233B64EB0pagination.js";/* empty css                     */import"./087AC4D233B64EB0tag.js";import{E as z,a as N}from"./087AC4D233B64EB0select.js";import"./087AC4D233B64EB0scrollbar.js";/* empty css                      */import{E as S,a as O}from"./087AC4D233B64EB0table-column.js";import"./087AC4D233B64EB0checkbox.js";/* empty css                       */import{a as T,E as Y}from"./087AC4D233B64EB0form-item.js";/* empty css                      */import{E as I}from"./087AC4D233B64EB0date-picker.js";import{h as q,c as M,d as Z,e as J,f as R,g as F,b as K,i as G,j as L,k as P,l as Q,u as W,m as $,n as H,o as X}from"./087AC4D233B64EB0manage.js";import{f as ee,t as le}from"./087AC4D233B64EB0stringFun.js";import{Q as ae}from"./087AC4D233B64EB0vue-quill.snow.js";import{E as te}from"./087AC4D233B64EB0index22.js";import{E as ue,a as oe}from"./087AC4D233B64EB0index29.js";import"./087AC4D233B64EB0isUndefined.js";import"./087AC4D233B64EB0cloneDeep.js";import"./087AC4D233B64EB0_baseClone.js";import"./087AC4D233B64EB0_Uint8Array.js";import"./087AC4D233B64EB0_initCloneObject.js";import"./087AC4D233B64EB0isEqual.js";import"./087AC4D233B64EB0debounce.js";import"./087AC4D233B64EB0hasIn.js";import"./087AC4D233B64EB0index23.js";import"./087AC4D233B64EB0strings.js";import"./087AC4D233B64EB0castArray.js";import"./087AC4D233B64EB0arrays.js";import"./087AC4D233B64EB0index28.js";const re=e=>(B("data-v-300cba19"),e=e(),j(),e),de={class:"gva-search-box"},ne={class:"gva-table-box"},se={class:"gva-btn-list"},ie=re((()=>n("i",{class:"el-icon-time"},null,-1))),pe={style:{"margin-left":"10px"}},me=re((()=>n("i",{class:"el-icon-time"},null,-1))),ce={style:{"margin-left":"10px"}},ve={class:"gva-pagination"},_e={key:0},he={key:1},ye=re((()=>n("div",{slot:"tip",class:"el-upload__tip"},"只能上传jpg/png文件，且不超过500kb",-1))),be={key:1},fe={key:2},we={key:3},ke=re((()=>n("div",{slot:"tip",class:"el-upload__tip"},"只能上传jpg/png文件，且不超过500kb",-1))),ge={key:4},Ve=re((()=>n("div",{slot:"tip",class:"el-upload__tip"},"只能上传jpg/png文件，且不超过500kb",-1))),Ce={key:5},Be={class:"dialog-footer"},je=e(Object.assign({name:"Api"},{__name:"abnormal",setup(e){const B=l(),j=a("提交"),re=a(),je=t({modules:{toolbar:[["bold","italic","underline","strike"],[{header:1},{header:2}],[{list:"ordered"},{list:"bullet"}],[{script:"sub"},{script:"super"}],[{indent:"-1"},{indent:"+1"}],[{direction:"rtl"}],[{size:["small",!1,"large","huge"]}],[{header:[1,2,3,4,5,6,!1]}],[{color:[]},{background:[]}],[{font:[]}],[{align:[]}],["clean"]]}}),De="https://demo.gin-vue-admin.com:8888/",Ue=a(!0),Ee=a(!1),Ae=a(!0),xe=a(!1),ze=a(!1),Ne=a(!1),Se=a(!1),Oe=a(!0),Te=a([]),Ye=a([]),Ie=a([]),qe=a([]),Me=a([]),Ze=a([]),Je=a([]),Re=a([]),Fe=a({serialnumber:"",department:"",mold:"",category:"",project:"",checkout_name:"",checkout_number:"",graph_number:"",version_number:"",purchase_order:"",production_order:"",delivery_order:"",packages_number:"",reject_packages_number:"",sample_checkout_number:"",reject_sample_checkout_number:"",supplier:"",checkout_date:"",describe:"",photograph:"",process_mode:"",duty_department:"",cause_desc:"",fill_from_date:"",disposal_concept:"",rework_number:0,rework_man_hour:0,rework_quantities:"",rework_process:"",rework_plan_date:"0001-01-01T00:00:00Z",rework_desc:"",rework_attachment:"",repair_plan_date:"0001-01-01T00:00:00Z",repair_desc:"",repair_attachment:"",parts_desc:"",series:"",operation_type:"",pass_date:"0001-01-01T00:00:00Z",area:"",find_addr:"",find_process:"",defect_problem:"",station:"",status:"",is_ncr:!1,authority_id:0,departments:""}),Ke=a(!1),Ge=a(!1);u((()=>Ke.value),(()=>{Ke.value?Ge.value=!0:Ge.value=!1})),u((()=>Fe.value.operation_type),(()=>{switch(Ue.value=!0,Ee.value=!0,xe.value=!1,ze.value=!1,Ne.value=!1,Fe.value.operation_type){case"返工":kl.value="创建/修改返工订单",xe.value=!0,Ae.value=!1,$e.value="rework";break;case"返修":kl.value="创建/修改返修订单",ze.value=!0,Ae.value=!1,$e.value="repair";break;case"配做":kl.value="创建/修改配做订单",Ne.value=!0,Ae.value=!1,$e.value="parts"}})),u((()=>Fe.value.rework_plan_date),(()=>{"0001-01-01T00:00:00Z"===Fe.value.rework_plan_date&&(Fe.value.rework_plan_date="")}));const Le=a([]),Pe=()=>{Le.value.push({product_serialnumber:null,product_name:null,w_serialnumber:null,w_name:null})},Qe=a([{value:"Just Do it",label:"Just Do it",type:"success"},{value:"A3",label:"A3",type:""},{value:"8D",label:"8D",type:"warning"}]),We=a([{value:"内部",label:"内部",type:"success"},{value:"外部",label:"外部",type:""},{value:"配做",label:"配做",type:"warning"}]),$e=a(""),He=a({path:[{required:!0,message:"请输入api路径",trigger:"blur"}],apiGroup:[{required:!0,message:"请输入组名称",trigger:"blur"}],method:[{required:!0,message:"请选择请求方式",trigger:"blur"}],description:[{required:!0,message:"请输入api介绍",trigger:"blur"}]}),Xe=a(1),el=a(0),ll=a(10),al=a([]),tl=a({}),ul=()=>{tl.value={}},ol=e=>{if(0===e.code)return w({type:"success",message:"图片上传成功",showClose:!0}),Ze.value.push({name:e.data.file.name,url:e.data.file.url}),void(Fe.value.photograph=JSON.stringify(Ze.value));w({type:"error",message:"图片上传失败",showClose:!0})},rl=(e,l)=>{const a=l.indexOf(e);-1!==a&&l.splice(a,1),Fe.value.photograph=JSON.stringify(l.value)},dl=e=>{if(0===e.code)return w({type:"success",message:"图片上传成功",showClose:!0}),Je.value.push({name:e.data.file.name,url:e.data.file.url}),void(Fe.value.rework_attachment=JSON.stringify(Je.value));w({type:"error",message:"图片上传失败",showClose:!0})},nl=(e,l)=>{const a=l.indexOf(e);-1!==a&&Ze.splice(a,1),Fe.value.rework_attachment=JSON.stringify(l.value)},sl=e=>{if(0===e.code)return w({type:"success",message:"图片上传成功",showClose:!0}),Re.value.push({name:e.data.file.name,url:e.data.file.url}),void(Fe.value.repair_attachment=JSON.stringify(Re.value));w({type:"error",message:"图片上传失败",showClose:!0})},il=(e,l)=>{const a=l.indexOf(e);-1!==a&&l.splice(a,1),Fe.value.repair_attachment=JSON.stringify(l.value)},pl=()=>{Xe.value=1,ll.value=10,bl()},ml=e=>{ll.value=e,bl()},cl=e=>{Xe.value=e,bl()},vl=({prop:e,order:l})=>{e&&("ID"===e&&(e="id"),tl.value.orderKey=le(e),tl.value.desc="descending"===l),bl()},_l=a([]),hl=a(""),yl=a("");(async()=>{const e=await M({page:Xe.value,pageSize:ll.value,...tl.value});0===e.code&&(Ye.value=e.data.list)})();(async()=>{const e=await Z({page:Xe.value,pageSize:ll.value,...tl.value});0===e.code&&(Ie.value=e.data.list)})();(async()=>{const e=await J({page:Xe.value,pageSize:ll.value,...tl.value});0===e.code&&(qe.value=e.data.list)})();(async()=>{const e=await R({page:Xe.value,pageSize:ll.value,...tl.value});0===e.code&&(Me.value=e.data.list)})();const bl=async()=>{const e=await F({page:Xe.value,pageSize:ll.value,orderKey:"id",desc:!0,...tl.value});0===e.code&&(al.value=e.data.list,el.value=e.data.total,Xe.value=e.data.page,ll.value=e.data.pageSize)};bl();const fl=e=>{Te.value=e};a(!1);const wl=a(null),kl=a("创建NCR"),gl=a(!1),Vl=e=>{switch(Ue.value=!0,Ee.value=!0,xe.value=!1,ze.value=!1,Ne.value=!1,e){case"addApi":kl.value="异常发现",Ee.value=!1,Oe.value=!1;break;case"edit":kl.value="编辑异常",Ee.value=!1;break;case"report":kl.value="填写工单",Ee.value=!0,Oe.value=!1,Se.value=!0,Ue.value=!0,Ae.value=!1,"返工"==Fe.value.operation_type&&(xe.value=!0),"返修"==Fe.value.operation_type&&(ze.value=!0),"配做"==Fe.value.operation_type&&(Ne.value=!0);break;case"check":kl.value="查看NCR",Ue.value=!1,Ee.value=!0,Oe.value=!1,Ae.value=!1;break;case"createNcr":j.value="保存草稿",kl.value="创建NCR",Ae.value=!1,Ue.value=!0,Se.value=!0,Ee.value=!0,Oe.value=!0,"返工"==Fe.value.operation_type&&(xe.value=!0),"返修"==Fe.value.operation_type&&(ze.value=!0),"配做"==Fe.value.operation_type&&(Ne.value=!0)}$e.value=e,gl.value=!0},Cl=()=>{wl.value.resetFields(),Fe.value={serialnumber:"",department:"",mold:"",category:"",project:"",checkout_name:"",checkout_number:"",graph_number:"",version_number:"",purchase_order:"",production_order:"",delivery_order:"",packages_number:"",reject_packages_number:"",sample_checkout_number:"",reject_sample_checkout_number:"",supplier:"",checkout_date:"",describe:"",photograph:"",process_mode:"",duty_department:"",cause_desc:"",fill_from_date:"",disposal_concept:"",rework_number:0,rework_man_hour:0,rework_quantities:"",rework_process:"",rework_plan_date:"0001-01-01T00:00:00Z",rework_desc:"",rework_attachment:"",repair_plan_date:"0001-01-01T00:00:00Z",repair_desc:"",repair_attachment:"",parts_desc:"",series:"",operation_type:"",area:"",find_addr:"",find_process:"",defect_problem:"",station:"",status:"",is_ncr:!1},Ze.value=[],Je.value=[],Re.value=[],Le.value=[],Ae.value=!0,Ee.value=!1,xe.value=!1,ze.value=!1,Ne.value=!1,Se.value=!1,gl.value=!1},Bl=a(),jl=async(e,l)=>{const a=await K({id:e.ID});if(Fe.value=a.data.manage,""!==Fe.value.photograph&&(Ze.value=JSON.parse(Fe.value.photograph),Bl.value=Ze.value),""!==Fe.value.rework_attachment&&(Je.value=JSON.parse(Fe.value.rework_attachment)),""!==Fe.value.repair_attachment&&(Re.value=JSON.parse(Fe.value.repair_attachment)),""!==Fe.value.series&&(Le.value=JSON.parse(Fe.value.series)),"report"===l){if(0!==(await G({ncr_id:e.ID,reportname:B.userInfo.userName})).code)return}"0001-01-01T00:00:00Z"===Fe.value.rework_plan_date&&(Fe.value.rework_plan_date=""),"0001-01-01T00:00:00Z"===Fe.value.repair_plan_date&&(Fe.value.repair_plan_date=""),Vl(l)},Dl=async e=>{0===(await Q({id:Fe.value.ID})).code&&w({type:"success",message:"NCR创建成功",showClose:!0}),bl(),Cl()},Ul=async()=>{wl.value.validate((async e=>{if(null!==Le.value&&(Fe.value.series=JSON.stringify(Le.value)),""===Fe.value.rework_plan_date&&(Fe.value.rework_plan_date="0001-01-01T00:00:00Z"),""===Fe.value.repair_plan_date&&(Fe.value.repair_plan_date="0001-01-01T00:00:00Z"),Ge.value&&(async e=>{console.log(yl.value);for(let l of yl.value){console.log(l);const a=await X({message_type:"1",message_link:"",message_is_active:!0,message_receive_name:l,message_content:"有新通知请处理",ncr_id:e});console.log(a)}})(Fe.value.ID),e)switch($e.value){case"addApi":0===(await $(Fe.value)).code&&w({type:"success",message:"添加成功",showClose:!0}),bl(),Cl();break;case"edit":case"rework":case"repair":case"createNcr":case"parts":0===(await W(Fe.value)).code&&w({type:"success",message:"草稿提交成功",showClose:!0}),bl(),Cl();break;default:w({type:"error",message:"未知操作",showClose:!0})}}))};return(e,l)=>{const a=z,t=N,u=T,B=g,M=I,Z=V,J=Y,R=S,F=te,K=O,G=x,Q=A,W=E,$=U,X=ue,le=oe,Te=o("CirclePlusFilled"),$e=C,El=D;return r(),d("div",null,[n("div",de,[s(J,{ref:"searchForm",inline:!0,model:tl.value},{default:i((()=>[s(u,{label:"部门",style:{width:"200px"},prop:"method"},{default:i((()=>[s(t,{modelValue:tl.value.department,"onUpdate:modelValue":l[0]||(l[0]=e=>tl.value.department=e),placeholder:"选择部门"},{default:i((()=>[(r(!0),d(p,null,m(Ye.value,(e=>(r(),c(a,{key:e.authorityId,label:e.authorityName,value:e.authorityName},null,8,["label","value"])))),128))])),_:1},8,["modelValue"])])),_:1}),s(u,{label:"类型",style:{width:"200px"},prop:"method"},{default:i((()=>[s(t,{modelValue:tl.value.mold,"onUpdate:modelValue":l[1]||(l[1]=e=>tl.value.mold=e),placeholder:"请选择"},{default:i((()=>[(r(!0),d(p,null,m(We.value,(e=>(r(),c(a,{key:e.value,label:e.label,value:e.value},null,8,["label","value"])))),128))])),_:1},8,["modelValue"])])),_:1}),s(u,{label:"类别",prop:"method",style:{width:"200px"}},{default:i((()=>[s(t,{modelValue:tl.value.category,"onUpdate:modelValue":l[2]||(l[2]=e=>tl.value.category=e),placeholder:"请选择"},{default:i((()=>[(r(!0),d(p,null,m(Ie.value,(e=>(r(),c(a,{key:e.name,label:e.genre,value:e.genre},null,8,["label","value"])))),128))])),_:1},8,["modelValue"])])),_:1}),s(u,{label:"受检物名称",prop:"method",style:{width:"200px"}},{default:i((()=>[s(B,{modelValue:tl.value.checkout_name,"onUpdate:modelValue":l[3]||(l[3]=e=>tl.value.checkout_name=e),placeholder:"受检物名称"},null,8,["modelValue"])])),_:1}),s(u,{label:"受检物号",prop:"method",style:{width:"200px"}},{default:i((()=>[s(B,{modelValue:tl.value.checkout_name,"onUpdate:modelValue":l[4]||(l[4]=e=>tl.value.checkout_name=e),placeholder:"受检物号"},null,8,["modelValue"])])),_:1}),s(u,{label:"处理方式",prop:"method",style:{width:"200px"}},{default:i((()=>[s(t,{modelValue:tl.value.process_mode,"onUpdate:modelValue":l[5]||(l[5]=e=>tl.value.process_mode=e),placeholder:"请选择"},{default:i((()=>[(r(!0),d(p,null,m(Qe.value,(e=>(r(),c(a,{key:e.value,label:e.label,value:e.value},null,8,["label","value"])))),128))])),_:1},8,["modelValue"])])),_:1}),s(u,{label:"项目名称",prop:"project",style:{width:"200px"}},{default:i((()=>[s(B,{modelValue:tl.value.project,"onUpdate:modelValue":l[6]||(l[6]=e=>tl.value.project=e),placeholder:"项目名称"},null,8,["modelValue"])])),_:1}),s(u,{label:"填表日期",prop:"checkout_date",style:{width:"200px"}},{default:i((()=>[s(M,{modelValue:tl.value.created_at,"onUpdate:modelValue":l[7]||(l[7]=e=>tl.value.created_at=e),type:"date",placeholder:"选择日期","value-format":"YYYY-MM-DDT15:04:05Z"},null,8,["modelValue"])])),_:1}),s(u,null,{default:i((()=>[s(Z,{type:"primary",icon:"search",onClick:pl},{default:i((()=>[v("查询")])),_:1}),s(Z,{icon:"refresh",onClick:ul},{default:i((()=>[v("重置")])),_:1})])),_:1})])),_:1},8,["model"])]),n("div",ne,[n("div",se,[s(Z,{type:"primary",icon:"plus",onClick:l[8]||(l[8]=e=>Vl("addApi"))},{default:i((()=>[v("新增")])),_:1})]),s(K,{data:al.value,onSortChange:vl,onSelectionChange:fl},{default:i((()=>[s(R,{align:"left",label:"ID","min-width":"150",prop:"ID",sortable:"custom"}),s(R,{align:"left",label:"编号","min-width":"150",prop:"serialnumber",sortable:"custom"}),s(R,{align:"left",label:"部门","min-width":"150",prop:"department",sortable:"custom"}),s(R,{align:"left",label:"类型","min-width":"150",prop:"mold",sortable:"custom"}),s(R,{align:"left",label:"类别","min-width":"150",prop:"category",sortable:"custom"}),s(R,{align:"left",label:"项目","min-width":"150",prop:"project",sortable:"custom"}),s(R,{align:"left",label:"受检物名称","min-width":"150",prop:"checkout_name",sortable:"custom"}),s(R,{align:"left",label:"受检物号","min-width":"150",prop:"checkout_number",sortable:"custom"}),s(R,{align:"left",label:"处理方式","min-width":"150",prop:"process_mode",sortable:"custom"}),s(R,{align:"left",label:"责任部门","min-width":"150",prop:"duty_department",sortable:"custom"}),s(R,{align:"left",label:"检验日期","min-width":"150",prop:"checkout_date",sortable:"custom"},{default:i((e=>[ie,n("span",pe,_(h(ee)(e.row.checkout_date)),1)])),_:1}),s(R,{align:"left",label:"填表日期","min-width":"150",prop:"created_at",sortable:"custom"},{default:i((e=>[me,n("span",ce,_(h(ee)(e.row.created_at)),1)])),_:1}),s(R,{align:"left",fixed:"right",label:"操作",width:"300"},{default:i((e=>[s(Z,{icon:"view",type:"primary",link:"",onClick:l=>jl(e.row,"check")},{default:i((()=>[v(" 查看 ")])),_:2},1032,["onClick"]),s(Z,{icon:"edit",type:"primary",link:"",onClick:l=>jl(e.row,"edit"),disabled:"-1"===e.row.operation_type},{default:i((()=>[v(" 修改")])),_:2},1032,["onClick","disabled"]),s(F,{class:"item",effect:"dark",content:"当前操作不被允许",placement:"top-end",disabled:!(""!=e.row.operation_type&&"4"!==e.row.operation_type)},{default:i((()=>[s(Z,{icon:"position",type:"primary",link:"",onClick:l=>(async(e,l)=>{0===(await P({id:e.ID,operation_type:l})).code&&w({type:"success",message:"放行更新成功",showClose:!0}),bl(),Cl()})(e.row,"4"),disabled:""!=e.row.operation_type&&"4"!==e.row.operation_type},{default:i((()=>[v("让步接收")])),_:2},1032,["onClick","disabled"])])),_:2},1032,["disabled"]),s(F,{class:"item",effect:"dark",content:"当前操作不被允许",placement:"top-end",disabled:!(""!=e.row.operation_type&&"5"!==e.row.operation_type)},{default:i((()=>[s(Z,{icon:"remove",type:"primary",link:"",onClick:l=>jl(e.row,"die"),disabled:""!=e.row.operation_type&&"5"!==e.row.operation_type},{default:i((()=>[v("报废")])),_:2},1032,["onClick","disabled"])])),_:2},1032,["disabled"]),s(F,{class:"item",effect:"dark",content:"当前操作不被允许",placement:"top-end",disabled:!e.row.is_ncr},{default:i((()=>[s(Z,{icon:"monitor",type:"primary",link:"",onClick:l=>jl(e.row,"createNcr"),disabled:e.row.is_ncr||"4"===e.row.operation_type||"5"===e.row.operation_type},{default:i((()=>[v("创建ncr")])),_:2},1032,["onClick","disabled"])])),_:2},1032,["disabled"]),s(F,{class:"item",effect:"dark",content:"当前操作不被允许",placement:"top-end",disabled:!e.row.is_ncr},{default:i((()=>[s(Z,{icon:"edit",type:"primary",link:"",disabled:e.row.is_ncr||"4"===e.row.operation_type||"5"===e.row.operation_type,onClick:l=>jl(e.row,"report")},{default:i((()=>[v("填写方案")])),_:2},1032,["disabled","onClick"])])),_:2},1032,["disabled"]),s(F,{class:"item",effect:"dark",content:"当前操作不被允许",placement:"top-end"},{default:i((()=>[s(Z,{icon:"delete",type:"primary",link:"",onClick:l=>(async e=>{k.confirm("此操作将永久删除该数据, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((async()=>{0===(await H(e)).code&&(w({type:"success",message:"删除成功!"}),1===al.value.length&&Xe.value>1&&Xe.value--,bl())}))})(e.row),disabled:"-1"===e.row.operation_type},{default:i((()=>[v("删除")])),_:2},1032,["onClick","disabled"])])),_:2},1024),s(Z,{icon:"circle-close",type:"primary",link:"",onClick:l=>(async e=>{0===(await L({id:e.ID})).code&&w({type:"success",message:"ncr 流程已关闭",showClose:!0}),bl()})(e.row)},{default:i((()=>[v("NCR关闭")])),_:2},1032,["onClick"])])),_:1})])),_:1},8,["data"]),n("div",ve,[s(G,{"current-page":Xe.value,"page-size":ll.value,"page-sizes":[10,30,50,100],total:el.value,layout:"total, sizes, prev, pager, next, jumper",onCurrentChange:cl,onSizeChange:ml},null,8,["current-page","page-size","total"])])]),s(El,{modelValue:gl.value,"onUpdate:modelValue":l[50]||(l[50]=e=>gl.value=e),"before-close":Cl,title:kl.value,width:"80%"},{footer:i((()=>[n("div",Be,[Ue.value?(r(),c(Z,{key:0,onClick:Cl},{default:i((()=>[v("取 消")])),_:1})):y("",!0),Ue.value?(r(),c(Z,{key:1,type:"primary",onClick:Ul},{default:i((()=>[v(_(j.value),1)])),_:1})):y("",!0),Oe.value?(r(),c(Z,{key:2,type:"primary",onClick:Dl},{default:i((()=>[v("创建NCR")])),_:1})):y("",!0)])])),default:i((()=>[s(J,{ref_key:"apiForm",ref:wl,model:Fe.value,rules:He.value,inline:!0},{default:i((()=>[s(u,{label:"编号:",prop:"serialnumber",style:{width:"20%"}},{default:i((()=>[b(n("p",null,_(Fe.value.serialnumber),513),[[f,Ee.value]]),Ae.value?(r(),c(B,{key:0,placeholder:"编号",size:"mini",modelValue:Fe.value.serialnumber,"onUpdate:modelValue":l[9]||(l[9]=e=>Fe.value.serialnumber=e)},null,8,["modelValue"])):y("",!0)])),_:1}),s(u,{label:"发现部门:",prop:"department",style:{width:"20%"}},{default:i((()=>[b(n("span",null,_(Fe.value.department),513),[[f,Ee.value]]),Ae.value?(r(),c(t,{key:0,modelValue:Fe.value.department,"onUpdate:modelValue":l[10]||(l[10]=e=>Fe.value.department=e),placeholder:"北京安新",style:{width:"100%"}},{default:i((()=>[(r(!0),d(p,null,m(Ye.value,(e=>(r(),c(a,{key:e.authorityName,label:"".concat(e.authorityName),value:e.authorityName},null,8,["label","value"])))),128))])),_:1},8,["modelValue"])):y("",!0)])),_:1}),s(u,{label:"类别:",prop:"category",style:{width:"20%"}},{default:i((()=>[b(n("span",null,_(Fe.value.category),513),[[f,Ee.value]]),Ae.value?(r(),c(t,{key:0,modelValue:Fe.value.category,"onUpdate:modelValue":l[11]||(l[11]=e=>Fe.value.category=e),placeholder:"请选择",style:{width:"100%"}},{default:i((()=>[(r(!0),d(p,null,m(Ie.value,(e=>(r(),c(a,{key:e.genre,label:"".concat(e.genre),value:e.genre},null,8,["label","value"])))),128))])),_:1},8,["modelValue"])):y("",!0)])),_:1}),s(u,{label:"项目:",prop:"project",style:{width:"20%"}},{default:i((()=>[b(n("span",null,_(Fe.value.project),513),[[f,Ee.value]]),Ae.value?(r(),c(t,{key:0,modelValue:Fe.value.project,"onUpdate:modelValue":l[12]||(l[12]=e=>Fe.value.project=e),placeholder:"请选择",style:{width:"100%"}},{default:i((()=>[(r(!0),d(p,null,m(Me.value,(e=>(r(),c(a,{key:e.name,label:"".concat(e.name),value:e.name},null,8,["label","value"])))),128))])),_:1},8,["modelValue"])):y("",!0)])),_:1}),s(u,{label:"受检物名称:",prop:"checkout_name",style:{width:"20%"}},{default:i((()=>[b(n("span",null,_(Fe.value.checkout_name),513),[[f,Ee.value]]),Ae.value?(r(),c(B,{key:0,placeholder:"受检物名称",size:"mini",modelValue:Fe.value.checkout_name,"onUpdate:modelValue":l[13]||(l[13]=e=>Fe.value.checkout_name=e)},null,8,["modelValue"])):y("",!0)])),_:1}),s(u,{label:"受检物号:",prop:"checkout_number",style:{width:"20%"}},{default:i((()=>[b(n("span",null,_(Fe.value.checkout_number),513),[[f,Ee.value]]),Ae.value?(r(),c(B,{key:0,placeholder:"受检物号",size:"mini",modelValue:Fe.value.checkout_number,"onUpdate:modelValue":l[14]||(l[14]=e=>Fe.value.checkout_number=e)},null,8,["modelValue"])):y("",!0)])),_:1}),s(u,{label:"图纸号:",prop:"graph_number",style:{width:"20%"}},{default:i((()=>[b(n("span",null,_(Fe.value.graph_number),513),[[f,Ee.value]]),Ae.value?(r(),c(B,{key:0,placeholder:"图纸号",size:"mini",modelValue:Fe.value.graph_number,"onUpdate:modelValue":l[15]||(l[15]=e=>Fe.value.graph_number=e)},null,8,["modelValue"])):y("",!0)])),_:1}),s(u,{label:"版本号:",prop:"version_number",style:{width:"20%"}},{default:i((()=>[b(n("span",null,_(Fe.value.version_number),513),[[f,Ee.value]]),Ae.value?(r(),c(B,{key:0,placeholder:"版本号",size:"mini",modelValue:Fe.value.version_number,"onUpdate:modelValue":l[16]||(l[16]=e=>Fe.value.version_number=e)},null,8,["modelValue"])):y("",!0)])),_:1}),s(u,{label:"采购订单号:",prop:"purchase_order",style:{width:"20%"}},{default:i((()=>[b(n("span",null,_(Fe.value.purchase_order),513),[[f,Ee.value]]),Ae.value?(r(),c(B,{key:0,placeholder:"采购订单号",size:"mini",modelValue:Fe.value.purchase_order,"onUpdate:modelValue":l[17]||(l[17]=e=>Fe.value.purchase_order=e)},null,8,["modelValue"])):y("",!0)])),_:1}),s(u,{label:"生产订单号:",prop:"production_order",style:{width:"20%"}},{default:i((()=>[b(n("span",null,_(Fe.value.production_order),513),[[f,Ee.value]]),Ae.value?(r(),c(B,{key:0,placeholder:"生产订单号",size:"mini",modelValue:Fe.value.production_order,"onUpdate:modelValue":l[18]||(l[18]=e=>Fe.value.production_order=e)},null,8,["modelValue"])):y("",!0)])),_:1}),s(u,{label:"发货单号:",prop:"delivery_order",style:{width:"20%"}},{default:i((()=>[b(n("span",null,_(Fe.value.delivery_order),513),[[f,Ee.value]]),Ae.value?(r(),c(B,{key:0,placeholder:"发货单号",size:"mini",modelValue:Fe.value.delivery_order,"onUpdate:modelValue":l[19]||(l[19]=e=>Fe.value.delivery_order=e)},null,8,["modelValue"])):y("",!0)])),_:1}),s(u,{label:"收货数量:",prop:"packages_number",style:{width:"20%"}},{default:i((()=>[b(n("span",null,_(Fe.value.packages_number),513),[[f,Ee.value]]),Ae.value?(r(),c(B,{key:0,placeholder:"收货数量",size:"mini",modelValue:Fe.value.packages_number,"onUpdate:modelValue":l[20]||(l[20]=e=>Fe.value.packages_number=e),modelModifiers:{number:!0}},null,8,["modelValue"])):y("",!0)])),_:1}),s(u,{label:"货物拒收数量:",prop:"reject_packages_number",style:{width:"20%"}},{default:i((()=>[b(n("span",null,_(Fe.value.reject_packages_number),513),[[f,Ee.value]]),Ae.value?(r(),c(B,{key:0,placeholder:"货物拒收数量",size:"mini",modelValue:Fe.value.reject_packages_number,"onUpdate:modelValue":l[21]||(l[21]=e=>Fe.value.reject_packages_number=e),modelModifiers:{number:!0}},null,8,["modelValue"])):y("",!0)])),_:1}),s(u,{label:"样品检验数量:",prop:"sample_checkout_number",style:{width:"20%"}},{default:i((()=>[b(n("span",null,_(Fe.value.sample_checkout_number),513),[[f,Ee.value]]),Ae.value?(r(),c(B,{key:0,placeholder:"样品检验数量",size:"mini",modelValue:Fe.value.sample_checkout_number,"onUpdate:modelValue":l[22]||(l[22]=e=>Fe.value.sample_checkout_number=e),modelModifiers:{number:!0}},null,8,["modelValue"])):y("",!0)])),_:1}),s(u,{label:"样品拒收数量:",prop:"reject_sample_checkout_number",style:{width:"20%"}},{default:i((()=>[b(n("span",null,_(Fe.value.reject_sample_checkout_number),513),[[f,Ee.value]]),Ae.value?(r(),c(B,{key:0,placeholder:"样品拒收数量",size:"mini",modelValue:Fe.value.reject_sample_checkout_number,"onUpdate:modelValue":l[23]||(l[23]=e=>Fe.value.reject_sample_checkout_number=e),modelModifiers:{number:!0}},null,8,["modelValue"])):y("",!0)])),_:1}),s(u,{label:"责任部门:",prop:"duty_department",style:{width:"20%"}},{default:i((()=>[b(n("span",null,_(Fe.value.duty_department),513),[[f,Ee.value]]),Ae.value?(r(),c(t,{key:0,modelValue:Fe.value.duty_department,"onUpdate:modelValue":l[24]||(l[24]=e=>Fe.value.duty_department=e),placeholder:"北京安新",style:{width:"100%"}},{default:i((()=>[(r(!0),d(p,null,m(Ye.value,(e=>(r(),c(a,{key:e.authorityName,label:"".concat(e.authorityName),value:e.authorityName},null,8,["label","value"])))),128))])),_:1},8,["modelValue"])):y("",!0)])),_:1}),s(u,{label:"供应商:",prop:"supplier",style:{width:"20%"}},{default:i((()=>[b(n("span",null,_(Fe.value.supplier),513),[[f,Ee.value]]),Ae.value?(r(),c(t,{key:0,modelValue:Fe.value.supplier,"onUpdate:modelValue":l[25]||(l[25]=e=>Fe.value.supplier=e),placeholder:"供应商",style:{width:"100%"}},{default:i((()=>[(r(!0),d(p,null,m(qe.value,(e=>(r(),c(a,{key:e.name,label:"".concat(e.name),value:e.name},null,8,["label","value"])))),128))])),_:1},8,["modelValue"])):y("",!0)])),_:1}),s(u,{label:"区域/位置:",prop:"area",style:{width:"20%"}},{default:i((()=>[b(n("span",null,_(Fe.value.area),513),[[f,Ee.value]]),Ae.value?(r(),c(B,{key:0,placeholder:"区域/位置",size:"mini",modelValue:Fe.value.area,"onUpdate:modelValue":l[26]||(l[26]=e=>Fe.value.area=e)},null,8,["modelValue"])):y("",!0)])),_:1}),s(u,{label:"工序/工位:",prop:"station",style:{width:"20%"}},{default:i((()=>[b(n("span",null,_(Fe.value.station),513),[[f,Ee.value]]),Ae.value?(r(),c(B,{key:0,placeholder:"工序/工位",size:"mini",modelValue:Fe.value.station,"onUpdate:modelValue":l[27]||(l[27]=e=>Fe.value.station=e)},null,8,["modelValue"])):y("",!0)])),_:1}),s(u,{label:"发现地点:",prop:"find_addr",style:{width:"20%"}},{default:i((()=>[b(n("span",null,_(Fe.value.find_addr),513),[[f,Ee.value]]),Ae.value?(r(),c(B,{key:0,placeholder:"发现地点",size:"mini",modelValue:Fe.value.find_addr,"onUpdate:modelValue":l[28]||(l[28]=e=>Fe.value.find_addr=e)},null,8,["modelValue"])):y("",!0)])),_:1}),s(u,{label:"发现工序:",prop:"find_process",style:{width:"20%"}},{default:i((()=>[b(n("span",null,_(Fe.value.find_process),513),[[f,Ee.value]]),Ae.value?(r(),c(B,{key:0,placeholder:"发现工序",size:"mini",modelValue:Fe.value.find_process,"onUpdate:modelValue":l[29]||(l[29]=e=>Fe.value.find_process=e)},null,8,["modelValue"])):y("",!0)])),_:1}),s(u,{label:"缺陷描述:",prop:"defect_problem",style:{width:"20%"}},{default:i((()=>[b(n("span",null,_(Fe.value.defect_problem),513),[[f,Ee.value]]),Ae.value?(r(),c(B,{key:0,placeholder:"缺陷描述",size:"mini",modelValue:Fe.value.defect_problem,"onUpdate:modelValue":l[30]||(l[30]=e=>Fe.value.defect_problem=e)},null,8,["modelValue"])):y("",!0)])),_:1}),s(u,{label:"检验日期:",prop:"checkout_date",style:{width:"23%"}},{default:i((()=>[b(n("span",null,_(h(ee)(Fe.value.checkout_date)),513),[[f,Ee.value]]),Ae.value?(r(),c(M,{key:0,modelValue:Fe.value.checkout_date,"onUpdate:modelValue":l[31]||(l[31]=e=>Fe.value.checkout_date=e),type:"date",placeholder:"选择日期","value-format":"YYYY-MM-DDT15:04:05Z"},null,8,["modelValue"])):y("",!0)])),_:1}),s(u,{label:"问题描述:",prop:"describe",style:{width:"80%"}},{default:i((()=>[Ee.value?(r(),d("div",_e,[s(h(ae),{options:je,"content-type":"html",ref_key:"quillEditor",ref:re,theme:"snow",content:Fe.value.describe,"onUpdate:content":l[32]||(l[32]=e=>Fe.value.describe=e),value:Fe.value.describe,readOnly:""},null,8,["options","content","value"])])):y("",!0),Ae.value?(r(),d("div",he,[s(h(ae),{options:je,"content-type":"html",ref_key:"quillEditor",ref:re,theme:"snow",content:Fe.value.describe,"onUpdate:content":l[33]||(l[33]=e=>Fe.value.describe=e),value:Fe.value.describe},null,8,["options","content","value"])])):y("",!0)])),_:1}),s(u,{label:"标签:",prop:"photograph",style:{width:"100%"}},{default:i((()=>[(r(!0),d(p,null,m(Bl.value,(e=>b((r(),c(Q,{style:{width:"100px",height:"100px",display:"block",margin:"5px","box-shadow":"2px 2px 2px 1px rgba(0, 0, 0, 0.2)"},src:De+e.url,"preview-src-list":[De+e.url]},null,8,["src","preview-src-list"])),[[f,Ee.value]]))),256)),Ae.value?(r(),c(W,{key:0,action:"/api/fileUploadAndDownload/upload",multiple:"",limit:2,"file-list":Ze.value,"on-success":ol,"show-file-list":"false","on-remove":rl},{default:i((()=>[s(Z,{size:"small",type:"primary"},{default:i((()=>[v("点击上传")])),_:1}),ye])),_:1},8,["file-list"])):y("",!0)])),_:1}),Se.value?(r(),c(u,{key:0,label:"是否通知其他人:",prop:"process_mode",style:{width:"100%"}},{default:i((()=>[s($,{modelValue:Ke.value,"onUpdate:modelValue":l[34]||(l[34]=e=>Ke.value=e),"active-color":"#13ce66","inactive-color":"#E0E0E0"},null,8,["modelValue"])])),_:1})):y("",!0),Ge.value?(r(),d("div",be,[s(u,{label:"通知部门:",prop:"notification_department",style:{width:"20%"}},{default:i((()=>[s(t,{modelValue:hl.value,"onUpdate:modelValue":l[35]||(l[35]=e=>hl.value=e),placeholder:"选择部门",style:{width:"100%"},onChange:l[36]||(l[36]=e=>(async e=>{const l=await q({page:Xe.value,pageSize:ll.value,authority_id:e,...tl.value});0===l.code&&(console.log(l.data.list),_l.value=l.data.list)})(hl.value))},{default:i((()=>[(r(!0),d(p,null,m(Ye.value,(e=>(r(),c(a,{key:e.authorityName,label:"".concat(e.authorityName),value:e.authorityId},null,8,["label","value"])))),128))])),_:1},8,["modelValue"])])),_:1}),s(u,{label:"通知人员:",prop:"notification_member",style:{width:"20%"}},{default:i((()=>[s(t,{modelValue:yl.value,"onUpdate:modelValue":l[37]||(l[37]=e=>yl.value=e),multiple:"",placeholder:"选择人员",style:{width:"100%"}},{default:i((()=>[(r(!0),d(p,null,m(_l.value,(e=>(r(),c(a,{key:e.ID,label:"".concat(e.userName),value:e.userName},null,8,["label","value"])))),128))])),_:1},8,["modelValue"])])),_:1})])):y("",!0),Se.value?(r(),d("div",fe,[s(u,{label:"类型:",prop:"mold",style:{width:"30%"}},{default:i((()=>[s(t,{modelValue:Fe.value.mold,"onUpdate:modelValue":l[38]||(l[38]=e=>Fe.value.mold=e),placeholder:"请选择",style:{width:"100%"}},{default:i((()=>[(r(!0),d(p,null,m(We.value,(e=>(r(),c(a,{key:e.value,label:"".concat(e.label),value:e.value},null,8,["label","value"])))),128))])),_:1},8,["modelValue"])])),_:1}),s(u,{label:"处理方式:",prop:"process_mode",style:{width:"30%"}},{default:i((()=>[s(t,{modelValue:Fe.value.process_mode,"onUpdate:modelValue":l[39]||(l[39]=e=>Fe.value.process_mode=e),placeholder:"请选择",style:{width:"100%"}},{default:i((()=>[(r(!0),d(p,null,m(Qe.value,(e=>(r(),c(a,{key:e.value,label:"".concat(e.label),value:e.value},null,8,["label","value"])))),128))])),_:1},8,["modelValue"])])),_:1}),s(u,{label:"具体措施:",prop:"process_mode",style:{width:"100%"}},{default:i((()=>[s(le,{modelValue:Fe.value.operation_type,"onUpdate:modelValue":l[40]||(l[40]=e=>Fe.value.operation_type=e),size:"medium"},{default:i((()=>[s(X,{label:"返工"}),s(X,{label:"返修"}),s(X,{label:"配做"})])),_:1},8,["modelValue"])])),_:1})])):y("",!0),xe.value?(r(),d("div",we,[s(u,{label:"数量",prop:"rework_number",style:{width:"20%"}},{default:i((()=>[s(B,{placeholder:"数量",size:"mini",modelValue:Fe.value.rework_number,"onUpdate:modelValue":l[41]||(l[41]=e=>Fe.value.rework_number=e),modelModifiers:{number:!0}},null,8,["modelValue"])])),_:1}),s(u,{label:"工时",prop:"rework_man_hour",style:{width:"20%"}},{default:i((()=>[s(B,{placeholder:"工时",size:"mini",modelValue:Fe.value.rework_man_hour,"onUpdate:modelValue":l[42]||(l[42]=e=>Fe.value.rework_man_hour=e),modelModifiers:{number:!0}},null,8,["modelValue"])])),_:1}),s(u,{label:"工料",prop:"rework_quantities",style:{width:"20%"}},{default:i((()=>[s(B,{placeholder:"工料",size:"mini",modelValue:Fe.value.rework_quantities,"onUpdate:modelValue":l[43]||(l[43]=e=>Fe.value.rework_quantities=e)},null,8,["modelValue"])])),_:1}),s(u,{label:"工序",prop:"rework_process",style:{width:"20%"}},{default:i((()=>[s(B,{placeholder:"工序",size:"mini",modelValue:Fe.value.rework_process,"onUpdate:modelValue":l[44]||(l[44]=e=>Fe.value.rework_process=e)},null,8,["modelValue"])])),_:1}),s(u,{label:"返工计划完成时间",prop:"rework_plan_date",style:{width:"40%"}},{default:i((()=>[s(M,{modelValue:Fe.value.rework_plan_date,"onUpdate:modelValue":l[45]||(l[45]=e=>Fe.value.rework_plan_date=e),type:"date",placeholder:"选择日期","value-format":"YYYY-MM-DDT15:04:05Z"},null,8,["modelValue"])])),_:1}),s(u,{label:"返工描述",prop:"rework_desc",style:{width:"100%"}},{default:i((()=>[s(B,{type:"textarea",placeholder:"请输入内容",modelValue:Fe.value.rework_desc,"onUpdate:modelValue":l[46]||(l[46]=e=>Fe.value.rework_desc=e),maxlength:"50","show-word-limit":"",rows:10},null,8,["modelValue"])])),_:1}),s(u,{label:"返工证据",prop:"rework_attachment",style:{width:"100%"}},{default:i((()=>[s(W,{action:"/api/fileUploadAndDownload/upload",multiple:"",limit:2,"file-list":Je.value,"on-success":dl,"show-file-list":"false","on-remove":nl},{default:i((()=>[s(Z,{size:"small",type:"primary"},{default:i((()=>[v("点击上传")])),_:1}),ke])),_:1},8,["file-list"])])),_:1})])):y("",!0),ze.value?(r(),d("div",ge,[s(u,{label:"返修计划完成时间",prop:"repair_plan_date",style:{width:"50%"}},{default:i((()=>[s(M,{modelValue:Fe.value.repair_plan_date,"onUpdate:modelValue":l[47]||(l[47]=e=>Fe.value.repair_plan_date=e),type:"date",placeholder:"选择日期","value-format":"YYYY-MM-DDT15:04:05Z"},null,8,["modelValue"])])),_:1}),s(u,{label:"返修描述",prop:"repair_desc",style:{width:"100%"}},{default:i((()=>[s(B,{type:"textarea",placeholder:"请输入内容",modelValue:Fe.value.repair_desc,"onUpdate:modelValue":l[48]||(l[48]=e=>Fe.value.repair_desc=e),maxlength:"50","show-word-limit":"",rows:10},null,8,["modelValue"])])),_:1}),s(u,{label:"返修附件",prop:"repair_attachment",style:{width:"100%"}},{default:i((()=>[s(W,{action:"/api/fileUploadAndDownload/upload",multiple:"",limit:2,"file-list":Re.value,"on-success":sl,"show-file-list":"false","on-remove":il},{default:i((()=>[s(Z,{size:"small",type:"primary"},{default:i((()=>[v("点击上传")])),_:1}),Ve])),_:1},8,["file-list"])])),_:1})])):y("",!0),Ne.value?(r(),d("div",Ce,[s(u,{label:"配做方案",prop:"parts_desc",style:{width:"100%"}},{default:i((()=>[n("div",null,[s(h(ae),{options:je,"content-type":"html",ref_key:"quillEditor",ref:re,theme:"snow",content:Fe.value.parts_desc,"onUpdate:content":l[49]||(l[49]=e=>Fe.value.parts_desc=e),value:Fe.value.parts_desc},null,8,["options","content","value"])])])),_:1}),s(u,{prop:"series",label:"配做订单"},{default:i((()=>[s(K,{data:Le.value,border:"",style:{width:"100%"},stripe:!0},{default:i((()=>[s(R,{label:"产品系列号",align:"center","min-width":"150",prop:"product_serialnumber"},{default:i((e=>[s(B,{modelValue:e.row.product_serialnumber,"onUpdate:modelValue":l=>e.row.product_serialnumber=l},null,8,["modelValue","onUpdate:modelValue"])])),_:1}),s(R,{label:"产品名称",align:"center","min-width":"150",prop:"product_name"},{default:i((e=>[s(B,{modelValue:e.row.product_name,"onUpdate:modelValue":l=>e.row.product_name=l},null,8,["modelValue","onUpdate:modelValue"])])),_:1}),s(R,{label:"物料系列号","min-width":"150",prop:"w_serialnumber"},{default:i((e=>[s(B,{modelValue:e.row.w_serialnumber,"onUpdate:modelValue":l=>e.row.w_serialnumber=l},null,8,["modelValue","onUpdate:modelValue"])])),_:1}),s(R,{label:"物料名称",align:"center","min-width":"150",prop:"w_name"},{default:i((e=>[s(B,{modelValue:e.row.w_name,"onUpdate:modelValue":l=>e.row.w_name=l},null,8,["modelValue","onUpdate:modelValue"])])),_:1}),s(R,{label:"操作","min-width":"50",prop:"action",align:"center"},{default:i((e=>[s(Z,{onClick:l=>(e=>{const l=Le.value.indexOf(e);-1!==l&&Le.value.splice(l,1)})(e.row),link:"",icon:"Delete",type:"primary"},null,8,["onClick"])])),_:1})])),_:1},8,["data"]),s($e,{onClick:Pe,class:"icon",size:"24",color:"#fb7a14"},{default:i((()=>[s(Te)])),_:1})])),_:1})])):y("",!0)])),_:1},8,["model","rules"])])),_:1},8,["modelValue","title"])])}}}),[["__scopeId","data-v-300cba19"]]);export{je as default};
