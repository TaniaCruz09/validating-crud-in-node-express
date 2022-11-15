export class SaleException extends Error {
    constructor(message: string) {
        super(message);
        this.name = "SaleException";
    }
    }
    