<template>
  <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal">
    <el-menu-item index="0" class="logo-item">
      <img src="@/assets/intro-image.png" alt="工具LOGO" class="intro-logo" />
    </el-menu-item>
    <el-menu-item index="1" @click="goToHome" class="menu-item">主页</el-menu-item>
    <el-menu-item index="2" @click="goToAddressOptimization" class="menu-item">按地址优化</el-menu-item>
    <el-menu-item index="3" @click="goToFunctionOptimization" class="menu-item">按函数优化</el-menu-item>
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
  },
};
</script>

<style scoped>
.el-menu-demo {
  background-color: #ffffff;  /* 设置为白色背景 */
  color: #333;
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
  z-index: 1;
  border-bottom: 3px solid #2196f3;  /* 底部添加蓝色线条进行区分 */
}

.logo-item {
  pointer-events: none;
  position: absolute;
  left: 20px;
  z-index: 10;  /* 保证logo始终在最外层 */
}

.intro-logo {
  width: 50px;
  height: 50px;
  margin-right: 20px;
}

.el-menu-demo .el-menu-item {
  color: #333;
  font-size: 18px;  /* 字体稍微调大一点 */
  font-weight: bold;  /* 字体调粗一点 */
}

.menu-item {
  margin-left: auto;
}

.menu-right {
  display: flex;
  gap: 30px;
}
</style>