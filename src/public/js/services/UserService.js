class UserService {
	static async signIn(formElement) {
		const form = new FormData(formElement);

		const user = {
			name: form.get('name'),
			last_name: form.get('last_name'),
			email: form.get('email'),
			password: form.get('password'),
		};

		return await postFetch(formElement.action, user, 'POST');
	}

	static async login(formElement) {
		const form = new FormData(formElement);

		const user = {
			email: form.get('email'),
			password: form.get('password'),
		};

		return await postFetch(formElement.action, user, 'POST');
	}

	static async logout() {
		localStorage.clear();
		await Route.changeRoute('login');
	}
}
