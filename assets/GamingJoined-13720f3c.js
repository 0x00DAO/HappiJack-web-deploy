import{u as b,l as C,K as S,n,G as T,s as t,R as r,t as l,I as s,S as i,C as k,B as c,v as H,w as f,O as v,M as z,A as I}from"./index-7582bd3c.js";import{T as L}from"./ticket_nft-6fc753da.js";import{H as A}from"./hourglass-4ac11dee.js";import{N}from"./nft_bottom-1b63c0d9.js";import{T as h}from"./index-7c2e2afb.js";import{S as W}from"./index-9a70c031.js";import"./CheckOutlined-f18a4548.js";import"./index-95c60d8a.js";import"./TextArea-1a61c28a.js";import"./useForceUpdate-5fdf563e.js";const{Countdown:F}=W;function U(){var o,a;const d=b(),m=C(),p=S(),y=()=>{p("/")},[e,u]=n.useState(new T),[x]=n.useState(window.innerHeight);return n.useEffect(()=>{async function g(){const j=d.id,w=await(await f.instance.getContract(I.LotteryGameSystem)).getGame(j);u(w)}g()},[m.pathname]),t.jsxs(t.Fragment,{children:[t.jsx(r,{style:{position:"fixed",width:"100%",height:200,top:200,zIndex:-1},children:t.jsxs(l,{span:24,style:{display:"flex",justifyContent:"center",position:"relative",marginTop:-200},children:[t.jsx(s,{src:N,preview:!1,style:{position:"absolute",width:621,margin:"0 auto",left:-310}}),t.jsx(s,{src:L,style:{position:"absolute",width:320,transform:"rotate(-11.204deg)",margin:"0 auto",top:140,left:-100}})]})}),t.jsxs(i,{direction:"vertical",style:{display:"grid",justifyContent:"center",alignContent:"center",minHeight:`${k}`,width:"100%"},children:[t.jsx(r,{gutter:0,style:{display:"flex",justifyContent:"center",alignItems:"center",marginTop:x<900?0:150},children:t.jsxs(l,{span:"auto",style:{maxWidth:"100%",position:"relative"},children:[t.jsx(h.Text,{style:{fontFamily:"Eras Bold ITC",fontSize:90,color:"#eb91ff",display:"flex",opacity:.9},children:`Lucky Number: ${(o=e==null?void 0:e.ticket)==null?void 0:o.LuckyNumber}`}),t.jsx(h.Text,{style:{fontFamily:"Eras Bold ITC",fontSize:90,color:"white",display:"flex",opacity:.9,position:"absolute",top:-6,left:-3},children:`Lucky Number: ${(a=e==null?void 0:e.ticket)==null?void 0:a.LuckyNumber}`})]})}),t.jsx(i,{direction:"horizontal",size:"small",hidden:!e.hasHash,style:{display:"flex",justifyContent:"center"},children:t.jsxs(c,{type:"text",style:{display:"flex"},target:"_blank",href:`${H(f.instance.chainId)}/tx/${e.transactionHash}`,disabled:!e.hasHash,children:[t.jsxs("p",{style:{color:"#91a7be",fontSize:30,fontFamily:"Arimo Hebrew Subset",fontWeight:400},children:["TX: ",e.shortHash]}),t.jsx("svg",{style:{marginTop:2,marginLeft:30,color:"#91a7be",fontSize:40,display:"none"},stroke:"currentColor",fill:"none",strokeWidth:"0",viewBox:"0 0 24 24",focusable:"false",height:"1em",width:"1em",xmlns:"http://www.w3.org/2000/svg",children:t.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"})})]})}),t.jsxs(i,{direction:"horizontal",style:{display:"flex",justifyContent:"center",alignContent:"center",marginLeft:-50,marginTop:-30},children:[t.jsx(s,{src:A,preview:!1}),t.jsx("p",{style:{fontFamily:"Arimo Hebrew Subset",fontWeight:700,fontSize:50,color:"white",marginTop:70},children:"Waiting for the draw"})]}),t.jsx(F,{valueStyle:{display:"flex",alignItems:"center",justifyContent:"center",fontFamily:"Arimo Hebrew Subset",fontWeight:700,fontSize:30,color:"#91a7be",marginTop:-50},prefix:"Lucky Draw In:",value:e.endTime*1e3,onFinish:y}),t.jsx(i,{style:{display:"flex",justifyContent:"center",alignContent:"center"},children:t.jsx(v.CopyToClipboard,{text:e.shareTxt,children:t.jsx(c,{shape:"round",style:{fontWeight:700,color:"white",fontSize:40,width:460,height:100},onClick:async()=>z.success("Copied"),children:"Share"})})}),t.jsx(i,{direction:"horizontal",style:{display:"flex",justifyContent:"center",alignContent:"center"},children:t.jsxs("p",{style:{color:"white",fontFamily:"Arimo Hebrew Subset",fontSize:60,fontWeight:700,letterSpacing:0,textAlign:"left"},children:["Jackpot:",t.jsxs("span",{style:{color:"#fcdc36",fontFamily:"Arimo Hebrew Subset",fontSize:60,fontWeight:700,letterSpacing:0,textAlign:"left"},children:[" ",e.TotalAmount," ",e.tokenSymbol]})]})})]})]})}export{U as default};
