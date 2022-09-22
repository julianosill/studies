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

	By default, the value resulted from calling the function is <undefined>. You must <return> the value to capture it and print or use.

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


	
/*	HELPER FUNCTIONS

		A function can be created inside another one to make it easier to read and debug. This function can be called "Helper function".

		Syntax:

			function firstCalc(number) {
				return number * 2;
			}

			function secondCalc(newNumber) {
				return firstCalc(newNumber) + 50;
			}

			secondCalc(20);		It'll duplicate the value (20) in the first function and then add 50 as it's declared in the second function.

*/

			// Example 4:
			function convertToKg(pounds) {
				return pounds * 0.4535924;
			}

			function overSize(kg) {
				return convertToKg(kg) * 1.5;			// Get the parameter's value (200), runs the <convertToKg> function and then multiply the result by 1.5.
			}

			console.log('Example 4: ' + overSize(200));