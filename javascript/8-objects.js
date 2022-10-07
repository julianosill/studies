/*	OBJECTS

	It's used curly braces <{}> to designate an object literal. An object is organized into key-value pairs (key: value) and is mutable.
	It's possible to assign/update properties after creating an object.

	Syntax:

		let objectName = {
			key: 'value',
			'Key Name': 'value',
		};

	Accessing properties:

		Dot notation		=>	objectName.key;				Returns 'value'.
		Bracket notation	=>	objectName['Key Name'];		Returns 'value.

	Assigning, update/change and delete properties:

		objectName.key = 'new value';		Updates the value of the key.
		objectName.newKey = 'value';		Assigns a new key and its value to the object.
		delete objectName.key;				Deletes the key.

	Assigning methods:

		let object = {
			funcName () {
				code here
			}
		};

*/

	// Example 1 - Creating an object literal:
	let bike = {
		brand: 'Triumph',			// <brand> is a property.
		model: 'Tiger 900 Rally',
		'Fuel Type': 'Gas',
		roar () {
			console.log('I\'m the speed!');
		}
	}
	
	bike.brand;						// Returns 'Triumph'.
	bike['Fuel Type'];				// Returns 'Gas'.
	console.log(bike);

	bike.motorSize = '900cc';		// Assigns <motorSize> as a new key and '900cc' as its value.
	delete bike['Fuel Type'];		// Deletes <Fuel Type> key.
	console.log(bike);
	bike.roar();

	// Example 2 - Nested Objects
	let car = {
		engine: {
			size: '1.6L',
			power: '100hp'
		},
		dimension: {
			weight: '1.5t',
			passengers: '5'
		},
		'Color Palette': {
			outsize: 'Dark silver',
			inside: 'Light silver'
		}
	}
	console.log(car['Color Palette'].inside);		// Returns 'Light silver'.
	car.model = {type: 'Hatch', year: 2007};		// Adds another object <model> with properties <type> and <year>.
	console.log(car);
	console.log(car.model.year);