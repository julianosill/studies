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
	If you forget the <await> keyword, the function will still run, but with a different results that's expected.

	Syntax:

		async function myFunc() {
			let resolvedValue = await myPromise();
			console.log('This is the resolved value of the promise invoked: ' + resolvedValue);
		};

			<await> halts the execution until <myPromise()> is resolved and assign its resolved value to the variable <resolvedValue>.

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


	// Example 2:
	let myPromise = () => {
		return new Promise((resolve, reject) => {
			setTimeout(() => {
				resolve('Yay, I resolved!');
			}, 1000);
		});
	};

	async function noAwait() {
		let value = myPromise();
		console.log(value);
	};
		
	async function yesAwait() {
		let value = await myPromise();
		console.log(value);
	}
		
	noAwait();	// Prints "Promise { <pending> }" because the <await> keyword was not declared to the variable <value>. The <console.log()> was executed before the promise had resolved.
	yesAwait();	// Prints "Yay, I resolved!"

	

/*	TRY...CATCH

	When <.catch()> is used with a long promise chain, there is no indication of where in the chain the error was thrown.
	This can make debugging challenging. With <async...await>, we use <try...catch> statements for error handling.
	By using this syntax, not only are we able to handle errors in the same way we do with synchronous code, but we can also catch both synchronous and asynchronous errors. 

	Syntax:

		async function myFunc() {
			try {
			} catch(error) {
			}
			};

		Since async functions return promises we can still use native promise’s <.catch()> with an async function.

		Example:
		let rejectedPromise = usingPromiseCatch();
		rejectedPromise.catch((rejectValue) => {
			console.log(rejectValue);
		});

*/

/*	HANDLING INDEPENDENT PROMISES

	If possible, we want to get started on each asynchronous operation as soon as possible!
	Within our async functions we should still take advantage of <concurrency>, the ability to perform asynchronous actions at the same time.

	Note: if we have multiple truly independent promises that we would like to execute fully in parallel, we must use individual <.then()> functions and avoid halting our execution with <await>.

	Syntax:

		async function concurrent() {
			const firstPromise = firstAsyncThing();
			const secondPromise = secondAsyncThing();
			console.log(await firstPromise, await secondPromise);
		}

		Both promises are constructed without <await>, then <await> each resolution to print them to the console.

*/

/*	AWAIT PROMISE.ALL()

	Another way to take advantage of concurrency when we have multiple promises which can be executed simultaneously is to <await> a <Promise.all()>.
	We can pass an array of promises as the argument to <Promise.all()>, and it will return a single promise.
	This promise will resolve when all of the promises in the argument array have resolved.
	This promise’s resolve value will be an array containing the resolved values of each promise from the argument array.

	<Promise.all()> allows us to take advantage of asynchronicity — each of the asynchronous tasks can process concurrently.
	<Promise.all()> also has the benefit of failing fast, meaning it won’t wait for the rest of the asynchronous actions to complete once any one has rejected.
	As soon as the first promise in the array rejects, the promise returned from <Promise.all()> will reject with that reason.
	As it was when working with native promises, <Promise.all()> is a good choice if multiple asynchronous tasks are all required, but none must wait for any other before executing.

	Syntax:

		async function asyncPromAll() {
			const resultArray = await Promise.all([asyncTask1(), asyncTask2(), asyncTask3(), asyncTask4()]);
			for (let i = 0; i<resultArray.length; i++){
				console.log(resultArray[i]);
			}
		}

*/