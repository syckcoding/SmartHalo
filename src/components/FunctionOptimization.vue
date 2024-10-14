<template>
  <div class="function-optimization-page">
    <div class="header">
      <h2>按函数优化</h2>
      <p>输入函数名称，查看优化建议和详细信息</p>
    </div>

    <div class="search-section">
      <el-select v-model="selectedNetwork" placeholder="选择网络" class="network-select">
        <el-option label="Ethereum" value="eth"></el-option>
        <el-option label="Bitcoin" value="btc"></el-option>
        <el-option label="Binance Smart Chain" value="bsc"></el-option>
      </el-select>
      <el-input v-model="searchQuery" placeholder="请输入函数名称" class="function-input">
        <template #prepend>fn</template>
      </el-input>
      <el-button type="primary" @click="handleSearch">搜索</el-button>
    </div>

    <div v-if="searchResult" class="result">
      <el-card class="result-card">
        <h3>搜索结果</h3>
        <p>{{ searchResult }}</p>
        <el-alert type="success" title="优化成功" description="该函数经过优化，性能和效率得到了显著提升。" show-icon></el-alert>
      </el-card>
    </div>

    <!-- 使用 el-card 去除边框，简化布局 -->
    <el-card shadow="hover" class="function-description">
      <!-- <el-icon class="icon-info"><i class="el-icon-s-tools"></i></el-icon> -->
      <h3 class="description-title">功能介绍</h3>
      <p>本界面提供按函数进行优化的功能，用户可以输入函数名称并选择相应的区块链网络，系统将提供针对该函数的优化建议。</p>
      <p>优化后，您可以查看该反编译输出的性能提升和相关信息。该工具帮助研究人员根据合约函数优化反编译输出，提高效率。</p>
    </el-card>

    <div class="feedback-section">
      <el-rate v-model="rating" show-text class="rating"></el-rate>
      <el-input type="textarea" v-model="feedback" placeholder="请留下您的反馈" class="feedback-input"></el-input>
      <div class="button-center">
        <el-button type="success" @click="submitFeedback">提交反馈</el-button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      selectedNetwork: '',
      searchQuery: '',
      searchResult: '',
      rating: 0,
      feedback: '',
    };
  },
  methods: {
    handleSearch() {
      if (this.searchQuery) {
        this.searchResult = `您输入的函数名称是：${this.searchQuery}`;
      } else {
        this.$message({
          message: '请输入有效的函数名称',
          type: 'warning',
        });
      }
    },
    submitFeedback() {
      if (this.feedback) {
        this.$message({
          message: '感谢您的反馈！',
          type: 'success',
        });
        this.feedback = '';
        this.rating = 0;
      } else {
        this.$message({
          message: '请填写反馈内容',
          type: 'warning',
        });
      }
    },
  },
};
</script>

<style scoped>
.function-optimization-page {
  padding: 20px;
  text-align: center;
}

.header {
  margin-bottom: 30px;
}

.search-section {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 15px;
  margin-bottom: 40px;
}

.network-select {
  width: 180px;
}

.function-input {
  width: 400px;
}

.result {
  display: flex;
  justify-content: center;
}

.result-card {
  width: 500px;
  text-align: left;
  padding: 20px;
}

/* 简化功能介绍部分，使用浅色背景和卡片样式 */
.function-description {
  max-width: 600px;
  margin: 40px auto;
  padding: 20px;
  background-color: #f3f4f6;
  border-radius: 12px;
  text-align: left;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.05);
}

.description-title {
  font-size: 22px;
  font-weight: bold;
  color: #333;
  margin-bottom: 10px;
}

/* 图标样式，稍大更醒目 */
.icon-info {
  font-size: 30px;
  margin-bottom: 15px;
  color: #409EFF;
}

/* 用户反馈部分的样式 */
.feedback-section {
  margin-top: 50px;
}

.rating {
  margin-bottom: 20px;
}

.feedback-input {
  width: 500px;
  margin-bottom: 20px;
}

/* 按钮居中样式 */
.button-center {
  display: flex;
  justify-content: center;
}
</style>
