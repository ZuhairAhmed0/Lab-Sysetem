const signout = document.querySelector('.signout');
signout.addEventListener('click', () => {
	window.location.replace('index.html');
	window.localStorage.removeItem('token');
});
