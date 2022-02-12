import cookie from "/node_modules/cookie_js/src/cookie.js";

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
				return response.text();
			} else {
				return response.text();
			}
		})
		.then((data) => {
			if (data) {
				cookie.set('authorization', data, {
					expires: 1, // expires in one day
					secure: true 
				});
				location.href = 'https://zuhairahmed0.github.io/Lab-Sysetem/admin.html';
				document.querySelectorAll(`form input`).forEach((input) => (input.value = ''));
			}
		});
});

