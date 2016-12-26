<template>
  <div class="page-bar">
    <el-col :span="24" class="toolbar" style="padding-bottom:10px;">
      <el-pagination :current-page="1" :page-sizes="[100, 200, 300, 400]" :page-size="100" layout="total, sizes, prev, pager, next, jumper"
                     :total="400" style="float:right">
      </el-pagination>
    </el-col>
  </div>
</template>

<script>
  export default {
    name:'pagination',
    methods: {
      handleSizeChange(val) {
        console.log(`每页 ${val} 条`);
      },
      handleCurrentChange(val) {
        this.currentPage = val;
        console.log(`当前页: ${val}`);
      }
    },
    data() {
      return {
        currentPage1: 5,
        currentPage2: 5,
        currentPage3: 5,
        currentPage4: 4
      };
    }
  }
</script>
