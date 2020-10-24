import ErrorException from './ErrorException';

export default class ValidationException extends ErrorException {
	constructor(errors: object | Array<object>) {
		super('Invalid request, failed validation');
		this.status(400);
		this.errors(errors);
	}
}
