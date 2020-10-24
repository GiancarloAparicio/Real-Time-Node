import ErrorException from './ErrorException';

export default class AuthorizationException extends ErrorException {
	constructor(errors: object | Array<object>) {
		super('Authorization Exception');
		this.status(403);
		this.errors(errors);
	}
}
