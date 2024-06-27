/**
 
 * Os triângulos podem ser classificados em 3 tipos quanto ao tamanho de seus lados:
 * Equilátero: Os três lados são iguais. 
 * Isósceles: Dois lados iguais.
 * Escaleno: Todos os lados são diferentes.
 * Crie uma função que recebe os comprimentos dos três lados de um triângulo e retorne sua classificação 
 * quanto ao tamanho de seus lados. (Neste exemplo deve-se abstrair as condições matemáticas de 
 * existência de um triângulo).

 */

const getClassificacao = function () {
    
    this.classifica = function (x, y, z) {
    const equilatero = (x == y && y == z)
    const isoceles = ((x == y && y != z) || (x == z && y != x) || (y == z && x != z))
    const escaleno = (x != y && y != z && x != z)

    switch (true) {
        case equilatero:
            console.log(`O Objeto com as medidas ${x}, ${y}, ${z}, é Equilátero`)
            break;

        case isoceles:
            console.log(`O Objeto com as medidas ${x}, ${y}, ${z}, é Isoceles`)
            break;

        case escaleno:
            console.log(`O Objeto com as medidas ${x}, ${y}, ${z}, é Escaleno`)
            break;
    }
    }
    
}

const triangulo = new getClassificacao()

triangulo.classifica(1, 1, 4)
triangulo.classifica(1, 1, 1)
triangulo.classifica(3, 1, 4)