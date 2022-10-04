/*	ARRAYS

	Arrays can store any data types, like strings, numbers and booleans.
	Each content inside an array is called "element".

	Syntax:

		arrayName = [ 1, 'two', true ];

	Accessing syntax:

		arrayName[1];		Returns "two", as it's the second value assigned to <arrayName>. The index number of the first element of an array is always 0.

*/

	// Example 1:
	const cars = [ 'Fiat 500', 'Fiat Panda', 'Fiat Coupé'];
	console.log('Example 1: ' + cars);				// Returns all the values assigned.
	console.log('Example 1.1: ' + cars[1]);			// Returns the second value.
	cars[2] = 'Fiat Tippo';							// Update the third element to "Fiat Tippo";
	console.log('Example 1.2: ' + cars);



/*	PROPERTIES and METHODS

	.concat()			Merges (or concatenates) two or more arrays.
	.filter()			Creates a new array with all elements that pass the test from the provided function.
	.find()				Returns the first element in the array that satisfies the given function.
	.findIndex()		Returns the first index that passes the callback function's test. Returns -1 if no element passes the test.
	.forEach()			Loops over the array, passing each item in the array into the callback function provided.
	.includes()			Returns true if a given value is included in an array.
	.indexOf()			Returns the first index at which an element can be found. Returns -1 if element is not found.
	.isArray()			Returns true for arrays, otherwise false.
	.join()				Elements of an array are converted to strings and concatenated together, returning the resulting string.
	.lastIndexOf()		Returns the last index at which an element can be found. Returns -1 if element is not found.
	.length				Returns the specific number of elements in the array.
	.map()				Creates a new array with the results of calling a function for every element in array.
	.pop()				Removes the last element of an array, decrements the array length, and returns the value that it removed.
	.push()				Adds one or more elements to the end of the array and returns the new length.
	.reduce()			Combines each element of an array, using a specified reducer function, and returns a single value.
	.reverse()			Reverses the order of the elements of an array in place and returns the reversed array.
	.shift()			Removes and returns the first element of the array. All subsequent elements will shift down one place.
	.slice()			Returns a shallow copy of part of array, while original array is not modified.
	.sort()				Returns an array with its items sorted in place.
	.splice()			Modifies an array by inserting, deleting, and/or replacing array elements then returns an array of deleted elements.
	.toString()			Returns a string with each of the array values, separated by commas. Does not mutate the original array.
	.unshift()			Adds one or more elements to beginning of array and returns new length.
	.valueOf()			Returns the value of all the elements of the original array.

*/

	// Example 2:
	const brands = [ 'Honda', 'Suzuki', 'Yamaha'];

	const addBrands = array => brands.push(array);		// Create a function <addBrands> which adds a new element in <brands>.
	addBrands('Kawasaki');
	console.log('Example 2: ' + brands);


/*	NESTED ARRAYS

	When an array contains another array inside it's known as a "nested array".

	Syntax:

		arrayName = [['item 1'], ['item 2.1', 'item 2.2']];

		arrayName[1][0];

*/

	// Example 3:
	const bikes = [['CB500f'], ['R3', 'R6', 'R1']];
	console.log('Example 3: ' + bikes[1][2]);		// Returns "R1".