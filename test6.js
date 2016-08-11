var fs = require('fs');
var path = require('path');
var mymodule = require('./mymodule.js');

mymodule(process.argv[2], process.argv[3], function (err, list) {
  if (err)
    return console.error('error : ', err)

  list.forEach(function (file) {
    console.log(file)
  })
})
