/* 
	1. Create a catalog of vehicles with 2 models for each type containing some shared and specific specs as listed below:
		a. Types: Automobile and Motorcycle;
		b. Shared specs: Model, Autonomy and Fuel Capacity;
		c. Automobile specs: Passengers;
		d. Motorcycle specs: Top Speed and Torque.
	2. Create a method that calculates how much fuel you'll need for a roadtrip.
*/

class Vehicle {
	constructor(model, autonomy, fuelCapacity) {
		this._model = model;
		this._autonomy = autonomy;
		this._fuelCapacity = fuelCapacity;
		vehicleModels.push(this._model);		// Add the model name of the object to <vehicleModels> array.
	}
	get model() {
		return this._model;
	}
	get autonomy() {
		return this._autonomy;
	}
	get fuelCapacity() {
		return this._fuelCapacity;
	}
	fuelNeeded(km) {
		const calc = Math.floor(km / this._autonomy);
		return `You'll need ${calc}L for your ${this._model} to reach the destination, which is ${km}km away.`;
	}
}

let vehicleModels = [];		// Create an array to store the model name of every object assigned to Vehicle.

	class Automobile extends Vehicle {
		constructor(model, autonomy, fuelCapacity, passengers) {
			super(model, autonomy, fuelCapacity);
			this._passengers = passengers;
		}
		get passengers() {
			return this._passengers;
		}
		
	}

	class Motorcycle extends Vehicle {
		constructor(model, autonomy, fuelCapacity, topSpeed, torque) {
			super(model, autonomy, fuelCapacity);
			this._topSpeed = topSpeed;
			this._torque = torque;
		}
		get topSpeed() {
			return this._topSpeed;
		}
		get torque() {
			return this._torque;
		}
	}

/*
	Automobile('Model', 'Autonomy', 'Fuel Capacity', 'Passengers')
	Motorcycle('Model", 'Autonomy', 'Fuel Capacity', 'Top Speed (km/h)', 'Torque (Nm)')
*/

const	fordFiesta = new Automobile('Ford Fiesta', 14, 45, 5),
		vwGol = new Automobile('VW Gol', 13, 51, 5),
		tiger900 = new Motorcycle('Triumph Tiger 900', 18, 20, 205, 90),
		africaTwin = new Motorcycle('Africa Twin', 15, 21, 210, 120);

console.log(fordFiesta.fuelNeeded(1500));		// Calculate how much fuel you'll need for the roadtrip.
console.log(vehicleModels);						// Prints all the models stored in Vehicle class.