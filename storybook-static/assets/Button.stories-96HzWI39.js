import{j as m}from"./jsx-runtime-Cw0GR0a5.js";import{r as g,R as P}from"./index-CTjT7uj6.js";import{g as oo,a as ao,s as C,B as ro,r as no,c as n,b as x,d as io,u as to,_ as so,e as E,f as eo,h as lo}from"./ButtonBase-BHbdzHd0.js";import{_ as i}from"./inheritsLoose-Cbzi6ZEz.js";function co(o){return ao("MuiButton",o)}const f=oo("MuiButton",["root","text","textInherit","textPrimary","textSecondary","textSuccess","textError","textInfo","textWarning","outlined","outlinedInherit","outlinedPrimary","outlinedSecondary","outlinedSuccess","outlinedError","outlinedInfo","outlinedWarning","contained","containedInherit","containedPrimary","containedSecondary","containedSuccess","containedError","containedInfo","containedWarning","disableElevation","focusVisible","disabled","colorInherit","colorPrimary","colorSecondary","colorSuccess","colorError","colorInfo","colorWarning","textSizeSmall","textSizeMedium","textSizeLarge","outlinedSizeSmall","outlinedSizeMedium","outlinedSizeLarge","containedSizeSmall","containedSizeMedium","containedSizeLarge","sizeMedium","sizeSmall","sizeLarge","fullWidth","startIcon","endIcon","icon","iconSizeSmall","iconSizeMedium","iconSizeLarge"]),po=g.createContext({}),uo=g.createContext(void 0),vo=["children","color","component","className","disabled","disableElevation","disableFocusRipple","endIcon","focusVisibleClassName","fullWidth","size","startIcon","type","variant"],go=o=>{const{color:a,disableElevation:r,fullWidth:s,size:t,variant:e,classes:l}=o,z={root:["root",e,`${e}${n(a)}`,`size${n(t)}`,`${e}Size${n(t)}`,`color${n(a)}`,r&&"disableElevation",s&&"fullWidth"],label:["label"],startIcon:["icon","startIcon",`iconSize${n(t)}`],endIcon:["icon","endIcon",`iconSize${n(t)}`]},y=eo(z,co,l);return i({},l,y)},G=o=>i({},o.size==="small"&&{"& > *:nth-of-type(1)":{fontSize:18}},o.size==="medium"&&{"& > *:nth-of-type(1)":{fontSize:20}},o.size==="large"&&{"& > *:nth-of-type(1)":{fontSize:22}}),bo=C(ro,{shouldForwardProp:o=>no(o)||o==="classes",name:"MuiButton",slot:"Root",overridesResolver:(o,a)=>{const{ownerState:r}=o;return[a.root,a[r.variant],a[`${r.variant}${n(r.color)}`],a[`size${n(r.size)}`],a[`${r.variant}Size${n(r.size)}`],r.color==="inherit"&&a.colorInherit,r.disableElevation&&a.disableElevation,r.fullWidth&&a.fullWidth]}})(({theme:o,ownerState:a})=>{var r,s;const t=o.palette.mode==="light"?o.palette.grey[300]:o.palette.grey[800],e=o.palette.mode==="light"?o.palette.grey.A100:o.palette.grey[700];return i({},o.typography.button,{minWidth:64,padding:"6px 16px",borderRadius:(o.vars||o).shape.borderRadius,transition:o.transitions.create(["background-color","box-shadow","border-color","color"],{duration:o.transitions.duration.short}),"&:hover":i({textDecoration:"none",backgroundColor:o.vars?`rgba(${o.vars.palette.text.primaryChannel} / ${o.vars.palette.action.hoverOpacity})`:x(o.palette.text.primary,o.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},a.variant==="text"&&a.color!=="inherit"&&{backgroundColor:o.vars?`rgba(${o.vars.palette[a.color].mainChannel} / ${o.vars.palette.action.hoverOpacity})`:x(o.palette[a.color].main,o.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},a.variant==="outlined"&&a.color!=="inherit"&&{border:`1px solid ${(o.vars||o).palette[a.color].main}`,backgroundColor:o.vars?`rgba(${o.vars.palette[a.color].mainChannel} / ${o.vars.palette.action.hoverOpacity})`:x(o.palette[a.color].main,o.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},a.variant==="contained"&&{backgroundColor:o.vars?o.vars.palette.Button.inheritContainedHoverBg:e,boxShadow:(o.vars||o).shadows[4],"@media (hover: none)":{boxShadow:(o.vars||o).shadows[2],backgroundColor:(o.vars||o).palette.grey[300]}},a.variant==="contained"&&a.color!=="inherit"&&{backgroundColor:(o.vars||o).palette[a.color].dark,"@media (hover: none)":{backgroundColor:(o.vars||o).palette[a.color].main}}),"&:active":i({},a.variant==="contained"&&{boxShadow:(o.vars||o).shadows[8]}),[`&.${f.focusVisible}`]:i({},a.variant==="contained"&&{boxShadow:(o.vars||o).shadows[6]}),[`&.${f.disabled}`]:i({color:(o.vars||o).palette.action.disabled},a.variant==="outlined"&&{border:`1px solid ${(o.vars||o).palette.action.disabledBackground}`},a.variant==="contained"&&{color:(o.vars||o).palette.action.disabled,boxShadow:(o.vars||o).shadows[0],backgroundColor:(o.vars||o).palette.action.disabledBackground})},a.variant==="text"&&{padding:"6px 8px"},a.variant==="text"&&a.color!=="inherit"&&{color:(o.vars||o).palette[a.color].main},a.variant==="outlined"&&{padding:"5px 15px",border:"1px solid currentColor"},a.variant==="outlined"&&a.color!=="inherit"&&{color:(o.vars||o).palette[a.color].main,border:o.vars?`1px solid rgba(${o.vars.palette[a.color].mainChannel} / 0.5)`:`1px solid ${x(o.palette[a.color].main,.5)}`},a.variant==="contained"&&{color:o.vars?o.vars.palette.text.primary:(r=(s=o.palette).getContrastText)==null?void 0:r.call(s,o.palette.grey[300]),backgroundColor:o.vars?o.vars.palette.Button.inheritContainedBg:t,boxShadow:(o.vars||o).shadows[2]},a.variant==="contained"&&a.color!=="inherit"&&{color:(o.vars||o).palette[a.color].contrastText,backgroundColor:(o.vars||o).palette[a.color].main},a.color==="inherit"&&{color:"inherit",borderColor:"currentColor"},a.size==="small"&&a.variant==="text"&&{padding:"4px 5px",fontSize:o.typography.pxToRem(13)},a.size==="large"&&a.variant==="text"&&{padding:"8px 11px",fontSize:o.typography.pxToRem(15)},a.size==="small"&&a.variant==="outlined"&&{padding:"3px 9px",fontSize:o.typography.pxToRem(13)},a.size==="large"&&a.variant==="outlined"&&{padding:"7px 21px",fontSize:o.typography.pxToRem(15)},a.size==="small"&&a.variant==="contained"&&{padding:"4px 10px",fontSize:o.typography.pxToRem(13)},a.size==="large"&&a.variant==="contained"&&{padding:"8px 22px",fontSize:o.typography.pxToRem(15)},a.fullWidth&&{width:"100%"})},({ownerState:o})=>o.disableElevation&&{boxShadow:"none","&:hover":{boxShadow:"none"},[`&.${f.focusVisible}`]:{boxShadow:"none"},"&:active":{boxShadow:"none"},[`&.${f.disabled}`]:{boxShadow:"none"}}),xo=C("span",{name:"MuiButton",slot:"StartIcon",overridesResolver:(o,a)=>{const{ownerState:r}=o;return[a.startIcon,a[`iconSize${n(r.size)}`]]}})(({ownerState:o})=>i({display:"inherit",marginRight:8,marginLeft:-4},o.size==="small"&&{marginLeft:-2},G(o))),fo=C("span",{name:"MuiButton",slot:"EndIcon",overridesResolver:(o,a)=>{const{ownerState:r}=o;return[a.endIcon,a[`iconSize${n(r.size)}`]]}})(({ownerState:o})=>i({display:"inherit",marginRight:-4,marginLeft:8},o.size==="small"&&{marginRight:-2},G(o))),mo=g.forwardRef(function(a,r){const s=g.useContext(po),t=g.useContext(uo),e=io(s,a),l=to({props:e,name:"MuiButton"}),{children:z,color:y="primary",component:I="button",className:H,disabled:$=!1,disableElevation:A=!1,disableFocusRipple:R=!1,endIcon:h,focusVisibleClassName:D,fullWidth:J=!1,size:K="medium",startIcon:k,type:S,variant:Q="text"}=l,X=so(l,vo),b=i({},l,{color:y,component:I,disabled:$,disableElevation:A,disableFocusRipple:R,fullWidth:J,size:K,type:S,variant:Q}),c=go(b),Y=k&&m.jsx(xo,{className:c.startIcon,ownerState:b,children:k}),Z=h&&m.jsx(fo,{className:c.endIcon,ownerState:b,children:h}),w=t||"";return m.jsxs(bo,i({ownerState:b,className:E(s.className,c.root,H,w),component:I,disabled:$,focusRipple:!R,focusVisibleClassName:E(c.focusVisible,D),ref:r,type:S},X,{classes:c,children:[Y,z,Z]}))}),B=P.forwardRef(({primary:o,size:a,label:r,onClick:s},t)=>{const e=P.useRef(null),l=lo(e,t);return m.jsx(mo,{onClick:s,ref:l,children:r})});B.displayName="Button";const zo=B;B.__docgenInfo={description:"",methods:[],displayName:"Button",props:{primary:{required:!1,tsType:{name:"boolean"},description:"Is this the principal call to action on the page?"},size:{required:!1,tsType:{name:"union",raw:'"small" | "medium" | "large"',elements:[{name:"literal",value:'"small"'},{name:"literal",value:'"medium"'},{name:"literal",value:'"large"'}]},description:"How large should the button be?"},label:{required:!0,tsType:{name:"string"},description:"Button contents"}}};const yo={title:"Components/Button",component:zo},d={args:{primary:!0,label:"Button"}},p={args:{label:"Button"}},u={args:{size:"large",label:"Button"}},v={args:{size:"small",label:"Button"}};var _,W,N;d.parameters={...d.parameters,docs:{...(_=d.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    primary: true,
    label: "Button"
  }
}`,...(N=(W=d.parameters)==null?void 0:W.docs)==null?void 0:N.source}}};var T,M,L;p.parameters={...p.parameters,docs:{...(T=p.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    label: "Button"
  }
}`,...(L=(M=p.parameters)==null?void 0:M.docs)==null?void 0:L.source}}};var j,O,V;u.parameters={...u.parameters,docs:{...(j=u.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    size: "large",
    label: "Button"
  }
}`,...(V=(O=u.parameters)==null?void 0:O.docs)==null?void 0:V.source}}};var F,U,q;v.parameters={...v.parameters,docs:{...(F=v.parameters)==null?void 0:F.docs,source:{originalSource:`{
  args: {
    size: "small",
    label: "Button"
  }
}`,...(q=(U=v.parameters)==null?void 0:U.docs)==null?void 0:q.source}}};const Co=["Primary","Secondary","Large","Small"],ho=Object.freeze(Object.defineProperty({__proto__:null,Large:u,Primary:d,Secondary:p,Small:v,__namedExportsOrder:Co,default:yo},Symbol.toStringTag,{value:"Module"}));export{ho as B,d as P};
