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





// WIZARD 

$(".tab-wizard").steps({
    headerTag: "h6"
    , bodyTag: "section"
    , transitionEffect: "fade"
    , titleTemplate: '<span class="step">#index#</span> #title#'
    , labels: {
        finish: "Submit"
    }
    , onFinished: function (event, currentIndex) {
       swal("Form Submitted!", "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed lorem erat eleifend ex semper, lobortis purus sed.");
            
    }
});


var form = $(".validation-wizard").show();

$(".validation-wizard").steps({
    headerTag: "h6"
    , bodyTag: "section"
    , transitionEffect: "fade"
    , titleTemplate: '<span class="step">#index#</span> #title#'
    , labels: {
        finish: "Submit"
    }
    , onStepChanging: function (event, currentIndex, newIndex) {
        return currentIndex > newIndex || !(3 === newIndex && Number($("#age-2").val()) < 18) && (currentIndex < newIndex && (form.find(".body:eq(" + newIndex + ") label.error").remove(), form.find(".body:eq(" + newIndex + ") .error").removeClass("error")), form.validate().settings.ignore = ":disabled,:hidden", form.valid())
    }
    , onFinishing: function (event, currentIndex) {
        return form.validate().settings.ignore = ":disabled", form.valid()
    }
    , onFinished: function (event, currentIndex) {
         swal("Form Submitted!", "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed lorem erat eleifend ex semper, lobortis purus sed.");
    }
}), $(".validation-wizard").validate({
    ignore: "input[type=hidden]"
    , errorClass: "text-danger"
    , successClass: "text-success"
    , highlight: function (element, errorClass) {
        $(element).removeClass(errorClass)
    }
    , unhighlight: function (element, errorClass) {
        $(element).removeClass(errorClass)
    }
    , errorPlacement: function (error, element) {
        error.insertAfter(element)
    }
    , rules: {
        email: {
            email: !0
        }
    }
})