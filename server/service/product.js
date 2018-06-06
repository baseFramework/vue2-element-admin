'use strict';
const model = require('../model/index');

/** 
 * 定义产品基础模型服务
*/
module.exports = {
    create: function (data, callback) { //创建数据方法
        var isOk;
        let me = this;
        try {
            model.product.create(data);
            isOk = true
            callback(isOk)
        } catch (error) {
            console.log(error);
            isOk = false;
            callback(isOk)
        }
    },
    list: function (page, size, projectid, callback) { //查询产品数据列表  分页
        let offset = (parseInt(page) * parseInt(size)) - parseInt(size);
        let limit = parseInt(size);
        model.product.findAll({
            limit,
            offset,
            order: [['createdAt', 'desc']],
            where: {
                projectid,
            }
        }).then(function (res) {
            model.product.findAll({
                attributes: ['id'],
                where: {
                    projectid,
                }
            }).then(function (arr) {
                let result = {
                    items: res,
                    total: arr.length
                }
                callback(result);
            })
        });
    },
    findById: function (id, callback) {
        model.product.findById(id).then(function (res) {
            callback(res);
        })
    },
    findByName: function (name) {
        return model.product.findAll({
            order: [['createdAt', 'desc']],
            attributes: ['name'],
            where: {
                name,
            }
        });
    },
    deleteById: function (id, callback) {  //根据ID删除数据
        try {
            model.product.destroy({
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
            model.product.findById(id).then(prd => {
                prd.update(data).then(function (isOK) {
                    callback(true);
                })
            })
        } catch (error) {
            callback(false);
        }
    }
}