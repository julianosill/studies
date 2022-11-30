let	sec = 0,
	min = 0,
	hr = 0,
	interval,
	isRunning = false;

// Digits starting with 01 instead of 1
const formatDigit = (number) => {
	if(number < 10) {
		return '0' + number;
	} else {
		return number;
	}
}

// Starts the stopwatch
const start = () => {
	if(!isRunning) {
		console.log('Start!');
		interval = setInterval(counter, 10);
	}
	isRunning = true;
}

// Pauses the stopwatch
const pause = () => {
	console.log('Pause!');
	clearInterval(interval);
	isRunning = false;
	console.log('Pause at: ' + document.getElementById('time').innerText);
}

// Stops the stopwatch
const stop = () => {
	console.log('Stop!');
	clearInterval(interval);
	isRunning = false;
	sec = 0;
	min = 0;
	hr = 0;
	document.getElementById('time').innerText='00:00:00';
}

// Counters from 0 to infinite until it's paused or stopped
const counter = () => {
	sec++;
	if(sec==60) {
		min++;
		sec = 0;
	};
	if(min==60) {
		hr++;
		min = 0;
	}
	second = formatDigit(sec);
	minute = formatDigit(min);
	hour = formatDigit(hr);
	let currentTime = `${hour}:${minute}:${second}`;
	document.getElementById('time').innerText=currentTime;
}