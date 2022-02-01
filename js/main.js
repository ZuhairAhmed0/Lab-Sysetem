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
				console.log('Status Code: ' + response.status);
			}
		})
		.then((data) => {
			if (data) {
				location.href = 'admin.html';
				username.value = '';
				password.value = '';
			}
		});
});

/*
fetch('https://lab01.deno.dev/api/users', {
	method: 'get',
	headers: {
		'Content-Type': 'application/json',
      'Authorization': 'eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwibmFtZSI6ImFkbWluIiwicGhvbmUiOiIwOTY3NjQ1NjIwIiwidXNlcm5hbWUiOiJhZG1pbiIsInJvbGUiOiJhZG1pbiIsImV4cCI6MTY0MzgwNzcxNH0.jB1LKBAO4mGbT2UUY4qUFSeG4hx2Tpl218fKd4IqclXV1HBx7zKC7xfFXnVuULenk9W-nfy0suMgLvn18npV-A'
	},
}).then((response) => {
	if (response.status == 200) {
		return response.json()
	} else {
		return response.status
	}
}).then((data) => {
   console.log(data);
});
*/
