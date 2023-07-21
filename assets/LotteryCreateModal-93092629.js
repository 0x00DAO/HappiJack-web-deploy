var oe=Object.defineProperty;var se=(e,a,n)=>a in e?oe(e,a,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[a]=n;var x=(e,a,n)=>(se(e,typeof a!="symbol"?a+"":a,n),n);import{n as s,M as K,H as G,aH as X,O as ie,P as ae,N as re,a5 as Z,b1 as le,aG as ce,aI as ue,U as J,B as H,aY as de,b2 as fe,W as P,w as _,V as ge,m as me,s as o,Y as pe,S as D,R as L,t as T,I as W,b3 as he,b4 as Ae,X as ye,D as be,A as xe,o as Ce,b5 as Se,F as Ie}from"./index-555ab3b9.js";import{s as ve,c as q}from"./Loading-d98d0fc0.js";import{M as we,P as Ee,I as Te}from"./information-c4da529e.js";import{u as Pe}from"./index-2f875eff.js";import{u as je,I as Q,T as ze}from"./TextArea-1d3d0587.js";import{S as Re}from"./SearchOutlined-0fb78dd3.js";const ke=e=>{const{getPrefixCls:a,direction:n}=s.useContext(K),{prefixCls:t,className:i=""}=e,u=a("input-group",t),h=a("input"),[d,g]=Pe(h),l=G(u,{[`${u}-lg`]:e.size==="large",[`${u}-sm`]:e.size==="small",[`${u}-compact`]:e.compact,[`${u}-rtl`]:n==="rtl"},g,i),f=s.useContext(X),A=s.useMemo(()=>Object.assign(Object.assign({},f),{isFormItemInput:!1}),[f]);return d(s.createElement("span",{className:l,style:e.style,onMouseEnter:e.onMouseEnter,onMouseLeave:e.onMouseLeave,onFocus:e.onFocus,onBlur:e.onBlur},s.createElement(X.Provider,{value:A},e.children)))},Oe=ke;var De={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M942.2 486.2Q889.47 375.11 816.7 305l-50.88 50.88C807.31 395.53 843.45 447.4 874.7 512 791.5 684.2 673.4 766 512 766q-72.67 0-133.87-22.38L323 798.75Q408 838 512 838q288.3 0 430.2-300.3a60.29 60.29 0 000-51.5zm-63.57-320.64L836 122.88a8 8 0 00-11.32 0L715.31 232.2Q624.86 186 512 186q-288.3 0-430.2 300.3a60.3 60.3 0 000 51.5q56.69 119.4 136.5 191.41L112.48 835a8 8 0 000 11.31L155.17 889a8 8 0 0011.31 0l712.15-712.12a8 8 0 000-11.32zM149.3 512C232.6 339.8 350.7 258 512 258c54.54 0 104.13 9.36 149.12 28.39l-70.3 70.3a176 176 0 00-238.13 238.13l-83.42 83.42C223.1 637.49 183.3 582.28 149.3 512zm246.7 0a112.11 112.11 0 01146.2-106.69L401.31 546.2A112 112 0 01396 512z"}},{tag:"path",attrs:{d:"M508 624c-3.46 0-6.87-.16-10.25-.47l-52.82 52.82a176.09 176.09 0 00227.42-227.42l-52.82 52.82c.31 3.38.47 6.79.47 10.25a111.94 111.94 0 01-112 112z"}}]},name:"eye-invisible",theme:"outlined"};const Be=De;var Me=function(a,n){return s.createElement(ie,ae({},a,{ref:n,icon:Be}))};const Fe=s.forwardRef(Me);var Ne=globalThis&&globalThis.__rest||function(e,a){var n={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&a.indexOf(t)<0&&(n[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,t=Object.getOwnPropertySymbols(e);i<t.length;i++)a.indexOf(t[i])<0&&Object.prototype.propertyIsEnumerable.call(e,t[i])&&(n[t[i]]=e[t[i]]);return n};const Ye=e=>e?s.createElement(le,null):s.createElement(Fe,null),Le={click:"onClick",hover:"onMouseOver"},He=s.forwardRef((e,a)=>{const{visibilityToggle:n=!0}=e,t=typeof n=="object"&&n.visible!==void 0,[i,u]=s.useState(()=>t?n.visible:!1),h=s.useRef(null);s.useEffect(()=>{t&&u(n.visible)},[t,n]);const d=je(h),g=()=>{const{disabled:C}=e;C||(i&&d(),u(m=>{var p;const w=!m;return typeof n=="object"&&((p=n.onVisibleChange)===null||p===void 0||p.call(n,w)),w}))},l=C=>{const{action:m="click",iconRender:p=Ye}=e,w=Le[m]||"",E=p(i),R={[w]:g,className:`${C}-icon`,key:"passwordIcon",onMouseDown:k=>{k.preventDefault()},onMouseUp:k=>{k.preventDefault()}};return s.cloneElement(s.isValidElement(E)?E:s.createElement("span",null,E),R)},{className:f,prefixCls:A,inputPrefixCls:M,size:y}=e,j=Ne(e,["className","prefixCls","inputPrefixCls","size"]),{getPrefixCls:F}=s.useContext(K),N=F("input",M),v=F("input-password",A),z=n&&l(v),b=G(v,f,{[`${v}-${y}`]:!!y}),Y=Object.assign(Object.assign({},re(j,["suffix","iconRender","visibilityToggle"])),{type:i?"text":"password",className:b,prefixCls:N,suffix:z});return y&&(Y.size=y),s.createElement(Q,Object.assign({ref:Z(a,h)},Y))}),Ke=He;var Ge=globalThis&&globalThis.__rest||function(e,a){var n={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&a.indexOf(t)<0&&(n[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,t=Object.getOwnPropertySymbols(e);i<t.length;i++)a.indexOf(t[i])<0&&Object.prototype.propertyIsEnumerable.call(e,t[i])&&(n[t[i]]=e[t[i]]);return n};const Qe=s.forwardRef((e,a)=>{const{prefixCls:n,inputPrefixCls:t,className:i,size:u,suffix:h,enterButton:d=!1,addonAfter:g,loading:l,disabled:f,onSearch:A,onChange:M,onCompositionStart:y,onCompositionEnd:j}=e,F=Ge(e,["prefixCls","inputPrefixCls","className","size","suffix","enterButton","addonAfter","loading","disabled","onSearch","onChange","onCompositionStart","onCompositionEnd"]),{getPrefixCls:N,direction:v}=s.useContext(K),z=s.useRef(!1),b=N("input-search",n),Y=N("input",t),{compactSize:C}=ce(b,v),m=ue(r=>{var c;return(c=C??u)!==null&&c!==void 0?c:r}),p=s.useRef(null),w=r=>{r&&r.target&&r.type==="click"&&A&&A(r.target.value,r),M&&M(r)},E=r=>{var c;document.activeElement===((c=p.current)===null||c===void 0?void 0:c.input)&&r.preventDefault()},R=r=>{var c,I;A&&A((I=(c=p.current)===null||c===void 0?void 0:c.input)===null||I===void 0?void 0:I.value,r)},k=r=>{z.current||l||R(r)},$=typeof d=="boolean"?s.createElement(Re,null):null,U=`${b}-button`;let O;const S=d||{},V=S.type&&S.type.__ANT_BUTTON===!0;V||S.type==="button"?O=J(S,Object.assign({onMouseDown:E,onClick:r=>{var c,I;(I=(c=S==null?void 0:S.props)===null||c===void 0?void 0:c.onClick)===null||I===void 0||I.call(c,r),R(r)},key:"enterButton"},V?{className:U,size:m}:{})):O=s.createElement(H,{className:U,type:d?"primary":void 0,size:m,disabled:f,key:"enterButton",onMouseDown:E,onClick:R,loading:l,icon:$},d),g&&(O=[O,J(g,{key:"addonAfter"})]);const ee=G(b,{[`${b}-rtl`]:v==="rtl",[`${b}-${m}`]:!!m,[`${b}-with-button`]:!!d},i),te=r=>{z.current=!0,y==null||y(r)},ne=r=>{z.current=!1,j==null||j(r)};return s.createElement(Q,Object.assign({ref:Z(p,a),onPressEnter:k},F,{size:m,onCompositionStart:te,onCompositionEnd:ne,prefixCls:Y,addonAfter:O,suffix:h,onChange:w,className:ee,disabled:f}))}),Ue=Qe,B=Q;B.Group=Oe;B.Search=Ue;B.TextArea=ze;B.Password=Ke;const Ve=B;class Xe extends de{constructor(){super(...arguments);x(this,"TokenType",fe.ChainToken);x(this,"TokenAddress","");x(this,"InitialAmount",P.lotteryInitTokenAmount);x(this,"TicketMaxCount",300);x(this,"TicketPrice",P.ticketPrice);x(this,"TicketMaxCountPerAddress",1);x(this,"drawCircle",P.lotteryDuration)}get tokenSymbol(){return _.instance.getTokenSymbolByTokenType(this.TokenType)}}const Je="data:image/png;base64,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",{TextArea:We}=Ve,qe=o.jsx("div",{children:o.jsx("p",{children:"The game creator can receive a maximum return on investment of 300%"})}),st=ge.create(()=>{const[e,a]=s.useState(""),[n,t]=s.useState(!1),[i]=s.useState(new Xe),u=me(),h=async()=>{ve();const d=async l=>(q(),Ie(l),t(!1),Promise.reject(l)),g=(e!==""?e:Ae).trim();if(ye(g))return d("Slogan is empty");try{t(!0);const f=await _.instance.getContract(be.LotteryGameSystem).createLotteryGame(g,Math.floor(Date.now()/1e3),P.lotteryDuration,P.lotteryInitTokenAmount);t(!1),u.hide(),q(),xe("Create lottery game successfully"),Ce.instance.emit(Se.event,f.hash)}catch(l){const f=l!=null&&l.message&&l.message.indexOf("too many active games")>-1?"There is a game in progress or awaiting verification, Please wait for the game to finish.":l!=null&&l.message&&l.message.length<60?l.message:"transaction failed.";d(f)}};return o.jsx(we,{...pe(u),title:"",centered:!0,closable:!1,width:1160,footer:[o.jsx(H,{onClick:h,disabled:n,className:"start-btn",style:{width:460,height:100,borderRadius:40,fontSize:40,fontWeight:700,display:"grid",alignItems:"center",margin:"0 auto"},children:"Pay"})],children:o.jsxs(D,{direction:"vertical",style:{width:"100%"},children:[o.jsxs(D,{direction:"horizontal",style:{width:"100%",position:"relative"},children:[o.jsx("label",{style:{fontFamily:"Eras Bold ITC",fontSize:80,fontWeight:400,letterSpacing:0,textAlign:"left",background:"linear-gradient(270deg, #C879F9 0%, #6C7EFC 50%, #74F0B2 100%)",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent",backgroundClip:"text",marginLeft:40},children:"Jackpot"}),o.jsxs(L,{style:{position:"absolute",width:"100%",left:0,top:0},children:[o.jsx(T,{span:23}),o.jsx(T,{span:1,children:o.jsx(W,{preview:!1,src:Je,style:{cursor:"pointer",width:48,height:48},onClick:()=>u.hide()})})]})]}),o.jsxs(D,{direction:"vertical",size:"small",style:{marginLeft:40,marginTop:-30},children:[o.jsxs("label",{style:{fontFamily:"Arimo Hebrew Subset",fontSize:60,fontWeight:400,letterSpacing:0,textAlign:"left",color:"white"},children:[i.InitialAmount," ",i.tokenSymbol]}),o.jsxs(D,{direction:"horizontal",style:{marginTop:-10},children:[o.jsxs("label",{style:{color:"white",fontFamily:"Arimo Hebrew Subset",fontSize:40,fontWeight:700,letterSpacing:0,textAlign:"left"},children:["Earning of yield:"," ",o.jsx("span",{style:{color:"#FCDC36",fontFamily:"Arimo Hebrew Subset",fontSize:40,fontWeight:700,letterSpacing:0,textAlign:"left"},children:"300%"})]}),o.jsx(Ee,{content:qe,title:"Rules",placement:"right",children:o.jsx(H,{style:{width:21,height:21,background:"transparent",border:"none",marginLeft:20,marginTop:-10},icon:o.jsx(W,{src:Te,preview:!1,style:{width:21,height:21}}),type:"default"})})]})]}),o.jsxs(D,{direction:"vertical",style:{width:"100%",paddingLeft:40},children:[o.jsx("label",{style:{fontFamily:"Arimo Hebrew Subset",fontSize:24,fontWeight:700,letterSpacing:0,textAlign:"left",color:"#91a7be"},children:"ADVERTISING SLOGAN"}),o.jsx(We,{allowClear:!0,showCount:!0,maxLength:140,style:{minHeight:120,resize:"none",width:"calc(100% - 80px)",fontSize:24,fontFamily:"Arimo Hebrew Subset",fontWeight:400,borderRadius:20},placeholder:"Invite more people to participate and get more rewards.",onChange:d=>{a(d.target.value)}}),o.jsxs(L,{gutter:0,style:{paddingRight:80},children:[o.jsxs(T,{span:12,style:{fontFamily:"Arimo Hebrew Subset",fontWeight:400,fontSize:20,letterSpacing:0,textAlign:"left",color:"#91a7be"},children:["Total tickets: ",i.TicketMaxCount]}),o.jsxs(T,{span:12,style:{fontFamily:"Arimo Hebrew Subset",fontWeight:400,fontSize:20,letterSpacing:0,textAlign:"right",color:"#91a7be"},children:["Lottery Ticket Price: ",i.TicketPrice," ",i.tokenSymbol]})]}),o.jsxs(L,{gutter:0,style:{paddingRight:80},children:[o.jsxs(T,{span:12,style:{fontFamily:"Arimo Hebrew Subset",fontWeight:400,fontSize:20,letterSpacing:0,textAlign:"left",color:"#91a7be"},children:["Draw Circle: ",he(P.lotteryDuration)]}),o.jsx(T,{span:12,style:{fontFamily:"Arimo Hebrew Subset",fontWeight:400,fontSize:20,letterSpacing:0,textAlign:"right",color:"#91a7be"},children:"Commission Percentage: 10%"})]})]})]})})});export{st as L};