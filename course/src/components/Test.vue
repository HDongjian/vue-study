<template>
  <div id="test">
    我是text文件
  </div>
</template>

<script>
export default {

  data () {
    return {
      data:'我是test的data数据'
    }
  },

  created () {
    console.log(this.data)
  },
  mounted () {},
  methods: {}
}
</script>

<style lang='less'>

</style>
