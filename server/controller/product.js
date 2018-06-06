'use strict'
const resObj = require('../config/resobj.js');
const response = require('../util/net.js');
const productservice = require('../service/product.js');



module.exports = (function () {

    return function (router) {
        //添加产品
        router.post("/api/product/add", function (req, res) {
            let data;
            if (req.body) {
                data = {
                    projectid: req.body.pid, //项目id
                    name: req.body.name,  //产品名称
                    img: req.body.img, //产品图片
                    desc: req.body.desc, //产品描述
                    address: req.body.address, //产品访问地址
                }
            }
            productservice.create(data, function (isOk) {
                console.log(isOk);
                if (isOk) {
                    res.send(response(resObj.success, data))
                } else {
                    res.send(response(resObj.createError, {
                    }))
                }
            });
        });
        //更新产品
        router.post("/api/product/update", function (req, res) {
            let data;
            if (req.body) {
                data = {
                    projectid: req.body.pid, //项目id
                    id: req.body.id,
                    name: req.body.name,  //产品名称
                    img: req.body.img, //产品图片
                    desc: req.body.desc, //产品描述
                    address: req.body.address, //产品访问地址
                }
                console.log(data.id);
                productservice.updateById(data.id, data, function (isOk) {
                    console.log(isOk);
                    if (isOk) {
                        res.send(response(resObj.success, {}))
                    } else {
                        res.send(response(resObj.updateFail, {
                        }))
                    }
                });
            }
        });
        //查询产品列表
        router.get("/api/product/find", function (req, res) {
            let data;
            if (req.query) {
                data = {
                    projectid: req.query.pid, //项目ID
                    page: req.query.page,  //当前页
                    size: req.query.size //每页条数
                }
                productservice.list(data.page, data.size, data.projectid, function (result) {
                    result.page = data.page;
                    result.size = data.size;
                    res.send(response(resObj.success, result));
                })
            }
        });

        //根据ID查询数据
        router.get("/api/product/findById", function (req, res) {
            let data;
            if (req.query) {
                data = {
                    id: req.query.id,//当前数据ID
                }
                productservice.findById(data.id, function (result) {
                    res.send(response(resObj.success, result));
                })
            }
        });

        //删除产品根据ID
        router.get("/api/product/del", function (req, res) {
            let data;
            if (req.query) {
                data = {
                    id: parseInt(req.query.id),  //产品id
                }
                productservice.deleteById(data.id, function (isOK) {
                    if (isOK) {
                        res.send(response(resObj.success, {}));
                    } else {
                        res.send(response(resObj.deleteFail, {}));
                    }
                })
            }
        });


    }
})();