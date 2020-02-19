<template>
  <div class="login-container">
    <Card class="login-card">
      <div slot="title">登录</div>
      <Form ref="formInline" :model="formInline" :rules="ruleInline">
        <Form-item label="用户名" prop="user">
          <Input type="text" v-model="formInline.user" placeholder="Username">
            <Icon type="ios-person-outline" slot="prepend"></Icon>
          </Input>
        </Form-item>
        <Form-item label="密码" prop="password">
          <Input type="password" v-model="formInline.password" placeholder="Password">
            <Icon type="ios-battery-dead" slot="prepend"/>
          </Input>
        </Form-item>
        <Form-item>
          <Button type="primary" long shape="circle" @click="handleSubmit('formInline')">登录</Button>
        </Form-item>
      </Form>
    </Card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      formInline: {},
      ruleInline: {
        user: [{ required: true, message: "请填写用户名", trigger: "blur" }],
        password: [
          { required: true, message: "请填写密码", trigger: "blur" },
          { type: "string", min: 6, message: "密码长度不能小于6位", trigger: "blur" }
        ]
      }
    };
  },

  created() {},
  mounted() {
  },
  methods: {
    handleSubmit(){
      this.$refs.formInline.validate(valid=>{
        console.log(valid)
      })
    }
  }
};
</script>

<style lang="less">
.login-container {
  background: #2db7f5;
  height: 100vh; // 100%
  overflow: hidden;
  .login-card {
    width: 600px;
    margin: 60px auto 0;
  }
}
</style>
