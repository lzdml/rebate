var o=Object.defineProperty;var h=(d,e,s)=>e in d?o(d,e,{enumerable:!0,configurable:!0,writable:!0,value:s}):d[e]=s;var i=(d,e,s)=>(h(d,typeof e!="symbol"?e+"":e,s),s);class l{constructor(){i(this,"messageQueue");i(this,"position");i(this,"message");i(this,"types");i(this,"type");i(this,"duration");i(this,"body");i(this,"id");i(this,"zIndex");i(this,"max");this.messageQueue=[],this.position="top",this.message="",this.types=["success","warning","error","info"],this.type="",this.duration=3e3,this.body=document.getElementsByTagName("body")[0],this.id=0,this.zIndex=2e3,this.max=3}setType(e,s){this.types.includes(s)?e.classList.add(`ui-message-${s}`):e.classList.add("ui-message-info")}createTextDom(e,s){const t=document.createElement("p");t.classList.add("message-content"),t.innerHTML=s||this.message,e.appendChild(t)}updateMessageDom(e,s){for(let t=e;t<this.messageQueue.length;t++){const a=this.messageQueue[t].messageDom;a.style.zIndex=`${s+t}`,a.style.top=`${64*t+20}px`}}removeMessageDom(e,s,t){const a=this.messageQueue.findIndex(m=>m.id===s);this.messageQueue.splice(a,1),this.updateMessageDom(a,t),e.classList.add("ui-message-leave"),setTimeout(()=>{this.body.removeChild(e)},400)}setCurrentMessageDom(e){const s=this.messageQueue.length-1,t=this.messageQueue[s].messageDom;t.style.zIndex=`${e+s}`,t.style.top=`${64*s+20}px`}setOption(e){if(typeof e!="object"&&(e={}),this.messageQueue.length>=this.max)return;const s=document.createElement("div");s.classList.add("ui-message"),s.classList.add("ui-message-leave"),e.center&&s.classList.add("ui-message-center");const t=this.id,a=e.zIndex?e.zIndex:this.zIndex;this.messageQueue.push({id:t,messageDom:s}),this.setType(s,e.type),this.createTextDom(s,e.message),this.setCurrentMessageDom(a),this.body.appendChild(s),setTimeout(()=>{s.classList.remove("ui-message-leave")});let m=null;e.showClose&&(m=document.createElement("i"),m.classList.add("close-button"),s.appendChild(m));const u=isNaN(Number(e.duration))?this.duration:Number(e.duration);let n=-1;u!==0&&(n=setTimeout(()=>{this.removeMessageDom(s,t,a)},u)),e.showClose&&m.addEventListener("click",()=>{this.removeMessageDom(s,t,a),t!==-1&&clearTimeout(n)}),this.id++}}export{l as M};
