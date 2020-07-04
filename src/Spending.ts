import { User } from "./User";
import { IBudget } from "./Budget";

export interface ISpending {
	_id		:	string;

	amount	:	number;

	date	:	Date;

	user	:	User;
	
	budget	:	IBudget;
}

export interface ISpendingCreate {
	amount	:	number;
	
	idBudget	:	number;
}
