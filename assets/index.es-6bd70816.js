import{i as ge,_ as Ee}from"./index-5a5fb583.js";const Ie=Symbol(),se=Object.getPrototypeOf,Z=new WeakMap,me=e=>e&&(Z.has(e)?Z.get(e):se(e)===Object.prototype||se(e)===Array.prototype),be=e=>me(e)&&e[Ie]||null,ne=(e,t=!0)=>{Z.set(e,t)},z=e=>typeof e=="object"&&e!==null,P=new WeakMap,G=new WeakSet,we=(e=Object.is,t=(n,I)=>new Proxy(n,I),s=n=>z(n)&&!G.has(n)&&(Array.isArray(n)||!(Symbol.iterator in n))&&!(n instanceof WeakMap)&&!(n instanceof WeakSet)&&!(n instanceof Error)&&!(n instanceof Number)&&!(n instanceof Date)&&!(n instanceof String)&&!(n instanceof RegExp)&&!(n instanceof ArrayBuffer),a=n=>{switch(n.status){case"fulfilled":return n.value;case"rejected":throw n.reason;default:throw n}},o=new WeakMap,c=(n,I,b=a)=>{const A=o.get(n);if((A==null?void 0:A[0])===I)return A[1];const D=Array.isArray(n)?[]:Object.create(Object.getPrototypeOf(n));return ne(D,!0),o.set(n,[I,D]),Reflect.ownKeys(n).forEach(V=>{if(Object.getOwnPropertyDescriptor(D,V))return;const L=Reflect.get(n,V),j={value:L,enumerable:!0,configurable:!0};if(G.has(L))ne(L,!1);else if(L instanceof Promise)delete j.value,j.get=()=>b(L);else if(P.has(L)){const[_,K]=P.get(L);j.value=c(_,K(),b)}Object.defineProperty(D,V,j)}),D},u=new WeakMap,f=[1,1],C=n=>{if(!z(n))throw new Error("object required");const I=u.get(n);if(I)return I;let b=f[0];const A=new Set,D=(l,i=++f[0])=>{b!==i&&(b=i,A.forEach(r=>r(l,i)))};let V=f[1];const L=(l=++f[1])=>(V!==l&&!A.size&&(V=l,_.forEach(([i])=>{const r=i[1](l);r>b&&(b=r)})),b),j=l=>(i,r)=>{const w=[...i];w[1]=[l,...w[1]],D(w,r)},_=new Map,K=(l,i)=>{if(({VITE_WC_ID:"f0e8a3969b5c3e10dbac6efa79134014",VITE_ALCHEMY_ID:"0PGkrxTjH9jdclxTTxXoE6wrgX5tXQQY",VITE_WORLD_ADDRESS_80001:"0xa652FcC9ee53b0A85414d0c5f4F041e2D556409E",VITE_WORLD_ADDRESS_421613:"0xD6854CB80D600cD27FEC3f37f6AE560CADEA8244",VITE_GRAPH_STUDIO_API:"https://api.studio.thegraph.com/query/48656/lotterygame/version/latest",VITE_LOTTERY_DURATION_PER_GAME:"600",BASE_URL:"/",MODE:"production",DEV:!1,PROD:!0,SSR:!1}&&"production")!=="production"&&_.has(l))throw new Error("prop listener already exists");if(A.size){const r=i[3](j(l));_.set(l,[i,r])}else _.set(l,[i])},te=l=>{var i;const r=_.get(l);r&&(_.delete(l),(i=r[1])==null||i.call(r))},pe=l=>(A.add(l),A.size===1&&_.forEach(([r,w],N)=>{if(({VITE_WC_ID:"f0e8a3969b5c3e10dbac6efa79134014",VITE_ALCHEMY_ID:"0PGkrxTjH9jdclxTTxXoE6wrgX5tXQQY",VITE_WORLD_ADDRESS_80001:"0xa652FcC9ee53b0A85414d0c5f4F041e2D556409E",VITE_WORLD_ADDRESS_421613:"0xD6854CB80D600cD27FEC3f37f6AE560CADEA8244",VITE_GRAPH_STUDIO_API:"https://api.studio.thegraph.com/query/48656/lotterygame/version/latest",VITE_LOTTERY_DURATION_PER_GAME:"600",BASE_URL:"/",MODE:"production",DEV:!1,PROD:!0,SSR:!1}&&"production")!=="production"&&w)throw new Error("remove already exists");const x=r[3](j(N));_.set(N,[r,x])}),()=>{A.delete(l),A.size===0&&_.forEach(([r,w],N)=>{w&&(w(),_.set(N,[r]))})}),Q=Array.isArray(n)?[]:Object.create(Object.getPrototypeOf(n)),$=t(Q,{deleteProperty(l,i){const r=Reflect.get(l,i);te(i);const w=Reflect.deleteProperty(l,i);return w&&D(["delete",[i],r]),w},set(l,i,r,w){const N=Reflect.has(l,i),x=Reflect.get(l,i,w);if(N&&(e(x,r)||u.has(r)&&e(x,u.get(r))))return!0;te(i),z(r)&&(r=be(r)||r);let H=r;if(r instanceof Promise)r.then(W=>{r.status="fulfilled",r.value=W,D(["resolve",[i],W])}).catch(W=>{r.status="rejected",r.reason=W,D(["reject",[i],W])});else{!P.has(r)&&s(r)&&(H=C(r));const W=!G.has(H)&&P.get(H);W&&K(i,W)}return Reflect.set(l,i,H,w),D(["set",[i],r,x]),!0}});u.set(n,$);const he=[Q,L,c,pe];return P.set($,he),Reflect.ownKeys(n).forEach(l=>{const i=Object.getOwnPropertyDescriptor(n,l);"value"in i&&($[l]=n[l],delete i.value,delete i.writable),Object.defineProperty(Q,l,i)}),$})=>[C,P,G,e,t,s,a,o,c,u,f],[Ae]=we();function v(e={}){return Ae(e)}function S(e,t,s){const a=P.get(e);({VITE_WC_ID:"f0e8a3969b5c3e10dbac6efa79134014",VITE_ALCHEMY_ID:"0PGkrxTjH9jdclxTTxXoE6wrgX5tXQQY",VITE_WORLD_ADDRESS_80001:"0xa652FcC9ee53b0A85414d0c5f4F041e2D556409E",VITE_WORLD_ADDRESS_421613:"0xD6854CB80D600cD27FEC3f37f6AE560CADEA8244",VITE_GRAPH_STUDIO_API:"https://api.studio.thegraph.com/query/48656/lotterygame/version/latest",VITE_LOTTERY_DURATION_PER_GAME:"600",BASE_URL:"/",MODE:"production",DEV:!1,PROD:!0,SSR:!1}&&"production")!=="production"&&!a&&console.warn("Please use proxy object");let o;const c=[],u=a[3];let f=!1;const n=u(I=>{if(c.push(I),s){t(c.splice(0));return}o||(o=Promise.resolve().then(()=>{o=void 0,f&&t(c.splice(0))}))});return f=!0,()=>{f=!1,n()}}function Ce(e,t){const s=P.get(e);({VITE_WC_ID:"f0e8a3969b5c3e10dbac6efa79134014",VITE_ALCHEMY_ID:"0PGkrxTjH9jdclxTTxXoE6wrgX5tXQQY",VITE_WORLD_ADDRESS_80001:"0xa652FcC9ee53b0A85414d0c5f4F041e2D556409E",VITE_WORLD_ADDRESS_421613:"0xD6854CB80D600cD27FEC3f37f6AE560CADEA8244",VITE_GRAPH_STUDIO_API:"https://api.studio.thegraph.com/query/48656/lotterygame/version/latest",VITE_LOTTERY_DURATION_PER_GAME:"600",BASE_URL:"/",MODE:"production",DEV:!1,PROD:!0,SSR:!1}&&"production")!=="production"&&!s&&console.warn("Please use proxy object");const[a,o,c]=s;return c(a,o(),t)}let q;const O={ethereumClient:void 0,setEthereumClient(e){q=e},client(){if(q)return q;throw new Error("ClientCtrl has no client set")}},p=v({history:["ConnectWallet"],view:"ConnectWallet",data:void 0}),U={state:p,subscribe(e){return S(p,()=>e(p))},push(e,t){e!==p.view&&(p.view=e,t&&(p.data=t),p.history.push(e))},reset(e){p.view=e,p.history=[e]},replace(e){p.history.length>1&&(p.history[p.history.length-1]=e,p.view=e)},goBack(){if(p.history.length>1){p.history.pop();const[e]=p.history.slice(-1);p.view=e}},setData(e){p.data=e}},E={WALLETCONNECT_DEEPLINK_CHOICE:"WALLETCONNECT_DEEPLINK_CHOICE",W3M_VERSION:"W3M_VERSION",W3M_PREFER_INJECTED_URL_FLAG:"w3mPreferInjected",RECOMMENDED_WALLET_AMOUNT:9,isMobile(){return typeof window<"u"?!!(window.matchMedia("(pointer:coarse)").matches||/Android|webOS|iPhone|iPad|iPod|BlackBerry|Opera Mini/u.test(navigator.userAgent)):!1},isAndroid(){return E.isMobile()&&navigator.userAgent.toLowerCase().includes("android")},isIos(){const e=navigator.userAgent.toLowerCase();return E.isMobile()&&(e.includes("iphone")||e.includes("ipad"))},isHttpUrl(e){return e.startsWith("http://")||e.startsWith("https://")},isArray(e){return Array.isArray(e)&&e.length>0},formatNativeUrl(e,t,s){if(E.isHttpUrl(e))return this.formatUniversalUrl(e,t,s);let a=e;a.includes("://")||(a=e.replaceAll("/","").replaceAll(":",""),a=`${a}://`),this.setWalletConnectDeepLink(a,s);const o=encodeURIComponent(t);return`${a}wc?uri=${o}`},formatUniversalUrl(e,t,s){if(!E.isHttpUrl(e))return this.formatNativeUrl(e,t,s);let a=e;e.endsWith("/")&&(a=e.slice(0,-1)),this.setWalletConnectDeepLink(a,s);const o=encodeURIComponent(t);return`${a}/wc?uri=${o}`},async wait(e){return new Promise(t=>{setTimeout(t,e)})},openHref(e,t){window.open(e,t,"noreferrer noopener")},setWalletConnectDeepLink(e,t){localStorage.setItem(E.WALLETCONNECT_DEEPLINK_CHOICE,JSON.stringify({href:e,name:t}))},setWalletConnectAndroidDeepLink(e){const[t]=e.split("?");localStorage.setItem(E.WALLETCONNECT_DEEPLINK_CHOICE,JSON.stringify({href:t,name:"Android"}))},removeWalletConnectDeepLink(){localStorage.removeItem(E.WALLETCONNECT_DEEPLINK_CHOICE)},setWeb3ModalVersionInStorage(){typeof localStorage<"u"&&localStorage.setItem(E.W3M_VERSION,"2.4.2")},getWalletRouterData(){var e;const t=(e=U.state.data)==null?void 0:e.Wallet;if(!t)throw new Error('Missing "Wallet" view data');return t},getSwitchNetworkRouterData(){var e;const t=(e=U.state.data)==null?void 0:e.SwitchNetwork;if(!t)throw new Error('Missing "SwitchNetwork" view data');return t},isPreferInjectedFlag(){return typeof location<"u"?new URLSearchParams(location.search).has(E.W3M_PREFER_INJECTED_URL_FLAG):!1}},_e=typeof location<"u"&&(location.hostname.includes("localhost")||location.protocol.includes("https")),m=v({enabled:_e,userSessionId:"",events:[],connectedWalletId:void 0}),ye={state:m,subscribe(e){return S(m.events,()=>e(Ce(m.events[m.events.length-1])))},initialize(){m.enabled&&typeof crypto<"u"&&(m.userSessionId=crypto.randomUUID())},setConnectedWalletId(e){m.connectedWalletId=e},click(e){if(m.enabled){const t={type:"CLICK",name:e.name,userSessionId:m.userSessionId,timestamp:Date.now(),data:e};m.events.push(t)}},track(e){if(m.enabled){const t={type:"TRACK",name:e.name,userSessionId:m.userSessionId,timestamp:Date.now(),data:e};m.events.push(t)}},view(e){if(m.enabled){const t={type:"VIEW",name:e.name,userSessionId:m.userSessionId,timestamp:Date.now(),data:e};m.events.push(t)}}},g=v({selectedChain:void 0,chains:void 0,standaloneChains:void 0,standaloneUri:void 0,isStandalone:!1,isAuth:!1,isCustomDesktop:!1,isCustomMobile:!1,isDataLoaded:!1,isUiLoaded:!1,isPreferInjected:!1,walletConnectVersion:1}),h={state:g,subscribe(e){return S(g,()=>e(g))},setChains(e){g.chains=e},setStandaloneChains(e){g.standaloneChains=e},setStandaloneUri(e){g.standaloneUri=e},getSelectedChain(){const e=O.client().getNetwork().chain;return e&&(g.selectedChain=e),g.selectedChain},setSelectedChain(e){g.selectedChain=e},setIsStandalone(e){g.isStandalone=e},setIsCustomDesktop(e){g.isCustomDesktop=e},setIsCustomMobile(e){g.isCustomMobile=e},setIsDataLoaded(e){g.isDataLoaded=e},setIsUiLoaded(e){g.isUiLoaded=e},setWalletConnectVersion(e){g.walletConnectVersion=e},setIsPreferInjected(e){g.isPreferInjected=e},setIsAuth(e){g.isAuth=e}},X=v({projectId:"",mobileWallets:void 0,desktopWallets:void 0,walletImages:void 0,chainImages:void 0,tokenImages:void 0,tokenContracts:void 0,standaloneChains:void 0,enableStandaloneMode:!1,enableAuthMode:!1,enableNetworkView:!1,enableAccountView:!0,enableExplorer:!0,defaultChain:void 0,explorerExcludedWalletIds:void 0,explorerRecommendedWalletIds:void 0,termsOfServiceUrl:void 0,privacyPolicyUrl:void 0}),R={state:X,subscribe(e){return S(X,()=>e(X))},setConfig(e){var t,s,a,o;ye.initialize(),h.setStandaloneChains(e.standaloneChains),h.setIsStandalone(!!((t=e.standaloneChains)!=null&&t.length)||!!e.enableStandaloneMode),h.setIsAuth(!!e.enableAuthMode),h.setIsCustomMobile(!!((s=e.mobileWallets)!=null&&s.length)),h.setIsCustomDesktop(!!((a=e.desktopWallets)!=null&&a.length)),h.setWalletConnectVersion((o=e.walletConnectVersion)!=null?o:1),h.state.isStandalone||(h.setChains(O.client().chains),h.setIsPreferInjected(O.client().isInjectedProviderInstalled()&&E.isPreferInjectedFlag())),e.defaultChain&&h.setSelectedChain(e.defaultChain),E.setWeb3ModalVersionInStorage(),Object.assign(X,e)}},d=v({address:void 0,profileName:void 0,profileAvatar:void 0,profileLoading:!1,balanceLoading:!1,balance:void 0,isConnected:!1}),De={state:d,subscribe(e){return S(d,()=>e(d))},getAccount(){const e=O.client().getAccount();d.address=e.address,d.isConnected=e.isConnected},async fetchProfile(e,t){var s;try{d.profileLoading=!0;const a=t??d.address,o=(s=h.state.chains)==null?void 0:s.find(c=>c.id===1);if(a&&o){const c=await O.client().fetchEnsName({address:a,chainId:1});if(c){const u=await O.client().fetchEnsAvatar({name:c,chainId:1});u&&await e(u),d.profileAvatar=u}d.profileName=c}}finally{d.profileLoading=!1}},async fetchBalance(e){try{const{chain:t}=O.client().getNetwork(),{tokenContracts:s}=R.state;let a;t&&s&&(a=s[t.id]),d.balanceLoading=!0;const o=e??d.address;if(o){const c=await O.client().fetchBalance({address:o,token:a});d.balance={amount:c.formatted,symbol:c.symbol}}}finally{d.balanceLoading=!1}},setAddress(e){d.address=e},setIsConnected(e){d.isConnected=e},resetBalance(){d.balance=void 0},resetAccount(){d.address=void 0,d.isConnected=!1,d.profileName=void 0,d.profileAvatar=void 0,d.balance=void 0}},ee="https://explorer-api.walletconnect.com";async function Y(e,t){const s=new URL(e,ee);return s.searchParams.append("projectId",R.state.projectId),Object.entries(t).forEach(([a,o])=>{o&&s.searchParams.append(a,String(o))}),(await fetch(s)).json()}const T={async getDesktopListings(e){return Y("/w3m/v1/getDesktopListings",e)},async getMobileListings(e){return Y("/w3m/v1/getMobileListings",e)},async getInjectedListings(e){return Y("/w3m/v1/getInjectedListings",e)},async getAllListings(e){return Y("/w3m/v1/getAllListings",e)},getWalletImageUrl(e){return`${ee}/w3m/v1/getWalletImage/${e}?projectId=${R.state.projectId}`},getAssetImageUrl(e){return`${ee}/w3m/v1/getAssetImage/${e}?projectId=${R.state.projectId}`}};var ve=Object.defineProperty,ae=Object.getOwnPropertySymbols,Le=Object.prototype.hasOwnProperty,Oe=Object.prototype.propertyIsEnumerable,re=(e,t,s)=>t in e?ve(e,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[t]=s,Se=(e,t)=>{for(var s in t||(t={}))Le.call(t,s)&&re(e,s,t[s]);if(ae)for(var s of ae(t))Oe.call(t,s)&&re(e,s,t[s]);return e};const oe=E.isMobile(),y=v({wallets:{listings:[],total:0,page:1},injectedWallets:[],search:{listings:[],total:0,page:1},recomendedWallets:[]}),Fe={state:y,async getRecomendedWallets(){const{explorerRecommendedWalletIds:e,explorerExcludedWalletIds:t}=R.state;if(e==="NONE"||t==="ALL"&&!e)return y.recomendedWallets;if(E.isArray(e)){const s={recommendedIds:e.join(",")},{listings:a}=await T.getAllListings(s),o=Object.values(a);o.sort((c,u)=>{const f=e.indexOf(c.id),C=e.indexOf(u.id);return f-C}),y.recomendedWallets=o}else{const{standaloneChains:s,walletConnectVersion:a,isAuth:o}=h.state,c=s==null?void 0:s.join(","),u=E.isArray(t),f={page:1,sdks:o?"auth_v1":void 0,entries:E.RECOMMENDED_WALLET_AMOUNT,chains:c,version:a,excludedIds:u?t.join(","):void 0},{listings:C}=oe?await T.getMobileListings(f):await T.getDesktopListings(f);y.recomendedWallets=Object.values(C)}return y.recomendedWallets},async getWallets(e){const t=Se({},e),{explorerRecommendedWalletIds:s,explorerExcludedWalletIds:a}=R.state,{recomendedWallets:o}=y;if(a==="ALL")return y.wallets;t.search||(o.length?t.excludedIds=o.map(b=>b.id).join(","):E.isArray(s)&&(t.excludedIds=s.join(","))),E.isArray(a)&&(t.excludedIds=[t.excludedIds,a].filter(Boolean).join(",")),h.state.isAuth&&(t.sdks="auth_v1");const{page:c,search:u}=e,{listings:f,total:C}=oe?await T.getMobileListings(t):await T.getDesktopListings(t),n=Object.values(f),I=u?"search":"wallets";return y[I]={listings:[...y[I].listings,...n],total:C,page:c??1},{listings:n,total:C}},async getInjectedWallets(){const{listings:e}=await T.getInjectedListings({}),t=Object.values(e);return y.injectedWallets=t,y.injectedWallets},getWalletImageUrl(e){return T.getWalletImageUrl(e)},getAssetImageUrl(e){return T.getAssetImageUrl(e)},resetSearch(){y.search={listings:[],total:0,page:1}}},B=v({pairingUri:"",pairingError:!1}),ie={state:B,subscribe(e){return S(B,()=>e(B))},setPairingUri(e){B.pairingUri=e},setPairingError(e){B.pairingError=e}},k=v({open:!1}),J={state:k,subscribe(e){return S(k,()=>e(k))},async open(e){return new Promise(t=>{const{isStandalone:s,isUiLoaded:a,isDataLoaded:o,isPreferInjected:c,selectedChain:u}=h.state,{isConnected:f}=De.state,{enableNetworkView:C}=R.state;if(s)h.setStandaloneUri(e==null?void 0:e.uri),h.setStandaloneChains(e==null?void 0:e.standaloneChains),U.reset("ConnectWallet");else if(e!=null&&e.route)U.reset(e.route);else if(f)U.reset("Account");else if(C)U.reset("SelectNetwork");else if(c){O.client().connectConnector("injected",u==null?void 0:u.id).catch(I=>console.error(I)),t();return}else U.reset("ConnectWallet");const{pairingUri:n}=ie.state;if(a&&o&&(s||n||f))k.open=!0,t();else{const I=setInterval(()=>{const b=h.state,A=ie.state;b.isUiLoaded&&b.isDataLoaded&&(b.isStandalone||A.pairingUri||f)&&(clearInterval(I),k.open=!0,t())},200)}})},close(){k.open=!1}};var We=Object.defineProperty,le=Object.getOwnPropertySymbols,Te=Object.prototype.hasOwnProperty,Pe=Object.prototype.propertyIsEnumerable,ce=(e,t,s)=>t in e?We(e,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[t]=s,Re=(e,t)=>{for(var s in t||(t={}))Te.call(t,s)&&ce(e,s,t[s]);if(le)for(var s of le(t))Pe.call(t,s)&&ce(e,s,t[s]);return e};function je(){return typeof matchMedia<"u"&&matchMedia("(prefers-color-scheme: dark)").matches}const F=v({themeMode:je()?"dark":"light"}),de={state:F,subscribe(e){return S(F,()=>e(F))},setThemeConfig(e){const{themeMode:t,themeVariables:s}=e;t&&(F.themeMode=t),s&&(F.themeVariables=Re({},s))}},M=v({open:!1,message:"",variant:"success"}),$e={state:M,subscribe(e){return S(M,()=>e(M))},openToast(e,t){M.open=!0,M.message=e,M.variant=t},closeToast(){M.open=!1}};typeof window<"u"&&(window.Buffer||(window.Buffer=ge.Buffer),window.global||(window.global=window),window.process||(window.process={env:{}}));var Me=Object.defineProperty,ue=Object.getOwnPropertySymbols,Ue=Object.prototype.hasOwnProperty,Ve=Object.prototype.propertyIsEnumerable,fe=(e,t,s)=>t in e?Me(e,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[t]=s,Ne=(e,t)=>{for(var s in t||(t={}))Ue.call(t,s)&&fe(e,s,t[s]);if(ue)for(var s of ue(t))Ve.call(t,s)&&fe(e,s,t[s]);return e};class ke{constructor(t){this.openModal=J.open,this.closeModal=J.close,this.subscribeModal=J.subscribe,this.setTheme=de.setThemeConfig,de.setThemeConfig(t),R.setConfig(Ne({enableStandaloneMode:!0},t)),this.initUi()}async initUi(){if(typeof window<"u"){await Ee(()=>import("./index.es-a5d22877.js"),["assets/index.es-a5d22877.js","assets/index-5a5fb583.js","assets/index-50525ad3.css"]);const t=document.createElement("w3m-modal");document.body.insertAdjacentElement("beforeend",t),h.setIsUiLoaded(!0)}}}const He=Object.freeze(Object.defineProperty({__proto__:null,Web3Modal:ke},Symbol.toStringTag,{value:"Module"}));export{O as C,ye as H,De as K,ie as _,de as a,U as b,E as c,h as d,He as i,Fe as n,$e as o,J as s,R as y};
