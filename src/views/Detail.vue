<template>
  <div class="detail">
    <el-row :gutter="20" class="code-display">
      <el-col :span="12">
        <el-card class="box-card">
          <h2>反编译码</h2>
          <el-input type="textarea" resize="none":rows="18" v-model="decompiledCode" placeholder="反编译码" style="width: 100%;resize:none;height:400px" />
          <el-form-item label="选择函数:" class="function-select">
            <el-select v-model="selectedFunction" placeholder="请选择函数" @change="updateCode" filterable clearable style="width: 200px;">
              <el-option
                v-for="func in functions"
                :key="func"
                :label="func"
                :value="func"
              />
            </el-select>
          </el-form-item>
        </el-card>
      </el-col>
      <el-col :span="12">
        <el-card class="box-card">
          <h2>优化后代码</h2>
          <el-input type="textarea" resize="none" :rows="18" v-model="optimizedCode" placeholder="优化后代码" disabled />
          <!-- 移动复制按钮到最下方 -->
          <el-button type="primary" @click="copyToClipboard" class="copy-button">一键复制</el-button>        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      functions: ['函数A', '函数B', '函数C'],
      selectedFunction: null,
      decompiledCode: '',
      optimizedCode: '',
    };
  },
  methods: {
    updateCode() {
      // 根据选择的函数更新代码
      this.decompiledCode = `反编译码示例：${this.selectedFunction}`;
      this.optimizedCode = `优化后代码示例：${this.selectedFunction}`;
    },
    copyToClipboard() {
      navigator.clipboard.writeText(this.optimizedCode).then(() => {
        this.$message({
          message: '优化后代码已复制到剪贴板',
          type: 'success',
        });
      });
    },
  },
};
</script>

<style scoped>
.detail {
  padding: 20px;
}
.code-display {
  margin-top: 20px;
}
.function-select {
  margin-top: 20px;
}
.box-card {
  min-height: 600px; /* 调整高度最小值 */
}
.copy-button {
  margin-top: 20px; /* 添加一些间距以美观展示按钮 */
}
.el-input textarea {
  width: 100%;
  height: 400px; /* 调整输入框和输出框的最小高度 */
  resize:none;
}

.el-select {
  width: 200px;
}
</style>