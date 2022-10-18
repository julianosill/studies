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