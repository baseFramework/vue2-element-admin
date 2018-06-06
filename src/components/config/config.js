//外部网络请求配置管理
export default {
    host: '127.0.0.1',
    port: '6660',
    projects:{
        add:'/api/project/add',
        list:'/api/project/find',
        update:'/api/project/update',
        del:'/api/project/del',
        findById:'/api/project/findById',
    },
    products:{
        add:'/api/product/add',
        list:'/api/product/find',
        update:'/api/product/update',
        del:'/api/product/del',
        findById:'/api/product/findById',
    }
}