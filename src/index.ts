import App from './App';
import Socket from './app/services/Socket';
import { APP_PORT } from './config/config';

let app = new App();

let socket = new Socket(app.getApplication());
socket.listen(APP_PORT);

socket.getSocketIO().on('connection', (socket) => {
	console.log('new user');
});

export default app;
