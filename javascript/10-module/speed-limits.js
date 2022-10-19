const converter = require('./converter.js');
const roadType = ['Local Street', 'Avenue', 'Highway'];
const speedInMph = [20, 40, 60];
const speedInKmh = speedInMph.map(speed => Math.floor(converter.convertSpeed(speed)));
for(let i = 0; i < roadType.length; i++) {
	console.log(`The speed limit for ${roadType[i]}: ${speedInMph[i]}mph / ${speedInKmh[i]}kmh`);
}