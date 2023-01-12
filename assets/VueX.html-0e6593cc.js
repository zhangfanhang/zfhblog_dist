import{ac as t,H as e,I as p,G as n,U as o,O as c,ad as s,X as i}from"./framework-fadc5609.js";const l={},u=s(`<h2 id="概念" tabindex="-1"><a class="header-anchor" href="#概念" aria-hidden="true">#</a> 概念</h2><p>在 Vue 中实现集中式状态（数据）管理的一个 Vue 插件，对 vue 应用中多个组件的共享状态进行集中式的管理（读/写），也是一种组件间通信的方式，且适用于<strong>任意组件间通信</strong>。</p><h2 id="何时使用" tabindex="-1"><a class="header-anchor" href="#何时使用" aria-hidden="true">#</a> 何时使用</h2><p>多个组件需要共享数据时</p><h2 id="vuex-工作原理" tabindex="-1"><a class="header-anchor" href="#vuex-工作原理" aria-hidden="true">#</a> VueX 工作原理</h2><figure><img src="https://zfh-nanjing-bucket.oss-cn-nanjing.aliyuncs.com/blog-images/vuex.png" alt="vuex" tabindex="0"><figcaption>vuex</figcaption></figure><h2 id="搭建-vuex-环境" tabindex="-1"><a class="header-anchor" href="#搭建-vuex-环境" aria-hidden="true">#</a> 搭建 vuex 环境</h2><ol><li><p>创建文件：<code>src/store/index.js</code></p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">//引入Vue核心库</span>
<span class="token keyword">import</span> Vue <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span>
<span class="token comment">//引入Vuex</span>
<span class="token keyword">import</span> Vuex <span class="token keyword">from</span> <span class="token string">&#39;vuex&#39;</span>
<span class="token comment">//应用Vuex插件</span>
Vue<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>Vuex<span class="token punctuation">)</span>

<span class="token comment">//准备actions对象——响应组件中用户的动作</span>
<span class="token keyword">const</span> actions <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
<span class="token comment">//准备mutations对象——修改state中的数据</span>
<span class="token keyword">const</span> mutations <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
<span class="token comment">//准备state对象——保存具体的数据</span>
<span class="token keyword">const</span> state <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>

<span class="token comment">//创建并暴露store</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">new</span> <span class="token class-name">Vuex<span class="token punctuation">.</span>Store</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  actions<span class="token punctuation">,</span>
  mutations<span class="token punctuation">,</span>
  state<span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>在<code>main.js</code>中创建 vm 时传入<code>store</code>配置项</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token operator">...</span><span class="token operator">...</span>
<span class="token comment">//引入store</span>
<span class="token keyword">import</span> store <span class="token keyword">from</span> <span class="token string">&#39;./store&#39;</span>
<span class="token operator">...</span><span class="token operator">...</span>

<span class="token comment">//创建vm</span>
<span class="token keyword">new</span> <span class="token class-name">Vue</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
	<span class="token literal-property property">el</span><span class="token operator">:</span><span class="token string">&#39;#app&#39;</span><span class="token punctuation">,</span>
	<span class="token function-variable function">render</span><span class="token operator">:</span> <span class="token parameter">h</span> <span class="token operator">=&gt;</span> <span class="token function">h</span><span class="token punctuation">(</span>App<span class="token punctuation">)</span><span class="token punctuation">,</span>
	store
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ol><h2 id="基本使用" tabindex="-1"><a class="header-anchor" href="#基本使用" aria-hidden="true">#</a> 基本使用</h2><ol><li><p>初始化数据、配置<code>actions</code>、配置<code>mutations</code>，操作文件<code>store.js</code></p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">//引入Vue核心库</span>
<span class="token keyword">import</span> Vue <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span>
<span class="token comment">//引入Vuex</span>
<span class="token keyword">import</span> Vuex <span class="token keyword">from</span> <span class="token string">&#39;vuex&#39;</span>
<span class="token comment">//引用Vuex</span>
Vue<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>Vuex<span class="token punctuation">)</span>

<span class="token keyword">const</span> actions <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token comment">//响应组件中加的动作</span>
  <span class="token function">jia</span><span class="token punctuation">(</span><span class="token parameter">context<span class="token punctuation">,</span> value</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// console.log(&#39;actions中的jia被调用了&#39;,miniStore,value)</span>
    context<span class="token punctuation">.</span><span class="token function">commit</span><span class="token punctuation">(</span><span class="token string">&#39;JIA&#39;</span><span class="token punctuation">,</span> value<span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> mutations <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token comment">//执行加</span>
  <span class="token constant">JIA</span><span class="token punctuation">(</span><span class="token parameter">state<span class="token punctuation">,</span> value</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// console.log(&#39;mutations中的JIA被调用了&#39;,state,value)</span>
    state<span class="token punctuation">.</span>sum <span class="token operator">+=</span> value
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>

<span class="token comment">//初始化数据</span>
<span class="token keyword">const</span> state <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">sum</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>

<span class="token comment">//创建并暴露store</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">new</span> <span class="token class-name">Vuex<span class="token punctuation">.</span>Store</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  actions<span class="token punctuation">,</span>
  mutations<span class="token punctuation">,</span>
  state<span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>组件中读取 vuex 中的数据：<code>$store.state.sum</code></p></li><li><p>组件中修改 vuex 中的数据：<code>$store.dispatch(&#39;action中的方法名&#39;,数据)</code> 或 <code>$store.commit(&#39;mutations中的方法名&#39;,数据)</code></p></li></ol><div class="hint-container tip"><p class="hint-container-title">备注</p><p>若没有网络请求或其他业务逻辑(即单纯的修改 state 中的数据)，组件中也可以越过 actions，即不写<code>dispatch</code>，直接编写<code>commit</code></p><p>Action 类似于 mutation，不同在于：</p><ul><li><p>Action 提交的是 mutation，而不是直接变更状态。</p></li><li><p>Action 可以包含任意异步操作。</p></li></ul></div><ol start="4"><li>可以向 store.commit 传入额外的参数，即 mutation 的 <code>载荷（payload）</code>，在大多数情况下，载荷应该是一个对象，这样可以包含多个字段并且记录的 mutation 会更易读</li></ol><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// ...</span>
<span class="token literal-property property">mutations</span><span class="token operator">:</span> <span class="token punctuation">{</span>
  <span class="token function">increment</span> <span class="token punctuation">(</span><span class="token parameter">state<span class="token punctuation">,</span> payload</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    state<span class="token punctuation">.</span>count <span class="token operator">+=</span> payload<span class="token punctuation">.</span>amount
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token comment">// ...</span>
store<span class="token punctuation">.</span><span class="token function">commit</span><span class="token punctuation">(</span><span class="token string">&#39;increment&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">amount</span><span class="token operator">:</span> <span class="token number">10</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="getters-的使用" tabindex="-1"><a class="header-anchor" href="#getters-的使用" aria-hidden="true">#</a> getters 的使用</h2><ol><li><p>概念：当 state 中的数据需要经过加工后再使用时，可以使用 getters 加工</p><div class="hint-container tip"><p class="hint-container-title">提示</p><p>getters 可以认为是 store 的计算属性,就像计算属性一样，getter 的返回值会根据它的依赖被缓存起来，且只有当它的依赖值发生了改变才会被重新计算。</p></div></li><li><p>在<code>store.js</code>中追加<code>getters</code>配置</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token operator">...</span><span class="token operator">...</span>

<span class="token keyword">const</span> getters <span class="token operator">=</span> <span class="token punctuation">{</span>
	<span class="token function">bigSum</span><span class="token punctuation">(</span><span class="token parameter">state</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
		<span class="token keyword">return</span> state<span class="token punctuation">.</span>sum <span class="token operator">*</span> <span class="token number">10</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">//创建并暴露store</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">new</span> <span class="token class-name">Vuex<span class="token punctuation">.</span>Store</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
	<span class="token operator">...</span><span class="token operator">...</span>
	getters
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>组件中读取数据：<code>$store.getters.bigSum</code></p></li></ol><h2 id="四个-map-方法的使用" tabindex="-1"><a class="header-anchor" href="#四个-map-方法的使用" aria-hidden="true">#</a> 四个 map 方法的使用</h2><ol><li><p><strong>mapState 方法：</strong>用于帮助我们映射<code>state</code>中的数据为计算属性</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token literal-property property">computed</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token comment">//借助mapState生成计算属性：he、xuexiao、kemu（对象写法）</span>
     <span class="token operator">...</span><span class="token function">mapState</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token literal-property property">he</span><span class="token operator">:</span><span class="token string">&#39;sum&#39;</span><span class="token punctuation">,</span><span class="token literal-property property">xuexiao</span><span class="token operator">:</span><span class="token string">&#39;school&#39;</span><span class="token punctuation">,</span><span class="token literal-property property">kemu</span><span class="token operator">:</span><span class="token string">&#39;subject&#39;</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>

    <span class="token comment">//借助mapState生成计算属性：sum、school、subject（数组写法）</span>
    <span class="token operator">...</span><span class="token function">mapState</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string">&#39;sum&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;school&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;subject&#39;</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p><strong>mapGetters 方法：</strong>用于帮助我们映射<code>getters</code>中的数据为计算属性</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token literal-property property">computed</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token comment">//借助mapGetters生成计算属性：bigSum（对象写法）</span>
    <span class="token operator">...</span><span class="token function">mapGetters</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token literal-property property">bigSum</span><span class="token operator">:</span><span class="token string">&#39;bigSum&#39;</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>

    <span class="token comment">//借助mapGetters生成计算属性：bigSum（数组写法）</span>
    <span class="token operator">...</span><span class="token function">mapGetters</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string">&#39;bigSum&#39;</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p><strong>mapActions 方法：</strong>用于帮助我们生成与<code>actions</code>对话的方法，即：包含<code>$store.dispatch(xxx)</code>的函数</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token literal-property property">methods</span><span class="token operator">:</span><span class="token punctuation">{</span>
    <span class="token comment">//靠mapActions生成：incrementOdd、incrementWait（对象形式）</span>
    <span class="token operator">...</span><span class="token function">mapActions</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token literal-property property">incrementOdd</span><span class="token operator">:</span><span class="token string">&#39;jiaOdd&#39;</span><span class="token punctuation">,</span><span class="token literal-property property">incrementWait</span><span class="token operator">:</span><span class="token string">&#39;jiaWait&#39;</span><span class="token punctuation">}</span><span class="token punctuation">)</span>

    <span class="token comment">//靠mapActions生成：jiaOdd、jiaWait（数组形式）</span>
    <span class="token operator">...</span><span class="token function">mapActions</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string">&#39;jiaOdd&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;jiaWait&#39;</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p><strong>mapMutations 方法：</strong>用于帮助我们生成与<code>mutations</code>对话的方法，即：包含<code>$store.commit(xxx)</code>的函数</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token literal-property property">methods</span><span class="token operator">:</span><span class="token punctuation">{</span>
    <span class="token comment">//靠mapActions生成：increment、decrement（对象形式）</span>
    <span class="token operator">...</span><span class="token function">mapMutations</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token literal-property property">increment</span><span class="token operator">:</span><span class="token string">&#39;JIA&#39;</span><span class="token punctuation">,</span><span class="token literal-property property">decrement</span><span class="token operator">:</span><span class="token string">&#39;JIAN&#39;</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>

    <span class="token comment">//靠mapMutations生成：JIA、JIAN（对象形式）</span>
    <span class="token operator">...</span><span class="token function">mapMutations</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string">&#39;JIA&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;JIAN&#39;</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="hint-container danger"><p class="hint-container-title">特别注意</p><p>mapActions 与 mapMutations 使用时，若需要传递参数需要：在模板 template 中绑定事件时传递好参数，否则参数是事件对象。</p></div></li></ol><h2 id="模块化-命名空间" tabindex="-1"><a class="header-anchor" href="#模块化-命名空间" aria-hidden="true">#</a> 模块化+命名空间</h2><ol><li><p>目的：让代码更好维护，让多种数据分类更加明确。</p></li><li><p>修改<code>store.js</code></p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> countAbout <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">namespaced</span><span class="token operator">:</span><span class="token boolean">true</span><span class="token punctuation">,</span><span class="token comment">//开启命名空间</span>
  <span class="token literal-property property">state</span><span class="token operator">:</span><span class="token punctuation">{</span><span class="token literal-property property">x</span><span class="token operator">:</span><span class="token number">1</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">mutations</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token operator">...</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">actions</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token operator">...</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">getters</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token function">bigSum</span><span class="token punctuation">(</span><span class="token parameter">state</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
       <span class="token keyword">return</span> state<span class="token punctuation">.</span>sum <span class="token operator">*</span> <span class="token number">10</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> personAbout <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">namespaced</span><span class="token operator">:</span><span class="token boolean">true</span><span class="token punctuation">,</span><span class="token comment">//开启命名空间</span>
  <span class="token literal-property property">state</span><span class="token operator">:</span><span class="token punctuation">{</span> <span class="token operator">...</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">mutations</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token operator">...</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">actions</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token operator">...</span> <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> store <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Vuex<span class="token punctuation">.</span>Store</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">modules</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    countAbout<span class="token punctuation">,</span>
    personAbout
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>开启命名空间后，组件中读取 state 数据：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">//方式一：自己直接读取</span>
<span class="token keyword">this</span><span class="token punctuation">.</span>$store<span class="token punctuation">.</span>state<span class="token punctuation">.</span>personAbout<span class="token punctuation">.</span>list
<span class="token comment">//方式二：借助mapState读取：</span>
<span class="token operator">...</span><span class="token function">mapState</span><span class="token punctuation">(</span><span class="token string">&#39;countAbout&#39;</span><span class="token punctuation">,</span><span class="token punctuation">[</span><span class="token string">&#39;sum&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;school&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;subject&#39;</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>开启命名空间后，组件中读取 getters 数据：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">//方式一：自己直接读取</span>
<span class="token keyword">this</span><span class="token punctuation">.</span>$store<span class="token punctuation">.</span>getters<span class="token punctuation">[</span><span class="token string">&#39;personAbout/firstPersonName&#39;</span><span class="token punctuation">]</span>
<span class="token comment">//方式二：借助mapGetters读取：</span>
<span class="token operator">...</span><span class="token function">mapGetters</span><span class="token punctuation">(</span><span class="token string">&#39;countAbout&#39;</span><span class="token punctuation">,</span><span class="token punctuation">[</span><span class="token string">&#39;bigSum&#39;</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>开启命名空间后，组件中调用 dispatch</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">//方式一：自己直接dispatch</span>
<span class="token keyword">this</span><span class="token punctuation">.</span>$store<span class="token punctuation">.</span><span class="token function">dispatch</span><span class="token punctuation">(</span><span class="token string">&#39;personAbout/addPersonWang&#39;</span><span class="token punctuation">,</span>person<span class="token punctuation">)</span>
<span class="token comment">//方式二：借助mapActions：</span>
<span class="token operator">...</span><span class="token function">mapActions</span><span class="token punctuation">(</span><span class="token string">&#39;countAbout&#39;</span><span class="token punctuation">,</span><span class="token punctuation">{</span><span class="token literal-property property">incrementOdd</span><span class="token operator">:</span><span class="token string">&#39;jiaOdd&#39;</span><span class="token punctuation">,</span><span class="token literal-property property">incrementWait</span><span class="token operator">:</span><span class="token string">&#39;jiaWait&#39;</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>开启命名空间后，组件中调用 commit</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">//方式一：自己直接commit</span>
<span class="token keyword">this</span><span class="token punctuation">.</span>$store<span class="token punctuation">.</span><span class="token function">commit</span><span class="token punctuation">(</span><span class="token string">&#39;personAbout/ADD_PERSON&#39;</span><span class="token punctuation">,</span>person<span class="token punctuation">)</span>
<span class="token comment">//方式二：借助mapMutations：</span>
<span class="token operator">...</span><span class="token function">mapMutations</span><span class="token punctuation">(</span><span class="token string">&#39;countAbout&#39;</span><span class="token punctuation">,</span><span class="token punctuation">{</span><span class="token literal-property property">increment</span><span class="token operator">:</span><span class="token string">&#39;JIA&#39;</span><span class="token punctuation">,</span><span class="token literal-property property">decrement</span><span class="token operator">:</span><span class="token string">&#39;JIAN&#39;</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>模块化 在<code>store</code>文件夹下，新建<code>count.js</code>,<code>person.js</code>两个文件对应两个命名空间。</p><details class="hint-container details"><summary>count.js 代码</summary></details></li></ol><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token comment">// 开启命名空间 默认为false</span>
  <span class="token literal-property property">namespaced</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token literal-property property">state</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">sum</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">mutations</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token constant">ADD</span><span class="token punctuation">(</span><span class="token parameter">state<span class="token punctuation">,</span> value</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      state<span class="token punctuation">.</span>sum <span class="token operator">+=</span> value
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token constant">ADDODD</span><span class="token punctuation">(</span><span class="token parameter">state<span class="token punctuation">,</span> value</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      state<span class="token punctuation">.</span>sum <span class="token operator">+=</span> value
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token constant">REDUCE</span><span class="token punctuation">(</span><span class="token parameter">state<span class="token punctuation">,</span> value</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      state<span class="token punctuation">.</span>sum <span class="token operator">-=</span> value
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token constant">ADDWAIT</span><span class="token punctuation">(</span><span class="token parameter">state<span class="token punctuation">,</span> value</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      state<span class="token punctuation">.</span>sum <span class="token operator">+=</span> value
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>

  <span class="token literal-property property">actions</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token function">addOdd</span><span class="token punctuation">(</span><span class="token parameter">context<span class="token punctuation">,</span> value</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>context<span class="token punctuation">.</span>state<span class="token punctuation">.</span>sum <span class="token operator">%</span> <span class="token number">2</span> <span class="token operator">!==</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        context<span class="token punctuation">.</span><span class="token function">commit</span><span class="token punctuation">(</span><span class="token string">&#39;ADDODD&#39;</span><span class="token punctuation">,</span> value<span class="token punctuation">)</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token function">addWait</span><span class="token punctuation">(</span><span class="token parameter">context<span class="token punctuation">,</span> value</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
        context<span class="token punctuation">.</span><span class="token function">commit</span><span class="token punctuation">(</span><span class="token string">&#39;ADDWAIT&#39;</span><span class="token punctuation">,</span> value<span class="token punctuation">)</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">2000</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">getters</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token function">tenSum</span><span class="token punctuation">(</span><span class="token parameter">state</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> state<span class="token punctuation">.</span>sum <span class="token operator">*</span> <span class="token number">10</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>::: 在<code>store/index.js</code>中引入</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">//该文件用于创建Vuex中最为核心的store</span>
<span class="token keyword">import</span> Vue <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span>
<span class="token comment">//引入Vuex</span>
<span class="token keyword">import</span> Vuex <span class="token keyword">from</span> <span class="token string">&#39;vuex&#39;</span>
<span class="token comment">// 模块化</span>
<span class="token keyword">import</span> countOptions <span class="token keyword">from</span> <span class="token string">&#39;./count&#39;</span>
<span class="token keyword">import</span> personOptions <span class="token keyword">from</span> <span class="token string">&#39;./person&#39;</span>
<span class="token comment">//</span>
<span class="token comment">//应用Vuex插件</span>
Vue<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>Vuex<span class="token punctuation">)</span>

<span class="token comment">//创建并暴露store</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">new</span> <span class="token class-name">Vuex<span class="token punctuation">.</span>Store</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">modules</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">countAbout</span><span class="token operator">:</span> countOptions<span class="token punctuation">,</span>
    <span class="token literal-property property">personAbout</span><span class="token operator">:</span> personOptions<span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,22),r={id:"vue-router-4-x",tabindex:"-1"},d=n("a",{class:"header-anchor",href:"#vue-router-4-x","aria-hidden":"true"},"#",-1),k=s(`<h3 id="创建-stroe" tabindex="-1"><a class="header-anchor" href="#创建-stroe" aria-hidden="true">#</a> 创建 Stroe</h3><ol><li>Store/index.js</li></ol><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,3);function v(m,b){const a=i("Badge");return e(),p("div",null,[u,n("h2",r,[d,o(" vue-router 4.x "),c(a,{text:"4.x补充"})]),k])}const y=t(l,[["render",v],["__file","VueX.html.vue"]]);export{y as default};
