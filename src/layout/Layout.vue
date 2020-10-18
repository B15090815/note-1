<template>
  <el-container>
    <el-menu class="el-menu-vertical-demo" :collapse="true">
      <el-menu-item>
        <i class="el-icon-edit"></i>
        <span slot="title">写作</span>
      </el-menu-item>
      <el-menu-item>
        <i class="el-icon-menu"></i>
        <span slot="title">统计</span>
      </el-menu-item>
      <el-menu-item class="folds">
        <i class="el-icon-s-tools"></i>
      </el-menu-item>
    </el-menu>
    <el-main>
      <router-view></router-view>
    </el-main>
  </el-container>
</template>

<script>
export default {
  name: 'Layout'
}
</script>

<style scoped>
.folds {
  margin-bottom: 3%;
}
</style>
