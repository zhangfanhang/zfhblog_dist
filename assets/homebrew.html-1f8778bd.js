import{ac as l,H as t,I as o,G as n,U as s,O as a,ad as i,X as r}from"./framework-fadc5609.js";const c={},d=i(`<p>Homebrew 是一款 Mac OS 平台下的软件包管理工具，拥有安装、卸载、更新、查看、搜索等很多实用的功能。简单的一条指令，就可以实现包管理，而不用你关心各种依赖和文件路径的情况，十分方便快捷。例如 homebrew 可以快速安装 git,nvm,mysql,mongodb 等开发工具</p><h2 id="安装" tabindex="-1"><a class="header-anchor" href="#安装" aria-hidden="true">#</a> 安装</h2><p><code>homebrew</code>使用脚本安装:</p><ol><li><s>国内脚本：有莫名其妙的 BUG</s></li></ol><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>/bin/zsh <span class="token parameter variable">-c</span> <span class="token string">&quot;<span class="token variable"><span class="token variable">$(</span><span class="token function">curl</span> <span class="token parameter variable">-fsSL</span> https://gitee.com/cunkai/HomebrewCN/raw/master/Homebrew.sh<span class="token variable">)</span></span>&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ol start="2"><li>科学环境推荐官方脚本：</li></ol><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>/bin/bash <span class="token parameter variable">-c</span> <span class="token string">&quot;<span class="token variable"><span class="token variable">$(</span><span class="token function">curl</span> <span class="token parameter variable">-fsSL</span> https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh<span class="token variable">)</span></span>&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ol start="3"><li>mac 国内第三方卸载脚本：</li></ol><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>/bin/zsh <span class="token parameter variable">-c</span> <span class="token string">&quot;<span class="token variable"><span class="token variable">$(</span><span class="token function">curl</span> <span class="token parameter variable">-fsSL</span> https://gitee.com/cunkai/HomebrewCN/raw/master/HomebrewUninstall.sh<span class="token variable">)</span></span>&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ol start="4"><li>mac 官方卸载脚本：</li></ol><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code> /bin/bash <span class="token parameter variable">-c</span> <span class="token string">&quot;<span class="token variable"><span class="token variable">$(</span><span class="token function">curl</span> <span class="token parameter variable">-fsSL</span> https://raw.githubusercontent.com/Homebrew/install/HEAD/uninstall.sh<span class="token variable">)</span></span>&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="报错" tabindex="-1"><a class="header-anchor" href="#报错" aria-hidden="true">#</a> 报错</h2><div class="hint-container warning"><p class="hint-container-title">注意</p><p>使用国内脚本安装，可能会遇到此问题。使用官方脚本无此问题</p></div><p>fatal: not in a git directory Error: Command failed with exit 128: git</p><p><strong>解决办法</strong>：执行 brew -v 命令看看是不是有两个提示，你的 homebrew-core 和 homebrew-cask 目录被 git 认为不是一个安全的目录，需要手动添加 git config --global --add safe.directory 你的 homebrew-core 路径 git config --global --add safe.directory 你的 homebrew-cask 路径</p><h2 id="注意" tabindex="-1"><a class="header-anchor" href="#注意" aria-hidden="true">#</a> 注意</h2><div class="hint-container tip"><p class="hint-container-title">提示</p><p>使用 brew uninstall git 卸载软件只会卸载软件本身而不会同时卸载其依赖包，使用以下命令可完全卸载，并且不会影响到其他软件。需要科学上网！</p><p><code>brew tap beeftornado/rmtree</code></p><p>结束后执行如下命令即可完全卸载软件。</p><p><code>brew rmtree git</code></p></div><h2 id="mysql" tabindex="-1"><a class="header-anchor" href="#mysql" aria-hidden="true">#</a> mysql</h2>`,18),p={href:"https://blog.csdn.net/x123089/article/details/79729563",target:"_blank",rel:"noopener noreferrer"},u=i(`<p>通过 homebrew 安装：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>brew <span class="token function">install</span> mysql
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>启动 mysql 服务：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>mysql.server start
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>设置 mysql:</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>mysql_secure_installation
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>,出现以下提示:</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>Securing the MySQL server deployment.

Connecting to MySQL using a blank password.
//验证密码插件可以用来测试密码和提高安全性。它检查密码的强度，并允许用户只设置那些足够安全的密码。你愿意安装验证密码插件吗?
VALIDATE PASSWORD PLUGIN can be used to <span class="token builtin class-name">test</span> passwords
and improve security. It checks the strength of password
and allows the <span class="token function">users</span> to <span class="token builtin class-name">set</span> only those passwords <span class="token function">which</span> are
secure enough. Would you like to setup VALIDATE PASSWORD plugin?
//在下边的问题中输入y或者Y,输入其他的都表示为否
Press y<span class="token operator">|</span>Y <span class="token keyword">for</span> Yes, any other key <span class="token keyword">for</span> No:y

// 密码验证策略有三个级别:
// 低长度<span class="token operator">&gt;</span> <span class="token operator">=</span> <span class="token number">8</span>
// 中长度<span class="token operator">&gt;=</span> <span class="token number">8</span>，数字，混合情况，和特殊字符。
// 强长度<span class="token operator">&gt;=</span> <span class="token number">8</span>，数字，混合情况，特殊字符和字典文件。

There are three levels of password validation policy:

LOW    Length <span class="token operator">&gt;=</span> <span class="token number">8</span>
MEDIUM Length <span class="token operator">&gt;=</span> <span class="token number">8</span>, numeric, mixed case, and special characters
STRONG Length <span class="token operator">&gt;=</span> <span class="token number">8</span>, numeric, mixed case, special characters and dictionary <span class="token function">file</span>

// <span class="token number">0,1</span>,2分别代表3个不同的级别,看自己的生产环境需要的密码需求

Please enter <span class="token number">0</span> <span class="token operator">=</span> LOW, <span class="token number">1</span> <span class="token operator">=</span> MEDIUM and <span class="token number">2</span> <span class="token operator">=</span> STRONG:0

// 请在这里设置root的密码。
// 新密码:
// 重新输入新密码:
// 估计密码强度:50。

// 您希望继续提供密码吗?<span class="token punctuation">(</span>请按y<span class="token operator">|</span> y为Yes，任何其他关键字<span class="token punctuation">)</span>:


Please <span class="token builtin class-name">set</span> the password <span class="token keyword">for</span> root here.

New password:

Re-enter new password:

Estimated strength of the password: <span class="token number">50</span>
Do you wish to <span class="token builtin class-name">continue</span> with the password provided?<span class="token punctuation">(</span>Press y<span class="token operator">|</span>Y <span class="token keyword">for</span> Yes, any other key <span class="token keyword">for</span> No<span class="token punctuation">)</span> :y

// 默认情况下，MySQL安装有匿名用户，
// 允许任何人在不需要的情况下登录MySQL。
// 为它们创建的用户帐户。这仅仅是为了。
// 测试，并使安装更加顺利。
// 在开始生产之前，你应该把它们去掉。
// 环境。
// 删除匿名用户?<span class="token punctuation">(</span>请按y<span class="token operator">|</span> y为Yes，任何其他关键字<span class="token punctuation">)</span>:

By default, a MySQL installation has an anonymous user,
allowing anyone to log into MySQL without having to have
a user account created <span class="token keyword">for</span> them. This is intended only <span class="token keyword">for</span>
testing, and to <span class="token function">make</span> the installation go a bit smoother.
You should remove them before moving into a production
environment.

Remove anonymous users? <span class="token punctuation">(</span>Press y<span class="token operator">|</span>Y <span class="token keyword">for</span> Yes, any other key <span class="token keyword">for</span> No<span class="token punctuation">)</span> :y

// 成功。
// 通常，根应该只允许连接。
// “localhost”。这确保了某人无法猜测。
// 来自网络的根密码。
// 不允许远程root登录吗?<span class="token punctuation">(</span>请按y<span class="token operator">|</span> y为Yes，任何其他关键字<span class="token punctuation">)</span>:
// 这里表示是否允许远程登录root用户,我这里是测试环境,选择键入Y

Success.

Normally, root should only be allowed to connect from
<span class="token string">&#39;localhost&#39;</span><span class="token builtin class-name">.</span> This ensures that someone cannot guess at
the root password from the network.

Disallow root login remotely? <span class="token punctuation">(</span>Press y<span class="token operator">|</span>Y <span class="token keyword">for</span> Yes, any other key <span class="token keyword">for</span> No<span class="token punctuation">)</span> :y

成功。

// 默认情况下，MySQL附带一个名为“test”的数据库。
// 任何人都可以访问。这也只用于测试，
// 在开始生产之前应该将其移除。
// 环境。
// 这里提示是否删除mysql的test数据库


删除测试数据库并访问它?<span class="token punctuation">(</span>请按y<span class="token operator">|</span> y为Yes，任何其他关键字<span class="token punctuation">)</span>:

Success.

By default, MySQL comes with a database named <span class="token string">&#39;test&#39;</span> that
anyone can access. This is also intended only <span class="token keyword">for</span> testing,
and should be removed before moving into a production
environment.


Remove <span class="token builtin class-name">test</span> database and access to it? <span class="token punctuation">(</span>Press y<span class="token operator">|</span>Y <span class="token keyword">for</span> Yes, any other key <span class="token keyword">for</span> No<span class="token punctuation">)</span> :y


// ——删除测试数据库……
// 成功。
// -删除测试数据库上的特权…
// 成功。
// 重新加载特权表将确保所有更改。
// 到目前为止，将立即生效。
// 现在重新加载权限表吗?<span class="token punctuation">(</span>请按y<span class="token operator">|</span> y为Yes，任何其他关键字<span class="token punctuation">)</span>:
- Dropping <span class="token builtin class-name">test</span> database<span class="token punctuation">..</span>.
Success.

 - Removing privileges on <span class="token builtin class-name">test</span> database<span class="token punctuation">..</span>.
Success.

Reloading the privilege tables will ensure that all changes
made so far will take effect immediately.

Reload privilege tables now? <span class="token punctuation">(</span>Press y<span class="token operator">|</span>Y <span class="token keyword">for</span> Yes, any other key <span class="token keyword">for</span> No<span class="token punctuation">)</span> :y


Success.
//出现此消息,说明mysql设置成功,请牢记输入的mysql密码
All done<span class="token operator">!</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>登录 mysql 进行测试:</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>mysql <span class="token parameter variable">-u</span> root <span class="token parameter variable">-p</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="git" tabindex="-1"><a class="header-anchor" href="#git" aria-hidden="true">#</a> git</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>brew <span class="token function">install</span> <span class="token function">git</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="nvm" tabindex="-1"><a class="header-anchor" href="#nvm" aria-hidden="true">#</a> nvm</h2><p><a href="/node%E6%8A%80%E6%9C%AF%E6%A0%88/node%E5%9F%BA%E7%A1%80%E7%9F%A5%E8%AF%86&amp;%E5%B7%A5%E5%85%B7#nvm">更多细节</a></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>brew <span class="token function">install</span> nvm
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="mongodb" tabindex="-1"><a class="header-anchor" href="#mongodb" aria-hidden="true">#</a> mongodb</h2><ol><li>brew tap mongodb/brew</li><li>brew install mongodb-community</li><li>启动：brew services start mongodb-community</li><li>停止 ：brew services stop mongodb-community</li></ol>`,17),v={href:"https://www.jianshu.com/p/8db0b29a931d",target:"_blank",rel:"noopener noreferrer"},m={href:"https://github.com/mongodb/homebrew-brew",target:"_blank",rel:"noopener noreferrer"},b=n("h2",{id:"fd",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#fd","aria-hidden":"true"},"#"),s(" fd")],-1),h=n("code",null,"everything",-1),k={href:"https://github.com/sharkdp/fd",target:"_blank",rel:"noopener noreferrer"},g=n("h2",{id:"autojump",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#autojump","aria-hidden":"true"},"#"),s(" autojump")],-1),f={href:"https://github.com/wting/autojump",target:"_blank",rel:"noopener noreferrer"},y=i(`<div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># .zshrc</span>
 <span class="token punctuation">[</span> <span class="token parameter variable">-f</span> /opt/homebrew/etc/profile.d/autojump.sh <span class="token punctuation">]</span> <span class="token operator">&amp;&amp;</span> <span class="token builtin class-name">.</span> /opt/homebrew/etc/profile.d/autojump.sh
<span class="token assign-left variable">fpath</span><span class="token operator">=</span><span class="token punctuation">(</span><span class="token variable">$fpath</span> <span class="token string">&quot;/Users/frank/.zfunctions&quot;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="zsh-syntax-highlighting" tabindex="-1"><a class="header-anchor" href="#zsh-syntax-highlighting" aria-hidden="true">#</a> zsh-syntax-highlighting</h2>`,2),q={href:"https://github.com/zsh-users/zsh-syntax-highlighting",target:"_blank",rel:"noopener noreferrer"},w=i(`<div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># .zshrc</span>
<span class="token builtin class-name">source</span> /opt/homebrew/share/zsh-syntax-highlighting/zsh-syntax-highlighting.zsh
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="neofetch" tabindex="-1"><a class="header-anchor" href="#neofetch" aria-hidden="true">#</a> neofetch</h2><p>终端显示设备信息</p><p>配置中文：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>~/.config/neofetch/config.conf
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 复制下面内容到上面的配置文件中</span>
<span class="token function-name function">print_info</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    info title
    info underline
	<span class="token comment">#OS</span>
    info <span class="token string">&quot;操作系统&quot;</span> distro
    <span class="token comment">#Host</span>
    info <span class="token string">&quot;型　　号&quot;</span> model
    <span class="token comment">#Kernel</span>
    info <span class="token string">&quot;内核版本&quot;</span> kernel
    <span class="token comment">#Uptime</span>
    info <span class="token string">&quot;开机时间&quot;</span> <span class="token function">uptime</span>

    prin <span class="token string">&quot;当前时间&quot;</span> <span class="token string">&quot;<span class="token variable"><span class="token variable">$(</span><span class="token function">date</span> +%Y年%m月%d<span class="token string">&quot;日 &quot;</span>%H时%M分%S秒<span class="token variable">)</span></span>&quot;</span>
    <span class="token comment">#Packages</span>
    <span class="token comment">#info &quot;Packages&quot; packages</span>
    info <span class="token string">&quot;S h e ll&quot;</span> shell
    <span class="token comment">#Resolution</span>
    info <span class="token string">&quot;分  辨  率&quot;</span> resolution
    <span class="token comment">#info &quot;DE&quot; de</span>
    <span class="token comment">#info &quot;WM&quot; wm</span>
    <span class="token comment">#WM Theme</span>
    info <span class="token string">&quot;主　　题&quot;</span> wm_theme
    info <span class="token string">&quot;Theme&quot;</span> theme
    info <span class="token string">&quot;Icons&quot;</span> icons
    <span class="token comment">#Terminal</span>
    info <span class="token string">&quot;终　　端&quot;</span> term
    <span class="token comment">#Terminal Font</span>
    info <span class="token string">&quot;终端字体&quot;</span> term_font
    <span class="token comment">#CPU</span>
    info <span class="token string">&quot;处  理  器&quot;</span> cpu
    <span class="token comment">#GPU</span>
    info <span class="token string">&quot;显卡设备&quot;</span> gpu
    <span class="token comment">#Memory</span>
    info <span class="token string">&quot;内　　存&quot;</span> memory
    <span class="token comment">#info &quot;GPU Driver&quot; gpu_driver  # Linux/macOS only</span>
    <span class="token comment"># CPU Usage</span>
    info <span class="token string">&quot;CPU 已用&quot;</span> cpu_usage
    <span class="token comment">#info &quot;Disk&quot; disk</span>
    <span class="token comment">#Battery</span>
    info <span class="token string">&quot;剩余电量&quot;</span> battery
    <span class="token comment"># info &quot;Font&quot; font</span>
    <span class="token comment"># info &quot;Song&quot; song</span>
    <span class="token comment"># [[ &quot;$player&quot; ]] &amp;&amp; prin &quot;Music Player&quot; &quot;$player&quot;</span>
    <span class="token comment"># 本地IP</span>
    info <span class="token string">&quot;内  网  IP&quot;</span> local_ip
    <span class="token comment">#Public IP</span>
    info <span class="token string">&quot;公  网  IP&quot;</span> public_ip
    <span class="token comment">#Users</span>
    <span class="token comment">#info &quot;用户&quot; users</span>
    <span class="token comment">#Locale</span>
    info <span class="token string">&quot;语　　言&quot;</span> locale  <span class="token comment"># This only works on glibc systems.</span>
    <span class="token comment">#info cols</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="https://zfh-nanjing-bucket.oss-cn-nanjing.aliyuncs.com/blog-images/neofetch.png" alt="neofetch" tabindex="0"><figcaption>neofetch效果图</figcaption></figure><h2 id="tree" tabindex="-1"><a class="header-anchor" href="#tree" aria-hidden="true">#</a> tree</h2><p>用于生成文件夹树形结构图</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>├── App.jsx
├── AsyncData.jsx
├── store
│   ├── Count
│   │   ├── actionCreators.js
│   │   ├── constants.js
│   │   ├── index.js
│   │   └── reducer.js
│   ├── Data
│   │   ├── actionCreators.js
│   │   ├── constants.js
│   │   ├── index.js
│   │   └── reducer.js
│   ├── index.js
│   └── reducer.js
├── tree.txt
└── utils
    ├── connect.js
    └── context.js
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,10);function x(_,S){const e=r("ExternalLinkIcon");return t(),o("div",null,[d,n("p",null,[n("a",p,[s("安装教程"),a(e)])]),u,n("p",null,[n("a",v,[s("安装教程"),a(e)])]),n("p",null,[n("a",m,[s("github"),a(e)])]),b,n("p",null,[s("检索文件工具，速度较快，比"),h,s("还是差一点,"),n("a",k,[s("github"),a(e)])]),g,n("p",null,[n("a",f,[s("autojump"),a(e)]),s(",快速跳转目录(只能跳转已经 cd 过的目录)")]),y,n("p",null,[n("a",q,[s("zsh-syntax-highlighting"),a(e)]),s(":高亮终端的代码")]),w])}const L=l(c,[["render",x],["__file","homebrew.html.vue"]]);export{L as default};
