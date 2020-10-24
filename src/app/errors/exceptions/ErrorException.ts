export default class ErrorException extends Error {
	private code: number;
	private detail: string;
	private data: object | Array<object>;

	constructor(message: string) {
		super(message);
	}

	status(code: number = 400) {
		this.code = code;
		return this;
	}

	details(details: string) {
		this.detail = details;
		return this;
	}

	errors(data: object | Array<object>) {
		this.data = data;
		return this;
	}

	build() {
		return {
			message: this.message,
			details: this.detail,
			code: this.code,
			errors: this.data,
		};
	}
}
