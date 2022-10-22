/*	PROMISES

	Promises are objects that represent the eventual outcome of an asynchronous operation.

	A <Promise> object can be in one of three states:

		Pending						The initial state — the operation has not completed yet.
		Fulfilled (Resolved)		The operation has completed successfully and the promise now has a <resolved value>.
		Rejected					The operation has failed and the promise has a reason for the failure. This reason is usually an Error of some kind.

		Example:
		Pending promise		A car running low fuel.
		Reject				Fuel is over, the car stopped. Unable to reach the destination.
		Resolve				There's a gas station nearby, so pull over, fill up, keep driving and reach the destination. The operation was fulfilled.



	CONSTRUCTING A PROMISE

		The <Promise> constructor method takes a function parameter called the <executor function> which runs automatically when the constructor is called.
		The executor function generally starts an asynchronous operation and dictates how the promise should be settled.

		The executor function has two function parameters, usually referred to as the resolve() and reject() functions.
		The resolve() and reject() functions aren’t defined by the programmer.
		When the Promise constructor runs, JavaScript will pass its own resolve() and reject() functions into the executor function.

		<resolve>		A function with one argument. Under the hood, if invoked, resolve() will change the promise’s status from <pending> to <fulfilled>, and the promise’s resolved value will be set to the argument passed into <resolve()>.
		<reject>		A function that takes a reason or error as an argument. Under the hood, if invoked, reject() will change the promise’s status from <pending> to <rejected>, and the promise’s rejection reason will be set to the argument passed into <reject()>.

		Syntax:

			const executorFunction = (resolve, reject) => { };
			const firstPromise = new Promise(executorFunction);

*/

	// Example 1:
	const inventory = {
		sunglasses: 50,
		pants: 1088
	};
	const myExecutor = (resolve, reject) => {
		if(inventory.sunglasses > 0) {		// Check if there's at least one product available.
			resolve('Sunglasses order processed.');
		} else {
			reject('That item is sold out.');
		}
	};
	const orderSunglasses = () => new Promise(myExecutor);		// Create a function that returns a new promise constructed by passing <myExecutor()> into the Promise constructor.
	const orderPromise = orderSunglasses();		// Assigns the returned value of <orderSunglasses()> to a new variable.
	console.log(orderPromise);