var net = require('net');

var server = net.createServer(function(socket) {
  socket.end(getTime() + '\n');
});

var getTime = function() {
  var date = new Date();
  var year = date.getFullYear().toString();
  var month = ('0' + (date.getMonth() + 1)).slice(-2);
  var day = ('0' + date.getDate().toString()).slice(-2);
  var hours = ('0' + date.getHours()).slice(-2);
  var minutes = ('0' + date.getMinutes()).slice(-2);
  return year + '-' + month + '-' + day + ' ' + hours + ':' + minutes;
};

server.listen(process.argv[2]);

// Official solution:

// var net = require('net')

// function zeroFill (i) {
//  return (i < 10 ? '0' : '') + i
// }

// function now () {
//  var d = new Date()
//  return d.getFullYear() + '-' +
//    zeroFill(d.getMonth() + 1) + '-' +
//    zeroFill(d.getDate()) + ' ' +
//    zeroFill(d.getHours()) + ':' +
//    zeroFill(d.getMinutes())
// }

// var server = net.createServer(function (socket) {
//  socket.end(now() + '\n')
// })

// server.listen(Number(process.argv[2]))
