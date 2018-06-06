'use strict'
const resObj = require('../config/resobj.js');
const response = require('../util/net.js');
const projectservice = require('../service/project.js');



module.exports = (function () {

    return function (router) {
        //添加产品
        router.post("/api/project/add", function (req, res) {
            let data;
            if (req.body) {
                data = {
                    name: req.body.name,  //名称
                    img: req.body.img, //图片
                    desc: req.body.desc, //描述
                    pm: req.body.pm, //产品经理
                    tm: req.body.tm //技术经理
                }
            }
            projectservice.create(data, function (isOk) {
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
        router.post("/api/project/update", function (req, res) {
            let data;
            if (req.body) {
                data = {
                    id: req.body.id,
                    name: req.body.name,  //名称
                    img: req.body.img, //图片
                    desc: req.body.desc, //描述
                    pm: req.body.pm, //产品经理
                    tm: req.body.tm //技术经理
                }
                console.log(data.id);
                projectservice.updateById(data.id, data, function (isOk) {
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
        router.get("/api/project/find", function (req, res) {
            let data;
            if (req.query) {
                data = {
                    page: req.query.page,  //当前页
                    size: req.query.size //每页条数
                }
                projectservice.list(data.page, data.size, function (result) {
                    result.page = data.page;
                    result.size = data.size;
                    res.send(response(resObj.success, result));
                })
            }
        });

        //根据ID查询数据
        router.get("/api/project/findById", function (req, res) {
            let data;
            if (req.query) {
                data = {
                    id:req.query.id,//当前数据ID
                }
                projectservice.findById(data.id, function (result) {
                    res.send(response(resObj.success, result));
                })
            }
        });

        //删除产品根据ID
        router.get("/api/project/del", function (req, res) {
            let data;
            if (req.query) {
                data = {
                    id: parseInt(req.query.id),  //id
                }
                projectservice.deleteById(data.id, function (isOK) {
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