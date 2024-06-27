/**
 * Pedro joga N jogos de basquete por temporada. Para saber como está ele está progredindo, ele mantém
 * registro de todos os as pontuações feitas por jogo. Após cada jogo ele anota no novo valor e confere se o
 * mesmo é maior ou menor que seu melhor e pior desempenho. Dada uma lista string = “pontuação1 pontuação2
 * pontuação3 etc..”, escreva uma função que ao recebê-la irá comparar os valores um a um e irá retornar um
 * vetor com o número de vezes que ele bateu seu recorde de maior número de pontos e quando fez seu pior
 * jogo. (Número do pior jogo).
 */

const pontuacao = '10 20 20 8 25 3 0 30 1'

const validaPontacao = function(lista = String) {

    const array = lista.split(' ')
    let recorde = 0
    let indicePiorJogo = 0
    let piorJogo = array[0]

    for (let index = 1; index < array.length; index++) {
        if (parseInt(array[index]) > parseInt(array[index - 1])){
            recorde++
        }
        if (array[index] < piorJogo) {
            piorJogo = array[index]
            indicePiorJogo = index
        }
    }
    console.log(`Você bateu seu recorde ${recorde} vezes, e sua menor pontuação foi no jogo ${indicePiorJogo + 1}.`);
}

validaPontacao(pontuacao)