var A=Object.defineProperty;var E=(s,a,e)=>a in s?A(s,a,{enumerable:!0,configurable:!0,writable:!0,value:e}):s[a]=e;var r=(s,a,e)=>(E(s,typeof a!="symbol"?a+"":a,e),e);import{bk as R,bl as p,bm as y,bn as B,a_ as m,aW as W,y as c,bo as F,A as u,ae as H,bp as v,o as x,l as z,p as b,bq as C,ag as L,v as t,S as k,C as I,R as w,w as h,B as D,F as O,D as P}from"./index-d1a429a6.js";import{s as $,c as j}from"./Loading-f0b35b3c.js";import{T as S}from"./index-086eaf8d.js";import"./CheckOutlined-4875c515.js";import"./useLocale-fa5ff336.js";import"./TextArea-dd63aabe.js";import"./index-af65f1fc.js";const T=class extends R{constructor(){super(...arguments);r(this,"Owner",null);r(this,"TokenType",m.ChainToken);r(this,"TokenAddress",null);r(this,"Amount","0")}get _primaryKey(){return""}get primaryKey(){return[p(y.from(this.Owner).toHexString(),32),p(y.from(this.TokenType).toHexString(),32),p(y.from(this.TokenAddress).toHexString(),32)]}static get attributes(){return[{key:"TokenType",type:"address"},{key:"TokenType",type:"uint256",format:e=>parseInt(e.toString())},{key:"TokenAddress",type:"address"},{key:"Amount",type:"uint256",format:e=>e&&e.toString()!=="0x"?B(e):"0"}]}static formatter(e,i,l){return T.fillWith(super.formatter(e,i,l))}};let f=T;r(f,"tableName","LotteryGameWalletSafeBoxTable");class g extends W{constructor(){super(...arguments);r(this,"Amount","0");r(this,"TokenType",m.ChainToken);r(this,"TokenAddress",null);r(this,"Owner",null)}get tokenSymbol(){return c.instance.getTokenSymbolByTokenType(this.TokenType)}get isEmpty(){return!this.Amount||F(this.Amount).lte(y.from(0))}async withdrawETH(){return await(await c.instance.getContract(u.LotteryGameLotteryWalletSafeBoxSystem)).withdrawETH()}async withdrawERC20(){return await(await c.instance.getContract(u.LotteryGameLotteryWalletSafeBoxSystem)).withdrawERC20(this.TokenAddress)}async withdraw(){return this.TokenType===m.ChainToken?await this.withdrawETH():await this.withdrawERC20()}static async create(e=m.ChainToken,i=v){if(!H.isWalletConnected)throw new Error("Wallet is not connected");const l=await c.instance.getContract(u.GameRoot).getContract(),d=await c.instance.getAddress(),n=await f.queryByKeys(l,[d,e,i],1),o=new g;return o.TokenType=e,o.TokenAddress=i,o.Owner=d,o.Amount=n.Amount==="0.0"?"0":n.Amount,o}}function U(){const[s,a]=x.useState(new g),e=async()=>{const n=await g.create();a(n)},i=async()=>{try{$(),await s.withdraw()}catch(n){O(n!=null&&n.message&&n.message.length<70?n.message:"claim failed"),j()}},l=async(n,o)=>{if(await c.instance.getAddress()!==n)return Promise.resolve();j(),P(`Claimed: ${o} ${s.tokenSymbol}`),await e()},d=z();return x.useEffect(()=>{b.instance.on(C.event,l);async function n(){await e()}try{n()}catch(o){L.error(o!=null&&o.message&&o.message.length<30?o.message:"claim failed")}return()=>{b.instance.off(C.event,l)}},[d.pathname]),t.jsx(t.Fragment,{children:t.jsxs(k,{direction:"vertical",size:"large",style:{display:"grid",justifyContent:"center",alignContent:"center",minHeight:`${I}`,marginTop:-230},children:[t.jsx(w,{gutter:0,children:t.jsxs(h,{span:"auto",style:{maxWidth:"100%"},children:[t.jsx(S.Text,{style:{fontSize:90,fontWeight:700,fontFamily:"Eras Bold ITC",display:"grid",justifyContent:"center",alignContent:"center",WebkitTextFillColor:"white",WebkitTextStroke:"2px #8C59F9"},children:"Total Amount"}),t.jsx(S.Text,{style:{fontSize:60,fontFamily:"Arimo Hebrew Subset",fontWeight:700,color:"white",display:"grid",justifyContent:"center",alignContent:"center"},children:`${s.Amount} ${s.tokenSymbol}`})]})}),t.jsx(k,{style:{display:"flex",justifyContent:"center",alignContent:"center"},children:t.jsx(D,{style:{fontSize:40,fontWeight:700,width:556,height:100,color:"white"},shape:"round",onClick:i,disabled:s.isEmpty,children:"Claim"})}),t.jsxs("div",{style:{width:"calc(90vw)",height:"calc(42vh)",position:"fixed",bottom:0,left:"50%",transform:"translate(-50%, 0)",zIndex:-1},children:[t.jsx("div",{style:{position:"absolute",width:"100%",height:"100%",borderTopLeftRadius:40,borderTopRightRadius:40,border:"4px solid #6d89f5",borderBottom:"none",background:"linear-gradient(90deg, #2A5698 0%, #6706B2 100%)",opacity:.7,zIndex:-1}}),t.jsxs(w,{style:{width:"100%",height:80,position:"relative"},children:[t.jsx("div",{style:{width:480,height:77,background:"#4222c3",borderBottomLeftRadius:40,borderBottomRightRadius:40,position:"absolute",left:"50%",top:4,transform:"translate(-50%, 0)",opacity:.7}}),t.jsx("div",{style:{width:480,height:70,top:3,background:"#4c50b7",borderBottomLeftRadius:40,borderBottomRightRadius:40,position:"absolute",left:"50%",transform:"translate(-51%, 0)",opacity:.7}}),t.jsx("label",{style:{position:"absolute",color:"#FAFF16",fontSize:30,fontFamily:"Eras Bold ITC",width:480,height:70,left:"50%",transform:"translate(-30%,25%)"},children:"Recent transactions"})]}),t.jsxs(w,{style:{width:"99.6%",height:50,background:"#4c50b7",margin:"0 auto",marginTop:30},children:[t.jsx(h,{span:8,style:{display:"flex",justifyContent:"center",alignContent:"center"},children:t.jsx("p",{style:{fontSize:24,color:"#faff16",fontFamily:"Arimo Hebrew Subset",fontWeight:700,marginTop:10},children:"Game ID"})}),t.jsx(h,{span:8,style:{display:"flex",justifyContent:"center",alignContent:"center"},children:t.jsx("p",{style:{fontSize:24,color:"#faff16",fontFamily:"Arimo Hebrew Subset",fontWeight:700,marginTop:10},children:"Draw Time"})}),t.jsx(h,{span:8,style:{display:"flex",justifyContent:"center",alignContent:"center"},children:t.jsx("p",{style:{fontSize:24,color:"#faff16",fontFamily:"Arimo Hebrew Subset",fontWeight:700,marginTop:10},children:"Type"})})]})]})]})})}export{U as default};