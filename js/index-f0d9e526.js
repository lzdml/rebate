import{c as x,d,e as o,F as w,a4 as g,al as k,a9 as h,w as R,t as u,a as C,o as y,i as B,z as m,x as F,A as T,j as c}from"./index-f20af8e6.js";import{F as V}from"./index-f9b8aaae.js";import{_ as O}from"./index.vue_vue_type_script_setup_true_lang-0643b25f.js";import"./useGeolocation-ecbf70ce.js";import{u as f}from"./useTouchFeedback-d0c49a5e.js";import"./use-id-6c78e4cf.js";import"./use-expose-d7bbeeac.js";const[P,p]=x("cell-group"),$={title:String,inset:Boolean,border:g};var z=d({name:P,inheritAttrs:!1,props:$,setup(n,{slots:e,attrs:r}){const l=()=>{var i;return o("div",k({class:[p({inset:n.inset}),{[h]:n.border&&!n.inset}]},r),[(i=e.default)==null?void 0:i.call(e)])},s=()=>o("div",{class:p("title",{inset:n.inset})},[e.title?e.title():n.title]);return()=>n.title||e.title?o(w,null,[s(),l()]):l()}});const G=R(z);const N={class:"content pt-16"},A={class:"text-center py-10 w-full px-4"},E=d({name:"Complaints"}),q=d({...E,setup(n){const e=u(""),r=C(),l=u(null),s=u(null);return f(l,"opacity-80"),f(s,"opacity-80"),(i,t)=>{const _=O,b=V,v=G;return y(),B("div",N,[o(_,{title:"说点什么",onClickLeft:t[0]||(t[0]=a=>m(r).back())}),o(v,{inset:""},{default:F(()=>[o(b,{modelValue:m(e),"onUpdate:modelValue":t[1]||(t[1]=a=>T(e)?e.value=a:null),rows:"4",autosize:"",size:"large",type:"textarea",maxlength:"200",placeholder:"请输入留言","show-word-limit":""},null,8,["modelValue"])]),_:1}),c("div",A,[c("button",{onClick:t[2]||(t[2]=a=>e.value=""),ref_key:"clearRef",ref:l,class:"btn mb-4 h-12 bg-c_theme text-white text-base font-bold border-none w-full rounded-md select-none"}," 清除内容 ",512),c("button",{ref_key:"submitRef",ref:s,onClick:t[3]||(t[3]=a=>e.value=""),class:"h-12 text-base font-bold border-none w-full rounded-md select-none"}," 提交吐槽 ",512)])])}}});export{q as default};