import{i as Ie,_ as he}from"./index-50cfc3e1.js";const be=Symbol(),se=Object.getPrototypeOf,Z=new WeakMap,_e=e=>e&&(Z.has(e)?Z.get(e):se(e)===Object.prototype||se(e)===Array.prototype),ge=e=>_e(e)&&e[be]||null,ne=(e,t=!0)=>{Z.set(e,t)},z=e=>typeof e=="object"&&e!==null,R=new WeakMap,$=new WeakSet,me=(e=Object.is,t=(n,b)=>new Proxy(n,b),s=n=>z(n)&&!$.has(n)&&(Array.isArray(n)||!(Symbol.iterator in n))&&!(n instanceof WeakMap)&&!(n instanceof WeakSet)&&!(n instanceof Error)&&!(n instanceof Number)&&!(n instanceof Date)&&!(n instanceof String)&&!(n instanceof RegExp)&&!(n instanceof ArrayBuffer),a=n=>{switch(n.status){case"fulfilled":return n.value;case"rejected":throw n.reason;default:throw n}},o=new WeakMap,c=(n,b,g=a)=>{const A=o.get(n);if((A==null?void 0:A[0])===b)return A[1];const S=Array.isArray(n)?[]:Object.create(Object.getPrototypeOf(n));return ne(S,!0),o.set(n,[b,S]),Reflect.ownKeys(n).forEach(V=>{if(Object.getOwnPropertyDescriptor(S,V))return;const O=Reflect.get(n,V),j={value:O,enumerable:!0,configurable:!0};if($.has(O))ne(O,!1);else if(O instanceof Promise)delete j.value,j.get=()=>g(O);else if(R.has(O)){const[D,K]=R.get(O);j.value=c(D,K(),g)}Object.defineProperty(S,V,j)}),S},u=new WeakMap,f=[1,1],w=n=>{if(!z(n))throw new Error("object required");const b=u.get(n);if(b)return b;let g=f[0];const A=new Set,S=(l,i=++f[0])=>{g!==i&&(g=i,A.forEach(r=>r(l,i)))};let V=f[1];const O=(l=++f[1])=>(V!==l&&!A.size&&(V=l,D.forEach(([i])=>{const r=i[1](l);r>g&&(g=r)})),g),j=l=>(i,r)=>{const m=[...i];m[1]=[l,...m[1]],S(m,r)},D=new Map,K=(l,i)=>{if(({VITE_WC_ID:"f0e8a3969b5c3e10dbac6efa79134014",VITE_ALCHEMY_ID:"0PGkrxTjH9jdclxTTxXoE6wrgX5tXQQY",VITE_WORLD_ADDRESS_80001:"0xa652FcC9ee53b0A85414d0c5f4F041e2D556409E",VITE_WORLD_ADDRESS_421613:"0xD6854CB80D600cD27FEC3f37f6AE560CADEA8244",VITE_WORLD_ADDRESS_42161:"0x51e888d87387bb5faef42e5491588b0b618a533a",VITE_GRAPH_STUDIO_API_80001:"happiairdrop",VITE_GRAPH_STUDIO_API_421613:"happiairdrop-arb-goerli",VITE_GRAPH_STUDIO_API_42161:"happiairdrop-arb",VITE_LOTTERY_DURATION_PER_GAME:"600",BASE_URL:"/",MODE:"production",DEV:!1,PROD:!0,SSR:!1}&&"production")!=="production"&&D.has(l))throw new Error("prop listener already exists");if(A.size){const r=i[3](j(l));D.set(l,[i,r])}else D.set(l,[i])},te=l=>{var i;const r=D.get(l);r&&(D.delete(l),(i=r[1])==null||i.call(r))},pe=l=>(A.add(l),A.size===1&&D.forEach(([r,m],N)=>{if(({VITE_WC_ID:"f0e8a3969b5c3e10dbac6efa79134014",VITE_ALCHEMY_ID:"0PGkrxTjH9jdclxTTxXoE6wrgX5tXQQY",VITE_WORLD_ADDRESS_80001:"0xa652FcC9ee53b0A85414d0c5f4F041e2D556409E",VITE_WORLD_ADDRESS_421613:"0xD6854CB80D600cD27FEC3f37f6AE560CADEA8244",VITE_WORLD_ADDRESS_42161:"0x51e888d87387bb5faef42e5491588b0b618a533a",VITE_GRAPH_STUDIO_API_80001:"happiairdrop",VITE_GRAPH_STUDIO_API_421613:"happiairdrop-arb-goerli",VITE_GRAPH_STUDIO_API_42161:"happiairdrop-arb",VITE_LOTTERY_DURATION_PER_GAME:"600",BASE_URL:"/",MODE:"production",DEV:!1,PROD:!0,SSR:!1}&&"production")!=="production"&&m)throw new Error("remove already exists");const x=r[3](j(N));D.set(N,[r,x])}),()=>{A.delete(l),A.size===0&&D.forEach(([r,m],N)=>{m&&(m(),D.set(N,[r]))})}),Q=Array.isArray(n)?[]:Object.create(Object.getPrototypeOf(n)),B=t(Q,{deleteProperty(l,i){const r=Reflect.get(l,i);te(i);const m=Reflect.deleteProperty(l,i);return m&&S(["delete",[i],r]),m},set(l,i,r,m){const N=Reflect.has(l,i),x=Reflect.get(l,i,m);if(N&&(e(x,r)||u.has(r)&&e(x,u.get(r))))return!0;te(i),z(r)&&(r=ge(r)||r);let F=r;if(r instanceof Promise)r.then(T=>{r.status="fulfilled",r.value=T,S(["resolve",[i],T])}).catch(T=>{r.status="rejected",r.reason=T,S(["reject",[i],T])});else{!R.has(r)&&s(r)&&(F=w(r));const T=!$.has(F)&&R.get(F);T&&K(i,T)}return Reflect.set(l,i,F,m),S(["set",[i],r,x]),!0}});u.set(n,B);const Ee=[Q,O,c,pe];return R.set(B,Ee),Reflect.ownKeys(n).forEach(l=>{const i=Object.getOwnPropertyDescriptor(n,l);"value"in i&&(B[l]=n[l],delete i.value,delete i.writable),Object.defineProperty(Q,l,i)}),B})=>[w,R,$,e,t,s,a,o,c,u,f],[Ae]=me();function v(e={}){return Ae(e)}function L(e,t,s){const a=R.get(e);({VITE_WC_ID:"f0e8a3969b5c3e10dbac6efa79134014",VITE_ALCHEMY_ID:"0PGkrxTjH9jdclxTTxXoE6wrgX5tXQQY",VITE_WORLD_ADDRESS_80001:"0xa652FcC9ee53b0A85414d0c5f4F041e2D556409E",VITE_WORLD_ADDRESS_421613:"0xD6854CB80D600cD27FEC3f37f6AE560CADEA8244",VITE_WORLD_ADDRESS_42161:"0x51e888d87387bb5faef42e5491588b0b618a533a",VITE_GRAPH_STUDIO_API_80001:"happiairdrop",VITE_GRAPH_STUDIO_API_421613:"happiairdrop-arb-goerli",VITE_GRAPH_STUDIO_API_42161:"happiairdrop-arb",VITE_LOTTERY_DURATION_PER_GAME:"600",BASE_URL:"/",MODE:"production",DEV:!1,PROD:!0,SSR:!1}&&"production")!=="production"&&!a&&console.warn("Please use proxy object");let o;const c=[],u=a[3];let f=!1;const n=u(b=>{if(c.push(b),s){t(c.splice(0));return}o||(o=Promise.resolve().then(()=>{o=void 0,f&&t(c.splice(0))}))});return f=!0,()=>{f=!1,n()}}function we(e,t){const s=R.get(e);({VITE_WC_ID:"f0e8a3969b5c3e10dbac6efa79134014",VITE_ALCHEMY_ID:"0PGkrxTjH9jdclxTTxXoE6wrgX5tXQQY",VITE_WORLD_ADDRESS_80001:"0xa652FcC9ee53b0A85414d0c5f4F041e2D556409E",VITE_WORLD_ADDRESS_421613:"0xD6854CB80D600cD27FEC3f37f6AE560CADEA8244",VITE_WORLD_ADDRESS_42161:"0x51e888d87387bb5faef42e5491588b0b618a533a",VITE_GRAPH_STUDIO_API_80001:"happiairdrop",VITE_GRAPH_STUDIO_API_421613:"happiairdrop-arb-goerli",VITE_GRAPH_STUDIO_API_42161:"happiairdrop-arb",VITE_LOTTERY_DURATION_PER_GAME:"600",BASE_URL:"/",MODE:"production",DEV:!1,PROD:!0,SSR:!1}&&"production")!=="production"&&!s&&console.warn("Please use proxy object");const[a,o,c]=s;return c(a,o(),t)}let J;const y={ethereumClient:void 0,setEthereumClient(e){J=e},client(){if(J)return J;throw new Error("ClientCtrl has no client set")}},p=v({history:["ConnectWallet"],view:"ConnectWallet",data:void 0}),M={state:p,subscribe(e){return L(p,()=>e(p))},push(e,t){e!==p.view&&(p.view=e,t&&(p.data=t),p.history.push(e))},reset(e){p.view=e,p.history=[e]},replace(e){p.history.length>1&&(p.history[p.history.length-1]=e,p.view=e)},goBack(){if(p.history.length>1){p.history.pop();const[e]=p.history.slice(-1);p.view=e}},setData(e){p.data=e}},h={WALLETCONNECT_DEEPLINK_CHOICE:"WALLETCONNECT_DEEPLINK_CHOICE",W3M_VERSION:"W3M_VERSION",W3M_PREFER_INJECTED_URL_FLAG:"w3mPreferInjected",RECOMMENDED_WALLET_AMOUNT:9,isMobile(){return typeof window<"u"?!!(window.matchMedia("(pointer:coarse)").matches||/Android|webOS|iPhone|iPad|iPod|BlackBerry|Opera Mini/u.test(navigator.userAgent)):!1},isAndroid(){return h.isMobile()&&navigator.userAgent.toLowerCase().includes("android")},isIos(){const e=navigator.userAgent.toLowerCase();return h.isMobile()&&(e.includes("iphone")||e.includes("ipad"))},isHttpUrl(e){return e.startsWith("http://")||e.startsWith("https://")},isArray(e){return Array.isArray(e)&&e.length>0},formatNativeUrl(e,t,s){if(h.isHttpUrl(e))return this.formatUniversalUrl(e,t,s);let a=e;a.includes("://")||(a=e.replaceAll("/","").replaceAll(":",""),a=`${a}://`),this.setWalletConnectDeepLink(a,s);const o=encodeURIComponent(t);return`${a}wc?uri=${o}`},formatUniversalUrl(e,t,s){if(!h.isHttpUrl(e))return this.formatNativeUrl(e,t,s);let a=e;e.endsWith("/")&&(a=e.slice(0,-1)),this.setWalletConnectDeepLink(a,s);const o=encodeURIComponent(t);return`${a}/wc?uri=${o}`},async wait(e){return new Promise(t=>{setTimeout(t,e)})},openHref(e,t){window.open(e,t,"noreferrer noopener")},setWalletConnectDeepLink(e,t){localStorage.setItem(h.WALLETCONNECT_DEEPLINK_CHOICE,JSON.stringify({href:e,name:t}))},setWalletConnectAndroidDeepLink(e){const[t]=e.split("?");localStorage.setItem(h.WALLETCONNECT_DEEPLINK_CHOICE,JSON.stringify({href:t,name:"Android"}))},removeWalletConnectDeepLink(){localStorage.removeItem(h.WALLETCONNECT_DEEPLINK_CHOICE)},setWeb3ModalVersionInStorage(){typeof localStorage<"u"&&localStorage.setItem(h.W3M_VERSION,"2.4.2")},getWalletRouterData(){var e;const t=(e=M.state.data)==null?void 0:e.Wallet;if(!t)throw new Error('Missing "Wallet" view data');return t},getSwitchNetworkRouterData(){var e;const t=(e=M.state.data)==null?void 0:e.SwitchNetwork;if(!t)throw new Error('Missing "SwitchNetwork" view data');return t},isPreferInjectedFlag(){return typeof location<"u"?new URLSearchParams(location.search).has(h.W3M_PREFER_INJECTED_URL_FLAG):!1}},De=typeof location<"u"&&(location.hostname.includes("localhost")||location.protocol.includes("https")),_=v({enabled:De,userSessionId:"",events:[],connectedWalletId:void 0}),Ce={state:_,subscribe(e){return L(_.events,()=>e(we(_.events[_.events.length-1])))},initialize(){_.enabled&&typeof crypto<"u"&&(_.userSessionId=crypto.randomUUID())},setConnectedWalletId(e){_.connectedWalletId=e},click(e){if(_.enabled){const t={type:"CLICK",name:e.name,userSessionId:_.userSessionId,timestamp:Date.now(),data:e};_.events.push(t)}},track(e){if(_.enabled){const t={type:"TRACK",name:e.name,userSessionId:_.userSessionId,timestamp:Date.now(),data:e};_.events.push(t)}},view(e){if(_.enabled){const t={type:"VIEW",name:e.name,userSessionId:_.userSessionId,timestamp:Date.now(),data:e};_.events.push(t)}}},I=v({selectedChain:void 0,chains:void 0,standaloneChains:void 0,standaloneUri:void 0,isStandalone:!1,isAuth:!1,isCustomDesktop:!1,isCustomMobile:!1,isDataLoaded:!1,isUiLoaded:!1,isPreferInjected:!1,walletConnectVersion:1}),E={state:I,subscribe(e){return L(I,()=>e(I))},setChains(e){I.chains=e},setStandaloneChains(e){I.standaloneChains=e},setStandaloneUri(e){I.standaloneUri=e},getSelectedChain(){const e=y.client().getNetwork().chain;return e&&(I.selectedChain=e),I.selectedChain},setSelectedChain(e){I.selectedChain=e},setIsStandalone(e){I.isStandalone=e},setIsCustomDesktop(e){I.isCustomDesktop=e},setIsCustomMobile(e){I.isCustomMobile=e},setIsDataLoaded(e){I.isDataLoaded=e},setIsUiLoaded(e){I.isUiLoaded=e},setWalletConnectVersion(e){I.walletConnectVersion=e},setIsPreferInjected(e){I.isPreferInjected=e},setIsAuth(e){I.isAuth=e}},X=v({projectId:"",mobileWallets:void 0,desktopWallets:void 0,walletImages:void 0,chainImages:void 0,tokenImages:void 0,tokenContracts:void 0,standaloneChains:void 0,enableStandaloneMode:!1,enableAuthMode:!1,enableNetworkView:!1,enableAccountView:!0,enableExplorer:!0,defaultChain:void 0,explorerExcludedWalletIds:void 0,explorerRecommendedWalletIds:void 0,termsOfServiceUrl:void 0,privacyPolicyUrl:void 0}),W={state:X,subscribe(e){return L(X,()=>e(X))},setConfig(e){var t,s,a,o;Ce.initialize(),E.setStandaloneChains(e.standaloneChains),E.setIsStandalone(!!((t=e.standaloneChains)!=null&&t.length)||!!e.enableStandaloneMode),E.setIsAuth(!!e.enableAuthMode),E.setIsCustomMobile(!!((s=e.mobileWallets)!=null&&s.length)),E.setIsCustomDesktop(!!((a=e.desktopWallets)!=null&&a.length)),E.setWalletConnectVersion((o=e.walletConnectVersion)!=null?o:1),E.state.isStandalone||(E.setChains(y.client().chains),E.setIsPreferInjected(y.client().isInjectedProviderInstalled()&&h.isPreferInjectedFlag())),e.defaultChain&&E.setSelectedChain(e.defaultChain),h.setWeb3ModalVersionInStorage(),Object.assign(X,e)}},d=v({address:void 0,profileName:void 0,profileAvatar:void 0,profileLoading:!1,balanceLoading:!1,balance:void 0,isConnected:!1}),Se={state:d,subscribe(e){return L(d,()=>e(d))},getAccount(){const e=y.client().getAccount();d.address=e.address,d.isConnected=e.isConnected},async fetchProfile(e,t){var s;try{d.profileLoading=!0;const a=t??d.address,o=(s=E.state.chains)==null?void 0:s.find(c=>c.id===1);if(a&&o){const c=await y.client().fetchEnsName({address:a,chainId:1});if(c){const u=await y.client().fetchEnsAvatar({name:c,chainId:1});u&&await e(u),d.profileAvatar=u}d.profileName=c}}finally{d.profileLoading=!1}},async fetchBalance(e){try{const{chain:t}=y.client().getNetwork(),{tokenContracts:s}=W.state;let a;t&&s&&(a=s[t.id]),d.balanceLoading=!0;const o=e??d.address;if(o){const c=await y.client().fetchBalance({address:o,token:a});d.balance={amount:c.formatted,symbol:c.symbol}}}finally{d.balanceLoading=!1}},setAddress(e){d.address=e},setIsConnected(e){d.isConnected=e},resetBalance(){d.balance=void 0},resetAccount(){d.address=void 0,d.isConnected=!1,d.profileName=void 0,d.profileAvatar=void 0,d.balance=void 0}},ee="https://explorer-api.walletconnect.com";async function Y(e,t){const s=new URL(e,ee);return s.searchParams.append("projectId",W.state.projectId),Object.entries(t).forEach(([a,o])=>{o&&s.searchParams.append(a,String(o))}),(await fetch(s)).json()}const P={async getDesktopListings(e){return Y("/w3m/v1/getDesktopListings",e)},async getMobileListings(e){return Y("/w3m/v1/getMobileListings",e)},async getInjectedListings(e){return Y("/w3m/v1/getInjectedListings",e)},async getAllListings(e){return Y("/w3m/v1/getAllListings",e)},getWalletImageUrl(e){return`${ee}/w3m/v1/getWalletImage/${e}?projectId=${W.state.projectId}`},getAssetImageUrl(e){return`${ee}/w3m/v1/getAssetImage/${e}?projectId=${W.state.projectId}`}};var ve=Object.defineProperty,ae=Object.getOwnPropertySymbols,Oe=Object.prototype.hasOwnProperty,ye=Object.prototype.propertyIsEnumerable,re=(e,t,s)=>t in e?ve(e,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[t]=s,Le=(e,t)=>{for(var s in t||(t={}))Oe.call(t,s)&&re(e,s,t[s]);if(ae)for(var s of ae(t))ye.call(t,s)&&re(e,s,t[s]);return e};const oe=h.isMobile(),C=v({wallets:{listings:[],total:0,page:1},injectedWallets:[],search:{listings:[],total:0,page:1},recomendedWallets:[]}),Ge={state:C,async getRecomendedWallets(){const{explorerRecommendedWalletIds:e,explorerExcludedWalletIds:t}=W.state;if(e==="NONE"||t==="ALL"&&!e)return C.recomendedWallets;if(h.isArray(e)){const s={recommendedIds:e.join(",")},{listings:a}=await P.getAllListings(s),o=Object.values(a);o.sort((c,u)=>{const f=e.indexOf(c.id),w=e.indexOf(u.id);return f-w}),C.recomendedWallets=o}else{const{standaloneChains:s,walletConnectVersion:a,isAuth:o}=E.state,c=s==null?void 0:s.join(","),u=h.isArray(t),f={page:1,sdks:o?"auth_v1":void 0,entries:h.RECOMMENDED_WALLET_AMOUNT,chains:c,version:a,excludedIds:u?t.join(","):void 0},{listings:w}=oe?await P.getMobileListings(f):await P.getDesktopListings(f);C.recomendedWallets=Object.values(w)}return C.recomendedWallets},async getWallets(e){const t=Le({},e),{explorerRecommendedWalletIds:s,explorerExcludedWalletIds:a}=W.state,{recomendedWallets:o}=C;if(a==="ALL")return C.wallets;t.search||(o.length?t.excludedIds=o.map(g=>g.id).join(","):h.isArray(s)&&(t.excludedIds=s.join(","))),h.isArray(a)&&(t.excludedIds=[t.excludedIds,a].filter(Boolean).join(",")),E.state.isAuth&&(t.sdks="auth_v1");const{page:c,search:u}=e,{listings:f,total:w}=oe?await P.getMobileListings(t):await P.getDesktopListings(t),n=Object.values(f),b=u?"search":"wallets";return C[b]={listings:[...C[b].listings,...n],total:w,page:c??1},{listings:n,total:w}},async getInjectedWallets(){const{listings:e}=await P.getInjectedListings({}),t=Object.values(e);return C.injectedWallets=t,C.injectedWallets},getWalletImageUrl(e){return P.getWalletImageUrl(e)},getAssetImageUrl(e){return P.getAssetImageUrl(e)},resetSearch(){C.search={listings:[],total:0,page:1}}},H=v({pairingUri:"",pairingError:!1}),ie={state:H,subscribe(e){return L(H,()=>e(H))},setPairingUri(e){H.pairingUri=e},setPairingError(e){H.pairingError=e}},k=v({open:!1}),q={state:k,subscribe(e){return L(k,()=>e(k))},async open(e){return new Promise(t=>{const{isStandalone:s,isUiLoaded:a,isDataLoaded:o,isPreferInjected:c,selectedChain:u}=E.state,{isConnected:f}=Se.state,{enableNetworkView:w}=W.state;if(s)E.setStandaloneUri(e==null?void 0:e.uri),E.setStandaloneChains(e==null?void 0:e.standaloneChains),M.reset("ConnectWallet");else if(e!=null&&e.route)M.reset(e.route);else if(f)M.reset("Account");else if(w)M.reset("SelectNetwork");else if(c){y.client().connectConnector("injected",u==null?void 0:u.id).catch(b=>console.error(b)),t();return}else M.reset("ConnectWallet");const{pairingUri:n}=ie.state;if(a&&o&&(s||n||f))k.open=!0,t();else{const b=setInterval(()=>{const g=E.state,A=ie.state;g.isUiLoaded&&g.isDataLoaded&&(g.isStandalone||A.pairingUri||f)&&(clearInterval(b),k.open=!0,t())},200)}})},close(){k.open=!1}};var Te=Object.defineProperty,le=Object.getOwnPropertySymbols,Pe=Object.prototype.hasOwnProperty,Re=Object.prototype.propertyIsEnumerable,ce=(e,t,s)=>t in e?Te(e,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[t]=s,We=(e,t)=>{for(var s in t||(t={}))Pe.call(t,s)&&ce(e,s,t[s]);if(le)for(var s of le(t))Re.call(t,s)&&ce(e,s,t[s]);return e};function je(){return typeof matchMedia<"u"&&matchMedia("(prefers-color-scheme: dark)").matches}const G=v({themeMode:je()?"dark":"light"}),de={state:G,subscribe(e){return L(G,()=>e(G))},setThemeConfig(e){const{themeMode:t,themeVariables:s}=e;t&&(G.themeMode=t),s&&(G.themeVariables=We({},s))}},U=v({open:!1,message:"",variant:"success"}),Be={state:U,subscribe(e){return L(U,()=>e(U))},openToast(e,t){U.open=!0,U.message=e,U.variant=t},closeToast(){U.open=!1}};typeof window<"u"&&(window.Buffer||(window.Buffer=Ie.Buffer),window.global||(window.global=window),window.process||(window.process={env:{}}));var Ue=Object.defineProperty,ue=Object.getOwnPropertySymbols,Me=Object.prototype.hasOwnProperty,Ve=Object.prototype.propertyIsEnumerable,fe=(e,t,s)=>t in e?Ue(e,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[t]=s,Ne=(e,t)=>{for(var s in t||(t={}))Me.call(t,s)&&fe(e,s,t[s]);if(ue)for(var s of ue(t))Ve.call(t,s)&&fe(e,s,t[s]);return e};class ke{constructor(t){this.openModal=q.open,this.closeModal=q.close,this.subscribeModal=q.subscribe,this.setTheme=de.setThemeConfig,de.setThemeConfig(t),W.setConfig(Ne({enableStandaloneMode:!0},t)),this.initUi()}async initUi(){if(typeof window<"u"){await he(()=>import("./index.es-4e217eb3.js"),["assets/index.es-4e217eb3.js","assets/index-50cfc3e1.js","assets/index-03e331f2.css"]);const t=document.createElement("w3m-modal");document.body.insertAdjacentElement("beforeend",t),E.setIsUiLoaded(!0)}}}const Fe=Object.freeze(Object.defineProperty({__proto__:null,Web3Modal:ke},Symbol.toStringTag,{value:"Module"}));export{y as C,Ce as H,Se as K,ie as _,de as a,M as b,h as c,E as d,Fe as i,Ge as n,Be as o,q as s,W as y};
