import { crearTodoHtml } from './main/js/'
import { Beneficiario, BeneficiarioList} from './main/classes'


export const beneficiarioList = new BeneficiarioList();
//* Mandar a llamar el procedimiento crearTodoHtml por cada todo
beneficiarioList.todos.forEach( crearTodoHtml );
//* todoList.todos.forEach( todo => crearTodoHtml( todo ));


/*
En reunión con Valentina, indica que es posible que sea la entidad y no el contratista quien se encargue de cargar la información en el sistema.

Respecto a los caracteres, indica que las glosas deben encontrarse definidas para cada tipo de boleta por particular

Averiguar sobre planilla de OOHH. Elaborada por Magdalena Rojas y Maribel Alvarado.

Eventualmente, para agregar valor a la unidad encargada de boletas, contar con base de datos que permita visualizar beneficiarios, 
montos de subsidio, y fecha de vencimiento.

Se debe tener en consideración los documentos que se deben adjuntar además del formulario. Dichos documentos deberán ser revisados por un
analista quien garantice que son los correctos.

Entre los documentos que se adicionan al formato, se encuentran:

Contrato de construcción protocolizado
recepción municipal
copia ingreso escrituras
garantías a prorrogar
garantías a devolver
resolución de asignación de recursos
informe supervisor
informe PSAT
Copia garantía
Informe final social (PHS)
copia inscripción de prohibiciones
Copia ingreso de la totalidad escrituración
préstamo 

*/
const usuarioTipo = ["empresa", "Asistencia Tecnica"];
const usuarioSolicitud = ["ingreso boleta", "devolucion"]; //Tipo de solicitud 
const usuarioDecreto = ["ds 10", "ds 27", "ds 49", "ds 255", "incendio"];
const anexo = [1,3,4,5];
const formulario = [
                    "ds10_Anexo1", 
                    "ds10_Anexo4", 
                    "ds10_Anexo5", 
                    
                    "ds27_Anexo3", 
                    "ds27_Anexo4", 
                    "ds27_Anexo5", 
                    
                    "ds49_Anexo1", 
                    "ds49_Anexo4", 
                    "ds49_Anexo5", 
                    
                    "ds255_Anexo3", 
                    "ds255_Anexo4", 
                    "ds255_Anexo5",

                    "incendio_Anexo1",
                    "incendio_Anexo4",
                    "incendio_Anexo5",
                ];



function calcularAnexoSwitch() {

    switch (mes) {

        case 1:

        alert ("El mes es enero");

        break;

        case 2: alert ("El mes es febrero"); break;

        case 10: alert ("El mes es octubre"); break;

        default: alert ("El mes no es enero, febrero ni octubre"); break;

    }

}


function calcularAnexoFor() {

    switch (mes) {

        case 1:

        alert ("El mes es enero");

        break;

        case 2: alert ("El mes es febrero"); break;

        case 10: alert ("El mes es octubre"); break;

        default: alert ("El mes no es enero, febrero ni octubre"); break;

    }

}
