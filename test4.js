var fs = require('fs');
var file = process.argv[2];

fs.readFile(file, function(err, buf) {
  console.log(buf.toString().split('\n').length -1);
});
