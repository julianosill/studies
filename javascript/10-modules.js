/*	MODULES

	Modules are reusable pieces of code in a file that can be exported and then imported for use in another file.
	A modular program is one whose components can be separated, used individually, and recombined to create a complex system.
	Note: The words “module” and “file” are often used interchangably.

		A simple diagram:

			math_function.js		\
			database_logic.js		 \
			server_logic.js			 /	=>	my_app.js
			date_formatting.js		/

	This modular strategy is sometimes called separation of concerns and is useful for several reasons.
	By isolating code into separate files, called modules, you can:
		- find, fix, and debug code more easily;
		- reuse and recycle defined logic in different parts of your application;
		- keep information private and protected from other modules;
		- prevent pollution of the global namespace and potential naming collisions, by cautiously selecting variables and behavior we load into a program.

*/


/*	IMPLEMENTATIONS IN JAVASCRIPT: NODE.JS VS ES6

	In JavaScript, there are two runtime environments and each has a preferred module implementation:
		1. The Node runtime environment and the <module.exports> and <require()> syntax.
		2. The browser’s runtime environment and the ES6 <import/export> syntax.

*/


/*	IMPLEMENTING IN NODE

	Every JavaScript file that runs in a Node environment is treated as a distinct module.
	The functions and data defined within each module can be used by any other module, as long as those resources are properly exported and imported.

*/

	/*	module.exports

		<module.exports> is an object that is built-in to the Node.js runtime environment.
		Other files can now import this object, and make use of these two functions.

	*/

		// Method 1 - Syntax:
		function funcName(param) {		// The function <funcName> is declared.
			return param;
		}
		module.exports.funcName = funcName;		// The already-defined function <funcName> is assigned to <module.exports.funcName>.

		// Method 2 - Syntax:
		module.exports.newFunc = function(newParam) {		// An alternative approach for exporting a function. The function is declared and assigned to <module.exports.newFunc>.
			return newParam;
		}

	/*	require()

		<require()> is another built-in o the Node.js.
		It accepts a string as an argument. That string provides the file path to the module you would like to import.
		When <require()> is used, the entire <module.exports> object is returned and stored in the variable that it's assigned.

	*/

		// Syntax:
		const newModule = require('./newModule.js');		// './' is a relative path indicating that the file is stored in the same folder.
		const anotherFunc = newModule.funcName(value);		// This variable calls the function stored in <newModule> variable which was created and stored in <newModule.js>.