import{u,l as b,V as w,n as o,G as r,s as t,R as c,C as x,t as p,S as j,I as i,Y as S,B as C,K as T,Z as v,L as A,A as G,M as k}from"./index-5b59cbef.js";import{C as I}from"./CountDownFrame-04e79611.js";import{R as F,I as _,A as z,G as D}from"./icon_jackpot-004517bb.js";import{N as E}from"./nft_ticket_blank-334531f9.js";import{s as L}from"./SharePopUp-e47917a1.js";import"./index-40b23d00.js";import"./useLocale-56823f4c.js";const H="/assets/joined_tip-023cd6ae.png",N="/assets/joined_ticket_circle-7b2f06be.png";function V(){const h=u(),d=b(),f=w(),[e,n]=o.useState(new r),[a]=o.useState(window.innerHeight),m=()=>f("/"),g=async s=>{const l=await r.getCacheGame(s);l&&n(l),(await G.instance.getContract(k.LotteryGameSystem)).getGame(s,!0).then(y=>n(y))};return o.useEffect(()=>{const s=h.id;g(s)},[d.pathname]),t.jsx(t.Fragment,{children:t.jsxs(c,{style:{height:`${x}`,width:"100%",position:"relative",zIndex:1},gutter:0,children:[t.jsx(p,{id:"joined-left",span:12,children:t.jsxs(j,{direction:"vertical",style:{height:"100%",width:"100%",display:"flex",justifyContent:"center",alignItems:"center"},children:[t.jsxs("div",{style:{width:425,height:a<=900?255:345,position:"relative"},children:[t.jsx(i,{src:F,preview:!1,style:{width:491,height:240,marginLeft:-20,position:"absolute"}}),t.jsx(i,{src:_,preview:!1,style:{width:72,position:"absolute",top:100,left:80}}),t.jsxs("label",{style:{position:"absolute",fontFamily:"Arimo Hebrew Subset",fontWeight:500,fontSize:30,left:36,top:140,color:"#fcdf47"},children:[e.TotalAmount," ",e.tokenSymbol]}),t.jsx("label",{style:{position:"absolute",fontFamily:"Poppins",fontWeight:400,fontSize:20,left:38,top:180,color:"white"},children:e.totalAmountUSD}),t.jsx(i,{src:z,preview:!1,style:{width:40,height:40,left:380,top:40,position:"absolute"}}),t.jsx("label",{style:{position:"absolute",fontFamily:"Poppins",fontWeight:400,fontSize:50,color:"#1dd684",left:160,top:46,textAlign:"right"},children:e.jackpotRisePercent}),t.jsx(i,{src:D,preview:!1,style:{width:174,height:79,left:250,top:110,position:"absolute"}})]}),t.jsx(I,{timeLeft:e.endTime*1e3-new Date().getTime(),onFinished:m,style:{marginBottom:a<=900?20:80}}),t.jsxs("label",{style:{fontFamily:"Arimo Hebrew Subset",fontSize:20,color:"#91a7be"},children:["Congratulations, you are now eligible to receive a ",t.jsxs("span",{style:{color:"#43fff4",fontSize:30,marginTop:-5},children:[" ","100%"," "]})," prize."]}),t.jsx(S.CopyToClipboard,{text:e.shareTxt,children:t.jsx(C,{shape:"round",style:{fontWeight:"bold",color:"white",fontSize:40,width:460,height:100,marginLeft:50,marginTop:10},onClick:async()=>{L(e),T.instance.track(v.GAME_LOGIC,{logic_id:A.CLICK_BUTTON_BOOST})},children:"Boost Jackpot"})})]})}),t.jsx(p,{id:"joined-left",span:12,children:t.jsx(c,{style:{height:"100%",display:"grid",justifyContent:"center",alignItems:"center"},children:t.jsxs("div",{style:{position:"relative",width:600,height:253},children:[t.jsx(i,{src:H,preview:!1,style:{width:582,position:"absolute",top:-150}}),t.jsx(i,{src:N,preview:!1,style:{width:757,position:"absolute",top:50,left:-80}}),t.jsxs("div",{style:{width:379,position:"absolute",left:"46%",transform:"translate(-46%, 0)",color:"white",top:100},children:[t.jsx(i,{src:E,preview:!1,style:{width:379,position:"absolute"}}),t.jsxs("label",{style:{fontFamily:"Arimo Hebrew Subset",fontSize:12,position:"absolute",top:28,right:110},children:["#",e.LotteryGameId]}),t.jsx("label",{style:{fontFamily:"Arimo Hebrew Subset",fontSize:40,fontWeight:"bold",position:"absolute",letterSpacing:10,top:86,right:136},children:e.ticket?e.ticket.LuckyNumber:""}),t.jsxs("label",{style:{fontFamily:"Arimo Hebrew Subset",fontSize:12,position:"absolute",top:164,left:8},children:["Price:","  ",t.jsxs("span",{style:{color:"#FCDC36"},children:[e.TicketPrice," ",e.tokenSymbol]})]})]})]})})})]})})}export{V as default};