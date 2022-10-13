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

	// Example 2 - Nested Objects:
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



/*	PASS BY REFERENCE

	Objects are passed by reference. This means when we pass a variable assigned to an object into a function as an argument, the computer interprets the parameter name as pointing to the space in memory holding that object.
	As a result, functions which change object properties actually mutate the object permanently (even when the object is assigned to a const variable).

*/

	// Example 3:
	const house = {
		floors: 1,
		color: 'red',
	}
	let paintHouse = (obj, newColor) => {
		obj.color = newColor;
	}
	paintHouse(house, 'blue');		// Changes the color to 'blue'.
	let garage = (obj, value) => {
		obj.garage = value;
	}
	garage(house, true);			// Adds a key <garage> with <true> as its value.
	console.log(house);



/*	LOOPING THROUGH OBJECTS

	<for...in> executes a block of code for each property in an object.

	Syntax:

		for(let varName in object.property) {
		}

*/

	// Example 4 - Looping:
	let dragons = {
		dragonsDance: {
			balerion: {
				name: 'Balerion',
				rider: 'Aegon',
				command() {
					console.log(this.name + ', Dracarys!');		// <this> keyword refers to the <balerion> property.
				},												// It must be avoided using arrow function when using <this> in a method, because <this> refers to a global object in the global scope.
			},
			caraxes: {
				name: 'Caraxes',
				rider: 'Daemon'
			},
			syrax: {
				name: 'Syrax',
				rider: 'Rhaenyra'
			},
		}
	};
	for (let dragon in dragons.dragonsDance) {
		console.log(`${dragons.dragonsDance[dragon].name} - Rider: ${dragons.dragonsDance[dragon].rider}`);
	}


	// Example 5 - <this> keyword:
	dragons.dragonsDance.balerion.command();



/*	PRIVACY IN OBJECTS AND PROPERTIES

	There are cases in which accessing and updating the property is not the best option.
	A commonn convention is place an underscore <_> before the name of the property. It'd mean this property shouldn't be altered.

*/

	// Example 6 - Private property:
	const bankAcc = {
		_amount: 500,
	}
	bankAcc._amount;		// Returns 500.



/*	GETTERS AND SETTERS

	Getters are methods that get and return the internal properties of an object.

		Syntax:

			const objectName = {
				_propertyPrivate = 'value',
				get propertyPrivate() {
					return this._propertyPrivate;
				}
			}

	Setters reassigns values of existing properties.

		Syntax:

			const objectName = {
					_propertyPrivate = 'value',
					set propertyPrivate(newValue) {
						this._propertyPrivate = newValue;
					}
				}

*/

	// Example 7:
	const paypalAccount = {
		_amount: 50,
		_credit: 100,
		get amount() {
			if(typeof this._amount === 'number' && this._amount > 0) {		// Checks if the currency is a number and if is more then 0.
				return 'Your current balance is ' + this._amount;
			} else {
				return 'You have no money';
			}
		},
		get credit() {
			return this._credit;
		},
		set credit(newCredit) {
			if(typeof newCredit === 'number') {
				this._credit = newCredit;
			} else {
				console.log('Must be a number.');
			}
		}
	}
	console.log(paypalAccount.amount);		// Prints the <get> amount().
	console.log(paypalAccount.credit);		// Prints the <get> credit().
	paypalAccount.credit = 150;				// Updates the value of credit().
	console.log(paypalAccount.credit);		// Prints the <get> credit() after updating its value.


/*	FACTORY FUNCTIONS

	A factory function is a function that returns an object and can be reused to make multiple object instances.
	Factory functions can also have parameters allowing us to customize the object that gets returned.

	Syntax:

		const createObj = (paramOne, paramTwo, paramThree) => {
			return {
				keyOne: paramOne,
				keyTwo: paramTwo,
				keyThree() {
					console.log(paramThree);
				}
			}
		}

*/

	// Example 8 - Creating a factory function:
	const createPokemon = (name, element, size) => {
		return {
			name: name,
			element: element,
			size: size
		}
	}
	const	squirtle = createPokemon('Squirtle', 'Water', 'Medium'),
			charizard = createPokemon('Charizard', 'Fire', 'Large');
	console.log(charizard);
