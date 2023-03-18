import{_ as t,W as l,X as p,Y as s,Z as n,$ as e,a2 as i,C as o}from"./framework-6199cc12.js";const c={},u=i(`<h1 id="第零章-核心框架汇总" tabindex="-1"><a class="header-anchor" href="#第零章-核心框架汇总" aria-hidden="true">#</a> 第零章：核心框架汇总</h1><h2 id="学习算法和刷题的框架思维" tabindex="-1"><a class="header-anchor" href="#学习算法和刷题的框架思维" aria-hidden="true">#</a> 学习算法和刷题的框架思维</h2><h3 id="一、数据结构的存储方式" tabindex="-1"><a class="header-anchor" href="#一、数据结构的存储方式" aria-hidden="true">#</a> 一、数据结构的存储方式</h3><ul><li>只有两种：数组（顺序存储）、链表（链式存储）</li><li>其他多样化的数据结构散列表、栈、队列、堆、树、图等都是以数组和链表为基础</li><li>数组存在扩容问题，在中间插入数据效率低问题</li><li>链表存在不能随机查找，必须遍历匹配的问题</li></ul><h3 id="二、数据结构的基本操作" tabindex="-1"><a class="header-anchor" href="#二、数据结构的基本操作" aria-hidden="true">#</a> 二、数据结构的基本操作</h3><ul><li>任何数据结构的基本操作是遍历+访问，存在的目的是尽可能高效的增删查改</li><li>遍历和访问的两种形式：线性和非线性</li></ul><blockquote><p>线性就是for/while迭代为代表，非线性就是递归为代表</p></blockquote><ol><li>数组遍历框架</li></ol><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">class</span> <span class="token class-name">Main</span> <span class="token punctuation">{</span>
    <span class="token comment">// 线性迭代结构</span>
    <span class="token keyword">void</span> <span class="token function">travel</span><span class="token punctuation">(</span><span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span> arr<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> index <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> index <span class="token operator">&lt;</span> arr<span class="token punctuation">.</span>length<span class="token punctuation">;</span> index<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token comment">// 迭代访问或修改 arr[index]</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token comment">// 递归迭代结构</span>
    <span class="token keyword">void</span> <span class="token function">travel</span><span class="token punctuation">(</span><span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span> arr<span class="token punctuation">,</span> <span class="token keyword">int</span> index<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>index <span class="token operator">&gt;=</span> arr<span class="token punctuation">.</span>length<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token comment">// 前序递归访问或修改  arr[index]</span>
        <span class="token function">travel</span><span class="token punctuation">(</span>arr<span class="token punctuation">,</span> index <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">// 后序递归访问或修改  arr[index]</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>2.链表遍历框架</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">class</span> <span class="token class-name">ListNode</span> <span class="token punctuation">{</span>
    <span class="token keyword">int</span> val<span class="token punctuation">;</span>
    <span class="token class-name">ListNode</span> next<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">Main</span> <span class="token punctuation">{</span>
    <span class="token comment">// 线性迭代结构</span>
    <span class="token keyword">void</span> <span class="token function">travel</span><span class="token punctuation">(</span><span class="token class-name">ListNode</span> head<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">while</span> <span class="token punctuation">(</span>head <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token comment">// 访问 head.val</span>
            head <span class="token operator">=</span> head<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token comment">//或者：</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token punctuation">;</span> head <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">;</span> head <span class="token operator">=</span> head<span class="token punctuation">.</span>next<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token comment">// 访问 head.val</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token comment">// 递归迭代结构</span>
    <span class="token keyword">void</span> <span class="token function">travel</span><span class="token punctuation">(</span><span class="token class-name">ListNode</span> head<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>head <span class="token operator">==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token comment">// 前序访问 head.val</span>
        <span class="token function">travel</span><span class="token punctuation">(</span>head<span class="token punctuation">.</span>next<span class="token punctuation">)</span>
        <span class="token comment">// 后序访问 head.val</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>3.二叉树递归迭代</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">class</span> <span class="token class-name">TreeNode</span> <span class="token punctuation">{</span>
    <span class="token keyword">int</span> val<span class="token punctuation">;</span>
    <span class="token class-name">TreeNode</span> left<span class="token punctuation">;</span>
    <span class="token class-name">TreeNode</span> right<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">Main</span> <span class="token punctuation">{</span>
    <span class="token keyword">void</span> <span class="token function">travel</span><span class="token punctuation">(</span><span class="token class-name">TreeNode</span> root<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>root <span class="token operator">==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token comment">// 前序访问修改root.val</span>
        <span class="token function">travel</span><span class="token punctuation">(</span>root<span class="token punctuation">.</span>left<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">// 中序访问修改root.val</span>
        <span class="token function">travel</span><span class="token punctuation">(</span>root<span class="token punctuation">.</span>right<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">// 后序访问修改root.val</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="4"><li>多叉树递归迭代</li></ol><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">class</span> <span class="token class-name">TreeNode</span> <span class="token punctuation">{</span>
    <span class="token keyword">int</span> val<span class="token punctuation">;</span>
    <span class="token class-name">TreeNode</span><span class="token punctuation">[</span><span class="token punctuation">]</span> child<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">Main</span> <span class="token punctuation">{</span>
    <span class="token keyword">void</span> <span class="token function">travel</span><span class="token punctuation">(</span><span class="token class-name">TreeNode</span> root<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>root <span class="token operator">==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token comment">// 前序遍历修改root.val</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token class-name">TreeNode</span> child <span class="token operator">:</span> root<span class="token punctuation">.</span>children<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token function">traverse</span><span class="token punctuation">(</span>child<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token comment">// 后序遍历修改root.val</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>



</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="5"><li>图的遍历 图的本质是多叉树成环，需要额外的空间存储标记已访问节点避免成环访问</li></ol><h2 id="我的刷题心得" tabindex="-1"><a class="header-anchor" href="#我的刷题心得" aria-hidden="true">#</a> 我的刷题心得</h2><h3 id="一、算法的本质就是穷举-穷举有两个关键难点" tabindex="-1"><a class="header-anchor" href="#一、算法的本质就是穷举-穷举有两个关键难点" aria-hidden="true">#</a> 一、算法的本质就是穷举 穷举有两个关键难点：</h3><ul><li>1.如何无遗漏的穷举</li></ul><blockquote><p>一般是递归性问题，比如动态规划：先写出暴力穷举算法（状态转移方程），加上备忘录成了自顶向下的递归解法，再修改就成自底向上的递推解法</p></blockquote><ul><li>2.如何聪明的穷举：对某些情况</li></ul><blockquote><p>一般是非递归性问题，比如用并查集替代暴力搜索的连通性问题，贪心算法贪心选择避免穷举所有解，KMP算法缓存复用一些信息避免冗余计算</p></blockquote><h3 id="二、数组单链表系列算法" tabindex="-1"><a class="header-anchor" href="#二、数组单链表系列算法" aria-hidden="true">#</a> 二、数组单链表系列算法</h3><p>1.单链表：</p><blockquote><p>双指针、快慢指针</p></blockquote><ol start="2"><li>数组：</li></ol><blockquote><ul><li>双指针</li><li>二分搜索（可以理解为两端向中间收缩的双指针）</li><li>滑动窗口（典型的快慢指针，解决子串问题，但必须明确什么时候扩大窗口，什么时候收缩窗口）</li><li>回文串技巧</li><li>前缀技巧（前缀和用于频繁计算子数组和）</li><li>差分数组技巧（频繁对子数组进行增减操作）</li></ul></blockquote><p>3.二叉树算法</p><blockquote><p><strong>递归解法可以分两类思路</strong></p><ul><li>回溯算法（遍历一遍二叉树得到答案）</li></ul></blockquote><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">class</span> <span class="token class-name">Solution</span> <span class="token punctuation">{</span>

    <span class="token comment">// 记录最大深度</span>
    <span class="token comment">// 中间状态和最终状态可以是同一个变量维护，只要能达到一致性的效果</span>
    <span class="token keyword">int</span> res <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
    <span class="token keyword">int</span> depth <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>

    <span class="token comment">// 主函数</span>
    <span class="token keyword">int</span> <span class="token function">maxDepth</span><span class="token punctuation">(</span><span class="token class-name">TreeNode</span> root<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token function">traverse</span><span class="token punctuation">(</span>root<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> res<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">// 二叉树遍历框架</span>
    <span class="token keyword">void</span> <span class="token function">traverse</span><span class="token punctuation">(</span><span class="token class-name">TreeNode</span> root<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>root <span class="token operator">==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token comment">// 到达叶子节点</span>
            res <span class="token operator">=</span> <span class="token class-name">Math</span><span class="token punctuation">.</span><span class="token function">max</span><span class="token punctuation">(</span>res<span class="token punctuation">,</span> depth<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//需要根据中间状态计算最终结果</span>
            <span class="token keyword">return</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token comment">// 前序遍历位置 </span>
        depth<span class="token operator">++</span><span class="token punctuation">;</span>  <span class="token comment">//需要更新中间状态</span>
        <span class="token function">traverse</span><span class="token punctuation">(</span>root<span class="token punctuation">.</span>left<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token function">traverse</span><span class="token punctuation">(</span>root<span class="token punctuation">.</span>right<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">// 后序遍历位置</span>
        depth<span class="token operator">--</span><span class="token punctuation">;</span><span class="token comment">//需要回滚中间状态</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><ul><li>动态规划（分解问题计算得到答案）</li></ul></blockquote><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">class</span> <span class="token class-name">Main</span> <span class="token punctuation">{</span>
    <span class="token comment">// 定义：输入根节点，返回这棵二叉树的最大深度</span>
    <span class="token keyword">int</span> <span class="token function">maxDepth</span><span class="token punctuation">(</span><span class="token class-name">TreeNode</span> root<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>root <span class="token operator">==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token comment">// 递归计算左右子树的最大深度</span>
        <span class="token keyword">int</span> leftMax <span class="token operator">=</span> <span class="token function">maxDepth</span><span class="token punctuation">(</span>root<span class="token punctuation">.</span>left<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">int</span> rightMax <span class="token operator">=</span> <span class="token function">maxDepth</span><span class="token punctuation">(</span>root<span class="token punctuation">.</span>right<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">// 从当前问题的子问题的解得到反推当前问题的解，再返回给父问题，一般配合后序遍历实现</span>
        <span class="token keyword">int</span> res <span class="token operator">=</span> <span class="token class-name">Math</span><span class="token punctuation">.</span><span class="token function">max</span><span class="token punctuation">(</span>leftMax<span class="token punctuation">,</span> rightMax<span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">;</span>

        <span class="token keyword">return</span> res<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>leetcode 调试工具，后期考虑做成idea插件卖钱</p><p>滑动窗口问题： 适用于子数组子序列的问题</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>/* 滑动窗口算法框架 */
void slidingWindow(string s) {
    unordered_map&lt;char, int&gt; window;
    
    int left = 0, right = 0;
    while (right &lt; s.size()) {
        // c 是将移入窗口的字符
        char c = s[right];
        // 增大窗口
        right++;
        // 进行窗口内数据的一系列更新
        ...

        /*** debug 输出的位置 ***/
        // 注意在最终的解法代码中不要 print
        // 因为 IO 操作很耗时，可能导致超时
        printf(&quot;window: [%d, %d)\\n&quot;, left, right);
        /********************/
        
        // 判断左侧窗口是否要收缩
        while (window needs shrink) {
            // d 是将移出窗口的字符
            char d = s[left];
            // 缩小窗口
            left++;
            // 进行窗口内数据的一系列更新
            ...
        }
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>二叉树算法总结</p>`,36),d={href:"https://labuladong.gitee.io/algo/di-ling-zh-bfe1b/hui-su-sua-c26da/",target:"_blank",rel:"noopener noreferrer"},r={href:"https://labuladong.gitee.io/algo/di-ling-zh-bfe1b/dong-tai-g-1e688/",target:"_blank",rel:"noopener noreferrer"},v=i(`<p>遍历是对当前节点做操作，回溯是对左右子树做操作，然后将左右子树结果集合并</p><p>1。回溯算法</p><p>使用一个外部变量记录每个节点的计算结果值，再从计算结果集中找出符合条件的结果，这一步可以在遍历树节点时同时更新，也可以遍历完树节点后再计算</p><p>1.前序遍历、中序遍历、后序遍历的选择</p><p>先要算出父节点的结果，子节点的值依赖于父节点则前序；</p><p>先要算出子节点的结果，父节点的值依赖于子节点则后序；</p><p>config</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>D:\\GitHub\\algocode\\src\\main\\java

$!velocityTool.camelCaseName(\${question.titleSlug})_\${question.frontendQuestionId}

\${question.content}
 
package leetcode.editor.cn;

public class $!velocityTool.camelCaseName(\${question.titleSlug})_\${question.frontendQuestionId}{
    public static void main(String[] args) {
        Solution solution = new $!velocityTool.camelCaseName(\${question.titleSlug})_\${question.frontendQuestionId}().new Solution();
  
    }
    \${question.code}
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>图的算法：</p><ol><li>dfs、bfs</li><li>路劲查找</li><li>有向图是否成环、拓扑排序</li><li>加权无向图最小生成树</li><li>加权有向图最短路径</li></ol><p>config</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>D:\\GitHub\\algocode\\src\\main\\java

$\${question.frontendQuestionId}_$!velocityTool.camelCaseName(\${question.titleSlug})


 
package leetcode.editor.cn;

public class \${question.frontendQuestionId}_$!velocityTool.camelCaseName(\${question.titleSlug}){
    public static void main(String[] args) {
        Solution solution = new \${question.frontendQuestionId}_$!velocityTool.camelCaseName(\${question.titleSlug})().new Solution();
  
    }
    $!velocityTool.formatContent(\${question.content})
    \${question.code}
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,12);function k(m,b){const a=o("ExternalLinkIcon");return l(),p("div",null,[u,s("p",null,[n("** 二叉树题目的递归解法可以分两类思路，第一类是遍历一遍二叉树得出答案，第二类是通过分解问题计算出答案，这两类思路分别对应着 "),s("a",d,[n("回溯算法核心框架"),e(a)]),n(" 和 "),s("a",r,[n("动态规划核心框架"),e(a)]),n("** 。")]),v])}const g=t(c,[["render",k],["__file","0.html.vue"]]);export{g as default};
