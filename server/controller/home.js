'use strict'
const resObj = require('../config/resobj.js');
const response = require('../util/net.js');
const homeservice = require('../service/home');



module.exports = (function() {
   
    return function(router) {
        var sequelize = router.sequelize;
        router.get("/api/home", function(req, res) {
            const result = {};
            res.send(response(resObj.success,result))
        });
    }
})();