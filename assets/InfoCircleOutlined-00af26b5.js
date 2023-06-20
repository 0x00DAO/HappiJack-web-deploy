import{N as O,aw as S,aN as w,P as E,aO as I,aP as N,n as a,T as v,D as y,aQ as z,aR as B,aA as T,A as j,s as _}from"./index-2404be77.js";const f=e=>e?typeof e=="function"?e():e:null,k=e=>{const{componentCls:t,popoverColor:n,minWidth:o,fontWeightStrong:r,popoverPadding:l,boxShadowSecondary:i,colorTextHeading:s,borderRadiusLG:c,zIndexPopup:u,marginXS:p,colorBgElevated:d,popoverBg:g}=e;return[{[t]:Object.assign(Object.assign({},E(e)),{position:"absolute",top:0,left:{_skip_check_:!0,value:0},zIndex:u,fontWeight:"normal",whiteSpace:"normal",textAlign:"start",cursor:"auto",userSelect:"text",transformOrigin:"var(--arrow-x, 50%) var(--arrow-y, 50%)","--antd-arrow-background-color":d,"&-rtl":{direction:"rtl"},"&-hidden":{display:"none"},[`${t}-content`]:{position:"relative"},[`${t}-inner`]:{backgroundColor:g,backgroundClip:"padding-box",borderRadius:c,boxShadow:i,padding:l},[`${t}-title`]:{minWidth:o,marginBottom:p,color:s,fontWeight:r},[`${t}-inner-content`]:{color:n}})},I(e,{colorBg:"var(--antd-arrow-background-color)"}),{[`${t}-pure`]:{position:"relative",maxWidth:"none",margin:e.sizePopupArrow,display:"inline-block",[`${t}-content`]:{display:"inline-block"}}}]},W=e=>{const{componentCls:t}=e;return{[t]:N.map(n=>{const o=e[`${n}6`];return{[`&${t}-${n}`]:{"--antd-arrow-background-color":o,[`${t}-inner`]:{backgroundColor:o},[`${t}-arrow`]:{background:"transparent"}}}})}},D=e=>{const{componentCls:t,lineWidth:n,lineType:o,colorSplit:r,paddingSM:l,controlHeight:i,fontSize:s,lineHeight:c,padding:u}=e,p=i-Math.round(s*c),d=p/2,g=p/2-n,m=u;return{[t]:{[`${t}-inner`]:{padding:0},[`${t}-title`]:{margin:0,padding:`${d}px ${m}px ${g}px`,borderBottom:`${n}px ${o} ${r}`},[`${t}-inner-content`]:{padding:`${l}px ${m}px`}}}},x=O("Popover",e=>{const{colorBgElevated:t,colorText:n,wireframe:o}=e,r=S(e,{popoverPadding:12,popoverBg:t,popoverColor:n});return[k(r),W(r),o&&D(r),w(r,"zoom-big")]},e=>({width:177,minWidth:177,zIndexPopup:e.zIndexPopupBase+30}),{deprecatedTokens:[["width","minWidth"]]});var R=globalThis&&globalThis.__rest||function(e,t){var n={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.indexOf(o)<0&&(n[o]=e[o]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,o=Object.getOwnPropertySymbols(e);r<o.length;r++)t.indexOf(o[r])<0&&Object.prototype.propertyIsEnumerable.call(e,o[r])&&(n[o[r]]=e[o[r]]);return n};const A=(e,t,n)=>{if(!(!t&&!n))return a.createElement(a.Fragment,null,t&&a.createElement("div",{className:`${e}-title`},f(t)),a.createElement("div",{className:`${e}-inner-content`},f(n)))};function H(e){const{hashId:t,prefixCls:n,className:o,style:r,placement:l="top",title:i,content:s,children:c}=e;return a.createElement("div",{className:y(t,n,`${n}-pure`,`${n}-placement-${l}`,o),style:r},a.createElement("div",{className:`${n}-arrow`}),a.createElement(z,Object.assign({},e,{className:t,prefixCls:n}),c||A(n,i,s)))}function M(e){const{prefixCls:t}=e,n=R(e,["prefixCls"]),{getPrefixCls:o}=a.useContext(v),r=o("popover",t),[l,i]=x(r);return l(a.createElement(H,Object.assign({},n,{prefixCls:r,hashId:i})))}var L=globalThis&&globalThis.__rest||function(e,t){var n={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.indexOf(o)<0&&(n[o]=e[o]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,o=Object.getOwnPropertySymbols(e);r<o.length;r++)t.indexOf(o[r])<0&&Object.prototype.propertyIsEnumerable.call(e,o[r])&&(n[o[r]]=e[o[r]]);return n};const F=e=>{let{title:t,content:n,prefixCls:o}=e;return a.createElement(a.Fragment,null,t&&a.createElement("div",{className:`${o}-title`},f(t)),a.createElement("div",{className:`${o}-inner-content`},f(n)))},h=a.forwardRef((e,t)=>{const{prefixCls:n,title:o,content:r,overlayClassName:l,placement:i="top",trigger:s="hover",mouseEnterDelay:c=.1,mouseLeaveDelay:u=.1,overlayStyle:p={}}=e,d=L(e,["prefixCls","title","content","overlayClassName","placement","trigger","mouseEnterDelay","mouseLeaveDelay","overlayStyle"]),{getPrefixCls:g}=a.useContext(v),m=g("popover",n),[C,b]=x(m),P=g(),$=y(l,b);return C(a.createElement(B,Object.assign({placement:i,trigger:s,mouseEnterDelay:c,mouseLeaveDelay:u,overlayStyle:p},d,{prefixCls:m,overlayClassName:$,ref:t,overlay:o||r?a.createElement(F,{prefixCls:m,title:o,content:r}):null,transitionName:T(P,"zoom-big",d.transitionName),"data-popover-inject":!0})))});h._InternalPanelDoNotUseOrYouWillBeFired=M;const Y=h;var G={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"}},{tag:"path",attrs:{d:"M464 336a48 48 0 1096 0 48 48 0 10-96 0zm72 112h-48c-4.4 0-8 3.6-8 8v272c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8V456c0-4.4-3.6-8-8-8z"}}]},name:"info-circle",theme:"outlined"};const Q=G;var U=function(t,n){return a.createElement(j,_({},t,{ref:n,icon:Q}))};const Z=a.forwardRef(U);export{Z as I,Y as P};
