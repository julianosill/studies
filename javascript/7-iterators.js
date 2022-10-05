/*	ITERATORS

	Iterators are built-in methods called on arrays to manipulate elements and return values.

	Some examples:

		.forEach()		Loops through the array and executes the code for each element.
		.map()			Creates a new array with the results of calling a function for every element in array.
		.filter()		Filters the elements that pass the condition.

*/

	// Example 1:
	const motorcycleBrands = ['Honda', 'Suzuki', 'Yamaha'];
	motorcycleBrands.forEach(brand => {
		console.log('Example 1: ' + brand + ' is a motorcycle brand.');
	});

	// Example 2:
	const smallSize = [2, 4, 6];
	const bigSize = smallSize.map(size => size * 4);
	console.log('Example 2 ' + bigSize);

	// Example 3:
	const numbers = ['1', 2, 'three', 4, 5 ];
	const filterNumbers = numbers.filter(number => {		// Select only the number type data in <numbers> and save to a new array called <filterNumbers>.
		return typeof number === 'number';
	});
	console.log('Example 3: ' + filterNumbers);