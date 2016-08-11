var fs = require('fs')
var path = require('path')

module.exports = function (dir, Str, callback) {

  fs.readdir(dir, function (err, lists) {
    if (err)
      return callback(err)

    lists = lists.filter(function (file) {
      return path.extname(file) === '.' + Str
    })

    callback(null, lists)
  })
}
