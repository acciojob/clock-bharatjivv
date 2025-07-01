//your JS code here. If required.
let timeDisplay = document.getElementById('timer');

setInterval(() => {
	let currentTime = new Date();
	timeDisplay.textContent = currentTime;
}, 1000)