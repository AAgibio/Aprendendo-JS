const escola = [{
    nome: 'Turma M1',
    alunos: [{
        nome: 'Gustavo',
        nota: 9.2
    }, {
        nome: 'Ana',
        nota: 10
    }]
}, {
    nome: 'Turma M2',
    alunos: [{
        nome: 'Roberto',
        nota: 1.4
    }, {
        nome: 'Rebeca',
        nota: 5.6
    }]
}]


const getNotaAluno = aluno => aluno.nota
const getNotasTurma = turma => turma.alunos.map(getNotaAluno)

const notas1 = escola.map(getNotasTurma)

console.log(notas1)

const notas2 = escola.flatMap(getNotasTurma)
console.log(notas2);