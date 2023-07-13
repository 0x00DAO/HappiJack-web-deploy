import{u as k,l as T,m as E,n as H,o as h,G as W,p as r,q as w,s as x,t,S as c,C as I,R as N,v as C,B as f,w as z,x as o,I as g,y as V,z as l,A,D as B}from"./index-fc115032.js";import{T as F}from"./ticket_nft-6fc753da.js";import{P as R,I as M}from"./information-1d7944b2.js";import{N as D}from"./nft_bottom-1b63c0d9.js";import{L as P}from"./LotteryCreateModal-5b37b184.js";import{c as j,s as O}from"./Loading-f7ffd133.js";import"./useLocale-1bbb14a7.js";import"./index-3bd887d1.js";import"./TextArea-0d0e751f.js";import"./SearchOutlined-ca92c546.js";function tt(){const d=k(),v=T(),b=E(),L=H(P),[a,m]=h.useState(new W),[G,y]=h.useState(!0),p=async e=>{await(await o.instance.getContract(l.LotteryGameSystem)).getGame(e,!0),b("/")},u=async e=>{const s=d.id;if(e!==s)return Promise.resolve();const i=await(await o.instance.getContract(l.LotteryGameSystem)).getGame(e,!0);m(i),j(),A("Verify success"),y(!0)};h.useEffect(()=>{r.instance.on(w.event,u),r.instance.on(x.event,p);async function e(){const s=d.id,i=await(await o.instance.getContract(l.LotteryGameSystem)).getGame(s);m(i),y(!i.isWaitingReward)}return e(),()=>{r.instance.off(w.event,u),r.instance.off(x.event,p)}},[v.pathname]);const S=async()=>{const e=d.id,n=await(await o.instance.getContract(l.LotteryGameSystem)).getGame(e,!0);if(m(n),n.isWaitingVerify){O();try{await n.verify()}catch{j(),B("Verify failed")}}else L.show()};return t.jsx(t.Fragment,{children:t.jsxs(c,{direction:"vertical",style:{minHeight:`${I}`,width:"100%",display:"flex",justifyContent:"center"},children:[t.jsxs(N,{gutter:0,children:[t.jsx(C,{span:12,style:{width:"100%",paddingLeft:65},children:t.jsxs(c,{direction:"vertical",size:"small",children:[t.jsx("p",{style:{fontFamily:"Arimo Hebrew Subset",fontSize:70,fontWeight:700,width:970,height:160,background:"linear-gradient(270deg, #C879F9 0%, #6C7EFC 50%, #74F0B2 100%)",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent",backgroundClip:"text",textAlign:"left",marginTop:30},children:"Congratulations the winners!"}),t.jsxs("p",{style:{fontSize:70,fontFamily:"Arimo Hebrew Subset",fontWeight:700,color:"white",width:1e3,textAlign:"left"},children:["Jackpot: ",a.TotalAmount," ",a.tokenSymbol]}),t.jsx(c,{direction:"horizontal",size:"small",hidden:!a.hasHash,style:{marginTop:-50},children:t.jsxs(f,{type:"text",style:{display:"flex"},target:"_blank",href:`${z(o.instance.chainId)}/tx/${a.transactionHash}`,disabled:!a.hasHash,children:[t.jsxs("p",{style:{color:"#91a7be",fontSize:30,fontFamily:"Arimo Hebrew Subset",fontWeight:700,marginLeft:-10},children:["TX: ",a.shortHash]}),t.jsx("svg",{style:{marginTop:2,marginLeft:30,color:"#91a7be",fontSize:40,display:"none"},stroke:"currentColor",fill:"none",strokeWidth:"0",viewBox:"0 0 24 24",focusable:"false",height:"1em",width:"1em",xmlns:"http://www.w3.org/2000/svg",children:t.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"})})]})})]})}),t.jsx(C,{span:12,style:{width:"100%",position:"relative",display:"flex",justifyContent:"center"},children:t.jsxs("div",{style:{width:669,height:500,marginTop:-100},children:[t.jsx(g,{src:D,preview:!1,style:{position:"absolute",width:669}}),t.jsx(g,{src:F,style:{position:"absolute",width:375,transform:"rotate(-11.204deg)",top:130,left:200,cursor:"pointer"}})]})})]}),t.jsxs(c,{style:{width:"100%",display:"flex",justifyContent:"center",marginTop:50},children:[t.jsx(f,{onClick:S,className:"start-btn",style:{width:460,height:100,borderRadius:40,fontSize:40,fontWeight:700},children:a.isWaitingVerify&&!G?"Verify":"Create"}),t.jsx(R,{content:V,title:"Rules",placement:"right",children:t.jsx(f,{style:{width:42,height:42,background:"transparent",border:"none",marginLeft:35},icon:t.jsx(g,{src:M,preview:!1}),type:"default"})})]})]})})}export{tt as default};
