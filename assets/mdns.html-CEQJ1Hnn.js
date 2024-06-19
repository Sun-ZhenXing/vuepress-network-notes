import{_ as i}from"./plugin-vue_export-helper-DlAUqK2U.js";import{r as a,o as c,c as d,b as t,d as e,a as o,w as l,e as s}from"./app-C-Jp-DEG.js";const p={},h=s('<h1 id="mdns-协议" tabindex="-1"><a class="header-anchor" href="#mdns-协议"><span>mDNS 协议</span></a></h1><h2 id="1-什么是-mdns-协议" tabindex="-1"><a class="header-anchor" href="#1-什么是-mdns-协议"><span>1. 什么是 mDNS 协议</span></a></h2><p>在计算机网络中，<strong>组播 DNS</strong>（multicast DNS，mDNS）协议在没有 DNS 服务器的小型网络中，将主机名解析为 IP 地址。它是一种零配置服务，使用与单播域名服务（DNS）基本相同的编程接口、数据包格式和操作语义。它被设计为作为一个独立的协议或与标准的 DNS 服务器兼容。<sup class="footnote-ref"><a href="#footnote1">[1]</a><a class="footnote-anchor" id="footnote-ref1"></a></sup></p>',3),m={href:"https://en.wikipedia.org/wiki/DNS_Service_Discovery",target:"_blank",rel:"noopener noreferrer"},D=t("sup",{class:"footnote-ref"},[t("a",{href:"#footnote2"},"[2]"),t("a",{class:"footnote-anchor",id:"footnote-ref2"})],-1),S=t("p",null,"每个进入局域网的主机，如果开启了 mDNS 服务的话，都会向局域网内的所有主机组播消息，自身的名称信息和 IP 地址。然后其他也有该服务的主机就会响应，也会发送自身名称信息和 IP 地址。",-1),N={class:"hint-container info"},f=t("p",{class:"hint-container-title"},"mDNS 与 DNS-SD",-1),_=t("p",null,"mDNS 协议规定了消息的基本格式和消息的收发的基本顺序，DNS-SD 协议在这基础上，首先对实例名，服务名称，域名长度或顺序等作出了具体的定义，然后规定了如何方便地进行服务发现和描述。",-1),u=s('<h2 id="2-为什么使用-mdns" tabindex="-1"><a class="header-anchor" href="#2-为什么使用-mdns"><span>2. 为什么使用 mDNS</span></a></h2><p>在局域网中，设备和设备之前相互通信需要知道对方的 IP 地址的。大多数情况，设备的 IP 不是静态 IP 地址，而是通过 DHCP 协议动态分配的 IP 地址，要进行通信，就必须知道对方的 IP 地址。</p><p>当我们不知道 IP 地址时，就无法直接和局域网的目标通信，mDNS 的作用就是解决这个问题。mDNS 可以像 DNS 一样通过名称得到目标主机的 IP 地址，但是这个名称必须是 <code>.local</code> 结尾的名称。</p><h2 id="3-消息格式" tabindex="-1"><a class="header-anchor" href="#3-消息格式"><span>3. 消息格式</span></a></h2><p>mDNS 遵循了 DNS 协议规范，使用现有的 DNS 信息结构、名语法和资源记录类型。并且没有指定新的操作代码或响应代码。</p><p>mDNS 消息是一个组播 UDP 数据包，使用以下地址发送：</p><ul><li>IPv4：<code>224.0.0.251</code></li><li>IPv6：<code>FF02::FB</code></li><li>UDP 端口：<code>5353</code></li><li>当使用以太网帧时，标准的 IP 组播 MAC 地址 <code>01:00:5E:00:00:FB</code>（IPv4）或 <code>33:33:00:00:00:FB</code>（IPv6）。</li></ul><p>有效载荷结构基于单播 DNS 数据包格式，由两部分组成——头和数据。</p><p>报头与单播 DNS 中的报头相同，数据部分的子部分也相同：查询、回答、授权 DNS 服务器和附加记录。每个子部分的记录数与头中相应的 <code>*COUNT</code> 字段的值一致。</p><h3 id="31-记录格式" tabindex="-1"><a class="header-anchor" href="#31-记录格式"><span>3.1 记录格式</span></a></h3><table><thead><tr><th>记录类别</th><th>作用</th></tr></thead><tbody><tr><td>A 记录</td><td>主机名称和 IPV4 之间的对应关系</td></tr><tr><td>AAAA 记录</td><td>主机名称和 IPV6 之间的对应关系</td></tr><tr><td>SRV 记录</td><td>标识服务实例名称对应哪一个主机名和端口号</td></tr><tr><td>PTR 记录</td><td>标识服务实例名称和服务类型之间的对应关系</td></tr><tr><td>TXT 记录</td><td>对某个服务实例提供的附加信息，按照 K/V 形式给出</td></tr><tr><td>ANY 记录</td><td>任意类型，一般用于查询中</td></tr></tbody></table><hr class="footnotes-sep">',12),g={class:"footnotes"},P={class:"footnotes-list"},k={id:"footnote1",class:"footnote-item"},I={href:"https://datatracker.ietf.org/doc/html/rfc6762",target:"_blank",rel:"noopener noreferrer"},y=t("a",{href:"#footnote-ref1",class:"footnote-backref"},"↩︎",-1),x={id:"footnote2",class:"footnote-item"},b={href:"https://en.wikipedia.org/wiki/Multicast_DNS",target:"_blank",rel:"noopener noreferrer"},v=t("a",{href:"#footnote-ref2",class:"footnote-backref"},"↩︎",-1);function w(A,T){const n=a("ExternalLinkIcon"),r=a("RouteLink");return c(),d("div",null,[h,t("p",null,[e("它使用 IP 组播 UDP 数据包，并由苹果 Bonjour 和开源 Avahi 软件包实现，包括在大多数 Linux 发行版中。mDNS 可以与 "),t("a",m,[e("DNS-SD"),o(n)]),e(" 一起工作。"),D]),S,t("div",N,[f,_,t("p",null,[e("详情阅读 "),o(r,{to:"/application-layer-protocol/dns/dns-sd.html"},{default:l(()=>[e("DNS-SD 协议")]),_:1}),e("。")])]),u,t("section",g,[t("ol",P,[t("li",k,[t("p",null,[t("a",I,[e("https://datatracker.ietf.org/doc/html/rfc6762"),o(n)]),e(),y])]),t("li",x,[t("p",null,[t("a",b,[e("https://en.wikipedia.org/wiki/Multicast_DNS"),o(n)]),e(),v])])])])])}const C=i(p,[["render",w],["__file","mdns.html.vue"]]),F=JSON.parse('{"path":"/application-layer-protocol/dns/mdns.html","title":"mDNS 协议","lang":"zh-CN","frontmatter":{"description":"mDNS 协议 1. 什么是 mDNS 协议 在计算机网络中，组播 DNS（multicast DNS，mDNS）协议在没有 DNS 服务器的小型网络中，将主机名解析为 IP 地址。它是一种零配置服务，使用与单播域名服务（DNS）基本相同的编程接口、数据包格式和操作语义。它被设计为作为一个独立的协议或与标准的 DNS 服务器兼容。[1] 它使用 IP ...","head":[["meta",{"property":"og:url","content":"https://blog.alexsun.top/vuepress-network-notes/vuepress-network-notes/application-layer-protocol/dns/mdns.html"}],["meta",{"property":"og:site_name","content":"计算机网络"}],["meta",{"property":"og:title","content":"mDNS 协议"}],["meta",{"property":"og:description","content":"mDNS 协议 1. 什么是 mDNS 协议 在计算机网络中，组播 DNS（multicast DNS，mDNS）协议在没有 DNS 服务器的小型网络中，将主机名解析为 IP 地址。它是一种零配置服务，使用与单播域名服务（DNS）基本相同的编程接口、数据包格式和操作语义。它被设计为作为一个独立的协议或与标准的 DNS 服务器兼容。[1] 它使用 IP ..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-03-29T13:02:59.000Z"}],["meta",{"property":"article:author","content":"Alex Sun"}],["meta",{"property":"article:modified_time","content":"2024-03-29T13:02:59.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"mDNS 协议\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-03-29T13:02:59.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Alex Sun\\",\\"url\\":\\"https://blog.alexsun.top/\\"}]}"]]},"headers":[{"level":2,"title":"1. 什么是 mDNS 协议","slug":"1-什么是-mdns-协议","link":"#1-什么是-mdns-协议","children":[]},{"level":2,"title":"2. 为什么使用 mDNS","slug":"2-为什么使用-mdns","link":"#2-为什么使用-mdns","children":[]},{"level":2,"title":"3. 消息格式","slug":"3-消息格式","link":"#3-消息格式","children":[{"level":3,"title":"3.1 记录格式","slug":"31-记录格式","link":"#31-记录格式","children":[]}]}],"git":{"createdTime":1711717379000,"updatedTime":1711717379000,"contributors":[{"name":"Sun-ZhenXing","email":"1006925066@qq.com","commits":1}]},"readingTime":{"minutes":2.71,"words":814},"filePathRelative":"application-layer-protocol/dns/mdns.md","localizedDate":"2024年3月29日","autoDesc":true,"excerpt":"\\n<h2>1. 什么是 mDNS 协议</h2>\\n<p>在计算机网络中，<strong>组播 DNS</strong>（multicast DNS，mDNS）协议在没有 DNS 服务器的小型网络中，将主机名解析为 IP 地址。它是一种零配置服务，使用与单播域名服务（DNS）基本相同的编程接口、数据包格式和操作语义。它被设计为作为一个独立的协议或与标准的 DNS 服务器兼容。<sup class=\\"footnote-ref\\"><a href=\\"#footnote1\\">[1]</a><a class=\\"footnote-anchor\\" id=\\"footnote-ref1\\"></a></sup></p>"}');export{C as comp,F as data};
