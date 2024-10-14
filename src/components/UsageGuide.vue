<template>
    <div class="usage-guide">
      <el-row :gutter="20" justify="center">
        <el-col :span="16">
          <el-card class="guide-card">
            <img src="@/assets/intro-image.png" alt="Usage Guide Image" class="intro-image" />
            <h1 class="guide-title">使用指南</h1>
            <p class="guide-description">
              欢迎使用智能合约反编译输出优化工具。本工具旨在帮助开发者优化反编译输出，通过清晰直观的界面和详细的优化分析，辅助您进行程序理解和合约漏洞检测等。
            </p>
            <p class="guide-description">
              请按照以下步骤开始您的反编译输出优化：
              <br />1. 上传您的合约文件。
              <br />2. 选择优化功能。
              <br />3. 查看优化建议和详细的输出报告。
            </p>
            <p class="guide-description">
              我们的工具提供了灵活的定制选项，满足不同场景下的优化需求，助力您更高效地优化智能合约的反编译输出。
            </p>
          </el-card>
        </el-col>
      </el-row>
    </div>
  </template>
  
  <script>
  export default {
    name: 'UsageGuide',
  };
  </script>
  
  <style scoped>
  .usage-guide {
    padding: 50px 0;
    background-color: #f5f7fa;
    display: flex;
    justify-content: center;
    align-items: flex-start; /* 顶部对齐 */
    min-height: 100vh;
  }
  
  .guide-card {
    padding: 30px;
    background: #fff;
    border-radius: 15px;
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.1);
  }
  
  .guide-title {
    font-size: 28px;
    font-weight: bold;
    color: #333;
    margin-bottom: 20px;
    font-family: 'Roboto', sans-serif;
    text-align: left; /* 标题左对齐 */
  }
  
  .guide-image {
    max-width: 100%;
    height: auto;
    margin-bottom: 20px;
    border-radius: 8px;
  }
  
  .guide-description {
    font-size: 18px;
    color: #666;
    font-family: 'Roboto', sans-serif;
    line-height: 1.6;
    margin-bottom: 20px;
    text-align: left; /* 文本左对齐 */
  }
  </style>
  