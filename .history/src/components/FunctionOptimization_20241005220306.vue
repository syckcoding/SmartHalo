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
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        selectedNetwork: '',
        searchQuery: '',
        searchResult: '',
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
  </style>