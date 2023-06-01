/** 
 * Crie uma função que verifica se um número inteiro passado como parêmetro é divisível por 3 e retorne true
 * ou false.
 */

const verificaDivisao = nota => {
    let divisao = nota % 3
    if (divisao > 1) {
        divisao = false
        return console.log(divisao);
    } else {
        divisao = true
        return console.log(divisao);
    }
}
verificaDivisao(8)