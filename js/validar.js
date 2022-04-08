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
    console.log(tipoDeInput)
    console.log(input.validity)

    if(input.validity.valid){
        input.parentElement.classList.remove("input-container--invalid");
        console.log(input.parentElement)
        input.parentElement.querySelector(".input-message-error").innerHTML = "";
        console.log(input.parentElement)

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
            console.log(error)
            console.log(input.validity[error])
            console.log(mensajesDeError[tipoDeInput][error])
            mensaje = mensajesDeError[tipoDeInput][error]
        }
    });
    return mensaje
}