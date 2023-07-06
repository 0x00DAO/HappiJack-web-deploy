import{n as u,K as T,ae as ee,D as Q,au as f,x as oe,O as ue,N as pe,al as be,F as q,at as Ye,aj as se,Y as Ee,Z as Ze,a0 as Ne,a1 as $e,$ as Ae,Q as We,a3 as Ce,a4 as we,aD as Ie,H as ye,ao as Ge,M as Re}from"./index-1137e89a.js";import{u as Fe,h as re,j as _e}from"./col-0b0680bc.js";function te(e){return!!(e.addonBefore||e.addonAfter)}function fe(e){return!!(e.prefix||e.suffix||e.allowClear)}function le(e,a,n,t){if(n){var r=a;if(a.type==="click"){var s=e.cloneNode(!0);r=Object.create(a,{target:{value:s},currentTarget:{value:s}}),s.value="",n(r);return}if(t!==void 0){r=Object.create(a,{target:{value:e},currentTarget:{value:e}}),e.value=t,n(r);return}n(r)}}function Xe(e,a){if(e){e.focus(a);var n=a||{},t=n.cursor;if(t){var r=e.value.length;switch(t){case"start":e.setSelectionRange(0,0);break;case"end":e.setSelectionRange(r,r);break;default:e.setSelectionRange(0,r)}}}}function xe(e){return typeof e>"u"||e===null?"":String(e)}var Pe=function(a){var n,t,r=a.inputElement,s=a.prefixCls,d=a.prefix,i=a.suffix,S=a.addonBefore,c=a.addonAfter,v=a.className,z=a.style,C=a.disabled,E=a.readOnly,w=a.focused,$=a.triggerFocus,b=a.allowClear,k=a.value,A=a.handleReset,x=a.hidden,m=a.classes,l=a.classNames,y=a.dataAttrs,N=a.styles,P=u.useRef(null),B=function(M){var j;(j=P.current)!==null&&j!==void 0&&j.contains(M.target)&&($==null||$())},O=function(){var M;if(!b)return null;var j=!C&&!E&&k,g="".concat(s,"-clear-icon"),o=ue(b)==="object"&&b!==null&&b!==void 0&&b.clearIcon?b.clearIcon:"✖";return f.createElement("span",{onClick:A,onMouseDown:function(_){return _.preventDefault()},className:T(g,(M={},Q(M,"".concat(g,"-hidden"),!j),Q(M,"".concat(g,"-has-suffix"),!!i),M)),role:"button",tabIndex:-1},o)},h=u.cloneElement(r,{value:k,hidden:x,className:T((n=r.props)===null||n===void 0?void 0:n.className,!fe(a)&&!te(a)&&v)||null,style:ee(ee({},(t=r.props)===null||t===void 0?void 0:t.style),!fe(a)&&!te(a)?z:{})});if(fe(a)){var R,I="".concat(s,"-affix-wrapper"),F=T(I,(R={},Q(R,"".concat(I,"-disabled"),C),Q(R,"".concat(I,"-focused"),w),Q(R,"".concat(I,"-readonly"),E),Q(R,"".concat(I,"-input-with-clear-btn"),i&&b&&k),R),!te(a)&&v,m==null?void 0:m.affixWrapper),D=(i||b)&&f.createElement("span",{className:T("".concat(s,"-suffix"),l==null?void 0:l.suffix),style:N==null?void 0:N.suffix},O(),i);h=f.createElement("span",oe({className:F,style:te(a)?void 0:z,hidden:!te(a)&&x,onClick:B},y==null?void 0:y.affixWrapper,{ref:P}),d&&f.createElement("span",{className:T("".concat(s,"-prefix"),l==null?void 0:l.prefix),style:N==null?void 0:N.prefix},d),u.cloneElement(r,{value:k,hidden:null}),D)}if(te(a)){var U="".concat(s,"-group"),V="".concat(U,"-addon"),H=T("".concat(s,"-wrapper"),U,m==null?void 0:m.wrapper),Z=T("".concat(s,"-group-wrapper"),v,m==null?void 0:m.group);return f.createElement("span",{className:Z,style:z,hidden:x},f.createElement("span",{className:H},S&&f.createElement("span",{className:V},S),u.cloneElement(h,{hidden:null}),c&&f.createElement("span",{className:V},c)))}return h},Qe=["autoComplete","onChange","onFocus","onBlur","onPressEnter","onKeyDown","prefixCls","disabled","htmlSize","className","maxLength","suffix","showCount","type","classes","classNames","styles"],Ue=u.forwardRef(function(e,a){var n=e.autoComplete,t=e.onChange,r=e.onFocus,s=e.onBlur,d=e.onPressEnter,i=e.onKeyDown,S=e.prefixCls,c=S===void 0?"rc-input":S,v=e.disabled,z=e.htmlSize,C=e.className,E=e.maxLength,w=e.suffix,$=e.showCount,b=e.type,k=b===void 0?"text":b,A=e.classes,x=e.classNames,m=e.styles,l=pe(e,Qe),y=be(e.defaultValue,{value:e.value}),N=q(y,2),P=N[0],B=N[1],O=u.useState(!1),h=q(O,2),R=h[0],I=h[1],F=u.useRef(null),D=function(o){F.current&&Xe(F.current,o)};u.useImperativeHandle(a,function(){return{focus:D,blur:function(){var o;(o=F.current)===null||o===void 0||o.blur()},setSelectionRange:function(o,K,_){var L;(L=F.current)===null||L===void 0||L.setSelectionRange(o,K,_)},select:function(){var o;(o=F.current)===null||o===void 0||o.select()},input:F.current}}),u.useEffect(function(){I(function(g){return g&&v?!1:g})},[v]);var U=function(o){e.value===void 0&&B(o.target.value),F.current&&le(F.current,o,t)},V=function(o){d&&o.key==="Enter"&&d(o),i==null||i(o)},H=function(o){I(!0),r==null||r(o)},Z=function(o){I(!1),s==null||s(o)},W=function(o){B(""),D(),F.current&&le(F.current,o,t)},M=function(){var o=Ye(e,["prefixCls","onPressEnter","addonBefore","addonAfter","prefix","suffix","allowClear","defaultValue","showCount","classes","htmlSize","styles","classNames"]);return f.createElement("input",oe({autoComplete:n},o,{onChange:U,onFocus:H,onBlur:Z,onKeyDown:V,className:T(c,Q({},"".concat(c,"-disabled"),v),x==null?void 0:x.input),style:m==null?void 0:m.input,ref:F,size:z,type:k}))},j=function(){var o=Number(E)>0;if(w||$){var K=xe(P),_=se(K).length,L=ue($)==="object"?$.formatter({value:K,count:_,maxLength:E}):"".concat(_).concat(o?" / ".concat(E):"");return f.createElement(f.Fragment,null,!!$&&f.createElement("span",{className:T("".concat(c,"-show-count-suffix"),Q({},"".concat(c,"-show-count-has-suffix"),!!w),x==null?void 0:x.count),style:ee({},m==null?void 0:m.count)},L),w)}return null};return f.createElement(Pe,oe({},l,{prefixCls:c,className:C,inputElement:M(),handleReset:W,value:xe(P),focused:R,triggerFocus:D,suffix:j(),disabled:v,classes:A,classNames:x,styles:m}))});function qe(e,a){const n=u.useRef([]),t=()=>{n.current.push(setTimeout(()=>{var r,s,d,i;!((r=e.current)===null||r===void 0)&&r.input&&((s=e.current)===null||s===void 0?void 0:s.input.getAttribute("type"))==="password"&&(!((d=e.current)===null||d===void 0)&&d.input.hasAttribute("value"))&&((i=e.current)===null||i===void 0||i.input.removeAttribute("value"))}))};return u.useEffect(()=>(a&&t(),()=>n.current.forEach(r=>{r&&clearTimeout(r)})),[]),t}function Je(e){return!!(e.prefix||e.suffix||e.allowClear)}var et=globalThis&&globalThis.__rest||function(e,a){var n={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&a.indexOf(t)<0&&(n[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,t=Object.getOwnPropertySymbols(e);r<t.length;r++)a.indexOf(t[r])<0&&Object.prototype.propertyIsEnumerable.call(e,t[r])&&(n[t[r]]=e[t[r]]);return n};function tt(e,a){if(!e)return;e.focus(a);const{cursor:n}=a||{};if(n){const t=e.value.length;switch(n){case"start":e.setSelectionRange(0,0);break;case"end":e.setSelectionRange(t,t);break;default:e.setSelectionRange(0,t);break}}}const at=u.forwardRef((e,a)=>{const{prefixCls:n,bordered:t=!0,status:r,size:s,disabled:d,onBlur:i,onFocus:S,suffix:c,allowClear:v,addonAfter:z,addonBefore:C,className:E,rootClassName:w,onChange:$,classNames:b}=e,k=et(e,["prefixCls","bordered","status","size","disabled","onBlur","onFocus","suffix","allowClear","addonAfter","addonBefore","className","rootClassName","onChange","classNames"]),{getPrefixCls:A,direction:x,input:m}=f.useContext(Ee),l=A("input",n),y=u.useRef(null),[N,P]=Fe(l),{compactSize:B,compactItemClassnames:O}=Ze(l,x),h=Ne(_=>{var L;return(L=B??s)!==null&&L!==void 0?L:_}),R=f.useContext($e),I=d??R,{status:F,hasFeedback:D,feedbackIcon:U}=u.useContext(Ae),V=_e(F,r),H=Je(e)||!!D,Z=u.useRef(H);u.useEffect(()=>{H&&Z.current,Z.current=H},[H]);const W=qe(y,!0),M=_=>{W(),i==null||i(_)},j=_=>{W(),S==null||S(_)},g=_=>{W(),$==null||$(_)},o=(D||c)&&f.createElement(f.Fragment,null,c,D&&U);let K;return typeof v=="object"&&(v!=null&&v.clearIcon)?K=v:v&&(K={clearIcon:f.createElement(Ie,null)}),N(f.createElement(Ue,Object.assign({ref:We(a,y),prefixCls:l,autoComplete:m==null?void 0:m.autoComplete},k,{disabled:I,onBlur:M,onFocus:j,suffix:o,allowClear:K,className:T(E,w,O),onChange:g,addonAfter:z&&f.createElement(Ce,null,f.createElement(we,{override:!0,status:!0},z)),addonBefore:C&&f.createElement(Ce,null,f.createElement(we,{override:!0,status:!0},C)),classNames:Object.assign(Object.assign({},b),{input:T({[`${l}-sm`]:h==="small",[`${l}-lg`]:h==="large",[`${l}-rtl`]:x==="rtl",[`${l}-borderless`]:!t},!H&&re(l,V),b==null?void 0:b.input,P)}),classes:{affixWrapper:T({[`${l}-affix-wrapper-sm`]:h==="small",[`${l}-affix-wrapper-lg`]:h==="large",[`${l}-affix-wrapper-rtl`]:x==="rtl",[`${l}-affix-wrapper-borderless`]:!t},re(`${l}-affix-wrapper`,V,D),P),wrapper:T({[`${l}-group-rtl`]:x==="rtl"},P),group:T({[`${l}-group-wrapper-sm`]:h==="small",[`${l}-group-wrapper-lg`]:h==="large",[`${l}-group-wrapper-rtl`]:x==="rtl",[`${l}-group-wrapper-disabled`]:I},re(`${l}-group-wrapper`,V,D),P)}})))}),gt=at;var nt=`
  min-height:0 !important;
  max-height:none !important;
  height:0 !important;
  visibility:hidden !important;
  overflow:hidden !important;
  position:absolute !important;
  z-index:-1000 !important;
  top:0 !important;
  right:0 !important;
  pointer-events: none !important;
`,rt=["letter-spacing","line-height","padding-top","padding-bottom","font-family","font-weight","font-size","font-variant","text-rendering","text-transform","width","text-indent","padding-left","padding-right","border-width","box-sizing","word-break","white-space"],ve={},G;function lt(e){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,n=e.getAttribute("id")||e.getAttribute("data-reactid")||e.getAttribute("name");if(a&&ve[n])return ve[n];var t=window.getComputedStyle(e),r=t.getPropertyValue("box-sizing")||t.getPropertyValue("-moz-box-sizing")||t.getPropertyValue("-webkit-box-sizing"),s=parseFloat(t.getPropertyValue("padding-bottom"))+parseFloat(t.getPropertyValue("padding-top")),d=parseFloat(t.getPropertyValue("border-bottom-width"))+parseFloat(t.getPropertyValue("border-top-width")),i=rt.map(function(c){return"".concat(c,":").concat(t.getPropertyValue(c))}).join(";"),S={sizingStyle:i,paddingSize:s,borderSize:d,boxSizing:r};return a&&n&&(ve[n]=S),S}function ot(e){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:null,t=arguments.length>3&&arguments[3]!==void 0?arguments[3]:null;G||(G=document.createElement("textarea"),G.setAttribute("tab-index","-1"),G.setAttribute("aria-hidden","true"),document.body.appendChild(G)),e.getAttribute("wrap")?G.setAttribute("wrap",e.getAttribute("wrap")):G.removeAttribute("wrap");var r=lt(e,a),s=r.paddingSize,d=r.borderSize,i=r.boxSizing,S=r.sizingStyle;G.setAttribute("style","".concat(S,";").concat(nt)),G.value=e.value||e.placeholder||"";var c=void 0,v=void 0,z,C=G.scrollHeight;if(i==="border-box"?C+=d:i==="content-box"&&(C-=s),n!==null||t!==null){G.value=" ";var E=G.scrollHeight-s;n!==null&&(c=E*n,i==="border-box"&&(c=c+s+d),C=Math.max(c,C)),t!==null&&(v=E*t,i==="border-box"&&(v=v+s+d),z=C>v?"":"hidden",C=Math.min(v,C))}var w={height:C,overflowY:z,resize:"none"};return c&&(w.minHeight=c),v&&(w.maxHeight=v),w}var st=["prefixCls","onPressEnter","defaultValue","value","autoSize","onResize","className","style","disabled","onChange","onInternalAutoSize"],me=0,ge=1,he=2,it=u.forwardRef(function(e,a){var n=e,t=n.prefixCls;n.onPressEnter;var r=n.defaultValue,s=n.value,d=n.autoSize,i=n.onResize,S=n.className,c=n.style,v=n.disabled,z=n.onChange;n.onInternalAutoSize;var C=pe(n,st),E=be(r,{value:s,postState:function(o){return o??""}}),w=q(E,2),$=w[0],b=w[1],k=function(o){b(o.target.value),z==null||z(o)},A=u.useRef();u.useImperativeHandle(a,function(){return{textArea:A.current}});var x=u.useMemo(function(){return d&&ue(d)==="object"?[d.minRows,d.maxRows]:[]},[d]),m=q(x,2),l=m[0],y=m[1],N=!!d,P=function(){try{if(document.activeElement===A.current){var o=A.current,K=o.selectionStart,_=o.selectionEnd,L=o.scrollTop;A.current.setSelectionRange(K,_),A.current.scrollTop=L}}catch{}},B=u.useState(he),O=q(B,2),h=O[0],R=O[1],I=u.useState(),F=q(I,2),D=F[0],U=F[1],V=function(){R(me)};ye(function(){N&&V()},[s,l,y,N]),ye(function(){if(h===me)R(ge);else if(h===ge){var g=ot(A.current,!1,l,y);R(he),U(g)}else P()},[h]);var H=u.useRef(),Z=function(){Re.cancel(H.current)},W=function(o){h===he&&(i==null||i(o),d&&(Z(),H.current=Re(function(){V()})))};u.useEffect(function(){return Z},[]);var M=N?D:null,j=ee(ee({},c),M);return(h===me||h===ge)&&(j.overflowY="hidden",j.overflowX="hidden"),u.createElement(Ge,{onResize:W,disabled:!(d||i)},u.createElement("textarea",oe({},C,{ref:A,style:j,className:T(t,S,Q({},"".concat(t,"-disabled"),v)),disabled:v,value:$,onChange:k})))}),ut=["defaultValue","value","onFocus","onBlur","onChange","allowClear","maxLength","onCompositionStart","onCompositionEnd","suffix","prefixCls","classes","showCount","className","style","disabled","hidden","classNames","styles","onResize"];function Te(e,a){return se(e||"").slice(0,a).join("")}function ze(e,a,n,t){var r=n;return e?r=Te(n,t):se(a||"").length<n.length&&se(n||"").length>t&&(r=a),r}var ct=f.forwardRef(function(e,a){var n,t=e.defaultValue,r=e.value,s=e.onFocus,d=e.onBlur,i=e.onChange,S=e.allowClear,c=e.maxLength,v=e.onCompositionStart,z=e.onCompositionEnd,C=e.suffix,E=e.prefixCls,w=E===void 0?"rc-textarea":E,$=e.classes,b=e.showCount,k=e.className,A=e.style,x=e.disabled,m=e.hidden,l=e.classNames,y=e.styles,N=e.onResize,P=pe(e,ut),B=be(t,{value:r,defaultValue:t}),O=q(B,2),h=O[0],R=O[1],I=u.useRef(null),F=f.useState(!1),D=q(F,2),U=D[0],V=D[1],H=f.useState(!1),Z=q(H,2),W=Z[0],M=Z[1],j=f.useRef(),g=f.useRef(0),o=f.useState(null),K=q(o,2),_=K[0],L=K[1],ce=function(){I.current.textArea.focus()};u.useImperativeHandle(a,function(){return{resizableTextArea:I.current,focus:ce,blur:function(){I.current.textArea.blur()}}}),u.useEffect(function(){V(function(X){return!x&&X})},[x]);var ie=Number(c)>0,Oe=function(p){M(!0),j.current=h,g.current=p.currentTarget.selectionStart,v==null||v(p)},je=function(p){M(!1);var Y=p.currentTarget.value;if(ie){var J,Le=g.current>=c+1||g.current===((J=j.current)===null||J===void 0?void 0:J.length);Y=ze(Le,j.current,Y,c)}Y!==h&&(R(Y),le(p.currentTarget,p,i,Y)),z==null||z(p)},Be=function(p){var Y=p.target.value;if(!W&&ie){var J=p.target.selectionStart>=c+1||p.target.selectionStart===Y.length||!p.target.selectionStart;Y=ze(J,h,Y,c)}R(Y),le(p.currentTarget,p,i,Y)},De=function(p){var Y=P.onPressEnter,J=P.onKeyDown;p.key==="Enter"&&Y&&Y(p),J==null||J(p)},Ve=function(p){V(!0),s==null||s(p)},Me=function(p){V(!1),d==null||d(p)},ke=function(p){R(""),ce(),le(I.current.textArea,p,i)},ae=xe(h);!W&&ie&&r==null&&(ae=Te(ae,c));var de=C,ne;if(b){var Se=se(ae).length;ue(b)==="object"?ne=b.formatter({value:ae,count:Se,maxLength:c}):ne="".concat(Se).concat(ie?" / ".concat(c):""),de=f.createElement(f.Fragment,null,de,f.createElement("span",{className:T("".concat(w,"-data-count"),l==null?void 0:l.count),style:y==null?void 0:y.count},ne))}var He=function(p){N==null||N(p),_===null?L("mounted"):_==="mounted"&&L("resized")},Ke=f.createElement(Pe,{value:ae,allowClear:S,handleReset:ke,suffix:de,prefixCls:w,classes:{affixWrapper:T($==null?void 0:$.affixWrapper,(n={},Q(n,"".concat(w,"-show-count"),b),Q(n,"".concat(w,"-textarea-allow-clear"),S),n))},disabled:x,focused:U,className:k,style:ee(ee({},A),_==="resized"?{height:"auto"}:{}),dataAttrs:{affixWrapper:{"data-count":typeof ne=="string"?ne:void 0}},hidden:m,inputElement:f.createElement(it,oe({},P,{onKeyDown:De,onChange:Be,onFocus:Ve,onBlur:Me,onCompositionStart:Oe,onCompositionEnd:je,className:l==null?void 0:l.textarea,style:ee(ee({},y==null?void 0:y.textarea),{},{resize:A==null?void 0:A.resize}),disabled:x,prefixCls:w,onResize:He,ref:I}))});return Ke}),dt=globalThis&&globalThis.__rest||function(e,a){var n={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&a.indexOf(t)<0&&(n[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,t=Object.getOwnPropertySymbols(e);r<t.length;r++)a.indexOf(t[r])<0&&Object.prototype.propertyIsEnumerable.call(e,t[r])&&(n[t[r]]=e[t[r]]);return n};const ft=u.forwardRef((e,a)=>{var{prefixCls:n,bordered:t=!0,size:r,disabled:s,status:d,allowClear:i,showCount:S,classNames:c}=e,v=dt(e,["prefixCls","bordered","size","disabled","status","allowClear","showCount","classNames"]);const{getPrefixCls:z,direction:C}=u.useContext(Ee),E=Ne(r),w=u.useContext($e),$=s??w,{status:b,hasFeedback:k,feedbackIcon:A}=u.useContext(Ae),x=_e(b,d),m=u.useRef(null);u.useImperativeHandle(a,()=>{var B;return{resizableTextArea:(B=m.current)===null||B===void 0?void 0:B.resizableTextArea,focus:O=>{var h,R;tt((R=(h=m.current)===null||h===void 0?void 0:h.resizableTextArea)===null||R===void 0?void 0:R.textArea,O)},blur:()=>{var O;return(O=m.current)===null||O===void 0?void 0:O.blur()}}});const l=z("input",n);let y;typeof i=="object"&&(i!=null&&i.clearIcon)?y=i:i&&(y={clearIcon:u.createElement(Ie,null)});const[N,P]=Fe(l);return N(u.createElement(ct,Object.assign({},v,{disabled:$,allowClear:y,classes:{affixWrapper:T(`${l}-textarea-affix-wrapper`,{[`${l}-affix-wrapper-rtl`]:C==="rtl",[`${l}-affix-wrapper-borderless`]:!t,[`${l}-affix-wrapper-sm`]:E==="small",[`${l}-affix-wrapper-lg`]:E==="large",[`${l}-textarea-show-count`]:S},re(`${l}-affix-wrapper`,x),P)},classNames:Object.assign(Object.assign({},c),{textarea:T({[`${l}-borderless`]:!t,[`${l}-sm`]:E==="small",[`${l}-lg`]:E==="large"},re(l,x),P,c==null?void 0:c.textarea)}),prefixCls:l,suffix:k&&u.createElement("span",{className:`${l}-textarea-suffix`},A),showCount:S,ref:m})))}),ht=ft;export{gt as I,ht as T,qe as u};
