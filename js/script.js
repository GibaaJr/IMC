import { Modal } from './modal.js'
import { AlertError } from "./alert-error.js"
import { calculateIMC, notANumber } from "./utils.js"


// Variables
const form = document.querySelector('form'); 
const inputWeight = document.querySelector('#weight');
const inputHeight = document.querySelector('#height');

// eventos
form.onsubmit = (e) => {
    e.preventDefault()
    
    const weight = inputWeight.value;
    const height = inputHeight.value;

    const weightOrHeightIsNotANumber = notANumber(weight) || notANumber(height);

    if (weightOrHeightIsNotANumber) {
        AlertError.open();
        return;
    }

    AlertError.close()
    
    const result = calculateIMC(weight, height)
    displayResultMessage(result)
   
}

inputWeight.oninput = () => AlertError.close()
inputHeight.oninput = () => AlertError.close()

function displayResultMessage(result) {
    const message = `O seu IMC é de ${result}`

    
    Modal.open();
    Modal.message.innerText = message
}