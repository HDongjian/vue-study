<template>
  <!-- 只允许一个根dom -->
  <div id="app">
    <router-view></router-view>
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
  created () {
    // console.log(this.datas)
  },
  mounted(){
  }
}
</script>>
