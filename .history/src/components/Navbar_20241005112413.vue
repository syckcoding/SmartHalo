<!-- <template>
  <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal">
    <el-menu-item index="0" class="logo-item">
      <img src="@/assets/intro-image.png" alt="工具LOGO" class="intro-logo" />
    </el-menu-item>
    <div class="menu-right">
      <el-menu-item index="1" @click="goToHome" class="menu-item">主页</el-menu-item>
      <el-menu-item index="2" @click="goToAddressOptimization" class="menu-item">按地址优化</el-menu-item>
      <el-menu-item index="3" @click="goToFunctionOptimization" class="menu-item">按函数优化</el-menu-item>
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
  },
};
</script>

<style scoped>
.el-menu-demo {
  background-color: #f8f9fa;  /* 浅灰色背景，与主页阴影一致 */
  color: #333;
  padding: 10px;
  display: flex;
  align-items: center;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);  /* 浅灰色阴影效果 */
  border-bottom: 2px solid #2196f3;  /* 底部蓝色线条区分 */
  justify-content: space-between; /* 主轴两端对齐，使左侧logo与右侧菜单分别靠边 */
}

.logo-item {
  pointer-events: none;
  position: relative;
  left: 20px;
  z-index: 10;  /* 保证logo始终在最外层 */
}

.intro-logo {
  width: 55px;
  height: 55px;
  margin-right: 20px;
}

.menu-item {
  color: #333;
  font-size: 18px;  /* 字体稍微调大一点 */
  font-weight: bold;  /* 字体调粗一点 */
  padding: 0 20px;
  transition: color 0.3s ease;
}

.menu-item:hover {
  color: #2196f3;  /* 悬停时改变字体颜色为蓝色，增强交互性 */
}

.menu-right {
  display: flex;
  gap: 30px;
  margin-left: auto;
}

.menu-right {
  display: flex;  /* 确保子元素在同一行显示 */
}
</style> -->

<template>
  <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal">
    <el-menu-item index="0" class="logo-item">
      <img src="@/assets/intro-image.png" alt="工具LOGO" class="intro-logo" />
    </el-menu-item>
    <div class="menu-right">
      <el-menu-item index="1" @click="goToHome">主页</el-menu-item>
      <el-menu-item index="2" @click="goToAddressOptimization">按地址优化</el-menu-item>
      <el-menu-item index="3" @click="goToFunctionOptimization">按函数优化</el-menu-item>
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
}

.logo-item {
  pointer-events: none;
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
  padding: 0 20px;
  transition: color 0.3s ease;

.menu-right {
  display: flex;  /* 确保子元素在同一行显示 */
}
</style>
