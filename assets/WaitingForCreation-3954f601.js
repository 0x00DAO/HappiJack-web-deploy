import{u as d,a9 as g,n as r,o as e,S as m,C as h,B as p,p as b,q as l,bs as x,a8 as y}from"./index-bee4d731.js";function C(){const c=d(),i=g(),[t]=r.useState(c.hash),[f,s]=r.useState(0),u=async()=>{const n=l.instance.provider;if(!n)return Promise.resolve();const a=await n.getTransaction(t);if(!a||a.blockNumber===null)return Promise.resolve();const o=await n.getTransactionReceipt(t);o||i("/"),o.status===0?y.error("Transaction failed."):i("/")};return r.useEffect(()=>{let n=null;return s(0),n||(n=setInterval(()=>{s(a=>a+1),u()},1e3)),()=>{s(0),clearInterval(n)}},[]),e.jsx(e.Fragment,{children:e.jsxs(m,{direction:"vertical",size:"large",style:{display:"grid",justifyContent:"center",alignContent:"center",minHeight:`${h}`},children:[e.jsx("label",{style:{fontFamily:"Arimo Hebrew Subset",fontSize:70,fontWeight:700,background:"linear-gradient(270deg, #C879F9 0%, #6C7EFC 50%, #74F0B2 100%)",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent",backgroundClip:"text"},children:"Waiting for creation."}),e.jsxs(p,{type:"text",style:{display:"flex",justifyContent:"center"},target:"_blank",href:`${b(l.instance.chainId)}/tx/${t}`,children:[e.jsxs("p",{style:{color:"#91a7be",fontSize:30,fontFamily:"Arimo Hebrew Subset",fontWeight:400,marginLeft:-10},children:["TX:"," ",t&&t.length>10?t.substring(0,7)+"..."+t.substring(t.length-6):""]}),e.jsx("svg",{style:{marginTop:2,marginLeft:30,color:"#91a7be",fontSize:40},stroke:"currentColor",fill:"none",strokeWidth:"0",viewBox:"0 0 24 24",focusable:"false",height:"1em",width:"1em",xmlns:"http://www.w3.org/2000/svg",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"})})]}),e.jsxs("label",{style:{fontFamily:"Arimo Hebrew Subset",fontSize:30,fontWeight:400,color:"#91a7be",display:"flex",justifyContent:"center"},children:["Time:"," ",x().startOf("day").add(f,"second").format("HH:mm:ss")]})]})})}export{C as default};