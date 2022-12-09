import{u as te,f as L,g as M,h as le,i as ne,j as oe,k as Y,S as ae,t as se,l as re,m as ie,n as ue,p as n,R as O,q as S,s as ce,v as de,x as ve}from"./app.64e3262c.js";function he(t){if(Array.isArray(t)){for(var e=0,l=Array(t.length);e<t.length;e++)l[e]=t[e];return l}else return Array.from(t)}var A=!1;if(typeof window<"u"){var q={get passive(){A=!0}};window.addEventListener("testPassive",null,q),window.removeEventListener("testPassive",null,q)}var J=typeof window<"u"&&window.navigator&&window.navigator.platform&&(/iP(ad|hone|od)/.test(window.navigator.platform)||window.navigator.platform==="MacIntel"&&window.navigator.maxTouchPoints>1),w=[],R=!1,T=-1,H=void 0,b=void 0,$=function(e){return w.some(function(l){return!!(l.options.allowTouchMove&&l.options.allowTouchMove(e))})},V=function(e){var l=e||window.event;return $(l.target)||l.touches.length>1?!0:(l.preventDefault&&l.preventDefault(),!1)},pe=function(e){if(b===void 0){var l=!!e&&e.reserveScrollBarGap===!0,o=window.innerWidth-document.documentElement.clientWidth;l&&o>0&&(b=document.body.style.paddingRight,document.body.style.paddingRight=o+"px")}H===void 0&&(H=document.body.style.overflow,document.body.style.overflow="hidden")},fe=function(){b!==void 0&&(document.body.style.paddingRight=b,b=void 0),H!==void 0&&(document.body.style.overflow=H,H=void 0)},ye=function(e){return e?e.scrollHeight-e.scrollTop<=e.clientHeight:!1},me=function(e,l){var o=e.targetTouches[0].clientY-T;return $(e.target)?!1:l&&l.scrollTop===0&&o>0||ye(l)&&o<0?V(e):(e.stopPropagation(),!0)},ge=function(e,l){if(!e){console.error("disableBodyScroll unsuccessful - targetElement must be provided when calling disableBodyScroll on IOS devices.");return}if(!w.some(function(a){return a.targetElement===e})){var o={targetElement:e,options:l||{}};w=[].concat(he(w),[o]),J?(e.ontouchstart=function(a){a.targetTouches.length===1&&(T=a.targetTouches[0].clientY)},e.ontouchmove=function(a){a.targetTouches.length===1&&me(a,e)},R||(document.addEventListener("touchmove",V,A?{passive:!1}:void 0),R=!0)):pe(l)}},we=function(){J?(w.forEach(function(e){e.targetElement.ontouchstart=null,e.targetElement.ontouchmove=null}),R&&(document.removeEventListener("touchmove",V,A?{passive:!1}:void 0),R=!1),T=-1):fe(),w=[]};const Le="eJyVlM1u00AUhV/FmnUnxk69yZZuEBJdeIkQMo5FrNqeyB6EUBUptKINKiUqBIGqCJIFKBKRWxZAmqTKy3hmwopXYBo7qf/yw8KW7Lnn3M/Hc2cfiKAU3bCJLQOUwNTvMv8jbQ/Z9RkbtVm/NfUvwRbQkYMNB3ug9HAfVAytbLi8mi941rOnWR35MmTdelL3qLaVK40UzYNp/ZD2uuTzSVrHlUB0DPwcuXvwieaZ+irmJb2BqFWrlqlr2EQOtLQXhgurLsJIR5ZYdrybC3rlQgXbVtx954EK1R2BnDanvv//rimrXJ9YLLQzIJNDcvSK+Fe3EaXeZsNZA2HzW+bD7A1wpIIQjOrBVYN+uhCSggjtsQQXFfCmD1ySVMxV5q6DYSgLries1Zt5x0xlmCqYWa/yLBYE+qtBX17QzpiMmzGvIkwtrNtbekWrYsO9IyV+Huv3BUlg3zt/x+d/6ufBpBsM3oY7bkV8XDErCRV8a9J2n347IJOfiQgluKJsU145wytHvNEw/xjx4VpQ05P39PXZUnZ5wR7qEn9nzrtY2pSxmGEsJhjJ76+sd8sYPpJBI2fw8htsZxpsRw3IsMU3Enn3hn64pKd5o5zvqGQclSRy7OTi4LRzTI6P1syVwsPdVe8JqVNvHrDCA0aeCdceighX+KzryLb54M9H3hM9pO95SW519+59VVlyjNVq/wDFe69L";const P=()=>n(S,{name:"close"},()=>n("path",{d:"m925.468 822.294-303.27-310.288L925.51 201.674c34.683-27.842 38.3-75.802 8.122-107.217-30.135-31.37-82.733-34.259-117.408-6.463L512.001 399.257 207.777 87.993C173.1 60.197 120.504 63.087 90.369 94.456c-30.179 31.415-26.561 79.376 8.122 107.217L401.8 512.005l-303.27 310.29c-34.724 27.82-38.34 75.846-8.117 107.194 30.135 31.437 82.729 34.327 117.408 6.486L512 624.756l304.177 311.22c34.68 27.84 87.272 24.95 117.408-6.487 30.223-31.348 26.56-79.375-8.118-107.195z"}));P.displayName="CloseIcon";const j=()=>n(S,{name:"heading"},()=>n("path",{d:"M250.4 704.6H64V595.4h202.4l26.2-166.6H94V319.6h214.4L352 64h127.8l-43.6 255.4h211.2L691 64h126.2l-43.6 255.4H960v109.2H756.2l-24.6 166.6H930v109.2H717L672 960H545.8l43.6-255.4H376.6L333 960H206.8l43.6-255.4zm168.4-276L394 595.4h211.2l24.6-166.6h-211z"}));j.displayName="HeadingIcon";const K=()=>n(S,{name:"heart"},()=>n("path",{d:"M1024 358.156C1024 195.698 892.3 64 729.844 64c-86.362 0-164.03 37.218-217.844 96.49C458.186 101.218 380.518 64 294.156 64 131.698 64 0 195.698 0 358.156 0 444.518 37.218 522.186 96.49 576H96l320 320c32 32 64 64 96 64s64-32 96-64l320-320h-.49c59.272-53.814 96.49-131.482 96.49-217.844zM841.468 481.232 517.49 805.49a2981.962 2981.962 0 0 1-5.49 5.48c-1.96-1.95-3.814-3.802-5.49-5.48L182.532 481.234C147.366 449.306 128 405.596 128 358.156 128 266.538 202.538 192 294.156 192c47.44 0 91.15 19.366 123.076 54.532L512 350.912l94.768-104.378C638.696 211.366 682.404 192 729.844 192 821.462 192 896 266.538 896 358.156c0 47.44-19.368 91.15-54.532 123.076z"}));K.displayName="HeartIcon";const Z=()=>n(S,{name:"history"},()=>n("path",{d:"M512 1024a512 512 0 1 1 512-512 512 512 0 0 1-512 512zm0-896a384 384 0 1 0 384 384 384 384 0 0 0-384-384zm192 448H512a64 64 0 0 1-64-64V320a64 64 0 0 1 128 0v128h128a64 64 0 0 1 0 128z"}));Z.displayName="HistoryIcon";const F=()=>n(S,{name:"title"},()=>n("path",{d:"M512 256c70.656 0 134.656 28.672 180.992 75.008A254.933 254.933 0 0 1 768 512c0 83.968-41.024 157.888-103.488 204.48C688.96 748.736 704 788.48 704 832c0 105.984-86.016 192-192 192-106.048 0-192-86.016-192-192h128a64 64 0 1 0 128 0 64 64 0 0 0-64-64 255.19 255.19 0 0 1-181.056-75.008A255.403 255.403 0 0 1 256 512c0-83.968 41.024-157.824 103.488-204.544C335.04 275.264 320 235.584 320 192A192 192 0 0 1 512 0c105.984 0 192 85.952 192 192H576a64.021 64.021 0 0 0-128 0c0 35.328 28.672 64 64 64zM384 512c0 70.656 57.344 128 128 128s128-57.344 128-128-57.344-128-128-128-128 57.344-128 128z"}));F.displayName="TitleIcon";const He={},be=300,Q=5,Se={"/":{cancel:"取消",placeholder:"搜索",search:"搜索",select:"选择",navigate:"切换",exit:"关闭",history:"搜索历史",emptyHistory:"无搜索历史",emptyResult:"没有找到结果",loading:"正在加载搜索索引..."}},Be="search-pro-history-results",m=te(Be,[]),Ce=()=>({history:m,addHistory:t=>{m.value.length<Q?m.value=[t,...m.value]:m.value=[t,...m.value.slice(0,Q-1)]},removeHistory:t=>{m.value=[...m.value.slice(0,t),...m.value.slice(t+1)]}}),Me=L(Le),Re=M(()=>JSON.parse(ce(Me.value))),C=(t,e)=>{const l=t.toLowerCase(),o=e.toLowerCase(),a=[];let r=0,v=0;const h=(s,p=!1)=>{let i="";v===0?i=s.length>20?`… ${s.slice(-20)}`:s:p?i=s.length+v>100?`${s.slice(0,100-v)}… `:s:i=s.length>20?`${s.slice(0,20)} … ${s.slice(-20)}`:s,i&&a.push(i),v+=i.length,p||(a.push(["strong",e]),v+=e.length,v>=100&&a.push(" …"))};let f=l.indexOf(o,r);if(f===-1)return null;for(;f>=0;){const s=f+o.length;if(h(t.slice(r,f)),r=s,v>100)break;f=l.indexOf(o,r)}return v<100&&h(t.slice(r),!0),a},U=t=>t.reduce((e,{type:l})=>e+(l==="title"?50:l==="heading"?20:l==="custom"?10:1),0),Ve=(t,e)=>{var l;const o={};for(const[a,r]of Object.entries(e)){const v=((l=e[a.replace(/\/[^\\]*$/,"")])==null?void 0:l.title)||"",h=`${v?`${v} > `:""}${r.title}`,f=C(r.title,t);f&&(o[h]=[...o[h]||[],{type:"title",path:a,display:f}]),r.customFields&&Object.entries(r.customFields).forEach(([s,p])=>{p.forEach(i=>{const u=C(i,t);u&&(o[h]=[...o[h]||[],{type:"custom",path:a,index:s,display:u}])})});for(const s of r.contents){const p=C(s.header,t);p&&(o[h]=[...o[h]||[],{type:"heading",path:a+(s.slug?`#${s.slug}`:""),display:p}]);for(const i of s.contents){const u=C(i,t);u&&(o[h]=[...o[h]||[],{type:"content",header:s.header,path:a+(s.slug?`#${s.slug}`:""),display:u}])}}}return Object.keys(o).sort((a,r)=>U(o[a])-U(o[r])).map(a=>({title:a,contents:o[a]}))},Ie=t=>{const e=Y(),l=L([]),o=M(()=>Re.value[e.value]),a=ve(r=>{l.value=r?Ve(r,o.value):[]},be);return de([t,e],()=>{a(t.value)}),l};var ze=le({name:"SearchResult",props:{query:{type:String,required:!0}},emits:{close:()=>!0,updateQuery:t=>!0},setup(t,{emit:e}){const l=ne(),o=oe(),a=Y(),r=ae(Se),{history:v,addHistory:h,removeHistory:f}=Ce(),s=se(t,"query"),p=Ie(s),i=L(0),u=L(0),x=L(),I=M(()=>p.value.length>0),k=M(()=>p.value[i.value]||null),X=()=>{i.value=i.value>0?i.value-1:p.value.length-1,u.value=k.value.contents.length-1},W=()=>{i.value=i.value<p.value.length-1?i.value+1:0,u.value=0},G=()=>{u.value<k.value.contents.length-1?u.value=u.value+1:W()},_=()=>{u.value>0?u.value=u.value-1:X()},D=c=>c.map(d=>typeof d=="string"?d:n(d[0],d[1])),E=c=>{if(c.type==="custom"){const d=He[c.index]||"$content",[g,B=""]=typeof d=="object"?d[a.value].split("$content"):d.split("$content");return D([g,...c.display,B])}return D(c.display)},z=()=>{i.value=0,u.value=0,e("updateQuery",""),e("close")};return re(()=>{ie("keydown",c=>{if(I.value){if(c.key==="ArrowUp")_();else if(c.key==="ArrowDown")G();else if(c.key==="Enter"){const d=k.value.contents[u.value];o.path!==d.path&&(h(d),l.push(d.path),z())}}}),ge(x.value,{reserveScrollBarGap:!0})}),ue(()=>{we()}),()=>n("div",{class:["search-pro-result",{empty:s.value===""?v.value.length===0:!I.value}],ref:x},s.value===""?v.value.length?n("ul",{class:"search-pro-result-list"},n("li",{class:"search-pro-result-list-item"},[n("div",{class:"search-pro-result-title"},r.value.history),v.value.map((c,d)=>n(O,{to:c.path,class:["search-pro-result-item",{active:u.value===d}],onClick:()=>{console.log("click"),z()}},()=>[n(Z,{class:"search-pro-result-type"}),n("div",{class:"search-pro-result-content"},[c.type==="content"&&c.header?n("div",{class:"content-header"},c.header):null,n("div",E(c))]),n("button",{class:"search-pro-close-icon",onClick:g=>{g.preventDefault(),g.stopPropagation(),f(d)}},n(P))]))])):r.value.emptyHistory:I.value?n("ul",{class:"search-pro-result-list"},p.value.map(({title:c,contents:d},g)=>{const B=i.value===g;return n("li",{class:["search-pro-result-list-item",{active:B}]},[n("div",{class:"search-pro-result-title"},c||"Documentation"),d.map((y,ee)=>{const N=B&&u.value===ee;return n(O,{to:y.path,class:["search-pro-result-item",{active:N,"aria-selected":N}],onClick:()=>{h(y),z()}},()=>[y.type==="content"?null:n(y.type==="title"?F:y.type==="heading"?j:K,{class:"search-pro-result-type"}),n("div",{class:"search-pro-result-content"},[y.type==="content"&&y.header?n("div",{class:"content-header"},y.header):null,n("div",E(y))])])})])})):r.value.emptyResult)}});export{ze as default};