//Estratégia 1 de geração de valor padrão
function soma1(a, b, c) {
    a = a || 1
    b = b || 1
    c = c || 1
    return a + b + c
}

console.log(`Soma 1 = ${soma1()}, ${soma1(3)}, ${soma1(3, 4)}, ${soma1(3, 4, 5)}`);

//Estratégias 2, 3 e 4 para geração de valor padrão
function soma2 (a, b, c) {
    a = a != undefined ? a : 1
    b = 1 in arguments ? b : 1
    c = isNaN(c) ? 1 : c
    return a + b + c
}

console.log(`Soma 2 = ${soma2()}, ${soma2(2)}, ${soma2(1, 2, 3)}, ${soma2(0, 0, 0)}`);

//Valor padrão EC2015
function soma3 (a = 1, b = 1, c = 1) {
    return a + b + c
}

console.log(`Soma 3 = ${soma3()}, ${soma3(2, 3)}`);