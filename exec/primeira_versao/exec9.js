/**
 * Construa uma função para um sistema de notas de uma instituição que possui a seguinte política de
 * classificação: Todo aluno recebe uma nota de 0 a 100. Alunos com nota abaixo de 40 são reprovados. As notas
 * possuem a seguinte regra de arredondamento: Se a diferença entre a nota e o próximo múltiplo de 5 for menor
 * que 3, arredondar a nota para esse próximo múltiplo de 5. Se a nota for abaixo de 38, não é feito nenhum
 * arredondamento pois esta nota resulta na reprovação do aluno. Por exemplo, a nota 84 será arredondada para
 * 85, mas a nota 29 não será arredondada por ser abaixo de 40 e não ser possível arredondamento eficiente, ou
 * seja, que evite a reprovação do aluno. No caso de a nota ser 38, o arredondamento é possível pois atingirá 40
 * e o aluno será aprovado.

 */

const sistemaDeNota = function(nota = Number) {

    const multiplosDe5 = []

    for (let num = 0; num < 21; num++) {
        let tabuada = num * 5
        multiplosDe5.push(tabuada)
    }

    if (nota < 38) {
        return console.log(`Sua nota é menor que o mínimo.`);
    } else {
        const arredondamento = (nota) => {
            for (let i = 1; i < multiplosDe5.length; i++) {
                let notaArredondada = nota - multiplosDe5[i]

                if (notaArredondada < 3) {
                    let novaNota = multiplosDe5[i]
                    return console.log(novaNota);
                }
            }
            return console.log(nota);
        }
        arredondamento(nota)
    }
}

sistemaDeNota(37)