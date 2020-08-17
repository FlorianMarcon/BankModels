
export interface IBudget {
	_id			:		string;

	name		:		string;

	amount		:		number; /* in cts*/

	archivated	:		boolean;
}

export interface IBudgetCreate {
	name		:		string;

	amount?		:		number; /* in cts*/
}

export interface IBudgetsOptions {
	includeArchivated?	:		boolean;

	onlyArchivated?		:	boolean;
}

export interface IBudgetUpdate {
	_id			:		string;

	name?		:		string;

	amount?		:		number; /* in cts*/

	archivated?	:		boolean;
}
