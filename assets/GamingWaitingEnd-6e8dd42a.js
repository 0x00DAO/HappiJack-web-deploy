import{n as i,A as x,t as u,u as y,l as j,a4 as C,G as v,o as t,S as n,C as w,B as c,p as z,q as l,I as S,a9 as T,s as b}from"./index-069c748b.js";import{T as a}from"./index-c8c25abb.js";import{P as I}from"./index-92f25ad7.js";import{S as k}from"./index-046498ea.js";import{M as L}from"./index-f9682b8e.js";import{R as F,C as H}from"./row-bc3d67a4.js";import"./CheckOutlined-82d396d5.js";import"./useLocale-147e3f89.js";import"./TextArea-6ae43350.js";import"./useForceUpdate-e334b9ae.js";var E={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"}},{tag:"path",attrs:{d:"M464 336a48 48 0 1096 0 48 48 0 10-96 0zm72 112h-48c-4.4 0-8 3.6-8 8v272c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8V456c0-4.4-3.6-8-8-8z"}}]},name:"info-circle",theme:"outlined"};const G=E;var M=function(s,o){return i.createElement(x,u({},s,{ref:o,icon:G}))};const R=i.forwardRef(M),{Countdown:D}=k,{success:O}=L,B=()=>{O({title:t.jsx(a.Text,{style:{fontSize:22},children:"Link copied successfully."}),content:t.jsx(a.Text,{style:{fontSize:20},children:"Invite friends to participate in the game and receive 100% of the reward amount."}),centered:!0,footer:null,maskClosable:!0,width:540})},W=t.jsx("div",{children:"The last participation can only receive 80% of the reward amount, but they will receive 100% of the reward amount once a new play joins."});function Q(){const r=y(),s=j(),o=C(),[e,d]=i.useState(new v);i.useEffect(()=>{async function f(){const m=r.id,g=await(await l.instance.getContract(b.LotteryGameSystem)).getGame(m);d(g)}f()},[s.pathname]);const h=()=>{B()},p=()=>{o("/")};return t.jsx(t.Fragment,{children:t.jsxs(n,{direction:"vertical",size:"large",style:{display:"grid",justifyContent:"center",alignContent:"center",minHeight:`${w}`},children:[t.jsx(F,{gutter:0,style:{justifyContent:"center",alignItems:"center",marginBottom:60},children:t.jsx(H,{span:"auto",style:{maxWidth:"100%"},children:t.jsx(a.Text,{style:{fontSize:50,color:"#52c41a",display:"flex",marginLeft:20,marginRight:20,lineHeight:1.2},children:e.ad})})}),t.jsx(n,{direction:"horizontal",size:"small",style:{display:"flex",justifyContent:"center",alignContent:"center",marginTop:-70},hidden:!e.hasHash,children:t.jsxs(c,{type:"text",style:{display:"flex"},target:"_blank",href:`${z(l.instance.chainId)}/tx/${e.transactionHash}`,children:[t.jsxs("p",{style:{color:"#8c8c8c",fontSize:20},children:["TX: ",e.shortHash]}),t.jsx("svg",{style:{marginTop:10,marginLeft:10},stroke:"currentColor",fill:"none",strokeWidth:"0",viewBox:"0 0 24 24",focusable:"false",height:"1em",width:"1em",xmlns:"http://www.w3.org/2000/svg",children:t.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"})})]})}),t.jsxs(n,{direction:"vertical",style:{display:"grid",justifyContent:"center",alignContent:"center",marginTop:-40},children:[t.jsx(S,{src:"https://i.seadn.io/gcs/files/24bbcded36bf9b3837d52ba3278220b8.png?auto=format&dpr=1",width:300}),t.jsxs("p",{style:{fontSize:26,display:"flex",justifyContent:"center",alignContent:"center"},hidden:!e.isIn,children:["ID: ",e.ticketTokenID]})]}),t.jsxs(n,{direction:"horizontal",style:{display:"flex",justifyContent:"center",alignContent:"center"},children:[t.jsxs("svg",{viewBox:"0 0 1024 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg","p-id":"3212",width:"30",height:"30",children:[t.jsx("path",{d:"M766.208 958.336H269.696c-112.768 0-204.032-91.392-204.032-204.032V257.792c0-112.64 91.264-204.032 204.032-204.032h496.512c112.64 0 204.032 91.392 204.032 204.032v496.512c0 112.768-91.392 204.032-204.032 204.032z",fill:"#FF9429","p-id":"3213"}),t.jsx("path",{d:"M705.408 743.04c-1.664-10.624-3.84-20.992-6.272-30.976-1.152-4.736-2.688-9.216-4.096-13.824-1.792-6.016-3.456-12.032-5.632-17.792-1.92-5.248-3.968-10.112-6.144-15.232-2.048-4.736-3.968-9.6-6.144-14.208-2.432-5.12-5.12-10.112-7.808-14.976-2.176-3.968-4.48-7.936-6.784-11.776-2.944-4.864-6.144-9.472-9.344-14.08-2.432-3.456-4.864-6.656-7.424-9.856-3.456-4.352-7.04-8.704-10.752-12.8-2.688-2.816-5.376-5.504-8.064-8.192-3.84-3.84-7.808-7.552-11.904-11.008-2.944-2.432-6.016-4.48-8.96-6.656-4.224-3.072-8.32-6.272-12.672-8.832-0.256-0.128-0.512-0.384-0.768-0.512-13.312-7.936-21.376-22.016-21.376-37.504v-17.536c0-15.488 8.192-29.568 21.376-37.504 0.256-0.128 0.512-0.384 0.768-0.512 4.352-2.688 8.448-5.76 12.672-8.832 3.072-2.176 6.016-4.224 8.96-6.656 4.096-3.456 7.936-7.168 11.904-11.008 2.688-2.688 5.504-5.376 8.192-8.192 3.712-4.096 7.296-8.32 10.752-12.672 2.56-3.2 4.992-6.528 7.424-9.856 3.2-4.48 6.4-9.216 9.344-14.08 2.432-3.84 4.608-7.808 6.784-11.776 2.688-4.864 5.376-9.856 7.808-14.976 2.176-4.608 4.224-9.344 6.144-14.208 2.048-4.992 4.224-9.984 6.144-15.232 2.048-5.76 3.84-11.776 5.632-17.792 1.408-4.608 2.944-9.088 4.096-13.824 2.56-10.112 4.608-20.48 6.272-30.976 0.128-0.896 0.384-1.664 0.512-2.56 4.096-26.752-16.384-51.072-43.52-51.072H373.376c-27.136 0-47.616 24.32-43.52 51.072 0.128 0.896 0.384 1.664 0.512 2.56 1.664 10.624 3.84 20.992 6.272 31.104 1.152 4.736 2.688 9.216 4.096 13.824 1.792 6.016 3.456 12.032 5.632 17.792 1.92 5.248 3.968 10.112 6.144 15.232 2.048 4.736 3.968 9.6 6.144 14.208 2.432 5.12 5.12 10.112 7.808 14.976 2.176 3.968 4.48 7.936 6.784 11.776 2.944 4.864 6.144 9.472 9.344 14.08 2.432 3.456 4.864 6.656 7.424 9.856 3.456 4.352 7.04 8.704 10.752 12.672 2.688 2.816 5.376 5.504 8.192 8.192 3.84 3.84 7.808 7.552 11.904 11.008 2.944 2.432 6.016 4.48 8.96 6.656 4.224 3.072 8.32 6.272 12.672 8.832 0.256 0.128 0.512 0.384 0.768 0.512 13.312 7.936 21.376 22.016 21.376 37.504v17.536c0 15.488-8.192 29.568-21.376 37.504-0.256 0.128-0.512 0.384-0.768 0.512-4.352 2.688-8.448 5.76-12.672 8.832-2.944 2.176-6.016 4.224-8.96 6.656-4.096 3.456-7.936 7.168-11.904 11.008-2.688 2.688-5.504 5.248-8.064 8.192-3.712 4.096-7.296 8.32-10.752 12.8-2.56 3.2-4.992 6.528-7.424 9.856-3.2 4.608-6.4 9.216-9.344 14.08-2.304 3.84-4.608 7.808-6.784 11.776-2.688 4.864-5.376 9.856-7.808 14.976-2.176 4.608-4.224 9.344-6.144 14.208-2.048 4.992-4.224 9.984-6.144 15.232-2.048 5.76-3.84 11.776-5.632 17.792-1.408 4.608-2.944 9.088-4.096 13.824-2.56 10.112-4.608 20.48-6.272 31.104-0.128 0.896-0.384 1.664-0.512 2.56-4.096 26.752 16.384 51.072 43.52 51.072h289.024c27.136 0 47.616-24.32 43.52-51.072-0.256-1.024-0.512-1.92-0.64-2.816z",fill:"#FFFFFF","p-id":"3214"}),t.jsx("path",{d:"M415.872 755.712h204.16c7.68 0 11.264-9.728 5.248-14.592l-93.952-73.216c-1.92-1.536-2.944-3.84-2.944-6.4V425.856c0-2.304 1.024-4.48 2.688-6.016l55.936-45.952c5.504-5.12 1.92-14.336-5.632-14.336H454.4c-7.552 0-11.136 9.216-5.632 14.336l55.296 45.696c1.664 1.536 2.688 3.712 2.688 6.016v235.648c0 2.432-1.152 4.736-2.944 6.4L410.496 741.12c-5.888 4.992-2.432 14.592 5.376 14.592z",fill:"#FF9429","p-id":"3215"})]}),t.jsx("p",{style:{fontSize:30,color:"#d8e38f",marginTop:24},children:"Waiting for the draw"}),t.jsx(D,{valueStyle:{fontSize:18,marginLeft:100},prefix:"Lucky Draw In:",value:e.endTime*1e3,onFinish:p})]}),t.jsxs(n,{direction:"horizontal",style:{display:"flex",justifyContent:"center",alignContent:"center"},children:[t.jsx(I,{content:W,title:"Rules",placement:"bottom",children:t.jsx(R,{style:{fontSize:30,color:"#808080"}})}),t.jsx("p",{style:{fontSize:30,color:"#d8e38f",marginTop:28},children:"80% reward is about to be credited."}),t.jsx(T.CopyToClipboard,{text:e.shareTxt,children:t.jsxs(c,{style:{height:80,lineHeight:.3,paddingTop:20,position:"absolute",marginLeft:100,marginTop:-40},type:"primary",onClick:h,children:[t.jsx("p",{children:"Upgrade"}),t.jsx("p",{children:"eto"}),t.jsx("p",{children:"100%"})]})})]}),t.jsxs("p",{style:{fontSize:50,color:"#52c41a",display:"flex",justifyContent:"center",alignContent:"center"},children:["Share Prize: ",e.TotalAmount," ",e.tokenSymbol]})]})})}export{Q as default};
