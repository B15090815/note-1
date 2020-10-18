<template>
  <el-form class="login_container" label-position="left" label-width="0px">
    <h3 class="login_title">登录</h3>
    <el-form-item>
      <el-input type="text" v-model="loginForm.username" placeholder="账号"></el-input>
    </el-form-item>
    <el-form-item>
      <el-input type="password" v-model="loginForm.password" placeholder="密码"></el-input>
    </el-form-item>
    <el-form-item>
      <el-row>
        <el-col :span="12">
          <el-button type="primary" class="login_btn" @click="login">登录</el-button>
        </el-col>
        <el-col :span="12">
          <el-link type="primary" :underline="false" href="/register" class="reg_link">现在注册>></el-link>
        </el-col>
      </el-row>
    </el-form-item>
  </el-form>
</template>

<script>
export default {
  name: 'Login',
  data () {
    return {
      loginForm: {
        username: '',
        password: ''
      }
    }
  },
  methods: {
    login () {
      let that = this
      that.$axios
        .post(that.$config.url + 'login', {
          'account': that.loginForm.username,
          'password': that.loginForm.password
        })
        .then(function (res) {
          console.log(res)
          // todo
        })
        .catch(function (error) {
          console.log(error)
        })
    }
  }
}
</script>

<style scoped>
.login_container {
  border-radius: 15px;
  background-clip: padding-box;
  margin: 90px auto;
  width: 350px;
  padding: 35px 35px 15px 35px;
  background: #fff;
  border: 1px solid #eaeaea;
  box-shadow: 0 0 25px #cac6c6;
}

.login_title {
  margin: 0 auto 40px auto;
  text-align: center;
  color: #505458;
}

.login_btn {
  width: 100%;
  background: #505458;
  border: none
}

.reg_link {
  float: right;
}
</style>
