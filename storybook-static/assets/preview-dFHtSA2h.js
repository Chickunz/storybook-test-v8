const __vite__fileDeps=["./DocsRenderer-K4EAMTCU-RzN_rIn2.js","./iframe-xRA1ci_o.js","./index-CTjT7uj6.js","./react-18-DFEOekEM.js","./index-9r8iugjR.js","./index-2pUeMard.js","./inheritsLoose-Cbzi6ZEz.js","./index-DXimoRZY.js","./index-Bx4XDAbk.js","./index-DrFu-skq.js"],__vite__mapDeps=i=>i.map(i=>__vite__fileDeps[i]);
import{_ as a}from"./iframe-xRA1ci_o.js";import"../sb-preview/runtime.js";const{global:s}=__STORYBOOK_MODULE_GLOBAL__;var _=Object.entries(s.TAGS_OPTIONS??{}).reduce((e,r)=>{let[t,o]=r;return o.excludeFromDocsStories&&(e[t]=!0),e},{}),d={docs:{renderer:async()=>{let{DocsRenderer:e}=await a(()=>import("./DocsRenderer-K4EAMTCU-RzN_rIn2.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9]),import.meta.url);return new e},stories:{filter:e=>{var r;return(e.tags||[]).filter(t=>_[t]).length===0&&!((r=e.parameters.docs)!=null&&r.disable)}}}};export{d as parameters};