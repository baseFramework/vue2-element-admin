<template>
  <div class="cbread-wrap">
    <el-breadcrumb separator="/">
         <el-breadcrumb-item v-for="item in items" :to="{ path: item.url }">{{item.name}}</el-breadcrumb-item>
    </el-breadcrumb>
  </div>
</template>

<script>
  require('./cbread.css')
  export default {
    name: 'cbread',
    props:['items']
  }
</script>
