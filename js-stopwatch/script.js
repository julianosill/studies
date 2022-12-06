// Global variables
const timeDisplay = document.getElementById('time');
const startButton = document.getElementById('start-btn');
const stopButton = document.getElementById('stop-btn');
const resetButton = document.getElementById('reset-btn');
const laptimeSection = document.getElementById('laptime-section');
const laptimeList = document.getElementById('laptime-list');
const addLaptimeButton = document.getElementById('add-laptime-btn');

let seconds = 0;
let interval;
let isRunning = false;
let addLapClicks = 0;

// Counters from 0 to infinite until it's paused or stopped
const counter = () => {
	seconds++;
	
	// Format time
	let hrs = Math.floor(seconds / 3600);
	let mins = Math.floor((seconds - (hrs * 3600)) / 60);
	let secs = seconds % 60;

	if(secs < 10) secs = '0' + secs;
	if(mins < 10) mins = '0' + mins;
	if(hrs < 10) hrs = '0' + hrs;

	timeDisplay.innerText = `${hrs}:${mins}:${secs}`;
}

// Starts the stopwatch
const start = () => {
	if(!isRunning) {
		interval = setInterval(counter, 1000);
	}
	isRunning = true;
}

// Stops the stopwatch
const stop = () => {
	clearInterval(interval);
	isRunning = false;
}

// Resets the stopwatchs's time
const reset = () => {
	stop();
	seconds = 0;
	timeDisplay.innerText='00:00:00';
}

// Add a laptime item
const addLaptimeLine = () => {
	const li = document.createElement('li');
	const laptime = document.getElementById('time').innerText;
	li.classList.add('list-group-item');
	li.innerHTML = laptime;
	laptimeList.appendChild(li);
}

// Add laptime to the list
const addLap = () => {
	if(!isRunning) {
		window.alert('Please, start the stopwatch first.');
	} else if(addLapClicks == 0) {
		addLaptimeLine();
		addClearButton();
		addLapClicks++;
	} else {
		addLaptimeLine();
	};
}

// Create a clear laptimes button
const addClearButton = () => {
	const button = document.createElement('button');
	button.setAttribute('id', 'clear-laptime-btn');
	button.setAttribute('onclick', 'clearLaptimes()');
	button.classList.add('btn', 'btn-outline-danger', 'mt-3');
	button.innerHTML = '<i class="bi bi-x"></i> Clear laptimes';
	laptimeSection.appendChild(button);
}

// Create a function to clear the laps
const clearLaptimes = () => {
	laptimeList.replaceChildren();
	document.getElementById('clear-laptime-btn').remove();
	addLapClicks = 0;
}

// Event listeners
startButton.addEventListener('click', start);
stopButton.addEventListener('click', stop);
resetButton.addEventListener('click', reset);
addLaptimeButton.addEventListener('click', addLap);