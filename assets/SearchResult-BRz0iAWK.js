import{u as B,f as Z,h as ee,i as M,j as se,k as te,t as ae,l as le,m as P,p as E,q as re,s as Y,v as t,x as ue,R as _,y as oe,z as ie,A as ne,B as I,C as U,D as ce,E as ve,F as pe,G as he,O as de,H as ye,I as me,P as ge,J as fe,K as ke,L as x}from"./app-BFMpnuEQ.js";const we=["/","/1.network-basic/","/application-layer-protocol/","/browser/","/other-common-protocols/","/reference-model/","/1.network-basic/chapter01/","/1.network-basic/chapter02/","/1.network-basic/chapter03/","/1.network-basic/chapter04/","/1.network-basic/chapter05/","/application-layer-protocol/dns/","/application-layer-protocol/dns/dns-sd.html","/application-layer-protocol/dns/mdns.html","/application-layer-protocol/http/","/browser/event-mechanism/","/browser/security/","/browser/security/cors.html","/other-common-protocols/socks5/","/404.html"],He="SEARCH_PRO_QUERY_HISTORY",d=B(He,[]),Re=()=>{const{queryHistoryCount:a}=x,l=a>0;return{enabled:l,queryHistory:d,addQueryHistory:r=>{l&&(d.value.length<a?d.value=Array.from(new Set([r,...d.value])):d.value=Array.from(new Set([r,...d.value.slice(0,a-1)])))},removeQueryHistory:r=>{d.value=[...d.value.slice(0,r),...d.value.slice(r+1)]}}},T=a=>we[a.id]+("anchor"in a?`#${a.anchor}`:""),Qe="SEARCH_PRO_RESULT_HISTORY",{resultHistoryCount:F}=x,y=B(Qe,[]),be=()=>{const a=F>0;return{enabled:a,resultHistory:y,addResultHistory:l=>{if(a){const r={link:T(l),display:l.display};"header"in l&&(r.header=l.header),y.value.length<F?y.value=[r,...y.value]:y.value=[r,...y.value.slice(0,F-1)]}},removeResultHistory:l=>{y.value=[...y.value.slice(0,l),...y.value.slice(l+1)]}}},xe=a=>{const l=ce(),r=M(),q=ve(),o=P(!1),f=pe([]);return he(()=>{const{search:H,terminate:m}=de(),R=()=>{f.value=[],o.value=!1},k=ke(c=>{const w=c.join(" "),{searchFilter:C=h=>h,splitWord:S,suggestionsFilter:$,...g}=l.value;o.value=!0,w?H(c.join(" "),r.value,g).then(h=>C(h,w,r.value,q.value)).then(h=>{f.value=h,o.value=!1}).catch(h=>{console.error(h),R()}):R()},x.searchDelay-x.suggestDelay);Y([a,r],([c])=>k(c),{immediate:!0}),ye(()=>{m()})}),{searching:o,results:f}};var Ce=Z({name:"SearchResult",props:{queries:{type:Array,required:!0},isFocusing:Boolean},emits:["close","updateQuery"],setup(a,{emit:l}){const r=ee(),q=M(),o=se(te),{enabled:f,addQueryHistory:H,queryHistory:m,removeQueryHistory:R}=Re(),{enabled:k,resultHistory:c,addResultHistory:w,removeResultHistory:C}=be(),S=f||k,$=ae(a,"queries"),{results:g,searching:h}=xe($),u=le({isQuery:!0,index:0}),v=P(0),p=P(0),j=E(()=>S&&(m.value.length>0||c.value.length>0)),D=E(()=>g.value.length>0),L=E(()=>g.value[v.value]||null),z=()=>{const{isQuery:e,index:s}=u;s===0?(u.isQuery=!e,u.index=e?c.value.length-1:m.value.length-1):u.index=s-1},G=()=>{const{isQuery:e,index:s}=u;s===(e?m.value.length-1:c.value.length-1)?(u.isQuery=!e,u.index=0):u.index=s+1},J=()=>{v.value=v.value>0?v.value-1:g.value.length-1,p.value=L.value.contents.length-1},K=()=>{v.value=v.value<g.value.length-1?v.value+1:0,p.value=0},V=()=>{p.value<L.value.contents.length-1?p.value+=1:K()},N=()=>{p.value>0?p.value-=1:J()},A=e=>e.map(s=>me(s)?s:t(s[0],s[1])),W=e=>{if(e.type==="customField"){const s=ge[e.index]||"$content",[i,b=""]=fe(s)?s[q.value].split("$content"):s.split("$content");return e.display.map(n=>t("div",A([i,...n,b])))}return e.display.map(s=>t("div",A(s)))},Q=()=>{v.value=0,p.value=0,l("updateQuery",""),l("close")};return re("keydown",e=>{if(a.isFocusing){if(D.value){if(e.key==="ArrowUp")N();else if(e.key==="ArrowDown")V();else if(e.key==="Enter"){const s=L.value.contents[p.value];H(a.queries.join(" ")),w(s),r.push(T(s)),Q()}}else if(k){if(e.key==="ArrowUp")z();else if(e.key==="ArrowDown")G();else if(e.key==="Enter"){const{index:s}=u;u.isQuery?(l("updateQuery",m.value[s]),e.preventDefault()):(r.push(c.value[s].link),Q())}}}}),Y([v,p],()=>{var e;(e=document.querySelector(".search-pro-result-list-item.active .search-pro-result-item.active"))==null||e.scrollIntoView(!1)},{flush:"post"}),()=>t("div",{class:["search-pro-result-wrapper",{empty:a.queries.length?!D.value:!j.value}],id:"search-pro-results"},a.queries.length?h.value?t(ue,{hint:o.value.searching}):D.value?t("ul",{class:"search-pro-result-list"},g.value.map(({title:e,contents:s},i)=>{const b=v.value===i;return t("li",{class:["search-pro-result-list-item",{active:b}]},[t("div",{class:"search-pro-result-title"},e||o.value.defaultTitle),s.map((n,X)=>{const O=b&&p.value===X;return t(_,{to:T(n),class:["search-pro-result-item",{active:O,"aria-selected":O}],onClick:()=>{H(a.queries.join(" ")),w(n),Q()}},()=>[n.type==="text"?null:t(n.type==="title"?oe:n.type==="heading"?ie:ne,{class:"search-pro-result-type"}),t("div",{class:"search-pro-result-content"},[n.type==="text"&&n.header?t("div",{class:"content-header"},n.header):null,t("div",W(n))])])})])})):o.value.emptyResult:S?j.value?[f?t("ul",{class:"search-pro-result-list"},t("li",{class:"search-pro-result-list-item"},[t("div",{class:"search-pro-result-title"},o.value.queryHistory),m.value.map((e,s)=>t("div",{class:["search-pro-result-item",{active:u.isQuery&&u.index===s}],onClick:()=>{l("updateQuery",e)}},[t(I,{class:"search-pro-result-type"}),t("div",{class:"search-pro-result-content"},e),t("button",{class:"search-pro-remove-icon",innerHTML:U,onClick:i=>{i.preventDefault(),i.stopPropagation(),R(s)}})]))])):null,k?t("ul",{class:"search-pro-result-list"},t("li",{class:"search-pro-result-list-item"},[t("div",{class:"search-pro-result-title"},o.value.resultHistory),c.value.map((e,s)=>t(_,{to:e.link,class:["search-pro-result-item",{active:!u.isQuery&&u.index===s}],onClick:()=>{Q()}},()=>[t(I,{class:"search-pro-result-type"}),t("div",{class:"search-pro-result-content"},[e.header?t("div",{class:"content-header"},e.header):null,t("div",e.display.map(i=>A(i)).flat())]),t("button",{class:"search-pro-remove-icon",innerHTML:U,onClick:i=>{i.preventDefault(),i.stopPropagation(),C(s)}})]))])):null]:o.value.emptyHistory:o.value.emptyResult)}});export{Ce as default};