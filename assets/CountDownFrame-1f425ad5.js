import{n as c,s as e,S as d,R as u,t as o}from"./index-8e7424a2.js";const f={width:268,height:84,color:"#fcad13",fontFamily:"Arimo Hebrew Subset",fontSize:30,fontWeight:"bold"},r={backgroundColor:"#2f3a8e",borderRadius:4,width:36,height:49,display:"flex",justifyContent:"center",alignItems:"center"},y=i=>{if(i<=0)return["0","0","0","0","0","0"];const n=(i%60).toString(),s=(Math.floor(i/60)%60).toString(),l=(Math.floor(i/3600)%99).toString(),t=[];return l.length<2?(t.push("0"),t.push(l)):l.length>=2&&(t.push(l.slice(0,l.length-1)),t.push(l[l.length-1])),s.length<2?(t.push("0"),t.push(s)):(t.push(s[0]),t.push(s[1])),n.length<2?(t.push("0"),t.push(n)):(t.push(n[0]),t.push(n[1])),t};function m(i){const[n,s]=c.useState(["0","0","0","0","0","0"]);let l;return c.useEffect(()=>{const t=h=>(s(y(h)),h<=0?(i.onFinished(),l&&clearInterval(l),!0):!1);let a=Math.ceil(i.timeLeft/1e3);return t(a--)||(l=setInterval(()=>t(a--),1e3)),()=>{l&&clearInterval(l)}},[i.timeLeft]),e.jsx(e.Fragment,{children:e.jsx("div",{style:i.style?{...i.style,...f}:f,children:e.jsxs(d,{direction:"vertical",style:{width:"100%",height:"100%",position:"relative"},children:[e.jsxs(d,{direction:"horizontal",style:{width:"100%",position:"absolute",zIndex:0},children:[e.jsx("div",{style:r,children:n[0]}),e.jsx("div",{style:r,children:n[1]}),e.jsx("label",{style:{color:"#fcad13",fontFamily:"Arimo Hebrew Subset",fontSize:30,fontWeight:"bold"},children:":"}),e.jsx("div",{style:r,children:n[2]}),e.jsx("div",{style:r,children:n[3]}),e.jsx("label",{style:{color:"#fcad13",fontFamily:"Arimo Hebrew Subset",fontSize:30,fontWeight:"bold"},children:":"}),e.jsx("div",{style:r,children:n[4]}),e.jsx("div",{style:r,children:n[5]})]}),e.jsxs(u,{style:{marginTop:50},children:[e.jsx(o,{span:8,style:{display:"flex",justifyContent:"center"},children:e.jsx("label",{style:{fontFamily:"Arimo Hebrew Subset",fontSize:16,fontWeight:"bold",color:"#91a7be",marginLeft:-8},children:"HR"})}),e.jsx(o,{span:8,style:{display:"flex",justifyContent:"center"},children:e.jsx("label",{style:{fontFamily:"Arimo Hebrew Subset",fontSize:16,fontWeight:"bold",color:"#91a7be",marginLeft:18},children:"MIN"})}),e.jsx(o,{span:8,style:{display:"flex",justifyContent:"center"},children:e.jsx("label",{style:{fontFamily:"Arimo Hebrew Subset",fontSize:16,fontWeight:"bold",color:"#91a7be",marginLeft:48},children:"SEC"})})]})]})})})}export{m as C};