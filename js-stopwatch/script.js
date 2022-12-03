// Global variables
const timeDisplay = document.getElementById('time');
const startButton = document.getElementById('start-btn');
const stopButton = document.getElementById('stop-btn');
const resetButton = document.getElementById('reset-btn');
const addLapButton = document.getElementById('add-laptime-btn');
const clearLapButton = document.getElementById('clear-laptime-btn');

let milliseconds = 0;
let seconds = milliseconds / 1000;
let interval;
let isRunning = false;
let addLapClicks = 0;

// Counters from 0 to infinite until it's paused or stopped
const counter = () => {
	milliseconds++;
	
	// Format time
	let ms = milliseconds;
	let secs = seconds % 60;
	let mins = Math.floor(seconds / 60);
	let hrs = Math.floor(seconds / 3600);

	if(secs < 10) secs = '0' + secs;
	if(mins < 10) mins = '0' + mins;
	if(hrs < 10) hrs = '0' + hrs;

	timeDisplay.innerText = `${hrs}:${mins}:${secs}:${ms}`;
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



// Create variables for addLaptime functions
const	laptimeSection = document.querySelector('.laptime-section'),
		laptimeList = document.querySelector('.laptime-list');

// Add a laptime item
const addLaptimeItem = () => {
	const	li = document.createElement('li'),
			laptime = document.getElementById('time').innerText;
	li.className = 'laptime-item';
	li.innerHTML = laptime;
	laptimeList.appendChild(li);
}

// Add laptime to the list
const addLap = () => {
	if(!isRunning) {
		window.alert('Please, start the stopwatch first.');
	} else if(addLapClicks == 0) {
		addLaptimeItem();
		addClearButton();
		addLapClicks++;
	} else {
		addLaptimeItem();
	};
}

// Create a clear laptimes button
const addClearButton = () => {
	const div = document.createElement('div');
	div.innerHTML = '<button class="clear-btn button" onclick="clearLaptimes()">Clear laptimes</button>';
	laptimeSection.appendChild(div);
}

// Create a function to clear the laps
const clearLaptimes = () => {
	laptimeList.replaceChildren();
	document.querySelector('.clear-btn').remove();
	addLapClicks = 0;
}