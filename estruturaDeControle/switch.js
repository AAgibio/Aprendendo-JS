const imprimeResultado = function (nota) {
    const a = 10
    switch (Math.floor(nota)) {

    
        case a = 10: case 9:
            console.log('Quadro de Honra')
            break
        case 8: case 7:
            console.log('Aprovado')
            break
        case 6: case 5: case 4:
            console.log('Recuperação')
            break
        case 3: case 2: case 1: case 0: 
            console.log('Reprovado');
            break
        default:
            console.log('Nota inválida')
    }
}

imprimeResultado(9)
imprimeResultado(10)
imprimeResultado(8.9)
imprimeResultado(5.63)
imprimeResultado(2.433)
imprimeResultado(11)
imprimeResultado(-1)