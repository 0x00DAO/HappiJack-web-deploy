import{u as b,l as S,a0 as T,n as o,G as h,s as t,R as f,t as k,I as d,S as r,C as v,B as g,v as H,w as p,x as z,a3 as G,a2 as F,F as I}from"./index-9bc7c304.js";import{T as A}from"./ticket_nft-6fc753da.js";import{N as L}from"./nft_bottom-1b63c0d9.js";import{C as D}from"./CountDownFrame-bd92debf.js";function R(){const y=b(),u=S(),x=T(),j=()=>x("/"),[n,l]=o.useState(new h),[a,c]=o.useState(null),w=async s=>{const e=await(await p.instance.getContract(I.LotteryGameSystem)).getGame(s,!0);return l(e),!e.ticket||e.ticket.transactionHash===""?e.ticket.getTransactionHash().then(m=>{m&&c(m)}):c(e.ticket.transactionHash),e};async function C(){const s=y.id,i=await h.getCacheGame(s);i&&l(i),w(s)}return o.useEffect(()=>{C()},[u.pathname]),t.jsxs(t.Fragment,{children:[t.jsx(f,{style:{position:"fixed",width:"100%",height:200,top:200,zIndex:-1},children:t.jsxs(k,{span:24,style:{display:"flex",justifyContent:"center",position:"relative",marginTop:-200},children:[t.jsx(d,{src:L,preview:!1,style:{position:"absolute",width:621,margin:"0 auto",left:-310}}),t.jsx(d,{src:A,style:{position:"absolute",width:320,transform:"rotate(-11.204deg)",margin:"0 auto",top:140,left:-100}})]})}),t.jsxs(r,{direction:"vertical",size:"large",style:{display:"grid",justifyContent:"center",alignContent:"center",minHeight:`${v}`,width:"100%",marginTop:50},children:[t.jsxs("label",{style:{color:"white",fontFamily:"Arimo Hebrew Subset",fontSize:60,fontWeight:"bold",letterSpacing:0,textAlign:"left"},children:["Jackpot:"," ",t.jsxs("span",{style:{color:"#FCDC36",fontFamily:"Arimo Hebrew Subset",fontSize:60,fontWeight:"bold",letterSpacing:0,textAlign:"left"},children:[n.TotalAmount," ",n.tokenSymbol]})]}),t.jsx(r,{direction:"horizontal",size:"small",style:{display:a?"flex":"none",justifyContent:"center"},children:t.jsxs(g,{type:"text",style:{display:"flex"},target:"_blank",href:`${H(p.instance.chainId)}/tx/${a}`,children:[t.jsxs("p",{style:{color:"#91a7be",fontSize:30,fontFamily:"Arimo Hebrew Subset",fontWeight:400},children:["TX: ",z(a)]}),t.jsx("svg",{style:{marginTop:2,marginLeft:30,color:"#91a7be",fontSize:40,display:"none"},stroke:"currentColor",fill:"none",strokeWidth:"0",viewBox:"0 0 24 24",focusable:"false",height:"1em",width:"1em",xmlns:"http://www.w3.org/2000/svg",children:t.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"})})]})}),t.jsx(f,{gutter:0,style:{marginTop:20,width:"100%",display:"flex",justifyContent:"center",alignItems:"center"},children:t.jsx(D,{timeLeft:n.endTime*1e3-new Date().getTime(),onFinished:j})}),t.jsxs(r,{direction:"vertical",style:{display:"grid",justifyContent:"center",alignItems:"center",marginTop:50},children:[t.jsxs("label",{style:{fontFamily:"Arimo Hebrew Subset",fontSize:20,color:"#91a7be",display:"flex",justifyContent:"center",marginBottom:20},children:["Congratulations, you are now eligible to receive a ",t.jsxs("span",{style:{color:"#43fff4",fontSize:30,marginTop:-5},children:[" ","100%"," "]})," prize."]}),t.jsx(G.CopyToClipboard,{text:n.shareTxt,children:t.jsx(g,{shape:"round",style:{fontWeight:"bold",color:"white",fontSize:40,width:460,height:100,marginLeft:50},onClick:async()=>F.success("Copied"),children:"Share"})})]})]})]})}export{R as default};
