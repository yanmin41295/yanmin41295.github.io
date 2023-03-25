import{aQ as c,Q as o,S as v,af as i,U as n,ad as e,V as d,C as l}from"./framework-f0f169cb.js";const r={},u=n("h1",{id:"总结",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#总结","aria-hidden":"true"},"#"),e(" 总结")],-1),m=d(`<p>leetcode 调试工具，后期考虑做成idea插件卖钱</p><p>滑动窗口问题： 适用于子数组子序列的问题</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>/* 滑动窗口算法框架 */
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>二叉树算法总结</p>`,4),b={href:"https://labuladong.gitee.io/algo/di-ling-zh-bfe1b/hui-su-sua-c26da/",target:"_blank",rel:"noopener noreferrer"},p={href:"https://labuladong.gitee.io/algo/di-ling-zh-bfe1b/dong-tai-g-1e688/",target:"_blank",rel:"noopener noreferrer"},g=d(`<p>遍历是对当前节点做操作，回溯是对左右子树做操作，然后将左右子树结果集合并</p><p>1。回溯算法</p><p>使用一个外部变量记录每个节点的计算结果值，再从计算结果集中找出符合条件的结果，这一步可以在遍历树节点时同时更新，也可以遍历完树节点后再计算</p><p>1.前序遍历、中序遍历、后序遍历的选择</p><p>先要算出父节点的结果，子节点的值依赖于父节点则前序；</p><p>先要算出子节点的结果，父节点的值依赖于子节点则后序；</p><p>config</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>D:\\GitHub\\algocode\\src\\main\\java

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

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,12);function _(h,f){const a=l("DynamicTable"),t=l("counter"),s=l("ExternalLinkIcon");return o(),v("div",null,[u,i(a),i(t),m,n("p",null,[e("** 二叉树题目的递归解法可以分两类思路，第一类是遍历一遍二叉树得出答案，第二类是通过分解问题计算出答案，这两类思路分别对应着 "),n("a",b,[e("回溯算法核心框架"),i(s)]),e(" 和 "),n("a",p,[e("动态规划核心框架"),i(s)]),e("** 。")]),g])}const x=c(r,[["render",_],["__file","-1.html.vue"]]);export{x as default};
