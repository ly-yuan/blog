(window.webpackJsonp=window.webpackJsonp||[]).push([[35],{644:function(a,t,_){"use strict";_.r(t);var v=_(42),s=Object(v.a)({},(function(){var a=this,t=a.$createElement,_=a._self._c||t;return _("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[_("h2",{attrs:{id:"概念"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#概念"}},[a._v("#")]),a._v(" 概念")]),a._v(" "),_("h3",{attrs:{id:"关系型数据库"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#关系型数据库"}},[a._v("#")]),a._v(" 关系型数据库")]),a._v(" "),_("p",[a._v("SQL (Structured Query Language) 数据库，指关系型数据库 - 主要代表：SQL Server，Oracle，MySQL(开源)，PostgreSQL(开源)。")]),a._v(" "),_("h3",{attrs:{id:"非关系型数据库"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#非关系型数据库"}},[a._v("#")]),a._v(" 非关系型数据库")]),a._v(" "),_("p",[a._v("NoSQL（Not Only SQL）泛指非关系型数据库 - 主要代表：MongoDB，Redis，CouchDB。")]),a._v(" "),_("h2",{attrs:{id:"二者对比"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#二者对比"}},[a._v("#")]),a._v(" 二者对比")]),a._v(" "),_("h3",{attrs:{id:"存储方式"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#存储方式"}},[a._v("#")]),a._v(" 存储方式：")]),a._v(" "),_("p",[a._v("SQL数据存在特定结构的表中；而 NoSQL 则更加灵活和可扩展，存储方式可以省是JSON文档、哈希表或者其他方式。")]),a._v(" "),_("p",[a._v("SQL通常以数据库表形式存储数据。举个栗子，存个学生借书数据：")]),a._v(" "),_("p",[_("img",{attrs:{src:"http://img.xiaogangzai.cn/database_choice_01.png",alt:""}}),a._v("\n数据表\n而NoSQL存储方式比较灵活，比如使用类JSON文件存储上表中熊大的借阅数据：")]),a._v(" "),_("p",[_("img",{attrs:{src:"http://img.xiaogangzai.cn/database_choice_02.png",alt:""}})]),a._v(" "),_("h3",{attrs:{id:"表-数据集合的数据的关系"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#表-数据集合的数据的关系"}},[a._v("#")]),a._v(" 表/数据集合的数据的关系")]),a._v(" "),_("p",[a._v("在 SQL 中，必须定义好表和字段结构后才能添加数据，例如定义表的"),_("code",[a._v("主键(primary key)")]),a._v("，"),_("code",[a._v("索引(index)")]),a._v(","),_("code",[a._v("触发器(trigger)")]),a._v(","),_("code",[a._v("存储过程(stored procedure)")]),a._v("等。表结构可以在被定义之后更新，但是如果有比较大的结构变更的话就会变得比较复杂。")]),a._v(" "),_("p",[a._v("在"),_("code",[a._v("NoSQL")]),a._v('中，数据可以在任何时候任何地方添加，不需要先定义表。例如下面这段代码会自动创建一个新的"借阅表"'),_("code",[a._v("数据集合")]),a._v("：")]),a._v(" "),_("p",[_("img",{attrs:{src:"http://img.xiaogangzai.cn/database_choice_03.png",alt:""}}),a._v("\n自动创建借阅表\n"),_("code",[a._v("NoSQL")]),a._v(" 也可以在数据集中建立"),_("code",[a._v("索引")]),a._v("。以 "),_("code",[a._v("MongoDB")]),a._v(" 为例，会自动在数据集合创建后创建唯一值_id字段，这样的话就可以在数据集创建后增加索引。")]),a._v(" "),_("p",[a._v("从这点来看，"),_("code",[a._v("NoSQL")]),a._v(" 可能更加适合初始化数据还不明确或者未定的项目中。")]),a._v(" "),_("h3",{attrs:{id:"外部数据存储"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#外部数据存储"}},[a._v("#")]),a._v(" 外部数据存储")]),a._v(" "),_("p",[_("code",[a._v("SQL")]),a._v(" 中如何需要增加外部关联数据的话，规范化做法是在原表中增加一个外键，关联外部数据表。例如需要在借阅表中增加审核人信息，先建立一个审核人表")]),a._v(" "),_("p",[_("img",{attrs:{src:"http://img.xiaogangzai.cn/database_choice_04.png",alt:""}}),a._v("\n审核人表\n再在原来的借阅人表中增加审核人外键")]),a._v(" "),_("p",[_("img",{attrs:{src:"http://img.xiaogangzai.cn/database_choice_05.png",alt:""}}),a._v("\n借阅人表\n这样如果我们需要更新审核人个人信息的时候只需要更新审核人表而不需要对借阅人表做更新。")]),a._v(" "),_("p",[a._v("而在NoSQL中除了这种规范化的外部数据表做法以外，我们还能用如下的非规范化方式把外部数据直接放到原数据集中，以提高查询效率。缺点也比较明显，更新审核人数据的时候将会比较麻烦。")]),a._v(" "),_("p",[_("img",{attrs:{src:"http://img.xiaogangzai.cn/database_choice_06.png",alt:""}})]),a._v(" "),_("h3",{attrs:{id:"sql中的join查询"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#sql中的join查询"}},[a._v("#")]),a._v(" SQL中的JOIN查询")]),a._v(" "),_("p",[a._v("SQL 中可以使用 JOIN 表链接方式将多个关系数据表中的数据用一条简单的查询语句查询出来。")]),a._v(" "),_("p",[a._v("而 NoSQL 暂未提供类似 JOIN 的查询方式对多个数据集中的数据做查询。所以大部分 NoSQL 使用非规范化的数据存储方式存储数据。")]),a._v(" "),_("h3",{attrs:{id:"数据耦合性"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#数据耦合性"}},[a._v("#")]),a._v(" 数据耦合性")]),a._v(" "),_("p",[a._v('SQL 中不允许删除已经被使用的外部数据，例如审核人表中的"熊三"已经被分配给了借阅人熊大，那么在审核人表中将不允许删除熊三这条数据，以保证数据完整性。')]),a._v(" "),_("p",[a._v("而 NoSQL 中则没有这种强耦合的概念，可以随时删除任何数据。")]),a._v(" "),_("h3",{attrs:{id:"事务"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#事务"}},[a._v("#")]),a._v(" 事务")]),a._v(" "),_("p",[a._v("事务是 SQL 的一个明显优点，SQL 中如果多张表数据需要同批次被更新，即如果其中一张表更新失败的话其他表也不能更新成功。这种场景可以通过事务来控制，可以在所有命令完成后再统一提交事务。")]),a._v(" "),_("p",[a._v("在 NoSQL 数据库中，对于一个文档的更新操作是原子性的。换句话说，如果你要更新一个文档中的三个值，要么三个值都更新成功要么它们保持不变。然而，对于操作多个文档时没有事务相对应的操作。在 MongoDB 中有一个操作是 transaction-like options ，但是，需要我们手动的加入到代码中。")]),a._v(" "),_("h3",{attrs:{id:"增删改查语法"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#增删改查语法"}},[a._v("#")]),a._v(" 增删改查语法")]),a._v(" "),_("ul",[_("li",[_("p",[a._v("SQL 是一种声明性语言。SQL 语言的功能强大，并且已经成为了一种国际的通用标准，尽管大多数系统在语法上有一些细微的差别。")])]),a._v(" "),_("li",[_("p",[a._v("NoSQL 数据库使用类似 JOSN 为参数的 JavaScript 来进行查询！基本操作是相同的，但是嵌套的 JOSN 将会产生复杂的查询。")])])]),a._v(" "),_("h3",{attrs:{id:"数据完整性"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#数据完整性"}},[a._v("#")]),a._v(" 数据完整性")]),a._v(" "),_("p",[a._v("关系型的数据库允许通过定义外键来进行数据库的完整性约束。两个表通过外健约束后，开发者或者用户不能添加、修改和移除一条表的记录，如果这些操作导致数据产生无效的数据或者单条无用记录（也就是常说的脏数据）。")]),a._v(" "),_("p",[a._v("在 NoSQL 数据库中没有数据完整性的约束选项。你可以存储任何你想要存储的数据。理想情况下，单个文档将是项目的所有信息的唯一来源。\n。")]),a._v(" "),_("h3",{attrs:{id:"查询性能"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#查询性能"}},[a._v("#")]),a._v(" 查询性能")]),a._v(" "),_("p",[a._v("通常情况下，NoSQL 比 SQL 语言更快。这并没有什么好震惊的，NoSQL 中更加简单的非规范化存储允许我们在一次查询中得到特定项的所有信息。不需要使用 SQL 中复杂的 JOIN 操作。")]),a._v(" "),_("p",[a._v("也就是说，你的项目的设计和数据的需求会有很大的影响。一个好的SQL数据库的设计的表现一定会比一个设计不好的 NoSQL 数据库性能好很多，反之亦然。")]),a._v(" "),_("h2",{attrs:{id:"如何选择"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#如何选择"}},[a._v("#")]),a._v(" 如何选择")]),a._v(" "),_("h3",{attrs:{id:"适合使用sql开发的项目"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#适合使用sql开发的项目"}},[a._v("#")]),a._v(" 适合使用SQL开发的项目：")]),a._v(" "),_("ul",[_("li",[a._v("可以预先定义逻辑相关的离散数据的需求")]),a._v(" "),_("li",[a._v("数据一致性与完整性是必要的")]),a._v(" "),_("li",[a._v("具有良好的开发者经验和技术支持的标准的成熟技术")])]),a._v(" "),_("h3",{attrs:{id:"适合使用nosql开发的项目"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#适合使用nosql开发的项目"}},[a._v("#")]),a._v(" 适合使用NoSQL开发的项目：")]),a._v(" "),_("ul",[_("li",[a._v("不相关，不确定和逐步发展的数据需求")]),a._v(" "),_("li",[a._v("更简单或者更宽松的能够快速开始编程的项目")]),a._v(" "),_("li",[a._v("速度和可扩展性至关重要的，需要对大数据库有性能要求")]),a._v(" "),_("li",[a._v("需要使用 CouchDB但因为数据改变太频繁而占满内存")])]),a._v(" "),_("blockquote",[_("p",[a._v("SQL是精确的。它最适合于具有精确标准的定义明确的项目。典型的使用场景是在线商店和银行系统。")])]),a._v(" "),_("blockquote",[_("p",[a._v("NoSQL是多变的。它最适合于具有不确定需求的数据。典型的使用场景是社交网络，客户管理和网络分析系统。")])]),a._v(" "),_("h2",{attrs:{id:"读完本文后的思考"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#读完本文后的思考"}},[a._v("#")]),a._v(" 读完本文后的思考")]),a._v(" "),_("p",[_("strong",[a._v("两个项目，大家看下分别适合哪种类型数据库？为什么这么选择？在评论区讨论")])]),a._v(" "),_("ol",[_("li",[a._v("一款儿童服装电商类平台")]),a._v(" "),_("li",[a._v("一款社交网络平台，一些私信，点赞留言功能未确定，可能会随时删减少")])])])}),[],!1,null,null,null);t.default=s.exports}}]);