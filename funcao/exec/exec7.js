/**
 * Uma das vantagens da programação é a automatização de tarefas que não gostamos de realizar. Dito isto,
* elabore uma função cujo objetivo é resolver a fórmula de Bhaskara. Para isso, sua função deve receber três
* parâmetros, “ax²”, “bx” e “c”, de tal modo que na equação: 3x² - 5x + 12 os valores seriam respectivamente: 3,
*-5, 12. Como retorno deve ser passado um vetor que tem 2 valores um para cada possível resultado, mesmo
* que os resultados sejam iguais. Caso o delta seja negativo, retorne, ao invés do vetor, um string com a frase:
* “Delta é negativo”.
 */

const getBhaskara = function(a, b, c) {
    let delta = (b * b) - 4 * a * c

    const equacaoValorPositivo = (((-b) + Math.sqrt(delta)) / 2 * a).toFixed(2)
    const equacaoValorNegativo = (((-b) - Math.sqrt(delta)) / 2 * a).toFixed(2)
    
    const valida = delta > 0 ? `Valor positivo: ${equacaoValorPositivo}, Valor negativo: ${equacaoValorNegativo}` : "Delta é negativo"
    console.log(valida);

}
getBhaskara(3, -5, 12)
getBhaskara(1, 5, 1)