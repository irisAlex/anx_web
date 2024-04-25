/*! 
 Build based on gin-vue-admin 
 Time : 1713878256000 */
import{a as e,am as l,u as a,r as t,R as o,S as u,o as d,c as i,b as s,d as n,w as r,f as m,K as p,L as c,g as v,t as f,e as b,$ as y,j as g,b2 as B,W as V,E as N,k as _}from"./087AC4D233B64EB0index.js";import{E as C}from"./087AC4D233B64EB0dialog.js";import"./087AC4D233B64EB0overlay.js";import{E as h,a as E}from"./087AC4D233B64EB0table-column.js";import{E as D}from"./087AC4D233B64EB0checkbox.js";/* empty css                       *//* empty css                      */import"./087AC4D233B64EB0scrollbar.js";import{E as k}from"./087AC4D233B64EB0popover.js";import"./087AC4D233B64EB0tag.js";/* empty css                     */import{E as w,a as A}from"./087AC4D233B64EB0collapse-item.js";import{a as x,E as T}from"./087AC4D233B64EB0form-item.js";/* empty css                      */import{E as U,a as j}from"./087AC4D233B64EB0select.js";/* empty css                     */import S from"./087AC4D233B64EB0fieldDialog.js";import L from"./087AC4D233B64EB0previewCodeDialg.js";import{a as q,b as M,t as O,c as J}from"./087AC4D233B64EB0stringFun.js";import{p as F,c as K,g as I,a as R,b as W,d as $,e as G}from"./087AC4D233B64EB0autoCode.js";import{u as P}from"./087AC4D233B64EB0dictionary.js";import{E as X}from"./087AC4D233B64EB0index22.js";import"./087AC4D233B64EB0isUndefined.js";import"./087AC4D233B64EB0_Uint8Array.js";import"./087AC4D233B64EB0debounce.js";import"./087AC4D233B64EB0_initCloneObject.js";import"./087AC4D233B64EB0hasIn.js";import"./087AC4D233B64EB0isEqual.js";import"./087AC4D233B64EB0dropdown.js";import"./087AC4D233B64EB0castArray.js";import"./087AC4D233B64EB0index27.js";import"./087AC4D233B64EB0_baseClone.js";import"./087AC4D233B64EB0index23.js";import"./087AC4D233B64EB0strings.js";import"./087AC4D233B64EB0switch.js";import"./087AC4D233B64EB0sysDictionary2.js";import"./087AC4D233B64EB0warningBar.js";import"./087AC4D233B64EB0tab-pane.js";const z={class:"gva-search-box"},Q={class:"text-xl pl-4 flex items-center"},H={style:{float:"right",color:"#8492a6","font-size":"13px"}},Y={class:"gva-search-box"},Z={style:{float:"right",color:"#8492a6","font-size":"13px"}},ee=s("div",null," 自动创建API ",-1),le=s("div",null," 自动移动文件 ",-1),ae={class:"gva-table-box"},te={class:"gva-btn-list"},oe=s("p",null,"确定删除吗？",-1),ue={style:{"text-align":"right","margin-top":"8px"}},de={class:"gva-btn-list justify-end mt-4"},ie={class:"dialog-footer"},se={class:"flex items-center py-1.5"},ne=s("p",null,"操作栏：",-1),re={class:"dialog-footer",style:{"padding-top":"14px","padding-right":"14px"}},me=Object.assign({name:"AutoCode"},{__name:"index",setup(me){const pe=["id","created_at","updated_at","deleted_at"],ce=e([{label:"字符串",value:"string"},{label:"富文本",value:"richtext"},{label:"整型",value:"int"},{label:"布尔值",value:"bool"},{label:"浮点型",value:"float64"},{label:"时间",value:"time.Time"},{label:"枚举",value:"enum"},{label:"单图片（字符串）",value:"picture"},{label:"多图片（json字符串）",value:"pictures"},{label:"视频（字符串）",value:"video"},{label:"文件（json字符串）",value:"file"}]),ve=e([{label:"=",value:"="},{label:"<>",value:"<>"},{label:">",value:">"},{label:"<",value:"<"},{label:"LIKE",value:"LIKE"},{label:"BETWEEN",value:"BETWEEN"},{label:"NOT BETWEEN",value:"NOT BETWEEN"}]),fe={fieldName:"",fieldDesc:"",fieldType:"",dataType:"",fieldJson:"",columnName:"",dataTypeLong:"",comment:"",require:!1,sort:!1,errorText:"",primaryKey:!1,clearable:!0,fieldSearchType:"",dictType:""},be=l(),ye=a(),ge=t([]),Be=e({}),Ve=e({businessDB:"",dbName:"",tableName:""}),Ne=e([]),_e=e(""),Ce=e({}),he=e({structName:"",tableName:"",packageName:"",package:"",abbreviation:"",description:"",businessDB:"",autoCreateApiToSql:!0,autoMoveFile:!0,gvaModel:!0,autoCreateResource:!1,fields:[]}),Ee=e({structName:[{required:!0,message:"请输入结构体名称",trigger:"blur"}],abbreviation:[{required:!0,message:"请输入结构体简称",trigger:"blur"}],description:[{required:!0,message:"请输入结构体描述",trigger:"blur"}],packageName:[{required:!0,message:"文件名称：sysXxxxXxxx",trigger:"blur"}],package:[{required:!0,message:"请选择package",trigger:"blur"}]}),De=e({}),ke=e({}),we=e(!1),Ae=e(!1),xe=e=>{e&&he.value.fields.length&&y.confirm("如果您开启GVA默认结构，会自动添加ID,CreatedAt,UpdatedAt,DeletedAt字段，此行为将自动清除您目前在下方创建的重名字段，是否继续？","注意",{confirmButtonText:"继续",cancelButtonText:"取消",type:"warning"}).then((()=>{he.value.fields=he.value.fields.filter((e=>!pe.some((l=>l===e.columnName))))})).catch((()=>{he.value.gvaModel=!1}))},Te=e(null),Ue=()=>{Te.value.selectText()},je=()=>{Te.value.copy()},Se=e=>{we.value=!0,e?(_e.value="edit",ke.value=JSON.parse(JSON.stringify(e)),De.value=e):(_e.value="add",De.value=JSON.parse(JSON.stringify(fe)))},Le=e(null),qe=()=>{Le.value.fieldDialogFrom.validate((e=>{if(!e)return!1;De.value.fieldName=M(De.value.fieldName),"add"===_e.value&&he.value.fields.push(De.value),we.value=!1}))},Me=()=>{"edit"===_e.value&&(De.value=ke.value),we.value=!1},Oe=e(null),Je=async e=>he.value.fields.length<=0?(g({type:"error",message:"请填写至少一个field"}),!1):!he.value.gvaModel&&he.value.fields.every((e=>!e.primaryKey))?(g({type:"error",message:"您至少需要创建一个主键才能保证自动化代码的可行性"}),!1):he.value.fields.some((e=>e.fieldName===he.value.structName))?(g({type:"error",message:"存在与结构体同名的字段"}),!1):he.value.package===he.value.abbreviation?(g({type:"error",message:"package和结构体简称不可同名"}),!1):void Oe.value.validate((async l=>{var a;if(!l)return!1;for(const e in he.value)"string"==typeof he.value[e]&&(he.value[e]=he.value[e].trim());if(he.value.structName=M(he.value.structName),he.value.tableName=he.value.tableName.replace(" ",""),he.value.tableName||(he.value.tableName=O(q(he.value.structName))),he.value.structName===he.value.abbreviation)return g({type:"error",message:"structName和struct简称不能相同"}),!1;if(he.value.humpPackageName=O(he.value.packageName),e){const e=await F(he.value);Be.value=e.data.autoCode,Ae.value=!0}else{const e=await K(he.value);if("false"===(null==(a=e.headers)?void 0:a.success))return;if(he.value.autoMoveFile)return void g({type:"success",message:"自动化代码创建成功，自动移动成功"});g({type:"success",message:"自动化代码创建成功，正在下载"});const l=new Blob([e]),t="ginvueadmin.zip";if("download"in document.createElement("a")){const e=window.URL.createObjectURL(l),a=document.createElement("a");a.style.display="none",a.href=e,a.setAttribute("download",t),document.body.appendChild(a),a.click(),document.body.removeChild(a),window.URL.revokeObjectURL(e)}else window.navigator.msSaveBlob(l,t)}})),Fe=e([]),Ke=e([]),Ie=async()=>{Ve.value.dbName="",Ve.value.tableName="";const e=await I({businessDB:Ve.value.businessDB});0===e.code&&(Ke.value=e.data.dbs,Fe.value=e.data.dbList)},Re=async()=>{const e=await R({businessDB:Ve.value.businessDB,dbName:Ve.value.dbName});0===e.code&&(Ne.value=e.data.tables),Ve.value.tableName=""},We=async()=>{const e=await W(Ve.value);if(0===e.code){let l="";if(""!==Ve.value.businessDB){const e=Fe.value.find((e=>e.aliasName===Ve.value.businessDB)),a=B(e);l=a.dbtype}const a=J(Ve.value.tableName);he.value.structName=M(a),he.value.tableName=Ve.value.tableName,he.value.packageName=a,he.value.abbreviation=a,he.value.description=a+"表",he.value.autoCreateApiToSql=!0,he.value.autoMoveFile=!0,he.value.fields=[],e.data.columns&&e.data.columns.forEach((e=>{if(!he.value.gvaModel||!pe.some((l=>l===e.columnName))){const a=J(e.columnName);he.value.fields.push({fieldName:M(a),fieldDesc:e.columnComment||a+"字段",fieldType:Ce.value[e.dataType],dataType:e.dataType,fieldJson:a,primaryKey:e.primaryKey,dataTypeLong:e.dataTypeLong&&e.dataTypeLong.split(",")[0],columnName:"oracle"===l?e.columnName.toUpperCase():e.columnName,comment:e.columnComment,require:!1,errorText:"",clearable:!0,fieldSearchType:"",dictType:""})}}))}},$e=async()=>{["string","int","bool","float64","time.Time"].forEach((async e=>{const l=await(async e=>{const l=P();return await l.getDictionary(e),l.dictionaryMap[e]})(e);l&&l.forEach((l=>{Ce.value[l.label]=e}))}))},Ge=e([]),Pe=async()=>{const e=await $();0===e.code&&(Ge.value=e.data.pkgs)},Xe=()=>{ye.push({name:"autoPkg"})},ze=()=>{Ie(),$e(),Pe();const e=be.params.id;e&&(async e=>{const l=await G({id:Number(e)});0===l.code&&(he.value=JSON.parse(l.data.meta))})(e)};return ze(),o((()=>be.params.id),(()=>{"autoCodeEdit"===be.name&&ze()})),(e,l)=>{const a=u("pointer"),t=V,o=u("QuestionFilled"),y=X,g=U,B=j,M=x,O=N,J=T,F=w,K=A,I=_,R=u("refresh"),W=u("document-add"),$=D,G=h,P=k,me=E,pe=C;return d(),i("div",null,[s("div",z,[n(K,{modelValue:ge,"onUpdate:modelValue":l[3]||(l[3]=e=>ge=e),class:"mb-3"},{default:r((()=>[n(F,{name:"1"},{title:r((()=>[s("div",Q,[m(" 点这里从现有数据库创建代码 "),n(t,null,{default:r((()=>[n(a)])),_:1})])])),default:r((()=>[n(J,{ref:"getTableForm",style:{"margin-top":"24px"},inline:!0,model:Ve.value,"label-width":"120px"},{default:r((()=>[n(M,{label:"业务库",prop:"selectDBtype"},{label:r((()=>[n(y,{content:"注：需要提前到db-list自行配置多数据库，如未配置需配置后重启服务方可使用。（此处可选择对应库表，可理解为从哪个库选择表）",placement:"bottom",effect:"light"},{default:r((()=>[s("div",null,[m(" 业务库 "),n(t,null,{default:r((()=>[n(o)])),_:1})])])),_:1})])),default:r((()=>[n(B,{modelValue:Ve.value.businessDB,"onUpdate:modelValue":l[0]||(l[0]=e=>Ve.value.businessDB=e),clearable:"",class:"w-56",placeholder:"选择业务库",onChange:Ie},{default:r((()=>[(d(!0),i(p,null,c(Fe.value,(e=>(d(),v(g,{key:e.aliasName,value:e.aliasName,label:e.aliasName,disabled:e.disable},{default:r((()=>[s("div",null,[s("span",null,f(e.aliasName),1),s("span",H,f(e.dbName),1)])])),_:2},1032,["value","label","disabled"])))),128))])),_:1},8,["modelValue"])])),_:1}),n(M,{label:"数据库名",prop:"structName"},{default:r((()=>[n(B,{modelValue:Ve.value.dbName,"onUpdate:modelValue":l[1]||(l[1]=e=>Ve.value.dbName=e),clearable:"",class:"w-56",filterable:"",placeholder:"请选择数据库",onChange:Re},{default:r((()=>[(d(!0),i(p,null,c(Ke.value,(e=>(d(),v(g,{key:e.database,label:e.database,value:e.database},null,8,["label","value"])))),128))])),_:1},8,["modelValue"])])),_:1}),n(M,{label:"表名",prop:"structName"},{default:r((()=>[n(B,{modelValue:Ve.value.tableName,"onUpdate:modelValue":l[2]||(l[2]=e=>Ve.value.tableName=e),disabled:!Ve.value.dbName,class:"w-56",filterable:"",placeholder:"请选择表"},{default:r((()=>[(d(!0),i(p,null,c(Ne.value,(e=>(d(),v(g,{key:e.tableName,label:e.tableName,value:e.tableName},null,8,["label","value"])))),128))])),_:1},8,["modelValue","disabled"])])),_:1}),n(M,null,{default:r((()=>[n(O,{type:"primary",onClick:We},{default:r((()=>[m("使用此表创建")])),_:1})])),_:1})])),_:1},8,["model"])])),_:1})])),_:1},8,["modelValue"])]),s("div",Y,[n(J,{ref_key:"autoCodeForm",ref:Oe,rules:Ee.value,model:he.value,"label-width":"120px",inline:!0},{default:r((()=>[n(M,{label:"Struct名称",prop:"structName"},{default:r((()=>[n(I,{modelValue:he.value.structName,"onUpdate:modelValue":l[4]||(l[4]=e=>he.value.structName=e),placeholder:"首字母自动转换大写"},null,8,["modelValue"])])),_:1}),n(M,{label:"TableName",prop:"tableName"},{default:r((()=>[n(I,{modelValue:he.value.tableName,"onUpdate:modelValue":l[5]||(l[5]=e=>he.value.tableName=e),placeholder:"指定表名（非必填）"},null,8,["modelValue"])])),_:1}),n(M,{prop:"abbreviation"},{label:r((()=>[n(y,{content:"简称会作为入参对象名和路由group",placement:"bottom",effect:"light"},{default:r((()=>[s("div",null,[m(" Struct简称 "),n(t,null,{default:r((()=>[n(o)])),_:1})])])),_:1})])),default:r((()=>[n(I,{modelValue:he.value.abbreviation,"onUpdate:modelValue":l[6]||(l[6]=e=>he.value.abbreviation=e),placeholder:"请输入Struct简称"},null,8,["modelValue"])])),_:1}),n(M,{label:"Struct中文名称",prop:"description"},{default:r((()=>[n(I,{modelValue:he.value.description,"onUpdate:modelValue":l[7]||(l[7]=e=>he.value.description=e),placeholder:"中文描述作为自动api描述"},null,8,["modelValue"])])),_:1}),n(M,{prop:"packageName"},{label:r((()=>[n(y,{content:"生成文件的默认名称(建议为驼峰格式,首字母小写,如sysXxxXxxx)",placement:"bottom",effect:"light"},{default:r((()=>[s("div",null,[m(" 文件名称 "),n(t,null,{default:r((()=>[n(o)])),_:1})])])),_:1})])),default:r((()=>[n(I,{modelValue:he.value.packageName,"onUpdate:modelValue":l[8]||(l[8]=e=>he.value.packageName=e),placeholder:"请输入文件名称",onBlur:l[9]||(l[9]=e=>{var l,a;(l=he.value)[a="packageName"]=q(l[a])})},null,8,["modelValue"])])),_:1}),n(M,{label:"Package（包）",prop:"package"},{default:r((()=>[n(B,{modelValue:he.value.package,"onUpdate:modelValue":l[10]||(l[10]=e=>he.value.package=e),class:"w-56"},{default:r((()=>[(d(!0),i(p,null,c(Ge.value,(e=>(d(),v(g,{key:e.ID,value:e.packageName,label:e.packageName},null,8,["value","label"])))),128))])),_:1},8,["modelValue"]),n(t,{class:"cursor-pointer ml-2 text-gray-600",onClick:Pe},{default:r((()=>[n(R)])),_:1}),n(t,{class:"cursor-pointer ml-2 text-gray-600",onClick:Xe},{default:r((()=>[n(W)])),_:1})])),_:1}),n(M,{label:"业务库",prop:"businessDB"},{label:r((()=>[n(y,{content:"注：需要提前到db-list自行配置多数据库，此项为空则会使用gva本库创建自动化代码(global.GVA_DB),填写后则会创建指定库的代码(global.MustGetGlobalDBByDBName(dbname))",placement:"bottom",effect:"light"},{default:r((()=>[s("div",null,[m(" 业务库 "),n(t,null,{default:r((()=>[n(o)])),_:1})])])),_:1})])),default:r((()=>[n(B,{modelValue:he.value.businessDB,"onUpdate:modelValue":l[11]||(l[11]=e=>he.value.businessDB=e),class:"w-56",placeholder:"选择业务库"},{default:r((()=>[(d(!0),i(p,null,c(Fe.value,(e=>(d(),v(g,{key:e.aliasName,value:e.aliasName,label:e.aliasName,disabled:e.disable},{default:r((()=>[s("div",null,[s("span",null,f(e.aliasName),1),s("span",Z,f(e.dbName),1)])])),_:2},1032,["value","label","disabled"])))),128))])),_:1},8,["modelValue"])])),_:1}),n(M,null,{label:r((()=>[n(y,{content:"注：会自动在结构体global.Model其中包含主键和软删除相关操作配置",placement:"bottom",effect:"light"},{default:r((()=>[s("div",null,[m(" 使用GVA结构 "),n(t,null,{default:r((()=>[n(o)])),_:1})])])),_:1})])),default:r((()=>[n($,{modelValue:he.value.gvaModel,"onUpdate:modelValue":l[12]||(l[12]=e=>he.value.gvaModel=e),onChange:xe},null,8,["modelValue"])])),_:1}),n(M,null,{label:r((()=>[n(y,{content:"注：会自动在结构体添加 created_by updated_by deleted_by，方便用户进行资源权限控制",placement:"bottom",effect:"light"},{default:r((()=>[s("div",null,[m(" 创建资源标识 "),n(t,null,{default:r((()=>[n(o)])),_:1})])])),_:1})])),default:r((()=>[n($,{modelValue:he.value.autoCreateResource,"onUpdate:modelValue":l[13]||(l[13]=e=>he.value.autoCreateResource=e)},null,8,["modelValue"])])),_:1}),n(M,null,{label:r((()=>[n(y,{content:"注：把自动生成的API注册进数据库",placement:"bottom",effect:"light"},{default:r((()=>[ee])),_:1})])),default:r((()=>[n($,{modelValue:he.value.autoCreateApiToSql,"onUpdate:modelValue":l[14]||(l[14]=e=>he.value.autoCreateApiToSql=e)},null,8,["modelValue"])])),_:1}),n(M,null,{label:r((()=>[n(y,{content:"注：自动迁移生成的文件到yaml配置的对应位置",placement:"bottom",effect:"light"},{default:r((()=>[le])),_:1})])),default:r((()=>[n($,{modelValue:he.value.autoMoveFile,"onUpdate:modelValue":l[15]||(l[15]=e=>he.value.autoMoveFile=e)},null,8,["modelValue"])])),_:1})])),_:1},8,["rules","model"])]),s("div",ae,[s("div",te,[n(O,{type:"primary",onClick:l[16]||(l[16]=e=>Se())},{default:r((()=>[m("新增字段")])),_:1})]),n(me,{data:he.value.fields},{default:r((()=>[n(G,{align:"left",type:"index",label:"序列",width:"60"}),n(G,{align:"left",type:"index",label:"主键",width:"60"},{default:r((({row:e})=>[n($,{modelValue:e.primaryKey,"onUpdate:modelValue":l=>e.primaryKey=l},null,8,["modelValue","onUpdate:modelValue"])])),_:1}),n(G,{align:"left",prop:"fieldName",label:"字段名称",width:"160"},{default:r((({row:e})=>[n(I,{modelValue:e.fieldName,"onUpdate:modelValue":l=>e.fieldName=l},null,8,["modelValue","onUpdate:modelValue"])])),_:1}),n(G,{align:"left",prop:"fieldDesc",label:"中文名",width:"160"},{default:r((({row:e})=>[n(I,{modelValue:e.fieldDesc,"onUpdate:modelValue":l=>e.fieldDesc=l},null,8,["modelValue","onUpdate:modelValue"])])),_:1}),n(G,{align:"left",prop:"require",label:"必填"},{default:r((({row:e})=>[n($,{modelValue:e.require,"onUpdate:modelValue":l=>e.require=l},null,8,["modelValue","onUpdate:modelValue"])])),_:1}),n(G,{align:"left",prop:"sort",label:"排序"},{default:r((({row:e})=>[n($,{modelValue:e.sort,"onUpdate:modelValue":l=>e.sort=l},null,8,["modelValue","onUpdate:modelValue"])])),_:1}),n(G,{align:"left",prop:"fieldJson",width:"160px",label:"字段Json"},{default:r((({row:e})=>[n(I,{modelValue:e.fieldJson,"onUpdate:modelValue":l=>e.fieldJson=l},null,8,["modelValue","onUpdate:modelValue"])])),_:1}),n(G,{align:"left",prop:"fieldType",label:"字段类型",width:"160"},{default:r((({row:e})=>[n(B,{modelValue:e.fieldType,"onUpdate:modelValue":l=>e.fieldType=l,style:{width:"100%"},placeholder:"请选择字段类型",clearable:""},{default:r((()=>[(d(!0),i(p,null,c(ce.value,(e=>(d(),v(g,{key:e.value,label:e.label,value:e.value},null,8,["label","value"])))),128))])),_:2},1032,["modelValue","onUpdate:modelValue"])])),_:1}),n(G,{align:"left",prop:"dataTypeLong",label:"数据库字段长度",width:"160"},{default:r((({row:e})=>[n(I,{modelValue:e.dataTypeLong,"onUpdate:modelValue":l=>e.dataTypeLong=l},null,8,["modelValue","onUpdate:modelValue"])])),_:1}),n(G,{align:"left",prop:"columnName",label:"数据库字段",width:"160"},{default:r((({row:e})=>[n(I,{modelValue:e.columnName,"onUpdate:modelValue":l=>e.columnName=l},null,8,["modelValue","onUpdate:modelValue"])])),_:1}),n(G,{align:"left",prop:"comment",label:"数据库字段描述",width:"160"},{default:r((({row:e})=>[n(I,{modelValue:e.comment,"onUpdate:modelValue":l=>e.comment=l},null,8,["modelValue","onUpdate:modelValue"])])),_:1}),n(G,{align:"left",prop:"fieldSearchType",label:"搜索条件",width:"130"},{default:r((({row:e})=>[n(B,{modelValue:e.fieldSearchType,"onUpdate:modelValue":l=>e.fieldSearchType=l,style:{width:"100%"},placeholder:"请选择字段查询条件",clearable:""},{default:r((()=>[(d(!0),i(p,null,c(ve.value,(l=>(d(),v(g,{key:l.value,label:l.label,value:l.value,disabled:"string"!==e.fieldType&&"LIKE"===l.value||"int"!==e.fieldType&&"time.Time"!==e.fieldType&&"float64"!==e.fieldType&&("BETWEEN"===l.value||"NOT BETWEEN"===l.value)},null,8,["label","value","disabled"])))),128))])),_:2},1032,["modelValue","onUpdate:modelValue"])])),_:1}),n(G,{align:"left",label:"操作",width:"300",fixed:"right"},{default:r((e=>[n(O,{type:"primary",link:"",icon:"edit",onClick:l=>Se(e.row)},{default:r((()=>[m("高级编辑")])),_:2},1032,["onClick"]),n(O,{type:"primary",link:"",disabled:0===e.$index,onClick:l=>(e=>{if(0===e)return;const l=he.value.fields[e-1];he.value.fields.splice(e-1,1),he.value.fields.splice(e,0,l)})(e.$index)},{default:r((()=>[m("上移")])),_:2},1032,["disabled","onClick"]),n(O,{type:"primary",link:"",disabled:e.$index+1===he.value.fields.length,onClick:l=>(e=>{if(e===he.value.fields.length-1)return;const l=he.value.fields[e+1];he.value.fields.splice(e+1,1),he.value.fields.splice(e,0,l)})(e.$index)},{default:r((()=>[m("下移")])),_:2},1032,["disabled","onClick"]),n(P,{modelValue:e.row.visible,"onUpdate:modelValue":l=>e.row.visible=l,placement:"top"},{reference:r((()=>[n(O,{type:"primary",link:"",icon:"delete",onClick:l=>e.row.visible=!0},{default:r((()=>[m("删除")])),_:2},1032,["onClick"])])),default:r((()=>[oe,s("div",ue,[n(O,{type:"primary",link:"",onClick:l=>e.row.visible=!1},{default:r((()=>[m("取消")])),_:2},1032,["onClick"]),n(O,{type:"primary",onClick:l=>{return a=e.$index,void he.value.fields.splice(a,1);var a}},{default:r((()=>[m("确定")])),_:2},1032,["onClick"])])])),_:2},1032,["modelValue","onUpdate:modelValue"])])),_:1})])),_:1},8,["data"]),s("div",de,[n(O,{type:"primary",onClick:l[17]||(l[17]=e=>Je(!0))},{default:r((()=>[m("预览代码")])),_:1}),n(O,{type:"primary",onClick:l[18]||(l[18]=e=>Je(!1))},{default:r((()=>[m("生成代码")])),_:1})])]),n(pe,{modelValue:we.value,"onUpdate:modelValue":l[19]||(l[19]=e=>we.value=e),width:"70%",title:"组件内容"},{footer:r((()=>[s("div",ie,[n(O,{onClick:Me},{default:r((()=>[m("取 消")])),_:1}),n(O,{type:"primary",onClick:qe},{default:r((()=>[m("确 定")])),_:1})])])),default:r((()=>[we.value?(d(),v(S,{key:0,ref_key:"fieldDialogNode",ref:Le,"dialog-middle":De.value,"type-options":ce.value,"type-search-options":ve.value},null,8,["dialog-middle","type-options","type-search-options"])):b("",!0)])),_:1},8,["modelValue"]),n(pe,{modelValue:Ae.value,"onUpdate:modelValue":l[21]||(l[21]=e=>Ae.value=e)},{header:r((()=>[s("div",se,[ne,n(O,{type:"primary",onClick:Ue},{default:r((()=>[m("全选")])),_:1}),n(O,{type:"primary",onClick:je},{default:r((()=>[m("复制")])),_:1})])])),footer:r((()=>[s("div",re,[n(O,{type:"primary",onClick:l[20]||(l[20]=e=>Ae.value=!1)},{default:r((()=>[m("确 定")])),_:1})])])),default:r((()=>[Ae.value?(d(),v(L,{key:0,ref_key:"previewNode",ref:Te,"preview-code":Be.value},null,8,["preview-code"])):b("",!0)])),_:1},8,["modelValue"])])}}});export{me as default};