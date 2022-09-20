/*

	Syntax:

		function funcName(parameter) {		Create a function.
			<method here>;
		}

		funcName(parameterValue);							Call the function.
	
*/

	// Example 1:
	function duplicate(number) {
		console.log('Example 1: ' + number * 2);
	}
	duplicate(4);



/*	DEFAULT PARAMETERS

	When the parameter is empty or <undefined>, the function use the default parameter that it's declared in the function.

	Syntax:
		function funcName(param = 'default value') {
		}

*/

		// Example 2:
		function sayName(name = 'Juliano') {
			console.log(`Example 2: My name is ${name}`);
		}
		sayName();
