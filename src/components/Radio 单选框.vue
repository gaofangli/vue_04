<template>
  <div>
    <el-radio v-model="radio" label="1" border>备选项</el-radio>
    <el-radio v-model="radio" label="2">备选项</el-radio>
    <hr>
    <el-radio-group v-model="radio1">
      <el-radio :label="3" disabled>备选项</el-radio>
      <el-radio :label="6">备选项</el-radio>
      <el-radio :label="9">备选项</el-radio>
    </el-radio-group>
    <hr>
     <el-radio-group v-model="radio2">
      <el-radio-button label="上海"></el-radio-button>
      <el-radio-button label="北京"></el-radio-button>
      <el-radio-button label="广州"></el-radio-button>
      <el-radio-button label="深圳"></el-radio-button>
    </el-radio-group>
  </div>
</template>

<script>
export default {
  data: () => ({
    radio: '1',
    radio1: null,
    radio2: '上海'
  }),
  created () {
  }
}
</script>

<style lang="scss" scope>
</style>