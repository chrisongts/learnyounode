var fs = require('fs');
var path = require('path');

fs.readdir(process.argv[2], function (err, lists) {
  // if (err) return console.error(err)
  lists.forEach(function(list) {
      if (path.extname(list) === ('.'+process.argv[3])) {
          console.log(list)
      }
  })
})
