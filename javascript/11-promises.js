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

	//	Example 1:
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



/*	THE NODE setTimeout() FUNCTION

	<setTimeout()> is a Node API that uses callback functions to schedule tasks to be performed after a delay.
	It has two parameters: a callback function and a delay in milliseconds.

	Syntax:

		setTimeout(functionName, 1000);
		first parameter		It's the name of the function that <setTimeout()> will invoke.
		second parameter	It's the time <setTimeout()> waits before invoking the function.

*/

	//	Example 2 - Setting a timeout:
	const sayHello = () => console.log('Example 2: Hello World!');
	setTimeout(sayHello, 1000);



/*	CONSUMING PROMISES

	The initial state of an asynchronous promise is <pending>, but we have a guarantee that it will settle.
	Promise objects come with an aptly named <.then()> method. It allows us to say, “I have a promise, when it settles, then here’s what I want to happen…”
	<.then()> is a higher-order function — it takes two callback functions as arguments. We refer to these callbacks as <handlers>.
	When the promise settles, the appropriate handler will be invoked with that settled value.

	The success callback is sometimes called the “success handler function” or the onFulfilled function.
	The failure callback is sometimes called the “failure handler function” or the onRejected function.

	Syntax:

		functionCall(parameter).(sucessHandler, rejectHandler);

*/

	// Example 3:
	const inventoryTwo = {
		sunglasses: 1900,
		pants: 1088,
		bags: 1344
	};
	
	const checkInventory = (order) => {
		return new Promise((resolve, reject) => {
			setTimeout(() => {	// <setTimeout()> is used to ensure that the <checkInventory()> promise settles asinchronously.
				let inStock = order.every(item => inventoryTwo[item[0]] >= item[1]);	// Create a variable checking wether the item seleted is available or not.
				if (inStock) {	// If the variable <inStock> is true, then runs <resolve>.
					resolve(`Thank you. Your order was successful.`);
				} else {
					reject(`We're sorry. Your order could not be completed because some items are sold out.`);
				}
			}, 2000);
		})
	};
	
	// Variable that orders sunglasses and bags.
	const order = [['sunglasses', 1], ['bags', 2]];

	// When the Promise settles, invoke one of the handler below according to it.	
	const handleSuccess = (resolvedValue) => {
		console.log(resolvedValue);
	}
	const handleFailure = (rejectReason) => {
		console.log(rejectReason);
	}
	
	// Calls the function <checkInventory()> with <order> as its parameter (ordering 1 sunglass and 2 bags), then invokes the correct handler depending on its settling.
	checkInventory(order).then(handleSuccess, handleFailure);



/*	One way to write cleaner code is to follow a principle called separation of concerns.
	Separation of concerns means organizing code into distinct sections each handling a specific task.
	It enables us to quickly navigate our code and know where to look if something isn’t working.

	The <.catch()> function takes only one argument, onRejected.
	In the case of a rejected promise, this failure handler will be invoked with the reason for rejection.
	Using <.catch()> accomplishes the same thing as using a <.then()> with only a failure handler.

*/

	checkInventory(order).then(handleSuccess).catch(handleFailure);		// It's the same as the calling above, but using <.catch()> to invoke the <handleFailure> instead of <.then()>.