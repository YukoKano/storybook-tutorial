var Rt=Object.defineProperty;var Ot=(e,t,r)=>t in e?Rt(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r;var ue=(e,t,r)=>(Ot(e,typeof t!="symbol"?t+"":t,r),r);import{j as v,T as Pt,D as $}from"./Task.stories-BYEr1xKp.js";import{r as At,$ as Ce,R as Mt}from"./index-uCp2LrAq.js";import{P as M}from"./index-D3ylJrlI.js";var rt={exports:{}},nt={};/**
 * @license React
 * use-sync-external-store-with-selector.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Y=At;function jt(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Dt=typeof Object.is=="function"?Object.is:jt,Nt=Y.useSyncExternalStore,It=Y.useRef,zt=Y.useEffect,Ft=Y.useMemo,Kt=Y.useDebugValue;nt.useSyncExternalStoreWithSelector=function(e,t,r,n,s){var o=It(null);if(o.current===null){var i={hasValue:!1,value:null};o.current=i}else i=o.current;o=Ft(function(){function c(y){if(!f){if(f=!0,u=y,y=n(y),s!==void 0&&i.hasValue){var p=i.value;if(s(p,y))return l=p}return l=y}if(p=l,Dt(u,y))return p;var g=n(y);return s!==void 0&&s(p,g)?p:(u=y,l=g)}var f=!1,u,l,d=r===void 0?null:r;return[function(){return c(t())},d===null?void 0:function(){return c(d())}]},[t,r,n,s]);var a=Nt(e,o[0],o[1]);return zt(function(){i.hasValue=!0,i.value=a},[a]),Kt(a),a};rt.exports=nt;var $t=rt.exports,C="default"in Ce?Mt:Ce,Re=Symbol.for("react-redux-context"),Oe=typeof globalThis<"u"?globalThis:{};function Lt(){if(!C.createContext)return{};const e=Oe[Re]??(Oe[Re]=new Map);let t=e.get(C.createContext);return t||(t=C.createContext(null),e.set(C.createContext,t)),t}var I=Lt(),Wt=()=>{throw new Error("uSES not initialized!")};function _e(e=I){return function(){return C.useContext(e)}}var st=_e(),ot=Wt,Bt=e=>{ot=e},qt=(e,t)=>e===t;function Ut(e=I){const t=e===I?st:_e(e),r=(n,s={})=>{const{equalityFn:o=qt,devModeChecks:i={}}=typeof s=="function"?{equalityFn:s}:s,{store:a,subscription:c,getServerState:f,stabilityCheck:u,identityFunctionCheck:l}=t();C.useRef(!0);const d=C.useCallback({[n.name](p){return n(p)}}[n.name],[n,u,i.stabilityCheck]),y=ot(c.addNestedSub,a.getState,f||a.getState,d,o);return C.useDebugValue(y),y};return Object.assign(r,{withTypes:()=>r}),r}var Pe=Ut();function Vt(e){e()}function Xt(){let e=null,t=null;return{clear(){e=null,t=null},notify(){Vt(()=>{let r=e;for(;r;)r.callback(),r=r.next})},get(){const r=[];let n=e;for(;n;)r.push(n),n=n.next;return r},subscribe(r){let n=!0;const s=t={callback:r,next:null,prev:t};return s.prev?s.prev.next=s:e=s,function(){!n||e===null||(n=!1,s.next?s.next.prev=s.prev:t=s.prev,s.prev?s.prev.next=s.next:e=s.next)}}}}var Ae={notify(){},get:()=>[]};function Ht(e,t){let r,n=Ae,s=0,o=!1;function i(g){u();const h=n.subscribe(g);let _=!1;return()=>{_||(_=!0,h(),l())}}function a(){n.notify()}function c(){p.onStateChange&&p.onStateChange()}function f(){return o}function u(){s++,r||(r=e.subscribe(c),n=Xt())}function l(){s--,r&&s===0&&(r(),r=void 0,n.clear(),n=Ae)}function d(){o||(o=!0,u())}function y(){o&&(o=!1,l())}const p={addNestedSub:i,notifyNestedSubs:a,handleChangeWrapper:c,isSubscribed:f,trySubscribe:d,tryUnsubscribe:y,getListeners:()=>n};return p}var Gt=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",Yt=typeof navigator<"u"&&navigator.product==="ReactNative",Qt=Gt||Yt?C.useLayoutEffect:C.useEffect;function Jt({store:e,context:t,children:r,serverState:n,stabilityCheck:s="once",identityFunctionCheck:o="once"}){const i=C.useMemo(()=>{const f=Ht(e);return{store:e,subscription:f,getServerState:n?()=>n:void 0,stabilityCheck:s,identityFunctionCheck:o}},[e,n,s,o]),a=C.useMemo(()=>e.getState(),[e]);Qt(()=>{const{subscription:f}=i;return f.onStateChange=f.notifyNestedSubs,f.trySubscribe(),a!==e.getState()&&f.notifyNestedSubs(),()=>{f.tryUnsubscribe(),f.onStateChange=void 0}},[i,a]);const c=t||I;return C.createElement(c.Provider,{value:i},r)}var Zt=Jt;function it(e=I){const t=e===I?st:_e(e),r=()=>{const{store:n}=t();return n};return Object.assign(r,{withTypes:()=>r}),r}var er=it();function tr(e=I){const t=e===I?er:it(e),r=()=>t().dispatch;return Object.assign(r,{withTypes:()=>r}),r}var rr=tr();Bt($t.useSyncExternalStoreWithSelector);function E(e){return`Minified Redux error #${e}; visit https://redux.js.org/Errors?code=${e} for the full message or use the non-minified dev environment for full errors. `}var nr=typeof Symbol=="function"&&Symbol.observable||"@@observable",Me=nr,fe=()=>Math.random().toString(36).substring(7).split("").join("."),sr={INIT:`@@redux/INIT${fe()}`,REPLACE:`@@redux/REPLACE${fe()}`,PROBE_UNKNOWN_ACTION:()=>`@@redux/PROBE_UNKNOWN_ACTION${fe()}`},ee=sr;function ke(e){if(typeof e!="object"||e===null)return!1;let t=e;for(;Object.getPrototypeOf(t)!==null;)t=Object.getPrototypeOf(t);return Object.getPrototypeOf(e)===t||Object.getPrototypeOf(e)===null}function at(e,t,r){if(typeof e!="function")throw new Error(E(2));if(typeof t=="function"&&typeof r=="function"||typeof r=="function"&&typeof arguments[3]=="function")throw new Error(E(0));if(typeof t=="function"&&typeof r>"u"&&(r=t,t=void 0),typeof r<"u"){if(typeof r!="function")throw new Error(E(1));return r(at)(e,t)}let n=e,s=t,o=new Map,i=o,a=0,c=!1;function f(){i===o&&(i=new Map,o.forEach((h,_)=>{i.set(_,h)}))}function u(){if(c)throw new Error(E(3));return s}function l(h){if(typeof h!="function")throw new Error(E(4));if(c)throw new Error(E(5));let _=!0;f();const b=a++;return i.set(b,h),function(){if(_){if(c)throw new Error(E(6));_=!1,f(),i.delete(b),o=null}}}function d(h){if(!ke(h))throw new Error(E(7));if(typeof h.type>"u")throw new Error(E(8));if(typeof h.type!="string")throw new Error(E(17));if(c)throw new Error(E(9));try{c=!0,s=n(s,h)}finally{c=!1}return(o=i).forEach(b=>{b()}),h}function y(h){if(typeof h!="function")throw new Error(E(10));n=h,d({type:ee.REPLACE})}function p(){const h=l;return{subscribe(_){if(typeof _!="object"||_===null)throw new Error(E(11));function b(){const S=_;S.next&&S.next(u())}return b(),{unsubscribe:h(b)}},[Me](){return this}}}return d({type:ee.INIT}),{dispatch:d,subscribe:l,getState:u,replaceReducer:y,[Me]:p}}function or(e){Object.keys(e).forEach(t=>{const r=e[t];if(typeof r(void 0,{type:ee.INIT})>"u")throw new Error(E(12));if(typeof r(void 0,{type:ee.PROBE_UNKNOWN_ACTION()})>"u")throw new Error(E(13))})}function ir(e){const t=Object.keys(e),r={};for(let o=0;o<t.length;o++){const i=t[o];typeof e[i]=="function"&&(r[i]=e[i])}const n=Object.keys(r);let s;try{or(r)}catch(o){s=o}return function(i={},a){if(s)throw s;let c=!1;const f={};for(let u=0;u<n.length;u++){const l=n[u],d=r[l],y=i[l],p=d(y,a);if(typeof p>"u")throw a&&a.type,new Error(E(14));f[l]=p,c=c||p!==y}return c=c||n.length!==Object.keys(i).length,c?f:i}}function te(...e){return e.length===0?t=>t:e.length===1?e[0]:e.reduce((t,r)=>(...n)=>t(r(...n)))}function ar(...e){return t=>(r,n)=>{const s=t(r,n);let o=()=>{throw new Error(E(15))};const i={getState:s.getState,dispatch:(c,...f)=>o(c,...f)},a=e.map(c=>c(i));return o=te(...a)(s.dispatch),{...s,dispatch:o}}}function cr(e){return ke(e)&&"type"in e&&typeof e.type=="string"}var ct=Symbol.for("immer-nothing"),je=Symbol.for("immer-draftable"),R=Symbol.for("immer-state");function A(e,...t){throw new Error(`[Immer] minified error nr: ${e}. Full error at: https://bit.ly/3cXEKWf`)}var L=Object.getPrototypeOf;function z(e){return!!e&&!!e[R]}function D(e){var t;return e?ut(e)||Array.isArray(e)||!!e[je]||!!((t=e.constructor)!=null&&t[je])||ie(e)||ae(e):!1}var ur=Object.prototype.constructor.toString();function ut(e){if(!e||typeof e!="object")return!1;const t=L(e);if(t===null)return!0;const r=Object.hasOwnProperty.call(t,"constructor")&&t.constructor;return r===Object?!0:typeof r=="function"&&Function.toString.call(r)===ur}function re(e,t){oe(e)===0?Reflect.ownKeys(e).forEach(r=>{t(r,e[r],e)}):e.forEach((r,n)=>t(n,r,e))}function oe(e){const t=e[R];return t?t.type_:Array.isArray(e)?1:ie(e)?2:ae(e)?3:0}function he(e,t){return oe(e)===2?e.has(t):Object.prototype.hasOwnProperty.call(e,t)}function ft(e,t,r){const n=oe(e);n===2?e.set(t,r):n===3?e.add(r):e[t]=r}function fr(e,t){return e===t?e!==0||1/e===1/t:e!==e&&t!==t}function ie(e){return e instanceof Map}function ae(e){return e instanceof Set}function F(e){return e.copy_||e.base_}function me(e,t){if(ie(e))return new Map(e);if(ae(e))return new Set(e);if(Array.isArray(e))return Array.prototype.slice.call(e);const r=ut(e);if(t===!0||t==="class_only"&&!r){const n=Object.getOwnPropertyDescriptors(e);delete n[R];let s=Reflect.ownKeys(n);for(let o=0;o<s.length;o++){const i=s[o],a=n[i];a.writable===!1&&(a.writable=!0,a.configurable=!0),(a.get||a.set)&&(n[i]={configurable:!0,writable:!0,enumerable:a.enumerable,value:e[i]})}return Object.create(L(e),n)}else{const n=L(e);if(n!==null&&r)return{...e};const s=Object.create(n);return Object.assign(s,e)}}function ve(e,t=!1){return ce(e)||z(e)||!D(e)||(oe(e)>1&&(e.set=e.add=e.clear=e.delete=lr),Object.freeze(e),t&&Object.entries(e).forEach(([r,n])=>ve(n,!0))),e}function lr(){A(2)}function ce(e){return Object.isFrozen(e)}var dr={};function K(e){const t=dr[e];return t||A(0,e),t}var H;function lt(){return H}function pr(e,t){return{drafts_:[],parent_:e,immer_:t,canAutoFreeze_:!0,unfinalizedDrafts_:0}}function De(e,t){t&&(K("Patches"),e.patches_=[],e.inversePatches_=[],e.patchListener_=t)}function Se(e){we(e),e.drafts_.forEach(yr),e.drafts_=null}function we(e){e===H&&(H=e.parent_)}function Ne(e){return H=pr(H,e)}function yr(e){const t=e[R];t.type_===0||t.type_===1?t.revoke_():t.revoked_=!0}function Ie(e,t){t.unfinalizedDrafts_=t.drafts_.length;const r=t.drafts_[0];return e!==void 0&&e!==r?(r[R].modified_&&(Se(t),A(4)),D(e)&&(e=ne(t,e),t.parent_||se(t,e)),t.patches_&&K("Patches").generateReplacementPatches_(r[R].base_,e,t.patches_,t.inversePatches_)):e=ne(t,r,[]),Se(t),t.patches_&&t.patchListener_(t.patches_,t.inversePatches_),e!==ct?e:void 0}function ne(e,t,r){if(ce(t))return t;const n=t[R];if(!n)return re(t,(s,o)=>ze(e,n,t,s,o,r)),t;if(n.scope_!==e)return t;if(!n.modified_)return se(e,n.base_,!0),n.base_;if(!n.finalized_){n.finalized_=!0,n.scope_.unfinalizedDrafts_--;const s=n.copy_;let o=s,i=!1;n.type_===3&&(o=new Set(s),s.clear(),i=!0),re(o,(a,c)=>ze(e,n,s,a,c,r,i)),se(e,s,!1),r&&e.patches_&&K("Patches").generatePatches_(n,r,e.patches_,e.inversePatches_)}return n.copy_}function ze(e,t,r,n,s,o,i){if(z(s)){const a=o&&t&&t.type_!==3&&!he(t.assigned_,n)?o.concat(n):void 0,c=ne(e,s,a);if(ft(r,n,c),z(c))e.canAutoFreeze_=!1;else return}else i&&r.add(s);if(D(s)&&!ce(s)){if(!e.immer_.autoFreeze_&&e.unfinalizedDrafts_<1)return;ne(e,s),(!t||!t.scope_.parent_)&&typeof n!="symbol"&&Object.prototype.propertyIsEnumerable.call(r,n)&&se(e,s)}}function se(e,t,r=!1){!e.parent_&&e.immer_.autoFreeze_&&e.canAutoFreeze_&&ve(t,r)}function hr(e,t){const r=Array.isArray(e),n={type_:r?1:0,scope_:t?t.scope_:lt(),modified_:!1,finalized_:!1,assigned_:{},parent_:t,base_:e,draft_:null,copy_:null,revoke_:null,isManual_:!1};let s=n,o=Te;r&&(s=[n],o=G);const{revoke:i,proxy:a}=Proxy.revocable(s,o);return n.draft_=a,n.revoke_=i,a}var Te={get(e,t){if(t===R)return e;const r=F(e);if(!he(r,t))return mr(e,r,t);const n=r[t];return e.finalized_||!D(n)?n:n===le(e.base_,t)?(de(e),e.copy_[t]=be(n,e)):n},has(e,t){return t in F(e)},ownKeys(e){return Reflect.ownKeys(F(e))},set(e,t,r){const n=dt(F(e),t);if(n!=null&&n.set)return n.set.call(e.draft_,r),!0;if(!e.modified_){const s=le(F(e),t),o=s==null?void 0:s[R];if(o&&o.base_===r)return e.copy_[t]=r,e.assigned_[t]=!1,!0;if(fr(r,s)&&(r!==void 0||he(e.base_,t)))return!0;de(e),ge(e)}return e.copy_[t]===r&&(r!==void 0||t in e.copy_)||Number.isNaN(r)&&Number.isNaN(e.copy_[t])||(e.copy_[t]=r,e.assigned_[t]=!0),!0},deleteProperty(e,t){return le(e.base_,t)!==void 0||t in e.base_?(e.assigned_[t]=!1,de(e),ge(e)):delete e.assigned_[t],e.copy_&&delete e.copy_[t],!0},getOwnPropertyDescriptor(e,t){const r=F(e),n=Reflect.getOwnPropertyDescriptor(r,t);return n&&{writable:!0,configurable:e.type_!==1||t!=="length",enumerable:n.enumerable,value:r[t]}},defineProperty(){A(11)},getPrototypeOf(e){return L(e.base_)},setPrototypeOf(){A(12)}},G={};re(Te,(e,t)=>{G[e]=function(){return arguments[0]=arguments[0][0],t.apply(this,arguments)}});G.deleteProperty=function(e,t){return G.set.call(this,e,t,void 0)};G.set=function(e,t,r){return Te.set.call(this,e[0],t,r,e[0])};function le(e,t){const r=e[R];return(r?F(r):e)[t]}function mr(e,t,r){var s;const n=dt(t,r);return n?"value"in n?n.value:(s=n.get)==null?void 0:s.call(e.draft_):void 0}function dt(e,t){if(!(t in e))return;let r=L(e);for(;r;){const n=Object.getOwnPropertyDescriptor(r,t);if(n)return n;r=L(r)}}function ge(e){e.modified_||(e.modified_=!0,e.parent_&&ge(e.parent_))}function de(e){e.copy_||(e.copy_=me(e.base_,e.scope_.immer_.useStrictShallowCopy_))}var Sr=class{constructor(e){this.autoFreeze_=!0,this.useStrictShallowCopy_=!1,this.produce=(t,r,n)=>{if(typeof t=="function"&&typeof r!="function"){const o=r;r=t;const i=this;return function(c=o,...f){return i.produce(c,u=>r.call(this,u,...f))}}typeof r!="function"&&A(6),n!==void 0&&typeof n!="function"&&A(7);let s;if(D(t)){const o=Ne(this),i=be(t,void 0);let a=!0;try{s=r(i),a=!1}finally{a?Se(o):we(o)}return De(o,n),Ie(s,o)}else if(!t||typeof t!="object"){if(s=r(t),s===void 0&&(s=t),s===ct&&(s=void 0),this.autoFreeze_&&ve(s,!0),n){const o=[],i=[];K("Patches").generateReplacementPatches_(t,s,o,i),n(o,i)}return s}else A(1,t)},this.produceWithPatches=(t,r)=>{if(typeof t=="function")return(i,...a)=>this.produceWithPatches(i,c=>t(c,...a));let n,s;return[this.produce(t,r,(i,a)=>{n=i,s=a}),n,s]},typeof(e==null?void 0:e.autoFreeze)=="boolean"&&this.setAutoFreeze(e.autoFreeze),typeof(e==null?void 0:e.useStrictShallowCopy)=="boolean"&&this.setUseStrictShallowCopy(e.useStrictShallowCopy)}createDraft(e){D(e)||A(8),z(e)&&(e=pt(e));const t=Ne(this),r=be(e,void 0);return r[R].isManual_=!0,we(t),r}finishDraft(e,t){const r=e&&e[R];(!r||!r.isManual_)&&A(9);const{scope_:n}=r;return De(n,t),Ie(void 0,n)}setAutoFreeze(e){this.autoFreeze_=e}setUseStrictShallowCopy(e){this.useStrictShallowCopy_=e}applyPatches(e,t){let r;for(r=t.length-1;r>=0;r--){const s=t[r];if(s.path.length===0&&s.op==="replace"){e=s.value;break}}r>-1&&(t=t.slice(r+1));const n=K("Patches").applyPatches_;return z(e)?n(e,t):this.produce(e,s=>n(s,t))}};function be(e,t){const r=ie(e)?K("MapSet").proxyMap_(e,t):ae(e)?K("MapSet").proxySet_(e,t):hr(e,t);return(t?t.scope_:lt()).drafts_.push(r),r}function pt(e){return z(e)||A(10,e),yt(e)}function yt(e){if(!D(e)||ce(e))return e;const t=e[R];let r;if(t){if(!t.modified_)return t.base_;t.finalized_=!0,r=me(e,t.scope_.immer_.useStrictShallowCopy_)}else r=me(e,!0);return re(r,(n,s)=>{ft(r,n,yt(s))}),t&&(t.finalized_=!1),r}var O=new Sr,ht=O.produce;O.produceWithPatches.bind(O);O.setAutoFreeze.bind(O);O.setUseStrictShallowCopy.bind(O);O.applyPatches.bind(O);O.createDraft.bind(O);O.finishDraft.bind(O);function wr(e,t=`expected a function, instead received ${typeof e}`){if(typeof e!="function")throw new TypeError(t)}function gr(e,t=`expected an object, instead received ${typeof e}`){if(typeof e!="object")throw new TypeError(t)}function br(e,t="expected all items to be functions, instead received the following types: "){if(!e.every(r=>typeof r=="function")){const r=e.map(n=>typeof n=="function"?`function ${n.name||"unnamed"}()`:typeof n).join(", ");throw new TypeError(`${t}[${r}]`)}}var Fe=e=>Array.isArray(e)?e:[e];function _r(e){const t=Array.isArray(e[0])?e[0]:e;return br(t,"createSelector expects all input-selectors to be functions, but received the following types: "),t}function kr(e,t){const r=[],{length:n}=e;for(let s=0;s<n;s++)r.push(e[s].apply(null,t));return r}var vr=class{constructor(e){this.value=e}deref(){return this.value}},Tr=typeof WeakRef<"u"?WeakRef:vr,Er=0,Ke=1;function J(){return{s:Er,v:void 0,o:null,p:null}}function Ee(e,t={}){let r=J();const{resultEqualityCheck:n}=t;let s,o=0;function i(){var l;let a=r;const{length:c}=arguments;for(let d=0,y=c;d<y;d++){const p=arguments[d];if(typeof p=="function"||typeof p=="object"&&p!==null){let g=a.o;g===null&&(a.o=g=new WeakMap);const h=g.get(p);h===void 0?(a=J(),g.set(p,a)):a=h}else{let g=a.p;g===null&&(a.p=g=new Map);const h=g.get(p);h===void 0?(a=J(),g.set(p,a)):a=h}}const f=a;let u;if(a.s===Ke)u=a.v;else if(u=e.apply(null,arguments),o++,n){const d=((l=s==null?void 0:s.deref)==null?void 0:l.call(s))??s;d!=null&&n(d,u)&&(u=d,o!==0&&o--),s=typeof u=="object"&&u!==null||typeof u=="function"?new Tr(u):u}return f.s=Ke,f.v=u,u}return i.clearCache=()=>{r=J(),i.resetResultsCount()},i.resultsCount=()=>o,i.resetResultsCount=()=>{o=0},i}function mt(e,...t){const r=typeof e=="function"?{memoize:e,memoizeOptions:t}:e,n=(...s)=>{let o=0,i=0,a,c={},f=s.pop();typeof f=="object"&&(c=f,f=s.pop()),wr(f,`createSelector expects an output function after the inputs, but received: [${typeof f}]`);const u={...r,...c},{memoize:l,memoizeOptions:d=[],argsMemoize:y=Ee,argsMemoizeOptions:p=[],devModeChecks:g={}}=u,h=Fe(d),_=Fe(p),b=_r(s),m=l(function(){return o++,f.apply(null,arguments)},...h),S=y(function(){i++;const k=kr(b,arguments);return a=m.apply(null,k),a},..._);return Object.assign(S,{resultFunc:f,memoizedResultFunc:m,dependencies:b,dependencyRecomputations:()=>i,resetDependencyRecomputations:()=>{i=0},lastResult:()=>a,recomputations:()=>o,resetRecomputations:()=>{o=0},memoize:l,argsMemoize:y})};return Object.assign(n,{withTypes:()=>n}),n}var xr=mt(Ee),Cr=Object.assign((e,t=xr)=>{gr(e,`createStructuredSelector expects first argument to be an object where each property is a selector, instead received a ${typeof e}`);const r=Object.keys(e),n=r.map(o=>e[o]);return t(n,(...o)=>o.reduce((i,a,c)=>(i[r[c]]=a,i),{}))},{withTypes:()=>Cr});function St(e){return({dispatch:r,getState:n})=>s=>o=>typeof o=="function"?o(r,n,e):s(o)}var Rr=St(),Or=St,Pr=(...e)=>{const t=mt(...e),r=Object.assign((...n)=>{const s=t(...n),o=(i,...a)=>s(z(i)?pt(i):i,...a);return Object.assign(o,s),o},{withTypes:()=>r});return r};Pr(Ee);var Ar=typeof window<"u"&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__?window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__:function(){if(arguments.length!==0)return typeof arguments[0]=="object"?te:te.apply(null,arguments)},Mr=e=>e&&typeof e.match=="function";function j(e,t){function r(...n){if(t){let s=t(...n);if(!s)throw new Error(x(0));return{type:e,payload:s.payload,..."meta"in s&&{meta:s.meta},..."error"in s&&{error:s.error}}}return{type:e,payload:n[0]}}return r.toString=()=>`${e}`,r.type=e,r.match=n=>cr(n)&&n.type===e,r}var wt=class B extends Array{constructor(...t){super(...t),Object.setPrototypeOf(this,B.prototype)}static get[Symbol.species](){return B}concat(...t){return super.concat.apply(this,t)}prepend(...t){return t.length===1&&Array.isArray(t[0])?new B(...t[0].concat(this)):new B(...t.concat(this))}};function $e(e){return D(e)?ht(e,()=>{}):e}function Le(e,t,r){if(e.has(t)){let s=e.get(t);return r.update&&(s=r.update(s,t,e),e.set(t,s)),s}if(!r.insert)throw new Error(x(10));const n=r.insert(t,e);return e.set(t,n),n}function jr(e){return typeof e=="boolean"}var Dr=()=>function(t){const{thunk:r=!0,immutableCheck:n=!0,serializableCheck:s=!0,actionCreatorCheck:o=!0}=t??{};let i=new wt;return r&&(jr(r)?i.push(Rr):i.push(Or(r.extraArgument))),i},Nr="RTK_autoBatch",gt=e=>t=>{setTimeout(t,e)},Ir=typeof window<"u"&&window.requestAnimationFrame?window.requestAnimationFrame:gt(10),zr=(e={type:"raf"})=>t=>(...r)=>{const n=t(...r);let s=!0,o=!1,i=!1;const a=new Set,c=e.type==="tick"?queueMicrotask:e.type==="raf"?Ir:e.type==="callback"?e.queueNotification:gt(e.timeout),f=()=>{i=!1,o&&(o=!1,a.forEach(u=>u()))};return Object.assign({},n,{subscribe(u){const l=()=>s&&u(),d=n.subscribe(l);return a.add(u),()=>{d(),a.delete(u)}},dispatch(u){var l;try{return s=!((l=u==null?void 0:u.meta)!=null&&l[Nr]),o=!s,o&&(i||(i=!0,c(f))),n.dispatch(u)}finally{s=!0}}})},Fr=e=>function(r){const{autoBatch:n=!0}=r??{};let s=new wt(e);return n&&s.push(zr(typeof n=="object"?n:void 0)),s},Kr=!0;function bt(e){const t=Dr(),{reducer:r=void 0,middleware:n,devTools:s=!0,preloadedState:o=void 0,enhancers:i=void 0}=e||{};let a;if(typeof r=="function")a=r;else if(ke(r))a=ir(r);else throw new Error(x(1));let c;typeof n=="function"?c=n(t):c=t();let f=te;s&&(f=Ar({trace:!Kr,...typeof s=="object"&&s}));const u=ar(...c),l=Fr(u);let d=typeof i=="function"?i(l):l();const y=f(...d);return at(a,o,y)}function _t(e){const t={},r=[];let n;const s={addCase(o,i){const a=typeof o=="string"?o:o.type;if(!a)throw new Error(x(28));if(a in t)throw new Error(x(29));return t[a]=i,s},addMatcher(o,i){return r.push({matcher:o,reducer:i}),s},addDefaultCase(o){return n=o,s}};return e(s),[t,r,n]}function $r(e){return typeof e=="function"}function Lr(e,t){let[r,n,s]=_t(t),o;if($r(e))o=()=>$e(e());else{const a=$e(e);o=()=>a}function i(a=o(),c){let f=[r[c.type],...n.filter(({matcher:u})=>u(c)).map(({reducer:u})=>u)];return f.filter(u=>!!u).length===0&&(f=[s]),f.reduce((u,l)=>{if(l)if(z(u)){const y=l(u,c);return y===void 0?u:y}else{if(D(u))return ht(u,d=>l(d,c));{const d=l(u,c);if(d===void 0){if(u===null)return u;throw new Error(x(9))}return d}}return u},a)}return i.getInitialState=o,i}var Wr="ModuleSymbhasOwnPr-0123456789ABCDEFGHNRVfgctiUvz_KqYTJkLxpZXIjQW",kt=(e=21)=>{let t="",r=e;for(;r--;)t+=Wr[Math.random()*64|0];return t},Br=(e,t)=>Mr(e)?e.match(t):e(t);function qr(...e){return t=>e.some(r=>Br(r,t))}var Ur=["name","message","stack","code"],pe=class{constructor(e,t){ue(this,"_type");this.payload=e,this.meta=t}},We=class{constructor(e,t){ue(this,"_type");this.payload=e,this.meta=t}},Vr=e=>{if(typeof e=="object"&&e!==null){const t={};for(const r of Ur)typeof e[r]=="string"&&(t[r]=e[r]);return t}return{message:String(e)}},Xr=(()=>{function e(t,r,n){const s=j(t+"/fulfilled",(c,f,u,l)=>({payload:c,meta:{...l||{},arg:u,requestId:f,requestStatus:"fulfilled"}})),o=j(t+"/pending",(c,f,u)=>({payload:void 0,meta:{...u||{},arg:f,requestId:c,requestStatus:"pending"}})),i=j(t+"/rejected",(c,f,u,l,d)=>({payload:l,error:(n&&n.serializeError||Vr)(c||"Rejected"),meta:{...d||{},arg:u,requestId:f,rejectedWithValue:!!l,requestStatus:"rejected",aborted:(c==null?void 0:c.name)==="AbortError",condition:(c==null?void 0:c.name)==="ConditionError"}}));function a(c){return(f,u,l)=>{const d=n!=null&&n.idGenerator?n.idGenerator(c):kt(),y=new AbortController;let p,g;function h(b){g=b,y.abort()}const _=async function(){var S,T;let b;try{let k=(S=n==null?void 0:n.condition)==null?void 0:S.call(n,c,{getState:u,extra:l});if(Gr(k)&&(k=await k),k===!1||y.signal.aborted)throw{name:"ConditionError",message:"Aborted due to condition callback returning false."};const P=new Promise((w,N)=>{p=()=>{N({name:"AbortError",message:g||"Aborted"})},y.signal.addEventListener("abort",p)});f(o(d,c,(T=n==null?void 0:n.getPendingMeta)==null?void 0:T.call(n,{requestId:d,arg:c},{getState:u,extra:l}))),b=await Promise.race([P,Promise.resolve(r(c,{dispatch:f,getState:u,extra:l,requestId:d,signal:y.signal,abort:h,rejectWithValue:(w,N)=>new pe(w,N),fulfillWithValue:(w,N)=>new We(w,N)})).then(w=>{if(w instanceof pe)throw w;return w instanceof We?s(w.payload,d,c,w.meta):s(w,d,c)})])}catch(k){b=k instanceof pe?i(null,d,c,k.payload,k.meta):i(k,d,c)}finally{p&&y.signal.removeEventListener("abort",p)}return n&&!n.dispatchConditionRejection&&i.match(b)&&b.meta.condition||f(b),b}();return Object.assign(_,{abort:h,requestId:d,arg:c,unwrap(){return _.then(Hr)}})}}return Object.assign(a,{pending:o,rejected:i,fulfilled:s,settled:qr(i,s),typePrefix:t})}return e.withTypes=()=>e,e})();function Hr(e){if(e.meta&&e.meta.rejectedWithValue)throw e.payload;if(e.error)throw e.error;return e.payload}function Gr(e){return e!==null&&typeof e=="object"&&typeof e.then=="function"}var Yr=Symbol.for("rtk-slice-createasyncthunk");function Qr(e,t){return`${e}/${t}`}function Jr({creators:e}={}){var r;const t=(r=e==null?void 0:e.asyncThunk)==null?void 0:r[Yr];return function(s){const{name:o,reducerPath:i=o}=s;if(!o)throw new Error(x(11));typeof process<"u";const a=(typeof s.reducers=="function"?s.reducers(en()):s.reducers)||{},c=Object.keys(a),f={sliceCaseReducersByName:{},sliceCaseReducersByType:{},actionCreators:{},sliceMatchers:[]},u={addCase(m,S){const T=typeof m=="string"?m:m.type;if(!T)throw new Error(x(12));if(T in f.sliceCaseReducersByType)throw new Error(x(13));return f.sliceCaseReducersByType[T]=S,u},addMatcher(m,S){return f.sliceMatchers.push({matcher:m,reducer:S}),u},exposeAction(m,S){return f.actionCreators[m]=S,u},exposeCaseReducer(m,S){return f.sliceCaseReducersByName[m]=S,u}};c.forEach(m=>{const S=a[m],T={reducerName:m,type:Qr(o,m),createNotation:typeof s.reducers=="function"};rn(S)?sn(T,S,u,t):tn(T,S,u)});function l(){const[m={},S=[],T=void 0]=typeof s.extraReducers=="function"?_t(s.extraReducers):[s.extraReducers],k={...m,...f.sliceCaseReducersByType};return Lr(s.initialState,P=>{for(let w in k)P.addCase(w,k[w]);for(let w of f.sliceMatchers)P.addMatcher(w.matcher,w.reducer);for(let w of S)P.addMatcher(w.matcher,w.reducer);T&&P.addDefaultCase(T)})}const d=m=>m,y=new Map;let p;function g(m,S){return p||(p=l()),p(m,S)}function h(){return p||(p=l()),p.getInitialState()}function _(m,S=!1){function T(P){let w=P[m];return typeof w>"u"&&S&&(w=h()),w}function k(P=d){const w=Le(y,S,{insert:()=>new WeakMap});return Le(w,P,{insert:()=>{const N={};for(const[xt,Ct]of Object.entries(s.selectors??{}))N[xt]=Zr(Ct,P,h,S);return N}})}return{reducerPath:m,getSelectors:k,get selectors(){return k(T)},selectSlice:T}}const b={name:o,reducer:g,actions:f.actionCreators,caseReducers:f.sliceCaseReducersByName,getInitialState:h,..._(i),injectInto(m,{reducerPath:S,...T}={}){const k=S??i;return m.inject({reducerPath:k,reducer:g},T),{...b,..._(k,!0)}}};return b}}function Zr(e,t,r,n){function s(o,...i){let a=t(o);return typeof a>"u"&&n&&(a=r()),e(a,...i)}return s.unwrapped=e,s}var vt=Jr();function en(){function e(t,r){return{_reducerDefinitionType:"asyncThunk",payloadCreator:t,...r}}return e.withTypes=()=>e,{reducer(t){return Object.assign({[t.name](...r){return t(...r)}}[t.name],{_reducerDefinitionType:"reducer"})},preparedReducer(t,r){return{_reducerDefinitionType:"reducerWithPrepare",prepare:t,reducer:r}},asyncThunk:e}}function tn({type:e,reducerName:t,createNotation:r},n,s){let o,i;if("reducer"in n){if(r&&!nn(n))throw new Error(x(17));o=n.reducer,i=n.prepare}else o=n;s.addCase(e,o).exposeCaseReducer(t,o).exposeAction(t,i?j(e,i):j(e))}function rn(e){return e._reducerDefinitionType==="asyncThunk"}function nn(e){return e._reducerDefinitionType==="reducerWithPrepare"}function sn({type:e,reducerName:t},r,n,s){if(!s)throw new Error(x(18));const{payloadCreator:o,fulfilled:i,pending:a,rejected:c,settled:f,options:u}=r,l=s(e,o,u);n.exposeAction(t,l),i&&n.addCase(l.fulfilled,i),a&&n.addCase(l.pending,a),c&&n.addCase(l.rejected,c),f&&n.addMatcher(l.settled,f),n.exposeCaseReducer(t,{fulfilled:i||Z,pending:a||Z,rejected:c||Z,settled:f||Z})}function Z(){}var on=(e,t)=>{if(typeof e!="function")throw new Error(x(32))},xe="listenerMiddleware",an=e=>{let{type:t,actionCreator:r,matcher:n,predicate:s,effect:o}=e;if(t)s=j(t).match;else if(r)t=r.type,s=r.match;else if(n)s=n;else if(!s)throw new Error(x(21));return on(o),{predicate:s,type:t,effect:o}},cn=Object.assign(e=>{const{type:t,predicate:r,effect:n}=an(e);return{id:kt(),effect:n,type:t,predicate:r,pending:new Set,unsubscribe:()=>{throw new Error(x(22))}}},{withTypes:()=>cn}),un=Object.assign(j(`${xe}/add`),{withTypes:()=>un});j(`${xe}/removeAll`);var fn=Object.assign(j(`${xe}/remove`),{withTypes:()=>fn});function x(e){return`Minified Redux Toolkit error #${e}; visit https://redux-toolkit.js.org/Errors?code=${e} for the full message or use the non-minified dev environment for full errors. `}const ln=[{id:"1",title:"Something",state:"TASK_INBOX"},{id:"2",title:"Something more",state:"TASK_INBOX"},{id:"3",title:"Something else",state:"TASK_INBOX"},{id:"4",title:"Something again",state:"TASK_INBOX"}],dn={tasks:ln,status:"idle",error:null},ye=Xr("todos/fetchTodos",async()=>(await(await fetch("https://jsonplaceholder.typicode.com/todos?userId=1")).json()).map(n=>({id:`${n.id}`,title:n.title,state:n.completed?"TASK_ARCHIVED":"TASK_INBOX"}))),Tt=vt({name:"taskbox",initialState:dn,reducers:{updateTaskState:(e,t)=>{const{id:r,newTaskState:n}=t.payload,s=e.tasks.findIndex(o=>o.id===r);s>=0&&(e.tasks[s].state=n)}},extraReducers(e){e.addCase(ye.pending,t=>{t.status="loading",t.error=null,t.tasks=[]}).addCase(ye.fulfilled,(t,r)=>{t.status="succeeded",t.error=null,t.tasks=r.payload}).addCase(ye.rejected,t=>{t.status="failed",t.error="Something went wrong",t.tasks=[]})}}),{updateTaskState:Be}=Tt.actions,pn=bt({reducer:{taskbox:Tt.reducer}}),bn=pn;function Et(){const e=Pe(i=>[...i.taskbox.tasks.filter(f=>f.state==="TASK_PINNED"),...i.taskbox.tasks.filter(f=>f.state!=="TASK_PINNED")].filter(f=>f.state==="TASK_INBOX"||f.state==="TASK_PINNED")),{status:t}=Pe(i=>i.taskbox),r=rr(),n=i=>{r(Be({id:i,newTaskState:"TASK_PINNED"}))},s=i=>{r(Be({id:i,newTaskState:"TASK_ARCHIVED"}))},o=v.jsxs("div",{className:"loading-item",children:[v.jsx("span",{className:"glow-checkbox"}),v.jsxs("span",{className:"glow-text",children:[v.jsx("span",{children:"Loading"})," ",v.jsx("span",{children:"cool"})," ",v.jsx("span",{children:"state"})]})]});return t==="loading"?v.jsxs("div",{className:"list-items","data-testid":"loading",children:[o,o,o,o,o,o]},"loading"):e.length===0?v.jsx("div",{className:"list-items","data-testid":"empty",children:v.jsxs("div",{className:"wrapper-message",children:[v.jsx("span",{className:"icon-check"}),v.jsx("p",{className:"title-message",children:"You have no tasks"}),v.jsx("p",{className:"subtitle-message",children:"Sit back and relax"})]})},"empty"):v.jsx("div",{className:"list-items","data-testid":"success",children:e.map(i=>v.jsx(Pt,{task:i,onPinTask:a=>n(a),onArchiveTask:a=>s(a)},i.id))},"success")}Et.__docgenInfo={description:"",methods:[],displayName:"TaskList"};const W={tasks:[{...$.args.task,id:"1",title:"TASK 1"},{...$.args.task,id:"2",title:"TASK 2"},{...$.args.task,id:"3",title:"TASK 3"},{...$.args.task,id:"4",title:"TASK 4"},{...$.args.task,id:"5",title:"TASK 5"},{...$.args.task,id:"6",title:"TASK 6"}],status:"idle",error:null},Q=({taskboxState:e,children:t})=>v.jsx(Zt,{store:bt({reducer:{taskbox:vt({name:"taskbox",initialState:e,reducers:{updateTaskState:(r,n)=>{const{id:s,newTaskState:o}=n.payload,i=r.tasks.findIndex(a=>a.id===s);i>=0&&(r.tasks[i].state=o)}}}).reducer}}),children:t}),yn={component:Et,title:"TaskList",decorators:[e=>v.jsx("div",{style:{margin:"3rem"},children:e()})],tags:["autodocs"],excludeStories:/.*MockedState$/},q={decorators:[e=>v.jsx(Q,{taskboxState:W,children:e()})]},U={decorators:[e=>{const t=[...W.tasks.slice(0,5),{id:"6",title:"Task 6 (pinned)",state:"TASK_PINNED"}];return v.jsx(Q,{taskboxState:{...W,tasks:t},children:e()})}]},V={decorators:[e=>v.jsx(Q,{taskboxState:{...W,status:"loading"},children:e()})]},X={decorators:[e=>v.jsx(Q,{taskboxState:{...W,tasks:[]},children:e()})]};Q.propTypes={taskboxState:M.shape({tasks:M.arrayOf(M.shape({id:M.string.isRequired,title:M.string.isRequired,state:M.string})).isRequired,status:M.string.isRequired,error:M.string}).isRequired,children:M.node.isRequired};var qe,Ue,Ve;q.parameters={...q.parameters,docs:{...(qe=q.parameters)==null?void 0:qe.docs,source:{originalSource:`{
  // args: {
  //   tasks: [
  //     { ...TaskStories.Default.args.task, id: "1", title: "Task 1" },
  //     { ...TaskStories.Default.args.task, id: "2", title: "Task 2" },
  //     { ...TaskStories.Default.args.task, id: "3", title: "Task 3" },
  //     { ...TaskStories.Default.args.task, id: "4", title: "Task 4" },
  //     { ...TaskStories.Default.args.task, id: "5", title: "Task 5" },
  //     { ...TaskStories.Default.args.task, id: "6", title: "Task 6" },
  //   ],
  // },
  decorators: [story => <Mockstore taskboxState={MockedState}>{story()}</Mockstore>]
}`,...(Ve=(Ue=q.parameters)==null?void 0:Ue.docs)==null?void 0:Ve.source}}};var Xe,He,Ge;U.parameters={...U.parameters,docs:{...(Xe=U.parameters)==null?void 0:Xe.docs,source:{originalSource:`{
  // args: {
  //   tasks: [
  //     ...Default.args.tasks.slice(0, 5),
  //     { id: "6", title: "Task 6 (pinned)", state: "TASK_PINNED" },
  //   ],
  // },
  decorators: [story => {
    const pinnedtasks = [...MockedState.tasks.slice(0, 5), {
      id: "6",
      title: "Task 6 (pinned)",
      state: "TASK_PINNED"
    }];
    return <Mockstore taskboxState={{
      ...MockedState,
      tasks: pinnedtasks
    }}>
          {story()}
        </Mockstore>;
  }]
}`,...(Ge=(He=U.parameters)==null?void 0:He.docs)==null?void 0:Ge.source}}};var Ye,Qe,Je;V.parameters={...V.parameters,docs:{...(Ye=V.parameters)==null?void 0:Ye.docs,source:{originalSource:`{
  // args: {
  //   tasks: [],
  //   loading: true,
  // },
  decorators: [story => <Mockstore taskboxState={{
    ...MockedState,
    status: "loading"
  }}>
        {story()}
      </Mockstore>]
}`,...(Je=(Qe=V.parameters)==null?void 0:Qe.docs)==null?void 0:Je.source}}};var Ze,et,tt;X.parameters={...X.parameters,docs:{...(Ze=X.parameters)==null?void 0:Ze.docs,source:{originalSource:`{
  // args: {
  //   ...Loading.args,
  //   loading: false,
  // },
  decorators: [story => <Mockstore taskboxState={{
    ...MockedState,
    tasks: []
  }}>
        {story()}
      </Mockstore>]
}`,...(tt=(et=X.parameters)==null?void 0:et.docs)==null?void 0:tt.source}}};const hn=["MockedState","Default","WithPinnedTasks","Loading","Empty"],_n=Object.freeze(Object.defineProperty({__proto__:null,Default:q,Empty:X,Loading:V,MockedState:W,WithPinnedTasks:U,__namedExportsOrder:hn,default:yn},Symbol.toStringTag,{value:"Module"}));export{W as M,Zt as P,Et as T,Pe as a,_n as b,ye as f,bn as s,rr as u};
