import{u as j,l as w,aa as C,n,G as S,o as t,R as s,I as o,S as i,C as b,B as a,p as T,q as r,ab as H,v,t as z}from"./index-e6e80f70.js";import{T as I}from"./ticket_nft-6fc753da.js";import{H as k}from"./hourglass-4ac11dee.js";import{N as W}from"./nft_bottom-1b63c0d9.js";import{T as l}from"./index-59db5d11.js";import{S as A}from"./index-eff3919e.js";import{C as c}from"./col-8cb62d8c.js";import"./CheckOutlined-9cc5cdb1.js";import"./useLocale-90957e8f.js";import"./TextArea-e6de5a79.js";import"./useForceUpdate-ab8177d4.js";const{Countdown:F}=A;function q(){const f=j(),h=w(),m=C(),d=()=>{m("/")},[e,p]=n.useState(new S),[y]=n.useState(window.innerHeight);return n.useEffect(()=>{async function g(){const x=f.id,u=await(await r.instance.getContract(z.LotteryGameSystem)).getGame(x);p(u)}g()},[h.pathname]),t.jsxs(t.Fragment,{children:[t.jsx(s,{style:{position:"fixed",width:"100%",height:200,top:200,zIndex:-1},children:t.jsxs(c,{span:24,style:{display:"flex",justifyContent:"center",position:"relative",marginTop:-200},children:[t.jsx(o,{src:W,preview:!1,style:{position:"absolute",width:621,margin:"0 auto",left:-310}}),t.jsx(o,{src:I,style:{position:"absolute",width:320,transform:"rotate(-11.204deg)",margin:"0 auto",top:140,left:-100}})]})}),t.jsxs(i,{direction:"vertical",style:{display:"grid",justifyContent:"center",alignContent:"center",minHeight:`${b}`,width:"100%"},children:[t.jsx(s,{gutter:0,style:{display:"flex",justifyContent:"center",alignItems:"center",marginTop:y<900?0:150},children:t.jsxs(c,{span:"auto",style:{maxWidth:"100%",position:"relative"},children:[t.jsx(l.Text,{style:{fontFamily:"Eras Bold ITC",fontSize:90,color:"#eb91ff",display:"flex",opacity:.9},children:"Congratulations"}),t.jsx(l.Text,{style:{fontFamily:"Eras Bold ITC",fontSize:90,color:"white",display:"flex",opacity:.9,position:"absolute",top:-6,left:-3},children:"Congratulations"})]})}),t.jsx(i,{direction:"horizontal",size:"small",hidden:!e.hasHash,style:{display:"flex",justifyContent:"center"},children:t.jsxs(a,{type:"text",style:{display:"flex"},target:"_blank",href:`${T(r.instance.chainId)}/tx/${e.transactionHash}`,disabled:!e.hasHash,children:[t.jsxs("p",{style:{color:"#91a7be",fontSize:30,fontFamily:"Arimo Hebrew Subset",fontWeight:400},children:["TX: ",e.shortHash]}),t.jsx("svg",{style:{marginTop:2,marginLeft:30,color:"#91a7be",fontSize:40,display:"none"},stroke:"currentColor",fill:"none",strokeWidth:"0",viewBox:"0 0 24 24",focusable:"false",height:"1em",width:"1em",xmlns:"http://www.w3.org/2000/svg",children:t.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"})})]})}),t.jsxs(i,{direction:"horizontal",style:{display:"flex",justifyContent:"center",alignContent:"center",marginLeft:-50,marginTop:-30},children:[t.jsx(o,{src:k,preview:!1}),t.jsx("p",{style:{fontFamily:"Arimo Hebrew Subset",fontWeight:700,fontSize:50,color:"white",marginTop:70},children:"Waiting for the draw"})]}),t.jsx(F,{valueStyle:{display:"flex",alignItems:"center",justifyContent:"center",fontFamily:"Arimo Hebrew Subset",fontWeight:700,fontSize:30,color:"#91a7be",marginTop:-50},prefix:"Lucky Draw In:",value:e.endTime*1e3,onFinish:d}),t.jsx(i,{style:{display:"flex",justifyContent:"center",alignContent:"center"},children:t.jsx(H.CopyToClipboard,{text:e.shareTxt,children:t.jsx(a,{shape:"round",style:{fontWeight:700,color:"white",fontSize:40,width:460,height:100},onClick:async()=>v.success("Copied"),children:"Share"})})}),t.jsx(i,{direction:"horizontal",style:{display:"flex",justifyContent:"center",alignContent:"center"},children:t.jsxs("p",{style:{color:"white",fontFamily:"Arimo Hebrew Subset",fontSize:60,fontWeight:700,letterSpacing:0,textAlign:"left"},children:["Share Prize:",t.jsxs("span",{style:{color:"#fcdc36",fontFamily:"Arimo Hebrew Subset",fontSize:60,fontWeight:700,letterSpacing:0,textAlign:"left"},children:[" ",e.TotalAmount," ",e.tokenSymbol]})]})})]})]})}export{q as default};