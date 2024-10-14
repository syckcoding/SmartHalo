<template>
  <div class="home">
    <el-row :gutter="20" class="intro-section">
      <el-col :span="24">
        <el-card class="intro-card">
          <h1 class="intro-title">SmartHalo:智能合约反编译输出优化工具</h1>
          <p class="intro-description">欢迎使用智能合约反编译输出优化工具。本工具旨在帮助用户简化合约优化流程，提供便捷的功能和详细的优化分析。</p>
          <div class="intro-buttons">
            <button class="custom-button primary-button" @click="navigateTo('FunctionOptimization')">开始使用</button>
            <button class="custom-button info-button" @click="navigateTo('UsageGuide')">使用帮助</button>
          </div>
        </el-card>
      </el-col>
    </el-row>

    <div class="divider"></div>

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
            <button class="custom-button details-button" @click="viewDetails(contract.id)">
              <i class="el-icon-search"></i> 查看详情
            </button>
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
        { id: 4, address: '0xfabc...', info: '合约C的详细信息' },
      ],
    };
  },
  methods: {
    viewDetails(contractId) {
      this.$router.push({ name: 'Detail', params: { id: contractId } });
    },
    navigateTo(routeName) {
      this.$router.push({ name: routeName });
    },
  },
};
</script>

<style scoped>
.home {
  padding: 50px;
  background-color: #f5f7fa;
}

.intro-section {
  margin-bottom: 50px;
}

.intro-card {
  padding: 30px;
  min-height: 300px;
  background: linear-gradient(to bottom right, #ffffff, #f0f4f8);
  border-radius: 15px;
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.1);
}

.intro-title {
  font-size: 32px;
  font-weight: bold;
  color: #333;
  margin-bottom: 30px;
  font-family: 'Roboto', sans-serif; /* 更换字体 */
}

.intro-description {
  font-size: 18px;
  color: #666;
  font-family: 'Roboto', sans-serif; /* 更换字体 */
  line-height: 1.5; /* 控制行高 */
  margin-bottom: 80px; /* 增加底部间距 */
}

.intro-buttons {
  display: flex;
  justify-content: center;
  margin-top: 20px;
  margin-bottom: 10px; /* 增加底部间距 */
}

.custom-button {
  padding: 15px 30px;
  font-size: 18px;
  font-weight: bold;
  border: none;
  border-radius: 10px; /* 圆角矩阵 */
  cursor: pointer;
  font-family: 'Roboto', sans-serif; /* 更换字体 */
  transition: background-color 0.3s ease, transform 0.3s ease;
  margin: 0 40px; /* 增加按钮之间的间距 */
}

.primary-button {
  background: linear-gradient(to right, #409eff, #66b1ff);
  color: #ffffff;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}

.primary-button:hover {
  background: linear-gradient(to right, #66b1ff, #409eff);
  transform: translateY(-2px);
}

.info-button {
  background: linear-gradient(to right, #409eff, #66b1ff);
  color: #ffffff;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}

.info-button:hover {
  background: linear-gradient(to right, #66b1ff, #409eff);
  transform: translateY(-2px);
}

.details-button {
  padding: 10px 20px;
  font-size: 16px;
  font-weight: bold;
  border: none;
  border-radius: 8px; /* 圆角矩阵 */
  cursor: pointer;
  font-family: 'Roboto', sans-serif; /* 更换字体 */
  transition: background-color 0.3s ease, transform 0.3s ease;
  background: linear-gradient(to right, #409eff, #66b1ff);
  color: #ffffff;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}

.details-button:hover {
  background: linear-gradient(to right, #66b1ff, #409eff);
  transform: translateY(-2px);
}

.divider {
  height: 2px;
  background-color: #e0e0e0;
  margin: 40px 0;
}

.contracts {
  margin-top: 40px;
}

.box-card {
  padding: 25px;
  background-color: #ffffff;
  border-radius: 15px;
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  margin-bottom: 30px;
}

.box-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 12px 24px rgba(0, 0, 0, 0.15);
}

.card-header {
  margin-bottom: 15px;
}

.card-content {
  font-size: 16px;
  color: #555;
  margin-bottom: 20px;
  font-family: 'Roboto', sans-serif; /* 更换字体 */
}

.card-actions {
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
}

.center-button {
  margin-top: 20px;
}
</style>