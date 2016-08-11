var http = require('http');
var map = require('through2-map');


var server = http.createServer(function (inStream, outStream) {
inStream.pipe(map(function (chunk) {
  return chunk.toString().toUpperCase();
})).pipe(outStream);
});

server.listen(Number(process.argv[2]));
