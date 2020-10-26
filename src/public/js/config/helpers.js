/**
 * Function for send request Function to send requests through the GET method
 * @param {String} url
 * @param {String | null} token
 * @return {object}
 */
const getFetch = async (url, token) => {
	let headers = {
		'Content-Type': 'application/json',
		mode: 'no-cors',
	};

	if (token) {
		headers.Authorization = `Bearer ${token}`;
	}

	const res = await fetch(url, {
		method: 'GET',
		headers: headers,
	});

	return await res.json();
};

/**
 * Function for send request Function to send requests through the POST method
 * @param {String} url
 * @param {object} data
 * @param {String | null} token
 * @return {object}
 */
const postFetch = async (url, data, token) => {
	let headers = {
		'Content-Type': 'application/json',
		mode: 'no-cors',
	};

	if (token) {
		headers.Authorization = `Bearer ${token}`;
	}

	const res = await fetch(url, {
		method: 'POST',
		headers: headers,
		body: JSON.stringify(data),
	});

	return await res.json();
};

/**
 * Function to get an element from the DOM
 * @param {String} selector
 */
const getElement = document.querySelector.bind(document);

/**
 * Check the current path and return only one object with TRUE in the current path
 *  @return {object}
 */
const checkCurrentRoute = () => {
	let response = {};
	response.home = Route.showIf('home');
	response.login = Route.showIf('login');
	response.signIn = Route.showIf('signIn');
	return response;
};
