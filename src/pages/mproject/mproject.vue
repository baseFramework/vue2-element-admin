<template>
  <div class="mproject-wrap">
    <com-head></com-head>
    <com-bread  :items="breadData"></com-bread>
    <div class="tools">
      <div class="buttongroup">
        <el-button-group>
          <el-button icon="el-icon-circle-plus" size="small" @click="addproject">添加</el-button>
          <el-button icon="el-icon-search" size="small" @click="onView">预览</el-button>
        </el-button-group>
      </div>
      <div class="pagination">
        <com-page @pageevent="onPageChange" :total="total" :size="size" :currentpage="page"></com-page>
      </div>
    </div>
    <div class="mproject-content">
      <el-table
    :data="items"
    style="width: 100%"
    >
    <el-table-column
      prop="name"
      label="项目名称"
      width="200"
      align="center"
      >
    </el-table-column>
    <el-table-column
      prop="pm"
      label="产品经理"
      width="120"
      align="center"
      >
    </el-table-column>
    <el-table-column
      prop="tm"
      label="技术经理"
      width="120"
      align="center"
      >
    </el-table-column>
    <el-table-column
      prop="img"
      label="项目logo"
      width="300"
      align="center"
      >
       <template slot-scope="scope">
          <img style="width:30px;height:30px" :src="scope.row.img"></img>
      </template>
    </el-table-column>
    <el-table-column
      prop="createdAt"
      label="创建时间"
      width="200"
      align="center"
      >
        <template slot-scope="scope">
          <div>{{dateFormate(scope.row.createdAt)}}</div>
      </template>
    </el-table-column>
    <el-table-column
      label="操作"
      align="center"
      >
      <template slot-scope="scope">
       <el-button-group>
          <el-button @click="onQuery(scope.row)" type="primary" plain size="small">查看</el-button>
          <el-button @click="onEdit(scope.row)" type="primary" plain size="small">编辑</el-button>
          <el-button @click="onDel(scope.row)" type="primary" plain size="small">删除</el-button>
        </el-button-group>
      </template>
    </el-table-column>
  </el-table>
    </div>
  </div>
</template>

<script>
  import comHead from '../../components/chead/chead.vue';
  import comBread from '../../components/cbread/cbread.vue';
  import comPage from '../../components/cpagination/cpagination.vue';
  import config from '../../components/config/config.js';
  import alldata from '../../data/alldata';
  import axios from "axios";
  require('./mproject.css');
  export default {
    name: 'home',
    data () {
      return {
        page:1,
        size:10,
        total:100,
        currentDate: new Date(),
        alldata: alldata,
        breadData:[
        {
          name:'项目中心',
          url:'/home'
        },
        ],
        items:[]
      }
    },
    created(){
      this.onFetchList();
    },
    components: {
      comHead,
      comBread,
      comPage,
    },
    methods:{
      onPageChange(page){
        this.page = page;
        this.onFetchList();
      },
      onFetchList(){
        let url = 'http://' + config.host + ':' + config.port + config.projects.list;
        let page = this.page;
        let size = this.size;
        let _me = this;
        axios.get(url, {
                    params: {
                      page,
                      size
                    }
                })
                .then(function(response) {
                    const data = response.data;
                    if (data.code === 200) {
                        console.log(data.data.items);
                        _me.page = parseInt(data.data.page);
                        _me.size = parseInt(data.data.size);
                        _me.total = parseInt(data.data.total);
                        _me.items = data.data.items;
                        console.log(_me.items);
                    }
                })
                .catch(function(response) {
                    console.log(response);
                });
      },
      addproject(){
        this.$router.push('/addproject');
      },
      onQuery(row){
        let id = row.id;
        this.$router.push('/admin/mproduct/' + id)
      },
      onDel(row){
        let url = 'http://' + config.host + ':' + config.port + config.projects.del;
        let _me = this;
         axios.get(url, {
                    params: {
                      id:row.id
                    }
                }).then(function(response) {
                    const data = response.data;
                    if (data.code === 200) {
                        _me.$message({
                          message: '删除成功',
                          type: 'success'
                        });
                        _me.onFetchList();
                    }
                })
                .catch(function(response) {
                    console.log(response);
                })
      },
      onEdit(row){
        let id = row.id;
        this.$router.push('/edit/project/' + id)
      },
      onView(){
        this.$router.push('/home')
      },
      dateFormate(date){
        let dateStr = date.split('T')[0];
        let timeStr = date.split('T')[1].split('.')[0];
        return dateStr + ' ' + timeStr;
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h1, h2 {
    font-weight: normal;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    display: inline-block;
    margin: 0 10px;
  }

  a {
    color: #42b983;
  }
</style>
