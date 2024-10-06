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
  background-color: #333;
  color: #fff;
  padding: 15px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);  /* 添加阴影效果提高视觉层次 */
  border-bottom: 3px solid #2196f3;  /* 底部添加蓝色线条区分 */
  border-radius: 8px;
}

.logo-item {
  pointer-events: none;
  position: relative;
  left: 10px;
  z-index: 10;
}

.intro-logo {
  width: 55px;
  height: 55px;
  margin-right: 25px;
}

.menu-item {
  color: #fff;
  font-size: 20px;  /* 字体稍微调大一点 */
  font-weight: bold;  /* 字体调粗一点 */
  padding: 0 15px;
  transition: color 0.3s ease;
}

.menu-item:hover {
  color: #66b1ff;  /* 悬停时改变字体颜色使其更具交互性 */
}

.menu-right {
  display: flex;
  gap: 30px;
}
</style>