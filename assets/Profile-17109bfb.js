import{n as l,bq as c,l as x,o as d,br as f,M as b,s as t,S as h,C as w,R as s,t as o,B as j,D as C,w as T,z as S}from"./index-7582bd3c.js";import{s as v,c as m}from"./Loading-91356047.js";import{T as g}from"./index-7c2e2afb.js";import"./CheckOutlined-f18a4548.js";import"./index-95c60d8a.js";import"./TextArea-1a61c28a.js";function A(){const[n,y]=l.useState(new c),a=async()=>{const e=await c.create();y(e)},p=async()=>{try{v(),await n.withdraw()}catch(e){C(e!=null&&e.message&&e.message.length<70?e.message:"claim failed"),m()}},r=async(e,i)=>{if(await T.instance.getAddress()!==e)return Promise.resolve();m(),S(`Claimed: ${i} ${n.tokenSymbol}`),await a()},u=x();return l.useEffect(()=>{d.instance.on(f.event,r);async function e(){await a()}try{e()}catch(i){b.error(i!=null&&i.message&&i.message.length<30?i.message:"claim failed")}return()=>{d.instance.off(f.event,r)}},[u.pathname]),t.jsx(t.Fragment,{children:t.jsxs(h,{direction:"vertical",size:"large",style:{display:"grid",justifyContent:"center",alignContent:"center",minHeight:`${w}`,marginTop:-230},children:[t.jsx(s,{gutter:0,children:t.jsxs(o,{span:"24",style:{maxWidth:"100%"},children:[t.jsx(g.Text,{style:{fontSize:90,fontWeight:700,fontFamily:"Eras Bold ITC",display:"flex",justifyContent:"center",alignContent:"center",WebkitTextFillColor:"white",WebkitTextStroke:"2px #8C59F9"},children:"Balance"}),t.jsx(g.Text,{style:{fontSize:60,fontFamily:"Arimo Hebrew Subset",fontWeight:700,color:"white",display:"flex",justifyContent:"center",alignContent:"center"},children:`${n.Amount} ${n.tokenSymbol}`})]})}),t.jsx(h,{style:{display:"flex",justifyContent:"center",alignContent:"center"},children:t.jsx(j,{style:{fontSize:40,fontWeight:700,width:556,height:100,color:"white"},shape:"round",onClick:p,disabled:n.isEmpty,children:"Claim"})}),t.jsxs("div",{style:{width:"calc(90vw)",height:"calc(42vh)",position:"fixed",bottom:0,left:"50%",transform:"translate(-50%, 0)",zIndex:-1},children:[t.jsx("div",{style:{position:"absolute",width:"100%",height:"100%",borderTopLeftRadius:40,borderTopRightRadius:40,border:"4px solid #6d89f5",borderBottom:"none",background:"linear-gradient(90deg, #2A5698 0%, #6706B2 100%)",opacity:.7,zIndex:-1}}),t.jsxs(s,{style:{width:"100%",height:80,position:"relative"},children:[t.jsx("div",{style:{width:480,height:77,background:"#4222c3",borderBottomLeftRadius:40,borderBottomRightRadius:40,position:"absolute",left:"50%",top:4,transform:"translate(-50%, 0)",opacity:.7}}),t.jsx("div",{style:{width:480,height:70,top:3,background:"#4c50b7",borderBottomLeftRadius:40,borderBottomRightRadius:40,position:"absolute",left:"50%",transform:"translate(-51%, 0)",opacity:.7}}),t.jsx("label",{style:{position:"absolute",color:"#FAFF16",fontSize:30,fontFamily:"Eras Bold ITC",width:480,height:70,left:"50%",transform:"translate(-30%,25%)"},children:"Recent transactions"})]}),t.jsxs(s,{style:{width:"99.6%",height:50,background:"#4c50b7",margin:"0 auto",marginTop:30},children:[t.jsx(o,{span:8,style:{display:"flex",justifyContent:"center",alignContent:"center"},children:t.jsx("p",{style:{fontSize:24,color:"#faff16",fontFamily:"Arimo Hebrew Subset",fontWeight:700,marginTop:10},children:"Game ID"})}),t.jsx(o,{span:8,style:{display:"flex",justifyContent:"center",alignContent:"center"},children:t.jsx("p",{style:{fontSize:24,color:"#faff16",fontFamily:"Arimo Hebrew Subset",fontWeight:700,marginTop:10},children:"Draw Time"})}),t.jsx(o,{span:8,style:{display:"flex",justifyContent:"center",alignContent:"center"},children:t.jsx("p",{style:{fontSize:24,color:"#faff16",fontFamily:"Arimo Hebrew Subset",fontWeight:700,marginTop:10},children:"Type"})})]})]})]})})}export{A as default};
