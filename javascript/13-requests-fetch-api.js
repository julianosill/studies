/* 	REQUEST WITH FECTH API

	The <fetch()> function:
	- Creates a request object that contains relevant information that an API needs.
	- Sends that request object to the API endpoint provided.
	- Returns a promise that ultimately resolves to a response object, which contains the status of the promise with information the API sent back.

	Syntax:

		fetch('https://url.com/endpoint)

	POST Syntax:

		fetch('https://url.com/endpoint' , {					\
			method: 'POST',										|	=> sends request
			body: JSON.stringfy({id: '200'})					/
		}).then(response => {
			if (response.ok) {									\
				return response.json();							|	=> converts response object to JSON
			}													/
			throw new Error('Request failed!);					\	=> handles errors
		}, networdError => console.log(networkError.message)	/
		).then(jsonResponse => {								\	=> handles success
		});														/

		The second argument (method and body) determines that this request is a POST request and what information will be sent to the API.

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


	// Example 2 - GET:
	
		// Information to reach API
		const url = 'https://api.datamuse.com/words?sl=';
		
		// Selects page elements
		const inputField = document.querySelector('#input');
		const submit = document.querySelector('#submit');
		const responseField = document.querySelector('#responseField');
		
		// Asynchronous function
		const getSuggestions = () => {
			const wordQuery = inputField.value;
			const endpoint = `${url}${wordQuery}`;
			
			fetch(endpoint, {cache: 'no-cache'}).then(response => {
				if (response.ok) {
					return response.json();
				}
				throw new Error('Request failed!');
			}).then(jsonResponse => {
				renderResponse(jsonResponse);
			})
		}
		
		// Clears previous results and display results to webpage
		const displaySuggestions = (event) => {
			event.preventDefault();
			while(responseField.firstChild) {
				responseField.removeChild(responseField.firstChild);
			}
			getSuggestions();
		};
		
		submit.addEventListener('click', displaySuggestions);



//	ASYNC GET REQUESTS

	const getData = async () => {
		try {
			const response = await fetch('https://url.com/endpoint');	// Sends request
			if (response.ok) {											// Handles response if successful
				const jsonResponse = await response.json();
				// Code to execute
			}
			throw new Error('Request failed!');
		} catch (error) {												// handles response if unsuccessful
			console.log(error);
		}
	}



//	ASYNC POST REQUESTS

	const getData = async () => {
		try {
			const response = await fetch('https://url.com/endpoint', {		// Sends request
				method: 'POST',
				body: JSON.stringfy({id: 200})
			})
			if (response.ok) {												// Handles response if successful
				const jsonResponse = await response.json();
				// Code to execute
			}
			throw new Error('Request failed!');
		} catch (error) {													// handles response if unsuccessful
			console.log(error);
		}
	}