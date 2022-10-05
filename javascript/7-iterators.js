/*	ITERATORS

	Iterators are built-in methods called on arrays to manipulate elements and return values.

	Some examples:

		.forEach()		Loops through the array and executes the code for each element.
		.map()			Creates a new array with the results of calling a function for every element in array.
		.filter()		Creates a new array with elements that pass the condition.
		.join()			Converts the elements of an array to strings and concatenated together, returning the resulting string.
		.findIndex()	Returns the first index that passes the test.

*/

	// Example 1 - .forEach():
	const motorcycleBrands = ['Honda', 'Suzuki', 'Yamaha'];
	motorcycleBrands.forEach(brand => {
		console.log('Example 1: ' + brand + ' is a motorcycle brand.');
	});

	// Example 2 - .map():
	const smallSize = [2, 4, 6];
	const bigSize = smallSize.map(size => size * 4);
	console.log('Example 2 ' + bigSize);

	// Example 3 - .filter():
	const numbers = ['1', 2, 'three', 4, 5 ];
	const filterNumbers = numbers.filter(number => {		// Select only the number type data (using <typeof>) in <numbers> and save to a new array called <filterNumbers>.
		return typeof number === 'number';
	});
	console.log('Example 3: ' + filterNumbers);

	// Example 4 - map() and .join():
	const animals = ['Hen', 'elephant', 'llama', 'leopard', 'ostrich', 'Whale', 'octopus', 'rabbit', 'lion', 'dog'];
	const secretMessage = animals.map(animals => animals[0]);
	console.log('Example 4: ' + secretMessage.join(''));

	// Example 5 - .findIndex():
	const names = ['John', 'Dave', 'Lily'];
	const findDave = names.findIndex((name) => {
		return name === 'Dave';
	});
	console.log('Example 5: ' + findDave);