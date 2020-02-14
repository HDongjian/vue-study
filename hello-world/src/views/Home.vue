<template>
  <div class="home">
    <router-link to="/base">Go to base</router-link></br>
    <router-link to="/form">Go to form</router-link></br>
    <button @click="$router.push({path:'base',params:{index:1}})">跳到base</button></br>
    我是home
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld
  }
}
</script>
