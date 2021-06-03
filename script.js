import axios from 'axios';

document.addEventListener('DOMContentLoaded', () => {
	const form = document.querySelector('form');
	form.addEventListener('submit', (e) => {
		e.preventDefault();
		const username = document.querySelector('input').value;
		alert(username);
	});
});
