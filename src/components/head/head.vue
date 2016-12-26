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
    data() {
      return {
        options: [{
          label: "test1",
          value: 1
        }, {
          label: "test2",
          value: 2
        }, {
          label: "test3",
          value: 3
        }, {
          label: "test4",
          value: 4
        }, {
          label: "test5",
          value: 5
        }, {
          label: "test6",
          value: 6
        }, {
          label: "test7",
          value: 7
        }, ],
        value: 1

      }
    },
    methods: {
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
      }
    }
  }
</script>
