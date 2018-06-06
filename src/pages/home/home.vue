<template>
  <div class="home-wrap">
    <com-head></com-head>
    <com-bread  :items="breadData"></com-bread>
        <div>
       <com-page @pageevent="onPageChange" :total="total" :size="size" :currentpage="page"></com-page>
      </div>
    <div class="home-content">
  
      <div>
        <com-project :items="items"></com-project>
      </div>
     
    </div>
  </div>
</template>

<script>
  import comHead from '../../components/chead/chead.vue';
  import comBread from '../../components/cbread/cbread.vue';
  import comProject from '../../components/cprojects/cprojects.vue';
  import comPage from '../../components/cpagination/cpagination.vue';
  import config from '../../components/config/config.js';
  import alldata from '../../data/alldata';
  import axios from "axios";
  require('./home.css');
  export default {
    name: 'home',
    data () {
      return {
        page:1,
        size:12,
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
      comProject,
      comPage
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
