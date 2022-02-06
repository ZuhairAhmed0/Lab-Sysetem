const username = document.querySelector('#username');
const password = document.querySelector('#password');
const form = document.querySelector('form');

export let authorization =
	'eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwibmFtZSI6ImFkbWluIiwicGhvbmUiOiIwOTY3NjQ1NjIwIiwidXNlcm5hbWUiOiJhZG1pbiIsInJvbGUiOiJhZG1pbiIsImV4cCI6MTY0NDI1NjMwOH0.MuHqstLdZEHHcTj__4tTa26E5badVGzhlb0GWzMIrI67udl5UMUd_EIfRMMQJCHGUpJcEqtbFo0Y1S6V9uc3IA';
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
				authorization = data;
				location.replace('admin.html');
			}
		});
});

