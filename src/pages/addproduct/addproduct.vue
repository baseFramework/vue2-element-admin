<template>
  <div class="addproduct-wrap">
    <com-head></com-head>
    <com-bread  :items="breadData"></com-bread>
    
    <div class="addproduct-content">
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
                 <el-button type="primary" plain size="small" @click="onCreate">创建</el-button>
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
  require('./addproduct.css');
  export default {
    name: 'home',
    data () {
      return {
        page:1,
        size:10,
        total:100,
        currentDate: new Date(),
        form:{},
        pid:'',
        breadData:[
        {
          name:'项目编辑',
          url:'/admin'
        },
         {
          name:'添加项目',
        },
        ],
        items:[]
      }
    },
    created(){
        this.pid = this.$route.params.id;
    },
    components: {
      comHead,
      comBread,
    },
    methods:{
        onCreate(){ //创建项目方法
        let url = 'http://' + config.host + ':' + config.port + config.products.add;
        let params = {
            "pid":this.pid,
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
                        message: '创建成功',
                        type: 'success'
                        });
                }
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
