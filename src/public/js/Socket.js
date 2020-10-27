class Socket {
	static io;

	static connect(addMessage, user, handleUsers) {
		//Connection start
		Socket.io = io();
		Socket.io.emit('userConnect', JSON.stringify(user));

		//Handle messages
		Socket.receiveMessage(addMessage);

		//Handle users
		Socket.handleUsersOnline(handleUsers);
	}

	static receiveMessage(addMessage) {
		Socket.io.on('newMessage', function (message) {
			addMessage(JSON.parse(message));
		});
	}

	static handleUsersOnline(handleUsers) {
		Socket.io.on('addUser', function (user) {
			handleUsers(JSON.parse(user), true);
		});

		Socket.io.on('removeUser', function (user) {
			handleUsers(JSON.parse(user), false);
		});
	}

	static sendMessage(message) {
		Socket.io.emit('sendMessage', JSON.stringify(message));
	}

	static disconnect(user) {
		Socket.io.emit('userDisconnect', JSON.stringify(user));
		Socket.io.disconnect();
	}
}
