import{u as k,l as v,V as E,n,G as F,s as t,S as i,C as L,I as r,R as a,t as H,B as m,z as I,A as l,P as c,Y as z,X as G,M as D,K as _,L as B,ag as W}from"./index-5b59cbef.js";import{C as $}from"./CountDownFrame-04e79611.js";import{L as M}from"./logo_jackpot-683e73df.js";import{T as h}from"./index-b473f114.js";import"./CheckOutlined-126f8413.js";import"./useLocale-56823f4c.js";import"./TextArea-7972c2ef.js";import"./index-4f1dd7e1.js";const R="/assets/balloon-2a0bd01a.png",U="/assets/fireworks-e4a0a555.png";function Q(){const f=k(),y=v(),p=E(),[e,u]=n.useState(new F),[g,x]=n.useState(0),[w,j]=n.useState("0"),[s]=n.useState(window.innerHeight);async function S(){const o=f.id,b=await(await l.instance.getContract(D.LotteryGameSystem)).getGame(o,!0);u(b);const A=await l.instance.getAddress();_.instance.trackGameLogic(B.CREATE_GAME_SUCCESS,{token_id:o,creator_address:A})}async function T(){const o=c.lotteryInitTokenAmount?c.lotteryInitTokenAmount.toString():"0";j(o);const d=await W.queryTokenToUSDTPrice(Number(o));x(d)}n.useEffect(()=>{T(),S()},[y.pathname]);const C=()=>p("/");return t.jsx(t.Fragment,{children:t.jsxs(i,{direction:"vertical",size:"large",style:{minHeight:`${L}`,width:"100%",margin:"0 auto",position:"relative",transform:`scale(${s<=900?.88:1})`},children:[t.jsx(r,{src:R,preview:!1,style:{width:327,position:"absolute",left:s<=900?30:100,top:s<=900?-60:-20}}),t.jsxs("div",{style:{height:s<=900?80:150},children:[t.jsx(a,{gutter:0,style:{display:"flex",justifyContent:"center",alignItems:"center"},children:t.jsxs(H,{span:"auto",style:{maxWidth:"100%",position:"relative"},children:[t.jsx(h.Text,{style:{fontFamily:"Eras Bold ITC",fontSize:70,color:"#eb91ff",display:"flex",opacity:.9},children:"Created Successfully"}),t.jsx(h.Text,{style:{fontFamily:"Eras Bold ITC",fontSize:70,color:"white",display:"flex",opacity:.9,position:"absolute",top:-6,left:-3},children:"Created Successfully"})]})}),t.jsx(i,{direction:"horizontal",size:"small",hidden:!e.hasHash,style:{display:"flex",justifyContent:"center",marginTop:-20},children:t.jsxs(m,{type:"text",style:{display:"flex"},target:"_blank",href:`${I(l.instance.chainId)}/tx/${e.transactionHash}`,disabled:!e.hasHash,children:[t.jsxs("p",{style:{color:"#91a7be",fontSize:30,fontFamily:"Arimo Hebrew Subset",fontWeight:"bold",marginLeft:-10},children:["TX: ",e.shortHash]}),t.jsx("svg",{style:{marginTop:2,marginLeft:30,color:"#91a7be",fontSize:40,display:"none"},stroke:"currentColor",fill:"none",strokeWidth:"0",viewBox:"0 0 24 24",focusable:"false",height:"1em",width:"1em",xmlns:"http://www.w3.org/2000/svg",children:t.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"})})]})})]}),t.jsx(a,{style:{display:"flex",justifyContent:"center"},children:t.jsx(r,{src:M,preview:!1,style:{width:300}})}),t.jsx(a,{style:{display:"flex",justifyContent:"center",marginTop:-20},children:t.jsxs("label",{style:{color:"#FCDC36",fontFamily:"Arimo Hebrew Subset",fontSize:40,fontWeight:"bold"},children:[e.TotalAmount!=="0"?e.TotalAmount:w," ",e.tokenSymbol]})}),t.jsx(a,{style:{width:"100%",display:"flex",justifyContent:"center",marginTop:-26},children:t.jsx("label",{style:{fontFamily:"Arimo Hebrew Subset",fontSize:20,color:"white"},children:e.TotalAmount!=="0"?e.totalAmountUSD:`≈ ${g.toFixed(4).replace(/\.?0*$/,"")} USD`})}),t.jsxs("p",{style:{paddingLeft:s<=900?60:160,paddingRight:s<=900?60:160,fontFamily:"Arimo Hebrew Subset",fontWeight:700,fontSize:s<=900?30:50,color:"white",marginTop:s<=900?-20:0},children:["Embark on my journey of luck, where sharing leads to"," ",t.jsx("span",{style:{color:"#EB91FF",fontSize:s<=900?36:60,fontFamily:" Eras Bold ITC"},children:"300%"})," ","profits and boundless traffic"]}),t.jsxs(i,{direction:"vertical",style:{width:"100%",display:"flex",alignItems:"center",marginTop:s<=900?-70:0},children:[t.jsxs("div",{style:{fontFamily:"Arimo Hebrew Subset",fontSize:30,color:"#91a7be",height:10,marginLeft:20},children:["Remaining:"," ",e.remainingTicket===0?c.ticketMaxCount:e.remainingTicket]}),t.jsx($,{timeLeft:e.endTime*1e3-new Date().getTime(),onFinished:C})]}),t.jsxs(i,{style:{display:"flex",justifyContent:"center",alignContent:"center",position:"relative",marginTop:s<=900?0:20},children:[t.jsx(z.CopyToClipboard,{text:e.shareTxt,children:t.jsx(m,{shape:"round",style:{fontWeight:700,color:"white",fontSize:40,width:460,height:100},onClick:async()=>G.success("Copied"),children:"Share"})}),t.jsx(r,{src:U,preview:!1,style:{width:354,height:345,position:"absolute",left:130,top:s<=900?-260:-220,transform:`scale(${s<=900?.8:1})`}})]})]})})}export{Q as default};