
export enum Roles {
	ADMIN = 'ADMIN',
	TUTOR = 'TUTOR',
	TUTELLES = 'TUTELLES',
}

export interface User {
	_id			:		string;

	firstname	:		string;
	lastname	:		string;

	role		:	Roles;
}
