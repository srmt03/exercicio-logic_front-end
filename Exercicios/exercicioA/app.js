'use strict'

function mostrarDiferenca() {
    const number1 = document.getElementById('number1').value
    const number2 = document.getElementById('number2').value
    const formEx1 = document.getElementById('form-ex1')
    const result = document.getElementById('result')

    if (formEx1.reportValidity())
    {
        if (number1 > number2) 
        {
            const subtracao = number1 - number2;
            result.textContent = `O resultado da subtração é ${subtracao}`
        } 
        else 
        {
            subtracao = number2 - number1;
            result.textContent = `O resultado da subtração é ${subtracao}`
        }
    }
}
const calcular = document.getElementById('calcular').addEventListener('click', mostrarDiferenca)
