import{ac as e,H as p,I as t,G as n,U as c,O as o,ad as s,X as i}from"./framework-fadc5609.js";const l={},u=s(`<p>// TODO: 2022.5.23 基于 ES6 入门 class 章节重新梳理</p><h2 id="class-基本用法" tabindex="-1"><a class="header-anchor" href="#class-基本用法" aria-hidden="true">#</a> Class 基本用法</h2><p>类名一般首字母大写</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">class</span> <span class="token class-name">Person</span> <span class="token punctuation">{</span>
  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token parameter">name<span class="token punctuation">,</span> age</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 实例化时执行构造方法</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> name
    <span class="token keyword">this</span><span class="token punctuation">.</span>age <span class="token operator">=</span> age
  <span class="token punctuation">}</span>
  <span class="token comment">// 各实例共享的方法(在原型上定义)</span>
  <span class="token function">speak</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="属性与方法" tabindex="-1"><a class="header-anchor" href="#属性与方法" aria-hidden="true">#</a> 属性与方法</h2><h3 id="实例属性、静态方法和静态属性" tabindex="-1"><a class="header-anchor" href="#实例属性、静态方法和静态属性" aria-hidden="true">#</a> 实例属性、静态方法和静态属性</h3><ol><li>实例属性</li></ol><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">class</span> <span class="token class-name">Person</span> <span class="token punctuation">{</span>
  <span class="token comment">// 实例属性除了定义在constructor()方法里面的this上面，也可以定义在类的最顶层</span>
  age <span class="token operator">=</span> <span class="token number">0</span>
  sex <span class="token operator">=</span> <span class="token string">&#39;male&#39;</span>
  <span class="token comment">//方法就是值为函数的特殊属性</span>
  <span class="token function-variable function">getSex</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>sex
  <span class="token punctuation">}</span>

  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token parameter">name<span class="token punctuation">,</span> sex</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> name
    <span class="token keyword">this</span><span class="token punctuation">.</span>sex <span class="token operator">=</span> sex <span class="token operator">||</span> <span class="token keyword">this</span><span class="token punctuation">.</span>sex
  <span class="token punctuation">}</span>
  <span class="token function">speak</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;啊这&#39;</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token keyword">const</span> p <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Person</span><span class="token punctuation">(</span><span class="token string">&#39;Alex&#39;</span><span class="token punctuation">)</span>
p<span class="token punctuation">.</span><span class="token function">speak</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>p<span class="token punctuation">)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>p<span class="token punctuation">.</span><span class="token function">getSex</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2"><li>静态方法(类的方法)</li></ol><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">static</span> <span class="token function">speak</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
  <span class="token comment">// this指向类</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;人类可以说话&#39;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="3"><li>静态属性(类的属性)</li></ol><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 这是一个最近添加到 JavaScript 的特性,可以在最近的 Chrome 工作</span>
<span class="token keyword">static</span> version<span class="token operator">=</span><span class="token string">&#39;1.0&#39;</span>
<span class="token comment">// 推荐 将属性变成方法</span>
<span class="token keyword">static</span> <span class="token function">getVersion</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token string">&#39;1.0&#39;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="私有属性和方法" tabindex="-1"><a class="header-anchor" href="#私有属性和方法" aria-hidden="true">#</a> 私有属性和方法</h3><div class="hint-container tip"><p class="hint-container-title">新提案</p><p>这是一个最近添加到 JavaScript 的特性，它为私有属性和方法提供语言级支持。</p><p>私有属性和方法应该以 <code>#</code> 开头。它们只在类的内部可被访问：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">class</span> <span class="token class-name">Foo</span> <span class="token punctuation">{</span>
  <span class="token comment">// 必须声明，否则会报错：‘Private field &#39;#a&#39; must be declared in an enclosing class’ 普通属性无需这样做</span>
  #a
  #b
  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token parameter">a<span class="token punctuation">,</span> b</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>#a <span class="token operator">=</span> a
    <span class="token keyword">this</span><span class="token punctuation">.</span>#b <span class="token operator">=</span> b
  <span class="token punctuation">}</span>
  <span class="token function">#sum</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>#a <span class="token operator">+</span> <span class="token keyword">this</span><span class="token punctuation">.</span>#b
  <span class="token punctuation">}</span>
  <span class="token function">printSum</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">#sum</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面代码中，<code>#a,#b</code>为私有属性（必须在类中声明），<code>#sum()</code>就是一个私有方法。</p></div><p>私有方法和私有属性，是只能在类的内部访问的方法和属性，外部不能访问。这是常见需求，有利于代码的封装，但 ES6 不提供，只能通过变通方法模拟实现。</p><p>模拟私有属性和方法：<code>_</code>开头表示私有，属性或方法名用下划线开头（业界规定这样的属性或方法表示私有，不应该随意改动，但不具备很强的约束力）</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">class</span> <span class="token class-name">Person</span> <span class="token punctuation">{</span>
  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token parameter">name</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>_name <span class="token operator">=</span> name
  <span class="token punctuation">}</span>
  <span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>_name
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> p <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Person</span><span class="token punctuation">(</span><span class="token string">&#39;alex&#39;</span><span class="token punctuation">)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>p<span class="token punctuation">.</span><span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>将私有属性和方法移出类,从根本上解决问题</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token punctuation">;</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">let</span> name <span class="token operator">=</span> <span class="token string">&#39;&#39;</span>
  <span class="token keyword">class</span> <span class="token class-name">Person</span> <span class="token punctuation">{</span>
    <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token parameter">username</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      name <span class="token operator">=</span> username
    <span class="token punctuation">}</span>
    <span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> name
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
  <span class="token comment">// 将Person类暴露到全局</span>
  window<span class="token punctuation">.</span>Person <span class="token operator">=</span> Person
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token keyword">const</span> p <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Person</span><span class="token punctuation">(</span><span class="token string">&#39;alex&#39;</span><span class="token punctuation">)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>p<span class="token punctuation">.</span>name<span class="token punctuation">)</span>
<span class="token comment">// 只能通过暴露出的方法访问属性</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>p<span class="token punctuation">.</span><span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="存取器" tabindex="-1"><a class="header-anchor" href="#存取器" aria-hidden="true">#</a> 存取器</h2><p>使用 getter 和 setter 可以改变属性的赋值和读取行为：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">class</span> <span class="token class-name">Animal</span> <span class="token punctuation">{</span>
  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token parameter">name</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> name
  <span class="token punctuation">}</span>
  <span class="token keyword">get</span> <span class="token function">name</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token string">&#39;Jack&#39;</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">set</span> <span class="token function">name</span><span class="token punctuation">(</span><span class="token parameter">value</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;setter: &#39;</span> <span class="token operator">+</span> value<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">let</span> a <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Animal</span><span class="token punctuation">(</span><span class="token string">&#39;Kitty&#39;</span><span class="token punctuation">)</span> <span class="token comment">// setter: Kitty</span>
a<span class="token punctuation">.</span>name <span class="token operator">=</span> <span class="token string">&#39;Tom&#39;</span> <span class="token comment">// setter: Tom</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>a<span class="token punctuation">.</span>name<span class="token punctuation">)</span> <span class="token comment">// Jack</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="继承" tabindex="-1"><a class="header-anchor" href="#继承" aria-hidden="true">#</a> 继承</h2><h3 id="extends" tabindex="-1"><a class="header-anchor" href="#extends" aria-hidden="true">#</a> extends</h3><div class="hint-container warning"><p class="hint-container-title">注意</p><p>在 <code>class</code> 方法中，继承是使用 <code>extends</code> 关键字来实现的。子类必须在 <code>constructor()</code>调用 <code>super()</code>方法，否则新建实例时会报错</p><p>报错的原因是：子类是没有自己的 <code>this</code>对象的，它只能继承自父类的 <code>this</code> 对象，然后对其进行加工，而<code>super()</code>就是将父类中的<code> this</code> 对象继承给子类的。没有 <code>super</code>，子类就得不到 <code>this </code>对象。</p><p>但是 子类中不写 <code>constructor</code> 可以不写 <code>super</code></p></div><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">class</span> <span class="token class-name">Person</span> <span class="token punctuation">{</span>
  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token parameter">name<span class="token punctuation">,</span> sex</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> name
    <span class="token keyword">this</span><span class="token punctuation">.</span>sex <span class="token operator">=</span> sex
    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function-variable function">say</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;say&#39;</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
  <span class="token function">speak</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;speak&#39;</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
  <span class="token comment">// 静态属性和方法是可被继承的</span>
  <span class="token keyword">static</span> <span class="token function">speak</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;staic&#39;</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
Person<span class="token punctuation">.</span>version <span class="token operator">=</span> <span class="token string">&#39;1.0&#39;</span>
<span class="token keyword">class</span> <span class="token class-name">Programmer</span> <span class="token keyword">extends</span> <span class="token class-name">Person</span> <span class="token punctuation">{</span>
  <span class="token comment">//实现继承的关键语句</span>
  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token parameter">name<span class="token punctuation">,</span> sex<span class="token punctuation">,</span> feature</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// this 操作不能放在 super 前面</span>
    <span class="token keyword">super</span><span class="token punctuation">(</span>name<span class="token punctuation">,</span> sex<span class="token punctuation">)</span> <span class="token comment">//实现继承的关键语句</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>feature <span class="token operator">=</span> feature
  <span class="token punctuation">}</span>

  <span class="token comment">// 子类可以定义属于自己的特有方法</span>
  <span class="token function">hi</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;hi&#39;</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>

  <span class="token comment">// 子类如果定义同名函数，就会覆盖父类的函数</span>
  <span class="token function">speak</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;Programmer speak&#39;</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> zs <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Programmer</span><span class="token punctuation">(</span><span class="token string">&#39;zs&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;男&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;秃头&#39;</span><span class="token punctuation">)</span>

<span class="token comment">// 继承的父类的方法和属性</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>zs<span class="token punctuation">.</span>name<span class="token punctuation">)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>zs<span class="token punctuation">.</span>sex<span class="token punctuation">)</span>
zs<span class="token punctuation">.</span><span class="token function">say</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
Programmer<span class="token punctuation">.</span><span class="token function">speak</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>Programmer<span class="token punctuation">.</span>version<span class="token punctuation">)</span>

<span class="token comment">// 子类独有的方法和属性</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>zs<span class="token punctuation">.</span>feature<span class="token punctuation">)</span>
zs<span class="token punctuation">.</span><span class="token function">speak</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
zs<span class="token punctuation">.</span><span class="token function">hi</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="super" tabindex="-1"><a class="header-anchor" href="#super" aria-hidden="true">#</a> super</h3><h4 id="作为函数调用" tabindex="-1"><a class="header-anchor" href="#作为函数调用" aria-hidden="true">#</a> 作为函数调用</h4><ul><li><code>super</code> 可以作为函数调用，形式是 <code>super(参数 1, 参数 2, ...)</code></li><li>代表<strong>父类的构造方法</strong>，只能用在子类的构造方法中，用在其他地方就会报错</li><li><code>super</code> 虽然代表了父类的构造方法，但是内部的 this 指向子类的实例</li></ul>`,29),d={id:"作为对象使用",tabindex:"-1"},r=n("a",{class:"header-anchor",href:"#作为对象使用","aria-hidden":"true"},"#",-1),k=s(`<p><code>super</code> 还可以作为对象调用，形式是 <code>super.函数名()</code></p><p>(1) 在构造方法中使用或在一般方法中使用</p><ul><li>super 代表父类的原型对象 <code>Person.prototype</code></li><li>定义在父类 <code>constructor</code> 上的方法或属性，是<strong>无法</strong>通过 <code>super</code> 调用的</li><li>通过<code>super</code>调用<code>父类</code>的方法时,方法内部的<code> this</code> 指向<strong>当前的子类实例</strong></li></ul><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">class</span> <span class="token class-name">Person</span> <span class="token punctuation">{</span>
  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token parameter">name<span class="token punctuation">,</span> sex</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> name
    <span class="token keyword">this</span><span class="token punctuation">.</span>sex <span class="token operator">=</span> sex
  <span class="token punctuation">}</span>
  <span class="token function">speak</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">+</span> <span class="token string">&#39;speak&#39;</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token keyword">class</span> <span class="token class-name">Programmer</span> <span class="token keyword">extends</span> <span class="token class-name">Person</span> <span class="token punctuation">{</span>
  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token parameter">name<span class="token punctuation">,</span> sex</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">super</span><span class="token punctuation">(</span>name<span class="token punctuation">,</span> sex<span class="token punctuation">)</span>
    <span class="token keyword">super</span><span class="token punctuation">.</span><span class="token function">speak</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token keyword">const</span> p <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Programmer</span><span class="token punctuation">(</span><span class="token string">&#39;frank&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;male&#39;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>(2) 在静态方法中使用</p><ul><li><code>super</code> 代表的是<strong>父类</strong>，而不是父类的原型对象</li><li>通过 <code>super</code> 调用父类的方法时，父类静态方法内部的 <code>this</code> 指向当前的子类，而不是子类的实例</li></ul><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">class</span> <span class="token class-name">Person</span> <span class="token punctuation">{</span>
  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token parameter">name<span class="token punctuation">,</span> sex</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> name
  <span class="token punctuation">}</span>
  <span class="token keyword">static</span> <span class="token function">speak</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;person speak&#39;</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token keyword">class</span> <span class="token class-name">Programmer</span> <span class="token keyword">extends</span> <span class="token class-name">Person</span> <span class="token punctuation">{</span>
  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token parameter">name<span class="token punctuation">,</span> sex</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">super</span><span class="token punctuation">(</span>name<span class="token punctuation">,</span> sex<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">static</span> <span class="token function">speak</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">super</span><span class="token punctuation">.</span><span class="token function">speak</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;p speak&#39;</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
Programmer<span class="token punctuation">.</span><span class="token function">speak</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,7);function v(m,b){const a=i("Badge");return p(),t("div",null,[u,n("h4",d,[r,c(" 作为对象使用 "),o(a,{text:"了解"})]),k])}const h=e(l,[["render",v],["__file","Class类.html.vue"]]);export{h as default};
