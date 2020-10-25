import ErrorException from './ErrorException';

export default class AuthenticationException extends ErrorException {
	constructor(errors: object | Array<object>, details: string) {
		super('Authentication Exception');
		this.status(403);
		this.details(details);
		this.errors(errors);
	}
}
