'use strict'
const express = require('express');
const router = express.Router();
module.exports = function() {
    router.all('*', function(req, res, next) {
	    res.header("Access-Control-Allow-Origin", "*");
	    res.header("Access-Control-Allow-Headers", "*");
	    res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
	    res.header("X-Powered-By", '3.2.1');
	    res.header("Content-Type", "application/json;charset=utf-8");
	    next();
	});
	require("./home")(router); // 主页api
	require("./product")(router); // 产品api
	require("./project")(router); // 产品api
    return router;
}