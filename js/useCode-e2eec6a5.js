import{t as s,h as f,z as r}from"./index-0cfd6775.js";function v(){const t=s(!1),u=60,n=s(u);let e;const a=f(()=>r(t)?`${r(n)}s`:"获取验证码");function o(){e&&window.clearInterval(e)}function l(){t.value=!1,o(),e=null}async function c(){r(t)||e||(t.value=!0,e=setInterval(()=>{r(n)<=1?(l(),n.value=u):n.value-=1},1e3))}return{startDown:c,clear:o,getButtonText:a,isStart:t}}export{v as u};
