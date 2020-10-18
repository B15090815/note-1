<template>
  <el-form class="register_container" label-position="left" label-width="0px">
    <h3 class="register_title">注册</h3>
    <el-form-item>
      <el-input type="text" v-model="registerForm.username" placeholder="邮箱"></el-input>
    </el-form-item>
    <el-form-item>
      <el-input type="password" v-model="registerForm.password" placeholder="密码"></el-input>
    </el-form-item>
    <el-form-item>
      <el-input type="password" v-model="registerForm.confirm" placeholder="确认密码"></el-input>
    </el-form-item>
    <el-form-item>
      <el-row>
        <el-col :span="12">
          <el-button type="primary" class="register_btn">注册</el-button>
        </el-col>
        <el-col :span="12">
          <el-link type="primary" :underline="false" href="/login" class="login_link">立即登录>></el-link>
        </el-col>
      </el-row>
    </el-form-item>
  </el-form>
</template>

<script>
export default {
  name: 'register',
  data () {
    return {
      registerForm: {
        username: '',
        password: '',
        confirm: ''
      }
    }
  }
}
</script>

<style scoped>
.register_container {
  border-radius: 15px;
  background-clip: padding-box;
  margin: 90px auto;
  width: 350px;
  padding: 35px 35px 15px 35px;
  background: #fff;
  border: 1px solid #eaeaea;
  box-shadow: 0 0 25px #cac6c6;
}

.register_title {
  margin: 0 auto 40px auto;
  text-align: center;
  color: #505458;
}

.register_btn {
  width: 100%;
  background: #505458;
  border: none
}

.login_link {
  float: right;
}
</style>
