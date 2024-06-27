const alunos = [
    { nome: 'Joao', nota: 9.2, bolsista: true },
    { nome: 'Ana', nota: 7.3, bolsista: false },
    { nome: 'Maria', nota: 4.8, bolsista: true },
    { nome: 'Mateus', nota: 8.1, bolsista: false },
]

const resultado = alunos.map(a => a.nota).reduce(function(acumulador , atual) {
    console.log(acumulador, atual)
    return acumulador + atual
})