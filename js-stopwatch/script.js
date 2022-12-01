let	sec = 0,
	min = 0,
	hr = 0,
	interval,
	isRunning = false;
	addLapClicks = 0;

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
		interval = setInterval(counter, 1000);
	}
	isRunning = true;
}

// Pauses the stopwatch
const pause = () => {
	console.log('Pause!');
	clearInterval(interval);
	isRunning = false;
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
	let currentTime = `${formatDigit(hr)}:${formatDigit(min)}:${formatDigit(sec)}`;
	document.getElementById('time').innerText=currentTime;
}

// Add laps
const addLap = () => {
	const	lapTime = document.getElementById('time').innerText,
			li = document.createElement('li'),
			lapsSection = document.querySelector('.laps'),
			lapsList = document.querySelector('.laps-list');
	li.innerHTML = lapTime;
	if(!isRunning) {
		window.alert('Please, start the stopwatch first.');
	} else if(addLapClicks == 0) {
		lapsSection.classList.add('active');
		lapsList.appendChild(li);
		addLapClicks++;
	} else {
		lapsList.appendChild(li);
	};
}