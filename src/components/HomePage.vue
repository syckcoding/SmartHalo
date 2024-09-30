<template>
  <div class="home">
    <el-row :gutter="20" class="intro-section">
      <el-col :span="24">
        <el-card class="intro-card">
          <h1>智能合约优化工具介绍</h1>
          <p>这里是对工具的介绍，包括其主要功能和特色。</p>
        </el-card>
      </el-col>
    </el-row>

    <el-row :gutter="20" class="contracts">
      <el-col :span="8" v-for="contract in contracts" :key="contract.id">
        <el-card class="box-card">
          <h3>合约地址: {{ contract.address }}</h3>
          <p>合约信息: {{ contract.info }}</p>
          <el-button type="primary" @click="viewDetails(contract.id)">查看详情</el-button>
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
  padding: 20px;
}
.intro-section {
  margin-bottom: 20px;
}
.contracts {
  margin-top: 20px;
}
.intro-card {
  min-height: 350px;
}
</style>