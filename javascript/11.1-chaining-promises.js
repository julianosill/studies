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
	
	const checkInventory = (order) => {
		return new Promise ((resolve, reject) => {
			setTimeout(()=> {
				const itemsArr = order.items;
				let inStock = itemsArr.every(item => store[item[0]].inventory >= item[1]);
				if (inStock){
					let total = 0;
					itemsArr.forEach(item => {
						total += item[1] * store[item[0]].cost
					});
					console.log(`All of the items are in stock. The total cost of the order is ${total}.`);
					resolve([order, total]);
				} else {
					reject(`The order could not be completed because some items are sold out.`);
				}
			}, generateRandomDelay());
		});
	};
	
	const processPayment = (responseArray) => {
		const order = responseArray[0];
		const total = responseArray[1];
		return new Promise ((resolve, reject) => {
			setTimeout(()=> {
				let hasEnoughMoney = order.giftcardBalance >= total;
				if (hasEnoughMoney) {
					console.log(`Payment processed with giftcard. Generating shipping label.`);
					let trackingNum = generateTrackingNumber();
					resolve([order, trackingNum]);
				} else {
					reject(`Cannot process order: giftcard balance was insufficient.`);
				}
			}, generateRandomDelay());
		});
	};
	
	const shipOrder = (responseArray) => {
		const order = responseArray[0];
		const trackingNum = responseArray[1];
		return new Promise ((resolve, reject) => {
			setTimeout(()=> {
				resolve(`The order has been shipped. The tracking number is: ${trackingNum}.`);
			}, generateRandomDelay());
		});
	};
	
	// This function generates a random number to serve as a "tracking number" on the shipping label. In real life this wouldn't be a random number
	function generateTrackingNumber() {
		return Math.floor(Math.random() * 1000000);
	}
	
	// This function generates a random number to serve as delay in a setTimeout() since real asynchrnous operations take variable amounts of time
	function generateRandomDelay() {
		return Math.floor(Math.random() * 2000);
	}
	
	const order = {
		items: [['sunglasses', 1], ['bags', 2]],
		giftcardBalance: 79.82
	};
	
	checkInventory(order)
	.then((resolvedValueArray) => {
		return processPayment(resolvedValueArray);
	})
	.then((resolvedValueArray) => {
		return shipOrder(resolvedValueArray);
	})
	.then((successMessage) => {
		console.log(successMessage);
	})
	.catch((errorMessage) => {
		console.log(errorMessage);
	});