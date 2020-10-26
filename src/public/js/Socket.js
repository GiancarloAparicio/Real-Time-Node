class Socket {
	static io;
	constructor(addMessage) {
		Socket.io = io();
		this.receiveMessage(addMessage);
	}
	receiveMessage(addMessage) {
		Socket.io.on('newMessage', function (message) {
			addMessage(JSON.parse(message));
		});
	}

	static sendMessage(message) {
		Socket.io.emit('sendMessage', JSON.stringify(message));
	}
}
