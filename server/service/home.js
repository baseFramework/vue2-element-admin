'use strict'
const fsobj = require('./writedata.js')

module.exports = {
    saveUser:function(data){
        let filepath = '/data/user/tom.json';
        fsobj.writeFile(filepath,data);
        return true;
    }
}