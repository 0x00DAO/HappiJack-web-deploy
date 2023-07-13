var It=Object.defineProperty;var Et=(e,t,n)=>t in e?It(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;var We=(e,t,n)=>(Et(e,typeof t!="symbol"?t+"":t,n),n);import{o as s,F as tt,H as le,J as nt,K as rt,L as x,M as oe,N as Ct,O as $t,P as q,Q as jt,T as Ge,U as Dt,V as kt,W as we,X as Rt,Y as fe,Z as Ot,$ as Tt,a0 as Ie,a1 as Mt,a2 as At,a3 as Ft,a4 as Bt,a5 as _t,a6 as zt,a7 as Ue,a8 as qe,a9 as Ke,aa as Ht,ab as Lt,n as at,t as u,ac as Pt,B as ge,S as U,ad as $e,ae as Vt,D as Xe,x as he,z as je,A as Wt,p as De,u as Gt,l as Ut,m as qt,G as Kt,C as Xt,R as me,v as se,w as Jt,I as Ee,y as Yt,af as Qt}from"./index-c9a484a9.js";import{s as Zt,c as en}from"./Loading-19d90aaa.js";import{M as tn,P as nn,I as rn}from"./information-988dc81d.js";import{D as an}from"./DownOutlined-559d08a3.js";import{i as sn,g as it,a as st,b as ot,c as on,d as ln,e as un,f as cn,h as Ce,j as dn}from"./index-2c8cdf1d.js";import{N as fn}from"./nft_bottom-1b63c0d9.js";import{T as mn}from"./ticket_nft-6fc753da.js";import{T as Je}from"./index-eec32e23.js";import{S as gn}from"./index-52598c63.js";import"./useLocale-408a90c2.js";import"./CheckOutlined-d496fe52.js";import"./TextArea-4808d488.js";import"./useForceUpdate-b47c6cf5.js";var pn={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M890.5 755.3L537.9 269.2c-12.8-17.6-39-17.6-51.7 0L133.5 755.3A8 8 0 00140 768h75c5.1 0 9.9-2.5 12.9-6.6L512 369.8l284.1 391.6c3 4.1 7.8 6.6 12.9 6.6h75c6.5 0 10.3-7.4 6.5-12.7z"}}]},name:"up",theme:"outlined"};const hn=pn;var vn=function(t,n){return s.createElement(tt,le({},t,{ref:n,icon:hn}))};const bn=s.forwardRef(vn);function ke(){return typeof BigInt=="function"}function K(e){var t=e.trim(),n=t.startsWith("-");n&&(t=t.slice(1)),t=t.replace(/(\.\d*[^0])0*$/,"$1").replace(/\.0*$/,"").replace(/^0+/,""),t.startsWith(".")&&(t="0".concat(t));var r=t||"0",a=r.split("."),i=a[0]||"0",l=a[1]||"0";i==="0"&&l==="0"&&(n=!1);var o=n?"-":"";return{negative:n,negativeStr:o,trimStr:r,integerStr:i,decimalStr:l,fullStr:"".concat(o).concat(r)}}function Re(e){var t=String(e);return!Number.isNaN(Number(t))&&t.includes("e")}function ue(e){var t=String(e);if(Re(e)){var n=Number(t.slice(t.indexOf("e-")+2)),r=t.match(/\.(\d+)/);return r!=null&&r[1]&&(n+=r[1].length),n}return t.includes(".")&&Oe(t)?t.length-t.indexOf(".")-1:0}function be(e){var t=String(e);if(Re(e)){if(e>Number.MAX_SAFE_INTEGER)return String(ke()?BigInt(e).toString():Number.MAX_SAFE_INTEGER);if(e<Number.MIN_SAFE_INTEGER)return String(ke()?BigInt(e).toString():Number.MIN_SAFE_INTEGER);t=e.toFixed(ue(t))}return K(t).fullStr}function Oe(e){return typeof e=="number"?!Number.isNaN(e):e?/^\s*-?\d+(\.\d+)?\s*$/.test(e)||/^\s*-?\d+\.\s*$/.test(e)||/^\s*-?\.\d+\s*$/.test(e):!1}function lt(e){return!e&&e!==0&&!Number.isNaN(e)||!String(e).trim()}var yn=function(){function e(t){if(rt(this,e),x(this,"origin",""),x(this,"number",void 0),x(this,"empty",void 0),lt(t)){this.empty=!0;return}this.origin=String(t),this.number=Number(t)}return nt(e,[{key:"negate",value:function(){return new e(-this.toNumber())}},{key:"add",value:function(n){if(this.isInvalidate())return new e(n);var r=Number(n);if(Number.isNaN(r))return this;var a=this.number+r;if(a>Number.MAX_SAFE_INTEGER)return new e(Number.MAX_SAFE_INTEGER);if(a<Number.MIN_SAFE_INTEGER)return new e(Number.MIN_SAFE_INTEGER);var i=Math.max(ue(this.number),ue(r));return new e(a.toFixed(i))}},{key:"isEmpty",value:function(){return this.empty}},{key:"isNaN",value:function(){return Number.isNaN(this.number)}},{key:"isInvalidate",value:function(){return this.isEmpty()||this.isNaN()}},{key:"equals",value:function(n){return this.toNumber()===(n==null?void 0:n.toNumber())}},{key:"lessEquals",value:function(n){return this.add(n.negate().toString()).toNumber()<=0}},{key:"toNumber",value:function(){return this.number}},{key:"toString",value:function(){var n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:!0;return n?this.isInvalidate()?"":be(this.number):this.origin}}]),e}(),Sn=function(){function e(t){if(rt(this,e),x(this,"origin",""),x(this,"negative",void 0),x(this,"integer",void 0),x(this,"decimal",void 0),x(this,"decimalLen",void 0),x(this,"empty",void 0),x(this,"nan",void 0),lt(t)){this.empty=!0;return}if(this.origin=String(t),t==="-"||Number.isNaN(t)){this.nan=!0;return}var n=t;if(Re(n)&&(n=Number(n)),n=typeof n=="string"?n:be(n),Oe(n)){var r=K(n);this.negative=r.negative;var a=r.trimStr.split(".");this.integer=BigInt(a[0]);var i=a[1]||"0";this.decimal=BigInt(i),this.decimalLen=i.length}else this.nan=!0}return nt(e,[{key:"getMark",value:function(){return this.negative?"-":""}},{key:"getIntegerStr",value:function(){return this.integer.toString()}},{key:"getDecimalStr",value:function(){return this.decimal.toString().padStart(this.decimalLen,"0")}},{key:"alignDecimal",value:function(n){var r="".concat(this.getMark()).concat(this.getIntegerStr()).concat(this.getDecimalStr().padEnd(n,"0"));return BigInt(r)}},{key:"negate",value:function(){var n=new e(this.toString());return n.negative=!n.negative,n}},{key:"add",value:function(n){if(this.isInvalidate())return new e(n);var r=new e(n);if(r.isInvalidate())return this;var a=Math.max(this.getDecimalStr().length,r.getDecimalStr().length),i=this.alignDecimal(a),l=r.alignDecimal(a),o=(i+l).toString(),v=K(o),y=v.negativeStr,m=v.trimStr,S="".concat(y).concat(m.padStart(a+1,"0"));return new e("".concat(S.slice(0,-a),".").concat(S.slice(-a)))}},{key:"isEmpty",value:function(){return this.empty}},{key:"isNaN",value:function(){return this.nan}},{key:"isInvalidate",value:function(){return this.isEmpty()||this.isNaN()}},{key:"equals",value:function(n){return this.toString()===(n==null?void 0:n.toString())}},{key:"lessEquals",value:function(n){return this.add(n.negate().toString()).toNumber()<=0}},{key:"toNumber",value:function(){return this.isNaN()?NaN:Number(this.toString())}},{key:"toString",value:function(){var n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:!0;return n?this.isInvalidate()?"":K("".concat(this.getMark()).concat(this.getIntegerStr(),".").concat(this.getDecimalStr())).fullStr:this.origin}}]),e}();function $(e){return ke()?new Sn(e):new yn(e)}function pe(e,t,n){var r=arguments.length>3&&arguments[3]!==void 0?arguments[3]:!1;if(e==="")return"";var a=K(e),i=a.negativeStr,l=a.integerStr,o=a.decimalStr,v="".concat(t).concat(o),y="".concat(i).concat(l);if(n>=0){var m=Number(o[n]);if(m>=5&&!r){var S=$(e).add("".concat(i,"0.").concat("0".repeat(n)).concat(10-m));return pe(S.toString(),t,n,r)}return n===0?y:"".concat(y).concat(t).concat(o.padEnd(n,"0").slice(0,n))}return v===".0"?y:"".concat(y).concat(v)}var xn=function(){var t=s.useState(!1),n=oe(t,2),r=n[0],a=n[1];return Ct(function(){a($t())},[]),r},Nn=200,wn=600;function In(e){var t=e.prefixCls,n=e.upNode,r=e.downNode,a=e.upDisabled,i=e.downDisabled,l=e.onStep,o=s.useRef(),v=s.useRef();v.current=l;var y=function(C,N){C.preventDefault(),v.current(N);function A(){v.current(N),o.current=setTimeout(A,Nn)}o.current=setTimeout(A,wn)},m=function(){clearTimeout(o.current)};s.useEffect(function(){return m},[]);var S=xn();if(S)return null;var h="".concat(t,"-handler"),w=q(h,"".concat(h,"-up"),x({},"".concat(h,"-up-disabled"),a)),E=q(h,"".concat(h,"-down"),x({},"".concat(h,"-down-disabled"),i)),M={unselectable:"on",role:"button",onMouseUp:m,onMouseLeave:m};return s.createElement("div",{className:"".concat(h,"-wrap")},s.createElement("span",le({},M,{onMouseDown:function(C){y(C,!0)},"aria-label":"Increase Value","aria-disabled":a,className:w}),n||s.createElement("span",{unselectable:"on",className:"".concat(t,"-handler-up-inner")})),s.createElement("span",le({},M,{onMouseDown:function(C){y(C,!1)},"aria-label":"Decrease Value","aria-disabled":i,className:E}),r||s.createElement("span",{unselectable:"on",className:"".concat(t,"-handler-down-inner")})))}function Ye(e){var t=typeof e=="number"?be(e):K(e).fullStr,n=t.includes(".");return n?K(t.replace(/(\d)\.(\d)/g,"$1$2.")).fullStr:e+"0"}function En(e,t){var n=s.useRef(null);function r(){try{var i=e.selectionStart,l=e.selectionEnd,o=e.value,v=o.substring(0,i),y=o.substring(l);n.current={start:i,end:l,value:o,beforeTxt:v,afterTxt:y}}catch{}}function a(){if(e&&n.current&&t)try{var i=e.value,l=n.current,o=l.beforeTxt,v=l.afterTxt,y=l.start,m=i.length;if(i.endsWith(v))m=i.length-n.current.afterTxt.length;else if(i.startsWith(o))m=o.length;else{var S=o[y-1],h=i.indexOf(S,y-1);h!==-1&&(m=h+1)}e.setSelectionRange(m,m)}catch(w){jt(!1,"Something warning of cursor restore. Please fire issue about this: ".concat(w.message))}}return[r,a]}const Cn=function(){var e=s.useRef(0),t=function(){Ge.cancel(e.current)};return s.useEffect(function(){return t},[]),function(n){t(),e.current=Ge(function(){n()})}};var $n=["prefixCls","className","style","min","max","step","defaultValue","value","disabled","readOnly","upHandler","downHandler","keyboard","controls","stringMode","parser","formatter","precision","decimalSeparator","onChange","onInput","onPressEnter","onStep"],Qe=function(t,n){return t||n.isEmpty()?n.toString():n.toNumber()},Ze=function(t){var n=$(t);return n.isInvalidate()?null:n},ut=s.forwardRef(function(e,t){var n,r=e.prefixCls,a=r===void 0?"rc-input-number":r,i=e.className,l=e.style,o=e.min,v=e.max,y=e.step,m=y===void 0?1:y,S=e.defaultValue,h=e.value,w=e.disabled,E=e.readOnly,M=e.upHandler,j=e.downHandler,C=e.keyboard,N=e.controls,A=N===void 0?!0:N,f=e.stringMode,B=e.parser,D=e.formatter,k=e.precision,_=e.decimalSeparator,L=e.onChange,P=e.onInput,Q=e.onPressEnter,z=e.onStep,ye=Dt(e,$n),ce="".concat(a,"-input"),X=s.useRef(null),Z=s.useState(!1),F=oe(Z,2),ee=F[0],V=F[1],R=s.useRef(!1),H=s.useRef(!1),W=s.useRef(!1),G=s.useState(function(){return $(h??S)}),O=oe(G,2),g=O[0],I=O[1];function de(d){h===void 0&&I(d)}var te=s.useCallback(function(d,c){if(!c)return k>=0?k:Math.max(ue(d),ue(m))},[k,m]),ne=s.useCallback(function(d){var c=String(d);if(B)return B(c);var b=c;return _&&(b=b.replace(_,".")),b.replace(/[^\w.-]+/g,"")},[B,_]),Te=s.useRef(""),Me=s.useCallback(function(d,c){if(D)return D(d,{userTyping:c,input:String(Te.current)});var b=typeof d=="number"?be(d):d;if(!c){var p=te(b,c);if(Oe(b)&&(_||p>=0)){var T=_||".";b=pe(b,T,p)}}return b},[D,te,_]),ft=s.useState(function(){var d=S??h;return g.isInvalidate()&&["string","number"].includes(kt(d))?Number.isNaN(d)?"":d:Me(g.toString(),!1)}),Ae=oe(ft,2),re=Ae[0],Fe=Ae[1];Te.current=re;function ae(d,c){Fe(Me(d.isInvalidate()?d.toString(!1):d.toString(!c),c))}var J=s.useMemo(function(){return Ze(v)},[v,k]),Y=s.useMemo(function(){return Ze(o)},[o,k]),Be=s.useMemo(function(){return!J||!g||g.isInvalidate()?!1:J.lessEquals(g)},[J,g]),_e=s.useMemo(function(){return!Y||!g||g.isInvalidate()?!1:g.lessEquals(Y)},[Y,g]),mt=En(X.current,ee),ze=oe(mt,2),gt=ze[0],pt=ze[1],He=function(c){return J&&!c.lessEquals(J)?J:Y&&!Y.lessEquals(c)?Y:null},Se=function(c){return!He(c)},xe=function(c,b){var p=c,T=Se(p)||p.isEmpty();if(!p.isEmpty()&&!b&&(p=He(p)||p,T=!0),!E&&!w&&T){var ie=p.toString(),Ne=te(ie,b);return Ne>=0&&(p=$(pe(ie,".",Ne)),Se(p)||(p=$(pe(ie,".",Ne,!0)))),p.equals(g)||(de(p),L==null||L(p.isEmpty()?null:Qe(f,p)),h===void 0&&ae(p,b)),p}return g},ht=Cn(),Le=function d(c){if(gt(),Fe(c),!H.current){var b=ne(c),p=$(b);p.isNaN()||xe(p,!0)}P==null||P(c),ht(function(){var T=c;B||(T=c.replace(/。/g,".")),T!==c&&d(T)})},vt=function(){H.current=!0},bt=function(){H.current=!1,Le(X.current.value)},yt=function(c){Le(c.target.value)},Pe=function(c){var b;if(!(c&&Be||!c&&_e)){R.current=!1;var p=$(W.current?Ye(m):m);c||(p=p.negate());var T=(g||$(0)).add(p.toString()),ie=xe(T,!1);z==null||z(Qe(f,ie),{offset:W.current?Ye(m):m,type:c?"up":"down"}),(b=X.current)===null||b===void 0||b.focus()}},Ve=function(c){var b=$(ne(re)),p=b;b.isNaN()?p=g:p=xe(b,c),h!==void 0?ae(g,!1):p.isNaN()||ae(p,!1)},St=function(){R.current=!0},xt=function(c){var b=c.which,p=c.shiftKey;R.current=!0,p?W.current=!0:W.current=!1,b===fe.ENTER&&(H.current||(R.current=!1),Ve(!1),Q==null||Q(c)),C!==!1&&!H.current&&[fe.UP,fe.DOWN].includes(b)&&(Pe(fe.UP===b),c.preventDefault())},Nt=function(){R.current=!1,W.current=!1},wt=function(){Ve(!1),V(!1),R.current=!1};return we(function(){g.isInvalidate()||ae(g,!1)},[k]),we(function(){var d=$(h);I(d);var c=$(ne(re));(!d.equals(c)||!R.current||D)&&ae(d,R.current)},[h]),we(function(){D&&pt()},[re]),s.createElement("div",{className:q(a,i,(n={},x(n,"".concat(a,"-focused"),ee),x(n,"".concat(a,"-disabled"),w),x(n,"".concat(a,"-readonly"),E),x(n,"".concat(a,"-not-a-number"),g.isNaN()),x(n,"".concat(a,"-out-of-range"),!g.isInvalidate()&&!Se(g)),n)),style:l,onFocus:function(){V(!0)},onBlur:wt,onKeyDown:xt,onKeyUp:Nt,onCompositionStart:vt,onCompositionEnd:bt,onBeforeInput:St},A&&s.createElement(In,{prefixCls:a,upNode:M,downNode:j,upDisabled:Be,downDisabled:_e,onStep:Pe}),s.createElement("div",{className:"".concat(ce,"-wrap")},s.createElement("input",le({autoComplete:"off",role:"spinbutton","aria-valuemin":o,"aria-valuemax":v,"aria-valuenow":g.isInvalidate()?null:g.toString(),step:m},ye,{ref:Rt(X,t),className:ce,value:re,onChange:yt,disabled:w,readOnly:E}))))});ut.displayName="InputNumber";const jn=e=>{const{componentCls:t,lineWidth:n,lineType:r,colorBorder:a,borderRadius:i,fontSizeLG:l,controlHeightLG:o,controlHeightSM:v,colorError:y,inputPaddingHorizontalSM:m,colorTextDescription:S,motionDurationMid:h,colorPrimary:w,controlHeight:E,inputPaddingHorizontal:M,colorBgContainer:j,colorTextDisabled:C,borderRadiusSM:N,borderRadiusLG:A,controlWidth:f,handleVisible:B}=e;return[{[t]:Object.assign(Object.assign(Object.assign(Object.assign({},Ie(e)),it(e)),st(e,t)),{display:"inline-block",width:f,margin:0,padding:0,border:`${n}px ${r} ${a}`,borderRadius:i,"&-rtl":{direction:"rtl",[`${t}-input`]:{direction:"rtl"}},"&-lg":{padding:0,fontSize:l,borderRadius:A,[`input${t}-input`]:{height:o-2*n}},"&-sm":{padding:0,borderRadius:N,[`input${t}-input`]:{height:v-2*n,padding:`0 ${m}px`}},"&:hover":Object.assign({},ot(e)),"&-focused":Object.assign({},on(e)),"&-disabled":Object.assign(Object.assign({},ln(e)),{[`${t}-input`]:{cursor:"not-allowed"}}),"&-out-of-range":{[`${t}-input-wrap`]:{input:{color:y}}},"&-group":Object.assign(Object.assign(Object.assign({},Ie(e)),un(e)),{"&-wrapper":{display:"inline-block",textAlign:"start",verticalAlign:"top",[`${t}-affix-wrapper`]:{width:"100%"},"&-lg":{[`${t}-group-addon`]:{borderRadius:A}},"&-sm":{[`${t}-group-addon`]:{borderRadius:N}}}}),[t]:{"&-input":Object.assign(Object.assign(Object.assign(Object.assign({},Ie(e)),{width:"100%",height:E-2*n,padding:`0 ${M}px`,textAlign:"start",backgroundColor:"transparent",border:0,borderRadius:i,outline:0,transition:`all ${h} linear`,appearance:"textfield",fontSize:"inherit"}),cn(e.colorTextPlaceholder)),{'&[type="number"]::-webkit-inner-spin-button, &[type="number"]::-webkit-outer-spin-button':{margin:0,webkitAppearance:"none",appearance:"none"}})}})},{[t]:{[`&:hover ${t}-handler-wrap, &-focused ${t}-handler-wrap`]:{opacity:1},[`${t}-handler-wrap`]:{position:"absolute",insetBlockStart:0,insetInlineEnd:0,width:e.handleWidth,height:"100%",background:j,borderStartStartRadius:0,borderStartEndRadius:i,borderEndEndRadius:i,borderEndStartRadius:0,opacity:B===!0?1:0,display:"flex",flexDirection:"column",alignItems:"stretch",transition:`opacity ${h} linear ${h}`,[`${t}-handler`]:{display:"flex",alignItems:"center",justifyContent:"center",flex:"auto",height:"40%",[`
              ${t}-handler-up-inner,
              ${t}-handler-down-inner
            `]:{marginInlineEnd:0,fontSize:e.handleFontSize}}},[`${t}-handler`]:{height:"50%",overflow:"hidden",color:S,fontWeight:"bold",lineHeight:0,textAlign:"center",cursor:"pointer",borderInlineStart:`${n}px ${r} ${a}`,transition:`all ${h} linear`,"&:active":{background:e.colorFillAlter},"&:hover":{height:"60%",[`
              ${t}-handler-up-inner,
              ${t}-handler-down-inner
            `]:{color:w}},"&-up-inner, &-down-inner":Object.assign(Object.assign({},Mt()),{color:S,transition:`all ${h} linear`,userSelect:"none"})},[`${t}-handler-up`]:{borderStartEndRadius:i},[`${t}-handler-down`]:{borderBlockStart:`${n}px ${r} ${a}`,borderEndEndRadius:i},"&-disabled, &-readonly":{[`${t}-handler-wrap`]:{display:"none"},[`${t}-input`]:{color:"inherit"}},[`
          ${t}-handler-up-disabled,
          ${t}-handler-down-disabled
        `]:{cursor:"not-allowed"},[`
          ${t}-handler-up-disabled:hover &-handler-up-inner,
          ${t}-handler-down-disabled:hover &-handler-down-inner
        `]:{color:C}}},{[`${t}-borderless`]:{borderColor:"transparent",boxShadow:"none",[`${t}-handler-down`]:{borderBlockStartWidth:0}}}]},Dn=e=>{const{componentCls:t,inputPaddingHorizontal:n,inputAffixPadding:r,controlWidth:a,borderRadiusLG:i,borderRadiusSM:l}=e;return{[`${t}-affix-wrapper`]:Object.assign(Object.assign(Object.assign({},it(e)),st(e,`${t}-affix-wrapper`)),{position:"relative",display:"inline-flex",width:a,padding:0,paddingInlineStart:n,"&-lg":{borderRadius:i},"&-sm":{borderRadius:l},[`&:not(${t}-affix-wrapper-disabled):hover`]:Object.assign(Object.assign({},ot(e)),{zIndex:1}),"&-focused, &:focus":{zIndex:1},"&-disabled":{[`${t}[disabled]`]:{background:"transparent"}},[`> div${t}`]:{width:"100%",border:"none",outline:"none",[`&${t}-focused`]:{boxShadow:"none !important"}},[`input${t}-input`]:{padding:0},"&::before":{width:0,visibility:"hidden",content:'"\\a0"'},[`${t}-handler-wrap`]:{zIndex:2},[t]:{"&-prefix, &-suffix":{display:"flex",flex:"none",alignItems:"center",pointerEvents:"none"},"&-prefix":{marginInlineEnd:r},"&-suffix":{position:"absolute",insetBlockStart:0,insetInlineEnd:0,zIndex:1,height:"100%",marginInlineEnd:n,marginInlineStart:r}}})}},kn=Ot("InputNumber",e=>{const t=sn(e);return[jn(t),Dn(t),Tt(t)]},e=>({controlWidth:90,handleWidth:e.controlHeightSM-e.lineWidth*2,handleFontSize:e.fontSize/2,handleVisible:"auto"}));var Rn=globalThis&&globalThis.__rest||function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]]);return n};const ct=s.forwardRef((e,t)=>{const{getPrefixCls:n,direction:r}=s.useContext(At),[a,i]=s.useState(!1),l=s.useRef(null);s.useImperativeHandle(t,()=>l.current);const{className:o,rootClassName:v,size:y,disabled:m,prefixCls:S,addonBefore:h,addonAfter:w,prefix:E,bordered:M=!0,readOnly:j,status:C,controls:N}=e,A=Rn(e,["className","rootClassName","size","disabled","prefixCls","addonBefore","addonAfter","prefix","bordered","readOnly","status","controls"]),f=n("input-number",S),[B,D]=kn(f),{compactSize:k,compactItemClassnames:_}=Ft(f,r);let L=s.createElement(bn,{className:`${f}-handler-up-inner`}),P=s.createElement(an,{className:`${f}-handler-down-inner`});const Q=typeof N=="boolean"?N:void 0;typeof N=="object"&&(L=typeof N.upIcon>"u"?L:s.createElement("span",{className:`${f}-handler-up-inner`},N.upIcon),P=typeof N.downIcon>"u"?P:s.createElement("span",{className:`${f}-handler-down-inner`},N.downIcon));const{hasFeedback:z,status:ye,isFormItemInput:ce,feedbackIcon:X}=s.useContext(Bt),Z=dn(ye,C),F=_t(O=>{var g;return(g=k??y)!==null&&g!==void 0?g:O}),ee=E!=null||z,V=!!(h||w),R=s.useContext(zt),H=m??R,W=q({[`${f}-lg`]:F==="large",[`${f}-sm`]:F==="small",[`${f}-rtl`]:r==="rtl",[`${f}-borderless`]:!M,[`${f}-in-form-item`]:ce},Ce(f,Z),_,D,o,!ee&&!V&&v);let G=s.createElement(ut,Object.assign({ref:l,disabled:H,className:W,upHandler:L,downHandler:P,prefixCls:f,readOnly:j,controls:Q},A));if(ee){const O=q(`${f}-affix-wrapper`,Ce(`${f}-affix-wrapper`,Z,z),{[`${f}-affix-wrapper-focused`]:a,[`${f}-affix-wrapper-disabled`]:e.disabled,[`${f}-affix-wrapper-sm`]:F==="small",[`${f}-affix-wrapper-lg`]:F==="large",[`${f}-affix-wrapper-rtl`]:r==="rtl",[`${f}-affix-wrapper-readonly`]:j,[`${f}-affix-wrapper-borderless`]:!M},!V&&o,!V&&v,D);G=s.createElement("div",{className:O,style:e.style,onMouseUp:()=>l.current.focus()},E&&s.createElement("span",{className:`${f}-prefix`},E),Ue(G,{style:null,value:e.value,onFocus:g=>{var I;i(!0),(I=e.onFocus)===null||I===void 0||I.call(e,g)},onBlur:g=>{var I;i(!1),(I=e.onBlur)===null||I===void 0||I.call(e,g)}}),z&&s.createElement("span",{className:`${f}-suffix`},X))}if(V){const O=`${f}-group`,g=`${O}-addon`,I=h?s.createElement("div",{className:g},h):null,de=w?s.createElement("div",{className:g},w):null,te=q(`${f}-wrapper`,O,D,{[`${O}-rtl`]:r==="rtl"}),ne=q(`${f}-group-wrapper`,{[`${f}-group-wrapper-sm`]:F==="small",[`${f}-group-wrapper-lg`]:F==="large",[`${f}-group-wrapper-rtl`]:r==="rtl"},Ce(`${f}-group-wrapper`,Z,z),D,o,v);G=s.createElement("div",{className:ne,style:e.style},s.createElement("div",{className:te},I&&s.createElement(qe,null,s.createElement(Ke,{status:!0,override:!0},I)),Ue(G,{style:null,disabled:H}),de&&s.createElement(qe,null,s.createElement(Ke,{status:!0,override:!0},de))))}return B(G)}),dt=ct,On=e=>s.createElement(Ht,{theme:{components:{InputNumber:{handleVisible:!0}}}},s.createElement(ct,Object.assign({},e)));dt._InternalPanelDoNotUseOrYouWillBeFired=On;const Tn=dt;var Mn={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M168 504.2c1-43.7 10-86.1 26.9-126 17.3-41 42.1-77.7 73.7-109.4S337 212.3 378 195c42.4-17.9 87.4-27 133.9-27s91.5 9.1 133.8 27A341.5 341.5 0 01755 268.8c9.9 9.9 19.2 20.4 27.8 31.4l-60.2 47a8 8 0 003 14.1l175.7 43c5 1.2 9.9-2.6 9.9-7.7l.8-180.9c0-6.7-7.7-10.5-12.9-6.3l-56.4 44.1C765.8 155.1 646.2 92 511.8 92 282.7 92 96.3 275.6 92 503.8a8 8 0 008 8.2h60c4.4 0 7.9-3.5 8-7.8zm756 7.8h-60c-4.4 0-7.9 3.5-8 7.8-1 43.7-10 86.1-26.9 126-17.3 41-42.1 77.8-73.7 109.4A342.45 342.45 0 01512.1 856a342.24 342.24 0 01-243.2-100.8c-9.9-9.9-19.2-20.4-27.8-31.4l60.2-47a8 8 0 00-3-14.1l-175.7-43c-5-1.2-9.9 2.6-9.9 7.7l-.7 181c0 6.7 7.7 10.5 12.9 6.3l56.4-44.1C258.2 868.9 377.8 932 512.2 932c229.2 0 415.5-183.7 419.8-411.8a8 8 0 00-8-8.2z"}}]},name:"sync",theme:"outlined"};const An=Mn;var Fn=function(t,n){return s.createElement(tt,le({},t,{ref:n,icon:An}))};const Bn=s.forwardRef(Fn);class _n{static uuidGen(t,n){const r="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz".split(""),a=[];let i;if(n=n||r.length,t)for(i=0;i<t;i++)a[i]=r[0|Math.random()*n];else{let l;for(a[8]=a[13]=a[18]=a[23]="-",a[14]="4",i=0;i<36;i++)a[i]||(l=0|Math.random()*16,a[i]=r[i===19?l&3|8:l])}return a.join("")}static generateRandomNumber(t,n){const r=Math.random()*(n-t)+t;return Math.floor(r)}}class ve{}We(ve,"event","GameEvent.EventLotteryGameParticipated");const et=()=>_n.generateRandomNumber(1e5,999999),zn=Lt.create(()=>{const[e,t]=s.useState(et()),n=l=>{r(l)?t(parseInt(`${l}`,10)):t(void 0)},r=l=>{if(l===void 0)return!1;const o=parseInt(`${l}`,10);return o<1e5||o>999999?!1:/^(?!0{5,})\d{5,6}$/.test(o.toString())},a=at(),i=async()=>{const l=$e.getData("LATEST_GAME_ID");if(Vt(l)){Xe("Invalid lottery id");return}try{Zt();const o=await he.instance.getContract(je.LotteryGameSellSystem),v=await he.instance.getContract(je.LotteryGameSystem),y=await o.buyLotteryTicketETH(l,e,$e.ticketPrice);v.clearGameCache(l),await y.wait(),Wt("Buy ticket successfully"),a.hide(),De.instance.emit(ve.event,l)}catch(o){Xe(o!=null&&o.message&&o.message.length<60?o.message:"Buy ticket failed")}finally{en()}};return u.jsx(u.Fragment,{children:u.jsx(tn,{...Pt(a),maskStyle:{background:"linear-gradient(135deg, rgba(91, 133, 139, 0.90) 0%, rgba(46, 47, 50, 0.90) 29.17%)"},title:"",centered:!0,width:750,footer:[u.jsx(ge,{shape:"default",style:{margin:"0 auto",display:"flex",fontSize:30,lineHeight:40,height:69,width:372,justifyContent:"center",alignItems:"center",borderRadius:40,fontWeight:700,color:"white"},onClick:i,disabled:e===void 0,children:"Confirm"})],children:u.jsxs(U,{direction:"vertical",size:"small",style:{display:"grid",justifyContent:"center",alignItems:"center"},children:[u.jsx("p",{style:{fontFamily:"Eras Bold ITC",fontSize:50,color:"#52c41a",display:"flex",justifyContent:"center",alignItems:"center",background:"linear-gradient(270deg, #C879F9 0%, #6C7EFC 50%, #74F0B2 100%)",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent",backgroundClip:"text"},children:"Lucky Number"}),u.jsx(Tn,{size:"large",addonAfter:u.jsx(Bn,{onClick:()=>t(et())}),style:{width:464,marginTop:-40,fontFamily:"Arimo Hebrew Sunset",fontSize:30},controls:!1,placeholder:"range [100000,999999]",defaultValue:e,value:e,parser:l=>{const o=l.replace(/[^\d]/g,"");return o===""?void 0:parseInt(o,10)},min:1e5,max:999999,onChange:n})]})})})}),{Countdown:Hn}=gn;function tr(){const e=Gt(),t=Ut(),n=qt(),r=at(zn),[a]=s.useState(window.innerHeight),[i,l]=s.useState(new Kt),o=m=>{n(`/game/${i.isFull?"joined":"waiting"}/${m}`)};s.useEffect(()=>{async function m(){const S=e.id,w=await(await he.instance.getContract(je.LotteryGameSystem)).getGame(S);return l(w),De.instance.on(ve.event,o),()=>De.instance.off(ve.event,o)}m()},[t.pathname]);const v=()=>{if(!e||!(e!=null&&e.id))Qt.error("Invalid lottery id");else{const m=e.id;$e.setData("LATEST_GAME_ID",m),r.show()}},y=()=>{n("/")};return u.jsx(u.Fragment,{children:u.jsxs(U,{direction:"vertical",size:"large",style:{minHeight:`${Xt}`,width:"100%",display:"flex",justifyContent:"center"},children:[u.jsx(me,{gutter:0,style:{alignItems:"center",background:"rgba(33, 60, 153, 0.70)",flexShrink:0,width:"100%",display:"flex",flexDirection:"column",position:"absolute",top:120},children:u.jsx(se,{span:24,style:{flex:1,paddingBottom:10,paddingTop:10},children:u.jsx(Je.Text,{style:{fontSize:50,fontFamily:"Eras Bold ITC",color:"#52c41a",display:"flex",paddingLeft:120,paddingRight:120,justifyContent:"center",background:"linear-gradient(to right, #FDECB2, #FDA6EC, #CD59CC)",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent",lineHeight:1.2,width:"100%",maxHeight:"2.4em",overflow:"hidden",textOverflow:"ellipsis"},children:i.ad})})}),u.jsx(me,{gutter:0,style:{alignItems:"center",background:"rgba(33, 60, 153, 0.70)",flexShrink:0,width:"100%",display:`${a<900?"none":"flex"}`,flexDirection:"column",visibility:"hidden"},children:u.jsx(se,{span:24,style:{flex:1,paddingBottom:10,paddingTop:10},children:u.jsx(Je.Text,{style:{fontSize:50,fontFamily:"Eras Bold ITC",color:"#52c41a",display:"flex",paddingLeft:120,paddingRight:120,justifyContent:"center",background:"linear-gradient(to right, #FDECB2, #FDA6EC, #CD59CC)",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent",lineHeight:1.2,width:"100%",maxHeight:"2.4em",overflow:"hidden",textOverflow:"ellipsis"},children:i.ad})})}),u.jsxs(me,{children:[u.jsx(se,{span:16,children:u.jsxs(U,{direction:"vertical",size:"middle",style:{paddingLeft:120},children:[u.jsxs("p",{style:{color:"white",fontFamily:"Arimo Hebrew Subset",fontSize:60,fontWeight:700,letterSpacing:0,textAlign:"left",marginTop:40},children:["Jackpot:",u.jsxs("span",{style:{color:"#fcdc36",fontFamily:"Arimo Hebrew Subset",fontSize:60,fontWeight:700,letterSpacing:0,textAlign:"left"},children:[" ",i.TotalAmount," ",i.tokenSymbol]})]}),u.jsx(U,{direction:"horizontal",size:"small",hidden:!i.hasHash,children:u.jsxs(ge,{type:"text",style:{display:"flex"},target:"_blank",href:`${Jt(he.instance.chainId)}/tx/${i.transactionHash}`,disabled:!i.hasHash,children:[u.jsxs("p",{style:{color:"#91a7be",fontSize:30,fontFamily:"Arimo Hebrew Subset",fontWeight:700,marginLeft:-10},children:["TX: ",i.shortHash]}),u.jsx("svg",{style:{marginTop:2,marginLeft:30,color:"#91a7be",fontSize:40,display:"none"},stroke:"currentColor",fill:"none",strokeWidth:"0",viewBox:"0 0 24 24",focusable:"false",height:"1em",width:"1em",xmlns:"http://www.w3.org/2000/svg",children:u.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"})})]})}),u.jsxs(U,{direction:"horizontal",style:{marginTop:20},children:[u.jsx("label",{style:{color:"#EB91FF",fontFamily:"Arimo Hebrew Subset",fontSize:50,fontWeight:700,letterSpacing:0,textAlign:"left"},children:"100%"}),u.jsx("label",{style:{color:"white",fontFamily:"Arimo Hebrew Subset",fontSize:50,fontWeight:700,letterSpacing:0,textAlign:"left"},children:"Win"})]}),u.jsxs(U,{direction:"vertical",size:"small",children:[u.jsxs("label",{style:{fontSize:34,textAlign:"left",fontFamily:"Arimo Hebrew Subset",color:"white"},children:["Remaining Number: ",i.remainingTicket]}),u.jsx("label",{children:u.jsx(Hn,{valueStyle:{fontSize:34,textAlign:"left",fontFamily:"Arimo Hebrew Subset",color:"white"},prefix:"Lucky Draw In:",value:i.endTime*1e3,onFinish:y})})]})]})}),u.jsx(se,{span:8,style:{position:"relative"},children:u.jsx(me,{style:{width:"100%"},children:u.jsxs(se,{style:{position:"relative",width:"100%"},children:[u.jsx(Ee,{src:fn,preview:!1,style:{position:"absolute",width:678,margin:"0 auto",top:-80,left:-230}}),u.jsx(Ee,{src:mn,style:{position:"absolute",width:375,transform:"rotate(-11.204deg)",margin:"0 auto",top:50}})]})})})]}),u.jsxs(U,{style:{width:"100%",display:"flex",justifyContent:"center",marginTop:30},children:[u.jsxs(ge,{onClick:v,className:"start-btn",style:{fontFamily:"Arimo Hebrew Sunset",width:654,height:100,borderRadius:40,fontSize:40,fontWeight:700},children:["Just Pay: ",i.TicketPrice," ",i.tokenSymbol]}),u.jsx(nn,{content:Yt,title:"Rules",placement:"right",children:u.jsx(ge,{style:{width:42,height:42,background:"transparent",border:"none",marginLeft:35},icon:u.jsx(Ee,{src:rn,preview:!1}),type:"default"})})]})]})})}export{tr as default};