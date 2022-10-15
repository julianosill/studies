/*	CLASSES

	Classes are a tool that developers use to quickly produce similar objects.

*/

	// Syntax:

	class NewClass {						// Capitalize and CamelCase class names.
		constructor(paramOne, paramTwo) {	// JS calls the <constructor()> method every time it creates a new instance.
			this._paramOne = paramOne;		// <this> refers to an instance of the class.
			this._paramTwo = paramTwo;
		}

		get paramOne() {					// Class method and getter syntax is the same as it's for objects except you can't include commas between methods. Don't include commas between each method.
			return this._paramOne;			// The property name is prepended with underscore to avoid access it directly, making it private.
		}

		methodName(paramValue) {			// Creates a method inside the class.
			this._paramOne += paramValue;	// In this case, add the value of <paramValue> to <_paramOne>.
		}

		increaseParamOne() {				// Another example: increase the value of the parameter in 1.
			this._paramOne++;
		}
	}

	const instanceName = new NewClass('Value for paramOne', 'Value for paramTwo');	// Create a new instance. The <new> keyword calls the <constructor()>, runs the code and returns the new instance.
	instanceName.methodName(paramValue);											// Calls the method <methodName>.
	console.log(instanceName.paramOne);												// Log the <paramOne> value saved to <instanceName>.