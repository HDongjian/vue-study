<template>
  <div class="home">
    <my-button ref="button" type="primary">我是button</my-button>
    <my-button type="success">我是button</my-button>
    <my-button>我没有type</my-button>
    <Button type="primary">Primary</Button>
    <Button type="success">Success</Button>
  </div>
</template>

<script>

//我需要一种可以在父组件插入内容到子组件里面的东西:叫插槽\

// <slot></slot>
// <slot name="default"></slot>

// 这种叫做默认插槽

// 在A页面里引入B组件，B这就是子组件；A就是B父组件



//ref

// 1. 解析.vue文件，拿到dom对象之后，判断你是否设置了ref

// 2.设置了ref的话，如果是dom直接获取dom对象并挂载到$refs上面

// 3.如果是组件的话，拿到组件实例化之后的对象挂载到$refs上面

// this.$refs.button = vue对象

// this.$refs.div = dom对象

export default {
  name: 'Home',
  mounted(){
    this.$refs.button.testButton()
  }
};
</script>
