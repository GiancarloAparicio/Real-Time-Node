const data = {
	title: 'Chat Node',
	status: JSON.parse(localStorage.getItem('status')) || {},
	router: {
		login: true,
		signIn: false,
		home: false,
	},
};

const methods = {
	async loginUser({ target }) {
		let response = await UserService.login(target);
		this.status = response.data[0].attributes;
	},

	logoutUser() {
		UserService.logout();
		this.status = {};
		this.changeRoute('login');
	},

	handleRouteShow() {
		this.router.home = Route.showIf('home');
		this.router.login = Route.showIf('login');
		this.router.signIn = Route.showIf('signIn');
	},

	async changeRoute(hash) {
		await Route.changeRoute(hash);
		this.handleRouteShow();
	},
	async signInUser({ target }) {
		let response = await UserService.signIn(target);
		this.status = response.data[0].attributes;
	},
};

const watch = {
	status() {
		if (this.status.data) this.status.user = true;
		if (this.status.errors) this.status.user = false;

		localStorage.setItem('status', JSON.stringify(this.status));
		return this.status;
	},
};

const computed = {
	statusUser() {
		this.changeRoute(this.status.user ? 'home' : 'login');
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

io();
