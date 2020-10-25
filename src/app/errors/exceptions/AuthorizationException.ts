import ErrorException from './ErrorException';

export default class AuthorizationException extends ErrorException {
	constructor(errors: object | Array<object>, details: string) {
		super('Authorization Exception');
		this.status(403);
		this.details(details);
		this.errors(errors);
	}
}
