import{ac as t,H as o,I as l,G as n,U as e,O as p,ad as s,X as c}from"./framework-fadc5609.js";const i={},u=s(`<h2 id="简介" tabindex="-1"><a class="header-anchor" href="#简介" aria-hidden="true">#</a> 简介</h2><div class="hint-container warning"><p class="hint-container-title">注意</p><p>链表头就是一个<code>链表</code>，因为链表是一个串，你拿起来头，自然拿起来一串</p></div><p>多个元素组成的列表。</p><p>元素存储不连续，用 next 指针连在一起。</p><figure><img src="https://zfh-nanjing-bucket.oss-cn-nanjing.aliyuncs.com/blog-images/链表1.png" alt="链表1" tabindex="0"><figcaption>链表1</figcaption></figure><p>在数组中增删非首尾元素时往往需要移动元素，链表在增删非首尾元素，不需要移动元素，只需要更改 next 的指向即可。</p><p>js 中没有链表，需要用 Object 模拟:</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> a <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token literal-property property">val</span><span class="token operator">:</span> <span class="token string">&#39;a&#39;</span> <span class="token punctuation">}</span>
<span class="token keyword">const</span> b <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token literal-property property">val</span><span class="token operator">:</span> <span class="token string">&#39;b&#39;</span> <span class="token punctuation">}</span>
<span class="token keyword">const</span> c <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token literal-property property">val</span><span class="token operator">:</span> <span class="token string">&#39;c&#39;</span> <span class="token punctuation">}</span>
<span class="token keyword">const</span> d <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token literal-property property">val</span><span class="token operator">:</span> <span class="token string">&#39;d&#39;</span> <span class="token punctuation">}</span>

<span class="token comment">// 创建</span>
a<span class="token punctuation">.</span>next <span class="token operator">=</span> b
b<span class="token punctuation">.</span>next <span class="token operator">=</span> c
c<span class="token punctuation">.</span>next <span class="token operator">=</span> d

<span class="token comment">// 遍历</span>
<span class="token keyword">let</span> p <span class="token operator">=</span> a <span class="token comment">//声明一个指针指向a</span>
<span class="token keyword">while</span> <span class="token punctuation">(</span>p<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>p<span class="token punctuation">.</span>val<span class="token punctuation">)</span>
  p <span class="token operator">=</span> p<span class="token punctuation">.</span>next
<span class="token punctuation">}</span>
<span class="token comment">// 插入e</span>
<span class="token keyword">const</span> e <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token literal-property property">val</span><span class="token operator">:</span> <span class="token string">&#39;e&#39;</span> <span class="token punctuation">}</span>
c<span class="token punctuation">.</span>next <span class="token operator">=</span> e
e<span class="token punctuation">.</span>next <span class="token operator">=</span> d
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span>
<span class="token comment">// 删除e</span>
c<span class="token punctuation">.</span>next <span class="token operator">=</span> d
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="leetcode-237-删除链表中的节点" tabindex="-1"><a class="header-anchor" href="#leetcode-237-删除链表中的节点" aria-hidden="true">#</a> LeetCode：237.删除链表中的节点</h2>`,9),d={href:"https://leetcode-cn.com/problems/delete-node-in-a-linked-list/",target:"_blank",rel:"noopener noreferrer"},r=s(`<ul><li>解题思路</li></ul><p>无法直接获取被删除节点的上个节点</p><p>把要删除的下个结点的值赋给被删除节点，然后将被删除节点的下一节点删除</p><p>比如 1-2-3-4 要删除 3，先 1-2-4-4 然后删除最后一个 4，最后变成 1-2-4</p><ul><li>解题步骤</li></ul><p>将被删节点的值改为下个节点的值。</p><p>删除下个节点。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">/*
 * @lc app=leetcode.cn id=237 lang=javascript
 *
 * [237] 删除链表中的节点
 */</span>

<span class="token comment">// @lc code=start</span>
<span class="token doc-comment comment">/**
 * Definition for singly-linked list.
 * function ListNode(val) <span class="token punctuation">{</span>
 *     this.val = val;
 *     this.next = null;
 * <span class="token punctuation">}</span>
 */</span>
<span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>ListNode<span class="token punctuation">}</span></span> <span class="token parameter">node</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span><span class="token keyword">void</span><span class="token punctuation">}</span></span> Do not return anything, modify node in-place instead.
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">deleteNode</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">node</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  node<span class="token punctuation">.</span>val <span class="token operator">=</span> node<span class="token punctuation">.</span>next<span class="token punctuation">.</span>val
  node<span class="token punctuation">.</span>next <span class="token operator">=</span> node<span class="token punctuation">.</span>next<span class="token punctuation">.</span>next
<span class="token punctuation">}</span>
<span class="token comment">// @lc code=end</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="leetcode-206-反转链表" tabindex="-1"><a class="header-anchor" href="#leetcode-206-反转链表" aria-hidden="true">#</a> LeetCode：206.反转链表</h2>`,9),k={href:"https://leetcode-cn.com/problems/reverse-linked-list/",target:"_blank",rel:"noopener noreferrer"},v=s(`<ul><li>解题思路</li></ul><p>反转两个节点：将 n+1 的 next 指向 n</p><p>反转多个节点：双指针遍历链表，重复上述操作。</p><ul><li>解题步骤</li></ul><p>双指针一前一后遍历链表。</p><p>反转双指针。</p><details class="hint-container details"><summary>解法一</summary><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">/*
 * @lc app=leetcode.cn id=206 lang=javascript
 *
 * [206] 反转链表
 */</span>

<span class="token comment">// @lc code=start</span>
<span class="token doc-comment comment">/**
 * Definition for singly-linked list.
 * function ListNode(val, next) <span class="token punctuation">{</span>
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * <span class="token punctuation">}</span>
 */</span>
<span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>ListNode<span class="token punctuation">}</span></span> <span class="token parameter">head</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>ListNode<span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">reverseList</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">head</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">let</span> <span class="token punctuation">[</span>p1<span class="token punctuation">,</span> p2<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span>head<span class="token punctuation">,</span> <span class="token keyword">null</span><span class="token punctuation">]</span>
  <span class="token keyword">while</span> <span class="token punctuation">(</span>p1<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> tmp <span class="token operator">=</span> p1<span class="token punctuation">.</span>next
    p1<span class="token punctuation">.</span>next <span class="token operator">=</span> p2
    p2 <span class="token operator">=</span> p1
    p1 <span class="token operator">=</span> tmp
  <span class="token punctuation">}</span>
  <span class="token keyword">return</span> p2
<span class="token punctuation">}</span>
<span class="token comment">// @lc code=end</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details><details class="hint-container details"><summary>解法二</summary><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">/*
 * @lc app=leetcode.cn id=206 lang=javascript
 *
 * [206] 反转链表
 */</span>

<span class="token comment">// @lc code=start</span>
<span class="token doc-comment comment">/**
 * Definition for singly-linked list.
 * function ListNode(val, next) <span class="token punctuation">{</span>
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * <span class="token punctuation">}</span>
 */</span>
<span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>ListNode<span class="token punctuation">}</span></span> <span class="token parameter">head</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>ListNode<span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">reverseList</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">head</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">let</span> <span class="token punctuation">[</span>p1<span class="token punctuation">,</span> p2<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span>head<span class="token punctuation">,</span> <span class="token keyword">null</span><span class="token punctuation">]</span>
  <span class="token keyword">while</span> <span class="token punctuation">(</span>p1<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token punctuation">;</span><span class="token punctuation">[</span>p1<span class="token punctuation">.</span>next<span class="token punctuation">,</span> p2<span class="token punctuation">,</span> p1<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span>p2<span class="token punctuation">,</span> p1<span class="token punctuation">,</span> p1<span class="token punctuation">.</span>next<span class="token punctuation">]</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">return</span> p2
<span class="token punctuation">}</span>
<span class="token comment">// @lc code=end</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details><h2 id="leetcode-2-两数相加" tabindex="-1"><a class="header-anchor" href="#leetcode-2-两数相加" aria-hidden="true">#</a> LeetCode：2. 两数相加</h2>`,9),m={href:"https://leetcode-cn.com/problems/add-two-numbers/",target:"_blank",rel:"noopener noreferrer"},b=s(`<ul><li>解题思路</li></ul><p>小学数学题，模拟相加操作</p><p>需要遍历链表</p><ul><li>解题步骤</li></ul><p>新建一个空链表</p><p>遍历被相加的两个链表，模拟相加操作，将个位数追加到新链表上，将十位数留到下一位去相加</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">/*
 * @lc app=leetcode.cn id=2 lang=javascript
 *
 * [2] 两数相加
 */</span>

<span class="token comment">// @lc code=start</span>
<span class="token doc-comment comment">/**
 * Definition for singly-linked list.
 * function ListNode(val, next) <span class="token punctuation">{</span>
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * <span class="token punctuation">}</span>
 */</span>
<span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>ListNode<span class="token punctuation">}</span></span> <span class="token parameter">l1</span>
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>ListNode<span class="token punctuation">}</span></span> <span class="token parameter">l2</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>ListNode<span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">addTwoNumbers</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">l1<span class="token punctuation">,</span> l2</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">let</span> l3 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ListNode</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token keyword">let</span> <span class="token punctuation">[</span>p1<span class="token punctuation">,</span> p2<span class="token punctuation">,</span> p3<span class="token punctuation">,</span> carry<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span>l1<span class="token punctuation">,</span> l2<span class="token punctuation">,</span> l3<span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">]</span>
  <span class="token keyword">while</span> <span class="token punctuation">(</span>p1 <span class="token operator">||</span> p2<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> v1 <span class="token operator">=</span> p1 <span class="token operator">?</span> p1<span class="token punctuation">.</span>val <span class="token operator">:</span> <span class="token number">0</span>
    <span class="token keyword">let</span> v2 <span class="token operator">=</span> p2 <span class="token operator">?</span> p2<span class="token punctuation">.</span>val <span class="token operator">:</span> <span class="token number">0</span>
    <span class="token keyword">let</span> val <span class="token operator">=</span> v1 <span class="token operator">+</span> v2 <span class="token operator">+</span> carry
    carry <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">floor</span><span class="token punctuation">(</span>val <span class="token operator">/</span> <span class="token number">10</span><span class="token punctuation">)</span>
    p3<span class="token punctuation">.</span>next <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ListNode</span><span class="token punctuation">(</span>val <span class="token operator">%</span> <span class="token number">10</span><span class="token punctuation">)</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>p1<span class="token punctuation">)</span> p1 <span class="token operator">=</span> p1<span class="token punctuation">.</span>next
    <span class="token keyword">if</span> <span class="token punctuation">(</span>p2<span class="token punctuation">)</span> p2 <span class="token operator">=</span> p2<span class="token punctuation">.</span>next
    p3 <span class="token operator">=</span> p3<span class="token punctuation">.</span>next
  <span class="token punctuation">}</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>carry<span class="token punctuation">)</span> p3<span class="token punctuation">.</span>next <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ListNode</span><span class="token punctuation">(</span>carry<span class="token punctuation">)</span>
  <span class="token keyword">return</span> l3<span class="token punctuation">.</span>next
<span class="token punctuation">}</span>
<span class="token comment">// @lc code=end</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="leetcode-83-删除排序链表中的重复元素" tabindex="-1"><a class="header-anchor" href="#leetcode-83-删除排序链表中的重复元素" aria-hidden="true">#</a> LeetCode：83. 删除排序链表中的重复元素</h2>`,8),h={href:"https://leetcode-cn.com/problems/remove-duplicates-from-sorted-list/",target:"_blank",rel:"noopener noreferrer"},f=s(`<ul><li><p>解题思路</p><p>因为链表是有序的，所以重复元素一定相邻</p><p>遍历链表，如果发现当前元素和下个元素值相同，就删除下个元素值</p></li><li><p>解题步骤</p></li></ul><p>遍历链表，如果发现当前元素和下个元素值相同，就删除下个元素值</p><p>遍历结束后，直接返回原链表的头部(head)</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">/*
 * @lc app=leetcode.cn id=83 lang=javascript
 *
 * [83] 删除排序链表中的重复元素
 */</span>

<span class="token comment">// @lc code=start</span>
<span class="token doc-comment comment">/**
 * Definition for singly-linked list.
 * function ListNode(val, next) <span class="token punctuation">{</span>
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * <span class="token punctuation">}</span>
 */</span>
<span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>ListNode<span class="token punctuation">}</span></span> <span class="token parameter">head</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>ListNode<span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">deleteDuplicates</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">head</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">let</span> p1 <span class="token operator">=</span> head
  <span class="token keyword">while</span> <span class="token punctuation">(</span>p1 <span class="token operator">&amp;&amp;</span> p1<span class="token punctuation">.</span>next<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>p1<span class="token punctuation">.</span>val <span class="token operator">===</span> p1<span class="token punctuation">.</span>next<span class="token punctuation">.</span>val<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      p1<span class="token punctuation">.</span>next <span class="token operator">=</span> p1<span class="token punctuation">.</span>next<span class="token punctuation">.</span>next
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
      p1 <span class="token operator">=</span> p1<span class="token punctuation">.</span>next
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">return</span> head
<span class="token punctuation">}</span>
<span class="token comment">// @lc code=end</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="leetcode-141-环形链表" tabindex="-1"><a class="header-anchor" href="#leetcode-141-环形链表" aria-hidden="true">#</a> LeetCode：141. 环形链表</h2>`,5),y={href:"https://leetcode-cn.com/problems/linked-list-cycle/",target:"_blank",rel:"noopener noreferrer"},g=s(`<ul><li>解题思路</li></ul><p>两个人在圆形操场上的起点同时起跑，速度快的人一定会超过速度慢的人一圈</p><p>用一快一慢两个指针遍历链表，如果指针能够相逢，那么链表就有圈。</p><figure><img src="https://zfh-nanjing-bucket.oss-cn-nanjing.aliyuncs.com/blog-images/环形链表.png" alt="环形链表" tabindex="0"><figcaption>环形链表</figcaption></figure><ul><li>解题步骤</li></ul><p>用一快一慢两个指针遍历链表，如果指针能够相逢，就返回 true。</p><p>遍历结束后，还没有相逢就返回 false。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">/*
 * @lc app=leetcode.cn id=141 lang=javascript
 *
 * [141] 环形链表
 */</span>

<span class="token comment">// @lc code=start</span>
<span class="token doc-comment comment">/**
 * Definition for singly-linked list.
 * function ListNode(val) <span class="token punctuation">{</span>
 *     this.val = val;
 *     this.next = null;
 * <span class="token punctuation">}</span>
 */</span>

<span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>ListNode<span class="token punctuation">}</span></span> <span class="token parameter">head</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>boolean<span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">hasCycle</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">head</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">let</span> <span class="token punctuation">[</span>slow<span class="token punctuation">,</span> fast<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span>head<span class="token punctuation">,</span> head<span class="token punctuation">]</span>
  <span class="token keyword">while</span> <span class="token punctuation">(</span>slow <span class="token operator">&amp;&amp;</span> fast <span class="token operator">&amp;&amp;</span> fast<span class="token punctuation">.</span>next<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    slow <span class="token operator">=</span> slow<span class="token punctuation">.</span>next
    fast <span class="token operator">=</span> fast<span class="token punctuation">.</span>next<span class="token punctuation">.</span>next
    <span class="token keyword">if</span> <span class="token punctuation">(</span>slow <span class="token operator">===</span> fast<span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token boolean">true</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">return</span> <span class="token boolean">false</span>
<span class="token punctuation">}</span>
<span class="token comment">// @lc code=end</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="leetcode-234-回文链表" tabindex="-1"><a class="header-anchor" href="#leetcode-234-回文链表" aria-hidden="true">#</a> LeetCode： 234. 回文链表</h2>`,9),w={href:"https://leetcode-cn.com/problems/palindrome-linked-list/",target:"_blank",rel:"noopener noreferrer"},x=s(`<ul><li>解题思路</li></ul><p>回文就是反转以后和以前一样的就是回文结构，例如 1-&gt;2-&gt;3-&gt;2-&gt;1，我们将它反转之后还是与原链表一样，我们就称这种链表结构为回文结构</p><ul><li>解题步骤</li></ul><p><strong>快慢指针</strong>，起初都指向表头，快指针一次走两步，慢指针一次走一步，遍历结束时：</p><p>要么，slow 正好指向中间两个结点的后一个。</p><p>要么，slow 正好指向中间结点。</p><p>用 prev 保存 slow 的前一个结点，通过<code>prev.next = null</code>断成两个链表。</p><p>将后半段链表翻转(<strong>参考 leetcode.206</strong>)，和前半段从头比对。</p><figure><img src="https://zfh-nanjing-bucket.oss-cn-nanjing.aliyuncs.com/blog-images/回文链表.png" alt="回文链表" tabindex="0"><figcaption>回文链表</figcaption></figure><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">/*
 * @lc app=leetcode.cn id=234 lang=javascript
 *
 * [234] 回文链表
 */</span>

<span class="token comment">// @lc code=start</span>
<span class="token doc-comment comment">/**
 * Definition for singly-linked list.
 * function ListNode(val, next) <span class="token punctuation">{</span>
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * <span class="token punctuation">}</span>
 */</span>
<span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>ListNode<span class="token punctuation">}</span></span> <span class="token parameter">head</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>boolean<span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">isPalindrome</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">head</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// 链表只有一个节点的情况</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>head<span class="token punctuation">.</span>next <span class="token operator">==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token boolean">true</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">let</span> <span class="token punctuation">[</span>fast<span class="token punctuation">,</span> slow<span class="token punctuation">,</span> prev<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span>head<span class="token punctuation">,</span> head<span class="token punctuation">,</span> <span class="token keyword">null</span><span class="token punctuation">]</span>
  <span class="token keyword">while</span> <span class="token punctuation">(</span>fast <span class="token operator">&amp;&amp;</span> fast<span class="token punctuation">.</span>next<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    prev <span class="token operator">=</span> slow
    slow <span class="token operator">=</span> slow<span class="token punctuation">.</span>next
    fast <span class="token operator">=</span> fast<span class="token punctuation">.</span>next<span class="token punctuation">.</span>next
  <span class="token punctuation">}</span>
  <span class="token comment">// 断成两个链表</span>
  prev<span class="token punctuation">.</span>next <span class="token operator">=</span> <span class="token keyword">null</span>
  <span class="token comment">// 翻转后半段</span>
  <span class="token keyword">let</span> head2 <span class="token operator">=</span> <span class="token keyword">null</span>
  <span class="token keyword">while</span> <span class="token punctuation">(</span>slow<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 解构赋值，不用使用临时变量</span>
    <span class="token comment">// ;[slow.next, head2, slow] = [head2, slow, slow.next]</span>
    <span class="token keyword">let</span> temp <span class="token operator">=</span> slow<span class="token punctuation">.</span>next
    slow<span class="token punctuation">.</span>next <span class="token operator">=</span> head2
    head2 <span class="token operator">=</span> slow
    slow <span class="token operator">=</span> temp
  <span class="token punctuation">}</span>
  <span class="token comment">// 前后两段进行比较</span>
  <span class="token keyword">while</span> <span class="token punctuation">(</span>head <span class="token operator">&amp;&amp;</span> head2<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>head<span class="token punctuation">.</span>val <span class="token operator">!==</span> head2<span class="token punctuation">.</span>val<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> <span class="token boolean">false</span>
    <span class="token punctuation">}</span>
    head <span class="token operator">=</span> head<span class="token punctuation">.</span>next
    head2 <span class="token operator">=</span> head2<span class="token punctuation">.</span>next
  <span class="token punctuation">}</span>
  <span class="token keyword">return</span> <span class="token boolean">true</span>
<span class="token punctuation">}</span>
<span class="token comment">// @lc code=end</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="前端与链表-js-中的原型链" tabindex="-1"><a class="header-anchor" href="#前端与链表-js-中的原型链" aria-hidden="true">#</a> 前端与链表：JS 中的原型链</h2><p><strong>原型链的本质是<code>链表</code></strong>。</p><p>原型链上的节点是各种原型对象， 比如 <code>Function.prototype</code>、 <code>Object.prototype</code>……</p><p>原型链通过<code>__proto__</code>属性连接各种原型对象。</p><h3 id="面试题-instanceof-的原理-并用代码实现。" tabindex="-1"><a class="header-anchor" href="#面试题-instanceof-的原理-并用代码实现。" aria-hidden="true">#</a> 面试题：instanceof 的原理，并用代码实现。</h3><p>知识点：如果 A 沿着原型链能找到<code>B.prototype</code>，那么<code>A instanceof B</code>为 true。</p><p>解法：遍历 A 的原型链，如果找到<code>B.prototype</code>，返回 true，否则返回 false</p><h3 id="面试题-看输出" tabindex="-1"><a class="header-anchor" href="#面试题-看输出" aria-hidden="true">#</a> 面试题：看输出</h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> foo <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
<span class="token function-variable function">F</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
<span class="token class-name">Object</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span>a <span class="token operator">=</span> <span class="token string">&#39;value a&#39;</span>
<span class="token class-name">Function</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span>b <span class="token operator">=</span> <span class="token string">&#39;value b&#39;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>foo<span class="token punctuation">.</span>a<span class="token punctuation">)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>foo<span class="token punctuation">.</span>b<span class="token punctuation">)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token constant">F</span><span class="token punctuation">.</span>b<span class="token punctuation">)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token constant">F</span><span class="token punctuation">.</span>b<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>知识点：如果在 A 对象上没有找到 ⅹ 属性，那么会沿着原型链找 ⅹ 属性。</p><p>解法：明确 foo 和 F 变量的原型链，沿着原型链找 a 属性和 b 属性。</p><figure><img src="https://zfh-nanjing-bucket.oss-cn-nanjing.aliyuncs.com/blog-images/链表面试题2.png" alt="链表面试题2" tabindex="0"><figcaption>链表面试题2</figcaption></figure><h2 id="前端与链表-使用链表指针获取-json-的节点值" tabindex="-1"><a class="header-anchor" href="#前端与链表-使用链表指针获取-json-的节点值" aria-hidden="true">#</a> 前端与链表：使用链表指针获取 JSON 的节点值</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> json <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">a</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token literal-property property">b</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token literal-property property">c</span><span class="token operator">:</span> <span class="token number">1</span> <span class="token punctuation">}</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">d</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token literal-property property">e</span><span class="token operator">:</span> <span class="token number">2</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
<span class="token keyword">const</span> path <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">&#39;d&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;e&#39;</span><span class="token punctuation">]</span>

<span class="token keyword">let</span> p <span class="token operator">=</span> json

path<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">k</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  p <span class="token operator">=</span> p<span class="token punctuation">[</span>k<span class="token punctuation">]</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,24);function j(_,L){const a=c("ExternalLinkIcon");return o(),l("div",null,[u,n("p",null,[n("a",d,[e("LeetCode：237.删除链表中的节点"),p(a)])]),r,n("p",null,[n("a",k,[e("LeetCode：206.反转链表"),p(a)])]),v,n("p",null,[n("a",m,[e("LeetCode：2. 两数相加"),p(a)])]),b,n("p",null,[n("a",h,[e("LeetCode：83. 删除排序链表中的重复元素"),p(a)])]),f,n("p",null,[n("a",y,[e("LeetCode：141. 环形链表"),p(a)])]),g,n("p",null,[n("a",w,[e("LeetCode： 234. 回文链表"),p(a)])]),x])}const C=t(i,[["render",j],["__file","链表.html.vue"]]);export{C as default};
