const somentePares = function(array) {
    let resultado = array.filter((numero, indice) => {
        const numeroPar = numero % 2 == 0
        const indicePar = indice % 2 == 0

        return numeroPar && indicePar
    })

    return console.log(resultado);
}
somentePares([1, 2, 3, 4])
somentePares([10, 70, 22, 43])