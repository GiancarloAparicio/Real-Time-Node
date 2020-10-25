class UserService {
	static async login(formElement) {
		const form = new FormData(formElement);

		const user = {
			email: form.get('email'),
			password: form.get('password'),
		};

		let response = await postFetch(formElement.action, user, 'POST');

		return response;
	}

	static async logout() {
		localStorage.clear();
		Route.changeRoute('/login');
	}
}
