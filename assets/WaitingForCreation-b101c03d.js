import{u as m,m as u,o as r,p as o,s as l,v as e,S as h,C as y,bw as p,B as x,x as b,y as c}from"./index-d1a429a6.js";function j(){const d=m(),f=u(),[t]=r.useState(d.hash),[g,s]=r.useState(0),i=async(n,a)=>{if(await c.instance.getAddress()!==a)return Promise.resolve();f(`/lottery/created/${n}`)};return r.useEffect(()=>{o.instance.on(l.event,i);let n=null;return s(0),n||(n=setInterval(()=>{s(a=>a+1)},1e3)),()=>{o.instance.off(l.event,i),s(0),clearInterval(n)}},[]),e.jsx(e.Fragment,{children:e.jsxs(h,{direction:"vertical",size:"large",style:{display:"grid",justifyContent:"center",alignContent:"center",minHeight:`${y}`},children:[e.jsx("label",{style:{fontFamily:"Arimo Hebrew Subset",fontSize:80,fontWeight:700,background:"linear-gradient(270deg, #C879F9 0%, #6C7EFC 50%, #74F0B2 100%)",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent",backgroundClip:"text"},children:"Best of luck to you!"}),e.jsxs("label",{style:{fontFamily:"Arimo Hebrew Subset",fontSize:50,fontWeight:700,color:"white",display:"flex",justifyContent:"center"},children:["Waiting for creation:"," ",p().startOf("day").add(g,"second").format("HH:mm:ss")]}),e.jsxs(x,{type:"text",style:{display:"flex",justifyContent:"center"},target:"_blank",href:`${b(c.instance.chainId)}/tx/${t}`,children:[e.jsxs("p",{style:{color:"#91a7be",fontSize:30,fontFamily:"Arimo Hebrew Subset",fontWeight:700,marginLeft:-10},children:["TX:"," ",t&&t.length>10?t.substring(0,9)+"..."+t.substring(t.length-6):""]}),e.jsx("svg",{style:{marginTop:2,marginLeft:30,color:"#91a7be",fontSize:40,display:"none"},stroke:"currentColor",fill:"none",strokeWidth:"0",viewBox:"0 0 24 24",focusable:"false",height:"1em",width:"1em",xmlns:"http://www.w3.org/2000/svg",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"})})]})]})})}export{j as default};