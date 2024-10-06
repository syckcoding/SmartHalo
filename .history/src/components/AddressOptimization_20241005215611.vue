<template>
    <div class="address-optimization-page">
      <div class="header">
        <h2>按地址优化</h2>
        <p>输入合约地址，查看优化建议和详细信息</p>
      </div>
      
      <div class="search-section">
        <el-select v-model="selectedNetwork" placeholder="选择网络" class="network-select">
          <el-option label="Ethereum" value="eth"></el-option>
          <el-option label="Bitcoin" value="btc"></el-option>
          <el-option label="Binance Smart Chain" value="bsc"></el-option>
        </el-select>
        <el-input v-model="searchQuery" placeholder="请输入合约地址" class="address-input">
          <template #prepend>0x</template>
        </el-input>
        <el-button type="primary" @click="handleSearch">搜索</el-button>
      </div>
      
      <div v-if="searchResult" class="result">
        <el-card class="result-card">
          <h3>搜索结果</h3>
          <p>{{ searchResult }}</p>
          <el-alert type="success" title="优化成功" description="该合约地址经过优化，性能和安全性得到了显著提升。" show-icon></el-alert>
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
          this.searchResult = `您输入的合约地址是：${this.searchQuery}`;
        } else {
          this.$message({
            message: '请输入有效的合约地址',
            type: 'warning',
          });
        }
      },
    },
  };
  </script>
  
  <style scoped>
  .address-optimization-page {
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

  .address-input {
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