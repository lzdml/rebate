import{t as e,a4 as c,aF as r}from"./index-0cfd6775.js";const d=()=>{const n=e(null),t=e(null),a=e(null),l=e(""),s=o=>{n.value=o.coords.latitude,t.value=o.coords.longitude,a.value=o.coords},u=o=>{console.log("error :>> ",o),o.value=o.message};return c(()=>{navigator.geolocation?navigator.geolocation.getCurrentPosition(s,u):l.value="浏览器不支持地理位置定位。"}),r(()=>{}),{latitude:n,longitude:t,error:l,desc:a}},g=d;export{g as u};