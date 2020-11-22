import log from '../../config/winston';
import ErrorException from './exceptions/ErrorException';
import ValidationException from './exceptions/ValidationException';
import AuthorizationException from './exceptions/AuthorizationException';
import AuthenticationException from './exceptions/AuthenticationException';
import { Response, Request, NextFunction } from 'express';
import QuerySqlException from './exceptions/QuerySqlException';
import NotFoundException from './exceptions/NotFoundException';

const handleErrors = (
	err: ErrorException,
	req: Request,
	res: Response,
	next: NextFunction
) => {
	if (!(err instanceof ErrorException)) {
		res.status(400).json({
			message: 'Query invalid',
			errors: err,
		});
	}

	let error = err.build();

	if (err instanceof ValidationException) {
		log.error(`Validation-Exception:  Invalid request (${error.code})`);
		res.status(error.code).json(error);
	}

	if (err instanceof AuthenticationException) {
		log.error(`Authentication-Exception:  ${error.details} (${error.code})`);
		res.status(error.code).json(error);
	}
	if (err instanceof AuthorizationException) {
		log.error(`Authorization-Exception:  ${error.details} (${error.code})`);
		res.status(error.code).json(error);
	}

	if (err instanceof QuerySqlException) {
		log.error(`Query-Sql-Exception:  ${error.details} (${error.code})`);
		res.status(error.code).json(error);
	}

	if (err instanceof NotFoundException) {
		log.error(`Not-Found-Exception:  ${error.details} (${error.code})`);
		res.status(error.code).json(error);
	}

};

export default handleErrors;
