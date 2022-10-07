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

	Assigning and update/change properties:

		objectName.key = 'new value';		Updates the value of the key.
		objectName.newKey = 'value';		Assign a new key and its value to the object.

*/

	// Example 1 - Creating an object literal:
	let bike = {
		brand: 'Triumph',		// "brand" and "model" are properties.
		model: 'Tiger 900 Rally',
		'Fuel Type': 'Gas',
	}
	
	bike.brand;				// Returns 'Triumph'.
	bike['Fuel Type'];		// Returns 'Gas'.