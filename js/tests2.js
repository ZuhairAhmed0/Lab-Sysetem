import PostData from './PostData.js';
import GetData from './GetData.js';
import cookie from "/node_modules/cookie_js/src/cookie.js";

const username = document.querySelector('#name');
const testId = document.querySelector('#test_id');
const lower = document.querySelector('#lower');
const upper = document.querySelector('#upper');
const unit = document.querySelector('#unit');
const results = document.querySelector('#results');
const testChildrenPatient = document.querySelector('.test-children__patient');
const select_test = document.querySelector('.test-children__patient #test_id');

testChildrenPatient.addEventListener('submit', (event) => {
	event.preventDefault();
	const data = {
		test_id: +testId.value,
		name: username.value,
		lower: +lower.value,
		upper: +upper.value,
		unit: unit.value,
		results: results.value.split(' '),
	};
	const postData = new PostData(data, 'children');
	postData.fetchData();
	console.log(data);
});

// const getData = new GetData('children');
// getData.fetchData();

fetch('https://lab01.deno.dev/api/tests', {
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
		data.forEach((test) => {
			select_test.insertAdjacentHTML(
				'beforeend',
				`
				<option value="${test.id}">${test.name}</option>
				`,
			);
		});
	});
