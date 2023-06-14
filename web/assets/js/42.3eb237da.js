(window.webpackJsonp=window.webpackJsonp||[]).push([[42],{313:function(t,s,a){"use strict";a.r(s);var n=a(0),r=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("p",[t._v("Node.js 做密集型运算，或者所操作的数组、对象本身较大时，容易出现内存溢出的问题，这是由于 Node.js 的运行环境依赖 V8 引擎导致的。如果经常有较大数据量运算等操作，需要对 Node.js 运行环境限制有充分的了解。")]),t._v(" "),a("h2",{attrs:{id:"本文涵盖"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#本文涵盖"}},[t._v("#")]),t._v(" 本文涵盖")]),t._v(" "),a("ol",[a("li",[t._v("内存溢出问题")]),t._v(" "),a("li",[t._v("为什么会内存溢出\n"),a("ul",[a("li",[t._v("2.1 V8内存分配机制")]),t._v(" "),a("li",[t._v("2.2 内存溢出的原因")])])]),t._v(" "),a("li",[t._v("如何解决内存溢出问题")])]),t._v(" "),a("blockquote",[a("p",[t._v("作者简介：koala，专注完整的 Node.js 技术栈分享，从 JavaScript 到 Node.js,再到后端数据库，祝您成为优秀的高级 Node.js 工程师。【“”】作者，Github 博客开源项目 https://github.com/koala-coding/goodBlog")])]),t._v(" "),a("h2",{attrs:{id:"_1-内存溢出问题"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-内存溢出问题"}},[t._v("#")]),t._v(" 1.内存溢出问题")]),t._v(" "),a("p",[t._v("下面是我们在Node.js应用中经常遇到的两类内存溢出问题：")]),t._v(" "),a("h2",{attrs:{id:"密集型运算"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#密集型运算"}},[t._v("#")]),t._v(" 密集型运算")]),t._v(" "),a("p",[t._v("示例1：当我们需要批量处理一些数据（如：更新用户某项信息）时，我们可能需要一个较大的for或while循环来完成所有的数据的更新，如：")]),t._v(" "),a("div",{staticClass:"language-javascript line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" i "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" i "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("10000000")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" i"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("++")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("i")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" site "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        site"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("name "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'koala'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        site"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("domain "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'“”'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 这里是一个保存或更新等操作")]),t._v("\n\n        "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("setTimeout")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("i"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" site"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("i"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br"),a("span",{staticClass:"line-number"},[t._v("11")]),a("br"),a("span",{staticClass:"line-number"},[t._v("12")]),a("br")])]),a("h2",{attrs:{id:"操作的数据量较大"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#操作的数据量较大"}},[t._v("#")]),t._v(" 操作的数据量较大")]),t._v(" "),a("p",[t._v("示例2：对象需要频繁的创建/销毁，或操作对象本身较大，如：")]),t._v(" "),a("div",{staticClass:"language-javascript line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" sites "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" x"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("x"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("5000")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("x"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("++")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" site"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" y"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("y"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("5000")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("y"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("++")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        site "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("y"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'koala'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'“”'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        sites"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("push")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("site"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br")])]),a("p",[t._v("上面两类操作都会出现类似以下错误：")]),t._v(" "),a("div",{staticClass:"language-javascript line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" Last few GCs "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n……\n"),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("FATAL")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("ERROR")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("CALL_AND_RETRY_LAST")]),t._v(" Allocation failed "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" process out "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("of")]),t._v(" memory\nAbort trap"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("6")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br")])]),a("h2",{attrs:{id:"_2-为什么会内存溢出"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-为什么会内存溢出"}},[t._v("#")]),t._v(" 2. 为什么会内存溢出")]),t._v(" "),a("h3",{attrs:{id:"_2-1-v8内存分配机制"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-1-v8内存分配机制"}},[t._v("#")]),t._v(" 2.1 V8内存分配机制")]),t._v(" "),a("p",[t._v("我们都知道，V8是 Google 在 Chrome 浏览器中使用的 JavaScript 引擎。而在浏览器环境中，运算一般不需要多大内存。\nV8 对每个进程分配的运行内存，在32位系统中约为700MB，而在64位系统中约为1.4GB。")]),t._v(" "),a("h3",{attrs:{id:"_2-2-内存溢出的原因"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-2-内存溢出的原因"}},[t._v("#")]),t._v(" 2.2 内存溢出的原因")]),t._v(" "),a("p",[t._v("Node.js 程序之所以会出内存溢出的情况，可以分为三方面的原因：")]),t._v(" "),a("ul",[a("li",[a("ol",[a("li",[t._v("V8本身分配的内存较小")])])]),t._v(" "),a("li",[a("ol",{attrs:{start:"2"}},[a("li",[t._v("JavaScript语言本身限制")])])]),t._v(" "),a("li",[a("ol",{attrs:{start:"3"}},[a("li",[t._v("程序员使用不当。")])])])]),t._v(" "),a("p",[t._v("在示例1中，每次运算所需的内存量并不大，但由于for循环，造成V8内存不能及时释放。随着程序运行时候的增加，内存占用量会越来越大，并最终导致内存的溢出。")]),t._v(" "),a("p",[t._v("在示例2中，可能所创建对象本身并没有超过内存限制。但是除对象本身外：创建对象、对象引用、Node.js程序本身等都需要内存空间，这样就很容易导致内存的溢出。")]),t._v(" "),a("h2",{attrs:{id:"_3-解决内存溢出问题"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-解决内存溢出问题"}},[t._v("#")]),t._v(" 3. 解决内存溢出问题")]),t._v(" "),a("p",[t._v("在Node.js应用开发过程中，了解V8内存分配和JavaScript语言限制是Node程序的基本素质。我们应该在应用中权衡利弊，综合考虑内存与程序的运行效率。以下几点防止内存溢出的建议：")]),t._v(" "),a("h3",{attrs:{id:"_3-1-使用-async-await防止事件堆积-变为同步操作"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-1-使用-async-await防止事件堆积-变为同步操作"}},[t._v("#")]),t._v(" 3.1. 使用 async/await防止事件堆积,变为同步操作")]),t._v(" "),a("p",[t._v("await将代码执行顺序变为了同步。这样可以使 V8 获得内存回收的机会，有效解决过多事件堆积造成的内存溢出。\n我们可以使用await方法处理：")]),t._v(" "),a("div",{staticClass:"language-javascript line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("async")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("dbFuc")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" i "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" i "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("10000000")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" i"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("++")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" site "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    site"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("name "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'koala'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    site"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("domain "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'“”'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 这里是一个保存或更新等操作")]),t._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("await")]),t._v("  console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("i"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" site"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("dbFuc")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br"),a("span",{staticClass:"line-number"},[t._v("11")]),a("br"),a("span",{staticClass:"line-number"},[t._v("12")]),a("br")])]),a("p",[t._v("每次循环V8都会回收内存一次，因此内存不会再溢出。但这样做必然会造成运行效率的降低，而应该在速度在安全之间平衡，控制好循环的安全次数。\n说明:实际开发中，上面这种虽然解决了内存溢出，但是仍然会造成进程阻塞，可以开启一个进程/线程来解决阻塞问题(具体可以看我的这篇文章"),a("a",{attrs:{href:"https://juejin.im/post/5d43017be51d4561f40adcf9",target:"_blank",rel:"noopener noreferrer"}},[t._v("《深入理解Node.js 进程与线程(8000长文彻底搞懂)》"),a("OutboundLink")],1),t._v(")")]),t._v(" "),a("h3",{attrs:{id:"_3-2-增加v8内存空间"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-2-增加v8内存空间"}},[t._v("#")]),t._v(" 3.2. 增加V8内存空间")]),t._v(" "),a("p",[t._v("Node.js提供了一个程序运行参数"),a("code",[t._v("--max-old-space-size")]),t._v("，可以通过该参数指定V8所占用的内存空间，这样可以在一定程度上避免程序内存的溢出。\n如，我们可以在运行示例2程序时指定使用4G的内存：\n"),a("code",[t._v("node --max-old-space-size=4096 app")])]),t._v(" "),a("h3",{attrs:{id:"_3-3-使用非v8内存"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-3-使用非v8内存"}},[t._v("#")]),t._v(" 3.3. 使用非V8内存")]),t._v(" "),a("p",[t._v("Node.js程序所使用的内存分为两类：")]),t._v(" "),a("ul",[a("li",[t._v("V8内存：数组、字符串等JavaScript内置对象，运行时使用“V8内存”")]),t._v(" "),a("li",[t._v("系统内存：Buffer 是 Node.js 的一个扩展对象，使用底层的系统内存，不占用V8内存空间。与 buffer 相关的文件系统 fs 和stream 流操作，都不会占用 V8 内存。")])]),t._v(" "),a("blockquote",[a("p",[t._v("(注: fs 和 stream 这两个模块我在 Node 进阶系列文章中已经详细介绍了, 这里就不赘述)")])]),t._v(" "),a("p",[t._v("在程序允许的情况下，应该将数据保存在Buffer中，而不是转换成字符串等JS对象，这样可以避免V8内存的过多占用。（buffer可以看一下这篇文章"),a("a",{attrs:{href:"https://juejin.im/post/5d2db6d9f265da1bcc1975d7",target:"_blank",rel:"noopener noreferrer"}},[t._v("《Node进阶-探究不在V8堆内存中存储的Buffer对象》"),a("OutboundLink")],1),t._v("）")]),t._v(" "),a("h2",{attrs:{id:"node系列原创文章"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#node系列原创文章"}},[t._v("#")]),t._v(" Node系列原创文章")]),t._v(" "),a("p",[a("a",{attrs:{href:"https://juejin.im/post/5d43017be51d4561f40adcf9",target:"_blank",rel:"noopener noreferrer"}},[t._v("深入理解Node.js 中的进程与线程\n"),a("OutboundLink")],1)]),t._v(" "),a("p",[a("a",{attrs:{href:"https://juejin.im/post/5d25ce36f265da1ba84ab97a",target:"_blank",rel:"noopener noreferrer"}},[t._v("想学Node.js，stream先有必要搞清楚\n"),a("OutboundLink")],1)]),t._v(" "),a("p",[a("a",{attrs:{href:"https://juejin.im/post/5d5639c7e51d453b5c1218b4",target:"_blank",rel:"noopener noreferrer"}},[t._v("require时，exports和module.exports的区别你真的懂吗"),a("OutboundLink")],1)]),t._v(" "),a("p",[a("a",{attrs:{href:"https://juejin.im/post/5d69eef7f265da03f12e70a5",target:"_blank",rel:"noopener noreferrer"}},[t._v("源码解读一文彻底搞懂Events模块\n"),a("OutboundLink")],1)]),t._v(" "),a("p",[a("a",{attrs:{href:"https://juejin.im/post/5d3f1664e51d4561a34618c1",target:"_blank",rel:"noopener noreferrer"}},[t._v("Node.js 高级进阶之 fs 文件模块学习\n"),a("OutboundLink")],1)]),t._v(" "),a("h2",{attrs:{id:"关注我"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#关注我"}},[t._v("#")]),t._v(" 关注我")]),t._v(" "),a("ul",[a("li",[t._v("欢迎加我微信(coder_qi)，拉你进技术群，长期交流学习...")]),t._v(" "),a("li",[t._v("欢迎关注「“”」,一个用心帮助你成长的公众号...\n"),a("img",{attrs:{src:"http://img.xiaogangzai.cn/leading.png",alt:""}})])])])}),[],!1,null,null,null);s.default=r.exports}}]);