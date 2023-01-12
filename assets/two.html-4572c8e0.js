import{ac as n,H as a,I as s,ad as t}from"./framework-fadc5609.js";const e={},p=t(`<h1 id="vue2-版本" tabindex="-1"><a class="header-anchor" href="#vue2-版本" aria-hidden="true">#</a> vue2 版本</h1><h2 id="开发环境" tabindex="-1"><a class="header-anchor" href="#开发环境" aria-hidden="true">#</a> 开发环境</h2><figure><img src="https://img.shields.io/badge/vue-2.6.14-4FC08D?logo=Vue.js&amp;?style=flat-square" alt="" tabindex="0"><figcaption></figcaption></figure><h2 id="用法" tabindex="-1"><a class="header-anchor" href="#用法" aria-hidden="true">#</a> 用法</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">npm</span> i @zhangfanhang/v-list
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-vue line-numbers-mode" data-ext="vue"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>v-list</span> <span class="token attr-name">:list-data</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>listData<span class="token punctuation">&quot;</span></span> <span class="token attr-name">:item-height</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>100<span class="token punctuation">&quot;</span></span> <span class="token attr-name">v-slot</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>slotProps<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>context<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
      {{ slotProps.item }}
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>v-list</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">import</span> VList <span class="token keyword">from</span> <span class="token string">&#39;@zhangfanhang/v-list&#39;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token function">data</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">listData</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">6</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">component</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    VList<span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="参数-props" tabindex="-1"><a class="header-anchor" href="#参数-props" aria-hidden="true">#</a> 参数 Props</h2><table><thead><tr><th>属性名</th><th>含义</th><th>数据类型</th><th>是否必传</th></tr></thead><tbody><tr><td>listData</td><td>渲染数据列表</td><td>Array</td><td>是</td></tr><tr><td>column</td><td>数据项列数</td><td>Number</td><td>否，默认为 1</td></tr><tr><td>itemHeight</td><td>数据项高度</td><td>Number</td><td>否，默认为 100</td></tr><tr><td>height</td><td>容器高度</td><td>String</td><td>否，默认 100%，即父元素高度（需设置父元素高度）</td></tr></tbody></table>`,9),o=[p];function c(l,i){return a(),s("div",null,o)}const d=n(e,[["render",c],["__file","two.html.vue"]]);export{d as default};