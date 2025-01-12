let e,t,n;var i,r,s,a,o,l,h,u=globalThis,c={},d=c={};function f(){throw Error("setTimeout has not been defined")}function p(){throw Error("clearTimeout has not been defined")}function g(e){if(eV===setTimeout)return setTimeout(e,0);if((eV===f||!eV)&&setTimeout)return eV=setTimeout,setTimeout(e,0);try{return eV(e,0)}catch(t){try{return eV.call(null,e,0)}catch(t){return eV.call(this,e,0)}}}!function(){try{eV="function"==typeof setTimeout?setTimeout:f}catch(e){eV=f}try{eF="function"==typeof clearTimeout?clearTimeout:p}catch(e){eF=p}}();var m=[],y=!1,v=-1;function w(){y&&eP&&(y=!1,eP.length?m=eP.concat(m):v=-1,m.length&&E())}function E(){if(!y){var e=g(w);y=!0;for(var t=m.length;t;){for(eP=m,m=[];++v<t;)eP&&eP[v].run();v=-1,t=m.length}eP=null,y=!1,function(e){if(eF===clearTimeout)return clearTimeout(e);if((eF===p||!eF)&&clearTimeout)return eF=clearTimeout,clearTimeout(e);try{eF(e)}catch(t){try{return eF.call(null,e)}catch(t){return eF.call(this,e)}}}(e)}}function b(e,t){this.fun=e,this.array=t}function T(){}d.nextTick=function(e){var t=Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];m.push(new b(e,t)),1!==m.length||y||g(E)},b.prototype.run=function(){this.fun.apply(null,this.array)},d.title="browser",d.browser=!0,d.env={},d.argv=[],d.version="",d.versions={},d.on=T,d.addListener=T,d.once=T,d.off=T,d.removeListener=T,d.removeAllListeners=T,d.emit=T,d.prependListener=T,d.prependOnceListener=T,d.listeners=function(e){return[]},d.binding=function(e){throw Error("process.binding is not supported")},d.cwd=function(){return"/"},d.chdir=function(e){throw Error("process.chdir is not supported")},d.umask=function(){return 0};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const I=function(e){let t=[],n=0;for(let i=0;i<e.length;i++){let r=e.charCodeAt(i);r<128?t[n++]=r:(r<2048?t[n++]=r>>6|192:((64512&r)==55296&&i+1<e.length&&(64512&e.charCodeAt(i+1))==56320?(r=65536+((1023&r)<<10)+(1023&e.charCodeAt(++i)),t[n++]=r>>18|240,t[n++]=r>>12&63|128):t[n++]=r>>12|224,t[n++]=r>>6&63|128),t[n++]=63&r|128)}return t},S=function(e){let t=[],n=0,i=0;for(;n<e.length;){let r=e[n++];if(r<128)t[i++]=String.fromCharCode(r);else if(r>191&&r<224){let s=e[n++];t[i++]=String.fromCharCode((31&r)<<6|63&s)}else if(r>239&&r<365){let s=((7&r)<<18|(63&e[n++])<<12|(63&e[n++])<<6|63&e[n++])-65536;t[i++]=String.fromCharCode(55296+(s>>10)),t[i++]=String.fromCharCode(56320+(1023&s))}else{let s=e[n++],a=e[n++];t[i++]=String.fromCharCode((15&r)<<12|(63&s)<<6|63&a)}}return t.join("")},C={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"==typeof atob,encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();let n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,i=[];for(let t=0;t<e.length;t+=3){let r=e[t],s=t+1<e.length,a=s?e[t+1]:0,o=t+2<e.length,l=o?e[t+2]:0,h=r>>2,u=(3&r)<<4|a>>4,c=(15&a)<<2|l>>6,d=63&l;o||(d=64,s||(c=64)),i.push(n[h],n[u],n[c],n[d])}return i.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(I(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):S(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();let n=t?this.charToByteMapWebSafe_:this.charToByteMap_,i=[];for(let t=0;t<e.length;){let r=n[e.charAt(t++)],s=t<e.length?n[e.charAt(t)]:0,a=++t<e.length?n[e.charAt(t)]:64,o=++t<e.length?n[e.charAt(t)]:64;if(++t,null==r||null==s||null==a||null==o)throw Error();let l=r<<2|s>>4;if(i.push(l),64!==a){let e=s<<4&240|a>>2;if(i.push(e),64!==o){let e=a<<6&192|o;i.push(e)}}}return i},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}},A=function(e){let t=I(e);return C.encodeByteArray(t,!0)},_=function(e){return A(e).replace(/\./g,"")},D=function(e){try{return C.decodeString(e,!0)}catch(e){console.error("base64Decode failed: ",e)}return null},k=()=>/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(function(){if("undefined"!=typeof self)return self;if("undefined"!=typeof window)return window;if(void 0!==u)return u;throw Error("Unable to locate global object.")})().__FIREBASE_DEFAULTS__,N=()=>{if(void 0===c||void 0===c.env)return;let e=void 0;if(e)return JSON.parse(e)},L=()=>{let e;if("undefined"==typeof document)return;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch(e){return}let t=e&&D(e[1]);return t&&JSON.parse(t)},R=()=>{try{return k()||N()||L()}catch(e){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${e}`);return}},x=e=>{var t,n;return null===(n=null===(t=R())||void 0===t?void 0:t.emulatorHosts)||void 0===n?void 0:n[e]},O=e=>{let t=x(e);if(!t)return;let n=t.lastIndexOf(":");if(n<=0||n+1===t.length)throw Error(`Invalid host ${t} with no separate hostname and port!`);let i=parseInt(t.substring(n+1),10);return"["===t[0]?[t.substring(1,n-1),i]:[t.substring(0,n),i]},M=()=>{var e;return null===(e=R())||void 0===e?void 0:e.config};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class V{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,n)=>{t?this.reject(t):this.resolve(n),"function"==typeof e&&(this.promise.catch(()=>{}),1===e.length?e(t):e(t,n))}}}class F extends Error{constructor(e,t,n){super(t),this.code=e,this.customData=n,this.name="FirebaseError",Object.setPrototypeOf(this,F.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,P.prototype.create)}}class P{constructor(e,t,n){this.service=e,this.serviceName=t,this.errors=n}create(e,...t){let n=t[0]||{},i=`${this.service}/${e}`,r=this.errors[e],s=r?r.replace(U,(e,t)=>{let i=n[t];return null!=i?String(i):`<${t}?>`}):"Error",a=`${this.serviceName}: ${s} (${i}).`;return new F(i,a,n)}}const U=/\{\$([^}]+)}/g;function B(e,t){if(e===t)return!0;let n=Object.keys(e),i=Object.keys(t);for(let r of n){if(!i.includes(r))return!1;let n=e[r],s=t[r];if(j(n)&&j(s)){if(!B(n,s))return!1}else if(n!==s)return!1}for(let e of i)if(!n.includes(e))return!1;return!0}function j(e){return null!==e&&"object"==typeof e}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function q(e){return e&&e._delegate?e._delegate:e}class K{constructor(e,t,n){this.name=e,this.instanceFactory=t,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class H{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){let t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){let e=new V;if(this.instancesDeferred.set(t,e),this.isInitialized(t)||this.shouldAutoInitialize())try{let n=this.getOrInitializeService({instanceIdentifier:t});n&&e.resolve(n)}catch(e){}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;let n=this.normalizeInstanceIdentifier(null==e?void 0:e.identifier),i=null!==(t=null==e?void 0:e.optional)&&void 0!==t&&t;if(this.isInitialized(n)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:n})}catch(e){if(i)return null;throw e}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,this.shouldAutoInitialize()){if("EAGER"===e.instantiationMode)try{this.getOrInitializeService({instanceIdentifier:$})}catch(e){}for(let[e,t]of this.instancesDeferred.entries()){let n=this.normalizeInstanceIdentifier(e);try{let e=this.getOrInitializeService({instanceIdentifier:n});t.resolve(e)}catch(e){}}}}clearInstance(e=$){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){let e=Array.from(this.instances.values());await Promise.all([...e.filter(e=>"INTERNAL"in e).map(e=>e.INTERNAL.delete()),...e.filter(e=>"_delete"in e).map(e=>e._delete())])}isComponentSet(){return null!=this.component}isInitialized(e=$){return this.instances.has(e)}getOptions(e=$){return this.instancesOptions.get(e)||{}}initialize(e={}){let{options:t={}}=e,n=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(n))throw Error(`${this.name}(${n}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);let i=this.getOrInitializeService({instanceIdentifier:n,options:t});for(let[e,t]of this.instancesDeferred.entries())n===this.normalizeInstanceIdentifier(e)&&t.resolve(i);return i}onInit(e,t){var n;let i=this.normalizeInstanceIdentifier(t),r=null!==(n=this.onInitCallbacks.get(i))&&void 0!==n?n:new Set;r.add(e),this.onInitCallbacks.set(i,r);let s=this.instances.get(i);return s&&e(s,i),()=>{r.delete(e)}}invokeOnInitCallbacks(e,t){let n=this.onInitCallbacks.get(t);if(n)for(let i of n)try{i(e,t)}catch(e){}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let n=this.instances.get(e);if(!n&&this.component&&(n=this.component.instanceFactory(this.container,{instanceIdentifier:e===$?void 0:e,options:t}),this.instances.set(e,n),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(n,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,n)}catch(e){}return n||null}normalizeInstanceIdentifier(e=$){return this.component?this.component.multipleInstances?e:$:e}shouldAutoInitialize(){return!!this.component&&"EXPLICIT"!==this.component.instantiationMode}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class z{constructor(e){this.name=e,this.providers=new Map}addComponent(e){let t=this.getProvider(e.name);if(t.isComponentSet())throw Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);let t=new H(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const G=[];(eM=eU||(eU={}))[eM.DEBUG=0]="DEBUG",eM[eM.VERBOSE=1]="VERBOSE",eM[eM.INFO=2]="INFO",eM[eM.WARN=3]="WARN",eM[eM.ERROR=4]="ERROR",eM[eM.SILENT=5]="SILENT";const Q={debug:eU.DEBUG,verbose:eU.VERBOSE,info:eU.INFO,warn:eU.WARN,error:eU.ERROR,silent:eU.SILENT},W=eU.INFO,X={[eU.DEBUG]:"log",[eU.VERBOSE]:"log",[eU.INFO]:"info",[eU.WARN]:"warn",[eU.ERROR]:"error"},Y=(e,t,...n)=>{if(t<e.logLevel)return;let i=new Date().toISOString(),r=X[t];if(r)console[r](`[${i}]  ${e.name}:`,...n);else throw Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class J{constructor(e){this.name=e,this._logLevel=W,this._logHandler=Y,this._userLogHandler=null,G.push(this)}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in eU))throw TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel="string"==typeof e?Q[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if("function"!=typeof e)throw TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,eU.DEBUG,...e),this._logHandler(this,eU.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,eU.VERBOSE,...e),this._logHandler(this,eU.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,eU.INFO,...e),this._logHandler(this,eU.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,eU.WARN,...e),this._logHandler(this,eU.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,eU.ERROR,...e),this._logHandler(this,eU.ERROR,...e)}}const Z=(e,t)=>t.some(t=>e instanceof t),ee=new WeakMap,et=new WeakMap,en=new WeakMap,ei=new WeakMap,er=new WeakMap;let es={get(e,t,n){if(e instanceof IDBTransaction){if("done"===t)return et.get(e);if("objectStoreNames"===t)return e.objectStoreNames||en.get(e);if("store"===t)return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return ea(e[t])},set:(e,t,n)=>(e[t]=n,!0),has:(e,t)=>e instanceof IDBTransaction&&("done"===t||"store"===t)||t in e};function ea(n){var i;if(n instanceof IDBRequest)return function(e){let t=new Promise((t,n)=>{let i=()=>{e.removeEventListener("success",r),e.removeEventListener("error",s)},r=()=>{t(ea(e.result)),i()},s=()=>{n(e.error),i()};e.addEventListener("success",r),e.addEventListener("error",s)});return t.then(t=>{t instanceof IDBCursor&&ee.set(t,e)}).catch(()=>{}),er.set(t,e),t}(n);if(ei.has(n))return ei.get(n);let r="function"==typeof(i=n)?i!==IDBDatabase.prototype.transaction||"objectStoreNames"in IDBTransaction.prototype?(t||(t=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])).includes(i)?function(...e){return i.apply(eo(this),e),ea(ee.get(this))}:function(...e){return ea(i.apply(eo(this),e))}:function(e,...t){let n=i.call(eo(this),e,...t);return en.set(n,e.sort?e.sort():[e]),ea(n)}:(i instanceof IDBTransaction&&function(e){if(et.has(e))return;let t=new Promise((t,n)=>{let i=()=>{e.removeEventListener("complete",r),e.removeEventListener("error",s),e.removeEventListener("abort",s)},r=()=>{t(),i()},s=()=>{n(e.error||new DOMException("AbortError","AbortError")),i()};e.addEventListener("complete",r),e.addEventListener("error",s),e.addEventListener("abort",s)});et.set(e,t)}(i),Z(i,e||(e=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])))?new Proxy(i,es):i;return r!==n&&(ei.set(n,r),er.set(r,n)),r}const eo=e=>er.get(e),el=["get","getKey","getAll","getAllKeys","count"],eh=["put","add","delete","clear"],eu=new Map;function ec(e,t){if(!(e instanceof IDBDatabase&&!(t in e)&&"string"==typeof t))return;if(eu.get(t))return eu.get(t);let n=t.replace(/FromIndex$/,""),i=t!==n,r=eh.includes(n);if(!(n in(i?IDBIndex:IDBObjectStore).prototype)||!(r||el.includes(n)))return;let s=async function(e,...t){let s=this.transaction(e,r?"readwrite":"readonly"),a=s.store;return i&&(a=a.index(t.shift())),(await Promise.all([a[n](...t),r&&s.done]))[0]};return eu.set(t,s),s}es={...n=es,get:(e,t,i)=>ec(e,t)||n.get(e,t,i),has:(e,t)=>!!ec(e,t)||n.has(e,t)};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ed{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(e=>{if(!function(e){let t=e.getComponent();return(null==t?void 0:t.type)==="VERSION"}(e))return null;{let t=e.getImmediate();return`${t.library}/${t.version}`}}).filter(e=>e).join(" ")}}const ef="@firebase/app",ep="0.9.3",eg=new J("@firebase/app"),em="[DEFAULT]",ey={[ef]:"fire-core","@firebase/app-compat":"fire-core-compat","@firebase/analytics":"fire-analytics","@firebase/analytics-compat":"fire-analytics-compat","@firebase/app-check":"fire-app-check","@firebase/app-check-compat":"fire-app-check-compat","@firebase/auth":"fire-auth","@firebase/auth-compat":"fire-auth-compat","@firebase/database":"fire-rtdb","@firebase/database-compat":"fire-rtdb-compat","@firebase/functions":"fire-fn","@firebase/functions-compat":"fire-fn-compat","@firebase/installations":"fire-iid","@firebase/installations-compat":"fire-iid-compat","@firebase/messaging":"fire-fcm","@firebase/messaging-compat":"fire-fcm-compat","@firebase/performance":"fire-perf","@firebase/performance-compat":"fire-perf-compat","@firebase/remote-config":"fire-rc","@firebase/remote-config-compat":"fire-rc-compat","@firebase/storage":"fire-gcs","@firebase/storage-compat":"fire-gcs-compat","@firebase/firestore":"fire-fst","@firebase/firestore-compat":"fire-fst-compat","fire-js":"fire-js",firebase:"fire-js-all"},ev=new Map,ew=new Map;function eE(e){let t=e.name;if(ew.has(t))return eg.debug(`There were multiple attempts to register component ${t}.`),!1;for(let n of(ew.set(t,e),ev.values()))!function(e,t){try{e.container.addComponent(t)}catch(n){eg.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}(n,e);return!0}const eb=new P("app","Firebase",{"no-app":"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."});/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eT{constructor(e,t,n){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=n,this.container.addComponent(new K("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw eb.create("app-deleted",{appName:this._name})}}function eI(e,t={}){let n=e;"object"!=typeof t&&(t={name:t});let i=Object.assign({name:em,automaticDataCollectionEnabled:!1},t),r=i.name;if("string"!=typeof r||!r)throw eb.create("bad-app-name",{appName:String(r)});if(n||(n=M()),!n)throw eb.create("no-options");let s=ev.get(r);if(s){if(B(n,s.options)&&B(i,s.config))return s;throw eb.create("duplicate-app",{appName:r})}let a=new z(r);for(let e of ew.values())a.addComponent(e);let o=new eT(n,i,a);return ev.set(r,o),o}function eS(e,t,n){var i;let r=null!==(i=ey[e])&&void 0!==i?i:e;n&&(r+=`-${n}`);let s=r.match(/\s|\//),a=t.match(/\s|\//);if(s||a){let e=[`Unable to register library "${r}" with version "${t}":`];s&&e.push(`library name "${r}" contains illegal characters (whitespace or "/")`),s&&a&&e.push("and"),a&&e.push(`version name "${t}" contains illegal characters (whitespace or "/")`),eg.warn(e.join(" "));return}eE(new K(`${r}-version`,()=>({library:r,version:t}),"VERSION"))}const eC="firebase-heartbeat-store";let eA=null;function e_(){return eA||(eA=(function(e,t,{blocked:n,upgrade:i,blocking:r,terminated:s}={}){let a=indexedDB.open(e,1),o=ea(a);return i&&a.addEventListener("upgradeneeded",e=>{i(ea(a.result),e.oldVersion,e.newVersion,ea(a.transaction))}),n&&a.addEventListener("blocked",()=>n()),o.then(e=>{s&&e.addEventListener("close",()=>s()),r&&e.addEventListener("versionchange",()=>r())}).catch(()=>{}),o})("firebase-heartbeat-database",0,{upgrade:(e,t)=>{0===t&&e.createObjectStore(eC)}}).catch(e=>{throw eb.create("idb-open",{originalErrorMessage:e.message})})),eA}async function eD(e){try{return(await e_()).transaction(eC).objectStore(eC).get(eN(e))}catch(e){if(e instanceof F)eg.warn(e.message);else{let t=eb.create("idb-get",{originalErrorMessage:null==e?void 0:e.message});eg.warn(t.message)}}}async function ek(e,t){try{let n=(await e_()).transaction(eC,"readwrite"),i=n.objectStore(eC);return await i.put(t,eN(e)),n.done}catch(e){if(e instanceof F)eg.warn(e.message);else{let t=eb.create("idb-set",{originalErrorMessage:null==e?void 0:e.message});eg.warn(t.message)}}}function eN(e){return`${e.name}!${e.options.appId}`}class eL{constructor(e){this.container=e,this._heartbeatsCache=null;let t=this.container.getProvider("app").getImmediate();this._storage=new ex(t),this._heartbeatsCachePromise=this._storage.read().then(e=>(this._heartbeatsCache=e,e))}async triggerHeartbeat(){let e=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),t=eR();return(null===this._heartbeatsCache&&(this._heartbeatsCache=await this._heartbeatsCachePromise),this._heartbeatsCache.lastSentHeartbeatDate===t||this._heartbeatsCache.heartbeats.some(e=>e.date===t))?void 0:(this._heartbeatsCache.heartbeats.push({date:t,agent:e}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(e=>{let t=new Date(e.date).valueOf();return Date.now()-t<=2592e6}),this._storage.overwrite(this._heartbeatsCache))}async getHeartbeatsHeader(){if(null===this._heartbeatsCache&&await this._heartbeatsCachePromise,null===this._heartbeatsCache||0===this._heartbeatsCache.heartbeats.length)return"";let e=eR(),{heartbeatsToSend:t,unsentEntries:n}=function(e,t=1024){let n=[],i=e.slice();for(let r of e){let e=n.find(e=>e.agent===r.agent);if(e){if(e.dates.push(r.date),eO(n)>t){e.dates.pop();break}}else if(n.push({agent:r.agent,dates:[r.date]}),eO(n)>t){n.pop();break}i=i.slice(1)}return{heartbeatsToSend:n,unsentEntries:i}}(this._heartbeatsCache.heartbeats),i=_(JSON.stringify({version:2,heartbeats:t}));return this._heartbeatsCache.lastSentHeartbeatDate=e,n.length>0?(this._heartbeatsCache.heartbeats=n,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function eR(){return new Date().toISOString().substring(0,10)}class ex{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return!!function(){try{return"object"==typeof indexedDB}catch(e){return!1}}()&&new Promise((e,t)=>{try{let n=!0,i="validate-browser-context-for-indexeddb-analytics-module",r=self.indexedDB.open(i);r.onsuccess=()=>{r.result.close(),n||self.indexedDB.deleteDatabase(i),e(!0)},r.onupgradeneeded=()=>{n=!1},r.onerror=()=>{var e;t((null===(e=r.error)||void 0===e?void 0:e.message)||"")}}catch(e){t(e)}}).then(()=>!0).catch(()=>!1)}async read(){return await this._canUseIndexedDBPromise&&await eD(this.app)||{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){let n=await this.read();return ek(this.app,{lastSentHeartbeatDate:null!==(t=e.lastSentHeartbeatDate)&&void 0!==t?t:n.lastSentHeartbeatDate,heartbeats:e.heartbeats})}}async add(e){var t;if(await this._canUseIndexedDBPromise){let n=await this.read();return ek(this.app,{lastSentHeartbeatDate:null!==(t=e.lastSentHeartbeatDate)&&void 0!==t?t:n.lastSentHeartbeatDate,heartbeats:[...n.heartbeats,...e.heartbeats]})}}}function eO(e){return _(JSON.stringify({version:2,heartbeats:e})).length}eE(new K("platform-logger",e=>new ed(e),"PRIVATE")),eE(new K("heartbeat",e=>new eL(e),"PRIVATE")),eS(ef,ep,""),eS(ef,ep,"esm2017"),eS("fire-js",""),/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */eS("firebase","9.17.1","app");var eM,eV,eF,eP,eU,eB,ej={},eq=eq||{},eK=("undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:void 0!==u?u:"undefined"!=typeof self?self:{})||self;function e$(){}function eH(e){var t=typeof e;return"array"==(t="object"!=t?t:e?Array.isArray(e)?"array":t:"null")||"object"==t&&"number"==typeof e.length}function ez(e){var t=typeof e;return"object"==t&&null!=e||"function"==t}function eG(e,t,n){return e.call.apply(e.bind,arguments)}function eQ(e,t,n){if(!e)throw Error();if(2<arguments.length){var i=Array.prototype.slice.call(arguments,2);return function(){var n=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(n,i),e.apply(t,n)}}return function(){return e.apply(t,arguments)}}function eW(e,t,n){return(eW=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?eG:eQ).apply(null,arguments)}function eX(e,t){var n=Array.prototype.slice.call(arguments,1);return function(){var t=n.slice();return t.push.apply(t,arguments),e.apply(this,t)}}function eY(e,t){function n(){}n.prototype=t.prototype,e.X=t.prototype,e.prototype=new n,e.prototype.constructor=e,e.Wb=function(e,n,i){for(var r=Array(arguments.length-2),s=2;s<arguments.length;s++)r[s-2]=arguments[s];return t.prototype[n].apply(e,r)}}function eJ(){this.s=this.s,this.o=this.o}eJ.prototype.s=!1,eJ.prototype.na=function(){this.s||(this.s=!0,this.M())},eJ.prototype.M=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const eZ=Array.prototype.indexOf?function(e,t){return Array.prototype.indexOf.call(e,t,void 0)}:function(e,t){if("string"==typeof e)return"string"!=typeof t||1!=t.length?-1:e.indexOf(t,0);for(let n=0;n<e.length;n++)if(n in e&&e[n]===t)return n;return -1};function e0(e){let t=e.length;if(0<t){let n=Array(t);for(let i=0;i<t;i++)n[i]=e[i];return n}return[]}function e1(e,t){for(let t=1;t<arguments.length;t++){let n=arguments[t];if(eH(n)){let t=e.length||0,i=n.length||0;e.length=t+i;for(let r=0;r<i;r++)e[t+r]=n[r]}else e.push(n)}}function e2(e,t){this.type=e,this.g=this.target=t,this.defaultPrevented=!1}e2.prototype.h=function(){this.defaultPrevented=!0};var e3=function(){if(!eK.addEventListener||!Object.defineProperty)return!1;var e=!1,t=Object.defineProperty({},"passive",{get:function(){e=!0}});try{eK.addEventListener("test",e$,t),eK.removeEventListener("test",e$,t)}catch(e){}return e}();function e4(e){return/^[\s\xa0]*$/.test(e)}var e6=String.prototype.trim?function(e){return e.trim()}:function(e){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(e)[1]};function e5(e,t){return e<t?-1:e>t?1:0}function e8(){var e=eK.navigator;return e&&(e=e.userAgent)?e:""}function e9(e){return -1!=e8().indexOf(e)}function e7(e){return e7[" "](e),e}e7[" "]=e$;var te=e9("Opera"),tt=e9("Trident")||e9("MSIE"),tn=e9("Edge"),ti=tn||tt,tr=e9("Gecko")&&!(-1!=e8().toLowerCase().indexOf("webkit")&&!e9("Edge"))&&!(e9("Trident")||e9("MSIE"))&&!e9("Edge"),ts=-1!=e8().toLowerCase().indexOf("webkit")&&!e9("Edge");function ta(){var e=eK.document;return e?e.documentMode:void 0}e:{var to,tl="",th=(to=e8(),tr?/rv:([^\);]+)(\)|;)/.exec(to):tn?/Edge\/([\d\.]+)/.exec(to):tt?/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(to):ts?/WebKit\/(\S+)/.exec(to):te?/(?:Version)[ \/]?(\S+)/.exec(to):void 0);if(th&&(tl=th?th[1]:""),tt){var tu=ta();if(null!=tu&&tu>parseFloat(tl)){r=String(tu);break e}}r=tl}var tc={},td=eK.document&&tt&&(ta()||parseInt(r,10))||void 0;function tf(e,t){if(e2.call(this,e?e.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,e){var n=this.type=e.type,i=e.changedTouches&&e.changedTouches.length?e.changedTouches[0]:null;if(this.target=e.target||e.srcElement,this.g=t,t=e.relatedTarget){if(tr){e:{try{e7(t.nodeName);var r=!0;break e}catch(e){}r=!1}r||(t=null)}}else"mouseover"==n?t=e.fromElement:"mouseout"==n&&(t=e.toElement);this.relatedTarget=t,i?(this.clientX=void 0!==i.clientX?i.clientX:i.pageX,this.clientY=void 0!==i.clientY?i.clientY:i.pageY,this.screenX=i.screenX||0,this.screenY=i.screenY||0):(this.clientX=void 0!==e.clientX?e.clientX:e.pageX,this.clientY=void 0!==e.clientY?e.clientY:e.pageY,this.screenX=e.screenX||0,this.screenY=e.screenY||0),this.button=e.button,this.key=e.key||"",this.ctrlKey=e.ctrlKey,this.altKey=e.altKey,this.shiftKey=e.shiftKey,this.metaKey=e.metaKey,this.pointerId=e.pointerId||0,this.pointerType="string"==typeof e.pointerType?e.pointerType:tp[e.pointerType]||"",this.state=e.state,this.i=e,e.defaultPrevented&&tf.X.h.call(this)}}eY(tf,e2);var tp={2:"touch",3:"pen",4:"mouse"};tf.prototype.h=function(){tf.X.h.call(this);var e=this.i;e.preventDefault?e.preventDefault():e.returnValue=!1};var tg="closure_listenable_"+(1e6*Math.random()|0),tm=0;function ty(e,t,n,i,r){this.listener=e,this.proxy=null,this.src=t,this.type=n,this.capture=!!i,this.ha=r,this.key=++tm,this.ba=this.ea=!1}function tv(e){e.ba=!0,e.listener=null,e.proxy=null,e.src=null,e.ha=null}function tw(e,t,n){for(let i in e)t.call(n,e[i],i,e)}function tE(e){let t={};for(let n in e)t[n]=e[n];return t}const tb="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function tT(e,t){let n,i;for(let t=1;t<arguments.length;t++){for(n in i=arguments[t])e[n]=i[n];for(let t=0;t<tb.length;t++)n=tb[t],Object.prototype.hasOwnProperty.call(i,n)&&(e[n]=i[n])}}function tI(e){this.src=e,this.g={},this.h=0}function tS(e,t){var n=t.type;if(n in e.g){var i,r=e.g[n],s=eZ(r,t);(i=0<=s)&&Array.prototype.splice.call(r,s,1),i&&(tv(t),0==e.g[n].length&&(delete e.g[n],e.h--))}}function tC(e,t,n,i){for(var r=0;r<e.length;++r){var s=e[r];if(!s.ba&&s.listener==t&&!!n==s.capture&&s.ha==i)return r}return -1}tI.prototype.add=function(e,t,n,i,r){var s=e.toString();(e=this.g[s])||(e=this.g[s]=[],this.h++);var a=tC(e,t,i,r);return -1<a?(t=e[a],n||(t.ea=!1)):((t=new ty(t,this.src,s,!!i,r)).ea=n,e.push(t)),t};var tA="closure_lm_"+(1e6*Math.random()|0),t_={};function tD(e,t,n,i,r,s){if(!t)throw Error("Invalid event type");var a=ez(r)?!!r.capture:!!r,o=tR(e);if(o||(e[tA]=o=new tI(e)),(n=o.add(t,n,i,a,s)).proxy)return n;if(i=function e(t){return tL.call(e.src,e.listener,t)},n.proxy=i,i.src=e,i.listener=n,e.addEventListener)e3||(r=a),void 0===r&&(r=!1),e.addEventListener(t.toString(),i,r);else if(e.attachEvent)e.attachEvent(tN(t.toString()),i);else if(e.addListener&&e.removeListener)e.addListener(i);else throw Error("addEventListener and attachEvent are unavailable.");return n}function tk(e){if("number"!=typeof e&&e&&!e.ba){var t=e.src;if(t&&t[tg])tS(t.i,e);else{var n=e.type,i=e.proxy;t.removeEventListener?t.removeEventListener(n,i,e.capture):t.detachEvent?t.detachEvent(tN(n),i):t.addListener&&t.removeListener&&t.removeListener(i),(n=tR(t))?(tS(n,e),0==n.h&&(n.src=null,t[tA]=null)):tv(e)}}}function tN(e){return e in t_?t_[e]:t_[e]="on"+e}function tL(e,t){if(e.ba)e=!0;else{t=new tf(t,this);var n=e.listener,i=e.ha||e.src;e.ea&&tk(e),e=n.call(i,t)}return e}function tR(e){return(e=e[tA])instanceof tI?e:null}var tx="__closure_events_fn_"+(1e9*Math.random()>>>0);function tO(e){return"function"==typeof e?e:(e[tx]||(e[tx]=function(t){return e.handleEvent(t)}),e[tx])}function tM(){eJ.call(this),this.i=new tI(this),this.P=this,this.I=null}function tV(e,t){var n,i=e.I;if(i)for(n=[];i;i=i.I)n.push(i);if(e=e.P,i=t.type||t,"string"==typeof t)t=new e2(t,e);else if(t instanceof e2)t.target=t.target||e;else{var r=t;tT(t=new e2(i,e),r)}if(r=!0,n)for(var s=n.length-1;0<=s;s--){var a=t.g=n[s];r=tF(a,i,!0,t)&&r}if(r=tF(a=t.g=e,i,!0,t)&&r,r=tF(a,i,!1,t)&&r,n)for(s=0;s<n.length;s++)r=tF(a=t.g=n[s],i,!1,t)&&r}function tF(e,t,n,i){if(!(t=e.i.g[String(t)]))return!0;t=t.concat();for(var r=!0,s=0;s<t.length;++s){var a=t[s];if(a&&!a.ba&&a.capture==n){var o=a.listener,l=a.ha||a.src;a.ea&&tS(e.i,a),r=!1!==o.call(l,i)&&r}}return r&&!i.defaultPrevented}eY(tM,eJ),tM.prototype[tg]=!0,tM.prototype.removeEventListener=function(e,t,n,i){!function e(t,n,i,r,s){if(Array.isArray(n))for(var a=0;a<n.length;a++)e(t,n[a],i,r,s);else(r=ez(r)?!!r.capture:!!r,i=tO(i),t&&t[tg])?(t=t.i,(n=String(n).toString())in t.g&&-1<(i=tC(a=t.g[n],i,r,s))&&(tv(a[i]),Array.prototype.splice.call(a,i,1),0==a.length&&(delete t.g[n],t.h--))):t&&(t=tR(t))&&(n=t.g[n.toString()],t=-1,n&&(t=tC(n,i,r,s)),(i=-1<t?n[t]:null)&&tk(i))}(this,e,t,n,i)},tM.prototype.M=function(){if(tM.X.M.call(this),this.i){var e,t=this.i;for(e in t.g){for(var n=t.g[e],i=0;i<n.length;i++)tv(n[i]);delete t.g[e],t.h--}}this.I=null},tM.prototype.N=function(e,t,n,i){return this.i.add(String(e),t,!1,n,i)},tM.prototype.O=function(e,t,n,i){return this.i.add(String(e),t,!0,n,i)};var tP=eK.JSON.stringify,tU=new class{constructor(e,t){this.i=e,this.j=t,this.h=0,this.g=null}get(){let e;return 0<this.h?(this.h--,e=this.g,this.g=e.next,e.next=null):e=this.i(),e}}(()=>new tB,e=>e.reset());class tB{constructor(){this.next=this.g=this.h=null}set(e,t){this.h=e,this.g=t,this.next=null}reset(){this.next=this.g=this.h=null}}function tj(e,t){var n;a||(n=eK.Promise.resolve(void 0),a=function(){n.then(t$)}),tq||(a(),tq=!0),tK.add(e,t)}var tq=!1,tK=new class{constructor(){this.h=this.g=null}add(e,t){let n=tU.get();n.set(e,t),this.h?this.h.next=n:this.g=n,this.h=n}};function t$(){let e;for(var t;e=null,tK.g&&(e=tK.g,tK.g=tK.g.next,tK.g||(tK.h=null),e.next=null),t=e;){try{t.h.call(t.g)}catch(e){!function(e){eK.setTimeout(()=>{throw e},0)}(e)}tU.j(t),100>tU.h&&(tU.h++,t.next=tU.g,tU.g=t)}tq=!1}function tH(e,t){tM.call(this),this.h=e||1,this.g=t||eK,this.j=eW(this.lb,this),this.l=Date.now()}function tz(e){e.ca=!1,e.R&&(e.g.clearTimeout(e.R),e.R=null)}function tG(e,t,n){if("function"==typeof e)n&&(e=eW(e,n));else if(e&&"function"==typeof e.handleEvent)e=eW(e.handleEvent,e);else throw Error("Invalid listener argument");return 0x7fffffff<Number(t)?-1:eK.setTimeout(e,t||0)}eY(tH,tM),(eB=tH.prototype).ca=!1,eB.R=null,eB.lb=function(){if(this.ca){var e=Date.now()-this.l;0<e&&e<.8*this.h?this.R=this.g.setTimeout(this.j,this.h-e):(this.R&&(this.g.clearTimeout(this.R),this.R=null),tV(this,"tick"),this.ca&&(tz(this),this.start()))}},eB.start=function(){this.ca=!0,this.R||(this.R=this.g.setTimeout(this.j,this.h),this.l=Date.now())},eB.M=function(){tH.X.M.call(this),tz(this),delete this.g};class tQ extends eJ{constructor(e,t){super(),this.m=e,this.j=t,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:function e(t){t.g=tG(()=>{t.g=null,t.i&&(t.i=!1,e(t))},t.j);let n=t.h;t.h=null,t.m.apply(null,n)}(this)}M(){super.M(),this.g&&(eK.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function tW(e){eJ.call(this),this.h=e,this.g={}}eY(tW,eJ);var tX=[];function tY(e,t,n,i){Array.isArray(n)||(n&&(tX[0]=n.toString()),n=tX);for(var r=0;r<n.length;r++){var s=function e(t,n,i,r,s){if(r&&r.once)return function e(t,n,i,r,s){if(Array.isArray(n)){for(var a=0;a<n.length;a++)e(t,n[a],i,r,s);return null}return i=tO(i),t&&t[tg]?t.O(n,i,ez(r)?!!r.capture:!!r,s):tD(t,n,i,!0,r,s)}(t,n,i,r,s);if(Array.isArray(n)){for(var a=0;a<n.length;a++)e(t,n[a],i,r,s);return null}return i=tO(i),t&&t[tg]?t.N(n,i,ez(r)?!!r.capture:!!r,s):tD(t,n,i,!1,r,s)}(t,n[r],i||e.handleEvent,!1,e.h||e);if(!s)break;e.g[s.key]=s}}function tJ(e){tw(e.g,function(e,t){this.g.hasOwnProperty(t)&&tk(e)},e),e.g={}}function tZ(){this.g=!0}function t0(e,t,n,i){e.info(function(){return"XMLHTTP TEXT ("+t+"): "+function(e,t){if(!e.g)return t;if(!t)return null;try{var n=JSON.parse(t);if(n){for(e=0;e<n.length;e++)if(Array.isArray(n[e])){var i=n[e];if(!(2>i.length)){var r=i[1];if(Array.isArray(r)&&!(1>r.length)){var s=r[0];if("noop"!=s&&"stop"!=s&&"close"!=s)for(var a=1;a<r.length;a++)r[a]=""}}}}return tP(n)}catch(e){return t}}(e,n)+(i?" "+i:"")})}tW.prototype.M=function(){tW.X.M.call(this),tJ(this)},tW.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")},tZ.prototype.Aa=function(){this.g=!1},tZ.prototype.info=function(){};var t1={},t2=null;function t3(){return t2=t2||new tM}function t4(e){e2.call(this,t1.Pa,e)}function t6(e){let t=t3();tV(t,new t4(t))}function t5(e,t){e2.call(this,t1.STAT_EVENT,e),this.stat=t}function t8(e){let t=t3();tV(t,new t5(t,e))}function t9(e,t){e2.call(this,t1.Qa,e),this.size=t}function t7(e,t){if("function"!=typeof e)throw Error("Fn must not be null and must be a function");return eK.setTimeout(function(){e()},t)}t1.Pa="serverreachability",eY(t4,e2),t1.STAT_EVENT="statevent",eY(t5,e2),t1.Qa="timingevent",eY(t9,e2);var ne={NO_ERROR:0,mb:1,zb:2,yb:3,tb:4,xb:5,Ab:6,Ma:7,TIMEOUT:8,Db:9},nt={rb:"complete",Nb:"success",Na:"error",Ma:"abort",Fb:"ready",Gb:"readystatechange",TIMEOUT:"timeout",Bb:"incrementaldata",Eb:"progress",ub:"downloadprogress",Vb:"uploadprogress"};function nn(){}function ni(e){return e.h||(e.h=e.i())}function nr(){}nn.prototype.h=null;var ns={OPEN:"a",qb:"b",Na:"c",Cb:"d"};function na(){e2.call(this,"d")}function no(){e2.call(this,"c")}function nl(){}function nh(e,t,n,i){this.l=e,this.j=t,this.m=n,this.U=i||1,this.S=new tW(this),this.O=nc,e=ti?125:void 0,this.T=new tH(e),this.H=null,this.i=!1,this.s=this.A=this.v=this.K=this.F=this.V=this.B=null,this.D=[],this.g=null,this.C=0,this.o=this.u=null,this.Y=-1,this.I=!1,this.N=0,this.L=null,this.$=this.J=this.Z=this.P=!1,this.h=new nu}function nu(){this.i=null,this.g="",this.h=!1}eY(na,e2),eY(no,e2),eY(nl,nn),nl.prototype.g=function(){return new XMLHttpRequest},nl.prototype.i=function(){return{}},o=new nl;var nc=45e3,nd={},nf={};function np(e,t,n){e.K=1,e.v=nR(n_(t)),e.s=n,e.P=!0,ng(e,null)}function ng(e,t){e.F=Date.now(),nv(e),e.A=n_(e.v);var n=e.A,i=e.U;Array.isArray(i)||(i=[String(i)]),nH(n.i,"t",i),e.C=0,n=e.l.H,e.h=new nu,e.g=iV(e.l,n?t:null,!e.s),0<e.N&&(e.L=new tQ(eW(e.La,e,e.g),e.N)),tY(e.S,e.g,"readystatechange",e.ib),t=e.H?tE(e.H):{},e.s?(e.u||(e.u="POST"),t["Content-Type"]="application/x-www-form-urlencoded",e.g.da(e.A,e.u,e.s,t)):(e.u="GET",e.g.da(e.A,e.u,null,t)),t6(),function(e,t,n,i,r,s){e.info(function(){if(e.g){if(s)for(var a="",o=s.split("&"),l=0;l<o.length;l++){var h=o[l].split("=");if(1<h.length){var u=h[0];h=h[1];var c=u.split("_");a=2<=c.length&&"type"==c[1]?a+(u+"=")+h+"&":a+(u+"=redacted&")}}else a=null}else a=s;return"XMLHTTP REQ ("+i+") [attempt "+r+"]: "+t+"\n"+n+"\n"+a})}(e.j,e.u,e.A,e.m,e.U,e.s)}function nm(e){return!!e.g&&"GET"==e.u&&2!=e.K&&e.l.Da}function ny(e,t,n){let i=!0,r;for(;!e.I&&e.C<n.length;)if((r=function(e,t){var n=e.C,i=t.indexOf("\n",n);return -1==i?nf:isNaN(n=Number(t.substring(n,i)))?nd:(i+=1)+n>t.length?nf:(t=t.substr(i,n),e.C=i+n,t)}(e,n))==nf){4==t&&(e.o=4,t8(14),i=!1),t0(e.j,e.m,null,"[Incomplete Response]");break}else if(r==nd){e.o=4,t8(15),t0(e.j,e.m,n,"[Invalid Chunk]"),i=!1;break}else t0(e.j,e.m,r,null),nI(e,r);nm(e)&&r!=nf&&r!=nd&&(e.h.g="",e.C=0),4!=t||0!=n.length||e.h.h||(e.o=1,t8(16),i=!1),e.i=e.i&&i,i?0<n.length&&!e.$&&(e.$=!0,(t=e.l).g==e&&t.$&&!t.K&&(t.j.info("Great, no buffering proxy detected. Bytes received: "+n.length),iD(t),t.K=!0,t8(11))):(t0(e.j,e.m,n,"[Invalid Chunked Response]"),nT(e),nb(e))}function nv(e){e.V=Date.now()+e.O,nw(e,e.O)}function nw(e,t){if(null!=e.B)throw Error("WatchDog timer not null");e.B=t7(eW(e.gb,e),t)}function nE(e){e.B&&(eK.clearTimeout(e.B),e.B=null)}function nb(e){0==e.l.G||e.I||iL(e.l,e)}function nT(e){nE(e);var t=e.L;t&&"function"==typeof t.na&&t.na(),e.L=null,tz(e.T),tJ(e.S),e.g&&(t=e.g,e.g=null,t.abort(),t.na())}function nI(e,t){try{var n=e.l;if(0!=n.G&&(n.g==e||nJ(n.h,e))){if(!e.J&&nJ(n.h,e)&&3==n.G){try{var i=n.Fa.g.parse(t)}catch(e){i=null}if(Array.isArray(i)&&3==i.length){var r=i;if(0==r[0]){e:if(!n.u){if(n.g){if(n.g.F+3e3<e.F)iN(n),iE(n);else break e}i_(n),t8(18)}}else n.Ba=r[1],0<n.Ba-n.T&&37500>r[2]&&n.L&&0==n.A&&!n.v&&(n.v=t7(eW(n.cb,n),6e3));if(1>=nY(n.h)&&n.ja){try{n.ja()}catch(e){}n.ja=void 0}}else ix(n,11)}else if((e.J||n.g==e)&&iN(n),!e4(t))for(r=n.Fa.g.parse(t),t=0;t<r.length;t++){let o=r[t];if(n.T=o[0],o=o[1],2==n.G){if("c"==o[0]){n.I=o[1],n.ka=o[2];let t=o[3];null!=t&&(n.ma=t,n.j.info("VER="+n.ma));let r=o[4];null!=r&&(n.Ca=r,n.j.info("SVER="+n.Ca));let l=o[5];null!=l&&"number"==typeof l&&0<l&&(i=1.5*l,n.J=i,n.j.info("backChannelRequestTimeoutMs_="+i)),i=n;let h=e.g;if(h){let e=h.g?h.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(e){var s=i.h;s.g||-1==e.indexOf("spdy")&&-1==e.indexOf("quic")&&-1==e.indexOf("h2")||(s.j=s.l,s.g=new Set,s.h&&(nZ(s,s.h),s.h=null))}if(i.D){let e=h.g?h.g.getResponseHeader("X-HTTP-Session-Id"):null;e&&(i.za=e,nL(i.F,i.D,e))}}if(n.G=3,n.l&&n.l.xa(),n.$&&(n.P=Date.now()-e.F,n.j.info("Handshake RTT: "+n.P+"ms")),(i=n).sa=iM(i,i.H?i.ka:null,i.V),e.J){n0(i.h,e);var a=i.J;a&&e.setTimeout(a),e.B&&(nE(e),nv(e)),i.g=e}else iA(i);0<n.i.length&&iT(n)}else"stop"!=o[0]&&"close"!=o[0]||ix(n,7)}else 3==n.G&&("stop"==o[0]||"close"==o[0]?"stop"==o[0]?ix(n,7):iw(n):"noop"!=o[0]&&n.l&&n.l.wa(o),n.A=0)}}t6(4)}catch(e){}}function nS(e,t){if(e.forEach&&"function"==typeof e.forEach)e.forEach(t,void 0);else if(eH(e)||"string"==typeof e)Array.prototype.forEach.call(e,t,void 0);else for(var n=function(e){if(e.oa&&"function"==typeof e.oa)return e.oa();if(!e.W||"function"!=typeof e.W){if("undefined"!=typeof Map&&e instanceof Map)return Array.from(e.keys());if(!("undefined"!=typeof Set&&e instanceof Set)){if(eH(e)||"string"==typeof e){var t=[];e=e.length;for(var n=0;n<e;n++)t.push(n);return t}for(let i in t=[],n=0,e)t[n++]=i;return t}}}(e),i=function(e){if(e.W&&"function"==typeof e.W)return e.W();if("undefined"!=typeof Map&&e instanceof Map||"undefined"!=typeof Set&&e instanceof Set)return Array.from(e.values());if("string"==typeof e)return e.split("");if(eH(e)){for(var t=[],n=e.length,i=0;i<n;i++)t.push(e[i]);return t}for(i in t=[],n=0,e)t[n++]=e[i];return t}(e),r=i.length,s=0;s<r;s++)t.call(void 0,i[s],n&&n[s],e)}(eB=nh.prototype).setTimeout=function(e){this.O=e},eB.ib=function(e){e=e.target;let t=this.L;t&&3==id(e)?t.l():this.La(e)},eB.La=function(e){try{if(e==this.g)e:{let u=id(this.g);var t=this.g.Ea();let c=this.g.aa();if(!(3>u)&&(3!=u||ti||this.g&&(this.h.h||this.g.fa()||ip(this.g)))){this.I||4!=u||7==t||(8==t||0>=c?t6(3):t6(2)),nE(this);var n=this.g.aa();this.Y=n;t:if(nm(this)){var i=ip(this.g);e="";var r=i.length,s=4==id(this.g);if(!this.h.i){if("undefined"==typeof TextDecoder){nT(this),nb(this);var a="";break t}this.h.i=new eK.TextDecoder}for(t=0;t<r;t++)this.h.h=!0,e+=this.h.i.decode(i[t],{stream:s&&t==r-1});i.splice(0,r),this.h.g+=e,this.C=0,a=this.h.g}else a=this.g.fa();if(this.i=200==n,function(e,t,n,i,r,s,a){e.info(function(){return"XMLHTTP RESP ("+i+") [ attempt "+r+"]: "+t+"\n"+n+"\n"+s+" "+a})}(this.j,this.u,this.A,this.m,this.U,u,n),this.i){if(this.Z&&!this.J){t:{if(this.g){var o,l=this.g;if((o=l.g?l.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!e4(o)){var h=o;break t}}h=null}if(n=h)t0(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.J=!0,nI(this,n);else{this.i=!1,this.o=3,t8(12),nT(this),nb(this);break e}}this.P?(ny(this,u,a),ti&&this.i&&3==u&&(tY(this.S,this.T,"tick",this.hb),this.T.start())):(t0(this.j,this.m,a,null),nI(this,a)),4==u&&nT(this),this.i&&!this.I&&(4==u?iL(this.l,this):(this.i=!1,nv(this)))}else 400==n&&0<a.indexOf("Unknown SID")?(this.o=3,t8(12)):(this.o=0,t8(13)),nT(this),nb(this)}}}catch(e){}finally{}},eB.hb=function(){if(this.g){var e=id(this.g),t=this.g.fa();this.C<t.length&&(nE(this),ny(this,e,t),this.i&&4!=e&&nv(this))}},eB.cancel=function(){this.I=!0,nT(this)},eB.gb=function(){this.B=null;let e=Date.now();0<=e-this.V?(function(e,t){e.info(function(){return"TIMEOUT: "+t})}(this.j,this.A),2!=this.K&&(t6(),t8(17)),nT(this),this.o=2,nb(this)):nw(this,this.V-e)};var nC=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function nA(e,t){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,e instanceof nA){this.h=void 0!==t?t:e.h,nD(this,e.j),this.s=e.s,this.g=e.g,nk(this,e.m),this.l=e.l,t=e.i;var n=new nj;n.i=t.i,t.g&&(n.g=new Map(t.g),n.h=t.h),nN(this,n),this.o=e.o}else e&&(n=String(e).match(nC))?(this.h=!!t,nD(this,n[1]||"",!0),this.s=nx(n[2]||""),this.g=nx(n[3]||"",!0),nk(this,n[4]),this.l=nx(n[5]||"",!0),nN(this,n[6]||"",!0),this.o=nx(n[7]||"")):(this.h=!!t,this.i=new nj(null,this.h))}function n_(e){return new nA(e)}function nD(e,t,n){e.j=n?nx(t,!0):t,e.j&&(e.j=e.j.replace(/:$/,""))}function nk(e,t){if(t){if(isNaN(t=Number(t))||0>t)throw Error("Bad port number "+t);e.m=t}else e.m=null}function nN(e,t,n){var i,r;t instanceof nj?(e.i=t,i=e.i,(r=e.h)&&!i.j&&(nq(i),i.i=null,i.g.forEach(function(e,t){var n=t.toLowerCase();t!=n&&(nK(this,t),nH(this,n,e))},i)),i.j=r):(n||(t=nO(t,nU)),e.i=new nj(t,e.h))}function nL(e,t,n){e.i.set(t,n)}function nR(e){return nL(e,"zx",Math.floor(0x80000000*Math.random()).toString(36)+Math.abs(Math.floor(0x80000000*Math.random())^Date.now()).toString(36)),e}function nx(e,t){return e?t?decodeURI(e.replace(/%25/g,"%2525")):decodeURIComponent(e):""}function nO(e,t,n){return"string"==typeof e?(e=encodeURI(e).replace(t,nM),n&&(e=e.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),e):null}function nM(e){return"%"+((e=e.charCodeAt(0))>>4&15).toString(16)+(15&e).toString(16)}nA.prototype.toString=function(){var e=[],t=this.j;t&&e.push(nO(t,nV,!0),":");var n=this.g;return(n||"file"==t)&&(e.push("//"),(t=this.s)&&e.push(nO(t,nV,!0),"@"),e.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),null!=(n=this.m)&&e.push(":",String(n))),(n=this.l)&&(this.g&&"/"!=n.charAt(0)&&e.push("/"),e.push(nO(n,"/"==n.charAt(0)?nP:nF,!0))),(n=this.i.toString())&&e.push("?",n),(n=this.o)&&e.push("#",nO(n,nB)),e.join("")};var nV=/[#\/\?@]/g,nF=/[#\?:]/g,nP=/[#\?]/g,nU=/[#\?@]/g,nB=/#/g;function nj(e,t){this.h=this.g=null,this.i=e||null,this.j=!!t}function nq(e){e.g||(e.g=new Map,e.h=0,e.i&&function(e,t){if(e){e=e.split("&");for(var n=0;n<e.length;n++){var i=e[n].indexOf("="),r=null;if(0<=i){var s=e[n].substring(0,i);r=e[n].substring(i+1)}else s=e[n];t(s,r?decodeURIComponent(r.replace(/\+/g," ")):"")}}}(e.i,function(t,n){e.add(decodeURIComponent(t.replace(/\+/g," ")),n)}))}function nK(e,t){nq(e),t=nz(e,t),e.g.has(t)&&(e.i=null,e.h-=e.g.get(t).length,e.g.delete(t))}function n$(e,t){return nq(e),t=nz(e,t),e.g.has(t)}function nH(e,t,n){nK(e,t),0<n.length&&(e.i=null,e.g.set(nz(e,t),e0(n)),e.h+=n.length)}function nz(e,t){return t=String(t),e.j&&(t=t.toLowerCase()),t}(eB=nj.prototype).add=function(e,t){nq(this),this.i=null,e=nz(this,e);var n=this.g.get(e);return n||this.g.set(e,n=[]),n.push(t),this.h+=1,this},eB.forEach=function(e,t){nq(this),this.g.forEach(function(n,i){n.forEach(function(n){e.call(t,n,i,this)},this)},this)},eB.oa=function(){nq(this);let e=Array.from(this.g.values()),t=Array.from(this.g.keys()),n=[];for(let i=0;i<t.length;i++){let r=e[i];for(let e=0;e<r.length;e++)n.push(t[i])}return n},eB.W=function(e){nq(this);let t=[];if("string"==typeof e)n$(this,e)&&(t=t.concat(this.g.get(nz(this,e))));else{e=Array.from(this.g.values());for(let n=0;n<e.length;n++)t=t.concat(e[n])}return t},eB.set=function(e,t){return nq(this),this.i=null,n$(this,e=nz(this,e))&&(this.h-=this.g.get(e).length),this.g.set(e,[t]),this.h+=1,this},eB.get=function(e,t){return e&&0<(e=this.W(e)).length?String(e[0]):t},eB.toString=function(){if(this.i)return this.i;if(!this.g)return"";let e=[],t=Array.from(this.g.keys());for(var n=0;n<t.length;n++){var i=t[n];let s=encodeURIComponent(String(i)),a=this.W(i);for(i=0;i<a.length;i++){var r=s;""!==a[i]&&(r+="="+encodeURIComponent(String(a[i]))),e.push(r)}}return this.i=e.join("&")};var nG=class{constructor(e,t){this.h=e,this.g=t}};function nQ(e){this.l=e||nW,e=eK.PerformanceNavigationTiming?0<(e=eK.performance.getEntriesByType("navigation")).length&&("hq"==e[0].nextHopProtocol||"h2"==e[0].nextHopProtocol):!!(eK.g&&eK.g.Ga&&eK.g.Ga()&&eK.g.Ga().$b),this.j=e?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var nW=10;function nX(e){return!!e.h||!!e.g&&e.g.size>=e.j}function nY(e){return e.h?1:e.g?e.g.size:0}function nJ(e,t){return e.h?e.h==t:!!e.g&&e.g.has(t)}function nZ(e,t){e.g?e.g.add(t):e.h=t}function n0(e,t){e.h&&e.h==t?e.h=null:e.g&&e.g.has(t)&&e.g.delete(t)}function n1(e){if(null!=e.h)return e.i.concat(e.h.D);if(null!=e.g&&0!==e.g.size){let t=e.i;for(let n of e.g.values())t=t.concat(n.D);return t}return e0(e.i)}function n2(){}function n3(){this.g=new n2}function n4(e,t,n,i,r){try{t.onload=null,t.onerror=null,t.onabort=null,t.ontimeout=null,r(i)}catch(e){}}function n6(e){this.l=e.ac||null,this.j=e.jb||!1}function n5(e,t){tM.call(this),this.D=e,this.u=t,this.m=void 0,this.readyState=n8,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}nQ.prototype.cancel=function(){if(this.i=n1(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&0!==this.g.size){for(let e of this.g.values())e.cancel();this.g.clear()}},n2.prototype.stringify=function(e){return eK.JSON.stringify(e,void 0)},n2.prototype.parse=function(e){return eK.JSON.parse(e,void 0)},eY(n6,nn),n6.prototype.g=function(){return new n5(this.l,this.j)},n6.prototype.i=(i={},function(){return i}),eY(n5,tM);var n8=0;function n9(e){e.j.read().then(e.Ta.bind(e)).catch(e.ga.bind(e))}function n7(e){e.readyState=4,e.l=null,e.j=null,e.A=null,ie(e)}function ie(e){e.onreadystatechange&&e.onreadystatechange.call(e)}(eB=n5.prototype).open=function(e,t){if(this.readyState!=n8)throw this.abort(),Error("Error reopening a connection");this.C=e,this.B=t,this.readyState=1,ie(this)},eB.send=function(e){if(1!=this.readyState)throw this.abort(),Error("need to call open() first. ");this.g=!0;let t={headers:this.v,method:this.C,credentials:this.m,cache:void 0};e&&(t.body=e),(this.D||eK).fetch(new Request(this.B,t)).then(this.Wa.bind(this),this.ga.bind(this))},eB.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&4!=this.readyState&&(this.g=!1,n7(this)),this.readyState=n8},eB.Wa=function(e){if(this.g&&(this.l=e,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=e.headers,this.readyState=2,ie(this)),this.g&&(this.readyState=3,ie(this),this.g))){if("arraybuffer"===this.responseType)e.arrayBuffer().then(this.Ua.bind(this),this.ga.bind(this));else if(void 0!==eK.ReadableStream&&"body"in e){if(this.j=e.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;n9(this)}else e.text().then(this.Va.bind(this),this.ga.bind(this))}},eB.Ta=function(e){if(this.g){if(this.u&&e.value)this.response.push(e.value);else if(!this.u){var t=e.value?e.value:new Uint8Array(0);(t=this.A.decode(t,{stream:!e.done}))&&(this.response=this.responseText+=t)}e.done?n7(this):ie(this),3==this.readyState&&n9(this)}},eB.Va=function(e){this.g&&(this.response=this.responseText=e,n7(this))},eB.Ua=function(e){this.g&&(this.response=e,n7(this))},eB.ga=function(){this.g&&n7(this)},eB.setRequestHeader=function(e,t){this.v.append(e,t)},eB.getResponseHeader=function(e){return this.h&&this.h.get(e.toLowerCase())||""},eB.getAllResponseHeaders=function(){if(!this.h)return"";let e=[],t=this.h.entries();for(var n=t.next();!n.done;)e.push((n=n.value)[0]+": "+n[1]),n=t.next();return e.join("\r\n")},Object.defineProperty(n5.prototype,"withCredentials",{get:function(){return"include"===this.m},set:function(e){this.m=e?"include":"same-origin"}});var it=eK.JSON.parse;function ii(e){tM.call(this),this.headers=new Map,this.u=e||null,this.h=!1,this.C=this.g=null,this.H="",this.m=0,this.j="",this.l=this.F=this.v=this.D=!1,this.B=0,this.A=null,this.J=ir,this.K=this.L=!1}eY(ii,tM);var ir="",is=/^https?$/i,ia=["POST","PUT"];function io(e,t){e.h=!1,e.g&&(e.l=!0,e.g.abort(),e.l=!1),e.j=t,e.m=5,il(e),iu(e)}function il(e){e.D||(e.D=!0,tV(e,"complete"),tV(e,"error"))}function ih(e){if(e.h&&void 0!==eq&&(!e.C[1]||4!=id(e)||2!=e.aa())){if(e.v&&4==id(e))tG(e.Ha,0,e);else if(tV(e,"readystatechange"),4==id(e)){e.h=!1;try{let o=e.aa();switch(o){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var t,n,i=!0;break;default:i=!1}if(!(t=i)){if(n=0===o){var r=String(e.H).match(nC)[1]||null;if(!r&&eK.self&&eK.self.location){var s=eK.self.location.protocol;r=s.substr(0,s.length-1)}n=!is.test(r?r.toLowerCase():"")}t=n}if(t)tV(e,"complete"),tV(e,"success");else{e.m=6;try{var a=2<id(e)?e.g.statusText:""}catch(e){a=""}e.j=a+" ["+e.aa()+"]",il(e)}}finally{iu(e)}}}}function iu(e,t){if(e.g){ic(e);let n=e.g,i=e.C[0]?e$:null;e.g=null,e.C=null,t||tV(e,"ready");try{n.onreadystatechange=i}catch(e){}}}function ic(e){e.g&&e.K&&(e.g.ontimeout=null),e.A&&(eK.clearTimeout(e.A),e.A=null)}function id(e){return e.g?e.g.readyState:0}function ip(e){try{if(!e.g)return null;if("response"in e.g)return e.g.response;switch(e.J){case ir:case"text":return e.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in e.g)return e.g.mozResponseArrayBuffer}return null}catch(e){return null}}function ig(e){let t="";return tw(e,function(e,n){t+=n,t+=":",t+=e,t+="\r\n"}),t}function im(e,t,n){e:{for(i in n){var i=!1;break e}i=!0}i||(n=ig(n),"string"==typeof e?null!=n&&encodeURIComponent(String(n)):nL(e,t,n))}function iy(e,t,n){return n&&n.internalChannelParams&&n.internalChannelParams[e]||t}function iv(e){this.Ca=0,this.i=[],this.j=new tZ,this.ka=this.sa=this.F=this.V=this.g=this.za=this.D=this.ia=this.o=this.S=this.s=null,this.ab=this.U=0,this.Za=iy("failFast",!1,e),this.L=this.v=this.u=this.m=this.l=null,this.Y=!0,this.pa=this.Ba=this.T=-1,this.Z=this.A=this.C=0,this.Xa=iy("baseRetryDelayMs",5e3,e),this.bb=iy("retryDelaySeedMs",1e4,e),this.$a=iy("forwardChannelMaxRetries",2,e),this.ta=iy("forwardChannelRequestTimeoutMs",2e4,e),this.ra=e&&e.xmlHttpFactory||void 0,this.Da=e&&e.Zb||!1,this.J=void 0,this.H=e&&e.supportsCrossDomainXhr||!1,this.I="",this.h=new nQ(e&&e.concurrentRequestLimit),this.Fa=new n3,this.O=e&&e.fastHandshake||!1,this.N=e&&e.encodeInitMessageHeaders||!1,this.O&&this.N&&(this.N=!1),this.Ya=e&&e.Xb||!1,e&&e.Aa&&this.j.Aa(),e&&e.forceLongPolling&&(this.Y=!1),this.$=!this.O&&this.Y&&e&&e.detectBufferingProxy||!1,this.ja=void 0,this.P=0,this.K=!1,this.la=this.B=null}function iw(e){if(ib(e),3==e.G){var t=e.U++,n=n_(e.F);nL(n,"SID",e.I),nL(n,"RID",t),nL(n,"TYPE","terminate"),iS(e,n),(t=new nh(e,e.j,t,void 0)).K=2,t.v=nR(n_(n)),n=!1,eK.navigator&&eK.navigator.sendBeacon&&(n=eK.navigator.sendBeacon(t.v.toString(),"")),!n&&eK.Image&&((new Image).src=t.v,n=!0),n||(t.g=iV(t.l,null),t.g.da(t.v)),t.F=Date.now(),nv(t)}iO(e)}function iE(e){e.g&&(iD(e),e.g.cancel(),e.g=null)}function ib(e){iE(e),e.u&&(eK.clearTimeout(e.u),e.u=null),iN(e),e.h.cancel(),e.m&&("number"==typeof e.m&&eK.clearTimeout(e.m),e.m=null)}function iT(e){nX(e.h)||e.m||(e.m=!0,tj(e.Ja,e),e.C=0)}function iI(e,t){var n;n=t?t.m:e.U++;let i=n_(e.F);nL(i,"SID",e.I),nL(i,"RID",n),nL(i,"AID",e.T),iS(e,i),e.o&&e.s&&im(i,e.o,e.s),n=new nh(e,e.j,n,e.C+1),null===e.o&&(n.H=e.s),t&&(e.i=t.D.concat(e.i)),t=iC(e,n,1e3),n.setTimeout(Math.round(.5*e.ta)+Math.round(.5*e.ta*Math.random())),nZ(e.h,n),np(n,i,t)}function iS(e,t){e.ia&&tw(e.ia,function(e,n){nL(t,n,e)}),e.l&&nS({},function(e,n){nL(t,n,e)})}function iC(e,t,n){n=Math.min(e.i.length,n);var i=e.l?eW(e.l.Ra,e.l,e):null;e:{var r=e.i;let t=-1;for(;;){let e=["count="+n];-1==t?0<n?(t=r[0].h,e.push("ofs="+t)):t=0:e.push("ofs="+t);let s=!0;for(let a=0;a<n;a++){let n=r[a].h,o=r[a].g;if(0>(n-=t))t=Math.max(0,r[a].h-100),s=!1;else try{!function(e,t,n){let i=n||"";try{nS(e,function(e,n){let r=e;ez(e)&&(r=tP(e)),t.push(i+n+"="+encodeURIComponent(r))})}catch(e){throw t.push(i+"type="+encodeURIComponent("_badmap")),e}}(o,e,"req"+n+"_")}catch(e){i&&i(o)}}if(s){i=e.join("&");break e}}}return e=e.i.splice(0,n),t.D=e,i}function iA(e){e.g||e.u||(e.Z=1,tj(e.Ia,e),e.A=0)}function i_(e){return!e.g&&!e.u&&!(3<=e.A)&&(e.Z++,e.u=t7(eW(e.Ia,e),iR(e,e.A)),e.A++,!0)}function iD(e){null!=e.B&&(eK.clearTimeout(e.B),e.B=null)}function ik(e){e.g=new nh(e,e.j,"rpc",e.Z),null===e.o&&(e.g.H=e.s),e.g.N=0;var t=n_(e.sa);nL(t,"RID","rpc"),nL(t,"SID",e.I),nL(t,"CI",e.L?"0":"1"),nL(t,"AID",e.T),nL(t,"TYPE","xmlhttp"),iS(e,t),e.o&&e.s&&im(t,e.o,e.s),e.J&&e.g.setTimeout(e.J);var n=e.g;e=e.ka,n.K=1,n.v=nR(n_(t)),n.s=null,n.P=!0,ng(n,e)}function iN(e){null!=e.v&&(eK.clearTimeout(e.v),e.v=null)}function iL(e,t){var n=null;if(e.g==t){iN(e),iD(e),e.g=null;var i=2}else{if(!nJ(e.h,t))return;n=t.D,n0(e.h,t),i=1}if(0!=e.G){if(e.pa=t.Y,t.i){if(1==i){n=t.s?t.s.length:0,t=Date.now()-t.F;var r,s=e.C;tV(i=t3(),new t9(i,n)),iT(e)}else iA(e)}else if(3==(s=t.o)||0==s&&0<e.pa||!(1==i&&(r=t,!(nY(e.h)>=e.h.j-(e.m?1:0))&&(e.m?(e.i=r.D.concat(e.i),!0):1!=e.G&&2!=e.G&&!(e.C>=(e.Za?0:e.$a))&&(e.m=t7(eW(e.Ja,e,r),iR(e,e.C)),e.C++,!0)))||2==i&&i_(e)))switch(n&&0<n.length&&((t=e.h).i=t.i.concat(n)),s){case 1:ix(e,5);break;case 4:ix(e,10);break;case 3:ix(e,6);break;default:ix(e,2)}}}function iR(e,t){let n=e.Xa+Math.floor(Math.random()*e.bb);return e.l||(n*=2),n*t}function ix(e,t){if(e.j.info("Error code "+t),2==t){var n=null;e.l&&(n=null);var i=eW(e.kb,e);n||(n=new nA("//www.google.com/images/cleardot.gif"),eK.location&&"http"==eK.location.protocol||nD(n,"https"),nR(n)),function(e,t){let n=new tZ;if(eK.Image){let i=new Image;i.onload=eX(n4,n,i,"TestLoadImage: loaded",!0,t),i.onerror=eX(n4,n,i,"TestLoadImage: error",!1,t),i.onabort=eX(n4,n,i,"TestLoadImage: abort",!1,t),i.ontimeout=eX(n4,n,i,"TestLoadImage: timeout",!1,t),eK.setTimeout(function(){i.ontimeout&&i.ontimeout()},1e4),i.src=e}else t(!1)}(n.toString(),i)}else t8(2);e.G=0,e.l&&e.l.va(t),iO(e),ib(e)}function iO(e){if(e.G=0,e.la=[],e.l){let t=n1(e.h);(0!=t.length||0!=e.i.length)&&(e1(e.la,t),e1(e.la,e.i),e.h.i.length=0,e0(e.i),e.i.length=0),e.l.ua()}}function iM(e,t,n){var i=n instanceof nA?n_(n):new nA(n,void 0);if(""!=i.g)t&&(i.g=t+"."+i.g),nk(i,i.m);else{var r=eK.location;i=r.protocol,t=t?t+"."+r.hostname:r.hostname,r=+r.port;var s=new nA(null,void 0);i&&nD(s,i),t&&(s.g=t),r&&nk(s,r),n&&(s.l=n),i=s}return n=e.D,t=e.za,n&&t&&nL(i,n,t),nL(i,"VER",e.ma),iS(e,i),i}function iV(e,t,n){if(t&&!e.H)throw Error("Can't create secondary domain capable XhrIo object.");return(t=new ii(n&&e.Da&&!e.ra?new n6({jb:!0}):e.ra)).Ka(e.H),t}function iF(){}function iP(){if(tt&&!(10<=Number(td)))throw Error("Environmental error: no available transport.")}function iU(e,t){tM.call(this),this.g=new iv(t),this.l=e,this.h=t&&t.messageUrlParams||null,e=t&&t.messageHeaders||null,t&&t.clientProtocolHeaderRequired&&(e?e["X-Client-Protocol"]="webchannel":e={"X-Client-Protocol":"webchannel"}),this.g.s=e,e=t&&t.initMessageHeaders||null,t&&t.messageContentType&&(e?e["X-WebChannel-Content-Type"]=t.messageContentType:e={"X-WebChannel-Content-Type":t.messageContentType}),t&&t.ya&&(e?e["X-WebChannel-Client-Profile"]=t.ya:e={"X-WebChannel-Client-Profile":t.ya}),this.g.S=e,(e=t&&t.Yb)&&!e4(e)&&(this.g.o=e),this.A=t&&t.supportsCrossDomainXhr||!1,this.v=t&&t.sendRawJson||!1,(t=t&&t.httpSessionIdParam)&&!e4(t)&&(this.g.D=t,null!==(e=this.h)&&t in e&&t in(e=this.h)&&delete e[t]),this.j=new iq(this)}function iB(e){na.call(this);var t=e.__sm__;if(t){e:{for(let n in t){e=n;break e}e=void 0}(this.i=e)&&(e=this.i,t=null!==t&&e in t?t[e]:void 0),this.data=t}else this.data=e}function ij(){no.call(this),this.status=1}function iq(e){this.g=e}(eB=ii.prototype).Ka=function(e){this.L=e},eB.da=function(e,t,n,i){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.H+"; newUri="+e);t=t?t.toUpperCase():"GET",this.H=e,this.j="",this.m=0,this.D=!1,this.h=!0,this.g=this.u?this.u.g():o.g(),this.C=this.u?ni(this.u):ni(o),this.g.onreadystatechange=eW(this.Ha,this);try{this.F=!0,this.g.open(t,String(e),!0),this.F=!1}catch(e){io(this,e);return}if(e=n||"",n=new Map(this.headers),i){if(Object.getPrototypeOf(i)===Object.prototype)for(var s in i)n.set(s,i[s]);else if("function"==typeof i.keys&&"function"==typeof i.get)for(let e of i.keys())n.set(e,i.get(e));else throw Error("Unknown input type for opt_headers: "+String(i))}for(let[r,a]of(i=Array.from(n.keys()).find(e=>"content-type"==e.toLowerCase()),s=eK.FormData&&e instanceof eK.FormData,!(0<=eZ(ia,t))||i||s||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8"),n))this.g.setRequestHeader(r,a);this.J&&(this.g.responseType=this.J),"withCredentials"in this.g&&this.g.withCredentials!==this.L&&(this.g.withCredentials=this.L);try{var a,l;ic(this),0<this.B&&((this.K=(a=this.g,tt&&(l=function(){let e=0,t=e6(String(r)).split("."),n=e6("9").split("."),i=Math.max(t.length,n.length);for(let r=0;0==e&&r<i;r++){var s=t[r]||"",a=n[r]||"";do{if(s=/(\d*)(\D*)(.*)/.exec(s)||["","","",""],a=/(\d*)(\D*)(.*)/.exec(a)||["","","",""],0==s[0].length&&0==a[0].length)break;e=e5(0==s[1].length?0:parseInt(s[1],10),0==a[1].length?0:parseInt(a[1],10))||e5(0==s[2].length,0==a[2].length)||e5(s[2],a[2]),s=s[3],a=a[3]}while(0==e)}return 0<=e},Object.prototype.hasOwnProperty.call(tc,9)?tc[9]:tc[9]=l(9))&&"number"==typeof a.timeout&&void 0!==a.ontimeout))?(this.g.timeout=this.B,this.g.ontimeout=eW(this.qa,this)):this.A=tG(this.qa,this.B,this)),this.v=!0,this.g.send(e),this.v=!1}catch(e){io(this,e)}},eB.qa=function(){void 0!==eq&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,tV(this,"timeout"),this.abort(8))},eB.abort=function(e){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=e||7,tV(this,"complete"),tV(this,"abort"),iu(this))},eB.M=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),iu(this,!0)),ii.X.M.call(this)},eB.Ha=function(){this.s||(this.F||this.v||this.l?ih(this):this.fb())},eB.fb=function(){ih(this)},eB.aa=function(){try{return 2<id(this)?this.g.status:-1}catch(e){return -1}},eB.fa=function(){try{return this.g?this.g.responseText:""}catch(e){return""}},eB.Sa=function(e){if(this.g){var t=this.g.responseText;return e&&0==t.indexOf(e)&&(t=t.substring(e.length)),it(t)}},eB.Ea=function(){return this.m},eB.Oa=function(){return"string"==typeof this.j?this.j:String(this.j)},(eB=iv.prototype).ma=8,eB.G=1,eB.Ja=function(e){if(this.m){if(this.m=null,1==this.G){if(!e){this.U=Math.floor(1e5*Math.random()),e=this.U++;let r=new nh(this,this.j,e,void 0),s=this.s;if(this.S&&(s?tT(s=tE(s),this.S):s=this.S),null!==this.o||this.N||(r.H=s,s=null),this.O)e:{for(var t=0,n=0;n<this.i.length;n++){t:{var i=this.i[n];if("__data__"in i.g&&"string"==typeof(i=i.g.__data__)){i=i.length;break t}i=void 0}if(void 0===i)break;if(4096<(t+=i)){t=n;break e}if(4096===t||n===this.i.length-1){t=n+1;break e}}t=1e3}else t=1e3;t=iC(this,r,t),nL(n=n_(this.F),"RID",e),nL(n,"CVER",22),this.D&&nL(n,"X-HTTP-Session-Id",this.D),iS(this,n),s&&(this.N?t="headers="+encodeURIComponent(String(ig(s)))+"&"+t:this.o&&im(n,this.o,s)),nZ(this.h,r),this.Ya&&nL(n,"TYPE","init"),this.O?(nL(n,"$req",t),nL(n,"SID","null"),r.Z=!0,np(r,n,null)):np(r,n,t),this.G=2}}else 3==this.G&&(e?iI(this,e):0==this.i.length||nX(this.h)||iI(this))}},eB.Ia=function(){if(this.u=null,ik(this),this.$&&!(this.K||null==this.g||0>=this.P)){var e=2*this.P;this.j.info("BP detection timer enabled: "+e),this.B=t7(eW(this.eb,this),e)}},eB.eb=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.L=!1,this.K=!0,t8(10),iE(this),ik(this))},eB.cb=function(){null!=this.v&&(this.v=null,iE(this),i_(this),t8(19))},eB.kb=function(e){e?(this.j.info("Successfully pinged google.com"),t8(2)):(this.j.info("Failed to ping google.com"),t8(1))},(eB=iF.prototype).xa=function(){},eB.wa=function(){},eB.va=function(){},eB.ua=function(){},eB.Ra=function(){},iP.prototype.g=function(e,t){return new iU(e,t)},eY(iU,tM),iU.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.H=!0);var e=this.g,t=this.l,n=this.h||void 0;t8(0),e.V=t,e.ia=n||{},e.L=e.Y,e.F=iM(e,null,e.V),iT(e)},iU.prototype.close=function(){iw(this.g)},iU.prototype.u=function(e){var t=this.g;if("string"==typeof e){var n={};n.__data__=e,e=n}else this.v&&((n={}).__data__=tP(e),e=n);t.i.push(new nG(t.ab++,e)),3==t.G&&iT(t)},iU.prototype.M=function(){this.g.l=null,delete this.j,iw(this.g),delete this.g,iU.X.M.call(this)},eY(iB,na),eY(ij,no),eY(iq,iF),iq.prototype.xa=function(){tV(this.g,"a")},iq.prototype.wa=function(e){tV(this.g,new iB(e))},iq.prototype.va=function(e){tV(this.g,new ij)},iq.prototype.ua=function(){tV(this.g,"b")},iP.prototype.createWebChannel=iP.prototype.g,iU.prototype.send=iU.prototype.u,iU.prototype.open=iU.prototype.m,iU.prototype.close=iU.prototype.close,ne.NO_ERROR=0,ne.TIMEOUT=8,ne.HTTP_ERROR=6,nt.COMPLETE="complete",nr.EventType=ns,ns.OPEN="a",ns.CLOSE="b",ns.ERROR="c",ns.MESSAGE="d",tM.prototype.listen=tM.prototype.N,ii.prototype.listenOnce=ii.prototype.O,ii.prototype.getLastError=ii.prototype.Oa,ii.prototype.getLastErrorCode=ii.prototype.Ea,ii.prototype.getStatus=ii.prototype.aa,ii.prototype.getResponseJson=ii.prototype.Sa,ii.prototype.getResponseText=ii.prototype.fa,ii.prototype.send=ii.prototype.da,ii.prototype.setWithCredentials=ii.prototype.Ka;var iK=ej.createWebChannelTransport=function(){return new iP},i$=ej.getStatEventTarget=function(){return t3()},iH=ej.ErrorCode=ne,iz=ej.EventType=nt,iG=ej.Event=t1,iQ=ej.Stat={sb:0,vb:1,wb:2,Pb:3,Ub:4,Rb:5,Sb:6,Qb:7,Ob:8,Tb:9,PROXY:10,NOPROXY:11,Mb:12,Ib:13,Jb:14,Hb:15,Kb:16,Lb:17,ob:18,nb:19,pb:20},iW=ej.FetchXmlHttpFactory=n6,iX=ej.WebChannel=nr,iY=ej.XhrIo=ii;const iJ="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iZ{constructor(e){this.uid=e}isAuthenticated(){return null!=this.uid}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}iZ.UNAUTHENTICATED=new iZ(null),iZ.GOOGLE_CREDENTIALS=new iZ("google-credentials-uid"),iZ.FIRST_PARTY=new iZ("first-party-uid"),iZ.MOCK_USER=new iZ("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let i0="9.17.1";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const i1=new J("@firebase/firestore");function i2(){return i1.logLevel}function i3(e,...t){if(i1.logLevel<=eU.DEBUG){let n=t.map(i5);i1.debug(`Firestore (${i0}): ${e}`,...n)}}function i4(e,...t){if(i1.logLevel<=eU.ERROR){let n=t.map(i5);i1.error(`Firestore (${i0}): ${e}`,...n)}}function i6(e,...t){if(i1.logLevel<=eU.WARN){let n=t.map(i5);i1.warn(`Firestore (${i0}): ${e}`,...n)}}function i5(e){if("string"==typeof e)return e;try{return JSON.stringify(e)}catch(t){return e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function i8(e="Unexpected state"){let t=`FIRESTORE (${i0}) INTERNAL ASSERTION FAILED: `+e;throw i4(t),Error(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const i9={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class i7 extends F{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class re{constructor(){this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rt{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class rn{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable(()=>t(iZ.UNAUTHENTICATED))}shutdown(){}}class ri{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable(()=>t(this.token.user))}shutdown(){this.changeListener=null}}class rr{constructor(e){this.t=e,this.currentUser=iZ.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){let n=this.i,i=e=>this.i!==n?(n=this.i,t(e)):Promise.resolve(),r=new re;this.o=()=>{this.i++,this.currentUser=this.u(),r.resolve(),r=new re,e.enqueueRetryable(()=>i(this.currentUser))};let s=()=>{let t=r;e.enqueueRetryable(async()=>{await t.promise,await i(this.currentUser)})},a=e=>{i3("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=e,this.auth.addAuthTokenListener(this.o),s()};this.t.onInit(e=>a(e)),setTimeout(()=>{if(!this.auth){let e=this.t.getImmediate({optional:!0});e?a(e):(i3("FirebaseAuthCredentialsProvider","Auth not yet detected"),r.resolve(),r=new re)}},0),s()}getToken(){let e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then(t=>this.i!==e?(i3("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):t?("string"==typeof t.accessToken||i8(),new rt(t.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){let e=this.auth&&this.auth.getUid();return null===e||"string"==typeof e||i8(),new iZ(e)}}class rs{constructor(e,t,n,i){this.h=e,this.l=t,this.m=n,this.g=i,this.type="FirstParty",this.user=iZ.FIRST_PARTY,this.p=new Map}I(){return this.g?this.g():("object"==typeof this.h&&null!==this.h&&this.h.auth&&this.h.auth.getAuthHeaderValueForFirstParty||i8(),this.h.auth.getAuthHeaderValueForFirstParty([]))}get headers(){this.p.set("X-Goog-AuthUser",this.l);let e=this.I();return e&&this.p.set("Authorization",e),this.m&&this.p.set("X-Goog-Iam-Authorization-Token",this.m),this.p}}class ra{constructor(e,t,n,i){this.h=e,this.l=t,this.m=n,this.g=i}getToken(){return Promise.resolve(new rs(this.h,this.l,this.m,this.g))}start(e,t){e.enqueueRetryable(()=>t(iZ.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class ro{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class rl{constructor(e){this.T=e,this.forceRefresh=!1,this.appCheck=null,this.A=null}start(e,t){let n=e=>{null!=e.error&&i3("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${e.error.message}`);let n=e.token!==this.A;return this.A=e.token,i3("FirebaseAppCheckTokenProvider",`Received ${n?"new":"existing"} token.`),n?t(e.token):Promise.resolve()};this.o=t=>{e.enqueueRetryable(()=>n(t))};let i=e=>{i3("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=e,this.appCheck.addTokenListener(this.o)};this.T.onInit(e=>i(e)),setTimeout(()=>{if(!this.appCheck){let e=this.T.getImmediate({optional:!0});e?i(e):i3("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){let e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(e=>e?("string"==typeof e.token||i8(),this.A=e.token,new ro(e.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rh{static R(){let e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=Math.floor(256/e.length)*e.length,n="";for(;n.length<20;){let i=/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function(e){let t="undefined"!=typeof self&&(self.crypto||self.msCrypto),n=new Uint8Array(40);if(t&&"function"==typeof t.getRandomValues)t.getRandomValues(n);else for(let e=0;e<40;e++)n[e]=Math.floor(256*Math.random());return n}(0);for(let r=0;r<i.length;++r)n.length<20&&i[r]<t&&(n+=e.charAt(i[r]%e.length))}return n}}function ru(e,t){return e<t?-1:e>t?1:0}function rc(e,t,n){return e.length===t.length&&e.every((e,i)=>n(e,t[i]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rd{constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0||t>=1e9)throw new i7(i9.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<-0xe7791f700||e>=0x3afff44180)throw new i7(i9.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return rd.fromMillis(Date.now())}static fromDate(e){return rd.fromMillis(e.getTime())}static fromMillis(e){let t=Math.floor(e/1e3),n=Math.floor(1e6*(e-1e3*t));return new rd(t,n)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?ru(this.nanoseconds,e.nanoseconds):ru(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){return String(this.seconds- -0xe7791f700).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rf{constructor(e){this.timestamp=e}static fromTimestamp(e){return new rf(e)}static min(){return new rf(new rd(0,0))}static max(){return new rf(new rd(0x3afff4417f,0x3b9ac9ff))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rp{constructor(e,t,n){void 0===t?t=0:t>e.length&&i8(),void 0===n?n=e.length-t:n>e.length-t&&i8(),this.segments=e,this.offset=t,this.len=n}get length(){return this.len}isEqual(e){return 0===rp.comparator(this,e)}child(e){let t=this.segments.slice(this.offset,this.limit());return e instanceof rp?e.forEach(e=>{t.push(e)}):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=void 0===e?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return 0===this.length}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,n=this.limit();t<n;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){let n=Math.min(e.length,t.length);for(let i=0;i<n;i++){let n=e.get(i),r=t.get(i);if(n<r)return -1;if(n>r)return 1}return e.length<t.length?-1:e.length>t.length?1:0}}class rg extends rp{construct(e,t,n){return new rg(e,t,n)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){let t=[];for(let n of e){if(n.indexOf("//")>=0)throw new i7(i9.INVALID_ARGUMENT,`Invalid segment (${n}). Paths must not contain // in them.`);t.push(...n.split("/").filter(e=>e.length>0))}return new rg(t)}static emptyPath(){return new rg([])}}const rm=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class ry extends rp{construct(e,t,n){return new ry(e,t,n)}static isValidIdentifier(e){return rm.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),ry.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return 1===this.length&&"__name__"===this.get(0)}static keyField(){return new ry(["__name__"])}static fromServerFormat(e){let t=[],n="",i=0,r=()=>{if(0===n.length)throw new i7(i9.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(n),n=""},s=!1;for(;i<e.length;){let t=e[i];if("\\"===t){if(i+1===e.length)throw new i7(i9.INVALID_ARGUMENT,"Path has trailing escape character: "+e);let t=e[i+1];if("\\"!==t&&"."!==t&&"`"!==t)throw new i7(i9.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);n+=t,i+=2}else"`"===t?s=!s:"."!==t||s?n+=t:r(),i++}if(r(),s)throw new i7(i9.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new ry(t)}static emptyPath(){return new ry([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rv{constructor(e){this.path=e}static fromPath(e){return new rv(rg.fromString(e))}static fromName(e){return new rv(rg.fromString(e).popFirst(5))}static empty(){return new rv(rg.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return null!==e&&0===rg.comparator(this.path,e.path)}toString(){return this.path.toString()}static comparator(e,t){return rg.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new rv(new rg(e.slice()))}}class rw{constructor(e,t,n){this.readTime=e,this.documentKey=t,this.largestBatchId=n}static min(){return new rw(rf.min(),rv.empty(),-1)}static max(){return new rw(rf.max(),rv.empty(),-1)}}class rE{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function rb(e){if(e.code!==i9.FAILED_PRECONDITION||"The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab."!==e.message)throw e;i3("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rT{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(e=>{this.isDone=!0,this.result=e,this.nextCallback&&this.nextCallback(e)},e=>{this.isDone=!0,this.error=e,this.catchCallback&&this.catchCallback(e)})}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&i8(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new rT((n,i)=>{this.nextCallback=t=>{this.wrapSuccess(e,t).next(n,i)},this.catchCallback=e=>{this.wrapFailure(t,e).next(n,i)}})}toPromise(){return new Promise((e,t)=>{this.next(e,t)})}wrapUserFunction(e){try{let t=e();return t instanceof rT?t:rT.resolve(t)}catch(e){return rT.reject(e)}}wrapSuccess(e,t){return e?this.wrapUserFunction(()=>e(t)):rT.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction(()=>e(t)):rT.reject(t)}static resolve(e){return new rT((t,n)=>{t(e)})}static reject(e){return new rT((t,n)=>{n(e)})}static waitFor(e){return new rT((t,n)=>{let i=0,r=0,s=!1;e.forEach(e=>{++i,e.next(()=>{++r,s&&r===i&&t()},e=>n(e))}),s=!0,r===i&&t()})}static or(e){let t=rT.resolve(!1);for(let n of e)t=t.next(e=>e?rT.resolve(e):n());return t}static forEach(e,t){let n=[];return e.forEach((e,i)=>{n.push(t.call(this,e,i))}),this.waitFor(n)}static mapArray(e,t){return new rT((n,i)=>{let r=e.length,s=Array(r),a=0;for(let o=0;o<r;o++){let l=o;t(e[l]).next(e=>{s[l]=e,++a===r&&n(s)},e=>i(e))}})}static doWhile(e,t){return new rT((n,i)=>{let r=()=>{!0===e()?t().next(()=>{r()},i):n()};r()})}}function rI(e){return"IndexedDbTransactionError"===e.name}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rS{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=e=>this.ut(e),this.ct=e=>t.writeSequenceNumber(e))}ut(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){let e=++this.previousValue;return this.ct&&this.ct(e),e}}rS.at=-1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rC{constructor(e,t,n,i,r,s,a,o){this.databaseId=e,this.appId=t,this.persistenceKey=n,this.host=i,this.ssl=r,this.forceLongPolling=s,this.autoDetectLongPolling=a,this.useFetchStreams=o}}class rA{constructor(e,t){this.projectId=e,this.database=t||"(default)"}static empty(){return new rA("","")}get isDefaultDatabase(){return"(default)"===this.database}isEqual(e){return e instanceof rA&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function r_(e){let t=0;for(let n in e)Object.prototype.hasOwnProperty.call(e,n)&&t++;return t}function rD(e,t){for(let n in e)Object.prototype.hasOwnProperty.call(e,n)&&t(n,e[n])}function rk(e){for(let t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}function rN(e){return 0===e&&1/e==-1/0}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rL{constructor(e){this.binaryString=e}static fromBase64String(e){return new rL(atob(e))}static fromUint8Array(e){return new rL(function(e){let t="";for(let n=0;n<e.length;++n)t+=String.fromCharCode(e[n]);return t}(e))}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return btoa(this.binaryString)}toUint8Array(){return function(e){let t=new Uint8Array(e.length);for(let n=0;n<e.length;n++)t[n]=e.charCodeAt(n);return t}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return ru(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}rL.EMPTY_BYTE_STRING=new rL("");const rR=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function rx(e){if(e||i8(),"string"==typeof e){let t=0,n=rR.exec(e);if(n||i8(),n[1]){let e=n[1];t=Number(e=(e+"000000000").substr(0,9))}return{seconds:Math.floor(new Date(e).getTime()/1e3),nanos:t}}return{seconds:rO(e.seconds),nanos:rO(e.nanos)}}function rO(e){return"number"==typeof e?e:"string"==typeof e?Number(e):0}function rM(e){return"string"==typeof e?rL.fromBase64String(e):rL.fromUint8Array(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rV(e){var t,n;return"server_timestamp"===(null===(n=((null===(t=null==e?void 0:e.mapValue)||void 0===t?void 0:t.fields)||{}).__type__)||void 0===n?void 0:n.stringValue)}function rF(e){let t=rx(e.mapValue.fields.__local_write_time__.timestampValue);return new rd(t.seconds,t.nanos)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rP={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function rU(e){return"nullValue"in e?0:"booleanValue"in e?1:"integerValue"in e||"doubleValue"in e?2:"timestampValue"in e?3:"stringValue"in e?5:"bytesValue"in e?6:"referenceValue"in e?7:"geoPointValue"in e?8:"arrayValue"in e?9:"mapValue"in e?rV(e)?4:rY(e)?0x1fffffffffffff:10:i8()}function rB(e,t){if(e===t)return!0;let n=rU(e);if(n!==rU(t))return!1;switch(n){case 0:case 0x1fffffffffffff:return!0;case 1:return e.booleanValue===t.booleanValue;case 4:return rF(e).isEqual(rF(t));case 3:return function(e,t){if("string"==typeof e.timestampValue&&"string"==typeof t.timestampValue&&e.timestampValue.length===t.timestampValue.length)return e.timestampValue===t.timestampValue;let n=rx(e.timestampValue),i=rx(t.timestampValue);return n.seconds===i.seconds&&n.nanos===i.nanos}(e,t);case 5:return e.stringValue===t.stringValue;case 6:return rM(e.bytesValue).isEqual(rM(t.bytesValue));case 7:return e.referenceValue===t.referenceValue;case 8:return rO(e.geoPointValue.latitude)===rO(t.geoPointValue.latitude)&&rO(e.geoPointValue.longitude)===rO(t.geoPointValue.longitude);case 2:return function(e,t){if("integerValue"in e&&"integerValue"in t)return rO(e.integerValue)===rO(t.integerValue);if("doubleValue"in e&&"doubleValue"in t){let n=rO(e.doubleValue),i=rO(t.doubleValue);return n===i?rN(n)===rN(i):isNaN(n)&&isNaN(i)}return!1}(e,t);case 9:return rc(e.arrayValue.values||[],t.arrayValue.values||[],rB);case 10:return function(e,t){let n=e.mapValue.fields||{},i=t.mapValue.fields||{};if(r_(n)!==r_(i))return!1;for(let e in n)if(n.hasOwnProperty(e)&&(void 0===i[e]||!rB(n[e],i[e])))return!1;return!0}(e,t);default:return i8()}}function rj(e,t){return void 0!==(e.values||[]).find(e=>rB(e,t))}function rq(e,t){if(e===t)return 0;let n=rU(e),i=rU(t);if(n!==i)return ru(n,i);switch(n){case 0:case 0x1fffffffffffff:return 0;case 1:return ru(e.booleanValue,t.booleanValue);case 2:return function(e,t){let n=rO(e.integerValue||e.doubleValue),i=rO(t.integerValue||t.doubleValue);return n<i?-1:n>i?1:n===i?0:isNaN(n)?isNaN(i)?0:-1:1}(e,t);case 3:return rK(e.timestampValue,t.timestampValue);case 4:return rK(rF(e),rF(t));case 5:return ru(e.stringValue,t.stringValue);case 6:return function(e,t){let n=rM(e),i=rM(t);return n.compareTo(i)}(e.bytesValue,t.bytesValue);case 7:return function(e,t){let n=e.split("/"),i=t.split("/");for(let e=0;e<n.length&&e<i.length;e++){let t=ru(n[e],i[e]);if(0!==t)return t}return ru(n.length,i.length)}(e.referenceValue,t.referenceValue);case 8:return function(e,t){let n=ru(rO(e.latitude),rO(t.latitude));return 0!==n?n:ru(rO(e.longitude),rO(t.longitude))}(e.geoPointValue,t.geoPointValue);case 9:return function(e,t){let n=e.values||[],i=t.values||[];for(let e=0;e<n.length&&e<i.length;++e){let t=rq(n[e],i[e]);if(t)return t}return ru(n.length,i.length)}(e.arrayValue,t.arrayValue);case 10:return function(e,t){if(e===rP.mapValue&&t===rP.mapValue)return 0;if(e===rP.mapValue)return 1;if(t===rP.mapValue)return -1;let n=e.fields||{},i=Object.keys(n),r=t.fields||{},s=Object.keys(r);i.sort(),s.sort();for(let e=0;e<i.length&&e<s.length;++e){let t=ru(i[e],s[e]);if(0!==t)return t;let a=rq(n[i[e]],r[s[e]]);if(0!==a)return a}return ru(i.length,s.length)}(e.mapValue,t.mapValue);default:throw i8()}}function rK(e,t){if("string"==typeof e&&"string"==typeof t&&e.length===t.length)return ru(e,t);let n=rx(e),i=rx(t),r=ru(n.seconds,i.seconds);return 0!==r?r:ru(n.nanos,i.nanos)}function r$(e){var t,n;return"nullValue"in e?"null":"booleanValue"in e?""+e.booleanValue:"integerValue"in e?""+e.integerValue:"doubleValue"in e?""+e.doubleValue:"timestampValue"in e?function(e){let t=rx(e);return`time(${t.seconds},${t.nanos})`}(e.timestampValue):"stringValue"in e?e.stringValue:"bytesValue"in e?rM(e.bytesValue).toBase64():"referenceValue"in e?(n=e.referenceValue,rv.fromName(n).toString()):"geoPointValue"in e?`geo(${(t=e.geoPointValue).latitude},${t.longitude})`:"arrayValue"in e?function(e){let t="[",n=!0;for(let i of e.values||[])n?n=!1:t+=",",t+=r$(i);return t+"]"}(e.arrayValue):"mapValue"in e?function(e){let t=Object.keys(e.fields||{}).sort(),n="{",i=!0;for(let r of t)i?i=!1:n+=",",n+=`${r}:${r$(e.fields[r])}`;return n+"}"}(e.mapValue):i8()}function rH(e){return!!e&&"integerValue"in e}function rz(e){return!!e&&"arrayValue"in e}function rG(e){return!!e&&"nullValue"in e}function rQ(e){return!!e&&"doubleValue"in e&&isNaN(Number(e.doubleValue))}function rW(e){return!!e&&"mapValue"in e}function rX(e){if(e.geoPointValue)return{geoPointValue:Object.assign({},e.geoPointValue)};if(e.timestampValue&&"object"==typeof e.timestampValue)return{timestampValue:Object.assign({},e.timestampValue)};if(e.mapValue){let t={mapValue:{fields:{}}};return rD(e.mapValue.fields,(e,n)=>t.mapValue.fields[e]=rX(n)),t}if(e.arrayValue){let t={arrayValue:{values:[]}};for(let n=0;n<(e.arrayValue.values||[]).length;++n)t.arrayValue.values[n]=rX(e.arrayValue.values[n]);return t}return Object.assign({},e)}function rY(e){return"__max__"===(((e.mapValue||{}).fields||{}).__type__||{}).stringValue}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rJ{constructor(e,t){this.position=e,this.inclusive=t}}function rZ(e,t,n){let i=0;for(let r=0;r<e.position.length;r++){let s=t[r],a=e.position[r];if(i=s.field.isKeyField()?rv.comparator(rv.fromName(a.referenceValue),n.key):rq(a,n.data.field(s.field)),"desc"===s.dir&&(i*=-1),0!==i)break}return i}function r0(e,t){if(null===e)return null===t;if(null===t||e.inclusive!==t.inclusive||e.position.length!==t.position.length)return!1;for(let n=0;n<e.position.length;n++)if(!rB(e.position[n],t.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class r1{}class r2 extends r1{constructor(e,t,n){super(),this.field=e,this.op=t,this.value=n}static create(e,t,n){return e.isKeyField()?"in"===t||"not-in"===t?this.createKeyFieldInFilter(e,t,n):new r5(e,t,n):"array-contains"===t?new se(e,n):"in"===t?new st(e,n):"not-in"===t?new sn(e,n):"array-contains-any"===t?new si(e,n):new r2(e,t,n)}static createKeyFieldInFilter(e,t,n){return"in"===t?new r8(e,n):new r9(e,n)}matches(e){let t=e.data.field(this.field);return"!="===this.op?null!==t&&this.matchesComparison(rq(t,this.value)):null!==t&&rU(this.value)===rU(t)&&this.matchesComparison(rq(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return 0===e;case"!=":return 0!==e;case">":return e>0;case">=":return e>=0;default:return i8()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}getFirstInequalityField(){return this.isInequality()?this.field:null}}class r3 extends r1{constructor(e,t){super(),this.filters=e,this.op=t,this.ht=null}static create(e,t){return new r3(e,t)}matches(e){return r4(this)?void 0===this.filters.find(t=>!t.matches(e)):void 0!==this.filters.find(t=>t.matches(e))}getFlattenedFilters(){return null!==this.ht||(this.ht=this.filters.reduce((e,t)=>e.concat(t.getFlattenedFilters()),[])),this.ht}getFilters(){return Object.assign([],this.filters)}getFirstInequalityField(){let e=this.lt(e=>e.isInequality());return null!==e?e.field:null}lt(e){for(let t of this.getFlattenedFilters())if(e(t))return t;return null}}function r4(e){return"and"===e.op}function r6(e){for(let t of e.filters)if(t instanceof r3)return!1;return!0}class r5 extends r2{constructor(e,t,n){super(e,t,n),this.key=rv.fromName(n.referenceValue)}matches(e){let t=rv.comparator(e.key,this.key);return this.matchesComparison(t)}}class r8 extends r2{constructor(e,t){super(e,"in",t),this.keys=r7("in",t)}matches(e){return this.keys.some(t=>t.isEqual(e.key))}}class r9 extends r2{constructor(e,t){super(e,"not-in",t),this.keys=r7("not-in",t)}matches(e){return!this.keys.some(t=>t.isEqual(e.key))}}function r7(e,t){var n;return((null===(n=t.arrayValue)||void 0===n?void 0:n.values)||[]).map(e=>rv.fromName(e.referenceValue))}class se extends r2{constructor(e,t){super(e,"array-contains",t)}matches(e){let t=e.data.field(this.field);return rz(t)&&rj(t.arrayValue,this.value)}}class st extends r2{constructor(e,t){super(e,"in",t)}matches(e){let t=e.data.field(this.field);return null!==t&&rj(this.value.arrayValue,t)}}class sn extends r2{constructor(e,t){super(e,"not-in",t)}matches(e){if(rj(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;let t=e.data.field(this.field);return null!==t&&!rj(this.value.arrayValue,t)}}class si extends r2{constructor(e,t){super(e,"array-contains-any",t)}matches(e){let t=e.data.field(this.field);return!(!rz(t)||!t.arrayValue.values)&&t.arrayValue.values.some(e=>rj(this.value.arrayValue,e))}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sr{constructor(e,t="asc"){this.field=e,this.dir=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ss{constructor(e,t){this.comparator=e,this.root=t||so.EMPTY}insert(e,t){return new ss(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,so.BLACK,null,null))}remove(e){return new ss(this.comparator,this.root.remove(e,this.comparator).copy(null,null,so.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){let n=this.comparator(e,t.key);if(0===n)return t.value;n<0?t=t.left:n>0&&(t=t.right)}return null}indexOf(e){let t=0,n=this.root;for(;!n.isEmpty();){let i=this.comparator(e,n.key);if(0===i)return t+n.left.size;i<0?n=n.left:(t+=n.left.size+1,n=n.right)}return -1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((t,n)=>(e(t,n),!1))}toString(){let e=[];return this.inorderTraversal((t,n)=>(e.push(`${t}:${n}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new sa(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new sa(this.root,e,this.comparator,!1)}getReverseIterator(){return new sa(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new sa(this.root,e,this.comparator,!0)}}class sa{constructor(e,t,n,i){this.isReverse=i,this.nodeStack=[];let r=1;for(;!e.isEmpty();)if(r=t?n(e.key,t):1,t&&i&&(r*=-1),r<0)e=this.isReverse?e.left:e.right;else{if(0===r){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop(),t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(0===this.nodeStack.length)return null;let e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class so{constructor(e,t,n,i,r){this.key=e,this.value=t,this.color=null!=n?n:so.RED,this.left=null!=i?i:so.EMPTY,this.right=null!=r?r:so.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,n,i,r){return new so(null!=e?e:this.key,null!=t?t:this.value,null!=n?n:this.color,null!=i?i:this.left,null!=r?r:this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,n){let i=this,r=n(e,i.key);return(i=r<0?i.copy(null,null,null,i.left.insert(e,t,n),null):0===r?i.copy(null,t,null,null,null):i.copy(null,null,null,null,i.right.insert(e,t,n))).fixUp()}removeMin(){if(this.left.isEmpty())return so.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),(e=e.copy(null,null,null,e.left.removeMin(),null)).fixUp()}remove(e,t){let n,i=this;if(0>t(e,i.key))i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,t),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),0===t(e,i.key)){if(i.right.isEmpty())return so.EMPTY;n=i.right.min(),i=i.copy(n.key,n.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,t))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=(e=(e=e.copy(null,null,null,null,e.right.rotateRight())).rotateLeft()).colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=(e=e.rotateRight()).colorFlip()),e}rotateLeft(){let e=this.copy(null,null,so.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){let e=this.copy(null,null,so.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){let e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){return Math.pow(2,this.check())<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw i8();let e=this.left.check();if(e!==this.right.check())throw i8();return e+(this.isRed()?0:1)}}so.EMPTY=null,so.RED=!0,so.BLACK=!1,so.EMPTY=new class{constructor(){this.size=0}get key(){throw i8()}get value(){throw i8()}get color(){throw i8()}get left(){throw i8()}get right(){throw i8()}copy(e,t,n,i,r){return this}insert(e,t,n){return new so(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sl{constructor(e){this.comparator=e,this.data=new ss(this.comparator)}has(e){return null!==this.data.get(e)}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((t,n)=>(e(t),!1))}forEachInRange(e,t){let n=this.data.getIteratorFrom(e[0]);for(;n.hasNext();){let i=n.getNext();if(this.comparator(i.key,e[1])>=0)return;t(i.key)}}forEachWhile(e,t){let n;for(n=void 0!==t?this.data.getIteratorFrom(t):this.data.getIterator();n.hasNext();)if(!e(n.getNext().key))return}firstAfterOrEqual(e){let t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new sh(this.data.getIterator())}getIteratorFrom(e){return new sh(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach(e=>{t=t.add(e)}),t}isEqual(e){if(!(e instanceof sl)||this.size!==e.size)return!1;let t=this.data.getIterator(),n=e.data.getIterator();for(;t.hasNext();){let e=t.getNext().key,i=n.getNext().key;if(0!==this.comparator(e,i))return!1}return!0}toArray(){let e=[];return this.forEach(t=>{e.push(t)}),e}toString(){let e=[];return this.forEach(t=>e.push(t)),"SortedSet("+e.toString()+")"}copy(e){let t=new sl(this.comparator);return t.data=e,t}}class sh{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class su{constructor(e){this.fields=e,e.sort(ry.comparator)}static empty(){return new su([])}unionWith(e){let t=new sl(ry.comparator);for(let e of this.fields)t=t.add(e);for(let n of e)t=t.add(n);return new su(t.toArray())}covers(e){for(let t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return rc(this.fields,e.fields,(e,t)=>e.isEqual(t))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sc{constructor(e){this.value=e}static empty(){return new sc({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let n=0;n<e.length-1;++n)if(!rW(t=(t.mapValue.fields||{})[e.get(n)]))return null;return(t=(t.mapValue.fields||{})[e.lastSegment()])||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=rX(t)}setAll(e){let t=ry.emptyPath(),n={},i=[];e.forEach((e,r)=>{if(!t.isImmediateParentOf(r)){let e=this.getFieldsMap(t);this.applyChanges(e,n,i),n={},i=[],t=r.popLast()}e?n[r.lastSegment()]=rX(e):i.push(r.lastSegment())});let r=this.getFieldsMap(t);this.applyChanges(r,n,i)}delete(e){let t=this.field(e.popLast());rW(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return rB(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let n=0;n<e.length;++n){let i=t.mapValue.fields[e.get(n)];rW(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},t.mapValue.fields[e.get(n)]=i),t=i}return t.mapValue.fields}applyChanges(e,t,n){for(let i of(rD(t,(t,n)=>e[t]=n),n))delete e[i]}clone(){return new sc(rX(this.value))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sd{constructor(e,t,n,i,r,s,a){this.key=e,this.documentType=t,this.version=n,this.readTime=i,this.createTime=r,this.data=s,this.documentState=a}static newInvalidDocument(e){return new sd(e,0,rf.min(),rf.min(),rf.min(),sc.empty(),0)}static newFoundDocument(e,t,n,i){return new sd(e,1,t,rf.min(),n,i,0)}static newNoDocument(e,t){return new sd(e,2,t,rf.min(),rf.min(),sc.empty(),0)}static newUnknownDocument(e,t){return new sd(e,3,t,rf.min(),rf.min(),sc.empty(),2)}convertToFoundDocument(e,t){return this.createTime.isEqual(rf.min())&&(2===this.documentType||0===this.documentType)&&(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=sc.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=sc.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=rf.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return 1===this.documentState}get hasCommittedMutations(){return 2===this.documentState}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return 0!==this.documentType}isFoundDocument(){return 1===this.documentType}isNoDocument(){return 2===this.documentType}isUnknownDocument(){return 3===this.documentType}isEqual(e){return e instanceof sd&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new sd(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sf{constructor(e,t=null,n=[],i=[],r=null,s=null,a=null){this.path=e,this.collectionGroup=t,this.orderBy=n,this.filters=i,this.limit=r,this.startAt=s,this.endAt=a,this.ft=null}}function sp(e,t=null,n=[],i=[],r=null,s=null,a=null){return new sf(e,t,n,i,r,s,a)}function sg(e){if(null===e.ft){let t=e.path.canonicalString();null!==e.collectionGroup&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map(e=>(function e(t){if(t instanceof r2)return t.field.canonicalString()+t.op.toString()+r$(t.value);if(r6(t)&&r4(t))return t.filters.map(t=>e(t)).join(",");{let n=t.filters.map(t=>e(t)).join(",");return`${t.op}(${n})`}})(e)).join(","),t+="|ob:",t+=e.orderBy.map(e=>e.field.canonicalString()+e.dir).join(","),null==e.limit||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map(e=>r$(e)).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map(e=>r$(e)).join(",")),e.ft=t}return e.ft}function sm(e,t){if(e.limit!==t.limit||e.orderBy.length!==t.orderBy.length)return!1;for(let r=0;r<e.orderBy.length;r++){var n,i;if(n=e.orderBy[r],i=t.orderBy[r],!(n.dir===i.dir&&n.field.isEqual(i.field)))return!1}if(e.filters.length!==t.filters.length)return!1;for(let n=0;n<e.filters.length;n++)if(!function e(t,n){return t instanceof r2?n instanceof r2&&t.op===n.op&&t.field.isEqual(n.field)&&rB(t.value,n.value):t instanceof r3?n instanceof r3&&t.op===n.op&&t.filters.length===n.filters.length&&t.filters.reduce((t,i,r)=>t&&e(i,n.filters[r]),!0):void i8()}(e.filters[n],t.filters[n]))return!1;return e.collectionGroup===t.collectionGroup&&!!e.path.isEqual(t.path)&&!!r0(e.startAt,t.startAt)&&r0(e.endAt,t.endAt)}function sy(e){return rv.isDocumentKey(e.path)&&null===e.collectionGroup&&0===e.filters.length}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sv{constructor(e,t=null,n=[],i=[],r=null,s="F",a=null,o=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=n,this.filters=i,this.limit=r,this.limitType=s,this.startAt=a,this.endAt=o,this.dt=null,this._t=null,this.startAt,this.endAt}}function sw(e){return 0===e.filters.length&&null===e.limit&&null==e.startAt&&null==e.endAt&&(0===e.explicitOrderBy.length||1===e.explicitOrderBy.length&&e.explicitOrderBy[0].field.isKeyField())}function sE(e){if(null===e.dt){e.dt=[];let t=function(e){for(let t of e.filters){let e=t.getFirstInequalityField();if(null!==e)return e}return null}(e),n=e.explicitOrderBy.length>0?e.explicitOrderBy[0].field:null;if(null!==t&&null===n)t.isKeyField()||e.dt.push(new sr(t)),e.dt.push(new sr(ry.keyField(),"asc"));else{let t=!1;for(let n of e.explicitOrderBy)e.dt.push(n),n.field.isKeyField()&&(t=!0);if(!t){let t=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e.dt.push(new sr(ry.keyField(),t))}}}return e.dt}function sb(e){if(!e._t){if("F"===e.limitType)e._t=sp(e.path,e.collectionGroup,sE(e),e.filters,e.limit,e.startAt,e.endAt);else{let t=[];for(let n of sE(e)){let e="desc"===n.dir?"asc":"desc";t.push(new sr(n.field,e))}let n=e.endAt?new rJ(e.endAt.position,e.endAt.inclusive):null,i=e.startAt?new rJ(e.startAt.position,e.startAt.inclusive):null;e._t=sp(e.path,e.collectionGroup,t,e.filters,e.limit,n,i)}}return e._t}function sT(e,t,n){return new sv(e.path,e.collectionGroup,e.explicitOrderBy.slice(),e.filters.slice(),t,n,e.startAt,e.endAt)}function sI(e,t){return sm(sb(e),sb(t))&&e.limitType===t.limitType}function sS(e){return`${sg(sb(e))}|lt:${e.limitType}`}function sC(e){var t;let n;return`Query(target=${n=(t=sb(e)).path.canonicalString(),null!==t.collectionGroup&&(n+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(n+=`, filters: [${t.filters.map(e=>(function e(t){return t instanceof r2?`${t.field.canonicalString()} ${t.op} ${r$(t.value)}`:t instanceof r3?t.op.toString()+" {"+t.getFilters().map(e).join(" ,")+"}":"Filter"})(e)).join(", ")}]`),null==t.limit||(n+=", limit: "+t.limit),t.orderBy.length>0&&(n+=`, orderBy: [${t.orderBy.map(e=>`${e.field.canonicalString()} (${e.dir})`).join(", ")}]`),t.startAt&&(n+=", startAt: ",n+=t.startAt.inclusive?"b:":"a:",n+=t.startAt.position.map(e=>r$(e)).join(",")),t.endAt&&(n+=", endAt: ",n+=t.endAt.inclusive?"a:":"b:",n+=t.endAt.position.map(e=>r$(e)).join(",")),`Target(${n})`}; limitType=${e.limitType})`}function sA(e,t){return t.isFoundDocument()&&function(e,t){let n=t.key.path;return null!==e.collectionGroup?t.key.hasCollectionId(e.collectionGroup)&&e.path.isPrefixOf(n):rv.isDocumentKey(e.path)?e.path.isEqual(n):e.path.isImmediateParentOf(n)}(e,t)&&function(e,t){for(let n of sE(e))if(!n.field.isKeyField()&&null===t.data.field(n.field))return!1;return!0}(e,t)&&function(e,t){for(let n of e.filters)if(!n.matches(t))return!1;return!0}(e,t)&&(!e.startAt||!!function(e,t,n){let i=rZ(e,t,n);return e.inclusive?i<=0:i<0}(e.startAt,sE(e),t))&&(!e.endAt||!!function(e,t,n){let i=rZ(e,t,n);return e.inclusive?i>=0:i>0}(e.endAt,sE(e),t))}function s_(e){return(t,n)=>{let i=!1;for(let r of sE(e)){let e=function(e,t,n){let i=e.field.isKeyField()?rv.comparator(t.key,n.key):function(e,t,n){let i=t.data.field(e),r=n.data.field(e);return null!==i&&null!==r?rq(i,r):i8()}(e.field,t,n);switch(e.dir){case"asc":return i;case"desc":return -1*i;default:return i8()}}(r,t,n);if(0!==e)return e;i=i||r.field.isKeyField()}return 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sD(e,t){if(e.wt){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:rN(t)?"-0":t}}function sk(e){return{integerValue:""+e}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sN{constructor(){this._=void 0}}function sL(e,t){return e instanceof sF?rH(t)||t&&"doubleValue"in t?t:{integerValue:0}:null}class sR extends sN{}class sx extends sN{constructor(e){super(),this.elements=e}}function sO(e,t){let n=sU(t);for(let t of e.elements)n.some(e=>rB(e,t))||n.push(t);return{arrayValue:{values:n}}}class sM extends sN{constructor(e){super(),this.elements=e}}function sV(e,t){let n=sU(t);for(let t of e.elements)n=n.filter(e=>!rB(e,t));return{arrayValue:{values:n}}}class sF extends sN{constructor(e,t){super(),this.yt=e,this.gt=t}}function sP(e){return rO(e.integerValue||e.doubleValue)}function sU(e){return rz(e)&&e.arrayValue.values?e.arrayValue.values.slice():[]}class sB{constructor(e,t){this.version=e,this.transformResults=t}}class sj{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new sj}static exists(e){return new sj(void 0,e)}static updateTime(e){return new sj(e)}get isNone(){return void 0===this.updateTime&&void 0===this.exists}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function sq(e,t){return void 0!==e.updateTime?t.isFoundDocument()&&t.version.isEqual(e.updateTime):void 0===e.exists||e.exists===t.isFoundDocument()}class sK{}function s$(e,t){if(!e.hasLocalMutations||t&&0===t.fields.length)return null;if(null===t)return e.isNoDocument()?new sJ(e.key,sj.none()):new sG(e.key,e.data,sj.none());{let n=e.data,i=sc.empty(),r=new sl(ry.comparator);for(let e of t.fields)if(!r.has(e)){let t=n.field(e);null===t&&e.length>1&&(e=e.popLast(),t=n.field(e)),null===t?i.delete(e):i.set(e,t),r=r.add(e)}return new sQ(e.key,i,new su(r.toArray()),sj.none())}}function sH(e,t,n,i){return e instanceof sG?function(e,t,n,i){if(!sq(e.precondition,t))return n;let r=e.value.clone(),s=sY(e.fieldTransforms,i,t);return r.setAll(s),t.convertToFoundDocument(t.version,r).setHasLocalMutations(),null}(e,t,n,i):e instanceof sQ?function(e,t,n,i){if(!sq(e.precondition,t))return n;let r=sY(e.fieldTransforms,i,t),s=t.data;return(s.setAll(sW(e)),s.setAll(r),t.convertToFoundDocument(t.version,s).setHasLocalMutations(),null===n)?null:n.unionWith(e.fieldMask.fields).unionWith(e.fieldTransforms.map(e=>e.field))}(e,t,n,i):sq(e.precondition,t)?(t.convertToNoDocument(t.version).setHasLocalMutations(),null):n}function sz(e,t){var n,i;return e.type===t.type&&!!e.key.isEqual(t.key)&&!!e.precondition.isEqual(t.precondition)&&(n=e.fieldTransforms,i=t.fieldTransforms,!!(void 0===n&&void 0===i||!(!n||!i)&&rc(n,i,(e,t)=>{var n,i;return e.field.isEqual(t.field)&&(n=e.transform,i=t.transform,n instanceof sx&&i instanceof sx||n instanceof sM&&i instanceof sM?rc(n.elements,i.elements,rB):n instanceof sF&&i instanceof sF?rB(n.gt,i.gt):n instanceof sR&&i instanceof sR)})))&&(0===e.type?e.value.isEqual(t.value):1!==e.type||e.data.isEqual(t.data)&&e.fieldMask.isEqual(t.fieldMask))}class sG extends sK{constructor(e,t,n,i=[]){super(),this.key=e,this.value=t,this.precondition=n,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class sQ extends sK{constructor(e,t,n,i,r=[]){super(),this.key=e,this.data=t,this.fieldMask=n,this.precondition=i,this.fieldTransforms=r,this.type=1}getFieldMask(){return this.fieldMask}}function sW(e){let t=new Map;return e.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){let i=e.data.field(n);t.set(n,i)}}),t}function sX(e,t,n){var i;let r=new Map;e.length===n.length||i8();for(let s=0;s<n.length;s++){let a=e[s],o=a.transform,l=t.data.field(a.field);r.set(a.field,(i=n[s],o instanceof sx?sO(o,l):o instanceof sM?sV(o,l):i))}return r}function sY(e,t,n){let i=new Map;for(let r of e){let e=r.transform,s=n.data.field(r.field);i.set(r.field,e instanceof sR?function(e,t){let n={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:e.seconds,nanos:e.nanoseconds}}}};return t&&(n.fields.__previous_value__=t),{mapValue:n}}(t,s):e instanceof sx?sO(e,s):e instanceof sM?sV(e,s):function(e,t){let n=sL(e,t),i=sP(n)+sP(e.gt);return rH(n)&&rH(e.gt)?sk(i):sD(e.yt,i)}(e,s))}return i}class sJ extends sK{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class sZ extends sK{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class s0{constructor(e){this.count=e}}function s1(e){if(void 0===e)return i4("GRPC error has no .code"),i9.UNKNOWN;switch(e){case l.OK:return i9.OK;case l.CANCELLED:return i9.CANCELLED;case l.UNKNOWN:return i9.UNKNOWN;case l.DEADLINE_EXCEEDED:return i9.DEADLINE_EXCEEDED;case l.RESOURCE_EXHAUSTED:return i9.RESOURCE_EXHAUSTED;case l.INTERNAL:return i9.INTERNAL;case l.UNAVAILABLE:return i9.UNAVAILABLE;case l.UNAUTHENTICATED:return i9.UNAUTHENTICATED;case l.INVALID_ARGUMENT:return i9.INVALID_ARGUMENT;case l.NOT_FOUND:return i9.NOT_FOUND;case l.ALREADY_EXISTS:return i9.ALREADY_EXISTS;case l.PERMISSION_DENIED:return i9.PERMISSION_DENIED;case l.FAILED_PRECONDITION:return i9.FAILED_PRECONDITION;case l.ABORTED:return i9.ABORTED;case l.OUT_OF_RANGE:return i9.OUT_OF_RANGE;case l.UNIMPLEMENTED:return i9.UNIMPLEMENTED;case l.DATA_LOSS:return i9.DATA_LOSS;default:return i8()}}(h=l||(l={}))[h.OK=0]="OK",h[h.CANCELLED=1]="CANCELLED",h[h.UNKNOWN=2]="UNKNOWN",h[h.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",h[h.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",h[h.NOT_FOUND=5]="NOT_FOUND",h[h.ALREADY_EXISTS=6]="ALREADY_EXISTS",h[h.PERMISSION_DENIED=7]="PERMISSION_DENIED",h[h.UNAUTHENTICATED=16]="UNAUTHENTICATED",h[h.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",h[h.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",h[h.ABORTED=10]="ABORTED",h[h.OUT_OF_RANGE=11]="OUT_OF_RANGE",h[h.UNIMPLEMENTED=12]="UNIMPLEMENTED",h[h.INTERNAL=13]="INTERNAL",h[h.UNAVAILABLE=14]="UNAVAILABLE",h[h.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class s2{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){let t=this.mapKeyFn(e),n=this.inner[t];if(void 0!==n){for(let[t,i]of n)if(this.equalsFn(t,e))return i}}has(e){return void 0!==this.get(e)}set(e,t){let n=this.mapKeyFn(e),i=this.inner[n];if(void 0===i)return this.inner[n]=[[e,t]],void this.innerSize++;for(let n=0;n<i.length;n++)if(this.equalsFn(i[n][0],e))return void(i[n]=[e,t]);i.push([e,t]),this.innerSize++}delete(e){let t=this.mapKeyFn(e),n=this.inner[t];if(void 0===n)return!1;for(let i=0;i<n.length;i++)if(this.equalsFn(n[i][0],e))return 1===n.length?delete this.inner[t]:n.splice(i,1),this.innerSize--,!0;return!1}forEach(e){rD(this.inner,(t,n)=>{for(let[t,i]of n)e(t,i)})}isEmpty(){return rk(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const s3=new ss(rv.comparator),s4=new ss(rv.comparator);function s6(...e){let t=s4;for(let n of e)t=t.insert(n.key,n);return t}function s5(e){let t=s4;return e.forEach((e,n)=>t=t.insert(e,n.overlayedDocument)),t}function s8(){return new s2(e=>e.toString(),(e,t)=>e.isEqual(t))}const s9=new ss(rv.comparator),s7=new sl(rv.comparator);function ae(...e){let t=s7;for(let n of e)t=t.add(n);return t}const at=new sl(ru);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class an{constructor(e,t,n,i,r){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=n,this.documentUpdates=i,this.resolvedLimboDocuments=r}static createSynthesizedRemoteEventForCurrentChange(e,t,n){let i=new Map;return i.set(e,ai.createSynthesizedTargetChangeForCurrentChange(e,t,n)),new an(rf.min(),i,at,s3,ae())}}class ai{constructor(e,t,n,i,r){this.resumeToken=e,this.current=t,this.addedDocuments=n,this.modifiedDocuments=i,this.removedDocuments=r}static createSynthesizedTargetChangeForCurrentChange(e,t,n){return new ai(n,t,ae(),ae(),ae())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ar{constructor(e,t,n,i){this.It=e,this.removedTargetIds=t,this.key=n,this.Tt=i}}class as{constructor(e,t){this.targetId=e,this.Et=t}}class aa{constructor(e,t,n=rL.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=t,this.resumeToken=n,this.cause=i}}class ao{constructor(){this.At=0,this.Rt=au(),this.bt=rL.EMPTY_BYTE_STRING,this.Pt=!1,this.vt=!0}get current(){return this.Pt}get resumeToken(){return this.bt}get Vt(){return 0!==this.At}get St(){return this.vt}Dt(e){e.approximateByteSize()>0&&(this.vt=!0,this.bt=e)}Ct(){let e=ae(),t=ae(),n=ae();return this.Rt.forEach((i,r)=>{switch(r){case 0:e=e.add(i);break;case 2:t=t.add(i);break;case 1:n=n.add(i);break;default:i8()}}),new ai(this.bt,this.Pt,e,t,n)}xt(){this.vt=!1,this.Rt=au()}Nt(e,t){this.vt=!0,this.Rt=this.Rt.insert(e,t)}kt(e){this.vt=!0,this.Rt=this.Rt.remove(e)}Ot(){this.At+=1}Mt(){this.At-=1}Ft(){this.vt=!0,this.Pt=!0}}class al{constructor(e){this.$t=e,this.Bt=new Map,this.Lt=s3,this.qt=ah(),this.Ut=new sl(ru)}Kt(e){for(let t of e.It)e.Tt&&e.Tt.isFoundDocument()?this.Gt(t,e.Tt):this.Qt(t,e.key,e.Tt);for(let t of e.removedTargetIds)this.Qt(t,e.key,e.Tt)}jt(e){this.forEachTarget(e,t=>{let n=this.Wt(t);switch(e.state){case 0:this.zt(t)&&n.Dt(e.resumeToken);break;case 1:n.Mt(),n.Vt||n.xt(),n.Dt(e.resumeToken);break;case 2:n.Mt(),n.Vt||this.removeTarget(t);break;case 3:this.zt(t)&&(n.Ft(),n.Dt(e.resumeToken));break;case 4:this.zt(t)&&(this.Ht(t),n.Dt(e.resumeToken));break;default:i8()}})}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.Bt.forEach((e,n)=>{this.zt(n)&&t(n)})}Jt(e){let t=e.targetId,n=e.Et.count,i=this.Yt(t);if(i){let e=i.target;if(sy(e)){if(0===n){let n=new rv(e.path);this.Qt(t,n,sd.newNoDocument(n,rf.min()))}else 1===n||i8()}else this.Xt(t)!==n&&(this.Ht(t),this.Ut=this.Ut.add(t))}}Zt(e){let t=new Map;this.Bt.forEach((n,i)=>{let r=this.Yt(i);if(r){if(n.current&&sy(r.target)){let t=new rv(r.target.path);null!==this.Lt.get(t)||this.te(i,t)||this.Qt(i,t,sd.newNoDocument(t,e))}n.St&&(t.set(i,n.Ct()),n.xt())}});let n=ae();this.qt.forEach((e,t)=>{let i=!0;t.forEachWhile(e=>{let t=this.Yt(e);return!t||2===t.purpose||(i=!1,!1)}),i&&(n=n.add(e))}),this.Lt.forEach((t,n)=>n.setReadTime(e));let i=new an(e,t,this.Ut,this.Lt,n);return this.Lt=s3,this.qt=ah(),this.Ut=new sl(ru),i}Gt(e,t){if(!this.zt(e))return;let n=this.te(e,t.key)?2:0;this.Wt(e).Nt(t.key,n),this.Lt=this.Lt.insert(t.key,t),this.qt=this.qt.insert(t.key,this.ee(t.key).add(e))}Qt(e,t,n){if(!this.zt(e))return;let i=this.Wt(e);this.te(e,t)?i.Nt(t,1):i.kt(t),this.qt=this.qt.insert(t,this.ee(t).delete(e)),n&&(this.Lt=this.Lt.insert(t,n))}removeTarget(e){this.Bt.delete(e)}Xt(e){let t=this.Wt(e).Ct();return this.$t.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}Ot(e){this.Wt(e).Ot()}Wt(e){let t=this.Bt.get(e);return t||(t=new ao,this.Bt.set(e,t)),t}ee(e){let t=this.qt.get(e);return t||(t=new sl(ru),this.qt=this.qt.insert(e,t)),t}zt(e){let t=null!==this.Yt(e);return t||i3("WatchChangeAggregator","Detected inactive target",e),t}Yt(e){let t=this.Bt.get(e);return t&&t.Vt?null:this.$t.ne(e)}Ht(e){this.Bt.set(e,new ao),this.$t.getRemoteKeysForTarget(e).forEach(t=>{this.Qt(e,t,null)})}te(e,t){return this.$t.getRemoteKeysForTarget(e).has(t)}}function ah(){return new ss(rv.comparator)}function au(){return new ss(rv.comparator)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ac={asc:"ASCENDING",desc:"DESCENDING"},ad={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},af={and:"AND",or:"OR"};class ap{constructor(e,t){this.databaseId=e,this.wt=t}}function ag(e,t){return e.wt?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function am(e,t){return e.wt?t.toBase64():t.toUint8Array()}function ay(e){return e||i8(),rf.fromTimestamp(function(e){let t=rx(e);return new rd(t.seconds,t.nanos)}(e))}function av(e,t){return new rg(["projects",e.projectId,"databases",e.database]).child("documents").child(t).canonicalString()}function aw(e){let t=rg.fromString(e);return aD(t)||i8(),t}function aE(e,t){return av(e.databaseId,t.path)}function ab(e,t){let n=aw(t);if(n.get(1)!==e.databaseId.projectId)throw new i7(i9.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+e.databaseId.projectId);if(n.get(3)!==e.databaseId.database)throw new i7(i9.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+e.databaseId.database);return new rv(aS(n))}function aT(e,t){return av(e.databaseId,t)}function aI(e){return new rg(["projects",e.databaseId.projectId,"databases",e.databaseId.database]).canonicalString()}function aS(e){return e.length>4&&"documents"===e.get(4)||i8(),e.popFirst(5)}function aC(e,t,n){return{name:aE(e,t),fields:n.value.mapValue.fields}}function aA(e){return{fieldPath:e.canonicalString()}}function a_(e){return ry.fromServerFormat(e.fieldPath)}function aD(e){return e.length>=4&&"projects"===e.get(0)&&"databases"===e.get(2)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ak{constructor(e,t,n,i){this.batchId=e,this.localWriteTime=t,this.baseMutations=n,this.mutations=i}applyToRemoteDocument(e,t){let n=t.mutationResults;for(let t=0;t<this.mutations.length;t++){let r=this.mutations[t];if(r.key.isEqual(e.key)){var i;i=n[t],r instanceof sG?function(e,t,n){let i=e.value.clone(),r=sX(e.fieldTransforms,t,n.transformResults);i.setAll(r),t.convertToFoundDocument(n.version,i).setHasCommittedMutations()}(r,e,i):r instanceof sQ?function(e,t,n){if(!sq(e.precondition,t))return void t.convertToUnknownDocument(n.version);let i=sX(e.fieldTransforms,t,n.transformResults),r=t.data;r.setAll(sW(e)),r.setAll(i),t.convertToFoundDocument(n.version,r).setHasCommittedMutations()}(r,e,i):function(e,t,n){t.convertToNoDocument(n.version).setHasCommittedMutations()}(0,e,i)}}}applyToLocalView(e,t){for(let n of this.baseMutations)n.key.isEqual(e.key)&&(t=sH(n,e,t,this.localWriteTime));for(let n of this.mutations)n.key.isEqual(e.key)&&(t=sH(n,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){let n=s8();return this.mutations.forEach(i=>{let r=e.get(i.key),s=r.overlayedDocument,a=this.applyToLocalView(s,r.mutatedFields),o=s$(s,a=t.has(i.key)?null:a);null!==o&&n.set(i.key,o),s.isValidDocument()||s.convertToNoDocument(rf.min())}),n}keys(){return this.mutations.reduce((e,t)=>e.add(t.key),ae())}isEqual(e){return this.batchId===e.batchId&&rc(this.mutations,e.mutations,(e,t)=>sz(e,t))&&rc(this.baseMutations,e.baseMutations,(e,t)=>sz(e,t))}}class aN{constructor(e,t,n,i){this.batch=e,this.commitVersion=t,this.mutationResults=n,this.docVersions=i}static from(e,t,n){e.mutations.length===n.length||i8();let i=s9,r=e.mutations;for(let e=0;e<r.length;e++)i=i.insert(r[e].key,n[e].version);return new aN(e,t,n,i)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aL{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return null!==e&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aR{constructor(e,t,n,i,r=rf.min(),s=rf.min(),a=rL.EMPTY_BYTE_STRING){this.target=e,this.targetId=t,this.purpose=n,this.sequenceNumber=i,this.snapshotVersion=r,this.lastLimboFreeSnapshotVersion=s,this.resumeToken=a}withSequenceNumber(e){return new aR(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken)}withResumeToken(e,t){return new aR(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e)}withLastLimboFreeSnapshotVersion(e){return new aR(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ax{constructor(e){this.ie=e}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aO{constructor(){}ue(e,t){this.ce(e,t),t.ae()}ce(e,t){if("nullValue"in e)this.he(t,5);else if("booleanValue"in e)this.he(t,10),t.le(e.booleanValue?1:0);else if("integerValue"in e)this.he(t,15),t.le(rO(e.integerValue));else if("doubleValue"in e){let n=rO(e.doubleValue);isNaN(n)?this.he(t,13):(this.he(t,15),rN(n)?t.le(0):t.le(n))}else if("timestampValue"in e){let n=e.timestampValue;this.he(t,20),"string"==typeof n?t.fe(n):(t.fe(`${n.seconds||""}`),t.le(n.nanos||0))}else if("stringValue"in e)this.de(e.stringValue,t),this._e(t);else if("bytesValue"in e)this.he(t,30),t.we(rM(e.bytesValue)),this._e(t);else if("referenceValue"in e)this.me(e.referenceValue,t);else if("geoPointValue"in e){let n=e.geoPointValue;this.he(t,45),t.le(n.latitude||0),t.le(n.longitude||0)}else"mapValue"in e?rY(e)?this.he(t,Number.MAX_SAFE_INTEGER):(this.ge(e.mapValue,t),this._e(t)):"arrayValue"in e?(this.ye(e.arrayValue,t),this._e(t)):i8()}de(e,t){this.he(t,25),this.pe(e,t)}pe(e,t){t.fe(e)}ge(e,t){let n=e.fields||{};for(let e of(this.he(t,55),Object.keys(n)))this.de(e,t),this.ce(n[e],t)}ye(e,t){let n=e.values||[];for(let e of(this.he(t,50),n))this.ce(e,t)}me(e,t){this.he(t,37),rv.fromName(e).path.forEach(e=>{this.he(t,60),this.pe(e,t)})}he(e,t){e.le(t)}_e(e){e.le(2)}}aO.Ie=new aO;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aM{constructor(){this.Je=new aV}addToCollectionParentIndex(e,t){return this.Je.add(t),rT.resolve()}getCollectionParents(e,t){return rT.resolve(this.Je.getEntries(t))}addFieldIndex(e,t){return rT.resolve()}deleteFieldIndex(e,t){return rT.resolve()}getDocumentsMatchingTarget(e,t){return rT.resolve(null)}getIndexType(e,t){return rT.resolve(0)}getFieldIndexes(e,t){return rT.resolve([])}getNextCollectionGroupToUpdate(e){return rT.resolve(null)}getMinOffset(e,t){return rT.resolve(rw.min())}getMinOffsetFromCollectionGroup(e,t){return rT.resolve(rw.min())}updateCollectionGroup(e,t,n){return rT.resolve()}updateIndexEntries(e,t){return rT.resolve()}}class aV{constructor(){this.index={}}add(e){let t=e.lastSegment(),n=e.popLast(),i=this.index[t]||new sl(rg.comparator),r=!i.has(n);return this.index[t]=i.add(n),r}has(e){let t=e.lastSegment(),n=e.popLast(),i=this.index[t];return i&&i.has(n)}getEntries(e){return(this.index[e]||new sl(rg.comparator)).toArray()}}new Uint8Array(0);class aF{constructor(e,t,n){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=n}static withCacheSize(e){return new aF(e,aF.DEFAULT_COLLECTION_PERCENTILE,aF.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */aF.DEFAULT_COLLECTION_PERCENTILE=10,aF.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,aF.DEFAULT=new aF(0x2800000,aF.DEFAULT_COLLECTION_PERCENTILE,aF.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),aF.DISABLED=new aF(-1,0,0);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aP{constructor(e){this.bn=e}next(){return this.bn+=2,this.bn}static Pn(){return new aP(0)}static vn(){return new aP(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aU{constructor(){this.changes=new s2(e=>e.toString(),(e,t)=>e.isEqual(t)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,sd.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();let n=this.changes.get(t);return void 0!==n?rT.resolve(n):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aB{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aj{constructor(e,t,n,i){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=n,this.indexManager=i}getDocument(e,t){let n=null;return this.documentOverlayCache.getOverlay(e,t).next(i=>(n=i,this.remoteDocumentCache.getEntry(e,t))).next(e=>(null!==n&&sH(n.mutation,e,su.empty(),rd.now()),e))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next(t=>this.getLocalViewOfDocuments(e,t,ae()).next(()=>t))}getLocalViewOfDocuments(e,t,n=ae()){let i=s8();return this.populateOverlays(e,i,t).next(()=>this.computeViews(e,t,i,n).next(e=>{let t=s6();return e.forEach((e,n)=>{t=t.insert(e,n.overlayedDocument)}),t}))}getOverlayedDocuments(e,t){let n=s8();return this.populateOverlays(e,n,t).next(()=>this.computeViews(e,t,n,ae()))}populateOverlays(e,t,n){let i=[];return n.forEach(e=>{t.has(e)||i.push(e)}),this.documentOverlayCache.getOverlays(e,i).next(e=>{e.forEach((e,n)=>{t.set(e,n)})})}computeViews(e,t,n,i){let r=s3,s=s8(),a=s8();return t.forEach((e,t)=>{let a=n.get(t.key);i.has(t.key)&&(void 0===a||a.mutation instanceof sQ)?r=r.insert(t.key,t):void 0!==a?(s.set(t.key,a.mutation.getFieldMask()),sH(a.mutation,t,a.mutation.getFieldMask(),rd.now())):s.set(t.key,su.empty())}),this.recalculateAndSaveOverlays(e,r).next(e=>(e.forEach((e,t)=>s.set(e,t)),t.forEach((e,t)=>{var n;return a.set(e,new aB(t,null!==(n=s.get(e))&&void 0!==n?n:null))}),a))}recalculateAndSaveOverlays(e,t){let n=s8(),i=new ss((e,t)=>e-t),r=ae();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next(e=>{for(let r of e)r.keys().forEach(e=>{let s=t.get(e);if(null===s)return;let a=n.get(e)||su.empty();a=r.applyToLocalView(s,a),n.set(e,a);let o=(i.get(r.batchId)||ae()).add(e);i=i.insert(r.batchId,o)})}).next(()=>{let s=[],a=i.getReverseIterator();for(;a.hasNext();){let i=a.getNext(),o=i.key,l=i.value,h=s8();l.forEach(e=>{if(!r.has(e)){let i=s$(t.get(e),n.get(e));null!==i&&h.set(e,i),r=r.add(e)}}),s.push(this.documentOverlayCache.saveOverlays(e,o,h))}return rT.waitFor(s)}).next(()=>n)}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next(t=>this.recalculateAndSaveOverlays(e,t))}getDocumentsMatchingQuery(e,t,n){return rv.isDocumentKey(t.path)&&null===t.collectionGroup&&0===t.filters.length?this.getDocumentsMatchingDocumentQuery(e,t.path):null!==t.collectionGroup?this.getDocumentsMatchingCollectionGroupQuery(e,t,n):this.getDocumentsMatchingCollectionQuery(e,t,n)}getNextDocuments(e,t,n,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,n,i).next(r=>{let s=i-r.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,n.largestBatchId,i-r.size):rT.resolve(s8()),a=-1,o=r;return s.next(t=>rT.forEach(t,(t,n)=>(a<n.largestBatchId&&(a=n.largestBatchId),r.get(t)?rT.resolve():this.remoteDocumentCache.getEntry(e,t).next(e=>{o=o.insert(t,e)}))).next(()=>this.populateOverlays(e,t,r)).next(()=>this.computeViews(e,o,t,ae())).next(e=>({batchId:a,changes:s5(e)})))})}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new rv(t)).next(e=>{let t=s6();return e.isFoundDocument()&&(t=t.insert(e.key,e)),t})}getDocumentsMatchingCollectionGroupQuery(e,t,n){let i=t.collectionGroup,r=s6();return this.indexManager.getCollectionParents(e,i).next(s=>rT.forEach(s,s=>{let a=new sv(s.child(i),null,t.explicitOrderBy.slice(),t.filters.slice(),t.limit,t.limitType,t.startAt,t.endAt);return this.getDocumentsMatchingCollectionQuery(e,a,n).next(e=>{e.forEach((e,t)=>{r=r.insert(e,t)})})}).next(()=>r))}getDocumentsMatchingCollectionQuery(e,t,n){let i;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,n.largestBatchId).next(r=>(i=r,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,n,i))).next(e=>{i.forEach((t,n)=>{let i=n.getKey();null===e.get(i)&&(e=e.insert(i,sd.newInvalidDocument(i)))});let n=s6();return e.forEach((e,r)=>{let s=i.get(e);void 0!==s&&sH(s.mutation,r,su.empty(),rd.now()),sA(t,r)&&(n=n.insert(e,r))}),n})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aq{constructor(e){this.yt=e,this.Zn=new Map,this.ts=new Map}getBundleMetadata(e,t){return rT.resolve(this.Zn.get(t))}saveBundleMetadata(e,t){return this.Zn.set(t.id,{id:t.id,version:t.version,createTime:ay(t.createTime)}),rT.resolve()}getNamedQuery(e,t){return rT.resolve(this.ts.get(t))}saveNamedQuery(e,t){return this.ts.set(t.name,{name:t.name,query:function(e){let t=function(e){var t;let n,i=function(e){let t=aw(e);return 4===t.length?rg.emptyPath():aS(t)}(e.parent),r=e.structuredQuery,s=r.from?r.from.length:0,a=null;if(s>0){1===s||i8();let e=r.from[0];e.allDescendants?a=e.collectionId:i=i.child(e.collectionId)}let o=[];r.where&&(o=function(e){var t;let n=function e(t){return void 0!==t.unaryFilter?function(e){switch(e.unaryFilter.op){case"IS_NAN":let t=a_(e.unaryFilter.field);return r2.create(t,"==",{doubleValue:NaN});case"IS_NULL":let n=a_(e.unaryFilter.field);return r2.create(n,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":let i=a_(e.unaryFilter.field);return r2.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":let r=a_(e.unaryFilter.field);return r2.create(r,"!=",{nullValue:"NULL_VALUE"});default:return i8()}}(t):void 0!==t.fieldFilter?r2.create(a_(t.fieldFilter.field),function(e){switch(e){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return i8()}}(t.fieldFilter.op),t.fieldFilter.value):void 0!==t.compositeFilter?r3.create(t.compositeFilter.filters.map(t=>e(t)),function(e){switch(e){case"AND":return"and";case"OR":return"or";default:return i8()}}(t.compositeFilter.op)):i8()}(e);return n instanceof r3&&r6(t=n)&&r4(t)?n.getFilters():[n]}(r.where));let l=[];r.orderBy&&(l=r.orderBy.map(e=>new sr(a_(e.field),function(e){switch(e){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(e.direction))));let h=null;r.limit&&(h=null==(n="object"==typeof(t=r.limit)?t.value:t)?null:n);let u=null;r.startAt&&(u=function(e){let t=!!e.before;return new rJ(e.values||[],t)}(r.startAt));let c=null;return r.endAt&&(c=function(e){let t=!e.before;return new rJ(e.values||[],t)}(r.endAt)),new sv(i,a,l,o,h,"F",u,c)}({parent:e.parent,structuredQuery:e.structuredQuery});return"LAST"===e.limitType?sT(t,t.limit,"L"):t}(t.bundledQuery),readTime:ay(t.readTime)}),rT.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aK{constructor(){this.overlays=new ss(rv.comparator),this.es=new Map}getOverlay(e,t){return rT.resolve(this.overlays.get(t))}getOverlays(e,t){let n=s8();return rT.forEach(t,t=>this.getOverlay(e,t).next(e=>{null!==e&&n.set(t,e)})).next(()=>n)}saveOverlays(e,t,n){return n.forEach((n,i)=>{this.oe(e,t,i)}),rT.resolve()}removeOverlaysForBatchId(e,t,n){let i=this.es.get(n);return void 0!==i&&(i.forEach(e=>this.overlays=this.overlays.remove(e)),this.es.delete(n)),rT.resolve()}getOverlaysForCollection(e,t,n){let i=s8(),r=t.length+1,s=new rv(t.child("")),a=this.overlays.getIteratorFrom(s);for(;a.hasNext();){let e=a.getNext().value,s=e.getKey();if(!t.isPrefixOf(s.path))break;s.path.length===r&&e.largestBatchId>n&&i.set(e.getKey(),e)}return rT.resolve(i)}getOverlaysForCollectionGroup(e,t,n,i){let r=new ss((e,t)=>e-t),s=this.overlays.getIterator();for(;s.hasNext();){let e=s.getNext().value;if(e.getKey().getCollectionGroup()===t&&e.largestBatchId>n){let t=r.get(e.largestBatchId);null===t&&(t=s8(),r=r.insert(e.largestBatchId,t)),t.set(e.getKey(),e)}}let a=s8(),o=r.getIterator();for(;o.hasNext()&&(o.getNext().value.forEach((e,t)=>a.set(e,t)),!(a.size()>=i)););return rT.resolve(a)}oe(e,t,n){let i=this.overlays.get(n.key);if(null!==i){let e=this.es.get(i.largestBatchId).delete(n.key);this.es.set(i.largestBatchId,e)}this.overlays=this.overlays.insert(n.key,new aL(t,n));let r=this.es.get(t);void 0===r&&(r=ae(),this.es.set(t,r)),this.es.set(t,r.add(n.key))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class a${constructor(){this.ns=new sl(aH.ss),this.rs=new sl(aH.os)}isEmpty(){return this.ns.isEmpty()}addReference(e,t){let n=new aH(e,t);this.ns=this.ns.add(n),this.rs=this.rs.add(n)}us(e,t){e.forEach(e=>this.addReference(e,t))}removeReference(e,t){this.cs(new aH(e,t))}hs(e,t){e.forEach(e=>this.removeReference(e,t))}ls(e){let t=new rv(new rg([])),n=new aH(t,e),i=new aH(t,e+1),r=[];return this.rs.forEachInRange([n,i],e=>{this.cs(e),r.push(e.key)}),r}fs(){this.ns.forEach(e=>this.cs(e))}cs(e){this.ns=this.ns.delete(e),this.rs=this.rs.delete(e)}ds(e){let t=new rv(new rg([])),n=new aH(t,e),i=new aH(t,e+1),r=ae();return this.rs.forEachInRange([n,i],e=>{r=r.add(e.key)}),r}containsKey(e){let t=new aH(e,0),n=this.ns.firstAfterOrEqual(t);return null!==n&&e.isEqual(n.key)}}class aH{constructor(e,t){this.key=e,this._s=t}static ss(e,t){return rv.comparator(e.key,t.key)||ru(e._s,t._s)}static os(e,t){return ru(e._s,t._s)||rv.comparator(e.key,t.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class az{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.ws=1,this.gs=new sl(aH.ss)}checkEmpty(e){return rT.resolve(0===this.mutationQueue.length)}addMutationBatch(e,t,n,i){let r=this.ws;this.ws++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];let s=new ak(r,t,n,i);for(let t of(this.mutationQueue.push(s),i))this.gs=this.gs.add(new aH(t.key,r)),this.indexManager.addToCollectionParentIndex(e,t.key.path.popLast());return rT.resolve(s)}lookupMutationBatch(e,t){return rT.resolve(this.ys(t))}getNextMutationBatchAfterBatchId(e,t){let n=this.ps(t+1),i=n<0?0:n;return rT.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return rT.resolve(0===this.mutationQueue.length?-1:this.ws-1)}getAllMutationBatches(e){return rT.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){let n=new aH(t,0),i=new aH(t,Number.POSITIVE_INFINITY),r=[];return this.gs.forEachInRange([n,i],e=>{let t=this.ys(e._s);r.push(t)}),rT.resolve(r)}getAllMutationBatchesAffectingDocumentKeys(e,t){let n=new sl(ru);return t.forEach(e=>{let t=new aH(e,0),i=new aH(e,Number.POSITIVE_INFINITY);this.gs.forEachInRange([t,i],e=>{n=n.add(e._s)})}),rT.resolve(this.Is(n))}getAllMutationBatchesAffectingQuery(e,t){let n=t.path,i=n.length+1,r=n;rv.isDocumentKey(r)||(r=r.child(""));let s=new aH(new rv(r),0),a=new sl(ru);return this.gs.forEachWhile(e=>{let t=e.key.path;return!!n.isPrefixOf(t)&&(t.length===i&&(a=a.add(e._s)),!0)},s),rT.resolve(this.Is(a))}Is(e){let t=[];return e.forEach(e=>{let n=this.ys(e);null!==n&&t.push(n)}),t}removeMutationBatch(e,t){0===this.Ts(t.batchId,"removed")||i8(),this.mutationQueue.shift();let n=this.gs;return rT.forEach(t.mutations,i=>{let r=new aH(i.key,t.batchId);return n=n.delete(r),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.gs=n})}An(e){}containsKey(e,t){let n=new aH(t,0),i=this.gs.firstAfterOrEqual(n);return rT.resolve(t.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,rT.resolve()}Ts(e,t){return this.ps(e)}ps(e){return 0===this.mutationQueue.length?0:e-this.mutationQueue[0].batchId}ys(e){let t=this.ps(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aG{constructor(e){this.Es=e,this.docs=new ss(rv.comparator),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){let n=t.key,i=this.docs.get(n),r=i?i.size:0,s=this.Es(t);return this.docs=this.docs.insert(n,{document:t.mutableCopy(),size:s}),this.size+=s-r,this.indexManager.addToCollectionParentIndex(e,n.path.popLast())}removeEntry(e){let t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){let n=this.docs.get(t);return rT.resolve(n?n.document.mutableCopy():sd.newInvalidDocument(t))}getEntries(e,t){let n=s3;return t.forEach(e=>{let t=this.docs.get(e);n=n.insert(e,t?t.document.mutableCopy():sd.newInvalidDocument(e))}),rT.resolve(n)}getDocumentsMatchingQuery(e,t,n,i){let r=s3,s=t.path,a=new rv(s.child("")),o=this.docs.getIteratorFrom(a);for(;o.hasNext();){let{key:e,value:{document:a}}=o.getNext();if(!s.isPrefixOf(e.path))break;e.path.length>s.length+1||0>=function(e,t){let n=e.readTime.compareTo(t.readTime);return 0!==n?n:0!==(n=rv.comparator(e.documentKey,t.documentKey))?n:ru(e.largestBatchId,t.largestBatchId)}(new rw(a.readTime,a.key,-1),n)||(i.has(a.key)||sA(t,a))&&(r=r.insert(a.key,a.mutableCopy()))}return rT.resolve(r)}getAllFromCollectionGroup(e,t,n,i){i8()}As(e,t){return rT.forEach(this.docs,e=>t(e))}newChangeBuffer(e){return new aQ(this)}getSize(e){return rT.resolve(this.size)}}class aQ extends aU{constructor(e){super(),this.Yn=e}applyChanges(e){let t=[];return this.changes.forEach((n,i)=>{i.isValidDocument()?t.push(this.Yn.addEntry(e,i)):this.Yn.removeEntry(n)}),rT.waitFor(t)}getFromCache(e,t){return this.Yn.getEntry(e,t)}getAllFromCache(e,t){return this.Yn.getEntries(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aW{constructor(e){this.persistence=e,this.Rs=new s2(e=>sg(e),sm),this.lastRemoteSnapshotVersion=rf.min(),this.highestTargetId=0,this.bs=0,this.Ps=new a$,this.targetCount=0,this.vs=aP.Pn()}forEachTarget(e,t){return this.Rs.forEach((e,n)=>t(n)),rT.resolve()}getLastRemoteSnapshotVersion(e){return rT.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return rT.resolve(this.bs)}allocateTargetId(e){return this.highestTargetId=this.vs.next(),rT.resolve(this.highestTargetId)}setTargetsMetadata(e,t,n){return n&&(this.lastRemoteSnapshotVersion=n),t>this.bs&&(this.bs=t),rT.resolve()}Dn(e){this.Rs.set(e.target,e);let t=e.targetId;t>this.highestTargetId&&(this.vs=new aP(t),this.highestTargetId=t),e.sequenceNumber>this.bs&&(this.bs=e.sequenceNumber)}addTargetData(e,t){return this.Dn(t),this.targetCount+=1,rT.resolve()}updateTargetData(e,t){return this.Dn(t),rT.resolve()}removeTargetData(e,t){return this.Rs.delete(t.target),this.Ps.ls(t.targetId),this.targetCount-=1,rT.resolve()}removeTargets(e,t,n){let i=0,r=[];return this.Rs.forEach((s,a)=>{a.sequenceNumber<=t&&null===n.get(a.targetId)&&(this.Rs.delete(s),r.push(this.removeMatchingKeysForTargetId(e,a.targetId)),i++)}),rT.waitFor(r).next(()=>i)}getTargetCount(e){return rT.resolve(this.targetCount)}getTargetData(e,t){let n=this.Rs.get(t)||null;return rT.resolve(n)}addMatchingKeys(e,t,n){return this.Ps.us(t,n),rT.resolve()}removeMatchingKeys(e,t,n){this.Ps.hs(t,n);let i=this.persistence.referenceDelegate,r=[];return i&&t.forEach(t=>{r.push(i.markPotentiallyOrphaned(e,t))}),rT.waitFor(r)}removeMatchingKeysForTargetId(e,t){return this.Ps.ls(t),rT.resolve()}getMatchingKeysForTargetId(e,t){let n=this.Ps.ds(t);return rT.resolve(n)}containsKey(e,t){return rT.resolve(this.Ps.containsKey(t))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aX{constructor(e,t){this.Vs={},this.overlays={},this.Ss=new rS(0),this.Ds=!1,this.Ds=!0,this.referenceDelegate=e(this),this.Cs=new aW(this),this.indexManager=new aM,this.remoteDocumentCache=new aG(e=>this.referenceDelegate.xs(e)),this.yt=new ax(t),this.Ns=new aq(this.yt)}start(){return Promise.resolve()}shutdown(){return this.Ds=!1,Promise.resolve()}get started(){return this.Ds}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new aK,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let n=this.Vs[e.toKey()];return n||(n=new az(t,this.referenceDelegate),this.Vs[e.toKey()]=n),n}getTargetCache(){return this.Cs}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ns}runTransaction(e,t,n){i3("MemoryPersistence","Starting transaction:",e);let i=new aY(this.Ss.next());return this.referenceDelegate.ks(),n(i).next(e=>this.referenceDelegate.Os(i).next(()=>e)).toPromise().then(e=>(i.raiseOnCommittedEvent(),e))}Ms(e,t){return rT.or(Object.values(this.Vs).map(n=>()=>n.containsKey(e,t)))}}class aY extends rE{constructor(e){super(),this.currentSequenceNumber=e}}class aJ{constructor(e){this.persistence=e,this.Fs=new a$,this.$s=null}static Bs(e){return new aJ(e)}get Ls(){if(this.$s)return this.$s;throw i8()}addReference(e,t,n){return this.Fs.addReference(n,t),this.Ls.delete(n.toString()),rT.resolve()}removeReference(e,t,n){return this.Fs.removeReference(n,t),this.Ls.add(n.toString()),rT.resolve()}markPotentiallyOrphaned(e,t){return this.Ls.add(t.toString()),rT.resolve()}removeTarget(e,t){this.Fs.ls(t.targetId).forEach(e=>this.Ls.add(e.toString()));let n=this.persistence.getTargetCache();return n.getMatchingKeysForTargetId(e,t.targetId).next(e=>{e.forEach(e=>this.Ls.add(e.toString()))}).next(()=>n.removeTargetData(e,t))}ks(){this.$s=new Set}Os(e){let t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return rT.forEach(this.Ls,n=>{let i=rv.fromPath(n);return this.qs(e,i).next(e=>{e||t.removeEntry(i,rf.min())})}).next(()=>(this.$s=null,t.apply(e)))}updateLimboDocument(e,t){return this.qs(e,t).next(e=>{e?this.Ls.delete(t.toString()):this.Ls.add(t.toString())})}xs(e){return 0}qs(e,t){return rT.or([()=>rT.resolve(this.Fs.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Ms(e,t)])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aZ{constructor(e,t,n,i){this.targetId=e,this.fromCache=t,this.Si=n,this.Di=i}static Ci(e,t){let n=ae(),i=ae();for(let e of t.docChanges)switch(e.type){case 0:n=n.add(e.doc.key);break;case 1:i=i.add(e.doc.key)}return new aZ(e,t.fromCache,n,i)}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class a0{constructor(){this.xi=!1}initialize(e,t){this.Ni=e,this.indexManager=t,this.xi=!0}getDocumentsMatchingQuery(e,t,n,i){return this.ki(e,t).next(r=>r||this.Oi(e,t,i,n)).next(n=>n||this.Mi(e,t))}ki(e,t){if(sw(t))return rT.resolve(null);let n=sb(t);return this.indexManager.getIndexType(e,n).next(i=>0===i?null:(null!==t.limit&&1===i&&(n=sb(t=sT(t,null,"F"))),this.indexManager.getDocumentsMatchingTarget(e,n).next(i=>{let r=ae(...i);return this.Ni.getDocuments(e,r).next(i=>this.indexManager.getMinOffset(e,n).next(n=>{let s=this.Fi(t,i);return this.$i(t,s,r,n.readTime)?this.ki(e,sT(t,null,"F")):this.Bi(e,s,t,n)}))})))}Oi(e,t,n,i){return sw(t)||i.isEqual(rf.min())?this.Mi(e,t):this.Ni.getDocuments(e,n).next(r=>{let s=this.Fi(t,r);return this.$i(t,s,n,i)?this.Mi(e,t):(i2()<=eU.DEBUG&&i3("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),sC(t)),this.Bi(e,s,t,function(e,t){let n=e.toTimestamp().seconds,i=e.toTimestamp().nanoseconds+1;return new rw(rf.fromTimestamp(1e9===i?new rd(n+1,0):new rd(n,i)),rv.empty(),-1)}(i,0)))})}Fi(e,t){let n=new sl(s_(e));return t.forEach((t,i)=>{sA(e,i)&&(n=n.add(i))}),n}$i(e,t,n,i){if(null===e.limit)return!1;if(n.size!==t.size)return!0;let r="F"===e.limitType?t.last():t.first();return!!r&&(r.hasPendingWrites||r.version.compareTo(i)>0)}Mi(e,t){return i2()<=eU.DEBUG&&i3("QueryEngine","Using full collection scan to execute query:",sC(t)),this.Ni.getDocumentsMatchingQuery(e,t,rw.min())}Bi(e,t,n,i){return this.Ni.getDocumentsMatchingQuery(e,n,i).next(e=>(t.forEach(t=>{e=e.insert(t.key,t)}),e))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class a1{constructor(e,t,n,i){this.persistence=e,this.Li=t,this.yt=i,this.qi=new ss(ru),this.Ui=new s2(e=>sg(e),sm),this.Ki=new Map,this.Gi=e.getRemoteDocumentCache(),this.Cs=e.getTargetCache(),this.Ns=e.getBundleCache(),this.Qi(n)}Qi(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new aj(this.Gi,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Gi.setIndexManager(this.indexManager),this.Li.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",t=>e.collect(t,this.qi))}}async function a2(e,t){return await e.persistence.runTransaction("Handle user change","readonly",n=>{let i;return e.mutationQueue.getAllMutationBatches(n).next(r=>(i=r,e.Qi(t),e.mutationQueue.getAllMutationBatches(n))).next(t=>{let r=[],s=[],a=ae();for(let e of i)for(let t of(r.push(e.batchId),e.mutations))a=a.add(t.key);for(let e of t)for(let t of(s.push(e.batchId),e.mutations))a=a.add(t.key);return e.localDocuments.getDocuments(n,a).next(e=>({ji:e,removedBatchIds:r,addedBatchIds:s}))})})}function a3(e){return e.persistence.runTransaction("Get last remote snapshot version","readonly",t=>e.Cs.getLastRemoteSnapshotVersion(t))}async function a4(e,t,n){let i=e.qi.get(t);try{n||await e.persistence.runTransaction("Release target",n?"readwrite":"readwrite-primary",t=>e.persistence.referenceDelegate.removeTarget(t,i))}catch(e){if(!rI(e))throw e;i3("LocalStore",`Failed to update sequence numbers for target ${t}: ${e}`)}e.qi=e.qi.remove(t),e.Ui.delete(i.target)}function a6(e,t,n){let i=rf.min(),r=ae();return e.persistence.runTransaction("Execute query","readonly",s=>(function(e,t,n){let i=e.Ui.get(n);return void 0!==i?rT.resolve(e.qi.get(i)):e.Cs.getTargetData(t,n)})(e,s,sb(t)).next(t=>{if(t)return i=t.lastLimboFreeSnapshotVersion,e.Cs.getMatchingKeysForTargetId(s,t.targetId).next(e=>{r=e})}).next(()=>e.Li.getDocumentsMatchingQuery(s,t,n?i:rf.min(),n?r:ae())).next(n=>{var i;let s;return i=t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2)),s=e.Ki.get(i)||rf.min(),n.forEach((e,t)=>{t.readTime.compareTo(s)>0&&(s=t.readTime)}),e.Ki.set(i,s),{documents:n,Hi:r}}))}class a5{constructor(){this.activeTargetIds=at}er(e){this.activeTargetIds=this.activeTargetIds.add(e)}nr(e){this.activeTargetIds=this.activeTargetIds.delete(e)}tr(){return JSON.stringify({activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()})}}class a8{constructor(){this.Lr=new a5,this.qr={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,n){}addLocalQueryTarget(e){return this.Lr.er(e),this.qr[e]||"not-current"}updateQueryState(e,t,n){this.qr[e]=t}removeLocalQueryTarget(e){this.Lr.nr(e)}isLocalQueryTarget(e){return this.Lr.activeTargetIds.has(e)}clearQueryState(e){delete this.qr[e]}getAllActiveQueryTargets(){return this.Lr.activeTargetIds}isActiveQueryTarget(e){return this.Lr.activeTargetIds.has(e)}start(){return this.Lr=new a5,Promise.resolve()}handleUserChange(e,t,n){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class a9{Ur(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class a7{constructor(){this.Kr=()=>this.Gr(),this.Qr=()=>this.jr(),this.Wr=[],this.zr()}Ur(e){this.Wr.push(e)}shutdown(){window.removeEventListener("online",this.Kr),window.removeEventListener("offline",this.Qr)}zr(){window.addEventListener("online",this.Kr),window.addEventListener("offline",this.Qr)}Gr(){for(let e of(i3("ConnectivityMonitor","Network connectivity changed: AVAILABLE"),this.Wr))e(0)}jr(){for(let e of(i3("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE"),this.Wr))e(1)}static C(){return"undefined"!=typeof window&&void 0!==window.addEventListener&&void 0!==window.removeEventListener}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oe={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ot{constructor(e){this.Hr=e.Hr,this.Jr=e.Jr}Yr(e){this.Xr=e}Zr(e){this.eo=e}onMessage(e){this.no=e}close(){this.Jr()}send(e){this.Hr(e)}so(){this.Xr()}io(e){this.eo(e)}ro(e){this.no(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class on extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;let t=e.ssl?"https":"http";this.oo=t+"://"+e.host,this.uo="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}get co(){return!1}ao(e,t,n,i,r){let s=this.ho(e,t);i3("RestConnection","Sending: ",s,n);let a={};return this.lo(a,i,r),this.fo(e,s,a,n).then(e=>(i3("RestConnection","Received: ",e),e),t=>{throw i6("RestConnection",`${e} failed with error: `,t,"url: ",s,"request:",n),t})}_o(e,t,n,i,r,s){return this.ao(e,t,n,i,r)}lo(e,t,n){e["X-Goog-Api-Client"]="gl-js/ fire/"+i0,e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach((t,n)=>e[n]=t),n&&n.headers.forEach((t,n)=>e[n]=t)}ho(e,t){let n=oe[e];return`${this.oo}/v1/${t}:${n}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams}fo(e,t,n,i){return new Promise((r,s)=>{let a=new iY;a.setWithCredentials(!0),a.listenOnce(iz.COMPLETE,()=>{try{switch(a.getLastErrorCode()){case iH.NO_ERROR:let t=a.getResponseJson();i3("Connection","XHR received:",JSON.stringify(t)),r(t);break;case iH.TIMEOUT:i3("Connection",'RPC "'+e+'" timed out'),s(new i7(i9.DEADLINE_EXCEEDED,"Request time out"));break;case iH.HTTP_ERROR:let n=a.getStatus();if(i3("Connection",'RPC "'+e+'" failed with status:',n,"response text:",a.getResponseText()),n>0){let e=a.getResponseJson();Array.isArray(e)&&(e=e[0]);let t=null==e?void 0:e.error;if(t&&t.status&&t.message){let e=function(e){let t=e.toLowerCase().replace(/_/g,"-");return Object.values(i9).indexOf(t)>=0?t:i9.UNKNOWN}(t.status);s(new i7(e,t.message))}else s(new i7(i9.UNKNOWN,"Server responded with status "+a.getStatus()))}else s(new i7(i9.UNAVAILABLE,"Connection failed."));break;default:i8()}}finally{i3("Connection",'RPC "'+e+'" completed.')}});let o=JSON.stringify(i);a.send(t,"POST",o,n,15)})}wo(e,t,n){let i=[this.oo,"/","google.firestore.v1.Firestore","/",e,"/channel"],r=iK(),s=i$(),a={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling};this.useFetchStreams&&(a.xmlHttpFactory=new iW({})),this.lo(a.initMessageHeaders,t,n),a.encodeInitMessageHeaders=!0;let o=i.join("");i3("Connection","Creating WebChannel: "+o,a);let h=r.createWebChannel(o,a),u=!1,c=!1,d=new ot({Hr:e=>{c?i3("Connection","Not sending because WebChannel is closed:",e):(u||(i3("Connection","Opening WebChannel transport."),h.open(),u=!0),i3("Connection","WebChannel sending:",e),h.send(e))},Jr:()=>h.close()}),f=(e,t,n)=>{e.listen(t,e=>{try{n(e)}catch(e){setTimeout(()=>{throw e},0)}})};return f(h,iX.EventType.OPEN,()=>{c||i3("Connection","WebChannel transport opened.")}),f(h,iX.EventType.CLOSE,()=>{c||(c=!0,i3("Connection","WebChannel transport closed"),d.io())}),f(h,iX.EventType.ERROR,e=>{c||(c=!0,i6("Connection","WebChannel transport errored:",e),d.io(new i7(i9.UNAVAILABLE,"The operation could not be completed")))}),f(h,iX.EventType.MESSAGE,e=>{var t;if(!c){let n=e.data[0];n||i8();let i=n.error||(null===(t=n[0])||void 0===t?void 0:t.error);if(i){i3("Connection","WebChannel received error:",i);let e=i.status,t=function(e){let t=l[e];if(void 0!==t)return s1(t)}(e),n=i.message;void 0===t&&(t=i9.INTERNAL,n="Unknown error status: "+e+" with message "+i.message),c=!0,d.io(new i7(t,n)),h.close()}else i3("Connection","WebChannel received:",n),d.ro(n)}}),f(s,iG.STAT_EVENT,e=>{e.stat===iQ.PROXY?i3("Connection","Detected buffering proxy"):e.stat===iQ.NOPROXY&&i3("Connection","Detected no buffering proxy")}),setTimeout(()=>{d.so()},0),d}}function oi(){return"undefined"!=typeof document?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function or(e){return new ap(e,!0)}class os{constructor(e,t,n=1e3,i=1.5,r=6e4){this.Hs=e,this.timerId=t,this.mo=n,this.yo=i,this.po=r,this.Io=0,this.To=null,this.Eo=Date.now(),this.reset()}reset(){this.Io=0}Ao(){this.Io=this.po}Ro(e){this.cancel();let t=Math.floor(this.Io+this.bo()),n=Math.max(0,Date.now()-this.Eo),i=Math.max(0,t-n);i>0&&i3("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.Io} ms, delay with jitter: ${t} ms, last attempt: ${n} ms ago)`),this.To=this.Hs.enqueueAfterDelay(this.timerId,i,()=>(this.Eo=Date.now(),e())),this.Io*=this.yo,this.Io<this.mo&&(this.Io=this.mo),this.Io>this.po&&(this.Io=this.po)}Po(){null!==this.To&&(this.To.skipDelay(),this.To=null)}cancel(){null!==this.To&&(this.To.cancel(),this.To=null)}bo(){return(Math.random()-.5)*this.Io}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oa{constructor(e,t,n,i,r,s,a,o){this.Hs=e,this.vo=n,this.Vo=i,this.connection=r,this.authCredentialsProvider=s,this.appCheckCredentialsProvider=a,this.listener=o,this.state=0,this.So=0,this.Do=null,this.Co=null,this.stream=null,this.xo=new os(e,t)}No(){return 1===this.state||5===this.state||this.ko()}ko(){return 2===this.state||3===this.state}start(){4!==this.state?this.auth():this.Oo()}async stop(){this.No()&&await this.close(0)}Mo(){this.state=0,this.xo.reset()}Fo(){this.ko()&&null===this.Do&&(this.Do=this.Hs.enqueueAfterDelay(this.vo,6e4,()=>this.$o()))}Bo(e){this.Lo(),this.stream.send(e)}async $o(){if(this.ko())return this.close(0)}Lo(){this.Do&&(this.Do.cancel(),this.Do=null)}qo(){this.Co&&(this.Co.cancel(),this.Co=null)}async close(e,t){this.Lo(),this.qo(),this.xo.cancel(),this.So++,4!==e?this.xo.reset():t&&t.code===i9.RESOURCE_EXHAUSTED?(i4(t.toString()),i4("Using maximum backoff delay to prevent overloading the backend."),this.xo.Ao()):t&&t.code===i9.UNAUTHENTICATED&&3!==this.state&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),null!==this.stream&&(this.Uo(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Zr(t)}Uo(){}auth(){this.state=1;let e=this.Ko(this.So),t=this.So;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([e,n])=>{this.So===t&&this.Go(e,n)},t=>{e(()=>{let e=new i7(i9.UNKNOWN,"Fetching auth token failed: "+t.message);return this.Qo(e)})})}Go(e,t){let n=this.Ko(this.So);this.stream=this.jo(e,t),this.stream.Yr(()=>{n(()=>(this.state=2,this.Co=this.Hs.enqueueAfterDelay(this.Vo,1e4,()=>(this.ko()&&(this.state=3),Promise.resolve())),this.listener.Yr()))}),this.stream.Zr(e=>{n(()=>this.Qo(e))}),this.stream.onMessage(e=>{n(()=>this.onMessage(e))})}Oo(){this.state=5,this.xo.Ro(async()=>{this.state=0,this.start()})}Qo(e){return i3("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}Ko(e){return t=>{this.Hs.enqueueAndForget(()=>this.So===e?t():(i3("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class oo extends oa{constructor(e,t,n,i,r,s){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,n,i,s),this.yt=r}jo(e,t){return this.connection.wo("Listen",e,t)}onMessage(e){this.xo.reset();let t=function(e,t){let n;if("targetChange"in t){var i,r;t.targetChange;let s="NO_CHANGE"===(i=t.targetChange.targetChangeType||"NO_CHANGE")?0:"ADD"===i?1:"REMOVE"===i?2:"CURRENT"===i?3:"RESET"===i?4:i8(),a=t.targetChange.targetIds||[],o=(r=t.targetChange.resumeToken,e.wt?(void 0===r||"string"==typeof r||i8(),rL.fromBase64String(r||"")):(void 0===r||r instanceof Uint8Array||i8(),rL.fromUint8Array(r||new Uint8Array))),l=t.targetChange.cause;n=new aa(s,a,o,l&&new i7(void 0===l.code?i9.UNKNOWN:s1(l.code),l.message||"")||null)}else if("documentChange"in t){t.documentChange;let i=t.documentChange;i.document,i.document.name,i.document.updateTime;let r=ab(e,i.document.name),s=ay(i.document.updateTime),a=i.document.createTime?ay(i.document.createTime):rf.min(),o=new sc({mapValue:{fields:i.document.fields}}),l=sd.newFoundDocument(r,s,a,o);n=new ar(i.targetIds||[],i.removedTargetIds||[],l.key,l)}else if("documentDelete"in t){t.documentDelete;let i=t.documentDelete;i.document;let r=ab(e,i.document),s=i.readTime?ay(i.readTime):rf.min(),a=sd.newNoDocument(r,s);n=new ar([],i.removedTargetIds||[],a.key,a)}else if("documentRemove"in t){t.documentRemove;let i=t.documentRemove;i.document;let r=ab(e,i.document);n=new ar([],i.removedTargetIds||[],r,null)}else{if(!("filter"in t))return i8();{t.filter;let e=t.filter;e.targetId;let i=new s0(e.count||0);n=new as(e.targetId,i)}}return n}(this.yt,e),n=function(e){if(!("targetChange"in e))return rf.min();let t=e.targetChange;return t.targetIds&&t.targetIds.length?rf.min():t.readTime?ay(t.readTime):rf.min()}(e);return this.listener.Wo(t,n)}zo(e){let t={};t.database=aI(this.yt),t.addTarget=function(e,t){let n;let i=t.target;return(n=sy(i)?{documents:{documents:[aT(e,i.path)]}}:{query:function(e,t){var n,i,r;let s={structuredQuery:{}},a=t.path;null!==t.collectionGroup?(s.parent=aT(e,a),s.structuredQuery.from=[{collectionId:t.collectionGroup,allDescendants:!0}]):(s.parent=aT(e,a.popLast()),s.structuredQuery.from=[{collectionId:a.lastSegment()}]);let o=function(e){if(0!==e.length)return function e(t){return t instanceof r2?function(e){if("=="===e.op){if(rQ(e.value))return{unaryFilter:{field:aA(e.field),op:"IS_NAN"}};if(rG(e.value))return{unaryFilter:{field:aA(e.field),op:"IS_NULL"}}}else if("!="===e.op){if(rQ(e.value))return{unaryFilter:{field:aA(e.field),op:"IS_NOT_NAN"}};if(rG(e.value))return{unaryFilter:{field:aA(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:aA(e.field),op:ad[e.op],value:e.value}}}(t):t instanceof r3?function(t){let n=t.getFilters().map(t=>e(t));return 1===n.length?n[0]:{compositeFilter:{op:af[t.op],filters:n}}}(t):i8()}(r3.create(e,"and"))}(t.filters);o&&(s.structuredQuery.where=o);let l=function(e){if(0!==e.length)return e.map(e=>({field:aA(e.field),direction:ac[e.dir]}))}(t.orderBy);l&&(s.structuredQuery.orderBy=l);let h=(i=t.limit,e.wt||null==i?i:{value:i});return null!==h&&(s.structuredQuery.limit=h),t.startAt&&(s.structuredQuery.startAt={before:(n=t.startAt).inclusive,values:n.position}),t.endAt&&(s.structuredQuery.endAt={before:!(r=t.endAt).inclusive,values:r.position}),s}(e,i)}).targetId=t.targetId,t.resumeToken.approximateByteSize()>0?n.resumeToken=am(e,t.resumeToken):t.snapshotVersion.compareTo(rf.min())>0&&(n.readTime=ag(e,t.snapshotVersion.toTimestamp())),n}(this.yt,e);let n=function(e,t){let n=function(e,t){switch(t){case 0:return null;case 1:return"existence-filter-mismatch";case 2:return"limbo-document";default:return i8()}}(0,t.purpose);return null==n?null:{"goog-listen-tags":n}}(this.yt,e);n&&(t.labels=n),this.Bo(t)}Ho(e){let t={};t.database=aI(this.yt),t.removeTarget=e,this.Bo(t)}}class ol extends oa{constructor(e,t,n,i,r,s){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,n,i,s),this.yt=r,this.Jo=!1}get Yo(){return this.Jo}start(){this.Jo=!1,this.lastStreamToken=void 0,super.start()}Uo(){this.Jo&&this.Xo([])}jo(e,t){return this.connection.wo("Write",e,t)}onMessage(e){var t,n;if(e.streamToken||i8(),this.lastStreamToken=e.streamToken,this.Jo){this.xo.reset();let i=(t=e.writeResults,n=e.commitTime,t&&t.length>0?(void 0!==n||i8(),t.map(e=>{let t;return(t=e.updateTime?ay(e.updateTime):ay(n)).isEqual(rf.min())&&(t=ay(n)),new sB(t,e.transformResults||[])})):[]),r=ay(e.commitTime);return this.listener.Zo(r,i)}return e.writeResults&&0!==e.writeResults.length&&i8(),this.Jo=!0,this.listener.tu()}eu(){let e={};e.database=aI(this.yt),this.Bo(e)}Xo(e){let t={streamToken:this.lastStreamToken,writes:e.map(e=>(function(e,t){var n;let i;if(t instanceof sG)i={update:aC(e,t.key,t.value)};else if(t instanceof sJ)i={delete:aE(e,t.key)};else if(t instanceof sQ)i={update:aC(e,t.key,t.data),updateMask:function(e){let t=[];return e.fields.forEach(e=>t.push(e.canonicalString())),{fieldPaths:t}}(t.fieldMask)};else{if(!(t instanceof sZ))return i8();i={verify:aE(e,t.key)}}return t.fieldTransforms.length>0&&(i.updateTransforms=t.fieldTransforms.map(e=>(function(e,t){let n=t.transform;if(n instanceof sR)return{fieldPath:t.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(n instanceof sx)return{fieldPath:t.field.canonicalString(),appendMissingElements:{values:n.elements}};if(n instanceof sM)return{fieldPath:t.field.canonicalString(),removeAllFromArray:{values:n.elements}};if(n instanceof sF)return{fieldPath:t.field.canonicalString(),increment:n.gt};throw i8()})(0,e))),t.precondition.isNone||(i.currentDocument=void 0!==(n=t.precondition).updateTime?{updateTime:ag(e,n.updateTime.toTimestamp())}:void 0!==n.exists?{exists:n.exists}:i8()),i})(this.yt,e))};this.Bo(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oh extends class{}{constructor(e,t,n,i){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=n,this.yt=i,this.nu=!1}su(){if(this.nu)throw new i7(i9.FAILED_PRECONDITION,"The client has already been terminated.")}ao(e,t,n){return this.su(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,r])=>this.connection.ao(e,t,n,i,r)).catch(e=>{throw"FirebaseError"===e.name?(e.code===i9.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),e):new i7(i9.UNKNOWN,e.toString())})}_o(e,t,n,i){return this.su(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([r,s])=>this.connection._o(e,t,n,r,s,i)).catch(e=>{throw"FirebaseError"===e.name?(e.code===i9.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),e):new i7(i9.UNKNOWN,e.toString())})}terminate(){this.nu=!0}}class ou{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.iu=0,this.ru=null,this.ou=!0}uu(){0===this.iu&&(this.cu("Unknown"),this.ru=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.ru=null,this.au("Backend didn't respond within 10 seconds."),this.cu("Offline"),Promise.resolve())))}hu(e){"Online"===this.state?this.cu("Unknown"):(this.iu++,this.iu>=1&&(this.lu(),this.au(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.cu("Offline")))}set(e){this.lu(),this.iu=0,"Online"===e&&(this.ou=!1),this.cu(e)}cu(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}au(e){let t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.ou?(i4(t),this.ou=!1):i3("OnlineStateTracker",t)}lu(){null!==this.ru&&(this.ru.cancel(),this.ru=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oc{constructor(e,t,n,i,r){this.localStore=e,this.datastore=t,this.asyncQueue=n,this.remoteSyncer={},this.fu=[],this.du=new Map,this._u=new Set,this.wu=[],this.mu=r,this.mu.Ur(e=>{n.enqueueAndForget(async()=>{oE(this)&&(i3("RemoteStore","Restarting streams for network reachability change."),await async function(e){e._u.add(4),await of(e),e.gu.set("Unknown"),e._u.delete(4),await od(e)}(this))})}),this.gu=new ou(n,i)}}async function od(e){if(oE(e))for(let t of e.wu)await t(!0)}async function of(e){for(let t of e.wu)await t(!1)}function op(e,t){e.du.has(t.targetId)||(e.du.set(t.targetId,t),ow(e)?ov(e):oM(e).ko()&&om(e,t))}function og(e,t){let n=oM(e);e.du.delete(t),n.ko()&&oy(e,t),0===e.du.size&&(n.ko()?n.Fo():oE(e)&&e.gu.set("Unknown"))}function om(e,t){e.yu.Ot(t.targetId),oM(e).zo(t)}function oy(e,t){e.yu.Ot(t),oM(e).Ho(t)}function ov(e){e.yu=new al({getRemoteKeysForTarget:t=>e.remoteSyncer.getRemoteKeysForTarget(t),ne:t=>e.du.get(t)||null}),oM(e).start(),e.gu.uu()}function ow(e){return oE(e)&&!oM(e).No()&&e.du.size>0}function oE(e){return 0===e._u.size}async function ob(e){e.du.forEach((t,n)=>{om(e,t)})}async function oT(e,t){e.yu=void 0,ow(e)?(e.gu.hu(t),ov(e)):e.gu.set("Unknown")}async function oI(e,t,n){if(e.gu.set("Online"),t instanceof aa&&2===t.state&&t.cause)try{await async function(e,t){let n=t.cause;for(let i of t.targetIds)e.du.has(i)&&(await e.remoteSyncer.rejectListen(i,n),e.du.delete(i),e.yu.removeTarget(i))}(e,t)}catch(n){i3("RemoteStore","Failed to remove targets %s: %s ",t.targetIds.join(","),n),await oS(e,n)}else if(t instanceof ar?e.yu.Kt(t):t instanceof as?e.yu.Jt(t):e.yu.jt(t),!n.isEqual(rf.min()))try{let t=await a3(e.localStore);n.compareTo(t)>=0&&await function(e,t){let n=e.yu.Zt(t);return n.targetChanges.forEach((n,i)=>{if(n.resumeToken.approximateByteSize()>0){let r=e.du.get(i);r&&e.du.set(i,r.withResumeToken(n.resumeToken,t))}}),n.targetMismatches.forEach(t=>{let n=e.du.get(t);if(!n)return;e.du.set(t,n.withResumeToken(rL.EMPTY_BYTE_STRING,n.snapshotVersion)),oy(e,t);let i=new aR(n.target,t,1,n.sequenceNumber);om(e,i)}),e.remoteSyncer.applyRemoteEvent(n)}(e,n)}catch(t){i3("RemoteStore","Failed to raise snapshot:",t),await oS(e,t)}}async function oS(e,t,n){if(!rI(t))throw t;e._u.add(1),await of(e),e.gu.set("Offline"),n||(n=()=>a3(e.localStore)),e.asyncQueue.enqueueRetryable(async()=>{i3("RemoteStore","Retrying IndexedDB access"),await n(),e._u.delete(1),await od(e)})}function oC(e,t){return t().catch(n=>oS(e,n,t))}async function oA(e){let t=oV(e),n=e.fu.length>0?e.fu[e.fu.length-1].batchId:-1;for(;oE(e)&&e.fu.length<10;)try{let i=await function(e,t){return e.persistence.runTransaction("Get next mutation batch","readonly",n=>(void 0===t&&(t=-1),e.mutationQueue.getNextMutationBatchAfterBatchId(n,t)))}(e.localStore,n);if(null===i){0===e.fu.length&&t.Fo();break}n=i.batchId,function(e,t){e.fu.push(t);let n=oV(e);n.ko()&&n.Yo&&n.Xo(t.mutations)}(e,i)}catch(t){await oS(e,t)}o_(e)&&oD(e)}function o_(e){return oE(e)&&!oV(e).No()&&e.fu.length>0}function oD(e){oV(e).start()}async function ok(e){oV(e).eu()}async function oN(e){let t=oV(e);for(let n of e.fu)t.Xo(n.mutations)}async function oL(e,t,n){let i=e.fu.shift(),r=aN.from(i,t,n);await oC(e,()=>e.remoteSyncer.applySuccessfulWrite(r)),await oA(e)}async function oR(e,t){t&&oV(e).Yo&&await async function(e,t){var n;if(function(e){switch(e){default:return i8();case i9.CANCELLED:case i9.UNKNOWN:case i9.DEADLINE_EXCEEDED:case i9.RESOURCE_EXHAUSTED:case i9.INTERNAL:case i9.UNAVAILABLE:case i9.UNAUTHENTICATED:return!1;case i9.INVALID_ARGUMENT:case i9.NOT_FOUND:case i9.ALREADY_EXISTS:case i9.PERMISSION_DENIED:case i9.FAILED_PRECONDITION:case i9.ABORTED:case i9.OUT_OF_RANGE:case i9.UNIMPLEMENTED:case i9.DATA_LOSS:return!0}}(n=t.code)&&n!==i9.ABORTED){let n=e.fu.shift();oV(e).Mo(),await oC(e,()=>e.remoteSyncer.rejectFailedWrite(n.batchId,t)),await oA(e)}}(e,t),o_(e)&&oD(e)}async function ox(e,t){e.asyncQueue.verifyOperationInProgress(),i3("RemoteStore","RemoteStore received new credentials");let n=oE(e);e._u.add(3),await of(e),n&&e.gu.set("Unknown"),await e.remoteSyncer.handleCredentialChange(t),e._u.delete(3),await od(e)}async function oO(e,t){t?(e._u.delete(2),await od(e)):t||(e._u.add(2),await of(e),e.gu.set("Unknown"))}function oM(e){var t,n,i;return e.pu||(e.pu=(t=e.datastore,n=e.asyncQueue,i={Yr:ob.bind(null,e),Zr:oT.bind(null,e),Wo:oI.bind(null,e)},t.su(),new oo(n,t.connection,t.authCredentials,t.appCheckCredentials,t.yt,i)),e.wu.push(async t=>{t?(e.pu.Mo(),ow(e)?ov(e):e.gu.set("Unknown")):(await e.pu.stop(),e.yu=void 0)})),e.pu}function oV(e){var t,n,i;return e.Iu||(e.Iu=(t=e.datastore,n=e.asyncQueue,i={Yr:ok.bind(null,e),Zr:oR.bind(null,e),tu:oN.bind(null,e),Zo:oL.bind(null,e)},t.su(),new ol(n,t.connection,t.authCredentials,t.appCheckCredentials,t.yt,i)),e.wu.push(async t=>{t?(e.Iu.Mo(),await oA(e)):(await e.Iu.stop(),e.fu.length>0&&(i3("RemoteStore",`Stopping write stream with ${e.fu.length} pending writes`),e.fu=[]))})),e.Iu}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oF{constructor(e,t,n,i,r){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=n,this.op=i,this.removalCallback=r,this.deferred=new re,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(e=>{})}static createAndSchedule(e,t,n,i,r){let s=new oF(e,t,Date.now()+n,i,r);return s.start(n),s}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){null!==this.timerHandle&&(this.clearTimeout(),this.deferred.reject(new i7(i9.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>null!==this.timerHandle?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){null!==this.timerHandle&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function oP(e,t){if(i4("AsyncQueue",`${t}: ${e}`),rI(e))return new i7(i9.UNAVAILABLE,`${t}: ${e}`);throw e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oU{constructor(e){this.comparator=e?(t,n)=>e(t,n)||rv.comparator(t.key,n.key):(e,t)=>rv.comparator(e.key,t.key),this.keyedMap=s6(),this.sortedSet=new ss(this.comparator)}static emptySet(e){return new oU(e.comparator)}has(e){return null!=this.keyedMap.get(e)}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){let t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((t,n)=>(e(t),!1))}add(e){let t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){let t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof oU)||this.size!==e.size)return!1;let t=this.sortedSet.getIterator(),n=e.sortedSet.getIterator();for(;t.hasNext();){let e=t.getNext().key,i=n.getNext().key;if(!e.isEqual(i))return!1}return!0}toString(){let e=[];return this.forEach(t=>{e.push(t.toString())}),0===e.length?"DocumentSet ()":"DocumentSet (\n  "+e.join("  \n")+"\n)"}copy(e,t){let n=new oU;return n.comparator=this.comparator,n.keyedMap=e,n.sortedSet=t,n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oB{constructor(){this.Tu=new ss(rv.comparator)}track(e){let t=e.doc.key,n=this.Tu.get(t);n?0!==e.type&&3===n.type?this.Tu=this.Tu.insert(t,e):3===e.type&&1!==n.type?this.Tu=this.Tu.insert(t,{type:n.type,doc:e.doc}):2===e.type&&2===n.type?this.Tu=this.Tu.insert(t,{type:2,doc:e.doc}):2===e.type&&0===n.type?this.Tu=this.Tu.insert(t,{type:0,doc:e.doc}):1===e.type&&0===n.type?this.Tu=this.Tu.remove(t):1===e.type&&2===n.type?this.Tu=this.Tu.insert(t,{type:1,doc:n.doc}):0===e.type&&1===n.type?this.Tu=this.Tu.insert(t,{type:2,doc:e.doc}):i8():this.Tu=this.Tu.insert(t,e)}Eu(){let e=[];return this.Tu.inorderTraversal((t,n)=>{e.push(n)}),e}}class oj{constructor(e,t,n,i,r,s,a,o,l){this.query=e,this.docs=t,this.oldDocs=n,this.docChanges=i,this.mutatedKeys=r,this.fromCache=s,this.syncStateChanged=a,this.excludesMetadataChanges=o,this.hasCachedResults=l}static fromInitialDocuments(e,t,n,i,r){let s=[];return t.forEach(e=>{s.push({type:0,doc:e})}),new oj(e,t,oU.emptySet(t),s,n,i,!0,!1,r)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&sI(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;let t=this.docChanges,n=e.docChanges;if(t.length!==n.length)return!1;for(let e=0;e<t.length;e++)if(t[e].type!==n[e].type||!t[e].doc.isEqual(n[e].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oq{constructor(){this.Au=void 0,this.listeners=[]}}class oK{constructor(){this.queries=new s2(e=>sS(e),sI),this.onlineState="Unknown",this.Ru=new Set}}async function o$(e,t){let n=t.query,i=!1,r=e.queries.get(n);if(r||(i=!0,r=new oq),i)try{r.Au=await e.onListen(n)}catch(n){let e=oP(n,`Initialization of query '${sC(t.query)}' failed`);return void t.onError(e)}e.queries.set(n,r),r.listeners.push(t),t.bu(e.onlineState),r.Au&&t.Pu(r.Au)&&oQ(e)}async function oH(e,t){let n=t.query,i=!1,r=e.queries.get(n);if(r){let e=r.listeners.indexOf(t);e>=0&&(r.listeners.splice(e,1),i=0===r.listeners.length)}if(i)return e.queries.delete(n),e.onUnlisten(n)}function oz(e,t){let n=!1;for(let i of t){let t=i.query,r=e.queries.get(t);if(r){for(let e of r.listeners)e.Pu(i)&&(n=!0);r.Au=i}}n&&oQ(e)}function oG(e,t,n){let i=e.queries.get(t);if(i)for(let e of i.listeners)e.onError(n);e.queries.delete(t)}function oQ(e){e.Ru.forEach(e=>{e.next()})}class oW{constructor(e,t,n){this.query=e,this.vu=t,this.Vu=!1,this.Su=null,this.onlineState="Unknown",this.options=n||{}}Pu(e){if(!this.options.includeMetadataChanges){let t=[];for(let n of e.docChanges)3!==n.type&&t.push(n);e=new oj(e.query,e.docs,e.oldDocs,t,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.Vu?this.Du(e)&&(this.vu.next(e),t=!0):this.Cu(e,this.onlineState)&&(this.xu(e),t=!0),this.Su=e,t}onError(e){this.vu.error(e)}bu(e){this.onlineState=e;let t=!1;return this.Su&&!this.Vu&&this.Cu(this.Su,e)&&(this.xu(this.Su),t=!0),t}Cu(e,t){return!e.fromCache||(!this.options.Nu||!("Offline"!==t))&&(!e.docs.isEmpty()||e.hasCachedResults||"Offline"===t)}Du(e){if(e.docChanges.length>0)return!0;let t=this.Su&&this.Su.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&!0===this.options.includeMetadataChanges}xu(e){e=oj.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Vu=!0,this.vu.next(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oX{constructor(e){this.key=e}}class oY{constructor(e){this.key=e}}class oJ{constructor(e,t){this.query=e,this.qu=t,this.Uu=null,this.hasCachedResults=!1,this.current=!1,this.Ku=ae(),this.mutatedKeys=ae(),this.Gu=s_(e),this.Qu=new oU(this.Gu)}get ju(){return this.qu}Wu(e,t){let n=t?t.zu:new oB,i=t?t.Qu:this.Qu,r=t?t.mutatedKeys:this.mutatedKeys,s=i,a=!1,o="F"===this.query.limitType&&i.size===this.query.limit?i.last():null,l="L"===this.query.limitType&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((e,t)=>{let h=i.get(e),u=sA(this.query,t)?t:null,c=!!h&&this.mutatedKeys.has(h.key),d=!!u&&(u.hasLocalMutations||this.mutatedKeys.has(u.key)&&u.hasCommittedMutations),f=!1;h&&u?h.data.isEqual(u.data)?c!==d&&(n.track({type:3,doc:u}),f=!0):this.Hu(h,u)||(n.track({type:2,doc:u}),f=!0,(o&&this.Gu(u,o)>0||l&&0>this.Gu(u,l))&&(a=!0)):!h&&u?(n.track({type:0,doc:u}),f=!0):h&&!u&&(n.track({type:1,doc:h}),f=!0,(o||l)&&(a=!0)),f&&(u?(s=s.add(u),r=d?r.add(e):r.delete(e)):(s=s.delete(e),r=r.delete(e)))}),null!==this.query.limit)for(;s.size>this.query.limit;){let e="F"===this.query.limitType?s.last():s.first();s=s.delete(e.key),r=r.delete(e.key),n.track({type:1,doc:e})}return{Qu:s,zu:n,$i:a,mutatedKeys:r}}Hu(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,n){let i=this.Qu;this.Qu=e.Qu,this.mutatedKeys=e.mutatedKeys;let r=e.zu.Eu();r.sort((e,t)=>(function(e,t){let n=e=>{switch(e){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return i8()}};return n(e)-n(t)})(e.type,t.type)||this.Gu(e.doc,t.doc)),this.Ju(n);let s=t?this.Yu():[],a=0===this.Ku.size&&this.current?1:0,o=a!==this.Uu;return(this.Uu=a,0!==r.length||o)?{snapshot:new oj(this.query,e.Qu,i,r,e.mutatedKeys,0===a,o,!1,!!n&&n.resumeToken.approximateByteSize()>0),Xu:s}:{Xu:s}}bu(e){return this.current&&"Offline"===e?(this.current=!1,this.applyChanges({Qu:this.Qu,zu:new oB,mutatedKeys:this.mutatedKeys,$i:!1},!1)):{Xu:[]}}Zu(e){return!this.qu.has(e)&&!!this.Qu.has(e)&&!this.Qu.get(e).hasLocalMutations}Ju(e){e&&(e.addedDocuments.forEach(e=>this.qu=this.qu.add(e)),e.modifiedDocuments.forEach(e=>{}),e.removedDocuments.forEach(e=>this.qu=this.qu.delete(e)),this.current=e.current)}Yu(){if(!this.current)return[];let e=this.Ku;this.Ku=ae(),this.Qu.forEach(e=>{this.Zu(e.key)&&(this.Ku=this.Ku.add(e.key))});let t=[];return e.forEach(e=>{this.Ku.has(e)||t.push(new oY(e))}),this.Ku.forEach(n=>{e.has(n)||t.push(new oX(n))}),t}tc(e){this.qu=e.Hi,this.Ku=ae();let t=this.Wu(e.documents);return this.applyChanges(t,!0)}ec(){return oj.fromInitialDocuments(this.query,this.Qu,this.mutatedKeys,0===this.Uu,this.hasCachedResults)}}class oZ{constructor(e,t,n){this.query=e,this.targetId=t,this.view=n}}class o0{constructor(e){this.key=e,this.nc=!1}}class o1{constructor(e,t,n,i,r,s){this.localStore=e,this.remoteStore=t,this.eventManager=n,this.sharedClientState=i,this.currentUser=r,this.maxConcurrentLimboResolutions=s,this.sc={},this.ic=new s2(e=>sS(e),sI),this.rc=new Map,this.oc=new Set,this.uc=new ss(rv.comparator),this.cc=new Map,this.ac=new a$,this.hc={},this.lc=new Map,this.fc=aP.vn(),this.onlineState="Unknown",this.dc=void 0}get isPrimaryClient(){return!0===this.dc}}async function o2(e,t){var n,i;let r,s;let a=(e.remoteStore.remoteSyncer.applyRemoteEvent=o5.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=lh.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=o9.bind(null,e),e.sc.Wo=oz.bind(null,e.eventManager),e.sc.wc=oG.bind(null,e.eventManager),e),o=a.ic.get(t);if(o)r=o.targetId,a.sharedClientState.addLocalQueryTarget(r),s=o.view.ec();else{let e=await (n=a.localStore,i=sb(t),n.persistence.runTransaction("Allocate target","readwrite",e=>{let t;return n.Cs.getTargetData(e,i).next(r=>r?(t=r,rT.resolve(t)):n.Cs.allocateTargetId(e).next(r=>(t=new aR(i,r,0,e.currentSequenceNumber),n.Cs.addTargetData(e,t).next(()=>t))))}).then(e=>{let t=n.qi.get(e.targetId);return(null===t||e.snapshotVersion.compareTo(t.snapshotVersion)>0)&&(n.qi=n.qi.insert(e.targetId,e),n.Ui.set(i,e.targetId)),e}));a.isPrimaryClient&&op(a.remoteStore,e);let o=a.sharedClientState.addLocalQueryTarget(e.targetId);r=e.targetId,s=await o3(a,t,r,"current"===o,e.resumeToken)}return s}async function o3(e,t,n,i,r){e._c=(t,n,i)=>(async function(e,t,n,i){let r=t.view.Wu(n);r.$i&&(r=await a6(e.localStore,t.query,!1).then(({documents:e})=>t.view.Wu(e,r)));let s=i&&i.targetChanges.get(t.targetId),a=t.view.applyChanges(r,e.isPrimaryClient,s);return ls(e,t.targetId,a.Xu),a.snapshot})(e,t,n,i);let s=await a6(e.localStore,t,!0),a=new oJ(t,s.Hi),o=a.Wu(s.documents),l=ai.createSynthesizedTargetChangeForCurrentChange(n,i&&"Offline"!==e.onlineState,r),h=a.applyChanges(o,e.isPrimaryClient,l);ls(e,n,h.Xu);let u=new oZ(t,n,a);return e.ic.set(t,u),e.rc.has(n)?e.rc.get(n).push(t):e.rc.set(n,[t]),h.snapshot}async function o4(e,t){let n=e.ic.get(t),i=e.rc.get(n.targetId);if(i.length>1)return e.rc.set(n.targetId,i.filter(e=>!sI(e,t))),void e.ic.delete(t);e.isPrimaryClient?(e.sharedClientState.removeLocalQueryTarget(n.targetId),e.sharedClientState.isActiveQueryTarget(n.targetId)||await a4(e.localStore,n.targetId,!1).then(()=>{e.sharedClientState.clearQueryState(n.targetId),og(e.remoteStore,n.targetId),li(e,n.targetId)}).catch(rb)):(li(e,n.targetId),await a4(e.localStore,n.targetId,!0))}async function o6(e,t,n){var i;let r=(e.remoteStore.remoteSyncer.applySuccessfulWrite=o7.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=le.bind(null,e),e);try{let e;let s=await function(e,t){let n,i;let r=rd.now(),s=t.reduce((e,t)=>e.add(t.key),ae());return e.persistence.runTransaction("Locally write mutations","readwrite",a=>{let o=s3,l=ae();return e.Gi.getEntries(a,s).next(e=>{(o=e).forEach((e,t)=>{t.isValidDocument()||(l=l.add(e))})}).next(()=>e.localDocuments.getOverlayedDocuments(a,o)).next(i=>{n=i;let s=[];for(let e of t){let t=function(e,t){let n=null;for(let i of e.fieldTransforms){let e=t.data.field(i.field),r=sL(i.transform,e||null);null!=r&&(null===n&&(n=sc.empty()),n.set(i.field,r))}return n||null}(e,n.get(e.key).overlayedDocument);null!=t&&s.push(new sQ(e.key,t,function e(t){let n=[];return rD(t.fields,(t,i)=>{let r=new ry([t]);if(rW(i)){let t=e(i.mapValue).fields;if(0===t.length)n.push(r);else for(let e of t)n.push(r.child(e))}else n.push(r)}),new su(n)}(t.value.mapValue),sj.exists(!0)))}return e.mutationQueue.addMutationBatch(a,r,s,t)}).next(t=>{i=t;let r=t.applyToLocalDocumentSet(n,l);return e.documentOverlayCache.saveOverlays(a,t.batchId,r)})}).then(()=>({batchId:i.batchId,changes:s5(n)}))}(r.localStore,t);r.sharedClientState.addPendingMutation(s.batchId),i=s.batchId,(e=r.hc[r.currentUser.toKey()])||(e=new ss(ru)),e=e.insert(i,n),r.hc[r.currentUser.toKey()]=e,await lo(r,s.changes),await oA(r.remoteStore)}catch(t){let e=oP(t,"Failed to persist write");n.reject(e)}}async function o5(e,t){try{let n=await function(e,t){let n=t.snapshotVersion,i=e.qi;return e.persistence.runTransaction("Apply remote event","readwrite-primary",r=>{var s;let a,o;let l=e.Gi.newChangeBuffer({trackRemovals:!0});i=e.qi;let h=[];t.targetChanges.forEach((s,a)=>{var o;let l=i.get(a);if(!l)return;h.push(e.Cs.removeMatchingKeys(r,s.removedDocuments,a).next(()=>e.Cs.addMatchingKeys(r,s.addedDocuments,a)));let u=l.withSequenceNumber(r.currentSequenceNumber);t.targetMismatches.has(a)?u=u.withResumeToken(rL.EMPTY_BYTE_STRING,rf.min()).withLastLimboFreeSnapshotVersion(rf.min()):s.resumeToken.approximateByteSize()>0&&(u=u.withResumeToken(s.resumeToken,n)),i=i.insert(a,u),o=u,(0===l.resumeToken.approximateByteSize()||o.snapshotVersion.toMicroseconds()-l.snapshotVersion.toMicroseconds()>=3e8||s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size>0)&&h.push(e.Cs.updateTargetData(r,u))});let u=s3,c=ae();if(t.documentUpdates.forEach(n=>{t.resolvedLimboDocuments.has(n)&&h.push(e.persistence.referenceDelegate.updateLimboDocument(r,n))}),h.push((s=t.documentUpdates,a=ae(),o=ae(),s.forEach(e=>a=a.add(e)),l.getEntries(r,a).next(e=>{let t=s3;return s.forEach((n,i)=>{let r=e.get(n);i.isFoundDocument()!==r.isFoundDocument()&&(o=o.add(n)),i.isNoDocument()&&i.version.isEqual(rf.min())?(l.removeEntry(n,i.readTime),t=t.insert(n,i)):!r.isValidDocument()||i.version.compareTo(r.version)>0||0===i.version.compareTo(r.version)&&r.hasPendingWrites?(l.addEntry(i),t=t.insert(n,i)):i3("LocalStore","Ignoring outdated watch update for ",n,". Current version:",r.version," Watch version:",i.version)}),{Wi:t,zi:o}})).next(e=>{u=e.Wi,c=e.zi})),!n.isEqual(rf.min())){let t=e.Cs.getLastRemoteSnapshotVersion(r).next(t=>e.Cs.setTargetsMetadata(r,r.currentSequenceNumber,n));h.push(t)}return rT.waitFor(h).next(()=>l.apply(r)).next(()=>e.localDocuments.getLocalViewOfDocuments(r,u,c)).next(()=>u)}).then(t=>(e.qi=i,t))}(e.localStore,t);t.targetChanges.forEach((t,n)=>{let i=e.cc.get(n);i&&(t.addedDocuments.size+t.modifiedDocuments.size+t.removedDocuments.size<=1||i8(),t.addedDocuments.size>0?i.nc=!0:t.modifiedDocuments.size>0?i.nc||i8():t.removedDocuments.size>0&&(i.nc||i8(),i.nc=!1))}),await lo(e,n,t)}catch(e){await rb(e)}}function o8(e,t,n){var i;if(e.isPrimaryClient&&0===n||!e.isPrimaryClient&&1===n){let n;let r=[];e.ic.forEach((e,n)=>{let i=n.view.bu(t);i.snapshot&&r.push(i.snapshot)}),(i=e.eventManager).onlineState=t,n=!1,i.queries.forEach((e,i)=>{for(let e of i.listeners)e.bu(t)&&(n=!0)}),n&&oQ(i),r.length&&e.sc.Wo(r),e.onlineState=t,e.isPrimaryClient&&e.sharedClientState.setOnlineState(t)}}async function o9(e,t,n){e.sharedClientState.updateQueryState(t,"rejected",n);let i=e.cc.get(t),r=i&&i.key;if(r){let n=new ss(rv.comparator);n=n.insert(r,sd.newNoDocument(r,rf.min()));let i=ae().add(r),s=new an(rf.min(),new Map,new sl(ru),n,i);await o5(e,s),e.uc=e.uc.remove(r),e.cc.delete(t),la(e)}else await a4(e.localStore,t,!1).then(()=>li(e,t,n)).catch(rb)}async function o7(e,t){var n;let i=t.batch.batchId;try{let r=await (n=e.localStore).persistence.runTransaction("Acknowledge batch","readwrite-primary",e=>{let i=t.batch.keys(),r=n.Gi.newChangeBuffer({trackRemovals:!0});return(function(e,t,n,i){let r=n.batch,s=r.keys(),a=rT.resolve();return s.forEach(e=>{a=a.next(()=>i.getEntry(t,e)).next(t=>{let s=n.docVersions.get(e);null!==s||i8(),0>t.version.compareTo(s)&&(r.applyToRemoteDocument(t,n),t.isValidDocument()&&(t.setReadTime(n.commitVersion),i.addEntry(t)))})}),a.next(()=>e.mutationQueue.removeMutationBatch(t,r))})(n,e,t,r).next(()=>r.apply(e)).next(()=>n.mutationQueue.performConsistencyCheck(e)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(e,i,t.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(e,function(e){let t=ae();for(let n=0;n<e.mutationResults.length;++n)e.mutationResults[n].transformResults.length>0&&(t=t.add(e.batch.mutations[n].key));return t}(t))).next(()=>n.localDocuments.getDocuments(e,i))});ln(e,i,null),lt(e,i),e.sharedClientState.updateMutationState(i,"acknowledged"),await lo(e,r)}catch(e){await rb(e)}}async function le(e,t,n){var i;try{let r=await (i=e.localStore).persistence.runTransaction("Reject batch","readwrite-primary",e=>{let n;return i.mutationQueue.lookupMutationBatch(e,t).next(t=>(null!==t||i8(),n=t.keys(),i.mutationQueue.removeMutationBatch(e,t))).next(()=>i.mutationQueue.performConsistencyCheck(e)).next(()=>i.documentOverlayCache.removeOverlaysForBatchId(e,n,t)).next(()=>i.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(e,n)).next(()=>i.localDocuments.getDocuments(e,n))});ln(e,t,n),lt(e,t),e.sharedClientState.updateMutationState(t,"rejected",n),await lo(e,r)}catch(e){await rb(e)}}function lt(e,t){(e.lc.get(t)||[]).forEach(e=>{e.resolve()}),e.lc.delete(t)}function ln(e,t,n){let i=e.hc[e.currentUser.toKey()];if(i){let r=i.get(t);r&&(n?r.reject(n):r.resolve(),i=i.remove(t)),e.hc[e.currentUser.toKey()]=i}}function li(e,t,n=null){for(let i of(e.sharedClientState.removeLocalQueryTarget(t),e.rc.get(t)))e.ic.delete(i),n&&e.sc.wc(i,n);e.rc.delete(t),e.isPrimaryClient&&e.ac.ls(t).forEach(t=>{e.ac.containsKey(t)||lr(e,t)})}function lr(e,t){e.oc.delete(t.path.canonicalString());let n=e.uc.get(t);null!==n&&(og(e.remoteStore,n),e.uc=e.uc.remove(t),e.cc.delete(n),la(e))}function ls(e,t,n){for(let i of n)i instanceof oX?(e.ac.addReference(i.key,t),function(e,t){let n=t.key,i=n.path.canonicalString();e.uc.get(n)||e.oc.has(i)||(i3("SyncEngine","New document in limbo: "+n),e.oc.add(i),la(e))}(e,i)):i instanceof oY?(i3("SyncEngine","Document no longer in limbo: "+i.key),e.ac.removeReference(i.key,t),e.ac.containsKey(i.key)||lr(e,i.key)):i8()}function la(e){for(;e.oc.size>0&&e.uc.size<e.maxConcurrentLimboResolutions;){let t=e.oc.values().next().value;e.oc.delete(t);let n=new rv(rg.fromString(t)),i=e.fc.next();e.cc.set(i,new o0(n)),e.uc=e.uc.insert(n,i),op(e.remoteStore,new aR(sb(new sv(n.path)),i,2,rS.at))}}async function lo(e,t,n){let i=[],r=[],s=[];e.ic.isEmpty()||(e.ic.forEach((a,o)=>{s.push(e._c(o,t,n).then(t=>{if((t||n)&&e.isPrimaryClient&&e.sharedClientState.updateQueryState(o.targetId,(null==t?void 0:t.fromCache)?"not-current":"current"),t){i.push(t);let e=aZ.Ci(o.targetId,t);r.push(e)}}))}),await Promise.all(s),e.sc.Wo(i),await async function(e,t){try{await e.persistence.runTransaction("notifyLocalViewChanges","readwrite",n=>rT.forEach(t,t=>rT.forEach(t.Si,i=>e.persistence.referenceDelegate.addReference(n,t.targetId,i)).next(()=>rT.forEach(t.Di,i=>e.persistence.referenceDelegate.removeReference(n,t.targetId,i)))))}catch(e){if(!rI(e))throw e;i3("LocalStore","Failed to update sequence numbers: "+e)}for(let n of t){let t=n.targetId;if(!n.fromCache){let n=e.qi.get(t),i=n.snapshotVersion,r=n.withLastLimboFreeSnapshotVersion(i);e.qi=e.qi.insert(t,r)}}}(e.localStore,r))}async function ll(e,t){var n;if(!e.currentUser.isEqual(t)){i3("SyncEngine","User change. New user:",t.toKey());let i=await a2(e.localStore,t);e.currentUser=t,n="'waitForPendingWrites' promise is rejected due to a user change.",e.lc.forEach(e=>{e.forEach(e=>{e.reject(new i7(i9.CANCELLED,n))})}),e.lc.clear(),e.sharedClientState.handleUserChange(t,i.removedBatchIds,i.addedBatchIds),await lo(e,i.ji)}}function lh(e,t){let n=e.cc.get(t);if(n&&n.nc)return ae().add(n.key);{let n=ae(),i=e.rc.get(t);if(!i)return n;for(let t of i){let i=e.ic.get(t);n=n.unionWith(i.view.ju)}return n}}class lu{constructor(){this.synchronizeTabs=!1}async initialize(e){this.yt=or(e.databaseInfo.databaseId),this.sharedClientState=this.gc(e),this.persistence=this.yc(e),await this.persistence.start(),this.localStore=this.Ic(e),this.gcScheduler=this.Tc(e,this.localStore),this.indexBackfillerScheduler=this.Ec(e,this.localStore)}Tc(e,t){return null}Ec(e,t){return null}Ic(e){var t;return t=this.persistence,new a1(t,new a0,e.initialUser,this.yt)}yc(e){return new aX(aJ.Bs,this.yt)}gc(e){return new a8}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class lc{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=e=>o8(this.syncEngine,e,1),this.remoteStore.remoteSyncer.handleCredentialChange=ll.bind(null,this.syncEngine),await oO(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return new oK}createDatastore(e){let t=or(e.databaseInfo.databaseId),n=new on(e.databaseInfo);return new oh(e.authCredentials,e.appCheckCredentials,n,t)}createRemoteStore(e){var t;return t=this.localStore,new oc(t,this.datastore,e.asyncQueue,e=>o8(this.syncEngine,e,0),a7.C()?new a7:new a9)}createSyncEngine(e,t){return function(e,t,n,i,r,s,a){let o=new o1(e,t,n,i,r,s);return a&&(o.dc=!0),o}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}terminate(){return async function(e){i3("RemoteStore","RemoteStore shutting down."),e._u.add(5),await of(e),e.mu.shutdown(),e.gu.set("Unknown")}(this.remoteStore)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ld(e,t,n){if(!n)throw new i7(i9.INVALID_ARGUMENT,`Function ${e}() cannot be called with an empty ${t}.`)}function lf(e){if(!rv.isDocumentKey(e))throw new i7(i9.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${e} has ${e.length}.`)}function lp(e){if(rv.isDocumentKey(e))throw new i7(i9.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${e} has ${e.length}.`)}function lg(e){if(void 0===e)return"undefined";if(null===e)return"null";if("string"==typeof e)return e.length>20&&(e=`${e.substring(0,20)}...`),JSON.stringify(e);if("number"==typeof e||"boolean"==typeof e)return""+e;if("object"==typeof e){if(e instanceof Array)return"an array";{var t;let n=(t=e).constructor?t.constructor.name:null;return n?`a custom ${n} object`:"an object"}}return"function"==typeof e?"a function":i8()}function lm(e,t){if("_delegate"in e&&(e=e._delegate),!(e instanceof t)){if(t.name===e.constructor.name)throw new i7(i9.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{let n=lg(e);throw new i7(i9.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${n}`)}}return e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ly=new Map;class lv{constructor(e){var t;if(void 0===e.host){if(void 0!==e.ssl)throw new i7(i9.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=null===(t=e.ssl)||void 0===t||t;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,void 0===e.cacheSizeBytes)this.cacheSizeBytes=0x2800000;else{if(-1!==e.cacheSizeBytes&&e.cacheSizeBytes<1048576)throw new i7(i9.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.useFetchStreams=!!e.useFetchStreams,function(e,t,n,i){if(!0===t&&!0===i)throw new i7(i9.INVALID_ARGUMENT,`${e} and ${n} cannot be used together.`)}("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling)}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lw{constructor(e,t,n,i){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=n,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new lv({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new i7(i9.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return void 0!==this._terminateTask}_setSettings(e){if(this._settingsFrozen)throw new i7(i9.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new lv(e),void 0!==e.credentials&&(this._authCredentials=function(e){if(!e)return new rn;switch(e.type){case"gapi":return new ra(e.client,e.sessionIndex||"0",e.iamToken||null,e.authTokenFactory||null);case"provider":return e.client;default:throw new i7(i9.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){let t=ly.get(e);t&&(i3("ComponentProvider","Removing Datastore"),ly.delete(e),t.terminate())}(this),Promise.resolve()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lE{constructor(e,t,n){this.converter=t,this._key=n,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new lT(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new lE(this.firestore,e,this._key)}}class lb{constructor(e,t,n){this.converter=t,this._query=n,this.type="query",this.firestore=e}withConverter(e){return new lb(this.firestore,e,this._query)}}class lT extends lb{constructor(e,t,n){super(e,t,new sv(n)),this._path=n,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){let e=this._path.popLast();return e.isEmpty()?null:new lE(this.firestore,null,new rv(e))}withConverter(e){return new lT(this.firestore,e,this._path)}}function lI(e,t,...n){if(e=q(e),ld("collection","path",t),e instanceof lw){let i=rg.fromString(t,...n);return lp(i),new lT(e,null,i)}{if(!(e instanceof lE||e instanceof lT))throw new i7(i9.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");let i=e._path.child(rg.fromString(t,...n));return lp(i),new lT(e.firestore,null,i)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lS{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.Rc(this.observer.next,e)}error(e){this.observer.error?this.Rc(this.observer.error,e):i4("Uncaught Error in snapshot listener:",e.toString())}bc(){this.muted=!0}Rc(e,t){this.muted||setTimeout(()=>{this.muted||e(t)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lC{constructor(e,t,n,i){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=n,this.databaseInfo=i,this.user=iZ.UNAUTHENTICATED,this.clientId=rh.R(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(n,async e=>{i3("FirestoreClient","Received user=",e.uid),await this.authCredentialListener(e),this.user=e}),this.appCheckCredentials.start(n,e=>(i3("FirestoreClient","Received new app check token=",e),this.appCheckCredentialListener(e,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new i7(i9.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();let e=new re;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this.onlineComponents&&await this.onlineComponents.terminate(),this.offlineComponents&&await this.offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){let t=oP(n,"Failed to shutdown persistence");e.reject(t)}}),e.promise}}async function lA(e,t){e.asyncQueue.verifyOperationInProgress(),i3("FirestoreClient","Initializing OfflineComponentProvider");let n=await e.getConfiguration();await t.initialize(n);let i=n.initialUser;e.setCredentialChangeListener(async e=>{i.isEqual(e)||(await a2(t.localStore,e),i=e)}),t.persistence.setDatabaseDeletedListener(()=>e.terminate()),e.offlineComponents=t}async function l_(e,t){e.asyncQueue.verifyOperationInProgress();let n=await lD(e);i3("FirestoreClient","Initializing OnlineComponentProvider");let i=await e.getConfiguration();await t.initialize(n,i),e.setCredentialChangeListener(e=>ox(t.remoteStore,e)),e.setAppCheckTokenChangeListener((e,n)=>ox(t.remoteStore,n)),e.onlineComponents=t}async function lD(e){return e.offlineComponents||(i3("FirestoreClient","Using default OfflineComponentProvider"),await lA(e,new lu)),e.offlineComponents}async function lk(e){return e.onlineComponents||(i3("FirestoreClient","Using default OnlineComponentProvider"),await l_(e,new lc)),e.onlineComponents}async function lN(e){let t=await lk(e),n=t.eventManager;return n.onListen=o2.bind(null,t.syncEngine),n.onUnlisten=o4.bind(null,t.syncEngine),n}class lL{constructor(){this.Bc=Promise.resolve(),this.Lc=[],this.qc=!1,this.Uc=[],this.Kc=null,this.Gc=!1,this.Qc=!1,this.jc=[],this.xo=new os(this,"async_queue_retry"),this.Wc=()=>{let e=oi();e&&i3("AsyncQueue","Visibility state changed to "+e.visibilityState),this.xo.Po()};let e=oi();e&&"function"==typeof e.addEventListener&&e.addEventListener("visibilitychange",this.Wc)}get isShuttingDown(){return this.qc}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.zc(),this.Hc(e)}enterRestrictedMode(e){if(!this.qc){this.qc=!0,this.Qc=e||!1;let t=oi();t&&"function"==typeof t.removeEventListener&&t.removeEventListener("visibilitychange",this.Wc)}}enqueue(e){if(this.zc(),this.qc)return new Promise(()=>{});let t=new re;return this.Hc(()=>this.qc&&this.Qc?Promise.resolve():(e().then(t.resolve,t.reject),t.promise)).then(()=>t.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Lc.push(e),this.Jc()))}async Jc(){if(0!==this.Lc.length){try{await this.Lc[0](),this.Lc.shift(),this.xo.reset()}catch(e){if(!rI(e))throw e;i3("AsyncQueue","Operation failed with retryable error: "+e)}this.Lc.length>0&&this.xo.Ro(()=>this.Jc())}}Hc(e){let t=this.Bc.then(()=>(this.Gc=!0,e().catch(e=>{let t;throw this.Kc=e,this.Gc=!1,i4("INTERNAL UNHANDLED ERROR: ",(t=e.message||"",e.stack&&(t=e.stack.includes(e.message)?e.stack:e.message+"\n"+e.stack),t)),e}).then(e=>(this.Gc=!1,e))));return this.Bc=t,t}enqueueAfterDelay(e,t,n){this.zc(),this.jc.indexOf(e)>-1&&(t=0);let i=oF.createAndSchedule(this,e,t,n,e=>this.Yc(e));return this.Uc.push(i),i}zc(){this.Kc&&i8()}verifyOperationInProgress(){}async Xc(){let e;do e=this.Bc,await e;while(e!==this.Bc)}Zc(e){for(let t of this.Uc)if(t.timerId===e)return!0;return!1}ta(e){return this.Xc().then(()=>{for(let t of(this.Uc.sort((e,t)=>e.targetTimeMs-t.targetTimeMs),this.Uc))if(t.skipDelay(),"all"!==e&&t.timerId===e)break;return this.Xc()})}ea(e){this.jc.push(e)}Yc(e){let t=this.Uc.indexOf(e);this.Uc.splice(t,1)}}class lR extends lw{constructor(e,t,n,i){super(e,t,n,i),this.type="firestore",this._queue=new lL,this._persistenceKey=(null==i?void 0:i.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||lO(this),this._firestoreClient.terminate()}}function lx(e){return e._firestoreClient||lO(e),e._firestoreClient.verifyNotTerminated(),e._firestoreClient}function lO(e){var t,n;let i=e._freezeSettings(),r=(n=e._databaseId,new rC(n,(null===(t=e._app)||void 0===t?void 0:t.options.appId)||"",e._persistenceKey,i.host,i.ssl,i.experimentalForceLongPolling,i.experimentalAutoDetectLongPolling,i.useFetchStreams));e._firestoreClient=new lC(e._authCredentials,e._appCheckCredentials,e._queue,r)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lM{constructor(e){this._byteString=e}static fromBase64String(e){try{return new lM(rL.fromBase64String(e))}catch(e){throw new i7(i9.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+e)}}static fromUint8Array(e){return new lM(rL.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lV{constructor(...e){for(let t=0;t<e.length;++t)if(0===e[t].length)throw new i7(i9.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new ry(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lF{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lP{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new i7(i9.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new i7(i9.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return ru(this._lat,e._lat)||ru(this._long,e._long)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lU=/^__.*__$/;class lB{constructor(e,t,n){this.data=e,this.fieldMask=t,this.fieldTransforms=n}toMutation(e,t){return null!==this.fieldMask?new sQ(e,this.data,this.fieldMask,t,this.fieldTransforms):new sG(e,this.data,t,this.fieldTransforms)}}function lj(e){switch(e){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw i8()}}class lq{constructor(e,t,n,i,r,s){this.settings=e,this.databaseId=t,this.yt=n,this.ignoreUndefinedProperties=i,void 0===r&&this.na(),this.fieldTransforms=r||[],this.fieldMask=s||[]}get path(){return this.settings.path}get sa(){return this.settings.sa}ia(e){return new lq(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.yt,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}ra(e){var t;let n=null===(t=this.path)||void 0===t?void 0:t.child(e),i=this.ia({path:n,oa:!1});return i.ua(e),i}ca(e){var t;let n=null===(t=this.path)||void 0===t?void 0:t.child(e),i=this.ia({path:n,oa:!1});return i.na(),i}aa(e){return this.ia({path:void 0,oa:!0})}ha(e){return lQ(e,this.settings.methodName,this.settings.la||!1,this.path,this.settings.fa)}contains(e){return void 0!==this.fieldMask.find(t=>e.isPrefixOf(t))||void 0!==this.fieldTransforms.find(t=>e.isPrefixOf(t.field))}na(){if(this.path)for(let e=0;e<this.path.length;e++)this.ua(this.path.get(e))}ua(e){if(0===e.length)throw this.ha("Document fields must not be empty");if(lj(this.sa)&&lU.test(e))throw this.ha('Document fields cannot begin and end with "__"')}}class lK{constructor(e,t,n){this.databaseId=e,this.ignoreUndefinedProperties=t,this.yt=n||or(e)}da(e,t,n,i=!1){return new lq({sa:e,methodName:t,fa:n,path:ry.emptyPath(),oa:!1,la:i},this.databaseId,this.yt,this.ignoreUndefinedProperties)}}function l$(e){return!("object"!=typeof e||null===e||e instanceof Array||e instanceof Date||e instanceof rd||e instanceof lP||e instanceof lM||e instanceof lE||e instanceof lF)}function lH(e,t,n){if(!l$(n)||!("object"==typeof n&&null!==n&&(Object.getPrototypeOf(n)===Object.prototype||null===Object.getPrototypeOf(n)))){let i=lg(n);throw"an object"===i?t.ha(e+" a custom object"):t.ha(e+" "+i)}}const lz=RegExp("[~\\*/\\[\\]]");function lG(e,t,n){if(t.search(lz)>=0)throw lQ(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,e,!1,void 0,n);try{return new lV(...t.split("."))._internalPath}catch(i){throw lQ(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,e,!1,void 0,n)}}function lQ(e,t,n,i,r){let s=i&&!i.isEmpty(),a=void 0!==r,o=`Function ${t}() called with invalid data`;n&&(o+=" (via `toFirestore()`)"),o+=". ";let l="";return(s||a)&&(l+=" (found",s&&(l+=` in field ${i}`),a&&(l+=` in document ${r}`),l+=")"),new i7(i9.INVALID_ARGUMENT,o+e+l)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lW{constructor(e,t,n,i,r){this._firestore=e,this._userDataWriter=t,this._key=n,this._document=i,this._converter=r}get id(){return this._key.path.lastSegment()}get ref(){return new lE(this._firestore,this._converter,this._key)}exists(){return null!==this._document}data(){if(this._document){if(this._converter){let e=new lX(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){let t=this._document.data.field(lY("DocumentSnapshot.get",e));if(null!==t)return this._userDataWriter.convertValue(t)}}}class lX extends lW{data(){return super.data()}}function lY(e,t){return"string"==typeof t?lG(e,t):t instanceof lV?t._internalPath:t._delegate._internalPath}class lJ{convertValue(e,t="none"){switch(rU(e)){case 0:return null;case 1:return e.booleanValue;case 2:return rO(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(rM(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 10:return this.convertObject(e.mapValue,t);default:throw i8()}}convertObject(e,t){let n={};return rD(e.fields,(e,i)=>{n[e]=this.convertValue(i,t)}),n}convertGeoPoint(e){return new lP(rO(e.latitude),rO(e.longitude))}convertArray(e,t){return(e.values||[]).map(e=>this.convertValue(e,t))}convertServerTimestamp(e,t){switch(t){case"previous":let n=function e(t){let n=t.mapValue.fields.__previous_value__;return rV(n)?e(n):n}(e);return null==n?null:this.convertValue(n,t);case"estimate":return this.convertTimestamp(rF(e));default:return null}}convertTimestamp(e){let t=rx(e);return new rd(t.seconds,t.nanos)}convertDocumentKey(e,t){let n=rg.fromString(e);aD(n)||i8();let i=new rA(n.get(1),n.get(3)),r=new rv(n.popFirst(5));return i.isEqual(t)||i4(`Document ${r} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),r}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lZ{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class l0 extends lW{constructor(e,t,n,i,r,s){super(e,t,n,i,s),this._firestore=e,this._firestoreImpl=e,this.metadata=r}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){let t=new l1(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){let n=this._document.data.field(lY("DocumentSnapshot.get",e));if(null!==n)return this._userDataWriter.convertValue(n,t.serverTimestamps)}}}class l1 extends l0{data(e={}){return super.data(e)}}class l2{constructor(e,t,n,i){this._firestore=e,this._userDataWriter=t,this._snapshot=i,this.metadata=new lZ(i.hasPendingWrites,i.fromCache),this.query=n}get docs(){let e=[];return this.forEach(t=>e.push(t)),e}get size(){return this._snapshot.docs.size}get empty(){return 0===this.size}forEach(e,t){this._snapshot.docs.forEach(n=>{e.call(t,new l1(this._firestore,this._userDataWriter,n.key,n,new lZ(this._snapshot.mutatedKeys.has(n.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){let t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new i7(i9.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=function(e,t){if(e._snapshot.oldDocs.isEmpty()){let t=0;return e._snapshot.docChanges.map(n=>{let i=new l1(e._firestore,e._userDataWriter,n.doc.key,n.doc,new lZ(e._snapshot.mutatedKeys.has(n.doc.key),e._snapshot.fromCache),e.query.converter);return n.doc,{type:"added",doc:i,oldIndex:-1,newIndex:t++}})}{let n=e._snapshot.oldDocs;return e._snapshot.docChanges.filter(e=>t||3!==e.type).map(t=>{let i=new l1(e._firestore,e._userDataWriter,t.doc.key,t.doc,new lZ(e._snapshot.mutatedKeys.has(t.doc.key),e._snapshot.fromCache),e.query.converter),r=-1,s=-1;return 0!==t.type&&(r=n.indexOf(t.doc.key),n=n.delete(t.doc.key)),1!==t.type&&(s=(n=n.add(t.doc)).indexOf(t.doc.key)),{type:function(e){switch(e){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return i8()}}(t.type),doc:i,oldIndex:r,newIndex:s}})}}(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}}class l3 extends lJ{constructor(e){super(),this.firestore=e}convertBytes(e){return new lM(e)}convertReference(e){let t=this.convertDocumentKey(e,this.firestore._databaseId);return new lE(this.firestore,null,t)}}!function(e=!0){i0="9.17.1",eE(new K("firestore",(t,{instanceIdentifier:n,options:i})=>{let r=t.getProvider("app").getImmediate(),s=new lR(new rr(t.getProvider("auth-internal")),new rl(t.getProvider("app-check-internal")),function(e,t){if(!Object.prototype.hasOwnProperty.apply(e.options,["projectId"]))throw new i7(i9.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new rA(e.options.projectId,t)}(r,n),r);return i=Object.assign({useFetchStreams:e},i),s._setSettings(i),s},"PUBLIC").setMultipleInstances(!0)),eS(iJ,"3.8.3",void 0),eS(iJ,"3.8.3","esm2017")}(),console.log("Script is running");const l4=function(e,t){let n=(function(e,t){let n=e.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)})("object"==typeof e?e:function(e=em){let t=ev.get(e);if(!t&&e===em)return eI();if(!t)throw eb.create("no-app",{appName:e});return t}(),"firestore").getImmediate({identifier:"string"==typeof e?e:"(default)"});if(!n._initialized){let e=O("firestore");e&&function(e,t,n,i={}){var r;let s=(e=lm(e,lw))._getSettings();if("firestore.googleapis.com"!==s.host&&s.host!==t&&i6("Host has been set in both settings() and useEmulator(), emulator host will be used"),e._setSettings(Object.assign(Object.assign({},s),{host:`${t}:${n}`,ssl:!1})),i.mockUserToken){let t,n;if("string"==typeof i.mockUserToken)t=i.mockUserToken,n=iZ.MOCK_USER;else{t=function(e,t){if(e.uid)throw Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');let n=t||"demo-project",i=e.iat||0,r=e.sub||e.user_id;if(!r)throw Error("mockUserToken must contain 'sub' or 'user_id' field!");let s=Object.assign({iss:`https://securetoken.google.com/${n}`,aud:n,iat:i,exp:i+3600,auth_time:i,sub:r,user_id:r,firebase:{sign_in_provider:"custom",identities:{}}},e);return[_(JSON.stringify({alg:"none",type:"JWT"})),_(JSON.stringify(s)),""].join(".")}(i.mockUserToken,null===(r=e._app)||void 0===r?void 0:r.options.projectId);let s=i.mockUserToken.sub||i.mockUserToken.user_id;if(!s)throw new i7(i9.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");n=new iZ(s)}e._authCredentials=new ri(new rt(t,n))}}(n,...e)}return n}(eI({apiKey:"AIzaSyBk1tkCbiVvKYTun3A0r2GLA6PzfitExV4",authDomain:"teen-empower.firebaseapp.com",projectId:"teen-empower",storageBucket:"teen-empower.firebasestorage.app",messagingSenderId:"763791090485",appId:"1:763791090485:web:2ae0f894886986cf0fa27c",measurementId:"G-YKZ2F4QN90"}));async function l6(){let e=document.getElementById("project-list");e.innerHTML="";try{(await function(e){e=lm(e,lb);let t=lm(e.firestore,lR),n=lx(t),i=new l3(t);return(/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function(e){if("L"===e.limitType&&0===e.explicitOrderBy.length)throw new i7(i9.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}(e._query),(function(e,t,n={}){let i=new re;return e.asyncQueue.enqueueAndForget(async()=>(function(e,t,n,i,r){let s=new oW(n,new lS({next:n=>{t.enqueueAndForget(()=>oH(e,s)),n.fromCache&&"server"===i.source?r.reject(new i7(i9.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):r.resolve(n)},error:e=>r.reject(e)}),{includeMetadataChanges:!0,Nu:!0});return o$(e,s)})(await lN(e),e.asyncQueue,t,n,i)),i.promise})(n,e._query).then(n=>new l2(t,i,e,n)))}(lI(l4,"projects"))).forEach(t=>{let n=t.data(),i=document.createElement("div");i.classList.add("project"),i.innerHTML=`
                <h3>${n.title}</h3>
                <p>${n.description}</p>
                <p>Contact: ${n.contact}</p>
                <p>Field of Interest: ${n.fieldOfInterest}</p>
            `,e.appendChild(i)})}catch(e){console.error("Error getting documents: ",e)}}document.getElementById("dark-mode-toggle").addEventListener("click",function(){document.body.classList.toggle("dark-mode"),this.innerText=document.body.classList.contains("dark-mode")?"Light Mode":"Dark Mode"}),document.getElementById("add-project-button").addEventListener("click",function(){let e=document.getElementById("project-form-container");e.style.display="none"===e.style.display||""===e.style.display?"block":"none"}),document.getElementById("project-form").addEventListener("submit",async function(e){e.preventDefault();let t=document.getElementById("project-title").value,n=document.getElementById("project-description").value,i=document.getElementById("project-contact").value,r=document.getElementById("project-field").value;try{await function(e,t){var n,i;let r=lm(e.firestore,lR),s=function(e,t,...n){if(e=q(e),1==arguments.length&&(t=rh.R()),ld("doc","path",t),e instanceof lw){let i=rg.fromString(t,...n);return lf(i),new lE(e,null,new rv(i))}{if(!(e instanceof lE||e instanceof lT))throw new i7(i9.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");let i=e._path.child(rg.fromString(t,...n));return lf(i),new lE(e.firestore,e instanceof lT?e.converter:null,new rv(i))}}(e),a=(n=e.converter)?n.toFirestore(t):t;return(i=[(function(e,t,n,i,r,s={}){let a,o;let l=e.da(s.merge||s.mergeFields?2:0,t,n,r);lH("Data must be an object, but it was:",l,i);let h=function e(t,n){let i={};return rk(t)?n.path&&n.path.length>0&&n.fieldMask.push(n.path):rD(t,(t,r)=>{let s=function t(n,i){if(l$(n=q(n)))return lH("Unsupported field value:",i,n),e(n,i);if(n instanceof lF)return function(e,t){if(!lj(t.sa))throw t.ha(`${e._methodName}() can only be used with update() and set()`);if(!t.path)throw t.ha(`${e._methodName}() is not currently supported inside arrays`);let n=e._toFieldTransform(t);n&&t.fieldTransforms.push(n)}(n,i),null;if(void 0===n&&i.ignoreUndefinedProperties)return null;if(i.path&&i.fieldMask.push(i.path),n instanceof Array){if(i.settings.oa&&4!==i.sa)throw i.ha("Nested arrays are not supported");return function(e,n){let i=[],r=0;for(let s of e){let e=t(s,n.aa(r));null==e&&(e={nullValue:"NULL_VALUE"}),i.push(e),r++}return{arrayValue:{values:i}}}(n,i)}return function(e,t){if(null===(e=q(e)))return{nullValue:"NULL_VALUE"};if("number"==typeof e){var n,i,r;return n=t.yt,"number"==typeof(r=i=e)&&Number.isInteger(r)&&!rN(r)&&r<=Number.MAX_SAFE_INTEGER&&r>=Number.MIN_SAFE_INTEGER?sk(i):sD(n,i)}if("boolean"==typeof e)return{booleanValue:e};if("string"==typeof e)return{stringValue:e};if(e instanceof Date){let n=rd.fromDate(e);return{timestampValue:ag(t.yt,n)}}if(e instanceof rd){let n=new rd(e.seconds,1e3*Math.floor(e.nanoseconds/1e3));return{timestampValue:ag(t.yt,n)}}if(e instanceof lP)return{geoPointValue:{latitude:e.latitude,longitude:e.longitude}};if(e instanceof lM)return{bytesValue:am(t.yt,e._byteString)};if(e instanceof lE){let n=t.databaseId,i=e.firestore._databaseId;if(!i.isEqual(n))throw t.ha(`Document reference is for database ${i.projectId}/${i.database} but should be for database ${n.projectId}/${n.database}`);return{referenceValue:av(e.firestore._databaseId||t.databaseId,e._key.path)}}throw t.ha(`Unsupported field value: ${lg(e)}`)}(n,i)}(r,n.ra(t));null!=s&&(i[t]=s)}),{mapValue:{fields:i}}}(i,l);if(s.merge)a=new su(l.fieldMask),o=l.fieldTransforms;else if(s.mergeFields){let e=[];for(let i of s.mergeFields){let r=function(e,t,n){if((t=q(t))instanceof lV)return t._internalPath;if("string"==typeof t)return lG(e,t);throw lQ("Field path arguments must be of type string or ",e,!1,void 0,n)}(t,i,n);if(!l.contains(r))throw new i7(i9.INVALID_ARGUMENT,`Field '${r}' is specified in your field mask but missing from your input data.`);(function(e,t){return e.some(e=>e.isEqual(t))})(e,r)||e.push(r)}a=new su(e),o=l.fieldTransforms.filter(e=>a.covers(e.field))}else a=null,o=l.fieldTransforms;return new lB(new sc(h),a,o)})(function(e){let t=e._freezeSettings(),n=or(e._databaseId);return new lK(e._databaseId,!!t.ignoreUndefinedProperties,n)}(e.firestore),"addDoc",s._key,a,null!==e.converter,{}).toMutation(s._key,sj.exists(!1))],function(e,t){let n=new re;return e.asyncQueue.enqueueAndForget(async()=>o6(await lk(e).then(e=>e.syncEngine),t,n)),n.promise}(lx(r),i)).then(()=>s)}(lI(l4,"projects"),{title:t,description:n,contact:i,fieldOfInterest:r}),l6(),document.getElementById("project-title").value="",document.getElementById("project-description").value="",document.getElementById("project-contact").value="",document.getElementById("project-field").value=""}catch(e){console.error("Error adding document: ",e)}}),l6();