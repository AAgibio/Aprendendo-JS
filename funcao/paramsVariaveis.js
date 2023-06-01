function soma() {
    let soma = 0
    for (i in arguments) {
        soma += arguments[i]
    }
    return soma
}
console.log(`Soma = ${soma(2, 3, 4, 5)}`);
console.log(`Soma = ${soma(2)}`);
console.log(`Soma = ${soma()}`);
console.log(`Soma = ${soma(2.3, 1.2, 'Teste')}`);
console.log(`Soma = ${soma(2.2, 3.2, 4.1, 5.1)}`);
