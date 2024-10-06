<template>
    <div class="address-optimization-page">
      <h2>按地址优化</h2>
      <el-input v-model="searchQuery" placeholder="请输入合约地址"></el-input>
      <el-button @click="handleSearch">搜索</el-button>
      <div v-if="searchResult" class="result">
        <p>搜索结果：{{ searchResult }}</p>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
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
  </style>
  