import{t as v,a3 as r,at as l}from"./index-ba2f5e6c.js";function h(n,...u){const e=v([]),a=()=>{const t=n.value;t&&(e.value=["active",...u],e.value.length<=1?t.classList.add("active"):e.value.forEach(o=>{t.classList.add(o)}))},s=()=>{const t=n.value;t&&(e.value.length<=1?t.classList.remove("active"):e.value.forEach(o=>{t.classList.contains(o)&&t.classList.remove(o)}))},c=()=>{const t=n.value;console.log("button :>> ",t),t&&(t.addEventListener("touchstart",a,{passive:!0}),t.addEventListener("touchend",s,{passive:!0}),t.addEventListener("touchcancel",s,{passive:!0}))},i=()=>{const t=n.value;t&&(t.removeEventListener("touchstart",a),t.removeEventListener("touchend",s),t.removeEventListener("touchcancel",s))};return r(()=>{console.log("object"),c()}),l(()=>{i()}),{unbindEvents:i,bindEvents:c,removeActiveClass:s,addActiveClass:a}}export{h as u};