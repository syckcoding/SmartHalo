<!-- <template>
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
  font-size: 18px;
  font-weight: bold;
  padding: 0 20px;
  transition: color 0.3s ease;
}

.menu-right {
  display: flex;
}
</style> -->



<template>
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
  background-color: #ffffff; /* 白色背景，显得干净整洁 */
  color: #333;
  padding: 15px 30px; /* 增加上下和左右的内边距，使导航栏更饱满 */
  display: flex;
  align-items: center;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* 增加更明显的阴影，增强立体感 */
  border-bottom: 3px solid #2196f3; /* 更宽的底部蓝色线条，增加层次感 */
  justify-content: space-between;
}

.logo-item {
  pointer-events: none;
  position: relative;
  left: 20px;
  z-index: 10;
}

.intro-logo {
  width: 60px;
  height: 60px;
  margin-right: 25px; /* 加大右边距，使Logo和菜单保持适当距离 */
}

.menu-item {
  color: #333;
  font-size: 18px;
  font-weight: 600; /* 更适中的粗体效果 */
  padding: 0 25px;
  transition: color 0.3s ease, background-color 0.3s ease; /* 增加背景颜色的过渡效果 */
  border-radius: 5px; /* 增加圆角，显得更现代化 */
}

.menu-item:hover {
  color: #ffffff; /* 悬停时改变字体颜色为白色 */
  background-color: #2196f3; /* 悬停时背景变为蓝色，增强交互感 */
}

.menu-right {
  display: flex;
  gap: 40px; /* 增加菜单项之间的间距，使排版更宽松 */
  margin-left: auto;
}
</style>