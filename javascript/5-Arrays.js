/*	ARRAYS

	Arrays can store any data types, like strings, numbers and booleans.
	Each content inside an array is called "element".

	Syntax:

		const arrayName = [ 1, 'two', true ];

	Accessing syntax:

		arrayName[1];		Returns "two", as it's the second value assigned to <arrayName>. The index number of the first element of an array is always 0.

*/

	// Example 1:
	const cars = [ 'Fiat 500', 'Fiat Panda', 'Fiat Coupé'];
	console.log('Example 1: ' + cars);				// Returns all the values assigned.
	console.log('Example 1.1: ' + cars[1]);			// Returns the second value.
	cars[2] = 'Fiat Tippo';							// Update the third element to "Fiat Tippo";
	console.log('Example 1.2: ' + cars);