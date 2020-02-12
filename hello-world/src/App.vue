<template>
  <!-- 只允许一个根dom -->
  <div id="app">
    {{data>10?'我大于10':'我小于10'}}
    <div>{{testNode()}}</div>
    <div>{{data||'我是备用的'}}</div>
    <button @click="click"> 事件</button>
    <div v-if="booleans">我有v-if指令</div>
    <div v-else>我有v-else指令</div>
    <div v-show="booleans">我有v-show指令</div>
    <div v-text="html"></div>
    <div v-html="html"></div>

    <a :href="href">跳转百度</a>
    <img :src="src" alt="">
  </div>
</template>

<script>
export default {
  data () {
    return {
      data: 2,
      booleans:1,
      text:'我有一个v-text指令',
      html:"<div style='color:red'>我里面有一个div<div>",
      href:'https:www.baidu.com',
      src:'http://a3.att.hudong.com/68/61/300000839764127060614318218_950.jpg'
    }
  },
  methods: {
    testNode(){
      return '我是函数'
    },
    click(){
      console.log('你摁了一个按钮')
    }
  },
  created () {
    // console.log(this.datas)
  },
  mounted(){
  }
}
</script>>
