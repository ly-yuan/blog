(window.webpackJsonp=window.webpackJsonp||[]).push([[38],{647:function(s,e,t){"use strict";t.r(e);var i=t(42),r=Object(i.a)({},(function(){var s=this,e=s.$createElement,t=s._self._c||e;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h2",{attrs:{id:"前言"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#前言"}},[s._v("#")]),s._v(" 前言:")]),s._v(" "),t("p",[s._v("本篇文章会介绍Redis在项目开发中会有那些应用场景，对每个应用场景会有一个简要概述，并且会在接下来的时间对每个场景整理出文章与对应代码供开发者阅读。")]),s._v(" "),t("h2",{attrs:{id:"应用场景"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#应用场景"}},[s._v("#")]),s._v(" 应用场景")]),s._v(" "),t("h4",{attrs:{id:"本人应用到的场景"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#本人应用到的场景"}},[s._v("#")]),s._v(" 本人应用到的场景")]),s._v(" "),t("ul",[t("li",[t("p",[s._v("博客文章或者热点文章新闻等访问量计数")]),s._v(" "),t("p",[s._v("说明：把这几种计数直接放在redis中，有些开发者可能会认为成本高，实际情况往往会有一些不一样：")]),s._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[s._v(" 1、COST，对于有一定吞吐需求的应用来说，肯定会单独申请DB、Cache资源，很多担心DB写入性能的同学还会主动将DB更新记入异步队列，而这三块的资源的利用率一般都不会太高。资源算下来，你惊异的发现：反而纯内存的方案会更精简！\n 2、KISS原则，这对于开发是非常友好的，我只需要建立一套连接池，不用担心数据一致性的维护，不用维护异步队列。\n 3、Cache穿透风险，如果后端使用DB，肯定不会提供很高的吞吐能力，cache宕机如果没有妥善处理，那就悲剧了。\n")])])])]),s._v(" "),t("li",[t("p",[s._v("登录session缓存")]),s._v(" "),t("p",[s._v("说明：web端用户，用于登陆缓存session数据，登陆的一些信息存到session中，缓存到redis中，没次用户再次登录判断redis只能够是否存在或者已过期。")])]),s._v(" "),t("li",[t("p",[s._v("购物车缓存")]),s._v(" "),t("p",[s._v("说明：\n每个用户的购物车是一个哈希表，用户id作为key，存储了 itemId 与 商品加车数量之间的关系。购物车提供数量设置，购物车不随用户登录退出删除。\n说明：")])]),s._v(" "),t("li",[t("p",[s._v("产品运营总会让你展示最近、最热、点击率最高、活跃度最高等等条件的top list。")]),s._v(" "),t("p",[s._v("说明：很多更新较频繁的列表如果使用MC+MySQL维护的话缓存失效的可能性会比较大，鉴于占用内存较小的情况，使用Redis做存储也是相当不错的。     这种最近，最热在mysql中如何记录，假如记录最活跃不可能在mysql 中活跃一次记录一条记录，最后统计看哪个用户的记录数多，这样的话mysql数据库也是很累的，数据量也是很大的，最好的办法是通过redis记录一个类型，然后直接根据用户id查询哪个多就可以，速度快很多，存储方便，一个string或者hash就搞定了。")])]),s._v(" "),t("li",[t("p",[s._v("用户最近访问记录")]),s._v(" "),t("p",[s._v("说明:比如想知道最近访问的20个用户，如果用mysql数据库实现很麻烦，可以使用redis实现，这时候要用到redis队列属性这么个事，先进先出原则，和redis提供的lpush lpop  这两个函数具体使用http://www.redis.net.cn/order/3584.html。")])]),s._v(" "),t("li",[t("p",[s._v("redis锁防刷机制实现")]),s._v(" "),t("p",[s._v("说明: redis数据类型中有一个set类型，set结构在存储数据的时候是无序的，而且每个值是不一样的，不能重复，这样就可以快速的查找元素中某个值是否存在，精确的进行增加删除操作。例如设置一个值不重复并且设置失效时间一天就可以达到一天一个用户只能投票一次的效果")])]),s._v(" "),t("li",[t("p",[s._v("应用家庭体系切换登录(互相挤掉用户单点登录)\n说明：用户家庭账号体系的建立，前提（小程序开发，前端无法检测小程序彻底退出），家庭中的成员账号A切换登录之前还需要判断另一个账B号的最后使用时间，如果账号A在"),t("strong",[s._v("两个小")]),s._v("时内登录过，会对账号A有一个提示，是否挤掉账号B，同时账号B再调用请求的时候，也会收到被账号A挤掉通知，退出到授权登录界面。解决方案：使用Redis，Redis中为每一个账号设置一个有效时间（2小时）的token值，通过判断每一个用户token值是否存在，来判断挤掉账号时候各种提醒内容。但是这里会有一个问题，需求要求token失效时间是2小时，上一个账号两个小时内登录过才会进行提醒(需要判断上一个账号最后更新token时间)，所以前端在每个请求调用的时候，后端都需要更新一下redis的过期时间。")])]),s._v(" "),t("li",[t("p",[s._v("redis分布式锁")]),s._v(" "),t("p",[s._v("说明:可以解决高并发问题，和磁盘存储数据库中的锁类似。对于一些要频繁返回给前端的数据并且请求量很大，当有大量数据库sql操作时候，为了避免每次接口请求都要去查询数据库，可以把一些数据缓存到redis中，redis非关系型数据库存储，这样是直接从内存中获取数据，速度会增快很多。")])])])])}),[],!1,null,null,null);e.default=r.exports}}]);