<template>
  <div class="index">
    <el-radio  v-model="radio1" label="禁用">备选项</el-radio>
    <el-radio  v-model="radio1" label="选中且禁用">备选项</el-radio>
    <el-checkbox v-model="checked1" disabled>备选项1</el-checkbox>
    <el-checkbox v-model="checked2" disabled>备选项</el-checkbox>
  </div>
</template>
<script>
  export default {
    name: 'index',
    data () {
      return {
        radio1: '选中且禁用'
      }
    },
    created: function () {
    }
  }
</script>

