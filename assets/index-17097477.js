import{ag as ot,n as r,A as se,s as ae,M as ee,bh as rt,N as it,D as te,Y as lt,T as we,L as Ce,ah as Te,y as Z,aR as le,an as $e,af as st,ai as at,bi as ct}from"./index-2404be77.js";import{a as dt}from"./row-a4e8a325.js";import{i as ut,u as pt}from"./index-53046f57.js";import{T as ft}from"./TextArea-986db74c.js";const je=e=>({color:e.colorLink,textDecoration:"none",outline:"none",cursor:"pointer",transition:`color ${e.motionDurationSlow}`,"&:focus, &:hover":{color:e.colorLinkHover},"&:active":{color:e.colorLinkActive}});var Le=function(n){if(ot()&&window.document.documentElement){var o=Array.isArray(n)?n:[n],t=window.document.documentElement;return o.some(function(i){return i in t.style})}return!1},gt=function(n,o){if(!Le(n))return!1;var t=document.createElement("div"),i=t.style[n];return t.style[n]=o,t.style[n]!==i};function ve(e,n){return!Array.isArray(e)&&n!==void 0?gt(e,n):Le(e)}var mt={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M832 64H296c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h496v688c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8V96c0-17.7-14.3-32-32-32zM704 192H192c-17.7 0-32 14.3-32 32v530.7c0 8.5 3.4 16.6 9.4 22.6l173.3 173.3c2.2 2.2 4.7 4 7.4 5.5v1.9h4.2c3.5 1.3 7.2 2 11 2H704c17.7 0 32-14.3 32-32V224c0-17.7-14.3-32-32-32zM350 856.2L263.9 770H350v86.2zM664 888H414V746c0-22.1-17.9-40-40-40H232V264h432v624z"}}]},name:"copy",theme:"outlined"};const yt=mt;var bt=function(n,o){return r.createElement(se,ae({},n,{ref:o,icon:yt}))};const vt=r.forwardRef(bt);var ht={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M257.7 752c2 0 4-.2 6-.5L431.9 722c2-.4 3.9-1.3 5.3-2.8l423.9-423.9a9.96 9.96 0 000-14.1L694.9 114.9c-1.9-1.9-4.4-2.9-7.1-2.9s-5.2 1-7.1 2.9L256.8 538.8c-1.5 1.5-2.4 3.3-2.8 5.3l-29.5 168.2a33.5 33.5 0 009.4 29.8c6.6 6.4 14.9 9.9 23.8 9.9zm67.4-174.4L687.8 215l73.3 73.3-362.7 362.6-88.9 15.7 15.6-89zM880 836H144c-17.7 0-32 14.3-32 32v36c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-36c0-17.7-14.3-32-32-32z"}}]},name:"edit",theme:"outlined"};const Et=ht;var St=function(n,o){return r.createElement(se,ae({},n,{ref:o,icon:Et}))};const xt=r.forwardRef(St);var Ot={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M864 170h-60c-4.4 0-8 3.6-8 8v518H310v-73c0-6.7-7.8-10.5-13-6.3l-141.9 112a8 8 0 000 12.6l141.9 112c5.3 4.2 13 .4 13-6.3v-75h498c35.3 0 64-28.7 64-64V178c0-4.4-3.6-8-8-8z"}}]},name:"enter",theme:"outlined"};const wt=Ot;var Ct=function(n,o){return r.createElement(se,ae({},n,{ref:o,icon:wt}))};const Tt=r.forwardRef(Ct);var $t=globalThis&&globalThis.__rest||function(e,n){var o={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&n.indexOf(t)<0&&(o[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,t=Object.getOwnPropertySymbols(e);i<t.length;i++)n.indexOf(t[i])<0&&Object.prototype.propertyIsEnumerable.call(e,t[i])&&(o[t[i]]=e[t[i]]);return o};const jt={border:0,background:"transparent",padding:0,lineHeight:"inherit",display:"inline-block"},Lt=r.forwardRef((e,n)=>{const o=f=>{const{keyCode:a}=f;a===ee.ENTER&&f.preventDefault()},t=f=>{const{keyCode:a}=f,{onClick:S}=e;a===ee.ENTER&&S&&S()},{style:i,noStyle:p,disabled:m}=e,E=$t(e,["style","noStyle","disabled"]);let u={};return p||(u=Object.assign({},jt)),m&&(u.pointerEvents="none"),u=Object.assign(Object.assign({},u),i),r.createElement("div",Object.assign({role:"button",tabIndex:0,ref:n},E,{onKeyDown:o,onKeyUp:t,style:u}))}),he=Lt,Rt=(e,n,o,t)=>{const{titleMarginBottom:i,fontWeightStrong:p}=t;return{marginBottom:i,color:o,fontWeight:p,fontSize:e,lineHeight:n}},It=e=>{const n=[1,2,3,4,5],o={};return n.forEach(t=>{o[`
      h${t}&,
      div&-h${t},
      div&-h${t} > textarea,
      h${t}
    `]=Rt(e[`fontSizeHeading${t}`],e[`lineHeightHeading${t}`],e.colorTextHeading,e)}),o},Pt=e=>{const{componentCls:n}=e;return{"a&, a":Object.assign(Object.assign({},je(e)),{textDecoration:e.linkDecoration,"&:active, &:hover":{textDecoration:e.linkHoverDecoration},[`&[disabled], &${n}-disabled`]:{color:e.colorTextDisabled,cursor:"not-allowed","&:active, &:hover":{color:e.colorTextDisabled},"&:active":{pointerEvents:"none"}}})}},_t=e=>({code:{margin:"0 0.2em",paddingInline:"0.4em",paddingBlock:"0.2em 0.1em",fontSize:"85%",fontFamily:e.fontFamilyCode,background:"rgba(150, 150, 150, 0.1)",border:"1px solid rgba(100, 100, 100, 0.2)",borderRadius:3},kbd:{margin:"0 0.2em",paddingInline:"0.4em",paddingBlock:"0.15em 0.1em",fontSize:"90%",fontFamily:e.fontFamilyCode,background:"rgba(150, 150, 150, 0.06)",border:"1px solid rgba(100, 100, 100, 0.2)",borderBottomWidth:2,borderRadius:3},mark:{padding:0,backgroundColor:rt[2]},"u, ins":{textDecoration:"underline",textDecorationSkipInk:"auto"},"s, del":{textDecoration:"line-through"},strong:{fontWeight:600},"ul, ol":{marginInline:0,marginBlock:"0 1em",padding:0,li:{marginInline:"20px 0",marginBlock:0,paddingInline:"4px 0",paddingBlock:0}},ul:{listStyleType:"circle",ul:{listStyleType:"disc"}},ol:{listStyleType:"decimal"},"pre, blockquote":{margin:"1em 0"},pre:{padding:"0.4em 0.6em",whiteSpace:"pre-wrap",wordWrap:"break-word",background:"rgba(150, 150, 150, 0.1)",border:"1px solid rgba(100, 100, 100, 0.2)",borderRadius:3,fontFamily:e.fontFamilyCode,code:{display:"inline",margin:0,padding:0,fontSize:"inherit",fontFamily:"inherit",background:"transparent",border:0}},blockquote:{paddingInline:"0.6em 0",paddingBlock:0,borderInlineStart:"4px solid rgba(100, 100, 100, 0.2)",opacity:.85}}),kt=e=>{const{componentCls:n}=e,t=ut(e).inputPaddingVertical+1;return{"&-edit-content":{position:"relative","div&":{insetInlineStart:-e.paddingSM,marginTop:-t,marginBottom:`calc(1em - ${t}px)`},[`${n}-edit-content-confirm`]:{position:"absolute",insetInlineEnd:e.marginXS+2,insetBlockEnd:e.marginXS,color:e.colorTextDescription,fontWeight:"normal",fontSize:e.fontSize,fontStyle:"normal",pointerEvents:"none"},textarea:{margin:"0!important",MozTransition:"none",height:"1em"}}}},Mt=e=>({"&-copy-success":{[`
    &,
    &:hover,
    &:focus`]:{color:e.colorSuccess}}}),Nt=()=>({[`
  a&-ellipsis,
  span&-ellipsis
  `]:{display:"inline-block",maxWidth:"100%"},"&-single-line":{whiteSpace:"nowrap"},"&-ellipsis-single-line":{overflow:"hidden",textOverflow:"ellipsis","a&, span&":{verticalAlign:"bottom"}},"&-ellipsis-multiple-line":{display:"-webkit-box",overflow:"hidden",WebkitLineClamp:3,WebkitBoxOrient:"vertical"}}),zt=e=>{const{componentCls:n,titleMarginTop:o}=e;return{[n]:Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({color:e.colorText,wordBreak:"break-word",lineHeight:e.lineHeight,[`&${n}-secondary`]:{color:e.colorTextDescription},[`&${n}-success`]:{color:e.colorSuccess},[`&${n}-warning`]:{color:e.colorWarning},[`&${n}-danger`]:{color:e.colorError,"a&:active, a&:focus":{color:e.colorErrorActive},"a&:hover":{color:e.colorErrorHover}},[`&${n}-disabled`]:{color:e.colorTextDisabled,cursor:"not-allowed",userSelect:"none"},[`
        div&,
        p
      `]:{marginBottom:"1em"}},It(e)),{[`
      & + h1${n},
      & + h2${n},
      & + h3${n},
      & + h4${n},
      & + h5${n}
      `]:{marginTop:o},[`
      div,
      ul,
      li,
      p,
      h1,
      h2,
      h3,
      h4,
      h5`]:{[`
        + h1,
        + h2,
        + h3,
        + h4,
        + h5
        `]:{marginTop:o}}}),_t(e)),Pt(e)),{[`
        ${n}-expand,
        ${n}-edit,
        ${n}-copy
      `]:Object.assign(Object.assign({},je(e)),{marginInlineStart:e.marginXXS})}),kt(e)),Mt(e)),Nt()),{"&-rtl":{direction:"rtl"}})}},Re=it("Typography",e=>[zt(e)],e=>({titleMarginTop:"1.2em",titleMarginBottom:"0.5em",fontWeightStrong:e.fontWeightStrong})),Ht=e=>{let{prefixCls:n,"aria-label":o,className:t,style:i,direction:p,maxLength:m,autoSize:E=!0,value:u,onSave:f,onCancel:a,onEnd:S,component:g,enterIcon:$=r.createElement(Tt,null)}=e;const h=r.useRef(null),w=r.useRef(!1),k=r.useRef(),[R,C]=r.useState(u);r.useEffect(()=>{C(u)},[u]),r.useEffect(()=>{if(h.current&&h.current.resizableTextArea){const{textArea:O}=h.current.resizableTextArea;O.focus();const{length:j}=O.value;O.setSelectionRange(j,j)}},[]);const c=O=>{let{target:j}=O;C(j.value.replace(/[\n\r]/g,""))},D=()=>{w.current=!0},B=()=>{w.current=!1},y=O=>{let{keyCode:j}=O;w.current||(k.current=j)},A=()=>{f(R.trim())},b=O=>{let{keyCode:j,ctrlKey:oe,altKey:V,metaKey:N,shiftKey:K}=O;k.current===j&&!w.current&&!oe&&!V&&!N&&!K&&(j===ee.ENTER?(A(),S==null||S()):j===ee.ESC&&a())},d=()=>{A()},T=g?`${n}-${g}`:"",[W,M]=Re(n),_=te(n,`${n}-edit-content`,{[`${n}-rtl`]:p==="rtl"},t,T,M);return W(r.createElement("div",{className:_,style:i},r.createElement(ft,{ref:h,maxLength:m,value:R,onChange:c,onKeyDown:y,onKeyUp:b,onCompositionStart:D,onCompositionEnd:B,onBlur:d,"aria-label":o,rows:1,autoSize:E}),$!==null?lt($,{className:`${n}-edit-content-confirm`}):null))},Dt=Ht;function re(e,n){return r.useMemo(()=>{const o=!!e;return[o,Object.assign(Object.assign({},n),o&&typeof e=="object"?e:null)]},[e])}const Bt=(e,n)=>{const o=r.useRef(!1);r.useEffect(()=>{o.current?e():o.current=!0},n)},Wt=Bt;var At=globalThis&&globalThis.__rest||function(e,n){var o={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&n.indexOf(t)<0&&(o[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,t=Object.getOwnPropertySymbols(e);i<t.length;i++)n.indexOf(t[i])<0&&Object.prototype.propertyIsEnumerable.call(e,t[i])&&(o[t[i]]=e[t[i]]);return o};const Kt=r.forwardRef((e,n)=>{var{prefixCls:o,component:t="article",className:i,rootClassName:p,setContentRef:m,children:E,direction:u}=e,f=At(e,["prefixCls","component","className","rootClassName","setContentRef","children","direction"]);const{getPrefixCls:a,direction:S}=r.useContext(we),g=u??S;let $=n;m&&($=Ce(n,m));const h=a("typography",o),[w,k]=Re(h),R=te(h,{[`${h}-rtl`]:g==="rtl"},i,p,k);return w(r.createElement(t,Object.assign({className:R,ref:$},f),E))}),Ie=Kt;function Pe(e){const n=typeof e;return n==="string"||n==="number"}function Ft(e){let n=0;return e.forEach(o=>{Pe(o)?n+=String(o).length:n+=1}),n}function Ee(e,n){let o=0;const t=[];for(let i=0;i<e.length;i+=1){if(o===n)return t;const p=e[i],E=Pe(p)?String(p).length:1,u=o+E;if(u>n){const f=n-o;return t.push(String(p).slice(0,f)),t}t.push(p),o=u}return e}const Vt=0,Y=1,Se=2,ie=3,xe=4,Ut=e=>{let{enabledMeasure:n,children:o,text:t,width:i,fontSize:p,rows:m,onEllipsis:E}=e;const[[u,f,a],S]=r.useState([0,0,0]),[g,$]=r.useState(Vt),[h,w]=r.useState(0),k=r.useRef(null),R=r.useRef(null),C=r.useMemo(()=>Te(t),[t]),c=r.useMemo(()=>Ft(C),[C]),D=r.useMemo(()=>!n||g!==ie?o(C,!1):o(Ee(C,f),f<c),[n,g,o,C,f,c]);Z(()=>{n&&i&&p&&c&&($(Y),S([0,Math.ceil(c/2),c]))},[n,i,p,t,c,m]),Z(()=>{var b;g===Y&&w(((b=k.current)===null||b===void 0?void 0:b.offsetHeight)||0)},[g]),Z(()=>{var b,d;if(h){if(g===Y){const T=((b=R.current)===null||b===void 0?void 0:b.offsetHeight)||0,W=m*h;T<=W?($(xe),E(!1)):$(Se)}else if(g===Se)if(u!==a){const T=((d=R.current)===null||d===void 0?void 0:d.offsetHeight)||0,W=m*h;let M=u,_=a;u===a-1?_=u:T<=W?M=f:_=f;const O=Math.ceil((M+_)/2);S([M,O,_])}else $(ie),E(!0)}},[g,u,a,m,h]);const B={width:i,whiteSpace:"normal",margin:0,padding:0},y=(b,d,T)=>r.createElement("span",{"aria-hidden":!0,ref:d,style:Object.assign({position:"fixed",display:"block",left:0,top:0,zIndex:-9999,visibility:"hidden",pointerEvents:"none",fontSize:Math.floor(p/2)*2},T)},b),A=(b,d)=>{const T=Ee(C,b);return y(o(T,!0),d,B)};return r.createElement(r.Fragment,null,D,n&&g!==ie&&g!==xe&&r.createElement(r.Fragment,null,y("lg",k,{wordBreak:"keep-all",whiteSpace:"nowrap"}),g===Y?y(o(C,!1),R,B):A(f,R)))},Xt=Ut,Jt=e=>{let{enabledEllipsis:n,isEllipsis:o,children:t,tooltipProps:i}=e;return!(i!=null&&i.title)||!n?t:r.createElement(le,Object.assign({open:o?void 0:!1},i),t)},qt=Jt;var Gt=globalThis&&globalThis.__rest||function(e,n){var o={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&n.indexOf(t)<0&&(o[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,t=Object.getOwnPropertySymbols(e);i<t.length;i++)n.indexOf(t[i])<0&&Object.prototype.propertyIsEnumerable.call(e,t[i])&&(o[t[i]]=e[t[i]]);return o};function Yt(e,n){let{mark:o,code:t,underline:i,delete:p,strong:m,keyboard:E,italic:u}=e,f=n;function a(S,g){g&&(f=r.createElement(S,{},f))}return a("strong",m),a("u",i),a("del",p),a("code",t),a("mark",o),a("kbd",E),a("i",u),f}function Q(e,n,o){return e===!0||e===void 0?n:e||o&&n}function Oe(e){return e===!1?[!1,!1]:Array.isArray(e)?e:[e]}const Qt="...",Zt=r.forwardRef((e,n)=>{var o,t,i;const{prefixCls:p,className:m,style:E,type:u,disabled:f,children:a,ellipsis:S,editable:g,copyable:$,component:h,title:w}=e,k=Gt(e,["prefixCls","className","style","type","disabled","children","ellipsis","editable","copyable","component","title"]),{getPrefixCls:R,direction:C}=r.useContext(we),[c]=pt("Text"),D=r.useRef(null),B=r.useRef(null),y=R("typography",p),A=$e(k,["mark","code","delete","underline","strong","keyboard","italic"]),[b,d]=re(g),[T,W]=st(!1,{value:d.editing}),{triggerType:M=["icon"]}=d,_=l=>{var s;l&&((s=d.onStart)===null||s===void 0||s.call(d)),W(l)};Wt(()=>{var l;T||(l=B.current)===null||l===void 0||l.focus()},[T]);const O=l=>{l==null||l.preventDefault(),_(!0)},j=l=>{var s;(s=d.onChange)===null||s===void 0||s.call(d,l),_(!1)},oe=()=>{var l;(l=d.onCancel)===null||l===void 0||l.call(d),_(!1)},[V,N]=re($),[K,ce]=r.useState(!1),de=r.useRef(),ue={};N.format&&(ue.format=N.format);const pe=()=>{window.clearTimeout(de.current)},_e=l=>{var s;l==null||l.preventDefault(),l==null||l.stopPropagation(),ct(N.text||String(a)||"",ue),ce(!0),pe(),de.current=window.setTimeout(()=>{ce(!1)},3e3),(s=N.onCopy)===null||s===void 0||s.call(N,l)};r.useEffect(()=>pe,[]);const[fe,ke]=r.useState(!1),[ge,Me]=r.useState(!1),[Ne,ze]=r.useState(!1),[me,He]=r.useState(!1),[ye,De]=r.useState(!1),[Be,We]=r.useState(!0),[z,v]=re(S,{expandable:!1}),I=z&&!Ne,{rows:F=1}=v,X=r.useMemo(()=>!I||v.suffix!==void 0||v.onEllipsis||v.expandable||b||V,[I,v,b,V]);Z(()=>{z&&!X&&(ke(ve("webkitLineClamp")),Me(ve("textOverflow")))},[X,z]);const P=r.useMemo(()=>X?!1:F===1?ge:fe,[X,ge,fe]),be=I&&(P?ye:me),Ae=I&&F===1&&P,J=I&&F>1&&P,Ke=l=>{var s;ze(!0),(s=v.onExpand)===null||s===void 0||s.call(v,l)},[Fe,Ve]=r.useState(0),[Ue,Xe]=r.useState(0),Je=(l,s)=>{let{offsetWidth:x}=l;var L;Ve(x),Xe(parseInt((L=window.getComputedStyle)===null||L===void 0?void 0:L.call(window,s).fontSize,10)||0)},qe=l=>{var s;He(l),me!==l&&((s=v.onEllipsis)===null||s===void 0||s.call(v,l))};r.useEffect(()=>{const l=D.current;if(z&&P&&l){const s=J?l.offsetHeight<l.scrollHeight:l.offsetWidth<l.scrollWidth;ye!==s&&De(s)}},[z,P,a,J,Be]),r.useEffect(()=>{const l=D.current;if(typeof IntersectionObserver>"u"||!l||!P||!I)return;const s=new IntersectionObserver(()=>{We(!!l.offsetParent)});return s.observe(l),()=>{s.disconnect()}},[P,I]);let H={};v.tooltip===!0?H={title:(o=d.text)!==null&&o!==void 0?o:a}:r.isValidElement(v.tooltip)?H={title:v.tooltip}:typeof v.tooltip=="object"?H=Object.assign({title:(t=d.text)!==null&&t!==void 0?t:a},v.tooltip):H={title:v.tooltip};const q=r.useMemo(()=>{const l=s=>["string","number"].includes(typeof s);if(!(!z||P)){if(l(d.text))return d.text;if(l(a))return a;if(l(w))return w;if(l(H.title))return H.title}},[z,P,w,H.title,be]);if(T)return r.createElement(Dt,{value:(i=d.text)!==null&&i!==void 0?i:typeof a=="string"?a:"",onSave:j,onCancel:oe,onEnd:d.onEnd,prefixCls:y,className:m,style:E,direction:C,component:h,maxLength:d.maxLength,autoSize:d.autoSize,enterIcon:d.enterIcon});const Ge=()=>{const{expandable:l,symbol:s}=v;if(!l)return null;let x;return s?x=s:x=c==null?void 0:c.expand,r.createElement("a",{key:"expand",className:`${y}-expand`,onClick:Ke,"aria-label":c==null?void 0:c.expand},x)},Ye=()=>{if(!b)return;const{icon:l,tooltip:s}=d,x=Te(s)[0]||(c==null?void 0:c.edit),L=typeof x=="string"?x:"";return M.includes("icon")?r.createElement(le,{key:"edit",title:s===!1?"":x},r.createElement(he,{ref:B,className:`${y}-edit`,onClick:O,"aria-label":L},l||r.createElement(xt,{role:"button"}))):null},Qe=()=>{if(!V)return;const{tooltips:l,icon:s}=N,x=Oe(l),L=Oe(s),G=K?Q(x[1],c==null?void 0:c.copied):Q(x[0],c==null?void 0:c.copy),tt=K?c==null?void 0:c.copied:c==null?void 0:c.copy,nt=typeof G=="string"?G:tt;return r.createElement(le,{key:"copy",title:G},r.createElement(he,{className:te(`${y}-copy`,K&&`${y}-copy-success`),onClick:_e,"aria-label":nt},K?Q(L[1],r.createElement(dt,null),!0):Q(L[0],r.createElement(vt,null),!0)))},Ze=l=>[l&&Ge(),Ye(),Qe()],et=l=>[l&&r.createElement("span",{"aria-hidden":!0,key:"ellipsis"},Qt),v.suffix,Ze(l)];return r.createElement(at,{onResize:Je,disabled:!I||P},l=>r.createElement(qt,{tooltipProps:H,enabledEllipsis:I,isEllipsis:be},r.createElement(Ie,Object.assign({className:te({[`${y}-${u}`]:u,[`${y}-disabled`]:f,[`${y}-ellipsis`]:z,[`${y}-single-line`]:I&&F===1,[`${y}-ellipsis-single-line`]:Ae,[`${y}-ellipsis-multiple-line`]:J},m),prefixCls:p,style:Object.assign(Object.assign({},E),{WebkitLineClamp:J?F:void 0}),component:h,ref:Ce(l,D,n),direction:C,onClick:M.includes("text")?O:void 0,"aria-label":q==null?void 0:q.toString(),title:w},A),r.createElement(Xt,{enabledMeasure:I&&!P,text:a,rows:F,width:Fe,fontSize:Ue,onEllipsis:qe},(s,x)=>{let L=s;return s.length&&x&&q&&(L=r.createElement("span",{key:"show-content","aria-hidden":!0},L)),Yt(e,r.createElement(r.Fragment,null,L,et(x)))}))))}),ne=Zt;var en=globalThis&&globalThis.__rest||function(e,n){var o={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&n.indexOf(t)<0&&(o[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,t=Object.getOwnPropertySymbols(e);i<t.length;i++)n.indexOf(t[i])<0&&Object.prototype.propertyIsEnumerable.call(e,t[i])&&(o[t[i]]=e[t[i]]);return o};const tn=r.forwardRef((e,n)=>{var{ellipsis:o,rel:t}=e,i=en(e,["ellipsis","rel"]);const p=Object.assign(Object.assign({},i),{rel:t===void 0&&i.target==="_blank"?"noopener noreferrer":t});return delete p.navigate,r.createElement(ne,Object.assign({},p,{ref:n,ellipsis:!!o,component:"a"}))}),nn=tn,on=r.forwardRef((e,n)=>r.createElement(ne,Object.assign({ref:n},e,{component:"div"}))),rn=on;var ln=globalThis&&globalThis.__rest||function(e,n){var o={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&n.indexOf(t)<0&&(o[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,t=Object.getOwnPropertySymbols(e);i<t.length;i++)n.indexOf(t[i])<0&&Object.prototype.propertyIsEnumerable.call(e,t[i])&&(o[t[i]]=e[t[i]]);return o};const sn=(e,n)=>{var{ellipsis:o}=e,t=ln(e,["ellipsis"]);const i=r.useMemo(()=>o&&typeof o=="object"?$e(o,["expandable","rows"]):o,[o]);return r.createElement(ne,Object.assign({ref:n},t,{ellipsis:i,component:"span"}))},an=r.forwardRef(sn);var cn=globalThis&&globalThis.__rest||function(e,n){var o={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&n.indexOf(t)<0&&(o[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,t=Object.getOwnPropertySymbols(e);i<t.length;i++)n.indexOf(t[i])<0&&Object.prototype.propertyIsEnumerable.call(e,t[i])&&(o[t[i]]=e[t[i]]);return o};const dn=[1,2,3,4,5],un=r.forwardRef((e,n)=>{const{level:o=1}=e,t=cn(e,["level"]);let i;return dn.includes(o)?i=`h${o}`:i="h1",r.createElement(ne,Object.assign({ref:n},t,{component:i}))}),pn=un,U=Ie;U.Text=an;U.Link=nn;U.Title=pn;U.Paragraph=rn;const bn=U;export{bn as T};
