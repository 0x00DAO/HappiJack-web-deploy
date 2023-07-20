import{u as v,l as S,Z as C,n as a,G as T,o as r,$ as d,s as e,R as n,t as o,I as s,S as i,C as k,B as l,v as z,w as h,a1 as F,z as H,D as I}from"./index-961a07a5.js";import{T as L}from"./ticket_nft-6fc753da.js";import{N as A}from"./nft_bottom-1b63c0d9.js";import{P as W,I as E,M as D}from"./information-054993ef.js";import{C as B}from"./CountDownFrame-a9a46024.js";import"./useLocale-8ec3e8c8.js";const G="/assets/dialog_title-2fbb6c5c.png",{success:N}=D,R=()=>{N({icon:null,content:e.jsxs(i,{direction:"vertical",style:{display:"flex",alignItems:"center"},children:[e.jsx(s,{src:G,preview:!1,style:{marginTop:50}}),e.jsxs("p",{style:{fontFamily:"Arimo Hebrew Sunset",fontWeight:700,fontSize:34,color:"white",paddingLeft:60,paddingRight:50,marginTop:30},children:["Invite friends to participate in the game and receive"," ",e.jsx("span",{style:{fontFamily:"Eras Bold ITC",fontWeight:700,fontSize:44,color:"#eb91ff"},children:"100%"})," ","of the reward amount."]})]}),centered:!0,footer:null,maskClosable:!0,width:956})},U=e.jsx("div",{children:"The last participation can only receive 80% of the reward amount, but they will receive 100% of the reward amount once a new player joins."});function Z(){const f=v(),m=S(),g=C(),[t,p]=a.useState(new T),[y]=a.useState(window.innerHeight),c=async()=>{r.instance.emit(H.event)};a.useEffect(()=>{r.instance.on(d.event,c);async function b(){const w=f.id,j=await(await h.instance.getContract(I.LotteryGameSystem)).getGame(w);p(j)}return b(),()=>{r.instance.off(d.event,c)}},[m.pathname]);const u=()=>{R()},x=()=>{g("/")};return e.jsxs(e.Fragment,{children:[e.jsx("div",{style:{position:"fixed",width:"100%",height:230,background:"linear-gradient(0deg, #2A5698, #6793B2)",left:0,right:0,bottom:0,margin:"0 auto",opacity:.6,zIndex:-1}}),e.jsx(n,{style:{position:"fixed",width:"100%",height:200,top:200,zIndex:-1},children:e.jsxs(o,{span:24,style:{display:"flex",justifyContent:"center",position:"relative",marginTop:-200,marginLeft:-30},children:[e.jsx(s,{src:A,preview:!1,style:{position:"absolute",width:621,margin:"0 auto",left:-310}}),e.jsx(s,{src:L,style:{position:"absolute",width:320,transform:"rotate(-11.204deg)",margin:"0 auto",top:140,left:-100,cursor:"pointer"}})]})}),e.jsxs(i,{direction:"vertical",style:{display:"grid",justifyContent:"center",alignContent:"center",minHeight:`${k}`,width:"100%"},children:[e.jsxs("label",{style:{color:"white",fontFamily:"Arimo Hebrew Subset",fontSize:60,fontWeight:"bold",letterSpacing:0,textAlign:"left"},children:["Jackpot:"," ",e.jsxs("span",{style:{color:"#FCDC36",fontFamily:"Arimo Hebrew Subset",fontSize:60,fontWeight:"bold",letterSpacing:0,textAlign:"left"},children:[t.TotalAmount," ",t.tokenSymbol]})]}),e.jsx(i,{direction:"horizontal",size:"small",style:{display:t.hasHash?"flex":"none",justifyContent:"center"},children:e.jsxs(l,{type:"text",style:{display:"flex"},target:"_blank",href:`${z(h.instance.chainId)}/tx/${t.transactionHash}`,children:[e.jsxs("p",{style:{color:"#91a7be",fontSize:30,fontFamily:"Arimo Hebrew Subset",fontWeight:400},children:["TX: ",t.shortHash]}),e.jsx("svg",{style:{marginTop:2,marginLeft:30,color:"#91a7be",fontSize:40,display:"none"},stroke:"currentColor",fill:"none",strokeWidth:"0",viewBox:"0 0 24 24",focusable:"false",height:"1em",width:"1em",xmlns:"http://www.w3.org/2000/svg",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"})})]})}),e.jsx(n,{gutter:0,style:{marginTop:20,width:"100%",display:"flex",justifyContent:"center",alignItems:"center"},children:e.jsx(B,{timeLeft:t.endTime*1e3-new Date().getTime(),onFinished:x})}),e.jsx("div",{style:{height:230,width:"100%",display:`${y<900?"block":"none"}`,visibility:"hidden"}})]}),e.jsxs(n,{style:{display:"flex",position:"fixed",width:"100%",height:230,bottom:0},children:[e.jsx(o,{span:4,style:{position:"relative"},children:e.jsx(W,{content:U,title:"Rules",placement:"right",children:e.jsx(l,{style:{width:42,height:42,position:"absolute",background:"transparent",border:"none",top:52,right:0},icon:e.jsx(s,{src:E,preview:!1,style:{width:42,height:42}}),type:"default"})})}),e.jsx(o,{span:10,children:e.jsxs(n,{style:{marginTop:52,marginLeft:30},children:[e.jsxs("label",{style:{color:"white",fontSize:30,fontFamily:"Arimo Hebrew Subset",fontWeight:"bold",marginLeft:10},children:["Currently, you can only receive"," ",e.jsx("span",{style:{color:"#43FFF4",fontSize:40,fontFamily:"Eras Bold ITC",fontWeight:400},children:"80%"})," ","of the prize."]}),e.jsx(i,{direction:"horizontal",style:{marginTop:10},children:e.jsxs("label",{style:{color:"white",fontFamily:"Arimo Hebrew Subset",fontSize:40,fontWeight:"bold",letterSpacing:0,textAlign:"left",marginLeft:10},children:["Lucky Number:"," ",e.jsx("span",{style:{color:"#FCDC36",fontFamily:"Arimo Hebrew Subset",fontSize:40,fontWeight:"bold",letterSpacing:0,textAlign:"left"},children:t.ticket?t.ticket.LuckyNumberStr:""})]})})]})}),e.jsx(o,{span:10,children:e.jsx(i,{direction:"vertical",style:{display:"flex",justifyContent:"center",alignContent:"center",height:"100%"},children:e.jsx(F.CopyToClipboard,{text:t.shareTxt,children:e.jsx(l,{onClick:u,className:"start-btn",style:{width:524,height:114,borderRadius:40,fontSize:40,fontWeight:700},children:"Upgrade to 100%"})})})})]})]})}export{Z as default};
