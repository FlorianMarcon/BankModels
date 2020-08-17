import { IUser } from "./User";
import { IBudget } from "./Budget";

export interface ISpending {
	_id		:	string;

	amount	:	number;

	date	:	Date;

	user	:	IUser;
	
	budget?	:	IBudget | undefined;
}

export interface ISpendingCreate {
	amount	:	number;
	
	idBudget?	:	string | undefined;
}
