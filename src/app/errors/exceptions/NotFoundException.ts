import ErrorException from './ErrorException';

export default class NotFoundException extends ErrorException {
	constructor(details: string) {
		super('Not Found Exception');
		this.status(404);
		this.details(details);
	}
}
