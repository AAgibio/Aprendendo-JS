/**
 * Crie uma função que irá receber dois valores, o dividendo e o divisor. 
 * A função deverá imprimir o resultado e o resto da divisão destes dois valores.
 */

const getDividendo = function(a, b) {
    let result = a / b
    let resto = a % b
    console.log(`A divisão de ${a} e ${b} é: ${result} e o resto é: ${resto}`);
}

getDividendo(4, 2)