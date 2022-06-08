const button = document.getElementById('button');
const input1 = document.getElementById('input1') as HTMLInputElement;
const input2 = document.getElementById('input2') as HTMLInputElement;

function somaValidaComPrint(numero1: number, numero2: number, printarResultado: boolean, frase: string) { 
    const resultado = numero1 + numero2;
    if (printarResultado) {
        console.log(frase + resultado);
    }
    return resultado;
}

let devePrintar = true;
let frase: string = "O valor da soma é ";

if (button) {
    button.addEventListener('click', () => {
        somaValidaComPrint(Number(input1.value), Number(input2.value), devePrintar, frase);
    }); 
}