export interface IAddress {
	state	:	string;

	city	:	string;

	postCode:	number;

	line1	:	string;
	
	line2?	:	string;
}

export interface IAddressCreate {
	state	:	string;

	city	:	string;

	postCode:	number;

	line1	:	string;
	
	line2?	:	string;
}

export interface IAddressUpdate {
	state?	:	string;

	city?	:	string;

	postCode?:	number;

	line1?	:	string;
	
	line2?	:	string;
}