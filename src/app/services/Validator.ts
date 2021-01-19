import { Request, Response, NextFunction } from 'express';
import { matchedData, validationResult } from 'express-validator';
import ValidationException from '../errors/exceptions/ValidationException';

export default (rules: any) => [
	rules,
	(req: Request, res: Response, next: NextFunction) => {
		
		let errors = validationResult(req);

		if (!errors.isEmpty()) {
			next(new ValidationException(errors.array()));
		} else {
			req.body.validated = matchedData(req);
			next();
		}
	},
];
