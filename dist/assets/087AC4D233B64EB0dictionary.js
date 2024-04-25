/*! 
 Build based on gin-vue-admin 
 Time : 1713878256000 */
import{f as a}from"./087AC4D233B64EB0sysDictionary2.js";import{cg as t,a as e}from"./087AC4D233B64EB0index.js";const i=t("dictionary",(()=>{const t=e({}),i=a=>{t.value={...t.value,...a}};return{dictionaryMap:t,setDictionaryMap:i,getDictionary:async e=>{if(t.value[e]&&t.value[e].length)return t.value[e];{const s=await a({type:e});if(0===s.code){const a={},r=[];return s.data.resysDictionary.sysDictionaryDetails&&s.data.resysDictionary.sysDictionaryDetails.forEach((a=>{r.push({label:a.label,value:a.value,extend:a.extend})})),a[s.data.resysDictionary.type]=r,i(a),t.value[e]}}}}}));export{i as u};
