<template>
  <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal">
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
      this.$router.push({ name: 'Home' });
    },
    goToAddressOptimization() {
      this.$router.push({ name: 'Detail', params: { mode: 'address' } });
    },
    goToFunctionOptimization() {
      this.$router.push({ name: 'Detail', params: { mode: 'function' } });
    },
    goToUsageGuide() {
      this.$router.push({ name: 'UsageGuide' });
    },
  },
};
</script>

<style scoped>
.el-menu-demo {
  background-color: #ffffff;
  color: #0000ff;
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
  width: 50px;
  height: 50px;
  margin-right: 20px;
}

.el-menu-demo::after {
  content: "";
  position: absolute;
  left: 0;
  bottom: 0;
  right: 0;
  height: 2px;
  background-color: #8fbadf;
}

.menu-right {
  display: flex;  /* 确保子元素在同一行显示 */
}
</style>