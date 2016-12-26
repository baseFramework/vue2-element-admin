<template>
  <div class="header-wraper">
    <el-menu default-active="1" class="el-menu-demo" mode="horizontal" @select="handleSelect">
      <div class="left-item header-title"><i class="fa fa-cubes" aria-hidden="true"></i> VEA</div>
      <el-submenu class="right-item" index="1">
        <template slot="title">账号</template>
        <el-menu-item class="head-menu" index="1-1">个人中心</el-menu-item>
        <el-menu-item class="head-menu" index="1-2">登出</el-menu-item>
      </el-submenu>
    </el-menu>
  </div>
</template>

<script>
  require('./head.css')
  export default {
    name:'head'
  }
</script>
