import { validar } from "./validar.js";
const inputs = document.querySelectorAll("input");
const textarea = document.getElementById("message")
console.log(textarea)
console.log(inputs)
inputs.forEach(input => {
    input.addEventListener("blur", (input) => {
        validar(input.target)
        
    })
})
textarea.addEventListener("blur", (textarea) => {
    validar(textarea.target)
    
})
