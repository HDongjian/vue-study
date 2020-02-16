<template>
  <div>
   <h1>我是组件</h1>
   <hello-world :data="childData" @getChild="getChild"></hello-world>
  </div>
</template>

<script>
import HelloWorld from '../components/HelloWorld'
export default {
  components:{
    HelloWorld:HelloWorld
  },
  data () {
    return {
      childData:'123'
    }
  },

 created(){
  //  this.$on('getChild',(data)=>{
  //    console.log(data)
  //  })
 },
 mounted(){},
 methods: {
   getChild(data){
     console.log(data)
   }
 },
}
</script>

<style lang='less'>

</style>
