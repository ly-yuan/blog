(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{367:function(t,s,a){t.exports=a.p+"assets/img/tpchttp.494cefeb.png"},368:function(t,s,a){t.exports=a.p+"assets/img/requestheader.b05e9e2b.png"},369:function(t,s,a){t.exports=a.p+"assets/img/responseheader.f1fd165a.png"},370:function(t,s,a){t.exports=a.p+"assets/img/request.a7175082.png"},371:function(t,s,a){t.exports=a.p+"assets/img/response.48ae0e35.png"},372:function(t,s,a){t.exports=a.p+"assets/img/urlformat.32ecc9b2.png"},666:function(t,s,a){"use strict";a.r(s);var n=a(42),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h1",{attrs:{id:"http核心概念"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#http核心概念"}},[t._v("#")]),t._v(" HTTP核心概念")]),t._v(" "),n("h2",{attrs:{id:"一-课程主题"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#一-课程主题"}},[t._v("#")]),t._v(" 一.课程主题：")]),t._v(" "),n("ul",[n("li",[n("p",[t._v("1.掌握HTTP中必备的概念")])]),t._v(" "),n("li",[n("p",[t._v("2.掌握node中的http服务的创建及应用")])]),t._v(" "),n("li",[n("p",[t._v("url模块的使用")])]),t._v(" "),n("li",[n("p",[t._v("客户端和服务端的创建")])]),t._v(" "),n("li",[n("p",[t._v("http静态服务封装")])])]),t._v(" "),n("h2",{attrs:{id:"二-课程内容"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#二-课程内容"}},[t._v("#")]),t._v(" 二.课程内容：")]),t._v(" "),n("h3",{attrs:{id:"_1-什么是http-应用层"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_1-什么是http-应用层"}},[t._v("#")]),t._v(" 1）什么是HTTP?应用层")]),t._v(" "),n("p",[t._v("通常的网络是在TCP/IP协议族的基础上来运作的，HTTP是一个子集。")]),t._v(" "),n("h3",{attrs:{id:"_2-tcp-ip协议族-http应用层协议-在传输层的基础上增加了一些自己的内容"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_2-tcp-ip协议族-http应用层协议-在传输层的基础上增加了一些自己的内容"}},[t._v("#")]),t._v(" 2）TCP/IP协议族 (HTTP应用层协议 在传输层的基础上增加了一些自己的内容)")]),t._v(" "),n("p",[t._v("协议简单来说就是通信的规则，例如：通信时谁先发起请求，怎样结束，如何进行通信。把互联网相关的协议统称起来称为TCP/IP")]),t._v(" "),n("h3",{attrs:{id:"_3-协议分层-osi协议分层"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_3-协议分层-osi协议分层"}},[t._v("#")]),t._v(" 3）协议分层(OSI协议分层)")]),t._v(" "),n("p",[t._v("(物，数)，网，传，(会，表，应)")]),t._v(" "),n("ul",[n("li",[n("p",[t._v("应用层 HTTP,FTP,DNS (与其他计算机进行通讯的一个应用服务，向用户提供应用服务时的通信活动)")])]),t._v(" "),n("li",[n("p",[t._v("传输层 TCP（可靠） UDP 数据传输 (HTTP -> TCP DNS->UDP)")])]),t._v(" "),n("li",[n("p",[t._v("网络层 IP 选择传输路线 (通过ip地址和mac地址)(使用ARP协议凭借mac地址进行通信)")])]),t._v(" "),n("li",[n("p",[t._v("链路层 网络连接的硬件部分\n"),n("img",{attrs:{src:a(367),alt:""}})])])]),t._v(" "),n("h3",{attrs:{id:"_4-http特点"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_4-http特点"}},[t._v("#")]),t._v(" 4) HTTP特点")]),t._v(" "),n("ul",[n("li",[t._v("http是不保存状态的协议，使用cookie来管理状态 (登录 先给你cookie 我可以看一下你有没有cookie)")]),t._v(" "),n("li",[t._v("为了防止每次请求都会造成无谓的tcp链接建立和断开，所以采用保持链接的方式 keep-alive")]),t._v(" "),n("li",[t._v("以前发送请求后需要等待并收到响应，才能发下一个，现在都是管线化的方式 (js css 可以并发请求 6 2) cdn")])]),t._v(" "),n("h3",{attrs:{id:"_5-http缺点"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_5-http缺点"}},[t._v("#")]),t._v(" 5) HTTP缺点")]),t._v(" "),n("p",[t._v("通信采用明文")]),t._v(" "),n("p",[t._v("不验证通信方的身份")]),t._v(" "),n("p",[t._v("无法验证内容的完整性 (内容可能被篡改)")]),t._v(" "),n("blockquote",[n("p",[t._v("通过SSL（安全套阶层）建立安全通信线路 HTTPS (超文本传输安全协议)")])]),t._v(" "),n("h3",{attrs:{id:"_6-http方法-get-post-简单请求-resful风格"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_6-http方法-get-post-简单请求-resful风格"}},[t._v("#")]),t._v(" 6) HTTP方法 (get post 简单请求) Resful风格")]),t._v(" "),n("ul",[n("li",[n("p",[t._v("GET:获取资源 /user？")])]),t._v(" "),n("li",[n("p",[t._v("POST:传输实体主体 请求体中")])]),t._v(" "),n("li",[n("p",[t._v("PUT：来传输文件")])]),t._v(" "),n("li",[n("p",[t._v("HEAD: 获取报文首")])]),t._v(" "),n("li",[n("p",[t._v("DELETE: 删除文件")])]),t._v(" "),n("li",[n("p",[t._v('OPTIONS:询问支持的方法 跨域 如果默认发送的是get/post 不会发送options的 ""复杂请求""')])]),t._v(" "),n("li",[n("p",[t._v("get /post (a:1) headers:{a:1} put / delete 复杂的请求")])]),t._v(" "),n("li",[n("p",[t._v("REST API Resful风格 根据路径和不同的方法 就能确定对资源进行什么操作")])])]),t._v(" "),n("p",[t._v("跨域是浏览器之前的 服务器之间没有跨域问题 反向代理 、后端设置cors")]),t._v(" "),n("p",[t._v("c.com-> d.com OPTIONS 非简单请求会发送options (options 直接返回ok就可以了)")]),t._v(" "),n("h3",{attrs:{id:"_7-http状态码-发请求-命令行-curl命令-服务端"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_7-http状态码-发请求-命令行-curl命令-服务端"}},[t._v("#")]),t._v(" 7) HTTP状态码 (发请求 命令行 curl命令) 服务端")]),t._v(" "),n("p",[t._v("curl命令行工具 postman")]),t._v(" "),n("ul",[n("li",[n("p",[t._v("1xx 信息性状态码 websocket upgrade")])]),t._v(" "),n("li",[n("p",[t._v("2xx 成功状态码 200 204(没有响应体) 206(范围请求 暂停继续下载) 获取网页的部分请求")])]),t._v(" "),n("li",[n("p",[t._v("3xx 重定向状态码 301 302 303 post -> get 304(删除报文主体 在次发送请求) 307 (不会从POST转为GET)")])]),t._v(" "),n("li",[n("p",[t._v("4xx 客户端错误状态码 400 401 403 404 405 方法不允许")])]),t._v(" "),n("li",[n("p",[t._v("5xx 服务端错误状态码 500 503")])])]),t._v(" "),n("h3",{attrs:{id:"_8-http客户端和服务端通信"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_8-http客户端和服务端通信"}},[t._v("#")]),t._v(" 8) http客户端和服务端通信")]),t._v(" "),n("p",[t._v("Http报文，http交互的信息称之为http报文\n"),n("img",{attrs:{src:a(368),alt:""}}),t._v(" "),n("img",{attrs:{src:a(369),alt:""}})]),t._v(" "),n("p",[t._v("通用首部字段：请求和响应报文都有的首部")]),t._v(" "),n("p",[t._v("实体首部字段：描述实体部分的字段\n"),n("img",{attrs:{src:a(370),alt:""}}),t._v(" "),n("img",{attrs:{src:a(371),alt:""}})]),t._v(" "),n("h3",{attrs:{id:"_9-uri和url"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_9-uri和url"}},[t._v("#")]),t._v(" 9) URI和URL")]),t._v(" "),n("h4",{attrs:{id:"uri"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#uri"}},[t._v("#")]),t._v(" URI")]),t._v(" "),n("p",[t._v("URI(Uniform Resource Identifier)是统一资源标识符,在某个规则下能把这个资源独一无二标示出来，比如人的身份证号")]),t._v(" "),n("ul",[n("li",[t._v("Uniform 不用根据上下文来识别资源指定的访问方式")]),t._v(" "),n("li",[t._v("Resource 可以标识的任何东西")]),t._v(" "),n("li",[t._v("Identifier 表示可标识的对象")])]),t._v(" "),n("h4",{attrs:{id:"url"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#url"}},[t._v("#")]),t._v(" URL")]),t._v(" "),n("p",[t._v("统一资源定位符，表示资源的地点，URL时使用浏览器访问WEB页面时需要输入的网页地址")]),t._v(" "),n("ul",[n("li",[t._v("Uniform 不用根据上下文来识别资源指定的访问方式")]),t._v(" "),n("li",[t._v("Resource 可以标识的任何东西")]),t._v(" "),n("li",[t._v("Location 定位")])]),t._v(" "),n("p",[n("img",{attrs:{src:a(372),alt:""}})]),t._v(" "),n("h3",{attrs:{id:"_10-报文应用"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_10-报文应用"}},[t._v("#")]),t._v(" 10) 报文应用")]),t._v(" "),n("ul",[n("li",[n("p",[t._v("Content-Encoding : gzip压缩 form-data: 多部分对象集合 上传文件")])]),t._v(" "),n("li",[n("p",[t._v("range: 范围请求 206 accept-language：内容协商 前端控制 后端控制")])]),t._v(" "),n("li",[n("p",[t._v("host：单主机多域名 304 http缓存")])]),t._v(" "),n("li",[n("p",[t._v("referer:访问来源 防盗链 proxy:代理、网关和隧道")])]),t._v(" "),n("li",[n("p",[t._v("user-agent:用户内核 安全相关的头: X-Frame-Options、X-XSS-Protection (安全 csrf xss https 加密)")])])]),t._v(" "),n("h2",{attrs:{id:"三-http的用法"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#三-http的用法"}},[t._v("#")]),t._v(" 三. http的用法")]),t._v(" "),n("p",[t._v("前端向后端请求资源 如何返回")]),t._v(" "),n("div",{staticClass:"language-js extra-class"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//服务器 返回静态文件 返回数据")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" http "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("require")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"http"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" path "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("require")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"path"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" url "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("require")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"url"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" fs "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("require")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"fs"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("promises"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" mime "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("require")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"mime"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" createReadStream "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("require")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"fs"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("StaticServer")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("async")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("handleRequest")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("req"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" res")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" pathname"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" query "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" url"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("parse")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("req"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("url"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" filePath "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" path"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("join")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("__dirname"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" pathname"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//----\x3e Users/zouyu/Desktop/node-zy/http/")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//需要判断你访问的是不是文件夹")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//先访问根路径 卡住了  再访问/a 也需要等待前一个执行完 会有阻塞效果 不能这么搞")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("try")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" statobj "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("await")]),t._v(" fs"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("stat")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("filePath"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n      console"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("statobj"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("isFile")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"statobj.isFile()"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n      "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("statobj"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("isFile")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//mime 可以根据文件后缀来识别 是什么类型的")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//读一点 写一点  流")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//    '/Users/zouyu/Desktop/node-zy/http/favicon.ico 浏览器按照心情发的 不是文件 需要捕获错误")]),t._v("\n        res"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("setHeader")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n          "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Content-Type"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n          mime"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("getType")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("filePath"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('";charset=utf-8"')]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//设置Content-Type")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("createReadStream")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("filePath"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("pipe")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("res"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// res是一个可写流 可读流pipe（可写流）")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// let data = await fs.readFile(filePath); //http://localhost:3000/note.md")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// console.log(data, 'data')")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// res.end(data)")]),t._v("\n      "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n          "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//文件夹")]),t._v("\n          filePath "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" path"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("join")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("filePath"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'index.html'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n          "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("await")]),t._v(" fs"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("access")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("filePath"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//判断文件是否可以访问 异步方法不存在会报错")]),t._v("\n           res"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("setHeader")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n            "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Content-Type"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"text/html;charset=utf-8"')]),t._v("\n          "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n          "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("createReadStream")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("filePath"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("pipe")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("res"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n          \n      "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("catch")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("e"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("sendError")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("e"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("req"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("res"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("sendError")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("e"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("req"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("res")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    res"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("statusCode "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("404")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    res"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("end")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'NOT FOUND'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("start")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token parameter"}},[n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),t._v("args")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" server "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" http"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("createServer")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("handleRequest")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("bind")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//解决this指向")]),t._v("\n    server"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("listen")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),t._v("args"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("StaticServer")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("start")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("3000")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  console"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"3000----start"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])])}),[],!1,null,null,null);s.default=e.exports}}]);