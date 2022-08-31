'use strict'

function leitorFaixa() {
    const number1 = parseFloat(document.getElementById('number1').value)
    const formExerc = document.getElementById('form-ex4')
    const resultado = document.getElementById('result')
    
    if(formExerc.reportValidity()){
        if (number1 > 9 || number1 < 1) {
            resultado.textContent = `O valor está fora da faixa`
        }else{
            resultado.textContent = `O valor está na faixa permitida`
        }
    }
}
const calcular = document.getElementById('calcular').addEventListener('click', leitorFaixa)
