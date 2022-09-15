/*	OPERATORS

	ARITHMETIC
	+	Add
	-	Subtract
	*	Multiply
	**	Exponentiation
	/	Divide
	%	Remainder
	++	Increment
	--	Decrement

	ASSIGNMENT
	Operator	Example		Same as
	=			x = y		x = y
	+=			x +=		x = x + y	// Add and set the result as the new value to the variable.
	-=			x -= y		x = x - y
	*=			x *= y		x = x * y
	/=			x /= y		x = x / y
	%=			x %= y		x = x % y
	**=			x **= y		x = x ** y
		
		Example:
		let varName = 'Hello, ';
		varName += 'World.';
		console.log(varName);			// Prints "Hello, World."

*/

/*	DATA TYPES

	Number:		5
	String:		'Text here'
	Boolean:	true or false
	Arrays:		['String 1', 'String 2', 32, true]	// Use <[]> to declare an array, separate by commas.

*/

// STRING CONCATENATIONS

	// Use <+> between <'> to append the strings.
	console.log('Hello,' + ' World.');	// Prints "Hello, World."

	// Use <`> to insert a string. It's possible to include variables <${varName}> without breaking the string in blocks.
	let varName = 'World';
	console.log(`Hello, ${varName}.`);	// Prints "Hello, World."


/*	PROPERTIES

	Some examples:
	concat()		Returns two or more joined strings
	endsWith()		Returns if a string ends with a specified value
	includes()		Returns if a string contains a specified value
	indexOf()		Returns the index (position) of the first occurrence of a value in a string
	lastIndexOf()	Returns the index (position) of the last occurrence of a value in a string
	length			Returns the length of a string
	match()			Searches a string for a value, or a regular expression, and returns the matches
	repeat()		Returns a new string with a number of copies of a string
	slice()			Extracts a part of a string and returns a new string
	split()			Splits a string into an array of substrings
	startsWith()	Checks whether a string begins with specified characters
	toLowerCase()	Returns a string converted to lowercase letters
	toUpperCase()	Returns a string converted to uppercase letters
	trim()			Returns a string with removed whitespaces
	trimEnd()		Returns a string with removed whitespaces from the end
	trimStart()		Returns a string with removed whitespaces fropm the start
	valueOf()		Returns the primitive value of a string or a string object

*/

	// With dot operator (string.property) you can call a property of the string or variable.
	console.log('Hello'.length);