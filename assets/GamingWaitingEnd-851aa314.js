import{u as v,l as S,V as T,n as l,G as p,o as c,W as y,s as t,R as s,C as k,t as o,S as r,I as n,B as g,Y as E,F as A,A as L,M as F,K as G,Z as I,L as H}from"./index-72e81a96.js";import{C as _}from"./CountDownFrame-d115284d.js";import{P as D,I as z}from"./information-7cad1d43.js";import{s as B}from"./SharePopUp-0d4d673a.js";import{L as N}from"./logo_jackpot-683e73df.js";import{S as R,T as W}from"./ticket_bottom-3dfa1ea4.js";import{N as P}from"./nft_ticket_blank-334531f9.js";import"./index-064786b1.js";import"./useLocale-3f01f25f.js";const U="/assets/ticket_bg-812b5cf8.png",O=t.jsx("div",{children:"The last participation can only receive 80% of the reward amount, but they will receive 100% of the reward amount once a new player joins."});function tt(){const u=v(),x=S(),b=T(),[e,d]=l.useState(new p),[i]=l.useState(window.innerHeight),h=async()=>{c.instance.emit(A.event)};async function j(){const f=u.id,m=await p.getCacheGame(f);m&&d(m),(await L.instance.getContract(F.LotteryGameSystem)).getGame(f).then(a=>{d(a),(!a.ticket||a.ticket.transactionHash==="")&&a.ticket.getTransactionHash()})}l.useEffect(()=>(c.instance.on(y.event,h),j(),()=>{c.instance.off(y.event,h)}),[x.pathname]);const w=()=>{B(e),G.instance.track(I.GAME_LOGIC,{logic_id:H.CLICK_UPGRADE_TO_100})},C=()=>b("/");return t.jsxs(t.Fragment,{children:[t.jsx("div",{style:{position:"fixed",width:"100%",height:i<=900?180:230,background:"linear-gradient(0deg, #2A5698, #6793B2)",left:0,right:0,bottom:0,margin:"0 auto",opacity:.6,zIndex:-1}}),t.jsxs(s,{style:{minHeight:`${k}`,width:"100%"},children:[t.jsx(o,{span:12,style:{width:"100%"},children:t.jsxs(r,{direction:"vertical",style:{width:"100%",height:"70%",display:"flex",justifyContent:"center",alignItems:"center"},children:[t.jsx(n,{src:N,preview:!1,style:{width:465}}),t.jsxs(r,{direction:"vertical",children:[t.jsx(s,{style:{display:"flex",justifyContent:"center"},children:t.jsxs("label",{style:{color:"#FCDC36",fontFamily:"Arimo Hebrew Subset",fontSize:50,fontWeight:"bold"},children:[e.TotalAmount," ",e.tokenSymbol]})}),t.jsx(s,{style:{display:"flex",justifyContent:"center"},children:t.jsx("label",{style:{fontFamily:"Arimo Hebrew Subset",fontSize:30,color:"white",fontWeight:"bold"},children:e.totalAmountUSD})})]}),t.jsx(s,{gutter:0,style:{marginLeft:-10,width:"100%",display:"flex",justifyContent:"center",alignItems:"center"},children:t.jsx(_,{timeLeft:e.endTime*1e3-new Date().getTime(),onFinished:C})})]})}),t.jsx(o,{span:12,children:t.jsx(r,{direction:"vertical",style:{display:"flex",justifyContent:"center",alignItems:"center",height:"80%",paddingLeft:140},children:t.jsxs(s,{style:{width:"100%",position:"relative",marginLeft:i<=900?-100:0,marginTop:i<=900?30:0},children:[t.jsx(n,{src:U,preview:!1,style:{width:872,position:"absolute",left:"50%",top:"50%",transform:"translate(-50%, -50%)",display:i<=900?"none":""}}),t.jsx(n,{src:R,preview:!1,style:{width:554,position:"absolute",left:"50%",top:"60%",transform:"translate(-50%, -60%)"}}),t.jsx(n,{src:W,preview:!1,style:{width:562,position:"absolute",left:"50%",top:"50%",transform:"translate(-50%, -50%)"}}),t.jsxs("div",{style:{width:379,position:"absolute",left:"46%",top:-200,transform:"translate(-46%, 0)",color:"white"},children:[t.jsx(n,{src:P,preview:!1,style:{width:379,position:"absolute"}}),t.jsxs("label",{style:{fontFamily:"Arimo Hebrew Subset",fontSize:12,position:"absolute",top:28,right:110},children:["#",e.LotteryGameId]}),t.jsx("label",{style:{fontFamily:"Arimo Hebrew Subset",fontSize:40,fontWeight:"bold",position:"absolute",letterSpacing:10,top:86,right:136},children:e.ticket?e.ticket.LuckyNumber:""}),t.jsxs("label",{style:{fontFamily:"Arimo Hebrew Subset",fontSize:12,position:"absolute",top:164,left:8},children:["Price:","  ",t.jsxs("span",{style:{color:"#FCDC36"},children:[e.TicketPrice," ",e.tokenSymbol]})]})]})]})})})]}),t.jsxs(s,{style:{display:"flex",position:"fixed",width:"100%",height:i<=900?180:230,bottom:0},children:[t.jsx(o,{span:4,style:{position:"relative"},children:t.jsx(D,{content:O,title:"Rules",placement:"right",rootClassName:"rule-popover",children:t.jsx(g,{style:{width:42,height:42,position:"absolute",background:"transparent",border:"none",top:i<=900?50:82,right:0},icon:t.jsx(n,{src:z,preview:!1,style:{width:42,height:42}}),type:"default"})})}),t.jsx(o,{span:10,children:t.jsx(s,{style:{marginTop:i<=900?50:82,marginLeft:30},children:t.jsxs("label",{style:{color:"white",fontSize:30,fontFamily:"Arimo Hebrew Subset",fontWeight:"bold",marginLeft:10},children:["Currently, you can only receive"," ",t.jsx("span",{style:{color:"#43FFF4",fontSize:40,fontFamily:"Eras Bold ITC",fontWeight:400},children:"80%"})," ","of the prize."]})})}),t.jsx(o,{span:10,children:t.jsx(r,{direction:"vertical",style:{display:"flex",justifyContent:"center",alignContent:"center",height:"100%",transform:`scale(${i<=900?.8:1})`},children:t.jsx(E.CopyToClipboard,{text:e.shareTxt,children:t.jsx(g,{onClick:w,className:"start-btn",style:{width:524,height:114,borderRadius:40,fontSize:40,fontWeight:700},children:"Upgrade to 100%"})})})})]})]})}export{tt as default};
