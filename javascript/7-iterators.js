/*	ITERATORS

	Iterators are built-in methods called on arrays to manipulate elements and return values.

	Some examples:

		.forEach()									Loops through the array and executes the code for each element. It returns <undefined> as well.
		.map()										Returns a new array with the results of calling a function for every element in array.
		.filter()									Returns a new array with elements that pass the condition.
		.join()										Converts the elements of an array to strings and concatenates together, returning the resulting string.
		.findIndex()								Returns the first index that passes the test.
		.reduce((accumulator, currentValue))		Combines each element of an array, using a specified reducer function, and returns a single value.
													<accumulator> is the returned value from the function, <currentValue> is the element being iterated over.
		.some()										Tests whether at least one element in the array passes the test implemented by the provided function. It returns a boolean value (true or false).
		.every()									Similar to <.some()>, but returns true if only every element passes the test.

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

	// Example 6 - .reduce():		In this example, the function will sum 1 + 2, then sum 3 (result of the first sum) + 3 and 6 (result of second sum) + 4.
	const num = [1, 2, 3, 4];
	const sumNum = num.reduce((acc, currVal) => acc + currVal, 5);		// The number after <,> is a value which the reduce() starts at (optional). In this case, it'll start at 5.
	console.log('Example 6: ' + sumNum);

	// Example 7 - .some():		Return <true> if the array has a country with a name equal or larger then 4 letters.
	const countries = ['Brazil', 'Cuba', 'Argentina', 'Oman'];
	console.log(countries.some((countryName) => {
		return countryName.length <= 4;
	}));