import{c as Be,d as k,b as Ue,e as u,n as Ie,f as z,g as je,w as Ve,h as te,o as s,i as n,j as e,k as y,l as Ee,_ as se,m as g,p as j,q as Z,F as _,r as b,s as M,a as Le,t as f,v as Qe,x as w,y as r,z as o,A as Y,B as I,C as Se,D as De,E as Fe}from"./index-f47502e7.js";import{P as Oe}from"./index-0b083fef.js";import{_ as Je}from"./index.vue_vue_type_script_setup_true_lang-af4e1201.js";import{S as He,T as Pe,a as Te,_ as ze,b as Ye,c as qe}from"./banner-324ab07e.js";import{L as Me}from"./index-5767be45.js";import{u as Ze}from"./index-5e8479ff.js";import{u as We}from"./useGeolocation-b494f4a0.js";import{u as ee}from"./loading-a2a4377f.js";import"./use-expose-903d295f.js";import"./use-touch-20824401.js";import"./use-id-15423eb7.js";const[Ne,q]=Be("switch"),Ge={size:Ie,loading:Boolean,disabled:Boolean,modelValue:z,activeColor:String,inactiveColor:String,activeValue:{type:z,default:!0},inactiveValue:{type:z,default:!1}};var Ke=k({name:Ne,props:Ge,emits:["change","update:modelValue"],setup(a,{emit:c,slots:m}){const x=()=>a.modelValue===a.activeValue,A=()=>{if(!a.disabled&&!a.loading){const h=x()?a.inactiveValue:a.activeValue;c("update:modelValue",h),c("change",h)}},v=()=>{if(a.loading){const h=x()?a.activeColor:a.inactiveColor;return u(Me,{class:q("loading"),color:h},null)}if(m.node)return m.node()};return Ue(()=>a.modelValue),()=>{var h;const{size:V,loading:E,disabled:B,activeColor:R,inactiveColor:L}=a,C=x(),Q={fontSize:je(V),backgroundColor:C?R:L};return u("div",{role:"switch",class:q({on:C,loading:E,disabled:B}),style:Q,tabindex:B?void 0:0,"aria-checked":C,onClick:A},[u("div",{class:q("node")},[v()]),(h=m.background)==null?void 0:h.call(m)])}}});const Xe=Ve(Ke),$e={class:"w-17 h-2 bg-[#ffe0bd] rounded-[4px] relative"},et=k({__name:"remaining-quantity",props:{total:{default:3},remain:{default:1}},setup(a){const c=a,m=te(()=>c.remain/c.total);return(x,A)=>(s(),n("div",$e,[e("div",{class:y(["absolute left-0 top-0 h-full text-c_theme/80",{"bg-c_theme/80 rounded-tl-[4px] rounded-bl-[4px]":x.remain!==0}]),style:Ee({width:m.value*100+"%"})},null,6)]))}});const tt=se(et,[["__scopeId","data-v-f94dd6c1"]]),st="/rebate/jpg/mt-acdfdf3c.jpg",nt={class:"p-3 bg-white rounded-md flex gap-x-3"},ot=e("div",{class:"w-24 h-24 flex-shrink-0 relative"},[e("img",{class:"w-full h-full image-render-pixel object-center object-contain rounded-md",src:"http://p1.meituan.net/business/e65284d622dc3750acde4b5a2e9035af189516.jpg",alt:""})],-1),it={class:"flex-1 w-0"},at=Z('<p class="whitespace-nowrap text-ellipsis overflow-hidden text-base font-bold text-[#3d3d3d]"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis consequatur officia omnis molestias, libero esse ratione qui? Sint recusandae vitae facilis debitis odit et harum dolores asperiores, totam possimus dicta. </p><div class="flex items-center justify-between mt-1.5 text-[#999999] text-xs"><p class="flex items-center"><img class="w-3.5 h-3.5 object-center object-contain image-render-pixel mr-1" src="'+st+'" alt=""><span>美团</span></p><p>距离: 681m</p></div><div class="flex items-center gap-x-2 my-2"><div class="h-5 text-xs px-1 flex justify-center items-center rounded-[4px] bg-[#ff5748] text-white">满40减29</div><div class="h-5 text-xs px-1 flex justify-center items-center font-bold rounded-[4px] bg-[#eafbf5] text-[#25c68a]" border="~ soldi #25c68a"> 无需评价 </div></div>',3),dt={class:"flex items-center justify-between"},ct={class:"text-xs text-[#999] mt-1.5 font-500"},lt=e("div",null,"抢单时间：10:00-23:59",-1),rt={class:"flex items-center gap-x-1"},mt={key:0,class:"border-none w-16 h-8 flex justify-center items-center rounded-full text-[13px] font-bold text-[#cbcbcb] bg-[#f0f0f0]"},ft={key:1,class:"text-white border-none w-16 h-8 flex justify-center items-center rounded-full text-[13px] font-bold bg-c_theme/80"},ut=k({__name:"product-item",setup(a){const c=~~(Math.random()>.5);return(m,x)=>{const A=tt;return s(),n("div",nt,[ot,e("div",it,[at,e("div",dt,[e("div",ct,[lt,e("div",rt,[u(A),g(" 还剩0份 ")])]),e("div",null,[c?(s(),n("button",mt," 抢光了 ")):j("",!0),c?j("",!0):(s(),n("button",ft," 去抢单 "))])])])])}}}),pt=k({__name:"index",props:{list:{}},emits:["handleItem"],setup(a,{emit:c}){return(m,x)=>(s(),n("div",null,[(s(!0),n(_,null,b(m.list,A=>(s(),M(ut,{class:"mb-2",onClick:v=>c("handleItem",A),key:A.id},null,8,["onClick"]))),128))]))}});const xt="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAAAXNSR0IArs4c6QAAA+tJREFUaEPtmF1oU0kUx8+ZSdMHC6Jd2zzI1pUgq8uKT5Xc22LTgsjiPsjCvuyDi1hEBNd9EEX8eFCqIKLIwrIo4rMiguiyLuZjae69UCyI4gdS1BaEbjRCse6aNPccmTaBUPyYuUnUQPISkntm5vz+55y5MwehwT/Y4P5DE+BTR7AZgWYEqlSgmUJVClj18GYEKiQUltX/FTOslhLVdzsitKnnzDCNCDnf58eIcNt1k48BgKqWH6AmLzJhWevWIoY2IsIXOk4xw3Pm4lXX/cfTsX+fTVUp1Nvbu4QotBVRLFOLEHEWgG8hwoOZGTH54sX4tPp/8eKutpYWijDD1wC4RgjsmIsMPRGieHZ4ePhZUJDAAN3dPSvC4ZZtAKJtznH/T11FLWtdDEB+NwdC04XCzB8jI5mHQSACAcw5H94FgJKIb2WzE+fGxsbyJg5Eo9HWjo4vtwiBawDYLxQKp4JAGAOotGEO7VXKM1PCcVIXTByfb2vb8R8RxYCKBGLxmGk6mQII247vUTmvlHfd5O/VOF8ea1n921UkVE04TuqoyZxGACp3hQj9rHI+m504Ypo273KslE77VU0QFc/r1pKazwRA2PbAEURoN11ER9GyOMyQc5zEft33hDZALNYXlVLuVuq7bvKAjlOmNpbVf1hFwff9456XHtMZbwDQv0lK3EBEf7tu6pLO5KY2lhX/QQixnpmuOU7qis54bQDbju9GFFFmOu04qbs6k5va2Hb8G0SxEwAeZjKJEzrjDQAGhlT+Fwqwb2QkkdOZ3NSmu3ugPRyGoVId7NMZbwAQ/w1RtExOju+s1e4z30G1G0UiXacB4HUmk/ilLgChkL8jnU4XdSY3takzQOOn0GwR+75/0vPSD0zV1bGvaxHHYh9vG/V9/svzkpd1oLWLuOFfZADQ2EcJFc56HuY6O7sOBTlnaadQKR/VcXovouiq5XG6p6dvB4BczUzjjpMa0sn9so0pAFReaAD4RiaTvGiy4Dxb1cnYDACDAHBTypnD9b7QzK5fqytlJLJ0K5H4CREWEvH1qSk+eO9eerYRoPsxjkB54mov9eU2DBHnmbkopVhAxBP5/NTJ0dHR/+oOoBYotVUGVU2o3+W2ipTifj4P/1a2VVpbodP3aeW8tsq4EMUzuZz8f9Ei/BVRLCXyJ/L5l9oQgSNQqZDanRBD36tdREe5t7VhVq3qawsCUROA8g4Vi/UtBxDfSonLS63FBeoZM7wqtRYfAdAdz0s/etuVMQhELQF0xP+gTSUEM993nOSp9w367ACUsyWIQSK84HnJpw0H8MEwVRh8lhFoApgo8KltmynUjECVCjR8Cr0B14sdT5ATUPwAAAAASUVORK5CYII=",At="/rebate/jpeg/hot-ef755038.jpeg",_t="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAAAgCAMAAADt/IAXAAAAAXNSR0IArs4c6QAAAsFQTFRFAAAA////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////WAeWWwAAAOp0Uk5TAAECAwQFBgcICQoLDA0ODxAREhMUFRYXGBkaGxwdHh8gIiMkJSYnKCkqKy0uLzAxMjM0NTc4OTs8PT4/QEFCQ0RFRkdISUtMTU5PUFFTVFVWV1hZWlxdXl9gYWJjZGVmZ2hpamtsbW5vcHFydHV2d3l6e3x9fn+AgYKDhIWGiYqLjI6PkJGSk5SVlpeYmZqbnJ2foKGio6SlpqeoqaqrrK2ur7CxsrO0tba3ubq7vL2+v8DBwsPExcbHyMnKy8zOz9DR0tPU1dfY2drb3N3e3+Dh4uTm5+nq7O3u7/Dx8vP09vf4+fr7/P3+5BFdzgAABNdJREFUWMPNl/tblEUUx2eRiOQOppJdxW1TiEDogoIiWnRbWVIrMaWyBC9x063ANosALxSpRRklaimVpIUaYZpmUhgr665mQRu3RWX3/Suac2bffd9ZZkGf8Hk6v8yZ75yZ+byzc2ZmCQHT6JJmZq+aRa6rBYf7bntGAjvAaZqoaXMWTeLjbriV2o1endNyqc0ebuqQ5Jy3v7a6fgE/kwYvu9s7Ig8BGtGPr6qp/eJI68UrIL3Ox30C2ndenbtA7JZrBedVZsFFzXfh8JKF+kFO8Oq9AWada/upYfND6G+SVGbi4/aDdsqrcy+IDrm2W91dygPpfUkBCEdvr7p/8r6vVJZHqq8bQKsYwMj1OMkDvDEaAO9Rx2XZWaC9VoCunz+PHxmgbhBE53G01eQDbriXISKxKCs+2B19tQBfpsTdHjR0OwsA/LjuTSQoIRFs+kWspxLyRJXHMoQAj9suqGwTA6gW59NVALjtYaye1hDSorTuEwKQCL3BMH8cIRkGg2EqGSWAb7C6gHo/Kq0NYoAittumQ9F8zQDELgKIxdQ3j+EB9goB7vwQpJ1pr0LRksgAHF3Mvh8ZILwPxOV37VIDbMN5loL7gwKwTQjwG7eG0hQuDS/xkzWBdkaUhnqyXQUw3gGV8wHgzy6ltkVOagGAlQe4bziAX0HrHA4g2Wyl9hd27rNaW/xZTLa8Iv8RoBNTPlCwCbJIHRT7l/CjSZEYEtaGHaOFAO18j6kcQDs31b1MnMsD2HAPkMNQfCoEiDgouXe4COD+JdRwbfdQR69BgJrAo1C84sdNVcwGreIBToNWRjqgeFcAELqYHUqS8/cdSQIAzSR6xyP+W9S5SU5DPD9WcjMF2NhAdv5lsQev8hhMvPxsfv4rY0nlgKr+sQBgg8SvuW+Al+SgMk5eB9LlCmxJ8U9OoWYG30YdndceqxMAbOcA7L4BJv8jBzkS1Hoqangl9Y1l0ilVuo4aQPBJJepslPow/sOj7yDDAdB8rRUAbOUAOhnAliEAUcfUYa3RqhHe9MjpPgD+xlZ9dOYUBSCi0Gg06qkTt446Z0H+ljpZpAbcCm+AVDObopudMZItXQG4ucc9/0EiAFj5znJtLgPg0jAfnHPUuaWx+XB6I9TWzoDvamBPMQ4g4SP3u9KZOfMy81y1sfJ0E064AZ4UAYCJAD4D5wR1FtKyiAH0Du6edhse4ytUABkVyq9fRMiLsu9qXp9Cm++o7JWVgWodzjfmz5EBdJfA2UUlOAIWHkIAOrelBCPmKQAhTuWnr4XRKlV7gS5Zq3pv9ND2x8rxVJHafAO0mzYio1RMpW5almOthALY12NWhygA45SLYRUbbmm/R4rxvkv8lAfAAd8AHotnAObnsZbTLwPUEwFAR5I8XtyZIQA9hzwAx91tG0cGOEYQwPU0BgzqynoYQLd2KEBvaYgyYFCJnQMY3DqRPNLBAwzEjAjgSMbLzJJDcmCDr6X3RmF9Kf3UB6h8hO1FQiJp2d+8IpK/gUKXNcHem0yIRbpQjgkR+MJRl9PzCrU/pYp+zpMkoar5rSyVw2ifsMW5C7QsVls4F15y5MGCgoLVE/CP47Ox/qIHot89i9bQD350hsYj6eAj0+hxUjx/vDp04msmk8kYAe6acmYbCucEkP+D/QsMOftOULF2vwAAAABJRU5ErkJggg==",bt="/rebate/jpeg/zfb-73edfc1b.jpeg",gt="/rebate/jpeg/qun-2ca2c668.jpeg",ne="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAJNJREFUSEvtlLENgCAQRd/N4BZWDmDpUsbauJSlA1i5hTNgsIMAdxQmFlAf/8H/Pyd8fORjfRpAdbhZ9FOL3MII9OrzwoFLVo74TjJkN9Mh7MBghJw4Jtm4TQA/VAHJinudYk0NkKK4ClB+ooqbABmISdwMiCDkAk0VompVvJn44BJtybWtCmCsbDDWAKprzSLVogct+yoZMnsKqAAAAABJRU5ErkJggg==",ht="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAAAXNSR0IArs4c6QAABPhJREFUaEPtWF1oHFUUPufO7GwrgloRE6PViA8tIg1C/AGxqaQUsUIFqaiohSRzZ7eFuIKCP+CiKAo+iEt2994mtA8qxX/0SYtaWtFCBUURLdVi1YbCpvXBJDQ7c++Rs05Ais3O7k6R0L0wMDBzzznf+T8HYZkfXObyQxfA/23BrgW6FuhQA+enC42Pj1++sLAwTET91lrRoRIb1xGRrLXTiHhw586dPySl2ZIF8vn8hcaYCcdxHiYi4CfNg4gMBIwx+4joEa31b83oJwZQKBRWzc3N7XVd98YoikAI0XjSPNZa4MdxHAZxIpvNDpZKpT+W4pEYgJTySQB4kbXOWgKAA4h4wBgTpQSEtTGAiJsZRMxjn1JqQ8cAfN+/ABHfA4BNRGQB4Gmt9Utpan+Rlu/7twHAfg4LAJgRQgxUq9XjZ+OVyAK+718EAHsRcZCI/kLETUqpr84FAI6zKIq+BIAbAOBPAFivtf6+IwCFQmHl/Pz8WwCwmYgMAARa68lzASAIgmuMMUfxHx+qZbPZ60ulUq0jAHxZSvkMET3PdImI09yQ1nombRBSys8RcSjOcAeUUrd3HANMIJ/P9xhjviGiHtd1IYqiitY6nyaAXC73lBDihTAMG0Hsed51pVLpl1QAMJFcLrdFCPE+M4gzz73VavXdNEAEQXCTtfZjALjY8zwIw3C7UqrcjHaiIP43ESnl60KIB43hUICTYRiu3bVr11l9tJkA/H3btm0rPM97BxHvitP0fiK6U2s93+x+ywDignYIEa+NmVV7e3u3F4tFTq9tHSnliBBikpWCiAuO4wyXy+UvkhBrGQATHRsbewgRpwAgw74qhLi1UqkcTMLwzH9831+NiMdYGVyBrbWvKKUeT0qrLQBMPAiCvUQ0zO9ENDM8PNyzdevWhl+1cqSU3xLROo4pIjqslFrTyv22AeRyuUustUcA4FJmbozZo7W+vxXmUsrHWONxzp8joptb6USZV9sA+LLv+xscx/ksDui6EOKBpFmJ03IURT8BAFd59v3nlFLPtqKANABwDGhOJLErfZfJZO6YmJg42UwQKeUnQoiNceAeIaKBJFnnTLodWYCJjY6O9gshDrErZTIZzt+vaq0LSwEIguAJx3FeXixYADColPq6Gej/+t4xACYqpbxPCLGH22AiOq21XrmUML7vHwWA/riij2utX2tH+I5daJFpsVgUtVrN8KBDRHWtdbYJgGMAsJorbhRFVy7VLjcDlooFisWiV6vVFtoBUK/Xr04yOp4NSBcAa6ZrgQTbh64LLZUNzisX4pQ7PT3NC6s+VooQYnml0Xw+f3cURbwgWIGIvxLRYCezdSpp1Pf9jOd59Xq9zk1ZpJTKnOlyvJpxHGfQGPMmAFzGc4S1ttTX1/doJ8NQKgBY2FwuR9yYcXtQr9evmpycbKwEx8bGBhzH2WKt3ZLJZNZxsYsbv2nXddeXy+Wfm1Xbpb6nBoC7S0TcyP0QABxHxLcB4BYiWsstc7yOWZy6TgghhiqVyuFOhE+tF2JCO3bs6A/D8EciavRB8YTV2GDHwoe8KkTEN1oZGZsBTM0CPJNIKe8hopLneVcsLmjDMLSI+CERfWCM+WhqaupUM6Fa+Z4mgAbfkZGRVa7r8mZtjRDid9d1P52dnT21e/fu060IlvTf1AEkZZzWf10AaWmyXTpdC7SrubTuLXsL/A2r7LtPP4zUMwAAAABJRU5ErkJggg==",vt={banners:[{id:0,name:"螺蛳粉"},{id:1,name:"螺蛳粉"}],menus:[{id:10,name:"热门",content:[{id:101,name:"美团",icon:"mt",isHot:!0},{id:102,name:"饿了么",icon:"elm"},{id:103,name:"蜜雪冰城",icon:"mxbc"},{id:104,name:"肯德基",icon:"kdj"},{id:105,name:"麦当劳",icon:"mdl"},{id:106,name:"必胜客",icon:"bsk"},{id:107,name:"猫眼",icon:"my"}]},{id:11,name:"出行",content:[{id:111,name:"飞猪",icon:"fz"},{id:112,name:"滴滴",icon:"dd"},{id:113,name:"花小猪",icon:"hxz"},{id:114,name:"高德",icon:"gd"},{id:115,name:"携程",icon:"xc"}]},{id:12,name:"餐饮",content:[{id:121,name:"星巴克",icon:"xbk"},{id:122,name:"蜜雪冰城",icon:"mxbc"},{id:123,name:"喜茶",icon:"xic"}]},{id:13,name:"饮品",content:[{id:131,name:"星巴克",icon:"xbk"},{id:132,name:"蜜雪冰城",icon:"mxbc"},{id:133,name:"喜茶",icon:"xic"},{id:134,name:"瑞辛",icon:"rx"}]},{id:14,name:"快递",content:[{id:141,name:"拼多多",icon:"pdd"},{id:142,name:"京东",icon:"jd"},{id:143,name:"盒马",icon:"hm"},{id:144,name:"淘宝",icon:"tb"}]}],navs:[{id:60,name:"全城霸王餐"},{id:61,name:"大牌专享"},{id:62,name:"返利餐"}],recommends:[{id:70,name:"推荐排序"},{id:71,name:"距离最近"}],filterLists:[{id:72,name:"高返利",checked:!1},{id:73,name:"无需评价",checked:!1}],meals:[{id:100,name:"早餐"},{id:101,name:"午餐"},{id:102,name:"甜品奶茶"},{id:103,name:"晚餐"},{id:104,name:"夜宵"},{id:105,name:"零售"}],platform:[{id:200,name:"美团"},{id:201,name:"饿了么"}]},p=a=>(De("data-v-8f7d051a"),a=a(),Fe(),a),wt={class:"container pt-13 px-4"},yt={class:"fixed top-0 left-0 w-full px-4 py-2 bg-c_grey_l z-10 max-w-187.5 transition-transform left-1/2 -translate-x-1/2"},Ct=p(()=>e("div",{class:"w-8 h-8 flex justify-center items-center"},[e("img",{class:"image-render-auto w-6",src:xt,alt:""})],-1)),kt=p(()=>e("p",{class:"text-gray-400/500 text-[14px]"},"请搜索商家名称",-1)),Rt=[Ct,kt],Bt=["alt"],Ut={class:"absolute transition-transform bottom-2 right-2 text-xs bg-dark-50/30 px-1 text-white"},It={class:"w-full whitespace-nowrap overflow-x-auto py-1",scrollbar:"~ h-1 rounded"},jt=["src","alt"],Vt={class:"text-xs text-[#222222] pt-1.5 font-bold"},Et={key:0,class:"absolute right-0 top-0 w-6",src:At},Lt={class:"mt-3 px-3 py-4 new_invite_container rounded-md relative"},Qt={class:"gap-x-2 flex items-center mb-3"},St=p(()=>e("img",{class:"w-14",src:_t,alt:"新人好礼"},null,-1)),Dt=p(()=>e("i",{style:{"font-size":"16px"},class:"iconfont icon-tishi_o ml-[2px]"},null,-1)),Ft={class:"flex items-center gap-x-2"},Ot=Z('<img class="w-12 h-12 object-center object-cover image-render-pixel rounded-md" src="'+bt+'" alt="" data-v-8f7d051a><div class="text-xs" data-v-8f7d051a><p data-v-8f7d051a> 团员完成 <span class="text-c_theme/80 font-bold" data-v-8f7d051a>3</span> 单 </p><p data-v-8f7d051a> 额外得 <span class="text-c_theme/80 font-bold" data-v-8f7d051a>23元</span></p><p class="font-bold" data-v-8f7d051a>提现秒到账</p></div>',2),Jt=[Ot],Ht=Z('<div class="w-1/2 p-2 bg-white rounded-md flex items-start gap-x-2" data-v-8f7d051a><img class="w-12 h-12 object-center object-cover image-render-pixel rounded-md" src="'+gt+'" alt="" data-v-8f7d051a><div class="text-xs text-c_theme/80 font-bold flex-1 flex flex-col justify-between items-start" data-v-8f7d051a><p class="mb-2" data-v-8f7d051a>航哥官方群</p><button class="border-transparent px-1" data-v-8f7d051a>立即加入</button></div></div>',1),Pt={class:"flex items-center mt-3"},Tt=p(()=>e("p",{class:"mr-1"},[e("i",{style:{"font-size":"16px"},class:"iconfont icon-location"})],-1)),zt=p(()=>e("div",{class:"text-xs font-bold flex items-center"},[g(" 当前定位： "),e("p",{class:"bg-c_theme/80 text-white px-2 rounded-sm"},r("无"))],-1)),Yt={class:"flex flex-1 justify-end items-center text-[#999] font-500"},qt={class:"nav-container"},Mt={class:"flex items-center h-12 text-base text-[#666666] gap-x-2 bg-c_grey_l"},Zt=["onClick"],Wt={key:0,class:"filter-container text-[#666] bg-c_grey_l pb-3"},Nt={class:"flex items-center gap-x-3"},Gt={class:"flex justify-center items-center px-1.5 text-c_theme/80 text-xs font-bold rounded-md h-7 bg-[#fff7ee]",border:"~ solid text-c_theme/80"},Kt=p(()=>e("img",{class:"w-3 h-3",src:ne,alt:""},null,-1)),Xt={class:"flex items-center gap-x-3"},$t=["onClick"],es=p(()=>e("img",{class:"w-4 h-4 image-render-pixel",src:ht,alt:""},null,-1)),ts={class:"p-4 pt-0"},ss={class:"flex items-center gap-x-3 my-3 text-[#6A6A6A]"},ns={class:"flex items-center gap-x-3"},os=["onClick"],is={class:"mt-3"},as=p(()=>e("h4",{class:"text-base font-bold text-[#000216] leading-5.5 mb-2.5"},"排序方式",-1)),ds={class:"flex items-center gap-x-3 text-[#6a6a6a] text-[14px]"},cs=["onClick"],ls={class:"mt-3"},rs=p(()=>e("h4",{class:"text-base font-bold text-[#000216] leading-5.5 mb-2.5"},"平台",-1)),ms={class:"flex items-center gap-x-3 text-[#6a6a6a] text-[14px]"},fs=["onClick"],us={class:"mt-3"},ps=p(()=>e("h4",{class:"text-base font-bold text-[#000216] leading-5.5 mb-2.5"},"用餐时段",-1)),xs={class:"flex items-center flex-wrap gap-x-3 gap-y-3 text-[#6a6a6a] text-[14px]"},As=["onClick"],_s={class:"flex items-center my-3 mt-5 gap-x-3"},bs=k({name:"Home"}),gs=k({...bs,setup(a){const c=Le(),{banners:m,menus:x,navs:A,recommends:v,filterLists:h,meals:V,platform:E}=vt,B=f(E),R=f();function L(i){R.value=i.id}const C=f();function Q(i){C.value=i.id}function W(){C.value=-1,R.value=-1,O.value=-1,J.value=-1,U.value=v[0].id}async function oe(){$(!1)}const S=x[0].id,{latitude:ie,longitude:ae,error:de,desc:ce}=We();console.log("object :>> ",ie,ae,de,ce);const D=f(!1),le=f(!1),F=f(A[0].id),U=f(v[0].id),N=te(()=>{const i=v.filter(d=>d.id===U.value);return i&&Array.isArray(i)?i[0].name:v[0].name}),re=i=>{U.value=i.id},{loading:G,setLoading:hs,toggle:me}=ee({initValue:!1}),fe=()=>{me()},K=f(h),O=f(),ue=i=>{O.value=i.id},J=f(),pe=i=>{J.value=i.id},X=f(new Array(10).fill({id:1,name:"黄焖鸡米饭"}).map((i,d)=>i.id+d));console.log("products :>> ",X);const xe=i=>{F.value=i.id},{loading:H,setLoading:$}=ee({initValue:!1}),Ae=()=>{$(!0)},_e=i=>{c.push({path:"/detail",query:{item:JSON.stringify(i)}})},P=(i,d={})=>{c.push({path:i,query:d})};return(i,d)=>{const be=Ye,ge=He,he=qe,ve=Pe,we=Xe,ye=Te,Ce=pt,ke=Je,Re=Oe,T=Qe("feed-touch");return s(),n("div",wt,[e("div",yt,[e("div",{onClick:d[0]||(d[0]=t=>P("/search")),class:"flex items-center rounded-full px-3 pl-2",border:"1px solid c_b"},Rt)]),u(ge,{class:"h-30",sm:"h-50","indicator-color":"white"},{indicator:w(({active:t,total:l})=>[e("div",Ut,r(t+1)+"/"+r(l),1)]),default:w(()=>[(s(!0),n(_,null,b(o(m),t=>(s(),M(be,{key:t.id,class:"bg-c_grey"},{default:w(()=>[e("img",{class:"w-full h-full image-render-pixel rounded-md",src:ze,alt:t.name},null,8,Bt)]),_:2},1024))),128))]),_:1}),u(ve,{active:o(S),"onUpdate:active":d[1]||(d[1]=t=>Y(S)?S.value=t:null),color:"#f02d2d",animated:"",class:"bg-transparent"},{default:w(()=>[(s(!0),n(_,null,b(o(x),t=>(s(),M(he,{key:t.id,title:t.name},{default:w(()=>[e("div",It,[(s(!0),n(_,null,b(t.content,l=>(s(),n("div",{class:"w-1/5 inline-flex flex-col justify-center items-center relative",key:l.id},[e("img",{class:"w-10 h-10 image-render-pixel rounded-md",src:o(Ze)(`${l.icon}`,"jpg"),alt:l.name},null,8,jt),e("span",Vt,r(l.name),1),l.isHot?(s(),n("img",Et)):j("",!0)]))),128))])]),_:2},1032,["title"]))),128))]),_:1},8,["active"]),e("div",Lt,[e("div",Qt,[St,e("p",{class:"flex items-center text-white px-1 rounded-full cursor-pointer",border:"~ solid light-200",onClick:d[2]||(d[2]=t=>P("/use"))},[g(" 如何使用 "),Dt])]),e("div",Ft,[e("div",{class:"w-1/2 p-2 bg-white rounded-md flex items-center gap-x-2",onClick:d[3]||(d[3]=t=>P("/invite"))},Jt),Ht])]),e("div",Pt,[Tt,zt,e("div",Yt,[g(" 只看可抢 "),u(we,{class:"ml-2",size:"18px","active-color":"#f02d2d",modelValue:o(D),"onUpdate:modelValue":d[4]||(d[4]=t=>Y(D)?D.value=t:null),loading:o(le)},null,8,["modelValue","loading"])])]),e("div",qt,[u(ye,{"offset-top":49},{default:w(()=>[e("div",Mt,[(s(!0),n(_,null,b(o(A),t=>(s(),n("div",{onClick:l=>xe(t),class:y({"font-bold text-[#333333]":t.id===o(F)}),key:t.id},r(t.name),11,Zt))),128))]),o(F)==60?(s(),n("div",Wt,[e("div",Nt,[e("div",Gt,[g(r(o(N))+" ",1),Kt]),e("div",Xt,[(s(!0),n(_,null,b(o(K),t=>(s(),n("div",{class:y(["flex justify-center items-center px-1.5 text-xs rounded-md h-7 bg-white border border-solid border-transparent",{"text-c_theme/80 !bg-[#fff7ee] font-bold border border-solid !border-c_theme/80":t.id===o(O)}]),key:t.id,onClick:l=>ue(t)},r(t.name),11,$t))),128))]),e("div",{class:"flex justify-center items-center px-1.5 text-xs rounded-md h-7 bg-white",onClick:Ae},[g(" 筛选 "),es])])])):j("",!0)]),_:1}),u(Ce,{list:o(X),onHandleItem:_e},null,8,["list"])]),u(Re,{show:o(H),"onUpdate:show":d[5]||(d[5]=t=>Y(H)?H.value=t:null),position:"bottom",round:""},{default:w(()=>[e("div",ts,[u(ke,{"show-left":!1,"is-fixed":!1,title:"筛选条件",border:!1},{right_slot:w(()=>[I((s(),n("div",{onClick:W},[g(" 重置 ")])),[[T]])]),_:1}),e("div",ss,[e("div",{class:"flex justify-center items-center text-c_theme/80 text-[14px] font-bold rounded-md px-3 py-1.5 bg-[#fff7ee]",border:"~ solid text-c_theme/80",onClick:fe},[g(r(o(N))+" ",1),e("img",{class:y(["w-3 h-3 ml-1 origin-center",{"transition-transform rotate-180":o(G)}]),transition:"all duration-50 ease-linear",src:ne,alt:""},null,2)]),e("div",ns,[(s(!0),n(_,null,b(o(K),t=>(s(),n("div",{class:y(["flex justify-center items-center px-3 py-1.5 text-[14px] rounded-md bg-[#f7f7f7] border border-solid border-transparent",{"text-c_theme/80 !bg-[#fff7ee] font-bold border border-solid !border-c_theme/80":t.id===o(J)}]),key:t.id,onClick:l=>pe(t)},r(t.name),11,os))),128))])]),I(e("div",is,[as,e("div",ds,[(s(!0),n(_,null,b(o(v),t=>(s(),n("div",{class:y(["flex justify-center items-center px-3 py-1.5 text-[14px] rounded-md bg-[#f7f7f7] border border-solid border-transparent",{"text-c_theme/80 bg-[#fff7ee] font-bold border border-solid !border-c_theme/80":t.id===o(U)}]),onClick:l=>re(t),key:t.id},r(t.name),11,cs))),128))])],512),[[Se,o(G)]]),e("div",ls,[rs,e("div",ms,[(s(!0),n(_,null,b(o(B),t=>(s(),n("div",{class:y(["flex justify-center items-center px-3 py-1.5 text-[14px] rounded-md bg-[#f7f7f7] border border-solid border-transparent",{"text-c_theme/80 bg-[#fff7ee] font-bold border border-solid !border-c_theme/80":t.id===o(R)}]),onClick:l=>L(t),key:t.id},r(t.name),11,fs))),128))])]),e("div",us,[ps,e("div",xs,[(s(!0),n(_,null,b(o(V),t=>(s(),n("div",{class:y(["flex justify-center items-center px-3 py-1.5 text-[14px] rounded-md bg-[#f7f7f7] border border-solid border-transparent",{"text-c_theme/80 bg-[#fff7ee] font-bold border border-solid !border-c_theme/80":t.id===o(C)}]),onClick:l=>Q(t),key:t.id},r(t.name),11,As))),128))])]),e("div",_s,[I((s(),n("button",{class:"flex-1 border-none text-[14px] py-3 rounded-md",onClick:W},[g(" 清空 ")])),[[T]]),I((s(),n("button",{onClick:oe,class:"flex-1 border-none text-[14px] py-3 rounded-md text-white bg-c_theme/80"},[g(" 确定 ")])),[[T]])])])]),_:1},8,["show"])])}}});const Es=se(gs,[["__scopeId","data-v-8f7d051a"]]);export{Es as default};
