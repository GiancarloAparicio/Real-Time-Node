const data = {
	title: 'Chat Node',
	status: JSON.parse(localStorage.getItem('status')) || {},
};

const methods = {
	async loginUser({ target }) {
		const form = new FormData(target);
		const user = {
			email: form.get('email'),
			password: form.get('password'),
		};

		this.status = await postFetch(target.action, user, 'POST');
		this.status.user = true;

		localStorage.setItem('status', JSON.stringify(this.status));
	},
};

const watch = {
	status() {
		if (this.status.data) alert('Login success');

		if (this.status.errors) alert('errors params');

		return this.status;
	},
};

const app = new Vue({
	el: '#app',
	data,
	methods,
	watch,
});

io();
