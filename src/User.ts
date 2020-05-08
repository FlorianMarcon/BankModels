
export enum Roles {
	ADMIN = 'ADMIN',
	TUTOR = 'TUTOR',
	TUTELLES = 'TUTELLES',
	LAMBDA	=	'LAMBDA'
}

export interface User {
	_id			:		string;

	firstname	:		string;

	lastname	:		string;

	email		:		string;

	password	:		string;

	role		:	Roles;
}

export interface IUserCreate {
	firstname	:		string;

	lastname	:		string;

	email		:		string;

	password	:		string;
}

export interface IUserUpdate {
	_id			:		string;

	firstname?	:		string;

	lastname?	:		string;

	email?		:		string;

	password?	:		string;
}

export interface IUserDelete {
	_id			:		string;
}

export interface IAuth {

	email		:		string;

	password	:		string;
}