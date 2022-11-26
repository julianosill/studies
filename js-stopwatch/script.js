let sec = 0;
let min = 0;
let hr = 0;
let interval;

const start = () => {
	console.log('Start!');
	interval = setInterval(counter, 1);
}

const pause = () => {
	console.log('Pause!');
	clearInterval(interval);
}

const stop = () => {
	console.log('Stop!');
	clearInterval(interval);
	document.getElementById('time').innerText='00:00:00';
}

const counter = () => {
	sec++;
	let currentTime = `${hr}:${min}:${sec}`;
	document.getElementById('time').innerText=currentTime;
}