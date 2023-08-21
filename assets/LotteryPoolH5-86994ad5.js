import{n as m,o as u,p as E,$ as z,s as t,R as r,t as x,I as F,a0 as G,B as b,N,a1 as R,a2 as H,A as p,M as S,l as U,a3 as O,S as D,C as $,a4 as _,a5 as Q,a6 as X,P as Z,X as q}from"./index-72e81a96.js";import{s as M,c as j}from"./Loading-e013e729.js";import{L as W,P as V,a as J,b as K,c as Y,I as tt,d as et,e as st,T as it}from"./TicketRowItemDTO-4d3f5b22.js";import{E as nt}from"./index-89220189.js";import"./useForceUpdate-ba842ce9.js";import"./index-4201a77c.js";import"./CheckOutlined-17ad1fa4.js";import"./SearchOutlined-8923da20.js";import"./useLocale-3f01f25f.js";function at(I){const[o,g]=m.useState(I.item.tickets),T=async i=>{try{M(),await i.doWithStatus()||N("ticket can not be used now.")}catch(e){j(),N(e!=null&&e.message&&e.message<30?e.message:"transaction failed")}},w=async i=>{const e=o.find(a=>a.LotteryGameId===i&&a.waitVerify);if(e){const a=await R.create(e.LotteryTicketId);e.LotteryGameStatus=H.Awarded,e.RewardAmount=a.RewardAmount,g([...o])}j()},c=async(i,e,a)=>{if(await p.instance.getAddress()!==a)return Promise.resolve();const l=o.find(C=>C.LotteryTicketId===i&&C.LotteryGameId===e);l&&(l.IsRewardBonus=!0,l.LotteryGameStatus=H.Closed,g([...o])),j()},v=async()=>{const i=await p.instance.getContract(S.LotteryGameTicketNFTSystem),e=[];for(let a=0;a<o.length;a++){const h=o[a];if(h.index>=0)try{const l=await i.getTicketByIndex(h.index);e.push(l)}catch{e.push(h)}}e.length>0&&g(e)};return m.useEffect(()=>(u.instance.on(E.event,w),u.instance.on(z.event,c),v(),()=>{u.instance.off(E.event,w),u.instance.off(z.event,c)}),[o]),t.jsx(t.Fragment,{children:t.jsx(r,{style:{width:"100%",transform:"scale(0.6)"},children:o.map(i=>t.jsx(x,{span:24,style:{display:"grid",justifyContent:"center",alignItems:"center"},children:t.jsx(W,{split:!1,style:{width:594,height:160},dataSource:[i],renderItem:e=>t.jsx(W.Item,{children:t.jsxs(r,{style:{position:"relative",width:"100%"},children:[t.jsx(F,{src:e.ticketStatus<=G.Verify?V:e.RewardLevel===0?J:e.RewardLevel===1?K:e.RewardLevel===2?Y:V,preview:!1,style:{width:594,position:"absolute"}}),t.jsx(F,{src:e.RewardLevel===0?tt:e.RewardLevel===1?et:e.RewardLevel===2?st:"",style:{display:`${e.ticketStatus>G.Verify&&e.RewardLevel<3?"":"none"}`,position:"absolute",width:48,left:570,top:-20}}),t.jsx(x,{span:8}),t.jsxs(x,{span:16,style:{color:"white"},children:[t.jsx(r,{style:{height:30}}),t.jsx(r,{style:{height:38},children:t.jsxs("label",{style:{fontFamily:"Arimo Hebrew Subset",fontWeight:"bold",paddingLeft:30,fontSize:20},children:["Game ID: ",e.LotteryGameId]})}),t.jsxs(r,{style:{height:38,position:"relative"},children:[t.jsxs("label",{style:{fontFamily:"Arimo Hebrew Subset",fontWeight:"bold",paddingLeft:30,fontSize:20},children:["Prize:"," ",t.jsxs("span",{style:{color:"#fcdc36"},children:[e.RewardAmount," ",e.tokenSymbol]})]}),t.jsx("label",{})]}),t.jsx(r,{style:{height:38},children:t.jsxs("label",{style:{fontFamily:"Arimo Hebrew Subset",fontWeight:"bold",paddingLeft:30,fontSize:20},children:["Draw Time: ",e.drawTime]})}),t.jsx(r,{style:{height:80,display:"flex",justifyContent:"center",alignItems:"center"},children:t.jsx(b,{shape:"round",style:{fontSize:20,width:328,height:37,fontWeight:"bold",color:"white"},disabled:e.IsRewardBonus||!e.LotteryTicketId||e.isGaming,onClick:async()=>await T(e),children:e.LotteryTicketId?e.btnTxt:"loading..."})})]})]})})})},`ticket_${i.LotteryTicketId??i.id}`))})})}const ot={display:"flex",alignContent:"center",justifyContent:"center"},rt=t.jsx(X,{style:{fontSize:36},spin:!0}),k=6;function pt(){const I=U(),[o,g]=m.useState(!1),[T,w]=m.useState(1),[c,v]=m.useState(0),[i,e]=m.useState([]),a=(s,n)=>{if(n<=0)return Promise.resolve();const B=k*s>n?n-(s-1)*k:k,d=n-(s-1)*k-1,L=[];for(let f=0;f<B;f++){const A=new R;A.index=d-f,L.push(A)}e((s===1?[]:i).concat(it.createList(L,1)))},h=async()=>{const s=T+1;w(s),a(s,c)},l=async()=>{g(!0);const n=await(await p.instance.getContract(S.LotteryGameTicketNFTSystem)).ticketCountOf(Z.userAddress);w(1),v(n),a(1,n),g(!1)},C=async()=>{M();const s=await p.instance.getContract(S.LotteryGameTicketNFTSystem),n=await p.instance.getAddress(),{tickets:B}=await s.ticketsOf(n,k*T);let d=B.filter(y=>y.waitClaim).map(y=>parseInt(y.LotteryTicketId));if(d.length<=0)return j(),Promise.resolve();d.length>16&&(d=d.slice(0,16));const L=p.instance.getContract(S.ClientLotteryGameSystem);try{await L.batchClaimTickets(d),d.forEach(y=>{const f=new R;f.LotteryTicketId=y.toString(),f.clearCache()})}catch{q.error("Batch claim failed."),j()}},P=()=>{window.location.reload()};return m.useEffect(()=>(u.instance.on(O.event,P),l(),()=>u.instance.off(O.event,P)),[I.pathname]),i.length===0&&!o?t.jsx(t.Fragment,{children:t.jsx(D,{direction:"vertical",style:{height:`${$}`,display:"flex",justifyContent:"center",alignContent:"center"},children:t.jsx(nt,{image:"https://gw.alipayobjects.com/zos/antfincdn/ZHrcdLPrvN/empty.svg",imageStyle:{height:200},description:t.jsx("span",{style:{fontFamily:"Arimo Hebrew Subset",fontSize:30,fontWeight:700,background:"linear-gradient(270deg, #C879F9 0%, #6C7EFC 50%, #74F0B2 100%)",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent",backgroundClip:"text"},children:"No Tickets."}),style:{textAlign:"center"}})})}):t.jsxs(t.Fragment,{children:[t.jsxs(_,{style:{width:"100%",height:"100%",background:"transparent",left:0,display:o?"flex":"none",position:"fixed",zIndex:999},children:[t.jsx("div",{style:{width:5e3,height:5e3,background:"rgba(0,0,0,0.5)",position:"absolute",top:-1e3}}),t.jsx(D,{direction:"vertical",style:{height:"100%",display:"grid",justifyContent:"center",alignContent:"center"},children:t.jsx(Q,{size:"large",indicator:rt})})]}),t.jsxs(r,{style:{...ot,position:"relative",width:"100%"},children:[t.jsx(x,{span:24,children:i.map(s=>t.jsx(at,{item:s},s.id))}),t.jsxs(r,{style:{display:o||c===0?"none":"",marginTop:12,width:"100%",height:32},children:[t.jsx(r,{style:{width:"100%",display:"flex",justifyContent:"center"},children:t.jsx(b,{shape:"round",onClick:h,style:{color:"white",fontFamily:"Eras Bold ITC",marginTop:20,marginBottom:20},children:"load more"})}),t.jsxs(r,{style:{display:"none",width:"100%"},children:[t.jsx(x,{span:12,style:{display:c===i.map(s=>s.tickets.length).reduce((s,n)=>s+n,0)?"none":"flex",justifyContent:"right"},children:t.jsx(b,{shape:"round",onClick:h,style:{color:"white",fontFamily:"Eras Bold ITC",marginRight:150,marginBottom:20},children:"load more"})}),t.jsx(x,{span:c===i.map(s=>s.tickets.length).reduce((s,n)=>s+n,0)?24:12,style:{display:c===i.map(s=>s.tickets.length).reduce((s,n)=>s+n,0)?"flex":"",justifyContent:c===i.map(s=>s.tickets.length).reduce((s,n)=>s+n,0)?"center":""},children:t.jsx(b,{shape:"round",style:{color:"white",marginLeft:150,marginBottom:20},onClick:()=>C(),children:"Claim All"})})]})]})]})]})}export{pt as default};
