import { IUser } from "./User";
import { IBudget } from "./Budget";

/**
 * ISpending interface.
 */
export interface ISpending {
	/**
	 * Id.
	 */
	_id		:	string;

	/**
	 * Quantité dépensée.
	 */
	amount	:	number;

	/**
	 * Date de la dépense.
	 */
	date	:	Date;

	/**
	 * Utilisateur ayant éffectué la dépense.
	 */
	user	:	IUser;
	
	/**
	 * Budget associé à la dépense. Undefined si aucun budget n'est associé.
	 */
	budget?	:	IBudget | undefined;
}

/**
 * Interface permettant de créer une dépense.
 */
export interface ISpendingCreate {

	/**
	 * Quantité à dépenser.
	 */
	amount	:	number;
	
	/**
	 * Budget à associé à la dépense.
	 * Undefined si vous ne souhaitez pas l'associé à un budget.
	 */
	idBudget?	:	string | undefined;
}
