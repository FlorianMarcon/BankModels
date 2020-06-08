
export interface IBudget {
	_id			:		string;

	name		:		string;

	amount		:		number;

	archivated	:		boolean;
}

export interface IBudgetCreate {
	name		:		string;

	amount?		:		number;
}

export interface IBudgetsOptions {
	includeArchivated?	:		boolean;

	onlyArchivated?		:	boolean;
}

export interface IBudgetUpdate {
	_id			:		string;

	name?		:		string;

	amount?		:		number;
}
