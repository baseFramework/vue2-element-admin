"use strict";

/**
 * 返回结果对象
 *
 * @param resObj 返回结果编码
 * @param data 返回数据
 * @author sam.sin
 * @class response
 * @constructor
 */
module.exports = function(resObj, data) {
	return {
		code: resObj.code,
		msg: resObj.msg,
		data: data? data : {}
	}
}