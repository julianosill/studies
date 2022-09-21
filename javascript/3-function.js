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

	

/*	RETURN

	By default, the value of calling the function is <undefined>. You must <return> the value to capture it and print or use.

	Syntax:
		function funcName(numbOne, numbTwo) {
			let result = numbOne + numbTwo;
			return result;
		}

*/

		// Example 3:
		function calcArea(numbOne, numbTwo) {
			return numbOne * numbTwo;
		}
		const square = calcArea(2,6);
		console.log('Example 3: ' + square);