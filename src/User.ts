import { IAddress } from "./Address";

export enum Roles {
	ADMIN = 'ADMIN',
	TUTOR = 'TUTOR',
	PUPIL = 'PUPIL',
	LAMBDA	=	'LAMBDA'
}

export interface IUser {
	_id			:		string;

	firstname	:		string;

	lastname	:		string;

	email		:		string;

	password	:		string;

	phone		:		string;

	confirmed	:		boolean;

	birthDate	:		Date;

	role		:	Roles;

	address		:	IAddress;
}

export interface IUserCreate {
	firstname	:		string;

	lastname	:		string;

	email		:		string;

	password	:		string;

	phone		:		string;

	birthDate	:		Date;
	
	role		:	Roles;

	address		:	IAddress;
}

export interface IUserUpdate {
	_id			:		string;

	firstname?	:		string;

	lastname?	:		string;

	phone?		:		string;

	birthDate?	:		Date;

	address?		:	IAddress;

}

export interface IUserDelete {
	_id			:		string;
}

export interface IAuth {

	email		:		string;

	password	:		string;
}