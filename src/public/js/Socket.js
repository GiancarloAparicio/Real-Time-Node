class Socket {
	static io;

	static connect(addMessage) {
		Socket.io = io();
		Socket.receiveMessage(addMessage);
	}

	static receiveMessage(addMessage) {
		Socket.io.on('newMessage', function (message) {
			addMessage(JSON.parse(message));
		});
		Socket.io.on('disconnect', () => {
			alert('disconnect user');
		});
	}

	static sendMessage(message) {
		Socket.io.emit('sendMessage', JSON.stringify(message));
	}

	static disconnect() {
		Socket.io.disconnect();
	}
}
