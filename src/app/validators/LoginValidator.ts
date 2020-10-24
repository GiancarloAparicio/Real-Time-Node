import Validator from '../services/Validator';
import { body } from 'express-validator';

export default Validator([
	body('email').isEmail().withMessage('Is not email'),

	body('password')
		.isLength({ min: 8 })
		.withMessage('Password must be at least 8 chars long'),
]);
