import{ac as e,H as t,I as p,G as n,U as c,O as o,ad as s,X as l}from"./framework-fadc5609.js";const i={},u=s(`<h2 id="set" tabindex="-1"><a class="header-anchor" href="#set" aria-hidden="true">#</a> Set</h2><p><code>Set</code> 是一种<strong>无序且唯一</strong>的数据结构</p><p><code>Set</code>本身是一个构造函数，用来生成 <code>Set</code> 数据结构</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> s <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Set</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="set-实例的方法和属性" tabindex="-1"><a class="header-anchor" href="#set-实例的方法和属性" aria-hidden="true">#</a> set 实例的方法和属性</h3><h4 id="add" tabindex="-1"><a class="header-anchor" href="#add" aria-hidden="true">#</a> add</h4><p>添加某个值，返回 <code>Set</code> 结构本身</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> s <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Set</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
s<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="has" tabindex="-1"><a class="header-anchor" href="#has" aria-hidden="true">#</a> has</h4><p>返回一个布尔值，表示该值是否为<code>Set</code>的成员</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> s <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Set</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
s<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>s<span class="token punctuation">.</span><span class="token function">has</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment">// true</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="delete" tabindex="-1"><a class="header-anchor" href="#delete" aria-hidden="true">#</a> delete</h4><p>删除某个值，返回一个布尔值，表示删除是否成功</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> s <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Set</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
s<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span>
s<span class="token punctuation">.</span><span class="token function">delete</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span> <span class="token comment">// true</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="clear" tabindex="-1"><a class="header-anchor" href="#clear" aria-hidden="true">#</a> clear</h4><p>清空 <code>Set</code>，没有返回值</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> s <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Set</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
s<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span>
s<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span>
s<span class="token punctuation">.</span><span class="token function">clear</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>s<span class="token punctuation">)</span> <span class="token comment">// Set {}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,17),d={id:"foreach",tabindex:"-1"},k=n("a",{class:"header-anchor",href:"#foreach","aria-hidden":"true"},"#",-1),r=s(`<div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> s <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Set</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
s<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">)</span>
s<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">v<span class="token punctuation">,</span> k<span class="token punctuation">,</span> <span class="token keyword">set</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// set中v=k</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>v<span class="token punctuation">,</span> k<span class="token punctuation">,</span> set<span class="token punctuation">)</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span> <span class="token comment">// window</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span> 这里修改<span class="token keyword">this</span>执向<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="size" tabindex="-1"><a class="header-anchor" href="#size" aria-hidden="true">#</a> size</h4><p>返回成员个数</p><h3 id="set-构造函数的参数" tabindex="-1"><a class="header-anchor" href="#set-构造函数的参数" aria-hidden="true">#</a> Set 构造函数的参数</h3><ol><li>数组</li></ol><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> s <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Set</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>s<span class="token punctuation">)</span> <span class="token comment">// Set(2) { 1, 2 }</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2"><li>字符串、arguments、Nodelist、Set 等类数组对象</li></ol><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 字符串组作为Set构造函数的参数</span>
<span class="token keyword">const</span> s <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Set</span><span class="token punctuation">(</span><span class="token string">&#39;hello&#39;</span><span class="token punctuation">)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>s<span class="token punctuation">)</span> <span class="token comment">// Set(4) { &#39;h&#39;, &#39;e&#39;, &#39;l&#39;, &#39;o&#39; }</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// Set作为Set构造函数的参数</span>
<span class="token keyword">const</span> s <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Set</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
s<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span>
<span class="token comment">// 相当于复制了了一个全新的Set</span>
<span class="token keyword">const</span> b <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Set</span><span class="token punctuation">(</span>s<span class="token punctuation">)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>b<span class="token punctuation">)</span> <span class="token comment">//Set { 1, 2 }</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>b<span class="token operator">===</span>s<span class="token punctuation">)</span> <span class="token comment">// false</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="set判断重复的方式" tabindex="-1"><a class="header-anchor" href="#set判断重复的方式" aria-hidden="true">#</a> Set判断重复的方式</h3><p><code>set</code> 对重复值的判断<strong>基本</strong>遵循严格相等,但是对于 <code>NaN</code> 的判断与<code>===</code>不同，<strong><code>Set </code>中 <code>NaN</code> 等于<code> NaN</code></strong></p><h3 id="set-的应用" tabindex="-1"><a class="header-anchor" href="#set-的应用" aria-hidden="true">#</a> Set 的应用</h3><ol><li>数组去重</li></ol><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// Set也可以使用\`展开运算符\`展开</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token operator">...</span><span class="token keyword">new</span> <span class="token class-name">Set</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2"><li>字符串去重</li></ol><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token operator">...</span><span class="token keyword">new</span> <span class="token class-name">Set</span><span class="token punctuation">(</span><span class="token string">&#39;aabbccd&#39;</span><span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span><span class="token string">&#39;&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="map" tabindex="-1"><a class="header-anchor" href="#map" aria-hidden="true">#</a> Map</h2><p><code>Map</code> 和对象都是键值对的集，但是<code>Map</code>“键”的范围不限于字符串，各种类型的值（包括对象）都可以当作键</p><h3 id="map-实例的属性和方法" tabindex="-1"><a class="header-anchor" href="#map-实例的属性和方法" aria-hidden="true">#</a> Map 实例的属性和方法</h3><h4 id="set-1" tabindex="-1"><a class="header-anchor" href="#set-1" aria-hidden="true">#</a> set</h4><p>使用 <code>set</code> 添加的新成员，键如果已经存在，后添加的键值对覆盖已有的,返回值为该<code>map</code>对象</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> m <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Map</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
m<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span><span class="token string">&#39;age&#39;</span><span class="token punctuation">,</span> <span class="token number">18</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span><span class="token string">&#39;name&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;alex&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span><span class="token string">&#39;age&#39;</span><span class="token punctuation">,</span> <span class="token number">111</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="get" tabindex="-1"><a class="header-anchor" href="#get" aria-hidden="true">#</a> get</h4><p><code>get</code>方法读取<code>key</code>对应的键值，如果找不到<code>key</code>，返回<code>undefined</code></p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> m<span class="token operator">=</span><span class="token keyword">new</span> <span class="token class-name">Map</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
m<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span><span class="token string">&#39;age&#39;</span><span class="token punctuation">,</span><span class="token number">18</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span><span class="token string">&#39;name&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;alex&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span><span class="token string">&#39;age&#39;</span><span class="token punctuation">,</span><span class="token number">111</span><span class="token punctuation">)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>m<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">&#39;name&#39;</span><span class="token punctuation">)</span> <span class="token comment">// &#39;alex&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="has-1" tabindex="-1"><a class="header-anchor" href="#has-1" aria-hidden="true">#</a> has</h4><p><code>has</code>方法返回一个布尔值，表示某个键是否在当前 <code>Map </code>对象之中</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> m <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Map</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
m<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span><span class="token string">&#39;age&#39;</span><span class="token punctuation">,</span> <span class="token number">18</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span><span class="token string">&#39;name&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;alex&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span><span class="token string">&#39;age&#39;</span><span class="token punctuation">,</span> <span class="token number">111</span><span class="token punctuation">)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>m<span class="token punctuation">.</span><span class="token function">has</span><span class="token punctuation">(</span><span class="token string">&#39;name&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment">// true</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="delete-1" tabindex="-1"><a class="header-anchor" href="#delete-1" aria-hidden="true">#</a> delete</h4><p><code>delete</code>方法删除某个键，返回<code>true</code>。如果删除失败，返回<code>false</code></p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> m <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Map</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
m<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span><span class="token string">&#39;age&#39;</span><span class="token punctuation">,</span> <span class="token number">18</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span><span class="token string">&#39;name&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;alex&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span><span class="token string">&#39;age&#39;</span><span class="token punctuation">,</span> <span class="token number">111</span><span class="token punctuation">)</span>
m<span class="token punctuation">.</span><span class="token function">delete</span><span class="token punctuation">(</span><span class="token string">&#39;name&#39;</span><span class="token punctuation">)</span> <span class="token comment">// true</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="clear-1" tabindex="-1"><a class="header-anchor" href="#clear-1" aria-hidden="true">#</a> clear</h4><p>清除所有成员没有返回值</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> m <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Map</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
m<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span><span class="token string">&#39;age&#39;</span><span class="token punctuation">,</span> <span class="token number">18</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span><span class="token string">&#39;name&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;alex&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span><span class="token string">&#39;age&#39;</span><span class="token punctuation">,</span> <span class="token number">111</span><span class="token punctuation">)</span>
m<span class="token punctuation">.</span><span class="token function">clear</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="foreach-1" tabindex="-1"><a class="header-anchor" href="#foreach-1" aria-hidden="true">#</a> forEach</h4><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> m <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Map</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
m<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span><span class="token string">&#39;age&#39;</span><span class="token punctuation">,</span> <span class="token number">18</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span><span class="token string">&#39;name&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;alex&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span><span class="token string">&#39;age&#39;</span><span class="token punctuation">,</span> <span class="token number">111</span><span class="token punctuation">)</span>
m<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">value<span class="token punctuation">,</span> key<span class="token punctuation">,</span> map</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>value<span class="token punctuation">,</span> key<span class="token punctuation">,</span> map<span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span> 这里修改<span class="token keyword">this</span>指向<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="size-1" tabindex="-1"><a class="header-anchor" href="#size-1" aria-hidden="true">#</a> size</h4><p>// 看下imooc怎么讲的</p><p>返回 Map 结构的成员总数</p><h3 id="map-构造函数的参数" tabindex="-1"><a class="header-anchor" href="#map-构造函数的参数" aria-hidden="true">#</a> Map 构造函数的参数</h3><h4 id="数组" tabindex="-1"><a class="header-anchor" href="#数组" aria-hidden="true">#</a> 数组</h4><p><strong>只能</strong>传二维数组，而且必须体现出键和值</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> m <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Map</span><span class="token punctuation">(</span><span class="token punctuation">[</span>
  <span class="token punctuation">[</span><span class="token string">&#39;name&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;alex&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">[</span><span class="token string">&#39;age&#39;</span><span class="token punctuation">,</span> <span class="token number">18</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">]</span><span class="token punctuation">)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>m<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="set-2" tabindex="-1"><a class="header-anchor" href="#set-2" aria-hidden="true">#</a> Set</h4><p>Set 中也必须体现出键和值，和二维数组类似</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> s <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Set</span><span class="token punctuation">(</span><span class="token punctuation">[</span>
  <span class="token punctuation">[</span><span class="token string">&#39;age&#39;</span><span class="token punctuation">,</span> <span class="token number">123</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">[</span><span class="token string">&#39;name&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;frank&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">]</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> m <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Map</span><span class="token punctuation">(</span>s<span class="token punctuation">)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>m<span class="token punctuation">)</span> <span class="token comment">// Map { &#39;age&#39; =&gt; 123, &#39;name&#39; =&gt; &#39;frank&#39; }</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="map-1" tabindex="-1"><a class="header-anchor" href="#map-1" aria-hidden="true">#</a> Map</h4><p>传入 <code>Map </code>相当于复制了一个全新的 <code>Map</code></p><h3 id="map-判断重复的方式" tabindex="-1"><a class="header-anchor" href="#map-判断重复的方式" aria-hidden="true">#</a> Map 判断重复的方式</h3><p>判断重复的方式和<code>Set</code>相同</p>`,50);function m(v,h){const a=l("Badge");return t(),p("div",null,[u,n("h4",d,[k,c(" forEach "),o(a,{text:"数组,set map 都有这个方法"})]),r])}const g=e(i,[["render",m],["__file","Set和Map数据结构.html.vue"]]);export{g as default};
