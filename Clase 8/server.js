var express = require('express');
var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);
var path = require('path')

app.use('/node_modules', express.static(path.join(__dirname, '../node_modules')));

app.get('/',function(req,res){
	res.sendFile(__dirname + '/index.html');
});

//para el chat final
io.on('connection', function(socket){
  socket.on('chat message', function(msg){
    io.emit('chat message', msg);
  });
});

//para enviar mensajes a la consola por la pagina html
// io.on('connection', function(socket){
//   socket.on('chat message', function(msg){
//     console.log('message: ' + msg);
//   });
// });

//para probar la conceccion del socket
// io.on('connection', function(socket){
// 	console.log('a user connected');
// 	socket.on('disconnect', function(){
// 		console.log('user disconnected');
// 	});
// });

server.listen(3000, function(){
  console.log('listening on *:3000');
});