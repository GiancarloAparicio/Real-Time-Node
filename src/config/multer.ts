import path from 'path';
import multer from 'multer';
import { nanoid } from 'nanoid';
import { APP_PATH_FILE } from './config';

const storage = multer.diskStorage({
	destination: `${APP_PATH_FILE}`,
	filename: (req, file, cb) => {
		cb(null, nanoid() + path.extname(file.originalname));
	},
});

export default multer({ storage });
