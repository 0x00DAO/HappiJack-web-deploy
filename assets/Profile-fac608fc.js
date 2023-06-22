var x=Object.defineProperty;var E=(n,a,t)=>a in n?x(n,a,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[a]=t;var s=(n,a,t)=>(E(n,typeof a!="symbol"?a+"":a,t),t);import{b9 as A,ba as p,bb as d,bc as S,aQ as l,aM as b,bd as j,q as y,s as w,a6 as H,be as R,n as T,l as B,a8 as u,o as r,S as C,C as L,B as O}from"./index-4602083f.js";import{s as P,c as W}from"./Loading-eb65e7f0.js";import{T as k}from"./index-0dd5c0b3.js";import{R as z,C as G}from"./row-679e4eac.js";import"./useLocale-1187b93b.js";import"./TextArea-0b3b554b.js";import"./index-1925f520.js";const f=class extends A{constructor(){super(...arguments);s(this,"Owner",null);s(this,"TokenType",l.ChainToken);s(this,"TokenAddress",null);s(this,"Amount","0")}get _primaryKey(){return""}get primaryKey(){return[p(d.from(this.Owner).toHexString(),32),p(d.from(this.TokenType).toHexString(),32),p(d.from(this.TokenAddress).toHexString(),32)]}static get attributes(){return[{key:"TokenType",type:"address"},{key:"TokenType",type:"uint256",format:t=>parseInt(t.toString())},{key:"TokenAddress",type:"address"},{key:"Amount",type:"uint256",format:t=>t&&t.toString()!=="0x"?S(t):"0"}]}static formatter(t,i){return f.fillWith(super.formatter(t,i))}};let m=f;s(m,"tableName","WalletSafeBoxTable");class h extends b{constructor(){super(...arguments);s(this,"Amount","0");s(this,"TokenType",l.ChainToken);s(this,"TokenAddress",null);s(this,"Owner",null)}get tokenSymbol(){return this.TokenType===l.ChainToken,"ETH"}get isEmpty(){return!this.Amount||j(this.Amount).lte(d.from(0))}async withdrawETH(){await(await y.instance.getContract(w.LotteryGameLotteryWalletSafeBoxSystem)).withdrawETH()}async withdrawERC20(){await(await y.instance.getContract(w.LotteryGameLotteryWalletSafeBoxSystem)).withdrawERC20(this.TokenAddress)}async withdraw(){this.TokenType===l.ChainToken?await this.withdrawETH():await this.withdrawERC20()}static async create(t=l.ChainToken,i=R){if(!H.isWalletConnected)throw new Error("Wallet is not connected");const g=await y.instance.getContract(w.GameRoot).getContract(),e=await y.instance.getAddress(),o=await m.queryByKeys(g,[e,t,i],1),c=new h;return c.TokenType=t,c.TokenAddress=i,c.Owner=e,c.Amount=o.Amount,c}}function Q(){const[n,a]=T.useState(new h),t=async()=>{const e=await h.create();a(e)},i=async()=>{try{P(),await n.withdraw(),await t()}catch(e){u.error(e!=null&&e.message&&e.message.length<30?e.message:"claim failed")}finally{W()}},g=B();return T.useEffect(()=>{async function e(){await t()}try{e()}catch(o){u.error(o!=null&&o.message&&o.message.length<30?o.message:"claim failed")}},[g.pathname]),r.jsx(r.Fragment,{children:r.jsxs(C,{direction:"vertical",size:"large",style:{display:"grid",justifyContent:"center",alignContent:"center",minHeight:`${L}`},children:[r.jsx(z,{gutter:0,children:r.jsxs(G,{span:"auto",style:{maxWidth:"100%"},children:[r.jsx(k.Text,{style:{fontSize:50,color:"#52c41a",display:"grid",justifyContent:"center",alignContent:"center"},children:"Total Amount"}),r.jsx(k.Text,{style:{fontSize:50,color:"#52c41a",display:"grid",justifyContent:"center",alignContent:"center"},children:n.Amount+" "+n.tokenSymbol})]})}),r.jsx(C,{style:{display:"flex",justifyContent:"center",alignContent:"center"},children:r.jsx(O,{style:{fontSize:30,width:300,height:80},type:"primary",onClick:i,disabled:n.isEmpty,children:"Claim"})})]})})}export{Q as default};
