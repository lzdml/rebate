import{E as ke,G as be,H as Re,I as Fe,t as z,J as Ke,K as je,L as Be,M as _e,N as Pe,c as j,n as H,O as Ae,P as N,d as q,Q as ze,R as se,h as C,S as Oe,T as Ee,U as qe,V as A,W as we,X as ee,Y as L,Z as p,$ as ye,a0 as Me,e as x,w as te,a1 as X,a2 as De,a3 as pe,a4 as xe,a5 as Le,a6 as Ne,a7 as Q,a8 as Ge,a9 as ve,aa as he,g as Te,ab as me,ac as Je,ad as Qe,ae as Se,af as et,ag as tt,ah as at,ai as He,aj as nt,f as it,ak as lt,k as ot,al as st,l as ct,am as rt,B as ut,an as dt,ao as ft,ap as Ce,aq as vt}from"./index-0cfd6775.js";import{u as We}from"./use-id-8e4d67ba.js";import{u as ae}from"./use-expose-3799ea4e.js";import{u as ht}from"./use-touch-09ae91f4.js";function gt(e,o,s){let n,r=0;const t=e.scrollLeft,f=s===0?1:Math.round(s*1e3/16);function c(){ke(n)}function h(){e.scrollLeft+=(o-t)/f,++r<f&&(n=be(h))}return h(),c}function bt(e,o,s,n){let r,t=Re(e);const f=t<o,c=s===0?1:Math.round(s*1e3/16),h=(o-t)/c;function b(){ke(r)}function i(){t+=h,(f&&t>o||!f&&t<o)&&(t=o),Fe(e,t),f&&t<o||!f&&t>o?r=be(i):n&&(r=be(n))}return i(),b}function mt(){const e=z([]),o=[];return Ke(()=>{e.value=[]}),[e,n=>(o[n]||(o[n]=r=>{e.value[n]=r}),o[n])]}function Ye(e,o){if(!je||!window.IntersectionObserver)return;const s=new IntersectionObserver(t=>{o(t[0].intersectionRatio>0)},{root:document.body}),n=()=>{e.value&&s.observe(e.value)},r=()=>{e.value&&s.unobserve(e.value)};Be(r),_e(r),Pe(n)}const[wt,yt]=j("sticky"),xt={zIndex:H,position:Ae("top"),container:Object,offsetTop:N(0),offsetBottom:N(0)};var Tt=q({name:wt,props:xt,emits:["scroll","change"],setup(e,{emit:o,slots:s}){const n=z(),r=ze(n),t=se({fixed:!1,width:0,height:0,transform:0}),f=z(!1),c=C(()=>Oe(e.position==="top"?e.offsetTop:e.offsetBottom)),h=C(()=>{if(f.value)return;const{fixed:u,height:I,width:g}=t;if(u)return{width:`${g}px`,height:`${I}px`}}),b=C(()=>{if(!t.fixed||f.value)return;const u=Ee(qe(e.zIndex),{width:`${t.width}px`,height:`${t.height}px`,[e.position]:`${c.value}px`});return t.transform&&(u.transform=`translate3d(0, ${t.transform}px, 0)`),u}),i=u=>o("scroll",{scrollTop:u,isFixed:t.fixed}),y=()=>{if(!n.value||ee(n))return;const{container:u,position:I}=e,g=p(n),$=Re(window);if(t.width=g.width,t.height=g.height,I==="top")if(u){const v=p(u),O=v.bottom-c.value-t.height;t.fixed=c.value>g.top&&v.bottom>0,t.transform=O<0?O:0}else t.fixed=c.value>g.top;else{const{clientHeight:v}=document.documentElement;if(u){const O=p(u),w=v-O.top-c.value-t.height;t.fixed=v-c.value<g.bottom&&v>O.top,t.transform=w<0?-w:0}else t.fixed=v-c.value<g.bottom}i($)};return A(()=>t.fixed,u=>o("change",u)),we("scroll",y,{target:r,passive:!0}),Ye(n,y),A([ye,Me],()=>{!n.value||ee(n)||!t.fixed||(f.value=!0,L(()=>{const u=p(n);t.width=u.width,t.height=u.height,f.value=!1}))}),()=>{var u;return x("div",{ref:n,style:h.value},[x("div",{class:yt({fixed:t.fixed&&!f.value}),style:b.value},[(u=s.default)==null?void 0:u.call(s)])])}}});const St=te(Tt),[Xe,le]=j("swipe"),Ct={loop:X,width:H,height:H,vertical:Boolean,autoplay:N(0),duration:N(500),touchable:X,lazyRender:Boolean,initialSwipe:N(0),indicatorColor:String,showIndicators:X,stopPropagation:X},Ze=Symbol(Xe);var It=q({name:Xe,props:Ct,emits:["change","dragStart","dragEnd"],setup(e,{emit:o,slots:s}){const n=z(),r=z(),t=se({rect:null,width:0,height:0,offset:0,active:0,swiping:!1});let f=!1;const c=ht(),{children:h,linkChildren:b}=De(Ze),i=C(()=>h.length),y=C(()=>t[e.vertical?"height":"width"]),u=C(()=>e.vertical?c.deltaY.value:c.deltaX.value),I=C(()=>t.rect?(e.vertical?t.rect.height:t.rect.width)-y.value*i.value:0),g=C(()=>y.value?Math.ceil(Math.abs(I.value)/y.value):i.value),$=C(()=>i.value*y.value),v=C(()=>(t.active+i.value)%i.value),O=C(()=>{const l=e.vertical?"vertical":"horizontal";return c.direction.value===l}),w=C(()=>{const l={transitionDuration:`${t.swiping?0:e.duration}ms`,transform:`translate${e.vertical?"Y":"X"}(${t.offset}px)`};if(y.value){const T=e.vertical?"height":"width",S=e.vertical?"width":"height";l[T]=`${$.value}px`,l[S]=e[S]?`${e[S]}px`:""}return l}),Z=l=>{const{active:T}=t;return l?e.loop?ve(T+l,-1,i.value):ve(T+l,0,g.value):T},V=(l,T=0)=>{let S=l*y.value;e.loop||(S=Math.min(S,-I.value));let _=T-S;return e.loop||(_=ve(_,I.value,0)),_},R=({pace:l=0,offset:T=0,emitChange:S})=>{if(i.value<=1)return;const{active:_}=t,a=Z(l),d=V(a,T);if(e.loop){if(h[0]&&d!==I.value){const m=d<I.value;h[0].setOffset(m?$.value:0)}if(h[i.value-1]&&d!==0){const m=d>0;h[i.value-1].setOffset(m?-$.value:0)}}t.active=a,t.offset=d,S&&a!==_&&o("change",v.value)},D=()=>{t.swiping=!0,t.active<=-1?R({pace:i.value}):t.active>=i.value&&R({pace:-i.value})},W=()=>{D(),c.reset(),Q(()=>{t.swiping=!1,R({pace:-1,emitChange:!0})})},G=()=>{D(),c.reset(),Q(()=>{t.swiping=!1,R({pace:1,emitChange:!0})})};let Y;const B=()=>clearTimeout(Y),U=()=>{B(),+e.autoplay>0&&i.value>1&&(Y=setTimeout(()=>{G(),U()},+e.autoplay))},E=(l=+e.initialSwipe)=>{if(!n.value)return;const T=()=>{var S,_;if(!ee(n)){const a={width:n.value.offsetWidth,height:n.value.offsetHeight};t.rect=a,t.width=+((S=e.width)!=null?S:a.width),t.height=+((_=e.height)!=null?_:a.height)}i.value&&(l=Math.min(i.value-1,l),l===-1&&(l=i.value-1)),t.active=l,t.swiping=!0,t.offset=V(l),h.forEach(a=>{a.setOffset(0)}),U()};ee(n)?L().then(T):T()},F=()=>E(t.active);let J;const ce=l=>{!e.touchable||l.touches.length>1||(c.start(l),f=!1,J=Date.now(),B(),D())},re=l=>{e.touchable&&t.swiping&&(c.move(l),O.value&&(!e.loop&&(t.active===0&&u.value>0||t.active===i.value-1&&u.value<0)||(Ge(l,e.stopPropagation),R({offset:u.value}),f||(o("dragStart",{index:v.value}),f=!0))))},ne=()=>{if(!e.touchable||!t.swiping)return;const l=Date.now()-J,T=u.value/l;if((Math.abs(T)>.25||Math.abs(u.value)>y.value/2)&&O.value){const _=e.vertical?c.offsetY.value:c.offsetX.value;let a=0;e.loop?a=_>0?u.value>0?-1:1:0:a=-Math[u.value>0?"ceil":"floor"](u.value/y.value),R({pace:a,emitChange:!0})}else u.value&&R({pace:0});f=!1,t.swiping=!1,o("dragEnd",{index:v.value}),U()},ue=(l,T={})=>{D(),c.reset(),Q(()=>{let S;e.loop&&l===i.value?S=t.active===0?0:l:S=l%i.value,T.immediate?Q(()=>{t.swiping=!1}):t.swiping=!1,R({pace:S-t.active,emitChange:!0})})},de=(l,T)=>{const S=T===v.value,_=S?{backgroundColor:e.indicatorColor}:void 0;return x("i",{style:_,class:le("indicator",{active:S})},null)},fe=()=>{if(s.indicator)return s.indicator({active:v.value,total:i.value});if(e.showIndicators&&i.value>1)return x("div",{class:le("indicators",{vertical:e.vertical})},[Array(i.value).fill("").map(de)])};return ae({prev:W,next:G,state:t,resize:F,swipeTo:ue}),b({size:y,props:e,count:i,activeIndicator:v}),A(()=>e.initialSwipe,l=>E(+l)),A(i,()=>E(t.active)),A(()=>e.autoplay,U),A([ye,Me,()=>e.width,()=>e.height],F),A(pe(),l=>{l==="visible"?U():B()}),xe(E),Le(()=>E(t.active)),Ne(()=>E(t.active)),Be(B),_e(B),we("touchmove",re,{target:r}),()=>{var l;return x("div",{ref:n,class:le()},[x("div",{ref:r,style:w.value,class:le("track",{vertical:e.vertical}),onTouchstartPassive:ce,onTouchend:ne,onTouchcancel:ne},[(l=s.default)==null?void 0:l.call(s)]),fe()])}}});const $t=te(It),[kt,Ie]=j("tabs");var Rt=q({name:kt,props:{count:he(Number),inited:Boolean,animated:Boolean,duration:he(H),swipeable:Boolean,lazyRender:Boolean,currentIndex:he(Number)},emits:["change"],setup(e,{emit:o,slots:s}){const n=z(),r=c=>o("change",c),t=()=>{var c;const h=(c=s.default)==null?void 0:c.call(s);return e.animated||e.swipeable?x($t,{ref:n,loop:!1,class:Ie("track"),duration:+e.duration*1e3,touchable:e.swipeable,lazyRender:e.lazyRender,showIndicators:!1,onChange:r},{default:()=>[h]}):h},f=c=>{const h=n.value;h&&h.state.active!==c&&h.swipeTo(c,{immediate:!e.inited})};return A(()=>e.currentIndex,f),xe(()=>{f(e.currentIndex)}),ae({swipeRef:n}),()=>x("div",{class:Ie("content",{animated:e.animated||e.swipeable})},[t()])}});const[Ve,oe]=j("tabs"),Bt={type:Ae("line"),color:String,border:Boolean,sticky:Boolean,shrink:Boolean,active:N(0),duration:N(.3),animated:Boolean,ellipsis:X,swipeable:Boolean,scrollspy:Boolean,offsetTop:N(0),background:String,lazyRender:X,lineWidth:H,lineHeight:H,beforeChange:Function,swipeThreshold:N(5),titleActiveColor:String,titleInactiveColor:String},Ue=Symbol(Ve);var _t=q({name:Ve,props:Bt,emits:["change","scroll","rendered","clickTab","update:active"],setup(e,{emit:o,slots:s}){let n,r,t,f,c;const h=z(),b=z(),i=z(),y=z(),u=We(),I=ze(h),[g,$]=mt(),{children:v,linkChildren:O}=De(Ue),w=se({inited:!1,position:"",lineStyle:{},currentIndex:-1}),Z=C(()=>v.length>+e.swipeThreshold||!e.ellipsis||e.shrink),V=C(()=>({borderColor:e.color,background:e.background})),R=(a,d)=>{var m;return(m=a.name)!=null?m:d},D=C(()=>{const a=v[w.currentIndex];if(a)return R(a,w.currentIndex)}),W=C(()=>Oe(e.offsetTop)),G=C(()=>e.sticky?W.value+n:0),Y=a=>{const d=b.value,m=g.value;if(!Z.value||!d||!m||!m[w.currentIndex])return;const P=m[w.currentIndex].$el,k=P.offsetLeft-(d.offsetWidth-P.offsetWidth)/2;f&&f(),f=gt(d,k,a?0:+e.duration)},B=()=>{const a=w.inited;L(()=>{const d=g.value;if(!d||!d[w.currentIndex]||e.type!=="line"||ee(h.value))return;const m=d[w.currentIndex].$el,{lineWidth:P,lineHeight:k}=e,M=m.offsetLeft+m.offsetWidth/2,K={width:Te(P),backgroundColor:e.color,transform:`translateX(${M}px) translateX(-50%)`};if(a&&(K.transitionDuration=`${e.duration}s`),me(k)){const ie=Te(k);K.height=ie,K.borderRadius=ie}w.lineStyle=K})},U=a=>{const d=a<w.currentIndex?-1:1;for(;a>=0&&a<v.length;){if(!v[a].disabled)return a;a+=d}},E=(a,d)=>{const m=U(a);if(!me(m))return;const P=v[m],k=R(P,m),M=w.currentIndex!==null;w.currentIndex!==m&&(w.currentIndex=m,d||Y(),B()),k!==e.active&&(o("update:active",k),M&&o("change",k,P.title)),t&&!e.scrollspy&&Qe(Math.ceil(Se(h.value)-W.value))},F=(a,d)=>{const m=v.find((k,M)=>R(k,M)===a),P=m?v.indexOf(m):0;E(P,d)},J=(a=!1)=>{if(e.scrollspy){const d=v[w.currentIndex].$el;if(d&&I.value){const m=Se(d,I.value)-G.value;r=!0,c&&c(),c=bt(I.value,m,a?0:+e.duration,()=>{r=!1})}}},ce=(a,d,m)=>{const{title:P,disabled:k}=v[d],M=R(v[d],d);k||(et(e.beforeChange,{args:[M],done:()=>{E(d),J()}}),tt(a)),o("clickTab",{name:M,title:P,event:m,disabled:k})},re=a=>{t=a.isFixed,o("scroll",a)},ne=a=>{L(()=>{F(a),J(!0)})},ue=()=>{for(let a=0;a<v.length;a++){const{top:d}=p(v[a].$el);if(d>G.value)return a===0?0:a-1}return v.length-1},de=()=>{if(e.scrollspy&&!r){const a=ue();E(a)}},fe=()=>{if(e.type==="line"&&v.length)return x("div",{class:oe("line"),style:w.lineStyle},null)},l=()=>{var a,d,m;const{type:P,border:k,sticky:M}=e,K=[x("div",{ref:M?void 0:i,class:[oe("wrap"),{[Je]:P==="line"&&k}]},[x("div",{ref:b,role:"tablist",class:oe("nav",[P,{shrink:e.shrink,complete:Z.value}]),style:V.value,"aria-orientation":"horizontal"},[(a=s["nav-left"])==null?void 0:a.call(s),v.map(ie=>ie.renderTitle(ce)),fe(),(d=s["nav-right"])==null?void 0:d.call(s)])]),(m=s["nav-bottom"])==null?void 0:m.call(s)];return M?x("div",{ref:i},[K]):K},T=()=>{B(),L(()=>{var a,d;Y(!0),(d=(a=y.value)==null?void 0:a.swipeRef.value)==null||d.resize()})};A(()=>[e.color,e.duration,e.lineWidth,e.lineHeight],B),A(ye,T),A(()=>e.active,a=>{a!==D.value&&F(a)}),A(()=>v.length,()=>{w.inited&&(F(e.active),B(),L(()=>{Y(!0)}))});const S=()=>{F(e.active,!0),L(()=>{w.inited=!0,i.value&&(n=p(i.value).height),Y(!0)})},_=(a,d)=>o("rendered",a,d);return ae({resize:T,scrollTo:ne}),Le(B),Ne(B),Pe(S),Ye(h,B),we("scroll",de,{target:I,passive:!0}),O({id:u,props:e,setLine:B,scrollable:Z,onRendered:_,currentName:D,setTitleRefs:$,scrollIntoView:Y}),()=>x("div",{ref:h,class:oe([e.type])},[e.sticky?x(St,{container:h.value,offsetTop:W.value,onScroll:re},{default:()=>[l()]}):l(),x(Rt,{ref:y,count:v.length,inited:w.inited,animated:e.animated,duration:e.duration,swipeable:e.swipeable,lazyRender:e.lazyRender,currentIndex:w.currentIndex,onChange:E},{default:()=>{var a;return[(a=s.default)==null?void 0:a.call(s)]}})])}});const Pt=Symbol(),[At,$e]=j("tab"),zt=q({name:At,props:{id:String,dot:Boolean,type:String,color:String,title:String,badge:H,shrink:Boolean,isActive:Boolean,disabled:Boolean,controls:String,scrollable:Boolean,activeColor:String,inactiveColor:String,showZeroBadge:X},setup(e,{slots:o}){const s=C(()=>{const r={},{type:t,color:f,disabled:c,isActive:h,activeColor:b,inactiveColor:i}=e;f&&t==="card"&&(r.borderColor=f,c||(h?r.backgroundColor=f:r.color=f));const u=h?b:i;return u&&(r.color=u),r}),n=()=>{const r=x("span",{class:$e("text",{ellipsis:!e.scrollable})},[o.title?o.title():e.title]);return e.dot||me(e.badge)&&e.badge!==""?x(at,{dot:e.dot,content:e.badge,showZero:e.showZeroBadge},{default:()=>[r]}):r};return()=>x("div",{id:e.id,role:"tab",class:[$e([e.type,{grow:e.scrollable&&!e.shrink,shrink:e.shrink,active:e.isActive,disabled:e.disabled}])],style:s.value,tabindex:e.disabled?void 0:e.isActive?0:-1,"aria-selected":e.isActive,"aria-disabled":e.disabled||void 0,"aria-controls":e.controls},[n()])}}),[Ot,Et]=j("swipe-item");var Mt=q({name:Ot,setup(e,{slots:o}){let s;const n=se({offset:0,inited:!1,mounted:!1}),{parent:r,index:t}=He(Ze);if(!r)return;const f=C(()=>{const b={},{vertical:i}=r.props;return r.size.value&&(b[i?"height":"width"]=`${r.size.value}px`),n.offset&&(b.transform=`translate${i?"Y":"X"}(${n.offset}px)`),b}),c=C(()=>{const{loop:b,lazyRender:i}=r.props;if(!i||s)return!0;if(!n.mounted)return!1;const y=r.activeIndicator.value,u=r.count.value-1,I=y===0&&b?u:y-1,g=y===u&&b?0:y+1;return s=t.value===y||t.value===I||t.value===g,s}),h=b=>{n.offset=b};return xe(()=>{L(()=>{n.mounted=!0})}),ae({setOffset:h}),()=>{var b;return x("div",{class:Et(),style:f.value},[c.value?(b=o.default)==null?void 0:b.call(o):null])}}});const Dt=te(Mt),[Lt,ge]=j("tab"),Nt=Ee({},nt,{dot:Boolean,name:H,badge:H,title:String,disabled:Boolean,titleClass:it,titleStyle:[String,Object],showZeroBadge:X});var Ht=q({name:Lt,props:Nt,setup(e,{slots:o}){const s=We(),n=z(!1),r=vt(),{parent:t,index:f}=He(Ue);if(!t)return;const c=()=>{var g;return(g=e.name)!=null?g:f.value},h=()=>{n.value=!0,t.props.lazyRender&&L(()=>{t.onRendered(c(),e.title)})},b=C(()=>{const g=c()===t.currentName.value;return g&&!n.value&&h(),g}),i=z(""),y=z("");lt(()=>{const{titleClass:g,titleStyle:$}=e;i.value=g?ot(g):"",y.value=$&&typeof $!="string"?st(ct($)):$});const u=g=>x(zt,ft({key:s,id:`${t.id}-${f.value}`,ref:t.setTitleRefs(f.value),style:y.value,class:i.value,isActive:b.value,controls:s,scrollable:t.scrollable.value,activeColor:t.props.titleActiveColor,inactiveColor:t.props.titleInactiveColor,onClick:$=>g(r.proxy,f.value,$)},Ce(t.props,["type","color","shrink"]),Ce(e,["dot","badge","title","disabled","showZeroBadge"])),{title:o.title}),I=z(!b.value);return A(b,g=>{g?I.value=!1:Q(()=>{I.value=!0})}),A(()=>e.title,()=>{t.setLine(),t.scrollIntoView()}),rt(Pt,b),ae({id:s,renderTitle:u}),()=>{var g;const $=`${t.id}-${f.value}`,{animated:v,swipeable:O,scrollspy:w,lazyRender:Z}=t.props;if(!o.default&&!v)return;const V=w||b.value;if(v||O)return x(Dt,{id:s,role:"tabpanel",class:ge("panel-wrapper",{inactive:I.value}),tabindex:b.value?0:-1,"aria-hidden":!b.value,"aria-labelledby":$},{default:()=>{var W;return[x("div",{class:ge("panel")},[(W=o.default)==null?void 0:W.call(o)])]}});const D=n.value||w||!Z?(g=o.default)==null?void 0:g.call(o):null;return ut(x("div",{id:s,role:"tabpanel",class:ge("panel"),tabindex:V?0:-1,"aria-labelledby":$},[D]),[[dt,V]])}}});const Vt=te(Ht),Ut=te(_t);const Ft="/webp/banner-da25672b.webp";export{$t as S,Ut as T,Ft as _,St as a,Dt as b,Vt as c};