import http, { Server as HttpServer } from 'http';
import { Application } from 'express';
import socketIO, { Server } from 'socket.io';

export default class Socket {
	private io: Server;
	private server: HttpServer;

	constructor(app: Application) {
		this.server = http.createServer(app);
	}

	listen(port: number | string) {
		this.server.listen(port);
		this.io = socketIO.listen(this.server);
	}

	getSocketIO() {
		return this.io;
	}
}
