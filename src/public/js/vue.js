const data = {
	status: JSON.parse(localStorage.getItem('status')) || {},
	messages: JSON.parse(localStorage.getItem('messages')) || [],
	users: JSON.parse(localStorage.getItem('users')) || [],
	router: {
		login: true,
		signIn: false,
		home: false,
	},
};

const methods = {
	async signInUser({ target }) {
		let response = await UserService.signIn(target);
		this.status = response.data[0].attributes;
	},

	async loginUser({ target }) {
		let response = await UserService.login(target);
		this.status = response.data[0].attributes;
	},

	handleUsers(user, boolean) {
		if (boolean && !elementExistsIn(this.users, user)) {
			this.users.push({ ...user, status: true });
		}

		if (boolean && elementExistsIn(this.users, user)) {
			this.users = this.users.filter((item) => item.email != user.email);
			this.users.push({ ...user, status: true });
		}

		if (!boolean) {
			this.users = this.users.filter((item) => item.email != user.email);
			this.users.push({ ...user, status: false });
		}
	},

	async logoutUser() {
		await UserService.logout(this.status.user);
		this.status = {};
		this.router = checkCurrentRoute();
	},

	async changeRoute(hash) {
		await Route.changeRoute(hash);
		this.router = checkCurrentRoute();
	},

	addMessage(message) {
		this.messages = [...this.messages, message];
	},
	sendMessage({ target }) {
		let data = new FormData(target);
		let { email } = this.status.user;
		let message = {
			message: data.get('message'),
			user: email,
			token: this.status.token,
		};
		Socket.sendMessage(message);
		target.reset();
	},
};

const watch = {
	status() {
		//if (this.status.user) CloseLogin;

		localStorage.setItem('status', JSON.stringify(this.status));
		return this.status;
	},
	messages() {
		localStorage.setItem('messages', JSON.stringify(this.messages));
		return this.messages;
	},

	users() {
		localStorage.setItem('users', JSON.stringify(this.users));
		return this.users;
	},
};

const computed = {
	statusUser() {
		if (this.status.user) {
			this.changeRoute('home');
			Socket.connect(this.addMessage, this.status.user, this.handleUsers);
		} else {
			this.changeRoute('login');
		}

		return this.status.user;
	},
};

const app = new Vue({
	el: '#app',
	data,
	methods,
	watch,
	computed,
});
