<template>
  <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" router>
    <el-menu-item index="0" class="logo-item">
      <img src="@/assets/intro-image.png" alt="工具LOGO" class="intro-logo" />
    </el-menu-item>
    <div class="menu-right">
      <el-menu-item index="1" @click="goToHome">主页</el-menu-item>
      <el-menu-item index="2" @click="goToAddressOptimization">按地址优化</el-menu-item>
      <el-menu-item index="3" @click="goToFunctionOptimization">按函数优化</el-menu-item>
      <el-menu-item index="4" @click="goToUsageGuide">使用教程</el-menu-item>
    </div>
  </el-menu>
</template>

<script>
export default {
  data() {
    return {
      activeIndex: '1',
    };
  },
  methods: {
    goToHome() {
      this.activeIndex = '1';
      this.$router.push({ name: 'Home' });
    },
    goToAddressOptimization() {
      this.activeIndex = '2';
      this.$router.push({ name: 'AddressOptimization' });
    },
    goToFunctionOptimization() {
      this.activeIndex = '3';
      this.$router.push({ name: 'FunctionOptimization', params: { mode: 'function' } });
    },
    goToUsageGuide() {
      this.activeIndex = '4';
      this.$router.push({ name: 'UsageGuide' });
    },
  },
};
</script>

<style scoped>
.el-menu-demo {
  background-color: #f8f9fa;  /* 浅灰色背景，与主页阴影一致 */
  color: #333;
  padding: 10px;
  display: flex;  /* 使用Flex布局 */
  align-items: center;
  justify-content: space-between; /* 主轴两端对齐，使左侧logo与右侧菜单分别靠边 */
  position: relative; 
}

.logo-item {
  pointer-events: none;
}

.intro-logo {
  max-width: 150px;  /* 增加最大宽度 */
  max-height: 75px;  /* 增加最大高度 */
  margin-right: 20px;
}

.el-menu-demo .el-menu-item {
  color: #333;
  font-size: 18px;
  font-weight: bold;
  padding: 0 20px;
  transition: color 0.3s ease;
}

.menu-right {
  display: flex;
}
</style>