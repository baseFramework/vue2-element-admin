'use strict'
const jsonfile = require('jsonfile')

module.exports = {
    readFile: function (path, callback) {
        return jsonfile.readFileSync(file)
    },
    writeFile: function (path,data) {
        //jsonfile.writeFileSync(path, data,{spaces: 2})
        jsonfile.writeFile(path, data, function (err) {
            console.error(err)
          })
        return true;
    },
    DeleteFile: function () {

    }
}