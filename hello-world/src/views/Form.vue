<template>
  <div>
    <h2>表单</h2>
    <input type="text" v-model="inputData">
    <button @click="showData">显示inputData</button>
    <button @click="inputData='input值改变了'">改变data的值</button>
  </div>
</template>

<script>
export default {

  data () {
    return {
      inputData:''
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
