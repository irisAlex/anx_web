/*! 
 Build based on gin-vue-admin 
 Time : 1713878256000 */
import{_ as e,a,o as l,c as t,b as r,d as s,w as o,K as u,L as i,g as d,f as p,t as n,A as c,e as m,j as _,k as v,E as b,p as g,h}from"./087AC4D233B64EB0index.js";import{E as f}from"./087AC4D233B64EB0dialog.js";import"./087AC4D233B64EB0overlay.js";import{E as y}from"./087AC4D233B64EB0pagination.js";/* empty css                     */import"./087AC4D233B64EB0tag.js";import{E as w,a as k}from"./087AC4D233B64EB0select.js";import"./087AC4D233B64EB0scrollbar.js";/* empty css                      */import{E as B,a as C}from"./087AC4D233B64EB0table-column.js";import"./087AC4D233B64EB0checkbox.js";/* empty css                       */import{a as j,E}from"./087AC4D233B64EB0form-item.js";/* empty css                      */import{q as D,c as A,d as V,e as x,f as z,g as S,b as U}from"./087AC4D233B64EB0manage.js";import{f as q,t as I}from"./087AC4D233B64EB0stringFun.js";import{E as T}from"./087AC4D233B64EB0index23.js";import"./087AC4D233B64EB0isUndefined.js";import"./087AC4D233B64EB0isEqual.js";import"./087AC4D233B64EB0_Uint8Array.js";import"./087AC4D233B64EB0hasIn.js";import"./087AC4D233B64EB0index22.js";import"./087AC4D233B64EB0strings.js";import"./087AC4D233B64EB0debounce.js";import"./087AC4D233B64EB0_initCloneObject.js";import"./087AC4D233B64EB0castArray.js";import"./087AC4D233B64EB0_baseClone.js";const F={class:"gva-search-box"},Z={class:"gva-table-box"},K={slot:"reference",class:"name-wrapper"},L=(e=>(g("data-v-f7e00770"),e=e(),h(),e))((()=>r("i",{class:"el-icon-time"},null,-1))),O={style:{"margin-left":"10px"}},G={class:"gva-pagination"},N={slot:"reference",class:"name-wrapper"},P={class:"dialog-footer"},H=e(Object.assign({name:"Api"},{__name:"pass",setup(e){const g=a([]),h=a([]),H=a([]),J=a([]),M=a([]),Q=a({serialnumber:"",department:"",mold:"",category:"",project:"",checkout_name:"",checkout_number:"",graph_number:"",version_number:"",purchase_order:"",production_order:"",delivery_order:"",packages_number:"",reject_packages_number:"",sample_checkout_number:"",reject_sample_checkout_number:"",supplier:"",checkout_date:"",describe:"",photograph:"",process_mode:"",duty_department:"",cause_desc:"",fill_from_date:"",disposal_concept:"",rework_number:0,rework_man_hour:0,rework_quantities:"",rework_process:"",rework_plan_date:"0001-01-01T00:00:00Z",rework_desc:"",rework_attachment:"",repair_plan_date:"0001-01-01T00:00:00Z",repair_desc:"",repair_attachment:"",parts_desc:"",series:"",operation_type:""});a([{value:"POST",label:"创建",type:"success"},{value:"GET",label:"查看",type:""},{value:"PUT",label:"更新",type:"warning"},{value:"DELETE",label:"删除",type:"danger"}]);const R=a(""),W=a({path:[{required:!0,message:"请输入api路径",trigger:"blur"}],apiGroup:[{required:!0,message:"请输入组名称",trigger:"blur"}],method:[{required:!0,message:"请选择请求方式",trigger:"blur"}],description:[{required:!0,message:"请输入api介绍",trigger:"blur"}]}),X=a(1),Y=a(0),$=a(10),ee=a([]),ae=a({}),le=()=>{ae.value={}},te=()=>{X.value=1,$.value=10,de()},re=e=>{$.value=e,de()},se=e=>{X.value=e,de()},oe=async(e,a)=>{0===(await D({id:e.ID,status:a})).code&&_({type:"success",message:"状态更新成功",showClose:!0}),de()},ue=({prop:e,order:a})=>{e&&("ID"===e&&(e="id"),ae.value.orderKey=I(e),ae.value.desc="descending"===a),de()};(async()=>{const e=await A({page:X.value,pageSize:$.value,...ae.value});0===e.code&&(h.value=e.data.list)})();(async()=>{const e=await V({page:X.value,pageSize:$.value,...ae.value});0===e.code&&(H.value=e.data.list)})();(async()=>{const e=await x({page:X.value,pageSize:$.value,...ae.value});0===e.code&&(J.value=e.data.list)})();(async()=>{const e=await z({page:X.value,pageSize:$.value,...ae.value});0===e.code&&(M.value=e.data.list)})();const ie=a("4"),de=async()=>{const e=await S({page:X.value,pageSize:$.value,keyword:ie.value,orderKey:"id",desc:!0,...ae.value});0===e.code&&(ee.value=e.data.list,Y.value=e.data.total,X.value=e.data.page,$.value=e.data.pageSize)};de();const pe=e=>{g.value=e};a(!1),a(!1);const ne=a(null),ce=a("添加不合格品"),me=a(!1),_e=()=>{ne.value.resetFields(),Q.value={serialnumber:"",department:"",mold:"",category:"",project:"",checkout_name:"",checkout_number:"",graph_number:"",version_number:"",purchase_order:"",production_order:"",delivery_order:"",packages_number:"",reject_packages_number:"",sample_checkout_number:"",reject_sample_checkout_number:"",supplier:"",checkout_date:"",describe:"",photograph:"",process_mode:"",duty_department:"",cause_desc:"",fill_from_date:"",disposal_concept:"",rework_number:0,rework_man_hour:0,rework_quantities:"",rework_process:"",rework_plan_date:"0001-01-01T00:00:00Z",rework_desc:"",rework_attachment:"",repair_plan_date:"0001-01-01T00:00:00Z",repair_desc:"",repair_attachment:"",parts_desc:"",series:"",operation_type:""},me.value=!1},ve=async e=>{const a=await U({id:e.ID});Q.value=a.data.manage,(e=>{"look"===e&&(ce.value="查看放行");R.value=e,me.value=!0})("look")},be=async()=>{ne.value.validate((async e=>{if(e)switch(R.value){case"addApi":0===(await createApi(Q.value)).code&&_({type:"success",message:"添加成功",showClose:!0}),de(),_e();break;case"edit":0===(await updateApi(Q.value)).code&&_({type:"success",message:"编辑成功",showClose:!0}),de(),_e();break;default:_({type:"error",message:"未知操作",showClose:!0})}}))};return(e,a)=>{const _=w,g=k,D=j,A=v,V=b,x=E,z=B,S=T,U=C,I=y,J=f;return l(),t("div",null,[r("div",F,[s(x,{ref:"searchForm",inline:!0,model:ae.value},{default:o((()=>[s(D,{label:"部门",style:{width:"200px"}},{default:o((()=>[s(g,{modelValue:ae.value.department,"onUpdate:modelValue":a[0]||(a[0]=e=>ae.value.department=e),placeholder:"北京安新"},{default:o((()=>[(l(!0),t(u,null,i(h.value,(e=>(l(),d(_,{key:e.authorityId,label:e.authorityName,value:e.authorityName},null,8,["label","value"])))),128))])),_:1},8,["modelValue"])])),_:1}),s(D,{label:"类型",style:{width:"200px"}},{default:o((()=>[s(g,{modelValue:e.value,"onUpdate:modelValue":a[1]||(a[1]=a=>e.value=a),placeholder:"请选择"},{default:o((()=>[(l(!0),t(u,null,i(e.moldList,(e=>(l(),d(_,{key:e.value,label:e.label,value:e.value},null,8,["label","value"])))),128))])),_:1},8,["modelValue"])])),_:1}),s(D,{label:"类别",style:{width:"200px"}},{default:o((()=>[s(g,{modelValue:ae.value.category,"onUpdate:modelValue":a[2]||(a[2]=e=>ae.value.category=e),placeholder:"请选择"},{default:o((()=>[(l(!0),t(u,null,i(H.value,(e=>(l(),d(_,{key:e.name,label:e.genre,value:e.genre},null,8,["label","value"])))),128))])),_:1},8,["modelValue"])])),_:1}),s(D,{label:"受检物名称",style:{width:"200px"}},{default:o((()=>[s(A,{modelValue:ae.value.checkout_name,"onUpdate:modelValue":a[3]||(a[3]=e=>ae.value.checkout_name=e),placeholder:"受检物名称"},null,8,["modelValue"])])),_:1}),s(D,{label:"项目名称",style:{width:"200px"}},{default:o((()=>[s(A,{modelValue:ae.value.project,"onUpdate:modelValue":a[4]||(a[4]=e=>ae.value.project=e),placeholder:"项目名称"},null,8,["modelValue"])])),_:1}),s(D,{label:"供应商名称",style:{width:"200px"}},{default:o((()=>[s(A,{modelValue:ae.value.supplier,"onUpdate:modelValue":a[5]||(a[5]=e=>ae.value.supplier=e),placeholder:"项目名称"},null,8,["modelValue"])])),_:1}),s(D,null,{default:o((()=>[s(V,{type:"primary",icon:"search",onClick:te},{default:o((()=>[p("查询")])),_:1}),s(V,{icon:"refresh",onClick:le},{default:o((()=>[p("重置")])),_:1})])),_:1})])),_:1},8,["model"])]),r("div",Z,[s(U,{data:ee.value,onSortChange:ue,onSelectionChange:pe},{default:o((()=>[s(z,{align:"left",label:"ID","min-width":"150",prop:"ID",sortable:"custom"}),s(z,{align:"left",label:"编号","min-width":"150",prop:"serialnumber",sortable:"custom"}),s(z,{align:"left",label:"部门","min-width":"150",prop:"department",sortable:"custom"}),s(z,{align:"left",label:"类型","min-width":"150",prop:"mold",sortable:"custom"}),s(z,{align:"left",label:"类别","min-width":"150",prop:"category",sortable:"custom"}),s(z,{align:"left",label:"受检物名称","min-width":"150",prop:"checkout_name",sortable:"custom"}),s(z,{align:"left",label:"受检物号","min-width":"150",prop:"checkout_number",sortable:"custom"}),s(z,{align:"left",label:"处理方式","min-width":"150",prop:"process_mode",sortable:"custom"}),s(z,{align:"left",label:"状态","min-width":"150",prop:"description",sortable:"custom"},{default:o((e=>[r("div",K,[s(S,{type:"1"===e.row.status?"success":"-1"===e.row.status?"danger":"info","disable-transitions":""},{default:o((()=>[p(n("1"===e.row.status?"同意":"-1"===e.row.status?"拒绝":"待审批"),1)])),_:2},1032,["type"])])])),_:1}),s(z,{align:"left",label:"放行时间","min-width":"150",prop:"deferpass_datered_date",sortable:"custom"},{default:o((e=>[L,r("span",O,n(c(q)(e.row.deferpass_datered_date)),1)])),_:1}),s(z,{align:"left",fixed:"right",label:"操作",width:"300"},{default:o((e=>[s(V,{icon:"view",type:"primary",link:"",onClick:a=>ve(e.row)},{default:o((()=>[p("查看")])),_:2},1032,["onClick"]),s(V,{icon:"check",type:"primary",link:"",onClick:a=>oe(e.row,"1")},{default:o((()=>[p("同意")])),_:2},1032,["onClick"]),s(V,{icon:"remove",type:"primary",link:"",onClick:a=>oe(e.row,"-1")},{default:o((()=>[p("拒绝")])),_:2},1032,["onClick"])])),_:1})])),_:1},8,["data"]),r("div",G,[s(I,{"current-page":X.value,"page-size":$.value,"page-sizes":[10,30,50,100],total:Y.value,layout:"total, sizes, prev, pager, next, jumper",onCurrentChange:se,onSizeChange:re},null,8,["current-page","page-size","total"])])]),s(J,{modelValue:me.value,"onUpdate:modelValue":a[6]||(a[6]=e=>me.value=e),"before-close":_e,title:ce.value,width:"40%"},{footer:o((()=>[r("div",P,[e.isFormDisabled?(l(),d(V,{key:0,onClick:_e},{default:o((()=>[p("取 消")])),_:1})):m("",!0),e.isFormDisabled?(l(),d(V,{key:1,type:"primary",onClick:be},{default:o((()=>[p("确 定")])),_:1})):m("",!0)])])),default:o((()=>[s(x,{ref_key:"apiForm",ref:ne,model:Q.value,rules:W.value,inline:!0},{default:o((()=>[s(D,{label:"编号",prop:"method",style:{width:"30%"}},{default:o((()=>[r("span",null,n(Q.value.serialnumber),1)])),_:1}),s(D,{label:"受检物名称",prop:"checkout_name",style:{width:"30%"}},{default:o((()=>[r("span",null,n(Q.value.checkout_name),1)])),_:1}),s(D,{label:"受检物号",prop:"checkout_number",style:{width:"30%"}},{default:o((()=>[r("span",null,n(Q.value.checkout_number),1)])),_:1}),s(D,{label:"类别",prop:"category",style:{width:"30%"}},{default:o((()=>[r("span",null,n(Q.value.category),1)])),_:1}),s(D,{label:"部门",prop:"department",style:{width:"30%"}},{default:o((()=>[r("span",null,n(Q.value.department),1)])),_:1}),s(D,{label:"处理方式",prop:"process_mode",style:{width:"30%"}},{default:o((()=>[r("span",null,n(Q.value.process_mode),1)])),_:1}),s(D,{label:"类型",prop:"category",style:{width:"30%"}},{default:o((()=>[r("span",null,n(Q.value.mold),1)])),_:1}),s(D,{label:"状态",prop:"status",style:{width:"30%"}},{default:o((e=>[r("div",N,[s(S,{type:"1"===Q.value.status?"success":"-1"===Q.value.status?"danger":"info","disable-transitions":""},{default:o((()=>[p(n("1"===Q.value.status?"同意":"-1"===Q.value.status?"拒绝":"待处理"),1)])),_:1},8,["type"])])])),_:1}),s(D,{label:"放行时间",prop:"pass_date",style:{width:"30%"}},{default:o((()=>[r("span",null,n(c(q)(Q.value.pass_date)),1)])),_:1})])),_:1},8,["model","rules"])])),_:1},8,["modelValue","title"])])}}}),[["__scopeId","data-v-f7e00770"]]);export{H as default};