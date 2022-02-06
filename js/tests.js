import PostData from './PostData.js';
import GetData from "./GetData.js";
const username = document.querySelector('#name');
const price = document.querySelector('#price');
const container = document.querySelector('#container');
const department = document.querySelector('#department');
const testPatient = document.querySelector('.test__patient');

testPatient.addEventListener('submit', (event) => {
	event.preventDefault();
	const data = {name: username.value, price: +price.value, container: container.value, department: department.value};
	const postData = new PostData(data, 'tests');
	postData.fetchData();
});

// const getData = new GetData('tests');
// getData.fetchData();


