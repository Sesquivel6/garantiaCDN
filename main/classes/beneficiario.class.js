
export class Beneficiario {

    static fromJson ({ id, rut, paterno, materno, monto_subsidio, ahorro, disponible }) {

        const tempBeneficiario = new Beneficiario( rut, paterno, materno, monto_subsidio, ahorro );

        tempBeneficiario.id = id;
        tempBeneficiario.rut = rut;
        tempBeneficiario.paterno = paterno;
        tempBeneficiario.materno = materno;
        tempBeneficiario.monto_subsidio = monto_subsidio;
        tempBeneficiario.ahorro = ahorro;
        tempBeneficiario.disponible = disponible;

        return tempBeneficiario;
    }

    constructor ( rut, paterno, materno, monto_subsidio, ahorro ) {

        this.rut = rut ;
        this.paterno = paterno;
        this.materno = materno;
        this.monto_subsidio = monto_subsidio;
        this.ahorro = ahorro;


        this.id = new Date().getTime();
        this.disponible = false;

    }
}