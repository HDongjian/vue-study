<template>
  <div class="my-button">
    <button :class="type?'mb-'+type:''">
      <slot name="default"></slot>
    </button>
  </div>
</template>

<script>
export default {
  props:['type'],
  data () {
    return {
    }
  },

  created () {
    // this.testButton()
  },
  mounted () {},
  methods: {
    testButton(){
      console.log('我是button，出发了内部函数')
    }
  }
}
</script>

<style lang='less'>
.my-button{
  button{
    display: inline-block;
    margin-bottom: 0;
    font-weight: 400;
    text-align: center;
    vertical-align: middle;
    touch-action: manipulation;
    cursor: pointer;
    background-image: none;
    border: 1px solid transparent;
    white-space: nowrap;
    user-select: none;
    height: 32px;
    padding: 0 15px;
    font-size: 14px;
    border-radius: 4px;
    transition: color .2s linear,background-color .2s linear,border .2s linear,box-shadow .2s linear;
    color: #515a6e;
    background-color: #fff;
    border-color: #dcdee2;
  }
  .mb-primary{
    color: #fff;
    background-color: #2d8cf0;
    border-color: #2d8cf0;
  }
  .mb-success{
    color: #fff;
    background-color: #19be6b;
    border-color: #19be6b;
  }
}

</style>
