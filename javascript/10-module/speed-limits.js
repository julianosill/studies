// Import a module which contains a function that converts mph to kmh
const converter = require('./converter.js');

// Create an array with road types/categories
const roadType = ['Local Street', 'Avenue', 'Highway'];

// Create an array with respective speed limits
const speedInMph = [20, 40, 60];

// Create a function that converts the speed in mph to kmg and store in a new array
const speedInKmh = speedInMph.map(speed => Math.floor(converter.convertSpeed(speed)));

// Loop and print all the road types and its speed limits respectively
for(let i = 0; i < roadType.length; i++) {
	console.log(`The speed limit for ${roadType[i]}: ${speedInMph[i]}mph / ${speedInKmh[i]}kmh`);
}