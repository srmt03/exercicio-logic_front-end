'use strict'

function transformarNumero() {
    const number1 = parseFloat(document.getElementById('number1').value)
    const formExerc = document.getElementById('form-ex2')
    const resultado = document.getElementById('result')
    let avalia
    if(formExerc.reportValidity()){
        if (number1 < 0) {
            avalia = number1 * -1
            resultado.textContent = `O resultado dessa operacao é: ${avalia}`
        }else{
            avalia = number1 * -1
            resultado.textContent = `O resultado essa operacao é: ${avalia}`
        }
    }
}
const transformar = document.getElementById('transformar').addEventListener('click', transformarNumero)