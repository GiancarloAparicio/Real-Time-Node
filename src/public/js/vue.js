const data = {
	status: JSON.parse(localStorage.getItem('status')) || {},
	router: {
		login: true,
		signIn: false,
		home: false,
	},
	messages: [],
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

	async logoutUser() {
		await UserService.logout();
		this.status = {};
		this.router = checkCurrentRoute();
	},

	async changeRoute(hash) {
		await Route.changeRoute(hash);
		this.router = checkCurrentRoute();
	},

	addMessage(message) {
		message.own = this.status.user.email == message.user ? true : false;
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
		if (this.status.user) new Socket(this.addMessage);

		localStorage.setItem('status', JSON.stringify(this.status));
		return this.status;
	},
};

const computed = {
	statusUser() {
		if (this.status.user) {
			this.changeRoute('home');
			new Socket(this.addMessage);
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
