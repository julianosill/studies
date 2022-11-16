/* 	REQUEST WITH FECTH API

	The <fetch()> function:
	- Creates a request object that contains relevant information that an API needs.
	- Sends that request object to the API endpoint provided.
	- Returns a promise that ultimately resolves to a response object, which contains the status of the promise with information the API sent back.

	Syntax:

		fetch('https://url.com/endpoint)

 */

	// Example 1:
	fetch('https://url.com/endpoint').then(response => {		// The <.then()> method is chained at the end of the <fetch()> function and in its first argument, the response of the GET request is passed to the callback arrow function. The <.then()> method will fire only after the promise status of <fetch()> has been resolved.
		if (response.ok) {										// The <ok> property of the response object returns a Boolean value.
			return response.json();								// If there are no errors, <response.ok> will be true and the code will return <response.json()>.
		}
		throw new Error('Request failed!');						// If <response.ok> is a falsy value, our code will <throw> an error.
	}, networkError => console.log(networkError.message)		// <networkError> will be triggered when the promise is rejected. (e.g.: the server is down)
	).then(jsonResponse => {									// After the previous <.then()> has finished without error, it takes <jsonResponse> which contains the returned <response.json()> object from previous <.then()> as its parameter and can now be handled.
		// Code to execute with jsonResponse
	});