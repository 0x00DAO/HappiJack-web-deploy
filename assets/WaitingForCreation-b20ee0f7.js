import{u as h,aa as p,n,o as t,S as y,C as b,bo as x,B as v,p as S,q as c,a8 as C,bp as j}from"./index-a75262bc.js";function w(){const u=h(),r=p(),[e]=n.useState(u.hash),[f,i]=n.useState(0),[m,d]=n.useState(!1),g=async()=>{if(m)return Promise.resolve();const s=c.instance.provider;if(!s)return Promise.resolve();const a=await s.getTransaction(e);if(!a||a.blockNumber===null)return Promise.resolve();const o=await s.getTransactionReceipt(e);o||r("/"),o.status===0?C.error("Transaction failed."):(d(!0),setTimeout(async()=>{const l=await j.queryGameSimpleWithHash(e);r(l?`/lottery/created/${l.lotteryGameId}`:"/")},3e3))};return n.useEffect(()=>{let s=null;return i(0),s||(s=setInterval(()=>{i(a=>a+1),g()},1e3)),()=>{i(0),clearInterval(s)}},[]),t.jsx(t.Fragment,{children:t.jsxs(y,{direction:"vertical",size:"large",style:{display:"grid",justifyContent:"center",alignContent:"center",minHeight:`${b}`},children:[t.jsx("label",{style:{fontFamily:"Arimo Hebrew Subset",fontSize:80,fontWeight:700,background:"linear-gradient(270deg, #C879F9 0%, #6C7EFC 50%, #74F0B2 100%)",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent",backgroundClip:"text"},children:"Best of luck to you!"}),t.jsxs("label",{style:{fontFamily:"Arimo Hebrew Subset",fontSize:50,fontWeight:700,color:"white",display:"flex",justifyContent:"center"},children:["Waiting for creation:"," ",x().startOf("day").add(f,"second").format("HH:mm:ss")]}),t.jsxs(v,{type:"text",style:{display:"flex",justifyContent:"center"},target:"_blank",href:`${S(c.instance.chainId)}/tx/${e}`,children:[t.jsxs("p",{style:{color:"#91a7be",fontSize:30,fontFamily:"Arimo Hebrew Subset",fontWeight:700,marginLeft:-10},children:["TX:"," ",e&&e.length>10?e.substring(0,9)+"..."+e.substring(e.length-6):""]}),t.jsx("svg",{style:{marginTop:2,marginLeft:30,color:"#91a7be",fontSize:40,display:"none"},stroke:"currentColor",fill:"none",strokeWidth:"0",viewBox:"0 0 24 24",focusable:"false",height:"1em",width:"1em",xmlns:"http://www.w3.org/2000/svg",children:t.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"})})]})]})})}export{w as default};
