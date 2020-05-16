import { Address } from "./Address";

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

	phone		:		string;

	birthDate	:		Date;

	role		:	Roles;

	address		:	Address;
}

export interface IUserCreate {
	firstname	:		string;

	lastname	:		string;

	email		:		string;

	password	:		string;

	phone		:		string;

	birthDate	:		Date;

	address		:	Address;
}

export interface IUserUpdate {
	_id			:		string;

	firstname?	:		string;

	lastname?	:		string;

	phone?		:		string;

	birthDate?	:		Date;

	address?		:	Address;

}

export interface IUserDelete {
	_id			:		string;
}

export interface IAuth {

	email		:		string;

	password	:		string;
}