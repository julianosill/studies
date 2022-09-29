/*	LOOPS

	Loops allow us to repeat a block of code. A typical loop includes an iterator variable that is initialized, checked against a condition and assigned a new value on each loop.

*/

/*	Loop <for>

	Syntax:

		for (let i = 0; i > 5; i++) {				<i> is the iterator variable; the second parameter is a condition for the loop keeps running until it's met; the third add 1 on each loop and update the value of it.
		}

*/

		// Example 1:
		for (let i = 2; i < 10; i+=2) {				// <i> starts with number 2, then check if the condition is true (<i> is lower than 10). If yes, add 2 to the <i> and runs the loop again.
			console.log('Example 1: ' + i);
		}

		// Example 2: Loop in reverse
		for (let j = 20; j >= 10; j-=3) {				// <i> starts with number 2, then check if the condition is true (<i> is lower than 10). If yes, add 2 to the <i> and runs the loop again.
			console.log('Example 2: ' + j);
		}