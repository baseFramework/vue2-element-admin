<template>
  <div class="editproject-wrap">
    <com-head></com-head>
    <com-bread  :items="breadData"></com-bread>
    
    <div class="editproject-content">
        <div class="form-wrap">
            <el-form ref="form" :model="form" label-width="200px">
                <el-form-item label="产品名称">
                    <el-input v-model="form.name"></el-input>
                </el-form-item>
                <el-form-item label="产品图片(100x100)">
                    <el-input v-model="form.img"></el-input>
                </el-form-item>
                <el-form-item label="产品描述">
                    <el-input v-model="form.desc"></el-input>
                </el-form-item>
                <el-form-item label="产品地址">
                    <el-input v-model="form.address"></el-input>
                </el-form-item>
                 <el-button type="primary" plain size="small" @click="onUpdate">编辑</el-button>
            </el-form>
        </div>
    </div>
  </div>
</template>

<script>
  import comHead from '../../components/chead/chead.vue';
  import comBread from '../../components/cbread/cbread.vue';
  import config from '../../components/config/config.js';
  import axios from "axios";
  axios.head('Content-Type','application/x-www-form-urlencoded');
  require('./editproduct.css');
  export default {
    name: 'home',
    data () {
      return {
        page:1,
        size:10,
        total:100,
        pid:'',
        currentDate: new Date(),
        form:{},
        breadData:[
        {
          name:'项目编辑',
          url:'/admin'
        },
         {
          name:'编辑项目',
        },
        ],
        items:[]
      }
    },
    created(){
        let id = this.$route.params.id;
        let pid = this.$route.params.pid;
        this.pid = pid;
        this.form.id = id;
        this.fetchData(id);
    },
    components: {
      comHead,
      comBread,
    },
    methods:{
        fetchData(id){ //获取项目数据
            let url = 'http://' + config.host + ':' + config.port + config.products.findById;
            let params = {
                id,
            }
            let _me = this;
              axios({
                method: 'get',
                url:url,
                params,
            }).then((res)=>{
                if(res.data.code==200){
                    console.log(res.data);
                    _me.form = res.data.data;
                }
            });
        },
        onUpdate(){ //创建项目方法
        let url = 'http://' + config.host + ':' + config.port + config.products.update;
        let params = {
            "id":this.form.id,
            "name": this.form.name,
            "img": this.form.img,
            "desc": this.form.desc,
            "address": this.form.address,
        }
            axios({
                method: 'post',
                url:url,
                data:params
            }).then((res)=>{
                //console.log(res);
                if(res.data.code==200){
                     this.$message({
                        message: '更新成功',
                        type: 'success'
                        });
                }
               // location.href.go(-1);
                this.$router.push('/admin/mproduct/'+ this.pid);
            });
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
