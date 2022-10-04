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
			console.log('Example 1 - ' + i);
		}

		// Example 2: Loop in reverse
		for (let j = 20; j >= 10; j-=3) {
			console.log('Example 2 - ' + j);
		}

		// Example 3: Loop with an array
		const brands = ['Apple', 'Xiaomi', 'Huawei'];
		for (let k = 0; k < brands.length; k++) {
			console.log('Example 3 - ' + brands[k]);
		}

		// Example 4: Nested loops
		const varArrayOne = [2, 4, 8];
		const varArrayTwo = [2, 6, 12];
		for (let l = 0; l < varArrayOne.length; l++) {
			for (let m = 0; m < varArrayTwo.length; m++) {
				if(varArrayOne[l] === varArrayTwo[m]) {
					console.log('Example 4 - Both arrays have this number in common: ' + varArrayTwo[m]);
				}
			}
		}



/*	Loop <while>

	The <while> loop creates a loop that is executed while the condition is met. The lopp will stop when the condition evaluates to false.

	Syntax:

		while(condition) {
		}

*/

		// Example 5:
		const element = ['earth', 'wind', 'fire', 'water'];
		let currentElement;
		while(currentElement !== 'fire') {
			currentElement = element[Math.floor(Math.random() * 4)];
			console.log('Example 5: ' + currentElement);
		}



/*	Loop <do>...<while>

	The code block will run at least once and then loop according to the condition.

	Syntax:

		do {
		} while ();

*/

		// Example 6:
		let number = 0;
		do {
			console.log('Example 6: ' + number);
			number++;
		} while(number < 4);



/*	The <break> keyword

		The <break> exits the loop immediately when a specific assigned for it is met.

		Syntax:

			for (let i = 0; i < 99; i++) {
				if (i > 3) {
					break;
				}
				console.log(i);		Print 3.
			}

*/