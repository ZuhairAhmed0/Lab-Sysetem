
const username = document.querySelector('#username');
const password = document.querySelector('#password');
const form = document.querySelector('form');


form.addEventListener('submit', (event) => {
	event.preventDefault();
	const userData = {username: username.value, password: password.value};
	fetch('https://lab01.deno.dev/api/login', {
		method: 'POST',
		headers: {
			'Content-type': 'application/json',
		},
		body: JSON.stringify(userData),
	})
		.then((response) => {
			if (response.status == 200) {
				return response.json();
			} else {
				return response.text();
			}
		})
		.then((data) => {
			if (data) {
				localStorage.setItem('token', data.token)
				location.href = 'admin.html';
				document.querySelectorAll(`form input`).forEach((input) => (input.value = ''));
			}
		});
});


