/*	ASYNC AWAIT

	Originally, JavaScript used callback functions to handle asynchronous actions.
	The problem with callbacks is that they encourage complexly nested code which quickly becomes difficult to read, debug, and scale.
	With ES6, JavaScript integrated native promises which allow us to write significantly more readable code.
	ES8 provides a new syntax for handling our asynchronous action, <async...await>.
	The <async...await> syntax allows us to write asynchronous code that reads similarly to traditional synchronous, imperative programs.

	The <async> keyword is used to write functions that handle asynchronous actions.
	We wrap our asynchronous logic inside a function prepended with the async keyword.

	<async> functions always return a promise. It can be used traditional promise syntax, like <.then()> and <.catch()>.

		- If there’s nothing returned from the function, it will return a promise with a resolved value of <undefined>;
		- If there’s a non-promise value returned from the function, it will return a promise resolved to that value;
		- If a promise is returned from the function, it will simply return that promise.

	The <await> keyword can only be used inside an async function.
	<await> is an operator: it returns the resolved value of a promise.
	Since promises resolve in an indeterminate amount of time, <await> halts, or pauses, the execution of our <async> function until a given promise is resolved.

	Syntax:

		async function myFunc() {
			let resolvedValue = await myPromise();
		};

			<await> halts the execution until <myPromise()> is resolved and assign its resolved value to the variabel <resolvedValue>.

*/

		// Example 1:
		async function fivePromise() { 
			return 5;
		};
		
		fivePromise()
		.then(resolvedValue => {
			console.log(resolvedValue);
		});	// Prints 5

		// Even though we return <5> inside the function body, what’s actually returned when we invoke fivePromise() is a promise with a resolved value of <5>.