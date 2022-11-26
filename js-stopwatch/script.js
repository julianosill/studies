let sec = 0;
let min = 0;
let hr = 0;
let interval;

const formatDigit = (number) => {
	if(number < 10) {
		return '0' + number;
	} else {
		return number;
	}
}

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