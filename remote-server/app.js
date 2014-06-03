var io = require('socket.io').listen(3001);

io.sockets.on('connection', function(socket) {
	socket.on('action', function(data) {
		socket.broadcast.emit('action', data);
	});
});