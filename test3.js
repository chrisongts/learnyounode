

var fs = require('fs');
var file = process.argv[2];

var buf = fs.readFileSync(file).toString().split('\n');
  console.log(buf.length-1);
