/**
 * Created by AntonyBaasan on 14-11-07.
 */
var path = require('path');
var rootPath = path.normalize(__dirname + '/../../');
module.exports = {
    development:
    {
        rootPath: rootPath,
        port: 8000
    },
    production:
    {
        rootPath: rootPath,
        port: process.env.PORT || 80
    }
}