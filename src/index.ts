import App from './App';
import Socket from './app/services/Socket';
import { APP_PORT } from './config/config';

let app = new App();

let webSocket = new Socket(app.getApplication());
webSocket.listen(APP_PORT);
webSocket.initializeEvents();

export default app;
