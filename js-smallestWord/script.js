/* 

	Request a phrase and return the smallest word. If there are more than one, return the first one.

*/

const smallestWord = () => {
	const string = document.getElementById('text-box').value;
	
	if(!string || typeof string !== 'string') return 'Please, write your phrase.';

	// .trim() remove any space in the beginning and ending of the string | .split() separate the string in words and store it in an array.
	const wordsArray = string.trim().split(' ');

	return wordsArray.reduce ((smallWord, current) => {
		if(current.length < smallWord.length) {
			return current;
		}
		return smallWord;
	});

};

const showResult = () => {
	const resultedWord = document.getElementById('resulted-word');
	resultedWord.innerText = smallestWord();
}

const findButton = document.getElementById('find-btn');
findButton.addEventListener('click', showResult);