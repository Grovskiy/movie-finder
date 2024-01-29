import{s as ve,f as fe,i as me,b as he,a as Oe,u as Re,r as S,c as R,d as e,w as Q,o as pe,e as Ve,g as De,p as ze,h as qe,j as _e,k as Y,l as ge,m as E,n as V,q as H,t as Z,v as K,x as F,y as O,z as x,A as z,E as ie,B as je,C as ee,T as ue,D as U,F as Ke,G as ye,H as Ie,I as oe,J as Ce,K as te,_ as we,L as Ue,M as ke,N as We,O as Fe,P as Ye,Q as Xe,R as Ge,S as Je,U as Qe,V as xe,W as Ze,X as et}from"./index-cc8fc522.js";import{g as tt,E as st,v as at,a as ot}from"./movieService-78aacd96.js";import{t as ce,E as nt}from"./image-viewer-352a2153.js";const lt=(a,h,n)=>fe(a.subTree).filter(l=>{var c;return me(l)&&((c=l.type)==null?void 0:c.name)===h&&!!l.component}).map(l=>l.component.uid).map(l=>n[l]).filter(l=>!!l),rt=(a,h)=>{const n={},s=ve([]);return{children:s,addChild:c=>{n[c.uid]=c,s.value=lt(a,h,n)},removeChild:c=>{delete n[c],s.value=s.value.filter(o=>o.uid!==c)}}},it=he({initialIndex:{type:Number,default:0},height:{type:String,default:""},trigger:{type:String,values:["hover","click"],default:"hover"},autoplay:{type:Boolean,default:!0},interval:{type:Number,default:3e3},indicatorPosition:{type:String,values:["","none","outside"],default:""},arrow:{type:String,values:["always","hover","never"],default:"hover"},type:{type:String,values:["","card"],default:""},loop:{type:Boolean,default:!0},direction:{type:String,values:["horizontal","vertical"],default:"horizontal"},pauseOnHover:{type:Boolean,default:!0}}),ut={change:(a,h)=>[a,h].every(Oe)},be=Symbol("carouselContextKey"),de=300,ct=(a,h,n)=>{const{children:s,addChild:I,removeChild:l}=rt(_e(),"ElCarouselItem"),c=Re(),o=S(-1),_=S(null),b=S(!1),g=S(),M=S(0),C=S(!0),N=R(()=>a.arrow!=="never"&&!e(T)),v=R(()=>s.value.some(t=>t.props.label.toString().length>0)),A=R(()=>a.type==="card"),T=R(()=>a.direction==="vertical"),L=R(()=>a.height!=="auto"?{height:a.height}:{height:`${M.value}px`,overflow:"hidden"}),P=ce(t=>{m(t)},de,{trailing:!0}),W=ce(t=>{se(t)},de),r=t=>C.value?o.value<=1?t<=1:t>1:!0;function i(){_.value&&(clearInterval(_.value),_.value=null)}function f(){a.interval<=0||!a.autoplay||_.value||(_.value=setInterval(()=>y(),a.interval))}const y=()=>{o.value<s.value.length-1?o.value=o.value+1:a.loop&&(o.value=0)};function m(t){if(qe(t)){const j=s.value.filter(D=>D.props.name===t);j.length>0&&(t=s.value.indexOf(j[0]))}if(t=Number(t),Number.isNaN(t)||t!==Math.floor(t))return;const d=s.value.length,B=o.value;t<0?o.value=a.loop?d-1:0:t>=d?o.value=a.loop?0:d-1:o.value=t,B===o.value&&u(B),ne()}function u(t){s.value.forEach((d,B)=>{d.translateItem(B,o.value,t)})}function $(t,d){var B,j,D,G;const J=e(s),le=J.length;if(le===0||!t.states.inStage)return!1;const Le=d+1,$e=d-1,re=le-1,Be=J[re].states.active,Ae=J[0].states.active,He=(j=(B=J[Le])==null?void 0:B.states)==null?void 0:j.active,Pe=(G=(D=J[$e])==null?void 0:D.states)==null?void 0:G.active;return d===re&&Ae||He?"left":d===0&&Be||Pe?"right":!1}function X(){b.value=!0,a.pauseOnHover&&i()}function w(){b.value=!1,f()}function p(t){e(T)||s.value.forEach((d,B)=>{t===$(d,B)&&(d.states.hover=!0)})}function k(){e(T)||s.value.forEach(t=>{t.states.hover=!1})}function q(t){o.value=t}function se(t){a.trigger==="hover"&&t!==o.value&&(o.value=t)}function Ee(){m(o.value-1)}function Me(){m(o.value+1)}function ne(){i(),a.pauseOnHover||f()}function Ne(t){a.height==="auto"&&(M.value=t)}function Te(){var t;const d=(t=c.default)==null?void 0:t.call(c);if(!d)return null;const B=fe(d),j="ElCarouselItem",D=B.filter(G=>me(G)&&G.type.name===j);return(D==null?void 0:D.length)===2&&a.loop&&!A.value?(C.value=!0,D):(C.value=!1,null)}Q(()=>o.value,(t,d)=>{u(d),C.value&&(t=t%2,d=d%2),d>-1&&h("change",t,d)}),Q(()=>a.autoplay,t=>{t?f():i()}),Q(()=>a.loop,()=>{m(o.value)}),Q(()=>a.interval,()=>{ne()});const ae=ve();return pe(()=>{Q(()=>s.value,()=>{s.value.length>0&&m(a.initialIndex)},{immediate:!0}),ae.value=Ve(g.value,()=>{u()}),f()}),De(()=>{i(),g.value&&ae.value&&ae.value.stop()}),ze(be,{root:g,isCardType:A,isVertical:T,items:s,loop:a.loop,addItem:I,removeItem:l,setActiveItem:m,setContainerHeight:Ne}),{root:g,activeIndex:o,arrowDisplay:N,hasLabel:v,hover:b,isCardType:A,items:s,isVertical:T,containerStyle:L,isItemsTwoLength:C,handleButtonEnter:p,handleButtonLeave:k,handleIndicatorClick:q,handleMouseEnter:X,handleMouseLeave:w,setActiveItem:m,prev:Ee,next:Me,PlaceholderItem:Te,isTwoLengthShow:r,throttledArrowClick:P,throttledIndicatorHover:W}},dt=["onMouseenter","onClick"],vt={key:0},ft="ElCarousel",mt=Y({name:ft}),ht=Y({...mt,props:it,emits:ut,setup(a,{expose:h,emit:n}){const s=a,{root:I,activeIndex:l,arrowDisplay:c,hasLabel:o,hover:_,isCardType:b,items:g,isVertical:M,containerStyle:C,handleButtonEnter:N,handleButtonLeave:v,handleIndicatorClick:A,handleMouseEnter:T,handleMouseLeave:L,setActiveItem:P,prev:W,next:r,PlaceholderItem:i,isTwoLengthShow:f,throttledArrowClick:y,throttledIndicatorHover:m}=ct(s,n),u=ge("carousel"),$=R(()=>{const w=[u.b(),u.m(s.direction)];return e(b)&&w.push(u.m("card")),w}),X=R(()=>{const w=[u.e("indicators"),u.em("indicators",s.direction)];return e(o)&&w.push(u.em("indicators","labels")),s.indicatorPosition==="outside"&&w.push(u.em("indicators","outside")),e(M)&&w.push(u.em("indicators","right")),w});return h({setActiveItem:P,prev:W,next:r}),(w,p)=>(E(),V("div",{ref_key:"root",ref:I,class:O(e($)),onMouseenter:p[6]||(p[6]=x((...k)=>e(T)&&e(T)(...k),["stop"])),onMouseleave:p[7]||(p[7]=x((...k)=>e(L)&&e(L)(...k),["stop"]))},[H("div",{class:O(e(u).e("container")),style:Ie(e(C))},[e(c)?(E(),Z(ue,{key:0,name:"carousel-arrow-left",persisted:""},{default:K(()=>[F(H("button",{type:"button",class:O([e(u).e("arrow"),e(u).em("arrow","left")]),onMouseenter:p[0]||(p[0]=k=>e(N)("left")),onMouseleave:p[1]||(p[1]=(...k)=>e(v)&&e(v)(...k)),onClick:p[2]||(p[2]=x(k=>e(y)(e(l)-1),["stop"]))},[z(e(ie),null,{default:K(()=>[z(e(je))]),_:1})],34),[[ee,(w.arrow==="always"||e(_))&&(s.loop||e(l)>0)]])]),_:1})):U("v-if",!0),e(c)?(E(),Z(ue,{key:1,name:"carousel-arrow-right",persisted:""},{default:K(()=>[F(H("button",{type:"button",class:O([e(u).e("arrow"),e(u).em("arrow","right")]),onMouseenter:p[3]||(p[3]=k=>e(N)("right")),onMouseleave:p[4]||(p[4]=(...k)=>e(v)&&e(v)(...k)),onClick:p[5]||(p[5]=x(k=>e(y)(e(l)+1),["stop"]))},[z(e(ie),null,{default:K(()=>[z(e(Ke))]),_:1})],34),[[ee,(w.arrow==="always"||e(_))&&(s.loop||e(l)<e(g).length-1)]])]),_:1})):U("v-if",!0),z(e(i)),ye(w.$slots,"default")],6),w.indicatorPosition!=="none"?(E(),V("ul",{key:0,class:O(e(X))},[(E(!0),V(oe,null,Ce(e(g),(k,q)=>F((E(),V("li",{key:q,class:O([e(u).e("indicator"),e(u).em("indicator",w.direction),e(u).is("active",q===e(l))]),onMouseenter:se=>e(m)(q),onClick:x(se=>e(A)(q),["stop"])},[H("button",{class:O(e(u).e("button"))},[e(o)?(E(),V("span",vt,te(k.props.label),1)):U("v-if",!0)],2)],42,dt)),[[ee,e(f)(q)]])),128))],2)):U("v-if",!0)],34))}});var pt=we(ht,[["__file","carousel.vue"]]);const _t=he({name:{type:String,default:""},label:{type:[String,Number],default:""}}),gt=(a,h)=>{const n=Ue(be),s=_e(),I=.83,l=S(),c=S(!1),o=S(0),_=S(1),b=S(!1),g=S(!1),M=S(!1),C=S(!1),{isCardType:N,isVertical:v}=n;function A(r,i,f){const y=f-1,m=i-1,u=i+1,$=f/2;return i===0&&r===y?-1:i===y&&r===0?f:r<m&&i-r>=$?f+1:r>u&&r-i>=$?-2:r}function T(r,i){var f,y;const m=e(v)?((f=n.root.value)==null?void 0:f.offsetHeight)||0:((y=n.root.value)==null?void 0:y.offsetWidth)||0;return M.value?m*((2-I)*(r-i)+1)/4:r<i?-(1+I)*m/4:(3+I)*m/4}function L(r,i,f){const y=n.root.value;return y?((f?y.offsetHeight:y.offsetWidth)||0)*(r-i):0}const P=(r,i,f)=>{var y;const m=e(N),u=(y=n.items.value.length)!=null?y:Number.NaN,$=r===i;!m&&!Fe(f)&&(C.value=$||r===f),!$&&u>2&&n.loop&&(r=A(r,i,u));const X=e(v);b.value=$,m?(M.value=Math.round(Math.abs(r-i))<=1,o.value=T(r,i),_.value=e(b)?1:I):o.value=L(r,i,X),g.value=!0,$&&l.value&&n.setContainerHeight(l.value.offsetHeight)};function W(){if(n&&e(N)){const r=n.items.value.findIndex(({uid:i})=>i===s.uid);n.setActiveItem(r)}}return pe(()=>{n.addItem({props:a,states:ke({hover:c,translate:o,scale:_,active:b,ready:g,inStage:M,animating:C}),uid:s.uid,translateItem:P})}),We(()=>{n.removeItem(s.uid)}),{carouselItemRef:l,active:b,animating:C,hover:c,inStage:M,isVertical:v,translate:o,isCardType:N,scale:_,ready:g,handleItemClick:W}},yt=Y({name:"ElCarouselItem"}),It=Y({...yt,props:_t,setup(a){const h=a,n=ge("carousel"),{carouselItemRef:s,active:I,animating:l,hover:c,inStage:o,isVertical:_,translate:b,isCardType:g,scale:M,ready:C,handleItemClick:N}=gt(h),v=R(()=>[n.e("item"),n.is("active",I.value),n.is("in-stage",o.value),n.is("hover",c.value),n.is("animating",l.value),{[n.em("item","card")]:g.value,[n.em("item","card-vertical")]:g.value&&_.value}]),A=R(()=>{const L=`${`translate${e(_)?"Y":"X"}`}(${e(b)}px)`,P=`scale(${e(M)})`;return{transform:[L,P].join(" ")}});return(T,L)=>F((E(),V("div",{ref_key:"carouselItemRef",ref:s,class:O(e(v)),style:Ie(e(A)),onClick:L[0]||(L[0]=(...P)=>e(N)&&e(N)(...P))},[e(g)?F((E(),V("div",{key:0,class:O(e(n).e("mask"))},null,2)),[[ee,!e(I)]]):U("v-if",!0),ye(T.$slots,"default")],6)),[[ee,e(C)]])}});var Se=we(It,[["__file","carousel-item.vue"]]);const Ct=Ye(pt,{CarouselItem:Se}),wt=Xe(Se);const kt={class:"flex justify-center items-center flex-col-reverse p-4 md:px-16 md:flex-row"},bt={class:"md:pr-3 md:min-w-md"},St={class:"text-4 m-0 my-4 md:m-0 md:mb-4 md:text-4xl"},Et={class:"mb-4 text-4"},Mt={class:"block mb-4 text-4"},Nt=Y({__name:"MoviesCarousel",props:{keyword:{type:String,required:!0}},setup(a){const h=Je(),n=a,s=ke({isLoading:!1,movies:[]});Ge(()=>{n.keyword&&I(n.keyword)});const I=async c=>{try{s.isLoading=!0;const o=await tt(c);s.movies=o.Search,s.isLoading=!1}catch{s.isLoading=!1,st.error("Something went wrong. Please try again."),await h.push({path:"/"})}},l=c=>{h.push({name:"details",query:{id:c}})};return(c,o)=>{const _=ot,b=xe,g=nt,M=wt,C=Ct,N=at;return F((E(),Z(C,{interval:4e3,autoplay:!1,height:"450px"},{default:K(()=>[s.movies.length?U("",!0):(E(),Z(_,{key:0,rows:5,animated:""})),s.movies.length?(E(!0),V(oe,{key:1},Ce(s.movies,v=>(E(),Z(M,{key:v.imdbID,class:"bg-neutral-300 .dark:bg-neutral-800 rounded-xl"},{default:K(()=>[H("div",kt,[H("div",bt,[H("h2",St,te(v.Title),1),H("p",Et,"Director: "+te(v.Title),1),H("time",Mt,"Year: "+te(v.Year),1),z(b,{type:"primary",onClick:A=>l(v.imdbID)},{default:K(()=>[Qe("Details")]),_:2},1032,["onClick"])]),z(g,{src:v.Poster,fit:"contain",class:"w-full h-[200px] md:h-sm"},null,8,["src"])])]),_:2},1024))),128)):U("",!0)]),_:1})),[[N,s.isLoading,void 0,{fullscreen:!0,lock:!0}]])}}});const Tt=Ze(Nt,[["__scopeId","data-v-6d2fe5e7"]]),At=Y({__name:"MovieResultView",setup(a){const h=et();return(n,s)=>(E(),V(oe,null,[H("h1",null,'Result page for "'+te(e(h).query.keyword)+'"',1),z(Tt,{keyword:e(h).query.keyword},null,8,["keyword"])],64))}});export{At as default};