class Router {
	constructor() {
		window.addEventListener('hashchange', (e) => {
			Route.hashchange(window.location.hash);
		});
	}

	hashchange(hash) {
		console.log('Current: ' + hash);
	}

	async changeRoute(route) {
		window.location.hash = '/' + route;
	}

	showIf(path) {
		let currentPath = window.location.hash.slice(2);
		return path.toLowerCase() == currentPath.toLowerCase();
	}
}

let Route = new Router();
