import { IAddress } from "./Address";

export enum BankType {
    CREDIT_AGRICOLE = "CREDIT_AGRICOLE"
}

export interface IBank {

    /**
     * Id of the bank
     */
    _id:   string;

    /**
     * Type de la banque
     */
    type:   BankType;

    /**
     * Agence
     */
    agency:     String;

    /**
     * Addresse de la banque
     */
    address:    IAddress;

    /**
     * Boolean pour savoir si cette Bank est archivé ou non
     */
    isArchivated: boolean;
}

export interface IBankCreate {
    /**
     * Type de la banque
     */
    type:   BankType;

    /**
     * Agence
     */
    agency:     String;

    /**
     * Addresse de la banque
     */
    address:    IAddress;
}

export interface IBankUpdate {
    /**
     * Id of the bank
     */
    _id:   string;
    
    /**
     * Type de la banque
     */
    type?:   BankType;

    /**
     * Agence
     */
    agency?:     String;

    /**
     * Addresse de la banque
     */
    address?:    IAddress;

    /**
     * Boolean pour savoir si cette Bank est archivé ou non
     */
    isArchivated?:   boolean;
}