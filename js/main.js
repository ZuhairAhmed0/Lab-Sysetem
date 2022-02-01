const usersData = {username: 'zuhair', password: '12345678'};

// post("/api/login") {username: string; password: string}.

fetch('https://lab01.deno.dev/api/login')
	.then((response) => response.json())
	.then((data) => {
		console.log('Success:', data);
	});
