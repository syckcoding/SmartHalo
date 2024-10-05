<template>
  <div class="home">
    <el-row :gutter="20" class="intro-section">
      <el-col :span="24">
        <el-card class="intro-card">
          <h1 class="intro-title">智能合约优化工具介绍</h1>
          <p class="intro-description">这里是对工具的介绍，包括其主要功能和特色。</p>
        </el-card>
      </el-col>
    </el-row>

    <el-row :gutter="20" class="contracts">
      <el-col :span="8" v-for="contract in contracts" :key="contract.id">
        <el-card class="box-card">
          <div class="card-header">
            <h3>合约地址: {{ contract.address }}</h3>
          </div>
          <div class="card-content">
            <p>合约信息: {{ contract.info }}</p>
          </div>
          <div class="card-actions center-button">
            <el-button type="primary" @click="viewDetails(contract.id)">查看详情</el-button>
          </div>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      contracts: [
        { id: 1, address: '0x1234...', info: '合约A的详细信息' },
        { id: 2, address: '0x5678...', info: '合约B的详细信息' },
        { id: 3, address: '0x9abc...', info: '合约C的详细信息' },
      ],
    };
  },
  methods: {
    viewDetails(contractId) {
      this.$router.push({ name: 'Detail', params: { id: contractId } });
    },
  },
};
</script>

<style scoped>
.home {
  padding: 40px;
  background-color: #f8f9fa;
}
.intro-section {
  margin-bottom: 40px;
}
.intro-card {
  padding: 20px;
  min-height: 350px;
  background-color: #ffffff;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}
.intro-title {
  font-size: 28px;
  font-weight: bold;
  color: #333;
  margin-bottom: 10px;
}
.intro-description {
  font-size: 16px;
  color: #666;
}
.contracts {
  margin-top: 20px;
}
.box-card {
  padding: 20px;
  background-color: #ffffff;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
}
.box-card:hover {
  transform: translateY(-5px);
}
.card-header {
  margin-bottom: 10px;
}
.card-content {
  font-size: 14px;
  color: #555;
  margin-bottom: 15px;
}
.card-actions {
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
}
.center-button {
  margin-top: 15px;
}
.el-button {
  background-color: #409eff;
  border-color: #409eff;
  color: #ffffff;
}
.el-button:hover {
  background-color: #66b1ff;
  border-color: #66b1ff;
}
</style>