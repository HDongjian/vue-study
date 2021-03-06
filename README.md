
# 前端技术概述

HTML CSS JS 最初的前端基本技术（浏览器除一些媒体文件：图片，视频；可以识别的代码文件）,目前前端框架，vue、angular、react、typeScript它们自己有什么类型的文件，.ts,.vue.jsx，less,scss，最终都会被编译成这三个基本文件；

关于 ECMAscript  DOM  BOM 对象：下去可以查一下

库：jQuery 一些方法类的集合

插件：可以理解是为了某一功能而实现的可以直接利用的代码

框架：通过一些框架思想MVC,MVVC来实现一种不同的写法，每个框架都有自己的语法结构和实现原理；

>  vscode

# Vue

用Vue的情况下大部分都是单页面应用SPA，只有一个html文件

- 如果路径中有#符号，一定是单页面应用，但是没有不一定是多页面

渐进式JS框架

node

npm (淘宝镜像cnpm) 

webpack


## vue-cli3.0

说明文档：http://blog.hdongyu.com/2019/04/28/vue-cli3_start/

### 脚手架简单介绍

- 项目运行以及打包是基于node环境下
  - node项目：package.json(配置文件);node_modules：依赖包；
- webpack是打包以及运行工具
- npm 是node下的一个命令

### 脚手架配置

官网：https://cli.vuejs.org/zh/config/#devserver

基础引入

```js

module.exports = {

}
// require(引入) module.exports（放出） 是node模块化外访变量的一种写法

devServer: {}

// 是本地运行的基本配置

lintOnSave: process.env.NODE_ENV !== 'production'

//在生产构建时禁用 eslint-loader

//process.env.NODE_ENV 是node环境的一个全局变量

// development  production

// import（引入）  export default（放出） 是es6模块化的代码

```

### package.json

执行以下命令，就会生成此文件

```shell

# 初始化npm

npm init

```

## 生命周期

说明：http://blog.hdongyu.com/2019/01/23/vue_lifeCycle/


## 0210任务

- node官网下载node并安装,node -v 校验安装是否成功
- 按照vue-cli3.0说明，新建项目
- 尝试{{}}绑定变量，尝试click和其他方法，熟悉声明周期前两个；

## 基础语法

### 模板语法

```js
data () {
  return {
    datas: '张三'
  }
}
```

```html
<!-- 基础用法 -->
<span>{{data}}<span>

<!-- 可以使用js表达式 -->

{{data>10?'我大于10':'我小于10'}}

<div>{{testNode()}}</div>

<div>{{data||'我是备用的'}}</div>

<!-- 注意 -->
{{ var a = 1 }}

<!-- 以上形式不可以 -->

<!-- 无论是表达式也好或者函数也可以，都必须是有结果的 -->

```

### 指令

#### v-on 绑定事件

```js
<button v-on:click="click"> 事件</button>

click(){
  console.log('你摁了一个按钮')
}

// v-on:可以用@来代替

```

#### v-if

来控制一个元素是否显示

js中 null false  空字符串  数字0判断的时候都为false，
但是 空数组 [] 空对象 {} 为true

js里面只有 字符串，数字，null，boolean，数组，对象，函数

#### v-else

不需要绑定值，同理还有一个v-else-if

#### v-show

用法和v-if基本类似

v-show是为元素增加一个display: none;的行内css属性，但是v-if是彻底将元素从父元素中移除

> 注意：如果为一个组件(拥有完整寿命周期的vue文件),设置v-if,在v-if的值由false变为true的时候，组件会重新渲染，但是v-show不会；

#### v-test

文本渲染

#### v-html

渲染html代码


#### v-bind

当我需要为一些元素已经有的属性绑定变量，就需要用到v-bind,
可以简写为:


## 组件

### 组件有两种写法

1.直接声明

```js
Vue.component('blog-post3', {
  props: ['post'],
  template: `
      <div class="blog-post3">
        <h3>{{ post.title }}</h3>
      </div>
    `
})
```

2. `.vue`文件都可以作为组件引入


```js
import HelloWord from './components/HelloWorld.vue'
Vue.component('hello-world',HelloWord)
```
>基本上都是第二种，1.可以将复杂的文件分为多个；2.可以将同样功能的组件复用

### 引入方式

1. 全局引入

这种方式无论在任何一个页面中(.vue文件中)都可以使用

```js
import HelloWord from './components/HelloWorld.vue'
Vue.component('hello-world',HelloWord)
```

2. 局部引入

```js
import HelloWorld from '../components/HelloWorld'
export default {
  components:{
    HelloWorld:HelloWorld
  }
}
```

### 组件通信

#### 父到子

```html
<hello-world :data="childData"></hello-world>
```

```js
props:['data']

```

#### 子到父

父组件
```js
this.$on('getChild',(data)=>{
  console.log(data)
})
```
子组件
```js
this.$parent.$emit('getChild','我是从儿子过来的')
```


父组件为子组件绑定一个函数`@getChild`，相当于子组件注册$on事件


## UI框架--iview

有一整套基本的UI样式和一些基础的JS相关功能


iview官网：https://www.iviewui.com/


```shell
cnpm i iview --save
cnpm i iview -S

# 这种方式会将包安装在dependencies

npm i less less-loader -D

#会安装到devDependencies里面，这个就是仅仅在开发过程中需要的依赖包

npm uninstall less

# 卸载依赖

cnpm uninstall less@2.7.3 -D

# 安装指定版本依赖

```

```json
"Print to console": {
  "prefix": "vuec",
  "body": [
    "<template>",
    "  <div>",
    "    $0",
    "  </div>",
    "</template>",
    "",
    "<script>",
    "export default {",
    "",
    "  data () {",
    "    return {",
    "    }",
    "  },",
    "",
    "  created () {},",
    "  mounted () {},",
    "  methods: {}",
    "}",
    "</script>",
    "",
    "<style lang='less'>",
    "",
    "</style>",
    ""
  ],
  "description": "Log output to console"
}

```


## Less

嵌套写法

```less
.login-container{
  .login-card{
    background: #000;
  }
}

.login-container .login-card {
    background: #000;
}
```

## slot 插槽

这个自己明后天去vue官网看一下

ref：如果在组件上面设置获取的就是组件的vue实例对象，如果在dom元素上设置，获取的就是dom对象