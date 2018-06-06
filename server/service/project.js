'use strict';
const model = require('../model/index');

/** 
 * 定义项目基础模型服务
*/
module.exports = {
    create: function (data, callback) { //创建数据方法
        var isOk;
        let me = this;
        try {
            me.findByName(data.name).then(function (res) {
                if (res && res.length > 0) {
                    isOk = false;
                    callback(isOk)
                } else {
                    model.project.create(data);
                    isOk = true;
                    callback(isOk)
                }
            })
        } catch (error) {
            console.log(error);
            isOk = false;
            callback(isOk)
        }
    },
    list: function (page, size, callback) { //查询产品数据列表  分页
        let offset = (parseInt(page) * parseInt(size)) - parseInt(size);
        let limit = parseInt(size);
        model.project.findAll({
            limit,
            offset,
            order: [['createdAt', 'desc']],
        }).then(function (res) {
            model.project.findAll({
                attributes: ['id']
            }).then(function (arr) {
                let result = {
                    items: res,
                    total: arr.length
                }
                callback(result);
            })
        });
    },
    findById: function (id,callback) {
        model.project.findById(id).then(function(res){
            callback(res);
        })
    },
    findByName: function (name) {
        return model.project.findAll({
            order: [['createdAt', 'desc']],
            attributes: ['name'],
            where: {
                name,
            }
        });
    },
    deleteById: function (id, callback) {  //根据ID删除数据
        try {
            model.project.destroy({
                where: {
                    id,
                }
            }).then(function () {
                callback(true);
            });
        } catch (error) {
            callback(false);
        }
    },
    updateById: function (id, data, callback) { //根据ID更新产品数据
        try {
            model.project.findById(id).then(prd => {
                if(prd){
                    prd.update(data).then(function (isOK) {
                        callback(true);
                    })
                }else{
                    callback(false);
                }
              
            })
        } catch (error) {
            callback(false);
        }
    }
}