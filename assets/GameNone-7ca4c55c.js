import{u as f,l as u,m as x,n as s,G as y,o as t,S as n,C,B as a,p as w,q as i,I as o,R as b,s as j}from"./index-fff45ad1.js";import{I as k,C as S}from"./information-0ed2c8f3.js";import{P as T}from"./index-89ac85b1.js";import"./Loading-6c5a10d6.js";import"./index-da5d8db5.js";import"./useLocale-49be0bce.js";import"./index-dbe8461f.js";import"./TextArea-72836b6c.js";import"./SearchOutlined-747dd7a4.js";const F="/assets/ticket_nft-adf004c5.png";function A(){const r=f(),l=u(),c=x(S),[e,m]=s.useState(new y);s.useEffect(()=>{async function h(){const g=r.id,p=await(await i.instance.getContract(j.LotteryGameSystem)).getGame(g);m(p)}h()},[l.pathname]);const d=()=>{c.show()};return t.jsx(t.Fragment,{children:t.jsxs(n,{direction:"vertical",style:{display:"grid",justifyContent:"center",alignContent:"center",minHeight:`${C}`},children:[t.jsxs(n,{style:{width:"100%"},size:"large",children:[t.jsxs(n,{direction:"vertical",children:[t.jsx("p",{style:{fontFamily:"Arimo Hebrew Subset",fontSize:70,fontWeight:700,width:677,height:160,background:"linear-gradient(270deg, #C879F9 0%, #6C7EFC 50%, #74F0B2 100%)",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent",backgroundClip:"text"},children:"Congratulations to the winner!"}),t.jsxs("p",{style:{fontSize:70,fontFamily:"Arimo Hebrew Subset",fontWeight:700,color:"white",width:820},children:["Share Prize: ",e.TotalAmount," ",e.tokenSymbol]}),t.jsx(n,{direction:"horizontal",size:"small",hidden:!e.hasHash,children:t.jsxs(a,{type:"text",style:{display:"flex"},target:"_blank",href:`${w(i.instance.chainId)}/tx/${e.transactionHash}`,children:[t.jsxs("p",{style:{color:"#91a7be",fontSize:30,fontFamily:"Arimo Hebrew Subset",fontWeight:400,marginLeft:-10},children:["TX: ",e.shortHash]}),t.jsx("svg",{style:{marginTop:2,marginLeft:30,color:"#91a7be",fontSize:40},stroke:"currentColor",fill:"none",strokeWidth:"0",viewBox:"0 0 24 24",focusable:"false",height:"1em",width:"1em",xmlns:"http://www.w3.org/2000/svg",children:t.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"})})]})})]}),t.jsx(o,{src:F,preview:!1,style:{marginTop:-150}})]}),t.jsxs(n,{style:{width:"100%",display:"flex",justifyContent:"center",marginTop:50},children:[t.jsx(a,{onClick:d,className:"start-btn",style:{width:460,height:100,background:"linear-gradient(90deg, #74F0B2 -0.62%, #6C7EFC 51.58%, #C879F9 100.62%)",borderRadius:40,fontFamily:"Arimo Hebrew Subset",fontSize:40,fontWeight:700},children:"Start"}),t.jsx(T,{content:b,title:"Rules",placement:"right",children:t.jsx(a,{style:{width:42,height:42,background:"transparent",border:"none",marginLeft:35},icon:t.jsx(o,{src:k,preview:!1}),type:"default"})})]})]})})}export{A as default};