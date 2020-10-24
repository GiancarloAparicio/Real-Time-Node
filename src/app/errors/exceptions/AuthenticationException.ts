import ErrorException from './ErrorException';

export default class AuthenticationException extends ErrorException {
	constructor(errors: object | Array<object>) {
		super('Authentication Exception');
		this.status(403);
		this.errors(errors);
	}
}
