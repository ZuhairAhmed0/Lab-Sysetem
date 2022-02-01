const usersData = {username: 'zuhair', password: '12345678'};

// post("/api/login") {username: string; password: string}

fetch('https://lab01.deno.dev/api/login', {
   method: 'POST',
   body: JSON.stringify(usersData)
}).then((response) => response.json()).then((data) => {
		console.log('Success:', data);
	})

// fetch('https://lab01.deno.dev/api/users', {
// 	method: 'get',
// 	headers: {
// 		'Content-Type': 'application/json',
// 	}
// })
// 	.then((response) => response.json())
// 	.then((data) => {
// 		console.log(data);
// 	});
