<template>
  <el-container>
    <el-row :gutter="10">
      <el-col :span="4">
        <el-card>
          <el-row :gutter="10">
            <el-col :span="18">
              <el-cascader></el-cascader>
            </el-col>
            <el-col :span="6">
              <el-button type="primary" icon="el-icon-plus" circle></el-button>
            </el-col>
          </el-row>
          <el-divider></el-divider>
          <div class="note_list" ref="note">
            <el-card shadow="hover" v-for="o in 2" :key="o" class="note">
              <div class="note_info">
                <span>标题</span>
                <br>
                <time>{{ currentDate }}</time>
                <p>qwedsadasdbuw</p>
              </div>
            </el-card>
          </div>
        </el-card>
      </el-col>
      <el-col :span="20">
        <el-card>
          <el-input class="note_name" :placeholder="defaultNoteTitle" v-model="noteTitle"></el-input>
          <div id="main" ref="editor">
            <mavon-editor v-model="noteContent">
            </mavon-editor>
          </div>
        </el-card>
      </el-col>
    </el-row>
  </el-container>
</template>

<script>
export default {
  name: 'Write',
  data () {
    return {
      screenHeight: '',
      currentDate: new Date().toLocaleDateString(),
      defaultNoteTitle: '写下你的标题',
      noteTitle: '',
      noteContent: '从这里开始'
    }
  },
  mounted () {
    this.screenHeight = `${document.documentElement.clientHeight}`
  },
  watch: {
    screenHeight: function () {
      this.changeFixed(this.screenHeight)
    }
  },
  methods: {
    changeFixed (screenHeight) {
      this.$refs.note.style.height = (screenHeight) * 0.75 + 'px'
      this.$refs.editor.style.height = (screenHeight) * 0.77 + 'px'
    }
  }
}
</script>

<style scoped>
.el-row {
  width: 100%;
}

.note_list, #main {
  overflow: auto;
}

.note_list .note {
  margin-top: 3%;
}

.note_info span {
  font-size: medium;
  font-family: "Microsoft YaHei";
  font-weight: bolder;
}

.note_info time {
  font-size: smaller;
  color: #999;
}

.note_info p {
  font-family: "Microsoft YaHei";
  color: #5e6d82;
}

.note_name {
  margin-bottom: 3%;
}
</style>
