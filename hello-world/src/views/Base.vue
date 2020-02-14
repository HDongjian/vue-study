<template>
  <div>
    <h1>基础</h1>
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

    <div :style="[style1,style2]">我是用来绑定内联样式的</div>
    <button @click="$router.push('form')">跳到base</button></br>

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
      src:'http://a3.att.hudong.com/68/61/300000839764127060614318218_950.jpg',
      style1:{
        color:'red'
      },
      style2:{
        color:'blue'
      },
      inputData:'我是input12'
    }
  },

 created(){},
 mounted(){},
 methods: {
   testNode(){
      return '我是函数'
    },
    showData(){
      console.log(this.inputData)
    },
    click(){
      console.log('你摁了一个按钮')
    }
 },
}
</script>

<style lang='less' scoped>

</style>
