import {Sale} from "./interfaces";
import { SaleException } from "./errorClass"; 


const validateSaleImput = ({productName, amount, date, tax, total} :Sale ) => {
    //Validando productName
    if ( !productName ) throw new SaleException ("propery name is missing" );
    if ( typeof productName !== "string" ) throw new SaleException ( "Name must be a string" );
    if ( productName.length <3 ) throw new SaleException ( "Propery name must be at least 3 characters" );
    if ( productName.length >25 ) throw new SaleException ( "Propery name must be at most 25 characters" );
    //Validando amount
    if ( !amount ) throw new SaleException ( "Propery amount is missing" );
    if ( typeof amount !== "number" ) throw new SaleException ( "Amount must be a number" );
    //validando date
    if ( !date ) throw new SaleException ("Propey date is missing");
    if ( typeof date !== "string" ) throw new SaleException ( "Name must be a string" );
    if ( date.length >25 ) throw new SaleException ( "Propery name must be at most 25 characters" );
    if ( date.length <5 ) throw new SaleException ( "Propery name must be at least 5 characters" );
    //validando tax
    if ( typeof tax !== "number" ) throw new SaleException ( "Tax must be a number" );
    if ( !tax ) throw new SaleException ("propery tax is missing" );
    //validando total
    if ( !total ) throw new SaleException ("propery total is missing" );
    if ( typeof total !== "number" ) throw new SaleException ( "total must be a number" );
}

export default {validateSaleImput} ;