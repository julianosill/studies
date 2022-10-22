/*	PROMISES

	Promises are objects that represent the eventual outcome of an asynchronous operation.

	A <Promise> object can be in one of three states:

		Pending			The initial state — the operation has not completed yet.
		Fulfilled		The operation has completed successfully and the promise now has a <resolved value>.
		Rejected		The operation has failed and the promise has a reason for the failure. This reason is usually an Error of some kind.

		Example:
		Pending promise		A car running low fuel.
		Reject				Fuel is over, the car stopped. Unable to reach the destination.
		Resolve				There's a gas station nearby, so pull over, fill up, keep driving and reach the destination. The operation was fulfilled.

*/