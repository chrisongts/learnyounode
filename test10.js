var net = require('net');
// var server = net.createServer(function (socket) {
//   socket.end(getDate() + '\n');
// });
//
// server.listen(process.argv[2]);

// function getDate(){
// var dt = new Date();
//
// var year = dt.getFullYear();
// var month = dt.getMonth();     // starts at 0
// var date = dt.getDate();      // returns the day of month
// var hours = dt.getHours();
// var minutes = dt.getMinutes();
//
// month += 1;
// if (month < 10) {
//   month = ("0"+month);
// };
// if (date < 10) {
//   date = ("0"+date);
// };
// if (hours < 10) {
//   hours = ("0"+hours);
// };
// if (minutes < 10) {
//   minutes = ("0"+minutes);
// };
// console.log(year + "-" + month + "-" + date + " " + hours + ":" + minutes);
// };
//
// var server = net.createServer(function (socket) {
//   socket.end(getDate() + '\n');
// });
//
// server.listen(process.argv[2]);

function zeroFill(i) {
  return (i < 10 ? '0' : '') + i
}

function now () {
  var d = new Date()
  return d.getFullYear() + '-'
    + zeroFill(d.getMonth() + 1) + '-'
    + zeroFill(d.getDate()) + ' '
    + zeroFill(d.getHours()) + ':'
    + zeroFill(d.getMinutes())
}

var server = net.createServer(function (socket) {
  socket.end(now() + '\n')
})

server.listen(Number(process.argv[2]))
