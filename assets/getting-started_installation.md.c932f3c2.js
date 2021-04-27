import{o as n,c as s,d as a}from"./app.9234a040.js";const t='{"title":"Installation","description":"","frontmatter":{},"headers":[{"level":2,"title":"Just import and use it (Recommended)","slug":"just-import-and-use-it-recommended"},{"level":2,"title":"Use it as a plugin","slug":"use-it-as-a-plugin"},{"level":2,"title":"Use it as a injection token","slug":"use-it-as-a-injection-token"}],"relativePath":"getting-started/installation.md","lastUpdated":1617295313981}',p={},o=a('<h1 id="installation"><a class="header-anchor" href="#installation" aria-hidden="true">#</a> Installation</h1><p>With NPM:</p><div class="language-bash"><pre><code>$ <span class="token function">npm</span> <span class="token function">install</span> mosha-vue-toastify\n</code></pre></div><p>With Yarn:</p><div class="language-bash"><pre><code>$ <span class="token function">yarn</span> <span class="token function">add</span> mosha-vue-toastify\n</code></pre></div><h2 id="just-import-and-use-it-recommended"><a class="header-anchor" href="#just-import-and-use-it-recommended" aria-hidden="true">#</a> Just import and use it (Recommended)</h2><p>Get your toast working real quick! fast and easy!</p><div class="language-html"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>toast<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>Toast it!<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>\n</code></pre></div><div class="language-ts"><pre><code><span class="token operator">&lt;</span>script lang<span class="token operator">=</span><span class="token string">&#39;ts&#39;</span><span class="token operator">&gt;</span>\n<span class="token keyword">import</span> <span class="token punctuation">{</span> defineComponent <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span>\n<span class="token keyword">import</span> <span class="token punctuation">{</span> createToast <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;mosha-vue-toastify&#39;</span><span class="token punctuation">;</span>\n<span class="token keyword">import</span> <span class="token string">&#39;mosha-vue-toastify/dist/style.css&#39;</span>\n\n<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineComponent</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n  name<span class="token operator">:</span> <span class="token string">&#39;HelloWorld&#39;</span><span class="token punctuation">,</span>\n  <span class="token function">setup</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">const</span> <span class="token function-variable function">toast</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>\n        <span class="token function">createToast</span><span class="token punctuation">(</span><span class="token string">&#39;Wow, easy&#39;</span><span class="token punctuation">)</span>\n    <span class="token punctuation">}</span>\n    <span class="token keyword">return</span> <span class="token punctuation">{</span> toast <span class="token punctuation">}</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span>\n<span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">&gt;</span>\n</code></pre></div><h2 id="use-it-as-a-plugin"><a class="header-anchor" href="#use-it-as-a-plugin" aria-hidden="true">#</a> Use it as a plugin</h2><div class="language-ts"><pre><code><span class="token comment">/* main.ts */</span>\n<span class="token keyword">import</span> <span class="token punctuation">{</span> createApp <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span>\n<span class="token keyword">import</span> App <span class="token keyword">from</span> <span class="token string">&#39;./App.vue&#39;</span>\n<span class="token keyword">import</span> moshaToast <span class="token keyword">from</span> <span class="token string">&#39;mosha-vue-toastify&#39;</span>\n<span class="token keyword">import</span> <span class="token string">&#39;mosha-vue-toastify/dist/style.css&#39;</span>\n\n<span class="token keyword">const</span> app <span class="token operator">=</span> <span class="token function">createApp</span><span class="token punctuation">(</span>App<span class="token punctuation">)</span>\napp<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>moshaToast<span class="token punctuation">)</span>\napp<span class="token punctuation">.</span><span class="token function">mount</span><span class="token punctuation">(</span><span class="token string">&#39;#app&#39;</span><span class="token punctuation">)</span>\n</code></pre></div><div class="language-ts"><pre><code><span class="token operator">&lt;</span>script lang<span class="token operator">=</span><span class="token string">&quot;ts&quot;</span><span class="token operator">&gt;</span>\n<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineComponent</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n  name<span class="token operator">:</span> <span class="token string">&#39;HelloWorld&#39;</span><span class="token punctuation">,</span>\n  methods<span class="token operator">:</span> <span class="token punctuation">{</span>\n    <span class="token function">run</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n      <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">$moshaToast</span><span class="token punctuation">(</span><span class="token string">&#39;Hmm..not as easy huh&#39;</span><span class="token punctuation">)</span>\n    <span class="token punctuation">}</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span>\n<span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">&gt;</span>\n</code></pre></div><h2 id="use-it-as-a-injection-token"><a class="header-anchor" href="#use-it-as-a-injection-token" aria-hidden="true">#</a> Use it as a injection token</h2><div class="language-ts"><pre><code><span class="token comment">/* main.ts */</span>\n<span class="token keyword">import</span> <span class="token punctuation">{</span> createApp <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span>\n<span class="token keyword">import</span> App <span class="token keyword">from</span> <span class="token string">&#39;./App.vue&#39;</span>\n<span class="token keyword">import</span> moshaToast <span class="token keyword">from</span> <span class="token string">&#39;mosha-vue-toastify&#39;</span>\n<span class="token keyword">import</span> <span class="token string">&#39;mosha-vue-toastify/dist/style.css&#39;</span>\n\n<span class="token keyword">const</span> app <span class="token operator">=</span> <span class="token function">createApp</span><span class="token punctuation">(</span>App<span class="token punctuation">)</span>\napp<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>moshaToast<span class="token punctuation">)</span>\napp<span class="token punctuation">.</span><span class="token function">mount</span><span class="token punctuation">(</span><span class="token string">&#39;#app&#39;</span><span class="token punctuation">)</span>\n</code></pre></div><div class="language-ts"><pre><code><span class="token operator">&lt;</span>script lang<span class="token operator">=</span><span class="token string">&quot;ts&quot;</span><span class="token operator">&gt;</span>\n<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineComponent</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n  name<span class="token operator">:</span> <span class="token string">&#39;HelloWorld&#39;</span><span class="token punctuation">,</span>\n  inject<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;moshaToast&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>\n  methods<span class="token operator">:</span> <span class="token punctuation">{</span>\n    <span class="token function">run</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n      <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">moshaToast</span><span class="token punctuation">(</span><span class="token string">&#39;hmm..not as easy huh&#39;</span><span class="token punctuation">)</span>\n    <span class="token punctuation">}</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span>\n<span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">&gt;</span>\n</code></pre></div>',15);p.render=function(a,t,p,e,c,l){return n(),s("div",null,[o])};export default p;export{t as __pageData};
