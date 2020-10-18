<template>
  <el-container>
    <el-header>
      <el-menu>
        <el-menu-item>Note</el-menu-item>
      </el-menu>
    </el-header>
    <el-main>
      <router-view></router-view>
    </el-main>
  </el-container>
</template>

<script>
export default {
  name: 'AuthLayout'
}
</script>

<style scoped>

</style>
