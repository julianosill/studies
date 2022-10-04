/*	ITERATORS

	Iterators are built-in methods called on arrays to manipulate elements and return values.

	Some examples:

		.forEach()		Runs the code for each element in the array.
		.map()
		.filter()

*/

	// Example 1:
	const motorcycleBrands = ['Honda', 'Suzuki', 'Yamaha'];
	motorcycleBrands.forEach(brand => {
		console.log(brand + ' is a motorcycle brand.');
	});