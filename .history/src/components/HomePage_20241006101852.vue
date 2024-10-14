<template>
  <div class="home">
    <el-row :gutter="20" class="intro-section">
      <el-col :span="24">
        <el-card class="intro-card">
          <h1 class="intro-title">智能合约优化工具介绍</h1>
          <p class="intro-description">欢迎使用智能合约优化工具。本工具旨在帮助用户简化合约优化流程，提供便捷的功能和详细的优化分析。</p>
          <img src="/path/to/intro-image.png" alt="合约优化示意图" class="intro-image" />
          <p class="intro-highlight">我们的工具可以为您节省时间，提高合约效率，并降低开发和部署的复杂度。</p>
        </el-card>
      </el-col>
    </el-row>

    <div class="divider"></div>

    <el-row :gutter="20" class="contracts">
      <el-col :span="8" v-for="contract in contracts" :key="contract.id">
        <el-card class="box-card">
          <img :src="contract.image" alt="{{ contract.address }}" class="contract-image" />
          <div class="card-header">
            <h3>合约地址: {{ contract.address }}</h3>
          </div>
          <div class="card-content">
            <p>合约信息: {{ contract.info }}</p>
          </div>
          <div class="card-actions center-button">
            <el-button type="primary" @click="viewDetails(contract.id)" class="details-button">
              <i class="el-icon-search"></i> 查看详情
            </el-button>
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
        { id: 1, address: '0x1234...', info: '合约A的详细信息', image: '/path/to/contractA-image.jpg' },
        { id: 2, address: '0x5678...', info: '合约B的详细信息', image: '/path/to/contractB-image.jpg' },
        { id: 3, address: '0x9abc...', info: '合约C的详细信息', image: '/path/to/contractC-image.jpg' },
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
  padding: 50px;
  background-color: #f5f7fa; /* 柔和的浅灰色背景，减少视觉疲劳 */
}
.intro-section {
  margin-bottom: 50px;
}
.intro-card {
  padding: 30px;
  min-height: 350px;
  background: linear-gradient(to bottom right, #ffffff, #f0f4f8); /* 添加背景渐变，使卡片更具视觉吸引力 */
  border-radius: 15px; /* 增加圆角，使卡片更柔和 */
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.1); /* 加深阴影，突出卡片效果 */
}
.intro-title {
  font-size: 32px;
  font-weight: bold;
  color: #333;
  margin-bottom: 15px;
}
.intro-description {
  font-size: 18px;
  color: #666;
  margin-bottom: 20px;
}
.intro-highlight {
  font-size: 20px;
  font-weight: bold;
  color: #409eff;
  margin-top: 20px;
}
.intro-image {
  width: 100%;
  max-height: 200px;
  object-fit: cover;
  margin: 20px 0;
  border-radius: 10px;
}
.divider {
  height: 2px;
  background-color: #e0e0e0;
  margin: 40px 0; /* 增加顶部和底部间距，分隔引导和合约部分 */
}
.contracts {
  margin-top: 40px;
}
.box-card {
  padding: 25px;
  background-color: #ffffff;
  border-radius: 15px;
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease; /* 添加阴影和位置变化的过渡效果 */
}
.box-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 12px 24px rgba(0, 0, 0, 0.15); /* 悬停时增加阴影，提升卡片的层次感 */
}
.contract-image {
  width: 100%;
  max-height: 150px;
  object-fit: cover;
  border-radius: 10px;
  margin-bottom: 15px;
}
.card-header {
  margin-bottom: 15px;
}
.card-content {
  font-size: 16px;
  color: #555;
  margin-bottom: 20px;
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
.details-button {
  background: linear-gradient(to right, #409eff, #66b1ff); /* 添加渐变背景，使按钮更显眼 */
  border-color: #409eff;
  color: #ffffff;
  padding: 10px 20px;
  font-size: 16px;
  font-weight: bold;
  border-radius: 5px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2); /* 添加轻微的发光效果，突出按钮 */
}
.details-button:hover {
  background: linear-gradient(to right, #66b1ff, #409eff); /* 悬停时反向渐变，增强交互感 */
  border-color: #66b1ff;
}
</style>