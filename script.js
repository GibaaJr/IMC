// Variables

const form = document.querySelector('form'); 
const inputWeight = document.querySelector('#weight');
const inputHeight = document.querySelector('#height');

const Modal = {

    wrapper: document.querySelector('.modal-wrapper'),
    message: document.querySelector('.modal .title span'),
    buttonClose: document.querySelector('.modal button.close'),

    open() {
        Modal.wrapper.classList.add('open')
    },
    close() {
        Modal.wrapper.classList.remove('open')
    }
}


// eventos
form.onsubmit = (e) => {
    e.preventDefault()
    
    const weight = inputWeight.value
    const height = inputHeight.value
    
    const result = IMC(weight, height)
    const message = `O seu IMC é de ${result}`

    
    // modalWrapper.classList.add('open')
    Modal.open();
    Modal.message.innerText = message
}

Modal.buttonClose.onclick = () => {
    // modalWrapper.classList.remove('open')
    Modal.close()
}


// Funções
function IMC(weight, height) {
    return (weight / ((height / 100)** 2)).toFixed(2)
}
