/**
 * Object reprensenting Budget
 */
export interface IBudget {
	/**
	 * Id of the budget
	 */
	_id			:		string;

	/**
	 * Name of the budget
	 */
	name		:		string;

	/**
	 * Maximum amount to spend in this budget
	 */
	amount		:		number; /* in cts*/

	/**
	 * Boolean to say if budget is archivated or not
	 */
	archivated	:		boolean;

	/**
	 * Description of the budget
	 */
	description	:		string | null;
}

export interface IBudgetCreate {
	name		:		string;

	amount?		:		number; /* in cts*/

	description?	:		string | null;
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

	description?	:		string | null;
}
