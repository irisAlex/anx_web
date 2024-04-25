/*! 
 Build based on gin-vue-admin 
 Time : 1713878256000 */
const e=e=>e[0]?e.replace(e[0],e[0].toUpperCase()):"",a=e=>e[0]?e.replace(e[0],e[0].toLowerCase()):"",t=e=>"ID"===e?"ID":e.replace(/([A-Z])/g,"_$1").toLowerCase(),r=e=>e.replace(/\_(\w)/g,(function(e,a){return a.toUpperCase()})),o=e=>new Date(e).toLocaleDateString();export{a,e as b,r as c,o as f,t};
