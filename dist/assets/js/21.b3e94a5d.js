(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{383:function(s,t,a){s.exports=a.p+"assets/img/bg2011050101.656b8355.png"},672:function(s,t,a){"use strict";a.r(t);var e=a(42),n=Object(e.a)({},(function(){var s=this,t=s.$createElement,e=s._self._c||t;return e("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[e("h1",{attrs:{id:"npm-中常用命令"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#npm-中常用命令"}},[s._v("#")]),s._v(" NPM 中常用命令")]),s._v(" "),e("p",[s._v("全称 node package manager 是世界上最大规模的包管理系统,官网是这样介绍的 Build amazing things...")]),s._v(" "),e("h2",{attrs:{id:"一-npm-init"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#一-npm-init"}},[s._v("#")]),s._v(" 一.npm init")]),s._v(" "),e("p",[s._v("默认大家肯定比较熟悉了，直接 npm init -y 了事，这回我们再来仔细看看")]),s._v(" "),e("p",[s._v("包的描述信息")]),s._v(" "),e("div",{staticClass:"language-text extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v('{\n  "name": "my-pack",\n  "version": "1.0.0",\n  "main": "index.js",\n  "scripts": {},\n  "license": "ISC"\n}\n')])])]),e("p",[s._v("这里先声明的 npm 版本是 6.7.0,因为我的 node 版本是 v11.14.0")]),s._v(" "),e("p",[s._v("咱们来一个个说说这里比较重要的字段:name、version、main、scripts、license")]),s._v(" "),e("ul",[e("li",[s._v("name 是当前包的名字，也就是最终发布的 npm 官网上包的名字。不能和已有的包重名哦")]),s._v(" "),e("li",[s._v("version 就是当前包的版本号，主要我们要探究如果优雅的管理版本号")]),s._v(" "),e("li",[s._v("main 就是当前包的入口文件，也就是使用 require 默认引入的文件")]),s._v(" "),e("li",[s._v("scripts 可以配置一些执行脚本")]),s._v(" "),e("li",[s._v("license 协议许可")])]),s._v(" "),e("h2",{attrs:{id:"二-npm-install"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#二-npm-install"}},[s._v("#")]),s._v(" 二.npm install")]),s._v(" "),e("h3",{attrs:{id:"_1-全局安装"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-全局安装"}},[s._v("#")]),s._v(" 1.全局安装")]),s._v(" "),e("p",[e("strong",[s._v("全局包 npm install nrm --force 强制覆盖")]),s._v("\n其他安装的全局包都放到了 npm 上")]),s._v(" "),e("p",[s._v("npm 之所以能使用是因为放到了 path 目录下")]),s._v(" "),e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[s._v("npm install http"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("server "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("g\n")])])]),e("p",[s._v("安装后得到")]),s._v(" "),e("ul",[e("li",[s._v("/usr/local/bin/http-server -> /usr/local/lib/node_modules/http-server/bin/http-server")]),s._v(" "),e("li",[s._v("/usr/local/bin/hs -> /usr/local/lib/node_modules/http-server/bin/http-server")])]),s._v(" "),e("p",[s._v("全局安装的意思很简单,就是安装的模块会被安装到全局下，可以在命令行中直接使用安装的包,其实只是在**/user/local/bin 目录下作了个链接连接到 /usr/local/lib/node_modules/http-server/bin/http-server 这个文件，当我们执行 http-server**这个命令时，会调用链接的这个文件。")]),s._v(" "),e("p",[s._v("mac 因为有权限问题，这里我们加 sudo 来执行命令")]),s._v(" "),e("p",[s._v("我们可以自己来尝试写一个包 ,创建 bin 目录，新增 www 文件,名字叫什么无所谓~")]),s._v(" "),e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[s._v("#"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("!")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("usr"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("bin"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("env node "),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//这句话是要用系统环境的node来执行")]),s._v("\nconsole"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("log")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[s._v("'珠峰架构'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// #! 这句表示采用node来执行此文件，同理 shell可以表示 sh")]),s._v("\n")])])]),e("p",[s._v("更新 package.json 文件")]),s._v(" "),e("div",{staticClass:"language-json extra-class"},[e("pre",{pre:!0,attrs:{class:"language-json"}},[e("code",[e("span",{pre:!0,attrs:{class:"token property"}},[s._v('"bin"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n\t"),e("span",{pre:!0,attrs:{class:"token property"}},[s._v('"my-pack"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"./bin/www"')]),s._v(" "),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 这里要注意名字和你建立的文件夹相同")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n")])])]),e("p",[s._v("好啦，写好啦！这里我们先不说发包的事，先用一个常用的命令，他可以实现链接的功能")]),s._v(" "),e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[s._v("npm link "),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// mac添加sodo 把当前模块临时放到npm下 方便调试")]),s._v("\n")])])]),e("p",[s._v("得到")]),s._v(" "),e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("usr"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("local"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("lib"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("node_modules"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("xiaoyu "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("Users"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("zouyu"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("Desktop"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("node"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("zy"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("node2\n")])])]),e("p",[s._v("这样我们在命令行中直接输入 my-pack 就可以 打印出珠峰架构")]),s._v(" "),e("p",[s._v("#2.本地安装")]),s._v(" "),e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[s._v("npm install webpack "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("--")]),s._v("save"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("dev\n")])])]),e("p",[s._v("本地安装很好理解啦~ 就是所谓的在项目中使用，而非在命令行中使用！这里我们看到生成了一个 package-lock.json 文件，而且将安装的模块放到了 node_modules 下,而且 json 中也新增了些内容")]),s._v(" "),e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"devDependencies"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"webpack"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"^4.39.3"')]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])])]),e("p",[s._v("这里我们先来简单介绍下基本的使用")]),s._v(" "),e("blockquote",[e("p",[s._v("--save-dev 代表当前依赖只在开发时被应用,如果默认不写相当于 --save 为项目依赖开发上线都需要")])]),s._v(" "),e("p",[s._v("也可以指定版本号来安装包")]),s._v(" "),e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[s._v("npm i jquery@"),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("2.2")]),e("span",{pre:!0,attrs:{class:"token number"}},[s._v(".0")]),s._v(" # install可以简写成i\n\n")])])]),e("p",[s._v("默认执行 npm i 会安装项目中所需要的依赖,如果只想安装生产环境依赖可以增加--production 参数")]),s._v(" "),e("h2",{attrs:{id:"三-package-lock-文件"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#三-package-lock-文件"}},[s._v("#")]),s._v(" 三.package-lock 文件")]),s._v(" "),e("p",[s._v("自 npm 5 之后所有的依赖包都采用扁平化管理的方式\npackage-lock.json 的作用是锁定依赖安装结构,保证在任意机器上执行 npm install 都会得到完全相同的 node_modules 结果,因为 package-lock.json 存储所有安装的信息")]),s._v(" "),e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"name"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"my-pack"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"version"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"1.0.0"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"lockfileVersion"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"requires"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("true")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"dependencies"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"@webassemblyjs/ast"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"version"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"1.8.5"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 当前依赖的版本")]),s._v("\n    "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"resolved"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"https://registry.npm.taobao.org/@webassemblyjs/ast/download/@webassemblyjs/ast-1.8.5.tgz"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 从哪个渠道安装的")]),s._v("\n    "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"integrity"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"sha1-UbHF/mV2o0lTv0slPfnw1JDZ41k="')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 内容hash")]),s._v("\n    "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"dev"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("true")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"requires"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"@webassemblyjs/helper-module-context"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"1.8.5"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"@webassemblyjs/helper-wasm-bytecode"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"1.8.5"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"@webassemblyjs/wast-parser"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"1.8.5"')]),s._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("...")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("\n")])])]),e("p",[s._v("如果手动更新了 package.json 文件,执行安装命令会下载对应的新版本,并且会自动更新 lock 文件~")]),s._v(" "),e("h2",{attrs:{id:"四-依赖方式"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#四-依赖方式"}},[s._v("#")]),s._v(" 四.依赖方式")]),s._v(" "),e("p",[s._v("简单介绍下常见的依赖方式：")]),s._v(" "),e("h3",{attrs:{id:"_1-dependencies-项目依赖"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-dependencies-项目依赖"}},[s._v("#")]),s._v(" 1.dependencies 项目依赖")]),s._v(" "),e("p",[s._v("可以使用 npm install -S 或 npm install --save 保存到依赖中，当发布到 npm 上时 dependencies 下的模块会作为依赖，一起被下载!")]),s._v(" "),e("h3",{attrs:{id:"_2-devdependencies-开发依赖"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-devdependencies-开发依赖"}},[s._v("#")]),s._v(" 2.devDependencies 开发依赖")]),s._v(" "),e("p",[s._v("可以使用 npm install -D 或 npm install --save-dev 保存到依赖中。 当发布到 npm 上时 devDependencies 下面的模块就不会自动下载了,如果只是单纯的开发项目 dependencies,devDependencies 只有提示的作用!")]),s._v(" "),e("h3",{attrs:{id:"_3-peerdependencies-同版本依赖"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_3-peerdependencies-同版本依赖"}},[s._v("#")]),s._v(" 3.peerDependencies 同版本依赖")]),s._v(" "),e("p",[s._v('同等依赖,如果你安装我，那么你最好也安装我对应的依赖，如果未安装会报出警告 bash "peerDependencies": { "jquery": "2.2.0" }')]),s._v(" "),e("blockquote",[e("p",[s._v("npm WARN youxuan@1.0.0 requires a peer of jquery@2.2.0 but none is installed. You must install peer dependencies yourself.")])]),s._v(" "),e("h3",{attrs:{id:"_4-bundleddependencies-捆绑依赖"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_4-bundleddependencies-捆绑依赖"}},[s._v("#")]),s._v(" 4.bundledDependencies 捆绑依赖")]),s._v(" "),e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"bundleDependencies"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("\n    "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"jquery"')]),s._v("\n "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n")])])]),e("p",[s._v("使用 npm pack 打包 tgz 时会将捆绑依赖一同打包")]),s._v(" "),e("h3",{attrs:{id:"_5-optionaldependencies-可选依赖"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_5-optionaldependencies-可选依赖"}},[s._v("#")]),s._v(" 5.optionalDependencies 可选依赖")]),s._v(" "),e("p",[s._v("如果发现无法安装或无法找到，不会影响 npm 的安装")]),s._v(" "),e("h3",{attrs:{id:"五-npm-版本管理"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#五-npm-版本管理"}},[s._v("#")]),s._v(" 五.npm 版本管理")]),s._v(" "),e("p",[s._v("npm 采用了 semver 规范作为依赖版本管理方案。semver 约定一个包的版本号必须包含 3 个数字")]),s._v(" "),e("p",[s._v("MAJOR.MINOR.PATCH 意思是 主版本号.小版本号.修订版本号")]),s._v(" "),e("ul",[e("li",[s._v("MAJOR 对应大的版本号迭代，做了不兼容旧版的修改时要更新 MAJOR 版本号")]),s._v(" "),e("li",[s._v("MINOR 对应小版本迭代，发生兼容旧版 API 的修改或功能更新时，更新 MINOR 版本号")]),s._v(" "),e("li",[s._v("PATCH 对应修订版本号，一般针对修复 BUG 的版本号\n当我们每次发布包的时候都需要升级版本号")])]),s._v(" "),e("div",{staticClass:"language-text extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("\nnpm version major  # 大版本号加 1，其余版本号归 0\nnpm version minor  # 小版本号加 1，修订号归 0\nnpm version patch  # 修订号加 1\n")])])]),e("p",[s._v("如果使用 git 管理项目会自动 git tag 标注版本号")]),s._v(" "),e("p",[s._v("来看看版本号的标识含义:")]),s._v(" "),e("table",[e("thead",[e("tr",[e("th",[s._v("range")]),s._v(" "),e("th",{staticStyle:{"text-align":"center"}},[s._v("含义")]),s._v(" "),e("th",{staticStyle:{"text-align":"right"}},[s._v("例")])])]),s._v(" "),e("tbody",[e("tr",[e("td",[s._v("^2.2.1")]),s._v(" "),e("td",{staticStyle:{"text-align":"center"}},[s._v("指定的 MAJOR 版本号下, 所有更新的版本")]),s._v(" "),e("td",{staticStyle:{"text-align":"right"}},[s._v("\b 匹配 2.2.3, 2.3.0; 不匹配 1.0.3, 3.0.1")])]),s._v(" "),e("tr",[e("td",[s._v("~2.2.1")]),s._v(" "),e("td",{staticStyle:{"text-align":"center"}},[s._v("指定 MAJOR.MINOR 版本号下，所有更新的版本")]),s._v(" "),e("td",{staticStyle:{"text-align":"right"}},[s._v("匹配 2.2.3, 2.2.9 ; 不匹配 2.3.0, 2.4.5")])]),s._v(" "),e("tr",[e("td",[s._v(">=2.1")]),s._v(" "),e("td",{staticStyle:{"text-align":"center"}},[s._v("版本号大于或等于 2.1.0")]),s._v(" "),e("td",{staticStyle:{"text-align":"right"}},[s._v("匹配 2.1.2, 3.1")])]),s._v(" "),e("tr",[e("td",[s._v("<=2.2")]),s._v(" "),e("td",{staticStyle:{"text-align":"center"}},[s._v("版本号小于或等于 2.2")]),s._v(" "),e("td",{staticStyle:{"text-align":"right"}},[s._v("匹配 1.0.0, 2.2.1, 2.2.11")])]),s._v(" "),e("tr",[e("td",[s._v("1.0.0 - 2.0.0")]),s._v(" "),e("td",{staticStyle:{"text-align":"center"}},[s._v("版本号 \b 从 1.0.0 (含) 到 2.0.0 (含)")]),s._v(" "),e("td",{staticStyle:{"text-align":"right"}},[s._v("匹配 1.0.0, 1.3.4, 2.0.0")])])])]),s._v(" "),e("p",[s._v("预发版：")]),s._v(" "),e("p",[s._v("alpha(α)：预览版，或者叫内部测试版；一般不向外部发布，会有很多 bug；一般只有测试人员使用。")]),s._v(" "),e("p",[s._v("beta(β)：测试版，或者叫公开测试版；这个阶段的版本会一直加入新的功能；在 alpha 版之后推出。")]),s._v(" "),e("p",[s._v("rc(release candidate)：最终测试版本；可能成为最终产品的候选版本，如果未出现问题则可发布成为正式版本。")]),s._v(" "),e("p",[s._v("2.1.0-beta.1 这样声明的版本用户不会立马使用，可以用来做测试使用")]),s._v(" "),e("h2",{attrs:{id:"六-scripts-配置"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#六-scripts-配置"}},[s._v("#")]),s._v(" 六.scripts 配置")]),s._v(" "),e("p",[s._v("在 package.json 中可以定义自己的脚本通过 npm run 来执行")]),s._v(" "),e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[s._v("\n"),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"scripts"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n   "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"hello"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"echo hello"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n   "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"build"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"webpack"')]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])])]),e("p",[s._v("我们可以使用 npm run hello 执行脚本,也可以使用 npm run build 执行 node_modules/.bin 目录下的 webpack 文件")]),s._v(" "),e("ul",[e("li",[e("p",[s._v("npm run 命令执行时，会把 ./node_modules/.bin/ 目录添加到执行环境的 PATH 变量中，因此如果某个命令行包未全局安装，而只安装在了当前项目的 node_modules 中，通过 npm run 一样可以调用该命令。\n运行之后就会删除PATH环境变量")])]),s._v(" "),e("li",[e("p",[s._v("执行 npm 脚本时要传入参数，需要在命令后加 -- 标明, 如 npm run hello -- --port 3000 可以将 --port 参数传给 hello 命令")])]),s._v(" "),e("li",[e("p",[s._v("npm 提供了 pre 和 post 两种钩子机制，可以定义某个脚本前后的执行脚本,没有定义默认会忽略")])])]),s._v(" "),e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"scripts"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n   "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"prehello"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"echo prehello"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n   "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"hello"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"echo hello"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n   "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"posthello"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"echo posthello"')]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])])]),e("p",[s._v("可以通过打印全局 env 和 在项目下执行 npm run env 来对比 PATH 属性，\n不难发现在执行 npm run 的时候确实会将 ./node_modules/.bin/ 目录添加到 PATH 中")]),s._v(" "),e("h2",{attrs:{id:"七-协议"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#七-协议"}},[s._v("#")]),s._v(" 七.协议")]),s._v(" "),e("p",[e("img",{attrs:{src:a(383),alt:""}})]),s._v(" "),e("p",[s._v("不废话，这张图就说明了为什么 MIT 许可是最大的了!")]),s._v(" "),e("h2",{attrs:{id:"八-npx-用法"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#八-npx-用法"}},[s._v("#")]),s._v(" 八.npx 用法")]),s._v(" "),e("p",[s._v("npx 命令是 npm v5.2 之后引入的新命令，npx 可以帮我们直接执行 node_modules/.bin 文件夹下的文件")]),s._v(" "),e("h3",{attrs:{id:"_1-执行脚本"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-执行脚本"}},[s._v("#")]),s._v(" 1.执行脚本")]),s._v(" "),e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[s._v("npx webpack\n\n")])])]),e("p",[s._v("是不是省略了配置 scripts 脚本啦！")]),s._v(" "),e("h3",{attrs:{id:"_2-避免安装全局模块"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-避免安装全局模块"}},[s._v("#")]),s._v(" 2.避免安装全局模块")]),s._v(" "),e("p",[s._v("全局安装的模块会带来很多问题，例如：多个用户全局安装的模块版本不同")]),s._v(" "),e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[s._v("npx create"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("react"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("app react"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("project\n\n")])])]),e("p",[s._v("我们可以直接使用 npx 来执行模块，它会先进行安装，安装执行后会将下载过的模块删除~，这样可以一直使用最新版本啦~")]),s._v(" "),e("h3",{attrs:{id:"九-包的发布"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#九-包的发布"}},[s._v("#")]),s._v(" 九.包的发布")]),s._v(" "),e("p",[s._v("包的发布比较简单，首先我们需要先切换到官方源,这里推荐个好用的工具 nrm")]),s._v(" "),e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[s._v("npm install nrm "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("g\nnrm use npm # 切换到官方源\n")])])]),e("p",[s._v("之后更新名字哈，这里也可以发布 作用域包 选定版本后,忽略文件夹可以使用 .npmignore,一切就绪后，发布！！！")]),s._v(" "),e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[s._v("npm publish\nnpm unpublish\n")])])]),e("p",[s._v("ok，我们的包就可以成功的发布到 npm 上啦~")])])}),[],!1,null,null,null);t.default=n.exports}}]);