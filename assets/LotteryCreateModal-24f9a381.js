import{O as w,n as o,m as C,s as e,T as A,B as f,S as n,R as g,t as i,I as p,a7 as j,P as m,a8 as L,Q as T,K as v,L as E,A as I,M as k,J as F,o as z,a9 as M,N as W}from"./index-72e81a96.js";import{s as H,c as y}from"./Loading-e013e729.js";import{G as R,C as D,I as G}from"./closable-aa684633.js";import{P as N,I as P}from"./information-7cad1d43.js";import{M as _}from"./index-064786b1.js";const{TextArea:O}=G,B=e.jsx("div",{children:e.jsx("p",{children:"The game creator can receive a maximum return on investment of 300%"})}),$=w.create(()=>{const[d,u]=o.useState(""),[x,r]=o.useState(!1),[a]=o.useState(new R),[S]=o.useState(window.innerHeight),l=C(),b=async()=>{H();const s=async t=>(y(),W(t),r(!1),Promise.reject(t)),h=(d!==""?d:L).trim();if(T(h))return s("Slogan is empty");try{v.instance.trackGameLogic(E.CLICK_CONFIRM_CREATE_GAME),r(!0);const c=await I.instance.getContract(k.LotteryGameSystem).createLotteryGame(h,Math.floor(Date.now()/1e3),m.lotteryDuration,m.lotteryInitTokenAmount);r(!1),l.hide(),y(),F("Create lottery game successfully"),z.instance.emit(M.event,c.hash)}catch(t){const c=t!=null&&t.message&&t.message.indexOf("too many active games")>-1?"There is a game in progress or awaiting verification, Please wait for the game to finish.":t!=null&&t.message&&t.message.length<60?t.message:"transaction failed.";s(c)}};return e.jsx(_,{...A(l),title:"",centered:!0,closable:!1,width:1160,style:{transform:`scale(${S<=900?.9:1})`},footer:[e.jsx(f,{onClick:b,disabled:x,className:"start-btn",style:{width:460,height:100,borderRadius:40,fontSize:40,fontWeight:700,display:"grid",alignItems:"center",margin:"0 auto"},children:"Pay"})],children:e.jsxs(n,{direction:"vertical",style:{width:"100%"},children:[e.jsxs(n,{direction:"horizontal",style:{width:"100%",position:"relative"},children:[e.jsx("label",{style:{fontFamily:"Eras Bold ITC",fontSize:80,fontWeight:400,letterSpacing:0,textAlign:"left",background:"linear-gradient(270deg, #C879F9 0%, #6C7EFC 50%, #74F0B2 100%)",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent",backgroundClip:"text",marginLeft:40},children:"Jackpot"}),e.jsxs(g,{style:{position:"absolute",width:"100%",left:0,top:0},children:[e.jsx(i,{span:23}),e.jsx(i,{span:1,children:e.jsx(p,{preview:!1,src:D,style:{cursor:"pointer",width:48,height:48},onClick:()=>l.hide()})})]})]}),e.jsxs(n,{direction:"vertical",size:"small",style:{marginLeft:40,marginTop:-30},children:[e.jsxs("label",{style:{fontFamily:"Arimo Hebrew Subset",fontSize:60,fontWeight:400,letterSpacing:0,textAlign:"left",color:"white"},children:[a.InitialAmount," ",a.tokenSymbol]}),e.jsxs(n,{direction:"horizontal",style:{marginTop:-10},children:[e.jsxs("label",{style:{color:"white",fontFamily:"Arimo Hebrew Subset",fontSize:40,fontWeight:700,letterSpacing:0,textAlign:"left"},children:["Earning of yield:"," ",e.jsx("span",{style:{color:"#FCDC36",fontFamily:"Arimo Hebrew Subset",fontSize:40,fontWeight:700,letterSpacing:0,textAlign:"left"},children:"300%"})]}),e.jsx(N,{content:B,title:"Rules",placement:"right",rootClassName:"rule-popover",children:e.jsx(f,{style:{width:21,height:21,background:"transparent",border:"none",marginLeft:20,marginTop:-10},icon:e.jsx(p,{src:P,preview:!1,style:{width:21,height:21}}),type:"default"})})]})]}),e.jsxs(n,{direction:"vertical",style:{width:"100%",paddingLeft:40},children:[e.jsx("label",{style:{fontFamily:"Arimo Hebrew Subset",fontSize:24,fontWeight:700,letterSpacing:0,textAlign:"left",color:"#91a7be"},children:"ADVERTISING SLOGAN"}),e.jsx(O,{allowClear:!0,showCount:!0,maxLength:140,style:{minHeight:120,resize:"none",width:"calc(100% - 80px)",fontSize:24,fontFamily:"Arimo Hebrew Subset",fontWeight:400,borderRadius:20},placeholder:"Invite more people to participate and get more rewards.",onChange:s=>{u(s.target.value)}}),e.jsxs(g,{gutter:0,style:{paddingRight:80},children:[e.jsxs(i,{span:12,style:{fontFamily:"Arimo Hebrew Subset",fontWeight:400,fontSize:20,letterSpacing:0,textAlign:"left",color:"#91a7be"},children:["Total tickets: ",a.TicketMaxCount]}),e.jsxs(i,{span:12,style:{fontFamily:"Arimo Hebrew Subset",fontWeight:400,fontSize:20,letterSpacing:0,textAlign:"right",color:"#91a7be"},children:["Lottery Ticket Price: ",a.TicketPrice," ",a.tokenSymbol]})]}),e.jsxs(g,{gutter:0,style:{paddingRight:80},children:[e.jsxs(i,{span:12,style:{fontFamily:"Arimo Hebrew Subset",fontWeight:400,fontSize:20,letterSpacing:0,textAlign:"left",color:"#91a7be"},children:["Draw Circle: ",j(m.lotteryDuration)]}),e.jsx(i,{span:12,style:{fontFamily:"Arimo Hebrew Subset",fontWeight:400,fontSize:20,letterSpacing:0,textAlign:"right",color:"#91a7be"},children:"Commission Percentage: 10%"})]})]})]})})});export{$ as L};
