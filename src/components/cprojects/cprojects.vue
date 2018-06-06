<template>
  <div class="cprojects-wrap">
    <el-row>
        <el-col v-for="item in items" :span="8">
            <a :href="'/#/products/'+item.id" class="grid-content bg-purple">
                <el-card class="box-card">
                <div slot="header" class="clearfix">
                    <span>{{item.name}}</span>
                </div>
                <div  class="text item">
                    <div class="img-left">
                        <img class="projects-img" :src="item.img" style="width:50px;height:50px"></img>
                    </div>
                    <div class="content-right">
                        <div>产品经理： {{item.pm}}</div>
                        <div>技术经理： {{item.tm}}</div>
                    </div>
                </div>
                </el-card>
            </a>
        </el-col>
    </el-row>
  </div>
</template>

<script>
  require('./cprojects.css')
  export default {
    name: 'cprojects',
    props:['items']
  }
</script>
