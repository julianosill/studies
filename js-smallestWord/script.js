/* 

	Request a phrase and return the smallest word. If there are more than one, return the first one.

*/

const findSmallestWord = () => {
	const string = document.getElementById('text-box').value;
	const resultedWord = document.getElementById('resulted-word');
	
	// check if the text-box is empty
	if(!string || typeof string !== 'string') {
		resultedWord.innerText = 'Please, write your phrase.';
	} else {
		// .trim() removes any space in the beginning and ending of the string | .split() separates the string in words and store it in an array.
		const wordsArray = string.trim().split(' ');
		const smallestWord = wordsArray.reduce ((smallWord, current) => {
			return current.length < smallWord.length ? current : smallWord;
		});
		resultedWord.innerText = smallestWord;
	};

};

const findButton = document.getElementById('find-btn');
findButton.addEventListener('click', findSmallestWord);