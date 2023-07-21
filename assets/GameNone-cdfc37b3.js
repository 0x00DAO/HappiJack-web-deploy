import{u as E,l as G,m as H,n as r,G as I,o as i,p as u,q as x,s as t,S as o,C as W,R as z,t as w,B as m,v as A,w as l,I as h,x as F,y as N,z as b,A as R,D as j,F as V}from"./index-555ab3b9.js";import{T as B}from"./ticket_nft-6fc753da.js";import{P as M,I as D}from"./information-c4da529e.js";import{N as P}from"./nft_bottom-1b63c0d9.js";import{L as _}from"./LotteryCreateModal-93092629.js";import{c as C,s as O}from"./Loading-d98d0fc0.js";import"./useLocale-3238c23e.js";import"./index-2f875eff.js";import"./TextArea-1d3d0587.js";import"./SearchOutlined-0fb78dd3.js";function st(){const c=E(),v=G(),S=H(_),[e,f]=r.useState(new I),[g,L]=r.useState(!0),[T]=r.useState(window.innerHeight),y=async()=>{i.instance.emit(b.event)},p=async(n,d,s)=>{const a=c.id;if(n!==a)return Promise.resolve();await l.instance.getAddress()===s&&(C(),R("Verify success")),i.instance.emit(b.event)};r.useEffect(()=>{i.instance.on(u.event,p),i.instance.on(x.event,y);async function n(){const d=c.id,a=await(await l.instance.getContract(j.LotteryGameSystem)).getGame(d);f(a),L(!a.isWaitingReward)}return n(),()=>{i.instance.off(u.event,p),i.instance.off(x.event,y)}},[v.pathname]);const k=async()=>{const n=c.id,s=await(await l.instance.getContract(j.LotteryGameSystem)).getGame(n,!0);if(f(s),s.isWaitingVerify){O();try{await s.verify()}catch{C(),V("Verify failed")}}else S.show()};return t.jsx(t.Fragment,{children:t.jsxs(o,{direction:"vertical",style:{minHeight:`${W}`,width:"100%",display:"flex",justifyContent:"center"},children:[t.jsxs(z,{gutter:0,children:[t.jsx(w,{span:12,style:{width:"100%",paddingLeft:65},children:t.jsxs(o,{direction:"vertical",size:"small",children:[t.jsx("p",{style:{fontFamily:"Arimo Hebrew Subset",fontSize:70,fontWeight:700,width:970,height:160,background:"linear-gradient(270deg, #C879F9 0%, #6C7EFC 50%, #74F0B2 100%)",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent",backgroundClip:"text",textAlign:"left",marginTop:30},children:"Congratulations the winners!"}),t.jsxs("p",{style:{fontSize:70,fontFamily:"Arimo Hebrew Subset",fontWeight:"bold",color:"white",width:1e3,textAlign:"left"},children:["Recent Jackpot:"," ",t.jsxs("span",{style:{color:"#fcdc36",fontFamily:"Arimo Hebrew Subset",fontSize:70,fontWeight:"bold",letterSpacing:0,textAlign:"left"},children:[e.TotalAmount," ",e.tokenSymbol]})]}),t.jsx(o,{direction:"horizontal",size:"small",hidden:!e.hasHash,style:{marginTop:-50},children:t.jsxs(m,{type:"text",style:{display:"flex"},target:"_blank",href:`${A(l.instance.chainId)}/tx/${e.transactionHash}`,disabled:!e.hasHash,children:[t.jsxs("p",{style:{color:"#91a7be",fontSize:30,fontFamily:"Arimo Hebrew Subset",fontWeight:700,marginLeft:-10},children:["TX: ",e.shortHash]}),t.jsx("svg",{style:{marginTop:2,marginLeft:30,color:"#91a7be",fontSize:40,display:"none"},stroke:"currentColor",fill:"none",strokeWidth:"0",viewBox:"0 0 24 24",focusable:"false",height:"1em",width:"1em",xmlns:"http://www.w3.org/2000/svg",children:t.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"})})]})})]})}),t.jsx(w,{span:12,style:{width:"100%",position:"relative",display:"flex",justifyContent:"center"},children:t.jsxs("div",{style:{width:669,height:500,marginTop:-100,zIndex:-1},children:[t.jsx(h,{src:P,preview:!1,style:{position:"absolute",width:669}}),t.jsx(h,{src:B,style:{position:"absolute",width:375,transform:"rotate(-11.204deg)",top:130,left:200,cursor:"pointer"}})]})})]}),t.jsxs(o,{direction:"vertical",style:{display:"flex",justifyContent:"center",alignContent:"center",height:50,marginTop:T<900?20:100,position:"relative"},children:[t.jsx("label",{style:{fontFamily:"Arimo Hebrew Subset",fontSize:20,color:"#91a7be",display:"flex",justifyContent:"center",marginLeft:-90,marginBottom:-300},children:"Begin crafting your own miracles!"}),t.jsxs(o,{style:{width:"100%",display:"flex",justifyContent:"center",marginTop:50},children:[t.jsx(m,{onClick:k,className:"start-btn",style:{width:460,height:100,borderRadius:40,fontSize:40,fontWeight:700},children:e.isWaitingVerify&&!g?"Verify and Earn":"Create game"}),t.jsx(M,{content:e.isWaitingVerify&&!g?F:N,title:"Rules",placement:"right",children:t.jsx(m,{style:{width:42,height:42,background:"transparent",border:"none",marginLeft:35},icon:t.jsx(h,{src:D,preview:!1,style:{width:42,height:42}}),type:"default"})})]})]})]})})}export{st as default};
