/*	COMPARISON OPERATORS

	==		equal to						// <'StringOne' == 'StringTwo'> returns <true> because both are strings.
	===		equal value and equal type		// <'StringOne' === 'StringTwo'> returns <false> because both are strings but the value is different.
	!=		not equal
	!==		not equal value nor equal type
	>		greater than
	>		less than
	>=		greater than or equal to
	>=		less than or equal to

*/



/* IF...ELSE STATEMENT

	Syntax:

		if(true) {		If the condition is met, runs the code below <if>.
		} else {		If it's false, then runs the code below <else>.
		}

*/

	// Example 1:

	let number = 10;

	if(number === 10) {
		console.log('Example 1: The number is 10.');
	} else {
		console.log('The number is not 10.')
	}



/* LOGICAL OPERATORS

	&&				AND operator
	||				OR operator
	!				NOT operator
	FALSY values: 	0, "" or '', null, undefined, Nan (Not a Number)

	Syntax:

		if(varOne === true && varTwo === 10) {		// Check wether both of the conditionals are met and then runs the code.
			// Code here.
		}

		if(varOne) {		// Check if it's TRUTHY or FALSY. Just use the variable name to check if it exists or has a value.
			// Code here.
		}

*/

	// Example 2 and 3:

	if(number > 5 || number < 15) {
		console.log(`Example 2: The number is ${number}.`);
	} else {
		console.log("The number isn't in the range.");
	}

	if(number) {
		console.log(`Example 3: The number has a value and it's ${number}.'`);
	} else {
		console.log('The number is undefined.');
	}

	

/* TERNARY OPERATOR

	It's a short-hand syntax to simplify condition statements.

	varName ? <if method> : <else method>;

		- The condition is provided before the <?>.
		- A colon <:> separates the expressions.
		- If condition is <true>, execute the first expression.
		- If condition is <falce>, execute the second.

*/

	// Example 4:

	let dayTime = true;

	dayTime ? console.log("It's day time.") : console.log("It's night time.");