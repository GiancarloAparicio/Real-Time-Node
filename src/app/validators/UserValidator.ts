import Validator from '../services/Validator';
import { body } from 'express-validator';

export default Validator([
	body('email').isEmail().withMessage('Is not email'),

	body('name')
		.isLength({ min: 2 })
		.withMessage('Name must be at least 2 chars long'),

	body('last_name')
		.isLength({ min: 2 })
		.withMessage('Last name must be at least 2 chars long'),

	body('password')
		.isLength({ min: 8 })
		.withMessage('Password must be at least 8 chars long'),
]);
