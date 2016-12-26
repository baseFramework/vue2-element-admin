<template>
  <el-row class="tac navi-wrap">
    <el-col>
      <el-menu default-active="/dash/index" class="el-menu-vertical-demo">
        <el-submenu index="1">
          <template slot="title"><i class="el-icon-message"></i>导航一</template>
          <el-menu-item-group>
            <el-menu-item index="/dash/index" >表单页</el-menu-item>
            <el-menu-item index="/dash/table">列表页</el-menu-item>
          </el-menu-item-group>
        </el-submenu>
        <el-menu-item index="2"><i class="el-icon-menu"></i>导航二</el-menu-item>
        <el-menu-item index="3"><i class="el-icon-setting"></i>导航三</el-menu-item>
      </el-menu>
    </el-col>
  </el-row>
</template>


<script>
  require('./navi.css')
  export default {
    name: 'navi'
  }
</script>
