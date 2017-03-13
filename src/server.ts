import * as SocketIO from 'socket.io';
import * as serve from 'koa-static';
import * as Koa from 'koa';

import * as http from 'http';
import * as fs from 'fs';
import * as path from 'path';

const app = new Koa();
const server = http.createServer(app.callback());
const io = SocketIO(server);

//app.use(ctx => {
//  ctx.response.type = 'html';
//  ctx.response.body = fs.createReadStream(path.join(__dirname, 'test.html'),{
//    flags: 'rs'
//  });
//});

app.use(serve('.'));

io.on('connection', (socket)=>{
  //socket.emit('request', /* */); // emit an event to the socket
  //io.emit('broadcast', /* */); // emit an event to all connected sockets
  //socket.on('reply', function(){ /* */ }); // listen to the event

  socket.on('poyo', (msg) => {
    console.log(msg);
  });
});

server.listen(3000, (req, res) => {
  console.log(3000);
});
