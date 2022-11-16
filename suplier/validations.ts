import { Suplier } from "./interfaces";
import { SuplierException } from "./errorClass";

const validateSaleImput = ({name, lastName, email, phoneNumber, address} :Suplier ) => {
    //Validando name
    if ( !name ) throw new SuplierException ("propery name is missing" );
    if ( typeof name !== "string" ) throw new SuplierException ( "Name must be a string" );
    if ( name.length <3 ) throw new SuplierException ( "Propery name must be at least 3 characters" );
    if ( name.length >15 ) throw new SuplierException ( "Propery name must be at most 15 characters" );

    //Validando lastName
    if ( !lastName ) throw new SuplierException ( "Propery lastName is missing" );
    if ( lastName.length <5 ) throw new SuplierException ( "Propery name must be at least 5 characters" );
    if ( lastName.length >20 ) throw new SuplierException ( "Propery name must be at most 20 characters" );

    //Validando email
    if ( !email ) throw new SuplierException ("Propey email is missing");
    if ( typeof email !== "string" ) throw new SuplierException ( "Name must be a string" );
    if ( email.length >40 ) throw new SuplierException ( "Propery name must be at most 40 characters" );
    if ( email.length <15 ) throw new SuplierException ( "Propery name must be at least 15 characters" );

    //Validando  phoneNumber
    if ( ! phoneNumber ) throw new SuplierException ("propery  phoneNumber is missing" );
    if ( typeof  phoneNumber !== "number" ) throw new SuplierException ( "PhoneNumber must be a number" );

    //Validando address
    if ( !address ) throw new SuplierException ("propery address is missing" );
    if ( typeof address !== "string" ) throw new SuplierException ( "address must be a number" );
    if ( address.length <5 ) throw new SuplierException ( "Propery name must be at least 5 characters" );
    if ( address.length >30 ) throw new SuplierException ( "Propery name must be at most 30 characters" );
}
export default {validateSaleImput} ;