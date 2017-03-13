"use strict";
exports.__esModule = true;
var SocketIO = require("socket.io");
var serve = require("koa-static");
var Koa = require("koa");
var http = require("http");
var app = new Koa();
var server = http.createServer(app.callback());
var io = SocketIO(server);
//app.use(ctx => {
//  ctx.response.type = 'html';
//  ctx.response.body = fs.createReadStream(path.join(__dirname, 'test.html'),{
//    flags: 'rs'
//  });
//});
app.use(serve('.'));
io.on('connection', function (socket) {
    console.log(socket);
    //socket.emit('request', /* */); // emit an event to the socket
    //io.emit('broadcast', /* */); // emit an event to all connected sockets
    //socket.on('reply', function(){ /* */ }); // listen to the event
});
server.listen(3000, function (req, res) {
    console.log(3000);
});
