import{ac as n,H as s,I as a,ad as p}from"./framework-fadc5609.js";const e={},t=p(`<h2 id="几何体顶点" tabindex="-1"><a class="header-anchor" href="#几何体顶点" aria-hidden="true">#</a> 几何体顶点</h2><p><code>attributes.position</code> 代表顶点的位置</p><p>控制台输出物体的 <code>attributes.position</code> 属性发现一个四面体有 24 个顶点</p><p>四面体不是只有 8 个顶点吗？</p><p>在 <code>threejs</code> 中顶点代表的是组成一个面的两个三角形的顶点，一个三角形有 3 个顶点，所以一个面有 6 个顶点</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> geometry <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">THREE<span class="token punctuation">.</span>BufferGeometry</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token comment">// 创建一个简单的矩形. 在这里我们左上和右下顶点被复制了两次</span>
<span class="token comment">// 因为在两个三角面片里，这两个顶点都需要被用到</span>
<span class="token keyword">const</span> vertices <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Float32Array</span><span class="token punctuation">(</span><span class="token punctuation">[</span>
  <span class="token operator">-</span><span class="token number">1.0</span><span class="token punctuation">,</span> <span class="token operator">-</span><span class="token number">1.0</span><span class="token punctuation">,</span> <span class="token number">1.0</span><span class="token punctuation">,</span> <span class="token number">1.0</span><span class="token punctuation">,</span> <span class="token operator">-</span><span class="token number">1.0</span><span class="token punctuation">,</span> <span class="token number">1.0</span><span class="token punctuation">,</span> <span class="token number">1.0</span><span class="token punctuation">,</span> <span class="token number">1.0</span><span class="token punctuation">,</span> <span class="token number">1.0</span><span class="token punctuation">,</span>

  <span class="token number">1.0</span><span class="token punctuation">,</span> <span class="token number">1.0</span><span class="token punctuation">,</span> <span class="token number">1.0</span><span class="token punctuation">,</span> <span class="token operator">-</span><span class="token number">1.0</span><span class="token punctuation">,</span> <span class="token number">1.0</span><span class="token punctuation">,</span> <span class="token number">1.0</span><span class="token punctuation">,</span> <span class="token operator">-</span><span class="token number">1.0</span><span class="token punctuation">,</span> <span class="token operator">-</span><span class="token number">1.0</span><span class="token punctuation">,</span> <span class="token number">1.0</span><span class="token punctuation">,</span>
<span class="token punctuation">]</span><span class="token punctuation">)</span>
geometry<span class="token punctuation">.</span><span class="token function">setAttribute</span><span class="token punctuation">(</span><span class="token string">&#39;position&#39;</span><span class="token punctuation">,</span> <span class="token keyword">new</span> <span class="token class-name">THREE<span class="token punctuation">.</span>BufferAttribute</span><span class="token punctuation">(</span>vertices<span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> material <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">THREE<span class="token punctuation">.</span>MeshBasicMaterial</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">color</span><span class="token operator">:</span> <span class="token number">0xff0000</span> <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> mesh <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">THREE<span class="token punctuation">.</span>Mesh</span><span class="token punctuation">(</span>geometry<span class="token punctuation">,</span> material<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="uv" tabindex="-1"><a class="header-anchor" href="#uv" aria-hidden="true">#</a> uv</h2><p>三维建模中的<code>UV</code>可理解为立体模型的“皮肤”，将“皮肤”展开然后进行二维平面上的绘制</p><p><code>UV</code>这里是指 <code>u</code>,<code>v</code> 纹理贴图坐标的简称(它和空间模型的 <code>X</code>,<code>Y</code>, <code>Z</code> 轴是类似的)</p><p>它定义了图片上每个点的位置的信息. 这些点与 3D 模型是相互联系的, 以决定表面纹理贴图的位置</p><h2 id="法向" tabindex="-1"><a class="header-anchor" href="#法向" aria-hidden="true">#</a> 法向</h2><p>在从字面理解，法向即法线的方向，与切向，即切线的方向垂直。切向和法向都是相对于界面、轨迹等而言的。</p><h2 id="案例" tabindex="-1"><a class="header-anchor" href="#案例" aria-hidden="true">#</a> 案例</h2><p>显卡毁灭者:随机生成99999个三角形</p><div class="hint-container danger"><p class="hint-container-title">警告</p><p>容易造成浏览器卡死</p></div><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token operator">*</span> <span class="token keyword">as</span> <span class="token constant">THREE</span> <span class="token keyword">from</span> <span class="token string">&#39;three&#39;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> OrbitControls <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;three/examples/jsm/controls/OrbitControls&#39;</span>

<span class="token comment">// 创建场景</span>
<span class="token keyword">const</span> scene <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">THREE<span class="token punctuation">.</span>Scene</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token comment">// 创建相机</span>
<span class="token keyword">const</span> camera <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">THREE<span class="token punctuation">.</span>PerspectiveCamera</span><span class="token punctuation">(</span>
  <span class="token number">75</span><span class="token punctuation">,</span>
  window<span class="token punctuation">.</span>innerWidth <span class="token operator">/</span> window<span class="token punctuation">.</span>innerHeight<span class="token punctuation">,</span>
  <span class="token number">0.1</span><span class="token punctuation">,</span>
  <span class="token number">1000</span>
<span class="token punctuation">)</span>

<span class="token comment">// 设置相机位置</span>
camera<span class="token punctuation">.</span>position<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">)</span>
scene<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>camera<span class="token punctuation">)</span>

<span class="token comment">// 随机创建50个三角形</span>
<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token number">99999</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> geometry <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">THREE<span class="token punctuation">.</span>BufferGeometry</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token keyword">const</span> positionArr <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Float32Array</span><span class="token punctuation">(</span><span class="token number">9</span><span class="token punctuation">)</span>
  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> j <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> j <span class="token operator">&lt;</span> <span class="token number">9</span><span class="token punctuation">;</span> j<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    positionArr<span class="token punctuation">[</span>j<span class="token punctuation">]</span> <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">random</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
  geometry<span class="token punctuation">.</span><span class="token function">setAttribute</span><span class="token punctuation">(</span><span class="token string">&#39;position&#39;</span><span class="token punctuation">,</span> <span class="token keyword">new</span> <span class="token class-name">THREE<span class="token punctuation">.</span>BufferAttribute</span><span class="token punctuation">(</span>positionArr<span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
  <span class="token keyword">const</span> color <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">THREE<span class="token punctuation">.</span>Color</span><span class="token punctuation">(</span>Math<span class="token punctuation">.</span><span class="token function">random</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> Math<span class="token punctuation">.</span><span class="token function">random</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> Math<span class="token punctuation">.</span><span class="token function">random</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
  <span class="token keyword">const</span> material <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">THREE<span class="token punctuation">.</span>MeshBasicMaterial</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">color</span><span class="token operator">:</span> color <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token keyword">const</span> mesh <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">THREE<span class="token punctuation">.</span>Mesh</span><span class="token punctuation">(</span>geometry<span class="token punctuation">,</span> material<span class="token punctuation">)</span>
  <span class="token comment">// 物体添加到添加场景</span>
  scene<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>mesh<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token comment">// 初始化渲染器</span>
<span class="token keyword">const</span> renderer <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">THREE<span class="token punctuation">.</span>WebGLRenderer</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token comment">// 设置渲染的尺寸大小</span>
renderer<span class="token punctuation">.</span><span class="token function">setSize</span><span class="token punctuation">(</span>window<span class="token punctuation">.</span>innerWidth<span class="token punctuation">,</span> window<span class="token punctuation">.</span>innerHeight<span class="token punctuation">)</span>
<span class="token comment">// 将webgl渲染的canvas内容添加到body</span>
document<span class="token punctuation">.</span>body<span class="token punctuation">.</span><span class="token function">appendChild</span><span class="token punctuation">(</span>renderer<span class="token punctuation">.</span>domElement<span class="token punctuation">)</span>

<span class="token comment">// 创建轨道控制器</span>
<span class="token keyword">const</span> controls <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">OrbitControls</span><span class="token punctuation">(</span>camera<span class="token punctuation">,</span> renderer<span class="token punctuation">.</span>domElement<span class="token punctuation">)</span>
<span class="token comment">// 阻尼效果</span>
controls<span class="token punctuation">.</span>enableDamping <span class="token operator">=</span> <span class="token boolean">true</span>

<span class="token comment">// 添加坐标轴辅助器</span>
<span class="token keyword">const</span> axesHelper <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">THREE<span class="token punctuation">.</span>AxesHelper</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">)</span>
<span class="token comment">// 将坐标轴辅助器添加到场景中</span>
scene<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>axesHelper<span class="token punctuation">)</span>

<span class="token comment">// 渲染函数</span>
<span class="token keyword">function</span> <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  renderer<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>scene<span class="token punctuation">,</span> camera<span class="token punctuation">)</span>
  <span class="token comment">//   渲染下一帧的时候就会调用render函数</span>
  <span class="token function">requestAnimationFrame</span><span class="token punctuation">(</span>render<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
<span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,16),o=[t];function c(l,i){return s(),a("div",null,o)}const r=n(e,[["render",c],["__file","Threejs物体.html.vue"]]);export{r as default};
