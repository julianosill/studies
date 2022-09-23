/*

	Syntax:

		function funcName(parameter) {		Create a function.
			<method here>;
		}

		funcName(parameterValue);			Call the function.
	
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
				return convertToKg(kg) * 1.5;		// Get the parameter's value (200), runs the <convertToKg> function and then multiply the result by 1.5.
			}

			console.log('Example 4: ' + overSize(200));



/*	ARROW FUNCTIONS

	A shorter way to write functions without using <function> every time.

	Syntax:
			
		const varName = (paramOne, paramTwo) => {
		}

*/

			// Example 5:
			const exampleFive = (param) => {
				return 'Example 5: ' + param;
			}
			console.log(exampleFive(15));


	/*	CONCISE BODY
			
		It's the most condensed form of the function.


		Functions that has only one parameter do not need the parameter in parantheses. But if it has none or multiple, parentheses are required.
		
		Zero parameters				const funcName = () => {};
		One parameter				const funcName = paramOne => {};
		Two or more parameters		const funcName = (paramOne, paramTwo) => {};


		Functions with single-line block don't need curly braces. <return> is not need as well, this is referred to as "implicit return".
		
		Single-line block			const duplicate = number => number * 2;
		
		Multi-line block			const duplicate = number => {
										const result = number * 2;
										return result;	// return statement
									}

	*/

		// Example 6:
		const multiplyByThree = number => number * 3;
		console.log('Example 6: ' + multiplyByThree(3));