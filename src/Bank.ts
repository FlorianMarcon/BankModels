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

/**
 * This interface is used to update a Bank
 */
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

/**
 * Cette interface est utilisé afin faire passer des options dans notre requête.
 */
export interface IBanksOptions {

    /**
     * Arguments optionels.
     * Si le paramètre est definis alors la requête retournera uniquement les Bank étant archivé ou non.
     * Si non défini. La requête n'appliquera pas de filtre sur ce paramètre.
     */
    isArchivated?:  boolean;

}