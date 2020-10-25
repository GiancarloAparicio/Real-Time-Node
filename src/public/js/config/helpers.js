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
