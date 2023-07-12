var oe=Object.defineProperty;var se=(e,i,n)=>i in e?oe(e,i,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[i]=n;var C=(e,i,n)=>(se(e,typeof i!="symbol"?i+"":i,n),n);import{o,a3 as W,Q as V,a5 as U,H as ie,J as ae,ay as re,Y as X,aZ as le,a4 as ce,a6 as ue,a8 as J,B as Z,aW as fe,a_ as de,ae as w,y as q,ac as me,n as ge,v as a,ad as pe,S as M,R as D,w as P,I as ye,a$ as be,af as H,A as he,D as xe,p as Ce,b0 as Ae,F as Se}from"./index-d1a429a6.js";import{s as ve,c as K}from"./Loading-f0b35b3c.js";import{M as we}from"./information-8a5dba54.js";import{u as Ee}from"./index-af65f1fc.js";import{u as Ie,I as G,T as Oe}from"./TextArea-dd63aabe.js";import{S as Pe}from"./SearchOutlined-df93e9cc.js";const Te=e=>{const{getPrefixCls:i,direction:n}=o.useContext(W),{prefixCls:t,className:s=""}=e,f=i("input-group",t),p=i("input"),[u,y]=Ee(p),l=V(f,{[`${f}-lg`]:e.size==="large",[`${f}-sm`]:e.size==="small",[`${f}-compact`]:e.compact,[`${f}-rtl`]:n==="rtl"},y,s),d=o.useContext(U),b=o.useMemo(()=>Object.assign(Object.assign({},d),{isFormItemInput:!1}),[d]);return u(o.createElement("span",{className:l,style:e.style,onMouseEnter:e.onMouseEnter,onMouseLeave:e.onMouseLeave,onFocus:e.onFocus,onBlur:e.onBlur},o.createElement(U.Provider,{value:b},e.children)))},je=Te;var ke={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M942.2 486.2Q889.47 375.11 816.7 305l-50.88 50.88C807.31 395.53 843.45 447.4 874.7 512 791.5 684.2 673.4 766 512 766q-72.67 0-133.87-22.38L323 798.75Q408 838 512 838q288.3 0 430.2-300.3a60.29 60.29 0 000-51.5zm-63.57-320.64L836 122.88a8 8 0 00-11.32 0L715.31 232.2Q624.86 186 512 186q-288.3 0-430.2 300.3a60.3 60.3 0 000 51.5q56.69 119.4 136.5 191.41L112.48 835a8 8 0 000 11.31L155.17 889a8 8 0 0011.31 0l712.15-712.12a8 8 0 000-11.32zM149.3 512C232.6 339.8 350.7 258 512 258c54.54 0 104.13 9.36 149.12 28.39l-70.3 70.3a176 176 0 00-238.13 238.13l-83.42 83.42C223.1 637.49 183.3 582.28 149.3 512zm246.7 0a112.11 112.11 0 01146.2-106.69L401.31 546.2A112 112 0 01396 512z"}},{tag:"path",attrs:{d:"M508 624c-3.46 0-6.87-.16-10.25-.47l-52.82 52.82a176.09 176.09 0 00227.42-227.42l-52.82 52.82c.31 3.38.47 6.79.47 10.25a111.94 111.94 0 01-112 112z"}}]},name:"eye-invisible",theme:"outlined"};const ze=ke;var Fe=function(i,n){return o.createElement(ie,ae({},i,{ref:n,icon:ze}))};const Me=o.forwardRef(Fe);var Ne=globalThis&&globalThis.__rest||function(e,i){var n={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&i.indexOf(t)<0&&(n[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,t=Object.getOwnPropertySymbols(e);s<t.length;s++)i.indexOf(t[s])<0&&Object.prototype.propertyIsEnumerable.call(e,t[s])&&(n[t[s]]=e[t[s]]);return n};const Be=e=>e?o.createElement(le,null):o.createElement(Me,null),Le={click:"onClick",hover:"onMouseOver"},Qe=o.forwardRef((e,i)=>{const{visibilityToggle:n=!0}=e,t=typeof n=="object"&&n.visible!==void 0,[s,f]=o.useState(()=>t?n.visible:!1),p=o.useRef(null);o.useEffect(()=>{t&&f(n.visible)},[t,n]);const u=Ie(p),y=()=>{const{disabled:A}=e;A||(s&&u(),f(m=>{var g;const I=!m;return typeof n=="object"&&((g=n.onVisibleChange)===null||g===void 0||g.call(n,I)),I}))},l=A=>{const{action:m="click",iconRender:g=Be}=e,I=Le[m]||"",O=g(s),k={[I]:y,className:`${A}-icon`,key:"passwordIcon",onMouseDown:z=>{z.preventDefault()},onMouseUp:z=>{z.preventDefault()}};return o.cloneElement(o.isValidElement(O)?O:o.createElement("span",null,O),k)},{className:d,prefixCls:b,inputPrefixCls:B,size:h}=e,T=Ne(e,["className","prefixCls","inputPrefixCls","size"]),{getPrefixCls:L}=o.useContext(W),Q=L("input",B),E=L("input-password",b),j=n&&l(E),x=V(E,d,{[`${E}-${h}`]:!!h}),R=Object.assign(Object.assign({},re(T,["suffix","iconRender","visibilityToggle"])),{type:s?"text":"password",className:x,prefixCls:Q,suffix:j});return h&&(R.size=h),o.createElement(G,Object.assign({ref:X(i,p)},R))}),Re=Qe;var De=globalThis&&globalThis.__rest||function(e,i){var n={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&i.indexOf(t)<0&&(n[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,t=Object.getOwnPropertySymbols(e);s<t.length;s++)i.indexOf(t[s])<0&&Object.prototype.propertyIsEnumerable.call(e,t[s])&&(n[t[s]]=e[t[s]]);return n};const We=o.forwardRef((e,i)=>{const{prefixCls:n,inputPrefixCls:t,className:s,size:f,suffix:p,enterButton:u=!1,addonAfter:y,loading:l,disabled:d,onSearch:b,onChange:B,onCompositionStart:h,onCompositionEnd:T}=e,L=De(e,["prefixCls","inputPrefixCls","className","size","suffix","enterButton","addonAfter","loading","disabled","onSearch","onChange","onCompositionStart","onCompositionEnd"]),{getPrefixCls:Q,direction:E}=o.useContext(W),j=o.useRef(!1),x=Q("input-search",n),R=Q("input",t),{compactSize:A}=ce(x,E),m=ue(r=>{var c;return(c=A??f)!==null&&c!==void 0?c:r}),g=o.useRef(null),I=r=>{r&&r.target&&r.type==="click"&&b&&b(r.target.value,r),B&&B(r)},O=r=>{var c;document.activeElement===((c=g.current)===null||c===void 0?void 0:c.input)&&r.preventDefault()},k=r=>{var c,v;b&&b((v=(c=g.current)===null||c===void 0?void 0:c.input)===null||v===void 0?void 0:v.value,r)},z=r=>{j.current||l||k(r)},Y=typeof u=="boolean"?o.createElement(Pe,null):null,_=`${x}-button`;let F;const S=u||{},$=S.type&&S.type.__ANT_BUTTON===!0;$||S.type==="button"?F=J(S,Object.assign({onMouseDown:O,onClick:r=>{var c,v;(v=(c=S==null?void 0:S.props)===null||c===void 0?void 0:c.onClick)===null||v===void 0||v.call(c,r),k(r)},key:"enterButton"},$?{className:_,size:m}:{})):F=o.createElement(Z,{className:_,type:u?"primary":void 0,size:m,disabled:d,key:"enterButton",onMouseDown:O,onClick:k,loading:l,icon:Y},u),y&&(F=[F,J(y,{key:"addonAfter"})]);const ee=V(x,{[`${x}-rtl`]:E==="rtl",[`${x}-${m}`]:!!m,[`${x}-with-button`]:!!u},s),te=r=>{j.current=!0,h==null||h(r)},ne=r=>{j.current=!1,T==null||T(r)};return o.createElement(G,Object.assign({ref:X(g,i),onPressEnter:z},L,{size:m,onCompositionStart:te,onCompositionEnd:ne,prefixCls:R,addonAfter:F,suffix:p,onChange:I,className:ee,disabled:d}))}),Ve=We,N=G;N.Group=je;N.Search=Ve;N.TextArea=Oe;N.Password=Re;const Ge=N;class _e extends fe{constructor(){super(...arguments);C(this,"TokenType",de.ChainToken);C(this,"TokenAddress","");C(this,"InitialAmount",w.lotteryInitTokenAmount);C(this,"TicketMaxCount",300);C(this,"TicketPrice",w.ticketPrice);C(this,"TicketMaxCountPerAddress",1);C(this,"drawCircle",w.lotteryDuration)}get tokenSymbol(){return q.instance.getTokenSymbolByTokenType(this.TokenType)}}const $e="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAMAAABg3Am1AAAAY1BMVEUAAABAQENAQEJAQERAQENAQEBAQEJAQENAQENAQEJAQENAQENAQENAQEMsM0dAQEObnq42OUUvNEYyNkY5O0Q6QVRwdYdWW26NkaFkaXo7PUOUl6dVW216fpAzOk1KUGSNkKGs/b9JAAAADnRSTlMAgO8g3xBgz7+QX6+gUODH72YAAAGoSURBVEjHnZZtj4MgEIQR8a1VVkXbq7Xt/f9feV1ICjiaI51vJvOwOyyiAlSUzVlJIlJ1c8rFPyqymiJVEYN2XnkazKjfGs0wMdMeImxfjI5kmMl27XlFNI0aNL4RtVPkJInc6ogQyQ7aIRr0oQbbFvrTiQ79SJyCvBL9SEifXIF/l6iCADpBnxg50ZgCGJKFBVqadJImytILsEZXoowKPF9z6FnX8GmxJaroRPz2PwFx6fs1SlHbjnSge8+E9/fXeKOKTUf62jPh/bdN7FI0PDQk0O+G14iaIyCBfhfiLJTdVCSsHzdWCWIAiTv6WSSF3SQknB8BYgD14BrzPiChJZfXJUfAhUb/wxOb0GcyO/5bMI/N2eDBod/PAwZnjwb694mJTqKIB/Fy/g/x2GTOxeZsPO/s98QljlDZK2DRgeY5fFif246EKGTyK8odcYn0S6AVwpUwKX7jCrgUKU0t/j6u0q5K9f1lLMqU67779oPiiTHZz+rk4V6ZhWQpQLk6/uxWPu+mLZoMrE4yEwfKW8JfB5kV3oFIWVGkGu3INLXildW5KdH9B7lmaAqZsz1XAAAAAElFTkSuQmCC",{TextArea:Ue}=Ge,et=me.create(()=>{const[e,i]=o.useState(""),[n,t]=o.useState(!1),[s]=o.useState(new _e),f=ge(),p=async()=>{ve();const u=async l=>(K(),Se(l),t(!1),Promise.reject(l));if(H(e))return u("Slogan is empty");const y=e.trim();if(H(y))return u("Slogan is empty");try{t(!0);const d=await q.instance.getContract(he.LotteryGameSystem).createLotteryGame(e,Math.floor(Date.now()/1e3),w.lotteryDuration,w.lotteryInitTokenAmount);t(!1),f.hide(),K(),xe("Create lottery game successfully"),Ce.instance.emit(Ae.event,d.hash)}catch(l){const d=l!=null&&l.message&&l.message.indexOf("too many active games")>-1?"There is a game in progress or awaiting verification, Please wait for the game to finish.":l!=null&&l.message&&l.message.length<60?l.message:"transaction failed.";u(d)}};return a.jsx(we,{...pe(f),title:"",centered:!0,closable:!1,width:1160,footer:[a.jsx(Z,{onClick:p,disabled:n,className:"start-btn",style:{width:460,height:100,borderRadius:40,fontSize:40,fontWeight:700,display:"grid",alignItems:"center",margin:"0 auto"},children:"Confirm"})],children:a.jsxs(M,{direction:"vertical",style:{width:"100%"},children:[a.jsxs(M,{direction:"horizontal",style:{width:"100%",position:"relative"},children:[a.jsx("label",{style:{fontFamily:"Eras Bold ITC",fontSize:80,fontWeight:400,letterSpacing:0,textAlign:"left",background:"linear-gradient(270deg, #C879F9 0%, #6C7EFC 50%, #74F0B2 100%)",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent",backgroundClip:"text",marginLeft:40},children:"PRIZE POOL"}),a.jsxs(D,{style:{position:"absolute",width:"100%",left:0,top:0},children:[a.jsx(P,{span:23}),a.jsx(P,{span:1,children:a.jsx(ye,{preview:!1,src:$e,style:{cursor:"pointer"},onClick:()=>f.hide()})})]})]}),a.jsxs(M,{direction:"vertical",size:"small",style:{marginLeft:40,marginTop:-30},children:[a.jsxs("label",{style:{fontFamily:"Arimo Hebrew Subset",fontSize:60,fontWeight:400,letterSpacing:0,textAlign:"left",color:"white"},children:[s.InitialAmount," ",s.tokenSymbol]}),a.jsxs(M,{direction:"horizontal",style:{marginTop:-10},children:[a.jsx("label",{style:{color:"white",fontFamily:"Arimo Hebrew Subset",fontSize:40,fontWeight:700,letterSpacing:0,textAlign:"left"},children:"Profits:"}),a.jsx("label",{style:{color:"#FCDC36",fontFamily:"Arimo Hebrew Subset",fontSize:40,fontWeight:700,letterSpacing:0,textAlign:"left"},children:"300%"})]})]}),a.jsxs(M,{direction:"vertical",style:{width:"calc(100% - 80px)"},children:[a.jsx("label",{style:{fontFamily:"Arimo Hebrew Subset",fontSize:24,fontWeight:700,letterSpacing:0,textAlign:"left",color:"#91a7be",marginLeft:40},children:"ADVERTISING SLOGAN"}),a.jsx(Ue,{allowClear:!0,showCount:!0,maxLength:140,style:{minHeight:120,resize:"none",width:"100%",fontSize:24,fontFamily:"Arimo Hebrew Subset",fontWeight:400,borderRadius:20,marginLeft:40},placeholder:"Invite more people to participate and get more rewards.",onChange:u=>{i(u.target.value)}}),a.jsxs(D,{gutter:0,children:[a.jsxs(P,{span:24,style:{fontFamily:"Arimo Hebrew Subset",fontWeight:400,fontSize:20,letterSpacing:0,textAlign:"left",color:"#91a7be",marginLeft:40},children:["Lottery Quantity: ",s.TicketMaxCount]}),a.jsxs(P,{span:24,style:{fontFamily:"Arimo Hebrew Subset",fontWeight:400,fontSize:20,letterSpacing:0,textAlign:"right",color:"#91a7be",marginTop:-30,marginLeft:40},children:["Lottery Ticket Price: ",s.TicketPrice," ",s.tokenSymbol]})]}),a.jsxs(D,{children:[a.jsxs(P,{span:24,style:{fontFamily:"Arimo Hebrew Subset",fontWeight:400,fontSize:20,letterSpacing:0,textAlign:"left",color:"#91a7be",marginLeft:40},children:["Draw Circle: ",be(w.lotteryDuration)]}),a.jsxs(P,{span:24,style:{fontFamily:"Arimo Hebrew Subset",fontWeight:400,fontSize:20,letterSpacing:0,textAlign:"right",color:"#91a7be",marginTop:-30,marginLeft:40},children:["Commission Percentage: ",w.developerFee,"%"]})]})]})]})})});export{et as L};