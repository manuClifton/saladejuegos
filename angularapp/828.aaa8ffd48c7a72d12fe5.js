"use strict";(self.webpackChunksaladejuegos=self.webpackChunksaladejuegos||[]).push([[828],{4828:(ze,te,m)=>{m.r(te);var l=m(8239),k=m(4486),i=m(5893),c=m(4685),ne=(m(5452),m(300),m(6034));function R(){return window}function C(){return(C=(0,l.Z)(function*(n,e,t){var r;const{BuildInfo:o}=R();(0,i.ap)(e.sessionId,"AuthEvent did not contain a session ID");const s=yield ue(e.sessionId),a={};return(0,i.aq)()?a.ibi=o.packageName:(0,i.ar)()?a.apn=o.packageName:(0,i.as)(n,"operation-not-supported-in-this-environment"),o.displayName&&(a.appDisplayName=o.displayName),a.sessionId=s,(0,i.at)(n,t,e.type,void 0,null!==(r=e.eventId)&&void 0!==r?r:void 0,a)})).apply(this,arguments)}function S(){return(S=(0,l.Z)(function*(n){const{BuildInfo:e}=R(),t={};(0,i.aq)()?t.iosBundleId=e.packageName:(0,i.ar)()?t.androidPackageName=e.packageName:(0,i.as)(n,"operation-not-supported-in-this-environment"),yield(0,i.au)(n,t)})).apply(this,arguments)}function b(){return(b=(0,l.Z)(function*(n,e,t){const{cordova:r}=R();let o=()=>{};try{yield new Promise((s,a)=>{let d=null;function h(){var u;s();const I=null===(u=r.plugins.browsertab)||void 0===u?void 0:u.close;"function"==typeof I&&I(),"function"==typeof(null==t?void 0:t.close)&&t.close()}function f(){d||(d=window.setTimeout(()=>{a((0,i.av)(n,"redirect-cancelled-by-user"))},2e3))}function v(){"visible"===(null==document?void 0:document.visibilityState)&&f()}e.addPassiveListener(h),document.addEventListener("resume",f,!1),(0,i.ar)()&&document.addEventListener("visibilitychange",v,!1),o=()=>{e.removePassiveListener(h),document.removeEventListener("resume",f,!1),document.removeEventListener("visibilitychange",v,!1),d&&window.clearTimeout(d)}})}finally{o()}})).apply(this,arguments)}function ue(n){return N.apply(this,arguments)}function N(){return(N=(0,l.Z)(function*(n){const e=de(n),t=yield crypto.subtle.digest("SHA-256",e);return Array.from(new Uint8Array(t)).map(o=>o.toString(16).padStart(2,"0")).join("")})).apply(this,arguments)}function de(n){if((0,i.ap)(/[0-9a-zA-Z]+/.test(n),"Can only convert alpha-numeric strings"),"undefined"!=typeof TextEncoder)return(new TextEncoder).encode(n);const e=new ArrayBuffer(n.length),t=new Uint8Array(e);for(let r=0;r<n.length;r++)t[r]=n.charCodeAt(r);return t}class he extends i.az{constructor(){super(...arguments),this.passiveListeners=new Set,this.initPromise=new Promise(e=>{this.resolveInialized=e})}addPassiveListener(e){this.passiveListeners.add(e)}removePassiveListener(e){this.passiveListeners.delete(e)}resetRedirect(){this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1}onEvent(e){return this.resolveInialized(),this.passiveListeners.forEach(t=>t(e)),super.onEvent(e)}initialized(){var e=this;return(0,l.Z)(function*(){yield e.initPromise})()}}function z(n){return O.apply(this,arguments)}function O(){return(O=(0,l.Z)(function*(n){const e=yield L()._get(T(n));return e&&(yield L()._remove(T(n))),e})).apply(this,arguments)}function ve(){const n=[],e="1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";for(let t=0;t<20;t++){const r=Math.floor(Math.random()*e.length);n.push(e.charAt(r))}return n.join("")}function L(){return(0,i.ax)(i.b)}function T(n){return(0,i.ay)("authEvent",n.config.apiKey,n.name)}function w(n){if(!(null==n?void 0:n.includes("?")))return{};const[e,...t]=n.split("?");return(0,c.zd)(t.join("?"))}function G(){return{type:"unknown",eventId:null,sessionId:null,urlResponse:null,postBody:null,tenantId:null,error:(0,i.av)("no-auth-event")}}function A(){var n;return(null===(n=null==self?void 0:self.location)||void 0===n?void 0:n.protocol)||null}function H(n=(0,c.z$)()){return!("file:"!==A()&&"ionic:"!==A()||!n.toLowerCase().match(/iphone|ipad|ipod|android/))}function K(){try{const n=self.localStorage,e=i.aG();if(n)return n.setItem(e,"1"),n.removeItem(e),!function(n=(0,c.z$)()){return(0,c.w1)()&&11===(null==document?void 0:document.documentMode)||function(n=(0,c.z$)()){return/Edge\/\d+/.test(n)}(n)}()||(0,c.hl)()}catch(n){return U()&&(0,c.hl)()}return!1}function U(){return"undefined"!=typeof global&&"WorkerGlobalScope"in global&&"importScripts"in global}function x(){return("http:"===A()||"https:"===A()||(0,c.ru)()||H())&&!((0,c.b$)()||(0,c.UG)())&&K()&&!U()}function Y(){return H()&&"undefined"!=typeof document}function Z(){return(Z=(0,l.Z)(function*(){return!!Y()&&new Promise(n=>{const e=setTimeout(()=>{n(!1)},1e3);document.addEventListener("deviceready",()=>{clearTimeout(e),n(!0)})})})).apply(this,arguments)}const p={LOCAL:"local",NONE:"none",SESSION:"session"},E=i.aw,$="persistence";function D(n){return M.apply(this,arguments)}function M(){return(M=(0,l.Z)(function*(n){yield n._initializationPromise;const e=J(),t=i.ay($,n.config.apiKey,n.name);(null==e?void 0:e.sessionStorage)&&e.sessionStorage.setItem(t,n._getPersistence())})).apply(this,arguments)}function J(){return"undefined"!=typeof window?window:null}const Ue=i.aw;class y{constructor(){this.browserResolver=i.ax(i.k),this.cordovaResolver=i.ax(class{constructor(){this._redirectPersistence=i.a,this._shouldInitProactively=!0,this.eventManagers=new Map,this.originValidationPromises={},this._completeRedirectFn=i.aA}_initialize(e){var t=this;return(0,l.Z)(function*(){const r=e._key();let o=t.eventManagers.get(r);return o||(o=new he(e),t.eventManagers.set(r,o),t.attachCallbackListeners(e,o)),o})()}_openPopup(e){(0,i.as)(e,"operation-not-supported-in-this-environment")}_openRedirect(e,t,r,o){var s=this;return(0,l.Z)(function*(){!function(n){var e,t,r,o,s,a,d,h,f,v;const u=R();(0,i.aw)("function"==typeof(null===(e=null==u?void 0:u.universalLinks)||void 0===e?void 0:e.subscribe),n,"invalid-cordova-configuration",{missingPlugin:"cordova-universal-links-plugin-fix"}),(0,i.aw)(void 0!==(null===(t=null==u?void 0:u.BuildInfo)||void 0===t?void 0:t.packageName),n,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-buildInfo"}),(0,i.aw)("function"==typeof(null===(s=null===(o=null===(r=null==u?void 0:u.cordova)||void 0===r?void 0:r.plugins)||void 0===o?void 0:o.browsertab)||void 0===s?void 0:s.openUrl),n,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-browsertab"}),(0,i.aw)("function"==typeof(null===(h=null===(d=null===(a=null==u?void 0:u.cordova)||void 0===a?void 0:a.plugins)||void 0===d?void 0:d.browsertab)||void 0===h?void 0:h.isAvailable),n,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-browsertab"}),(0,i.aw)("function"==typeof(null===(v=null===(f=null==u?void 0:u.cordova)||void 0===f?void 0:f.InAppBrowser)||void 0===v?void 0:v.open),n,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-inappbrowser"})}(e);const a=yield s._initialize(e);yield a.initialized(),a.resetRedirect(),(0,i.aB)(),yield s._originValidation(e);const d=function(n,e,t=null){return{type:e,eventId:t,urlResponse:null,sessionId:ve(),postBody:null,tenantId:n.tenantId,error:(0,i.av)(n,"no-auth-event")}}(e,r,o);yield function(n,e){return L()._set(T(n),e)}(e,d);const h=yield function(n,e,t){return C.apply(this,arguments)}(e,d,t),f=yield function(n){const{cordova:e}=R();return new Promise(t=>{e.plugins.browsertab.isAvailable(r=>{let o=null;r?e.plugins.browsertab.openUrl(n):o=e.InAppBrowser.open(n,(0,i.ao)()?"_blank":"_system","location=yes"),t(o)})})}(h);return function(n,e,t){return b.apply(this,arguments)}(e,a,f)})()}_isIframeWebStorageSupported(e,t){throw new Error("Method not implemented.")}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=function(n){return S.apply(this,arguments)}(e)),this.originValidationPromises[t]}attachCallbackListeners(e,t){const{universalLinks:r,handleOpenURL:o,BuildInfo:s}=R(),a=setTimeout((0,l.Z)(function*(){yield z(e),t.onEvent(G())}),500),d=function(){var v=(0,l.Z)(function*(u){clearTimeout(a);const I=yield z(e);let ee=null;I&&(null==u?void 0:u.url)&&(ee=function(n,e){var t,r;const o=function(n){const e=w(n),t=e.link?decodeURIComponent(e.link):void 0,r=w(t).link,o=e.deep_link_id?decodeURIComponent(e.deep_link_id):void 0;return w(o).link||o||r||t||n}(e);if(o.includes("/__/auth/callback")){const s=w(o),a=s.firebaseError?function(n){try{return JSON.parse(n)}catch(e){return null}}(decodeURIComponent(s.firebaseError)):null,d=null===(r=null===(t=null==a?void 0:a.code)||void 0===t?void 0:t.split("auth/"))||void 0===r?void 0:r[1],h=d?(0,i.av)(d):null;return h?{type:n.type,eventId:n.eventId,tenantId:n.tenantId,error:h,urlResponse:null,sessionId:null,postBody:null}:{type:n.type,eventId:n.eventId,tenantId:n.tenantId,sessionId:n.sessionId,urlResponse:o,postBody:null}}return null}(I,u.url)),t.onEvent(ee||G())});return function(I){return v.apply(this,arguments)}}();void 0!==r&&"function"==typeof r.subscribe&&r.subscribe(null,d);const h=o,f=`${s.packageName.toLowerCase()}://`;R().handleOpenURL=function(){var v=(0,l.Z)(function*(u){if(u.toLowerCase().startsWith(f)&&d({url:u}),"function"==typeof h)try{h(u)}catch(I){console.error(I)}});return function(u){return v.apply(this,arguments)}}()}}),this.underlyingResolver=null,this._redirectPersistence=i.a,this._completeRedirectFn=i.aA}_initialize(e){var t=this;return(0,l.Z)(function*(){return yield t.selectUnderlyingResolver(),t.assertedUnderlyingResolver._initialize(e)})()}_openPopup(e,t,r,o){var s=this;return(0,l.Z)(function*(){return yield s.selectUnderlyingResolver(),s.assertedUnderlyingResolver._openPopup(e,t,r,o)})()}_openRedirect(e,t,r,o){var s=this;return(0,l.Z)(function*(){return yield s.selectUnderlyingResolver(),s.assertedUnderlyingResolver._openRedirect(e,t,r,o)})()}_isIframeWebStorageSupported(e,t){this.assertedUnderlyingResolver._isIframeWebStorageSupported(e,t)}_originValidation(e){return this.assertedUnderlyingResolver._originValidation(e)}get _shouldInitProactively(){return Y()||this.browserResolver._shouldInitProactively}get assertedUnderlyingResolver(){return Ue(this.underlyingResolver,"internal-error"),this.underlyingResolver}selectUnderlyingResolver(){var e=this;return(0,l.Z)(function*(){if(e.underlyingResolver)return;const t=yield function(){return Z.apply(this,arguments)}();e.underlyingResolver=t?e.cordovaResolver:e.browserResolver})()}}function j(n){return n.unwrap()}function Ze(n){return Q(n)}function De(n,e){var t;const r=null===(t=e.customData)||void 0===t?void 0:t._tokenResponse;if("auth/multi-factor-auth-required"===e.code)e.resolver=new Me(n,i.am(n,e));else if(r){const o=Q(e),s=e;o&&(s.credential=o,s.tenantId=r.tenantId||void 0,s.email=r.email||void 0,s.phoneNumber=r.phoneNumber||void 0)}}function Q(n){const{_tokenResponse:e}=n instanceof c.ZR?n.customData:n;if(!e)return null;if(!(n instanceof c.ZR)&&"temporaryProof"in e&&"phoneNumber"in e)return i.P.credentialFromResult(n);const t=e.providerId;if(!t||t===i.o.PASSWORD)return null;let r;switch(t){case i.o.GOOGLE:r=i.N;break;case i.o.FACEBOOK:r=i.M;break;case i.o.GITHUB:r=i.Q;break;case i.o.TWITTER:r=i.V;break;default:const{oauthIdToken:o,oauthAccessToken:s,oauthTokenSecret:a,pendingToken:d,nonce:h}=e;return s||a||o||d?d?t.startsWith("saml.")?i.aJ._create(t,d):i.I._fromParams({providerId:t,signInMethod:t,pendingToken:d,idToken:o,accessToken:s}):new i.T(t).credential({idToken:o,accessToken:s,rawNonce:h}):null}return n instanceof c.ZR?r.credentialFromError(n):r.credentialFromResult(n)}function g(n,e){return W.apply(this,arguments)}function W(){return(W=(0,l.Z)(function*(n,e){let t;try{t=yield e}catch(s){throw s instanceof c.ZR&&De(n,s),s}const{operationType:r,user:o}=t;return{operationType:r,credential:Ze(t),additionalUserInfo:i.ak(t),user:_.getOrCreate(o)}})).apply(this,arguments)}function F(n,e){return V.apply(this,arguments)}function V(){return(V=(0,l.Z)(function*(n,e){const t=yield e;return{verificationId:t.verificationId,confirm:r=>g(n,t.confirm(r))}})).apply(this,arguments)}class Me{constructor(e,t){this.resolver=t,this.auth=e.wrapped()}get session(){return this.resolver.session}get hints(){return this.resolver.hints}resolveSignIn(e){return g(j(this.auth),this.resolver.resolveSignIn(e))}}class _{constructor(e){this._delegate=e,this.multiFactor=i.an(e)}static getOrCreate(e){return _.USER_MAP.has(e)||_.USER_MAP.set(e,new _(e)),_.USER_MAP.get(e)}delete(){return this._delegate.delete()}reload(){return this._delegate.reload()}toJSON(){return this._delegate.toJSON()}getIdTokenResult(e){return this._delegate.getIdTokenResult(e)}getIdToken(e){return this._delegate.getIdToken(e)}linkAndRetrieveDataWithCredential(e){return this.linkWithCredential(e)}linkWithCredential(e){var t=this;return(0,l.Z)(function*(){return g(t.auth,i.Y(t._delegate,e))})()}linkWithPhoneNumber(e,t){var r=this;return(0,l.Z)(function*(){return F(r.auth,i.l(r._delegate,e,t))})()}linkWithPopup(e){var t=this;return(0,l.Z)(function*(){return g(t.auth,i.d(t._delegate,e,y))})()}linkWithRedirect(e){var t=this;return(0,l.Z)(function*(){return yield D(i.aC(t.auth)),i.g(t._delegate,e,y)})()}reauthenticateAndRetrieveDataWithCredential(e){return this.reauthenticateWithCredential(e)}reauthenticateWithCredential(e){var t=this;return(0,l.Z)(function*(){return g(t.auth,i.Z(t._delegate,e))})()}reauthenticateWithPhoneNumber(e,t){return F(this.auth,i.r(this._delegate,e,t))}reauthenticateWithPopup(e){return g(this.auth,i.e(this._delegate,e,y))}reauthenticateWithRedirect(e){var t=this;return(0,l.Z)(function*(){return yield D(i.aC(t.auth)),i.h(t._delegate,e,y)})()}sendEmailVerification(e){return i.aa(this._delegate,e)}unlink(e){var t=this;return(0,l.Z)(function*(){return yield i.aj(t._delegate,e),t})()}updateEmail(e){return i.af(this._delegate,e)}updatePassword(e){return i.ag(this._delegate,e)}updatePhoneNumber(e){return i.u(this._delegate,e)}updateProfile(e){return i.ae(this._delegate,e)}verifyBeforeUpdateEmail(e,t){return i.ab(this._delegate,e,t)}get emailVerified(){return this._delegate.emailVerified}get isAnonymous(){return this._delegate.isAnonymous}get metadata(){return this._delegate.metadata}get phoneNumber(){return this._delegate.phoneNumber}get providerData(){return this._delegate.providerData}get refreshToken(){return this._delegate.refreshToken}get tenantId(){return this._delegate.tenantId}get displayName(){return this._delegate.displayName}get email(){return this._delegate.email}get photoURL(){return this._delegate.photoURL}get providerId(){return this._delegate.providerId}get uid(){return this._delegate.uid}get auth(){return this._delegate.auth}}_.USER_MAP=new WeakMap;const P=i.aw;let X=(()=>{class n{constructor(t,r){if(this.app=t,r.isInitialized())return this._delegate=r.getImmediate(),void this.linkUnderlyingAuth();const{apiKey:o}=t.options;P(o,"invalid-api-key",{appName:t.name});let s=[i.K];if("undefined"!=typeof window){s=function(n,e){const t=J();if(!(null==t?void 0:t.sessionStorage))return[];const r=i.ay($,n,e);switch(t.sessionStorage.getItem(r)){case p.NONE:return[i.K];case p.LOCAL:return[i.i,i.a];case p.SESSION:return[i.a];default:return[]}}(o,t.name);for(const d of[i.i,i.b,i.a])s.includes(d)||s.push(d)}P(o,"invalid-api-key",{appName:t.name});const a="undefined"!=typeof window?y:void 0;this._delegate=r.initialize({options:{persistence:s,popupRedirectResolver:a}}),this._delegate._updateErrorMap(i.z),this.linkUnderlyingAuth()}get emulatorConfig(){return this._delegate.emulatorConfig}get currentUser(){return this._delegate.currentUser?_.getOrCreate(this._delegate.currentUser):null}get languageCode(){return this._delegate.languageCode}set languageCode(t){this._delegate.languageCode=t}get settings(){return this._delegate.settings}get tenantId(){return this._delegate.tenantId}set tenantId(t){this._delegate.tenantId=t}useDeviceLanguage(){this._delegate.useDeviceLanguage()}signOut(){return this._delegate.signOut()}useEmulator(t,r){i.E(this._delegate,t,r)}applyActionCode(t){return i.a1(this._delegate,t)}checkActionCode(t){return i.a2(this._delegate,t)}confirmPasswordReset(t,r){return i.a0(this._delegate,t,r)}createUserWithEmailAndPassword(t,r){var o=this;return(0,l.Z)(function*(){return g(o._delegate,i.a4(o._delegate,t,r))})()}fetchProvidersForEmail(t){return this.fetchSignInMethodsForEmail(t)}fetchSignInMethodsForEmail(t){return i.a9(this._delegate,t)}isSignInWithEmailLink(t){return i.a7(this._delegate,t)}getRedirectResult(){var t=this;return(0,l.Z)(function*(){P(x(),t._delegate,"operation-not-supported-in-this-environment");const r=yield i.j(t._delegate,y);return r?g(t._delegate,Promise.resolve(r)):{credential:null,user:null}})()}addFrameworkForLogging(t){!function(n,e){(0,i.aC)(n)._logFramework(e)}(this._delegate,t)}onAuthStateChanged(t,r,o){const{next:s,error:a,complete:d}=q(t,r,o);return this._delegate.onAuthStateChanged(s,a,d)}onIdTokenChanged(t,r,o){const{next:s,error:a,complete:d}=q(t,r,o);return this._delegate.onIdTokenChanged(s,a,d)}sendSignInLinkToEmail(t,r){return i.a6(this._delegate,t,r)}sendPasswordResetEmail(t,r){return i.$(this._delegate,t,r||void 0)}setPersistence(t){var r=this;return(0,l.Z)(function*(){let o;switch(function(n,e){E(Object.values(p).includes(e),n,"invalid-persistence-type"),(0,c.b$)()?E(e!==p.SESSION,n,"unsupported-persistence-type"):(0,c.UG)()?E(e===p.NONE,n,"unsupported-persistence-type"):U()?E(e===p.NONE||e===p.LOCAL&&(0,c.hl)(),n,"unsupported-persistence-type"):E(e===p.NONE||K(),n,"unsupported-persistence-type")}(r._delegate,t),t){case p.SESSION:o=i.a;break;case p.LOCAL:o=(yield i.ax(i.i)._isAvailable())?i.i:i.b;break;case p.NONE:o=i.K;break;default:return i.as("argument-error",{appName:r._delegate.name})}return r._delegate.setPersistence(o)})()}signInAndRetrieveDataWithCredential(t){return this.signInWithCredential(t)}signInAnonymously(){return g(this._delegate,i.W(this._delegate))}signInWithCredential(t){return g(this._delegate,i.X(this._delegate,t))}signInWithCustomToken(t){return g(this._delegate,i._(this._delegate,t))}signInWithEmailAndPassword(t,r){return g(this._delegate,i.a5(this._delegate,t,r))}signInWithEmailLink(t,r){return g(this._delegate,i.a8(this._delegate,t,r))}signInWithPhoneNumber(t,r){return F(this._delegate,i.s(this._delegate,t,r))}signInWithPopup(t){var r=this;return(0,l.Z)(function*(){return P(x(),r._delegate,"operation-not-supported-in-this-environment"),g(r._delegate,i.c(r._delegate,t,y))})()}signInWithRedirect(t){var r=this;return(0,l.Z)(function*(){return P(x(),r._delegate,"operation-not-supported-in-this-environment"),yield D(r._delegate),i.f(r._delegate,t,y)})()}updateCurrentUser(t){return this._delegate.updateCurrentUser(t)}verifyPasswordResetCode(t){return i.a3(this._delegate,t)}unwrap(){return this._delegate}_delete(){return this._delegate._delete()}linkUnderlyingAuth(){this._delegate.wrapped=()=>this}}return n.Persistence=p,n})();function q(n,e,t){let r=n;"function"!=typeof n&&({next:r,error:e,complete:t}=n);const o=r;return{next:a=>o(a&&_.getOrCreate(a)),error:e,complete:t}}class B{constructor(){this.providerId="phone",this._delegate=new i.P(j(k.Z.auth()))}static credential(e,t){return i.P.credential(e,t)}verifyPhoneNumber(e,t){return this._delegate.verifyPhoneNumber(e,t)}unwrap(){return this._delegate}}B.PHONE_SIGN_IN_METHOD=i.P.PHONE_SIGN_IN_METHOD,B.PROVIDER_ID=i.P.PROVIDER_ID;const We=i.aw;var n;(n=k.Z).INTERNAL.registerComponent(new ne.wA("auth-compat",e=>{const t=e.getProvider("app-compat").getImmediate(),r=e.getProvider("auth");return new X(t,r)},"PUBLIC").setServiceProps({ActionCodeInfo:{Operation:{EMAIL_SIGNIN:i.A.EMAIL_SIGNIN,PASSWORD_RESET:i.A.PASSWORD_RESET,RECOVER_EMAIL:i.A.RECOVER_EMAIL,REVERT_SECOND_FACTOR_ADDITION:i.A.REVERT_SECOND_FACTOR_ADDITION,VERIFY_AND_CHANGE_EMAIL:i.A.VERIFY_AND_CHANGE_EMAIL,VERIFY_EMAIL:i.A.VERIFY_EMAIL}},EmailAuthProvider:i.L,FacebookAuthProvider:i.M,GithubAuthProvider:i.Q,GoogleAuthProvider:i.N,OAuthProvider:i.T,PhoneAuthProvider:B,PhoneMultiFactorGenerator:i.m,RecaptchaVerifier:class{constructor(e,t,r=k.Z.app()){var o;We(null===(o=r.options)||void 0===o?void 0:o.apiKey,"invalid-api-key",{appName:r.name}),this._delegate=new i.R(e,t,r.auth()),this.type=this._delegate.type}clear(){this._delegate.clear()}render(){return this._delegate.render()}verify(){return this._delegate.verify()}},TwitterAuthProvider:i.V,Auth:X,AuthCredential:i.G,Error:c.ZR}).setInstantiationMode("LAZY").setMultipleInstances(!1)),n.registerVersion("@firebase/auth-compat","0.1.2")}}]);