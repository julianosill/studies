/*	CHAINING MULTIPLE PROMISES

	One common pattern we’ll see with asynchronous programming is multiple operations which depend on each other to execute or that must be executed in a certain order.
	We might make one request to a database and use the data returned to us to make another request and so on.

	Example:
	
		firstPromiseFunction()									Invokes the function and return a promise.
		.then((firstResolveVal) => {							Invokes <.then()> with an anonymous function at the success handler.
			return secondPromiseFunction(firstResolveVal);		Inside of it, returns a new promise: the result of invoking a second function (secondPromiseFunction) with the first promise's resolved value.
		})
		.then((secondResolveVal) => {							Invokes a second <.then()> for the second promise settling.
			console.log(secondResolveVal);						Prints the second promise's resolved value.
		});

	In order for our chain to work properly, we had to return the promise secondPromiseFunction(firstResolveVal).
	This ensured that the return value of the first <.then()> was our second promise rather than the default return of a new promise with the same settled value as the initial.

*/

	// Example 1:

	// Generates a random number to serve as delay in a setTimeout() since real asynchrnous operations take variable amounts of time.
	function generateRandomDelay() {
		return Math.floor(Math.random() * 2000);
	}

	// Generates a random number to serve as a "tracking number" on the shipping label. In real life this wouldn't be a random number.
	function generateTrackingNumber() {
		return Math.floor(Math.random() * 1000000);
	}

	// Creates an example store database
	const store = {
		sunglasses: {
			inventory: 817,
			cost: 9.99
		},
		pants: {
			inventory: 236,
			cost: 7.99
		},
		bags: {
			inventory: 17,
			cost: 12.99
		}
	};
	
	// Creates a function to check if the order items are available.
	const checkInventory = (order) => {		// The <order> parameter/variable stores the items that will be checked.
		return new Promise ((resolve, reject) => {
			setTimeout(()=> {
				const itemsArr = order.items;	// Passes items (keys/ and values) stored in <order> to a new array called <itemsArr>.
				let inStock = itemsArr.every(item => store[item[0]].inventory >= item[1]);	// Checks if the store has the same or more quantity of the items ordered, then creates a new array called <inStock>. <store[item[0]].inventory> refers to the <inventory> key of each first property (sunglasses, pants, bags) of the store. <item[1]> refers to the quantity of each item ordered.
				if (inStock) {	// If all conditions of <inStock> are met, runs the code below.
					let total = 0;	// Declares the total variable starting with 0, as nothing was added to the order yet.
					itemsArr.forEach(item => {
						total += item[1] * store[item[0]].cost	// Iterates all items ordered and then sum its value to the total cost. <item[1]> refers to quantity ordered and <store[item[0]].cost> refers to the cost of its unity.
					});
					console.log(`All of the items are in stock. The total cost of the order is ${total}.`);
					resolve([order, total]);	// Resolves to an array. Which has the <order> (the same as <order>) and <total> (total cost of the order) values.
				} else {
					reject(`The order could not be completed because some items are sold out.`);
				}
			}, generateRandomDelay());
		});
	};
	
	// Creates a function to process the payment and generate a tracking number.
	const processPayment = (responseArray) => {
		const order = responseArray[0];	// Set <order> value as the first element of the <responseArray> parameter.
		const total = responseArray[1];	// Set <total> value as the second element of the <responseArray> parameter.
		return new Promise ((resolve, reject) => {
			setTimeout(()=> {
				let hasEnoughMoney = order.giftcardBalance >= total;	// Checks if the giftcard has the amount needed for the order.
				if (hasEnoughMoney) {	// If hasEnoughMoney is true, runs the code below.
					console.log(`Payment processed with giftcard. Generating shipping label.`);
					let trackingNum = generateTrackingNumber();	// Assigns the function <generateTrackingNumber()> to <trackingNum>.
					resolve([order, trackingNum]);	// Resolves to an array, with the same <order> value and <trackingNum> as the second element.
				} else {
					reject(`Cannot process order: giftcard balance was insufficient.`);
				}
			}, generateRandomDelay());
		});
	};
	
	// Creates a function to ship the order and prints the tracking number.
	const shipOrder = (responseArray) => {
		const order = responseArray[0];	// Keep the <order> value from promises above as the first element of the <responseArray> parameter.
		const trackingNum = responseArray[1];	// Set <trackingNum> value as the second element of the <responseArray> parameter.
		return new Promise ((resolve, reject) => {
			setTimeout(()=> {
				resolve(`The order has been shipped. The tracking number is: ${trackingNum}.`);
			}, generateRandomDelay());
		});
	};
	
	// Creates an order to buy some items and uses the giftcard as a payment.
	const order = {
		items: [['sunglasses', 1], ['bags', 2]],	// Items selected for the order.
		giftcardBalance: 79.82	// The amount that the giftcard used as a payment has.
	};
	
	// Invokes the function to check if the ordered items are available.
	checkInventory(order)
	.then((resolvedValueArray) => {
		return processPayment(resolvedValueArray);	// If they are available, then invokes the <processPayment> function with the first promise's (checkInventory) resolved value.
	})
	.then((resolvedValueArray) => {
		return shipOrder(resolvedValueArray);	// If the payment went smooth, invokes the <shipOrder> function with the second promise's (processPayment) resolved value.
	})
	.then((successMessage) => {
		console.log(successMessage);	// After every process above ran as expected, prints the message finishing the order.
	})
	.catch((errorMessage) => {
		console.log(errorMessage);	// If anything went wrong, shows the error message.
	});