
export interface ITutorPupilLink {
	_id			:		string;

	idTutor		:		string;

	idPupil		:		string;

	creationDate	:	Date;

	pupilValidation		:	boolean;
	pupilDateValidation	:	Date;

	tutorValidation		:	boolean;
	tutorDateValidation	:	Date;
}

export interface ITutorPupilLinkCreate {
	emailPupil		:		string;
}
