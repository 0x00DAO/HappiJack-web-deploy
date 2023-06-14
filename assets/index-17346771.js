import{D as dt,g as vt,i as mt,E as gt}from"./EyeOutlined-0341f938.js";import{aX as Ve,$ as re,s as Q,n as r,t as Y,z as pt,x as J,aY as wt,aZ as ht,D as nt,C as ze,a5 as Ye,o as q,K as We,ae as Ce,A as Oe,H as Ct,aS as Se,am as Fe,aN as St,aj as bt,J as Pt,ao as xt,aA as yt,az as Mt,M as rt,aq as Ae,aM as Ke}from"./index-f98e2bed.js";function ot(){var t=document.documentElement.clientWidth,e=window.innerHeight||document.documentElement.clientHeight;return{width:t,height:e}}function Et(t){var e=t.getBoundingClientRect(),n=document.documentElement;return{left:e.left+(window.pageXOffset||n.scrollLeft)-(n.clientLeft||document.body.clientLeft||0),top:e.top+(window.pageYOffset||n.scrollTop)-(n.clientTop||document.body.clientTop||0)}}function Ee(t,e,n,o){var i=Ve.unstable_batchedUpdates?function(s){Ve.unstable_batchedUpdates(n,s)}:n;return t!=null&&t.addEventListener&&t.addEventListener(e,i,o),{remove:function(){t!=null&&t.removeEventListener&&t.removeEventListener(e,i,o)}}}function Qe(t,e,n,o){var i=e+n,a=(n-o)/2;if(n>o){if(e>0)return Q({},t,a);if(e<0&&i<o)return Q({},t,-a)}else if(e<0||i>o)return Q({},t,e<0?a:-a);return{}}function It(t,e,n,o){var i=ot(),a=i.width,s=i.height,c=null;return t<=a&&e<=s?c={x:0,y:0}:(t>a||e>s)&&(c=re(re({},Qe("x",n,t,a)),Qe("y",o,e,s))),c}var Te=1,$e=50,Ie=1,Ot=1,Je={x:0,y:0,rotate:0,scale:1,flipX:!1,flipY:!1};function Nt(t){var e=r.useRef(null),n=r.useRef([]),o=r.useState(Je),i=Y(o,2),a=i[0],s=i[1],c=function(){s(Je)},l=function(p){e.current===null&&(n.current=[],e.current=pt(function(){s(function(v){var m=v;return n.current.forEach(function(h){m=re(re({},m),h)}),e.current=null,m})})),n.current.push(re(re({},a),p))},b=function(p,v,m){var h=t.current,O=h.width,R=h.height,D=h.offsetWidth,X=h.offsetHeight,L=h.offsetLeft,T=h.offsetTop,U=p,P=a.scale*p;P>$e?(U=$e/a.scale,P=$e):P<Te&&(U=Te/a.scale,P=Te);var _=v??innerWidth/2,B=m??innerHeight/2,M=U-1,$=M*O*.5,Z=M*R*.5,G=M*(_-a.x-L),z=M*(B-a.y-T),x=a.x-(G-$),E=a.y-(z-Z);if(p<1&&P===1){var C=D*P,y=X*P,I=ot(),V=I.width,A=I.height;C<=V&&y<=A&&(x=0,E=0)}l({x,y:E,scale:P})};return{transform:a,resetTransform:c,updateTransform:l,dispatchZoomChange:b}}var Rt=function(e){var n,o=e.visible,i=e.maskTransitionName,a=e.getContainer,s=e.prefixCls,c=e.rootClassName,l=e.icons,b=e.countRender,g=e.showSwitch,p=e.showProgress,v=e.current,m=e.count,h=e.scale,O=e.onSwitchLeft,R=e.onSwitchRight,D=e.onClose,X=e.onZoomIn,L=e.onZoomOut,T=e.onRotateRight,U=e.onRotateLeft,P=e.onFlipX,_=e.onFlipY,B=l.rotateLeft,M=l.rotateRight,$=l.zoomIn,Z=l.zoomOut,G=l.close,z=l.left,x=l.right,E=l.flipX,C=l.flipY,y="".concat(s,"-operations-operation"),I="".concat(s,"-operations-icon"),V=[{icon:G,onClick:D,type:"close"},{icon:$,onClick:X,type:"zoomIn",disabled:h===$e},{icon:Z,onClick:L,type:"zoomOut",disabled:h===Te},{icon:M,onClick:T,type:"rotateRight"},{icon:B,onClick:U,type:"rotateLeft"},{icon:E,onClick:P,type:"flipX"},{icon:C,onClick:_,type:"flipY"}],A=r.createElement(r.Fragment,null,g&&r.createElement(r.Fragment,null,r.createElement("div",{className:J("".concat(s,"-switch-left"),Q({},"".concat(s,"-switch-left-disabled"),v===0)),onClick:O},z),r.createElement("div",{className:J("".concat(s,"-switch-right"),Q({},"".concat(s,"-switch-right-disabled"),v===m-1)),onClick:R},x)),r.createElement("ul",{className:"".concat(s,"-operations")},p&&r.createElement("li",{className:"".concat(s,"-operations-progress")},(n=b==null?void 0:b(v+1,m))!==null&&n!==void 0?n:"".concat(v+1," / ").concat(m)),V.map(function(f){var j,S=f.icon,W=f.onClick,H=f.type,ee=f.disabled;return r.createElement("li",{className:J(y,(j={},Q(j,"".concat(s,"-operations-operation-").concat(H),!0),Q(j,"".concat(s,"-operations-operation-disabled"),!!ee),j)),onClick:W,key:H},r.isValidElement(S)?r.cloneElement(S,{className:I}):S)})));return r.createElement(wt,{visible:o,motionName:i},function(f){var j=f.className,S=f.style;return r.createElement(ht,{open:!0,getContainer:a??document.body},r.createElement("div",{className:J("".concat(s,"-operations-wrapper"),j,c),style:S},A))})},Lt=["visible","onVisibleChange","getContainer","current","countRender","onChange"],Ze=r.createContext({previewUrls:new Map,setPreviewUrls:function(){return null},current:null,setCurrent:function(){return null},setShowPreview:function(){return null},setMousePosition:function(){return null},registerImage:function(){return function(){return null}},rootClassName:""}),Tt=Ze.Provider;function _e(t,e){if(e!==void 0){var n=t.indexOf(e);if(n!==-1)return n}}var $t=function(e){var n=e.previewPrefixCls,o=n===void 0?"rc-image-preview":n,i=e.children,a=e.icons,s=a===void 0?{}:a,c=e.preview,l=nt(c)==="object"?c:{},b=l.visible,g=b===void 0?void 0:b,p=l.onVisibleChange,v=p===void 0?void 0:p,m=l.getContainer,h=m===void 0?void 0:m,O=l.current,R=O===void 0?0:O,D=l.countRender,X=D===void 0?void 0:D,L=l.onChange,T=L===void 0?void 0:L,U=ze(l,Lt),P=r.useState(new Map),_=Y(P,2),B=_[0],M=_[1],$=Array.from(B.keys()),Z=r.useRef(),G=Ye(void 0,{onChange:function(d,N){Z.current!==void 0&&(T==null||T(_e($,d),_e($,N))),Z.current=N}}),z=Y(G,2),x=z[0],E=z[1],C=Ye(!!g,{value:g,onChange:function(d,N){v==null||v(d,N,_e($,x)),Z.current=d?x:void 0}}),y=Y(C,2),I=y[0],V=y[1],A=r.useState(null),f=Y(A,2),j=f[0],S=f[1],W=g!==void 0,H=$[R],ee=new Map(Array.from(B).filter(function(k){var d=Y(k,2),N=d[1].canPreview;return!!N}).map(function(k){var d=Y(k,2),N=d[0],ce=d[1].url;return[N,ce]})),se=function(d,N){var ce=arguments.length>2&&arguments[2]!==void 0?arguments[2]:!0,me=function(){M(function(fe){var ge=new Map(fe),pe=ge.delete(d);return pe?ge:fe})};return M(function(ue){return new Map(ue).set(d,{url:N,canPreview:ce})}),me},le=function(d){d.stopPropagation(),V(!1),S(null)};return r.useEffect(function(){E(H)},[H]),r.useEffect(function(){!I&&W&&E(H)},[H,W,I]),r.createElement(Tt,{value:{isPreviewGroup:!0,previewUrls:ee,setPreviewUrls:M,current:x,setCurrent:E,setShowPreview:V,setMousePosition:S,registerImage:se}},i,r.createElement(it,q({"aria-hidden":!I,visible:I,prefixCls:o,onClose:le,mousePosition:j,src:ee.get(x),icons:s,getContainer:h,countRender:X},U)))},zt=["prefixCls","src","alt","onClose","visible","icons","rootClassName","getContainer","countRender","scaleStep","transitionName","maskTransitionName"],it=function(e){var n=e.prefixCls,o=e.src,i=e.alt,a=e.onClose,s=e.visible,c=e.icons,l=c===void 0?{}:c,b=e.rootClassName,g=e.getContainer,p=e.countRender,v=e.scaleStep,m=v===void 0?.5:v,h=e.transitionName,O=h===void 0?"zoom":h,R=e.maskTransitionName,D=R===void 0?"fade":R,X=ze(e,zt),L=r.useRef(),T=r.useRef({deltaX:0,deltaY:0,transformX:0,transformY:0}),U=r.useState(!1),P=Y(U,2),_=P[0],B=P[1],M=r.useContext(Ze),$=M.previewUrls,Z=M.current,G=M.isPreviewGroup,z=M.setCurrent,x=$.size,E=Array.from($.keys()),C=E.indexOf(Z),y=G?$.get(Z):o,I=G&&x>1,V=G&&x>=1,A=Nt(L),f=A.transform,j=A.resetTransform,S=A.updateTransform,W=A.dispatchZoomChange,H=r.useState(!0),ee=Y(H,2),se=ee[0],le=ee[1],k=f.rotate,d=f.scale,N=J(Q({},"".concat(n,"-moving"),_));r.useEffect(function(){se||le(!0)},[se]);var ce=function(){j()},me=function(){W(Ie+m)},ue=function(){W(Ie-m)},fe=function(){S({rotate:k+90})},ge=function(){S({rotate:k-90})},pe=function(){S({flipX:!f.flipX})},be=function(){S({flipY:!f.flipY})},we=function(u){u.preventDefault(),u.stopPropagation(),C>0&&(le(!1),j(),z(E[C-1]))},ke=function(u){u.preventDefault(),u.stopPropagation(),C<x-1&&(le(!1),j(),z(E[C+1]))},Pe=function(){if(s&&_){B(!1);var u=T.current,de=u.transformX,ie=u.transformY,te=f.x!==de&&f.y!==ie;if(!te)return;var ne=L.current.offsetWidth*d,F=L.current.offsetHeight*d,ae=L.current.getBoundingClientRect(),Me=ae.left,Ne=ae.top,Re=k%180!==0,Le=It(Re?F:ne,Re?ne:F,Me,Ne);Le&&S(re({},Le))}},De=function(u){u.button===0&&(u.preventDefault(),u.stopPropagation(),T.current={deltaX:u.pageX-f.x,deltaY:u.pageY-f.y,transformX:f.x,transformY:f.y},B(!0))},xe=function(u){s&&_&&S({x:u.pageX-T.current.deltaX,y:u.pageY-T.current.deltaY})},he=function(u){if(!(!s||u.deltaY==0)){var de=Math.abs(u.deltaY/100),ie=Math.min(de,Ot),te=Ie+ie*m;u.deltaY>0&&(te=Ie/te),W(te,u.clientX,u.clientY)}},oe=r.useCallback(function(w){!s||!I||(w.keyCode===We.LEFT?C>0&&z(E[C-1]):w.keyCode===We.RIGHT&&C<x-1&&z(E[C+1]))},[C,x,E,z,I,s]),ye=function(u){s&&(d!==1?S({x:0,y:0,scale:1}):W(Ie+m,u.clientX,u.clientY))};return r.useEffect(function(){var w,u,de=Ee(window,"mouseup",Pe,!1),ie=Ee(window,"mousemove",xe,!1),te=Ee(window,"keydown",oe,!1);try{window.top!==window.self&&(w=Ee(window.top,"mouseup",Pe,!1),u=Ee(window.top,"mousemove",xe,!1))}catch{}return function(){var ne,F;de.remove(),ie.remove(),te.remove(),(ne=w)===null||ne===void 0||ne.remove(),(F=u)===null||F===void 0||F.remove()}},[s,_,oe]),Ce.createElement(Ce.Fragment,null,Ce.createElement(dt,q({transitionName:O,maskTransitionName:D,closable:!1,keyboard:!0,prefixCls:n,onClose:a,visible:s,wrapClassName:N,rootClassName:b,getContainer:g},X,{afterClose:ce}),Ce.createElement("div",{className:"".concat(n,"-img-wrapper")},Ce.createElement("img",{width:e.width,height:e.height,onWheel:he,onMouseDown:De,onDoubleClick:ye,ref:L,className:"".concat(n,"-img"),src:y,alt:i,style:{transform:"translate3d(".concat(f.x,"px, ").concat(f.y,"px, 0) scale3d(").concat(f.flipX?"-":"").concat(d,", ").concat(f.flipY?"-":"").concat(d,", 1) rotate(").concat(k,"deg)"),transitionDuration:!se&&"0s"}}))),Ce.createElement(Rt,{visible:s,maskTransitionName:D,getContainer:g,prefixCls:n,rootClassName:b,icons:l,countRender:p,showSwitch:I,showProgress:V,current:C,count:x,scale:d,onSwitchLeft:we,onSwitchRight:ke,onZoomIn:me,onZoomOut:ue,onRotateRight:fe,onRotateLeft:ge,onFlipX:pe,onFlipY:be,onClose:a}))},At=["src","alt","onPreviewClose","prefixCls","previewPrefixCls","placeholder","fallback","width","height","style","preview","className","onClick","onError","wrapperClassName","wrapperStyle","rootClassName","crossOrigin","decoding","loading","referrerPolicy","sizes","srcSet","useMap","draggable"],jt=["src","visible","onVisibleChange","getContainer","mask","maskClassName","icons","scaleStep"],qe=0;function kt(t){return new Promise(function(e){var n=document.createElement("img");n.onerror=function(){return e(!1)},n.onload=function(){return e(!0)},n.src=t})}var je=function(e){var n,o=e.src,i=e.alt,a=e.onPreviewClose,s=e.prefixCls,c=s===void 0?"rc-image":s,l=e.previewPrefixCls,b=l===void 0?"".concat(c,"-preview"):l,g=e.placeholder,p=e.fallback,v=e.width,m=e.height,h=e.style,O=e.preview,R=O===void 0?!0:O,D=e.className,X=e.onClick,L=e.onError,T=e.wrapperClassName,U=e.wrapperStyle,P=e.rootClassName,_=e.crossOrigin,B=e.decoding,M=e.loading,$=e.referrerPolicy,Z=e.sizes,G=e.srcSet,z=e.useMap,x=e.draggable,E=ze(e,At),C=g&&g!==!0,y=nt(R)==="object"?R:{},I=y.src,V=y.visible,A=V===void 0?void 0:V,f=y.onVisibleChange,j=f===void 0?a:f,S=y.getContainer,W=S===void 0?void 0:S,H=y.mask,ee=y.maskClassName,se=y.icons,le=y.scaleStep,k=ze(y,jt),d=I??o,N=A!==void 0,ce=Ye(!!A,{value:A,onChange:j}),me=Y(ce,2),ue=me[0],fe=me[1],ge=r.useState(C?"loading":"normal"),pe=Y(ge,2),be=pe[0],we=pe[1],ke=r.useState(null),Pe=Y(ke,2),De=Pe[0],xe=Pe[1],he=be==="error",oe=r.useContext(Ze),ye=oe.isPreviewGroup,w=oe.setCurrent,u=oe.setShowPreview,de=oe.setMousePosition,ie=oe.registerImage,te=r.useState(function(){return qe+=1,qe}),ne=Y(te,1),F=ne[0],ae=!!R,Me=r.useRef(!1),Ne=function(){we("normal")},Re=function(K){if(!N){var Ue=Et(K.target),Be=Ue.left,Ge=Ue.top;ye?(w(F),de({x:Be,y:Ge})):xe({x:Be,y:Ge})}ye?u(!0):fe(!0),X==null||X(K)},Le=function(K){K.stopPropagation(),fe(!1),N||xe(null)},ct=function(K){Me.current=!1,be==="loading"&&K!=null&&K.complete&&(K.naturalWidth||K.naturalHeight)&&(Me.current=!0,Ne())};r.useEffect(function(){kt(d).then(function(ve){ve||we("error")})},[d]),r.useEffect(function(){var ve=ie(F,d);return ve},[]),r.useEffect(function(){ie(F,d,ae)},[d,ae]),r.useEffect(function(){he&&we("normal"),C&&!Me.current&&we("loading")},[o]);var ut=J(c,T,P,Q({},"".concat(c,"-error"),he)),ft=he&&p?p:d,He={crossOrigin:_,decoding:B,draggable:x,loading:M,referrerPolicy:$,sizes:Z,srcSet:G,useMap:z,onError:L,alt:i,className:J("".concat(c,"-img"),Q({},"".concat(c,"-img-placeholder"),g===!0),D),style:re({height:m},h)};return r.createElement(r.Fragment,null,r.createElement("div",q({},E,{className:ut,onClick:ae?Re:X,style:re({width:v,height:m},U)}),r.createElement("img",q({},He,{ref:ct},he&&p?{src:p}:{onLoad:Ne,src:o},{width:v,height:m})),be==="loading"&&r.createElement("div",{"aria-hidden":"true",className:"".concat(c,"-placeholder")},g),H&&ae&&r.createElement("div",{className:J("".concat(c,"-mask"),ee),style:{display:((n=He.style)===null||n===void 0?void 0:n.display)==="none"?"none":void 0}},H)),!ye&&ae&&r.createElement(it,q({"aria-hidden":!ue,visible:ue,prefixCls:b,onClose:Le,mousePosition:De,src:ft,alt:i,getContainer:W,icons:se,scaleStep:le,rootClassName:P},k)))};je.PreviewGroup=$t;je.displayName="Image";var Dt={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"defs",attrs:{},children:[{tag:"style",attrs:{}}]},{tag:"path",attrs:{d:"M672 418H144c-17.7 0-32 14.3-32 32v414c0 17.7 14.3 32 32 32h528c17.7 0 32-14.3 32-32V450c0-17.7-14.3-32-32-32zm-44 402H188V494h440v326z"}},{tag:"path",attrs:{d:"M819.3 328.5c-78.8-100.7-196-153.6-314.6-154.2l-.2-64c0-6.5-7.6-10.1-12.6-6.1l-128 101c-4 3.1-3.9 9.1 0 12.3L492 318.6c5.1 4 12.7.4 12.6-6.1v-63.9c12.9.1 25.9.9 38.8 2.5 42.1 5.2 82.1 18.2 119 38.7 38.1 21.2 71.2 49.7 98.4 84.3 27.1 34.7 46.7 73.7 58.1 115.8a325.95 325.95 0 016.5 140.9h74.9c14.8-103.6-11.3-213-81-302.3z"}}]},name:"rotate-left",theme:"outlined"};const _t=Dt;var Yt=function(e,n){return r.createElement(Oe,q({},e,{ref:n,icon:_t}))};const Xt=r.forwardRef(Yt);var Zt={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"defs",attrs:{},children:[{tag:"style",attrs:{}}]},{tag:"path",attrs:{d:"M480.5 251.2c13-1.6 25.9-2.4 38.8-2.5v63.9c0 6.5 7.5 10.1 12.6 6.1L660 217.6c4-3.2 4-9.2 0-12.3l-128-101c-5.1-4-12.6-.4-12.6 6.1l-.2 64c-118.6.5-235.8 53.4-314.6 154.2A399.75 399.75 0 00123.5 631h74.9c-.9-5.3-1.7-10.7-2.4-16.1-5.1-42.1-2.1-84.1 8.9-124.8 11.4-42.2 31-81.1 58.1-115.8 27.2-34.7 60.3-63.2 98.4-84.3 37-20.6 76.9-33.6 119.1-38.8z"}},{tag:"path",attrs:{d:"M880 418H352c-17.7 0-32 14.3-32 32v414c0 17.7 14.3 32 32 32h528c17.7 0 32-14.3 32-32V450c0-17.7-14.3-32-32-32zm-44 402H396V494h440v326z"}}]},name:"rotate-right",theme:"outlined"};const Ht=Zt;var Ut=function(e,n){return r.createElement(Oe,q({},e,{ref:n,icon:Ht}))};const Bt=r.forwardRef(Ut);var Gt={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M847.9 592H152c-4.4 0-8 3.6-8 8v60c0 4.4 3.6 8 8 8h605.2L612.9 851c-4.1 5.2-.4 13 6.3 13h72.5c4.9 0 9.5-2.2 12.6-6.1l168.8-214.1c16.5-21 1.6-51.8-25.2-51.8zM872 356H266.8l144.3-183c4.1-5.2.4-13-6.3-13h-72.5c-4.9 0-9.5 2.2-12.6 6.1L150.9 380.2c-16.5 21-1.6 51.8 25.1 51.8h696c4.4 0 8-3.6 8-8v-60c0-4.4-3.6-8-8-8z"}}]},name:"swap",theme:"outlined"};const Vt=Gt;var Wt=function(e,n){return r.createElement(Oe,q({},e,{ref:n,icon:Vt}))};const et=r.forwardRef(Wt);var Ft={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M637 443H519V309c0-4.4-3.6-8-8-8h-60c-4.4 0-8 3.6-8 8v134H325c-4.4 0-8 3.6-8 8v60c0 4.4 3.6 8 8 8h118v134c0 4.4 3.6 8 8 8h60c4.4 0 8-3.6 8-8V519h118c4.4 0 8-3.6 8-8v-60c0-4.4-3.6-8-8-8zm284 424L775 721c122.1-148.9 113.6-369.5-26-509-148-148.1-388.4-148.1-537 0-148.1 148.6-148.1 389 0 537 139.5 139.6 360.1 148.1 509 26l146 146c3.2 2.8 8.3 2.8 11 0l43-43c2.8-2.7 2.8-7.8 0-11zM696 696c-118.8 118.7-311.2 118.7-430 0-118.7-118.8-118.7-311.2 0-430 118.8-118.7 311.2-118.7 430 0 118.7 118.8 118.7 311.2 0 430z"}}]},name:"zoom-in",theme:"outlined"};const Kt=Ft;var Qt=function(e,n){return r.createElement(Oe,q({},e,{ref:n,icon:Kt}))};const Jt=r.forwardRef(Qt);var qt={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M637 443H325c-4.4 0-8 3.6-8 8v60c0 4.4 3.6 8 8 8h312c4.4 0 8-3.6 8-8v-60c0-4.4-3.6-8-8-8zm284 424L775 721c122.1-148.9 113.6-369.5-26-509-148-148.1-388.4-148.1-537 0-148.1 148.6-148.1 389 0 537 139.5 139.6 360.1 148.1 509 26l146 146c3.2 2.8 8.3 2.8 11 0l43-43c2.8-2.7 2.8-7.8 0-11zM696 696c-118.8 118.7-311.2 118.7-430 0-118.7-118.8-118.7-311.2 0-430 118.8-118.7 311.2-118.7 430 0 118.7 118.8 118.7 311.2 0 430z"}}]},name:"zoom-out",theme:"outlined"};const en=qt;var tn=function(e,n){return r.createElement(Oe,q({},e,{ref:n,icon:en}))};const nn=r.forwardRef(tn),Xe=t=>({position:t||"absolute",inset:0}),rn=t=>{const{iconCls:e,motionDurationSlow:n,paddingXXS:o,marginXXS:i,prefixCls:a}=t;return{position:"absolute",inset:0,display:"flex",alignItems:"center",justifyContent:"center",color:"#fff",background:new Se("#000").setAlpha(.5).toRgbString(),cursor:"pointer",opacity:0,transition:`opacity ${n}`,[`.${a}-mask-info`]:Object.assign(Object.assign({},bt),{padding:`0 ${o}px`,[e]:{marginInlineEnd:i,svg:{verticalAlign:"baseline"}}})}},on=t=>{const{previewCls:e,modalMaskBg:n,paddingSM:o,previewOperationColorDisabled:i,motionDurationSlow:a}=t,s=new Se(n).setAlpha(.1),c=s.clone().setAlpha(.2);return{[`${e}-operations`]:Object.assign(Object.assign({},Pt(t)),{display:"flex",flexDirection:"row-reverse",alignItems:"center",color:t.previewOperationColor,listStyle:"none",background:s.toRgbString(),pointerEvents:"auto","&-operation":{marginInlineStart:o,padding:o,cursor:"pointer",transition:`all ${a}`,userSelect:"none","&:hover":{background:c.toRgbString()},"&-disabled":{color:i,pointerEvents:"none"},"&:last-of-type":{marginInlineStart:0}},"&-progress":{position:"absolute",left:{_skip_check_:!0,value:"50%"},transform:"translateX(-50%)"},"&-icon":{fontSize:t.previewOperationSize}})}},an=t=>{const{modalMaskBg:e,iconCls:n,previewOperationColorDisabled:o,previewCls:i,zIndexPopup:a,motionDurationSlow:s}=t,c=new Se(e).setAlpha(.1),l=c.clone().setAlpha(.2);return{[`${i}-switch-left, ${i}-switch-right`]:{position:"fixed",insetBlockStart:"50%",zIndex:a+1,display:"flex",alignItems:"center",justifyContent:"center",width:t.imagePreviewSwitchSize,height:t.imagePreviewSwitchSize,marginTop:-t.imagePreviewSwitchSize/2,color:t.previewOperationColor,background:c.toRgbString(),borderRadius:"50%",transform:"translateY(-50%)",cursor:"pointer",transition:`all ${s}`,pointerEvents:"auto",userSelect:"none","&:hover":{background:l.toRgbString()},["&-disabled"]:{"&, &:hover":{color:o,background:"transparent",cursor:"not-allowed",[`> ${n}`]:{cursor:"not-allowed"}}},[`> ${n}`]:{fontSize:t.previewOperationSize}},[`${i}-switch-left`]:{insetInlineStart:t.marginSM},[`${i}-switch-right`]:{insetInlineEnd:t.marginSM}}},sn=t=>{const{motionEaseOut:e,previewCls:n,motionDurationSlow:o,componentCls:i}=t;return[{[`${i}-preview-root`]:{[n]:{height:"100%",textAlign:"center",pointerEvents:"none"},[`${n}-body`]:Object.assign(Object.assign({},Xe()),{overflow:"hidden"}),[`${n}-img`]:{maxWidth:"100%",maxHeight:"100%",verticalAlign:"middle",transform:"scale3d(1, 1, 1)",cursor:"grab",transition:`transform ${o} ${e} 0s`,userSelect:"none",pointerEvents:"auto","&-wrapper":Object.assign(Object.assign({},Xe()),{transition:`transform ${o} ${e} 0s`,display:"flex",justifyContent:"center",alignItems:"center","&::before":{display:"inline-block",width:1,height:"50%",marginInlineEnd:-1,content:'""'}})},[`${n}-moving`]:{[`${n}-preview-img`]:{cursor:"grabbing","&-wrapper":{transitionDuration:"0s"}}}}},{[`${i}-preview-root`]:{[`${n}-wrap`]:{zIndex:t.zIndexPopup}}},{[`${i}-preview-operations-wrapper`]:{position:"fixed",insetBlockStart:0,insetInlineEnd:0,zIndex:t.zIndexPopup+1,width:"100%"},"&":[on(t),an(t)]}]},ln=t=>{const{componentCls:e}=t;return{[e]:{position:"relative",display:"inline-block",[`${e}-img`]:{width:"100%",height:"auto",verticalAlign:"middle"},[`${e}-img-placeholder`]:{backgroundColor:t.colorBgContainerDisabled,backgroundImage:"url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNMTQuNSAyLjVoLTEzQS41LjUgMCAwIDAgMSAzdjEwYS41LjUgMCAwIDAgLjUuNWgxM2EuNS41IDAgMCAwIC41LS41VjNhLjUuNSAwIDAgMC0uNS0uNXpNNS4yODEgNC43NWExIDEgMCAwIDEgMCAyIDEgMSAwIDAgMSAwLTJ6bTguMDMgNi44M2EuMTI3LjEyNyAwIDAgMS0uMDgxLjAzSDIuNzY5YS4xMjUuMTI1IDAgMCAxLS4wOTYtLjIwN2wyLjY2MS0zLjE1NmEuMTI2LjEyNiAwIDAgMSAuMTc3LS4wMTZsLjAxNi4wMTZMNy4wOCAxMC4wOWwyLjQ3LTIuOTNhLjEyNi4xMjYgMCAwIDEgLjE3Ny0uMDE2bC4wMTUuMDE2IDMuNTg4IDQuMjQ0YS4xMjcuMTI3IDAgMCAxLS4wMi4xNzV6IiBmaWxsPSIjOEM4QzhDIiBmaWxsLXJ1bGU9Im5vbnplcm8iLz48L3N2Zz4=')",backgroundRepeat:"no-repeat",backgroundPosition:"center center",backgroundSize:"30%"},[`${e}-mask`]:Object.assign({},rn(t)),[`${e}-mask:hover`]:{opacity:1},[`${e}-placeholder`]:Object.assign({},Xe())}}},cn=t=>{const{previewCls:e}=t;return{[`${e}-root`]:St(t,"zoom"),["&"]:mt(t,!0)}},at=Ct("Image",t=>{const e=`${t.componentCls}-preview`,n=Fe(t,{previewCls:e,modalMaskBg:new Se("#000").setAlpha(.45).toRgbString(),imagePreviewSwitchSize:t.controlHeightLG});return[ln(n),sn(n),vt(Fe(n,{componentCls:e})),cn(n)]},t=>({zIndexPopup:t.zIndexPopupBase+80,previewOperationColor:new Se(t.colorTextLightSolid).toRgbString(),previewOperationColorDisabled:new Se(t.colorTextLightSolid).setAlpha(.25).toRgbString(),previewOperationSize:t.fontSizeIcon*1.5}));var un=globalThis&&globalThis.__rest||function(t,e){var n={};for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&e.indexOf(o)<0&&(n[o]=t[o]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,o=Object.getOwnPropertySymbols(t);i<o.length;i++)e.indexOf(o[i])<0&&Object.prototype.propertyIsEnumerable.call(t,o[i])&&(n[o[i]]=t[o[i]]);return n};const st={rotateLeft:r.createElement(Xt,null),rotateRight:r.createElement(Bt,null),zoomIn:r.createElement(Jt,null),zoomOut:r.createElement(nn,null),close:r.createElement(xt,null),left:r.createElement(yt,null),right:r.createElement(Mt,null),flipX:r.createElement(et,null),flipY:r.createElement(et,{rotate:90})},fn=t=>{var{previewPrefixCls:e,preview:n}=t,o=un(t,["previewPrefixCls","preview"]);const{getPrefixCls:i}=r.useContext(rt),a=i("image",e),s=`${a}-preview`,c=i(),[l,b]=at(a),g=r.useMemo(()=>{var p;if(n===!1)return n;const v=typeof n=="object"?n:{},m=J(b,(p=v.rootClassName)!==null&&p!==void 0?p:"");return Object.assign(Object.assign({},v),{transitionName:Ae(c,"zoom",v.transitionName),maskTransitionName:Ae(c,"fade",v.maskTransitionName),rootClassName:m})},[n]);return l(r.createElement(je.PreviewGroup,Object.assign({preview:g,previewPrefixCls:s,icons:st},o)))},dn=fn;var tt=globalThis&&globalThis.__rest||function(t,e){var n={};for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&e.indexOf(o)<0&&(n[o]=t[o]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,o=Object.getOwnPropertySymbols(t);i<o.length;i++)e.indexOf(o[i])<0&&Object.prototype.propertyIsEnumerable.call(t,o[i])&&(n[o[i]]=t[o[i]]);return n};const lt=t=>{var{prefixCls:e,preview:n,rootClassName:o}=t,i=tt(t,["prefixCls","preview","rootClassName"]);const{getPrefixCls:a,locale:s=Ke,getPopupContainer:c}=r.useContext(rt),l=a("image",e),b=a(),g=s.Image||Ke.Image,[p,v]=at(l),m=J(o,v),h=r.useMemo(()=>{if(n===!1)return n;const O=typeof n=="object"?n:{},{getContainer:R}=O,D=tt(O,["getContainer"]);return Object.assign(Object.assign({mask:r.createElement("div",{className:`${l}-mask-info`},r.createElement(gt,null),g==null?void 0:g.preview),icons:st},D),{getContainer:R||c,transitionName:Ae(b,"zoom",O.transitionName),maskTransitionName:Ae(b,"fade",O.maskTransitionName)})},[n,g]);return p(r.createElement(je,Object.assign({prefixCls:`${l}`,preview:h,rootClassName:m},i)))};lt.PreviewGroup=dn;const gn=lt;export{gn as I};
