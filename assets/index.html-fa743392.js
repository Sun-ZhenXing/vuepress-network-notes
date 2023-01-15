import{_ as o,M as e,p as c,q as l,R as n,N as a,V as u,t as s,a1 as i}from"./framework-d3922052.js";const r={},k=n("h1",{id:"关于我对事件机制的理解",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#关于我对事件机制的理解","aria-hidden":"true"},"#"),s(" 关于我对事件机制的理解")],-1),d=n("h2",{id:"事件的定义",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#事件的定义","aria-hidden":"true"},"#"),s(" 事件的定义")],-1),g=i(`<p>其实事件就像是：</p><ol><li>用鼠标点击按钮</li><li>提交表单</li></ol><p>我的理解就是，你对浏览器进行的一些操作，应该都称为是事件</p><p>因为，事件触发就需要某种响应，这时候我们就需要事件监听器(事件处理器)</p><h2 id="事件注册" tabindex="-1"><a class="header-anchor" href="#事件注册" aria-hidden="true">#</a> 事件注册</h2><ol><li><p>事件处理属性</p><p>例如：</p><blockquote><p>需求：点击按钮，使背景颜色发生改变</p></blockquote><div class="language-html" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token special-attr"><span class="token attr-name">onclick</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span><span class="token value javascript language-javascript"><span class="token function">bgChange</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span><span class="token punctuation">&quot;</span></span></span><span class="token punctuation">&gt;</span></span>
    按钮
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">bgChange</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">let</span> rndCol <span class="token operator">=</span> <span class="token string">&#39;rgb(&#39;</span><span class="token operator">+</span><span class="token function">random</span><span class="token punctuation">(</span><span class="token number">255</span><span class="token punctuation">)</span><span class="token operator">+</span><span class="token string">&#39;,&#39;</span><span class="token operator">+</span><span class="token function">random</span><span class="token punctuation">(</span><span class="token number">255</span><span class="token punctuation">)</span><span class="token operator">+</span><span class="token string">&#39;,&#39;</span><span class="token operator">+</span><span class="token function">random</span><span class="token punctuation">(</span><span class="token number">255</span><span class="token punctuation">)</span><span class="token operator">+</span><span class="token string">&quot;)&quot;</span><span class="token punctuation">;</span>
    document<span class="token punctuation">.</span>body<span class="token punctuation">.</span>style<span class="token punctuation">.</span>backgroundColor <span class="token operator">=</span> rndCol
<span class="token punctuation">}</span>
</code></pre></div></li><li><p>使用<code>addEventListener(type,listner,useCapture/options)</code></p><blockquote><p>将监听器注册到<code>eventTarget</code>身上，当这个<code>Target</code>被触发时，那么会调用<code>Listener</code>回调函数</p></blockquote><p><strong>可以对<code>eventTarget</code>多次绑定</strong></p><ul><li><p><code>type</code>:触发类型</p></li><li><p><code>listener</code>:触发以后会干什么事情</p></li><li><p><code>useCapture</code>:布尔值</p><ul><li><code>true</code>:事件捕获</li><li><code>false</code>:事件冒泡，<strong>默认为false</strong></li></ul></li><li><p><code>options</code>:一个可选参数对象</p><ul><li><p><code>capture</code>:布尔值，作用和<code>useCapture</code>一样</p></li><li><p><code>once</code>:布尔值</p><blockquote><p>表示这个监听器最多只可以触发一次</p></blockquote></li><li><p><code>passive</code>:布尔值</p><blockquote><p>当为<code>true</code>，回调函数不会调用<code>preventDefault</code></p></blockquote><p><code>preventDefault</code>:阻止默认行为</p></li><li><p><code>signal</code>:<code>AbortSignal</code></p><blockquote><p><code>AbortSignal</code>,的<code>abort()</code>方法被调用时，监听器会被移除</p></blockquote></li></ul></li></ul></li></ol><h2 id="事件触发阶段" tabindex="-1"><a class="header-anchor" href="#事件触发阶段" aria-hidden="true">#</a> 事件触发阶段</h2><p>一共分为三个阶段:</p><ol><li><p>捕获阶段</p><blockquote><p>事件从根节点向目标节点，途中经过各个DOM节点，在每个节点上进行捕获，直到到达目标节点</p></blockquote></li><li><p>目标阶段</p><blockquote><p>事件到达目标节点，就是目标阶段，事件在目标阶段被触发</p></blockquote></li><li><p>冒泡阶段</p><blockquote><p>事件在目标节点触发后，会一层层向上冒泡，直到达到根节点</p></blockquote></li></ol><h2 id="事件代理" tabindex="-1"><a class="header-anchor" href="#事件代理" aria-hidden="true">#</a> 事件代理</h2><p>其实利用的是事件冒泡，当有很多子元素都需要点击，我们可以不必一个个为子元素注册事件，可以在他的父元素身上注册事件，让子元素发生的事件冒泡到父元素节点上。</p><div class="language-html" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ul</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>list<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>first<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>1<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">&gt;</span></span>2<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">&gt;</span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">&gt;</span></span>3<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">&gt;</span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">&gt;</span></span>4<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">&gt;</span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">&gt;</span></span>5<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ul</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>        <span class="token keyword">const</span> ul <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">&quot;.list&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">const</span> first <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">&quot;.first&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        ul<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">&quot;click&quot;</span><span class="token punctuation">,</span><span class="token punctuation">(</span><span class="token parameter">e</span><span class="token punctuation">)</span><span class="token operator">=&gt;</span><span class="token punctuation">{</span>
            console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>e<span class="token punctuation">.</span>target<span class="token punctuation">)</span>
            console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>e<span class="token punctuation">.</span>currentTarget<span class="token punctuation">)</span>
            <span class="token comment">// console.log(&quot;ul触发&quot;)</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span>
        <span class="token comment">// first.addEventListener(&quot;click&quot;,()=&gt;{</span>
        <span class="token comment">//     console.log(&quot;first触发&quot;)</span>
        <span class="token comment">// })</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这边我们可以看到，当你点击第一个<code>li</code>，<code>e.target</code>显示的就是第一个<code>li</code></p><ul><li><code>e.target</code>:事件触发的元素</li><li><code>e.currentTarget</code>:事件注册的元素</li></ul><p>那么这样做就带来了好处</p><ul><li>节省内存：不用每个子结点个个去注册事件</li><li>也就需要为子节点去消除事件<code>removeEventListener(type,listener,options/useCapture)</code></li></ul><p>补充：</p><p><code>removeListener()</code></p><ul><li><p>删除事件监听器是需要匹配的</p><p>意思就是：如果你设置了捕获时的监听器，那么你的删除监听器也必须在捕获时删除</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code>element<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">&quot;mousedown&quot;</span><span class="token punctuation">,</span> handleMouseDown<span class="token punctuation">,</span> <span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code>element<span class="token punctuation">.</span><span class="token function">removeEventListener</span><span class="token punctuation">(</span><span class="token string">&quot;mousedown&quot;</span><span class="token punctuation">,</span> handleMouseDown<span class="token punctuation">,</span> <span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">;</span>     <span class="token comment">// 失败</span>
element<span class="token punctuation">.</span><span class="token function">removeEventListener</span><span class="token punctuation">(</span><span class="token string">&quot;mousedown&quot;</span><span class="token punctuation">,</span> handleMouseDown<span class="token punctuation">,</span> <span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">;</span>      <span class="token comment">// 成功</span>
</code></pre></div></li><li><p>使用<code>options</code></p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code>element<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">&quot;mousedown&quot;</span><span class="token punctuation">,</span> handleMouseDown<span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token literal-property property">passive</span><span class="token operator">:</span> <span class="token boolean">true</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>element<span class="token punctuation">.</span><span class="token function">removeEventListener</span><span class="token punctuation">(</span><span class="token string">&quot;mousedown&quot;</span><span class="token punctuation">,</span> handleMouseDown<span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token literal-property property">passive</span><span class="token operator">:</span> <span class="token boolean">true</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>    
<span class="token comment">// 成功</span>
element<span class="token punctuation">.</span><span class="token function">removeEventListener</span><span class="token punctuation">(</span><span class="token string">&quot;mousedown&quot;</span><span class="token punctuation">,</span> handleMouseDown<span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token literal-property property">capture</span><span class="token operator">:</span> <span class="token boolean">false</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>    
<span class="token comment">// 成功</span>
element<span class="token punctuation">.</span><span class="token function">removeEventListener</span><span class="token punctuation">(</span><span class="token string">&quot;mousedown&quot;</span><span class="token punctuation">,</span> handleMouseDown<span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token literal-property property">capture</span><span class="token operator">:</span> <span class="token boolean">true</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>     
<span class="token comment">// 失败</span>
element<span class="token punctuation">.</span><span class="token function">removeEventListener</span><span class="token punctuation">(</span><span class="token string">&quot;mousedown&quot;</span><span class="token punctuation">,</span> handleMouseDown<span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token literal-property property">passive</span><span class="token operator">:</span> <span class="token boolean">false</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>    
<span class="token comment">// 成功</span>
element<span class="token punctuation">.</span><span class="token function">removeEventListener</span><span class="token punctuation">(</span><span class="token string">&quot;mousedown&quot;</span><span class="token punctuation">,</span> handleMouseDown<span class="token punctuation">,</span> <span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">;</span>                 
<span class="token comment">// 成功</span>
element<span class="token punctuation">.</span><span class="token function">removeEventListener</span><span class="token punctuation">(</span><span class="token string">&quot;mousedown&quot;</span><span class="token punctuation">,</span> handleMouseDown<span class="token punctuation">,</span> <span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">;</span>                  
<span class="token comment">// 失败</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>我的理解：</p><ul><li><code>passive</code>:这个是用来限制默认事件的，和事件捕获还是事件冒泡没啥关系</li><li>现代浏览器，一般采用事件冒泡</li><li>但是<code>useCapture</code>本身就是用来判断，捕获还是冒泡的</li><li><code>capture</code>和<code>useCapture</code>一样的意思</li></ul><p><strong>所以总的来说，事件监听器和删除事件监听器要是对应的</strong></p></li></ul><p>你可能会对回调函数里面的<code>e</code>疑惑，这个<code>e</code>其实是一个事件对象</p><h2 id="事件对象" tabindex="-1"><a class="header-anchor" href="#事件对象" aria-hidden="true">#</a> 事件对象</h2><blockquote><p>这个事件对象是用来自动传递给事件处理函数，我的理解就是：会自动传给那些回调函数</p></blockquote><p>这个事件对象在：多个元素设置相同事件处理程序的时候比较好用</p><p>参考链接：</p>`,25),v={href:"https://juejin.cn/post/6844903936223084557",target:"_blank",rel:"noopener noreferrer"},m={href:"https://segmentfault.com/a/1190000018358609",target:"_blank",rel:"noopener noreferrer"},b={href:"https://developer.mozilla.org/zh-CN/docs/Learn/JavaScript/Building_blocks/Events#addeventlistener_%E5%92%8C_removeeventlistener",target:"_blank",rel:"noopener noreferrer"},h={href:"https://developer.mozilla.org/zh-CN/docs/Web/API/EventTarget/removeEventListener",target:"_blank",rel:"noopener noreferrer"};function q(f,_){const p=e("Badge"),t=e("ExternalLinkIcon");return c(),l("div",null,[k,d,n("p",null,[a(p,{type:"tip",vertical:"middle"},{default:u(()=>[s("定义")]),_:1}),s(" 事件就是在编程时系统内发生的动作或者发生的事情-系统会在事件出现时产生或触发某种信号，并提供一个自动加载的某种动作的机制---(来自MDN)")]),g,n("p",null,[n("a",v,[s("浏览器事件机制中 事件触发的三个阶段 - 掘金 (juejin.cn)"),a(t)])]),n("p",null,[n("a",m,[s("javascript - 简单聊聊浏览器JS事件触发机制 - 贤者时间 - SegmentFault 思否"),a(t)])]),n("p",null,[n("a",b,[s("事件介绍 - 学习 Web 开发 | MDN (mozilla.org)"),a(t)])]),n("p",null,[n("a",h,[s("EventTarget.removeEventListener() - Web API 接口参考 | MDN (mozilla.org)"),a(t)])])])}const w=o(r,[["render",q],["__file","index.html.vue"]]);export{w as default};
