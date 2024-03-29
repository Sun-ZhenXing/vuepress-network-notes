import{_ as s}from"./plugin-vue_export-helper-DlAUqK2U.js";import{r as u,o as _,c,b as l,a as e,w as i,d as t,e as o}from"./app-BFMpnuEQ.js";const r={},a=l("h1",{id:"1-通信与网络",tabindex:"-1"},[l("a",{class:"header-anchor",href:"#1-通信与网络"},[l("span",null,"1. 通信与网络")])],-1),d=l("h2",{id:"11-网络通信基本概念",tabindex:"-1"},[l("a",{class:"header-anchor",href:"#11-网络通信基本概念"},[l("span",null,"1.1 网络通信基本概念")])],-1),p=l("strong",null,"通信",-1),h=l("strong",null,"网络通信",-1),g=l("p",null,"不同的网络结构：",-1),f=l("ul",null,[l("li",null,"两台计算机之间通过网线传递文件"),l("li",null,"多台计算机通过路由器连接"),l("li",null,"计算机通过 Internet 下载文件")],-1),A=l("div",{class:"hint-container info"},[l("p",{class:"hint-container-title"},"Internet"),l("p",null,"Internet（因特网），是目前世界上规模最大的计算机网络，其前身诞生于 1969 年的 ARPAnet（Advanced Research Projects Agency Network）。Internet 的广泛普及和应用是当今信息时代的标志性内容之一。")],-1),m=l("p",null,"计算机发送数据（报文）到网关路由器，网关路由器发送到 Internet 主干网，经过一系列服务器后返回给路由器，路由器返回数据给计算机。",-1),y=l("p",null,"相关术语：",-1),P=l("strong",null,"数据载荷",-1),I=l("strong",null,"报文",-1),N=l("strong",null,"头部",-1),T=l("strong",null,"尾部",-1),v=l("strong",null,"封装",-1),x=l("strong",null,"解封装",-1),C=l("strong",null,"网关",-1),k=l("strong",null,"路由器",-1),w=l("strong",null,"终端设备",-1),b=l("h2",{id:"12-数据通信网络基本概念",tabindex:"-1"},[l("a",{class:"header-anchor",href:"#12-数据通信网络基本概念"},[l("span",null,"1.2 数据通信网络基本概念")])],-1),F=l("strong",null,"数据通信网络",-1),R=l("p",null,"核心机房管理内容：",-1),E=l("ul",null,[l("li",null,"日志系统"),l("li",null,"控制器"),l("li",null,"网管平台"),l("li",null,"应用服务器")],-1),B=l("p",null,"数据通信网络最基本的功能就是实现数据互通。",-1),L=l("strong",null,"交换机",-1),S=l("p",null,"交换机的功能：",-1),V=l("ul",null,[l("li",null,"终端设备（PC、服务器等）的网络接入"),l("li",null,"二层交换（Layer 2 Switching）")],-1),W=l("strong",null,"广播域",-1),D=l("strong",null,"路由器",-1),j=o("<p>路由器的功能：</p><ul><li>实现同类型网络或异种网络之间的通信</li><li>隔离广播域</li><li>维护路由表（Routing Table）、运行路由协议</li><li>路由（路由信息）选择、IP 报文转发</li><li>广域网接入、网络地址转换</li><li>连接通过交换机组建的二层网络</li></ul><p>补充：</p><ul><li>路由器工作在 TCP/IP 参考模型的网络层</li><li>路由器可以实现：维护路由表和路由信息、路由发现及路径选择、数据转发、隔离广播域、广域网接入和网络地址转换及特定的安全功能</li></ul>",4),q=l("strong",null,"防火墙",-1),z=l("p",null,"防火墙是位于两个信任程度不同的网络之间（如企业内部网络和 Internet 之间）的设备，它对两个网络之间的通信进行控制，通过强制实施统一的安全策略，防止对重要信息资源的非法存取和访问，以达到保护系统安全的目的。",-1),J=l("p",null,"防火墙的功能：",-1),M=l("ul",null,[l("li",null,"隔离不同安全级别的网络"),l("li",null,"实现不同安全级别网络间的访问控制（安全策略）"),l("li",null,"用户身份认证"),l("li",null,"实现远程接入功能"),l("li",null,"实现数据加密及虚拟专用网络业务"),l("li",null,"执行网络地址转换"),l("li",null,"其他安全功能")],-1),O=l("strong",null,"无线设备",-1),X=o("<p>在 WLAN 中，常见的设备有 <strong>胖 AP</strong>（FAT AP）、<strong>瘦 AP</strong>（FIT AP） 和 <strong>无线控制器 AC</strong>：</p><ul><li>无线接入点（AP，Access Point） <ul><li>一般支持 FAT AP、FIT AP 和云管理工作模式，根据网络规划的需求，可以灵活地在各种模式下切换</li><li>FAT AP：适用于家庭，独立工作，需单独配置，功能较为单一，成本低</li><li>FIT AP：适用于大中型企业，需要配合 AC 使用，由 AC 统一管理和配置，功能丰富</li><li>云管理：适用于中小型企业，需要配合云管理平台使用，由云管理平台统一管理和配置，功能丰富，即插即用</li></ul></li><li>无线接入控制器（AC，Access Controller） <ul><li>一般位于整个网络的汇聚层，提供高速、安全、可靠的 WLAN 业务</li><li>提供大容量、高性能、高可靠性、易安装、易维护的无线数据控制业务，具有组网灵活、绿色节能等优势</li></ul></li></ul>",2);function Z(G,H){const n=u("Badge");return _(),c("div",null,[a,d,l("p",null,[e(n,{type:"tip"},{default:i(()=>[t("定义")]),_:1}),t(),p,t("：人与人、人与物、物与物之间通过某种媒介和行为进行的信息传递与交流。")]),l("p",null,[e(n,{type:"tip"},{default:i(()=>[t("定义")]),_:1}),t(),h,t("：终端设备之间通过计算机网络进行通信。")]),g,f,A,m,y,l("ul",null,[l("li",null,[e(n,{type:"tip"},{default:i(()=>[t("定义")]),_:1}),t(),P,t("：最终想要传递的信息")]),l("li",null,[e(n,{type:"tip"},{default:i(()=>[t("定义")]),_:1}),t(),I,t("：网络中交换与传输的数据单元")]),l("li",null,[e(n,{type:"tip"},{default:i(()=>[t("定义")]),_:1}),t(),N,t("：在数据载荷的前面添加的信息段")]),l("li",null,[e(n,{type:"tip"},{default:i(()=>[t("定义")]),_:1}),t(),T,t("：在数据载荷后面加的信息段")]),l("li",null,[e(n,{type:"tip"},{default:i(()=>[t("定义")]),_:1}),t(),v,t("：对数据载荷添加头部和尾部，形成新的报文的过程")]),l("li",null,[e(n,{type:"tip"},{default:i(()=>[t("定义")]),_:1}),t(),x,t("：去掉报文的头部和尾部，形成新的报文的过程")]),l("li",null,[e(n,{type:"tip"},{default:i(()=>[t("定义")]),_:1}),t(),C,t("：提供协议转换、路由选择、数据交换功能的设备网络")]),l("li",null,[e(n,{type:"tip"},{default:i(()=>[t("定义")]),_:1}),t(),k,t("：为报文选择传递路径网络设备")]),l("li",null,[e(n,{type:"tip"},{default:i(()=>[t("定义")]),_:1}),t(),w,t("：数据通信系统的终端设备，作为数据的发送者或者接收者")])]),b,l("p",null,[e(n,{type:"tip"},{default:i(()=>[t("定义")]),_:1}),t(),F,t(" （Data Communication Network）由路由器、交换机、防火墙、无线控制器、无线接入点，以及个人电脑、网络打印机、服务器等设备构成的通信网络。")]),R,E,B,l("p",null,[e(n,{type:"tip"},{default:i(()=>[t("定义")]),_:1}),t(),L,t("：距离终端用户最近的设备，用于终端用户接入网络、对数据帧进行交换等。")]),S,V,l("p",null,[e(n,{type:"tip"},{default:i(()=>[t("定义")]),_:1}),t(),W,t("：一个节点发送一个广播报文其余节点都能够收到的节点的集合")]),l("p",null,[e(n,{type:"tip"},{default:i(()=>[t("定义")]),_:1}),t(),D,t("：网络层设备，可以在 Internet 中进行数据报文转发。路由器根据所收到的报文的目的地址选择一条合适的路径。将报文传递到下一个路由器或目的地。路径中最后的路由器负责将报文送交目的主机。")]),j,l("p",null,[e(n,{type:"tip"},{default:i(()=>[t("定义")]),_:1}),t(),q,t("：网络安全设备，用于控制控制两个网络之间的安全通信。它通过监测、限制、更改跨越防火墙的数据流，尽可能对外部屏蔽网络内部的信息、结构和运行状况，以此来实现对网络的安全保护。")]),z,J,M,l("p",null,[e(n,{type:"tip"},{default:i(()=>[t("定义")]),_:1}),t(),O,t("：无线局域网 WLAN 广义上是指以无线电波、激光、红外线等无线信号来代替有线局域网中的部分或全部传输介质所构成的网络。而常见的 Wi-Fi 是指 IEEE 802.11 标准上的无线局域网技术。")]),X])}const U=s(r,[["render",Z],["__file","index.html.vue"]]),Y=JSON.parse('{"path":"/1.network-basic/chapter01/","title":"1. 通信与网络","lang":"zh-CN","frontmatter":{},"headers":[{"level":2,"title":"1.1 网络通信基本概念","slug":"11-网络通信基本概念","link":"#11-网络通信基本概念","children":[]},{"level":2,"title":"1.2 数据通信网络基本概念","slug":"12-数据通信网络基本概念","link":"#12-数据通信网络基本概念","children":[]}],"git":{"createdTime":1711717379000,"updatedTime":1711717379000,"contributors":[{"name":"Sun-ZhenXing","email":"1006925066@qq.com","commits":1}]},"readingTime":{"minutes":4.72,"words":1415},"filePathRelative":"1.network-basic/chapter01/README.md","localizedDate":"2024年3月29日","excerpt":"\\n<h2>1.1 网络通信基本概念</h2>\\n<p> <strong>通信</strong>：人与人、人与物、物与物之间通过某种媒介和行为进行的信息传递与交流。</p>\\n<p> <strong>网络通信</strong>：终端设备之间通过计算机网络进行通信。</p>\\n<p>不同的网络结构：</p>\\n<ul>\\n<li>两台计算机之间通过网线传递文件</li>\\n<li>多台计算机通过路由器连接</li>\\n<li>计算机通过 Internet 下载文件</li>\\n</ul>\\n<div class=\\"hint-container info\\">\\n<p class=\\"hint-container-title\\">Internet</p>\\n<p>Internet（因特网），是目前世界上规模最大的计算机网络，其前身诞生于 1969 年的 ARPAnet（Advanced Research Projects Agency Network）。Internet 的广泛普及和应用是当今信息时代的标志性内容之一。</p>\\n</div>"}');export{U as comp,Y as data};