import{i as ge,_ as me}from"./index-859c32af.js";const be=Symbol(),se=Object.getPrototypeOf,Z=new WeakMap,Ie=e=>e&&(Z.has(e)?Z.get(e):se(e)===Object.prototype||se(e)===Array.prototype),we=e=>Ie(e)&&e[be]||null,ne=(e,t=!0)=>{Z.set(e,t)},z=e=>typeof e=="object"&&e!==null,P=new WeakMap,X=new WeakSet,Ee=(e=Object.is,t=(n,b)=>new Proxy(n,b),s=n=>z(n)&&!X.has(n)&&(Array.isArray(n)||!(Symbol.iterator in n))&&!(n instanceof WeakMap)&&!(n instanceof WeakSet)&&!(n instanceof Error)&&!(n instanceof Number)&&!(n instanceof Date)&&!(n instanceof String)&&!(n instanceof RegExp)&&!(n instanceof ArrayBuffer),a=n=>{switch(n.status){case"fulfilled":return n.value;case"rejected":throw n.reason;default:throw n}},o=new WeakMap,c=(n,b,w=a)=>{const y=o.get(n);if((y==null?void 0:y[0])===b)return y[1];const A=Array.isArray(n)?[]:Object.create(Object.getPrototypeOf(n));return ne(A,!0),o.set(n,[b,A]),Reflect.ownKeys(n).forEach(N=>{if(Object.getOwnPropertyDescriptor(A,N))return;const O=Reflect.get(n,N),T={value:O,enumerable:!0,configurable:!0};if(X.has(O))ne(O,!1);else if(O instanceof Promise)delete T.value,T.get=()=>w(O);else if(P.has(O)){const[C,Q]=P.get(O);T.value=c(C,Q(),w)}Object.defineProperty(A,N,T)}),A},u=new WeakMap,f=[1,1],v=n=>{if(!z(n))throw new Error("object required");const b=u.get(n);if(b)return b;let w=f[0];const y=new Set,A=(l,i=++f[0])=>{w!==i&&(w=i,y.forEach(r=>r(l,i)))};let N=f[1];const O=(l=++f[1])=>(N!==l&&!y.size&&(N=l,C.forEach(([i])=>{const r=i[1](l);r>w&&(w=r)})),w),T=l=>(i,r)=>{const E=[...i];E[1]=[l,...E[1]],A(E,r)},C=new Map,Q=(l,i)=>{if(({VITE_WC_ID:"f0e8a3969b5c3e10dbac6efa79134014",VITE_ALCHEMY_ID:"0PGkrxTjH9jdclxTTxXoE6wrgX5tXQQY",VITE_WORLD_ADDRESS:"0xa652FcC9ee53b0A85414d0c5f4F041e2D556409E",VITE_GRAPH_STUDIO_API:"https://api.studio.thegraph.com/query/48656/lotterygame/version/latest",BASE_URL:"/",MODE:"production",DEV:!1,PROD:!0,SSR:!1}&&"production")!=="production"&&C.has(l))throw new Error("prop listener already exists");if(y.size){const r=i[3](T(l));C.set(l,[i,r])}else C.set(l,[i])},te=l=>{var i;const r=C.get(l);r&&(C.delete(l),(i=r[1])==null||i.call(r))},pe=l=>(y.add(l),y.size===1&&C.forEach(([r,E],V)=>{if(({VITE_WC_ID:"f0e8a3969b5c3e10dbac6efa79134014",VITE_ALCHEMY_ID:"0PGkrxTjH9jdclxTTxXoE6wrgX5tXQQY",VITE_WORLD_ADDRESS:"0xa652FcC9ee53b0A85414d0c5f4F041e2D556409E",VITE_GRAPH_STUDIO_API:"https://api.studio.thegraph.com/query/48656/lotterygame/version/latest",BASE_URL:"/",MODE:"production",DEV:!1,PROD:!0,SSR:!1}&&"production")!=="production"&&E)throw new Error("remove already exists");const x=r[3](T(V));C.set(V,[r,x])}),()=>{y.delete(l),y.size===0&&C.forEach(([r,E],V)=>{E&&(E(),C.set(V,[r]))})}),Y=Array.isArray(n)?[]:Object.create(Object.getPrototypeOf(n)),B=t(Y,{deleteProperty(l,i){const r=Reflect.get(l,i);te(i);const E=Reflect.deleteProperty(l,i);return E&&A(["delete",[i],r]),E},set(l,i,r,E){const V=Reflect.has(l,i),x=Reflect.get(l,i,E);if(V&&(e(x,r)||u.has(r)&&e(x,u.get(r))))return!0;te(i),z(r)&&(r=we(r)||r);let F=r;if(r instanceof Promise)r.then(W=>{r.status="fulfilled",r.value=W,A(["resolve",[i],W])}).catch(W=>{r.status="rejected",r.reason=W,A(["reject",[i],W])});else{!P.has(r)&&s(r)&&(F=v(r));const W=!X.has(F)&&P.get(F);W&&Q(i,W)}return Reflect.set(l,i,F,E),A(["set",[i],r,x]),!0}});u.set(n,B);const he=[Y,O,c,pe];return P.set(B,he),Reflect.ownKeys(n).forEach(l=>{const i=Object.getOwnPropertyDescriptor(n,l);"value"in i&&(B[l]=n[l],delete i.value,delete i.writable),Object.defineProperty(Y,l,i)}),B})=>[v,P,X,e,t,s,a,o,c,u,f],[ye]=Ee();function S(e={}){return ye(e)}function D(e,t,s){const a=P.get(e);({VITE_WC_ID:"f0e8a3969b5c3e10dbac6efa79134014",VITE_ALCHEMY_ID:"0PGkrxTjH9jdclxTTxXoE6wrgX5tXQQY",VITE_WORLD_ADDRESS:"0xa652FcC9ee53b0A85414d0c5f4F041e2D556409E",VITE_GRAPH_STUDIO_API:"https://api.studio.thegraph.com/query/48656/lotterygame/version/latest",BASE_URL:"/",MODE:"production",DEV:!1,PROD:!0,SSR:!1}&&"production")!=="production"&&!a&&console.warn("Please use proxy object");let o;const c=[],u=a[3];let f=!1;const n=u(b=>{if(c.push(b),s){t(c.splice(0));return}o||(o=Promise.resolve().then(()=>{o=void 0,f&&t(c.splice(0))}))});return f=!0,()=>{f=!1,n()}}function ve(e,t){const s=P.get(e);({VITE_WC_ID:"f0e8a3969b5c3e10dbac6efa79134014",VITE_ALCHEMY_ID:"0PGkrxTjH9jdclxTTxXoE6wrgX5tXQQY",VITE_WORLD_ADDRESS:"0xa652FcC9ee53b0A85414d0c5f4F041e2D556409E",VITE_GRAPH_STUDIO_API:"https://api.studio.thegraph.com/query/48656/lotterygame/version/latest",BASE_URL:"/",MODE:"production",DEV:!1,PROD:!0,SSR:!1}&&"production")!=="production"&&!s&&console.warn("Please use proxy object");const[a,o,c]=s;return c(a,o(),t)}let q;const _={ethereumClient:void 0,setEthereumClient(e){q=e},client(){if(q)return q;throw new Error("ClientCtrl has no client set")}},p=S({history:["ConnectWallet"],view:"ConnectWallet",data:void 0}),U={state:p,subscribe(e){return D(p,()=>e(p))},push(e,t){e!==p.view&&(p.view=e,t&&(p.data=t),p.history.push(e))},reset(e){p.view=e,p.history=[e]},replace(e){p.history.length>1&&(p.history[p.history.length-1]=e,p.view=e)},goBack(){if(p.history.length>1){p.history.pop();const[e]=p.history.slice(-1);p.view=e}},setData(e){p.data=e}},m={WALLETCONNECT_DEEPLINK_CHOICE:"WALLETCONNECT_DEEPLINK_CHOICE",W3M_VERSION:"W3M_VERSION",W3M_PREFER_INJECTED_URL_FLAG:"w3mPreferInjected",RECOMMENDED_WALLET_AMOUNT:9,isMobile(){return typeof window<"u"?!!(window.matchMedia("(pointer:coarse)").matches||/Android|webOS|iPhone|iPad|iPod|BlackBerry|Opera Mini/u.test(navigator.userAgent)):!1},isAndroid(){return m.isMobile()&&navigator.userAgent.toLowerCase().includes("android")},isIos(){const e=navigator.userAgent.toLowerCase();return m.isMobile()&&(e.includes("iphone")||e.includes("ipad"))},isHttpUrl(e){return e.startsWith("http://")||e.startsWith("https://")},isArray(e){return Array.isArray(e)&&e.length>0},formatNativeUrl(e,t,s){if(m.isHttpUrl(e))return this.formatUniversalUrl(e,t,s);let a=e;a.includes("://")||(a=e.replaceAll("/","").replaceAll(":",""),a=`${a}://`),this.setWalletConnectDeepLink(a,s);const o=encodeURIComponent(t);return`${a}wc?uri=${o}`},formatUniversalUrl(e,t,s){if(!m.isHttpUrl(e))return this.formatNativeUrl(e,t,s);let a=e;e.endsWith("/")&&(a=e.slice(0,-1)),this.setWalletConnectDeepLink(a,s);const o=encodeURIComponent(t);return`${a}/wc?uri=${o}`},async wait(e){return new Promise(t=>{setTimeout(t,e)})},openHref(e,t){window.open(e,t,"noreferrer noopener")},setWalletConnectDeepLink(e,t){localStorage.setItem(m.WALLETCONNECT_DEEPLINK_CHOICE,JSON.stringify({href:e,name:t}))},setWalletConnectAndroidDeepLink(e){const[t]=e.split("?");localStorage.setItem(m.WALLETCONNECT_DEEPLINK_CHOICE,JSON.stringify({href:t,name:"Android"}))},removeWalletConnectDeepLink(){localStorage.removeItem(m.WALLETCONNECT_DEEPLINK_CHOICE)},setWeb3ModalVersionInStorage(){typeof localStorage<"u"&&localStorage.setItem(m.W3M_VERSION,"2.4.2")},getWalletRouterData(){var e;const t=(e=U.state.data)==null?void 0:e.Wallet;if(!t)throw new Error('Missing "Wallet" view data');return t},getSwitchNetworkRouterData(){var e;const t=(e=U.state.data)==null?void 0:e.SwitchNetwork;if(!t)throw new Error('Missing "SwitchNetwork" view data');return t},isPreferInjectedFlag(){return typeof location<"u"?new URLSearchParams(location.search).has(m.W3M_PREFER_INJECTED_URL_FLAG):!1}},Ce=typeof location<"u"&&(location.hostname.includes("localhost")||location.protocol.includes("https")),I=S({enabled:Ce,userSessionId:"",events:[],connectedWalletId:void 0}),Le={state:I,subscribe(e){return D(I.events,()=>e(ve(I.events[I.events.length-1])))},initialize(){I.enabled&&typeof crypto<"u"&&(I.userSessionId=crypto.randomUUID())},setConnectedWalletId(e){I.connectedWalletId=e},click(e){if(I.enabled){const t={type:"CLICK",name:e.name,userSessionId:I.userSessionId,timestamp:Date.now(),data:e};I.events.push(t)}},track(e){if(I.enabled){const t={type:"TRACK",name:e.name,userSessionId:I.userSessionId,timestamp:Date.now(),data:e};I.events.push(t)}},view(e){if(I.enabled){const t={type:"VIEW",name:e.name,userSessionId:I.userSessionId,timestamp:Date.now(),data:e};I.events.push(t)}}},g=S({selectedChain:void 0,chains:void 0,standaloneChains:void 0,standaloneUri:void 0,isStandalone:!1,isAuth:!1,isCustomDesktop:!1,isCustomMobile:!1,isDataLoaded:!1,isUiLoaded:!1,isPreferInjected:!1,walletConnectVersion:1}),h={state:g,subscribe(e){return D(g,()=>e(g))},setChains(e){g.chains=e},setStandaloneChains(e){g.standaloneChains=e},setStandaloneUri(e){g.standaloneUri=e},getSelectedChain(){const e=_.client().getNetwork().chain;return e&&(g.selectedChain=e),g.selectedChain},setSelectedChain(e){g.selectedChain=e},setIsStandalone(e){g.isStandalone=e},setIsCustomDesktop(e){g.isCustomDesktop=e},setIsCustomMobile(e){g.isCustomMobile=e},setIsDataLoaded(e){g.isDataLoaded=e},setIsUiLoaded(e){g.isUiLoaded=e},setWalletConnectVersion(e){g.walletConnectVersion=e},setIsPreferInjected(e){g.isPreferInjected=e},setIsAuth(e){g.isAuth=e}},G=S({projectId:"",mobileWallets:void 0,desktopWallets:void 0,walletImages:void 0,chainImages:void 0,tokenImages:void 0,tokenContracts:void 0,standaloneChains:void 0,enableStandaloneMode:!1,enableAuthMode:!1,enableNetworkView:!1,enableAccountView:!0,enableExplorer:!0,defaultChain:void 0,explorerExcludedWalletIds:void 0,explorerRecommendedWalletIds:void 0,termsOfServiceUrl:void 0,privacyPolicyUrl:void 0}),M={state:G,subscribe(e){return D(G,()=>e(G))},setConfig(e){var t,s,a,o;Le.initialize(),h.setStandaloneChains(e.standaloneChains),h.setIsStandalone(!!((t=e.standaloneChains)!=null&&t.length)||!!e.enableStandaloneMode),h.setIsAuth(!!e.enableAuthMode),h.setIsCustomMobile(!!((s=e.mobileWallets)!=null&&s.length)),h.setIsCustomDesktop(!!((a=e.desktopWallets)!=null&&a.length)),h.setWalletConnectVersion((o=e.walletConnectVersion)!=null?o:1),h.state.isStandalone||(h.setChains(_.client().chains),h.setIsPreferInjected(_.client().isInjectedProviderInstalled()&&m.isPreferInjectedFlag())),e.defaultChain&&h.setSelectedChain(e.defaultChain),m.setWeb3ModalVersionInStorage(),Object.assign(G,e)}},d=S({address:void 0,profileName:void 0,profileAvatar:void 0,profileLoading:!1,balanceLoading:!1,balance:void 0,isConnected:!1}),Ae={state:d,subscribe(e){return D(d,()=>e(d))},getAccount(){const e=_.client().getAccount();d.address=e.address,d.isConnected=e.isConnected},async fetchProfile(e,t){var s;try{d.profileLoading=!0;const a=t??d.address,o=(s=h.state.chains)==null?void 0:s.find(c=>c.id===1);if(a&&o){const c=await _.client().fetchEnsName({address:a,chainId:1});if(c){const u=await _.client().fetchEnsAvatar({name:c,chainId:1});u&&await e(u),d.profileAvatar=u}d.profileName=c}}finally{d.profileLoading=!1}},async fetchBalance(e){try{const{chain:t}=_.client().getNetwork(),{tokenContracts:s}=M.state;let a;t&&s&&(a=s[t.id]),d.balanceLoading=!0;const o=e??d.address;if(o){const c=await _.client().fetchBalance({address:o,token:a});d.balance={amount:c.formatted,symbol:c.symbol}}}finally{d.balanceLoading=!1}},setAddress(e){d.address=e},setIsConnected(e){d.isConnected=e},resetBalance(){d.balance=void 0},resetAccount(){d.address=void 0,d.isConnected=!1,d.profileName=void 0,d.profileAvatar=void 0,d.balance=void 0}},ee="https://explorer-api.walletconnect.com";async function K(e,t){const s=new URL(e,ee);return s.searchParams.append("projectId",M.state.projectId),Object.entries(t).forEach(([a,o])=>{o&&s.searchParams.append(a,String(o))}),(await fetch(s)).json()}const j={async getDesktopListings(e){return K("/w3m/v1/getDesktopListings",e)},async getMobileListings(e){return K("/w3m/v1/getMobileListings",e)},async getInjectedListings(e){return K("/w3m/v1/getInjectedListings",e)},async getAllListings(e){return K("/w3m/v1/getAllListings",e)},getWalletImageUrl(e){return`${ee}/w3m/v1/getWalletImage/${e}?projectId=${M.state.projectId}`},getAssetImageUrl(e){return`${ee}/w3m/v1/getAssetImage/${e}?projectId=${M.state.projectId}`}};var Se=Object.defineProperty,ae=Object.getOwnPropertySymbols,Oe=Object.prototype.hasOwnProperty,_e=Object.prototype.propertyIsEnumerable,re=(e,t,s)=>t in e?Se(e,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[t]=s,De=(e,t)=>{for(var s in t||(t={}))Oe.call(t,s)&&re(e,s,t[s]);if(ae)for(var s of ae(t))_e.call(t,s)&&re(e,s,t[s]);return e};const oe=m.isMobile(),L=S({wallets:{listings:[],total:0,page:1},injectedWallets:[],search:{listings:[],total:0,page:1},recomendedWallets:[]}),He={state:L,async getRecomendedWallets(){const{explorerRecommendedWalletIds:e,explorerExcludedWalletIds:t}=M.state;if(e==="NONE"||t==="ALL"&&!e)return L.recomendedWallets;if(m.isArray(e)){const s={recommendedIds:e.join(",")},{listings:a}=await j.getAllListings(s),o=Object.values(a);o.sort((c,u)=>{const f=e.indexOf(c.id),v=e.indexOf(u.id);return f-v}),L.recomendedWallets=o}else{const{standaloneChains:s,walletConnectVersion:a,isAuth:o}=h.state,c=s==null?void 0:s.join(","),u=m.isArray(t),f={page:1,sdks:o?"auth_v1":void 0,entries:m.RECOMMENDED_WALLET_AMOUNT,chains:c,version:a,excludedIds:u?t.join(","):void 0},{listings:v}=oe?await j.getMobileListings(f):await j.getDesktopListings(f);L.recomendedWallets=Object.values(v)}return L.recomendedWallets},async getWallets(e){const t=De({},e),{explorerRecommendedWalletIds:s,explorerExcludedWalletIds:a}=M.state,{recomendedWallets:o}=L;if(a==="ALL")return L.wallets;t.search||(o.length?t.excludedIds=o.map(w=>w.id).join(","):m.isArray(s)&&(t.excludedIds=s.join(","))),m.isArray(a)&&(t.excludedIds=[t.excludedIds,a].filter(Boolean).join(",")),h.state.isAuth&&(t.sdks="auth_v1");const{page:c,search:u}=e,{listings:f,total:v}=oe?await j.getMobileListings(t):await j.getDesktopListings(t),n=Object.values(f),b=u?"search":"wallets";return L[b]={listings:[...L[b].listings,...n],total:v,page:c??1},{listings:n,total:v}},async getInjectedWallets(){const{listings:e}=await j.getInjectedListings({}),t=Object.values(e);return L.injectedWallets=t,L.injectedWallets},getWalletImageUrl(e){return j.getWalletImageUrl(e)},getAssetImageUrl(e){return j.getAssetImageUrl(e)},resetSearch(){L.search={listings:[],total:0,page:1}}},$=S({pairingUri:"",pairingError:!1}),ie={state:$,subscribe(e){return D($,()=>e($))},setPairingUri(e){$.pairingUri=e},setPairingError(e){$.pairingError=e}},k=S({open:!1}),J={state:k,subscribe(e){return D(k,()=>e(k))},async open(e){return new Promise(t=>{const{isStandalone:s,isUiLoaded:a,isDataLoaded:o,isPreferInjected:c,selectedChain:u}=h.state,{isConnected:f}=Ae.state,{enableNetworkView:v}=M.state;if(s)h.setStandaloneUri(e==null?void 0:e.uri),h.setStandaloneChains(e==null?void 0:e.standaloneChains),U.reset("ConnectWallet");else if(e!=null&&e.route)U.reset(e.route);else if(f)U.reset("Account");else if(v)U.reset("SelectNetwork");else if(c){_.client().connectConnector("injected",u==null?void 0:u.id).catch(b=>console.error(b)),t();return}else U.reset("ConnectWallet");const{pairingUri:n}=ie.state;if(a&&o&&(s||n||f))k.open=!0,t();else{const b=setInterval(()=>{const w=h.state,y=ie.state;w.isUiLoaded&&w.isDataLoaded&&(w.isStandalone||y.pairingUri||f)&&(clearInterval(b),k.open=!0,t())},200)}})},close(){k.open=!1}};var We=Object.defineProperty,le=Object.getOwnPropertySymbols,je=Object.prototype.hasOwnProperty,Pe=Object.prototype.propertyIsEnumerable,ce=(e,t,s)=>t in e?We(e,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[t]=s,Me=(e,t)=>{for(var s in t||(t={}))je.call(t,s)&&ce(e,s,t[s]);if(le)for(var s of le(t))Pe.call(t,s)&&ce(e,s,t[s]);return e};function Te(){return typeof matchMedia<"u"&&matchMedia("(prefers-color-scheme: dark)").matches}const H=S({themeMode:Te()?"dark":"light"}),de={state:H,subscribe(e){return D(H,()=>e(H))},setThemeConfig(e){const{themeMode:t,themeVariables:s}=e;t&&(H.themeMode=t),s&&(H.themeVariables=Me({},s))}},R=S({open:!1,message:"",variant:"success"}),Be={state:R,subscribe(e){return D(R,()=>e(R))},openToast(e,t){R.open=!0,R.message=e,R.variant=t},closeToast(){R.open=!1}};typeof window<"u"&&(window.Buffer||(window.Buffer=ge.Buffer),window.global||(window.global=window),window.process||(window.process={env:{}}));var Re=Object.defineProperty,ue=Object.getOwnPropertySymbols,Ue=Object.prototype.hasOwnProperty,Ne=Object.prototype.propertyIsEnumerable,fe=(e,t,s)=>t in e?Re(e,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[t]=s,Ve=(e,t)=>{for(var s in t||(t={}))Ue.call(t,s)&&fe(e,s,t[s]);if(ue)for(var s of ue(t))Ne.call(t,s)&&fe(e,s,t[s]);return e};class ke{constructor(t){this.openModal=J.open,this.closeModal=J.close,this.subscribeModal=J.subscribe,this.setTheme=de.setThemeConfig,de.setThemeConfig(t),M.setConfig(Ve({enableStandaloneMode:!0},t)),this.initUi()}async initUi(){if(typeof window<"u"){await me(()=>import("./index.es-34b8ea77.js"),["assets/index.es-34b8ea77.js","assets/index-859c32af.js","assets/index-bebcddea.css"]);const t=document.createElement("w3m-modal");document.body.insertAdjacentElement("beforeend",t),h.setIsUiLoaded(!0)}}}const Fe=Object.freeze(Object.defineProperty({__proto__:null,Web3Modal:ke},Symbol.toStringTag,{value:"Module"}));export{_ as C,Le as H,Ae as K,ie as _,de as a,U as b,m as c,h as d,Fe as i,He as n,Be as o,J as s,M as y};
