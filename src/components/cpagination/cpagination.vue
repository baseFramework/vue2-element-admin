<template>
  <div class="cpagination-wrap">
    <el-pagination
    background
    layout="prev, pager, next"
    :total="total" :page-size="size" :current-page="currentpage" @current-change="onCurrentPage">
    </el-pagination>
  </div>
</template>

<script>
  require('./cpagination.css')
  export default {
    name: 'cpagination',
    props:['total','size','currentpage'],
    methods:{
        onCurrentPage(page){
            this.$emit('pageevent',page)
        }
    }
  }
</script>
