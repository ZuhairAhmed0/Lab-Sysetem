import PostData from './PostData.js';
import GetData from "./GetData.js";

const username = document.querySelector('#name');
const age = document.querySelector('#age');
const phone = document.querySelector('#phone');
const address = document.querySelector('#address');
const addNewPatient = document.querySelector('.add-new__patient');

addNewPatient.addEventListener('submit', (event) => {
	event.preventDefault();
	const data = {name: username.value, phone: phone.value, age: +age.value, address: address.value};
	const postData = new PostData(data, 'patients');
	postData.fetchData();
});

const getData = new GetData('patients');
getData.fetchData();