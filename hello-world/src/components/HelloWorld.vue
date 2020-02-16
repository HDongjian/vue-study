<template>
  <div>
    我是helloWorld
  </div>
</template>

<script>
export default {
  // props:['data','getChild'],
  data () {
    return {
    }
  },

  created(){
    // console.log(this.data)
    // this.$parent.$emit('getChild','我是从儿子过来的')
    // this.getChild('我是从儿子过来的')
    this.$emit('getChild','我是从儿子过来的')
    console.log(this)
  },
  mounted(){},
  methods: {},
}
</script>

<style lang='less'>

</style>
