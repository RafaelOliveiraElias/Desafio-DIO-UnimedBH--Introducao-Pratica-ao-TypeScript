"use strict";
var button = document.getElementById('button');
var input1 = document.getElementById('input1');
var input2 = document.getElementById('input2');
function somaValidaComPrint(numero1, numero2, printarResultado, frase) {
    var resultado = numero1 + numero2;
    if (printarResultado) {
        console.log(frase + resultado);
    }
    return resultado;
}
var devePrintar = true;
var frase = "O valor da soma é ";
if (button) {
    button.addEventListener('click', function () {
        somaValidaComPrint(Number(input1.value), Number(input2.value), devePrintar, frase);
    });
}
