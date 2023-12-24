import{r as p,j as h,g as Rt}from"./index-1d565f56.js";import{S as Pt,T as Nt,C as Lt,a as Bt,B as pr,A as Dt,d as Ut,G as N,L as hr,b as ge,F as kt,c as Vt}from"./Container-a2f96a91.js";import{a as zt,g as Gt,s as me,f as re,b as te,h as gr,l as Ht,i as Wt,u as Kt,_ as qt,c as Yt,d as Zt,e as Xt,T as Jt,B as Qt}from"./Typography-1387fcca.js";import{G as en}from"./iconBase-27d7d408.js";function rn(e){return Gt("MuiSwitch",e)}const tn=zt("MuiSwitch",["root","edgeStart","edgeEnd","switchBase","colorPrimary","colorSecondary","sizeSmall","sizeMedium","checked","disabled","input","thumb","track"]),C=tn,nn=["className","color","edge","size","sx"],an=e=>{const{classes:r,edge:t,size:n,color:i,checked:o,disabled:s}=e,d={root:["root",t&&`edge${re(t)}`,`size${re(n)}`],switchBase:["switchBase",`color${re(i)}`,o&&"checked",s&&"disabled"],thumb:["thumb"],track:["track"],input:["input"]},y=Zt(d,rn,r);return te({},r,y)},on=me("span",{name:"MuiSwitch",slot:"Root",overridesResolver:(e,r)=>{const{ownerState:t}=e;return[r.root,t.edge&&r[`edge${re(t.edge)}`],r[`size${re(t.size)}`]]}})(({ownerState:e})=>te({display:"inline-flex",width:34+12*2,height:14+12*2,overflow:"hidden",padding:12,boxSizing:"border-box",position:"relative",flexShrink:0,zIndex:0,verticalAlign:"middle","@media print":{colorAdjust:"exact"}},e.edge==="start"&&{marginLeft:-8},e.edge==="end"&&{marginRight:-8},e.size==="small"&&{width:40,height:24,padding:7,[`& .${C.thumb}`]:{width:16,height:16},[`& .${C.switchBase}`]:{padding:4,[`&.${C.checked}`]:{transform:"translateX(16px)"}}})),sn=me(Pt,{name:"MuiSwitch",slot:"SwitchBase",overridesResolver:(e,r)=>{const{ownerState:t}=e;return[r.switchBase,{[`& .${C.input}`]:r.input},t.color!=="default"&&r[`color${re(t.color)}`]]}})(({theme:e})=>({position:"absolute",top:0,left:0,zIndex:1,color:e.vars?e.vars.palette.Switch.defaultColor:`${e.palette.mode==="light"?e.palette.common.white:e.palette.grey[300]}`,transition:e.transitions.create(["left","transform"],{duration:e.transitions.duration.shortest}),[`&.${C.checked}`]:{transform:"translateX(20px)"},[`&.${C.disabled}`]:{color:e.vars?e.vars.palette.Switch.defaultDisabledColor:`${e.palette.mode==="light"?e.palette.grey[100]:e.palette.grey[600]}`},[`&.${C.checked} + .${C.track}`]:{opacity:.5},[`&.${C.disabled} + .${C.track}`]:{opacity:e.vars?e.vars.opacity.switchTrackDisabled:`${e.palette.mode==="light"?.12:.2}`},[`& .${C.input}`]:{left:"-100%",width:"300%"}}),({theme:e,ownerState:r})=>te({"&:hover":{backgroundColor:e.vars?`rgba(${e.vars.palette.action.activeChannel} / ${e.vars.palette.action.hoverOpacity})`:gr(e.palette.action.active,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},r.color!=="default"&&{[`&.${C.checked}`]:{color:(e.vars||e).palette[r.color].main,"&:hover":{backgroundColor:e.vars?`rgba(${e.vars.palette[r.color].mainChannel} / ${e.vars.palette.action.hoverOpacity})`:gr(e.palette[r.color].main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},[`&.${C.disabled}`]:{color:e.vars?e.vars.palette.Switch[`${r.color}DisabledColor`]:`${e.palette.mode==="light"?Ht(e.palette[r.color].main,.62):Wt(e.palette[r.color].main,.55)}`}},[`&.${C.checked} + .${C.track}`]:{backgroundColor:(e.vars||e).palette[r.color].main}})),cn=me("span",{name:"MuiSwitch",slot:"Track",overridesResolver:(e,r)=>r.track})(({theme:e})=>({height:"100%",width:"100%",borderRadius:14/2,zIndex:-1,transition:e.transitions.create(["opacity","background-color"],{duration:e.transitions.duration.shortest}),backgroundColor:e.vars?e.vars.palette.common.onBackground:`${e.palette.mode==="light"?e.palette.common.black:e.palette.common.white}`,opacity:e.vars?e.vars.opacity.switchTrack:`${e.palette.mode==="light"?.38:.3}`})),un=me("span",{name:"MuiSwitch",slot:"Thumb",overridesResolver:(e,r)=>r.thumb})(({theme:e})=>({boxShadow:(e.vars||e).shadows[1],backgroundColor:"currentColor",width:20,height:20,borderRadius:"50%"})),ln=p.forwardRef(function(r,t){const n=Kt({props:r,name:"MuiSwitch"}),{className:i,color:o="primary",edge:s=!1,size:d="medium",sx:y}=n,b=qt(n,nn),O=te({},n,{color:o,edge:s,size:d}),$=an(O),l=h.jsx(un,{className:$.thumb,ownerState:O});return h.jsxs(on,{className:Yt($.root,i),sx:y,ownerState:O,children:[h.jsx(sn,te({type:"checkbox",icon:l,checkedIcon:l,ref:t,ownerState:O},b,{classes:te({},$,{root:$.switchBase})})),h.jsx(cn,{className:$.track,ownerState:O})]})}),fn=ln;var dn=function(r){return pn(r)&&!hn(r)};function pn(e){return!!e&&typeof e=="object"}function hn(e){var r=Object.prototype.toString.call(e);return r==="[object RegExp]"||r==="[object Date]"||yn(e)}var gn=typeof Symbol=="function"&&Symbol.for,vn=gn?Symbol.for("react.element"):60103;function yn(e){return e.$$typeof===vn}function bn(e){return Array.isArray(e)?[]:{}}function be(e,r){return r.clone!==!1&&r.isMergeableObject(e)?ce(bn(e),e,r):e}function mn(e,r,t){return e.concat(r).map(function(n){return be(n,t)})}function Tn(e,r,t){var n={};return t.isMergeableObject(e)&&Object.keys(e).forEach(function(i){n[i]=be(e[i],t)}),Object.keys(r).forEach(function(i){!t.isMergeableObject(r[i])||!e[i]?n[i]=be(r[i],t):n[i]=ce(e[i],r[i],t)}),n}function ce(e,r,t){t=t||{},t.arrayMerge=t.arrayMerge||mn,t.isMergeableObject=t.isMergeableObject||dn;var n=Array.isArray(r),i=Array.isArray(e),o=n===i;return o?n?t.arrayMerge(e,r,t):Tn(e,r,t):be(r,t)}ce.all=function(r,t){if(!Array.isArray(r))throw new Error("first argument should be an array");return r.reduce(function(n,i){return ce(n,i,t)},{})};var Ne=ce,Sn=typeof global=="object"&&global&&global.Object===Object&&global;const Gr=Sn;var En=typeof self=="object"&&self&&self.Object===Object&&self,jn=Gr||En||Function("return this")();const L=jn;var $n=L.Symbol;const V=$n;var Hr=Object.prototype,_n=Hr.hasOwnProperty,wn=Hr.toString,oe=V?V.toStringTag:void 0;function An(e){var r=_n.call(e,oe),t=e[oe];try{e[oe]=void 0;var n=!0}catch{}var i=wn.call(e);return n&&(r?e[oe]=t:delete e[oe]),i}var Cn=Object.prototype,On=Cn.toString;function xn(e){return On.call(e)}var In="[object Null]",Fn="[object Undefined]",vr=V?V.toStringTag:void 0;function Y(e){return e==null?e===void 0?Fn:In:vr&&vr in Object(e)?An(e):xn(e)}function Wr(e,r){return function(t){return e(r(t))}}var Mn=Wr(Object.getPrototypeOf,Object);const ze=Mn;function Z(e){return e!=null&&typeof e=="object"}var Rn="[object Object]",Pn=Function.prototype,Nn=Object.prototype,Kr=Pn.toString,Ln=Nn.hasOwnProperty,Bn=Kr.call(Object);function yr(e){if(!Z(e)||Y(e)!=Rn)return!1;var r=ze(e);if(r===null)return!0;var t=Ln.call(r,"constructor")&&r.constructor;return typeof t=="function"&&t instanceof t&&Kr.call(t)==Bn}var br=Array.isArray,mr=Object.keys,Dn=Object.prototype.hasOwnProperty,Un=typeof Element<"u";function Le(e,r){if(e===r)return!0;if(e&&r&&typeof e=="object"&&typeof r=="object"){var t=br(e),n=br(r),i,o,s;if(t&&n){if(o=e.length,o!=r.length)return!1;for(i=o;i--!==0;)if(!Le(e[i],r[i]))return!1;return!0}if(t!=n)return!1;var d=e instanceof Date,y=r instanceof Date;if(d!=y)return!1;if(d&&y)return e.getTime()==r.getTime();var b=e instanceof RegExp,O=r instanceof RegExp;if(b!=O)return!1;if(b&&O)return e.toString()==r.toString();var $=mr(e);if(o=$.length,o!==mr(r).length)return!1;for(i=o;i--!==0;)if(!Dn.call(r,$[i]))return!1;if(Un&&e instanceof Element&&r instanceof Element)return e===r;for(i=o;i--!==0;)if(s=$[i],!(s==="_owner"&&e.$$typeof)&&!Le(e[s],r[s]))return!1;return!0}return e!==e&&r!==r}var kn=function(r,t){try{return Le(r,t)}catch(n){if(n.message&&n.message.match(/stack|recursion/i)||n.number===-2146828260)return console.warn("Warning: react-fast-compare does not handle circular references.",n.name,n.message),!1;throw n}};const H=Rt(kn);var Vn=!0;function zn(e,r){if(!Vn){if(e)return;var t="Warning: "+r;typeof console<"u"&&console.warn(t);try{throw Error(t)}catch{}}}function Gn(){this.__data__=[],this.size=0}function qr(e,r){return e===r||e!==e&&r!==r}function Te(e,r){for(var t=e.length;t--;)if(qr(e[t][0],r))return t;return-1}var Hn=Array.prototype,Wn=Hn.splice;function Kn(e){var r=this.__data__,t=Te(r,e);if(t<0)return!1;var n=r.length-1;return t==n?r.pop():Wn.call(r,t,1),--this.size,!0}function qn(e){var r=this.__data__,t=Te(r,e);return t<0?void 0:r[t][1]}function Yn(e){return Te(this.__data__,e)>-1}function Zn(e,r){var t=this.__data__,n=Te(t,e);return n<0?(++this.size,t.push([e,r])):t[n][1]=r,this}function U(e){var r=-1,t=e==null?0:e.length;for(this.clear();++r<t;){var n=e[r];this.set(n[0],n[1])}}U.prototype.clear=Gn;U.prototype.delete=Kn;U.prototype.get=qn;U.prototype.has=Yn;U.prototype.set=Zn;function Xn(){this.__data__=new U,this.size=0}function Jn(e){var r=this.__data__,t=r.delete(e);return this.size=r.size,t}function Qn(e){return this.__data__.get(e)}function ea(e){return this.__data__.has(e)}function fe(e){var r=typeof e;return e!=null&&(r=="object"||r=="function")}var ra="[object AsyncFunction]",ta="[object Function]",na="[object GeneratorFunction]",aa="[object Proxy]";function Yr(e){if(!fe(e))return!1;var r=Y(e);return r==ta||r==na||r==ra||r==aa}var ia=L["__core-js_shared__"];const Fe=ia;var Tr=function(){var e=/[^.]+$/.exec(Fe&&Fe.keys&&Fe.keys.IE_PROTO||"");return e?"Symbol(src)_1."+e:""}();function oa(e){return!!Tr&&Tr in e}var sa=Function.prototype,ca=sa.toString;function X(e){if(e!=null){try{return ca.call(e)}catch{}try{return e+""}catch{}}return""}var ua=/[\\^$.*+?()[\]{}|]/g,la=/^\[object .+?Constructor\]$/,fa=Function.prototype,da=Object.prototype,pa=fa.toString,ha=da.hasOwnProperty,ga=RegExp("^"+pa.call(ha).replace(ua,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");function va(e){if(!fe(e)||oa(e))return!1;var r=Yr(e)?ga:la;return r.test(X(e))}function ya(e,r){return e==null?void 0:e[r]}function J(e,r){var t=ya(e,r);return va(t)?t:void 0}var ba=J(L,"Map");const ue=ba;var ma=J(Object,"create");const le=ma;function Ta(){this.__data__=le?le(null):{},this.size=0}function Sa(e){var r=this.has(e)&&delete this.__data__[e];return this.size-=r?1:0,r}var Ea="__lodash_hash_undefined__",ja=Object.prototype,$a=ja.hasOwnProperty;function _a(e){var r=this.__data__;if(le){var t=r[e];return t===Ea?void 0:t}return $a.call(r,e)?r[e]:void 0}var wa=Object.prototype,Aa=wa.hasOwnProperty;function Ca(e){var r=this.__data__;return le?r[e]!==void 0:Aa.call(r,e)}var Oa="__lodash_hash_undefined__";function xa(e,r){var t=this.__data__;return this.size+=this.has(e)?0:1,t[e]=le&&r===void 0?Oa:r,this}function q(e){var r=-1,t=e==null?0:e.length;for(this.clear();++r<t;){var n=e[r];this.set(n[0],n[1])}}q.prototype.clear=Ta;q.prototype.delete=Sa;q.prototype.get=_a;q.prototype.has=Ca;q.prototype.set=xa;function Ia(){this.size=0,this.__data__={hash:new q,map:new(ue||U),string:new q}}function Fa(e){var r=typeof e;return r=="string"||r=="number"||r=="symbol"||r=="boolean"?e!=="__proto__":e===null}function Se(e,r){var t=e.__data__;return Fa(r)?t[typeof r=="string"?"string":"hash"]:t.map}function Ma(e){var r=Se(this,e).delete(e);return this.size-=r?1:0,r}function Ra(e){return Se(this,e).get(e)}function Pa(e){return Se(this,e).has(e)}function Na(e,r){var t=Se(this,e),n=t.size;return t.set(e,r),this.size+=t.size==n?0:1,this}function z(e){var r=-1,t=e==null?0:e.length;for(this.clear();++r<t;){var n=e[r];this.set(n[0],n[1])}}z.prototype.clear=Ia;z.prototype.delete=Ma;z.prototype.get=Ra;z.prototype.has=Pa;z.prototype.set=Na;var La=200;function Ba(e,r){var t=this.__data__;if(t instanceof U){var n=t.__data__;if(!ue||n.length<La-1)return n.push([e,r]),this.size=++t.size,this;t=this.__data__=new z(n)}return t.set(e,r),this.size=t.size,this}function ae(e){var r=this.__data__=new U(e);this.size=r.size}ae.prototype.clear=Xn;ae.prototype.delete=Jn;ae.prototype.get=Qn;ae.prototype.has=ea;ae.prototype.set=Ba;function Da(e,r){for(var t=-1,n=e==null?0:e.length;++t<n&&r(e[t],t,e)!==!1;);return e}var Ua=function(){try{var e=J(Object,"defineProperty");return e({},"",{}),e}catch{}}();const Sr=Ua;function Zr(e,r,t){r=="__proto__"&&Sr?Sr(e,r,{configurable:!0,enumerable:!0,value:t,writable:!0}):e[r]=t}var ka=Object.prototype,Va=ka.hasOwnProperty;function Xr(e,r,t){var n=e[r];(!(Va.call(e,r)&&qr(n,t))||t===void 0&&!(r in e))&&Zr(e,r,t)}function Ee(e,r,t,n){var i=!t;t||(t={});for(var o=-1,s=r.length;++o<s;){var d=r[o],y=n?n(t[d],e[d],d,t,e):void 0;y===void 0&&(y=e[d]),i?Zr(t,d,y):Xr(t,d,y)}return t}function za(e,r){for(var t=-1,n=Array(e);++t<e;)n[t]=r(t);return n}var Ga="[object Arguments]";function Er(e){return Z(e)&&Y(e)==Ga}var Jr=Object.prototype,Ha=Jr.hasOwnProperty,Wa=Jr.propertyIsEnumerable,Ka=Er(function(){return arguments}())?Er:function(e){return Z(e)&&Ha.call(e,"callee")&&!Wa.call(e,"callee")};const qa=Ka;var Ya=Array.isArray;const de=Ya;function Za(){return!1}var Qr=typeof exports=="object"&&exports&&!exports.nodeType&&exports,jr=Qr&&typeof module=="object"&&module&&!module.nodeType&&module,Xa=jr&&jr.exports===Qr,$r=Xa?L.Buffer:void 0,Ja=$r?$r.isBuffer:void 0,Qa=Ja||Za;const et=Qa;var ei=9007199254740991,ri=/^(?:0|[1-9]\d*)$/;function ti(e,r){var t=typeof e;return r=r??ei,!!r&&(t=="number"||t!="symbol"&&ri.test(e))&&e>-1&&e%1==0&&e<r}var ni=9007199254740991;function rt(e){return typeof e=="number"&&e>-1&&e%1==0&&e<=ni}var ai="[object Arguments]",ii="[object Array]",oi="[object Boolean]",si="[object Date]",ci="[object Error]",ui="[object Function]",li="[object Map]",fi="[object Number]",di="[object Object]",pi="[object RegExp]",hi="[object Set]",gi="[object String]",vi="[object WeakMap]",yi="[object ArrayBuffer]",bi="[object DataView]",mi="[object Float32Array]",Ti="[object Float64Array]",Si="[object Int8Array]",Ei="[object Int16Array]",ji="[object Int32Array]",$i="[object Uint8Array]",_i="[object Uint8ClampedArray]",wi="[object Uint16Array]",Ai="[object Uint32Array]",E={};E[mi]=E[Ti]=E[Si]=E[Ei]=E[ji]=E[$i]=E[_i]=E[wi]=E[Ai]=!0;E[ai]=E[ii]=E[yi]=E[oi]=E[bi]=E[si]=E[ci]=E[ui]=E[li]=E[fi]=E[di]=E[pi]=E[hi]=E[gi]=E[vi]=!1;function Ci(e){return Z(e)&&rt(e.length)&&!!E[Y(e)]}function Ge(e){return function(r){return e(r)}}var tt=typeof exports=="object"&&exports&&!exports.nodeType&&exports,se=tt&&typeof module=="object"&&module&&!module.nodeType&&module,Oi=se&&se.exports===tt,Me=Oi&&Gr.process,xi=function(){try{var e=se&&se.require&&se.require("util").types;return e||Me&&Me.binding&&Me.binding("util")}catch{}}();const ne=xi;var _r=ne&&ne.isTypedArray,Ii=_r?Ge(_r):Ci;const Fi=Ii;var Mi=Object.prototype,Ri=Mi.hasOwnProperty;function nt(e,r){var t=de(e),n=!t&&qa(e),i=!t&&!n&&et(e),o=!t&&!n&&!i&&Fi(e),s=t||n||i||o,d=s?za(e.length,String):[],y=d.length;for(var b in e)(r||Ri.call(e,b))&&!(s&&(b=="length"||i&&(b=="offset"||b=="parent")||o&&(b=="buffer"||b=="byteLength"||b=="byteOffset")||ti(b,y)))&&d.push(b);return d}var Pi=Object.prototype;function He(e){var r=e&&e.constructor,t=typeof r=="function"&&r.prototype||Pi;return e===t}var Ni=Wr(Object.keys,Object);const Li=Ni;var Bi=Object.prototype,Di=Bi.hasOwnProperty;function Ui(e){if(!He(e))return Li(e);var r=[];for(var t in Object(e))Di.call(e,t)&&t!="constructor"&&r.push(t);return r}function at(e){return e!=null&&rt(e.length)&&!Yr(e)}function We(e){return at(e)?nt(e):Ui(e)}function ki(e,r){return e&&Ee(r,We(r),e)}function Vi(e){var r=[];if(e!=null)for(var t in Object(e))r.push(t);return r}var zi=Object.prototype,Gi=zi.hasOwnProperty;function Hi(e){if(!fe(e))return Vi(e);var r=He(e),t=[];for(var n in e)n=="constructor"&&(r||!Gi.call(e,n))||t.push(n);return t}function Ke(e){return at(e)?nt(e,!0):Hi(e)}function Wi(e,r){return e&&Ee(r,Ke(r),e)}var it=typeof exports=="object"&&exports&&!exports.nodeType&&exports,wr=it&&typeof module=="object"&&module&&!module.nodeType&&module,Ki=wr&&wr.exports===it,Ar=Ki?L.Buffer:void 0,Cr=Ar?Ar.allocUnsafe:void 0;function qi(e,r){if(r)return e.slice();var t=e.length,n=Cr?Cr(t):new e.constructor(t);return e.copy(n),n}function ot(e,r){var t=-1,n=e.length;for(r||(r=Array(n));++t<n;)r[t]=e[t];return r}function Yi(e,r){for(var t=-1,n=e==null?0:e.length,i=0,o=[];++t<n;){var s=e[t];r(s,t,e)&&(o[i++]=s)}return o}function st(){return[]}var Zi=Object.prototype,Xi=Zi.propertyIsEnumerable,Or=Object.getOwnPropertySymbols,Ji=Or?function(e){return e==null?[]:(e=Object(e),Yi(Or(e),function(r){return Xi.call(e,r)}))}:st;const qe=Ji;function Qi(e,r){return Ee(e,qe(e),r)}function ct(e,r){for(var t=-1,n=r.length,i=e.length;++t<n;)e[i+t]=r[t];return e}var eo=Object.getOwnPropertySymbols,ro=eo?function(e){for(var r=[];e;)ct(r,qe(e)),e=ze(e);return r}:st;const ut=ro;function to(e,r){return Ee(e,ut(e),r)}function lt(e,r,t){var n=r(e);return de(e)?n:ct(n,t(e))}function no(e){return lt(e,We,qe)}function ao(e){return lt(e,Ke,ut)}var io=J(L,"DataView");const Be=io;var oo=J(L,"Promise");const De=oo;var so=J(L,"Set");const Ue=so;var co=J(L,"WeakMap");const ke=co;var xr="[object Map]",uo="[object Object]",Ir="[object Promise]",Fr="[object Set]",Mr="[object WeakMap]",Rr="[object DataView]",lo=X(Be),fo=X(ue),po=X(De),ho=X(Ue),go=X(ke),W=Y;(Be&&W(new Be(new ArrayBuffer(1)))!=Rr||ue&&W(new ue)!=xr||De&&W(De.resolve())!=Ir||Ue&&W(new Ue)!=Fr||ke&&W(new ke)!=Mr)&&(W=function(e){var r=Y(e),t=r==uo?e.constructor:void 0,n=t?X(t):"";if(n)switch(n){case lo:return Rr;case fo:return xr;case po:return Ir;case ho:return Fr;case go:return Mr}return r});const Ye=W;var vo=Object.prototype,yo=vo.hasOwnProperty;function bo(e){var r=e.length,t=new e.constructor(r);return r&&typeof e[0]=="string"&&yo.call(e,"index")&&(t.index=e.index,t.input=e.input),t}var mo=L.Uint8Array;const Pr=mo;function Ze(e){var r=new e.constructor(e.byteLength);return new Pr(r).set(new Pr(e)),r}function To(e,r){var t=r?Ze(e.buffer):e.buffer;return new e.constructor(t,e.byteOffset,e.byteLength)}var So=/\w*$/;function Eo(e){var r=new e.constructor(e.source,So.exec(e));return r.lastIndex=e.lastIndex,r}var Nr=V?V.prototype:void 0,Lr=Nr?Nr.valueOf:void 0;function jo(e){return Lr?Object(Lr.call(e)):{}}function $o(e,r){var t=r?Ze(e.buffer):e.buffer;return new e.constructor(t,e.byteOffset,e.length)}var _o="[object Boolean]",wo="[object Date]",Ao="[object Map]",Co="[object Number]",Oo="[object RegExp]",xo="[object Set]",Io="[object String]",Fo="[object Symbol]",Mo="[object ArrayBuffer]",Ro="[object DataView]",Po="[object Float32Array]",No="[object Float64Array]",Lo="[object Int8Array]",Bo="[object Int16Array]",Do="[object Int32Array]",Uo="[object Uint8Array]",ko="[object Uint8ClampedArray]",Vo="[object Uint16Array]",zo="[object Uint32Array]";function Go(e,r,t){var n=e.constructor;switch(r){case Mo:return Ze(e);case _o:case wo:return new n(+e);case Ro:return To(e,t);case Po:case No:case Lo:case Bo:case Do:case Uo:case ko:case Vo:case zo:return $o(e,t);case Ao:return new n;case Co:case Io:return new n(e);case Oo:return Eo(e);case xo:return new n;case Fo:return jo(e)}}var Br=Object.create,Ho=function(){function e(){}return function(r){if(!fe(r))return{};if(Br)return Br(r);e.prototype=r;var t=new e;return e.prototype=void 0,t}}();const Wo=Ho;function Ko(e){return typeof e.constructor=="function"&&!He(e)?Wo(ze(e)):{}}var qo="[object Map]";function Yo(e){return Z(e)&&Ye(e)==qo}var Dr=ne&&ne.isMap,Zo=Dr?Ge(Dr):Yo;const Xo=Zo;var Jo="[object Set]";function Qo(e){return Z(e)&&Ye(e)==Jo}var Ur=ne&&ne.isSet,es=Ur?Ge(Ur):Qo;const rs=es;var ts=1,ns=2,as=4,ft="[object Arguments]",is="[object Array]",os="[object Boolean]",ss="[object Date]",cs="[object Error]",dt="[object Function]",us="[object GeneratorFunction]",ls="[object Map]",fs="[object Number]",pt="[object Object]",ds="[object RegExp]",ps="[object Set]",hs="[object String]",gs="[object Symbol]",vs="[object WeakMap]",ys="[object ArrayBuffer]",bs="[object DataView]",ms="[object Float32Array]",Ts="[object Float64Array]",Ss="[object Int8Array]",Es="[object Int16Array]",js="[object Int32Array]",$s="[object Uint8Array]",_s="[object Uint8ClampedArray]",ws="[object Uint16Array]",As="[object Uint32Array]",S={};S[ft]=S[is]=S[ys]=S[bs]=S[os]=S[ss]=S[ms]=S[Ts]=S[Ss]=S[Es]=S[js]=S[ls]=S[fs]=S[pt]=S[ds]=S[ps]=S[hs]=S[gs]=S[$s]=S[_s]=S[ws]=S[As]=!0;S[cs]=S[dt]=S[vs]=!1;function ye(e,r,t,n,i,o){var s,d=r&ts,y=r&ns,b=r&as;if(t&&(s=i?t(e,n,i,o):t(e)),s!==void 0)return s;if(!fe(e))return e;var O=de(e);if(O){if(s=bo(e),!d)return ot(e,s)}else{var $=Ye(e),l=$==dt||$==us;if(et(e))return qi(e,d);if($==pt||$==ft||l&&!i){if(s=y||l?{}:Ko(e),!d)return y?to(e,Wi(s,e)):Qi(e,ki(s,e))}else{if(!S[$])return i?e:{};s=Go(e,$,d)}}o||(o=new ae);var x=o.get(e);if(x)return x;o.set(e,s),rs(e)?e.forEach(function(A){s.add(ye(A,r,t,A,e,o))}):Xo(e)&&e.forEach(function(A,j){s.set(j,ye(A,r,t,j,e,o))});var B=b?y?ao:no:y?Ke:We,P=O?void 0:B(e);return Da(P||e,function(A,j){P&&(j=A,A=e[j]),Xr(s,j,ye(A,r,t,j,e,o))}),s}var Cs=4;function kr(e){return ye(e,Cs)}function ht(e,r){for(var t=-1,n=e==null?0:e.length,i=Array(n);++t<n;)i[t]=r(e[t],t,e);return i}var Os="[object Symbol]";function Xe(e){return typeof e=="symbol"||Z(e)&&Y(e)==Os}var xs="Expected a function";function Je(e,r){if(typeof e!="function"||r!=null&&typeof r!="function")throw new TypeError(xs);var t=function(){var n=arguments,i=r?r.apply(this,n):n[0],o=t.cache;if(o.has(i))return o.get(i);var s=e.apply(this,n);return t.cache=o.set(i,s)||o,s};return t.cache=new(Je.Cache||z),t}Je.Cache=z;var Is=500;function Fs(e){var r=Je(e,function(n){return t.size===Is&&t.clear(),n}),t=r.cache;return r}var Ms=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,Rs=/\\(\\)?/g,Ps=Fs(function(e){var r=[];return e.charCodeAt(0)===46&&r.push(""),e.replace(Ms,function(t,n,i,o){r.push(i?o.replace(Rs,"$1"):n||t)}),r});const Ns=Ps;var Ls=1/0;function Bs(e){if(typeof e=="string"||Xe(e))return e;var r=e+"";return r=="0"&&1/e==-Ls?"-0":r}var Ds=1/0,Vr=V?V.prototype:void 0,zr=Vr?Vr.toString:void 0;function gt(e){if(typeof e=="string")return e;if(de(e))return ht(e,gt)+"";if(Xe(e))return zr?zr.call(e):"";var r=e+"";return r=="0"&&1/e==-Ds?"-0":r}function Us(e){return e==null?"":gt(e)}function vt(e){return de(e)?ht(e,Bs):Xe(e)?[e]:ot(Ns(Us(e)))}function w(){return w=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e},w.apply(this,arguments)}function yt(e,r){if(e==null)return{};var t={},n=Object.keys(e),i,o;for(o=0;o<n.length;o++)i=n[o],!(r.indexOf(i)>=0)&&(t[i]=e[i]);return t}var je=p.createContext(void 0);je.displayName="FormikContext";je.Provider;je.Consumer;function ks(){var e=p.useContext(je);return e||zn(!1),e}var R=function(r){return typeof r=="function"},$e=function(r){return r!==null&&typeof r=="object"},Vs=function(r){return String(Math.floor(Number(r)))===r},Re=function(r){return Object.prototype.toString.call(r)==="[object String]"},Pe=function(r){return $e(r)&&R(r.then)};function I(e,r,t,n){n===void 0&&(n=0);for(var i=vt(r);e&&n<i.length;)e=e[i[n++]];return n!==i.length&&!e||e===void 0?t:e}function K(e,r,t){for(var n=kr(e),i=n,o=0,s=vt(r);o<s.length-1;o++){var d=s[o],y=I(e,s.slice(0,o+1));if(y&&($e(y)||Array.isArray(y)))i=i[d]=kr(y);else{var b=s[o+1];i=i[d]=Vs(b)&&Number(b)>=0?[]:{}}}return(o===0?e:i)[s[o]]===t?e:(t===void 0?delete i[s[o]]:i[s[o]]=t,o===0&&t===void 0&&delete n[s[o]],n)}function bt(e,r,t,n){t===void 0&&(t=new WeakMap),n===void 0&&(n={});for(var i=0,o=Object.keys(e);i<o.length;i++){var s=o[i],d=e[s];$e(d)?t.get(d)||(t.set(d,!0),n[s]=Array.isArray(d)?[]:{},bt(d,r,t,n[s])):n[s]=r}return n}function zs(e,r){switch(r.type){case"SET_VALUES":return w({},e,{values:r.payload});case"SET_TOUCHED":return w({},e,{touched:r.payload});case"SET_ERRORS":return H(e.errors,r.payload)?e:w({},e,{errors:r.payload});case"SET_STATUS":return w({},e,{status:r.payload});case"SET_ISSUBMITTING":return w({},e,{isSubmitting:r.payload});case"SET_ISVALIDATING":return w({},e,{isValidating:r.payload});case"SET_FIELD_VALUE":return w({},e,{values:K(e.values,r.payload.field,r.payload.value)});case"SET_FIELD_TOUCHED":return w({},e,{touched:K(e.touched,r.payload.field,r.payload.value)});case"SET_FIELD_ERROR":return w({},e,{errors:K(e.errors,r.payload.field,r.payload.value)});case"RESET_FORM":return w({},e,r.payload);case"SET_FORMIK_STATE":return r.payload(e);case"SUBMIT_ATTEMPT":return w({},e,{touched:bt(e.values,!0),isSubmitting:!0,submitCount:e.submitCount+1});case"SUBMIT_FAILURE":return w({},e,{isSubmitting:!1});case"SUBMIT_SUCCESS":return w({},e,{isSubmitting:!1});default:return e}}var G={},ve={};function Gs(e){var r=e.validateOnChange,t=r===void 0?!0:r,n=e.validateOnBlur,i=n===void 0?!0:n,o=e.validateOnMount,s=o===void 0?!1:o,d=e.isInitialValid,y=e.enableReinitialize,b=y===void 0?!1:y,O=e.onSubmit,$=yt(e,["validateOnChange","validateOnBlur","validateOnMount","isInitialValid","enableReinitialize","onSubmit"]),l=w({validateOnChange:t,validateOnBlur:i,validateOnMount:s,onSubmit:O},$),x=p.useRef(l.initialValues),B=p.useRef(l.initialErrors||G),P=p.useRef(l.initialTouched||ve),A=p.useRef(l.initialStatus),j=p.useRef(!1),k=p.useRef({});p.useEffect(function(){return j.current=!0,function(){j.current=!1}},[]);var mt=p.useState(0),Tt=mt[1],pe=p.useRef({values:l.initialValues,errors:l.initialErrors||G,touched:l.initialTouched||ve,status:l.initialStatus,isSubmitting:!1,isValidating:!1,submitCount:0}),T=pe.current,m=p.useCallback(function(a){var c=pe.current;pe.current=zs(c,a),c!==pe.current&&Tt(function(u){return u+1})},[]),Qe=p.useCallback(function(a,c){return new Promise(function(u,f){var g=l.validate(a,c);g==null?u(G):Pe(g)?g.then(function(v){u(v||G)},function(v){f(v)}):u(g)})},[l.validate]),_e=p.useCallback(function(a,c){var u=l.validationSchema,f=R(u)?u(c):u,g=c&&f.validateAt?f.validateAt(c,a):Ws(a,f);return new Promise(function(v,_){g.then(function(){v(G)},function(D){D.name==="ValidationError"?v(Hs(D)):_(D)})})},[l.validationSchema]),er=p.useCallback(function(a,c){return new Promise(function(u){return u(k.current[a].validate(c))})},[]),rr=p.useCallback(function(a){var c=Object.keys(k.current).filter(function(f){return R(k.current[f].validate)}),u=c.length>0?c.map(function(f){return er(f,I(a,f))}):[Promise.resolve("DO_NOT_DELETE_YOU_WILL_BE_FIRED")];return Promise.all(u).then(function(f){return f.reduce(function(g,v,_){return v==="DO_NOT_DELETE_YOU_WILL_BE_FIRED"||v&&(g=K(g,c[_],v)),g},{})})},[er]),St=p.useCallback(function(a){return Promise.all([rr(a),l.validationSchema?_e(a):{},l.validate?Qe(a):{}]).then(function(c){var u=c[0],f=c[1],g=c[2],v=Ne.all([u,f,g],{arrayMerge:Ks});return v})},[l.validate,l.validationSchema,rr,Qe,_e]),M=F(function(a){return a===void 0&&(a=T.values),m({type:"SET_ISVALIDATING",payload:!0}),St(a).then(function(c){return j.current&&(m({type:"SET_ISVALIDATING",payload:!1}),m({type:"SET_ERRORS",payload:c})),c})});p.useEffect(function(){s&&j.current===!0&&H(x.current,l.initialValues)&&M(x.current)},[s,M]);var ie=p.useCallback(function(a){var c=a&&a.values?a.values:x.current,u=a&&a.errors?a.errors:B.current?B.current:l.initialErrors||{},f=a&&a.touched?a.touched:P.current?P.current:l.initialTouched||{},g=a&&a.status?a.status:A.current?A.current:l.initialStatus;x.current=c,B.current=u,P.current=f,A.current=g;var v=function(){m({type:"RESET_FORM",payload:{isSubmitting:!!a&&!!a.isSubmitting,errors:u,touched:f,status:g,values:c,isValidating:!!a&&!!a.isValidating,submitCount:a&&a.submitCount&&typeof a.submitCount=="number"?a.submitCount:0}})};if(l.onReset){var _=l.onReset(T.values,fr);Pe(_)?_.then(v):v()}else v()},[l.initialErrors,l.initialStatus,l.initialTouched,l.onReset]);p.useEffect(function(){j.current===!0&&!H(x.current,l.initialValues)&&b&&(x.current=l.initialValues,ie(),s&&M(x.current))},[b,l.initialValues,ie,s,M]),p.useEffect(function(){b&&j.current===!0&&!H(B.current,l.initialErrors)&&(B.current=l.initialErrors||G,m({type:"SET_ERRORS",payload:l.initialErrors||G}))},[b,l.initialErrors]),p.useEffect(function(){b&&j.current===!0&&!H(P.current,l.initialTouched)&&(P.current=l.initialTouched||ve,m({type:"SET_TOUCHED",payload:l.initialTouched||ve}))},[b,l.initialTouched]),p.useEffect(function(){b&&j.current===!0&&!H(A.current,l.initialStatus)&&(A.current=l.initialStatus,m({type:"SET_STATUS",payload:l.initialStatus}))},[b,l.initialStatus,l.initialTouched]);var tr=F(function(a){if(k.current[a]&&R(k.current[a].validate)){var c=I(T.values,a),u=k.current[a].validate(c);return Pe(u)?(m({type:"SET_ISVALIDATING",payload:!0}),u.then(function(f){return f}).then(function(f){m({type:"SET_FIELD_ERROR",payload:{field:a,value:f}}),m({type:"SET_ISVALIDATING",payload:!1})})):(m({type:"SET_FIELD_ERROR",payload:{field:a,value:u}}),Promise.resolve(u))}else if(l.validationSchema)return m({type:"SET_ISVALIDATING",payload:!0}),_e(T.values,a).then(function(f){return f}).then(function(f){m({type:"SET_FIELD_ERROR",payload:{field:a,value:I(f,a)}}),m({type:"SET_ISVALIDATING",payload:!1})});return Promise.resolve()}),Et=p.useCallback(function(a,c){var u=c.validate;k.current[a]={validate:u}},[]),jt=p.useCallback(function(a){delete k.current[a]},[]),nr=F(function(a,c){m({type:"SET_TOUCHED",payload:a});var u=c===void 0?i:c;return u?M(T.values):Promise.resolve()}),ar=p.useCallback(function(a){m({type:"SET_ERRORS",payload:a})},[]),ir=F(function(a,c){var u=R(a)?a(T.values):a;m({type:"SET_VALUES",payload:u});var f=c===void 0?t:c;return f?M(u):Promise.resolve()}),he=p.useCallback(function(a,c){m({type:"SET_FIELD_ERROR",payload:{field:a,value:c}})},[]),Q=F(function(a,c,u){m({type:"SET_FIELD_VALUE",payload:{field:a,value:c}});var f=u===void 0?t:u;return f?M(K(T.values,a,c)):Promise.resolve()}),or=p.useCallback(function(a,c){var u=c,f=a,g;if(!Re(a)){a.persist&&a.persist();var v=a.target?a.target:a.currentTarget,_=v.type,D=v.name,xe=v.id,Ie=v.value,Ft=v.checked,Qs=v.outerHTML,dr=v.options,Mt=v.multiple;u=c||D||xe,f=/number|range/.test(_)?(g=parseFloat(Ie),isNaN(g)?"":g):/checkbox/.test(_)?Ys(I(T.values,u),Ft,Ie):dr&&Mt?qs(dr):Ie}u&&Q(u,f)},[Q,T.values]),we=F(function(a){if(Re(a))return function(c){return or(c,a)};or(a)}),ee=F(function(a,c,u){c===void 0&&(c=!0),m({type:"SET_FIELD_TOUCHED",payload:{field:a,value:c}});var f=u===void 0?i:u;return f?M(T.values):Promise.resolve()}),sr=p.useCallback(function(a,c){a.persist&&a.persist();var u=a.target,f=u.name,g=u.id,v=u.outerHTML,_=c||f||g;ee(_,!0)},[ee]),Ae=F(function(a){if(Re(a))return function(c){return sr(c,a)};sr(a)}),cr=p.useCallback(function(a){R(a)?m({type:"SET_FORMIK_STATE",payload:a}):m({type:"SET_FORMIK_STATE",payload:function(){return a}})},[]),ur=p.useCallback(function(a){m({type:"SET_STATUS",payload:a})},[]),lr=p.useCallback(function(a){m({type:"SET_ISSUBMITTING",payload:a})},[]),Ce=F(function(){return m({type:"SUBMIT_ATTEMPT"}),M().then(function(a){var c=a instanceof Error,u=!c&&Object.keys(a).length===0;if(u){var f;try{if(f=_t(),f===void 0)return}catch(g){throw g}return Promise.resolve(f).then(function(g){return j.current&&m({type:"SUBMIT_SUCCESS"}),g}).catch(function(g){if(j.current)throw m({type:"SUBMIT_FAILURE"}),g})}else if(j.current&&(m({type:"SUBMIT_FAILURE"}),c))throw a})}),$t=F(function(a){a&&a.preventDefault&&R(a.preventDefault)&&a.preventDefault(),a&&a.stopPropagation&&R(a.stopPropagation)&&a.stopPropagation(),Ce().catch(function(c){console.warn("Warning: An unhandled error was caught from submitForm()",c)})}),fr={resetForm:ie,validateForm:M,validateField:tr,setErrors:ar,setFieldError:he,setFieldTouched:ee,setFieldValue:Q,setStatus:ur,setSubmitting:lr,setTouched:nr,setValues:ir,setFormikState:cr,submitForm:Ce},_t=F(function(){return O(T.values,fr)}),wt=F(function(a){a&&a.preventDefault&&R(a.preventDefault)&&a.preventDefault(),a&&a.stopPropagation&&R(a.stopPropagation)&&a.stopPropagation(),ie()}),At=p.useCallback(function(a){return{value:I(T.values,a),error:I(T.errors,a),touched:!!I(T.touched,a),initialValue:I(x.current,a),initialTouched:!!I(P.current,a),initialError:I(B.current,a)}},[T.errors,T.touched,T.values]),Ct=p.useCallback(function(a){return{setValue:function(u,f){return Q(a,u,f)},setTouched:function(u,f){return ee(a,u,f)},setError:function(u){return he(a,u)}}},[Q,ee,he]),Ot=p.useCallback(function(a){var c=$e(a),u=c?a.name:a,f=I(T.values,u),g={name:u,value:f,onChange:we,onBlur:Ae};if(c){var v=a.type,_=a.value,D=a.as,xe=a.multiple;v==="checkbox"?_===void 0?g.checked=!!f:(g.checked=!!(Array.isArray(f)&&~f.indexOf(_)),g.value=_):v==="radio"?(g.checked=f===_,g.value=_):D==="select"&&xe&&(g.value=g.value||[],g.multiple=!0)}return g},[Ae,we,T.values]),Oe=p.useMemo(function(){return!H(x.current,T.values)},[x.current,T.values]),xt=p.useMemo(function(){return typeof d<"u"?Oe?T.errors&&Object.keys(T.errors).length===0:d!==!1&&R(d)?d(l):d:T.errors&&Object.keys(T.errors).length===0},[d,Oe,T.errors,l]),It=w({},T,{initialValues:x.current,initialErrors:B.current,initialTouched:P.current,initialStatus:A.current,handleBlur:Ae,handleChange:we,handleReset:wt,handleSubmit:$t,resetForm:ie,setErrors:ar,setFormikState:cr,setFieldTouched:ee,setFieldValue:Q,setFieldError:he,setStatus:ur,setSubmitting:lr,setTouched:nr,setValues:ir,submitForm:Ce,validateForm:M,validateField:tr,isValid:xt,dirty:Oe,unregisterField:jt,registerField:Et,getFieldProps:Ot,getFieldMeta:At,getFieldHelpers:Ct,validateOnBlur:i,validateOnChange:t,validateOnMount:s});return It}function Hs(e){var r={};if(e.inner){if(e.inner.length===0)return K(r,e.path,e.message);for(var i=e.inner,t=Array.isArray(i),n=0,i=t?i:i[Symbol.iterator]();;){var o;if(t){if(n>=i.length)break;o=i[n++]}else{if(n=i.next(),n.done)break;o=n.value}var s=o;I(r,s.path)||(r=K(r,s.path,s.message))}}return r}function Ws(e,r,t,n){t===void 0&&(t=!1);var i=Ve(e);return r[t?"validateSync":"validate"](i,{abortEarly:!1,context:n||i})}function Ve(e){var r=Array.isArray(e)?[]:{};for(var t in e)if(Object.prototype.hasOwnProperty.call(e,t)){var n=String(t);Array.isArray(e[n])===!0?r[n]=e[n].map(function(i){return Array.isArray(i)===!0||yr(i)?Ve(i):i!==""?i:void 0}):yr(e[n])?r[n]=Ve(e[n]):r[n]=e[n]!==""?e[n]:void 0}return r}function Ks(e,r,t){var n=e.slice();return r.forEach(function(o,s){if(typeof n[s]>"u"){var d=t.clone!==!1,y=d&&t.isMergeableObject(o);n[s]=y?Ne(Array.isArray(o)?[]:{},o,t):o}else t.isMergeableObject(o)?n[s]=Ne(e[s],o,t):e.indexOf(o)===-1&&n.push(o)}),n}function qs(e){return Array.from(e).filter(function(r){return r.selected}).map(function(r){return r.value})}function Ys(e,r,t){if(typeof e=="boolean")return!!r;var n=[],i=!1,o=-1;if(Array.isArray(e))n=e,o=e.indexOf(t),i=o>=0;else if(!t||t=="true"||t=="false")return!!r;return r&&t&&!i?n.concat(t):i?n.slice(0,o).concat(n.slice(o+1)):n}var Zs=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u"?p.useLayoutEffect:p.useEffect;function F(e){var r=p.useRef(e);return Zs(function(){r.current=e}),p.useCallback(function(){for(var t=arguments.length,n=new Array(t),i=0;i<t;i++)n[i]=arguments[i];return r.current.apply(void 0,n)},[])}var Xs=p.forwardRef(function(e,r){var t=e.action,n=yt(e,["action"]),i=t??"#",o=ks(),s=o.handleReset,d=o.handleSubmit;return p.createElement("form",w({onSubmit:d,ref:r,onReset:s,action:i},n))});Xs.displayName="Form";function Js(e){return en({tag:"svg",attr:{version:"1.2",baseProfile:"tiny",viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M13.839 17.525c-.006.002-.559.186-1.039.186-.265 0-.372-.055-.406-.079-.168-.117-.48-.336.054-1.4l1-1.994c.593-1.184.681-2.329.245-3.225-.356-.733-1.039-1.236-1.92-1.416-.317-.065-.639-.097-.958-.097-1.849 0-3.094 1.08-3.146 1.126-.179.158-.221.42-.102.626.12.206.367.3.595.222.005-.002.559-.187 1.039-.187.263 0 .369.055.402.078.169.118.482.34-.051 1.402l-1 1.995c-.594 1.185-.681 2.33-.245 3.225.356.733 1.038 1.236 1.921 1.416.314.063.636.097.954.097 1.85 0 3.096-1.08 3.148-1.126.179-.157.221-.42.102-.626-.12-.205-.369-.297-.593-.223z"}},{tag:"circle",attr:{cx:"13",cy:"6.001",r:"2.5"}}]})(e)}function ac(){const[e,r]=p.useState({checked:!1,theme:"light"}),t=s=>{const d={};return s.firstName||(d.firstName="Required"),s.lastName||(d.lastName="Required"),s.email?/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(s.email)||(d.email="Invalid email address"):d.email="Required",s.password?/^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*\W)(?!.* ).{8,16}$/.test(s.password)||(d.password="Invalid Password"):d.password="Required",d},n=()=>{alert("Password must contain one digit from 1 to 9, one lowercase letter, one uppercase letter, one special character, no space, and it must be 8-16 characters long.")},i=Gs({initialValues:{firstName:"",lastName:"",email:"",password:""},validate:t,onSubmit:s=>{alert(JSON.stringify(s,null,2))}}),o=s=>{r({...e,checked:s.target.checked,theme:s.target.checked?"dark":"light"})};return h.jsxs("div",{className:"signUp dark light",children:[h.jsx("div",{className:"signUpForm",children:h.jsx(Nt,{theme:Xt({palette:{mode:e.theme}}),children:h.jsxs(Lt,{component:"main",maxWidth:"xs",children:[h.jsx(Bt,{}),h.jsxs(pr,{sx:{marginTop:8,display:"flex",flexDirection:"column",alignItems:"center"},children:[h.jsx(Dt,{sx:{m:1,bgcolor:"secondary.main"},children:h.jsx(Ut,{})}),h.jsx(Jt,{component:"h1",variant:"h5",children:"Sign up"}),h.jsx(N,{item:!0,children:h.jsx(hr,{href:"/E-commerce-BD-",variant:"body2",children:"continue shopping"})}),h.jsxs(pr,{component:"form",noValidate:!0,onSubmit:i.handleSubmit,sx:{mt:3},children:[h.jsxs(N,{container:!0,spacing:2,children:[h.jsxs(N,{item:!0,xs:12,sm:6,children:[h.jsx(ge,{autoComplete:"given-name",name:"firstName",required:!0,fullWidth:!0,id:"firstName",label:"First Name",onChange:i.handleChange,value:i.values.firstName,onBlur:i.handleBlur,autoFocus:!0}),i.touched.firstName&&i.errors.firstName?h.jsx("div",{id:"errorStyle",children:i.errors.firstName}):null]}),h.jsxs(N,{item:!0,xs:12,sm:6,children:[h.jsx(ge,{required:!0,fullWidth:!0,id:"lastName",label:"Last Name",name:"lastName",autoComplete:"family-name",onChange:i.handleChange,value:i.values.lastName,onBlur:i.handleBlur}),i.touched.lastName&&i.errors.lastName?h.jsx("div",{id:"errorStyle",children:i.errors.lastName}):null]}),h.jsxs(N,{item:!0,xs:12,children:[h.jsx(ge,{required:!0,fullWidth:!0,id:"email",label:"Email Address",name:"email",autoComplete:"email",onChange:i.handleChange,value:i.values.email,onBlur:i.handleBlur}),i.touched.email&&i.errors.email?h.jsx("div",{id:"errorStyle",children:i.errors.email}):null]}),h.jsxs(N,{item:!0,xs:12,children:[h.jsx(ge,{required:!0,fullWidth:!0,name:"password",label:"Password",type:"password",id:"password",autoComplete:"new-password",onChange:i.handleChange,onBlur:i.handleBlur,value:i.values.password}),h.jsx(Js,{onClick:n}),i.touched.password&&i.errors.password?h.jsx("div",{id:"errorStyle",children:i.errors.password}):null]}),h.jsx(N,{item:!0,xs:12,children:h.jsx(kt,{control:h.jsx(Vt,{value:"allowExtraEmails",color:"primary"}),label:"I want to receive inspiration, marketing promotions and updates via email."})})]}),h.jsx(Qt,{type:"submit",fullWidth:!0,variant:"contained",sx:{mt:3,mb:2},children:"Sign Up"}),h.jsxs(N,{container:!0,justifyContent:"flex-end",spacing:14,children:[h.jsx(N,{item:!0,children:h.jsx(fn,{checked:e.checked,onChange:o,inputProps:{"aria-label":"controlled"}})}),h.jsx(N,{item:!0,children:h.jsx(hr,{href:"/E-commerce-BD-/SignIn",variant:"body2",children:"Already have an account? Sign in"})})]})]})]})]})})}),h.jsx("div",{className:"signUpImg",children:h.jsx("img",{src:"https://img.freepik.com/free-vector/sign-up-concept-illustration_114360-7885.jpg"})})]})}export{ac as default};
