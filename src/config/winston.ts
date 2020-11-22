import path from 'path';
import fs from 'fs-extra';
import { APP_ENV } from '../config/config';
import { createLogger, format, transports } from 'winston';

if (!fs.existsSync(path.join(__dirname, '..','app','errors','logs'))) {
	fs.mkdirSync(path.join(__dirname, '..','app','errors','logs'));
}

const log = createLogger({
	level: APP_ENV === 'development' || APP_ENV === 'dev' ? 'debug' : 'info',
	format: format.combine(
		format.timestamp({
			format: 'YYYY-MM-DD HH:mm:ss',
		}),
		format.printf((info) => `${info.timestamp} ${info.level}: ${info.message}`)
	),
	transports: [
		new transports.Console({
			level: 'info',
			format: format.combine(
				format.colorize(),
				format.printf(
					(info) => `${info.timestamp} ${info.level}: ${info.message}`
				)
			),
		}),
		new transports.File({
			maxsize: 5120000,
			maxFiles: 4,
			filename: path.join(__dirname, '..','app','errors','logs', 'logs-express.log'),
		}),
	],
});

export default log;
