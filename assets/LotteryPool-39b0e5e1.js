import{n as d,o as w,p as E,$ as z,s as t,R as c,t as j,I as F,a0 as G,B as b,N,a1 as P,a2 as O,A as k,M as I,l as U,a3 as W,S as H,C as $,a4 as _,a5 as Q,a6 as X,P as Z,X as q}from"./index-5b59cbef.js";import{s as M,c as C}from"./Loading-c96ac80f.js";import{L as D,P as V,a as J,b as K,c as Y,I as tt,d as et,e as st,T as it}from"./TicketRowItemDTO-ada4e9c7.js";import{E as nt}from"./index-d86dce5b.js";import"./useForceUpdate-65dc8c3e.js";import"./index-4f1dd7e1.js";import"./CheckOutlined-126f8413.js";import"./SearchOutlined-3aec7ddd.js";import"./useLocale-56823f4c.js";function at(v){const[f]=d.useState(window.innerWidth),[m]=d.useState(window.innerHeight),[o,p]=d.useState(v.item.tickets),h=async a=>{try{M(),await a.doWithStatus()||N("ticket can not be used now.")}catch(i){C(),N(i!=null&&i.message&&i.message<30?i.message:"transaction failed")}},L=async a=>{const i=o.find(e=>e.LotteryGameId===a&&e.waitVerify);if(i){const e=await P.create(i.LotteryTicketId);i.LotteryGameStatus=O.Awarded,i.RewardAmount=e.RewardAmount,p([...o])}C()},r=async(a,i,e)=>{if(await k.instance.getAddress()!==e)return Promise.resolve();const l=o.find(s=>s.LotteryTicketId===a&&s.LotteryGameId===i);l&&(l.IsRewardBonus=!0,l.LotteryGameStatus=O.Closed,p([...o])),C()},B=async()=>{const a=await k.instance.getContract(I.LotteryGameTicketNFTSystem),i=[];for(let e=0;e<o.length;e++){const u=o[e];if(u.index>=0)try{const l=await a.getTicketByIndex(u.index);i.push(l)}catch{i.push(u)}}i.length>0&&p(i)};return d.useEffect(()=>(w.instance.on(E.event,L),w.instance.on(z.event,r),B(),()=>{w.instance.off(E.event,L),w.instance.off(z.event,r)}),[o]),t.jsx(t.Fragment,{children:t.jsx(c,{style:{width:"100%"},children:o.map((a,i)=>t.jsx(j,{span:12,style:{paddingTop:30,paddingBottom:30,paddingLeft:f<=594*2+(m<=900?60:120)?0:m<=900?30:60,paddingRight:f<=594*2+(m<=900?60:120)?0:m<=900?30:60,display:"flex",justifyContent:i%2===0?"right":"left",alignItems:"center"},children:t.jsx(D,{split:!1,style:{width:594,height:230},dataSource:[a],renderItem:e=>t.jsx(D.Item,{children:t.jsxs(c,{style:{position:"relative",width:"100%"},children:[t.jsx(F,{src:e.ticketStatus<=G.Verify?V:e.RewardLevel===0?J:e.RewardLevel===1?K:e.RewardLevel===2?Y:V,preview:!1,style:{width:594,position:"absolute"}}),t.jsx(F,{src:e.RewardLevel===0?tt:e.RewardLevel===1?et:e.RewardLevel===2?st:"",style:{display:`${e.ticketStatus>G.Verify&&e.RewardLevel<3?"":"none"}`,position:"absolute",width:48,left:570,top:-20}}),t.jsx(j,{span:8}),t.jsxs(j,{span:16,style:{color:"white"},children:[t.jsx(c,{style:{height:30}}),t.jsx(c,{style:{height:38},children:t.jsxs("label",{style:{fontFamily:"Arimo Hebrew Subset",fontWeight:"bold",paddingLeft:30,fontSize:20},children:["Game ID: ",e.LotteryGameId]})}),t.jsxs(c,{style:{height:38,position:"relative"},children:[t.jsxs("label",{style:{fontFamily:"Arimo Hebrew Subset",fontWeight:"bold",paddingLeft:30,fontSize:20},children:["Prize:"," ",t.jsxs("span",{style:{color:"#fcdc36"},children:[e.RewardAmount," ",e.tokenSymbol]})]}),t.jsx("label",{})]}),t.jsx(c,{style:{height:38},children:t.jsxs("label",{style:{fontFamily:"Arimo Hebrew Subset",fontWeight:"bold",paddingLeft:30,fontSize:20},children:["Draw Time: ",e.drawTime]})}),t.jsx(c,{style:{height:80,display:"flex",justifyContent:"center",alignItems:"center"},children:t.jsx(b,{shape:"round",style:{fontSize:20,width:328,height:37,fontWeight:"bold",color:"white"},disabled:e.IsRewardBonus||!e.LotteryTicketId||e.isGaming,onClick:async()=>await h(e),children:e.LotteryTicketId?e.btnTxt:"loading..."})})]})]})})})},`ticket_${a.LotteryTicketId??a.id}`))})})}const ot={marginTop:20,marginLeft:180},rt={display:"flex",alignContent:"center",justifyContent:"center"},ct=t.jsx(X,{style:{fontSize:36},spin:!0}),T=6;function xt(){const v=U(),[f,m]=d.useState(!1),[o,p]=d.useState(1),[h,L]=d.useState(0),[r,B]=d.useState([]),a=(s,n)=>{if(n<=0)return Promise.resolve();const R=T*s>n?n-(s-1)*T:T,y=n-(s-1)*T-1,S=[];for(let x=0;x<R;x++){const A=new P;A.index=y-x,S.push(A)}B((s===1?[]:r).concat(it.createList(S)))},i=async()=>{const s=o+1;p(s),a(s,h)},e=async()=>{m(!0);const n=await(await k.instance.getContract(I.LotteryGameTicketNFTSystem)).ticketCountOf(Z.userAddress);p(1),L(n),a(1,n),m(!1)},u=async()=>{M();const s=await k.instance.getContract(I.LotteryGameTicketNFTSystem),n=await k.instance.getAddress(),{tickets:R}=await s.ticketsOf(n,T*o);let y=R.filter(g=>g.waitClaim).map(g=>parseInt(g.LotteryTicketId));if(y.length<=0)return C(),Promise.resolve();y.length>16&&(y=y.slice(0,16));const S=k.instance.getContract(I.ClientLotteryGameSystem);try{await S.batchClaimTickets(y),y.forEach(g=>{const x=new P;x.LotteryTicketId=g.toString(),x.clearCache()})}catch{q.error("Batch claim failed."),C()}},l=()=>{window.location.reload()};return d.useEffect(()=>(w.instance.on(W.event,l),e(),()=>w.instance.off(W.event,l)),[v.pathname]),r.length===0&&!f?t.jsx(t.Fragment,{children:t.jsx(H,{direction:"vertical",style:{height:`${$}`,display:"flex",justifyContent:"center",alignContent:"center"},children:t.jsx(nt,{image:"https://gw.alipayobjects.com/zos/antfincdn/ZHrcdLPrvN/empty.svg",imageStyle:{height:200},description:t.jsx("span",{style:{fontFamily:"Arimo Hebrew Subset",fontSize:70,fontWeight:700,background:"linear-gradient(270deg, #C879F9 0%, #6C7EFC 50%, #74F0B2 100%)",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent",backgroundClip:"text"},children:"No Tickets."}),style:{textAlign:"center"}})})}):t.jsxs(t.Fragment,{children:[t.jsxs(_,{style:{width:"100%",height:"100%",background:"transparent",left:0,display:f?"flex":"none",position:"fixed",zIndex:999},children:[t.jsx("div",{style:{width:5e3,height:5e3,background:"rgba(0,0,0,0.5)",position:"absolute",top:-1e3}}),t.jsx(H,{direction:"vertical",style:{height:"100%",display:"grid",justifyContent:"center",alignContent:"center"},children:t.jsx(Q,{size:"large",indicator:ct})})]}),t.jsxs(c,{style:{...r.length<=1?ot:rt,position:"relative"},children:[t.jsx(j,{span:24,children:r.map(s=>t.jsx(at,{item:s},s.id))}),t.jsxs(c,{style:{display:f||h===0?"none":"",marginTop:12,width:"100%",height:32},children:[t.jsx(c,{style:{width:"100%",display:"flex",justifyContent:"center"},children:t.jsx(b,{shape:"round",onClick:i,style:{color:"white",fontFamily:"Eras Bold ITC",marginBottom:20},children:"load more"})}),t.jsxs(c,{style:{display:"none",width:"100%"},children:[t.jsx(j,{span:12,style:{display:h===r.map(s=>s.tickets.length).reduce((s,n)=>s+n,0)?"none":"flex",justifyContent:"right"},children:t.jsx(b,{shape:"round",onClick:i,style:{color:"white",fontFamily:"Eras Bold ITC",marginRight:150,marginBottom:20},children:"load more"})}),t.jsx(j,{span:h===r.map(s=>s.tickets.length).reduce((s,n)=>s+n,0)?24:12,style:{display:h===r.map(s=>s.tickets.length).reduce((s,n)=>s+n,0)?"flex":"",justifyContent:h===r.map(s=>s.tickets.length).reduce((s,n)=>s+n,0)?"center":""},children:t.jsx(b,{shape:"round",style:{color:"white",marginLeft:150,marginBottom:20},onClick:()=>u(),children:"Claim All"})})]})]})]})]})}export{xt as default};