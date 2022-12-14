/* 

	Request a phrase and return the smallest word. If there are more than one, return the first one.

*/

const phrase = ' Lorem ipsum dolor sit amet at cravim do blat. ';

const smallestWord = (string) => {
	if(!string || typeof string !== 'string') return 'Please, write your phrase.'

	// .trim() remove any space in the beginning and end of the string | .split() separate the string in words and store in an array.
	const wordsArray = string.trim().split(' ');

	return wordsArray.reduce ((smallWord, current) => {
		if(current.length < smallWord.length) {
			return current;
		}
		return smallWord;
	});

};

console.log(smallestWord(phrase));