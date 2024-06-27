/**
 * Crie uma função que recebe dois parâmetros, base e expoente, e retorne a base elevada ao expoente.
 */

const getExpoente = function(b, e) {
    let result = b ** e
    console.log(`Resultado da base ${b} e do expoente ${e} é: ${result}`);
}

getExpoente(3, 4)