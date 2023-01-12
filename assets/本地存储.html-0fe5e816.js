import{ac as t,H as p,I as c,G as n,U as s,O as o,ad as e,X as i}from"./framework-fadc5609.js";const l={},u=e(`<p>// TODO：重整</p><h2 id="cookie" tabindex="-1"><a class="header-anchor" href="#cookie" aria-hidden="true">#</a> Cookie</h2><h3 id="初识-cookie" tabindex="-1"><a class="header-anchor" href="#初识-cookie" aria-hidden="true">#</a> 初识 cookie</h3><ul><li><strong>浏览器存储数据</strong>的一种方式</li><li>因为<strong>存储在用户本地</strong>，而不是存储在服务器上，是本地存储</li><li>一般会自动随着浏览器每次请求发送到服务器端</li></ul><p><strong>作用</strong>：利用<code>cookie</code>跟踪统计用户访问该网站的习惯，比如什么时间访问，访问了哪些页面，在每个网页的停留时间等</p><h3 id="cookie-的基本方法" tabindex="-1"><a class="header-anchor" href="#cookie-的基本方法" aria-hidden="true">#</a> cookie 的基本方法</h3><ol><li>写入<code>cookie</code>: 不能一起设置，只能一个一个设置</li></ol><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>document<span class="token punctuation">.</span>cookie <span class="token operator">=</span> <span class="token string">&#39;username=zs&#39;</span>
document<span class="token punctuation">.</span>cookie <span class="token operator">=</span> <span class="token string">&#39;age=18&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2"><li>读取<code>cookie</code>:读取的是一个由名值对构成的字符串，每个名值对之间由“;&quot;”（一个分号和一个空格）隔开</li></ol><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>document<span class="token punctuation">.</span>cookie <span class="token comment">//username=zs; age=18</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="cookie-的属性" tabindex="-1"><a class="header-anchor" href="#cookie-的属性" aria-hidden="true">#</a> cookie 的属性</h3><ol><li><code>cookie</code>的名称<code>Name</code>和值<code>Value</code></li></ol><ul><li>最重要的两个属性，创建<code>cookie</code>时必须填写，其他属性可以使用默认值</li><li><code>cookie</code>的名称或值如果包含非英文字母，则写入时需要使用 <code>encodeURIComponent()</code>编码，读取时使用<code>decodeURIComponent()</code>解码</li></ul><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>document<span class="token punctuation">.</span>cookie <span class="token operator">=</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span><span class="token function">encodeURIComponent</span><span class="token punctuation">(</span><span class="token string">&#39;用户名&#39;</span><span class="token punctuation">)</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">=</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span><span class="token function">encodeURIComponent</span><span class="token punctuation">(</span>
  <span class="token string">&#39;张三&#39;</span>
<span class="token punctuation">)</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">decodeURIComponent</span><span class="token punctuation">(</span>document<span class="token punctuation">.</span>cookie<span class="token punctuation">)</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>一般名称名称使用英文，不要用中文，值可以使用中文，但是要编码</li></ul><ol start="2"><li>失效（到期）时间</li></ol><ul><li><p>对于失效的<code>cookie</code>，会被浏览器清除</p></li><li><p><strong>如果没有设置失效（到期）时间，这样的 Cookie 称为<code>会话 Cookie</code> ，它存在内存中，当会话结束，也就是浏览器关闭时， Cookie 消失</strong></p></li><li><p>想长时间存在，需要设置<code>expires</code>或 <code>max-age</code></p></li></ul><ol><li><code>expires</code><strong>值为 Date 类型</strong></li><li><code>max-age</code><strong>值为数字</strong>，表示当前时间+多少秒后过期，<strong>单位是秒</strong>；如果<code>max-age</code>的值为 0 或负数，则<code>cookie</code>会被删除</li></ol><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>document<span class="token punctuation">.</span>cookie <span class="token operator">=</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">username=zs; expires=</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span><span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span><span class="token string">&#39;2100-1-01 00:00:00&#39;</span><span class="token punctuation">)</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span>
document<span class="token punctuation">.</span>cookie <span class="token operator">=</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">username=zs; max-age=</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span><span class="token number">24</span> <span class="token operator">*</span> <span class="token number">3600</span> <span class="token operator">*</span> <span class="token number">30</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span> <span class="token comment">// 存活30天</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>Domain 域</li></ul><p><code>Domain</code>限定了访问<code>cookie</code>的范围（不同域名），使用<code>JS</code><strong>只能读写</strong>当前域或父域的<code>cookie</code>，无法读写其他域的 <code>cookie</code></p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>document<span class="token punctuation">.</span>cookie <span class="token operator">=</span> <span class="token string">&#39;username=alex;domain=www.immoc.com&#39;</span>
<span class="token comment">// 当前域： www.immoc.com  www.m.imooc.com</span>
<span class="token comment">// 父域： .imooc.com</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>path 路径</li></ul><p><code>path</code>限定了访问<code>cookie</code>的范围（同一域名），<strong>使用 JS 只能读写当前路径和上級路径的 Cookie，无法读写下级路径的 Cookie</strong></p><p><strong><em>当<code>Name</code>、 <code>Domain</code>、<code>Path</code>这 3 个字段都相同的时候，才是同一个 <code>cookie</code></em></strong></p><ul><li>HttpOnly</li></ul><p>设置了 <code>Httponly</code> 属性的 Cookie 不能通过 JS 访问</p><ul><li>Secure 安全标志</li></ul><p>限定了<strong>只有在使用了 https 而不是 http 的情况下</strong>才可以发送给服务端</p><p><strong><em><code>Domain</code>、<code>path</code>、 <code>Secure</code>都要满足条件，还不能过期的 Cookie 才能随着请求发送到服务器端</em></strong></p><h3 id="cookie-的封装" tabindex="-1"><a class="header-anchor" href="#cookie-的封装" aria-hidden="true">#</a> Cookie 的封装</h3>`,31),r={class:"hint-container tip"},d=n("p",{class:"hint-container-title"},"`js-cookie`:一个用于处理`cookie`的简单、轻量级`JavaScript API`",-1),k={href:"https://www.npmjs.com/package/js-cookie",target:"_blank",rel:"noopener noreferrer"},m={href:"https://juejin.cn/post/6844904052510162952",target:"_blank",rel:"noopener noreferrer"},v={href:"https://juejin.cn/post/6898630134530752520",target:"_blank",rel:"noopener noreferrer"},g=e(`<div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 写入cookie</span>
<span class="token keyword">const</span> <span class="token function-variable function">set</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">name<span class="token punctuation">,</span> value<span class="token punctuation">,</span> <span class="token punctuation">{</span> maxAge<span class="token punctuation">,</span> domain<span class="token punctuation">,</span> path<span class="token punctuation">,</span> secure <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">let</span> cookieText <span class="token operator">=</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span><span class="token function">encodeURIComponent</span><span class="token punctuation">(</span>name<span class="token punctuation">)</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">=</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span><span class="token function">encodeURIComponent</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">typeof</span> maxAge <span class="token operator">===</span> <span class="token string">&#39;number&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    cookieText <span class="token operator">+=</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">; max-age=</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>maxAge<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span>
  <span class="token punctuation">}</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>domain<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    cookieText <span class="token operator">+=</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">; domain=</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>domain<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span>
  <span class="token punctuation">}</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>path<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    cookieText <span class="token operator">+=</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">; path=</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>path<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span>
  <span class="token punctuation">}</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>secure<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    cookieText <span class="token operator">+=</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">; secure</span><span class="token template-punctuation string">\`</span></span>
  <span class="token punctuation">}</span>
  document<span class="token punctuation">.</span>cookie <span class="token operator">=</span> cookieText
<span class="token punctuation">}</span>
<span class="token comment">// 通过name获取cookie的值</span>
<span class="token keyword">const</span> <span class="token function-variable function">get</span> <span class="token operator">=</span> <span class="token parameter">name</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  name <span class="token operator">=</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span><span class="token function">encodeURIComponent</span><span class="token punctuation">(</span>name<span class="token punctuation">)</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span>
  <span class="token keyword">const</span> cookies <span class="token operator">=</span> document<span class="token punctuation">.</span>cookie<span class="token punctuation">.</span><span class="token function">split</span><span class="token punctuation">(</span><span class="token string">&#39;; &#39;</span><span class="token punctuation">)</span>
  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">const</span> item <span class="token keyword">of</span> cookies<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> <span class="token punctuation">[</span>cookieName<span class="token punctuation">,</span> cookieValue<span class="token punctuation">]</span> <span class="token operator">=</span> item<span class="token punctuation">.</span><span class="token function">split</span><span class="token punctuation">(</span><span class="token string">&#39;=&#39;</span><span class="token punctuation">)</span>

    <span class="token keyword">if</span> <span class="token punctuation">(</span>cookieName <span class="token operator">===</span> name<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> <span class="token function">decodeURIComponent</span><span class="token punctuation">(</span>cookieValue<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> <span class="token keyword">undefined</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token keyword">const</span> <span class="token function-variable function">remove</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">name<span class="token punctuation">,</span> <span class="token punctuation">{</span> domain<span class="token punctuation">,</span> path <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token function">set</span><span class="token punctuation">(</span>name<span class="token punctuation">,</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> domain<span class="token punctuation">,</span> path<span class="token punctuation">,</span> <span class="token literal-property property">maxAge</span><span class="token operator">:</span> <span class="token operator">-</span><span class="token number">1</span> <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
<span class="token keyword">export</span> <span class="token punctuation">{</span> set<span class="token punctuation">,</span> get<span class="token punctuation">,</span> remove <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="cookie-的注意事项" tabindex="-1"><a class="header-anchor" href="#cookie-的注意事项" aria-hidden="true">#</a> cookie 的注意事项</h3><ol><li><p><strong>前后端都可以创建<code>cookie</code></strong></p></li><li><p><code>cookie</code>有<strong>数量限制</strong>:当超过单个域名限制之后，在设置<code>cookie</code>,浏览器就会清除以前设置的<code>cookie</code></p></li></ol><p>3.<code> cookie</code> 有<strong>大小限制</strong>:每个<code>cookie</code>的存储容量很小，最多只有 4kB 左右</p><h2 id="localstorage" tabindex="-1"><a class="header-anchor" href="#localstorage" aria-hidden="true">#</a> localStorage</h2><h3 id="认识-localstorage" tabindex="-1"><a class="header-anchor" href="#认识-localstorage" aria-hidden="true">#</a> 认识 localStorage</h3><ul><li><p><code>localStorage</code>也是一种浏览器存储数据的方式（本地存储），它只是存储在本地，不会发送到服务器端</p></li><li><p>单个域名下的<code>localStorage</code>总大小有限制</p></li><li><p>基本用法：</p></li></ul><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>localStorage<span class="token punctuation">.</span><span class="token function">setItem</span><span class="token punctuation">(</span><span class="token string">&#39;username&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;alex&#39;</span><span class="token punctuation">)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>localStorage<span class="token punctuation">.</span>length<span class="token punctuation">)</span>
localStorage<span class="token punctuation">.</span><span class="token function">getItem</span><span class="token punctuation">(</span><span class="token string">&#39;username&#39;</span><span class="token punctuation">)</span> <span class="token comment">//获取不存在的返回null</span>
localStorage<span class="token punctuation">.</span><span class="token function">removeItem</span><span class="token punctuation">(</span><span class="token string">&#39;useraname&#39;</span><span class="token punctuation">)</span> <span class="token comment">//删除不存在的key,不报错</span>
localStorage<span class="token punctuation">.</span><span class="token function">clear</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// 全部清除</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="localstorage-的注意事项" tabindex="-1"><a class="header-anchor" href="#localstorage-的注意事项" aria-hidden="true">#</a> localStorage 的注意事项</h3><ol><li>存储期限<br> 持久化的本地存储，除非手动清除，比如通过 js 删除，或者清除浏览器缓存，否则数据是永远不会过期的。</li></ol><div class="hint-container tip"><p class="hint-container-title">sessionStorage</p><p>当会话结束的时候，<code>sessionStorage</code>的数据会被清空,用法和<code>localStorage</code>一样</p></div><ol start="2"><li><code>localStorage</code>键和值的类型</li></ol><p><strong><em>存储的键和值只能是字符串类型</em></strong>,不是字符串类型，也会先转化为字符串类型再存进去</p><ol start="3"><li><p>不同域名下不能共用<code>localStorage</code></p></li><li><p>兼容性:<code>ie7</code>以下不支持</p></li></ol>`,14),h={class:"hint-container tip"},b=n("p",{class:"hint-container-title"},"查看网络技术的浏览器支持",-1),f={href:"https://caniuse.com/",target:"_blank",rel:"noopener noreferrer"},_=n("h2",{id:"cookie-localstorage-sessionstorage-三者对比",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#cookie-localstorage-sessionstorage-三者对比","aria-hidden":"true"},"#"),s(" cookie,localStorage,SessionStorage 三者对比")],-1),x=n("p",null,"见 前端面试-> 计网&浏览器面试题",-1);function w(j,y){const a=i("ExternalLinkIcon");return p(),c("div",null,[u,n("div",r,[d,n("p",null,[n("a",k,[s("JavaScript Cookie 官方文档"),o(a)])]),n("p",null,[n("a",m,[s("js-cookie 总结，vue 构建的项目中使用 js-cookie 插件"),o(a)])]),n("p",null,[n("a",v,[s("前端鉴权的兄弟们：cookie、session、token、jwt、单点登录"),o(a)])])]),g,n("div",h,[b,n("p",null,[n("a",f,[s("Can I use____?"),o(a)])])]),_,x])}const C=t(l,[["render",w],["__file","本地存储.html.vue"]]);export{C as default};
