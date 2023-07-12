import{_ as Xe,c as _e}from"./copy-7ceada1b.js";import{az as Ye,S as ee,U as ne,c as ue,d as H,t as $,an as Ze,h as ae,g as me,a8 as ze,W as Z,L as Re,N as ke,a3 as Le,Z as xe,e as l,n as Y,a4 as B,P as O,B as j,v as je,al as le,ao as M,w as pe,a2 as oe,X as Me,aw as fe,aA as X,H as He,$ as Ae,aB as we,aC as We,aD as Ue,Q as J,f as ye,a0 as qe,a1 as Ge,am as se,aE as Ke,ac as Ve,aF as $e,aG as Qe,aH as Te,b as Je,C as Pe,aI as et,a as tt,o as T,i as D,z as G,j as a,m as A,ay as ve,x as at,q as ge,D as ot,E as st,_ as nt}from"./index-ba2f5e6c.js";import{F as lt}from"./index-4c9398dc.js";import{L as De}from"./index-de53f466.js";import{P as it}from"./index-c02ccdcc.js";import{a as ct,S as rt}from"./index-472aae9b.js";import{_ as dt}from"./index-a56ee2a9.js";import{_ as ut}from"./index.vue_vue_type_script_setup_true_lang-7440e0ce.js";import{_ as mt}from"./wechat-5f2aba51.js";import{M as ft}from"./msg-9a36e0b7.js";import"./useGeolocation-4462b21d.js";import{u as vt}from"./loading-e21cd546.js";import{s as ht}from"./index-1d581b1b.js";import{u as be}from"./use-expose-05cadcf1.js";import{u as xt}from"./use-touch-e1dbd7a9.js";import"./use-id-06405334.js";function pt(){const e=ee({show:!1}),o=s=>{e.show=s},c=s=>{ne(e,s,{transitionAppear:!0}),o(!0)},t=()=>o(!1);return be({open:c,close:t,toggle:o}),{open:c,close:t,state:e,toggle:o}}function gt(e){const o=Ye(e),c=document.createElement("div");return document.body.appendChild(c),{instance:o.mount(c),unmount(){o.unmount(),document.body.removeChild(c)}}}const[bt,K]=ue("image"),_t={src:String,alt:String,fit:String,position:String,round:Boolean,block:Boolean,width:Y,height:Y,radius:Y,lazyLoad:Boolean,iconSize:Y,showError:B,errorIcon:O("photo-fail"),iconPrefix:String,showLoading:B,loadingIcon:O("photo")};var wt=H({name:bt,props:_t,emits:["load","error"],setup(e,{emit:o,slots:c}){const t=$(!1),s=$(!0),b=$(),{$Lazyload:y}=Ze().proxy,z=ae(()=>{const d={width:me(e.width),height:me(e.height)};return ze(e.radius)&&(d.overflow="hidden",d.borderRadius=me(e.radius)),d});Z(()=>e.src,()=>{t.value=!1,s.value=!0});const P=d=>{s.value&&(s.value=!1,o("load",d))},I=()=>{const d=new Event("load");Object.defineProperty(d,"target",{value:b.value,enumerable:!0}),P(d)},m=d=>{t.value=!0,s.value=!1,o("error",d)},u=(d,L,f)=>f?f():l(M,{name:d,size:e.iconSize,class:L,classPrefix:e.iconPrefix},null),r=()=>{if(s.value&&e.showLoading)return l("div",{class:K("loading")},[u(e.loadingIcon,K("loading-icon"),c.loading)]);if(t.value&&e.showError)return l("div",{class:K("error")},[u(e.errorIcon,K("error-icon"),c.error)])},_=()=>{if(t.value||!e.src)return;const d={alt:e.alt,class:K("img"),style:{objectFit:e.fit,objectPosition:e.position}};return e.lazyLoad?j(l("img",le({ref:b},d),null),[[je("lazy"),e.src]]):l("img",le({ref:b,src:e.src,onLoad:P,onError:m},d),null)},R=({el:d})=>{const L=()=>{d===b.value&&s.value&&I()};b.value?L():xe(L)},V=({el:d})=>{d===b.value&&!t.value&&m()};return y&&Re&&(y.$on("loaded",R),y.$on("error",V),ke(()=>{y.$off("loaded",R),y.$off("error",V)})),Le(()=>{xe(()=>{var d;(d=b.value)!=null&&d.complete&&!e.lazyLoad&&I()})}),()=>{var d;return l("div",{class:K({round:e.round,block:e.block}),style:z.value},[_(),r(),(d=c.default)==null?void 0:d.call(c)])}}});const Fe=pe(wt),Ie=e=>Math.sqrt((e[0].clientX-e[1].clientX)**2+(e[0].clientY-e[1].clientY)**2),yt=e=>({x:(e[0].clientX+e[1].clientX)/2,y:(e[0].clientY+e[1].clientY)/2}),he=ue("image-preview")[1],Ce=2.6;var Pt=H({props:{src:String,show:Boolean,active:Number,minZoom:oe(Y),maxZoom:oe(Y),rootWidth:oe(Number),rootHeight:oe(Number),disableZoom:Boolean},emits:["scale","close","longPress"],setup(e,{emit:o,slots:c}){const t=ee({scale:1,moveX:0,moveY:0,moving:!1,zooming:!1,initializing:!1,imageRatio:0}),s=xt(),b=$(),y=$(),z=$(!1),P=$(!1);let I=0;const m=ae(()=>{const{scale:i,moveX:h,moveY:p,moving:U,zooming:E,initializing:q}=t,re={transitionDuration:E||U||q?"0s":".3s"};return(i!==1||P.value)&&(re.transform=`matrix(${i}, 0, 0, ${i}, ${h}, ${p})`),re}),u=ae(()=>{if(t.imageRatio){const{rootWidth:i,rootHeight:h}=e,p=z.value?h/t.imageRatio:i;return Math.max(0,(t.scale*p-i)/2)}return 0}),r=ae(()=>{if(t.imageRatio){const{rootWidth:i,rootHeight:h}=e,p=z.value?h:i*t.imageRatio;return Math.max(0,(t.scale*p-h)/2)}return 0}),_=(i,h)=>{var p;if(i=X(i,+e.minZoom,+e.maxZoom+1),i!==t.scale){const U=i/t.scale;if(t.scale=i,h){const E=Ae((p=b.value)==null?void 0:p.$el),q={x:E.width*.5,y:E.height*.5},re=t.moveX-(h.x-E.left-q.x)*(U-1),Oe=t.moveY-(h.y-E.top-q.y)*(U-1);t.moveX=X(re,-u.value,u.value),t.moveY=X(Oe,-r.value,r.value)}else t.moveX=0,t.moveY=P.value?I:0;o("scale",{scale:i,index:e.active})}},R=()=>{_(1)},V=()=>{const i=t.scale>1?1:2;_(i,i===2||P.value?{x:s.startX.value,y:s.startY.value}:void 0)};let d,L,f,w,x,W,n,v,k=!1;const S=i=>{const{touches:h}=i;if(d=h.length,d===2&&e.disableZoom)return;const{offsetX:p}=s;s.start(i),L=t.moveX,f=t.moveY,v=Date.now(),k=!1,t.moving=d===1&&(t.scale!==1||P.value),t.zooming=d===2&&!p.value,t.zooming&&(w=t.scale,x=Ie(h))},F=i=>{const{touches:h}=i;if(s.move(i),t.moving){const{deltaX:p,deltaY:U}=s,E=p.value+L,q=U.value+f;if((E>u.value||E<-u.value)&&!k&&s.isHorizontal()){t.moving=!1;return}k=!0,fe(i,!0),t.moveX=X(E,-u.value,u.value),t.moveY=X(q,-r.value,r.value)}if(t.zooming&&(fe(i,!0),h.length===2)){const p=Ie(h),U=w*p/x;W=yt(h),_(U,W)}},N=()=>{if(d>1)return;const{offsetX:i,offsetY:h}=s,p=Date.now()-v,U=250;i.value<we&&h.value<we&&(p<U?n?(clearTimeout(n),n=null,V()):n=setTimeout(()=>{o("close"),n=null},U):p>We&&o("longPress"))},ie=i=>{let h=!1;if((t.moving||t.zooming)&&(h=!0,t.moving&&L===t.moveX&&f===t.moveY&&(h=!1),!i.touches.length)){t.zooming&&(t.moveX=X(t.moveX,-u.value,u.value),t.moveY=X(t.moveY,-r.value,r.value),t.zooming=!1),t.moving=!1,L=0,f=0,w=1,t.scale<1&&R();const p=+e.maxZoom;t.scale>p&&_(p,W)}fe(i,h),N(),s.reset()},te=()=>{const{rootWidth:i,rootHeight:h}=e,p=h/i,{imageRatio:U}=t;z.value=t.imageRatio>p&&U<Ce,P.value=t.imageRatio>p&&U>=Ce,P.value&&(I=(U*i-h)/2,t.moveY=I,t.initializing=!0,He(()=>{t.initializing=!1})),R()},ce=i=>{const{naturalWidth:h,naturalHeight:p}=i.target;t.imageRatio=p/h,te()};return Z(()=>e.active,R),Z(()=>e.show,i=>{i||R()}),Z(()=>[e.rootWidth,e.rootHeight],te),Me("touchmove",F,{target:ae(()=>{var i;return(i=y.value)==null?void 0:i.$el})}),()=>{const i={loading:()=>l(De,{type:"spinner"},null)};return l(ct,{ref:y,class:he("swipe-item"),onTouchstartPassive:S,onTouchend:ie,onTouchcancel:ie},{default:()=>[c.image?l("div",{class:he("image-wrap")},[c.image({src:e.src})]):l(Fe,{ref:b,src:e.src,fit:"contain",class:he("image",{vertical:z.value}),style:m.value,onLoad:ce},i)]})}}});const[It,Q]=ue("image-preview"),Ct=["show","teleport","transition","overlayStyle","closeOnPopstate"],St={show:Boolean,loop:B,images:Ue(),minZoom:J(1/3),maxZoom:J(3),overlay:B,closeable:Boolean,showIndex:B,className:ye,closeIcon:O("clear"),transition:String,beforeClose:Function,overlayClass:ye,overlayStyle:Object,swipeDuration:J(300),startPosition:J(0),showIndicators:Boolean,closeOnPopstate:B,closeIconPosition:O("top-right"),teleport:[String,Object]};var Ee=H({name:It,props:St,emits:["scale","close","closed","change","longPress","update:show"],setup(e,{emit:o,slots:c}){const t=$(),s=ee({active:0,rootWidth:0,rootHeight:0,disableZoom:!1}),b=()=>{if(t.value){const f=Ae(t.value.$el);s.rootWidth=f.width,s.rootHeight=f.height,t.value.resize()}},y=f=>o("scale",f),z=f=>o("update:show",f),P=()=>{Ve(e.beforeClose,{args:[s.active],done:()=>z(!1)})},I=f=>{f!==s.active&&(s.active=f,o("change",f))},m=()=>{if(e.showIndex)return l("div",{class:Q("index")},[c.index?c.index({index:s.active}):`${s.active+1} / ${e.images.length}`])},u=()=>{if(c.cover)return l("div",{class:Q("cover")},[c.cover()])},r=()=>{s.disableZoom=!0},_=()=>{s.disableZoom=!1},R=()=>l(rt,{ref:t,lazyRender:!0,loop:e.loop,class:Q("swipe"),duration:e.swipeDuration,initialSwipe:e.startPosition,showIndicators:e.showIndicators,indicatorColor:"white",onChange:I,onDragEnd:_,onDragStart:r},{default:()=>[e.images.map((f,w)=>l(Pt,{src:f,show:e.show,active:s.active,maxZoom:e.maxZoom,minZoom:e.minZoom,rootWidth:s.rootWidth,rootHeight:s.rootHeight,disableZoom:s.disableZoom,onScale:y,onClose:P,onLongPress:()=>o("longPress",{index:w})},{image:c.image}))]}),V=()=>{if(e.closeable)return l(M,{role:"button",name:e.closeIcon,class:[Q("close-icon",e.closeIconPosition),Ke],onClick:P},null)},d=()=>o("closed"),L=(f,w)=>{var x;return(x=t.value)==null?void 0:x.swipeTo(f,w)};return be({swipeTo:L}),Le(b),Z([qe,Ge],b),Z(()=>e.startPosition,f=>I(+f)),Z(()=>e.show,f=>{const{images:w,startPosition:x}=e;f?(I(+x),xe(()=>{b(),L(+x,{immediate:!0})})):o("close",{index:s.active,url:w[s.active]})}),()=>l(it,le({class:[Q(),e.className],overlayClass:[Q("overlay"),e.overlayClass],onClosed:d,"onUpdate:show":z},se(e,Ct)),{default:()=>[V(),R(),m(),u()]})}});let de;const zt={loop:!0,images:[],maxZoom:3,minZoom:1/3,onScale:void 0,onClose:void 0,onChange:void 0,teleport:"body",className:"",showIndex:!0,closeable:!1,closeIcon:"clear",transition:void 0,beforeClose:void 0,overlayStyle:void 0,overlayClass:void 0,startPosition:0,swipeDuration:300,showIndicators:!1,closeOnPopstate:!0,closeIconPosition:"top-right"};function Rt(){({instance:de}=gt({setup(){const{state:e,toggle:o}=pt(),c=()=>{e.images=[]};return()=>l(Ee,le(e,{onClosed:c,"onUpdate:show":o}),null)}}))}const kt=(e,o=0)=>{if(Re)return de||Rt(),e=Array.isArray(e)?{images:e,startPosition:o}:e,de.open(ne({},zt,e)),de};pe(Ee);const[Lt,C,jt]=ue("uploader");function Se(e,o){return new Promise(c=>{if(o==="file"){c();return}const t=new FileReader;t.onload=s=>{c(s.target.result)},o==="dataUrl"?t.readAsDataURL(e):o==="text"&&t.readAsText(e)})}function Be(e,o){return $e(e).some(c=>c.file?Qe(o)?o(c.file):c.file.size>+o:!1)}function At(e,o){const c=[],t=[];return e.forEach(s=>{Be(s,o)?t.push(s):c.push(s)}),{valid:c,invalid:t}}const Ut=/\.(jpeg|jpg|gif|png|svg|webp|jfif|bmp|dpg|avif)/i,Vt=e=>Ut.test(e);function Ne(e){return e.isImage?!0:e.file&&e.file.type?e.file.type.indexOf("image")===0:e.url?Vt(e.url):typeof e.content=="string"?e.content.indexOf("data:image")===0:!1}var $t=H({props:{name:Y,item:oe(Object),index:Number,imageFit:String,lazyLoad:Boolean,deletable:Boolean,reupload:Boolean,previewSize:[Number,String,Array],beforeDelete:Function},emits:["delete","preview","reupload"],setup(e,{emit:o,slots:c}){const t=()=>{const{status:m,message:u}=e.item;if(m==="uploading"||m==="failed"){const r=m==="failed"?l(M,{name:"close",class:C("mask-icon")},null):l(De,{class:C("loading")},null),_=ze(u)&&u!=="";return l("div",{class:C("mask")},[r,_&&l("div",{class:C("mask-message")},[u])])}},s=m=>{const{name:u,item:r,index:_,beforeDelete:R}=e;m.stopPropagation(),Ve(R,{args:[r,{name:u,index:_}],done:()=>o("delete")})},b=()=>o("preview"),y=()=>o("reupload"),z=()=>{if(e.deletable&&e.item.status!=="uploading"){const m=c["preview-delete"];return l("div",{role:"button",class:C("preview-delete",{shadow:!m}),tabindex:0,"aria-label":jt("delete"),onClick:s},[m?m():l(M,{name:"cross",class:C("preview-delete-icon")},null)])}},P=()=>{if(c["preview-cover"]){const{index:m,item:u}=e;return l("div",{class:C("preview-cover")},[c["preview-cover"](ne({index:m},u))])}},I=()=>{const{item:m,lazyLoad:u,imageFit:r,previewSize:_,reupload:R}=e;return Ne(m)?l(Fe,{fit:r,src:m.objectUrl||m.content||m.url,class:C("preview-image"),width:Array.isArray(_)?_[0]:_,height:Array.isArray(_)?_[1]:_,lazyLoad:u,onClick:R?y:b},{default:P}):l("div",{class:C("file"),style:Te(e.previewSize)},[l(M,{class:C("file-icon"),name:"description"},null),l("div",{class:[C("file-name"),"van-ellipsis"]},[m.file?m.file.name:m.url]),P()])};return()=>l("div",{class:C("preview")},[I(),t(),z()])}});const Tt={name:J(""),accept:O("image/*"),capture:String,multiple:Boolean,disabled:Boolean,readonly:Boolean,lazyLoad:Boolean,maxCount:J(1/0),imageFit:O("cover"),resultType:O("dataUrl"),uploadIcon:O("photograph"),uploadText:String,deletable:B,reupload:Boolean,afterRead:Function,showUpload:B,modelValue:Ue(),beforeRead:Function,beforeDelete:Function,previewSize:[Number,String,Array],previewImage:B,previewOptions:Object,previewFullImage:B,maxSize:{type:[Number,String,Function],default:1/0}};var Dt=H({name:Lt,props:Tt,emits:["delete","oversize","clickUpload","closePreview","clickPreview","clickReupload","update:modelValue"],setup(e,{emit:o,slots:c}){const t=$(),s=[],b=$(-1),y=(n=e.modelValue.length)=>({name:e.name,index:n}),z=()=>{t.value&&(t.value.value="")},P=n=>{if(z(),Be(n,e.maxSize))if(Array.isArray(n)){const v=At(n,e.maxSize);if(n=v.valid,o("oversize",v.invalid,y()),!n.length)return}else{o("oversize",n,y());return}if(n=ee(n),b.value>-1){const v=[...e.modelValue];v.splice(b.value,1,n),o("update:modelValue",v),b.value=-1}else o("update:modelValue",[...e.modelValue,...$e(n)]);e.afterRead&&e.afterRead(n,y())},I=n=>{const{maxCount:v,modelValue:k,resultType:S}=e;if(Array.isArray(n)){const F=+v-k.length;n.length>F&&(n=n.slice(0,F)),Promise.all(n.map(N=>Se(N,S))).then(N=>{const ie=n.map((te,ce)=>{const i={file:te,status:"",message:"",objectUrl:URL.createObjectURL(te)};return N[ce]&&(i.content=N[ce]),i});P(ie)})}else Se(n,S).then(F=>{const N={file:n,status:"",message:"",objectUrl:URL.createObjectURL(n)};F&&(N.content=F),P(N)})},m=n=>{const{files:v}=n.target;if(e.disabled||!v||!v.length)return;const k=v.length===1?v[0]:[].slice.call(v);if(e.beforeRead){const S=e.beforeRead(k,y());if(!S){z();return}if(et(S)){S.then(F=>{I(F||k)}).catch(z);return}}I(k)};let u;const r=()=>o("closePreview"),_=n=>{if(e.previewFullImage){const v=e.modelValue.filter(Ne),k=v.map(S=>(S.objectUrl&&!S.url&&S.status!=="failed"&&(S.url=S.objectUrl,s.push(S.url)),S.url)).filter(Boolean);u=kt(ne({images:k,startPosition:v.indexOf(n),onClose:r},e.previewOptions))}},R=()=>{u&&u.close()},V=(n,v)=>{const k=e.modelValue.slice(0);k.splice(v,1),o("update:modelValue",k),o("delete",n,y(v))},d=n=>{W(),b.value=n},L=(n,v)=>{const k=["imageFit","deletable","reupload","previewSize","beforeDelete"],S=ne(se(e,k),se(n,k,!0));return l($t,le({item:n,index:v,onClick:()=>o(e.reupload?"clickReupload":"clickPreview",n,y(v)),onDelete:()=>V(n,v),onPreview:()=>_(n),onReupload:()=>d(v)},se(e,["name","lazyLoad"]),S),se(c,["preview-cover","preview-delete"]))},f=()=>{if(e.previewImage)return e.modelValue.map(L)},w=n=>o("clickUpload",n),x=()=>{if(e.modelValue.length>=+e.maxCount&&!e.reupload)return;const n=e.modelValue.length>=+e.maxCount&&e.reupload,v=e.readonly?null:l("input",{ref:t,type:"file",class:C("input"),accept:e.accept,capture:e.capture,multiple:e.multiple&&b.value===-1,disabled:e.disabled,onChange:m},null);return c.default?j(l("div",{class:C("input-wrapper"),onClick:w},[c.default(),v]),[[Pe,!n]]):j(l("div",{class:C("upload",{readonly:e.readonly}),style:Te(e.previewSize),onClick:w},[l(M,{name:e.uploadIcon,class:C("upload-icon")},null),e.uploadText&&l("span",{class:C("upload-text")},[e.uploadText]),v]),[[Pe,e.showUpload&&!n]])},W=()=>{t.value&&!e.disabled&&t.value.click()};return ke(()=>{s.forEach(n=>URL.revokeObjectURL(n))}),be({chooseFile:W,closeImagePreview:R}),Je(()=>e.modelValue),()=>l("div",{class:C()},[l("div",{class:C("wrapper",{disabled:e.disabled})},[f(),x()])])}});const Ft=pe(Dt);const g=e=>(ot("data-v-a62802ab"),e=e(),st(),e),Et={class:"content pt-14 px-4 pb-19"},Bt={class:"bg-white rounded-md box"},Nt={class:"flex gap-x-3 p-4 pb-0"},Ot=g(()=>a("div",{class:"w-24 h-24 flex-shrink-0 relative z-1"},[a("img",{class:"w-full h-full image-render-pixel object-center object-contain rounded-md",src:"http://p1.meituan.net/business/e65284d622dc3750acde4b5a2e9035af189516.jpg",alt:""})],-1)),Xt={class:"flex-1 w-0"},Yt=g(()=>a("div",{class:"text-xs text-[#999] mt-0.5 leading-4"},[a("span",null,"店铺地址:"),a("span",null,"上海大世界嗲输掉牙素上海大世界嗲输掉牙素")],-1)),Zt={class:"flex gap-x-3"},Mt={border:"~ solid c_theme/80",class:"mt-2 border-none px-3 py-1 rounded-md text-xs bg-transparent text-c_theme/80"},Ht={class:"mt-2 border-none px-3 py-1 rounded-md text-xs bg-c_theme/80 text-white"},Wt=g(()=>a("div",{class:"van-hairline--top py-4 text-xs text-[#999] mt-1.5 font-500 flex items-center justify-between px-4 pb-4"},[a("div",null,"抢单时间：10:00-23:59"),a("div",null,"0.1km")],-1)),qt={class:"bg-white rounded-md box mt-3 p-4"},Gt=ge('<div class="flex gap-x-3" data-v-a62802ab><div class="flex flex-col items-center" data-v-a62802ab><p class="w-4 h-4 flex items-center justify-center bg-c_theme/80 text-white rounded-full text-xs font-bold" data-v-a62802ab>1</p><p class="flex-1" border="~ dashed c_theme/60" data-v-a62802ab></p></div><div class="mb-4" data-v-a62802ab><p class="font-bold text-[14px]" data-v-a62802ab> 报名成功，要求实付满 <span class="font-bold text-c_theme/80" data-v-a62802ab>20</span> 返 <span class="font-bold text-c_theme/80" data-v-a62802ab>10</span></p><p class="text-xs text-[#999] mt-2px text-c_theme/80" data-v-a62802ab>实返金额7元（商家优惠7 +霸王餐红包0）</p></div></div><div class="flex justify-center items-center pl-2 h-1" data-v-a62802ab><p class="flex-1" border="~ dashed c_theme/60" data-v-a62802ab></p><h4 class="px-3" data-v-a62802ab>活动要求：1图15字</h4><p class="flex-1" border="~ dashed c_theme/60" data-v-a62802ab></p></div>',2),Kt={class:"flex gap-x-3 pt-4"},Qt=g(()=>a("div",{class:"flex flex-col items-center relative"},[a("p",{class:"z-1 w-4 h-4 flex items-center justify-center bg-c_theme/80 text-white rounded-full text-xs font-bold"},"2"),a("p",{class:"flex-1 absolute left-1/2 transition-transform -translate-x-1/2 z-0 -top-4 h-full",border:"~ dashed c_theme/60"}),a("p",{class:"absolute left-1/2 transition-transform -translate-x-1/2 z-0 -bottom-4 h-7",border:"~ dashed c_theme/60"})],-1)),Jt={class:"mb-3"},ea=g(()=>a("p",{class:"font-bold text-[14px]"},"先领红包，再去下单更优惠哦～",-1)),ta={class:"flex items-center gap-x-3 mt-4"},aa={class:"border-none px-3 py-2 text-xs rounded-full text-[#6a6a6a]"},oa={class:"border-none px-3 py-2 text-xs rounded-full bg-c_theme/80 text-white"},sa={class:"flex justify-center items-center pl-2 h-1 py-4"},na=g(()=>a("p",{class:"flex-1",border:"~ dashed c_theme/60"},null,-1)),la={class:"px-3 flex items-center"},ia=g(()=>a("span",{class:"font-bold text-c_theme/80 mx-3 mr-2 !text-[14px]"},"距离结束",-1)),ca=g(()=>a("p",{class:"flex-1",border:"~ dashed c_theme/60"},null,-1)),ra={class:"flex gap-x-3"},da=g(()=>a("div",{class:"flex flex-col items-center relative"},[a("p",{class:"w-4 h-4 flex items-center justify-center bg-c_theme/80 text-white rounded-full text-xs font-bold"},"3"),a("p",{class:"flex-1",border:"~ dashed c_theme/60"}),a("p",{class:"h-4 absolute left-1/2 transition-transform -top-4 -translate-x-1/2",border:"~ dashed c_theme/60"})],-1)),ua={class:"w-full"},ma=ge('<p class="font-bold text-[14px] flex items-center" data-v-a62802ab>提交订单号及订单截图</p><p class="text-xs text-[#999] mt-2px" data-v-a62802ab><span data-v-a62802ab>需要在</span><span class="text-c_theme/80 font-bold" data-v-a62802ab>报名后1小时内</span><span data-v-a62802ab>提交，</span><span class="text-c_theme/80 font-bold" data-v-a62802ab>超时视为自动放弃活动</span></p><div class="flex items-center justify-between mt-1 text-xs" data-v-a62802ab><p class="font-bold" data-v-a62802ab> 外卖订单号 <span class="text-c_theme/80" data-v-a62802ab>*</span></p><p class="text-c_theme/80 font-bold" data-v-a62802ab>如何获取外卖订单号？</p></div>',3),fa={class:"my-3 h-12"},va={class:"flex items-center justify-between"},ha=g(()=>a("p",null,[A(" 订单截图（请勿长截图） "),a("span",{class:"font-bold text-c_theme/80"},"*")],-1)),xa={class:"border-none px-3 py-2 text-xs rounded-full bg-c_theme/80 text-white"},pa={class:"py-3"},ga={class:"text-xs text-c_theme/80 font-bold flex justify-between items-center pb-4"},ba=g(()=>a("p",null,"店铺名+实付金额+订单号+下单时间",-1)),_a={class:"border-none px-3 py-2 text-xs rounded-full bg-c_theme/80 text-white"},wa=ge('<div class="flex gap-x-3" data-v-a62802ab><div class="flex flex-col items-center" data-v-a62802ab><p class="w-4 h-4 flex items-center justify-center bg-c_theme/80 text-white rounded-full text-xs font-bold" data-v-a62802ab>4</p><p class="flex-1" border="~ dashed c_theme/60" data-v-a62802ab></p></div><div class="mb-4" data-v-a62802ab><p class="font-bold text-[14px]" data-v-a62802ab>订单送达体验后提交反馈截图</p><p class="text-xs text-[#999] mt-2px" data-v-a62802ab> 需要在 <span class="font-bold text-c_theme/80" data-v-a62802ab>次日凌晨3点前</span> 提交， <span class="font-bold text-c_theme/80" data-v-a62802ab>次日凌晨3点后提交会减少2元，次日13点后将自动关闭订单</span> 。 <span class="font-bold text-c_theme/80" data-v-a62802ab>注：灌水内容或与本店无关图片无返，无图无字或反馈被折叠减少5元。</span></p></div></div>',1),ya={class:"flex gap-x-3"},Pa=g(()=>a("div",{class:"flex flex-col items-center"},[a("p",{class:"w-4 h-0 flex items-center justify-center bg-transparent text-white rounded-full text-xs font-bold"},"4"),a("p",{class:"flex-1",border:"~ dashed c_theme/60"})],-1)),Ia={class:"mb-4"},Ca={class:"flex justify-between items-center"},Sa=g(()=>a("p",null," 评价截图（请勿长截图） ",-1)),za={class:"border-none px-3 py-2 text-xs rounded-full bg-c_theme/80 text-white"},Ra={class:"py-3"},ka={class:"text-xs text-c_theme/80 font-bold flex justify-between items-center pb-4"},La=g(()=>a("p",null,"截图需要店铺名称+评价",-1)),ja={class:"border-none px-3 py-2 text-xs rounded-full bg-c_theme/80 text-white"},Aa=g(()=>a("p",{class:"text-[14px]"},[A(" 对商家的意见和建议（提交有效建议 "),a("span",null,"有概率得晓晓红包"),A(" ） ")],-1)),Ua={class:"field-container bg-[#f6f7f9] rounded-md my-3 px-2"},Va={class:"flex gap-x-3"},$a=g(()=>a("div",{class:"flex flex-col items-center"},[a("p",{class:"w-4 h-4 flex items-center justify-center bg-c_theme/80 text-white rounded-full text-xs font-bold"},"5")],-1)),Ta={class:"mb-4"},Da=g(()=>a("p",{class:"font-bold text-[14px]"},"根据平台要求完善信息后，等待霸王餐急速返现",-1)),Fa=g(()=>a("p",{class:"text-xs text-[#999] mt-2px text-c_theme/80"},"单单极速秒审核，无需提现秒到账",-1)),Ea={class:"flex flex-col mb-3"},Ba=g(()=>a("div",{class:"text-[14px] font-bold my-3 flex items-center"},[a("p",null,[A(" 请输入支付宝账号 "),a("span",{class:"text-c_theme/80"},"*")]),a("p",{class:"text-xs text-[#666]"},"（如：18866666666）")],-1)),Na={class:"w-full h-12"},Oa={class:"flex flex-col mb-3"},Xa=g(()=>a("div",{class:"text-[14px] font-bold my-3 flex items-center"},[a("p",null,[A(" 请输入支付宝收款姓名 "),a("span",{class:"text-c_theme/80"},"*")]),a("p",{class:"text-xs text-[#666]"},"（如：张三）")],-1)),Ya={class:"w-full h-12"},Za={class:"box bg-white rounded-md p-4 text-[14px] text-[#333] mt-3"},Ma=g(()=>a("div",{class:"font-bold mb-1"},"不会操作? 快来添加您的私人客服吧",-1)),Ha=g(()=>a("div",{class:"text-xs text-[#777] mb-2"},"无需担忧步骤繁杂, 让您快速提现",-1)),Wa={class:"fixed max-w-187.5 left-1/2 transition-transform -translate-x-1/2 bottom-0 w-full h-15 bg-white flex justify-center items-center px-8 py-2"},qa=g(()=>a("h2",{class:"text-center text-base"},"添加客服",-1)),Ga=g(()=>a("img",{class:"w-full h-full object-center object-contain rounded-md",src:mt,alt:""},null,-1)),Ka=[Ga],Qa=g(()=>a("div",{class:"text-center text-[#999] text-xs pb-2"},[a("p",{class:"mb-1"},"保存二维码添加私人客服"),a("p",null,[A(" 为你高效解答 "),a("span",null,"返现流程")])],-1)),Ja=H({name:"OrderDetail"}),eo=H({...Ja,setup(e){const o=new ft,c=tt(),t=ee({orderNum:"",comments:"",aliAccount:"",aliName:""}),s=$([]),b=u=>{console.log(u),o.setOption({type:"success",message:"上传成功-"+u.file.name})},y=$([]),z=u=>{console.log(u),o.setOption({type:"success",message:"上传成功-"+u.file.name})},{loading:P,setLoading:I}=vt({initValue:!1});async function m(){o.setOption({type:"success",message:"已提交!",duration:2e3}),await ht(2e3),c.push("/order")}return ee({}),(u,r)=>{const _=ut,R=dt,V=M,d=Ft,L=lt,f=Xe,w=je("feed-touch");return T(),D("div",Et,[l(_,{title:"提交订单及反馈信息",border:!1,class:"z-20",onClickLeft:r[0]||(r[0]=x=>G(c).back())}),a("div",Bt,[a("div",Nt,[Ot,a("div",Xt,[a("p",{class:"whitespace-nowrap text-ellipsis overflow-hidden text-base font-bold text-[#3d3d3d]",onClick:r[1]||(r[1]=x=>G(_e)("店铺名称",{msg:"店铺名称已复制",type:"default"}))}," Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis consequatur officia omnis molestias, libero esse "),Yt,a("div",Zt,[j((T(),D("button",Mt,[A(" 已报名 ")])),[[w]]),j((T(),D("button",Ht,[A(" 复制店铺关键字 ")])),[[w]])])])]),Wt]),a("div",qt,[Gt,a("div",Kt,[Qt,a("div",Jt,[ea,a("div",ta,[j((T(),D("button",aa,[A(" 立即领取外卖红包 ")])),[[w]]),j((T(),D("button",oa,[A(" 一键进店下单 ")])),[[w]])])])]),a("div",sa,[na,a("h4",la,[ia,l(R,{time:1e3,class:"text-xs bg-c_theme/80 text-white px-1 rounded-sm"})]),ca]),a("div",ra,[da,a("div",ua,[ma,a("div",fa,[j(a("input",{class:"w-full h-full bg-[#f9f9f9] pl-4 rounded-md placeholder-text-[#6A6A6A] outline-none",type:"text","onUpdate:modelValue":r[2]||(r[2]=x=>t.orderNum=x),placeholder:"请输入外卖订单号"},null,512),[[ve,t.orderNum]])]),a("div",va,[ha,j((T(),D("button",xa,[A(" 前往截图 "),l(V,{name:"arrow"})])),[[w]])]),a("div",pa,[l(d,{modelValue:s.value,"onUpdate:modelValue":r[3]||(r[3]=x=>s.value=x),"preview-size":"60",multiple:"","after-read":b,"max-count":2},null,8,["modelValue"])]),a("div",ga,[ba,j((T(),D("button",_a,[A(" 如何获取 "),l(V,{name:"arrow"})])),[[w]])])])]),wa,a("div",ya,[Pa,a("div",Ia,[a("div",Ca,[Sa,j((T(),D("button",za,[A(" 快速截图 "),l(V,{name:"arrow"})])),[[w]])]),a("div",Ra,[l(d,{modelValue:y.value,"onUpdate:modelValue":r[4]||(r[4]=x=>y.value=x),"preview-size":"60",multiple:"","after-read":z,"max-count":2},null,8,["modelValue"])]),a("div",ka,[La,j((T(),D("button",ja,[A(" 如何获取 "),l(V,{name:"arrow"})])),[[w]])]),Aa,a("div",Ua,[l(L,{modelValue:t.comments,"onUpdate:modelValue":r[5]||(r[5]=x=>t.comments=x),rows:"2",autosize:"",label:"",type:"textarea",maxlength:"50",placeholder:"请输入留言","show-word-limit":""},null,8,["modelValue"])])])]),a("div",Va,[$a,a("div",Ta,[Da,Fa,a("div",Ea,[Ba,a("div",Na,[j(a("input",{class:"w-full h-full bg-[#f9f9f9] pl-4 rounded-md placeholder-text-[#6A6A6A] outline-none",type:"text","onUpdate:modelValue":r[6]||(r[6]=x=>t.aliAccount=x),placeholder:"请输入支付宝账号（如：18866666666）"},null,512),[[ve,t.aliAccount]])])]),a("div",Oa,[Xa,a("div",Ya,[j(a("input",{class:"w-full h-full bg-[#f9f9f9] pl-4 rounded-md placeholder-text-[#6A6A6A] outline-none",type:"text","onUpdate:modelValue":r[7]||(r[7]=x=>t.aliName=x),placeholder:"请输入支付宝收款姓名（如：李四）"},null,512),[[ve,t.aliName]])])])])])]),a("div",Za,[Ma,Ha,j((T(),D("button",{onClick:r[8]||(r[8]=x=>G(I)(!0)),class:"border-none bg-c_theme/80 text-white px-3 py-2 rounded-md outline-none"},[A(" 添加您的私人客服 ")])),[[w]])]),a("div",Wa,[j((T(),D("button",{onClick:m,class:"w-full h-full border-none rounded-md bg-c_theme/80 text-white"},[A(" 确认提交订单号及订单截图 ")])),[[w]])]),l(f,{show:G(P),class:"!w-9/10 !rounded-md relative"},{default:at(()=>[a("div",null,[a("div",{class:"absolute right-4 top-4.5",onClick:r[9]||(r[9]=x=>G(I)(!1))},[l(V,{name:"cross",size:"22px",color:"#ccc"})]),qa,a("div",{class:"w-44 h-44 p-4 bg-c_grey_l m-2 mx-auto rounded-md",onClick:r[10]||(r[10]=x=>G(_e)("微信号",{msg:"已复制客服微信号"}))},Ka),Qa])]),_:1},8,["show"])])}}});const go=nt(eo,[["__scopeId","data-v-a62802ab"]]);export{go as default};
