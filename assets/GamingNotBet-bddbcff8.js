import{N as z,n as u,G as L,m as k,F as p,H as B,D as C,s as e,J as v,B as w,S as g,R as o,t as h,I as b,w as A,A as x,z as F,u as G,l as H,K as W,C as N,v as M,x as R,o as I,L as E,M as D}from"./index-7582bd3c.js";import{C as U}from"./closable-3c26f926.js";import{s as O,c as T}from"./Loading-91356047.js";import{M as Q,P,I as K}from"./information-dd32c3fb.js";import{S as Y}from"./index-9a70c031.js";import{C as J}from"./CountDownFrame-88d3e62d.js";import{T as V}from"./index-7c2e2afb.js";import"./index-95c60d8a.js";import"./useForceUpdate-5fdf563e.js";import"./CheckOutlined-f18a4548.js";import"./TextArea-1a61c28a.js";class X{static uuidGen(r,l){const c="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz".split(""),t=[];let i;if(l=l||c.length,r)for(i=0;i<r;i++)t[i]=c[0|Math.random()*l];else{let d;for(t[8]=t[13]=t[18]=t[23]="-",t[14]="4",i=0;i<36;i++)t[i]||(d=0|Math.random()*16,t[i]=c[i===19?d&3|8:d])}return t.join("")}static generateRandomNumber(r,l){const c=Math.random()*(l-r)+r;return Math.floor(c)}}const Z="/assets/buy_ticket_bg_vector-0731bf82.png",_="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAGUSURBVHgB7VbRccMgDJUzgUdgg3qDjlBv0BHMBvYmzgZuJvB1g25gb5BuoEIqLgrBIAf+knfHcQbp6SGwAOCFABBRmbbYBplwPJZT6uCCY0EBKBLhB/cdzHdtWm/azOwszjTWBXyUSETMkOZmlGMM+C9REZHgHa3QrdSSt55NQ2NHvM2K3hKxJcAP3jPCybQaEqBAXEgfEJE+W7RyB71hs0lmxgfm/wl7QEpd2oeI3QWRec22Q8EOAS6FY8IuKoBsJreFIAyuWOoU5AuoWTbvztAh4NNSf6yqaoVMGI5f053oU0sEfFD/BeXguN6TlixdjcA2uQVk57ZV9PuJSLltBEuK9wB5WKE08FouFRQC/pfqSz3w50IZWKl/g3JQ1P+AQMA39S2Ug+M6JS2pcLjymbx8BHziwsadZtxTPuNcorLuO/HLSMODwOt1vu8yImfNUtfDTqDgOpeQ8Dt9lKyCztDE/AbIAWXi7Amxz6+G2Sgam/D2+fbw9vki/GdWCjMWLGS+kI4C8KwsNGa3LPvXfeG58Adarnz4vNBoNgAAAABJRU5ErkJggg==",q="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAEISURBVHgB7ZXhEYIwDIVbzwFwA0dhE9nAOgF1sjqCG+AGsEFs7tIz9FoKFNQf/e4UjiYvj7Q5hCgUCgQAXOyvh/3psJarK5mBzl7O4jsMUsrT6ImzN5U1JyaFr3EQP+avDAz4Z7tj+CHZCqtZozav5Qco77S2gZhVZwC1mC5OmooFVp6ROteADW+YnsYac5I0JZgNDBhKU0uSKtcukW/AEXzz1BSk25VmmFqMGXBT8BD5POma3gJqfcvadvHW12xBzfRU9BDahSuMP0Y6ELPYAOVpGKNCQa64AW/8cg1QbgOfiehXiecYiGmUj9GR3eO8VnNanLsNlpe74R248YUdwRe9i0KhQLwBTDvXbFf0UTgAAAAASUVORK5CYII=",{Countdown:$}=Y,ee=()=>X.generateRandomNumber(1e5,999999),te=/^(?:[1-9]\d{0,5}|999999)$/,ne=z.create(()=>{const a=u.useRef(null),[r,l]=u.useState(`${ee()}`),[c,t]=u.useState(new L),i=n=>{const s=n.target.value;if(d(s))l(parseInt(`${s}`,10).toString());else{const f=s.replace(/[^0-9]/g,"");f.length>6?n.target.value=f.slice(-6):n.target.value=f,d(n.target.value)?l(parseInt(`${n.target.value}`,10).toString()):l("")}},d=n=>n===void 0?!1:te.test(n),y=k(),j=async()=>{const n=p.getData("LATEST_GAME_ID");if(B(n)){C("Invalid lottery id");return}try{if(!d(r))throw new Error("Invalid lucky number input");O(),await(await(await A.instance.getContract(x.LotteryGameSellSystem)).buyLotteryTicketETH(n,parseInt(r),p.ticketPrice)).wait(),T(),F("Buy ticket successfully"),y.hide()}catch(s){C(s!=null&&s.message&&s.message.length<60?s.message:"Buy ticket failed"),T()}},m=()=>{y.hide()};return u.useEffect(()=>{const n=p.getData("LATEST_GAME_ID");if(B(n)){C("Invalid lottery id");return}n&&(async()=>{const S=await(await A.instance.getContract(x.LotteryGameSystem)).getGame(n);S&&t(S),a.current&&(a.current.focus(),a.current.value=`${r}`)})()}),e.jsx(Q,{...v(y),title:"",centered:!0,closable:!1,width:1160,footer:[e.jsx(w,{onClick:j,disabled:!d(r),className:"start-btn",style:{width:460,height:100,borderRadius:40,fontSize:40,fontWeight:700,display:"grid",alignItems:"center",margin:"0 auto"},children:"Pay to win"})],children:e.jsxs(g,{direction:"vertical",style:{width:"100%",position:"relative"},children:[e.jsxs(o,{style:{position:"absolute",width:"100%",left:0,top:0},children:[e.jsx(h,{span:23}),e.jsx(h,{span:1,children:e.jsx(b,{preview:!1,src:U,style:{cursor:"pointer",width:48,height:48},onClick:()=>y.hide()})})]}),e.jsx(o,{style:{width:"100%",height:50,display:"flex",alignItems:"center",justifyContent:"center"},children:e.jsx("label",{style:{color:"white",fontFamily:"Arimo Hebrew Subset",fontSize:30,fontWeight:"bold"},children:"SETTING LUCKY NUMBER"})}),e.jsx(o,{style:{width:"100%",height:100,display:"flex",alignItems:"center",justifyContent:"center"},children:e.jsx("input",{ref:a,style:{paddingLeft:20,color:"white",fontFamily:"Arimo Hebrew Subset",fontSize:90,fontWeight:"bold",letterSpacing:22,display:"flex",alignItems:"center",justifyContent:"center",height:"100%",width:500,backgroundColor:"transparent",border:"none",textAlign:"center",caretColor:"#05e6c4"},autoComplete:"off",inputMode:"decimal",name:"depositAmount",onChange:i})}),e.jsxs(o,{style:{width:"100%",height:100,display:"flex",justifyContent:"center"},children:[e.jsx("label",{style:{fontFamily:"Arimo Hebrew Subset",fontSize:30,fontWeight:"bold",color:"#91A7BE"},children:"The prize amount is determined by the Lucky Numbers"}),e.jsx(b,{src:Z,preview:!1})]}),e.jsxs(o,{style:{width:"100%",height:300,marginTop:30},children:[e.jsxs(o,{style:{width:"100%"},children:[e.jsx(h,{span:12,style:{paddingLeft:150},children:e.jsxs(g,{direction:"horizontal",children:[e.jsx(b,{src:q,preview:!1}),e.jsx("label",{style:{color:"white",fontFamily:"Arimo Hebrew Subset",fontSize:30,fontWeight:"bold",paddingLeft:30},children:"Tickets Left"})]})}),e.jsx(h,{span:12,children:e.jsx("label",{style:{color:"white",fontFamily:"Arimo Hebrew Subset",fontSize:30,fontWeight:"bold",paddingLeft:220},children:c.remainingTicket})})]}),e.jsxs(o,{style:{width:"100%"},children:[e.jsx(h,{span:12,style:{paddingLeft:150},children:e.jsxs(g,{direction:"horizontal",children:[e.jsx(b,{src:_,preview:!1}),e.jsx("label",{style:{color:"white",fontFamily:"Arimo Hebrew Subset",fontSize:30,fontWeight:"bold",paddingLeft:30},children:"Time Left"})]})}),e.jsx(h,{span:12,children:e.jsx("label",{children:e.jsx($,{valueStyle:{color:"white",fontFamily:"Arimo Hebrew Subset",fontSize:30,fontWeight:"bold",paddingLeft:220},value:c.endTime*1e3,onFinish:m})})})]}),e.jsxs(o,{style:{width:"100%"},children:[e.jsx(h,{span:12,style:{paddingLeft:150},children:e.jsx(g,{direction:"horizontal",children:e.jsx("label",{style:{color:"white",fontFamily:"Arimo Hebrew Subset",fontSize:30,fontWeight:"bold",paddingLeft:70},children:"Winning Chance"})})}),e.jsx(h,{span:12,children:e.jsx("label",{style:{color:"white",fontFamily:"Arimo Hebrew Subset",fontSize:30,fontWeight:"bold",paddingLeft:220},children:"100%"})})]}),e.jsxs(o,{style:{width:"100%"},children:[e.jsx(h,{span:12,style:{paddingLeft:150},children:e.jsx(g,{direction:"horizontal",children:e.jsx("label",{style:{color:"white",fontFamily:"Arimo Hebrew Subset",fontSize:30,fontWeight:"bold",paddingLeft:70},children:"Jackpot"})})}),e.jsx(h,{span:12,children:e.jsxs("label",{style:{color:"white",fontFamily:"Arimo Hebrew Subset",fontSize:30,fontWeight:"bold",paddingLeft:220},children:[p.ticketPrice," ",c.tokenSymbol]})})]})]})]})})});function me(){const a=G(),r=H(),l=W(),c=k(ne),[t,i]=u.useState(new L),d=async(m,n)=>{const f=await(await A.instance.getContract(x.LotteryGameSystem)).getGame(m,!0);i(f),await A.instance.getAddress()===n&&l(`/game/${f.isFull?"joined":"waiting"}/${m}`)};u.useEffect(()=>{async function m(){const n=a.id,f=await(await A.instance.getContract(x.LotteryGameSystem)).getGame(n);return i(f),I.instance.on(E.event,d),()=>I.instance.off(E.event,d)}m()},[r.pathname]);const y=()=>{if(!a||!(a!=null&&a.id))D.error("Invalid lottery id");else{const m=a.id;p.setData("LATEST_GAME_ID",m),c.show()}},j=()=>{l("/")};return e.jsx(e.Fragment,{children:e.jsxs(g,{direction:"vertical",size:"large",style:{minHeight:`${N}`,width:"100%",display:"flex",justifyContent:"center"},children:[e.jsx(o,{gutter:0,style:{alignItems:"center",background:"rgba(33, 60, 153, 0.70)",flexShrink:0,width:"100%",display:"flex",flexDirection:"column",position:"absolute",top:120},children:e.jsx(h,{span:24,style:{flex:1,paddingBottom:10,paddingTop:10},children:e.jsx(V.Text,{style:{fontSize:50,fontFamily:"Eras Bold ITC",color:"#52c41a",display:"flex",paddingLeft:120,paddingRight:120,justifyContent:"center",background:"linear-gradient(to right, #FDECB2, #FDA6EC, #CD59CC)",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent",lineHeight:1.2,width:"100%",maxHeight:"2.4em",overflow:"hidden",textOverflow:"ellipsis"},children:t.ad})})}),e.jsx(o,{style:{display:"flex",justifyContent:"center",alignContent:"center"},children:e.jsx("label",{style:{color:"white",fontFamily:"Arimo Hebrew Subset",fontSize:30,fontWeight:"bold"},children:"Jackpot"})}),e.jsx(o,{style:{display:"flex",justifyContent:"center",alignContent:"center"},children:e.jsxs("label",{style:{color:"#fcdf47",fontFamily:"Arimo Hebrew Subset",fontSize:80,fontWeight:"bold"},children:[t.TicketPrice," ",t.tokenSymbol]})}),e.jsx(g,{direction:"horizontal",size:"small",hidden:!t.hasHash,style:{display:"flex",justifyContent:"center",alignContent:"center"},children:e.jsxs(w,{type:"text",style:{display:"flex"},target:"_blank",href:`${M(A.instance.chainId)}/tx/${t.transactionHash}`,disabled:!t.hasHash,children:[e.jsxs("p",{style:{color:"#91a7be",fontSize:30,fontFamily:"Arimo Hebrew Subset",fontWeight:"bold",marginLeft:-10},children:["TX: ",t.shortHash]}),e.jsx("svg",{style:{marginTop:2,marginLeft:30,color:"#91a7be",fontSize:40,display:"none"},stroke:"currentColor",fill:"none",strokeWidth:"0",viewBox:"0 0 24 24",focusable:"false",height:"1em",width:"1em",xmlns:"http://www.w3.org/2000/svg",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"})})]})}),e.jsx(o,{style:{display:"flex",justifyContent:"center",alignContent:"center"},children:e.jsxs("label",{style:{fontFamily:"Eras Bold ITC",fontSize:50,color:"#eb91ff"},children:["100%"," ",e.jsx("span",{style:{color:"white",fontFamily:"Arimo Hebrew Subset",fontSize:40,fontWeight:"bold"},children:"Winning Rate"})]})}),e.jsxs(g,{direction:"vertical",style:{width:"100%",display:"flex",justifyContent:"center",alignItems:"center"},children:[e.jsxs("label",{style:{fontFamily:"Arimo Hebrew Subset",fontSize:30,color:"#91a7be"},children:["Remaining Tickets: ",t.remainingTicket]}),e.jsx(J,{timeLeft:t.endTime*1e3-new Date().getTime(),onFinished:j})]}),e.jsxs(g,{style:{width:"100%",display:"flex",justifyContent:"center",marginTop:30,marginLeft:40},children:[e.jsxs(w,{onClick:y,className:"start-btn",style:{fontFamily:"Arimo Hebrew Sunset",width:654,height:100,borderRadius:40,fontSize:40,fontWeight:700},children:["Just Pay: ",t.TicketPrice," ",t.tokenSymbol]}),e.jsx(P,{content:R,title:"Rules",placement:"right",children:e.jsx(w,{style:{width:42,height:42,background:"transparent",border:"none",marginLeft:35},icon:e.jsx(b,{src:K,preview:!1,style:{width:42,height:42}}),type:"default"})})]})]})})}export{me as default};
