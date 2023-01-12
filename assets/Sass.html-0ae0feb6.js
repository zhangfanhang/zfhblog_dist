import{ac as a,H as e,I as p,G as n,U as t,O as c,ad as i,X as l}from"./framework-fadc5609.js";const o={},u={class:"hint-container warning"},d=n("p",{class:"hint-container-title"},"注意",-1),r=n("p",null,"以下不代表 scss 的所有功能，仅总结本人目前在项目大量使用过的功能",-1),v={href:"https://www.sass.hk/",target:"_blank",rel:"noopener noreferrer"},k=i(`<p>scss 里加{}，加“;”</p><p>sass 里不加{}，不加“;”</p><p><strong>根据个人习惯，使用 scss</strong></p><h2 id="变量" tabindex="-1"><a class="header-anchor" href="#变量" aria-hidden="true">#</a> 变量</h2><p>方便批量管理统一的样式</p><div class="language-scss line-numbers-mode" data-ext="scss"><pre class="language-scss"><code><span class="token property"><span class="token variable">$text-color</span></span><span class="token punctuation">:</span> #555<span class="token punctuation">;</span>
<span class="token property"><span class="token variable">$small-font</span></span><span class="token punctuation">:</span> 14px+3px<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="嵌套" tabindex="-1"><a class="header-anchor" href="#嵌套" aria-hidden="true">#</a> 嵌套</h2><p>减少代码重复次数</p><div class="language-scss line-numbers-mode" data-ext="scss"><pre class="language-scss"><code><span class="token selector">div </span><span class="token punctuation">{</span>
  <span class="token selector">span </span><span class="token punctuation">{</span>
    <span class="token comment">// div span</span>
    <span class="token property">color</span><span class="token punctuation">:</span> red<span class="token punctuation">;</span>
    <span class="token selector">a </span><span class="token punctuation">{</span>
      <span class="token comment">// div span a</span>
      <span class="token property">color</span><span class="token punctuation">:</span> blue<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="拆分-引入" tabindex="-1"><a class="header-anchor" href="#拆分-引入" aria-hidden="true">#</a> 拆分，引入</h2><p>把代码拆分成若干个 scss 文件</p><div class="language-scss line-numbers-mode" data-ext="scss"><pre class="language-scss"><code><span class="token comment">// 引入，相对路径</span>
<span class="token keyword">@import</span> <span class="token string">&#39;header.scss&#39;</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="mixin-混入的使用" tabindex="-1"><a class="header-anchor" href="#mixin-混入的使用" aria-hidden="true">#</a> Mixin 混入的使用</h2><div class="language-scss line-numbers-mode" data-ext="scss"><pre class="language-scss"><code><span class="token comment">// 超出文本隐藏</span>
<span class="token keyword">@mixin</span> <span class="token function">singleline-ellipsis</span><span class="token punctuation">(</span><span class="token variable">$width</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token property">width</span><span class="token punctuation">:</span> <span class="token variable">$width</span><span class="token punctuation">;</span>
  <span class="token property">overflow</span><span class="token punctuation">:</span> hidden<span class="token punctuation">;</span>
  <span class="token comment">// 规定段落中的文字不进行换行</span>
  <span class="token property">white-space</span><span class="token punctuation">:</span> nowrap<span class="token punctuation">;</span>
  <span class="token comment">// 显示省略符号来代表被修剪的文本</span>
  <span class="token property">text-overflow</span><span class="token punctuation">:</span> ellipsis<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.text </span><span class="token punctuation">{</span>
  <span class="token keyword">@include</span> <span class="token function">singleline-ellipsis</span><span class="token punctuation">(</span>500px<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="父选择器" tabindex="-1"><a class="header-anchor" href="#父选择器" aria-hidden="true">#</a> 父选择器 &amp;</h2><p>编译后的 CSS 文件中 &amp; 将被替换成嵌套外层的父选择器，如果含有多层嵌套，最外层的父选择器会一层一层向下传递</p><div class="language-scss line-numbers-mode" data-ext="scss"><pre class="language-scss"><code><span class="token selector">#main </span><span class="token punctuation">{</span>
  <span class="token property">color</span><span class="token punctuation">:</span> black<span class="token punctuation">;</span>
  <span class="token selector">a </span><span class="token punctuation">{</span>
    <span class="token property">font-weight</span><span class="token punctuation">:</span> bold<span class="token punctuation">;</span>
    <span class="token selector"><span class="token parent important">&amp;</span>:hover </span><span class="token punctuation">{</span>
      <span class="token property">color</span><span class="token punctuation">:</span> red<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>编译为：</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code>    <span class="token property">color</span><span class="token punctuation">:</span> black<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">#main a</span> <span class="token punctuation">{</span>
    <span class="token property">font-weight</span><span class="token punctuation">:</span> bold<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">#main a:hover</span> <span class="token punctuation">{</span>
    <span class="token property">color</span><span class="token punctuation">:</span> red<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>&amp; 必须作为选择器的第一个字符，其后可以跟随后缀生成复合的选择器，例如</p><div class="language-scss line-numbers-mode" data-ext="scss"><pre class="language-scss"><code><span class="token selector">#main </span><span class="token punctuation">{</span>
  <span class="token property">color</span><span class="token punctuation">:</span> black<span class="token punctuation">;</span>
  <span class="token selector"><span class="token parent important">&amp;</span>-sidebar </span><span class="token punctuation">{</span>
    <span class="token property">border</span><span class="token punctuation">:</span> 1px solid<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token selector"><span class="token parent important">&amp;</span>.one </span><span class="token punctuation">{</span>
    <span class="token property">color</span><span class="token punctuation">:</span> red<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>编译为：</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">#main</span> <span class="token punctuation">{</span>
  <span class="token property">color</span><span class="token punctuation">:</span> black<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">#main-sidebar</span> <span class="token punctuation">{</span>
  <span class="token property">border</span><span class="token punctuation">:</span> 1px solid<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">#main.one</span> <span class="token punctuation">{</span>
  <span class="token property">color</span><span class="token punctuation">:</span> red<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,23);function m(b,h){const s=l("ExternalLinkIcon");return e(),p("div",null,[n("div",u,[d,r,n("p",null,[n("a",v,[t("Sass 中文网"),c(s)])])]),k])}const x=a(o,[["render",m],["__file","Sass.html.vue"]]);export{x as default};
