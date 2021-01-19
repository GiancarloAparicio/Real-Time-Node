import path from 'path';
import cors from 'cors';
import morgan from 'morgan';
import * as www from './config/www';
import { createConnection } from 'typeorm';
import routes from './routes/index.routes';
import handleError from './app/errors/handle';
import express, { Application, Request, Response } from 'express';
import AuthJWT from './app/middlewares/auth/JWT';
import { APP_PORT, APP_ENV, APP_PATH_FILE } from './config/config';

export default class App {
	private app: Application;

	constructor() {
		this.node();
		this.app = express();
		this.typeOrm();
		this.config();
		this.middlewares();
		this.routes();
		this.errors();
	}

	private node() {
		process.on('unhandledRejection', www.unhandledRejection);

		process.on('error', www.error);

		process.on('uncaughtException', www.uncaughtException);

		process.on('listening', www.listening);
	}

	private config() {
		this.app.set('port', APP_PORT);
		this.app.set('view engine', 'pug');
		this.app.set('views', path.join(__dirname, './views'));
		this.app.use(express.static(path.join(__dirname, `${APP_PATH_FILE}`)));
	}

	private middlewares() {
		this.app.use(morgan(APP_ENV === 'local' ? 'dev' : 'common'));
		this.app.use(cors());
		this.app.use(express.json());
		this.app.use(express.urlencoded({ extended: false }));
		this.app.use(AuthJWT);
	}

	private routes() {
		for (let route in routes) {
			this.app.use(`/${route}`, routes[route]);
		}

		this.app.get('*', function (req: Request, res: Response) {
			return res.render('./pages/errors/404');
		});
	}

	private typeOrm() {
		return createConnection();
	}

	listen(port: number = 8000) {
		this.app.listen(port || APP_PORT);
		console.log(`APP port: ${this.app.get('port')}`);
	}

	private errors() {
		this.app.use(handleError);
	}

	getApplication(): Application {
		return this.app;
	}
}
