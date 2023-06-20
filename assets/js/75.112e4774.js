(window.webpackJsonp=window.webpackJsonp||[]).push([[75],{698:function(v,_,e){"use strict";e.r(_);var o=e(42),d=Object(o.a)({},(function(){var v=this,_=v.$createElement,e=v._self._c||_;return e("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[e("p"),e("div",{staticClass:"table-of-contents"},[e("ul",[e("li",[e("a",{attrs:{href:"#node-js的特点"}},[v._v("Node.js的特点")])]),e("li",[e("a",{attrs:{href:"#node-js的弊端"}},[v._v("Node.js的弊端")]),e("ul",[e("li",[e("a",{attrs:{href:"#单线程带来的弊端"}},[v._v("单线程带来的弊端")])]),e("li",[e("a",{attrs:{href:"#调试"}},[v._v("调试")])]),e("li",[e("a",{attrs:{href:"#node社区中的npm包"}},[v._v("Node社区中的npm包")])])])]),e("li",[e("a",{attrs:{href:"#node-js的应用场景"}},[v._v("Node.js的应用场景")])]),e("li",[e("a",{attrs:{href:"#哪些大公司在用"}},[v._v("哪些大公司在用")])])])]),e("p"),v._v(" "),e("p",[e("strong",[v._v("前言")])]),v._v(" "),e("p",[v._v("如果你有一定的前端基础，比如 "),e("code",[v._v("HTML、CSS、JavaScript、JQ、Vue")]),v._v("；那么，"),e("code",[v._v("Node.js")]),v._v(" 能让你以最低的成本快速过渡成为一个全栈工程师(我称这个全栈为伪全栈，我认为的全栈也要精通数据库，不喜勿喷)，从而触及后端和移动端的开发。当然，Node.js也不是万能的、也不是说学了它就可以完全取代后端的其他开发语言，它有自己的使命和擅长的应用领域。")]),v._v(" "),e("p",[v._v("除此之外现在非常火热的 "),e("code",[v._v("Vue.js，React.js")]),v._v(" ，等很多数据层动态交互优先选用了"),e("code",[v._v("Node.js")]),v._v("，一些比较流行的打包工具也是如此；综上，为你为什么要学习它又增加了一大理由。")]),v._v(" "),e("p",[e("code",[v._v("Node.js")]),v._v(" 和传统的后端语言（比如PHP、JAVA等）相比，各有优缺点，各自擅长领域和侧重点不同，因此，各有千秋、各有需求市场。"),e("code",[v._v("Node.js")]),v._v(" 让我们进行后端开发多了一种便捷的手段。所以大家也不要总说哪些语言是最好的，各有各的使命，嘿嘿。")]),v._v(" "),e("h2",{attrs:{id:"node-js的特点"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#node-js的特点"}},[v._v("#")]),v._v(" Node.js的特点")]),v._v(" "),e("h4",{attrs:{id:"非阻塞异步io"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#非阻塞异步io"}},[v._v("#")]),v._v(" 非阻塞异步io")]),v._v(" "),e("p",[v._v("例如，当在访问数据库取得数据的时候，需要一段时间。在传统的单线程处理机制中，在执行了访问数据库代码之后，整个线程都将暂停下来，等待数据库返回结果，才能执行后面的代码。也就是说，"),e("code",[v._v("I/O")]),v._v("阻塞了代码的执行，极大地降低了程序的执行效率。")]),v._v(" "),e("p",[v._v("由于 Node.js 中采用了非阻塞型"),e("code",[v._v("I/O")]),v._v("机制，因此在执行了访问数据库的代码之后，将立即转而执行其后面的代码，把数据库返回结果的处理代码放在回调函数中，从而提高了程序的执行效率。")]),v._v(" "),e("p",[v._v("当某个"),e("code",[v._v("I/O")]),v._v("执行完毕时，将以事件的形式通知执行"),e("code",[v._v("I/O")]),v._v("操作的线程，线程执行这个事件的回调函数。为了处理异步"),e("code",[v._v("I/O")]),v._v("，线程必须有事件循环，不断的检查有没有未处理的事件，依次予以处理。")]),v._v(" "),e("p",[v._v("阻塞模式下，一个线程只能处理一项任务，要想提高吞吐量必须通过多线程。而非阻塞模式下，一个线程永远在执行计算操作，这个线程的CPU核心利用率永远是100%。所以，这是一种特别有哲理的解决方案：与其人多，但是好多人闲着；还不如一个人玩命，往死里干活儿。")]),v._v(" "),e("h4",{attrs:{id:"单线程"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#单线程"}},[v._v("#")]),v._v(" 单线程")]),v._v(" "),e("p",[v._v("在 Java、PHP 或者 .net 等服务器端语言中，会为每一个客户端连接创建一个新的线程。而每个线程需要耗费大约2MB内存。也就是说，理论上，一个8GB内存的服务器可以同时连接的最大用户数为4000个左右。要让Web应用程序支持更多的用户，就需要增加服务器的数量，而 Web 应用程序的硬件成本当然就上升了。")]),v._v(" "),e("p",[v._v("Node.js不为每个客户连接创建一个新的线程，而仅仅使用一个线程。当有用户连接了，就触发一个内部事件，通过非阻塞"),e("code",[v._v("I/O、事件驱动机制")]),v._v("，让 Node.js 程序宏观上也是并行的。使用 Node.js ，一个8GB内存的服务器，可以同时处理超过4万用户的连接。")]),v._v(" "),e("p",[v._v("另外，单线程带来的好处，操作系统完全不再有线程创建、销毁的时间开销。但是单线程也有很多弊端，会在 Node.js 的弊端详细讲解，请继续看。")]),v._v(" "),e("h4",{attrs:{id:"事件驱动"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#事件驱动"}},[v._v("#")]),v._v(" 事件驱动")]),v._v(" "),e("p",[v._v("在 "),e("code",[v._v("Node.js")]),v._v(" 中，客户端请求建立连接，提交数据等行为，会触发相应的事件。在 "),e("code",[v._v("Node.js")]),v._v(" 中，在一个时刻，只能执行一个事件回调函数，但是在执行一个事件回调函数的中途，又有其他事件产生，可以转而处理其他事件（比如，又有新用户连接了），然后返回继续执行原事件的回调函数，这种处理机制，称为“"),e("strong",[v._v("事件环")]),v._v("”机制。")]),v._v(" "),e("p",[e("code",[v._v("Node.js")]),v._v(" 底层是 "),e("code",[v._v("C++")]),v._v("（"),e("code",[v._v("V8")]),v._v("也是C++写的）。底层代码中，近半数都用于事件队列、回调函数队列的构建。用事件驱动来完成服务器的任务调度，这是鬼才才能想到的。针尖上的舞蹈，用一个线程，担负起了处理非常多的任务的使命。")]),v._v(" "),e("p",[e("img",{attrs:{src:"http://img.xiaogangzai.cn/16c1a5d709d285e7.jpg",alt:""}})]),v._v(" "),e("p",[v._v("注意这里的事件循环，也可以说是 "),e("code",[v._v("Node.js")]),v._v(" 的一个精髓所在，下面引用一段 "),e("code",[v._v("Node.js")]),v._v(" 官网的内容")]),v._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[v._v("   ┌───────────────────────────┐\n┌─>│           timers          │\n│  └─────────────┬─────────────┘\n│  ┌─────────────┴─────────────┐\n│  │     pending callbacks     │\n│  └─────────────┬─────────────┘\n│  ┌─────────────┴─────────────┐\n│  │       idle, prepare       │\n│  └─────────────┬─────────────┘      ┌───────────────┐\n│  ┌─────────────┴─────────────┐      │   incoming:   │\n│  │           poll            │<─────┤  connections, │\n│  └─────────────┬─────────────┘      │   data, etc.  │\n│  ┌─────────────┴─────────────┐      └───────────────┘\n│  │           check           │\n│  └─────────────┬─────────────┘\n│  ┌─────────────┴─────────────┐\n└──┤      close callbacks      │\n   └───────────────────────────┘\n")])])]),e("p",[v._v("引用Node官网中的一段内容:")]),v._v(" "),e("blockquote",[e("p",[v._v("注意：每个框将被称为事件循环的“阶段”。\n每个阶段都有一个要执行的回调"),e("code",[v._v("FIFO")]),v._v("队列。虽然每个阶段都以其自己的方式特殊，但通常情况下，当事件循环进入给定阶段时，它将执行特定于该阶段的任何操作，然后在该阶段的队列中执行回调，直到队列耗尽或最大回调数量为止已执行。当队列耗尽或达到回调限制时，事件循环将移至下一阶段，依此类推。\n关于事件循环是一个核心点，经常会被面试官考具体执行输出的问题，大家可以看我的这篇文章")])]),v._v(" "),e("h4",{attrs:{id:"跨平台"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#跨平台"}},[v._v("#")]),v._v(" 跨平台")]),v._v(" "),e("p",[v._v("起初，"),e("code",[v._v("Node")]),v._v(" 只能在 "),e("code",[v._v("Linux")]),v._v(" 平台上运行。后来随着 "),e("code",[v._v("Node")]),v._v("的发展，微软注意到了它的存在，并投入了一个团队帮助 "),e("code",[v._v("Node")]),v._v(" 实现 "),e("code",[v._v("Windows")]),v._v(" 平台的兼容，在"),e("code",[v._v("v0.6.0")]),v._v("版本发布时，"),e("code",[v._v("Node")]),v._v(" 已经能够直接在 "),e("code",[v._v("Window")]),v._v(" 平台运行了。 Node 是基于"),e("code",[v._v("libuv")]),v._v("实现跨平台的。")]),v._v(" "),e("h2",{attrs:{id:"node-js的弊端"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#node-js的弊端"}},[v._v("#")]),v._v(" Node.js的弊端")]),v._v(" "),e("h3",{attrs:{id:"单线程带来的弊端"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#单线程带来的弊端"}},[v._v("#")]),v._v(" 单线程带来的弊端")]),v._v(" "),e("p",[v._v("Node.js中有一个特点就是单线程，它带来了很多好处，但是它也有弊端，单线程弱点如下。")]),v._v(" "),e("ol",[e("li",[v._v("无法利用多核CPU")]),v._v(" "),e("li",[v._v("错误会引起整个应用退出无法继续调用异步"),e("code",[v._v("I/O")])]),v._v(" "),e("li",[v._v("大量计算占用CPU导致无法继续调用异步"),e("code",[v._v("I/O")])])]),v._v(" "),e("p",[v._v("以上确实是Node的弊端，但是都会有一些对应的解决方案：")]),v._v(" "),e("p",[v._v("弊端1:解决方案")]),v._v(" "),e("ul",[e("li",[v._v("（1）一些管理工具比如"),e("code",[v._v("pm2，forever")]),v._v(" 等都可以实现创建多进程解决多核 CUP 的利用率问题。")]),v._v(" "),e("li",[v._v("（2）在v0.8版本之前，实现多进程可以使用"),e("code",[v._v("child_process")])]),v._v(" "),e("li",[v._v("（3）在v0.8版本之后，可以使用"),e("code",[v._v("cluster")]),v._v("模块，通过主从模式，创建多个工作进程解决多核CPU的利用率问题。")])]),v._v(" "),e("p",[v._v("弊端2:解决方案")]),v._v(" "),e("ul",[e("li",[v._v("（1）Nnigx反向代理，负载均衡，开多个进程，绑定多个端口；")]),v._v(" "),e("li",[v._v("（2） 一些管理工具比如"),e("code",[v._v("pm2，forever")]),v._v(" 等都可以实现进程监控，错误自动重启等")]),v._v(" "),e("li",[v._v("（3）开多个进程监听同一个端口，使用Node提供的"),e("code",[v._v("cluster")]),v._v("模块；")]),v._v(" "),e("li",[v._v("（4）未出现"),e("code",[v._v("cluster")]),v._v("之前，也可以使用"),e("code",[v._v("child_process")]),v._v(",创建多子线程监听一个端口。")]),v._v(" "),e("li",[v._v("（5）这里说明下，有上面的这些解决方案，但是写node后端代码的时候，异常抛出"),e("code",[v._v("try catch")]),v._v("显得格外有必要。")])]),v._v(" "),e("p",[v._v("弊端3:解决方案")]),v._v(" "),e("ul",[e("li",[v._v("（1）可以把大量的密集计算像上面一样拆分成多个子线程计算")]),v._v(" "),e("li",[v._v("但是如果不允许拆分，想计算100万的大数据，在一个单线程中，Node确实显得无能为力，这本身就是V8内存限制的弊端。")])]),v._v(" "),e("blockquote",[e("p",[v._v("说明：child_process与cluster模块我会单独拿一篇文章来讲。\n值得开心的是上面这些弊端随着Node的版本更新，和新的api模块出现，好像解决了这些弊端。")])]),v._v(" "),e("h3",{attrs:{id:"调试"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#调试"}},[v._v("#")]),v._v(" 调试")]),v._v(" "),e("p",[v._v("用过"),e("code",[v._v("node")]),v._v("的人可能第一时间就会想到"),e("code",[v._v("debug")]),v._v("太难了，没有"),e("code",[v._v("stack trace")]),v._v("，因此调试比较困难。")]),v._v(" "),e("h3",{attrs:{id:"node社区中的npm包"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#node社区中的npm包"}},[v._v("#")]),v._v(" Node社区中的npm包")]),v._v(" "),e("p",[e("code",[v._v("Node.js")]),v._v("社区有很多包品质良莠不齐、如果你想偷懒而又刚好"),e("code",[v._v("npm")]),v._v("了一个有问题的包你就很麻烦，因为代码是开源的，只能自己调试了。")]),v._v(" "),e("h2",{attrs:{id:"node-js的应用场景"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#node-js的应用场景"}},[v._v("#")]),v._v(" Node.js的应用场景")]),v._v(" "),e("p",[v._v("介绍了Node.js的特点和弊端，再说一下Node.js的应用场景。")]),v._v(" "),e("p",[v._v("Node.js适合用来开发什么样的应用程序呢？")]),v._v(" "),e("p",[v._v("善于"),e("code",[v._v("I/O")]),v._v("，不善于计算。因为"),e("code",[v._v("Node.js")]),v._v("最擅长的就是任务调度，如果你的业务有很多的 "),e("code",[v._v("CPU")]),v._v(" 计算，实际上也相当于这个计算阻塞了这个单线程，就不太适合Node开发，但是也不是没有解决方案，只是说不太适合。")]),v._v(" "),e("p",[v._v("当应用程序需要处理大量并发的"),e("code",[v._v("I/O")]),v._v("，而在向客户端发出响应之前，应用程序内部并不需要进行非常复杂的处理的时候，"),e("code",[v._v("Node.js")]),v._v("非常适合。"),e("code",[v._v("Node.js")]),v._v("也非常适合与"),e("code",[v._v("websocket")]),v._v("配合，开发长连接的实时交互应用程序。")]),v._v(" "),e("p",[v._v("具体场景可以表现为如下：")]),v._v(" "),e("ul",[e("li",[e("p",[v._v("第一大类：用户表单收集系统、后台管理系统、实时交互系统、考试系统、联网软件、高并发量的web应用程序；")])]),v._v(" "),e("li",[e("p",[v._v("第二大类：基于web、canvas等多人联网游戏；")])]),v._v(" "),e("li",[e("p",[v._v("第三大类：基于web的多人实时聊天客户端、聊天室、图文直播；")])]),v._v(" "),e("li",[e("p",[v._v("第四大类：单页面浏览器应用程序；")])]),v._v(" "),e("li",[e("p",[v._v("第五大类：操作数据库、为前端和移动端提供基于"),e("code",[v._v("json")]),v._v("的API；")])]),v._v(" "),e("li",[e("p",[v._v("第六大类，....")])])]),v._v(" "),e("h2",{attrs:{id:"哪些大公司在用"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#哪些大公司在用"}},[v._v("#")]),v._v(" 哪些大公司在用")]),v._v(" "),e("ul",[e("li",[v._v("雅虎：雅虎开放了"),e("code",[v._v("Cooktail")]),v._v("框架，将"),e("code",[v._v("YUI3")]),v._v("这个前端框架的能力借助Node延伸到了服务器端。")]),v._v(" "),e("li",[v._v("腾讯：将Node应用到长连接，以提供实时功能。")]),v._v(" "),e("li",[v._v("花瓣网，蘑菇街：通过"),e("code",[v._v("socket.io")]),v._v("实现实时通知。")]),v._v(" "),e("li",[v._v("阿里：主要利用的是并行"),e("code",[v._v("I/O")]),v._v("这个性能，实现高效的分布式，它们自己也出了很多Node框架")]),v._v(" "),e("li",[v._v("LinkedIn：移动网站也是使用的Node")]),v._v(" "),e("li",[v._v("网易：游戏领域对并发和实时要求很高，网易开源了Node的实时框架"),e("code",[v._v("pomelo")])]),v._v(" "),e("li",[v._v("等等...")])]),v._v(" "),e("p",[v._v("参考文章：本文部分内容来自朴灵老师的《深入浅出Node.js》")])])}),[],!1,null,null,null);_.default=d.exports}}]);