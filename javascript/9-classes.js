/*	CLASSES

	Classes are a tool that developers use to quickly produce similar objects.
	An instance is an object that contains the property names and methods of a class, but with unique property values. 

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



/*	INHERITANCE - PARENT AND CHILD CLASSES

	When multiple classes share properties or methods, they become candidates for inheritance.
	With inheritance, you can create a parent class (also known as a superclass) with properties and methods that multiple child classes (also known as subclasses) share.
	The child classes inherit the properties and methods from their parent class.

*/

	// Syntax:

	class ParentClass {
		constructor(parentOne) {
			this._parentOne = parentOne;
		}

		get parentOne() {
			return this._parentOne;
		}

		methodName(paramValue) {
			this._parentOne += paramValue;
		}

	}

		class ChildClass extends ParentClass {	// <extends> makes the methods of <ParentClass> available inside the <ChildClass>.
			constructor(parentOne, childOne) {
				super(parentOne);				// Must always call <super> before using <this> keyword, always on the first line of subclasses. It calls the <constructor()> of the parent class. In this case, passes the <parentOne> to the <constructor()> of <ParentClass>. When the <ParentClass> runs, it sets <this._parentOne = parentOne;> for new child instances.
				this._childOne = childOne;
			}

			get childOne() {
				return this._childOne;
			}
		}

		const newInstance = new ChildClass('Hello', 'World');	// Create a new instance.
		console.log(newInstance.parentOne);						// The <ChildClass> has access to the <ParentClass> methods. Therefore, <newInstance.parentOne> acesses <ParentClass> getter and returns the value saved to the property.