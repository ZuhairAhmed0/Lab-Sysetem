import cookie from "/node_modules/cookie_js/src/cookie.js";
class GetData {
	constructor(url) {
		this.url = url;
	}
	fetchData() {
		fetch(`https://lab01.deno.dev/api/${this.url}`, {
			method: 'get',
			headers: {
				'Content-Type': 'application/json',
				Authorization: cookie.get('authorization'),
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

