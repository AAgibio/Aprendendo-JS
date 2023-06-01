const fabricantes = ['Mercedes', 'Audi', 'BMW']

function imprimir(nome, indice) {
    console.log(`${indice + 1}. ${nome}`);
}

fabricantes.forEach(imprimir)
fabricantes.forEach(function(a, b, c, d) {
    console.log(a) //Parametro 1 de um Array: Itens
    console.log(b) //Parametro 2 de um Array: Indice
    console.log(c) //Parametro 3 de um Array: Array completo
    console.log(d) //Parametro 4 de um Array: undefined
})
fabricantes.forEach(fabricantes => console.log(fabricantes))