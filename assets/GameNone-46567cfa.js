import{u as j,l as b,m as S,n as a,G as T,o as t,S as s,C as k,R as L,B as o,p as v,q as n,I as r,s as G,t as d,v as h}from"./index-e6e80f70.js";import{T as H}from"./ticket_nft-6fc753da.js";import{P as I,I as W}from"./information-18aed7a3.js";import{N as z}from"./nft_bottom-1b63c0d9.js";import{L as N}from"./LotteryCreateModal-78e4f4e6.js";import{s as E,c as m}from"./Loading-8e7fb8bf.js";import{C as f}from"./col-8cb62d8c.js";import"./useLocale-90957e8f.js";import"./TextArea-e6de5a79.js";import"./SearchOutlined-c4928778.js";function U(){const g=j(),p=b(),y=S(N),[e,u]=a.useState(new T),[x,l]=a.useState(!0);a.useEffect(()=>{async function i(){const C=g.id,c=await(await n.instance.getContract(d.LotteryGameSystem)).getGame(C);u(c),l(!c.isWaitingReward)}i()},[p.pathname]);const w=async()=>{if(e.isWaitingVerify){E();try{await e.verify(),setTimeout(async()=>{(await n.instance.getContract(d.LotteryGameSystem)).clearGameCache(e.LotteryGameId),m(),h.success("Verify success"),l(!0)},1e3)}catch{m(),h.error("Verify failed")}}else y.show()};return t.jsx(t.Fragment,{children:t.jsxs(s,{direction:"vertical",style:{minHeight:`${k}`,width:"100%",display:"flex",justifyContent:"center"},children:[t.jsxs(L,{gutter:0,children:[t.jsx(f,{span:12,style:{width:"100%",paddingLeft:65},children:t.jsxs(s,{direction:"vertical",size:"small",children:[t.jsx("p",{style:{fontFamily:"Arimo Hebrew Subset",fontSize:70,fontWeight:700,width:677,height:160,background:"linear-gradient(270deg, #C879F9 0%, #6C7EFC 50%, #74F0B2 100%)",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent",backgroundClip:"text",textAlign:"left",marginTop:30},children:"Congratulations the winners!"}),t.jsxs("p",{style:{fontSize:70,fontFamily:"Arimo Hebrew Subset",fontWeight:700,color:"white",width:820,textAlign:"left"},children:["Share Prize: ",e.TotalAmount," ",e.tokenSymbol]}),t.jsx(s,{direction:"horizontal",size:"small",hidden:!e.hasHash,style:{marginTop:-50},children:t.jsxs(o,{type:"text",style:{display:"flex"},target:"_blank",href:`${v(n.instance.chainId)}/tx/${e.transactionHash}`,disabled:!e.hasHash,children:[t.jsxs("p",{style:{color:"#91a7be",fontSize:30,fontFamily:"Arimo Hebrew Subset",fontWeight:700,marginLeft:-10},children:["TX: ",e.shortHash]}),t.jsx("svg",{style:{marginTop:2,marginLeft:30,color:"#91a7be",fontSize:40,display:"none"},stroke:"currentColor",fill:"none",strokeWidth:"0",viewBox:"0 0 24 24",focusable:"false",height:"1em",width:"1em",xmlns:"http://www.w3.org/2000/svg",children:t.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"})})]})})]})}),t.jsx(f,{span:12,style:{width:"100%",position:"relative",display:"flex",justifyContent:"center"},children:t.jsxs("div",{style:{width:669,height:500,marginTop:-100},children:[t.jsx(r,{src:z,preview:!1,style:{position:"absolute",width:669}}),t.jsx(r,{src:H,style:{position:"absolute",width:375,transform:"rotate(-11.204deg)",top:130,left:200,cursor:"pointer"}})]})})]}),t.jsxs(s,{style:{width:"100%",display:"flex",justifyContent:"center",marginTop:50},children:[t.jsx(o,{onClick:w,className:"start-btn",style:{width:460,height:100,borderRadius:40,fontSize:40,fontWeight:700},children:e.isWaitingVerify&&!x?"Verify":"Create"}),t.jsx(I,{content:G,title:"Rules",placement:"right",children:t.jsx(o,{style:{width:42,height:42,background:"transparent",border:"none",marginLeft:35},icon:t.jsx(r,{src:W,preview:!1}),type:"default"})})]})]})})}export{U as default};