<template>
  <!-- 只允许一个根dom -->
  <div id="app">
    dfd
    {{datas}}
    <button @click="click">按钮</button>
  </div>
</template>

<script>
export default {
  data () {
    return {
      datas: '张三'
    }
  },
  methods: {
    click () {
      console.log('李四')
    }
  },
  beforeCreate () {
    console.log(this.datas)
    console.log('beforeCreate')
  },
  created () {
    console.log(this.datas)
  }
}
</script>>
