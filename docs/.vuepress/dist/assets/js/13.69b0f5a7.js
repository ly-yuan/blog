(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{374:function(t,s,a){t.exports=a.p+"assets/img/2.1a033437.1a033437.png"},375:function(t,s,a){t.exports=a.p+"assets/img/1.4f572942.4f572942.png"},670:function(t,s,a){"use strict";a.r(s);var n=a(42),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h1",{attrs:{id:"node-基本概念"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#node-基本概念"}},[t._v("#")]),t._v(" Node 基本概念")]),t._v(" "),n("h2",{attrs:{id:"一-node-是什么"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#一-node-是什么"}},[t._v("#")]),t._v(" 一.Node 是什么?")]),t._v(" "),n("p",[t._v("Node.js 是一个基于 Chrome V8 引擎的 JavaScript 运行环境(runtime),Node 不是一门语言是让 js 运行在后端的运行时,并且不包括 javascript 全集,因为在服务端中不包含 DOM 和 BOM,Node 也提供了一些新的模块例如 http,fs 模块等。Node.js 使用了事件驱动、非阻塞式 I/O 的模型，使其轻量又高效并且 Node.js 的包管理器 npm，是全球最大的开源库生态系统。事件驱动与非阻塞 IO 后面我们会一一介绍。到此我们已经对 node 有了简单的概念。")]),t._v(" "),n("h2",{attrs:{id:"二-node-解决了哪些问题"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#二-node-解决了哪些问题"}},[t._v("#")]),t._v(" 二.Node 解决了哪些问题?")]),t._v(" "),n("p",[t._v("Node 在处理高并发,I/O 密集场景有明显的性能优势")]),t._v(" "),n("p",[t._v("高并发,是指在同一时间并发访问服务器\nI/O 密集指的是文件操作、网络操作、数据库,相对的有 CPU 密集,CPU 密集指的是逻辑处理运算、压缩、解压、加密、解密\nWeb 主要场景就是接收客户端的请求读取静态资源和渲染界面,所以 Node 非常适合 Web 应用的开发。")]),t._v(" "),n("h2",{attrs:{id:"三-js-单线程"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#三-js-单线程"}},[t._v("#")]),t._v(" 三.JS 单线程")]),t._v(" "),n("p",[t._v("javascript 在最初设计时设计成了单线程,为什么不是多线程呢？如果多个线程同时操作 DOM 那岂不会很混乱？这里所谓的单线程指的是主线程是单线程的,所以在 Node 中主线程依旧是单线程的。")]),t._v(" "),n("p",[t._v("单线程特点是节约了内存,并且不需要在切换执行上下文\n而且单线程不需要管锁的问题.")]),t._v(" "),n("h2",{attrs:{id:"四-同步异步和阻塞非阻塞"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#四-同步异步和阻塞非阻塞"}},[t._v("#")]),t._v(" 四.同步异步和阻塞非阻塞")]),t._v(" "),n("p",[n("img",{attrs:{src:a(374),alt:""}})]),t._v(" "),n("h2",{attrs:{id:"五-node-中的-event-loop"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#五-node-中的-event-loop"}},[t._v("#")]),t._v(" 五.Node 中的 Event Loop")]),t._v(" "),n("p",[n("img",{attrs:{src:a(375),alt:""}})]),t._v(" "),n("ul",[n("li",[t._v("1.我们写的 js 代码会交给 v8 引擎进行处理")]),t._v(" "),n("li",[t._v("2.代码中可能会调用 nodeApi,node 会交给 libuv 库处理")]),t._v(" "),n("li",[t._v("3.libuv 通过阻塞 i/o 和多线程实现了异步 io")]),t._v(" "),n("li",[t._v("4.通过事件驱动的方式,将结果放到事件队列中,最终交给我们的应用。\n本阶段执行已经被 setTimeout() 和 setInterval() 的调度回调函数。\n下面都是宏任务")])]),t._v(" "),n("div",{staticClass:"language-markdown extra-class"},[n("pre",{pre:!0,attrs:{class:"language-markdown"}},[n("code",[t._v("┌───────────────────────────┐\n┌─>│ timers │\n│ └─────────────┬─────────────┘\n| 执行延迟到下一个循环迭代的 I/O 回调。\n│ ┌─────────────┴─────────────┐\n│ │ pending callbacks │\n│ └─────────────┬─────────────┘\n| 仅系统内部使用。\n│ ┌─────────────┴─────────────┐\n│ │ idle, prepare │\n│ └─────────────┬─────────────┘  \n| 检索新的 I/O 事件;执行与 I/O 相关的回调 ┌───────────────┐\n│ ┌─────────────┴─────────────┐ │ incoming: │ pool 中有很多回调 node 中有执行的最大个数 超过最大个数延迟到下一个循环执行\n│ │ poll │<─────┤ connections, │\n│ └─────────────┬─────────────┘ │ data, etc. │\n│ setImmediate() 回调函数在这里执行。 └───────────────┘\n│ ┌─────────────┴─────────────┐  \n│ │ check │\n│ └─────────────┬─────────────┘\n| 一些关闭的回调函数\n│ ┌─────────────┴─────────────┐\n└──┤ close callbacks │\n└───────────────────────────┘\n")])])]),n("ul",[n("li",[t._v("timers: 定时器 setTimeout 执行，将 callback 加入队列中。")]),t._v(" "),n("li",[t._v("pending callbacks: 一些 I/O 的 callback，推迟到下一次循环中执行。")]),t._v(" "),n("li",[t._v("idle, prepare: 内部的一些事件。")]),t._v(" "),n("li",[t._v("poll: 定时器的 callback 执行，setImmediate 执行，微任务执行。")]),t._v(" "),n("li",[t._v("check: setImmediate 的 callback 执行。")]),t._v(" "),n("li",[t._v("close callbacks: 一些 callbacks 的关闭，如 socket。")])]),t._v(" "),n("p",[n("strong",[t._v("timers、poll、check 阶段")])]),t._v(" "),n("ul",[n("li",[n("p",[t._v("timers\n这个阶段，只执行 setTimeout 和 setInterval，但是他们的 callback 不会执行，而是推到宏任务的队列之中。")])]),t._v(" "),n("li",[n("p",[t._v("poll\n这个阶段，会先执行符合条件的微任务，比如 Promise 的异步完成，如果是 setImmediate，则只会执行，不执行他的 callback，然后执行定时器的 callback，比如 timeout。这里会适当得暂停一会，看看会不会有新任务进入队列。如果有 setImmediate 的 callback 则进入 check 阶段，否则回到 timer 继续新一轮循环。")])]),t._v(" "),n("li",[n("p",[t._v("check\n当 poll 阶段的队列完成，则会轮到 check，这时会执行 setImmediate 的 callback。如果没有需要关闭 callbacks，那么就回到 timer 继续新一轮的循环。")]),t._v(" "),n("blockquote",[n("p",[t._v("这里每一个阶段都对应一个事件队列,当 event loop 执行到某个阶段时会将当前阶段对应的队列依次执行。当该队列已用尽或达到回调限制，事件循环将移动到下一阶段")])])])]),t._v(" "),n("h3",{attrs:{id:"宏任务微任务"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#宏任务微任务"}},[t._v("#")]),t._v(" 宏任务微任务")]),t._v(" "),n("div",{staticClass:"custom-block tip"},[n("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),n("p",[t._v("执行一个宏任务 就会清空微任务 .... 可以理解为宏任务会先放到宏任务队列 但是微任务先执行")])]),t._v(" "),n("ul",[n("li",[t._v("宏任务\n从我的角度理解，就是一个正常的 task，本来在一个线程中可以毫无波折地一个接着一个运行到最后，奈何每个宏任务执行之后都有可能产生一些微任务，因此很不幸，这些宏任务就要排在这些微任务之后了。")])]),t._v(" "),n("p",[t._v("宏任务代表：script(整体代码),setTimeout,setImmediate。")]),t._v(" "),n("ul",[n("li",[t._v("微任务\n就是宏任务执行时，产生的新的小任务，比如异步，此类任务称之为微任务，一般在当前宏任务执行完之后“插队”执行。")])]),t._v(" "),n("p",[t._v("微任务代表：process.nextTick, Promise(原生)。")]),t._v(" "),n("h3",{attrs:{id:"settimeout-与-setimmediate"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#settimeout-与-setimmediate"}},[t._v("#")]),t._v(" setTimeout 与 setImmediate")]),t._v(" "),n("ul",[n("li",[t._v("1."),n("strong",[t._v("根据性能影响 执行顺序会不同")])])]),t._v(" "),n("div",{staticClass:"language-js extra-class"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//timer阶段")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("setTimeout")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  console"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"setTimeout"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//一种")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//check阶段")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("setImmediate")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  console"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"setImmdiate"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),n("ul",[n("li",[t._v("2.这种执行顺序是一定的 setImmdiate setTimeout")])]),t._v(" "),n("div",{staticClass:"language-js extra-class"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[t._v("fs"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("readFile")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"./note.md"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//i / o 轮询会执行i.o回调 如果没有定义setImmediate 会等待剩下的I/O完成 或者定时器到达时间")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("setTimeout")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    console"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"setTimeout"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//一种")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//check阶段")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("setImmediate")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    console"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"setImmdiate"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),n("h3",{attrs:{id:"process-nexttick-会先于-promise"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#process-nexttick-会先于-promise"}},[t._v("#")]),t._v(" process.nextTick 会先于 Promise")]),t._v(" "),n("blockquote",[n("p",[t._v("process.nextTick() 当前同步代码执行完毕后立即调用从技术上讲不是事件循环的一部分.")]),t._v(" "),n("div",{staticClass:"custom-block tip"},[n("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),n("p",[t._v("node 先执行栈中代码 然后再执行宏任务 执行一个宏任务（s） 清空微任务 然后再执行宏任务 。。。。")])]),t._v(" "),n("p",[t._v("全局属性 -- 能在文件夹里的文件直接直接访问的\n全局变量 globle.")])]),t._v(" "),n("h2",{attrs:{id:"六-node-中全局对象"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#六-node-中全局对象"}},[t._v("#")]),t._v(" 六.Node 中全局对象")]),t._v(" "),n("ul",[n("li",[t._v("Buffer")])]),t._v(" "),n("h3",{attrs:{id:"process"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#process"}},[t._v("#")]),t._v(" process")]),t._v(" "),n("ul",[n("li",[n("p",[t._v("process.argv：返回当前进程的命令行参数数组。\n重要的模块 commander")]),t._v(" "),n("div",{staticClass:"language-js extra-class"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" program "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("require")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"commander"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" chalk "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("require")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"chalk"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nprogram"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("naome")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"zf"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nprogram"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("usage")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"[options]"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//这个要写在上面 才有效果")]),t._v("\nprogram "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//配置命令")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("command")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"create"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("alias")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"c"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("description")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"create project"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("action")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    console"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"create project"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//'set port描述文字'")]),t._v("\nprogram"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("option")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"-p, --port <val>"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"set port"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("version")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"1.0.0"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// console.log(program);")]),t._v("\nprogram\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("on")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"--help"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    console"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Examples"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    console"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"  node 1.js"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    console"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"  node 1.js create"')]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"  "')]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" chalk"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("green")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"project"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("parse")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("process"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("argv"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//parse一定要放到最后")]),t._v("\n")])])])]),t._v(" "),n("li",[n("p",[t._v("process.env：返回一个对象，成员为当前 Shell 的环境变量，比如 process.env.HOME。\nwindow 可以通过 set xxx=xxx / mac export xxx = xxx 可以设置环境变量\n第三方模块 cross-env 读取 process.env.xxx")])]),t._v(" "),n("li",[n("p",[t._v("process.installPrefix：node 的安装路径的前缀，比如/usr/local，则 node 的执行文件目录为/usr/local/bin/node。")])]),t._v(" "),n("li",[n("p",[t._v("process.pid：当前进程的进程号。")])]),t._v(" "),n("li",[n("p",[t._v("process.platform：当前系统平台，比如 Linux。")])]),t._v(" "),n("li",[n("p",[t._v("process.title：默认值为“node”，可以自定义该值。")])]),t._v(" "),n("li",[n("p",[t._v("process.version：Node 的版本，比如 v0.10.18。")])]),t._v(" "),n("li",[n("p",[t._v("process.chdir()：切换工作目录到指定目录。")])]),t._v(" "),n("li",[n("p",[t._v("process.cwd()：返回运行当前脚本的工作目录的路径。")])]),t._v(" "),n("li",[n("p",[t._v("process.exit()：退出当前进程。")])]),t._v(" "),n("li",[n("p",[t._v("process.getgid()：返回当前进程的组 ID（数值）。")])]),t._v(" "),n("li",[n("p",[t._v("process.getuid()：返回当前进程的用户 ID（数值）。")])]),t._v(" "),n("li",[n("p",[t._v("process.nextTick()：指定回调函数在当前执行栈的尾部、下一次 Event Loop 之前执行。")])]),t._v(" "),n("li",[n("p",[t._v("process.on()：监听事件。")])]),t._v(" "),n("li",[n("p",[t._v("process.setgid()：指定当前进程的组，可以使用数字 ID，也可以使用字符串 ID。")])]),t._v(" "),n("li",[n("p",[t._v("process.setuid()：指定当前进程的用户，可以使用数字 ID，也可以使用字符串 ID。")])]),t._v(" "),n("li",[n("p",[t._v("setInterval,setTimeout,setImmediate")])]),t._v(" "),n("li",[n("p",[t._v("console")])]),t._v(" "),n("li",[n("p",[t._v("queueMicrotask")])])]),t._v(" "),n("h2",{attrs:{id:"七-node-中的模块"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#七-node-中的模块"}},[t._v("#")]),t._v(" 七.node 中的模块")]),t._v(" "),n("ul",[n("li",[t._v("__dirname")]),t._v(" "),n("li",[t._v("__filename")]),t._v(" "),n("li",[t._v("exports")]),t._v(" "),n("li",[t._v("module")]),t._v(" "),n("li",[t._v("require()")])])])}),[],!1,null,null,null);s.default=e.exports}}]);