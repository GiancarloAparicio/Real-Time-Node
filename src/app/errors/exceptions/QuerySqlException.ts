import ErrorException from './ErrorException';

export default class QuerySqlException extends ErrorException {
	constructor(errors: object | Array<object>, details: string) {
		super('Query Sql Exception');
		this.status(400);
		this.details(details);
		this.errors(errors);
	}
}
