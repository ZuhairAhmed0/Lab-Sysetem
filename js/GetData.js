class GetData {
	constructor(url) {
		this.url = url;
	}
	fetchData() {
		fetch(`https://lab01.deno.dev/api/${this.url}`, {
			method: 'get',
			headers: {
				'Content-Type': 'application/json',
				Authorization: localStorage.getItem('token'),
			},
		})
			.then((response) => {
				if (response.status == 200) {
					return response.json();
				} else {
					return response.text();
				}
			})
			.then((data) => {
            console.log(data);
			});
	}
}
export default GetData;

