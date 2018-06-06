<template>
  <div class="cproducts-wrap">
    <el-row>
        <el-col v-for="item in items" :span="8">
            <a :href="item.address" class="grid-content bg-purple">
                <el-card class="box-card">
                <div slot="header" class="clearfix">
                    <span>{{item.name}}</span>
                </div>
                <div  class="text item">
                    <div class="img-left">
                        <img class="cproducts-img" :src="item.img" style="width:50px;height:50px"></img>
                    </div>
                    <div class="content-right">
                        <div>创建:  {{dateFormate(item.createdAt)}}</div>
                        <div>描述： {{item.desc}}</div>
                    </div>
                </div>
                </el-card>
            </a>
        </el-col>
    </el-row>
  </div>
</template>

<script>
  require('./cproducts.css')
  export default {
    name: 'cproducts',
    props:['items'],
    methods:{
        dateFormate(date){
            let dateStr = date.split('T')[0];
            let timeStr = date.split('T')[1].split('.')[0];
            return dateStr + ' ' + timeStr;
      },
    }
  }
</script>
