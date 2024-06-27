const alunos = [
    { nome: 'Joao', nota: 9.2, bolsista: true },
    { nome: 'Ana', nota: 7.3, bolsista: false },
    { nome: 'Maria', nota: 4.8, bolsista: true },
    { nome: 'Mateus', nota: 8.1, bolsista: false },
]

//Todos são bolsistas?

const todosBolsistas = (valorInicial, bolsista) => valorInicial && bolsista
console.log(alunos.map(a => a.bolsista).reduce(todosBolsistas))

// Algum é bolsista?

const algumBolsista = (valorInicial, bolsista) => valorInicial || bolsista
console.log(alunos.map(a => a.bolsista).reduce(algumBolsista))
