import { Application } from 'express';
import { verifyToken } from '../helpers/JWT';
import socketIO, { Server } from 'socket.io';
import http, { Server as HttpServer } from 'http';

export default class Socket {
	private io: Server;
	private server: HttpServer;

	constructor(app: Application) {
		this.server = http.createServer(app);
	}

	listen(port: number | string) {
		this.server.listen(port);
		this.io = socketIO(this.server);
	}

	getSocketIO() {
		return this.io;
	}

	initializeEvents() {
		this.io.on('connection', (socket) => {
			socket.on('sendMessage', (data) => {
				let message = JSON.parse(data);

				if (verifyToken(message.token)) {
					this.io.sockets.emit('newMessage', data);
				}
			});

			socket.on('userConnect', (data) => {
				this.io.sockets.emit('addUser', data);
			});

			socket.on('userDisconnect', (data) => {
				this.io.sockets.emit('removeUser', data);
			});
		});
	}
}
