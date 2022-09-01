<template>
  <div>
  <el-link href="https://element.eleme.io" target="_blank">默认链接</el-link>
  <el-link type="primary" disabled>主要链接</el-link>
  <el-link type="success" :underline="false">成功链接</el-link>
  <el-link type="warning">警告链接</el-link>
  <el-link type="danger">危险链接</el-link>
  <el-link type="info">信息链接</el-link>
  <el-link icon="el-icon-edit">编辑</el-link>
  <el-link icon="el-icon-view el-icon--right">查看</el-link>
</div>
</template>

<script>
export default {
  data: () => ({
  }),
  created () {
  }
}
</script>

<style lang="scss" scope>
</style>