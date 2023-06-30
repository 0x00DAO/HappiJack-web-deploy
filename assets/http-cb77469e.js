import{c as A,e as ct,h as K}from"./index-53ceb423.js";var ut={exports:{}};/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */(function(e){var t,r,l,d,h,b,P,B,J,M,w,O,R,E,L,p,j,x,$,X,z,Q,k;(function(v){var W=typeof A=="object"?A:typeof self=="object"?self:typeof this=="object"?this:{};v(n(W,n(e.exports)));function n(o,i){return o!==W&&(typeof Object.create=="function"?Object.defineProperty(o,"__esModule",{value:!0}):o.__esModule=!0),function(a,c){return o[a]=i?i(a,c):c}}})(function(v){var W=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(n,o){n.__proto__=o}||function(n,o){for(var i in o)o.hasOwnProperty(i)&&(n[i]=o[i])};t=function(n,o){W(n,o);function i(){this.constructor=n}n.prototype=o===null?Object.create(o):(i.prototype=o.prototype,new i)},r=Object.assign||function(n){for(var o,i=1,a=arguments.length;i<a;i++){o=arguments[i];for(var c in o)Object.prototype.hasOwnProperty.call(o,c)&&(n[c]=o[c])}return n},l=function(n,o){var i={};for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&o.indexOf(a)<0&&(i[a]=n[a]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var c=0,a=Object.getOwnPropertySymbols(n);c<a.length;c++)o.indexOf(a[c])<0&&Object.prototype.propertyIsEnumerable.call(n,a[c])&&(i[a[c]]=n[a[c]]);return i},d=function(n,o,i,a){var c=arguments.length,s=c<3?o:a===null?a=Object.getOwnPropertyDescriptor(o,i):a,u;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")s=Reflect.decorate(n,o,i,a);else for(var y=n.length-1;y>=0;y--)(u=n[y])&&(s=(c<3?u(s):c>3?u(o,i,s):u(o,i))||s);return c>3&&s&&Object.defineProperty(o,i,s),s},h=function(n,o){return function(i,a){o(i,a,n)}},b=function(n,o){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(n,o)},P=function(n,o,i,a){function c(s){return s instanceof i?s:new i(function(u){u(s)})}return new(i||(i=Promise))(function(s,u){function y(m){try{f(a.next(m))}catch(D){u(D)}}function T(m){try{f(a.throw(m))}catch(D){u(D)}}function f(m){m.done?s(m.value):c(m.value).then(y,T)}f((a=a.apply(n,o||[])).next())})},B=function(n,o){var i={label:0,sent:function(){if(s[0]&1)throw s[1];return s[1]},trys:[],ops:[]},a,c,s,u;return u={next:y(0),throw:y(1),return:y(2)},typeof Symbol=="function"&&(u[Symbol.iterator]=function(){return this}),u;function y(f){return function(m){return T([f,m])}}function T(f){if(a)throw new TypeError("Generator is already executing.");for(;i;)try{if(a=1,c&&(s=f[0]&2?c.return:f[0]?c.throw||((s=c.return)&&s.call(c),0):c.next)&&!(s=s.call(c,f[1])).done)return s;switch(c=0,s&&(f=[f[0]&2,s.value]),f[0]){case 0:case 1:s=f;break;case 4:return i.label++,{value:f[1],done:!1};case 5:i.label++,c=f[1],f=[0];continue;case 7:f=i.ops.pop(),i.trys.pop();continue;default:if(s=i.trys,!(s=s.length>0&&s[s.length-1])&&(f[0]===6||f[0]===2)){i=0;continue}if(f[0]===3&&(!s||f[1]>s[0]&&f[1]<s[3])){i.label=f[1];break}if(f[0]===6&&i.label<s[1]){i.label=s[1],s=f;break}if(s&&i.label<s[2]){i.label=s[2],i.ops.push(f);break}s[2]&&i.ops.pop(),i.trys.pop();continue}f=o.call(n,i)}catch(m){f=[6,m],c=0}finally{a=s=0}if(f[0]&5)throw f[1];return{value:f[0]?f[1]:void 0,done:!0}}},k=function(n,o,i,a){a===void 0&&(a=i),n[a]=o[i]},J=function(n,o){for(var i in n)i!=="default"&&!o.hasOwnProperty(i)&&(o[i]=n[i])},M=function(n){var o=typeof Symbol=="function"&&Symbol.iterator,i=o&&n[o],a=0;if(i)return i.call(n);if(n&&typeof n.length=="number")return{next:function(){return n&&a>=n.length&&(n=void 0),{value:n&&n[a++],done:!n}}};throw new TypeError(o?"Object is not iterable.":"Symbol.iterator is not defined.")},w=function(n,o){var i=typeof Symbol=="function"&&n[Symbol.iterator];if(!i)return n;var a=i.call(n),c,s=[],u;try{for(;(o===void 0||o-- >0)&&!(c=a.next()).done;)s.push(c.value)}catch(y){u={error:y}}finally{try{c&&!c.done&&(i=a.return)&&i.call(a)}finally{if(u)throw u.error}}return s},O=function(){for(var n=[],o=0;o<arguments.length;o++)n=n.concat(w(arguments[o]));return n},R=function(){for(var n=0,o=0,i=arguments.length;o<i;o++)n+=arguments[o].length;for(var a=Array(n),c=0,o=0;o<i;o++)for(var s=arguments[o],u=0,y=s.length;u<y;u++,c++)a[c]=s[u];return a},E=function(n){return this instanceof E?(this.v=n,this):new E(n)},L=function(n,o,i){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var a=i.apply(n,o||[]),c,s=[];return c={},u("next"),u("throw"),u("return"),c[Symbol.asyncIterator]=function(){return this},c;function u(_){a[_]&&(c[_]=function(N){return new Promise(function(H,_t){s.push([_,N,H,_t])>1||y(_,N)})})}function y(_,N){try{T(a[_](N))}catch(H){D(s[0][3],H)}}function T(_){_.value instanceof E?Promise.resolve(_.value.v).then(f,m):D(s[0][2],_)}function f(_){y("next",_)}function m(_){y("throw",_)}function D(_,N){_(N),s.shift(),s.length&&y(s[0][0],s[0][1])}},p=function(n){var o,i;return o={},a("next"),a("throw",function(c){throw c}),a("return"),o[Symbol.iterator]=function(){return this},o;function a(c,s){o[c]=n[c]?function(u){return(i=!i)?{value:E(n[c](u)),done:c==="return"}:s?s(u):u}:s}},j=function(n){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var o=n[Symbol.asyncIterator],i;return o?o.call(n):(n=typeof M=="function"?M(n):n[Symbol.iterator](),i={},a("next"),a("throw"),a("return"),i[Symbol.asyncIterator]=function(){return this},i);function a(s){i[s]=n[s]&&function(u){return new Promise(function(y,T){u=n[s](u),c(y,T,u.done,u.value)})}}function c(s,u,y,T){Promise.resolve(T).then(function(f){s({value:f,done:y})},u)}},x=function(n,o){return Object.defineProperty?Object.defineProperty(n,"raw",{value:o}):n.raw=o,n},$=function(n){if(n&&n.__esModule)return n;var o={};if(n!=null)for(var i in n)Object.hasOwnProperty.call(n,i)&&(o[i]=n[i]);return o.default=n,o},X=function(n){return n&&n.__esModule?n:{default:n}},z=function(n,o){if(!o.has(n))throw new TypeError("attempted to get private field on non-instance");return o.get(n)},Q=function(n,o,i){if(!o.has(n))throw new TypeError("attempted to set private field on non-instance");return o.set(n,i),i},v("__extends",t),v("__assign",r),v("__rest",l),v("__decorate",d),v("__param",h),v("__metadata",b),v("__awaiter",P),v("__generator",B),v("__exportStar",J),v("__createBinding",k),v("__values",M),v("__read",w),v("__spread",O),v("__spreadArrays",R),v("__await",E),v("__asyncGenerator",L),v("__asyncDelegator",p),v("__asyncValues",j),v("__makeTemplateObject",x),v("__importStar",$),v("__importDefault",X),v("__classPrivateFieldGet",z),v("__classPrivateFieldSet",Q)})})(ut);var wt=ut.exports,g={};Object.defineProperty(g,"__esModule",{value:!0});var mt=g.getLocalStorage=Jt=g.getLocalStorageOrThrow=Ut=g.getCrypto=Mt=g.getCryptoOrThrow=Nt=g.getLocation=Ft=g.getLocationOrThrow=jt=g.getNavigator=Pt=g.getNavigatorOrThrow=St=g.getDocument=Rt=g.getDocumentOrThrow=Et=g.getFromWindowOrThrow=bt=g.getFromWindow=void 0;function F(e){let t;return typeof window<"u"&&typeof window[e]<"u"&&(t=window[e]),t}var bt=g.getFromWindow=F;function I(e){const t=F(e);if(!t)throw new Error(`${e} is not defined in Window`);return t}var Et=g.getFromWindowOrThrow=I;function Ot(){return I("document")}var Rt=g.getDocumentOrThrow=Ot;function Tt(){return F("document")}var St=g.getDocument=Tt;function Ct(){return I("navigator")}var Pt=g.getNavigatorOrThrow=Ct;function Lt(){return F("navigator")}var jt=g.getNavigator=Lt;function At(){return I("location")}var Ft=g.getLocationOrThrow=At;function Dt(){return F("location")}var Nt=g.getLocation=Dt;function It(){return I("crypto")}var Mt=g.getCryptoOrThrow=It;function xt(){return F("crypto")}var Ut=g.getCrypto=xt;function Bt(){return I("localStorage")}var Jt=g.getLocalStorageOrThrow=Bt;function $t(){return F("localStorage")}mt=g.getLocalStorage=$t;var q={};Object.defineProperty(q,"__esModule",{value:!0});var Wt=q.getWindowMetadata=void 0;const Y=g;function Ht(){let e,t;try{e=Y.getDocumentOrThrow(),t=Y.getLocationOrThrow()}catch{return null}function r(){const w=e.getElementsByTagName("link"),O=[];for(let R=0;R<w.length;R++){const E=w[R],L=E.getAttribute("rel");if(L&&L.toLowerCase().indexOf("icon")>-1){const p=E.getAttribute("href");if(p)if(p.toLowerCase().indexOf("https:")===-1&&p.toLowerCase().indexOf("http:")===-1&&p.indexOf("//")!==0){let j=t.protocol+"//"+t.host;if(p.indexOf("/")===0)j+=p;else{const x=t.pathname.split("/");x.pop();const $=x.join("/");j+=$+"/"+p}O.push(j)}else if(p.indexOf("//")===0){const j=t.protocol+p;O.push(j)}else O.push(p)}}return O}function l(...w){const O=e.getElementsByTagName("meta");for(let R=0;R<O.length;R++){const E=O[R],L=["itemprop","property","name"].map(p=>E.getAttribute(p)).filter(p=>p?w.includes(p):!1);if(L.length&&L){const p=E.getAttribute("content");if(p)return p}}return""}function d(){let w=l("name","og:site_name","og:title","twitter:title");return w||(w=e.title),w}function h(){return l("description","og:description","twitter:description","keywords")}const b=d(),P=h(),B=t.origin,J=r();return{description:P,url:B,icons:J,name:b}}Wt=q.getWindowMetadata=Ht;var me=e=>encodeURIComponent(e).replace(/[!'()*]/g,t=>`%${t.charCodeAt(0).toString(16).toUpperCase()}`),ft="%[a-f0-9]{2}",Z=new RegExp("("+ft+")|([^%]+?)","gi"),tt=new RegExp("("+ft+")+","gi");function V(e,t){try{return[decodeURIComponent(e.join(""))]}catch{}if(e.length===1)return e;t=t||1;var r=e.slice(0,t),l=e.slice(t);return Array.prototype.concat.call([],V(r),V(l))}function Vt(e){try{return decodeURIComponent(e)}catch{for(var t=e.match(Z)||[],r=1;r<t.length;r++)e=V(t,r).join(""),t=e.match(Z)||[];return e}}function qt(e){for(var t={"%FE%FF":"��","%FF%FE":"��"},r=tt.exec(e);r;){try{t[r[0]]=decodeURIComponent(r[0])}catch{var l=Vt(r[0]);l!==r[0]&&(t[r[0]]=l)}r=tt.exec(e)}t["%C2"]="�";for(var d=Object.keys(t),h=0;h<d.length;h++){var b=d[h];e=e.replace(new RegExp(b,"g"),t[b])}return e}var be=function(e){if(typeof e!="string")throw new TypeError("Expected `encodedURI` to be of type `string`, got `"+typeof e+"`");try{return e=e.replace(/\+/g," "),decodeURIComponent(e)}catch{return qt(e)}},Ee=(e,t)=>{if(!(typeof e=="string"&&typeof t=="string"))throw new TypeError("Expected the arguments to be of type `string`");if(t==="")return[e];const r=e.indexOf(t);return r===-1?[e]:[e.slice(0,r),e.slice(r+t.length)]},Oe=function(e,t){for(var r={},l=Object.keys(e),d=Array.isArray(t),h=0;h<l.length;h++){var b=l[h],P=e[b];(d?t.indexOf(b)!==-1:t(b,P,e))&&(r[b]=P)}return r};const Gt=e=>JSON.stringify(e,(t,r)=>typeof r=="bigint"?r.toString()+"n":r),Xt=e=>{const t=/([\[:])?(\d{17,}|(?:[9](?:[1-9]07199254740991|0[1-9]7199254740991|00[8-9]199254740991|007[2-9]99254740991|007199[3-9]54740991|0071992[6-9]4740991|00719925[5-9]740991|007199254[8-9]40991|0071992547[5-9]0991|00719925474[1-9]991|00719925474099[2-9])))([,\}\]])/g,r=e.replace(t,'$1"$2n"$3');return JSON.parse(r,(l,d)=>typeof d=="string"&&d.match(/^\d+n$/)?BigInt(d.substring(0,d.length-1)):d)};function zt(e){if(typeof e!="string")throw new Error(`Cannot safe json parse value of type ${typeof e}`);try{return Xt(e)}catch{return e}}function et(e){return typeof e=="string"?e:Gt(e)||""}const Qt="PARSE_ERROR",kt="INVALID_REQUEST",Kt="METHOD_NOT_FOUND",Yt="INVALID_PARAMS",lt="INTERNAL_ERROR",G="SERVER_ERROR",Zt=[-32700,-32600,-32601,-32602,-32603],U={[Qt]:{code:-32700,message:"Parse error"},[kt]:{code:-32600,message:"Invalid Request"},[Kt]:{code:-32601,message:"Method not found"},[Yt]:{code:-32602,message:"Invalid params"},[lt]:{code:-32603,message:"Internal error"},[G]:{code:-32e3,message:"Server error"}},ht=G;function te(e){return Zt.includes(e)}function nt(e){return Object.keys(U).includes(e)?U[e]:U[ht]}function ee(e){const t=Object.values(U).find(r=>r.code===e);return t||U[ht]}function ne(e,t,r){return e.message.includes("getaddrinfo ENOTFOUND")||e.message.includes("connect ECONNREFUSED")?new Error(`Unavailable ${r} RPC url at ${t}`):e}var re={},S={},rt;function oe(){if(rt)return S;rt=1,Object.defineProperty(S,"__esModule",{value:!0}),S.isBrowserCryptoAvailable=S.getSubtleCrypto=S.getBrowerCrypto=void 0;function e(){return(A===null||A===void 0?void 0:A.crypto)||(A===null||A===void 0?void 0:A.msCrypto)||{}}S.getBrowerCrypto=e;function t(){const l=e();return l.subtle||l.webkitSubtle}S.getSubtleCrypto=t;function r(){return!!e()&&!!t()}return S.isBrowserCryptoAvailable=r,S}var C={},ot;function ie(){if(ot)return C;ot=1,Object.defineProperty(C,"__esModule",{value:!0}),C.isBrowser=C.isNode=C.isReactNative=void 0;function e(){return typeof document>"u"&&typeof navigator<"u"&&navigator.product==="ReactNative"}C.isReactNative=e;function t(){return typeof process<"u"&&typeof process.versions<"u"&&typeof process.versions.node<"u"}C.isNode=t;function r(){return!e()&&!t()}return C.isBrowser=r,C}(function(e){Object.defineProperty(e,"__esModule",{value:!0});const t=wt;t.__exportStar(oe(),e),t.__exportStar(ie(),e)})(re);function dt(e=3){const t=Date.now()*Math.pow(10,e),r=Math.floor(Math.random()*Math.pow(10,e));return t+r}function se(e=6){return BigInt(dt(e))}function ae(e,t,r){return{id:r||dt(),jsonrpc:"2.0",method:e,params:t}}function Re(e,t){return{id:e,jsonrpc:"2.0",result:t}}function ce(e,t,r){return{id:e,jsonrpc:"2.0",error:ue(t,r)}}function ue(e,t){return typeof e>"u"?nt(lt):(typeof e=="string"&&(e=Object.assign(Object.assign({},nt(G)),{message:e})),typeof t<"u"&&(e.data=t),te(e.code)&&(e=ee(e.code)),e)}class gt{}class Te extends gt{constructor(t){super()}}class fe extends gt{constructor(){super()}}class le extends fe{constructor(t){super()}}const he="^https?:",de="^wss?:";function ge(e){const t=e.match(new RegExp(/^\w+:/,"gi"));if(!(!t||!t.length))return t[0]}function vt(e,t){const r=ge(e);return typeof r>"u"?!1:new RegExp(t).test(r)}function it(e){return vt(e,he)}function Se(e){return vt(e,de)}function Ce(e){return new RegExp("wss?://localhost(:d{2,5})?").test(e)}function yt(e){return typeof e=="object"&&"id"in e&&"jsonrpc"in e&&e.jsonrpc==="2.0"}function Pe(e){return yt(e)&&"method"in e}function ve(e){return yt(e)&&(ye(e)||pt(e))}function ye(e){return"result"in e}function pt(e){return"error"in e}class Le extends le{constructor(t){super(t),this.events=new ct.EventEmitter,this.hasRegisteredEventListeners=!1,this.connection=this.setConnection(t),this.connection.connected&&this.registerEventListeners()}async connect(t=this.connection){await this.open(t)}async disconnect(){await this.close()}on(t,r){this.events.on(t,r)}once(t,r){this.events.once(t,r)}off(t,r){this.events.off(t,r)}removeListener(t,r){this.events.removeListener(t,r)}async request(t,r){return this.requestStrict(ae(t.method,t.params||[],t.id||se().toString()),r)}async requestStrict(t,r){return new Promise(async(l,d)=>{if(!this.connection.connected)try{await this.open()}catch(h){d(h)}this.events.on(`${t.id}`,h=>{pt(h)?d(h.error):l(h.result)});try{await this.connection.send(t,r)}catch(h){d(h)}})}setConnection(t=this.connection){return t}onPayload(t){this.events.emit("payload",t),ve(t)?this.events.emit(`${t.id}`,t):this.events.emit("message",{type:t.method,data:t.params})}onClose(t){t&&t.code===3e3&&this.events.emit("error",new Error(`WebSocket connection closed abnormally with code: ${t.code} ${t.reason?`(${t.reason})`:""}`)),this.events.emit("disconnect")}async open(t=this.connection){this.connection===t&&this.connection.connected||(this.connection.connected&&this.close(),typeof t=="string"&&(await this.connection.open(t),t=this.connection),this.connection=this.setConnection(t),await this.connection.open(),this.registerEventListeners(),this.events.emit("connect"))}async close(){await this.connection.close()}registerEventListeners(){this.hasRegisteredEventListeners||(this.connection.on("payload",t=>this.onPayload(t)),this.connection.on("close",t=>this.onClose(t)),this.connection.on("error",t=>this.events.emit("error",t)),this.connection.on("register_error",t=>this.onClose()),this.hasRegisteredEventListeners=!0)}}const pe={Accept:"application/json","Content-Type":"application/json"},_e="POST",st={headers:pe,method:_e},at=10;class je{constructor(t,r=!1){if(this.url=t,this.disableProviderPing=r,this.events=new ct.EventEmitter,this.isAvailable=!1,this.registering=!1,!it(t))throw new Error(`Provided URL is not compatible with HTTP connection: ${t}`);this.url=t,this.disableProviderPing=r}get connected(){return this.isAvailable}get connecting(){return this.registering}on(t,r){this.events.on(t,r)}once(t,r){this.events.once(t,r)}off(t,r){this.events.off(t,r)}removeListener(t,r){this.events.removeListener(t,r)}async open(t=this.url){await this.register(t)}async close(){if(!this.isAvailable)throw new Error("Connection already closed");this.onClose()}async send(t,r){this.isAvailable||await this.register();try{const l=et(t),h=await(await K(this.url,Object.assign(Object.assign({},st),{body:l}))).json();this.onPayload({data:h})}catch(l){this.onError(t.id,l)}}async register(t=this.url){if(!it(t))throw new Error(`Provided URL is not compatible with HTTP connection: ${t}`);if(this.registering){const r=this.events.getMaxListeners();return(this.events.listenerCount("register_error")>=r||this.events.listenerCount("open")>=r)&&this.events.setMaxListeners(r+1),new Promise((l,d)=>{this.events.once("register_error",h=>{this.resetMaxListeners(),d(h)}),this.events.once("open",()=>{if(this.resetMaxListeners(),typeof this.isAvailable>"u")return d(new Error("HTTP connection is missing or invalid"));l()})})}this.url=t,this.registering=!0;try{if(!this.disableProviderPing){const r=et({id:1,jsonrpc:"2.0",method:"test",params:[]});await K(t,Object.assign(Object.assign({},st),{body:r}))}this.onOpen()}catch(r){const l=this.parseError(r);throw this.events.emit("register_error",l),this.onClose(),l}}onOpen(){this.isAvailable=!0,this.registering=!1,this.events.emit("open")}onClose(){this.isAvailable=!1,this.registering=!1,this.events.emit("close")}onPayload(t){if(typeof t.data>"u")return;const r=typeof t.data=="string"?zt(t.data):t.data;this.events.emit("payload",r)}onError(t,r){const l=this.parseError(r),d=l.message||l.toString(),h=ce(t,d);this.events.emit("payload",h)}parseError(t,r=this.url){return ne(t,r,"HTTP")}resetMaxListeners(){this.events.getMaxListeners()>at&&this.events.setMaxListeners(at)}}export{Rt as A,Pt as B,Ft as C,Mt as D,Ut as E,Jt as F,dt as G,je as H,Te as I,Le as J,me as a,jt as b,St as c,be as d,Nt as e,Oe as f,Wt as g,et as h,Se as i,re as j,Ce as k,zt as l,ce as m,Pe as n,ve as o,ne as p,Re as q,ye as r,Ee as s,wt as t,pt as u,ae as v,se as w,mt as x,bt as y,Et as z};
