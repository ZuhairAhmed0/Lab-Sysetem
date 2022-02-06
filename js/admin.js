import PostData from './PostData.js';
import GetData from './GetData.js';
import {authorization} from './login.js';

const $name = document.querySelector('#name');
const phone = document.querySelector('#phone');
const username = document.querySelector('#username');
const role = document.querySelector('#role');
const addRole = document.querySelector('#addRole');

const saveNewData = document.querySelectorAll('.save-new__data');

const addNew = document.querySelectorAll('.admin .add');
const cancel = document.querySelectorAll('.admin .cancel');
const addContainer = document.querySelectorAll('.add-container');

saveNewData[1].addEventListener('submit', (event) => {
	event.preventDefault();
	const data = {
		name: $name.value,
		phone: phone.value,
		username: username.value,
		role: role.value,
	};
	const postData = new PostData(data, 'users');
	postData.fetchData();
});
saveNewData[0].addEventListener('submit', (event) => {
	event.preventDefault();
	const data = {
		name: addRole.value,
	};
	const postData = new PostData(data, 'roles');
	postData.fetchData();
});
// const getData = new GetData('roles');
// getData.fetchData();

addNew.forEach((btn, i) => {
	btn.addEventListener('click', (e) => {
		addContainer[i].classList.remove('container-visibil');
	});
});
cancel.forEach((btn, i) => {
	btn.addEventListener('click', (e) => {
		addContainer[i].classList.add('container-visibil');
	});
});

const userInfo = document.querySelector('.user .info');
const permissionInfo = document.querySelector('.permission .info');

fetch('https://lab01.deno.dev/api/users', {
	method: 'get',
	headers: {
		'Content-Type': 'application/json',
		Authorization: authorization,
	}
})
	.then((response) => {
		if (response.status == 200) {
			return response.json();
		} else {
			return response.text();
		}
	})
	.then((data) => {
		data.forEach((user) => {
			userInfo.insertAdjacentHTML(
				'beforeend',
				`
			<div class="d-flex">
				<p>${user.name}</p>
				<button class="btn">edit</button>
			</div>
		`,
			);
			permissionInfo.insertAdjacentHTML(
				'beforeend',
				`
			<div class="d-flex">
				<p>${user.role}</p>
				<button class="btn">edit</button>
			</div>
		`,
			);
		});
	});
