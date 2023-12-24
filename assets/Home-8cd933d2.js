import{u as A,r as f,j as a}from"./index-1d565f56.js";import{g as p,a as u,s as h,P as N,u as w,_ as b,b as l,c as M,d as g,T as D,B as C}from"./Typography-1387fcca.js";import{G as y}from"./iconBase-27d7d408.js";const k="/E-commerce-BD-/assets/battalaDukanam-d19cc745.gif";const B=()=>{const t="navPage",o=A(),[s,i]=f.useState(""),[r,c]=f.useState("container"),n=()=>{e(""),o("/E-commerce-BD-/SignIn")},e=m=>{i(m)},d=()=>{c(r==="change"?"container":"change")};return a.jsxs("nav",{className:"navbar fixed-top",children:[a.jsx("a",{className:"navbar-brand",href:"#",onClick:()=>e(""),children:a.jsx("img",{className:"bdLogo",src:k})}),a.jsxs("div",{className:"d-grid d-md-flex navigationPages",children:[a.jsx("a",{className:`${t}${s==="ev"?"clicked":""}`,href:"#",onClick:()=>e("ev"),children:"Every thing"}),a.jsx("a",{className:`${t}${s==="men"?"clicked":""}`,href:"#",onClick:()=>e("men"),children:"Men"}),a.jsx("a",{className:`${t}${s==="women"?"clicked":""}`,href:"#",onClick:()=>e("women"),children:"Women"}),a.jsx("a",{type:"button",className:"btn btn-secondary",onClick:()=>n(),children:"Sign In"}),a.jsxs("div",{className:r,onClick:()=>d(),children:[a.jsx("div",{className:"bar1"}),a.jsx("div",{className:"bar2"}),a.jsx("div",{className:"bar3"})]})]})]})};function Z(t){return p("MuiCard",t)}u("MuiCard",["root"]);const W=["className","raised"],q=t=>{const{classes:o}=t;return g({root:["root"]},Z,o)},V=h(N,{name:"MuiCard",slot:"Root",overridesResolver:(t,o)=>o.root})(()=>({overflow:"hidden"})),_=f.forwardRef(function(o,s){const i=w({props:o,name:"MuiCard"}),{className:r,raised:c=!1}=i,n=b(i,W),e=l({},i,{raised:c}),d=q(e);return a.jsx(V,l({className:M(d.root,r),elevation:c?8:void 0,ref:s,ownerState:e},n))}),S=_;function $(t){return p("MuiCardActions",t)}u("MuiCardActions",["root","spacing"]);const I=["disableSpacing","className"],R=t=>{const{classes:o,disableSpacing:s}=t;return g({root:["root",!s&&"spacing"]},$,o)},L=h("div",{name:"MuiCardActions",slot:"Root",overridesResolver:(t,o)=>{const{ownerState:s}=t;return[o.root,!s.disableSpacing&&o.spacing]}})(({ownerState:t})=>l({display:"flex",alignItems:"center",padding:8},!t.disableSpacing&&{"& > :not(:first-of-type)":{marginLeft:8}})),E=f.forwardRef(function(o,s){const i=w({props:o,name:"MuiCardActions"}),{disableSpacing:r=!1,className:c}=i,n=b(i,I),e=l({},i,{disableSpacing:r}),d=R(e);return a.jsx(L,l({className:M(d.root,c),ownerState:e,ref:s},n))}),z=E;function P(t){return p("MuiCardContent",t)}u("MuiCardContent",["root"]);const U=["className","component"],O=t=>{const{classes:o}=t;return g({root:["root"]},P,o)},T=h("div",{name:"MuiCardContent",slot:"Root",overridesResolver:(t,o)=>o.root})(()=>({padding:16,"&:last-child":{paddingBottom:24}})),F=f.forwardRef(function(o,s){const i=w({props:o,name:"MuiCardContent"}),{className:r,component:c="div"}=i,n=b(i,U),e=l({},i,{component:c}),d=O(e);return a.jsx(T,l({as:c,className:M(d.root,r),ownerState:e,ref:s},n))}),Y=F;function J(t){return p("MuiCardMedia",t)}u("MuiCardMedia",["root","media","img"]);const Q=["children","className","component","image","src","style"],K=t=>{const{classes:o,isMediaComponent:s,isImageComponent:i}=t;return g({root:["root",s&&"media",i&&"img"]},J,o)},X=h("div",{name:"MuiCardMedia",slot:"Root",overridesResolver:(t,o)=>{const{ownerState:s}=t,{isMediaComponent:i,isImageComponent:r}=s;return[o.root,i&&o.media,r&&o.img]}})(({ownerState:t})=>l({display:"block",backgroundSize:"cover",backgroundRepeat:"no-repeat",backgroundPosition:"center"},t.isMediaComponent&&{width:"100%"},t.isImageComponent&&{objectFit:"cover"})),tt=["video","audio","picture","iframe","img"],at=["picture","img"],st=f.forwardRef(function(o,s){const i=w({props:o,name:"MuiCardMedia"}),{children:r,className:c,component:n="div",image:e,src:d,style:m}=i,j=b(i,Q),x=tt.indexOf(n)!==-1,G=!x&&e?l({backgroundImage:`url("${e}")`},m):m,H=l({},i,{component:n,isMediaComponent:x,isImageComponent:at.indexOf(n)!==-1}),v=K(H);return a.jsx(X,l({className:M(v.root,c),as:n,role:!x&&e?"img":void 0,ref:s,style:G,ownerState:H,src:x?e||d:void 0},j,{children:r}))}),ot=st,it=[{cardImg:"https://images.unsplash.com/photo-1682695794947-17061dc284dd?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwyNnx8fGVufDB8fHx8fA%3D%3D",brandName:"ZARA",Description:"Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica"},{cardImg:"https://images.unsplash.com/photo-1701953585902-aedd94ce5820?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDE0fFM0TUtMQXNCQjc0fHxlbnwwfHx8fHw%3D",brandName:"ADIDAS",Description:"Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica"},{cardImg:"https://plus.unsplash.com/premium_photo-1701208039710-5903cc30ef85?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE2fHx8ZW58MHx8fHx8",brandName:"NIKE",Description:"Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica"}];function et(){return a.jsx("div",{className:"homeCard",children:it.map(t=>a.jsxs(S,{id:"cards",sx:{maxWidth:345},children:[a.jsx(ot,{sx:{height:140},image:t.cardImg,title:"green iguana"}),a.jsxs(Y,{children:[a.jsx(D,{gutterBottom:!0,variant:"h5",component:"div",children:t.brandName}),a.jsx(D,{variant:"body2",color:"text.secondary",children:t.Description})]}),a.jsxs(z,{children:[a.jsx(C,{size:"small",children:"Share"}),a.jsx(C,{size:"small",children:"Learn More"})]})]},t.brandName))})}function rt(t){return y({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0z"}},{tag:"path",attr:{d:"M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"}}]})(t)}function nt(t){return y({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0z"}},{tag:"path",attr:{d:"M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"}}]})(t)}const ct=[{id:1,img:"https://images.unsplash.com/photo-1682685797795-5640f369a70a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHx8"},{id:2,img:"https://images.unsplash.com/photo-1701781741792-970f3810f103?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDN8fHxlbnwwfHx8fHw%3D"},{id:3,img:"https://images.unsplash.com/photo-1682695797873-aa4cb6edd613?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwzNnx8fGVufDB8fHx8fA%3D%3D"},{id:4,img:"https://images.unsplash.com/photo-1682686580849-3e7f67df4015?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDV8fHxlbnwwfHx8fHw%3D"},{id:5,img:"https://plus.unsplash.com/premium_photo-1661849963038-7a735f000ae0?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDh8fHxlbnwwfHx8fHw%3D"},{id:5,img:"https://plus.unsplash.com/premium_photo-1661849963038-7a735f000ae0?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDh8fHxlbnwwfHx8fHw%3D"},{id:5,img:"https://plus.unsplash.com/premium_photo-1661849963038-7a735f000ae0?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDh8fHxlbnwwfHx8fHw%3D"},{id:5,img:"https://plus.unsplash.com/premium_photo-1661849963038-7a735f000ae0?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDh8fHxlbnwwfHx8fHw%3D"},{id:5,img:"https://plus.unsplash.com/premium_photo-1661849963038-7a735f000ae0?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDh8fHxlbnwwfHx8fHw%3D"},{id:5,img:"https://plus.unsplash.com/premium_photo-1661849963038-7a735f000ae0?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDh8fHxlbnwwfHx8fHw%3D"},{id:5,img:"https://plus.unsplash.com/premium_photo-1661849963038-7a735f000ae0?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDh8fHxlbnwwfHx8fHw%3D"},{id:5,img:"https://plus.unsplash.com/premium_photo-1661849963038-7a735f000ae0?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDh8fHxlbnwwfHx8fHw%3D"},{id:5,img:"https://plus.unsplash.com/premium_photo-1661849963038-7a735f000ae0?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDh8fHxlbnwwfHx8fHw%3D"},{id:5,img:"https://plus.unsplash.com/premium_photo-1661849963038-7a735f000ae0?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDh8fHxlbnwwfHx8fHw%3D"},{id:5,img:"https://plus.unsplash.com/premium_photo-1661849963038-7a735f000ae0?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDh8fHxlbnwwfHx8fHw%3D"},{id:5,img:"https://plus.unsplash.com/premium_photo-1661849963038-7a735f000ae0?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDh8fHxlbnwwfHx8fHw%3D"},{id:5,img:"https://plus.unsplash.com/premium_photo-1661849963038-7a735f000ae0?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDh8fHxlbnwwfHx8fHw%3D"},{id:5,img:"https://plus.unsplash.com/premium_photo-1661849963038-7a735f000ae0?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDh8fHxlbnwwfHx8fHw%3D"},{id:5,img:"https://plus.unsplash.com/premium_photo-1661849963038-7a735f000ae0?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDh8fHxlbnwwfHx8fHw%3D"},{id:5,img:"https://plus.unsplash.com/premium_photo-1661849963038-7a735f000ae0?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDh8fHxlbnwwfHx8fHw%3D"},{id:5,img:"https://plus.unsplash.com/premium_photo-1661849963038-7a735f000ae0?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDh8fHxlbnwwfHx8fHw%3D"},{id:5,img:"https://plus.unsplash.com/premium_photo-1661849963038-7a735f000ae0?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDh8fHxlbnwwfHx8fHw%3D"},{id:5,img:"https://plus.unsplash.com/premium_photo-1661849963038-7a735f000ae0?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDh8fHxlbnwwfHx8fHw%3D"},{id:5,img:"https://plus.unsplash.com/premium_photo-1661849963038-7a735f000ae0?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDh8fHxlbnwwfHx8fHw%3D"},{id:5,img:"https://plus.unsplash.com/premium_photo-1661849963038-7a735f000ae0?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDh8fHxlbnwwfHx8fHw%3D"},{id:5,img:"https://plus.unsplash.com/premium_photo-1661849963038-7a735f000ae0?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDh8fHxlbnwwfHx8fHw%3D"}],lt=()=>{const t=()=>{let s=document.getElementById("slider");s.scrollLeft=s.scrollLeft-400},o=()=>{let s=document.getElementById("slider");s.scrollLeft=s.scrollLeft+400};return a.jsxs("div",{className:"logoWrapper",children:[a.jsx(rt,{className:"chevron",onClick:t,size:40}),a.jsx("div",{id:"slider",className:"carosonal",children:ct.map(s=>a.jsx("img",{className:"brandLogo",src:s.img,alt:`image${s.id}`},s.id))}),a.jsx(nt,{className:"chevron",onClick:o,size:40})]})},xt=()=>a.jsxs("div",{className:"homePage",children:[a.jsx(B,{}),a.jsx("img",{className:"homeImg",src:"https://images.unsplash.com/photo-1601924994987-69e26d50dc26?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}),a.jsx(lt,{}),a.jsx(et,{})]});export{xt as default};