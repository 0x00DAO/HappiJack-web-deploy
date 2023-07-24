import{u as T,l as k,a0 as H,n as o,G as F,o as l,a1 as m,s as t,R as s,t as a,I as r,S as i,C as z,B as c,v as A,w as g,x as I,a3 as L,A as W,F as E}from"./index-2a4671bf.js";import{T as B}from"./ticket_nft-6fc753da.js";import{N as D}from"./nft_bottom-1b63c0d9.js";import{P as G,I as N,M as R}from"./information-992d75c3.js";import{C as U}from"./CountDownFrame-1dc76524.js";import"./useLocale-f269cb00.js";const M="/assets/dialog_title-2fbb6c5c.png",{success:P}=R,_=()=>{P({icon:null,content:t.jsxs(i,{direction:"vertical",style:{display:"flex",alignItems:"center"},children:[t.jsx(r,{src:M,preview:!1,style:{marginTop:50}}),t.jsxs("p",{style:{fontFamily:"Arimo Hebrew Sunset",fontWeight:700,fontSize:34,color:"white",paddingLeft:60,paddingRight:50,marginTop:30},children:["Invite friends to participate in the game and receive"," ",t.jsx("span",{style:{fontFamily:"Eras Bold ITC",fontWeight:700,fontSize:44,color:"#eb91ff"},children:"100%"})," ","of the reward amount."]})]}),centered:!0,footer:null,maskClosable:!0,width:956})},$=t.jsx("div",{children:"The last participation can only receive 80% of the reward amount, but they will receive 100% of the reward amount once a new player joins."});function Y(){const p=T(),y=k(),u=H(),[e,x]=o.useState(new F),[n,b]=o.useState(null),[w]=o.useState(window.innerHeight),d=async()=>{l.instance.emit(W.event)};o.useEffect(()=>{l.instance.on(m.event,d);async function S(){const C=p.id,h=await(await g.instance.getContract(E.LotteryGameSystem)).getGame(C);x(h),h.ticket.getTransactionHash().then(f=>{f&&b(f)})}return S(),()=>{l.instance.off(m.event,d)}},[y.pathname]);const j=()=>{_()},v=()=>{u("/")};return t.jsxs(t.Fragment,{children:[t.jsx("div",{style:{position:"fixed",width:"100%",height:230,background:"linear-gradient(0deg, #2A5698, #6793B2)",left:0,right:0,bottom:0,margin:"0 auto",opacity:.6,zIndex:-1}}),t.jsx(s,{style:{position:"fixed",width:"100%",height:200,top:200,zIndex:-1},children:t.jsxs(a,{span:24,style:{display:"flex",justifyContent:"center",position:"relative",marginTop:-200,marginLeft:-30},children:[t.jsx(r,{src:D,preview:!1,style:{position:"absolute",width:621,margin:"0 auto",left:-310}}),t.jsx(r,{src:B,style:{position:"absolute",width:320,transform:"rotate(-11.204deg)",margin:"0 auto",top:140,left:-100,cursor:"pointer"}})]})}),t.jsxs(i,{direction:"vertical",style:{display:"grid",justifyContent:"center",alignContent:"center",minHeight:`${z}`,width:"100%"},children:[t.jsxs("label",{style:{color:"white",fontFamily:"Arimo Hebrew Subset",fontSize:60,fontWeight:"bold",letterSpacing:0,textAlign:"left"},children:["Jackpot:"," ",t.jsxs("span",{style:{color:"#FCDC36",fontFamily:"Arimo Hebrew Subset",fontSize:60,fontWeight:"bold",letterSpacing:0,textAlign:"left"},children:[e.TotalAmount," ",e.tokenSymbol]})]}),t.jsx(i,{direction:"horizontal",size:"small",style:{display:n||e.transactionHash?"flex":"none",justifyContent:"center"},children:t.jsxs(c,{type:"text",style:{display:"flex"},target:"_blank",href:`${A(g.instance.chainId)}/tx/${n??e.transactionHash}`,children:[t.jsxs("p",{style:{color:"#91a7be",fontSize:30,fontFamily:"Arimo Hebrew Subset",fontWeight:400},children:["TX:"," ",n&&n!==""?I(n):e.shortHash]}),t.jsx("svg",{style:{marginTop:2,marginLeft:30,color:"#91a7be",fontSize:40,display:"none"},stroke:"currentColor",fill:"none",strokeWidth:"0",viewBox:"0 0 24 24",focusable:"false",height:"1em",width:"1em",xmlns:"http://www.w3.org/2000/svg",children:t.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"})})]})}),t.jsx(s,{gutter:0,style:{marginTop:20,width:"100%",display:"flex",justifyContent:"center",alignItems:"center"},children:t.jsx(U,{timeLeft:e.endTime*1e3-new Date().getTime(),onFinished:v})}),t.jsx("div",{style:{height:230,width:"100%",display:`${w<900?"block":"none"}`,visibility:"hidden"}})]}),t.jsxs(s,{style:{display:"flex",position:"fixed",width:"100%",height:230,bottom:0},children:[t.jsx(a,{span:4,style:{position:"relative"},children:t.jsx(G,{content:$,title:"Rules",placement:"right",children:t.jsx(c,{style:{width:42,height:42,position:"absolute",background:"transparent",border:"none",top:52,right:0},icon:t.jsx(r,{src:N,preview:!1,style:{width:42,height:42}}),type:"default"})})}),t.jsx(a,{span:10,children:t.jsxs(s,{style:{marginTop:52,marginLeft:30},children:[t.jsxs("label",{style:{color:"white",fontSize:30,fontFamily:"Arimo Hebrew Subset",fontWeight:"bold",marginLeft:10},children:["Currently, you can only receive"," ",t.jsx("span",{style:{color:"#43FFF4",fontSize:40,fontFamily:"Eras Bold ITC",fontWeight:400},children:"80%"})," ","of the prize."]}),t.jsx(i,{direction:"horizontal",style:{marginTop:10},children:t.jsxs("label",{style:{color:"white",fontFamily:"Arimo Hebrew Subset",fontSize:40,fontWeight:"bold",letterSpacing:0,textAlign:"left",marginLeft:10},children:["Lucky Number:"," ",t.jsx("span",{style:{color:"#FCDC36",fontFamily:"Arimo Hebrew Subset",fontSize:40,fontWeight:"bold",letterSpacing:0,textAlign:"left"},children:e.ticket?e.ticket.LuckyNumberStr:""})]})})]})}),t.jsx(a,{span:10,children:t.jsx(i,{direction:"vertical",style:{display:"flex",justifyContent:"center",alignContent:"center",height:"100%"},children:t.jsx(L.CopyToClipboard,{text:e.shareTxt,children:t.jsx(c,{onClick:j,className:"start-btn",style:{width:524,height:114,borderRadius:40,fontSize:40,fontWeight:700},children:"Upgrade to 100%"})})})})]})]})}export{Y as default};
