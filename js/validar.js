const tipoDeErrores = [
    "valueMissing",
    "typeMismatch",
    "customError",
    "rangeOverflow",
    "patternMismatch"
];
const mensajesDeError = {
    name: {
        valueMissing: "Este campo no puede estar vacío",
        rangeOverflow: "El nombre debe tener menos de 50 caracteres",
    },
    email: {
        valueMissing: "Este campo no puede estar vacío",
        typeMismatch: "El correo debe tener formato de texto@texto.com",
        patternMismatch: "El correo debe tener formato de texto@texto.com"
    },
    subject: {
        valueMissing: "Este campo no puede estar vacío",
        rangeOverflow: "El asunto debe tener menos de 50 caracteres",
    },
    message: {
        valueMissing: "Este campo no puede estar vacío",
        rangeOverflow: "El asunto debe tener menos de 300 caracteres",
    }, 
}
export function validar(input) {
    const tipoDeInput = input.dataset.tipo;
    if(input.validity.valid){
        input.parentElement.classList.remove("input-container--invalid");
        input.parentElement.querySelector(".input-message-error").innerHTML = "";
    }else{
        input.parentElement.classList.add("input-container--invalid");
        input.parentElement.querySelector(".input-message-error").innerHTML = mostrarMensajeDeError(tipoDeInput, input);
    }
}
function mostrarMensajeDeError(tipoDeInput, input){    
    let mensaje = "";
    tipoDeErrores.forEach( error => {
        const validity = input.validity
        if(validity[error]){
            mensaje = mensajesDeError[tipoDeInput][error]
        }
    });
    return mensaje
}